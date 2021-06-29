(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('modulea', ['exports', '@angular/core', '@angular/router'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.modulea = {}, global.ng.core, global.ng.router));
}(this, (function (exports, i0, router) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/i0;

    var ModuleaService = /** @class */ (function () {
        function ModuleaService() {
        }
        return ModuleaService;
    }());
    ModuleaService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function ModuleaService_Factory() { return new ModuleaService(); }, token: ModuleaService, providedIn: "root" });
    ModuleaService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    ModuleaService.ctorParameters = function () { return []; };

    var ModuleaComponent = /** @class */ (function () {
        function ModuleaComponent() {
        }
        ModuleaComponent.prototype.ngOnInit = function () { };
        return ModuleaComponent;
    }());
    ModuleaComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-modulea',
                    template: "<h1> Application Int\u00E9grateur</h1>\r\n<section class=\"mat-typography\">\r\n\r\n  <h1> Proc\u00E9dure Int\u00E9grateur demonstration</h1>\r\n\r\n  <div class=\"form\">\r\n    <input type=\"text\"\r\n           placeholder=\"Text 1\">\r\n  </div>\r\n  <div class=\"form\">\r\n    <input type=\"text\"\r\n           placeholder=\"Text 2\">\r\n  </div>\r\n  <div class=\"form\">\r\n    <input type=\"text\"\r\n           placeholder=\"Text 3\">\r\n  </div>\r\n  <div class=\"button\">\r\n    <button mat-button> Int\u00E9grateur Button </button>\r\n  </div>\r\n\r\n</section>\r\n",
                    styles: ["div,h1{border-radius:5px;margin:20px auto;padding:5px;width:60%}div,div.button,h1{text-align:center}"]
                },] }
    ];
    ModuleaComponent.ctorParameters = function () { return []; };

    var ModuleaModule = /** @class */ (function () {
        function ModuleaModule() {
        }
        return ModuleaModule;
    }());
    ModuleaModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [
                        router.RouterModule.forChild([
                            {
                                path: '',
                                pathMatch: 'full',
                                component: ModuleaComponent,
                            },
                        ]),
                    ],
                    declarations: [ModuleaComponent],
                    exports: [ModuleaComponent],
                    providers: [ModuleaService],
                },] }
    ];

    /*
     * Public API Surface of modulea
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ModuleaComponent = ModuleaComponent;
    exports.ModuleaModule = ModuleaModule;
    exports.ModuleaService = ModuleaService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=modulea.umd.js.map
