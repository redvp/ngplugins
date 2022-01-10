# Angular Dynamic Plugins

## Objective

Load prebuilt external UMD modules at runtime into an Angular app.
At build time the app has no information whatsoever concerning these modules.

Based on [lmeijdam](https://github.com/lmeijdam/angular-umd-dynamic-example)'s work.

Related to this closed [issue](https://github.com/ng-packagr/ng-packagr/issues/2000).

## Installation

package.json is in the root folder.

## Building the external modules

Initially, you will find in the main app's assets 2 example modules.
You can also build the modules yourself using the provided worskpace under projects/plugins.

## Serving the app

cd projects/ngpluginsrepro && ng serve.
