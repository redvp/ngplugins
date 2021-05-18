(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(exports, require("@angular/core"), require("@angular/router"))
    : typeof define === "function" && define.amd
    ? define(
        "modulea",
        ["exports", "@angular/core", "@angular/router"],
        factory
      )
    : ((global =
        typeof globalThis !== "undefined" ? globalThis : global || self),
      factory((global.modulea = {}), global.ng.core, global.ng.router));
})(this, function (exports, i0, i1) {
  "use strict";

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== "default") {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(
            n,
            k,
            d.get
              ? d
              : {
                  enumerable: true,
                  get: function () {
                    return e[k];
                  },
                }
          );
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }

  var i0__namespace = /*#__PURE__*/ _interopNamespace(i0);
  var i1__namespace = /*#__PURE__*/ _interopNamespace(i1);

  var ModuleaService = /** @class */ (function () {
    function ModuleaService() {}
    return ModuleaService;
  })();
  ModuleaService.ɵfac = function ModuleaService_Factory(t) {
    return new (t || ModuleaService)();
  };
  ModuleaService.ɵprov = i0__namespace.ɵɵdefineInjectable({
    token: ModuleaService,
    factory: ModuleaService.ɵfac,
    providedIn: "root",
  });
  /*@__PURE__*/ (function () {
    i0__namespace.ɵsetClassMetadata(
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
  ModuleaComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({
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
        i0__namespace.ɵɵelementStart(0, "h1");
        i0__namespace.ɵɵtext(1, " Application Int\u00E9grateur");
        i0__namespace.ɵɵelementEnd();
        i0__namespace.ɵɵelementStart(2, "section", 0);
        i0__namespace.ɵɵelementStart(3, "h1");
        i0__namespace.ɵɵtext(
          4,
          " Proc\u00E9dure Int\u00E9grateur demonstration"
        );
        i0__namespace.ɵɵelementEnd();
        i0__namespace.ɵɵelementStart(5, "div", 1);
        i0__namespace.ɵɵelement(6, "input", 2);
        i0__namespace.ɵɵelementEnd();
        i0__namespace.ɵɵelementStart(7, "div", 1);
        i0__namespace.ɵɵelement(8, "input", 3);
        i0__namespace.ɵɵelementEnd();
        i0__namespace.ɵɵelementStart(9, "div", 1);
        i0__namespace.ɵɵelement(10, "input", 4);
        i0__namespace.ɵɵelementEnd();
        i0__namespace.ɵɵelementStart(11, "div", 5);
        i0__namespace.ɵɵelementStart(12, "button", 6);
        i0__namespace.ɵɵtext(13, " Int\u00E9grateur Button ");
        i0__namespace.ɵɵelementEnd();
        i0__namespace.ɵɵelementEnd();
        i0__namespace.ɵɵelementEnd();
      }
    },
    styles: [
      "div[_ngcontent-%COMP%], h1[_ngcontent-%COMP%]{border-radius:5px;margin:20px auto;padding:5px;width:60%}div[_ngcontent-%COMP%], div.button[_ngcontent-%COMP%], h1[_ngcontent-%COMP%]{text-align:center}",
    ],
  });
  /*@__PURE__*/ (function () {
    i0__namespace.ɵsetClassMetadata(
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
  ModuleaModule.ɵmod = i0__namespace.ɵɵdefineNgModule({ type: ModuleaModule });
  ModuleaModule.ɵinj = i0__namespace.ɵɵdefineInjector({
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
      i0__namespace.ɵɵsetNgModuleScope(ModuleaModule, {
        declarations: [ModuleaComponent],
        imports: [i1__namespace.RouterModule],
        exports: [ModuleaComponent],
      });
  })();
  /*@__PURE__*/ (function () {
    i0__namespace.ɵsetClassMetadata(
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
