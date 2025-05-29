"use strict";
(self["webpackChunkangular_ecommerce"] = self["webpackChunkangular_ecommerce"] || []).push([["src_app_features_auth_auth_module_ts"],{

/***/ 3294:
/*!******************************************************!*\
  !*** ./src/app/features/auth/auth-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthRoutingModule: () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 461);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register/register.component */ 3165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);





const routes = [{
  path: '',
  redirectTo: '/auth/login',
  pathMatch: 'full'
}, {
  path: 'login',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: 'register',
  component: _register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent
}];
class AuthRoutingModule {
  static {
    this.ɵfac = function AuthRoutingModule_Factory(t) {
      return new (t || AuthRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AuthRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 663:
/*!**********************************************!*\
  !*** ./src/app/features/auth/auth.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthModule: () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 3294);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 461);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ 3165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);






class AuthModule {
  static {
    this.ɵfac = function AuthModule_Factory(t) {
      return new (t || AuthModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AuthModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AuthModule, {
    declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent, _register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule]
  });
})();

/***/ }),

/***/ 461:
/*!********************************************************!*\
  !*** ./src/app/features/auth/login/login.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



class LoginComponent {
  static {
    this.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 17,
      vars: 0,
      consts: [[1, "login-container"], [1, "form-group"], ["for", "email"], ["type", "email", "id", "email", "placeholder", "Enter your email"], ["for", "password"], ["type", "password", "id", "password", "placeholder", "Enter your password"], ["type", "submit"], ["routerLink", "/auth/register"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form")(4, "div", 1)(5, "label", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Email:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1)(9, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Password:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Login");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p")(15, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Don't have an account? Register");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: [".login-container[_ngcontent-%COMP%] {\n      max-width: 400px;\n      margin: 0 auto;\n      padding: 20px;\n    }\n    .form-group[_ngcontent-%COMP%] {\n      margin-bottom: 15px;\n    }\n    label[_ngcontent-%COMP%] {\n      display: block;\n      margin-bottom: 5px;\n    }\n    input[_ngcontent-%COMP%] {\n      width: 100%;\n      padding: 8px;\n      border: 1px solid #ccc;\n      border-radius: 4px;\n    }\n    button[_ngcontent-%COMP%] {\n      width: 100%;\n      padding: 10px;\n      background: #007bff;\n      color: white;\n      border: none;\n      border-radius: 4px;\n      cursor: pointer;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0UsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCxhQUFhO0lBQ2Y7SUFDQTtNQUNFLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsY0FBYztNQUNkLGtCQUFrQjtJQUNwQjtJQUNBO01BQ0UsV0FBVztNQUNYLFlBQVk7TUFDWixzQkFBc0I7TUFDdEIsa0JBQWtCO0lBQ3BCO0lBQ0E7TUFDRSxXQUFXO01BQ1gsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixZQUFZO01BQ1osWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixlQUFlO0lBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cbiAgICAuZm9ybS1ncm91cCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cbiAgICBsYWJlbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG4gICAgaW5wdXQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cbiAgICBidXR0b24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgYmFja2dyb3VuZDogIzAwN2JmZjtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}


/***/ }),

/***/ 3165:
/*!**************************************************************!*\
  !*** ./src/app/features/auth/register/register.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



class RegisterComponent {
  static {
    this.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 21,
      vars: 0,
      consts: [[1, "register-container"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "placeholder", "Enter your name"], ["for", "email"], ["type", "email", "id", "email", "placeholder", "Enter your email"], ["for", "password"], ["type", "password", "id", "password", "placeholder", "Enter your password"], ["type", "submit"], ["routerLink", "/auth/login"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form")(4, "div", 1)(5, "label", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1)(9, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1)(13, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Register");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p")(19, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Already have an account? Login");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
      styles: [".register-container[_ngcontent-%COMP%] {\n      max-width: 400px;\n      margin: 0 auto;\n      padding: 20px;\n    }\n    .form-group[_ngcontent-%COMP%] {\n      margin-bottom: 15px;\n    }\n    label[_ngcontent-%COMP%] {\n      display: block;\n      margin-bottom: 5px;\n    }\n    input[_ngcontent-%COMP%] {\n      width: 100%;\n      padding: 8px;\n      border: 1px solid #ccc;\n      border-radius: 4px;\n    }\n    button[_ngcontent-%COMP%] {\n      width: 100%;\n      padding: 10px;\n      background: #28a745;\n      color: white;\n      border: none;\n      border-radius: 4px;\n      cursor: pointer;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0UsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCxhQUFhO0lBQ2Y7SUFDQTtNQUNFLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsY0FBYztNQUNkLGtCQUFrQjtJQUNwQjtJQUNBO01BQ0UsV0FBVztNQUNYLFlBQVk7TUFDWixzQkFBc0I7TUFDdEIsa0JBQWtCO0lBQ3BCO0lBQ0E7TUFDRSxXQUFXO01BQ1gsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixZQUFZO01BQ1osWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixlQUFlO0lBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLnJlZ2lzdGVyLWNvbnRhaW5lciB7XG4gICAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cbiAgICAuZm9ybS1ncm91cCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cbiAgICBsYWJlbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG4gICAgaW5wdXQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cbiAgICBidXR0b24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgYmFja2dyb3VuZDogIzI4YTc0NTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}


/***/ })

}]);
//# sourceMappingURL=src_app_features_auth_auth_module_ts.js.map