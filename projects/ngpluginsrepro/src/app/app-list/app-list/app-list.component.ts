import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css'],
})
export class AppListComponent {
  /**
   * In our case, appList is fetched from an API.
   * The API itself retrieves this list from a database
   * in which the external modules are registered.
   */
  appList: string[] = ['internal', 'modulea', 'moduleb'];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  navigate(path: string): void {
    this.router.navigate([`../apps/${path}`], {
      relativeTo: this.activatedRoute,
    });
  }
}
