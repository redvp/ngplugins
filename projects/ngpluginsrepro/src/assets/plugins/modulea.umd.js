(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(exports, require("@angular/core"), require("@angular/router"))
    : typeof define === "function" && define.amd
    ? define(
        "modulea",
        ["exports", "@angular/core", "@angular/router"],
        factory
      )
    : ((global = global || self),
      factory((global.modulea = {}), global.ng.core, global.ng.router));
})(this, function (exports, i0, i1) {
  "use strict";

  var ModuleaService = /** @class */ (function () {
    function ModuleaService() {}
    return ModuleaService;
  })();
  ModuleaService.ɵfac = function ModuleaService_Factory(t) {
    return new (t || ModuleaService)();
  };
  ModuleaService.ɵprov = i0.ɵɵdefineInjectable({
    token: ModuleaService,
    factory: ModuleaService.ɵfac,
    providedIn: "root",
  });
  /*@__PURE__*/ (function () {
    i0.ɵsetClassMetadata(
      ModuleaService,
      [
        {
          type: i0.Injectable,
          args: [
            {
              providedIn: "root",
            },
          ],
        },
      ],
      function () {
        return [];
      },
      null
    );
  })();

  var ModuleaComponent = /** @class */ (function () {
    function ModuleaComponent() {}
    ModuleaComponent.prototype.ngOnInit = function () {};
    return ModuleaComponent;
  })();
  ModuleaComponent.ɵfac = function ModuleaComponent_Factory(t) {
    return new (t || ModuleaComponent)();
  };
  ModuleaComponent.ɵcmp = i0.ɵɵdefineComponent({
    type: ModuleaComponent,
    selectors: [["lib-modulea"]],
    decls: 14,
    vars: 0,
    consts: [
      [1, "mat-typography"],
      [1, "form"],
      ["type", "text", "placeholder", "Text 1"],
      ["type", "text", "placeholder", "Text 2"],
      ["type", "text", "placeholder", "Text 3"],
      [1, "button"],
      ["mat-button", ""],
    ],
    template: function ModuleaComponent_Template(rf, ctx) {
      if (rf & 1) {
        i0.ɵɵelementStart(0, "h1");
        i0.ɵɵtext(1, " Application Int\u00E9grateur");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "section", 0);
        i0.ɵɵelementStart(3, "h1");
        i0.ɵɵtext(4, " Proc\u00E9dure Int\u00E9grateur demonstration");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 1);
        i0.ɵɵelement(6, "input", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 1);
        i0.ɵɵelement(8, "input", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 1);
        i0.ɵɵelement(10, "input", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 5);
        i0.ɵɵelementStart(12, "button", 6);
        i0.ɵɵtext(13, " Int\u00E9grateur Button ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
      }
    },
    styles: [
      "div[_ngcontent-%COMP%], h1[_ngcontent-%COMP%]{border-radius:5px;margin:20px auto;padding:5px;width:60%}div[_ngcontent-%COMP%], div.button[_ngcontent-%COMP%], h1[_ngcontent-%COMP%]{text-align:center}",
    ],
  });
  /*@__PURE__*/ (function () {
    i0.ɵsetClassMetadata(
      ModuleaComponent,
      [
        {
          type: i0.Component,
          args: [
            {
              selector: "lib-modulea",
              templateUrl: "./modulea.html",
              styleUrls: ["./modulea.scss"],
            },
          ],
        },
      ],
      function () {
        return [];
      },
      null
    );
  })();

  var ModuleaModule = /** @class */ (function () {
    function ModuleaModule() {}
    return ModuleaModule;
  })();
  ModuleaModule.ɵmod = i0.ɵɵdefineNgModule({ type: ModuleaModule });
  ModuleaModule.ɵinj = i0.ɵɵdefineInjector({
    factory: function ModuleaModule_Factory(t) {
      return new (t || ModuleaModule)();
    },
    providers: [ModuleaService],
    imports: [
      [
        i1.RouterModule.forChild([
          {
            path: "",
            pathMatch: "full",
            component: ModuleaComponent,
          },
        ]),
      ],
    ],
  });
  (function () {
    (typeof ngJitMode === "undefined" || ngJitMode) &&
      i0.ɵɵsetNgModuleScope(ModuleaModule, {
        declarations: [ModuleaComponent],
        imports: [i1.RouterModule],
        exports: [ModuleaComponent],
      });
  })();
  /*@__PURE__*/ (function () {
    i0.ɵsetClassMetadata(
      ModuleaModule,
      [
        {
          type: i0.NgModule,
          args: [
            {
              imports: [
                i1.RouterModule.forChild([
                  {
                    path: "",
                    pathMatch: "full",
                    component: ModuleaComponent,
                  },
                ]),
              ],
              declarations: [ModuleaComponent],
              exports: [ModuleaComponent],
              providers: [ModuleaService],
            },
          ],
        },
      ],
      null,
      null
    );
  })();

  /*
   * Public API Surface of modulea
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.ModuleaComponent = ModuleaComponent;
  exports.ModuleaModule = ModuleaModule;
  exports.ModuleaService = ModuleaService;

  Object.defineProperty(exports, "__esModule", { value: true });
});
//# sourceMappingURL=modulea.umd.js.map
