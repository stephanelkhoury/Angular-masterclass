"use strict";
(self["webpackChunkangular_ecommerce"] = self["webpackChunkangular_ecommerce"] || []).push([["src_app_features_contact_contact_module_ts"],{

/***/ 7012:
/*!************************************************************!*\
  !*** ./src/app/features/contact/contact-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactRoutingModule: () => (/* binding */ ContactRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.component */ 674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _contact_component__WEBPACK_IMPORTED_MODULE_0__.ContactComponent
}];
class ContactRoutingModule {
  static {
    this.ɵfac = function ContactRoutingModule_Factory(t) {
      return new (t || ContactRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ContactRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContactRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 674:
/*!*******************************************************!*\
  !*** ./src/app/features/contact/contact.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);


class ContactComponent {
  static {
    this.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 19,
      vars: 0,
      consts: [[1, "contact-container"], [1, "contact-content"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "placeholder", "Your name"], ["for", "email"], ["type", "email", "id", "email", "placeholder", "Your email"], ["for", "message"], ["id", "message", "rows", "5", "placeholder", "Your message"], ["type", "submit"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contact Us");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1)(4, "form")(5, "div", 2)(6, "label", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2)(10, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2)(14, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Message:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "textarea", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Send Message");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup],
      styles: [".contact-container[_ngcontent-%COMP%] {\n      max-width: 600px;\n      margin: 0 auto;\n      padding: 20px;\n    }\n    .form-group[_ngcontent-%COMP%] {\n      margin-bottom: 15px;\n    }\n    label[_ngcontent-%COMP%] {\n      display: block;\n      margin-bottom: 5px;\n    }\n    input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n      width: 100%;\n      padding: 8px;\n      border: 1px solid #ccc;\n      border-radius: 4px;\n    }\n    button[_ngcontent-%COMP%] {\n      background: #007bff;\n      color: white;\n      padding: 10px 20px;\n      border: none;\n      border-radius: 4px;\n      cursor: pointer;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0k7TUFDRSxnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLGFBQWE7SUFDZjtJQUNBO01BQ0UsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSxjQUFjO01BQ2Qsa0JBQWtCO0lBQ3BCO0lBQ0E7TUFDRSxXQUFXO01BQ1gsWUFBWTtNQUNaLHNCQUFzQjtNQUN0QixrQkFBa0I7SUFDcEI7SUFDQTtNQUNFLG1CQUFtQjtNQUNuQixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsZUFBZTtJQUNqQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5jb250YWN0LWNvbnRhaW5lciB7XG4gICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cbiAgICAuZm9ybS1ncm91cCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cbiAgICBsYWJlbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG4gICAgaW5wdXQsIHRleHRhcmVhIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG4gICAgYnV0dG9uIHtcbiAgICAgIGJhY2tncm91bmQ6ICMwMDdiZmY7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}


/***/ }),

/***/ 4725:
/*!****************************************************!*\
  !*** ./src/app/features/contact/contact.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactModule: () => (/* binding */ ContactModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-routing.module */ 7012);
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.component */ 674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);





class ContactModule {
  static {
    this.ɵfac = function ContactModule_Factory(t) {
      return new (t || ContactModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: ContactModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _contact_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactRoutingModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ContactModule, {
    declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_1__.ContactComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _contact_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_contact_contact_module_ts.js.map