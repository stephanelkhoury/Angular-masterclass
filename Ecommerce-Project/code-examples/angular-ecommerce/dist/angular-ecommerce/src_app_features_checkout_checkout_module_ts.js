"use strict";
(self["webpackChunkangular_ecommerce"] = self["webpackChunkangular_ecommerce"] || []).push([["src_app_features_checkout_checkout_module_ts"],{

/***/ 6078:
/*!**************************************************************!*\
  !*** ./src/app/features/checkout/checkout-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckoutRoutingModule: () => (/* binding */ CheckoutRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _checkout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout.component */ 5272);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _checkout_component__WEBPACK_IMPORTED_MODULE_0__.CheckoutComponent
}];
class CheckoutRoutingModule {
  static {
    this.ɵfac = function CheckoutRoutingModule_Factory(t) {
      return new (t || CheckoutRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CheckoutRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CheckoutRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5272:
/*!*********************************************************!*\
  !*** ./src/app/features/checkout/checkout.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckoutComponent: () => (/* binding */ CheckoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


class CheckoutComponent {
  static {
    this.ɵfac = function CheckoutComponent_Factory(t) {
      return new (t || CheckoutComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CheckoutComponent,
      selectors: [["app-checkout"]],
      decls: 8,
      vars: 0,
      consts: [[1, "checkout-container"], [1, "checkout-content"], ["routerLink", "/cart"]],
      template: function CheckoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Checkout");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1)(4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Checkout functionality coming soon...");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Back to Cart");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
      styles: [".checkout-container[_ngcontent-%COMP%] {\n      max-width: 800px;\n      margin: 0 auto;\n      padding: 20px;\n    }\n    button[_ngcontent-%COMP%] {\n      padding: 10px 20px;\n      background: #007bff;\n      color: white;\n      border: none;\n      border-radius: 4px;\n      cursor: pointer;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtNQUNFLGdCQUFnQjtNQUNoQixjQUFjO01BQ2QsYUFBYTtJQUNmO0lBQ0E7TUFDRSxrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLFlBQVk7TUFDWixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGVBQWU7SUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuY2hlY2tvdXQtY29udGFpbmVyIHtcbiAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuICAgIGJ1dHRvbiB7XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 6279:
/*!******************************************************!*\
  !*** ./src/app/features/checkout/checkout.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckoutModule: () => (/* binding */ CheckoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout-routing.module */ 6078);
/* harmony import */ var _checkout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout.component */ 5272);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);





class CheckoutModule {
  static {
    this.ɵfac = function CheckoutModule_Factory(t) {
      return new (t || CheckoutModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: CheckoutModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _checkout_routing_module__WEBPACK_IMPORTED_MODULE_0__.CheckoutRoutingModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CheckoutModule, {
    declarations: [_checkout_component__WEBPACK_IMPORTED_MODULE_1__.CheckoutComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _checkout_routing_module__WEBPACK_IMPORTED_MODULE_0__.CheckoutRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_checkout_checkout_module_ts.js.map