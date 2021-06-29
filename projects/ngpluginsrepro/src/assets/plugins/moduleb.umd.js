(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('moduleb', ['exports', '@angular/core', '@angular/router'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.moduleb = {}, global.ng.core, global.ng.router));
}(this, (function (exports, i0, i1) { 'use strict';

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
    var i1__namespace = /*#__PURE__*/i1;

    var ModulebService = /** @class */ (function () {
        function ModulebService() {
        }
        return ModulebService;
    }());
    ModulebService.ɵfac = function ModulebService_Factory(t) { return new (t || ModulebService)(); };
    ModulebService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: ModulebService, factory: ModulebService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(ModulebService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root',
                    }]
            }], function () { return []; }, null);
    })();

    var ModulebComponent = /** @class */ (function () {
        function ModulebComponent() {
        }
        ModulebComponent.prototype.ngOnInit = function () { };
        return ModulebComponent;
    }());
    ModulebComponent.ɵfac = function ModulebComponent_Factory(t) { return new (t || ModulebComponent)(); };
    ModulebComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({ type: ModulebComponent, selectors: [["lib-moduleb"]], decls: 2, vars: 0, template: function ModulebComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "p");
                i0__namespace.ɵɵtext(1, "moduleb works!");
                i0__namespace.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(ModulebComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-moduleb',
                        template: " <p>moduleb works!</p> ",
                        styles: [],
                    }]
            }], function () { return []; }, null);
    })();

    var ModulebModule = /** @class */ (function () {
        function ModulebModule() {
        }
        return ModulebModule;
    }());
    ModulebModule.ɵmod = i0__namespace.ɵɵdefineNgModule({ type: ModulebModule });
    ModulebModule.ɵinj = i0__namespace.ɵɵdefineInjector({ factory: function ModulebModule_Factory(t) { return new (t || ModulebModule)(); }, imports: [[
                i1.RouterModule.forChild([
                    {
                        path: '',
                        pathMatch: 'full',
                        component: ModulebComponent,
                    },
                ]),
            ]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(ModulebModule, { declarations: [ModulebComponent], imports: [i1__namespace.RouterModule], exports: [ModulebComponent] }); })();
    /*@__PURE__*/ (function () {
        i0__namespace.ɵsetClassMetadata(ModulebModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [ModulebComponent],
                        imports: [
                            i1.RouterModule.forChild([
                                {
                                    path: '',
                                    pathMatch: 'full',
                                    component: ModulebComponent,
                                },
                            ]),
                        ],
                        exports: [ModulebComponent],
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of moduleb
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ModulebComponent = ModulebComponent;
    exports.ModulebModule = ModulebModule;
    exports.ModulebService = ModulebService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=moduleb.umd.js.map
