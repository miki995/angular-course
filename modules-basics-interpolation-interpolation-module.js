(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-basics-interpolation-interpolation-module"],{

/***/ "1lA5":
/*!***********************************************************************************!*\
  !*** ./src/modules/basics/interpolation/interpolation/interpolation.component.ts ***!
  \***********************************************************************************/
/*! exports provided: InterpolationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterpolationComponent", function() { return InterpolationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class InterpolationComponent {
    constructor() {
        this.title = 'Interpolation Title';
        this.number1 = 2;
        this.number2 = 15;
        this.imageBase = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/';
        this.imageSrc = 'Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png';
    }
}
InterpolationComponent.ɵfac = function InterpolationComponent_Factory(t) { return new (t || InterpolationComponent)(); };
InterpolationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InterpolationComponent, selectors: [["app-interpolation"]], decls: 6, vars: 3, consts: [[1, "simple-interpolation"], [1, "expression-interpolation"], [1, "image-interpolation"], ["width", "400px", "height", "400px", 3, "src"]], template: function InterpolationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.number1 + ctx.number2, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imageBase + ctx.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".simple-interpolation[_ngcontent-%COMP%] {\r\n  color: blueviolet;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tb2R1bGVzL2Jhc2ljcy9pbnRlcnBvbGF0aW9uL2ludGVycG9sYXRpb24vaW50ZXJwb2xhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9tb2R1bGVzL2Jhc2ljcy9pbnRlcnBvbGF0aW9uL2ludGVycG9sYXRpb24vaW50ZXJwb2xhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpbXBsZS1pbnRlcnBvbGF0aW9uIHtcclxuICBjb2xvcjogYmx1ZXZpb2xldDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterpolationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-interpolation',
                templateUrl: './interpolation.component.html',
                styleUrls: ['./interpolation.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "yTyd":
/*!******************************************************************!*\
  !*** ./src/modules/basics/interpolation/interpolation.module.ts ***!
  \******************************************************************/
/*! exports provided: InterpolationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterpolationModule", function() { return InterpolationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _interpolation_interpolation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interpolation/interpolation.component */ "1lA5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");






const routes = [
    {
        path: '',
        component: _interpolation_interpolation_component__WEBPACK_IMPORTED_MODULE_2__["InterpolationComponent"]
    }
];
class InterpolationModule {
}
InterpolationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InterpolationModule });
InterpolationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InterpolationModule_Factory(t) { return new (t || InterpolationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InterpolationModule, { declarations: [_interpolation_interpolation_component__WEBPACK_IMPORTED_MODULE_2__["InterpolationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterpolationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _interpolation_interpolation_component__WEBPACK_IMPORTED_MODULE_2__["InterpolationComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-basics-interpolation-interpolation-module.js.map