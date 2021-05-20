import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { addDynamicPath } from './addDynamicPath';
import { ModuleData } from './module.model';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  existingRoutes$: BehaviorSubject<Route[]>;

  constructor(private router: Router) {
    this.existingRoutes$ = new BehaviorSubject<Route[]>(this.routes);
  }

  private get routes(): Route[] {
    const routesToReturn = this.router.config;
    return routesToReturn.filter((x) => x.path !== '');
  }

  createAndRegisterRoute(moduleToRegister: ModuleData, exports: any): void {
    const route: Route = {
      path: moduleToRegister.path,
      loadChildren: () => exports[`${moduleToRegister.moduleName}`],
    };
    this.registerRoute(route);
  }

  routeIsRegistered(path: string): boolean {
    return this.router.config.filter((r) => r.path === path).length > 0;
  }

  registerRoute(route: Route): void {
    if (this.routeIsRegistered(route.path)) {
      return;
    }
    const routeConfig = this.router.config;
    addDynamicPath(routeConfig, route, 'app-list', 'apps').then((config) => {
      this.updateRouteConfig(config);
    });
  }

  unRegisterRoute(path: string): void {
    this.updateRouteConfig(
      this.router.config.filter((route) => route.path !== path)
    );
  }

  private updateRouteConfig(config: Route[]): void {
    if (config !== null && config !== undefined) {
      this.router.resetConfig(config);
      this.existingRoutes$.next(this.routes);
    }
  }
}
