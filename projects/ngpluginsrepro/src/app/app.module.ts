import { BrowserModule } from '@angular/platform-browser';
import {
  Compiler,
  CompilerFactory,
  COMPILER_OPTIONS,
  NgModule,
} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';
import { InternalModule } from './internal/internal.module';
import { AppListModule } from './app-list/app-list.module';
import { HomeModule } from './home/home.module';

export function createCompiler(compilerFactory: CompilerFactory): Compiler {
  return compilerFactory.createCompiler([{ useJit: true }]);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // Feature modules
    InternalModule,
    AppListModule,
    HomeModule,
  ],
  providers: [
    { provide: COMPILER_OPTIONS, useValue: {}, multi: true },
    {
      provide: CompilerFactory,
      useClass: JitCompilerFactory,
      deps: [COMPILER_OPTIONS],
    },
    { provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory] },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
