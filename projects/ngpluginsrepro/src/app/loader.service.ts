import { Compiler } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { System } from 'systemjs';
import { ModuleData } from './module.model';

import * as AngularCore from '@angular/core';
import * as AngularCommon from '@angular/common';
import * as AngularRouter from '@angular/router';
import * as AngularHttp from '@angular/common/http';
import * as MatFormFieldModule from '@angular/material/form-field';
import * as MatButtonModule from '@angular/material/button';
import * as RxJsOperators from 'rxjs/operators';

declare const SystemJS: System;

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  public appURL = 'http://localhost:4200';
  constructor(public http: HttpClient, private readonly compiler: Compiler) {
    SystemJS.set('@angular/core', SystemJS.newModule(AngularCore));
    SystemJS.set('@angular/common', SystemJS.newModule(AngularCommon));
    SystemJS.set('@angular/router', SystemJS.newModule(AngularRouter));
    SystemJS.set('@angular/common/http', SystemJS.newModule(AngularHttp));
    SystemJS.set(
      '@angular/material/form-field',
      SystemJS.newModule(MatFormFieldModule)
    );
    SystemJS.set(
      '@angular/material/button',
      SystemJS.newModule(MatButtonModule)
    );
    SystemJS.set('rxjs/operators', SystemJS.newModule(RxJsOperators));
  }

  loadModules$(): Observable<ModuleData[]> {
    return this.http
      .get('../assets/plugins/modules.json')
      .pipe(map((res) => res as any));
  }

  loadModuleSystemJS(moduleInfo: ModuleData): Promise<any> {
    const url = `${this.appURL}/${moduleInfo.location}`;
    return SystemJS.import(url)
      .then((module) => {
        return this.compiler
          .compileModuleAndAllComponentsAsync(module[moduleInfo.moduleName])
          .then((compiled) => {
            return module;
          })
          .catch((error) => {
            console.error('ERROR in SystemJS compile with module', {
              error,
              module,
            });
            throw { error, module };
          });
      })
      .catch((error) => {
        throw error;
      });
  }
}
