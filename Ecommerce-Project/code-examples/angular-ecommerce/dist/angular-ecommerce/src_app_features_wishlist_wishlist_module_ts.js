"use strict";
(self["webpackChunkangular_ecommerce"] = self["webpackChunkangular_ecommerce"] || []).push([["src_app_features_wishlist_wishlist_module_ts"],{

/***/ 500:
/*!**************************************************************!*\
  !*** ./src/app/features/wishlist/wishlist-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WishlistRoutingModule: () => (/* binding */ WishlistRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _wishlist_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist.component */ 9490);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _wishlist_component__WEBPACK_IMPORTED_MODULE_0__.WishlistComponent
}];
class WishlistRoutingModule {
  static {
    this.ɵfac = function WishlistRoutingModule_Factory(t) {
      return new (t || WishlistRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: WishlistRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WishlistRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 9490:
/*!*********************************************************!*\
  !*** ./src/app/features/wishlist/wishlist.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WishlistComponent: () => (/* binding */ WishlistComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class WishlistComponent {
  static {
    this.ɵfac = function WishlistComponent_Factory(t) {
      return new (t || WishlistComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WishlistComponent,
      selectors: [["app-wishlist"]],
      decls: 6,
      vars: 0,
      consts: [[1, "wishlist-container"], [1, "wishlist-content"]],
      template: function WishlistComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Wishlist");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1)(4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Wishlist functionality coming soon...");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
      },
      styles: [".wishlist-container[_ngcontent-%COMP%] {\n      max-width: 800px;\n      margin: 0 auto;\n      padding: 20px;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvd2lzaGxpc3Qvd2lzaGxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtNQUNFLGdCQUFnQjtNQUNoQixjQUFjO01BQ2QsYUFBYTtJQUNmIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLndpc2hsaXN0LWNvbnRhaW5lciB7XG4gICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 1090:
/*!******************************************************!*\
  !*** ./src/app/features/wishlist/wishlist.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WishlistModule: () => (/* binding */ WishlistModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist-routing.module */ 500);
/* harmony import */ var _wishlist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wishlist.component */ 9490);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




class WishlistModule {
  static {
    this.ɵfac = function WishlistModule_Factory(t) {
      return new (t || WishlistModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: WishlistModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_0__.WishlistRoutingModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WishlistModule, {
    declarations: [_wishlist_component__WEBPACK_IMPORTED_MODULE_1__.WishlistComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_0__.WishlistRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_wishlist_wishlist_module_ts.js.map