import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoaderService } from './loader.service';
import { ModuleData } from './module.model';
import { RouterService } from './router.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ngpluginsrepro';

  /**
   * Observable that indicate if all modules have been installed
   */
  installedModules$: Observable<ModuleData[]>;

  constructor(
    private loaderService: LoaderService,
    private routerService: RouterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.installedModules$ = this.loaderService.loadModules$();

    this.installedModules$.subscribe((res) =>
      Promise.all(
        res.map((integratorModule) => {
          if (integratorModule.registered) {
            return this.registerRoute(integratorModule);
          } else {
            return null;
          }
        })
      )
    );
  }

  private registerRoute(moduleToEnable: ModuleData): Promise<void> {
    // load up the umd file and register the route whenever succeeded.
    return this.loaderService
      .loadModuleSystemJS(moduleToEnable)
      .then((exports) => {
        this.routerService.createAndRegisterRoute(moduleToEnable, exports);
      })
      .catch((error) => {
        throw error;
      });
  }

  navigateToApps(): void {
    this.router.navigate(['app-list']);
  }
}
