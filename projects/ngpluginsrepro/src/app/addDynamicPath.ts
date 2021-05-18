import { Route } from '@angular/router';

export function addDynamicPath(
  config: Route[],
  route: Route,
  modulePath: string,
  subPath?: string
): Promise<Route[]> {
  return new Promise((resolve, reject) => {
    // Trigger change detection so _loadedConfig is available in router
    setTimeout(() => {
      let configIsChanged = false;
      const appListModule: any = config.find(
        (child) => (child as any)._loadedConfig && child.path === modulePath
      );
      if (
        appListModule !== undefined &&
        (appListModule as any)._loadedConfig !== undefined
      ) {
        const appsSubPath = (appListModule as any)._loadedConfig.routes.find(
          (item) => item.path === subPath
        );
        if (appsSubPath !== undefined) {
          appsSubPath.children.push(route);
          configIsChanged = true;
        }
      }
      if (configIsChanged) {
        resolve(config);
      }
      resolve(null);
    }, 500);
  });
}
