"use strict";
(self["webpackChunkangular_ecommerce"] = self["webpackChunkangular_ecommerce"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/guards/auth.guard */ 4978);
/* harmony import */ var _core_guards_admin_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/guards/admin.guard */ 7823);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/not-found/not-found.component */ 13);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);






const routes = [{
  path: '',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/home/home.module */ 2829)).then(m => m.HomeModule)
}, {
  path: 'products',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_products_products_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/products/products.module */ 6187)).then(m => m.ProductsModule)
}, {
  path: 'cart',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_cart_cart_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/cart/cart.module */ 2167)).then(m => m.CartModule)
}, {
  path: 'checkout',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_checkout_checkout_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/checkout/checkout.module */ 6279)).then(m => m.CheckoutModule),
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
}, {
  path: 'auth',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/auth/auth.module */ 663)).then(m => m.AuthModule)
}, {
  path: 'profile',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/profile/profile.module */ 337)).then(m => m.ProfileModule),
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
}, {
  path: 'orders',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_orders_orders_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/orders/orders.module */ 6597)).then(m => m.OrdersModule),
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
}, {
  path: 'wishlist',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_wishlist_wishlist_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/wishlist/wishlist.module */ 1090)).then(m => m.WishlistModule),
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
}, {
  path: 'admin',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/admin/admin.module */ 6269)).then(m => m.AdminModule),
  canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard, _core_guards_admin_guard__WEBPACK_IMPORTED_MODULE_1__.AdminGuard]
}, {
  path: 'about',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/about/about.module */ 7357)).then(m => m.AboutModule)
}, {
  path: 'contact',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_contact_contact_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/contact/contact.module */ 4725)).then(m => m.ContactModule)
}, {
  path: '**',
  component: _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__.NotFoundComponent
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules,
        scrollPositionRestoration: 'enabled',
        useHash: true // Added hash location strategy
      }), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/actions/auth.actions */ 6513);
/* harmony import */ var _store_selectors_ui_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/selectors/ui.selectors */ 2155);
/* harmony import */ var _store_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/selectors/auth.selectors */ 1647);
/* harmony import */ var _store_selectors_cart_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/selectors/cart.selectors */ 919);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/service-worker */ 6140);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/header/header.component */ 9381);
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/footer/footer.component */ 1765);
/* harmony import */ var _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/loading-spinner/loading-spinner.component */ 4333);

















function AppComponent_app_loading_spinner_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-loading-spinner", 4);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("overlay", true);
  }
}
class AppComponent {
  constructor(store, router, swUpdate) {
    this.store = store;
    this.router = router;
    this.swUpdate = swUpdate;
    this.updateAvailable = false;
    this.showBackToTop = false;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.isLoading$ = this.store.select(_store_selectors_ui_selectors__WEBPACK_IMPORTED_MODULE_1__.selectIsLoading);
    this.isAuthenticated$ = this.store.select(_store_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_2__.selectIsAuthenticated);
    this.currentUser$ = this.store.select(_store_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_2__.selectCurrentUser);
    this.cartItemCount$ = this.store.select(_store_selectors_cart_selectors__WEBPACK_IMPORTED_MODULE_3__.selectCartItemCount);
  }
  onWindowScroll() {
    this.showBackToTop = window.pageYOffset > 300;
  }
  ngOnInit() {
    // Check authentication status on app load
    this.store.dispatch((0,_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.checkAuthStatus)());
    // Handle route changes with smooth scrolling
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    // Subscribe to service worker updates
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.subscribe(() => {
        this.updateAvailable = true;
      });
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  updateApp() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.activateUpdate().then(() => {
        document.location.reload();
      });
    }
  }
  logout() {
    this.store.dispatch((0,_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.logout)());
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_13__.SwUpdate));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      hostBindings: function AppComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("scroll", function AppComponent_scroll_HostBindingHandler($event) {
            return ctx.onWindowScroll($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresolveWindow"]);
        }
      },
      decls: 10,
      vars: 5,
      consts: [[1, "app-layout"], ["role", "main", 1, "main-content"], [3, "overlay", 4, "ngIf"], ["aria-label", "Back to top", "mat-fab", "", "color", "primary", 1, "back-to-top", 3, "click"], [3, "overlay"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0)(2, "main", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, AppComponent_app_loading_spinner_4_Template, 1, 1, "app-loading-spinner", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "app-footer");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AppComponent_Template_button_click_7_listener() {
            return ctx.scrollToTop();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "keyboard_arrow_up");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 3, ctx.isLoading$));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("visible", ctx.showBackToTop);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterOutlet, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatFabButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent, _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent, _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_6__.LoadingSpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe],
      styles: [".app-layout[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background: var(--bg-primary);\n}\n\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n  overflow-x: hidden;\n}\n\n.back-to-top[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  z-index: var(--z-fixed);\n  width: 56px;\n  height: 56px;\n  background: var(--primary-color);\n  border: none;\n  border-radius: 50%;\n  color: white;\n  cursor: pointer;\n  box-shadow: var(--shadow-lg);\n  transition: all var(--transition-normal);\n  opacity: 0;\n  visibility: hidden;\n}\n.back-to-top.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.back-to-top[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-xl);\n  background: var(--primary-dark);\n}\n.back-to-top[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.global-loading[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.9);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: var(--z-modal);\n}\n.global-loading[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border: 4px solid var(--gray-200);\n  border-top-color: var(--primary-color);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: var(--spacing-lg);\n}\n.global-loading[_ngcontent-%COMP%]   .loading-text[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-weight: 500;\n}\n\n.notifications-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: var(--spacing-lg);\n  right: var(--spacing-lg);\n  z-index: var(--z-toast);\n  max-width: 400px;\n}\n@media (max-width: 768px) {\n  .notifications-container[_ngcontent-%COMP%] {\n    top: var(--spacing-md);\n    right: var(--spacing-md);\n    left: var(--spacing-md);\n    max-width: none;\n  }\n}\n\n.router-outlet-container[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n\n.page-transition[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_pageSlideIn 0.4s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_pageSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .app-layout[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQUFGOztBQUdBO0VBQ0UsT0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSx3Q0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQURGO0FBR0U7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUlFO0VBQ0UsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0FBRko7QUFLRTtFQUNFLGlCQUFBO0FBSEo7O0FBUUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQUxGO0FBT0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0NBQUE7QUFMSjtBQVFFO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtBQU5KOztBQVdBO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBUkY7QUFVRTtFQVBGO0lBUUksc0JBQUE7SUFDQSx3QkFBQTtJQUNBLHVCQUFBO0lBQ0EsZUFBQTtFQVBGO0FBQ0Y7O0FBV0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBUkY7O0FBWUE7RUFDRSxvQ0FBQTtBQVRGOztBQVlBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMkJBQUE7RUFURjtFQVdBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VBVEY7QUFDRjtBQVlBO0VBQ0U7SUFDRSx5QkFBQTtFQVZGO0FBQ0Y7QUFjQTtFQUNFO0lBQ0UsaUJBQUE7RUFaRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9kZXJuIEFwcCBDb21wb25lbnQgU3R5bGVzXG4uYXBwLWxheW91dCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbn1cblxuLm1haW4tY29udGVudCB7XG4gIGZsZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4vLyBCYWNrIHRvIHRvcCBidXR0b25cbi5iYWNrLXRvLXRvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAycmVtO1xuICByaWdodDogMnJlbTtcbiAgei1pbmRleDogdmFyKC0tei1maXhlZCk7XG4gIHdpZHRoOiA1NnB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1sZyk7XG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLW5vcm1hbCk7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgXG4gICYudmlzaWJsZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gIFxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xuICB9XG4gIFxuICBtYXQtaWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn1cblxuLy8gR2xvYmFsIGxvYWRpbmcgb3ZlcmxheVxuLmdsb2JhbC1sb2FkaW5nIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiB2YXIoLS16LW1vZGFsKTtcbiAgXG4gIC5sb2FkaW5nLXNwaW5uZXIge1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1ncmF5LTIwMCk7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy1sZyk7XG4gIH1cbiAgXG4gIC5sb2FkaW5nLXRleHQge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufVxuXG4vLyBOb3RpZmljYXRpb25zIGNvbnRhaW5lclxuLm5vdGlmaWNhdGlvbnMtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IHZhcigtLXNwYWNpbmctbGcpO1xuICByaWdodDogdmFyKC0tc3BhY2luZy1sZyk7XG4gIHotaW5kZXg6IHZhcigtLXotdG9hc3QpO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgdG9wOiB2YXIoLS1zcGFjaW5nLW1kKTtcbiAgICByaWdodDogdmFyKC0tc3BhY2luZy1tZCk7XG4gICAgbGVmdDogdmFyKC0tc3BhY2luZy1tZCk7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICB9XG59XG5cbi8vIFJvdXRlciBvdXRsZXQgYW5pbWF0aW9uc1xuLnJvdXRlci1vdXRsZXQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vLyBQYWdlIHRyYW5zaXRpb25zXG4ucGFnZS10cmFuc2l0aW9uIHtcbiAgYW5pbWF0aW9uOiBwYWdlU2xpZGVJbiAwLjRzIGVhc2Utb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIHBhZ2VTbGlkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbi8vIFJlc3BvbnNpdmUgdXRpbGl0aWVzXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmFwcC1sYXlvdXQge1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}


/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/service-worker */ 6140);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/effects */ 347);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/store-devtools */ 1925);
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngrx/router-store */ 2175);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/core.module */ 8423);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/shared.module */ 3887);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store */ 8144);
/* harmony import */ var _store_effects_app_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/effects/app.effects */ 7218);
/* harmony import */ var _store_effects_auth_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/effects/auth.effects */ 5647);
/* harmony import */ var _store_effects_cart_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/effects/cart.effects */ 7663);
/* harmony import */ var _store_effects_product_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/effects/product.effects */ 8854);
/* harmony import */ var _core_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/interceptors/jwt.interceptor */ 8517);
/* harmony import */ var _core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/interceptors/error.interceptor */ 9446);
/* harmony import */ var _core_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/interceptors/cache.interceptor */ 8122);
/* harmony import */ var _pages_products_page_products_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/products-page/products-page.component */ 5691);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ 3840);






// NgRx




// Core Module

// Shared Module

// App Components


// Root Reducers and Effects





// Interceptors



 // Add this import
// For loading spinner and icons (if not already imported globally or in a shared module)








class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HTTP_INTERCEPTORS,
        useClass: _core_interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_9__.JwtInterceptor,
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HTTP_INTERCEPTORS,
        useClass: _core_interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_10__.ErrorInterceptor,
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HTTP_INTERCEPTORS,
        useClass: _core_interceptors_cache_interceptor__WEBPACK_IMPORTED_MODULE_11__.CacheInterceptor,
        multi: true
      }],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
      // Core and Shared Modules
      _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
      // NgRx
      _ngrx_store__WEBPACK_IMPORTED_MODULE_18__.StoreModule.forRoot(_store__WEBPACK_IMPORTED_MODULE_4__.reducers, {
        metaReducers: _store__WEBPACK_IMPORTED_MODULE_4__.metaReducers
      }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__.EffectsModule.forRoot([_store_effects_app_effects__WEBPACK_IMPORTED_MODULE_5__.AppEffects, _store_effects_auth_effects__WEBPACK_IMPORTED_MODULE_6__.AuthEffects, _store_effects_cart_effects__WEBPACK_IMPORTED_MODULE_7__.CartEffects, _store_effects_product_effects__WEBPACK_IMPORTED_MODULE_8__.ProductEffects]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_20__.StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: !(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.isDevMode)(),
        autoPause: true // Pause recording actions and state changes when the extension window is not open
      }), _ngrx_router_store__WEBPACK_IMPORTED_MODULE_21__.StoreRouterConnectingModule.forRoot(),
      // PWA
      _angular_service_worker__WEBPACK_IMPORTED_MODULE_22__.ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: !(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.isDevMode)(),
        // Register the ServiceWorker as soon as the application is stable
        // or after 30 seconds (whichever comes first).
        registrationStrategy: 'registerWhenStable:30000'
      }), _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinnerModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule // Add if not already available
      ]
    });
  }
}


(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _pages_products_page_products_page_component__WEBPACK_IMPORTED_MODULE_12__.ProductsPageComponent // Add ProductsPageComponent here
    ],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
    // Core and Shared Modules
    _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_18__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__.EffectsRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_20__.StoreDevtoolsModule, _ngrx_router_store__WEBPACK_IMPORTED_MODULE_21__.StoreRouterConnectingModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_22__.ServiceWorkerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinnerModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIconModule // Add if not already available
    ]
  });
})();

/***/ }),

/***/ 8423:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoreModule: () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.service */ 8010);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/product.service */ 7359);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/cart.service */ 3661);
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/order.service */ 8544);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/notification.service */ 5567);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/storage.service */ 9117);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/auth.guard */ 4978);
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/admin.guard */ 7823);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);



// Services






// Guards



class CoreModule {
  constructor(parentModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. Import this module in the AppModule only.');
    }
  }
  static {
    this.ɵfac = function CoreModule_Factory(t) {
      return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](CoreModule, 12));
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: CoreModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
      providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService, _services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService, _services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService, _services_order_service__WEBPACK_IMPORTED_MODULE_3__.OrderService, _services_notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService, _services_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService, _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__.AuthGuard, _guards_admin_guard__WEBPACK_IMPORTED_MODULE_7__.AdminGuard],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](CoreModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
  });
})();

/***/ }),

/***/ 7823:
/*!********************************************!*\
  !*** ./src/app/core/guards/admin.guard.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminGuard: () => (/* binding */ AdminGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 4334);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _store_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/selectors/auth.selectors */ 1647);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/notification.service */ 5567);






class AdminGuard {
  constructor(store, router, notificationService) {
    this.store = store;
    this.router = router;
    this.notificationService = notificationService;
  }
  canActivate(route, state) {
    return this.store.select(_store_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_0__.selectCurrentUser).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(user => {
      if (user?.isAdmin) {
        return true;
      }
      this.notificationService.error('You do not have permission to access this area');
      return this.router.createUrlTree(['/']);
    }));
  }
  static {
    this.ɵfac = function AdminGuard_Factory(t) {
      return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: AdminGuard,
      factory: AdminGuard.ɵfac,
      providedIn: 'root'
    });
  }
}


/***/ }),

/***/ 4978:
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 4334);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _store_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/selectors/auth.selectors */ 1647);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/notification.service */ 5567);






class AuthGuard {
  constructor(store, router, notificationService) {
    this.store = store;
    this.router = router;
    this.notificationService = notificationService;
  }
  canActivate(route, state) {
    return this.store.select(_store_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_0__.selectIsAuthenticated).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(isAuthenticated => {
      if (isAuthenticated) {
        return true;
      }
      this.notificationService.info('Please login to access this page');
      return this.router.createUrlTree(['/auth/login'], {
        queryParams: {
          returnUrl: state.url
        }
      });
    }));
  }
  static {
    this.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}


/***/ }),

/***/ 8122:
/*!********************************************************!*\
  !*** ./src/app/core/interceptors/cache.interceptor.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheInterceptor: () => (/* binding */ CacheInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);




class CacheInterceptor {
  constructor() {
    this.cache = new Map();
    this.CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds
  }

  intercept(request, next) {
    // Only cache GET requests
    if (request.method !== 'GET') {
      return next.handle(request);
    }
    // Don't cache requests with 'no-cache' header
    if (request.headers.get('no-cache')) {
      return next.handle(request);
    }
    // Don't cache authentication requests
    if (request.url.includes('/auth/')) {
      return next.handle(request);
    }
    // Create a cache key from the request URL
    const cacheKey = request.url;
    // Check if we have a cached response and it's still valid
    const cachedEntry = this.cache.get(cacheKey);
    if (cachedEntry) {
      const now = Date.now();
      if (now - cachedEntry.timestamp < this.CACHE_DURATION) {
        // Return the cached response
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(cachedEntry.response);
      } else {
        // Cache expired, remove it
        this.cache.delete(cacheKey);
      }
    }
    // No cache hit or expired cache, forward the request
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(event => {
      if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse) {
        // Cache the response
        this.cache.set(cacheKey, {
          response: event,
          timestamp: Date.now()
        });
      }
    }),
    // Use shareReplay to handle multiple subscribers requesting the same API
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.shareReplay)(1));
  }
  // Method to clear the cache
  clearCache() {
    this.cache.clear();
  }
  // Method to remove a specific entry from the cache
  removeFromCache(url) {
    this.cache.delete(url);
  }
  static {
    this.ɵfac = function CacheInterceptor_Factory(t) {
      return new (t || CacheInterceptor)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: CacheInterceptor,
      factory: CacheInterceptor.ɵfac
    });
  }
}


/***/ }),

/***/ 9446:
/*!********************************************************!*\
  !*** ./src/app/core/interceptors/error.interceptor.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorInterceptor: () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/actions/auth.actions */ 6513);
/* harmony import */ var _store_actions_ui_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/actions/ui.actions */ 3013);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/notification.service */ 5567);








class ErrorInterceptor {
  constructor(router, store, notificationService) {
    this.router = router;
    this.store = store;
    this.notificationService = notificationService;
  }
  intercept(request, next) {
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      let errorMessage = 'An unknown error occurred';
      if (error.error instanceof ErrorEvent) {
        // Client-side error
        errorMessage = `Error: ${error.error.message}`;
      } else {
        // Server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        if (error.status === 401) {
          // Unauthorized - log out user
          this.store.dispatch((0,_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.logout)());
          this.router.navigate(['/auth/login']);
          errorMessage = 'Your session has expired. Please log in again.';
        }
        if (error.status === 403) {
          this.router.navigate(['/']);
          errorMessage = 'You do not have permission to access this resource.';
        }
        if (error.status === 404) {
          errorMessage = 'The requested resource was not found.';
        }
        if (error.status >= 500) {
          errorMessage = 'A server error occurred. Please try again later.';
        }
      }
      // Display error notification
      this.notificationService.showError(errorMessage);
      // Store error in the NgRx store
      this.store.dispatch((0,_store_actions_ui_actions__WEBPACK_IMPORTED_MODULE_1__.setError)({
        error: errorMessage
      }));
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new Error(errorMessage));
    }));
  }
  static {
    this.ɵfac = function ErrorInterceptor_Factory(t) {
      return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: ErrorInterceptor,
      factory: ErrorInterceptor.ɵfac
    });
  }
}


/***/ }),

/***/ 8517:
/*!******************************************************!*\
  !*** ./src/app/core/interceptors/jwt.interceptor.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JwtInterceptor: () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 8010);


class JwtInterceptor {
  constructor(authService) {
    this.authService = authService;
  }
  intercept(request, next) {
    // Don't add authorization header to external APIs like Fake Store API
    if (request.url.includes('fakestoreapi.com')) {
      console.log('JWT Interceptor: Skipping auth header for Fake Store API:', request.url);
      return next.handle(request);
    }
    console.log('JWT Interceptor: Processing request:', request.url);
    // Get the token
    const token = this.authService.getToken();
    if (token) {
      console.log('JWT Interceptor: Adding auth header');
      // Clone the request and add the authorization header
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    } else {
      console.log('JWT Interceptor: No token found');
    }
    return next.handle(request);
  }
  static {
    this.ɵfac = function JwtInterceptor_Factory(t) {
      return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: JwtInterceptor,
      factory: JwtInterceptor.ɵfac
    });
  }
}


/***/ }),

/***/ 8010:
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ 9117);
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification.service */ 5567);







class AuthService {
  constructor(http, storageService, notificationService) {
    this.http = http;
    this.storageService = storageService;
    this.notificationService = notificationService;
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/auth`;
    this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    this.user$ = this.userSubject.asObservable();
    this.autoLogin();
  }
  signup(email, password, name) {
    return this.http.post(`${this.apiUrl}/signup`, {
      email,
      password,
      name
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => this.handleAuthentication(response)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      this.notificationService.error('Registration failed. Please try again.');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  login(email, password) {
    return this.http.post(`${this.apiUrl}/login`, {
      email,
      password
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => this.handleAuthentication(response)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
      this.notificationService.error('Login failed. Please check your credentials and try again.');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(() => error);
    }));
  }
  logout() {
    this.userSubject.next(null);
    this.storageService.removeItem('userData');
    this.storageService.removeItem('token');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }
  autoLogin() {
    const userData = this.storageService.getItem('userData');
    if (!userData) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(false);
    }
    try {
      const loadedUser = userData.user;
      const tokenExpirationDate = new Date(userData.tokenExpirationDate);
      if (tokenExpirationDate <= new Date()) {
        this.logout();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(false);
      }
      this.userSubject.next(loadedUser);
      this.setAutoLogoutTimer(tokenExpirationDate.getTime() - new Date().getTime());
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(true);
    } catch (error) {
      console.error('Error parsing user data', error);
      this.logout();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(false);
    }
  }
  getCurrentUser() {
    return this.user$;
  }
  getToken() {
    const userData = this.storageService.getItem('userData');
    if (!userData) {
      return null;
    }
    try {
      return userData.token;
    } catch (error) {
      console.error('Error parsing user data', error);
      return null;
    }
  }
  isAuthenticated() {
    return !!this.getToken();
  }
  handleAuthentication(response) {
    const {
      user,
      token,
      expiresIn
    } = response;
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const userData = {
      user,
      token,
      tokenExpirationDate: expirationDate.toISOString()
    };
    this.storageService.setItem('userData', JSON.stringify(userData));
    this.userSubject.next(user);
    this.setAutoLogoutTimer(expiresIn * 1000);
  }
  setAutoLogoutTimer(expirationDuration) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }
  static {
    this.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}


/***/ }),

/***/ 3661:
/*!***********************************************!*\
  !*** ./src/app/core/services/cart.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartService: () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _store_actions_cart_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/actions/cart.actions */ 6217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 1383);





class CartService {
  constructor(http, store) {
    this.http = http;
    this.store = store;
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/cart`;
  }
  loadCart() {
    return this.http.get(this.apiUrl);
  }
  getCart() {
    return this.http.get(this.apiUrl);
  }
  addToCart(product, quantity = 1) {
    const cartItem = {
      productId: product.id,
      quantity: quantity,
      name: product.name,
      price: product.discountPrice || product.price,
      unitPrice: product.discountPrice || product.price,
      image: product.imageUrl,
      imageUrl: product.imageUrl
    };
    this.store.dispatch((0,_store_actions_cart_actions__WEBPACK_IMPORTED_MODULE_1__.addToCart)({
      item: cartItem
    }));
  }
  getCartItems() {
    return this.http.get(this.apiUrl);
  }
  removeFromCart(id) {
    this.store.dispatch((0,_store_actions_cart_actions__WEBPACK_IMPORTED_MODULE_1__.removeFromCart)({
      productId: id
    }));
  }
  updateQuantity(id, quantity) {
    this.store.dispatch((0,_store_actions_cart_actions__WEBPACK_IMPORTED_MODULE_1__.updateCartItemQuantity)({
      productId: id,
      quantity
    }));
  }
  clearCart() {
    this.http.delete(`${this.apiUrl}/clear`).subscribe();
  }
  syncCart(items) {
    return this.http.post(`${this.apiUrl}/sync`, {
      items
    });
  }
  static {
    this.ɵfac = function CartService_Factory(t) {
      return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: CartService,
      factory: CartService.ɵfac,
      providedIn: 'root'
    });
  }
}


/***/ }),

/***/ 7544:
/*!*********************************************************!*\
  !*** ./src/app/core/services/fake-store-api.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FakeStoreApiService: () => (/* binding */ FakeStoreApiService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);




class FakeStoreApiService {
  constructor(http) {
    this.http = http;
    this.baseUrl = 'https://fakestoreapi.com';
  }
  // Get all products from Fake Store API
  getProducts(options = {}) {
    let url = `${this.baseUrl}/products`;
    // Handle category filtering
    if (options.category && options.category !== 'all') {
      url = `${this.baseUrl}/products/category/${encodeURIComponent(options.category)}`;
    }
    // Add query parameters
    const params = new URLSearchParams();
    if (options.limit) {
      params.append('limit', options.limit.toString());
    }
    if (options.sortBy) {
      params.append('sort', options.order || 'asc');
    }
    const queryString = params.toString();
    if (queryString) {
      url += `?${queryString}`;
    }
    console.log('FakeStoreApiService: Making request to:', url);
    return this.http.get(url).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(products => {
      console.log('FakeStoreApiService: Received response:', products);
      return this.transformToAppProducts(products, options);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.error('FakeStoreApiService: Error fetching products:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.getEmptyResponse());
    }));
  }
  // Get product by ID
  getProductById(id) {
    const url = `${this.baseUrl}/products/${id}`;
    console.log('FakeStoreApiService: Getting product by ID from:', url);
    return this.http.get(url).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(product => {
      console.log('FakeStoreApiService: Received product:', product);
      return this.transformSingleProduct(product);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.error('FakeStoreApiService: Error fetching product by ID:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(null);
    }));
  }
  // Get all categories
  getCategories() {
    return this.http.get(`${this.baseUrl}/products/categories`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(categories => this.transformToAppCategories(categories)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.error('Error fetching categories:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)([]);
    }));
  }
  // Get products in a specific category
  getProductsByCategory(categoryName, limit) {
    let url = `${this.baseUrl}/products/category/${encodeURIComponent(categoryName)}`;
    if (limit) {
      url += `?limit=${limit}`;
    }
    return this.http.get(url).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(products => products.map(p => this.transformSingleProduct(p))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      console.error('Error fetching products by category:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)([]);
    }));
  }
  // Transform Fake Store API product to your app's Product interface
  transformSingleProduct(fakeProduct) {
    return {
      id: fakeProduct.id.toString(),
      name: fakeProduct.title,
      description: fakeProduct.description,
      price: fakeProduct.price,
      imageUrl: fakeProduct.image,
      images: [{
        id: '1',
        url: fakeProduct.image,
        altText: fakeProduct.title
      }],
      category: {
        id: fakeProduct.category,
        name: this.capitalizeCategory(fakeProduct.category)
      },
      categoryId: fakeProduct.category,
      stock: Math.floor(Math.random() * 100) + 1,
      stockQuantity: Math.floor(Math.random() * 100) + 1,
      rating: fakeProduct.rating.rate,
      brand: this.generateBrandFromCategory(fakeProduct.category),
      sku: `FS-${fakeProduct.id}`,
      createdAt: new Date(),
      featured: Math.random() > 0.7,
      regularPrice: fakeProduct.price * 1.2,
      discountPrice: Math.random() > 0.5 ? fakeProduct.price : undefined,
      availabilityStatus: 'in-stock',
      freeShipping: Math.random() > 0.6,
      fastDelivery: Math.random() > 0.7,
      reviews: this.generateMockReviews(fakeProduct.id.toString(), fakeProduct.rating.count)
    };
  }
  // Transform multiple products
  transformToAppProducts(fakeProducts, options) {
    let products = fakeProducts.map(p => this.transformSingleProduct(p));
    // Apply search filter if provided
    if (options.search) {
      const searchTerm = options.search.toLowerCase();
      products = products.filter(p => p.name.toLowerCase().includes(searchTerm) || p.description.toLowerCase().includes(searchTerm) || p.category?.name.toLowerCase().includes(searchTerm));
    }
    // Calculate pagination
    const page = options.page || 1;
    const limit = options.limit || products.length;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = products.slice(startIndex, endIndex);
    return {
      items: paginatedProducts,
      totalCount: products.length,
      page: page,
      limit: limit,
      totalPages: Math.ceil(products.length / limit)
    };
  }
  // Transform categories
  transformToAppCategories(categories) {
    return categories.map(cat => ({
      id: cat,
      name: this.capitalizeCategory(cat),
      featured: Math.random() > 0.5 // Randomly mark some as featured
    }));
  }
  // Helper methods
  capitalizeCategory(category) {
    return category.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  generateBrandFromCategory(category) {
    const brandMap = {
      'electronics': ['Apple', 'Samsung', 'Sony', 'LG', 'Microsoft'],
      'jewelery': ['Tiffany & Co.', 'Cartier', 'Pandora', 'Swarovski'],
      "men's clothing": ['Nike', 'Adidas', 'Levi\'s', 'Calvin Klein', 'Tommy Hilfiger'],
      "women's clothing": ['Zara', 'H&M', 'Forever 21', 'ASOS', 'Mango']
    };
    const brands = brandMap[category] || ['Generic Brand'];
    return brands[Math.floor(Math.random() * brands.length)];
  }
  generateMockReviews(productId, count) {
    // Generate a few mock reviews based on the count
    const maxReviews = Math.min(count, 5);
    const reviews = [];
    for (let i = 0; i < maxReviews; i++) {
      reviews.push({
        id: `${productId}-review-${i}`,
        productId: productId,
        userId: `user-${i}`,
        userName: `Customer ${i + 1}`,
        rating: Math.floor(Math.random() * 5) + 1,
        comment: 'Great product! Highly recommended.',
        createdAt: new Date()
      });
    }
    return reviews;
  }
  getEmptyResponse() {
    return {
      items: [],
      totalCount: 0,
      page: 1,
      limit: 10,
      totalPages: 0
    };
  }
  static {
    this.ɵfac = function FakeStoreApiService_Factory(t) {
      return new (t || FakeStoreApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: FakeStoreApiService,
      factory: FakeStoreApiService.ɵfac,
      providedIn: 'root'
    });
  }
}


/***/ }),

/***/ 8005:
/*!****************************************************!*\
  !*** ./src/app/core/services/mock-data.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MockDataService: () => (/* binding */ MockDataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class MockDataService {
  constructor() {
    this.products = [{
      id: '1',
      name: 'iPhone 15 Pro Max',
      description: 'The ultimate iPhone experience with A17 Bionic chip and Pro camera system.',
      price: 1199.99,
      imageUrl: 'https://via.placeholder.com/400x400.png?text=iPhone+15+Pro',
      images: [{
        url: 'https://via.placeholder.com/600x600.png?text=iPhone+15+Pro+View+1'
      }, {
        url: 'https://via.placeholder.com/600x600.png?text=iPhone+15+Pro+View+2'
      }],
      category: {
        id: 'smartphones',
        name: 'Smartphones',
        parentId: 'electronics'
      },
      categoryId: 'smartphones',
      brand: 'Apple',
      stockQuantity: 150,
      rating: 4.8,
      reviews: [{
        id: 'r1p1',
        productId: '1',
        userId: 'u1',
        userName: 'TechReviewer',
        rating: 5,
        comment: 'Amazing device!',
        createdAt: new Date('2024-01-10T10:00:00Z')
      }],
      featured: true,
      createdAt: new Date('2024-01-01T10:00:00Z'),
      updatedAt: new Date('2024-01-05T10:00:00Z'),
      keyFeatures: ['A17 Bionic Chip', 'Pro Camera System', 'ProMotion Display'],
      freeShipping: true,
      availabilityStatus: 'in-stock'
    }, {
      id: '2',
      name: 'MacBook Pro 16-inch',
      description: 'The most powerful MacBook Pro ever with M3 Max chip.',
      price: 2499.00,
      imageUrl: 'https://via.placeholder.com/400x400.png?text=MacBook+Pro+16',
      images: [{
        url: 'https://via.placeholder.com/600x600.png?text=MacBook+Pro+16+View+1'
      }],
      category: {
        id: 'laptops',
        name: 'Laptops',
        parentId: 'electronics'
      },
      categoryId: 'laptops',
      brand: 'Apple',
      stockQuantity: 75,
      rating: 4.9,
      reviews: [],
      featured: true,
      createdAt: new Date('2023-11-15T10:00:00Z'),
      updatedAt: new Date('2023-12-01T10:00:00Z'),
      keyFeatures: ['M3 Max Chip', 'Liquid Retina XDR Display', '1080p FaceTime HD Camera'],
      availabilityStatus: 'in-stock'
    }, {
      id: '3',
      name: 'Sony WH-1000XM5 Headphones',
      description: 'Industry-leading noise canceling headphones with exceptional sound quality.',
      price: 348.00,
      imageUrl: 'https://via.placeholder.com/400x400.png?text=Sony+XM5',
      category: {
        id: 'audio',
        name: 'Audio',
        parentId: 'electronics'
      },
      categoryId: 'audio',
      brand: 'Sony',
      stockQuantity: 200,
      rating: 4.7,
      reviews: [],
      featured: false,
      createdAt: new Date('2023-05-01T10:00:00Z'),
      updatedAt: new Date('2023-05-01T10:00:00Z'),
      keyFeatures: ['Noise Canceling', '30-hour battery life', 'Multipoint connection'],
      fastDelivery: true,
      availabilityStatus: 'in-stock'
    },
    // Add more diverse mock products here, ensuring they conform to the Product model
    {
      id: '4',
      name: 'Men\'s Casual Shirt',
      description: 'Comfortable cotton casual shirt.',
      price: 45.00,
      imageUrl: 'https://via.placeholder.com/400x400.png?text=Casual+Shirt',
      category: {
        id: 'mens-clothing',
        name: 'Men\'s Clothing',
        parentId: 'fashion'
      },
      categoryId: 'mens-clothing',
      stockQuantity: 120,
      rating: 4.0,
      brand: 'ClothCo',
      createdAt: new Date('2023-03-01T10:00:00Z'),
      regularPrice: 50.00,
      availabilityStatus: 'in-stock'
    }, {
      id: '5',
      name: 'Running Shoes',
      description: 'Lightweight running shoes for athletes.',
      price: 89.99,
      imageUrl: 'https://via.placeholder.com/400x400.png?text=Running+Shoes',
      category: {
        id: 'footwear',
        name: 'Footwear',
        parentId: 'fashion'
      },
      categoryId: 'footwear',
      stockQuantity: 75,
      rating: 4.6,
      brand: 'FitGear',
      createdAt: new Date('2023-02-10T10:00:00Z'),
      availabilityStatus: 'in-stock'
    }, {
      id: '6',
      name: 'Coffee Maker Deluxe',
      description: 'Drip coffee maker with timer and grinder.',
      price: 79.95,
      imageUrl: 'https://via.placeholder.com/400x400.png?text=Coffee+Maker',
      category: {
        id: 'kitchen-appliances',
        name: 'Kitchen Appliances',
        parentId: 'home-garden'
      },
      categoryId: 'kitchen-appliances',
      stockQuantity: 60,
      rating: 4.2,
      brand: 'HomeEase',
      createdAt: new Date('2023-04-05T10:00:00Z'),
      keyFeatures: ['Programmable', 'Built-in Grinder'],
      availabilityStatus: 'low-stock'
    }];
    this.categories = [{
      id: 'electronics',
      name: 'Electronics',
      description: 'Gadgets and devices',
      image: 'https://via.placeholder.com/300x200.png?text=Electronics',
      featured: true
    }, {
      id: 'smartphones',
      name: 'Smartphones',
      parentId: 'electronics',
      image: 'https://via.placeholder.com/300x200.png?text=Smartphones'
    }, {
      id: 'laptops',
      name: 'Laptops',
      parentId: 'electronics',
      image: 'https://via.placeholder.com/300x200.png?text=Laptops'
    }, {
      id: 'audio',
      name: 'Audio',
      parentId: 'electronics',
      image: 'https://via.placeholder.com/300x200.png?text=Audio'
    }, {
      id: 'fashion',
      name: 'Fashion',
      description: 'Apparel and accessories',
      image: 'https://via.placeholder.com/300x200.png?text=Fashion',
      featured: true
    }, {
      id: 'mens-clothing',
      name: 'Men\'s Clothing',
      parentId: 'fashion',
      image: 'https://via.placeholder.com/300x200.png?text=Men%27s+Clothing'
    }, {
      id: 'womens-clothing',
      name: 'Women\'s Clothing',
      parentId: 'fashion',
      image: 'https://via.placeholder.com/300x200.png?text=Women%27s+Clothing'
    }, {
      id: 'footwear',
      name: 'Footwear',
      parentId: 'fashion',
      image: 'https://via.placeholder.com/300x200.png?text=Footwear'
    }, {
      id: 'home-garden',
      name: 'Home & Garden',
      description: 'Items for your home',
      image: 'https://via.placeholder.com/300x200.png?text=Home+Garden'
    }, {
      id: 'kitchen-appliances',
      name: 'Kitchen Appliances',
      parentId: 'home-garden',
      image: 'https://via.placeholder.com/300x200.png?text=Kitchen'
    }];
    this.reviews = [{
      id: 'r1p1',
      productId: '1',
      userId: 'user123',
      userName: 'Jane D.',
      rating: 5,
      comment: 'Absolutely love this phone!',
      createdAt: new Date('2024-01-15T14:30:00Z')
    }, {
      id: 'r2p1',
      productId: '1',
      userId: 'user456',
      userName: 'John S.',
      rating: 4,
      comment: 'Great features, a bit pricey.',
      createdAt: new Date('2024-01-17T09:15:00Z')
    }, {
      id: 'r1p2',
      productId: '2',
      userId: 'user789',
      userName: 'Alice B.',
      rating: 5,
      comment: 'Perfect for my development work.',
      createdAt: new Date('2023-11-20T11:00:00Z')
    }];
  }
  getProducts(options = {}) {
    let filteredProducts = [...this.products];
    if (options.search) {
      const searchTerm = options.search.toLowerCase();
      filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(searchTerm) || p.description.toLowerCase().includes(searchTerm) || p.brand?.toLowerCase().includes(searchTerm) || p.category?.name.toLowerCase().includes(searchTerm));
    }
    if (options.category) {
      const categoryFilter = options.category.toLowerCase();
      filteredProducts = filteredProducts.filter(p => p.category?.id.toLowerCase() === categoryFilter || p.category?.name.toLowerCase() === categoryFilter || p.categoryId?.toLowerCase() === categoryFilter);
    }
    if (options.subcategory) {
      const subCategoryTerm = options.subcategory.toLowerCase();
      // This is a simplified subcategory filter. 
      // A real app might have subcategories explicitly linked or as part of a category path.
      filteredProducts = filteredProducts.filter(p => p.description?.toLowerCase().includes(subCategoryTerm) || p.name?.toLowerCase().includes(subCategoryTerm) || p.keyFeatures && p.keyFeatures.some(kf => kf.toLowerCase().includes(subCategoryTerm)) || p.category?.name.toLowerCase().includes(subCategoryTerm) // if subcat is part of main cat name
      );
    }

    if (options.minPrice !== undefined) {
      filteredProducts = filteredProducts.filter(p => p.price >= options.minPrice);
    }
    if (options.maxPrice !== undefined) {
      filteredProducts = filteredProducts.filter(p => p.price <= options.maxPrice);
    }
    if (options.sortBy) {
      filteredProducts.sort((a, b) => {
        let aValue;
        let bValue;
        if (options.sortBy === 'price') {
          aValue = a.price;
          bValue = b.price;
        } else if (options.sortBy === 'name') {
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
        } else if (options.sortBy === 'createdAt' && a.createdAt && b.createdAt) {
          aValue = a.createdAt.getTime();
          bValue = b.createdAt.getTime();
        } else if (options.sortBy === 'rating' && a.rating !== undefined && b.rating !== undefined) {
          aValue = a.rating;
          bValue = b.rating;
        } else {
          return 0; // No sort or unknown field
        }

        if (aValue < bValue) return options.order === 'asc' ? -1 : 1;
        if (aValue > bValue) return options.order === 'asc' ? 1 : -1;
        return 0;
      });
    }
    const page = options.page || 1;
    const limit = options.limit || 10;
    const totalCount = filteredProducts.length;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const items = filteredProducts.slice(startIndex, endIndex);
    const totalPages = Math.ceil(totalCount / limit);
    const response = {
      items,
      totalCount,
      page,
      limit,
      totalPages
    };
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(response).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.delay)(300)); // Simulate network delay
  }

  getProductById(id) {
    const product = this.products.find(p => p.id === id);
    if (product) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(product).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.delay)(100));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(undefined).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.delay)(100)); // Simulate not found
  }

  getCategories() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.categories).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.delay)(100));
  }
  getProductReviews(productId, page = 1, limit = 5) {
    const productReviews = this.reviews.filter(r => r.productId === productId);
    const totalCount = productReviews.length;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const items = productReviews.slice(startIndex, endIndex);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)({
      reviews: items,
      totalCount
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.delay)(100));
  }
  getFeaturedProducts(limit = 8) {
    const featured = this.products.filter(p => p.featured).slice(0, limit);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(featured).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.delay)(200));
  }
  static {
    this.ɵfac = function MockDataService_Factory(t) {
      return new (t || MockDataService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: MockDataService,
      factory: MockDataService.ɵfac,
      providedIn: 'root'
    });
  }
}


/***/ }),

/***/ 5567:
/*!*******************************************************!*\
  !*** ./src/app/core/services/notification.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationService: () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);


class NotificationService {
  constructor(snackBar) {
    this.snackBar = snackBar;
  }
  show(message, duration = 3000) {
    this.snackBar.open(message, 'Close', {
      duration: duration,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }
  success(message, duration = 3000) {
    this.snackBar.open(message, 'Close', {
      duration: duration,
      panelClass: ['notification-success'],
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }
  error(message, duration = 5000) {
    this.snackBar.open(message, 'Close', {
      duration: duration,
      panelClass: ['notification-error'],
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }
  info(message, duration = 4000) {
    this.snackBar.open(message, 'Close', {
      duration: duration,
      panelClass: ['notification-info'],
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }
  warn(message, duration = 4000) {
    this.snackBar.open(message, 'Close', {
      duration: duration,
      panelClass: ['notification-warn'],
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }
  // Aliases for consistency with other parts of the app
  showSuccess(message, duration = 3000) {
    this.success(message, duration);
  }
  showError(message, duration = 5000) {
    this.error(message, duration);
  }
  showInfo(message, duration = 4000) {
    this.info(message, duration);
  }
  showWarning(message, duration = 4000) {
    this.warn(message, duration);
  }
  static {
    this.ɵfac = function NotificationService_Factory(t) {
      return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBar));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NotificationService,
      factory: NotificationService.ɵfac,
      providedIn: 'root'
    });
  }
}


/***/ }),

/***/ 8544:
/*!************************************************!*\
  !*** ./src/app/core/services/order.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrderService: () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.service */ 5567);






class OrderService {
  constructor(http, notificationService) {
    this.http = http;
    this.notificationService = notificationService;
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/orders`;
  }
  getOrders(page = 1, limit = 10) {
    return this.http.get(`${this.apiUrl}?page=${page}&limit=${limit}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      this.notificationService.error('Failed to load your orders. Please try again.');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  getOrderById(id) {
    return this.http.get(`${this.apiUrl}/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      this.notificationService.error('Failed to load order details. Please try again.');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  createOrder(orderData) {
    return this.http.post(this.apiUrl, orderData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
      this.notificationService.success('Order placed successfully!');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      this.notificationService.error('Failed to place your order. Please try again.');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  cancelOrder(orderId, reason) {
    return this.http.post(`${this.apiUrl}/${orderId}/cancel`, {
      reason
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => {
      this.notificationService.success('Order cancelled successfully.');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      this.notificationService.error('Failed to cancel your order. Please try again.');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => error);
    }));
  }
  static {
    this.ɵfac = function OrderService_Factory(t) {
      return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: OrderService,
      factory: OrderService.ɵfac,
      providedIn: 'root'
    });
  }
}


/***/ }),

/***/ 7359:
/*!**************************************************!*\
  !*** ./src/app/core/services/product.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductService: () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.service */ 5567);
/* harmony import */ var _mock_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-data.service */ 8005);
/* harmony import */ var _fake_store_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fake-store-api.service */ 7544);








class ProductService {
  // This local mockProducts is likely not used if mockDataService is primary for mocks.
  // private mockProducts: Product[] = [ ... ]; 
  constructor(http, notificationService, mockDataService, fakeStoreApiService) {
    this.http = http;
    this.notificationService = notificationService;
    this.mockDataService = mockDataService;
    this.fakeStoreApiService = fakeStoreApiService;
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/products`;
    this.categoriesUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/categories`;
  }
  getProducts(options = {}) {
    console.log('ProductService: getProducts called with options:', options);
    console.log('ProductService: Environment flags:', {
      useFakeStoreApi: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.useFakeStoreApi,
      useMockData: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.useMockData
    });
    // Check if we should use Fake Store API
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.useFakeStoreApi) {
      console.log('ProductService: Using Fake Store API');
      return this.fakeStoreApiService.getProducts(options);
    }
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.useMockData) {
      console.log('ProductService: Using Mock Data');
      // Assuming mockDataService.getProducts returns PaginatedResponse<Product>
      return this.mockDataService.getProducts(options);
    }
    console.log('ProductService: Using real API');
    let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams();
    if (options.page) params = params.set('_page', options.page.toString()); // Common API convention
    if (options.limit) params = params.set('_limit', options.limit.toString()); // Common API convention
    if (options.sortBy) params = params.set('_sort', options.sortBy);
    if (options.order) params = params.set('_order', options.order);
    if (options.category) params = params.set('categoryId', options.category); // Assuming API filters by categoryId
    if (options.subcategory) params = params.set('subcategoryName', options.subcategory); // Example: API might filter by subcategoryName
    if (options.minPrice) params = params.set('price_gte', options.minPrice.toString());
    if (options.maxPrice) params = params.set('price_lte', options.maxPrice.toString());
    if (options.search) params = params.set('q', options.search); // Common API convention for search
    // For a real API, the response might already be PaginatedResponse or you might need to map it.
    // If API returns Product[] and headers for totalCount:
    return this.http.get(this.apiUrl, {
      params,
      observe: 'response'
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => {
      const items = response.body || [];
      const totalCountHeader = response.headers.get('X-Total-Count');
      const totalCount = totalCountHeader ? +totalCountHeader : items.length;
      return {
        items: items,
        totalCount: totalCount,
        page: options.page || 1,
        limit: options.limit || items.length,
        totalPages: options.limit ? Math.ceil(totalCount / options.limit) : 1
      };
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError('Failed to load products')));
  }
  getProductById(id) {
    console.log('ProductService: getProductById called with id:', id);
    console.log('ProductService: Environment flags:', {
      useFakeStoreApi: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.useFakeStoreApi,
      useMockData: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.useMockData
    });
    // Check if we should use Fake Store API
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.useFakeStoreApi) {
      console.log('ProductService: Using Fake Store API for product by ID');
      return this.fakeStoreApiService.getProductById(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(product => {
        if (!product) {
          throw new Error('Product not found');
        }
        return product;
      }));
    }
    // Use mock data in development
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.useMockData) {
      return this.mockDataService.getProductById(id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(product => {
        if (!product) {
          throw new Error('Product not found');
        }
        return product;
      }));
    }
    return this.http.get(`${this.apiUrl}/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError('Failed to load product details')));
  }
  getCategories() {
    // Check if we should use Fake Store API
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.useFakeStoreApi) {
      return this.fakeStoreApiService.getCategories();
    }
    // Use mock data in development
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.useMockData) {
      return this.mockDataService.getCategories();
    }
    return this.http.get(this.categoriesUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(categories => this.buildCategoryTree(categories)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError('Failed to load categories')));
  }
  getProductReviews(productId, page = 1, limit = 10) {
    // Use mock data in development
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.useMockData) {
      return this.mockDataService.getProductReviews(productId, page, limit);
    }
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams().set('page', page.toString()).set('limit', limit.toString());
    return this.http.get(`${this.apiUrl}/${productId}/reviews`, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError('Failed to load product reviews')));
  }
  addProductReview(productId, review) {
    return this.http.post(`${this.apiUrl}/${productId}/reviews`, review).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError('Failed to submit your review')));
  }
  getFeaturedProducts(limit = 8) {
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.useMockData) {
      return this.mockDataService.getFeaturedProducts(limit);
    }
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams().set('_limit', limit.toString()).set('featured', 'true');
    // Assuming API returns Product[] directly for this specific endpoint
    return this.http.get(this.apiUrl, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError('Failed to load featured products')));
  }
  getRelatedProducts(productId, limit = 4) {
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams().set('limit', limit.toString());
    return this.http.get(`${this.apiUrl}/${productId}/related`, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(this.handleError('Failed to load related products')));
  }
  buildCategoryTree(categories) {
    // Create a map for faster lookup
    const categoryMap = new Map();
    categories.forEach(category => {
      categoryMap.set(category.id, {
        ...category,
        children: []
      });
    });
    // Identify top-level categories and build hierarchy
    const rootCategories = [];
    categoryMap.forEach(category => {
      if (!category.parentId) {
        rootCategories.push(category);
      } else {
        const parent = categoryMap.get(category.parentId);
        if (parent) {
          parent.children = parent.children || [];
          parent.children.push(category);
        }
      }
    });
    return rootCategories;
  }
  handleError(message) {
    return error => {
      this.notificationService.error(message);
      throw error;
    };
  }
  // Store management methods
  loadProducts() {
    return this.getProducts(); // Now returns PaginatedResponse
  }

  loadCategories() {
    return this.getCategories();
  }
  loadProductById(id) {
    return this.getProductById(id);
  }
  static {
    this.ɵfac = function ProductService_Factory(t) {
      return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_mock_data_service__WEBPACK_IMPORTED_MODULE_2__.MockDataService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_fake_store_api_service__WEBPACK_IMPORTED_MODULE_3__.FakeStoreApiService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: ProductService,
      factory: ProductService.ɵfac,
      providedIn: 'root'
    });
  }
}


/***/ }),

/***/ 9117:
/*!**************************************************!*\
  !*** ./src/app/core/services/storage.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageService: () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class StorageService {
  constructor() {
    this.prefix = 'angular-ecommerce_';
  }
  setItem(key, value) {
    const storageKey = this.prefix + key;
    localStorage.setItem(storageKey, JSON.stringify(value));
  }
  getItem(key) {
    const storageKey = this.prefix + key;
    const item = localStorage.getItem(storageKey);
    if (!item) {
      return null;
    }
    try {
      return JSON.parse(item);
    } catch (error) {
      console.error(`Error parsing stored item with key ${key}:`, error);
      return null;
    }
  }
  removeItem(key) {
    const storageKey = this.prefix + key;
    localStorage.removeItem(storageKey);
  }
  clear() {
    // Only clear items with our prefix
    Object.keys(localStorage).filter(key => key.startsWith(this.prefix)).forEach(key => localStorage.removeItem(key));
  }
  static {
    this.ɵfac = function StorageService_Factory(t) {
      return new (t || StorageService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StorageService,
      factory: StorageService.ɵfac,
      providedIn: 'root'
    });
  }
}


/***/ }),

/***/ 7935:
/*!***************************************************!*\
  !*** ./src/app/core/services/wishlist.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WishlistService: () => (/* binding */ WishlistService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.service */ 9117);



class WishlistService {
  constructor(storageService) {
    this.storageService = storageService;
    this.WISHLIST_KEY = 'ecommerce_wishlist';
    this.wishlistSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
    this.wishlist$ = this.wishlistSubject.asObservable();
    this.wishlistCount$ = this.wishlist$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(items => items.length));
    this.loadWishlist();
  }
  loadWishlist() {
    const savedWishlist = this.storageService.getItem(this.WISHLIST_KEY);
    if (savedWishlist && Array.isArray(savedWishlist)) {
      this.wishlistSubject.next(savedWishlist);
    }
  }
  saveWishlist() {
    this.storageService.setItem(this.WISHLIST_KEY, this.wishlistSubject.value);
  }
  addToWishlist(product) {
    const currentWishlist = this.wishlistSubject.value;
    const existingIndex = currentWishlist.findIndex(item => item.id === product.id);
    if (existingIndex === -1) {
      const updatedWishlist = [...currentWishlist, product];
      this.wishlistSubject.next(updatedWishlist);
      this.saveWishlist();
    }
  }
  removeFromWishlist(productId) {
    const currentWishlist = this.wishlistSubject.value;
    const updatedWishlist = currentWishlist.filter(item => item.id !== productId);
    this.wishlistSubject.next(updatedWishlist);
    this.saveWishlist();
  }
  isInWishlist(productId) {
    return this.wishlist$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(items => items.some(item => item.id === productId)));
  }
  clearWishlist() {
    this.wishlistSubject.next([]);
    this.saveWishlist();
  }
  getWishlist() {
    return this.wishlistSubject.value;
  }
  // Toggles item and returns an observable indicating the new state (e.g., true if added, false if removed)
  toggleWishlist(productId) {
    let currentWishlist = this.getWishlist();
    const productIndex = currentWishlist.findIndex(item => item.id === productId);
    let added;
    if (productIndex > -1) {
      currentWishlist.splice(productIndex, 1); // Remove from wishlist
      added = false;
    } else {
      const product = {
        id: productId
      }; // Create a product object with at least the id
      currentWishlist = [...currentWishlist, product]; // Add to wishlist
      added = true;
    }
    this.wishlistSubject.next(currentWishlist);
    this.saveWishlist();
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(added); // Simulate async operation and return new state
  }

  static {
    this.ɵfac = function WishlistService_Factory(t) {
      return new (t || WishlistService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: WishlistService,
      factory: WishlistService.ɵfac,
      providedIn: 'root'
    });
  }
}


/***/ }),

/***/ 5691:
/*!****************************************************************!*\
  !*** ./src/app/pages/products-page/products-page.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsPageComponent: () => (/* binding */ ProductsPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6647);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/product.service */ 7359);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);







const _c0 = function (a1) {
  return ["/products", a1];
};
function ProductsPageComponent_div_4_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11)(4, "h3", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, product_r8.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", product_r8.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", product_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r8.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](10, 6, product_r8.price, "USD", "symbol"));
  }
}
function ProductsPageComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductsPageComponent_div_4_div_1_div_1_Template, 13, 12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const products_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", products_r3);
  }
}
function ProductsPageComponent_div_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "search_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No products found matching your criteria.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ProductsPageComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductsPageComponent_div_4_div_1_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProductsPageComponent_div_4_ng_template_2_Template, 5, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const products_r3 = ctx.ngIf;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", products_r3.length > 0)("ngIfElse", _r5);
  }
}
function ProductsPageComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading products...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class ProductsPageComponent {
  constructor(productService, route) {
    this.productService = productService;
    this.route = route;
    this.pageTitle = 'All Products';
    // For potential pagination controls
    this.totalCount = 0;
    this.currentPage = 1;
    this.itemsPerPage = 10; // Default, can be updated from params or response
    this.products$ = this.route.queryParams.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(params => {
      const category = params['category'];
      const subcategory = params['subcategory'];
      const search = params['search'];
      this.currentPage = params['page'] ? +params['page'] : 1;
      // Update itemsPerPage if it's in queryParams too
      if (search) {
        this.pageTitle = `Search Results for "${search}"`;
      } else if (category) {
        this.pageTitle = `Products in ${this.capitalizeFirstLetter(category)}`;
      } else if (subcategory) {
        this.pageTitle = `Products in ${this.capitalizeFirstLetter(subcategory)}`;
      } else {
        this.pageTitle = 'All Products';
      }
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.switchMap)(params => {
      const category = params['category'];
      const subcategory = params['subcategory'];
      const search = params['search'];
      const page = params['page'] ? +params['page'] : 1;
      const limit = params['limit'] ? +params['limit'] : this.itemsPerPage;
      return this.productService.getProducts({
        category,
        subcategory,
        search,
        page,
        limit
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
      this.totalCount = response.totalCount;
      this.currentPage = response.page;
      this.itemsPerPage = response.limit;
      return response.items; // Extract items for the template
    }));
  }

  ngOnInit() {}
  capitalizeFirstLetter(str) {
    if (!str) {
      return '';
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  static {
    this.ɵfac = function ProductsPageComponent_Factory(t) {
      return new (t || ProductsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProductsPageComponent,
      selectors: [["app-products-page"]],
      decls: 8,
      vars: 5,
      consts: [[1, "container", "products-page"], [1, "page-header"], [4, "ngIf", "ngIfElse"], ["loadingOrError", ""], ["class", "products-grid", 4, "ngIf", "ngIfElse"], ["noProducts", ""], [1, "products-grid"], ["class", "product-card", 4, "ngFor", "ngForOf"], [1, "product-card"], [1, "product-link", 3, "routerLink"], [1, "product-image", 3, "src", "alt"], [1, "product-info"], [1, "product-name"], [1, "product-category"], [1, "product-price"], [1, "btn", "btn-primary", "add-to-cart-btn"], [1, "no-products-message"], [1, "loading-message"], ["diameter", "50"]],
      template: function ProductsPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProductsPageComponent_div_4_Template, 4, 2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProductsPageComponent_ng_template_6_Template, 4, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.pageTitle);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 3, ctx.products$))("ngIfElse", _r1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinner, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CurrencyPipe],
      styles: ["[_ngcontent-%COMP%]:root {\n  --primary-color: #2563eb;\n  --primary-rgb: 37, 99, 235;\n  --primary-light: #3b82f6;\n  --primary-dark: #1d4ed8;\n  --secondary-color: #7c3aed;\n  --secondary-color-rgb: 124, 58, 237;\n  --secondary-light: #8b5cf6;\n  --secondary-dark: #6d28d9;\n  --gray-50: #f9fafb;\n  --gray-100: #f3f4f6;\n  --gray-200: #e5e7eb;\n  --gray-300: #d1d5db;\n  --gray-400: #9ca3af;\n  --gray-500: #6b7280;\n  --gray-600: #4b5563;\n  --gray-700: #374151;\n  --gray-800: #1f2937;\n  --gray-900: #111827;\n  --success-color: #10b981;\n  --success-light: #34d399;\n  --success-dark: #059669;\n  --error-color: #ef4444;\n  --error-light: #f87171;\n  --error-dark: #dc2626;\n  --warning-color: #f59e0b;\n  --warning-light: #fbbf24;\n  --warning-dark: #d97706;\n  --info-color: #3b82f6;\n  --info-light: #60a5fa;\n  --info-dark: #2563eb;\n  --bg-primary: #ffffff;\n  --bg-secondary: #f9fafb;\n  --bg-tertiary: #f3f4f6;\n  --surface-color: #fff;\n  --surface-light: #f8fafc;\n  --text-primary: #111827;\n  --text-secondary: #4b5563;\n  --text-muted: #6b7280;\n  --text-white: #ffffff;\n  --text-link: var(--primary-color);\n  --border-color: #e5e7eb;\n  --border-light: #e5e7eb;\n  --border-medium: #d1d5db;\n  --border-dark: #9ca3af;\n  --focus-ring: 0 0 0 3px rgba(var(--primary-color-rgb), 0.4);\n}\n\n[_ngcontent-%COMP%]:root {\n  --font-primary: \"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, sans-serif;\n  --font-secondary: \"Poppins\", \"Inter\", sans-serif;\n  --font-monospace: \"SFMono-Regular\", Consolas, \"Liberation Mono\", Menlo, monospace;\n  --text-xs: 0.75rem;\n  --text-sm: 0.875rem;\n  --text-base: 1rem;\n  --text-lg: 1.125rem;\n  --text-xl: 1.25rem;\n  --text-2xl: 1.5rem;\n  --text-3xl: 1.875rem;\n  --text-4xl: 2.25rem;\n  --text-5xl: 3rem;\n  --leading-none: 1;\n  --leading-tight: 1.25;\n  --leading-snug: 1.375;\n  --leading-normal: 1.5;\n  --leading-relaxed: 1.625;\n  --leading-loose: 2;\n  --font-thin: 100;\n  --font-extralight: 200;\n  --font-light: 300;\n  --font-normal: 400;\n  --font-medium: 500;\n  --font-semibold: 600;\n  --font-bold: 700;\n  --font-extrabold: 800;\n  --font-black: 900;\n  --tracking-tighter: -0.05em;\n  --tracking-tight: -0.025em;\n  --tracking-normal: 0em;\n  --tracking-wide: 0.025em;\n  --tracking-wider: 0.05em;\n  --tracking-widest: 0.1em;\n}\n\n[_ngcontent-%COMP%]:root {\n  --spacing-xs: 0.25rem;\n  --spacing-sm: 0.5rem;\n  --spacing-md: 1rem;\n  --spacing-lg: 1.5rem;\n  --spacing-xl: 2rem;\n  --spacing-2xl: 3rem;\n  --spacing-3xl: 4rem;\n  --spacing-4xl: 6rem;\n  --container-sm: 640px;\n  --container-md: 768px;\n  --container-lg: 1024px;\n  --container-xl: 1280px;\n  --container-2xl: 1536px;\n}\n\n[_ngcontent-%COMP%]:root {\n  --radius-none: 0;\n  --radius-sm: 0.125rem;\n  --radius-md: 0.375rem;\n  --radius-lg: 0.5rem;\n  --radius-xl: 0.75rem;\n  --radius-2xl: 1rem;\n  --radius-3xl: 1.5rem;\n  --radius-full: 9999px;\n}\n\n[_ngcontent-%COMP%]:root {\n  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n  --shadow-focus: 0 0 0 3px rgba(var(--primary-color-rgb), 0.4);\n  --shadow-focus-error: 0 0 0 3px rgba(239, 68, 68, 0.4);\n}\n\n[_ngcontent-%COMP%]:root {\n  --transition-fastest: 100ms;\n  --transition-fast: 150ms;\n  --transition-normal: 250ms;\n  --transition-slow: 400ms;\n  --transition-slowest: 700ms;\n  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);\n  --ease-in: cubic-bezier(0.4, 0, 1, 1);\n  --ease-out: cubic-bezier(0, 0, 0.2, 1);\n  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n\n[_ngcontent-%COMP%]:root {\n  --z-0: 0;\n  --z-10: 10;\n  --z-20: 20;\n  --z-30: 30;\n  --z-40: 40;\n  --z-50: 50;\n  --z-auto: auto;\n  --z-dropdown: 1000;\n  --z-sticky: 1020;\n  --z-fixed: 1030;\n  --z-modal-backdrop: 1040;\n  --z-modal: 1050;\n  --z-popover: 1060;\n  --z-tooltip: 1070;\n}\n\n.d-none[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.d-inline[_ngcontent-%COMP%] {\n  display: inline !important;\n}\n\n.d-inline-block[_ngcontent-%COMP%] {\n  display: inline-block !important;\n}\n\n.d-block[_ngcontent-%COMP%] {\n  display: block !important;\n}\n\n.d-flex[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n\n.d-inline-flex[_ngcontent-%COMP%] {\n  display: inline-flex !important;\n}\n\n.d-grid[_ngcontent-%COMP%] {\n  display: grid !important;\n}\n\n.flex-row[_ngcontent-%COMP%] {\n  flex-direction: row !important;\n}\n\n.flex-column[_ngcontent-%COMP%] {\n  flex-direction: column !important;\n}\n\n.flex-wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap !important;\n}\n\n.flex-nowrap[_ngcontent-%COMP%] {\n  flex-wrap: nowrap !important;\n}\n\n.flex-fill[_ngcontent-%COMP%] {\n  flex: 1 1 auto !important;\n}\n\n.flex-grow-0[_ngcontent-%COMP%] {\n  flex-grow: 0 !important;\n}\n\n.flex-grow-1[_ngcontent-%COMP%] {\n  flex-grow: 1 !important;\n}\n\n.flex-shrink-0[_ngcontent-%COMP%] {\n  flex-shrink: 0 !important;\n}\n\n.flex-shrink-1[_ngcontent-%COMP%] {\n  flex-shrink: 1 !important;\n}\n\n.justify-content-start[_ngcontent-%COMP%] {\n  justify-content: flex-start !important;\n}\n\n.justify-content-end[_ngcontent-%COMP%] {\n  justify-content: flex-end !important;\n}\n\n.justify-content-center[_ngcontent-%COMP%] {\n  justify-content: center !important;\n}\n\n.justify-content-between[_ngcontent-%COMP%] {\n  justify-content: space-between !important;\n}\n\n.justify-content-around[_ngcontent-%COMP%] {\n  justify-content: space-around !important;\n}\n\n.align-items-start[_ngcontent-%COMP%] {\n  align-items: flex-start !important;\n}\n\n.align-items-end[_ngcontent-%COMP%] {\n  align-items: flex-end !important;\n}\n\n.align-items-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n}\n\n.align-items-baseline[_ngcontent-%COMP%] {\n  align-items: baseline !important;\n}\n\n.align-items-stretch[_ngcontent-%COMP%] {\n  align-items: stretch !important;\n}\n\n.align-self-start[_ngcontent-%COMP%] {\n  align-self: flex-start !important;\n}\n\n.align-self-end[_ngcontent-%COMP%] {\n  align-self: flex-end !important;\n}\n\n.align-self-center[_ngcontent-%COMP%] {\n  align-self: center !important;\n}\n\n.align-self-baseline[_ngcontent-%COMP%] {\n  align-self: baseline !important;\n}\n\n.align-self-stretch[_ngcontent-%COMP%] {\n  align-self: stretch !important;\n}\n\n.m-0[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n\n.m-1[_ngcontent-%COMP%] {\n  margin: var(--spacing-xs) !important;\n}\n\n.m-2[_ngcontent-%COMP%] {\n  margin: var(--spacing-sm) !important;\n}\n\n.m-3[_ngcontent-%COMP%] {\n  margin: var(--spacing-md) !important;\n}\n\n.m-4[_ngcontent-%COMP%] {\n  margin: var(--spacing-lg) !important;\n}\n\n.m-5[_ngcontent-%COMP%] {\n  margin: var(--spacing-xl) !important;\n}\n\n.m-auto[_ngcontent-%COMP%] {\n  margin: auto !important;\n}\n\n.mx-0[_ngcontent-%COMP%] {\n  margin-right: 0 !important;\n  margin-left: 0 !important;\n}\n\n.mx-1[_ngcontent-%COMP%] {\n  margin-right: var(--spacing-xs) !important;\n  margin-left: var(--spacing-xs) !important;\n}\n\n.mx-2[_ngcontent-%COMP%] {\n  margin-right: var(--spacing-sm) !important;\n  margin-left: var(--spacing-sm) !important;\n}\n\n.mx-3[_ngcontent-%COMP%] {\n  margin-right: var(--spacing-md) !important;\n  margin-left: var(--spacing-md) !important;\n}\n\n.mx-4[_ngcontent-%COMP%] {\n  margin-right: var(--spacing-lg) !important;\n  margin-left: var(--spacing-lg) !important;\n}\n\n.mx-5[_ngcontent-%COMP%] {\n  margin-right: var(--spacing-xl) !important;\n  margin-left: var(--spacing-xl) !important;\n}\n\n.mx-auto[_ngcontent-%COMP%] {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n\n.my-0[_ngcontent-%COMP%] {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n\n.my-1[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-xs) !important;\n  margin-bottom: var(--spacing-xs) !important;\n}\n\n.my-2[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-sm) !important;\n  margin-bottom: var(--spacing-sm) !important;\n}\n\n.my-3[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-md) !important;\n  margin-bottom: var(--spacing-md) !important;\n}\n\n.my-4[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-lg) !important;\n  margin-bottom: var(--spacing-lg) !important;\n}\n\n.my-5[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-xl) !important;\n  margin-bottom: var(--spacing-xl) !important;\n}\n\n.my-auto[_ngcontent-%COMP%] {\n  margin-top: auto !important;\n  margin-bottom: auto !important;\n}\n\n.p-0[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n\n.p-1[_ngcontent-%COMP%] {\n  padding: var(--spacing-xs) !important;\n}\n\n.p-2[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) !important;\n}\n\n.p-3[_ngcontent-%COMP%] {\n  padding: var(--spacing-md) !important;\n}\n\n.p-4[_ngcontent-%COMP%] {\n  padding: var(--spacing-lg) !important;\n}\n\n.p-5[_ngcontent-%COMP%] {\n  padding: var(--spacing-xl) !important;\n}\n\n.px-0[_ngcontent-%COMP%] {\n  padding-right: 0 !important;\n  padding-left: 0 !important;\n}\n\n.px-1[_ngcontent-%COMP%] {\n  padding-right: var(--spacing-xs) !important;\n  padding-left: var(--spacing-xs) !important;\n}\n\n.px-2[_ngcontent-%COMP%] {\n  padding-right: var(--spacing-sm) !important;\n  padding-left: var(--spacing-sm) !important;\n}\n\n.px-3[_ngcontent-%COMP%] {\n  padding-right: var(--spacing-md) !important;\n  padding-left: var(--spacing-md) !important;\n}\n\n.px-4[_ngcontent-%COMP%] {\n  padding-right: var(--spacing-lg) !important;\n  padding-left: var(--spacing-lg) !important;\n}\n\n.px-5[_ngcontent-%COMP%] {\n  padding-right: var(--spacing-xl) !important;\n  padding-left: var(--spacing-xl) !important;\n}\n\n.py-0[_ngcontent-%COMP%] {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.py-1[_ngcontent-%COMP%] {\n  padding-top: var(--spacing-xs) !important;\n  padding-bottom: var(--spacing-xs) !important;\n}\n\n.py-2[_ngcontent-%COMP%] {\n  padding-top: var(--spacing-sm) !important;\n  padding-bottom: var(--spacing-sm) !important;\n}\n\n.py-3[_ngcontent-%COMP%] {\n  padding-top: var(--spacing-md) !important;\n  padding-bottom: var(--spacing-md) !important;\n}\n\n.py-4[_ngcontent-%COMP%] {\n  padding-top: var(--spacing-lg) !important;\n  padding-bottom: var(--spacing-lg) !important;\n}\n\n.py-5[_ngcontent-%COMP%] {\n  padding-top: var(--spacing-xl) !important;\n  padding-bottom: var(--spacing-xl) !important;\n}\n\n.text-left[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n\n.text-right[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n\n.text-center[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n\n.text-justify[_ngcontent-%COMP%] {\n  text-align: justify !important;\n}\n\n.text-lowercase[_ngcontent-%COMP%] {\n  text-transform: lowercase !important;\n}\n\n.text-uppercase[_ngcontent-%COMP%] {\n  text-transform: uppercase !important;\n}\n\n.text-capitalize[_ngcontent-%COMP%] {\n  text-transform: capitalize !important;\n}\n\n.fw-light[_ngcontent-%COMP%] {\n  font-weight: var(--font-light) !important;\n}\n\n.fw-normal[_ngcontent-%COMP%] {\n  font-weight: var(--font-normal) !important;\n}\n\n.fw-medium[_ngcontent-%COMP%] {\n  font-weight: var(--font-medium) !important;\n}\n\n.fw-semibold[_ngcontent-%COMP%] {\n  font-weight: var(--font-semibold) !important;\n}\n\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: var(--font-bold) !important;\n}\n\n.fs-xs[_ngcontent-%COMP%] {\n  font-size: var(--text-xs) !important;\n}\n\n.fs-sm[_ngcontent-%COMP%] {\n  font-size: var(--text-sm) !important;\n}\n\n.fs-md[_ngcontent-%COMP%] {\n  font-size: var(--text-base) !important;\n}\n\n.fs-lg[_ngcontent-%COMP%] {\n  font-size: var(--text-lg) !important;\n}\n\n.fs-xl[_ngcontent-%COMP%] {\n  font-size: var(--text-xl) !important;\n}\n\n.fs-2xl[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl) !important;\n}\n\n.fs-3xl[_ngcontent-%COMP%] {\n  font-size: var(--text-3xl) !important;\n}\n\n.text-primary[_ngcontent-%COMP%] {\n  color: var(--primary-color) !important;\n}\n\n.text-secondary[_ngcontent-%COMP%] {\n  color: var(--secondary-color) !important;\n}\n\n.text-success[_ngcontent-%COMP%] {\n  color: var(--success-color) !important;\n}\n\n.text-error[_ngcontent-%COMP%] {\n  color: var(--error-color) !important;\n}\n\n.text-warning[_ngcontent-%COMP%] {\n  color: var(--warning-color) !important;\n}\n\n.text-info[_ngcontent-%COMP%] {\n  color: var(--info-color) !important;\n}\n\n.text-light[_ngcontent-%COMP%] {\n  color: var(--text-white) !important;\n}\n\n.text-dark[_ngcontent-%COMP%] {\n  color: var(--text-primary) !important;\n}\n\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted) !important;\n}\n\n.bg-primary[_ngcontent-%COMP%] {\n  background-color: var(--primary-color) !important;\n}\n\n.bg-secondary[_ngcontent-%COMP%] {\n  background-color: var(--secondary-color) !important;\n}\n\n.bg-success[_ngcontent-%COMP%] {\n  background-color: var(--success-color) !important;\n}\n\n.bg-error[_ngcontent-%COMP%] {\n  background-color: var(--error-color) !important;\n}\n\n.bg-warning[_ngcontent-%COMP%] {\n  background-color: var(--warning-color) !important;\n}\n\n.bg-info[_ngcontent-%COMP%] {\n  background-color: var(--info-color) !important;\n}\n\n.bg-light[_ngcontent-%COMP%] {\n  background-color: var(--bg-secondary) !important;\n}\n\n.bg-dark[_ngcontent-%COMP%] {\n  background-color: var(--gray-900) !important;\n}\n\n.bg-white[_ngcontent-%COMP%] {\n  background-color: var(--bg-primary) !important;\n}\n\n.bg-transparent[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n}\n\n.border[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-medium) !important;\n}\n\n.border-0[_ngcontent-%COMP%] {\n  border: 0 !important;\n}\n\n.border-top[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--border-medium) !important;\n}\n\n.border-end[_ngcontent-%COMP%] {\n  border-right: 1px solid var(--border-medium) !important;\n}\n\n.border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-medium) !important;\n}\n\n.border-start[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--border-medium) !important;\n}\n\n.border-primary[_ngcontent-%COMP%] {\n  border-color: var(--primary-color) !important;\n}\n\n.border-secondary[_ngcontent-%COMP%] {\n  border-color: var(--secondary-color) !important;\n}\n\n.border-success[_ngcontent-%COMP%] {\n  border-color: var(--success-color) !important;\n}\n\n.border-error[_ngcontent-%COMP%] {\n  border-color: var(--error-color) !important;\n}\n\n.border-warning[_ngcontent-%COMP%] {\n  border-color: var(--warning-color) !important;\n}\n\n.border-info[_ngcontent-%COMP%] {\n  border-color: var(--info-color) !important;\n}\n\n.rounded-none[_ngcontent-%COMP%] {\n  border-radius: var(--radius-none) !important;\n}\n\n.rounded-sm[_ngcontent-%COMP%] {\n  border-radius: var(--radius-sm) !important;\n}\n\n.rounded[_ngcontent-%COMP%] {\n  border-radius: var(--radius-md) !important;\n}\n\n.rounded-lg[_ngcontent-%COMP%] {\n  border-radius: var(--radius-lg) !important;\n}\n\n.rounded-xl[_ngcontent-%COMP%] {\n  border-radius: var(--radius-xl) !important;\n}\n\n.rounded-2xl[_ngcontent-%COMP%] {\n  border-radius: var(--radius-2xl) !important;\n}\n\n.rounded-3xl[_ngcontent-%COMP%] {\n  border-radius: var(--radius-3xl) !important;\n}\n\n.rounded-circle[_ngcontent-%COMP%] {\n  border-radius: 50% !important;\n}\n\n.rounded-pill[_ngcontent-%COMP%] {\n  border-radius: var(--radius-full) !important;\n}\n\n.shadow-none[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n.shadow-sm[_ngcontent-%COMP%] {\n  box-shadow: var(--shadow-sm) !important;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: var(--shadow-md) !important;\n}\n\n.shadow-lg[_ngcontent-%COMP%] {\n  box-shadow: var(--shadow-lg) !important;\n}\n\n.shadow-xl[_ngcontent-%COMP%] {\n  box-shadow: var(--shadow-xl) !important;\n}\n\n.position-static[_ngcontent-%COMP%] {\n  position: static !important;\n}\n\n.position-relative[_ngcontent-%COMP%] {\n  position: relative !important;\n}\n\n.position-absolute[_ngcontent-%COMP%] {\n  position: absolute !important;\n}\n\n.position-fixed[_ngcontent-%COMP%] {\n  position: fixed !important;\n}\n\n.position-sticky[_ngcontent-%COMP%] {\n  position: sticky !important;\n}\n\n.top-0[_ngcontent-%COMP%] {\n  top: 0 !important;\n}\n\n.top-50[_ngcontent-%COMP%] {\n  top: 50% !important;\n}\n\n.top-100[_ngcontent-%COMP%] {\n  top: 100% !important;\n}\n\n.bottom-0[_ngcontent-%COMP%] {\n  bottom: 0 !important;\n}\n\n.bottom-50[_ngcontent-%COMP%] {\n  bottom: 50% !important;\n}\n\n.bottom-100[_ngcontent-%COMP%] {\n  bottom: 100% !important;\n}\n\n.start-0[_ngcontent-%COMP%] {\n  left: 0 !important;\n}\n\n.start-50[_ngcontent-%COMP%] {\n  left: 50% !important;\n}\n\n.start-100[_ngcontent-%COMP%] {\n  left: 100% !important;\n}\n\n.end-0[_ngcontent-%COMP%] {\n  right: 0 !important;\n}\n\n.end-50[_ngcontent-%COMP%] {\n  right: 50% !important;\n}\n\n.end-100[_ngcontent-%COMP%] {\n  right: 100% !important;\n}\n\n.translate-middle[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%) !important;\n}\n\n.translate-middle-x[_ngcontent-%COMP%] {\n  transform: translateX(-50%) !important;\n}\n\n.translate-middle-y[_ngcontent-%COMP%] {\n  transform: translateY(-50%) !important;\n}\n\n.visible[_ngcontent-%COMP%] {\n  visibility: visible !important;\n}\n\n.invisible[_ngcontent-%COMP%] {\n  visibility: hidden !important;\n}\n\n.overflow-auto[_ngcontent-%COMP%] {\n  overflow: auto !important;\n}\n\n.overflow-hidden[_ngcontent-%COMP%] {\n  overflow: hidden !important;\n}\n\n.overflow-visible[_ngcontent-%COMP%] {\n  overflow: visible !important;\n}\n\n.overflow-scroll[_ngcontent-%COMP%] {\n  overflow: scroll !important;\n}\n\n.w-25[_ngcontent-%COMP%] {\n  width: 25% !important;\n}\n\n.w-50[_ngcontent-%COMP%] {\n  width: 50% !important;\n}\n\n.w-75[_ngcontent-%COMP%] {\n  width: 75% !important;\n}\n\n.w-100[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.w-auto[_ngcontent-%COMP%] {\n  width: auto !important;\n}\n\n.h-25[_ngcontent-%COMP%] {\n  height: 25% !important;\n}\n\n.h-50[_ngcontent-%COMP%] {\n  height: 50% !important;\n}\n\n.h-75[_ngcontent-%COMP%] {\n  height: 75% !important;\n}\n\n.h-100[_ngcontent-%COMP%] {\n  height: 100% !important;\n}\n\n.h-auto[_ngcontent-%COMP%] {\n  height: auto !important;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem 1rem;\n  font-weight: var(--font-medium);\n  border-radius: var(--radius-md);\n  transition: all var(--transition-fast) var(--ease-in-out);\n  cursor: pointer;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: var(--shadow-focus);\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n.btn.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  font-size: var(--text-sm);\n}\n.btn.btn-lg[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  font-size: var(--text-lg);\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: var(--primary-dark);\n}\n.btn.btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  background-color: var(--primary-dark);\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background-color: var(--secondary-color);\n  color: white;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: var(--secondary-dark);\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:active:not(:disabled) {\n  background-color: var(--secondary-dark);\n}\n.btn.btn-success[_ngcontent-%COMP%] {\n  background-color: var(--success-color);\n  color: white;\n}\n.btn.btn-success[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: var(--success-dark);\n}\n.btn.btn-success[_ngcontent-%COMP%]:active:not(:disabled) {\n  background-color: var(--success-dark);\n}\n.btn.btn-error[_ngcontent-%COMP%] {\n  background-color: var(--error-color);\n  color: white;\n}\n.btn.btn-error[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: var(--error-dark);\n}\n.btn.btn-error[_ngcontent-%COMP%]:active:not(:disabled) {\n  background-color: var(--error-dark);\n}\n.btn.btn-warning[_ngcontent-%COMP%] {\n  background-color: var(--warning-color);\n  color: white;\n}\n.btn.btn-warning[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: var(--warning-dark);\n}\n.btn.btn-warning[_ngcontent-%COMP%]:active:not(:disabled) {\n  background-color: var(--warning-dark);\n}\n.btn.btn-outline-primary[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: var(--primary-color);\n  border: 1px solid var(--primary-color);\n}\n.btn.btn-outline-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: var(--primary-color);\n  color: white;\n}\n.btn.btn-outline-secondary[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: var(--secondary-color);\n  border: 1px solid var(--secondary-color);\n}\n.btn.btn-outline-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: var(--secondary-color);\n  color: white;\n}\n.btn.btn-ghost[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: var(--text-primary);\n}\n.btn.btn-ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: var(--gray-100);\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-md);\n  overflow: hidden;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  padding: var(--spacing-md) var(--spacing-lg);\n  border-bottom: 1px solid var(--border-light);\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: var(--spacing-lg);\n}\n.card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  padding: var(--spacing-md) var(--spacing-lg);\n  border-top: 1px solid var(--border-light);\n  background-color: var(--bg-secondary);\n}\n\n.form-control[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.5rem 0.75rem;\n  background-color: var(--bg-primary);\n  border: 1px solid var(--border-medium);\n  border-radius: var(--radius-md);\n  font-size: var(--text-base);\n  line-height: 1.5;\n  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: var(--shadow-focus);\n}\n.form-control[_ngcontent-%COMP%]:disabled, .form-control[readonly][_ngcontent-%COMP%] {\n  background-color: var(--gray-100);\n  opacity: 0.7;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-md);\n}\n\n.form-label[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--spacing-xs);\n  font-weight: var(--font-medium);\n}\n\n.form-text[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-xs);\n  font-size: var(--text-sm);\n  color: var(--text-muted);\n}\n\n.form-check[_ngcontent-%COMP%] {\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5rem;\n  margin-bottom: var(--spacing-xs);\n}\n.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  float: left;\n  margin-left: -1.5rem;\n}\n.form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-in-out;\n}\n\n.slide-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideUp 0.4s ease-out;\n}\n\n.slide-down[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideDown 0.4s ease-out;\n}\n\n.slide-left[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideLeft 0.4s ease-out;\n}\n\n.slide-right[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideRight 0.4s ease-out;\n}\n\n.zoom-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_zoomIn 0.3s ease-out;\n}\n\n.zoom-out[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_zoomOut 0.3s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    transform: translateY(-20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideLeft {\n  from {\n    transform: translateX(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideRight {\n  from {\n    transform: translateX(-20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_zoomIn {\n  from {\n    transform: scale(0.95);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_zoomOut {\n  from {\n    transform: scale(1.05);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\nhtml[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  font-size: 16px;\n  scroll-behavior: smooth;\n}\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: inherit;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: var(--font-primary);\n  font-size: var(--text-base);\n  color: var(--text-primary);\n  background: var(--bg-secondary);\n  margin: 0;\n  padding: 0;\n  line-height: var(--leading-normal);\n  min-height: 100vh;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  color: var(--text-primary);\n  margin-top: 0;\n  margin-bottom: 0.5em;\n  font-weight: var(--font-bold);\n  line-height: var(--leading-tight);\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: var(--text-4xl);\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: var(--text-3xl);\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n}\n\nh4[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n}\n\nh5[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n}\n\nh6[_ngcontent-%COMP%] {\n  font-size: var(--text-base);\n}\n\na[_ngcontent-%COMP%] {\n  color: var(--text-link);\n  text-decoration: none;\n  transition: color var(--transition-fast);\n}\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:focus {\n  color: var(--primary-dark);\n  text-decoration: underline;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n  display: block;\n  border-radius: var(--radius-md);\n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-family: inherit;\n  font-size: inherit;\n  color: inherit;\n  background: none;\n  border: none;\n  outline: none;\n}\n\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n\nul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%] {\n  padding-left: 1.5em;\n  margin-top: 0;\n  margin-bottom: 1em;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: var(--container-xl);\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: var(--spacing-md);\n  padding-right: var(--spacing-md);\n}\n@media (max-width: 1280px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: var(--container-lg);\n  }\n}\n@media (max-width: 1024px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: var(--container-md);\n  }\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding-left: var(--spacing-sm);\n    padding-right: var(--spacing-sm);\n  }\n}\n\n.products-page[_ngcontent-%COMP%] {\n  padding-top: var(--spacing-lg);\n  padding-bottom: var(--spacing-xl);\n}\n.products-page[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-lg);\n}\n.products-page[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--text-3xl);\n  color: var(--text-primary);\n  font-weight: var(--font-bold);\n}\n.products-page[_ngcontent-%COMP%]   .products-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: var(--spacing-lg);\n}\n@media (max-width: 600px) {\n  .products-page[_ngcontent-%COMP%]   .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n    gap: var(--spacing-md);\n  }\n}\n.products-page[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%] {\n  background-color: var(--surface-color, #fff);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-md);\n  overflow: hidden;\n  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;\n  display: flex;\n  flex-direction: column;\n}\n.products-page[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: var(--shadow-lg);\n}\n.products-page[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n.products-page[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n}\n.products-page[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%] {\n  padding: var(--spacing-md);\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n}\n.products-page[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n  font-weight: var(--font-semibold);\n  color: var(--text-primary);\n  margin-bottom: var(--spacing-xs);\n  line-height: 1.3;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-height: 2.6em;\n}\n.products-page[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .product-category[_ngcontent-%COMP%] {\n  font-size: var(--text-sm);\n  color: var(--text-muted);\n  margin-bottom: var(--spacing-sm);\n}\n.products-page[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n  font-weight: var(--font-bold);\n  color: var(--primary-color);\n  margin-top: auto;\n}\n.products-page[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%] {\n  width: calc(100% - 2 * var(--spacing-md));\n  margin: 0 var(--spacing-md) var(--spacing-md) var(--spacing-md);\n  padding: var(--spacing-sm) 0;\n  font-size: var(--text-base);\n}\n.products-page[_ngcontent-%COMP%]   .no-products-message[_ngcontent-%COMP%], .products-page[_ngcontent-%COMP%]   .loading-message[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: var(--spacing-2xl) 0;\n  text-align: center;\n  color: var(--text-muted);\n}\n.products-page[_ngcontent-%COMP%]   .no-products-message[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .products-page[_ngcontent-%COMP%]   .no-products-message[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%], .products-page[_ngcontent-%COMP%]   .loading-message[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .products-page[_ngcontent-%COMP%]   .loading-message[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  width: 3rem;\n  height: 3rem;\n  margin-bottom: var(--spacing-md);\n  color: var(--text-muted);\n}\n.products-page[_ngcontent-%COMP%]   .no-products-message[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]  circle, .products-page[_ngcontent-%COMP%]   .loading-message[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]  circle {\n  stroke: var(--primary-color) !important;\n}\n.products-page[_ngcontent-%COMP%]   .no-products-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .products-page[_ngcontent-%COMP%]   .loading-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZGVzaWduLXN5c3RlbS5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9wYWdlcy9wcm9kdWN0cy1wYWdlL3Byb2R1Y3RzLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFFRSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUVBLDBCQUFBO0VBQ0EsbUNBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBR0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFHQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFFQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFFQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFFQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFHQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFHQSxxQkFBQTtFQUNBLHdCQUFBO0VBR0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtFQUdBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBR0EsMkRBQUE7QUN4QkY7O0FEOEJBO0VBRUUsMEdBQUE7RUFDQSxnREFBQTtFQUNBLGlGQUFBO0VBR0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBR0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBR0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNB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aklBO0VBQWMsaURBQUE7QUNxSWQ7O0FEcElBO0VBQVcsOENBQUE7QUN3SVg7O0FEdklBO0VBQVksZ0RBQUE7QUMySVo7O0FEMUlBO0VBQVcsNENBQUE7QUM4SVg7O0FEN0lBO0VBQVksOENBQUE7QUNpSlo7O0FEaEpBO0VBQWtCLHdDQUFBO0FDb0psQjs7QURqSkE7RUFBVSxpREFBQTtBQ3FKVjs7QURwSkE7RUFBWSxvQkFBQTtBQ3dKWjs7QUR2SkE7RUFBYyxxREFBQTtBQzJKZDs7QUQxSkE7RUFBYyx1REFBQTtBQzhKZDs7QUQ3SkE7RUFBaUIsd0RBQUE7QUNpS2pCOztBRGhLQTtFQUFnQixzREFBQTtBQ29LaEI7O0FEbEtBO0VBQWtCLDZDQUFBO0FDc0tsQjs7QURyS0E7RUFBb0IsK0NBQUE7QUN5S3BCOztBRHhLQTtFQUFrQiw2Q0FBQTtBQzRLbEI7O0FEM0tBO0VBQWdCLDJDQUFBO0FDK0toQjs7QUQ5S0E7RUFBa0IsNkNBQUE7QUNrTGxCOztBRGpMQTtFQUFlLDBDQUFBO0FDcUxmOztBRGxMQTtFQUFnQiw0Q0FBQTtBQ3NMaEI7O0FEckxBO0VBQWMsMENBQUE7QUN5TGQ7O0FEeExBO0VBQVcsMENBQUE7QUM0TFg7O0FEM0xBO0VBQWMsMENBQUE7QUMrTGQ7O0FEOUxBO0VBQWMsMENBQUE7QUNrTWQ7O0FEak1BO0VBQWUsMkNBQUE7QUNxTWY7O0FEcE1BO0VBQWUsMkNBQUE7QUN3TWY7O0FEdk1BO0VBQWtCLDZCQUFBO0FDMk1sQjs7QUQxTUE7RUFBZ0IsNENBQUE7QUM4TWhCOztBRDNNQTtFQUFlLDJCQUFBO0FDK01mOztBRDlNQTtFQUFhLHVDQUFBO0FDa05iOztBRGpOQTtFQUFVLHVDQUFBO0FDcU5WOztBRHBOQTtFQUFhLHVDQUFBO0FDd05iOztBRHZOQTtFQUFhLHVDQUFBO0FDMk5iOztBRHhOQTtFQUFtQiwyQkFBQTtBQzRObkI7O0FEM05BO0VBQXFCLDZCQUFBO0FDK05yQjs7QUQ5TkE7RUFBcUIsNkJBQUE7QUNrT3JCOztBRGpPQTtFQUFrQiwwQkFBQTtBQ3FPbEI7O0FEcE9BO0VB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b3RDUjtBQWp0Q007RUFDRSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0NBQUE7QUFtdENSO0FBaHRDTTtFQUNFLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FBa3RDUjtBQTlzQ0k7RUFDRSx5Q0FBQTtFQUNBLCtEQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQWd0Q047QUE1c0NFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQThzQ0o7QUE1c0NJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtBQThzQ047QUE1c0NJO0VBQ0ksdUNBQUE7QUE4c0NSO0FBM3NDSTtFQUNFLHlCQUFBO0FBNnNDTiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEUtQ29tbWVyY2UgRGVzaWduIFN5c3RlbVxuLy8gQSBjb21wcmVoZW5zaXZlIFNDU1MgZnJhbWV3b3JrIGZvciBjb25zaXN0ZW50IHN0eWxpbmcgYWNyb3NzIHRoZSBhcHBsaWNhdGlvblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIENPTE9SIFNZU1RFTVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG46cm9vdCB7XG4gIC8vIEJyYW5kIENvbG9yc1xuICAtLXByaW1hcnktY29sb3I6ICMyNTYzZWI7XG4gIC0tcHJpbWFyeS1yZ2I6IDM3LCA5OSwgMjM1OyAvLyBBZGQgdGhpcyBmb3IgY29tcGF0aWJpbGl0eVxuICAtLXByaW1hcnktbGlnaHQ6ICMzYjgyZjY7XG4gIC0tcHJpbWFyeS1kYXJrOiAjMWQ0ZWQ4O1xuICBcbiAgLS1zZWNvbmRhcnktY29sb3I6ICM3YzNhZWQ7XG4gIC0tc2Vjb25kYXJ5LWNvbG9yLXJnYjogMTI0LCA1OCwgMjM3O1xuICAtLXNlY29uZGFyeS1saWdodDogIzhiNWNmNjtcbiAgLS1zZWNvbmRhcnktZGFyazogIzZkMjhkOTtcbiAgXG4gIC8vIE5ldXRyYWwgQ29sb3JzXG4gIC0tZ3JheS01MDogI2Y5ZmFmYjtcbiAgLS1ncmF5LTEwMDogI2YzZjRmNjtcbiAgLS1ncmF5LTIwMDogI2U1ZTdlYjtcbiAgLS1ncmF5LTMwMDogI2QxZDVkYjtcbiAgLS1ncmF5LTQwMDogIzljYTNhZjtcbiAgLS1ncmF5LTUwMDogIzZiNzI4MDtcbiAgLS1ncmF5LTYwMDogIzRiNTU2MztcbiAgLS1ncmF5LTcwMDogIzM3NDE1MTtcbiAgLS1ncmF5LTgwMDogIzFmMjkzNztcbiAgLS1ncmF5LTkwMDogIzExMTgyNztcbiAgXG4gIC8vIFNlbWFudGljIENvbG9yc1xuICAtLXN1Y2Nlc3MtY29sb3I6ICMxMGI5ODE7XG4gIC0tc3VjY2Vzcy1saWdodDogIzM0ZDM5OTtcbiAgLS1zdWNjZXNzLWRhcms6ICMwNTk2Njk7XG4gIFxuICAtLWVycm9yLWNvbG9yOiAjZWY0NDQ0O1xuICAtLWVycm9yLWxpZ2h0OiAjZjg3MTcxO1xuICAtLWVycm9yLWRhcms6ICNkYzI2MjY7XG4gIFxuICAtLXdhcm5pbmctY29sb3I6ICNmNTllMGI7XG4gIC0td2FybmluZy1saWdodDogI2ZiYmYyNDtcbiAgLS13YXJuaW5nLWRhcms6ICNkOTc3MDY7XG4gIFxuICAtLWluZm8tY29sb3I6ICMzYjgyZjY7XG4gIC0taW5mby1saWdodDogIzYwYTVmYTtcbiAgLS1pbmZvLWRhcms6ICMyNTYzZWI7XG5cbiAgLy8gQmFja2dyb3VuZCBDb2xvcnNcbiAgLS1iZy1wcmltYXJ5OiAjZmZmZmZmO1xuICAtLWJnLXNlY29uZGFyeTogI2Y5ZmFmYjtcbiAgLS1iZy10ZXJ0aWFyeTogI2YzZjRmNjtcbiAgXG4gIC8vIFN1cmZhY2UgQ29sb3JzXG4gIC0tc3VyZmFjZS1jb2xvcjogI2ZmZjsgICAgICAgICAvLyBBZGQgZm9yIGhlYWRlci9mb290ZXIgYmFja2dyb3VuZHNcbiAgLS1zdXJmYWNlLWxpZ2h0OiAjZjhmYWZjOyAgICAgIC8vIEFkZCBmb3IgbGlnaHQgYmFja2dyb3VuZHNcbiAgXG4gIC8vIFRleHQgQ29sb3JzXG4gIC0tdGV4dC1wcmltYXJ5OiAjMTExODI3O1xuICAtLXRleHQtc2Vjb25kYXJ5OiAjNGI1NTYzO1xuICAtLXRleHQtbXV0ZWQ6ICM2YjcyODA7XG4gIC0tdGV4dC13aGl0ZTogI2ZmZmZmZjtcbiAgLS10ZXh0LWxpbms6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICBcbiAgLy8gQm9yZGVyIENvbG9yc1xuICAtLWJvcmRlci1jb2xvcjogI2U1ZTdlYjsgICAgICAgLy8gQWRkIGZvciBib3JkZXIgY29tcGF0aWJpbGl0eVxuICAtLWJvcmRlci1saWdodDogI2U1ZTdlYjtcbiAgLS1ib3JkZXItbWVkaXVtOiAjZDFkNWRiO1xuICAtLWJvcmRlci1kYXJrOiAjOWNhM2FmO1xuICBcbiAgLy8gRm9jdXMgU3RhdGVzXG4gIC0tZm9jdXMtcmluZzogMCAwIDAgM3B4IHJnYmEodmFyKC0tcHJpbWFyeS1jb2xvci1yZ2IpLCAwLjQpO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFRZUE9HUkFQSFkgU1lTVEVNXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbjpyb290IHtcbiAgLy8gRm9udCBGYW1pbGllc1xuICAtLWZvbnQtcHJpbWFyeTogJ0ludGVyJywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBzYW5zLXNlcmlmO1xuICAtLWZvbnQtc2Vjb25kYXJ5OiAnUG9wcGlucycsICdJbnRlcicsIHNhbnMtc2VyaWY7XG4gIC0tZm9udC1tb25vc3BhY2U6ICdTRk1vbm8tUmVndWxhcicsIENvbnNvbGFzLCAnTGliZXJhdGlvbiBNb25vJywgTWVubG8sIG1vbm9zcGFjZTtcbiAgXG4gIC8vIEZvbnQgU2l6ZXNcbiAgLS10ZXh0LXhzOiAwLjc1cmVtOyAgICAvLyAxMnB4XG4gIC0tdGV4dC1zbTogMC44NzVyZW07ICAgLy8gMTRweFxuICAtLXRleHQtYmFzZTogMXJlbTsgICAgIC8vIDE2cHhcbiAgLS10ZXh0LWxnOiAxLjEyNXJlbTsgICAvLyAxOHB4XG4gIC0tdGV4dC14bDogMS4yNXJlbTsgICAgLy8gMjBweFxuICAtLXRleHQtMnhsOiAxLjVyZW07ICAgIC8vIDI0cHhcbiAgLS10ZXh0LTN4bDogMS44NzVyZW07ICAvLyAzMHB4XG4gIC0tdGV4dC00eGw6IDIuMjVyZW07ICAgLy8gMzZweFxuICAtLXRleHQtNXhsOiAzcmVtOyAgICAgIC8vIDQ4cHhcbiAgXG4gIC8vIExpbmUgSGVpZ2h0c1xuICAtLWxlYWRpbmctbm9uZTogMTtcbiAgLS1sZWFkaW5nLXRpZ2h0OiAxLjI1O1xuICAtLWxlYWRpbmctc251ZzogMS4zNzU7XG4gIC0tbGVhZGluZy1ub3JtYWw6IDEuNTtcbiAgLS1sZWFkaW5nLXJlbGF4ZWQ6IDEuNjI1O1xuICAtLWxlYWRpbmctbG9vc2U6IDI7XG4gIFxuICAvLyBGb250IFdlaWdodHNcbiAgLS1mb250LXRoaW46IDEwMDtcbiAgLS1mb250LWV4dHJhbGlnaHQ6IDIwMDtcbiAgLS1mb250LWxpZ2h0OiAzMDA7XG4gIC0tZm9udC1ub3JtYWw6IDQwMDtcbiAgLS1mb250LW1lZGl1bTogNTAwO1xuICAtLWZvbnQtc2VtaWJvbGQ6IDYwMDtcbiAgLS1mb250LWJvbGQ6IDcwMDtcbiAgLS1mb250LWV4dHJhYm9sZDogODAwO1xuICAtLWZvbnQtYmxhY2s6IDkwMDtcbiAgXG4gIC8vIExldHRlciBTcGFjaW5nXG4gIC0tdHJhY2tpbmctdGlnaHRlcjogLTAuMDVlbTtcbiAgLS10cmFja2luZy10aWdodDogLTAuMDI1ZW07XG4gIC0tdHJhY2tpbmctbm9ybWFsOiAwZW07XG4gIC0tdHJhY2tpbmctd2lkZTogMC4wMjVlbTtcbiAgLS10cmFja2luZy13aWRlcjogMC4wNWVtO1xuICAtLXRyYWNraW5nLXdpZGVzdDogMC4xZW07XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU1BBQ0lORyBTWVNURU1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuOnJvb3Qge1xuICAtLXNwYWNpbmcteHM6IDAuMjVyZW07ICAgLy8gNHB4XG4gIC0tc3BhY2luZy1zbTogMC41cmVtOyAgICAvLyA4cHhcbiAgLS1zcGFjaW5nLW1kOiAxcmVtOyAgICAgIC8vIDE2cHhcbiAgLS1zcGFjaW5nLWxnOiAxLjVyZW07ICAgIC8vIDI0cHhcbiAgLS1zcGFjaW5nLXhsOiAycmVtOyAgICAgIC8vIDMycHhcbiAgLS1zcGFjaW5nLTJ4bDogM3JlbTsgICAgIC8vIDQ4cHhcbiAgLS1zcGFjaW5nLTN4bDogNHJlbTsgICAgIC8vIDY0cHhcbiAgLS1zcGFjaW5nLTR4bDogNnJlbTsgICAgIC8vIDk2cHhcbiAgXG4gIC8vIENvbnRhaW5lciBXaWR0aHNcbiAgLS1jb250YWluZXItc206IDY0MHB4O1xuICAtLWNvbnRhaW5lci1tZDogNzY4cHg7XG4gIC0tY29udGFpbmVyLWxnOiAxMDI0cHg7XG4gIC0tY29udGFpbmVyLXhsOiAxMjgwcHg7XG4gIC0tY29udGFpbmVyLTJ4bDogMTUzNnB4O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJPUkRFUiBSQURJVVMgU1lTVEVNXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbjpyb290IHtcbiAgLS1yYWRpdXMtbm9uZTogMDtcbiAgLS1yYWRpdXMtc206IDAuMTI1cmVtOyAgICAvLyAycHhcbiAgLS1yYWRpdXMtbWQ6IDAuMzc1cmVtOyAgICAvLyA2cHhcbiAgLS1yYWRpdXMtbGc6IDAuNXJlbTsgICAgICAvLyA4cHhcbiAgLS1yYWRpdXMteGw6IDAuNzVyZW07ICAgICAvLyAxMnB4XG4gIC0tcmFkaXVzLTJ4bDogMXJlbTsgICAgICAgLy8gMTZweFxuICAtLXJhZGl1cy0zeGw6IDEuNXJlbTsgICAgIC8vIDI0cHhcbiAgLS1yYWRpdXMtZnVsbDogOTk5OXB4O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNIQURPV1MgU1lTVEVNXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbjpyb290IHtcbiAgLS1zaGFkb3ctc206IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIC0tc2hhZG93LW1kOiAwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gIC0tc2hhZG93LWxnOiAwIDEwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA0cHggNnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgLS1zaGFkb3cteGw6IDAgMjBweCAyNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDEwcHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gIC0tc2hhZG93LTJ4bDogMCAyNXB4IDUwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgLS1zaGFkb3ctaW5uZXI6IGluc2V0IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gIFxuICAvLyBGb2N1cyBTaGFkb3dzXG4gIC0tc2hhZG93LWZvY3VzOiAwIDAgMCAzcHggcmdiYSh2YXIoLS1wcmltYXJ5LWNvbG9yLXJnYiksIDAuNCk7XG4gIC0tc2hhZG93LWZvY3VzLWVycm9yOiAwIDAgMCAzcHggcmdiYSgyMzksIDY4LCA2OCwgMC40KTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBUUkFOU0lUSU9OIFNZU1RFTVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG46cm9vdCB7XG4gIC0tdHJhbnNpdGlvbi1mYXN0ZXN0OiAxMDBtcztcbiAgLS10cmFuc2l0aW9uLWZhc3Q6IDE1MG1zO1xuICAtLXRyYW5zaXRpb24tbm9ybWFsOiAyNTBtcztcbiAgLS10cmFuc2l0aW9uLXNsb3c6IDQwMG1zO1xuICAtLXRyYW5zaXRpb24tc2xvd2VzdDogNzAwbXM7XG4gIFxuICAvLyBFYXNpbmcgRnVuY3Rpb25zXG4gIC0tZWFzZS1pbi1vdXQ6IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIC0tZWFzZS1pbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSk7XG4gIC0tZWFzZS1vdXQ6IGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICAtLWVhc2UtYm91bmNlOiBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gWi1JTkRFWCBTWVNURU1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuOnJvb3Qge1xuICAtLXotMDogMDtcbiAgLS16LTEwOiAxMDtcbiAgLS16LTIwOiAyMDtcbiAgLS16LTMwOiAzMDtcbiAgLS16LTQwOiA0MDtcbiAgLS16LTUwOiA1MDtcbiAgLS16LWF1dG86IGF1dG87XG4gIFxuICAvLyBTcGVjaWFsIFotSW5kZXhlc1xuICAtLXotZHJvcGRvd246IDEwMDA7XG4gIC0tei1zdGlja3k6IDEwMjA7XG4gIC0tei1maXhlZDogMTAzMDtcbiAgLS16LW1vZGFsLWJhY2tkcm9wOiAxMDQwO1xuICAtLXotbW9kYWw6IDEwNTA7XG4gIC0tei1wb3BvdmVyOiAxMDYwO1xuICAtLXotdG9vbHRpcDogMTA3MDtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNSVhJTlNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBGbGV4Ym94IEhlbHBlcnNcbkBtaXhpbiBmbGV4KCRkaXJlY3Rpb246IHJvdywgJGp1c3RpZnk6IGZsZXgtc3RhcnQsICRhbGlnbjogc3RyZXRjaCwgJHdyYXA6IG5vd3JhcCkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcbiAgZmxleC13cmFwOiAkd3JhcDtcbn1cblxuQG1peGluIGZsZXgtY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8vIFR5cG9ncmFwaHkgSGVscGVyc1xuQG1peGluIHRleHQtdHJ1bmNhdGUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuQG1peGluIHRleHQtY2xhbXAoJGxpbmVzOiAyKSB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6ICRsaW5lcztcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLy8gUmVzcG9uc2l2ZSBIZWxwZXJzXG5AbWl4aW4gcmVzcG9uZC10bygkYnJlYWtwb2ludCkge1xuICBAaWYgJGJyZWFrcG9pbnQgPT0gXCJzbVwiIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHsgQGNvbnRlbnQ7IH1cbiAgfSBAZWxzZSBpZiAkYnJlYWtwb2ludCA9PSBcIm1kXCIge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgeyBAY29udGVudDsgfVxuICB9IEBlbHNlIGlmICRicmVha3BvaW50ID09IFwibGdcIiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgeyBAY29udGVudDsgfVxuICB9IEBlbHNlIGlmICRicmVha3BvaW50ID09IFwieGxcIiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkgeyBAY29udGVudDsgfVxuICB9IEBlbHNlIGlmICRicmVha3BvaW50ID09IFwiMnhsXCIge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxNTM2cHgpIHsgQGNvbnRlbnQ7IH1cbiAgfVxufVxuXG4vLyBCdXR0b24gU3R5bGVzXG5AbWl4aW4gYnV0dG9uLWJhc2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC1tZWRpdW0pO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1mYXN0KSB2YXIoLS1lYXNlLWluLW91dCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWZvY3VzKTtcbiAgfVxuICBcbiAgJjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC42NTtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG59XG5cbkBtaXhpbiBidXR0b24tdmFyaWFudCgkYmcsICRjb2xvciwgJGhvdmVyLWJnLCAkYWN0aXZlLWJnKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZztcbiAgY29sb3I6ICRjb2xvcjtcbiAgXG4gICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRob3Zlci1iZztcbiAgfVxuICBcbiAgJjphY3RpdmU6bm90KDpkaXNhYmxlZCkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRhY3RpdmUtYmc7XG4gIH1cbn1cblxuLy8gQ2FyZCBTdHlsZXNcbkBtaXhpbiBjYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8vIEZvcm0gQ29udHJvbCBTdHlsZXNcbkBtaXhpbiBmb3JtLWNvbnRyb2wge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLW1lZGl1bSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1iYXNlKTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIHZhcigtLXRyYW5zaXRpb24tZmFzdCksIGJveC1zaGFkb3cgdmFyKC0tdHJhbnNpdGlvbi1mYXN0KTtcbiAgXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctZm9jdXMpO1xuICB9XG4gIFxuICAmOmRpc2FibGVkLCAmW3JlYWRvbmx5XSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0xMDApO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFVUSUxJVFkgQ0xBU1NFU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIERpc3BsYXkgVXRpbGl0aWVzXG4uZC1ub25lIHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG4uZC1pbmxpbmUgeyBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDsgfVxuLmQtaW5saW5lLWJsb2NrIHsgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7IH1cbi5kLWJsb2NrIHsgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgfVxuLmQtZmxleCB7IGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDsgfVxuLmQtaW5saW5lLWZsZXggeyBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50OyB9XG4uZC1ncmlkIHsgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50OyB9XG5cbi8vIEZsZXggVXRpbGl0aWVzXG4uZmxleC1yb3cgeyBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7IH1cbi5mbGV4LWNvbHVtbiB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDsgfVxuLmZsZXgtd3JhcCB7IGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50OyB9XG4uZmxleC1ub3dyYXAgeyBmbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50OyB9XG4uZmxleC1maWxsIHsgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDsgfVxuLmZsZXgtZ3Jvdy0wIHsgZmxleC1ncm93OiAwICFpbXBvcnRhbnQ7IH1cbi5mbGV4LWdyb3ctMSB7IGZsZXgtZ3JvdzogMSAhaW1wb3J0YW50OyB9XG4uZmxleC1zaHJpbmstMCB7IGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7IH1cbi5mbGV4LXNocmluay0xIHsgZmxleC1zaHJpbms6IDEgIWltcG9ydGFudDsgfVxuXG4uanVzdGlmeS1jb250ZW50LXN0YXJ0IHsganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7IH1cbi5qdXN0aWZ5LWNvbnRlbnQtZW5kIHsganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50OyB9XG4uanVzdGlmeS1jb250ZW50LWNlbnRlciB7IGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7IH1cbi5qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50OyB9XG4uanVzdGlmeS1jb250ZW50LWFyb3VuZCB7IGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7IH1cblxuLmFsaWduLWl0ZW1zLXN0YXJ0IHsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsgfVxuLmFsaWduLWl0ZW1zLWVuZCB7IGFsaWduLWl0ZW1zOiBmbGV4LWVuZCAhaW1wb3J0YW50OyB9XG4uYWxpZ24taXRlbXMtY2VudGVyIHsgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50OyB9XG4uYWxpZ24taXRlbXMtYmFzZWxpbmUgeyBhbGlnbi1pdGVtczogYmFzZWxpbmUgIWltcG9ydGFudDsgfVxuLmFsaWduLWl0ZW1zLXN0cmV0Y2ggeyBhbGlnbi1pdGVtczogc3RyZXRjaCAhaW1wb3J0YW50OyB9XG5cbi5hbGlnbi1zZWxmLXN0YXJ0IHsgYWxpZ24tc2VsZjogZmxleC1zdGFydCAhaW1wb3J0YW50OyB9XG4uYWxpZ24tc2VsZi1lbmQgeyBhbGlnbi1zZWxmOiBmbGV4LWVuZCAhaW1wb3J0YW50OyB9XG4uYWxpZ24tc2VsZi1jZW50ZXIgeyBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDsgfVxuLmFsaWduLXNlbGYtYmFzZWxpbmUgeyBhbGlnbi1zZWxmOiBiYXNlbGluZSAhaW1wb3J0YW50OyB9XG4uYWxpZ24tc2VsZi1zdHJldGNoIHsgYWxpZ24tc2VsZjogc3RyZXRjaCAhaW1wb3J0YW50OyB9XG5cbi8vIE1hcmdpbiBVdGlsaXRpZXNcbi5tLTAgeyBtYXJnaW46IDAgIWltcG9ydGFudDsgfVxuLm0tMSB7IG1hcmdpbjogdmFyKC0tc3BhY2luZy14cykgIWltcG9ydGFudDsgfVxuLm0tMiB7IG1hcmdpbjogdmFyKC0tc3BhY2luZy1zbSkgIWltcG9ydGFudDsgfVxuLm0tMyB7IG1hcmdpbjogdmFyKC0tc3BhY2luZy1tZCkgIWltcG9ydGFudDsgfVxuLm0tNCB7IG1hcmdpbjogdmFyKC0tc3BhY2luZy1sZykgIWltcG9ydGFudDsgfVxuLm0tNSB7IG1hcmdpbjogdmFyKC0tc3BhY2luZy14bCkgIWltcG9ydGFudDsgfVxuLm0tYXV0byB7IG1hcmdpbjogYXV0byAhaW1wb3J0YW50OyB9XG5cbi5teC0wIHsgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7IG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7IH1cbi5teC0xIHsgbWFyZ2luLXJpZ2h0OiB2YXIoLS1zcGFjaW5nLXhzKSAhaW1wb3J0YW50OyBtYXJnaW4tbGVmdDogdmFyKC0tc3BhY2luZy14cykgIWltcG9ydGFudDsgfVxuLm14LTIgeyBtYXJnaW4tcmlnaHQ6IHZhcigtLXNwYWNpbmctc20pICFpbXBvcnRhbnQ7IG1hcmdpbi1sZWZ0OiB2YXIoLS1zcGFjaW5nLXNtKSAhaW1wb3J0YW50OyB9XG4ubXgtMyB7IG1hcmdpbi1yaWdodDogdmFyKC0tc3BhY2luZy1tZCkgIWltcG9ydGFudDsgbWFyZ2luLWxlZnQ6IHZhcigtLXNwYWNpbmctbWQpICFpbXBvcnRhbnQ7IH1cbi5teC00IHsgbWFyZ2luLXJpZ2h0OiB2YXIoLS1zcGFjaW5nLWxnKSAhaW1wb3J0YW50OyBtYXJnaW4tbGVmdDogdmFyKC0tc3BhY2luZy1sZykgIWltcG9ydGFudDsgfVxuLm14LTUgeyBtYXJnaW4tcmlnaHQ6IHZhcigtLXNwYWNpbmcteGwpICFpbXBvcnRhbnQ7IG1hcmdpbi1sZWZ0OiB2YXIoLS1zcGFjaW5nLXhsKSAhaW1wb3J0YW50OyB9XG4ubXgtYXV0byB7IG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50OyBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50OyB9XG5cbi5teS0wIHsgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50OyBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7IH1cbi5teS0xIHsgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2luZy14cykgIWltcG9ydGFudDsgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy14cykgIWltcG9ydGFudDsgfVxuLm15LTIgeyBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjaW5nLXNtKSAhaW1wb3J0YW50OyBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLXNtKSAhaW1wb3J0YW50OyB9XG4ubXktMyB7IG1hcmdpbi10b3A6IHZhcigtLXNwYWNpbmctbWQpICFpbXBvcnRhbnQ7IG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctbWQpICFpbXBvcnRhbnQ7IH1cbi5teS00IHsgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2luZy1sZykgIWltcG9ydGFudDsgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy1sZykgIWltcG9ydGFudDsgfVxuLm15LTUgeyBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjaW5nLXhsKSAhaW1wb3J0YW50OyBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLXhsKSAhaW1wb3J0YW50OyB9XG4ubXktYXV0byB7IG1hcmdpbi10b3A6IGF1dG8gIWltcG9ydGFudDsgbWFyZ2luLWJvdHRvbTogYXV0byAhaW1wb3J0YW50OyB9XG5cbi8vIFBhZGRpbmcgVXRpbGl0aWVzXG4ucC0wIHsgcGFkZGluZzogMCAhaW1wb3J0YW50OyB9XG4ucC0xIHsgcGFkZGluZzogdmFyKC0tc3BhY2luZy14cykgIWltcG9ydGFudDsgfVxuLnAtMiB7IHBhZGRpbmc6IHZhcigtLXNwYWNpbmctc20pICFpbXBvcnRhbnQ7IH1cbi5wLTMgeyBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1kKSAhaW1wb3J0YW50OyB9XG4ucC00IHsgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZykgIWltcG9ydGFudDsgfVxuLnAtNSB7IHBhZGRpbmc6IHZhcigtLXNwYWNpbmcteGwpICFpbXBvcnRhbnQ7IH1cblxuLnB4LTAgeyBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7IHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50OyB9XG4ucHgtMSB7IHBhZGRpbmctcmlnaHQ6IHZhcigtLXNwYWNpbmcteHMpICFpbXBvcnRhbnQ7IHBhZGRpbmctbGVmdDogdmFyKC0tc3BhY2luZy14cykgIWltcG9ydGFudDsgfVxuLnB4LTIgeyBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zcGFjaW5nLXNtKSAhaW1wb3J0YW50OyBwYWRkaW5nLWxlZnQ6IHZhcigtLXNwYWNpbmctc20pICFpbXBvcnRhbnQ7IH1cbi5weC0zIHsgcGFkZGluZy1yaWdodDogdmFyKC0tc3BhY2luZy1tZCkgIWltcG9ydGFudDsgcGFkZGluZy1sZWZ0OiB2YXIoLS1zcGFjaW5nLW1kKSAhaW1wb3J0YW50OyB9XG4ucHgtNCB7IHBhZGRpbmctcmlnaHQ6IHZhcigtLXNwYWNpbmctbGcpICFpbXBvcnRhbnQ7IHBhZGRpbmctbGVmdDogdmFyKC0tc3BhY2luZy1sZykgIWltcG9ydGFudDsgfVxuLnB4LTUgeyBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zcGFjaW5nLXhsKSAhaW1wb3J0YW50OyBwYWRkaW5nLWxlZnQ6IHZhcigtLXNwYWNpbmcteGwpICFpbXBvcnRhbnQ7IH1cblxuLnB5LTAgeyBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50OyBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50OyB9XG4ucHktMSB7IHBhZGRpbmctdG9wOiB2YXIoLS1zcGFjaW5nLXhzKSAhaW1wb3J0YW50OyBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3BhY2luZy14cykgIWltcG9ydGFudDsgfVxuLnB5LTIgeyBwYWRkaW5nLXRvcDogdmFyKC0tc3BhY2luZy1zbSkgIWltcG9ydGFudDsgcGFkZGluZy1ib3R0b206IHZhcigtLXNwYWNpbmctc20pICFpbXBvcnRhbnQ7IH1cbi5weS0zIHsgcGFkZGluZy10b3A6IHZhcigtLXNwYWNpbmctbWQpICFpbXBvcnRhbnQ7IHBhZGRpbmctYm90dG9tOiB2YXIoLS1zcGFjaW5nLW1kKSAhaW1wb3J0YW50OyB9XG4ucHktNCB7IHBhZGRpbmctdG9wOiB2YXIoLS1zcGFjaW5nLWxnKSAhaW1wb3J0YW50OyBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3BhY2luZy1sZykgIWltcG9ydGFudDsgfVxuLnB5LTUgeyBwYWRkaW5nLXRvcDogdmFyKC0tc3BhY2luZy14bCkgIWltcG9ydGFudDsgcGFkZGluZy1ib3R0b206IHZhcigtLXNwYWNpbmcteGwpICFpbXBvcnRhbnQ7IH1cblxuLy8gVGV4dCBVdGlsaXRpZXNcbi50ZXh0LWxlZnQgeyB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7IH1cbi50ZXh0LXJpZ2h0IHsgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDsgfVxuLnRleHQtY2VudGVyIHsgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7IH1cbi50ZXh0LWp1c3RpZnkgeyB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7IH1cblxuLnRleHQtbG93ZXJjYXNlIHsgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50OyB9XG4udGV4dC11cHBlcmNhc2UgeyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7IH1cbi50ZXh0LWNhcGl0YWxpemUgeyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50OyB9XG5cbi5mdy1saWdodCB7IGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LWxpZ2h0KSAhaW1wb3J0YW50OyB9XG4uZnctbm9ybWFsIHsgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtbm9ybWFsKSAhaW1wb3J0YW50OyB9XG4uZnctbWVkaXVtIHsgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtbWVkaXVtKSAhaW1wb3J0YW50OyB9XG4uZnctc2VtaWJvbGQgeyBmb250LXdlaWdodDogdmFyKC0tZm9udC1zZW1pYm9sZCkgIWltcG9ydGFudDsgfVxuLmZ3LWJvbGQgeyBmb250LXdlaWdodDogdmFyKC0tZm9udC1ib2xkKSAhaW1wb3J0YW50OyB9XG5cbi5mcy14cyB7IGZvbnQtc2l6ZTogdmFyKC0tdGV4dC14cykgIWltcG9ydGFudDsgfVxuLmZzLXNtIHsgZm9udC1zaXplOiB2YXIoLS10ZXh0LXNtKSAhaW1wb3J0YW50OyB9XG4uZnMtbWQgeyBmb250LXNpemU6IHZhcigtLXRleHQtYmFzZSkgIWltcG9ydGFudDsgfVxuLmZzLWxnIHsgZm9udC1zaXplOiB2YXIoLS10ZXh0LWxnKSAhaW1wb3J0YW50OyB9XG4uZnMteGwgeyBmb250LXNpemU6IHZhcigtLXRleHQteGwpICFpbXBvcnRhbnQ7IH1cbi5mcy0yeGwgeyBmb250LXNpemU6IHZhcigtLXRleHQtMnhsKSAhaW1wb3J0YW50OyB9XG4uZnMtM3hsIHsgZm9udC1zaXplOiB2YXIoLS10ZXh0LTN4bCkgIWltcG9ydGFudDsgfVxuXG4vLyBDb2xvciBVdGlsaXRpZXNcbi50ZXh0LXByaW1hcnkgeyBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDsgfVxuLnRleHQtc2Vjb25kYXJ5IHsgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcikgIWltcG9ydGFudDsgfVxuLnRleHQtc3VjY2VzcyB7IGNvbG9yOiB2YXIoLS1zdWNjZXNzLWNvbG9yKSAhaW1wb3J0YW50OyB9XG4udGV4dC1lcnJvciB7IGNvbG9yOiB2YXIoLS1lcnJvci1jb2xvcikgIWltcG9ydGFudDsgfVxuLnRleHQtd2FybmluZyB7IGNvbG9yOiB2YXIoLS13YXJuaW5nLWNvbG9yKSAhaW1wb3J0YW50OyB9XG4udGV4dC1pbmZvIHsgY29sb3I6IHZhcigtLWluZm8tY29sb3IpICFpbXBvcnRhbnQ7IH1cbi50ZXh0LWxpZ2h0IHsgY29sb3I6IHZhcigtLXRleHQtd2hpdGUpICFpbXBvcnRhbnQ7IH1cbi50ZXh0LWRhcmsgeyBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KSAhaW1wb3J0YW50OyB9XG4udGV4dC1tdXRlZCB7IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKSAhaW1wb3J0YW50OyB9XG5cbi5iZy1wcmltYXJ5IHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDsgfVxuLmJnLXNlY29uZGFyeSB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcikgIWltcG9ydGFudDsgfVxuLmJnLXN1Y2Nlc3MgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWNjZXNzLWNvbG9yKSAhaW1wb3J0YW50OyB9XG4uYmctZXJyb3IgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lcnJvci1jb2xvcikgIWltcG9ydGFudDsgfVxuLmJnLXdhcm5pbmcgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXJuaW5nLWNvbG9yKSAhaW1wb3J0YW50OyB9XG4uYmctaW5mbyB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluZm8tY29sb3IpICFpbXBvcnRhbnQ7IH1cbi5iZy1saWdodCB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXNlY29uZGFyeSkgIWltcG9ydGFudDsgfVxuLmJnLWRhcmsgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTkwMCkgIWltcG9ydGFudDsgfVxuLmJnLXdoaXRlIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctcHJpbWFyeSkgIWltcG9ydGFudDsgfVxuLmJnLXRyYW5zcGFyZW50IHsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgfVxuXG4vLyBCb3JkZXIgVXRpbGl0aWVzXG4uYm9yZGVyIHsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLW1lZGl1bSkgIWltcG9ydGFudDsgfVxuLmJvcmRlci0wIHsgYm9yZGVyOiAwICFpbXBvcnRhbnQ7IH1cbi5ib3JkZXItdG9wIHsgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1tZWRpdW0pICFpbXBvcnRhbnQ7IH1cbi5ib3JkZXItZW5kIHsgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyLW1lZGl1bSkgIWltcG9ydGFudDsgfVxuLmJvcmRlci1ib3R0b20geyBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLW1lZGl1bSkgIWltcG9ydGFudDsgfVxuLmJvcmRlci1zdGFydCB7IGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyLW1lZGl1bSkgIWltcG9ydGFudDsgfVxuXG4uYm9yZGVyLXByaW1hcnkgeyBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7IH1cbi5ib3JkZXItc2Vjb25kYXJ5IHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpICFpbXBvcnRhbnQ7IH1cbi5ib3JkZXItc3VjY2VzcyB7IGJvcmRlci1jb2xvcjogdmFyKC0tc3VjY2Vzcy1jb2xvcikgIWltcG9ydGFudDsgfVxuLmJvcmRlci1lcnJvciB7IGJvcmRlci1jb2xvcjogdmFyKC0tZXJyb3ItY29sb3IpICFpbXBvcnRhbnQ7IH1cbi5ib3JkZXItd2FybmluZyB7IGJvcmRlci1jb2xvcjogdmFyKC0td2FybmluZy1jb2xvcikgIWltcG9ydGFudDsgfVxuLmJvcmRlci1pbmZvIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1pbmZvLWNvbG9yKSAhaW1wb3J0YW50OyB9XG5cbi8vIEJvcmRlciBSYWRpdXMgVXRpbGl0aWVzXG4ucm91bmRlZC1ub25lIHsgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW5vbmUpICFpbXBvcnRhbnQ7IH1cbi5yb3VuZGVkLXNtIHsgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXNtKSAhaW1wb3J0YW50OyB9XG4ucm91bmRlZCB7IGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCkgIWltcG9ydGFudDsgfVxuLnJvdW5kZWQtbGcgeyBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpICFpbXBvcnRhbnQ7IH1cbi5yb3VuZGVkLXhsIHsgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXhsKSAhaW1wb3J0YW50OyB9XG4ucm91bmRlZC0yeGwgeyBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtMnhsKSAhaW1wb3J0YW50OyB9XG4ucm91bmRlZC0zeGwgeyBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtM3hsKSAhaW1wb3J0YW50OyB9XG4ucm91bmRlZC1jaXJjbGUgeyBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDsgfVxuLnJvdW5kZWQtcGlsbCB7IGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1mdWxsKSAhaW1wb3J0YW50OyB9XG5cbi8vIFNoYWRvdyBVdGlsaXRpZXNcbi5zaGFkb3ctbm9uZSB7IGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDsgfVxuLnNoYWRvdy1zbSB7IGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSkgIWltcG9ydGFudDsgfVxuLnNoYWRvdyB7IGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCkgIWltcG9ydGFudDsgfVxuLnNoYWRvdy1sZyB7IGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1sZykgIWltcG9ydGFudDsgfVxuLnNoYWRvdy14bCB7IGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy14bCkgIWltcG9ydGFudDsgfVxuXG4vLyBQb3NpdGlvbiBVdGlsaXRpZXNcbi5wb3NpdGlvbi1zdGF0aWMgeyBwb3NpdGlvbjogc3RhdGljICFpbXBvcnRhbnQ7IH1cbi5wb3NpdGlvbi1yZWxhdGl2ZSB7IHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50OyB9XG4ucG9zaXRpb24tYWJzb2x1dGUgeyBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDsgfVxuLnBvc2l0aW9uLWZpeGVkIHsgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7IH1cbi5wb3NpdGlvbi1zdGlja3kgeyBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7IH1cblxuLnRvcC0wIHsgdG9wOiAwICFpbXBvcnRhbnQ7IH1cbi50b3AtNTAgeyB0b3A6IDUwJSAhaW1wb3J0YW50OyB9XG4udG9wLTEwMCB7IHRvcDogMTAwJSAhaW1wb3J0YW50OyB9XG4uYm90dG9tLTAgeyBib3R0b206IDAgIWltcG9ydGFudDsgfVxuLmJvdHRvbS01MCB7IGJvdHRvbTogNTAlICFpbXBvcnRhbnQ7IH1cbi5ib3R0b20tMTAwIHsgYm90dG9tOiAxMDAlICFpbXBvcnRhbnQ7IH1cbi5zdGFydC0wIHsgbGVmdDogMCAhaW1wb3J0YW50OyB9XG4uc3RhcnQtNTAgeyBsZWZ0OiA1MCUgIWltcG9ydGFudDsgfVxuLnN0YXJ0LTEwMCB7IGxlZnQ6IDEwMCUgIWltcG9ydGFudDsgfVxuLmVuZC0wIHsgcmlnaHQ6IDAgIWltcG9ydGFudDsgfVxuLmVuZC01MCB7IHJpZ2h0OiA1MCUgIWltcG9ydGFudDsgfVxuLmVuZC0xMDAgeyByaWdodDogMTAwJSAhaW1wb3J0YW50OyB9XG5cbi50cmFuc2xhdGUtbWlkZGxlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgIWltcG9ydGFudDsgfVxuLnRyYW5zbGF0ZS1taWRkbGUteCB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSAhaW1wb3J0YW50OyB9XG4udHJhbnNsYXRlLW1pZGRsZS15IHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpICFpbXBvcnRhbnQ7IH1cblxuLy8gVmlzaWJpbGl0eVxuLnZpc2libGUgeyB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7IH1cbi5pbnZpc2libGUgeyB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDsgfVxuXG4vLyBHZW5lcmFsIFV0aWxpdGllc1xuLm92ZXJmbG93LWF1dG8geyBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50OyB9XG4ub3ZlcmZsb3ctaGlkZGVuIHsgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50OyB9XG4ub3ZlcmZsb3ctdmlzaWJsZSB7IG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7IH1cbi5vdmVyZmxvdy1zY3JvbGwgeyBvdmVyZmxvdzogc2Nyb2xsICFpbXBvcnRhbnQ7IH1cblxuLnctMjUgeyB3aWR0aDogMjUlICFpbXBvcnRhbnQ7IH1cbi53LTUwIHsgd2lkdGg6IDUwJSAhaW1wb3J0YW50OyB9XG4udy03NSB7IHdpZHRoOiA3NSUgIWltcG9ydGFudDsgfVxuLnctMTAwIHsgd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgfVxuLnctYXV0byB7IHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7IH1cblxuLmgtMjUgeyBoZWlnaHQ6IDI1JSAhaW1wb3J0YW50OyB9XG4uaC01MCB7IGhlaWdodDogNTAlICFpbXBvcnRhbnQ7IH1cbi5oLTc1IHsgaGVpZ2h0OiA3NSUgIWltcG9ydGFudDsgfVxuLmgtMTAwIHsgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7IH1cbi5oLWF1dG8geyBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDsgfVxuXG4vLyBCdXR0b24gQ29tcG9uZW50IENsYXNzZXNcbi5idG4ge1xuICBAaW5jbHVkZSBidXR0b24tYmFzZTtcbiAgXG4gICYuYnRuLXNtIHtcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgICBmb250LXNpemU6IHZhcigtLXRleHQtc20pO1xuICB9XG4gIFxuICAmLmJ0bi1sZyB7XG4gICAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XG4gICAgZm9udC1zaXplOiB2YXIoLS10ZXh0LWxnKTtcbiAgfVxuICBcbiAgJi5idG4tcHJpbWFyeSB7XG4gICAgQGluY2x1ZGUgYnV0dG9uLXZhcmlhbnQodmFyKC0tcHJpbWFyeS1jb2xvciksIHdoaXRlLCB2YXIoLS1wcmltYXJ5LWRhcmspLCB2YXIoLS1wcmltYXJ5LWRhcmspKTtcbiAgfVxuICBcbiAgJi5idG4tc2Vjb25kYXJ5IHtcbiAgICBAaW5jbHVkZSBidXR0b24tdmFyaWFudCh2YXIoLS1zZWNvbmRhcnktY29sb3IpLCB3aGl0ZSwgdmFyKC0tc2Vjb25kYXJ5LWRhcmspLCB2YXIoLS1zZWNvbmRhcnktZGFyaykpO1xuICB9XG4gIFxuICAmLmJ0bi1zdWNjZXNzIHtcbiAgICBAaW5jbHVkZSBidXR0b24tdmFyaWFudCh2YXIoLS1zdWNjZXNzLWNvbG9yKSwgd2hpdGUsIHZhcigtLXN1Y2Nlc3MtZGFyayksIHZhcigtLXN1Y2Nlc3MtZGFyaykpO1xuICB9XG4gIFxuICAmLmJ0bi1lcnJvciB7XG4gICAgQGluY2x1ZGUgYnV0dG9uLXZhcmlhbnQodmFyKC0tZXJyb3ItY29sb3IpLCB3aGl0ZSwgdmFyKC0tZXJyb3ItZGFyayksIHZhcigtLWVycm9yLWRhcmspKTtcbiAgfVxuICBcbiAgJi5idG4td2FybmluZyB7XG4gICAgQGluY2x1ZGUgYnV0dG9uLXZhcmlhbnQodmFyKC0td2FybmluZy1jb2xvciksIHdoaXRlLCB2YXIoLS13YXJuaW5nLWRhcmspLCB2YXIoLS13YXJuaW5nLWRhcmspKTtcbiAgfVxuICBcbiAgJi5idG4tb3V0bGluZS1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgXG4gICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbiAgXG4gICYuYnRuLW91dGxpbmUtc2Vjb25kYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICAgIFxuICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbiAgXG4gICYuYnRuLWdob3N0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICBcbiAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMTAwKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gQ2FyZCBDb21wb25lbnQgQ2xhc3Nlc1xuLmNhcmQge1xuICBAaW5jbHVkZSBjYXJkO1xuICBcbiAgLmNhcmQtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1kKSB2YXIoLS1zcGFjaW5nLWxnKTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgfVxuICBcbiAgLmNhcmQtYm9keSB7XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XG4gIH1cbiAgXG4gIC5jYXJkLWZvb3RlciB7XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1tZCkgdmFyKC0tc3BhY2luZy1sZyk7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbiAgfVxufVxuXG4vLyBGb3JtIENvbXBvbmVudCBDbGFzc2VzXG4uZm9ybS1jb250cm9sIHtcbiAgQGluY2x1ZGUgZm9ybS1jb250cm9sO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctbWQpO1xufVxuXG4uZm9ybS1sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy14cyk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LW1lZGl1bSk7XG59XG5cbi5mb3JtLXRleHQge1xuICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjaW5nLXhzKTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LXNtKTtcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xufVxuXG4uZm9ybS1jaGVjayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4taGVpZ2h0OiAxLjVyZW07XG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLXhzKTtcbiAgXG4gIC5mb3JtLWNoZWNrLWlucHV0IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogLTEuNXJlbTtcbiAgfVxuICBcbiAgLmZvcm0tY2hlY2stbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbn1cblxuLy8gQW5pbWF0aW9uIENsYXNzZXNcbi5mYWRlLWluIHtcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLnNsaWRlLXVwIHtcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIDAuNHMgZWFzZS1vdXQ7XG59XG5cbi5zbGlkZS1kb3duIHtcbiAgYW5pbWF0aW9uOiBzbGlkZURvd24gMC40cyBlYXNlLW91dDtcbn1cblxuLnNsaWRlLWxlZnQge1xuICBhbmltYXRpb246IHNsaWRlTGVmdCAwLjRzIGVhc2Utb3V0O1xufVxuXG4uc2xpZGUtcmlnaHQge1xuICBhbmltYXRpb246IHNsaWRlUmlnaHQgMC40cyBlYXNlLW91dDtcbn1cblxuLnpvb20taW4ge1xuICBhbmltYXRpb246IHpvb21JbiAwLjNzIGVhc2Utb3V0O1xufVxuXG4uem9vbS1vdXQge1xuICBhbmltYXRpb246IHpvb21PdXQgMC4zcyBlYXNlLW91dDtcbn1cblxuLy8gQW5pbWF0aW9uIEtleWZyYW1lc1xuQGtleWZyYW1lcyBmYWRlSW4ge1xuICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICB0byB7IG9wYWNpdHk6IDE7IH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZVVwIHtcbiAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTsgb3BhY2l0eTogMDsgfVxuICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgb3BhY2l0eTogMTsgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlRG93biB7XG4gIGZyb20geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpOyBvcGFjaXR5OiAwOyB9XG4gIHRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyBvcGFjaXR5OiAxOyB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVMZWZ0IHtcbiAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTsgb3BhY2l0eTogMDsgfVxuICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgb3BhY2l0eTogMTsgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlUmlnaHQge1xuICBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTsgb3BhY2l0eTogMDsgfVxuICB0byB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgb3BhY2l0eTogMTsgfVxufVxuXG5Aa2V5ZnJhbWVzIHpvb21JbiB7XG4gIGZyb20geyB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpOyBvcGFjaXR5OiAwOyB9XG4gIHRvIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgb3BhY2l0eTogMTsgfVxufVxuXG5Aa2V5ZnJhbWVzIHpvb21PdXQge1xuICBmcm9tIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgb3BhY2l0eTogMDsgfVxuICB0byB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IG9wYWNpdHk6IDE7IH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBHTE9CQUwgQkFTRSBTVFlMRVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaHRtbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1iYXNlKTtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWxlYWRpbmctbm9ybWFsKTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4vLyBIZWFkaW5nc1xuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNlY29uZGFyeSk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtYm9sZCk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1sZWFkaW5nLXRpZ2h0KTtcbn1cblxuaDEgeyBmb250LXNpemU6IHZhcigtLXRleHQtNHhsKTsgfVxuaDIgeyBmb250LXNpemU6IHZhcigtLXRleHQtM3hsKTsgfVxuaDMgeyBmb250LXNpemU6IHZhcigtLXRleHQtMnhsKTsgfVxuaDQgeyBmb250LXNpemU6IHZhcigtLXRleHQteGwpOyB9XG5oNSB7IGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1sZyk7IH1cbmg2IHsgZm9udC1zaXplOiB2YXIoLS10ZXh0LWJhc2UpOyB9XG5cbmEge1xuICBjb2xvcjogdmFyKC0tdGV4dC1saW5rKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiBjb2xvciB2YXIoLS10cmFuc2l0aW9uLWZhc3QpO1xuICAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xufVxuXG5idXR0b24sIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIHZhcigtLXRyYW5zaXRpb24tZmFzdCksIGNvbG9yIHZhcigtLXRyYW5zaXRpb24tZmFzdCk7XG59XG5cbnVsLCBvbCB7XG4gIHBhZGRpbmctbGVmdDogMS41ZW07XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHZhcigtLWNvbnRhaW5lci14bCk7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tc3BhY2luZy1tZCk7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLXNwYWNpbmctbWQpO1xuICBAbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gICAgbWF4LXdpZHRoOiB2YXIoLS1jb250YWluZXItbGcpO1xuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICBtYXgtd2lkdGg6IHZhcigtLWNvbnRhaW5lci1tZCk7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tc3BhY2luZy1zbSk7XG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0tc3BhY2luZy1zbSk7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9kZXNpZ24tc3lzdGVtLnNjc3MnO1xuXG4ucHJvZHVjdHMtcGFnZSB7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1zcGFjaW5nLWxnKTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLXNwYWNpbmcteGwpO1xuXG4gIC5wYWdlLWhlYWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy1sZyk7XG4gICAgaDEge1xuICAgICAgZm9udC1zaXplOiB2YXIoLS10ZXh0LTN4bCk7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LWJvbGQpO1xuICAgIH1cbiAgfVxuXG4gIC5wcm9kdWN0cy1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgICBnYXA6IHZhcigtLXNwYWNpbmctbGcpO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxODBweCwgMWZyKSk7XG4gICAgICBnYXA6IHZhcigtLXNwYWNpbmctbWQpO1xuICAgIH1cbiAgfVxuXG4gIC5wcm9kdWN0LWNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtY29sb3IsICNmZmYpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbGcpO1xuICAgIH1cblxuICAgIC5wcm9kdWN0LWxpbmsge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXgtZ3JvdzogMTsgLy8gQWxsb3dzIGluZm8gdG8gdGFrZSByZW1haW5pbmcgc3BhY2VcbiAgICB9XG5cbiAgICAucHJvZHVjdC1pbWFnZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB9XG5cbiAgICAucHJvZHVjdC1pbmZvIHtcbiAgICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWQpO1xuICAgICAgZmxleC1ncm93OiAxOyAvLyBQdXNoZXMgYnV0dG9uIHRvIGJvdHRvbSBpZiBjYXJkIGhlaWdodHMgdmFyeVxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cblxuICAgICAgLnByb2R1Y3QtbmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1sZyk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXNlbWlib2xkKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmcteHMpO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgICAgICAgLy8gQ2xhbXAgdGV4dCB0byAyIGxpbmVzXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICBtaW4taGVpZ2h0OiAyLjZlbTsgLy8gZm9yIDIgbGluZXNcbiAgICAgIH1cblxuICAgICAgLnByb2R1Y3QtY2F0ZWdvcnkge1xuICAgICAgICBmb250LXNpemU6IHZhcigtLXRleHQtc20pO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctc20pO1xuICAgICAgfVxuXG4gICAgICAucHJvZHVjdC1wcmljZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC14bCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LWJvbGQpO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87IC8vIFB1c2hlcyBwcmljZSB0byBib3R0b20gb2YgaW5mbyBpZiBjYXRlZ29yeSBpcyBzaG9ydFxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuYWRkLXRvLWNhcnQtYnRuIHtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAoMiAqIHZhcigtLXNwYWNpbmctbWQpKSk7IC8vIEZ1bGwgd2lkdGggbWludXMgcGFkZGluZ1xuICAgICAgbWFyZ2luOiAwIHZhcigtLXNwYWNpbmctbWQpIHZhcigtLXNwYWNpbmctbWQpIHZhcigtLXNwYWNpbmctbWQpO1xuICAgICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1zbSkgMDsgLy8gQWRqdXN0IHBhZGRpbmdcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1iYXNlKTtcbiAgICB9XG4gIH1cblxuICAubm8tcHJvZHVjdHMtbWVzc2FnZSwgLmxvYWRpbmctbWVzc2FnZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy0yeGwpIDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcblxuICAgIG1hdC1pY29uLCBtYXQtc3Bpbm5lciB7XG4gICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICB3aWR0aDogM3JlbTtcbiAgICAgIGhlaWdodDogM3JlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctbWQpO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIH1cbiAgICBtYXQtc3Bpbm5lcjo6bmctZGVlcCBjaXJjbGUge1xuICAgICAgICBzdHJva2U6IHZhcigtLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IHZhcigtLXRleHQtbGcpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 8709:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmDialogComponent: () => (/* binding */ ConfirmDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4175);




class ConfirmDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  static {
    this.ɵfac = function ConfirmDialogComponent_Factory(t) {
      return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfirmDialogComponent,
      selectors: [["app-confirm-dialog"]],
      decls: 9,
      vars: 6,
      consts: [["mat-dialog-title", ""], [3, "innerHTML"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", 3, "color", "mat-dialog-close"]],
      template: function ConfirmDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-actions", 2)(5, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.data.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.cancelButtonText || "Cancel", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.data.color || "primary")("mat-dialog-close", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.confirmButtonText || "Confirm", " ");
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions],
      styles: ["mat-dialog-content[_ngcontent-%COMP%] {\n      min-width: 300px;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtNQUNFLGdCQUFnQjtJQUNsQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIG1hdC1kaWFsb2ctY29udGVudCB7XG4gICAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 1765:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);







function FooterComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Subscribe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function FooterComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Subscribing... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class FooterComponent {
  constructor() {
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.currentYear = new Date().getFullYear();
    this.newsletterEmail = '';
    this.isSubscribing = false;
    this.showBackToTop = false;
  }
  onWindowScroll() {
    this.showBackToTop = window.pageYOffset > 400;
  }
  ngOnInit() {
    // Component initialization
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  subscribeNewsletter() {
    if (!this.newsletterEmail || this.isSubscribing) {
      return;
    }
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.newsletterEmail)) {
      // Could show toast notification here
      console.warn('Please enter a valid email address');
      return;
    }
    this.isSubscribing = true;
    // Simulate API call
    setTimeout(() => {
      console.log('Newsletter subscription for:', this.newsletterEmail);
      // Could show success toast notification here
      this.newsletterEmail = '';
      this.isSubscribing = false;
    }, 2000);
  }
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  static {
    this.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      hostBindings: function FooterComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function FooterComponent_scroll_HostBindingHandler() {
            return ctx.onWindowScroll();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 182,
      vars: 8,
      consts: [[1, "footer"], [1, "footer-content"], [1, "newsletter-section"], [1, "container"], [1, "newsletter-content"], [1, "newsletter-text"], [1, "newsletter-form"], [1, "newsletter-form-wrapper", 3, "ngSubmit"], [1, "input-group"], ["type", "email", "name", "newsletterEmail", "placeholder", "Enter your email address", "required", "", 1, "newsletter-input", 3, "ngModel", "disabled", "ngModelChange"], ["type", "submit", 1, "newsletter-button", 3, "disabled"], [4, "ngIf"], ["class", "loading-text", 4, "ngIf"], [1, "main-footer"], [1, "footer-grid"], [1, "footer-column", "company-info"], [1, "footer-logo"], [1, "company-description"], [1, "contact-info"], [1, "contact-item"], [1, "footer-column"], [1, "footer-links"], ["routerLink", "/products"], ["routerLink", "/categories"], ["routerLink", "/deals"], ["routerLink", "/new-arrivals"], ["routerLink", "/bestsellers"], ["routerLink", "/brands"], ["routerLink", "/help"], ["routerLink", "/contact"], ["routerLink", "/shipping"], ["routerLink", "/returns"], ["routerLink", "/size-guide"], ["routerLink", "/track-order"], ["routerLink", "/about"], ["routerLink", "/careers"], ["routerLink", "/privacy"], ["routerLink", "/terms"], ["routerLink", "/accessibility"], ["routerLink", "/sitemap"], [1, "features-section"], [1, "features-grid"], [1, "feature-item"], [1, "feature-content"], [1, "bottom-footer"], [1, "bottom-footer-content"], [1, "copyright"], [1, "payment-methods"], [1, "payment-label"], [1, "payment-icons"], [1, "payment-icon", "visa"], [1, "payment-icon", "mastercard"], [1, "payment-icon", "amex"], [1, "payment-icon", "paypal"], [1, "payment-icon", "apple-pay"], [1, "social-links"], ["href", "#", "aria-label", "Facebook", 1, "social-link"], ["href", "#", "aria-label", "Twitter", 1, "social-link"], ["href", "#", "aria-label", "Instagram", 1, "social-link"], ["href", "#", "aria-label", "LinkedIn", 1, "social-link"], ["href", "#", "aria-label", "YouTube", 1, "social-link"], ["aria-label", "Back to top", 1, "back-to-top", 3, "click"], [1, "loading-text"], ["diameter", "16"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "section", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Stay Updated");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Subscribe to our newsletter and get the latest deals and updates delivered to your inbox.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6)(11, "form", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FooterComponent_Template_form_ngSubmit_11_listener() {
            return ctx.subscribeNewsletter();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8)(13, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FooterComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.newsletterEmail = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FooterComponent_span_15_Template, 2, 0, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FooterComponent_span_16_Template, 3, 0, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 13)(18, "div", 3)(19, "div", 14)(20, "div", 15)(21, "div", 16)(22, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "ShopEasy");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Your trusted online shopping destination for quality products at unbeatable prices. We're committed to providing exceptional customer service and a seamless shopping experience. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18)(27, "div", 19)(28, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "location_on");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "123 Commerce Street, Shopping District, City 12345");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19)(33, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "phone");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "+1 (555) 123-4567");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19)(38, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "email");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "support@shopeasy.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 20)(43, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Quick Links");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ul", 21)(46, "li")(47, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "All Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li")(50, "a", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li")(53, "a", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Special Deals");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li")(56, "a", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "New Arrivals");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li")(59, "a", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Best Sellers");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li")(62, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Brands");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 20)(65, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Customer Service");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "ul", 21)(68, "li")(69, "a", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Help Center");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li")(72, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Contact Us");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li")(75, "a", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Shipping Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li")(78, "a", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Returns & Exchanges");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li")(81, "a", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Size Guide");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li")(84, "a", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Track Your Order");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 20)(87, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "About & Legal");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "ul", 21)(90, "li")(91, "a", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "About Us");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li")(94, "a", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Careers");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li")(97, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Privacy Policy");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li")(100, "a", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Terms of Service");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li")(103, "a", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Accessibility");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li")(106, "a", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Sitemap");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "section", 40)(109, "div", 3)(110, "div", 41)(111, "div", 42)(112, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "local_shipping");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 43)(115, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Free Shipping");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "On orders over $50");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 42)(120, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "security");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 43)(123, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Secure Payment");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "100% secure transactions");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 42)(128, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "support_agent");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 43)(131, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "24/7 Support");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Dedicated customer service");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 42)(136, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "autorenew");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 43)(139, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Easy Returns");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "30-day return policy");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "section", 44)(144, "div", 3)(145, "div", 45)(146, "div", 46)(147, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 47)(150, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "We Accept:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 49)(153, "div", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "VISA");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "MC");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "AMEX");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "PayPal");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Apple Pay");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 55)(164, "a", 56)(165, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "facebook");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "a", 57)(168, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "twitter");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "a", 58)(171, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "instagram");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "a", 59)(174, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "linkedin");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "a", 60)(177, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "youtube");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "button", 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_button_click_179_listener() {
            return ctx.scrollToTop();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "keyboard_arrow_up");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newsletterEmail)("disabled", ctx.isSubscribing);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isSubscribing || !ctx.newsletterEmail);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSubscribing);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSubscribing);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](132);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.currentYear, " ShopEasy. All rights reserved.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visible", ctx.showBackToTop);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__.MatProgressSpinner],
      styles: [".site-footer[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #1e293b 60%, #2563eb 100%);\n  color: #f1f5f9;\n  margin-top: auto;\n  font-family: \"Inter\", \"Segoe UI\", Arial, sans-serif;\n}\n\n.footer-main[_ngcontent-%COMP%], .main-footer[_ngcontent-%COMP%] {\n  padding: 2.5rem 0 1.5rem 0;\n  border-bottom: 1px solid #334155;\n}\n\n.footer-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 2.5rem;\n}\n@media (max-width: 900px) {\n  .footer-grid[_ngcontent-%COMP%] {\n    gap: 1.5rem;\n  }\n}\n@media (max-width: 600px) {\n  .footer-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n}\n\n.footer-brand[_ngcontent-%COMP%], .footer-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.footer-brand[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%], .footer-logo[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: #fff;\n  margin: 0;\n}\n.footer-brand[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%], .footer-logo[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  width: auto;\n}\n\n.footer-description[_ngcontent-%COMP%], .company-description[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n  font-size: 1rem;\n  margin: 0.5rem 0 1.2rem 0;\n  line-height: 1.6;\n}\n\n.contact-info[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.contact-info[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #cbd5e1;\n  font-size: 0.97rem;\n  margin-bottom: 0.25rem;\n}\n.contact-info[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .contact-info[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #38bdf8;\n}\n\n.social-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.7rem;\n  margin-top: 0.5rem;\n}\n.social-links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #334155;\n  color: #f1f5f9;\n  font-size: 1.2rem;\n  transition: background 0.2s, color 0.2s, transform 0.2s;\n}\n.social-links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n  color: #fff;\n  transform: translateY(-2px) scale(1.08);\n}\n\n.footer-section[_ngcontent-%COMP%]   .footer-title[_ngcontent-%COMP%], .footer-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .footer-column[_ngcontent-%COMP%]   .footer-title[_ngcontent-%COMP%], .footer-column[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #fff;\n  margin-bottom: 0.8rem;\n}\n.footer-section[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%], .footer-column[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.footer-section[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .footer-column[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.footer-section[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .footer-column[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n  text-decoration: none;\n  font-size: 1rem;\n  transition: color 0.2s;\n}\n.footer-section[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .footer-column[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #38bdf8;\n}\n.footer-section[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .view-all[_ngcontent-%COMP%], .footer-column[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .view-all[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #38bdf8;\n}\n.footer-section[_ngcontent-%COMP%]   .footer-subtitle[_ngcontent-%COMP%], .footer-section[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .footer-column[_ngcontent-%COMP%]   .footer-subtitle[_ngcontent-%COMP%], .footer-column[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #38bdf8;\n  margin: 1rem 0 0.5rem 0;\n}\n\n.newsletter-section[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #2563eb 60%, #1e293b 100%);\n  color: #fff;\n  padding: 1.5rem 0;\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n}\n@media (max-width: 600px) {\n  .newsletter-section[_ngcontent-%COMP%]   .newsletter-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n  margin: 0 0 0.3rem 0;\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin: 0;\n  color: #cbd5e1;\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 220px;\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .newsletter-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.7rem 1rem;\n  border-radius: 32px;\n  border: none;\n  font-size: 1rem;\n  background: #fff;\n  color: #1e293b;\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .newsletter-input[_ngcontent-%COMP%]::placeholder {\n  color: #64748b;\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .newsletter-btn[_ngcontent-%COMP%] {\n  background: #38bdf8;\n  color: #fff;\n  border: none;\n  border-radius: 32px;\n  padding: 0.7rem 1.5rem;\n  font-weight: 600;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .newsletter-btn[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .newsletter-btn[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .newsletter-btn[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]   .spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n.features-section[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #1e293b;\n  padding: 1.5rem 0;\n}\n.features-section[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n@media (max-width: 900px) {\n  .features-section[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n}\n@media (max-width: 600px) {\n  .features-section[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n}\n.features-section[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.0666666667);\n  padding: 1rem 1.5rem;\n  min-width: 180px;\n  flex: 1;\n}\n.features-section[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  background: #2563eb;\n  color: #fff;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n}\n.features-section[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   .feature-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0 0 0.2rem 0;\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n.features-section[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   .feature-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  color: #64748b;\n}\n\n.footer-bottom[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%] {\n  background: #1e293b;\n  color: #cbd5e1;\n  padding: 1rem 0;\n  font-size: 0.95rem;\n}\n.footer-bottom[_ngcontent-%COMP%]   .footer-bottom-content[_ngcontent-%COMP%], .footer-bottom[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%]   .footer-bottom-content[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n}\n@media (max-width: 900px) {\n  .footer-bottom[_ngcontent-%COMP%]   .footer-bottom-content[_ngcontent-%COMP%], .footer-bottom[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%]   .footer-bottom-content[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem;\n    text-align: center;\n  }\n}\n.footer-bottom[_ngcontent-%COMP%]   .footer-bottom-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%], .footer-bottom[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%]   .footer-bottom-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n}\n.footer-bottom[_ngcontent-%COMP%]   .footer-bottom-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-label[_ngcontent-%COMP%], .footer-bottom[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-label[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%]   .footer-bottom-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-label[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #38bdf8;\n}\n.footer-bottom[_ngcontent-%COMP%]   .footer-bottom-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%], .footer-bottom[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%]   .footer-bottom-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.footer-bottom[_ngcontent-%COMP%]   .footer-bottom-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%]   .payment-icon[_ngcontent-%COMP%], .footer-bottom[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%]   .payment-icon[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%]   .footer-bottom-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%]   .payment-icon[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%]   .payment-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 24px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.footer-bottom[_ngcontent-%COMP%]   .footer-bottom-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%]   .payment-icon.visa[_ngcontent-%COMP%], .footer-bottom[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%]   .payment-icon.visa[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%]   .footer-bottom-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%]   .payment-icon.visa[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%]   .payment-icon.visa[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/payments/visa.svg\");\n}\n.footer-bottom[_ngcontent-%COMP%]   .footer-bottom-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%]   .payment-icon.mastercard[_ngcontent-%COMP%], .footer-bottom[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%]   .payment-icon.mastercard[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%]   .footer-bottom-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%]   .payment-icon.mastercard[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%]   .payment-icon.mastercard[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/payments/mastercard.svg\");\n}\n.footer-bottom[_ngcontent-%COMP%]   .footer-bottom-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%]   .payment-icon.amex[_ngcontent-%COMP%], .footer-bottom[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%]   .payment-icon.amex[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%]   .footer-bottom-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%]   .payment-icon.amex[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%]   .payment-icon.amex[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/payments/amex.svg\");\n}\n.footer-bottom[_ngcontent-%COMP%]   .footer-bottom-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%]   .payment-icon.paypal[_ngcontent-%COMP%], .footer-bottom[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%]   .payment-icon.paypal[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%]   .footer-bottom-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%]   .payment-icon.paypal[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%]   .payment-icon.paypal[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/payments/paypal.svg\");\n}\n.footer-bottom[_ngcontent-%COMP%]   .footer-bottom-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%]   .payment-icon.apple-pay[_ngcontent-%COMP%], .footer-bottom[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%]   .payment-icon.apple-pay[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%]   .footer-bottom-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%]   .payment-icon.apple-pay[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%]   .payment-icon.apple-pay[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/payments/apple-pay.svg\");\n}\n.footer-bottom[_ngcontent-%COMP%]   .footer-bottom-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%]   .payment-icon.google-pay[_ngcontent-%COMP%], .footer-bottom[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%]   .payment-icon.google-pay[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%]   .footer-bottom-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%]   .payment-icon.google-pay[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%]   .payment-icon.google-pay[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/images/payments/google-pay.svg\");\n}\n.footer-bottom[_ngcontent-%COMP%]   .footer-bottom-content[_ngcontent-%COMP%]   .certifications[_ngcontent-%COMP%], .footer-bottom[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .certifications[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%]   .footer-bottom-content[_ngcontent-%COMP%]   .certifications[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .certifications[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.footer-bottom[_ngcontent-%COMP%]   .footer-bottom-content[_ngcontent-%COMP%]   .certifications[_ngcontent-%COMP%]   .cert-item[_ngcontent-%COMP%], .footer-bottom[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .certifications[_ngcontent-%COMP%]   .cert-item[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%]   .footer-bottom-content[_ngcontent-%COMP%]   .certifications[_ngcontent-%COMP%]   .cert-item[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .certifications[_ngcontent-%COMP%]   .cert-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  color: #38bdf8;\n  font-size: 1rem;\n}\n.footer-bottom[_ngcontent-%COMP%]   .footer-bottom-content[_ngcontent-%COMP%]   .certifications[_ngcontent-%COMP%]   .cert-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .footer-bottom[_ngcontent-%COMP%]   .footer-bottom-content[_ngcontent-%COMP%]   .certifications[_ngcontent-%COMP%]   .cert-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .footer-bottom[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .certifications[_ngcontent-%COMP%]   .cert-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .footer-bottom[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .certifications[_ngcontent-%COMP%]   .cert-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%]   .footer-bottom-content[_ngcontent-%COMP%]   .certifications[_ngcontent-%COMP%]   .cert-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%]   .footer-bottom-content[_ngcontent-%COMP%]   .certifications[_ngcontent-%COMP%]   .cert-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .certifications[_ngcontent-%COMP%]   .cert-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .certifications[_ngcontent-%COMP%]   .cert-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.footer-bottom[_ngcontent-%COMP%]   .footer-bottom-content[_ngcontent-%COMP%]   .built-with[_ngcontent-%COMP%], .footer-bottom[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .built-with[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%]   .footer-bottom-content[_ngcontent-%COMP%]   .built-with[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .built-with[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #64748b;\n}\n\n.back-to-top[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 1.5rem;\n  bottom: 1.5rem;\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  border-radius: 50%;\n  width: 48px;\n  height: 48px;\n  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.2s, transform 0.2s;\n  z-index: 100;\n  font-size: 2rem;\n}\n.back-to-top.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n  transform: translateY(0);\n}\n.back-to-top[_ngcontent-%COMP%]:hover {\n  background: #38bdf8;\n  color: #fff;\n  transform: translateY(-4px) scale(1.08);\n}\n\n@media (max-width: 600px) {\n  .footer-main[_ngcontent-%COMP%], .main-footer[_ngcontent-%COMP%] {\n    padding: 1.2rem 0 0.7rem 0;\n  }\n  .features-section[_ngcontent-%COMP%] {\n    padding: 1rem 0;\n  }\n  .footer-bottom[_ngcontent-%COMP%], .bottom-footer[_ngcontent-%COMP%] {\n    padding: 0.7rem 0;\n  }\n  .back-to-top[_ngcontent-%COMP%] {\n    right: 1rem;\n    bottom: 1rem;\n    width: 40px;\n    height: 40px;\n    font-size: 1.5rem;\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLDZEQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbURBQUE7QUFBRjs7QUFHQTtFQUNFLDBCQUFBO0VBQ0EsZ0NBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLFdBQUE7QUFBRjtBQUNFO0VBSkY7SUFLSSxXQUFBO0VBRUY7QUFDRjtBQURFO0VBUEY7SUFRSSwwQkFBQTtJQUNBLFNBQUE7RUFJRjtBQUNGOztBQURBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUlGO0FBSEU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFLSjtBQUhFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFLSjs7QUFEQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQUlGOztBQURBO0VBQ0UsbUJBQUE7QUFJRjtBQUhFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBS0o7QUFKSTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQU1OOztBQURBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUlGO0FBSEU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHVEQUFBO0FBS0o7QUFKSTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0FBTU47O0FBQUU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBR0o7QUFERTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtF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QUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBdUJSO0FBdEJRO0VBQ0UsaUJBQUE7QUF3QlY7QUFwQkk7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFzQk47O0FBakJBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw2Q0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0Esd0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQW9CRjtBQW5CRTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0FBcUJKO0FBbkJFO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBQUE7QUFxQko7O0FBakJBO0VBQ0U7SUFDRSwwQkFBQTtFQW9CRjtFQWxCQTtJQUNFLGVBQUE7RUFvQkY7RUFsQkE7SUFDRSxpQkFBQTtFQW9CRjtFQWxCQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtFQW9CRjtBQUNGO0FBakJBO0VBQ0U7SUFDRSx5QkFBQTtFQW1CRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9kZXJuIEZvb3RlciBDb21wb25lbnQgU3R5bGVzXG4uc2l0ZS1mb290ZXIsIC5mb290ZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMxZTI5M2IgNjAlLCAjMjU2M2ViIDEwMCUpO1xuICBjb2xvcjogI2YxZjVmOTtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgZm9udC1mYW1pbHk6ICdJbnRlcicsICdTZWdvZSBVSScsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG4uZm9vdGVyLW1haW4sIC5tYWluLWZvb3RlciB7XG4gIHBhZGRpbmc6IDIuNXJlbSAwIDEuNXJlbSAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzNDE1NTtcbn1cblxuLmZvb3Rlci1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMjBweCwgMWZyKSk7XG4gIGdhcDogMi41cmVtO1xuICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICBnYXA6IDEuNXJlbTtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDFyZW07XG4gIH1cbn1cblxuLmZvb3Rlci1icmFuZCwgLmZvb3Rlci1sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjc1cmVtO1xuICAuYnJhbmQtbmFtZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLmZvb3Rlci1sb2dvIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbn1cblxuLmZvb3Rlci1kZXNjcmlwdGlvbiwgLmNvbXBhbnktZGVzY3JpcHRpb24ge1xuICBjb2xvcjogI2NiZDVlMTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXJnaW46IDAuNXJlbSAwIDEuMnJlbSAwO1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuXG4uY29udGFjdC1pbmZvIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgLmNvbnRhY3QtaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC41cmVtO1xuICAgIGNvbG9yOiAjY2JkNWUxO1xuICAgIGZvbnQtc2l6ZTogMC45N3JlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICAgIGksIG1hdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgY29sb3I6ICMzOGJkZjg7XG4gICAgfVxuICB9XG59XG5cbi5zb2NpYWwtbGlua3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuN3JlbTtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAuc29jaWFsLWxpbmsge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMzZweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICMzMzQxNTU7XG4gICAgY29sb3I6ICNmMWY1Zjk7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzLCBjb2xvciAwLjJzLCB0cmFuc2Zvcm0gMC4ycztcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICMyNTYzZWI7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KSBzY2FsZSgxLjA4KTtcbiAgICB9XG4gIH1cbn1cblxuLmZvb3Rlci1zZWN0aW9uLCAuZm9vdGVyLWNvbHVtbiB7XG4gIC5mb290ZXItdGl0bGUsIGg0IHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcbiAgfVxuICAuZm9vdGVyLWxpbmtzIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogI2NiZDVlMTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjMzhiZGY4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAudmlldy1hbGwge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogIzM4YmRmODtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmZvb3Rlci1zdWJ0aXRsZSwgaDUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMzhiZGY4O1xuICAgIG1hcmdpbjogMXJlbSAwIDAuNXJlbSAwO1xuICB9XG59XG5cbi5uZXdzbGV0dGVyLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMyNTYzZWIgNjAlLCAjMWUyOTNiIDEwMCUpO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMS41cmVtIDA7XG4gIC5uZXdzbGV0dGVyLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogMnJlbTtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBnYXA6IDFyZW07XG4gICAgfVxuICB9XG4gIC5uZXdzbGV0dGVyLXRleHQge1xuICAgIGZsZXg6IDE7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICBoMyB7XG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBtYXJnaW46IDAgMCAwLjNyZW0gMDtcbiAgICB9XG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBjb2xvcjogI2NiZDVlMTtcbiAgICB9XG4gIH1cbiAgLm5ld3NsZXR0ZXItZm9ybSB7XG4gICAgZmxleDogMTtcbiAgICBtaW4td2lkdGg6IDIyMHB4O1xuICAgIC5pbnB1dC1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAwLjVyZW07XG4gICAgICAubmV3c2xldHRlci1pbnB1dCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgY29sb3I6ICMxZTI5M2I7XG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLm5ld3NsZXR0ZXItYnRuIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzM4YmRmODtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgICAgICAgcGFkZGluZzogMC43cmVtIDEuNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzI1NjNlYjtcbiAgICAgICAgfVxuICAgICAgICAubG9hZGluZyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGdhcDogMC41cmVtO1xuICAgICAgICAgIC5zcGluIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5mZWF0dXJlcy1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2YxZjVmOTtcbiAgY29sb3I6ICMxZTI5M2I7XG4gIHBhZGRpbmc6IDEuNXJlbSAwO1xuICAuZmVhdHVyZXMtZ3JpZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDJyZW07XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICAgIGdhcDogMXJlbTtcbiAgICB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAxcmVtO1xuICAgIH1cbiAgICAuZmVhdHVyZS1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxcmVtO1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggIzI1NjNlYjExO1xuICAgICAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gICAgICBtaW4td2lkdGg6IDE4MHB4O1xuICAgICAgZmxleDogMTtcbiAgICAgIC5mZWF0dXJlLWljb24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMjU2M2ViO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICB9XG4gICAgICAuZmVhdHVyZS1jb250ZW50IHtcbiAgICAgICAgaDUge1xuICAgICAgICAgIG1hcmdpbjogMCAwIDAuMnJlbSAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uZm9vdGVyLWJvdHRvbSwgLmJvdHRvbS1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjMWUyOTNiO1xuICBjb2xvcjogI2NiZDVlMTtcbiAgcGFkZGluZzogMXJlbSAwO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIC5mb290ZXItYm90dG9tLWNvbnRlbnQsIC5ib3R0b20tZm9vdGVyLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogMS41cmVtO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMC41cmVtO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAucGF5bWVudC1tZXRob2RzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAwLjdyZW07XG4gICAgICAucGF5bWVudC1sYWJlbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAjMzhiZGY4O1xuICAgICAgfVxuICAgICAgLnBheW1lbnQtaWNvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDAuNXJlbTtcbiAgICAgICAgLnBheW1lbnQtaWNvbiB7XG4gICAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAmLnZpc2EgeyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3BheW1lbnRzL3Zpc2Euc3ZnJyk7IH1cbiAgICAgICAgICAmLm1hc3RlcmNhcmQgeyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3BheW1lbnRzL21hc3RlcmNhcmQuc3ZnJyk7IH1cbiAgICAgICAgICAmLmFtZXggeyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3BheW1lbnRzL2FtZXguc3ZnJyk7IH1cbiAgICAgICAgICAmLnBheXBhbCB7IGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvcGF5bWVudHMvcGF5cGFsLnN2ZycpOyB9XG4gICAgICAgICAgJi5hcHBsZS1wYXkgeyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3BheW1lbnRzL2FwcGxlLXBheS5zdmcnKTsgfVxuICAgICAgICAgICYuZ29vZ2xlLXBheSB7IGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvcGF5bWVudHMvZ29vZ2xlLXBheS5zdmcnKTsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5jZXJ0aWZpY2F0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMC41cmVtO1xuICAgICAgLmNlcnQtaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogMC4zcmVtO1xuICAgICAgICBjb2xvcjogIzM4YmRmODtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBpLCBtYXQtaWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmJ1aWx0LXdpdGgge1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICB9XG4gIH1cbn1cblxuLmJhY2stdG8tdG9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMS41cmVtO1xuICBib3R0b206IDEuNXJlbTtcbiAgYmFja2dyb3VuZDogIzI1NjNlYjtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4ICMyNTYzZWIzMztcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMsIHRyYW5zZm9ybSAwLjJzO1xuICB6LWluZGV4OiAxMDA7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgJi52aXNpYmxlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzhiZGY4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KSBzY2FsZSgxLjA4KTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmZvb3Rlci1tYWluLCAubWFpbi1mb290ZXIge1xuICAgIHBhZGRpbmc6IDEuMnJlbSAwIDAuN3JlbSAwO1xuICB9XG4gIC5mZWF0dXJlcy1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAxcmVtIDA7XG4gIH1cbiAgLmZvb3Rlci1ib3R0b20sIC5ib3R0b20tZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAwLjdyZW0gMDtcbiAgfVxuICAuYmFjay10by10b3Age1xuICAgIHJpZ2h0OiAxcmVtO1xuICAgIGJvdHRvbTogMXJlbTtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}


/***/ }),

/***/ 9381:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 2575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 1817);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _core_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/cart.service */ 3661);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 4102);














function HeaderComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Your One-Stop Shop");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_div_10_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_10_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.clearSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_div_10_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_10_div_6_div_1_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);
      const suggestion_r17 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r18.selectSuggestion(suggestion_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const suggestion_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](suggestion_r17);
  }
}
function HeaderComponent_div_10_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HeaderComponent_div_10_div_6_div_1_Template, 5, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r13.searchSuggestions);
  }
}
function HeaderComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function HeaderComponent_div_10_Template_input_focus_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.showSearchSuggestions = ctx_r20.searchSuggestions.length > 0);
    })("keyup.enter", function HeaderComponent_div_10_Template_input_keyup_enter_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r22.onSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, HeaderComponent_div_10_button_5_Template, 3, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, HeaderComponent_div_10_div_6_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r1.searchControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.searchControl.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.showSearchSuggestions && ctx_r1.searchSuggestions.length > 0);
  }
}
function HeaderComponent_nav_11_div_11_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 52)(1, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_nav_11_div_11_li_6_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29);
      const subcategory_r27 = restoredCtx.$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r28.navigateToSubcategory(subcategory_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const subcategory_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](subcategory_r27);
  }
}
function HeaderComponent_nav_11_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 47)(1, "h4", 48)(2, "mat-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ul", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, HeaderComponent_nav_11_div_11_li_6_Template, 3, 1, "li", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const category_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](category_r25.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", category_r25.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", category_r25.subcategories);
  }
}
function HeaderComponent_nav_11_li_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 36)(1, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return {
    exact: true
  };
};
function HeaderComponent_nav_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 34)(1, "ul", 35)(2, "li", 36)(3, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function HeaderComponent_nav_11_Template_li_mouseenter_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r30.openMegaMenu());
    })("mouseleave", function HeaderComponent_nav_11_Template_li_mouseleave_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r32.closeMegaMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_nav_11_Template_a_click_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r33.toggleMegaMenuOnClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 40)(9, "div", 41)(10, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, HeaderComponent_nav_11_div_11_Template, 7, 3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li", 36)(13, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "li", 36)(16, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, HeaderComponent_nav_11_li_18_Template, 3, 0, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("open", ctx_r2.megaMenuOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 5, ctx_r2.isAdmin$));
  }
}
function HeaderComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r34.toggleMobileSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const count_r36 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](count_r36 > 9 ? "9+" : count_r36);
  }
}
function HeaderComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const count_r37 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](count_r37 > 9 ? "9+" : count_r37);
  }
}
function HeaderComponent_div_24_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx_r38.currentUser$)) == null ? null : tmp_0_0.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function HeaderComponent_div_24_mat_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_div_24_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_24_button_24_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r43);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r42.navigateToAdmin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "admin_panel_settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Admin Panel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 57)(1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HeaderComponent_div_24_img_2_Template, 2, 3, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, HeaderComponent_div_24_mat_icon_4_Template, 2, 0, "mat-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-menu", 61, 62)(8, "div", 63)(9, "h5", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_24_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r44.navigateToProfile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_24_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r45);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r46.navigateToOrders());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "receipt_long");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Orders ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, HeaderComponent_div_24_button_24_Template, 4, 0, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_24_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r45);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r47.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 6, ctx_r6.currentUser$)) == null ? null : tmp_1_0.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 8, ctx_r6.currentUser$)) == null ? null : tmp_2_0.avatar));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 10, ctx_r6.currentUser$)) == null ? null : tmp_3_0.name) || ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 12, ctx_r6.currentUser$)) == null ? null : tmp_3_0.firstName) || "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 14, ctx_r6.currentUser$)) == null ? null : tmp_4_0.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 16, ctx_r6.isAdmin$));
  }
}
function HeaderComponent_ng_template_26_a_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_ng_template_26_button_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 74)(1, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, HeaderComponent_ng_template_26_a_0_Template, 2, 0, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HeaderComponent_ng_template_26_button_1_Template, 3, 0, "button", 72);
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r8.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.isMobile);
  }
}
function HeaderComponent_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_button_28_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r50.toggleMobileMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 76)(1, "div", 77)(2, "div", 78)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_29_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r52.toggleMobileSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function HeaderComponent_div_29_Template_input_keyup_enter_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r53);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r54.onMobileSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_29_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r53);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r55.onMobileSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("open", ctx_r10.mobileSearchOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r10.mobileSearchControl);
  }
}
function HeaderComponent_div_30_li_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 99)(1, "a", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_30_li_23_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r62);
      const category_r60 = restoredCtx.$implicit;
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r61.navigateToCategory(category_r60.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const category_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](category_r60.name);
  }
}
function HeaderComponent_div_30_li_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 88)(1, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_30_li_29_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r64);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r63.closeMobileMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "admin_panel_settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Admin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_div_30_li_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 88)(1, "a", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_30_li_31_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r66);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r65.closeMobileMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Login / Register ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_div_30_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 103)(1, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_30_div_33_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r68);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r67.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 82)(1, "div", 83)(2, "div", 84)(3, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_30_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r70);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r69.toggleMobileMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "nav", 87)(9, "ul")(10, "li", 88)(11, "a", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_30_Template_a_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r70);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r71.closeMobileMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-icon", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "home");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Home ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "li", 91)(16, "a", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_30_Template_a_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r70);
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r72.toggleMobileCategories());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-icon", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "category");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Categories ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-icon", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ul", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, HeaderComponent_div_30_li_23_Template, 3, 1, "li", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "li", 88)(25, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_30_Template_a_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r70);
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r73.closeMobileMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "mat-icon", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "store");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " All Products ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, HeaderComponent_div_30_li_29_Template, 5, 0, "li", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](30, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, HeaderComponent_div_30_li_31_Template, 5, 0, "li", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, HeaderComponent_div_30_div_33_Template, 5, 0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("open", ctx_r11.mobileMenuOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("expanded", ctx_r11.showMobileCategories);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("expanded", ctx_r11.showMobileCategories);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r11.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](30, 10, ctx_r11.isAdmin$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](32, 12, ctx_r11.isLoggedIn$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 14, ctx_r11.isLoggedIn$));
  }
}
class HeaderComponent {
  constructor(store, authService, cartService, router) {
    this.store = store;
    this.authService = authService;
    this.cartService = cartService;
    this.router = router;
    // Search functionality
    this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('');
    this.mobileSearchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('');
    this.searchSuggestions = [];
    this.showSearchSuggestions = false;
    this.mobileSearchOpen = false;
    this.showMobileSearch = false;
    // Mobile menu state
    this.mobileMenuOpen = false;
    this.showMobileMenu = false;
    this.megaMenuOpen = false;
    this.showMobileCategories = false;
    // Scroll state
    this.isScrolled = false;
    // Categories for mega menu
    this.categories = [{
      name: 'Electronics',
      icon: 'devices',
      subcategories: ['Smartphones', 'Laptops', 'Tablets', 'Accessories']
    }, {
      name: 'Fashion',
      icon: 'checkroom',
      subcategories: ['Men\'s Clothing', 'Women\'s Clothing', 'Shoes', 'Bags']
    }, {
      name: 'Home & Garden',
      icon: 'home',
      subcategories: ['Furniture', 'Decor', 'Kitchen', 'Garden']
    }, {
      name: 'Sports',
      icon: 'sports_soccer',
      subcategories: ['Fitness', 'Outdoor', 'Team Sports', 'Equipment']
    }];
    // Popular categories observable
    this.popularCategories$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(this.categories).asObservable();
    // User notifications (mock data)
    this.notificationsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([{
      id: 1,
      message: 'Your order has been shipped!',
      type: 'success',
      timestamp: new Date(),
      createdAt: new Date(),
      read: false
    }, {
      id: 2,
      message: 'New products available in Electronics',
      type: 'info',
      timestamp: new Date(),
      createdAt: new Date(),
      read: false
    }]);
    // Mobile detection
    this.isMobile = false;
    this.isLoggedIn$ = this.store.select(state => !!state.auth.user);
    this.currentUser$ = this.store.select(state => state.auth.user);
    this.cartItems$ = this.store.select(state => state.cart.items);
    this.cartItemCount$ = this.store.select(state => state.cart.items.reduce((count, item) => count + item.quantity, 0));
    this.isAdmin$ = this.store.select(state => state.auth.user?.role === 'admin');
    // Alias for template compatibility
    this.isAuthenticated$ = this.isLoggedIn$;
    // Mock observables for wishlist and notifications
    this.wishlistCount$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(3).asObservable();
    this.notifications$ = this.notificationsSubject.asObservable();
    this.notificationCount$ = this.notificationsSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(notifications => notifications.filter(n => !n.read).length));
    this.detectMobile();
  }
  ngOnInit() {
    // Load cart items when component initializes
    this.cartService.loadCart();
    // Setup search functionality
    this.searchControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(term => term !== null && term.length >= 2)).subscribe(term => {
      this.onSearch(term);
    });
  }
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }
  onResize(event) {
    this.detectMobile();
  }
  onDocumentClick(event) {
    // Close search suggestions when clicking outside
    if (!event.target.closest('.search-container')) {
      this.showSearchSuggestions = false;
    }
    // Close mega menu when clicking outside
    // Ensure that the click is not on the mega-menu-trigger link itself if it's used for toggling
    if (!event.target.closest('.mega-menu-trigger > .nav-link') && !event.target.closest('.mega-menu-trigger .mega-menu')) {
      this.closeMegaMenu();
    }
  }
  // Search functionality - handles both with and without parameters
  onSearch(term) {
    const searchTerm = term !== undefined ? term || '' : this.searchControl.value || '';
    if (!searchTerm || searchTerm.length < 2) {
      this.searchSuggestions = [];
      this.showSearchSuggestions = false;
      if (term === undefined) {
        // If called without parameter (button click), perform search anyway
        this.performSearch(searchTerm);
      }
      return;
    }
    // Mock search suggestions
    const mockSuggestions = ['iPhone 15 Pro', 'Samsung Galaxy S24', 'MacBook Pro', 'AirPods Pro', 'iPad Air', 'Google Pixel 8', 'Sony WH-1000XM5', 'Nintendo Switch'];
    this.searchSuggestions = mockSuggestions.filter(suggestion => suggestion.toLowerCase().includes(searchTerm.toLowerCase())).slice(0, 5);
    this.showSearchSuggestions = this.searchSuggestions.length > 0;
    // If called without parameter (from button click), perform search
    if (term === undefined) {
      this.performSearch(searchTerm);
    }
  }
  clearSearch() {
    this.searchControl.setValue('');
    this.searchSuggestions = [];
    this.showSearchSuggestions = false;
  }
  selectSuggestion(suggestion) {
    this.searchControl.setValue(suggestion);
    this.showSearchSuggestions = false;
    this.performSearch(suggestion);
  }
  performSearch(term) {
    if (term) {
      this.router.navigate(['/products'], {
        queryParams: {
          search: term
        }
      });
      this.showSearchSuggestions = false;
      if (this.mobileSearchOpen) {
        this.toggleMobileSearch();
      }
    }
  }
  // Mobile search toggle
  toggleMobileSearch() {
    this.mobileSearchOpen = !this.mobileSearchOpen;
    this.showMobileSearch = this.mobileSearchOpen;
    if (this.mobileSearchOpen) {
      // Focus search input after animation
      setTimeout(() => {
        const searchInput = document.querySelector('.mobile-search input');
        if (searchInput) {
          searchInput.focus();
        }
      }, 300);
    }
  }
  onMobileSearch() {
    const searchTerm = this.mobileSearchControl.value || '';
    this.performSearch(searchTerm);
    this.mobileSearchControl.setValue('');
    this.toggleMobileSearch();
  }
  // Mobile menu
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    this.showMobileMenu = this.mobileMenuOpen;
    // Prevent body scroll when menu is open
    document.body.style.overflow = this.mobileMenuOpen ? 'hidden' : '';
  }
  closeMobileMenu() {
    this.mobileMenuOpen = false;
    this.showMobileMenu = false;
    document.body.style.overflow = '';
  }
  // Mobile categories toggle
  toggleMobileCategories() {
    this.showMobileCategories = !this.showMobileCategories;
  }
  // Mega menu
  openMegaMenu() {
    if (!this.isMobile) {
      // Mega menu is for desktop
      this.megaMenuOpen = true;
    }
  }
  closeMegaMenu() {
    if (!this.isMobile) {
      this.megaMenuOpen = false;
    }
  }
  toggleMegaMenuOnClick(event) {
    if (!this.isMobile) {
      event.stopPropagation(); // Prevent document click from closing it immediately
      this.megaMenuOpen = !this.megaMenuOpen;
    }
  }
  // Navigation methods
  navigateToCategory(category) {
    this.router.navigate(['/products'], {
      queryParams: {
        category: category.toLowerCase()
      }
    });
    this.closeMobileMenu();
    this.closeMegaMenu();
  }
  navigateToSubcategory(subcategory) {
    this.router.navigate(['/products'], {
      queryParams: {
        subcategory: subcategory.toLowerCase()
      }
    });
    this.closeMobileMenu();
    this.closeMegaMenu();
  }
  navigateToWishlist() {
    this.router.navigate(['/wishlist']);
    this.closeMobileMenu();
  }
  navigateToCart() {
    this.router.navigate(['/cart']);
    this.closeMobileMenu();
  }
  navigateToProfile() {
    this.router.navigate(['/profile']);
    this.closeMobileMenu();
  }
  navigateToOrders() {
    this.router.navigate(['/profile/orders']);
    this.closeMobileMenu();
  }
  navigateToAdmin() {
    this.router.navigate(['/admin']);
    this.closeMobileMenu();
  }
  // Notification methods
  markAllAsRead() {
    const notifications = this.notificationsSubject.value;
    const updatedNotifications = notifications.map(n => ({
      ...n,
      read: true
    }));
    this.notificationsSubject.next(updatedNotifications);
  }
  markAsRead(notification) {
    const notifications = this.notificationsSubject.value;
    const updatedNotifications = notifications.map(n => n.id === notification.id ? {
      ...n,
      read: true
    } : n);
    this.notificationsSubject.next(updatedNotifications);
  }
  getNotificationIcon(type) {
    switch (type) {
      case 'success':
        return 'check_circle';
      case 'warning':
        return 'warning';
      case 'error':
        return 'error';
      case 'info':
      default:
        return 'info';
    }
  }
  // Utility methods
  detectMobile() {
    this.isMobile = window.innerWidth < 768;
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
    this.closeMobileMenu();
    this.closeMegaMenu();
  }
  static {
    this.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler() {
            return ctx.onWindowScroll();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("resize", function HeaderComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("click", function HeaderComponent_click_HostBindingHandler($event) {
            return ctx.onDocumentClick($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
        }
      },
      decls: 31,
      vars: 19,
      consts: [[1, "header"], [1, "header-main"], [1, "container"], [1, "logo-section"], ["routerLink", "/", 1, "d-flex", "align-items-center", "text-decoration-none"], ["src", "assets/images/logo.svg", "alt", "Brand Logo", 1, "logo"], [1, "brand-text"], [1, "brand-name"], ["class", "brand-tagline", 4, "ngIf"], ["class", "search-section", 4, "ngIf"], ["class", "nav-section", 4, "ngIf"], [1, "user-actions"], ["mat-icon-button", "", "class", "action-button mobile-search-btn", "aria-label", "Open search", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "Wishlist", 1, "action-button", 3, "click"], [1, "action-icon"], ["class", "badge", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "Shopping cart", 1, "action-button", 3, "click"], ["class", "user-menu", 4, "ngIf", "ngIfElse"], ["loggedOutActions", ""], ["mat-icon-button", "", "class", "action-button mobile-menu-btn", "aria-label", "Open menu", 3, "click", 4, "ngIf"], ["class", "mobile-search-overlay", 3, "open", 4, "ngIf"], ["class", "mobile-menu-overlay", 3, "open", 4, "ngIf"], [1, "brand-tagline"], [1, "search-section"], [1, "search-container"], ["type", "text", "placeholder", "Search products, categories...", 1, "search-input", 3, "formControl", "focus", "keyup.enter"], [1, "search-icon"], ["class", "search-clear", "aria-label", "Clear search", 3, "click", 4, "ngIf"], ["class", "search-suggestions", 4, "ngIf"], ["aria-label", "Clear search", 1, "search-clear", 3, "click"], [1, "search-suggestions"], ["class", "suggestion-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "suggestion-item", 3, "click"], [1, "suggestion-icon"], [1, "nav-section"], [1, "nav-menu"], [1, "nav-item"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "nav-item", "has-dropdown", "mega-menu-trigger", 3, "mouseenter", "mouseleave"], [1, "nav-link", 3, "click"], [1, "mega-menu"], [1, "mega-menu-content"], [1, "mega-menu-grid"], ["class", "mega-menu-category", 4, "ngFor", "ngForOf"], ["routerLink", "/products", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/contact", "routerLinkActive", "active", 1, "nav-link"], ["class", "nav-item", 4, "ngIf"], [1, "mega-menu-category"], [1, "category-title"], [1, "category-icon"], [1, "category-links"], ["class", "category-link", 4, "ngFor", "ngForOf"], [1, "category-link"], [3, "click"], ["routerLink", "/admin", "routerLinkActive", "active", 1, "nav-link"], ["mat-icon-button", "", "aria-label", "Open search", 1, "action-button", "mobile-search-btn", 3, "click"], [1, "badge"], [1, "user-menu"], ["mat-icon-button", "", "aria-label", "User menu", 1, "action-button", 3, "matMenuTriggerFor"], ["alt", "User Avatar", "class", "user-avatar-icon", 3, "src", 4, "ngIf"], ["class", "action-icon", 4, "ngIf"], [1, "custom-mat-menu"], ["userActionsMenu", "matMenu"], [1, "dropdown-header"], [1, "user-name"], [1, "user-email"], ["mat-menu-item", "", 3, "click"], [1, "dropdown-icon"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 1, "danger", 3, "click"], ["alt", "User Avatar", 1, "user-avatar-icon", 3, "src"], ["routerLink", "/auth/login", "class", "btn btn-sm btn-outline-primary login-btn", 4, "ngIf"], ["mat-icon-button", "", "class", "action-button", "routerLink", "/auth/login", "aria-label", "Login", 4, "ngIf"], ["routerLink", "/auth/login", 1, "btn", "btn-sm", "btn-outline-primary", "login-btn"], ["mat-icon-button", "", "routerLink", "/auth/login", "aria-label", "Login", 1, "action-button"], ["mat-icon-button", "", "aria-label", "Open menu", 1, "action-button", "mobile-menu-btn", 3, "click"], [1, "mobile-search-overlay"], [1, "mobile-search-content"], [1, "mobile-search-header"], ["mat-icon-button", "", "aria-label", "Close search", 1, "close-search", 3, "click"], ["type", "text", "placeholder", "Search products...", 1, "mobile-search-input", 3, "formControl", "keyup.enter"], [1, "btn", "btn-primary", "w-100", 3, "click"], [1, "mobile-menu-overlay"], [1, "mobile-menu-content"], [1, "mobile-menu-header"], [1, "mobile-menu-title"], ["mat-icon-button", "", "aria-label", "Close menu", 1, "close-menu", 3, "click"], [1, "mobile-menu-nav"], [1, "mobile-nav-item"], ["routerLink", "/", 1, "mobile-nav-link", 3, "click"], [1, "mobile-nav-icon"], [1, "mobile-nav-item", "has-submenu"], [1, "mobile-nav-link", 3, "click"], [1, "submenu-toggle"], [1, "mobile-submenu"], ["class", "mobile-submenu-item", 4, "ngFor", "ngForOf"], ["routerLink", "/products", 1, "mobile-nav-link", 3, "click"], ["class", "mobile-nav-item", 4, "ngIf"], ["class", "mobile-menu-footer", 4, "ngIf"], [1, "mobile-submenu-item"], [1, "mobile-submenu-link", 3, "click"], ["routerLink", "/admin", 1, "mobile-nav-link", 3, "click"], ["routerLink", "/auth/login", 1, "mobile-nav-link", 3, "click"], [1, "mobile-menu-footer"], [1, "btn", "btn-danger", "w-100", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "ShopSphere");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, HeaderComponent_span_9_Template, 2, 0, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, HeaderComponent_div_10_Template, 7, 3, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, HeaderComponent_nav_11_Template, 20, 8, "nav", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, HeaderComponent_button_13_Template, 3, 0, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_14_listener() {
            return ctx.navigateToWishlist();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-icon", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "favorite_border");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, HeaderComponent_span_17_Template, 2, 1, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_19_listener() {
            return ctx.navigateToCart();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-icon", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "shopping_cart");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, HeaderComponent_span_22_Template, 2, 1, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, HeaderComponent_div_24_Template, 31, 18, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, HeaderComponent_ng_template_26_Template, 2, 2, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, HeaderComponent_button_28_Template, 3, 0, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, HeaderComponent_div_29_Template, 11, 3, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, HeaderComponent_div_30_Template, 35, 16, "div", 21);
        }
        if (rf & 2) {
          const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("scrolled", ctx.isScrolled);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isMobile);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isMobile);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isMobile);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isMobile);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 13, ctx.wishlistCount$));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 15, ctx.cartItemCount$));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 17, ctx.isLoggedIn$))("ngIfElse", _r7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isMobile);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isMobile);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isMobile);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkActive, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuTrigger, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDivider, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe],
      styles: ["[_ngcontent-%COMP%]:root {\n  --primary-color: #2563eb;\n  --primary-rgb: 37, 99, 235;\n  --primary-light: #3b82f6;\n  --primary-dark: #1d4ed8;\n  --secondary-color: #7c3aed;\n  --secondary-color-rgb: 124, 58, 237;\n  --secondary-light: #8b5cf6;\n  --secondary-dark: #6d28d9;\n  --gray-50: #f9fafb;\n  --gray-100: #f3f4f6;\n  --gray-200: #e5e7eb;\n  --gray-300: #d1d5db;\n  --gray-400: #9ca3af;\n  --gray-500: #6b7280;\n  --gray-600: #4b5563;\n  --gray-700: #374151;\n  --gray-800: #1f2937;\n  --gray-900: #111827;\n  --success-color: #10b981;\n  --success-light: #34d399;\n  --success-dark: #059669;\n  --error-color: #ef4444;\n  --error-light: #f87171;\n  --error-dark: #dc2626;\n  --warning-color: #f59e0b;\n  --warning-light: #fbbf24;\n  --warning-dark: #d97706;\n  --info-color: #3b82f6;\n  --info-light: #60a5fa;\n  --info-dark: #2563eb;\n  --bg-primary: #ffffff;\n  --bg-secondary: #f9fafb;\n  --bg-tertiary: #f3f4f6;\n  --surface-color: #fff;\n  --surface-light: #f8fafc;\n  --text-primary: #111827;\n  --text-secondary: #4b5563;\n  --text-muted: #6b7280;\n  --text-white: #ffffff;\n  --text-link: var(--primary-color);\n  --border-color: #e5e7eb;\n  --border-light: #e5e7eb;\n  --border-medium: #d1d5db;\n  --border-dark: #9ca3af;\n  --focus-ring: 0 0 0 3px rgba(var(--primary-color-rgb), 0.4);\n}\n\n[_ngcontent-%COMP%]:root {\n  --font-primary: \"Inter\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, sans-serif;\n  --font-secondary: \"Poppins\", \"Inter\", sans-serif;\n  --font-monospace: \"SFMono-Regular\", Consolas, \"Liberation Mono\", Menlo, monospace;\n  --text-xs: 0.75rem;\n  --text-sm: 0.875rem;\n  --text-base: 1rem;\n  --text-lg: 1.125rem;\n  --text-xl: 1.25rem;\n  --text-2xl: 1.5rem;\n  --text-3xl: 1.875rem;\n  --text-4xl: 2.25rem;\n  --text-5xl: 3rem;\n  --leading-none: 1;\n  --leading-tight: 1.25;\n  --leading-snug: 1.375;\n  --leading-normal: 1.5;\n  --leading-relaxed: 1.625;\n  --leading-loose: 2;\n  --font-thin: 100;\n  --font-extralight: 200;\n  --font-light: 300;\n  --font-normal: 400;\n  --font-medium: 500;\n  --font-semibold: 600;\n  --font-bold: 700;\n  --font-extrabold: 800;\n  --font-black: 900;\n  --tracking-tighter: -0.05em;\n  --tracking-tight: -0.025em;\n  --tracking-normal: 0em;\n  --tracking-wide: 0.025em;\n  --tracking-wider: 0.05em;\n  --tracking-widest: 0.1em;\n}\n\n[_ngcontent-%COMP%]:root {\n  --spacing-xs: 0.25rem;\n  --spacing-sm: 0.5rem;\n  --spacing-md: 1rem;\n  --spacing-lg: 1.5rem;\n  --spacing-xl: 2rem;\n  --spacing-2xl: 3rem;\n  --spacing-3xl: 4rem;\n  --spacing-4xl: 6rem;\n  --container-sm: 640px;\n  --container-md: 768px;\n  --container-lg: 1024px;\n  --container-xl: 1280px;\n  --container-2xl: 1536px;\n}\n\n[_ngcontent-%COMP%]:root {\n  --radius-none: 0;\n  --radius-sm: 0.125rem;\n  --radius-md: 0.375rem;\n  --radius-lg: 0.5rem;\n  --radius-xl: 0.75rem;\n  --radius-2xl: 1rem;\n  --radius-3xl: 1.5rem;\n  --radius-full: 9999px;\n}\n\n[_ngcontent-%COMP%]:root {\n  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n  --shadow-focus: 0 0 0 3px rgba(var(--primary-color-rgb), 0.4);\n  --shadow-focus-error: 0 0 0 3px rgba(239, 68, 68, 0.4);\n}\n\n[_ngcontent-%COMP%]:root {\n  --transition-fastest: 100ms;\n  --transition-fast: 150ms;\n  --transition-normal: 250ms;\n  --transition-slow: 400ms;\n  --transition-slowest: 700ms;\n  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);\n  --ease-in: cubic-bezier(0.4, 0, 1, 1);\n  --ease-out: cubic-bezier(0, 0, 0.2, 1);\n  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n\n[_ngcontent-%COMP%]:root {\n  --z-0: 0;\n  --z-10: 10;\n  --z-20: 20;\n  --z-30: 30;\n  --z-40: 40;\n  --z-50: 50;\n  --z-auto: auto;\n  --z-dropdown: 1000;\n  --z-sticky: 1020;\n  --z-fixed: 1030;\n  --z-modal-backdrop: 1040;\n  --z-modal: 1050;\n  --z-popover: 1060;\n  --z-tooltip: 1070;\n}\n\n.d-none[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.d-inline[_ngcontent-%COMP%] {\n  display: inline !important;\n}\n\n.d-inline-block[_ngcontent-%COMP%] {\n  display: inline-block !important;\n}\n\n.d-block[_ngcontent-%COMP%] {\n  display: block !important;\n}\n\n.d-flex[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n\n.d-inline-flex[_ngcontent-%COMP%] {\n  display: inline-flex !important;\n}\n\n.d-grid[_ngcontent-%COMP%] {\n  display: grid !important;\n}\n\n.flex-row[_ngcontent-%COMP%] {\n  flex-direction: row !important;\n}\n\n.flex-column[_ngcontent-%COMP%] {\n  flex-direction: column !important;\n}\n\n.flex-wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap !important;\n}\n\n.flex-nowrap[_ngcontent-%COMP%] {\n  flex-wrap: nowrap !important;\n}\n\n.flex-fill[_ngcontent-%COMP%] {\n  flex: 1 1 auto !important;\n}\n\n.flex-grow-0[_ngcontent-%COMP%] {\n  flex-grow: 0 !important;\n}\n\n.flex-grow-1[_ngcontent-%COMP%] {\n  flex-grow: 1 !important;\n}\n\n.flex-shrink-0[_ngcontent-%COMP%] {\n  flex-shrink: 0 !important;\n}\n\n.flex-shrink-1[_ngcontent-%COMP%] {\n  flex-shrink: 1 !important;\n}\n\n.justify-content-start[_ngcontent-%COMP%] {\n  justify-content: flex-start !important;\n}\n\n.justify-content-end[_ngcontent-%COMP%] {\n  justify-content: flex-end !important;\n}\n\n.justify-content-center[_ngcontent-%COMP%] {\n  justify-content: center !important;\n}\n\n.justify-content-between[_ngcontent-%COMP%] {\n  justify-content: space-between !important;\n}\n\n.justify-content-around[_ngcontent-%COMP%] {\n  justify-content: space-around !important;\n}\n\n.align-items-start[_ngcontent-%COMP%] {\n  align-items: flex-start !important;\n}\n\n.align-items-end[_ngcontent-%COMP%] {\n  align-items: flex-end !important;\n}\n\n.align-items-center[_ngcontent-%COMP%] {\n  align-items: center !important;\n}\n\n.align-items-baseline[_ngcontent-%COMP%] {\n  align-items: baseline !important;\n}\n\n.align-items-stretch[_ngcontent-%COMP%] {\n  align-items: stretch !important;\n}\n\n.align-self-start[_ngcontent-%COMP%] {\n  align-self: flex-start !important;\n}\n\n.align-self-end[_ngcontent-%COMP%] {\n  align-self: flex-end !important;\n}\n\n.align-self-center[_ngcontent-%COMP%] {\n  align-self: center !important;\n}\n\n.align-self-baseline[_ngcontent-%COMP%] {\n  align-self: baseline !important;\n}\n\n.align-self-stretch[_ngcontent-%COMP%] {\n  align-self: stretch !important;\n}\n\n.m-0[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n\n.m-1[_ngcontent-%COMP%] {\n  margin: var(--spacing-xs) !important;\n}\n\n.m-2[_ngcontent-%COMP%] {\n  margin: var(--spacing-sm) !important;\n}\n\n.m-3[_ngcontent-%COMP%] {\n  margin: var(--spacing-md) !important;\n}\n\n.m-4[_ngcontent-%COMP%] {\n  margin: var(--spacing-lg) !important;\n}\n\n.m-5[_ngcontent-%COMP%] {\n  margin: var(--spacing-xl) !important;\n}\n\n.m-auto[_ngcontent-%COMP%] {\n  margin: auto !important;\n}\n\n.mx-0[_ngcontent-%COMP%] {\n  margin-right: 0 !important;\n  margin-left: 0 !important;\n}\n\n.mx-1[_ngcontent-%COMP%] {\n  margin-right: var(--spacing-xs) !important;\n  margin-left: var(--spacing-xs) !important;\n}\n\n.mx-2[_ngcontent-%COMP%] {\n  margin-right: var(--spacing-sm) !important;\n  margin-left: var(--spacing-sm) !important;\n}\n\n.mx-3[_ngcontent-%COMP%] {\n  margin-right: var(--spacing-md) !important;\n  margin-left: var(--spacing-md) !important;\n}\n\n.mx-4[_ngcontent-%COMP%] {\n  margin-right: var(--spacing-lg) !important;\n  margin-left: var(--spacing-lg) !important;\n}\n\n.mx-5[_ngcontent-%COMP%] {\n  margin-right: var(--spacing-xl) !important;\n  margin-left: var(--spacing-xl) !important;\n}\n\n.mx-auto[_ngcontent-%COMP%] {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n\n.my-0[_ngcontent-%COMP%] {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n\n.my-1[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-xs) !important;\n  margin-bottom: var(--spacing-xs) !important;\n}\n\n.my-2[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-sm) !important;\n  margin-bottom: var(--spacing-sm) !important;\n}\n\n.my-3[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-md) !important;\n  margin-bottom: var(--spacing-md) !important;\n}\n\n.my-4[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-lg) !important;\n  margin-bottom: var(--spacing-lg) !important;\n}\n\n.my-5[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-xl) !important;\n  margin-bottom: var(--spacing-xl) !important;\n}\n\n.my-auto[_ngcontent-%COMP%] {\n  margin-top: auto !important;\n  margin-bottom: auto !important;\n}\n\n.p-0[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n\n.p-1[_ngcontent-%COMP%] {\n  padding: var(--spacing-xs) !important;\n}\n\n.p-2[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) !important;\n}\n\n.p-3[_ngcontent-%COMP%] {\n  padding: var(--spacing-md) !important;\n}\n\n.p-4[_ngcontent-%COMP%] {\n  padding: var(--spacing-lg) !important;\n}\n\n.p-5[_ngcontent-%COMP%] {\n  padding: var(--spacing-xl) !important;\n}\n\n.px-0[_ngcontent-%COMP%] {\n  padding-right: 0 !important;\n  padding-left: 0 !important;\n}\n\n.px-1[_ngcontent-%COMP%] {\n  padding-right: var(--spacing-xs) !important;\n  padding-left: var(--spacing-xs) !important;\n}\n\n.px-2[_ngcontent-%COMP%] {\n  padding-right: var(--spacing-sm) !important;\n  padding-left: var(--spacing-sm) !important;\n}\n\n.px-3[_ngcontent-%COMP%] {\n  padding-right: var(--spacing-md) !important;\n  padding-left: var(--spacing-md) !important;\n}\n\n.px-4[_ngcontent-%COMP%] {\n  padding-right: var(--spacing-lg) !important;\n  padding-left: var(--spacing-lg) !important;\n}\n\n.px-5[_ngcontent-%COMP%] {\n  padding-right: var(--spacing-xl) !important;\n  padding-left: var(--spacing-xl) !important;\n}\n\n.py-0[_ngcontent-%COMP%] {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.py-1[_ngcontent-%COMP%] {\n  padding-top: var(--spacing-xs) !important;\n  padding-bottom: var(--spacing-xs) !important;\n}\n\n.py-2[_ngcontent-%COMP%] {\n  padding-top: var(--spacing-sm) !important;\n  padding-bottom: var(--spacing-sm) !important;\n}\n\n.py-3[_ngcontent-%COMP%] {\n  padding-top: var(--spacing-md) !important;\n  padding-bottom: var(--spacing-md) !important;\n}\n\n.py-4[_ngcontent-%COMP%] {\n  padding-top: var(--spacing-lg) !important;\n  padding-bottom: var(--spacing-lg) !important;\n}\n\n.py-5[_ngcontent-%COMP%] {\n  padding-top: var(--spacing-xl) !important;\n  padding-bottom: var(--spacing-xl) !important;\n}\n\n.text-left[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n\n.text-right[_ngcontent-%COMP%] {\n  text-align: right !important;\n}\n\n.text-center[_ngcontent-%COMP%] {\n  text-align: center !important;\n}\n\n.text-justify[_ngcontent-%COMP%] {\n  text-align: justify !important;\n}\n\n.text-lowercase[_ngcontent-%COMP%] {\n  text-transform: lowercase !important;\n}\n\n.text-uppercase[_ngcontent-%COMP%] {\n  text-transform: uppercase !important;\n}\n\n.text-capitalize[_ngcontent-%COMP%] {\n  text-transform: capitalize !important;\n}\n\n.fw-light[_ngcontent-%COMP%] {\n  font-weight: var(--font-light) !important;\n}\n\n.fw-normal[_ngcontent-%COMP%] {\n  font-weight: var(--font-normal) !important;\n}\n\n.fw-medium[_ngcontent-%COMP%] {\n  font-weight: var(--font-medium) !important;\n}\n\n.fw-semibold[_ngcontent-%COMP%] {\n  font-weight: var(--font-semibold) !important;\n}\n\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: var(--font-bold) !important;\n}\n\n.fs-xs[_ngcontent-%COMP%] {\n  font-size: var(--text-xs) !important;\n}\n\n.fs-sm[_ngcontent-%COMP%] {\n  font-size: var(--text-sm) !important;\n}\n\n.fs-md[_ngcontent-%COMP%] {\n  font-size: var(--text-base) !important;\n}\n\n.fs-lg[_ngcontent-%COMP%] {\n  font-size: var(--text-lg) !important;\n}\n\n.fs-xl[_ngcontent-%COMP%] {\n  font-size: var(--text-xl) !important;\n}\n\n.fs-2xl[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl) !important;\n}\n\n.fs-3xl[_ngcontent-%COMP%] {\n  font-size: var(--text-3xl) !important;\n}\n\n.text-primary[_ngcontent-%COMP%] {\n  color: var(--primary-color) !important;\n}\n\n.text-secondary[_ngcontent-%COMP%] {\n  color: var(--secondary-color) !important;\n}\n\n.text-success[_ngcontent-%COMP%] {\n  color: var(--success-color) !important;\n}\n\n.text-error[_ngcontent-%COMP%] {\n  color: var(--error-color) !important;\n}\n\n.text-warning[_ngcontent-%COMP%] {\n  color: var(--warning-color) !important;\n}\n\n.text-info[_ngcontent-%COMP%] {\n  color: var(--info-color) !important;\n}\n\n.text-light[_ngcontent-%COMP%] {\n  color: var(--text-white) !important;\n}\n\n.text-dark[_ngcontent-%COMP%] {\n  color: var(--text-primary) !important;\n}\n\n.text-muted[_ngcontent-%COMP%] {\n  color: var(--text-muted) !important;\n}\n\n.bg-primary[_ngcontent-%COMP%] {\n  background-color: var(--primary-color) !important;\n}\n\n.bg-secondary[_ngcontent-%COMP%] {\n  background-color: var(--secondary-color) !important;\n}\n\n.bg-success[_ngcontent-%COMP%] {\n  background-color: var(--success-color) !important;\n}\n\n.bg-error[_ngcontent-%COMP%] {\n  background-color: var(--error-color) !important;\n}\n\n.bg-warning[_ngcontent-%COMP%] {\n  background-color: var(--warning-color) !important;\n}\n\n.bg-info[_ngcontent-%COMP%] {\n  background-color: var(--info-color) !important;\n}\n\n.bg-light[_ngcontent-%COMP%] {\n  background-color: var(--bg-secondary) !important;\n}\n\n.bg-dark[_ngcontent-%COMP%] {\n  background-color: var(--gray-900) !important;\n}\n\n.bg-white[_ngcontent-%COMP%] {\n  background-color: var(--bg-primary) !important;\n}\n\n.bg-transparent[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n}\n\n.border[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-medium) !important;\n}\n\n.border-0[_ngcontent-%COMP%] {\n  border: 0 !important;\n}\n\n.border-top[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--border-medium) !important;\n}\n\n.border-end[_ngcontent-%COMP%] {\n  border-right: 1px solid var(--border-medium) !important;\n}\n\n.border-bottom[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border-medium) !important;\n}\n\n.border-start[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--border-medium) !important;\n}\n\n.border-primary[_ngcontent-%COMP%] {\n  border-color: var(--primary-color) !important;\n}\n\n.border-secondary[_ngcontent-%COMP%] {\n  border-color: var(--secondary-color) !important;\n}\n\n.border-success[_ngcontent-%COMP%] {\n  border-color: var(--success-color) !important;\n}\n\n.border-error[_ngcontent-%COMP%] {\n  border-color: var(--error-color) !important;\n}\n\n.border-warning[_ngcontent-%COMP%] {\n  border-color: var(--warning-color) !important;\n}\n\n.border-info[_ngcontent-%COMP%] {\n  border-color: var(--info-color) !important;\n}\n\n.rounded-none[_ngcontent-%COMP%] {\n  border-radius: var(--radius-none) !important;\n}\n\n.rounded-sm[_ngcontent-%COMP%] {\n  border-radius: var(--radius-sm) !important;\n}\n\n.rounded[_ngcontent-%COMP%] {\n  border-radius: var(--radius-md) !important;\n}\n\n.rounded-lg[_ngcontent-%COMP%] {\n  border-radius: var(--radius-lg) !important;\n}\n\n.rounded-xl[_ngcontent-%COMP%] {\n  border-radius: var(--radius-xl) !important;\n}\n\n.rounded-2xl[_ngcontent-%COMP%] {\n  border-radius: var(--radius-2xl) !important;\n}\n\n.rounded-3xl[_ngcontent-%COMP%] {\n  border-radius: var(--radius-3xl) !important;\n}\n\n.rounded-circle[_ngcontent-%COMP%] {\n  border-radius: 50% !important;\n}\n\n.rounded-pill[_ngcontent-%COMP%] {\n  border-radius: var(--radius-full) !important;\n}\n\n.shadow-none[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n.shadow-sm[_ngcontent-%COMP%] {\n  box-shadow: var(--shadow-sm) !important;\n}\n\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: var(--shadow-md) !important;\n}\n\n.shadow-lg[_ngcontent-%COMP%] {\n  box-shadow: var(--shadow-lg) !important;\n}\n\n.shadow-xl[_ngcontent-%COMP%] {\n  box-shadow: var(--shadow-xl) !important;\n}\n\n.position-static[_ngcontent-%COMP%] {\n  position: static !important;\n}\n\n.position-relative[_ngcontent-%COMP%] {\n  position: relative !important;\n}\n\n.position-absolute[_ngcontent-%COMP%] {\n  position: absolute !important;\n}\n\n.position-fixed[_ngcontent-%COMP%] {\n  position: fixed !important;\n}\n\n.position-sticky[_ngcontent-%COMP%] {\n  position: sticky !important;\n}\n\n.top-0[_ngcontent-%COMP%] {\n  top: 0 !important;\n}\n\n.top-50[_ngcontent-%COMP%] {\n  top: 50% !important;\n}\n\n.top-100[_ngcontent-%COMP%] {\n  top: 100% !important;\n}\n\n.bottom-0[_ngcontent-%COMP%] {\n  bottom: 0 !important;\n}\n\n.bottom-50[_ngcontent-%COMP%] {\n  bottom: 50% !important;\n}\n\n.bottom-100[_ngcontent-%COMP%] {\n  bottom: 100% !important;\n}\n\n.start-0[_ngcontent-%COMP%] {\n  left: 0 !important;\n}\n\n.start-50[_ngcontent-%COMP%] {\n  left: 50% !important;\n}\n\n.start-100[_ngcontent-%COMP%] {\n  left: 100% !important;\n}\n\n.end-0[_ngcontent-%COMP%] {\n  right: 0 !important;\n}\n\n.end-50[_ngcontent-%COMP%] {\n  right: 50% !important;\n}\n\n.end-100[_ngcontent-%COMP%] {\n  right: 100% !important;\n}\n\n.translate-middle[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%) !important;\n}\n\n.translate-middle-x[_ngcontent-%COMP%] {\n  transform: translateX(-50%) !important;\n}\n\n.translate-middle-y[_ngcontent-%COMP%] {\n  transform: translateY(-50%) !important;\n}\n\n.visible[_ngcontent-%COMP%] {\n  visibility: visible !important;\n}\n\n.invisible[_ngcontent-%COMP%] {\n  visibility: hidden !important;\n}\n\n.overflow-auto[_ngcontent-%COMP%] {\n  overflow: auto !important;\n}\n\n.overflow-hidden[_ngcontent-%COMP%] {\n  overflow: hidden !important;\n}\n\n.overflow-visible[_ngcontent-%COMP%] {\n  overflow: visible !important;\n}\n\n.overflow-scroll[_ngcontent-%COMP%] {\n  overflow: scroll !important;\n}\n\n.w-25[_ngcontent-%COMP%] {\n  width: 25% !important;\n}\n\n.w-50[_ngcontent-%COMP%] {\n  width: 50% !important;\n}\n\n.w-75[_ngcontent-%COMP%] {\n  width: 75% !important;\n}\n\n.w-100[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.w-auto[_ngcontent-%COMP%] {\n  width: auto !important;\n}\n\n.h-25[_ngcontent-%COMP%] {\n  height: 25% !important;\n}\n\n.h-50[_ngcontent-%COMP%] {\n  height: 50% !important;\n}\n\n.h-75[_ngcontent-%COMP%] {\n  height: 75% !important;\n}\n\n.h-100[_ngcontent-%COMP%] {\n  height: 100% !important;\n}\n\n.h-auto[_ngcontent-%COMP%] {\n  height: auto !important;\n}\n\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem 1rem;\n  font-weight: var(--font-medium);\n  border-radius: var(--radius-md);\n  transition: all var(--transition-fast) var(--ease-in-out);\n  cursor: pointer;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: var(--shadow-focus);\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n.btn.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  font-size: var(--text-sm);\n}\n.btn.btn-lg[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  font-size: var(--text-lg);\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: var(--primary-dark);\n}\n.btn.btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  background-color: var(--primary-dark);\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background-color: var(--secondary-color);\n  color: white;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: var(--secondary-dark);\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:active:not(:disabled) {\n  background-color: var(--secondary-dark);\n}\n.btn.btn-success[_ngcontent-%COMP%] {\n  background-color: var(--success-color);\n  color: white;\n}\n.btn.btn-success[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: var(--success-dark);\n}\n.btn.btn-success[_ngcontent-%COMP%]:active:not(:disabled) {\n  background-color: var(--success-dark);\n}\n.btn.btn-error[_ngcontent-%COMP%] {\n  background-color: var(--error-color);\n  color: white;\n}\n.btn.btn-error[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: var(--error-dark);\n}\n.btn.btn-error[_ngcontent-%COMP%]:active:not(:disabled) {\n  background-color: var(--error-dark);\n}\n.btn.btn-warning[_ngcontent-%COMP%] {\n  background-color: var(--warning-color);\n  color: white;\n}\n.btn.btn-warning[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: var(--warning-dark);\n}\n.btn.btn-warning[_ngcontent-%COMP%]:active:not(:disabled) {\n  background-color: var(--warning-dark);\n}\n.btn.btn-outline-primary[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: var(--primary-color);\n  border: 1px solid var(--primary-color);\n}\n.btn.btn-outline-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: var(--primary-color);\n  color: white;\n}\n.btn.btn-outline-secondary[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: var(--secondary-color);\n  border: 1px solid var(--secondary-color);\n}\n.btn.btn-outline-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: var(--secondary-color);\n  color: white;\n}\n.btn.btn-ghost[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: var(--text-primary);\n}\n.btn.btn-ghost[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: var(--gray-100);\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-md);\n  overflow: hidden;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  padding: var(--spacing-md) var(--spacing-lg);\n  border-bottom: 1px solid var(--border-light);\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: var(--spacing-lg);\n}\n.card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  padding: var(--spacing-md) var(--spacing-lg);\n  border-top: 1px solid var(--border-light);\n  background-color: var(--bg-secondary);\n}\n\n.form-control[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.5rem 0.75rem;\n  background-color: var(--bg-primary);\n  border: 1px solid var(--border-medium);\n  border-radius: var(--radius-md);\n  font-size: var(--text-base);\n  line-height: 1.5;\n  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n  box-shadow: var(--shadow-focus);\n}\n.form-control[_ngcontent-%COMP%]:disabled, .form-control[readonly][_ngcontent-%COMP%] {\n  background-color: var(--gray-100);\n  opacity: 0.7;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-md);\n}\n\n.form-label[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: var(--spacing-xs);\n  font-weight: var(--font-medium);\n}\n\n.form-text[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-xs);\n  font-size: var(--text-sm);\n  color: var(--text-muted);\n}\n\n.form-check[_ngcontent-%COMP%] {\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5rem;\n  margin-bottom: var(--spacing-xs);\n}\n.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%] {\n  float: left;\n  margin-left: -1.5rem;\n}\n.form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.fade-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-in-out;\n}\n\n.slide-up[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideUp 0.4s ease-out;\n}\n\n.slide-down[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideDown 0.4s ease-out;\n}\n\n.slide-left[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideLeft 0.4s ease-out;\n}\n\n.slide-right[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideRight 0.4s ease-out;\n}\n\n.zoom-in[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_zoomIn 0.3s ease-out;\n}\n\n.zoom-out[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_zoomOut 0.3s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    transform: translateY(-20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideLeft {\n  from {\n    transform: translateX(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideRight {\n  from {\n    transform: translateX(-20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_zoomIn {\n  from {\n    transform: scale(0.95);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_zoomOut {\n  from {\n    transform: scale(1.05);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\nhtml[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  font-size: 16px;\n  scroll-behavior: smooth;\n}\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after {\n  box-sizing: inherit;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: var(--font-primary);\n  font-size: var(--text-base);\n  color: var(--text-primary);\n  background: var(--bg-secondary);\n  margin: 0;\n  padding: 0;\n  line-height: var(--leading-normal);\n  min-height: 100vh;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  font-family: var(--font-secondary);\n  color: var(--text-primary);\n  margin-top: 0;\n  margin-bottom: 0.5em;\n  font-weight: var(--font-bold);\n  line-height: var(--leading-tight);\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: var(--text-4xl);\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: var(--text-3xl);\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: var(--text-2xl);\n}\n\nh4[_ngcontent-%COMP%] {\n  font-size: var(--text-xl);\n}\n\nh5[_ngcontent-%COMP%] {\n  font-size: var(--text-lg);\n}\n\nh6[_ngcontent-%COMP%] {\n  font-size: var(--text-base);\n}\n\na[_ngcontent-%COMP%] {\n  color: var(--text-link);\n  text-decoration: none;\n  transition: color var(--transition-fast);\n}\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:focus {\n  color: var(--primary-dark);\n  text-decoration: underline;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n  display: block;\n  border-radius: var(--radius-md);\n}\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-family: inherit;\n  font-size: inherit;\n  color: inherit;\n  background: none;\n  border: none;\n  outline: none;\n}\n\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: background var(--transition-fast), color var(--transition-fast);\n}\n\nul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%] {\n  padding-left: 1.5em;\n  margin-top: 0;\n  margin-bottom: 1em;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: var(--container-xl);\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: var(--spacing-md);\n  padding-right: var(--spacing-md);\n}\n@media (max-width: 1280px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: var(--container-lg);\n  }\n}\n@media (max-width: 1024px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: var(--container-md);\n  }\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    max-width: 100%;\n    padding-left: var(--spacing-sm);\n    padding-right: var(--spacing-sm);\n  }\n}\n\n.header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  background: var(--surface-color, #fff);\n  border-bottom: 1px solid var(--border-color, #e5e7eb);\n  box-shadow: 0 2px 8px rgba(var(--primary-rgb), 0.06);\n  transition: box-shadow 0.3s, background 0.3s;\n}\n.header.scrolled[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.1);\n}\n\n.top-bar[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  color: white;\n  padding: 8px 0;\n  font-size: 0.875rem;\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .top-bar[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.header-main[_ngcontent-%COMP%] {\n  padding: 12px 0;\n}\n.header-main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 72px;\n  gap: 2rem;\n}\n@media (max-width: 900px) {\n  .header-main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n}\n@media (max-width: 768px) {\n  .header-main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    gap: 0.5rem;\n    padding: 0 1rem;\n  }\n}\n@media (max-width: 600px) {\n  .header-main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    min-height: 56px;\n    gap: 0.5rem;\n    padding: 0 0.5rem;\n  }\n}\n\n.logo-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n}\n.logo-section[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: 38px;\n  width: auto;\n}\n@media (max-width: 768px) {\n  .logo-section[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    height: 30px;\n  }\n}\n.logo-section[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: var(--primary-color);\n  margin: 0;\n  letter-spacing: 1px;\n}\n@media (max-width: 768px) {\n  .logo-section[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n}\n.logo-section[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]   .brand-tagline[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .logo-section[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]   .brand-tagline[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.search-section[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 420px;\n  position: relative;\n}\n@media (max-width: 900px) {\n  .search-section[_ngcontent-%COMP%] {\n    display: block;\n    order: 3;\n    width: 100%;\n    margin-top: 0.5rem;\n    max-width: none;\n  }\n}\n@media (min-width: 901px) {\n  .search-section[_ngcontent-%COMP%] {\n    order: 0;\n    margin-top: 0;\n  }\n}\n.search-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.search-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 16px 10px 44px;\n  border-radius: 32px;\n  background: var(--surface-light, #f8fafc);\n  border: 1.5px solid var(--border-color, #e5e7eb);\n  font-size: 1rem;\n  transition: border 0.2s ease;\n}\n.search-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1333333333);\n}\n.search-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.search-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-muted);\n  font-size: 1.125rem;\n}\n.search-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-clear[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 50%;\n  transition: background 0.2s ease, color 0.2s ease;\n}\n.search-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-clear[_ngcontent-%COMP%]:hover {\n  background: #fca5a5;\n  color: #ef4444;\n}\n.search-section[_ngcontent-%COMP%]   .search-suggestions[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: #fff;\n  border: 1px solid var(--border-color, #e5e7eb);\n  border-radius: 12px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n  z-index: 1001;\n  margin-top: 4px;\n  overflow: hidden;\n}\n.search-section[_ngcontent-%COMP%]   .search-suggestions[_ngcontent-%COMP%]   .suggestion-item[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  cursor: pointer;\n  border-bottom: 1px solid var(--border-light, #e5e7eb);\n  transition: background-color 0.2s ease;\n  font-size: 1rem;\n}\n.search-section[_ngcontent-%COMP%]   .search-suggestions[_ngcontent-%COMP%]   .suggestion-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.search-section[_ngcontent-%COMP%]   .search-suggestions[_ngcontent-%COMP%]   .suggestion-item[_ngcontent-%COMP%]:hover {\n  background: var(--surface-light, #f8fafc);\n}\n.search-section[_ngcontent-%COMP%]   .search-suggestions[_ngcontent-%COMP%]   .suggestion-item[_ngcontent-%COMP%]   .suggestion-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  color: var(--text-muted);\n}\n\n.nav-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.nav-section[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.nav-section[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n}\n.nav-section[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.5rem 1.2rem;\n  border-radius: 8px;\n  color: var(--text-primary);\n  font-weight: 600;\n  font-size: 1.05rem;\n  letter-spacing: 0.01em;\n  transition: background 0.18s, color 0.18s;\n  position: relative;\n}\n.nav-section[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .nav-section[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus {\n  background: var(--primary-light);\n  color: #fff;\n  text-decoration: none;\n}\n.nav-section[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  font-size: 1.2rem;\n}\n.nav-section[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item.has-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n.nav-section[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item.has-dropdown[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]::after {\n  content: \"\";\n  margin-left: 6px;\n  border: 4px solid transparent;\n  border-top-color: currentColor;\n  transition: transform 0.3s ease;\n}\n.nav-section[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item.has-dropdown[_ngcontent-%COMP%]:hover   .nav-link[_ngcontent-%COMP%]::after {\n  transform: rotate(180deg);\n}\n.nav-section[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item.has-dropdown.mega-menu-trigger[_ngcontent-%COMP%] {\n  position: relative;\n}\n@media (max-width: 900px) {\n  .nav-section[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.nav-section[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-weight: 700;\n}\n\n.user-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n}\n.user-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%] {\n  background: var(--surface-light, #f8fafc);\n  color: var(--primary-color);\n  border-radius: 50%;\n  padding: 10px;\n  margin-left: 0.2rem;\n  transition: background 0.18s, color 0.18s, box-shadow 0.18s;\n}\n.user-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n  color: #fff;\n  box-shadow: 0 2px 8px rgba(var(--primary-rgb), 0.1);\n}\n.user-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: var(--error-color);\n  color: #fff;\n  font-size: 0.8rem;\n  min-width: 18px;\n  height: 18px;\n  top: -4px;\n  right: -4px;\n}\n@media (min-width: 769px) {\n  .user-actions[_ngcontent-%COMP%]   .mobile-search-btn[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (min-width: 1025px) {\n  .user-actions[_ngcontent-%COMP%]   .mobile-menu-btn[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%] {\n  position: relative;\n}\n.user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid var(--border-color);\n}\n.user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: white;\n  border: 1px solid var(--border-color);\n  border-radius: 12px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  z-index: 1001;\n  margin-top: 8px;\n  min-width: 200px;\n  overflow: hidden;\n}\n.user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-bottom: 1px solid var(--border-light);\n  background: var(--surface-light);\n}\n.user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin: 0 0 4px 0;\n}\n.user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n  margin: 0;\n}\n.user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 8px 0;\n}\n.user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  text-decoration: none;\n  color: var(--text-primary);\n  transition: background-color 0.2s ease;\n}\n.user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]:hover {\n  background: var(--surface-light);\n}\n.user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-icon[_ngcontent-%COMP%] {\n  margin-right: 12px;\n  font-size: 1.125rem;\n  color: var(--text-muted);\n}\n.user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item.danger[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%] {\n  color: var(--error-color);\n}\n.user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item.danger[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]:hover {\n  background: var(--error-light);\n}\n.user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%] {\n  position: relative;\n}\n.user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-avatar-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.user-actions[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%] {\n  padding: 0.4rem 1rem;\n  font-weight: 600;\n}\n.mega-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: max-content;\n  min-width: 400px;\n  max-width: calc(100vw - 40px);\n  background: var(--surface-color, #fff);\n  border: 1px solid var(--border-color);\n  border-top: none;\n  border-radius: 0 0 var(--radius-lg, 8px) var(--radius-lg, 8px);\n  box-shadow: var(--shadow-xl, 0 10px 25px rgba(0, 0, 0, 0.15));\n  z-index: var(--z-dropdown, 1000);\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(10px);\n  transition: opacity 0.25s ease-out, transform 0.25s ease-out, visibility 0.25s ease-out;\n  pointer-events: none;\n}\n.mega-menu.open[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n  pointer-events: auto;\n}\n.mega-menu[_ngcontent-%COMP%]   .mega-menu-content[_ngcontent-%COMP%] {\n  padding: var(--spacing-lg, 1.5rem);\n}\n.mega-menu[_ngcontent-%COMP%]   .mega-menu-content[_ngcontent-%COMP%]   .mega-menu-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, auto);\n  gap: var(--spacing-xl, 2rem);\n}\n.mega-menu[_ngcontent-%COMP%]   .mega-menu-content[_ngcontent-%COMP%]   .mega-menu-grid[_ngcontent-%COMP%]   .mega-menu-category[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: var(--text-lg, 1.125rem);\n  font-weight: var(--font-semibold, 600);\n  color: var(--primary-color);\n  margin-bottom: var(--spacing-md, 1rem);\n}\n.mega-menu[_ngcontent-%COMP%]   .mega-menu-content[_ngcontent-%COMP%]   .mega-menu-grid[_ngcontent-%COMP%]   .mega-menu-category[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%] {\n  margin-right: var(--spacing-sm, 0.5rem);\n  font-size: 1.35rem;\n}\n.mega-menu[_ngcontent-%COMP%]   .mega-menu-content[_ngcontent-%COMP%]   .mega-menu-grid[_ngcontent-%COMP%]   .mega-menu-category[_ngcontent-%COMP%]   .category-links[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.mega-menu[_ngcontent-%COMP%]   .mega-menu-content[_ngcontent-%COMP%]   .mega-menu-grid[_ngcontent-%COMP%]   .mega-menu-category[_ngcontent-%COMP%]   .category-links[_ngcontent-%COMP%]   .category-link[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-sm, 0.5rem);\n}\n.mega-menu[_ngcontent-%COMP%]   .mega-menu-content[_ngcontent-%COMP%]   .mega-menu-grid[_ngcontent-%COMP%]   .mega-menu-category[_ngcontent-%COMP%]   .category-links[_ngcontent-%COMP%]   .category-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  text-decoration: none;\n  padding: var(--spacing-xs, 0.25rem) var(--spacing-sm, 0.5rem);\n  display: block;\n  border-radius: var(--radius-md, 6px);\n  transition: color 0.2s ease, background-color 0.2s ease;\n}\n.mega-menu[_ngcontent-%COMP%]   .mega-menu-content[_ngcontent-%COMP%]   .mega-menu-grid[_ngcontent-%COMP%]   .mega-menu-category[_ngcontent-%COMP%]   .category-links[_ngcontent-%COMP%]   .category-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--primary-dark);\n  background-color: rgba(var(--primary-rgb), 0.08);\n}\n\n.mobile-search-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1050;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n}\n.mobile-search-overlay.open[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.mobile-search-overlay[_ngcontent-%COMP%]   .mobile-search-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1rem;\n  transform: translateY(-100%);\n  transition: transform 0.3s ease;\n}\n.mobile-search-overlay[_ngcontent-%COMP%]   .mobile-search-content[_ngcontent-%COMP%]   .mobile-search-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.mobile-search-overlay[_ngcontent-%COMP%]   .mobile-search-content[_ngcontent-%COMP%]   .mobile-search-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.125rem;\n}\n.mobile-search-overlay[_ngcontent-%COMP%]   .mobile-search-content[_ngcontent-%COMP%]   .mobile-search-header[_ngcontent-%COMP%]   .close-search[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 4px;\n}\n.mobile-search-overlay[_ngcontent-%COMP%]   .mobile-search-content[_ngcontent-%COMP%]   .mobile-search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 2px solid var(--border-color);\n  border-radius: 8px;\n  font-size: 1rem;\n  margin-bottom: 1.5rem;\n}\n.mobile-search-overlay[_ngcontent-%COMP%]   .mobile-search-content[_ngcontent-%COMP%]   .mobile-search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n}\n.mobile-search-overlay[_ngcontent-%COMP%]   .mobile-search-content[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  font-size: 1rem;\n}\n.mobile-search-overlay.open[_ngcontent-%COMP%]   .mobile-search-content[_ngcontent-%COMP%] {\n  transform: translateY(0);\n}\n\n.mobile-menu-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1100;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n}\n.mobile-menu-overlay.open[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.mobile-menu-overlay.open[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 280px;\n  height: 100%;\n  background: white;\n  overflow-y: auto;\n  transform: translateX(-100%);\n  transition: transform 0.3s ease;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-header[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-bottom: 1px solid var(--border-color);\n  background: var(--surface-light);\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-header[_ngcontent-%COMP%]   .mobile-menu-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-header[_ngcontent-%COMP%]   .mobile-menu-title[_ngcontent-%COMP%]   .close-menu[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 4px;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%]   .mobile-nav-item[_ngcontent-%COMP%]   .mobile-nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 1rem;\n  text-decoration: none;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  transition: background-color 0.2s ease;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%]   .mobile-nav-item[_ngcontent-%COMP%]   .mobile-nav-link[_ngcontent-%COMP%]:hover {\n  background: var(--surface-light);\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%]   .mobile-nav-item[_ngcontent-%COMP%]   .mobile-nav-link[_ngcontent-%COMP%]   .mobile-nav-icon[_ngcontent-%COMP%] {\n  margin-right: 12px;\n  font-size: 1.25rem;\n  color: var(--text-muted);\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%]   .mobile-nav-item.has-submenu[_ngcontent-%COMP%]   .mobile-nav-link[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%]   .mobile-nav-item.has-submenu[_ngcontent-%COMP%]   .mobile-nav-link[_ngcontent-%COMP%]   .submenu-toggle[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  font-size: 1rem;\n  cursor: pointer;\n  padding: 4px;\n  transition: transform 0.3s ease;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%]   .mobile-nav-item.has-submenu[_ngcontent-%COMP%]   .mobile-nav-link.expanded[_ngcontent-%COMP%]   .submenu-toggle[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%]   .mobile-nav-item.has-submenu[_ngcontent-%COMP%]   .mobile-submenu[_ngcontent-%COMP%] {\n  background: var(--surface-light);\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s ease;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%]   .mobile-nav-item.has-submenu[_ngcontent-%COMP%]   .mobile-submenu.expanded[_ngcontent-%COMP%] {\n  max-height: 500px;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%]   .mobile-nav-item.has-submenu[_ngcontent-%COMP%]   .mobile-submenu[_ngcontent-%COMP%]   .mobile-submenu-item[_ngcontent-%COMP%]   .mobile-submenu-link[_ngcontent-%COMP%] {\n  display: block;\n  padding: 10px 1rem 10px 3rem;\n  text-decoration: none;\n  color: var(--text-secondary);\n  font-size: 0.875rem;\n  transition: color 0.2s ease;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%]   .mobile-nav-item.has-submenu[_ngcontent-%COMP%]   .mobile-submenu[_ngcontent-%COMP%]   .mobile-submenu-item[_ngcontent-%COMP%]   .mobile-submenu-link[_ngcontent-%COMP%]:hover {\n  color: var(--primary-color);\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-footer[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-top: 1px solid var(--border-color);\n  margin-top: auto;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-footer[_ngcontent-%COMP%]   .mobile-auth-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-footer[_ngcontent-%COMP%]   .mobile-auth-buttons[_ngcontent-%COMP%]   .mobile-auth-btn[_ngcontent-%COMP%] {\n  padding: 12px;\n  border: 2px solid var(--primary-color);\n  border-radius: 8px;\n  font-weight: 600;\n  text-decoration: none;\n  text-align: center;\n  transition: all 0.3s ease;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-footer[_ngcontent-%COMP%]   .mobile-auth-buttons[_ngcontent-%COMP%]   .mobile-auth-btn.primary[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  color: white;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-footer[_ngcontent-%COMP%]   .mobile-auth-buttons[_ngcontent-%COMP%]   .mobile-auth-btn.primary[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-footer[_ngcontent-%COMP%]   .mobile-auth-buttons[_ngcontent-%COMP%]   .mobile-auth-btn.secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--primary-color);\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-footer[_ngcontent-%COMP%]   .mobile-auth-buttons[_ngcontent-%COMP%]   .mobile-auth-btn.secondary[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-footer[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.75rem;\n  font-size: 1rem;\n}\n\n.notification-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: white;\n  border: 1px solid var(--border-color);\n  border-radius: 12px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  z-index: 1001;\n  margin-top: 8px;\n  width: 320px;\n  max-height: 400px;\n  overflow: hidden;\n}\n.notification-dropdown[_ngcontent-%COMP%]   .notification-header[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-bottom: 1px solid var(--border-light);\n  background: var(--surface-light);\n}\n.notification-dropdown[_ngcontent-%COMP%]   .notification-header[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0;\n  font-weight: 600;\n}\n.notification-dropdown[_ngcontent-%COMP%]   .notification-header[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%]   .mark-all-read[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--primary-color);\n  cursor: pointer;\n  font-size: 0.875rem;\n  text-decoration: underline;\n}\n.notification-dropdown[_ngcontent-%COMP%]   .notification-header[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%]   .mark-all-read[_ngcontent-%COMP%]:hover {\n  color: var(--primary-dark);\n}\n.notification-dropdown[_ngcontent-%COMP%]   .notification-list[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow-y: auto;\n}\n.notification-dropdown[_ngcontent-%COMP%]   .notification-list[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border-light);\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.notification-dropdown[_ngcontent-%COMP%]   .notification-list[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.notification-dropdown[_ngcontent-%COMP%]   .notification-list[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]:hover {\n  background: var(--surface-light);\n}\n.notification-dropdown[_ngcontent-%COMP%]   .notification-list[_ngcontent-%COMP%]   .notification-item.unread[_ngcontent-%COMP%] {\n  background: rgba(var(--primary-rgb), 0.05);\n  border-left: 3px solid var(--primary-color);\n}\n.notification-dropdown[_ngcontent-%COMP%]   .notification-list[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .notification-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin: 0 0 4px 0;\n  line-height: 1.4;\n}\n.notification-dropdown[_ngcontent-%COMP%]   .notification-list[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .notification-time[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n.notification-dropdown[_ngcontent-%COMP%]   .notification-list[_ngcontent-%COMP%]   .empty-notifications[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n  color: var(--text-muted);\n}\n.notification-dropdown[_ngcontent-%COMP%]   .notification-list[_ngcontent-%COMP%]   .empty-notifications[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    transform: translateY(-10px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.search-suggestions[_ngcontent-%COMP%], .user-dropdown[_ngcontent-%COMP%], .notification-dropdown[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease;\n}\n\n@media (max-width: 480px) {\n  .header-main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n  .logo-section[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n  }\n  .user-actions[_ngcontent-%COMP%] {\n    gap: 0.25rem;\n  }\n  .user-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%] {\n    padding: 6px;\n  }\n  .user-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n  }\n}\n@media (prefers-contrast: high) {\n  .header[_ngcontent-%COMP%] {\n    border-bottom-width: 2px;\n  }\n  .action-button[_ngcontent-%COMP%] {\n    border: 1px solid transparent;\n  }\n  .action-button[_ngcontent-%COMP%]:focus {\n    border-color: var(--primary-color);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  *[_ngcontent-%COMP%] {\n    transition: none !important;\n    animation: none !important;\n  }\n}\n@media (max-width: 480px) {\n  .mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 1024px) {\n  .nav-section[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .user-actions[_ngcontent-%COMP%]   .mobile-menu-btn[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n@media (max-width: 600px) {\n  .header-main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    min-height: 56px;\n    padding: 0 0.5rem;\n  }\n  .logo-section[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .user-actions[_ngcontent-%COMP%] {\n    gap: 0.2rem;\n  }\n  .user-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%] {\n    padding: 7px;\n  }\n  .user-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n.top-bar[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.custom-mat-menu[_ngcontent-%COMP%] {\n  border-radius: var(--radius-lg) !important;\n  box-shadow: var(--shadow-lg) !important;\n}\n.custom-mat-menu[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-bottom: 1px solid var(--border-light);\n  background: var(--surface-light);\n}\n.custom-mat-menu[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin: 0 0 0.25rem 0;\n  font-size: 1rem;\n}\n.custom-mat-menu[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n  margin: 0;\n  word-break: break-all;\n}\n.custom-mat-menu[_ngcontent-%COMP%]   .mat-mdc-menu-item[_ngcontent-%COMP%] {\n  min-height: 40px;\n  font-size: 0.95rem;\n}\n.custom-mat-menu[_ngcontent-%COMP%]   .mat-mdc-menu-item[_ngcontent-%COMP%]   .dropdown-icon[_ngcontent-%COMP%] {\n  margin-right: 0.75rem;\n  color: var(--text-muted);\n  font-size: 1.25rem;\n}\n.custom-mat-menu[_ngcontent-%COMP%]   .mat-mdc-menu-item.danger[_ngcontent-%COMP%] {\n  color: var(--error-color);\n}\n.custom-mat-menu[_ngcontent-%COMP%]   .mat-mdc-menu-item.danger[_ngcontent-%COMP%]   .dropdown-icon[_ngcontent-%COMP%] {\n  color: var(--error-color);\n}\n.custom-mat-menu[_ngcontent-%COMP%]   .mat-mdc-menu-item.danger[_ngcontent-%COMP%]:hover {\n  background-color: rgba(var(--error-color), 0.1);\n}\n\n@media (max-width: 900px) {\n  .header-main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: space-between;\n    row-gap: 0.5rem;\n  }\n  .logo-section[_ngcontent-%COMP%] {\n    width: auto;\n    margin-right: auto;\n  }\n  .user-actions[_ngcontent-%COMP%] {\n    margin-left: auto;\n  }\n}\n@media (max-width: 600px) {\n  .header-main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .search-section[_ngcontent-%COMP%] {\n    order: 3;\n    width: 100%;\n    margin-top: 0.75rem;\n  }\n  .logo-section[_ngcontent-%COMP%] {\n    flex-grow: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZGVzaWduLXN5c3RlbS5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBRUUsd0JBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFFQSwwQkFBQTtFQUNBLG1DQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUdBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBR0Esd0JBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBRUEsc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBRUEsd0JBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBRUEscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBR0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBR0EscUJBQUE7RUFDQSx3QkFBQTtFQUdBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7RUFHQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUdBLDJEQUFBO0FDeEJGOztBRDhCQTtFQUVFLDBHQUFBO0VBQ0EsZ0RBQUE7RUFDQSxpRkFBQTtFQUdBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUdBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUdBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxp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QTtFQUFjLGlEQUFBO0FDcUlkOztBRHBJQTtFQUFXLDhDQUFBO0FDd0lYOztBRHZJQTtFQUFZLGdEQUFBO0FDMklaOztBRDFJQTtFQUFXLDRDQUFBO0FDOElYOztBRDdJQTtFQUFZLDhDQUFBO0FDaUpaOztBRGhKQTtFQUFrQix3Q0FBQTtBQ29KbEI7O0FEakpBO0VBQVUsaURBQUE7QUNxSlY7O0FEcEpBO0VBQVksb0JBQUE7QUN3Slo7O0FEdkpBO0VBQWMscURBQUE7QUMySmQ7O0FEMUpBO0VBQWMsdURBQUE7QUM4SmQ7O0FEN0pBO0VBQWlCLHdEQUFBO0FDaUtqQjs7QURoS0E7RUFBZ0Isc0RBQUE7QUNvS2hCOztBRGxLQTtFQUFrQiw2Q0FBQTtBQ3NLbEI7O0FEcktBO0VBQW9CLCtDQUFBO0FDeUtwQjs7QUR4S0E7RUFBa0IsNkNBQUE7QUM0S2xCOztBRDNLQTtFQUFnQiwyQ0FBQTtBQytLaEI7O0FEOUtBO0VBQWtCLDZDQUFBO0FDa0xsQjs7QURqTEE7RUFBZSwwQ0FBQTtBQ3FMZjs7QURsTEE7RUFBZ0IsNENBQUE7QUNzTGhCOztBRHJMQTtFQUFjLDBDQUFBO0FDeUxkOztBRHhMQTtFQUFXLDBDQUFBO0FDNExYOztBRDNMQTtFQUFjLDBDQUFBO0FDK0xkOztBRDlMQTtFQUFjLDBDQUFBO0FDa01kOztBRGpNQTtFQUFlLDJDQUFBO0FDcU1mOztBRHBNQTtFQUFlLDJDQUFBO0FDd01mOztBRHZNQTtFQUFrQiw2QkFBQTtBQzJNbEI7O0FEMU1BO0VBQWdCLDRDQUFBO0FDOE1oQjs7QUQzTUE7RUFBZSwyQkFBQTtBQytNZjs7QUQ5TUE7RUFBYSx1Q0FBQTtBQ2tOYjs7QURqTkE7RUFBVSx1Q0FBQTtBQ3FOVjs7QURwTkE7RUFBYSx1Q0FBQTtBQ3dOYjs7QUR2TkE7RUFBYSx1Q0FBQTtBQzJOYjs7QUR4TkE7RUFBbUIsMkJBQUE7QUM0Tm5COztBRDNOQTtFQUFxQiw2QkFBQTtBQytOckI7O0FEOU5BO0VBQXFCLDZCQUFBO0FDa09yQjs7QURqT0E7RUFBa0IsMEJBQUE7QUNxT2xCOztBRHBPQTtFQUFt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XG4vLyBBIGNvbXByZWhlbnNpdmUgU0NTUyBmcmFtZXdvcmsgZm9yIGNvbnNpc3RlbnQgc3R5bGluZyBhY3Jvc3MgdGhlIGFwcGxpY2F0aW9uXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ09MT1IgU1lTVEVNXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbjpyb290IHtcbiAgLy8gQnJhbmQgQ29sb3JzXG4gIC0tcHJpbWFyeS1jb2xvcjogIzI1NjNlYjtcbiAgLS1wcmltYXJ5LXJnYjogMzcsIDk5LCAyMzU7IC8vIEFkZCB0aGlzIGZvciBjb21wYXRpYmlsaXR5XG4gIC0tcHJpbWFyeS1saWdodDogIzNiODJmNjtcbiAgLS1wcmltYXJ5LWRhcms6ICMxZDRlZDg7XG4gIFxuICAtLXNlY29uZGFyeS1jb2xvcjogIzdjM2FlZDtcbiAgLS1zZWNvbmRhcnktY29sb3ItcmdiOiAxMjQsIDU4LCAyMzc7XG4gIC0tc2Vjb25kYXJ5LWxpZ2h0OiAjOGI1Y2Y2O1xuICAtLXNlY29uZGFyeS1kYXJrOiAjNmQyOGQ5O1xuICBcbiAgLy8gTmV1dHJhbCBDb2xvcnNcbiAgLS1ncmF5LTUwOiAjZjlmYWZiO1xuICAtLWdyYXktMTAwOiAjZjNmNGY2O1xuICAtLWdyYXktMjAwOiAjZTVlN2ViO1xuICAtLWdyYXktMzAwOiAjZDFkNWRiO1xuICAtLWdyYXktNDAwOiAjOWNhM2FmO1xuICAtLWdyYXktNTAwOiAjNmI3MjgwO1xuICAtLWdyYXktNjAwOiAjNGI1NTYzO1xuICAtLWdyYXktNzAwOiAjMzc0MTUxO1xuICAtLWdyYXktODAwOiAjMWYyOTM3O1xuICAtLWdyYXktOTAwOiAjMTExODI3O1xuICBcbiAgLy8gU2VtYW50aWMgQ29sb3JzXG4gIC0tc3VjY2Vzcy1jb2xvcjogIzEwYjk4MTtcbiAgLS1zdWNjZXNzLWxpZ2h0OiAjMzRkMzk5O1xuICAtLXN1Y2Nlc3MtZGFyazogIzA1OTY2OTtcbiAgXG4gIC0tZXJyb3ItY29sb3I6ICNlZjQ0NDQ7XG4gIC0tZXJyb3ItbGlnaHQ6ICNmODcxNzE7XG4gIC0tZXJyb3ItZGFyazogI2RjMjYyNjtcbiAgXG4gIC0td2FybmluZy1jb2xvcjogI2Y1OWUwYjtcbiAgLS13YXJuaW5nLWxpZ2h0OiAjZmJiZjI0O1xuICAtLXdhcm5pbmctZGFyazogI2Q5NzcwNjtcbiAgXG4gIC0taW5mby1jb2xvcjogIzNiODJmNjtcbiAgLS1pbmZvLWxpZ2h0OiAjNjBhNWZhO1xuICAtLWluZm8tZGFyazogIzI1NjNlYjtcblxuICAvLyBCYWNrZ3JvdW5kIENvbG9yc1xuICAtLWJnLXByaW1hcnk6ICNmZmZmZmY7XG4gIC0tYmctc2Vjb25kYXJ5OiAjZjlmYWZiO1xuICAtLWJnLXRlcnRpYXJ5OiAjZjNmNGY2O1xuICBcbiAgLy8gU3VyZmFjZSBDb2xvcnNcbiAgLS1zdXJmYWNlLWNvbG9yOiAjZmZmOyAgICAgICAgIC8vIEFkZCBmb3IgaGVhZGVyL2Zvb3RlciBiYWNrZ3JvdW5kc1xuICAtLXN1cmZhY2UtbGlnaHQ6ICNmOGZhZmM7ICAgICAgLy8gQWRkIGZvciBsaWdodCBiYWNrZ3JvdW5kc1xuICBcbiAgLy8gVGV4dCBDb2xvcnNcbiAgLS10ZXh0LXByaW1hcnk6ICMxMTE4Mjc7XG4gIC0tdGV4dC1zZWNvbmRhcnk6ICM0YjU1NjM7XG4gIC0tdGV4dC1tdXRlZDogIzZiNzI4MDtcbiAgLS10ZXh0LXdoaXRlOiAjZmZmZmZmO1xuICAtLXRleHQtbGluazogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIFxuICAvLyBCb3JkZXIgQ29sb3JzXG4gIC0tYm9yZGVyLWNvbG9yOiAjZTVlN2ViOyAgICAgICAvLyBBZGQgZm9yIGJvcmRlciBjb21wYXRpYmlsaXR5XG4gIC0tYm9yZGVyLWxpZ2h0OiAjZTVlN2ViO1xuICAtLWJvcmRlci1tZWRpdW06ICNkMWQ1ZGI7XG4gIC0tYm9yZGVyLWRhcms6ICM5Y2EzYWY7XG4gIFxuICAvLyBGb2N1cyBTdGF0ZXNcbiAgLS1mb2N1cy1yaW5nOiAwIDAgMCAzcHggcmdiYSh2YXIoLS1wcmltYXJ5LWNvbG9yLXJnYiksIDAuNCk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVFlQT0dSQVBIWSBTWVNURU1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuOnJvb3Qge1xuICAvLyBGb250IEZhbWlsaWVzXG4gIC0tZm9udC1wcmltYXJ5OiAnSW50ZXInLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIHNhbnMtc2VyaWY7XG4gIC0tZm9udC1zZWNvbmRhcnk6ICdQb3BwaW5zJywgJ0ludGVyJywgc2Fucy1zZXJpZjtcbiAgLS1mb250LW1vbm9zcGFjZTogJ1NGTW9uby1SZWd1bGFyJywgQ29uc29sYXMsICdMaWJlcmF0aW9uIE1vbm8nLCBNZW5sbywgbW9ub3NwYWNlO1xuICBcbiAgLy8gRm9udCBTaXplc1xuICAtLXRleHQteHM6IDAuNzVyZW07ICAgIC8vIDEycHhcbiAgLS10ZXh0LXNtOiAwLjg3NXJlbTsgICAvLyAxNHB4XG4gIC0tdGV4dC1iYXNlOiAxcmVtOyAgICAgLy8gMTZweFxuICAtLXRleHQtbGc6IDEuMTI1cmVtOyAgIC8vIDE4cHhcbiAgLS10ZXh0LXhsOiAxLjI1cmVtOyAgICAvLyAyMHB4XG4gIC0tdGV4dC0yeGw6IDEuNXJlbTsgICAgLy8gMjRweFxuICAtLXRleHQtM3hsOiAxLjg3NXJlbTsgIC8vIDMwcHhcbiAgLS10ZXh0LTR4bDogMi4yNXJlbTsgICAvLyAzNnB4XG4gIC0tdGV4dC01eGw6IDNyZW07ICAgICAgLy8gNDhweFxuICBcbiAgLy8gTGluZSBIZWlnaHRzXG4gIC0tbGVhZGluZy1ub25lOiAxO1xuICAtLWxlYWRpbmctdGlnaHQ6IDEuMjU7XG4gIC0tbGVhZGluZy1zbnVnOiAxLjM3NTtcbiAgLS1sZWFkaW5nLW5vcm1hbDogMS41O1xuICAtLWxlYWRpbmctcmVsYXhlZDogMS42MjU7XG4gIC0tbGVhZGluZy1sb29zZTogMjtcbiAgXG4gIC8vIEZvbnQgV2VpZ2h0c1xuICAtLWZvbnQtdGhpbjogMTAwO1xuICAtLWZvbnQtZXh0cmFsaWdodDogMjAwO1xuICAtLWZvbnQtbGlnaHQ6IDMwMDtcbiAgLS1mb250LW5vcm1hbDogNDAwO1xuICAtLWZvbnQtbWVkaXVtOiA1MDA7XG4gIC0tZm9udC1zZW1pYm9sZDogNjAwO1xuICAtLWZvbnQtYm9sZDogNzAwO1xuICAtLWZvbnQtZXh0cmFib2xkOiA4MDA7XG4gIC0tZm9udC1ibGFjazogOTAwO1xuICBcbiAgLy8gTGV0dGVyIFNwYWNpbmdcbiAgLS10cmFja2luZy10aWdodGVyOiAtMC4wNWVtO1xuICAtLXRyYWNraW5nLXRpZ2h0OiAtMC4wMjVlbTtcbiAgLS10cmFja2luZy1ub3JtYWw6IDBlbTtcbiAgLS10cmFja2luZy13aWRlOiAwLjAyNWVtO1xuICAtLXRyYWNraW5nLXdpZGVyOiAwLjA1ZW07XG4gIC0tdHJhY2tpbmctd2lkZXN0OiAwLjFlbTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTUEFDSU5HIFNZU1RFTVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG46cm9vdCB7XG4gIC0tc3BhY2luZy14czogMC4yNXJlbTsgICAvLyA0cHhcbiAgLS1zcGFjaW5nLXNtOiAwLjVyZW07ICAgIC8vIDhweFxuICAtLXNwYWNpbmctbWQ6IDFyZW07ICAgICAgLy8gMTZweFxuICAtLXNwYWNpbmctbGc6IDEuNXJlbTsgICAgLy8gMjRweFxuICAtLXNwYWNpbmcteGw6IDJyZW07ICAgICAgLy8gMzJweFxuICAtLXNwYWNpbmctMnhsOiAzcmVtOyAgICAgLy8gNDhweFxuICAtLXNwYWNpbmctM3hsOiA0cmVtOyAgICAgLy8gNjRweFxuICAtLXNwYWNpbmctNHhsOiA2cmVtOyAgICAgLy8gOTZweFxuICBcbiAgLy8gQ29udGFpbmVyIFdpZHRoc1xuICAtLWNvbnRhaW5lci1zbTogNjQwcHg7XG4gIC0tY29udGFpbmVyLW1kOiA3NjhweDtcbiAgLS1jb250YWluZXItbGc6IDEwMjRweDtcbiAgLS1jb250YWluZXIteGw6IDEyODBweDtcbiAgLS1jb250YWluZXItMnhsOiAxNTM2cHg7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQk9SREVSIFJBRElVUyBTWVNURU1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuOnJvb3Qge1xuICAtLXJhZGl1cy1ub25lOiAwO1xuICAtLXJhZGl1cy1zbTogMC4xMjVyZW07ICAgIC8vIDJweFxuICAtLXJhZGl1cy1tZDogMC4zNzVyZW07ICAgIC8vIDZweFxuICAtLXJhZGl1cy1sZzogMC41cmVtOyAgICAgIC8vIDhweFxuICAtLXJhZGl1cy14bDogMC43NXJlbTsgICAgIC8vIDEycHhcbiAgLS1yYWRpdXMtMnhsOiAxcmVtOyAgICAgICAvLyAxNnB4XG4gIC0tcmFkaXVzLTN4bDogMS41cmVtOyAgICAgLy8gMjRweFxuICAtLXJhZGl1cy1mdWxsOiA5OTk5cHg7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU0hBRE9XUyBTWVNURU1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuOnJvb3Qge1xuICAtLXNoYWRvdy1zbTogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgLS1zaGFkb3ctbWQ6IDAgNHB4IDZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgLS1zaGFkb3ctbGc6IDAgMTBweCAxNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDRweCA2cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAtLXNoYWRvdy14bDogMCAyMHB4IDI1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMTBweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgLS1zaGFkb3ctMnhsOiAwIDI1cHggNTBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAtLXNoYWRvdy1pbm5lcjogaW5zZXQgMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgXG4gIC8vIEZvY3VzIFNoYWRvd3NcbiAgLS1zaGFkb3ctZm9jdXM6IDAgMCAwIDNweCByZ2JhKHZhcigtLXByaW1hcnktY29sb3ItcmdiKSwgMC40KTtcbiAgLS1zaGFkb3ctZm9jdXMtZXJyb3I6IDAgMCAwIDNweCByZ2JhKDIzOSwgNjgsIDY4LCAwLjQpO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFRSQU5TSVRJT04gU1lTVEVNXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbjpyb290IHtcbiAgLS10cmFuc2l0aW9uLWZhc3Rlc3Q6IDEwMG1zO1xuICAtLXRyYW5zaXRpb24tZmFzdDogMTUwbXM7XG4gIC0tdHJhbnNpdGlvbi1ub3JtYWw6IDI1MG1zO1xuICAtLXRyYW5zaXRpb24tc2xvdzogNDAwbXM7XG4gIC0tdHJhbnNpdGlvbi1zbG93ZXN0OiA3MDBtcztcbiAgXG4gIC8vIEVhc2luZyBGdW5jdGlvbnNcbiAgLS1lYXNlLWluLW91dDogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgLS1lYXNlLWluOiBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKTtcbiAgLS1lYXNlLW91dDogY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIC0tZWFzZS1ib3VuY2U6IGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBaLUlOREVYIFNZU1RFTVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG46cm9vdCB7XG4gIC0tei0wOiAwO1xuICAtLXotMTA6IDEwO1xuICAtLXotMjA6IDIwO1xuICAtLXotMzA6IDMwO1xuICAtLXotNDA6IDQwO1xuICAtLXotNTA6IDUwO1xuICAtLXotYXV0bzogYXV0bztcbiAgXG4gIC8vIFNwZWNpYWwgWi1JbmRleGVzXG4gIC0tei1kcm9wZG93bjogMTAwMDtcbiAgLS16LXN0aWNreTogMTAyMDtcbiAgLS16LWZpeGVkOiAxMDMwO1xuICAtLXotbW9kYWwtYmFja2Ryb3A6IDEwNDA7XG4gIC0tei1tb2RhbDogMTA1MDtcbiAgLS16LXBvcG92ZXI6IDEwNjA7XG4gIC0tei10b29sdGlwOiAxMDcwO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1JWElOU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIEZsZXhib3ggSGVscGVyc1xuQG1peGluIGZsZXgoJGRpcmVjdGlvbjogcm93LCAkanVzdGlmeTogZmxleC1zdGFydCwgJGFsaWduOiBzdHJldGNoLCAkd3JhcDogbm93cmFwKSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xuICBhbGlnbi1pdGVtczogJGFsaWduO1xuICBmbGV4LXdyYXA6ICR3cmFwO1xufVxuXG5AbWl4aW4gZmxleC1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLy8gVHlwb2dyYXBoeSBIZWxwZXJzXG5AbWl4aW4gdGV4dC10cnVuY2F0ZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5AbWl4aW4gdGV4dC1jbGFtcCgkbGluZXM6IDIpIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogJGxpbmVzO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vLyBSZXNwb25zaXZlIEhlbHBlcnNcbkBtaXhpbiByZXNwb25kLXRvKCRicmVha3BvaW50KSB7XG4gIEBpZiAkYnJlYWtwb2ludCA9PSBcInNtXCIge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkgeyBAY29udGVudDsgfVxuICB9IEBlbHNlIGlmICRicmVha3BvaW50ID09IFwibWRcIiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7IEBjb250ZW50OyB9XG4gIH0gQGVsc2UgaWYgJGJyZWFrcG9pbnQgPT0gXCJsZ1wiIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7IEBjb250ZW50OyB9XG4gIH0gQGVsc2UgaWYgJGJyZWFrcG9pbnQgPT0gXCJ4bFwiIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7IEBjb250ZW50OyB9XG4gIH0gQGVsc2UgaWYgJGJyZWFrcG9pbnQgPT0gXCIyeGxcIiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDE1MzZweCkgeyBAY29udGVudDsgfVxuICB9XG59XG5cbi8vIEJ1dHRvbiBTdHlsZXNcbkBtaXhpbiBidXR0b24tYmFzZSB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LW1lZGl1bSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLWZhc3QpIHZhcigtLWVhc2UtaW4tb3V0KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBcbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctZm9jdXMpO1xuICB9XG4gIFxuICAmOmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjY1O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cbn1cblxuQG1peGluIGJ1dHRvbi12YXJpYW50KCRiZywgJGNvbG9yLCAkaG92ZXItYmcsICRhY3RpdmUtYmcpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnO1xuICBjb2xvcjogJGNvbG9yO1xuICBcbiAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGhvdmVyLWJnO1xuICB9XG4gIFxuICAmOmFjdGl2ZTpub3QoOmRpc2FibGVkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFjdGl2ZS1iZztcbiAgfVxufVxuXG4vLyBDYXJkIFN0eWxlc1xuQG1peGluIGNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLy8gRm9ybSBDb250cm9sIFN0eWxlc1xuQG1peGluIGZvcm0tY29udHJvbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXByaW1hcnkpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbWVkaXVtKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LWJhc2UpO1xuICBsaW5lLWhlaWdodDogMS41O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgdmFyKC0tdHJhbnNpdGlvbi1mYXN0KSwgYm94LXNoYWRvdyB2YXIoLS10cmFuc2l0aW9uLWZhc3QpO1xuICBcbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1mb2N1cyk7XG4gIH1cbiAgXG4gICY6ZGlzYWJsZWQsICZbcmVhZG9ubHldIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTEwMCk7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVVRJTElUWSBDTEFTU0VTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gRGlzcGxheSBVdGlsaXRpZXNcbi5kLW5vbmUgeyBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cbi5kLWlubGluZSB7IGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50OyB9XG4uZC1pbmxpbmUtYmxvY2sgeyBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDsgfVxuLmQtYmxvY2sgeyBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9XG4uZC1mbGV4IHsgZGlzcGxheTogZmxleCAhaW1wb3J0YW50OyB9XG4uZC1pbmxpbmUtZmxleCB7IGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7IH1cbi5kLWdyaWQgeyBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7IH1cblxuLy8gRmxleCBVdGlsaXRpZXNcbi5mbGV4LXJvdyB7IGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDsgfVxuLmZsZXgtY29sdW1uIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50OyB9XG4uZmxleC13cmFwIHsgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7IH1cbi5mbGV4LW5vd3JhcCB7IGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7IH1cbi5mbGV4LWZpbGwgeyBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50OyB9XG4uZmxleC1ncm93LTAgeyBmbGV4LWdyb3c6IDAgIWltcG9ydGFudDsgfVxuLmZsZXgtZ3Jvdy0xIHsgZmxleC1ncm93OiAxICFpbXBvcnRhbnQ7IH1cbi5mbGV4LXNocmluay0wIHsgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDsgfVxuLmZsZXgtc2hyaW5rLTEgeyBmbGV4LXNocmluazogMSAhaW1wb3J0YW50OyB9XG5cbi5qdXN0aWZ5LWNvbnRlbnQtc3RhcnQgeyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDsgfVxuLmp1c3RpZnktY29udGVudC1lbmQgeyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kICFpbXBvcnRhbnQ7IH1cbi5qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHsganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDsgfVxuLmp1c3RpZnktY29udGVudC1iZXR3ZWVuIHsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7IH1cbi5qdXN0aWZ5LWNvbnRlbnQtYXJvdW5kIHsganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDsgfVxuXG4uYWxpZ24taXRlbXMtc3RhcnQgeyBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50OyB9XG4uYWxpZ24taXRlbXMtZW5kIHsgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7IH1cbi5hbGlnbi1pdGVtcy1jZW50ZXIgeyBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7IH1cbi5hbGlnbi1pdGVtcy1iYXNlbGluZSB7IGFsaWduLWl0ZW1zOiBiYXNlbGluZSAhaW1wb3J0YW50OyB9XG4uYWxpZ24taXRlbXMtc3RyZXRjaCB7IGFsaWduLWl0ZW1zOiBzdHJldGNoICFpbXBvcnRhbnQ7IH1cblxuLmFsaWduLXNlbGYtc3RhcnQgeyBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7IH1cbi5hbGlnbi1zZWxmLWVuZCB7IGFsaWduLXNlbGY6IGZsZXgtZW5kICFpbXBvcnRhbnQ7IH1cbi5hbGlnbi1zZWxmLWNlbnRlciB7IGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50OyB9XG4uYWxpZ24tc2VsZi1iYXNlbGluZSB7IGFsaWduLXNlbGY6IGJhc2VsaW5lICFpbXBvcnRhbnQ7IH1cbi5hbGlnbi1zZWxmLXN0cmV0Y2ggeyBhbGlnbi1zZWxmOiBzdHJldGNoICFpbXBvcnRhbnQ7IH1cblxuLy8gTWFyZ2luIFV0aWxpdGllc1xuLm0tMCB7IG1hcmdpbjogMCAhaW1wb3J0YW50OyB9XG4ubS0xIHsgbWFyZ2luOiB2YXIoLS1zcGFjaW5nLXhzKSAhaW1wb3J0YW50OyB9XG4ubS0yIHsgbWFyZ2luOiB2YXIoLS1zcGFjaW5nLXNtKSAhaW1wb3J0YW50OyB9XG4ubS0zIHsgbWFyZ2luOiB2YXIoLS1zcGFjaW5nLW1kKSAhaW1wb3J0YW50OyB9XG4ubS00IHsgbWFyZ2luOiB2YXIoLS1zcGFjaW5nLWxnKSAhaW1wb3J0YW50OyB9XG4ubS01IHsgbWFyZ2luOiB2YXIoLS1zcGFjaW5nLXhsKSAhaW1wb3J0YW50OyB9XG4ubS1hdXRvIHsgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7IH1cblxuLm14LTAgeyBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDsgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDsgfVxuLm14LTEgeyBtYXJnaW4tcmlnaHQ6IHZhcigtLXNwYWNpbmcteHMpICFpbXBvcnRhbnQ7IG1hcmdpbi1sZWZ0OiB2YXIoLS1zcGFjaW5nLXhzKSAhaW1wb3J0YW50OyB9XG4ubXgtMiB7IG1hcmdpbi1yaWdodDogdmFyKC0tc3BhY2luZy1zbSkgIWltcG9ydGFudDsgbWFyZ2luLWxlZnQ6IHZhcigtLXNwYWNpbmctc20pICFpbXBvcnRhbnQ7IH1cbi5teC0zIHsgbWFyZ2luLXJpZ2h0OiB2YXIoLS1zcGFjaW5nLW1kKSAhaW1wb3J0YW50OyBtYXJnaW4tbGVmdDogdmFyKC0tc3BhY2luZy1tZCkgIWltcG9ydGFudDsgfVxuLm14LTQgeyBtYXJnaW4tcmlnaHQ6IHZhcigtLXNwYWNpbmctbGcpICFpbXBvcnRhbnQ7IG1hcmdpbi1sZWZ0OiB2YXIoLS1zcGFjaW5nLWxnKSAhaW1wb3J0YW50OyB9XG4ubXgtNSB7IG1hcmdpbi1yaWdodDogdmFyKC0tc3BhY2luZy14bCkgIWltcG9ydGFudDsgbWFyZ2luLWxlZnQ6IHZhcigtLXNwYWNpbmcteGwpICFpbXBvcnRhbnQ7IH1cbi5teC1hdXRvIHsgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7IG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7IH1cblxuLm15LTAgeyBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7IG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDsgfVxuLm15LTEgeyBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjaW5nLXhzKSAhaW1wb3J0YW50OyBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLXhzKSAhaW1wb3J0YW50OyB9XG4ubXktMiB7IG1hcmdpbi10b3A6IHZhcigtLXNwYWNpbmctc20pICFpbXBvcnRhbnQ7IG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctc20pICFpbXBvcnRhbnQ7IH1cbi5teS0zIHsgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2luZy1tZCkgIWltcG9ydGFudDsgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy1tZCkgIWltcG9ydGFudDsgfVxuLm15LTQgeyBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjaW5nLWxnKSAhaW1wb3J0YW50OyBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLWxnKSAhaW1wb3J0YW50OyB9XG4ubXktNSB7IG1hcmdpbi10b3A6IHZhcigtLXNwYWNpbmcteGwpICFpbXBvcnRhbnQ7IG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmcteGwpICFpbXBvcnRhbnQ7IH1cbi5teS1hdXRvIHsgbWFyZ2luLXRvcDogYXV0byAhaW1wb3J0YW50OyBtYXJnaW4tYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7IH1cblxuLy8gUGFkZGluZyBVdGlsaXRpZXNcbi5wLTAgeyBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7IH1cbi5wLTEgeyBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXhzKSAhaW1wb3J0YW50OyB9XG4ucC0yIHsgcGFkZGluZzogdmFyKC0tc3BhY2luZy1zbSkgIWltcG9ydGFudDsgfVxuLnAtMyB7IHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWQpICFpbXBvcnRhbnQ7IH1cbi5wLTQgeyBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKSAhaW1wb3J0YW50OyB9XG4ucC01IHsgcGFkZGluZzogdmFyKC0tc3BhY2luZy14bCkgIWltcG9ydGFudDsgfVxuXG4ucHgtMCB7IHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDsgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7IH1cbi5weC0xIHsgcGFkZGluZy1yaWdodDogdmFyKC0tc3BhY2luZy14cykgIWltcG9ydGFudDsgcGFkZGluZy1sZWZ0OiB2YXIoLS1zcGFjaW5nLXhzKSAhaW1wb3J0YW50OyB9XG4ucHgtMiB7IHBhZGRpbmctcmlnaHQ6IHZhcigtLXNwYWNpbmctc20pICFpbXBvcnRhbnQ7IHBhZGRpbmctbGVmdDogdmFyKC0tc3BhY2luZy1zbSkgIWltcG9ydGFudDsgfVxuLnB4LTMgeyBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zcGFjaW5nLW1kKSAhaW1wb3J0YW50OyBwYWRkaW5nLWxlZnQ6IHZhcigtLXNwYWNpbmctbWQpICFpbXBvcnRhbnQ7IH1cbi5weC00IHsgcGFkZGluZy1yaWdodDogdmFyKC0tc3BhY2luZy1sZykgIWltcG9ydGFudDsgcGFkZGluZy1sZWZ0OiB2YXIoLS1zcGFjaW5nLWxnKSAhaW1wb3J0YW50OyB9XG4ucHgtNSB7IHBhZGRpbmctcmlnaHQ6IHZhcigtLXNwYWNpbmcteGwpICFpbXBvcnRhbnQ7IHBhZGRpbmctbGVmdDogdmFyKC0tc3BhY2luZy14bCkgIWltcG9ydGFudDsgfVxuXG4ucHktMCB7IHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7IHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7IH1cbi5weS0xIHsgcGFkZGluZy10b3A6IHZhcigtLXNwYWNpbmcteHMpICFpbXBvcnRhbnQ7IHBhZGRpbmctYm90dG9tOiB2YXIoLS1zcGFjaW5nLXhzKSAhaW1wb3J0YW50OyB9XG4ucHktMiB7IHBhZGRpbmctdG9wOiB2YXIoLS1zcGFjaW5nLXNtKSAhaW1wb3J0YW50OyBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3BhY2luZy1zbSkgIWltcG9ydGFudDsgfVxuLnB5LTMgeyBwYWRkaW5nLXRvcDogdmFyKC0tc3BhY2luZy1tZCkgIWltcG9ydGFudDsgcGFkZGluZy1ib3R0b206IHZhcigtLXNwYWNpbmctbWQpICFpbXBvcnRhbnQ7IH1cbi5weS00IHsgcGFkZGluZy10b3A6IHZhcigtLXNwYWNpbmctbGcpICFpbXBvcnRhbnQ7IHBhZGRpbmctYm90dG9tOiB2YXIoLS1zcGFjaW5nLWxnKSAhaW1wb3J0YW50OyB9XG4ucHktNSB7IHBhZGRpbmctdG9wOiB2YXIoLS1zcGFjaW5nLXhsKSAhaW1wb3J0YW50OyBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3BhY2luZy14bCkgIWltcG9ydGFudDsgfVxuXG4vLyBUZXh0IFV0aWxpdGllc1xuLnRleHQtbGVmdCB7IHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDsgfVxuLnRleHQtcmlnaHQgeyB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50OyB9XG4udGV4dC1jZW50ZXIgeyB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDsgfVxuLnRleHQtanVzdGlmeSB7IHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDsgfVxuXG4udGV4dC1sb3dlcmNhc2UgeyB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7IH1cbi50ZXh0LXVwcGVyY2FzZSB7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDsgfVxuLnRleHQtY2FwaXRhbGl6ZSB7IHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7IH1cblxuLmZ3LWxpZ2h0IHsgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtbGlnaHQpICFpbXBvcnRhbnQ7IH1cbi5mdy1ub3JtYWwgeyBmb250LXdlaWdodDogdmFyKC0tZm9udC1ub3JtYWwpICFpbXBvcnRhbnQ7IH1cbi5mdy1tZWRpdW0geyBmb250LXdlaWdodDogdmFyKC0tZm9udC1tZWRpdW0pICFpbXBvcnRhbnQ7IH1cbi5mdy1zZW1pYm9sZCB7IGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXNlbWlib2xkKSAhaW1wb3J0YW50OyB9XG4uZnctYm9sZCB7IGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LWJvbGQpICFpbXBvcnRhbnQ7IH1cblxuLmZzLXhzIHsgZm9udC1zaXplOiB2YXIoLS10ZXh0LXhzKSAhaW1wb3J0YW50OyB9XG4uZnMtc20geyBmb250LXNpemU6IHZhcigtLXRleHQtc20pICFpbXBvcnRhbnQ7IH1cbi5mcy1tZCB7IGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1iYXNlKSAhaW1wb3J0YW50OyB9XG4uZnMtbGcgeyBmb250LXNpemU6IHZhcigtLXRleHQtbGcpICFpbXBvcnRhbnQ7IH1cbi5mcy14bCB7IGZvbnQtc2l6ZTogdmFyKC0tdGV4dC14bCkgIWltcG9ydGFudDsgfVxuLmZzLTJ4bCB7IGZvbnQtc2l6ZTogdmFyKC0tdGV4dC0yeGwpICFpbXBvcnRhbnQ7IH1cbi5mcy0zeGwgeyBmb250LXNpemU6IHZhcigtLXRleHQtM3hsKSAhaW1wb3J0YW50OyB9XG5cbi8vIENvbG9yIFV0aWxpdGllc1xuLnRleHQtcHJpbWFyeSB7IGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50OyB9XG4udGV4dC1zZWNvbmRhcnkgeyBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSAhaW1wb3J0YW50OyB9XG4udGV4dC1zdWNjZXNzIHsgY29sb3I6IHZhcigtLXN1Y2Nlc3MtY29sb3IpICFpbXBvcnRhbnQ7IH1cbi50ZXh0LWVycm9yIHsgY29sb3I6IHZhcigtLWVycm9yLWNvbG9yKSAhaW1wb3J0YW50OyB9XG4udGV4dC13YXJuaW5nIHsgY29sb3I6IHZhcigtLXdhcm5pbmctY29sb3IpICFpbXBvcnRhbnQ7IH1cbi50ZXh0LWluZm8geyBjb2xvcjogdmFyKC0taW5mby1jb2xvcikgIWltcG9ydGFudDsgfVxuLnRleHQtbGlnaHQgeyBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSkgIWltcG9ydGFudDsgfVxuLnRleHQtZGFyayB7IGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpICFpbXBvcnRhbnQ7IH1cbi50ZXh0LW11dGVkIHsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpICFpbXBvcnRhbnQ7IH1cblxuLmJnLXByaW1hcnkgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50OyB9XG4uYmctc2Vjb25kYXJ5IHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSAhaW1wb3J0YW50OyB9XG4uYmctc3VjY2VzcyB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Y2Nlc3MtY29sb3IpICFpbXBvcnRhbnQ7IH1cbi5iZy1lcnJvciB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVycm9yLWNvbG9yKSAhaW1wb3J0YW50OyB9XG4uYmctd2FybmluZyB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhcm5pbmctY29sb3IpICFpbXBvcnRhbnQ7IH1cbi5iZy1pbmZvIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5mby1jb2xvcikgIWltcG9ydGFudDsgfVxuLmJnLWxpZ2h0IHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctc2Vjb25kYXJ5KSAhaW1wb3J0YW50OyB9XG4uYmctZGFyayB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktOTAwKSAhaW1wb3J0YW50OyB9XG4uYmctd2hpdGUgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1wcmltYXJ5KSAhaW1wb3J0YW50OyB9XG4uYmctdHJhbnNwYXJlbnQgeyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyB9XG5cbi8vIEJvcmRlciBVdGlsaXRpZXNcbi5ib3JkZXIgeyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbWVkaXVtKSAhaW1wb3J0YW50OyB9XG4uYm9yZGVyLTAgeyBib3JkZXI6IDAgIWltcG9ydGFudDsgfVxuLmJvcmRlci10b3AgeyBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLW1lZGl1bSkgIWltcG9ydGFudDsgfVxuLmJvcmRlci1lbmQgeyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbWVkaXVtKSAhaW1wb3J0YW50OyB9XG4uYm9yZGVyLWJvdHRvbSB7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbWVkaXVtKSAhaW1wb3J0YW50OyB9XG4uYm9yZGVyLXN0YXJ0IHsgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbWVkaXVtKSAhaW1wb3J0YW50OyB9XG5cbi5ib3JkZXItcHJpbWFyeSB7IGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDsgfVxuLmJvcmRlci1zZWNvbmRhcnkgeyBib3JkZXItY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcikgIWltcG9ydGFudDsgfVxuLmJvcmRlci1zdWNjZXNzIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1zdWNjZXNzLWNvbG9yKSAhaW1wb3J0YW50OyB9XG4uYm9yZGVyLWVycm9yIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS1lcnJvci1jb2xvcikgIWltcG9ydGFudDsgfVxuLmJvcmRlci13YXJuaW5nIHsgYm9yZGVyLWNvbG9yOiB2YXIoLS13YXJuaW5nLWNvbG9yKSAhaW1wb3J0YW50OyB9XG4uYm9yZGVyLWluZm8geyBib3JkZXItY29sb3I6IHZhcigtLWluZm8tY29sb3IpICFpbXBvcnRhbnQ7IH1cblxuLy8gQm9yZGVyIFJhZGl1cyBVdGlsaXRpZXNcbi5yb3VuZGVkLW5vbmUgeyBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbm9uZSkgIWltcG9ydGFudDsgfVxuLnJvdW5kZWQtc20geyBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pICFpbXBvcnRhbnQ7IH1cbi5yb3VuZGVkIHsgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKSAhaW1wb3J0YW50OyB9XG4ucm91bmRlZC1sZyB7IGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZykgIWltcG9ydGFudDsgfVxuLnJvdW5kZWQteGwgeyBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMteGwpICFpbXBvcnRhbnQ7IH1cbi5yb3VuZGVkLTJ4bCB7IGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy0yeGwpICFpbXBvcnRhbnQ7IH1cbi5yb3VuZGVkLTN4bCB7IGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy0zeGwpICFpbXBvcnRhbnQ7IH1cbi5yb3VuZGVkLWNpcmNsZSB7IGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50OyB9XG4ucm91bmRlZC1waWxsIHsgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWZ1bGwpICFpbXBvcnRhbnQ7IH1cblxuLy8gU2hhZG93IFV0aWxpdGllc1xuLnNoYWRvdy1ub25lIHsgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50OyB9XG4uc2hhZG93LXNtIHsgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKSAhaW1wb3J0YW50OyB9XG4uc2hhZG93IHsgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKSAhaW1wb3J0YW50OyB9XG4uc2hhZG93LWxnIHsgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWxnKSAhaW1wb3J0YW50OyB9XG4uc2hhZG93LXhsIHsgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKSAhaW1wb3J0YW50OyB9XG5cbi8vIFBvc2l0aW9uIFV0aWxpdGllc1xuLnBvc2l0aW9uLXN0YXRpYyB7IHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDsgfVxuLnBvc2l0aW9uLXJlbGF0aXZlIHsgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7IH1cbi5wb3NpdGlvbi1hYnNvbHV0ZSB7IHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50OyB9XG4ucG9zaXRpb24tZml4ZWQgeyBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDsgfVxuLnBvc2l0aW9uLXN0aWNreSB7IHBvc2l0aW9uOiBzdGlja3kgIWltcG9ydGFudDsgfVxuXG4udG9wLTAgeyB0b3A6IDAgIWltcG9ydGFudDsgfVxuLnRvcC01MCB7IHRvcDogNTAlICFpbXBvcnRhbnQ7IH1cbi50b3AtMTAwIHsgdG9wOiAxMDAlICFpbXBvcnRhbnQ7IH1cbi5ib3R0b20tMCB7IGJvdHRvbTogMCAhaW1wb3J0YW50OyB9XG4uYm90dG9tLTUwIHsgYm90dG9tOiA1MCUgIWltcG9ydGFudDsgfVxuLmJvdHRvbS0xMDAgeyBib3R0b206IDEwMCUgIWltcG9ydGFudDsgfVxuLnN0YXJ0LTAgeyBsZWZ0OiAwICFpbXBvcnRhbnQ7IH1cbi5zdGFydC01MCB7IGxlZnQ6IDUwJSAhaW1wb3J0YW50OyB9XG4uc3RhcnQtMTAwIHsgbGVmdDogMTAwJSAhaW1wb3J0YW50OyB9XG4uZW5kLTAgeyByaWdodDogMCAhaW1wb3J0YW50OyB9XG4uZW5kLTUwIHsgcmlnaHQ6IDUwJSAhaW1wb3J0YW50OyB9XG4uZW5kLTEwMCB7IHJpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7IH1cblxuLnRyYW5zbGF0ZS1taWRkbGUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSAhaW1wb3J0YW50OyB9XG4udHJhbnNsYXRlLW1pZGRsZS14IHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpICFpbXBvcnRhbnQ7IH1cbi50cmFuc2xhdGUtbWlkZGxlLXkgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgIWltcG9ydGFudDsgfVxuXG4vLyBWaXNpYmlsaXR5XG4udmlzaWJsZSB7IHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDsgfVxuLmludmlzaWJsZSB7IHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50OyB9XG5cbi8vIEdlbmVyYWwgVXRpbGl0aWVzXG4ub3ZlcmZsb3ctYXV0byB7IG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7IH1cbi5vdmVyZmxvdy1oaWRkZW4geyBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7IH1cbi5vdmVyZmxvdy12aXNpYmxlIHsgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDsgfVxuLm92ZXJmbG93LXNjcm9sbCB7IG92ZXJmbG93OiBzY3JvbGwgIWltcG9ydGFudDsgfVxuXG4udy0yNSB7IHdpZHRoOiAyNSUgIWltcG9ydGFudDsgfVxuLnctNTAgeyB3aWR0aDogNTAlICFpbXBvcnRhbnQ7IH1cbi53LTc1IHsgd2lkdGg6IDc1JSAhaW1wb3J0YW50OyB9XG4udy0xMDAgeyB3aWR0aDogMTAwJSAhaW1wb3J0YW50OyB9XG4udy1hdXRvIHsgd2lkdGg6IGF1dG8gIWltcG9ydGFudDsgfVxuXG4uaC0yNSB7IGhlaWdodDogMjUlICFpbXBvcnRhbnQ7IH1cbi5oLTUwIHsgaGVpZ2h0OiA1MCUgIWltcG9ydGFudDsgfVxuLmgtNzUgeyBoZWlnaHQ6IDc1JSAhaW1wb3J0YW50OyB9XG4uaC0xMDAgeyBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDsgfVxuLmgtYXV0byB7IGhlaWdodDogYXV0byAhaW1wb3J0YW50OyB9XG5cbi8vIEJ1dHRvbiBDb21wb25lbnQgQ2xhc3Nlc1xuLmJ0biB7XG4gIEBpbmNsdWRlIGJ1dHRvbi1iYXNlO1xuICBcbiAgJi5idG4tc20ge1xuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1zbSk7XG4gIH1cbiAgXG4gICYuYnRuLWxnIHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbiAgICBmb250LXNpemU6IHZhcigtLXRleHQtbGcpO1xuICB9XG4gIFxuICAmLmJ0bi1wcmltYXJ5IHtcbiAgICBAaW5jbHVkZSBidXR0b24tdmFyaWFudCh2YXIoLS1wcmltYXJ5LWNvbG9yKSwgd2hpdGUsIHZhcigtLXByaW1hcnktZGFyayksIHZhcigtLXByaW1hcnktZGFyaykpO1xuICB9XG4gIFxuICAmLmJ0bi1zZWNvbmRhcnkge1xuICAgIEBpbmNsdWRlIGJ1dHRvbi12YXJpYW50KHZhcigtLXNlY29uZGFyeS1jb2xvciksIHdoaXRlLCB2YXIoLS1zZWNvbmRhcnktZGFyayksIHZhcigtLXNlY29uZGFyeS1kYXJrKSk7XG4gIH1cbiAgXG4gICYuYnRuLXN1Y2Nlc3Mge1xuICAgIEBpbmNsdWRlIGJ1dHRvbi12YXJpYW50KHZhcigtLXN1Y2Nlc3MtY29sb3IpLCB3aGl0ZSwgdmFyKC0tc3VjY2Vzcy1kYXJrKSwgdmFyKC0tc3VjY2Vzcy1kYXJrKSk7XG4gIH1cbiAgXG4gICYuYnRuLWVycm9yIHtcbiAgICBAaW5jbHVkZSBidXR0b24tdmFyaWFudCh2YXIoLS1lcnJvci1jb2xvciksIHdoaXRlLCB2YXIoLS1lcnJvci1kYXJrKSwgdmFyKC0tZXJyb3ItZGFyaykpO1xuICB9XG4gIFxuICAmLmJ0bi13YXJuaW5nIHtcbiAgICBAaW5jbHVkZSBidXR0b24tdmFyaWFudCh2YXIoLS13YXJuaW5nLWNvbG9yKSwgd2hpdGUsIHZhcigtLXdhcm5pbmctZGFyayksIHZhcigtLXdhcm5pbmctZGFyaykpO1xuICB9XG4gIFxuICAmLmJ0bi1vdXRsaW5lLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICBcbiAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxuICBcbiAgJi5idG4tb3V0bGluZS1zZWNvbmRhcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG4gICAgXG4gICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxuICBcbiAgJi5idG4tZ2hvc3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgIFxuICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0xMDApO1xuICAgIH1cbiAgfVxufVxuXG4vLyBDYXJkIENvbXBvbmVudCBDbGFzc2VzXG4uY2FyZCB7XG4gIEBpbmNsdWRlIGNhcmQ7XG4gIFxuICAuY2FyZC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWQpIHZhcigtLXNwYWNpbmctbGcpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xuICB9XG4gIFxuICAuY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcbiAgfVxuICBcbiAgLmNhcmQtZm9vdGVyIHtcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1kKSB2YXIoLS1zcGFjaW5nLWxnKTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xuICB9XG59XG5cbi8vIEZvcm0gQ29tcG9uZW50IENsYXNzZXNcbi5mb3JtLWNvbnRyb2wge1xuICBAaW5jbHVkZSBmb3JtLWNvbnRyb2w7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy1tZCk7XG59XG5cbi5mb3JtLWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLXhzKTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtbWVkaXVtKTtcbn1cblxuLmZvcm0tdGV4dCB7XG4gIG1hcmdpbi10b3A6IHZhcigtLXNwYWNpbmcteHMpO1xuICBmb250LXNpemU6IHZhcigtLXRleHQtc20pO1xuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG59XG5cbi5mb3JtLWNoZWNrIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi1oZWlnaHQ6IDEuNXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmcteHMpO1xuICBcbiAgLmZvcm0tY2hlY2staW5wdXQge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAtMS41cmVtO1xuICB9XG4gIFxuICAuZm9ybS1jaGVjay1sYWJlbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxufVxuXG4vLyBBbmltYXRpb24gQ2xhc3Nlc1xuLmZhZGUtaW4ge1xuICBhbmltYXRpb246IGZhZGVJbiAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4uc2xpZGUtdXAge1xuICBhbmltYXRpb246IHNsaWRlVXAgMC40cyBlYXNlLW91dDtcbn1cblxuLnNsaWRlLWRvd24ge1xuICBhbmltYXRpb246IHNsaWRlRG93biAwLjRzIGVhc2Utb3V0O1xufVxuXG4uc2xpZGUtbGVmdCB7XG4gIGFuaW1hdGlvbjogc2xpZGVMZWZ0IDAuNHMgZWFzZS1vdXQ7XG59XG5cbi5zbGlkZS1yaWdodCB7XG4gIGFuaW1hdGlvbjogc2xpZGVSaWdodCAwLjRzIGVhc2Utb3V0O1xufVxuXG4uem9vbS1pbiB7XG4gIGFuaW1hdGlvbjogem9vbUluIDAuM3MgZWFzZS1vdXQ7XG59XG5cbi56b29tLW91dCB7XG4gIGFuaW1hdGlvbjogem9vbU91dCAwLjNzIGVhc2Utb3V0O1xufVxuXG4vLyBBbmltYXRpb24gS2V5ZnJhbWVzXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gIHRvIHsgb3BhY2l0eTogMTsgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlVXAge1xuICBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpOyBvcGFjaXR5OiAwOyB9XG4gIHRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyBvcGFjaXR5OiAxOyB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVEb3duIHtcbiAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7IG9wYWNpdHk6IDA7IH1cbiAgdG8geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IG9wYWNpdHk6IDE7IH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZUxlZnQge1xuICBmcm9tIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpOyBvcGFjaXR5OiAwOyB9XG4gIHRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyBvcGFjaXR5OiAxOyB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVSaWdodCB7XG4gIGZyb20geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpOyBvcGFjaXR5OiAwOyB9XG4gIHRvIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyBvcGFjaXR5OiAxOyB9XG59XG5cbkBrZXlmcmFtZXMgem9vbUluIHtcbiAgZnJvbSB7IHRyYW5zZm9ybTogc2NhbGUoMC45NSk7IG9wYWNpdHk6IDA7IH1cbiAgdG8geyB0cmFuc2Zvcm06IHNjYWxlKDEpOyBvcGFjaXR5OiAxOyB9XG59XG5cbkBrZXlmcmFtZXMgem9vbU91dCB7XG4gIGZyb20geyB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpOyBvcGFjaXR5OiAwOyB9XG4gIHRvIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgb3BhY2l0eTogMTsgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEdMT0JBTCBCQVNFIFNUWUxFU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5odG1sIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LWJhc2UpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaW5lLWhlaWdodDogdmFyKC0tbGVhZGluZy1ub3JtYWwpO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbi8vIEhlYWRpbmdzXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc2Vjb25kYXJ5KTtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC1ib2xkKTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWxlYWRpbmctdGlnaHQpO1xufVxuXG5oMSB7IGZvbnQtc2l6ZTogdmFyKC0tdGV4dC00eGwpOyB9XG5oMiB7IGZvbnQtc2l6ZTogdmFyKC0tdGV4dC0zeGwpOyB9XG5oMyB7IGZvbnQtc2l6ZTogdmFyKC0tdGV4dC0yeGwpOyB9XG5oNCB7IGZvbnQtc2l6ZTogdmFyKC0tdGV4dC14bCk7IH1cbmg1IHsgZm9udC1zaXplOiB2YXIoLS10ZXh0LWxnKTsgfVxuaDYgeyBmb250LXNpemU6IHZhcigtLXRleHQtYmFzZSk7IH1cblxuYSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpbmspO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGNvbG9yIHZhcigtLXRyYW5zaXRpb24tZmFzdCk7XG4gICY6aG92ZXIsICY6Zm9jdXMge1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XG59XG5cbmJ1dHRvbiwgaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgdmFyKC0tdHJhbnNpdGlvbi1mYXN0KSwgY29sb3IgdmFyKC0tdHJhbnNpdGlvbi1mYXN0KTtcbn1cblxudWwsIG9sIHtcbiAgcGFkZGluZy1sZWZ0OiAxLjVlbTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogdmFyKC0tY29udGFpbmVyLXhsKTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zcGFjaW5nLW1kKTtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0tc3BhY2luZy1tZCk7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgICBtYXgtd2lkdGg6IHZhcigtLWNvbnRhaW5lci1sZyk7XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIG1heC13aWR0aDogdmFyKC0tY29udGFpbmVyLW1kKTtcbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zcGFjaW5nLXNtKTtcbiAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zcGFjaW5nLXNtKTtcbiAgfVxufVxuIiwiLy8gSGVhZGVyIENvbXBvbmVudCBTdHlsZXNcbi8vIE1vZGVybiwgcmVzcG9uc2l2ZSBoZWFkZXIgd2l0aCBzZWFyY2gsIG5hdmlnYXRpb24sIGFuZCBtb2JpbGUgc3VwcG9ydFxuXG5AaW1wb3J0ICcuLi8uLi8uLi8uLi9zdHlsZXMvZGVzaWduLXN5c3RlbS5zY3NzJztcblxuLmhlYWRlciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAwMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1jb2xvciwgI2ZmZik7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsICNlNWU3ZWIpO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSh2YXIoLS1wcmltYXJ5LXJnYiksIDAuMDYpO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MsIGJhY2tncm91bmQgMC4zcztcblxuICAmLnNjcm9sbGVkIHtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEodmFyKC0tcHJpbWFyeS1yZ2IpLCAwLjEpO1xuICAgIC8vIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC45NSk7IC8vIE9wdGlvbmFsOiBzbGlnaHRseSB0cmFuc3BhcmVudCBvbiBzY3JvbGxcbiAgICAvLyBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTsgLy8gT3B0aW9uYWw6IGJsdXIgZWZmZWN0XG4gIH1cbn1cblxuLy8gVG9wIGJhciB3aXRoIHByb21vdGlvbmFsIGNvbnRlbnRcbi50b3AtYmFyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogOHB4IDA7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi8vIE1haW4gaGVhZGVyIGNvbnRhaW5lclxuLmhlYWRlci1tYWluIHtcbiAgcGFkZGluZzogMTJweCAwO1xuXG4gIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWluLWhlaWdodDogNzJweDtcbiAgICBnYXA6IDJyZW07XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICAgIGdhcDogMXJlbTtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIGdhcDogMC41cmVtO1xuICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1pbi1oZWlnaHQ6IDU2cHg7XG4gICAgICBnYXA6IDAuNXJlbTtcbiAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xuICAgIH1cbiAgfVxufVxuXG4vLyBMb2dvIGFuZCBicmFuZGluZ1xuLmxvZ28tc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC43cmVtO1xuXG4gIC5sb2dvIHtcbiAgICBoZWlnaHQ6IDM4cHg7IC8vIEFkanVzdGVkIGZvciBiZXR0ZXIgYmFsYW5jZVxuICAgIHdpZHRoOiBhdXRvO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICB9XG5cbiAgLmJyYW5kLXRleHQge1xuICAgIC5icmFuZC1uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMS42cmVtOyAvLyBBZGp1c3RlZFxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYnJhbmQtdGFnbGluZSB7XG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIG1hcmdpbjogMDtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFNlYXJjaCBzZWN0aW9uXG4uc2VhcmNoLXNlY3Rpb24ge1xuICBmbGV4OiAxO1xuICBtYXgtd2lkdGg6IDQyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7IC8vIFNob3cgc2VhcmNoIG9uIHRhYmxldHMgaWYgbmF2IGlzIGhpZGRlblxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9yZGVyOiAzOyAvLyBNb3ZlcyBzZWFyY2ggYmVsb3cgbG9nbyBvbiBjb2x1bW4gbGF5b3V0IGZvciBtb2JpbGVcbiAgICB3aWR0aDogMTAwJTsgLy8gRnVsbCB3aWR0aCBvbiBtb2JpbGUvdGFibGV0IHdoZW4gaXQncyBpbiBjb2x1bW5cbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDkwMXB4KSB7IC8vIEVuc3VyZSBpdCdzIGluIGl0cyBvcmlnaW5hbCBwbGFjZSBvbiBkZXNrdG9wXG4gICAgb3JkZXI6IDA7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuXG4gIC5zZWFyY2gtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAuc2VhcmNoLWlucHV0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMTBweCAxNnB4IDEwcHggNDRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWxpZ2h0LCAjZjhmYWZjKTtcbiAgICAgIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCAjZTVlN2ViKTtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlciAwLjJzIGVhc2U7XG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggIzI1NjNlYjIyO1xuICAgICAgfVxuXG4gICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VhcmNoLWljb24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMTRweDtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICB9XG5cbiAgICAuc2VhcmNoLWNsZWFyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAxNHB4O1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzIGVhc2UsIGNvbG9yIDAuMnMgZWFzZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmY2E1YTU7XG4gICAgICAgIGNvbG9yOiAjZWY0NDQ0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFNlYXJjaCBzdWdnZXN0aW9ucyBkcm9wZG93blxuICAuc2VhcmNoLXN1Z2dlc3Rpb25zIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsICNlNWU3ZWIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgIHotaW5kZXg6IDEwMDE7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAuc3VnZ2VzdGlvbi1pdGVtIHtcbiAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQsICNlNWU3ZWIpO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG4gICAgICBmb250LXNpemU6IDFyZW07XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWxpZ2h0LCAjZjhmYWZjKTtcbiAgICAgIH1cblxuICAgICAgLnN1Z2dlc3Rpb24taWNvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIE5hdmlnYXRpb24gbWVudSAoZGVza3RvcClcbi5uYXYtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcblxuICAubmF2LW1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDJyZW07XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcblxuICAgIC5uYXYtaXRlbSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgIC5uYXYtbGluayB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4wNXJlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE4cywgY29sb3IgMC4xOHM7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAmOmhvdmVyLFxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2LWljb24ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuaGFzLWRyb3Bkb3duIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyAvLyBJbXBvcnRhbnQgZm9yIHBvc2l0aW9uaW5nIHRoZSBtZWdhIG1lbnVcblxuICAgICAgICAubmF2LWxpbms6OmFmdGVyIHsgLy8gSWYgeW91IGhhdmUgYSBkcm9wZG93biBhcnJvd1xuICAgICAgICAgIGNvbnRlbnQ6ICcnOyAvLyBPciB5b3VyIGljb25cbiAgICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgICAgIGJvcmRlcjogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6IGN1cnJlbnRDb2xvcjsgLy8gT3IgdmFyKC0tdGV4dC1wcmltYXJ5KVxuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIC5uYXYtbGluazo6YWZ0ZXIgeyAvLyBBcnJvdyByb3RhdGlvbiBvbiBob3ZlclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5oYXMtZHJvcGRvd24ubWVnYS1tZW51LXRyaWdnZXIgeyAvLyBFbnN1cmUgdGhlIHRyaWdnZXIgTEkgaXMgcmVsYXRpdmUgZm9yIHBvc2l0aW9uaW5nIHRoZSBtZWdhLW1lbnVcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyAvLyBDcnVjaWFsIGZvciBwb3NpdGlvbmluZyB0aGUgYWJzb2x1dGUgbWVnYS1tZW51XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7IC8vIEhpZGUgZGVza3RvcCBuYXYgZWFybGllciBpZiBzZWFyY2ggdGFrZXMgc3BhY2VcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm5hdi1tZW51IC5uYXYtaXRlbSAubmF2LWxpbmsge1xuICAgICYuYWN0aXZlIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAvLyBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXByaW1hcnktcmdiKSwgMC4xKTsgLy8gT3B0aW9uYWwgYWN0aXZlIGJhY2tncm91bmRcbiAgICB9XG4gIH1cbn1cblxuLy8gVXNlciBhY3Rpb25zIHNlY3Rpb25cbi51c2VyLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuN3JlbTtcblxuICAuYWN0aW9uLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1saWdodCwgI2Y4ZmFmYyk7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwLjJyZW07XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE4cywgY29sb3IgMC4xOHMsIGJveC1zaGFkb3cgMC4xOHM7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSh2YXIoLS1wcmltYXJ5LXJnYiksIDAuMTApO1xuICAgIH1cblxuICAgIC5iYWRnZSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1lcnJvci1jb2xvcik7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgbWluLXdpZHRoOiAxOHB4O1xuICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgdG9wOiAtNHB4O1xuICAgICAgcmlnaHQ6IC00cHg7XG4gICAgfVxuICB9XG5cbiAgLy8gU2VhcmNoIGJ1dHRvbiAobW9iaWxlIG9ubHkpXG4gIC5tb2JpbGUtc2VhcmNoLWJ0biB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC8vIE1vYmlsZSBtZW51IGJ1dHRvblxuICAubW9iaWxlLW1lbnUtYnRuIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC8vIFVzZXIgbWVudSBkcm9wZG93blxuICAudXNlci1tZW51IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAudXNlci1hdmF0YXIge1xuICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgfVxuXG4gICAgLnVzZXItZHJvcGRvd24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAxMDAlO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgYm94LXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICB6LWluZGV4OiAxMDAxO1xuICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgIC5kcm9wZG93bi1oZWFkZXIge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1saWdodCk7XG5cbiAgICAgICAgLnVzZXItbmFtZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBtYXJnaW46IDAgMCA0cHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC51c2VyLWVtYWlsIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi1tZW51IHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiA4cHggMDtcblxuICAgICAgICAuZHJvcGRvd24taXRlbSB7XG4gICAgICAgICAgLmRyb3Bkb3duLWxpbmsge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1saWdodCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kcm9wZG93bi1pY29uIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5kYW5nZXIgLmRyb3Bkb3duLWxpbmsge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWVycm9yLWNvbG9yKTtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWVycm9yLWxpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudXNlci1tZW51IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLnVzZXItYXZhdGFyLWljb24ge1xuICAgICAgd2lkdGg6IDMycHg7XG4gICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB9XG4gIH1cblxuICAubG9naW4tYnRuIHtcbiAgICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7IC8vIEVuc3VyZSB1c2VyIGFjdGlvbnMgYXJlIGFsd2F5cyB2aXNpYmxlXG4gICAgIC8vIElmIHNlYXJjaCBtb3ZlcyB0byBhIG5ldyBsaW5lLCB1c2VyIGFjdGlvbnMgbWlnaHQgbmVlZCB0byBhZGp1c3RcbiAgfVxufVxuXG4vLyBNZWdhIG1lbnUgKGRlc2t0b3ApXG4ubWVnYS1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7IC8vIFBvc2l0aW9uIGJlbG93IHRoZSBuYXYgaXRlbSAoQ2F0ZWdvcmllcyBsaW5rKVxuICBsZWZ0OiAwOyAvLyBBbGlnbiB3aXRoIHRoZSBsZWZ0IGVkZ2Ugb2YgdGhlIHRyaWdnZXIgZWxlbWVudCBieSBkZWZhdWx0XG4gIC8vIFRvIGNlbnRlciBpdCB1bmRlciB0aGUgdHJpZ2dlciBpZiB0aGUgdHJpZ2dlciBpdHNlbGYgaXMgbm90IGZ1bGwgd2lkdGg6XG4gIC8vIGxlZnQ6IDUwJTtcbiAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyAvLyBUaGlzIHdvdWxkIGNlbnRlciBpdCB1bmRlciB0aGUgdHJpZ2dlci5cbiAgLy8gSG93ZXZlciwgZm9yIFwiZml0LWNvbnRlbnRcIiB0aGF0IG1pZ2h0IGV4dGVuZCBiZXlvbmQgdGhlIHRyaWdnZXIsIHNpbXBsZSBsZWZ0OiAwIGlzIG9mdGVuIGZpbmUuXG4gIC8vIElmIHRoZSBcIkNhdGVnb3JpZXNcIiBsaW5rIGlzIGZhciBsZWZ0IGFuZCBtZWdhIG1lbnUgaXMgd2lkZSwgaXQgbWlnaHQgZ28gb2ZmLXNjcmVlbi5cbiAgLy8gQ29uc2lkZXIgdGhpcyBpZiB5b3VyIGxheW91dCBuZWVkcyBpdDpcbiAgLy8gRm9yIGEgbWVnYSBtZW51IHRoYXQgbWlnaHQgYmUgd2lkZXIgdGhhbiBpdHMgdHJpZ2dlciBidXQgc2hvdWxkbid0IGdvIG9mZi1zY3JlZW46XG4gIC8vIFlvdSBtaWdodCBuZWVkIEpTIG9yIG1vcmUgY29tcGxleCBDU1MgaWYgaXQgbmVlZHMgdG8gZHluYW1pY2FsbHkgYWRqdXN0IGxlZnQvcmlnaHQgYmFzZWQgb24gdmlld3BvcnQuXG4gIC8vIEZvciBub3csIGBsZWZ0OiAwYCByZWxhdGl2ZSB0byB0aGUgdHJpZ2dlci5cblxuICB3aWR0aDogbWF4LWNvbnRlbnQ7IC8vIE1ha2UgdGhlIG1lZ2EgbWVudSBhcyB3aWRlIGFzIGl0cyBjb250ZW50IG5lZWRzLlxuICBtaW4td2lkdGg6IDQwMHB4OyAvLyBPcHRpb25hbDogZW5zdXJlIGl0IGhhcyBhIHJlYXNvbmFibGUgbWluaW11bSB3aWR0aCBmb3IgYWVzdGhldGljcy5cbiAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gNDBweCk7IC8vIE9wdGlvbmFsOiBwcmV2ZW50IGl0IGZyb20gYmVpbmcgd2lkZXIgdGhhbiB2aWV3cG9ydCBtaW51cyBzb21lIHBhZGRpbmcuXG5cbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1jb2xvciwgI2ZmZik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7IC8vIEFkZCBhIGZ1bGwgYm9yZGVyIGZvciBiZXR0ZXIgZGVmaW5pdGlvblxuICBib3JkZXItdG9wOiBub25lOyAvLyBBc3N1bWluZyB0b3AgYm9yZGVyIGlzIGhhbmRsZWQgYnkgaGVhZGVyIG9yIG5vdCBkZXNpcmVkIGhlcmVcbiAgYm9yZGVyLXJhZGl1czogMCAwIHZhcigtLXJhZGl1cy1sZywgOHB4KSB2YXIoLS1yYWRpdXMtbGcsIDhweCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy14bCwgMCAxMHB4IDI1cHggcmdiYSgwLDAsMCwwLjE1KSk7IC8vIEVuaGFuY2VkIHNoYWRvd1xuICB6LWluZGV4OiB2YXIoLS16LWRyb3Bkb3duLCAxMDAwKTtcblxuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTsgLy8gU3RhcnQgc2xpZ2h0bHkgbG93ZXIgZm9yIGFuaW1hdGlvblxuICAvLyBJZiB5b3UgdXNlZCBsZWZ0OiA1MCUgYW5kIHRyYW5zbGF0ZVgoLTUwJSkgZm9yIGNlbnRlcmluZyB1bmRlciB0cmlnZ2VyOlxuICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgxMHB4KTsgXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgZWFzZS1vdXQsIHRyYW5zZm9ybSAwLjI1cyBlYXNlLW91dCwgdmlzaWJpbGl0eSAwLjI1cyBlYXNlLW91dDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgJi5vcGVuIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIC8vIElmIHlvdSB1c2VkIGxlZnQ6IDUwJSBhbmQgdHJhbnNsYXRlWCgtNTAlKSBmb3IgY2VudGVyaW5nIHVuZGVyIHRyaWdnZXI6XG4gICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoMCk7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIH1cblxuICAubWVnYS1tZW51LWNvbnRlbnQge1xuICAgIC8vIElmIC5jb250YWluZXIgd2FzIHJlbW92ZWQgZnJvbSBIVE1MIGZvciB0aGlzIGRpdiwgYWRkIHBhZGRpbmcgaGVyZTpcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnLCAxLjVyZW0pOyBcblxuICAgIC5tZWdhLW1lbnUtZ3JpZCB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgYXV0byk7IC8vIEVhY2ggY29sdW1uIHRha2VzIHdpZHRoIG9mIGl0cyBjb250ZW50XG4gICAgICAvLyBVc2luZyBgYXV0b2AgZm9yIGNvbHVtbiB3aWR0aCB3aXRoIGBtYXgtY29udGVudGAgb24gcGFyZW50IGVuc3VyZXMgY29sdW1ucyBhcmUganVzdCB3aWRlIGVub3VnaC5cbiAgICAgIC8vIGAxZnJgIHdvdWxkIG1ha2UgdGhlbSBlcXVhbCBmcmFjdGlvbnMgb2YgdGhlIGBtYXgtY29udGVudGAgd2lkdGguIGBhdXRvYCBpcyBtb3JlIFwiZml0XCIuXG4gICAgICBnYXA6IHZhcigtLXNwYWNpbmcteGwsIDJyZW0pOyAvLyBJbmNyZWFzZWQgZ2FwIGZvciBiZXR0ZXIgc2VwYXJhdGlvblxuXG4gICAgICAubWVnYS1tZW51LWNhdGVnb3J5IHtcbiAgICAgICAgLmNhdGVnb3J5LXRpdGxlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiB2YXIoLS10ZXh0LWxnLCAxLjEyNXJlbSk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtc2VtaWJvbGQsIDYwMCk7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctbWQsIDFyZW0pOyAvLyBJbmNyZWFzZWQgYm90dG9tIG1hcmdpblxuXG4gICAgICAgICAgLmNhdGVnb3J5LWljb24ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1zcGFjaW5nLXNtLCAwLjVyZW0pOyAvLyBBZGp1c3RlZCBzcGFjaW5nXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMzVyZW07IC8vIFNsaWdodGx5IGxhcmdlciBpY29uXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNhdGVnb3J5LWxpbmtzIHtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgICAgLmNhdGVnb3J5LWxpbmsge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy1zbSwgMC41cmVtKTsgLy8gQWRqdXN0ZWQgc3BhY2luZ1xuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXhzLCAwLjI1cmVtKSB2YXIoLS1zcGFjaW5nLXNtLCAwLjVyZW0pOyAvLyBBZGRlZCBzb21lIHBhZGRpbmdcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCwgNnB4KTsgLy8gQ29uc2lzdGVudCByYWRpdXNcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcblxuICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXByaW1hcnktcmdiKSwgMC4wOCk7IC8vIFNsaWdodGx5IGRhcmtlciBob3ZlclxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIE1vYmlsZSBzZWFyY2ggb3ZlcmxheVxuLm1vYmlsZS1zZWFyY2gtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHotaW5kZXg6IDEwNTA7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAmLm9wZW4ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuXG4gIC5tb2JpbGUtc2VhcmNoLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xuXG4gICAgLm1vYmlsZS1zZWFyY2gtaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuICAgICAgaDMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgICB9XG5cbiAgICAgIC5jbG9zZS1zZWFyY2gge1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tb2JpbGUtc2VhcmNoLWlucHV0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTsgLy8gTW9yZSBzcGFjZSBiZWZvcmUgYnV0dG9uXG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5idG4tcHJpbWFyeSB7IC8vIEVuc3VyZSBidXR0b24gc3R5bGluZ1xuICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gIH1cblxuICAmLm9wZW4gLm1vYmlsZS1zZWFyY2gtY29udGVudCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbi8vIE1vYmlsZSBtZW51IG92ZXJsYXlcbi5tb2JpbGUtbWVudS1vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgei1pbmRleDogMTEwMDtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICYub3BlbiB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuXG4gICAgLm1vYmlsZS1tZW51LWNvbnRlbnQge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIH1cbiAgfVxuXG4gIC5tb2JpbGUtbWVudS1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDI4MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcblxuICAgIC5tb2JpbGUtbWVudS1oZWFkZXIge1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1saWdodCk7XG5cbiAgICAgIC5tb2JpbGUtbWVudS10aXRsZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuXG4gICAgICAgIC5jbG9zZS1tZW51IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5tb2JpbGUtbWVudS1uYXYge1xuICAgICAgcGFkZGluZzogMXJlbSAwO1xuXG4gICAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cblxuICAgICAgLm1vYmlsZS1uYXYtaXRlbSB7XG4gICAgICAgIC5tb2JpbGUtbmF2LWxpbmsge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDFyZW07XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xuICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWxpZ2h0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubW9iaWxlLW5hdi1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmhhcy1zdWJtZW51IHtcbiAgICAgICAgICAubW9iaWxlLW5hdi1saW5rIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAgICAgLnN1Ym1lbnUtdG9nZ2xlIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZXhwYW5kZWQgLnN1Ym1lbnUtdG9nZ2xlIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubW9iaWxlLXN1Ym1lbnUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1saWdodCk7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4zcyBlYXNlO1xuXG4gICAgICAgICAgICAmLmV4cGFuZGVkIHtcbiAgICAgICAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7IC8vIEFkanVzdCBhcyBuZWVkZWRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1vYmlsZS1zdWJtZW51LWl0ZW0ge1xuICAgICAgICAgICAgICAubW9iaWxlLXN1Ym1lbnUtbGluayB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxcmVtIDEwcHggM3JlbTsgLy8gSW5kZW50IHN1Yi1pdGVtc1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlO1xuXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1vYmlsZS1tZW51LWZvb3RlciB7XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuXG4gICAgICAubW9iaWxlLWF1dGgtYnV0dG9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogMC41cmVtO1xuXG4gICAgICAgIC5tb2JpbGUtYXV0aC1idG4ge1xuICAgICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuXG4gICAgICAgICAgJi5wcmltYXJ5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1kYXJrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLnNlY29uZGFyeSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktbGlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYnRuLWRhbmdlciB7IC8vIEVuc3VyZSBidXR0b24gc3R5bGluZ1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAwLjVyZW07XG4gICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gTm90aWZpY2F0aW9uIGRyb3Bkb3duXG4ubm90aWZpY2F0aW9uLWRyb3Bkb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHotaW5kZXg6IDEwMDE7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgd2lkdGg6IDMyMHB4O1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAubm90aWZpY2F0aW9uLWhlYWRlciB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWxpZ2h0KTtcblxuICAgIC5ub3RpZmljYXRpb24tdGl0bGUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuXG4gICAgICAubWFyay1hbGwtcmVhZCB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm5vdGlmaWNhdGlvbi1saXN0IHtcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gICAgLm5vdGlmaWNhdGlvbi1pdGVtIHtcbiAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWxpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgJi51bnJlYWQge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXByaW1hcnktcmdiKSwgMC4wNSk7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5ub3RpZmljYXRpb24tY29udGVudCB7XG4gICAgICAgIC5ub3RpZmljYXRpb24tdGV4dCB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICBtYXJnaW46IDAgMCA0cHggMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5vdGlmaWNhdGlvbi10aW1lIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmVtcHR5LW5vdGlmaWNhdGlvbnMge1xuICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcblxuICAgICAgLmVtcHR5LWljb24ge1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gQW5pbWF0aW9uc1xuQGtleWZyYW1lcyBzbGlkZURvd24ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi8vIEFwcGx5IGFuaW1hdGlvbnNcbi5zZWFyY2gtc3VnZ2VzdGlvbnMsXG4udXNlci1kcm9wZG93bixcbi5ub3RpZmljYXRpb24tZHJvcGRvd24ge1xuICBhbmltYXRpb246IHNsaWRlRG93biAwLjNzIGVhc2U7XG59XG5cbi8vIFJlc3BvbnNpdmUgYWRqdXN0bWVudHNcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuaGVhZGVyLW1haW4gLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICB9XG5cbiAgLmxvZ28tc2VjdGlvbiAuYnJhbmQtdGV4dCAuYnJhbmQtbmFtZSB7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgfVxuXG4gIC51c2VyLWFjdGlvbnMge1xuICAgIGdhcDogMC4yNXJlbTtcblxuICAgIC5hY3Rpb24tYnV0dG9uIHtcbiAgICAgIHBhZGRpbmc6IDZweDtcblxuICAgICAgLmFjdGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gSGlnaCBjb250cmFzdCBtb2RlIHN1cHBvcnRcbkBtZWRpYSAocHJlZmVycy1jb250cmFzdDogaGlnaCkge1xuICAuaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG4gIH1cblxuICAuYWN0aW9uLWJ1dHRvbiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgfVxuICB9XG59XG5cbi8vIFJlZHVjZWQgbW90aW9uIHN1cHBvcnRcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gICoge1xuICAgIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICBhbmltYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vLyBBZGRpdGlvbmFsIHJlc3BvbnNpdmUgYWRqdXN0bWVudHMgZm9yIG1vYmlsZSBtZW51XG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLm1vYmlsZS1tZW51LW92ZXJsYXkgLm1vYmlsZS1tZW51LWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi8vIE1vYmlsZSBuYXYgaW1wcm92ZW1lbnRzXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5uYXYtc2VjdGlvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC51c2VyLWFjdGlvbnMgLm1vYmlsZS1tZW51LWJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmhlYWRlci1tYWluIC5jb250YWluZXIge1xuICAgIG1pbi1oZWlnaHQ6IDU2cHg7XG4gICAgcGFkZGluZzogMCAwLjVyZW07XG4gIH1cblxuICAubG9nby1zZWN0aW9uIC5icmFuZC10ZXh0IC5icmFuZC1uYW1lIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgfVxuXG4gIC51c2VyLWFjdGlvbnMge1xuICAgIGdhcDogMC4ycmVtO1xuXG4gICAgLmFjdGlvbi1idXR0b24ge1xuICAgICAgcGFkZGluZzogN3B4O1xuXG4gICAgICAuYWN0aW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gUmVtb3ZlIGFueSBleHRyYSB0b3AgYmFycyBvciBkb3VibGUgbmF2c1xuLnRvcC1iYXIge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi8vIEN1c3RvbSBNYXQgTWVudSBzdHlsZXMgKGlmIG5lZWRlZCBmb3IgdXNlciBkcm9wZG93bilcbi5jdXN0b20tbWF0LW1lbnUge1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1sZykgIWltcG9ydGFudDtcblxuICAuZHJvcGRvd24taGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtbGlnaHQpO1xuICAgIC51c2VyLW5hbWUge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIG1hcmdpbjogMCAwIDAuMjVyZW0gMDtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gICAgLnVzZXItZW1haWwge1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgfVxuICB9XG4gIC5tYXQtbWRjLW1lbnUtaXRlbSB7XG4gICAgbWluLWhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgLmRyb3Bkb3duLWljb24ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIH1cbiAgICAmLmRhbmdlciB7XG4gICAgICBjb2xvcjogdmFyKC0tZXJyb3ItY29sb3IpO1xuICAgICAgLmRyb3Bkb3duLWljb24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tZXJyb3ItY29sb3IpO1xuICAgICAgfVxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tZXJyb3ItY29sb3IpLCAwLjEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBSZXNwb25zaXZlIGFkanVzdG1lbnRzXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHsgLy8gQWRqdXN0ZWQgYnJlYWtwb2ludFxuICAuaGVhZGVyLW1haW4gLmNvbnRhaW5lciB7XG4gICAgZmxleC13cmFwOiB3cmFwOyAvLyBBbGxvdyBpdGVtcyB0byB3cmFwXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAvLyBLZWVwIGxvZ28gYW5kIHVzZXIgYWN0aW9ucyBhdCBlbmRzXG4gICAgcm93LWdhcDogMC41cmVtOyAvLyBTcGFjZSB3aGVuIGl0ZW1zIHdyYXBcbiAgfVxuICAubG9nby1zZWN0aW9uIHtcbiAgICB3aWR0aDogYXV0bzsgLy8gRG9uJ3QgZm9yY2UgZnVsbCB3aWR0aCBpZiBzZWFyY2ggaXMgYmVsb3dcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IC8vIFB1c2ggdG8gbGVmdFxuICB9XG4gIC51c2VyLWFjdGlvbnMge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvOyAvLyBQdXNoIHRvIHJpZ2h0XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5oZWFkZXItbWFpbiAuY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyAvLyBLZWVwIGxvZ28gYW5kIGFjdGlvbnMgb24gb25lIHJvd1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5zZWFyY2gtc2VjdGlvbiB7IC8vIFNlYXJjaCB0YWtlcyBmdWxsIHdpZHRoIGJlbG93IGxvZ28vYWN0aW9ucyByb3dcbiAgICBvcmRlcjogMztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xuICB9XG4gIC5sb2dvLXNlY3Rpb24ge1xuICAgIGZsZXgtZ3JvdzogMTsgLy8gQWxsb3cgbG9nbyB0byB0YWtlIGF2YWlsYWJsZSBzcGFjZVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}


/***/ }),

/***/ 4333:
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/loading-spinner/loading-spinner.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingSpinnerComponent: () => (/* binding */ LoadingSpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);


class LoadingSpinnerComponent {
  constructor() {
    this.diameter = 50;
    this.color = 'primary';
    this.mode = 'indeterminate';
    this.value = 100;
    this.overlay = false;
  }
  static {
    this.ɵfac = function LoadingSpinnerComponent_Factory(t) {
      return new (t || LoadingSpinnerComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoadingSpinnerComponent,
      selectors: [["app-loading-spinner"]],
      inputs: {
        diameter: "diameter",
        color: "color",
        mode: "mode",
        value: "value",
        overlay: "overlay"
      },
      decls: 2,
      vars: 6,
      consts: [[1, "spinner-container"], [3, "diameter", "color", "mode", "value"]],
      template: function LoadingSpinnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-spinner", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("spinner-overlay", ctx.overlay);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", ctx.diameter)("color", ctx.color)("mode", ctx.mode)("value", ctx.value);
        }
      },
      dependencies: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__.MatProgressSpinner],
      styles: [".spinner-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: var(--spacing-xl);\n  min-height: 200px;\n}\n.spinner-container.spinner-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.9);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  z-index: 9999;\n  min-height: 100vh;\n}\n\n.custom-spinner[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border: 4px solid var(--color-gray-200);\n  border-top: 4px solid var(--color-primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: var(--spacing-md);\n}\n\n.spinner-text[_ngcontent-%COMP%] {\n  color: var(--color-text-secondary);\n  font-size: var(--font-size-sm);\n  font-weight: var(--font-weight-medium);\n  text-align: center;\n  margin-top: var(--spacing-sm);\n  animation: _ngcontent-%COMP%_pulse 2s ease-in-out infinite;\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 0.6;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.dot-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-xs);\n  margin-bottom: var(--spacing-md);\n}\n.dot-spinner[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--color-primary);\n  animation: _ngcontent-%COMP%_dotBounce 1.4s ease-in-out infinite both;\n}\n.dot-spinner[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: -0.32s;\n}\n.dot-spinner[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: -0.16s;\n}\n.dot-spinner[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0;\n}\n\n@keyframes _ngcontent-%COMP%_dotBounce {\n  0%, 80%, 100% {\n    transform: scale(0.8);\n    opacity: 0.5;\n  }\n  40% {\n    transform: scale(1.2);\n    opacity: 1;\n  }\n}\n.wave-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-bottom: var(--spacing-md);\n}\n.wave-spinner[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 20px;\n  background: var(--color-primary);\n  border-radius: 2px;\n  animation: _ngcontent-%COMP%_wave 1.2s ease-in-out infinite;\n}\n.wave-spinner[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0s;\n}\n.wave-spinner[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.1s;\n}\n.wave-spinner[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.2s;\n}\n.wave-spinner[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.3s;\n}\n.wave-spinner[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 0.4s;\n}\n\n@keyframes _ngcontent-%COMP%_wave {\n  0%, 40%, 100% {\n    transform: scaleY(0.4);\n    opacity: 0.5;\n  }\n  20% {\n    transform: scaleY(1);\n    opacity: 1;\n  }\n}\n.skeleton-loader[_ngcontent-%COMP%]   .skeleton-item[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, var(--color-gray-200) 25%, var(--color-gray-100) 50%, var(--color-gray-200) 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n  border-radius: var(--border-radius-sm);\n  margin-bottom: var(--spacing-sm);\n}\n.skeleton-loader[_ngcontent-%COMP%]   .skeleton-item.skeleton-text[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 100%;\n}\n.skeleton-loader[_ngcontent-%COMP%]   .skeleton-item.skeleton-text.short[_ngcontent-%COMP%] {\n  width: 60%;\n}\n.skeleton-loader[_ngcontent-%COMP%]   .skeleton-item.skeleton-text.medium[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.skeleton-loader[_ngcontent-%COMP%]   .skeleton-item.skeleton-title[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 40%;\n  margin-bottom: var(--spacing-md);\n}\n.skeleton-loader[_ngcontent-%COMP%]   .skeleton-item.skeleton-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n}\n.skeleton-loader[_ngcontent-%COMP%]   .skeleton-item.skeleton-image[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 100%;\n}\n\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -200% 0;\n  }\n  100% {\n    background-position: 200% 0;\n  }\n}\n.spinner-small[_ngcontent-%COMP%]   .custom-spinner[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-width: 2px;\n}\n.spinner-small[_ngcontent-%COMP%]   .spinner-text[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xs);\n}\n\n.spinner-large[_ngcontent-%COMP%]   .custom-spinner[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-width: 6px;\n}\n.spinner-large[_ngcontent-%COMP%]   .spinner-text[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n}\n\n.spinner-light[_ngcontent-%COMP%]   .custom-spinner[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n}\n.spinner-light[_ngcontent-%COMP%]   .spinner-text[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.spinner-success[_ngcontent-%COMP%]   .custom-spinner[_ngcontent-%COMP%] {\n  border-color: var(--color-success-light);\n  border-top-color: var(--color-success);\n}\n.spinner-success[_ngcontent-%COMP%]   .dot-spinner[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%], .spinner-success[_ngcontent-%COMP%]   .wave-spinner[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  background: var(--color-success);\n}\n\n.spinner-warning[_ngcontent-%COMP%]   .custom-spinner[_ngcontent-%COMP%] {\n  border-color: var(--color-warning-light);\n  border-top-color: var(--color-warning);\n}\n.spinner-warning[_ngcontent-%COMP%]   .dot-spinner[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%], .spinner-warning[_ngcontent-%COMP%]   .wave-spinner[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  background: var(--color-warning);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .custom-spinner[_ngcontent-%COMP%], .dot-spinner[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%], .wave-spinner[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%], .skeleton-item[_ngcontent-%COMP%] {\n    animation: none;\n  }\n  .spinner-text[_ngcontent-%COMP%] {\n    animation: none;\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FBQUY7QUFFRTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0NBQUE7QUFGRjs7QUFLQTtFQUNFLGtDQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3Q0FBQTtBQUZGOztBQU1BO0VBQ0U7SUFBVyxZQUFBO0VBRlg7RUFHQTtJQUFNLFVBQUE7RUFBTjtBQUNGO0FBR0E7RUFDRTtJQUFLLHVCQUFBO0VBQUw7RUFDQTtJQUFPLHlCQUFBO0VBRVA7QUFDRjtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QUFDRjtBQUNFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbURBQUE7QUFDSjtBQUNJO0VBQWlCLHVCQUFBO0FBRXJCO0FBREk7RUFBaUIsdUJBQUE7QUFJckI7QUFISTtFQUFpQixrQkFBQTtBQU1yQjs7QUFGQTtFQUNFO0lBQ0UscUJBQUE7SUFDQSxZQUFBO0VBS0Y7RUFIQTtJQUNFLHFCQUFBO0lBQ0EsVUFBQTtFQUtGO0FBQ0Y7QUFEQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtBQUdGO0FBREU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtBQUdKO0FBREk7RUFBaUIsbUJBQUE7QUFJckI7QUFISTtFQUFpQixxQkFBQTtBQU1yQjtBQUxJO0VBQWlCLHFCQUFBO0FBUXJCO0FBUEk7RUFBaUIscUJBQUE7QUFVckI7QUFUSTtFQUFpQixxQkFBQTtBQVlyQjs7QUFSQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSxZQUFBO0VBV0Y7RUFUQTtJQUNFLG9CQUFBO0lBQ0EsVUFBQTtFQVdGO0FBQ0Y7QUFORTtFQUNFLG1IQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0NBQUE7QUFRSjtBQU5JO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFRTjtBQU5NO0VBQVUsVUFBQTtBQVNoQjtBQVJNO0VBQVcsVUFBQTtBQVdqQjtBQVJJO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQ0FBQTtBQVVOO0FBUEk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBU047QUFOSTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FBUU47O0FBSEE7RUFDRTtJQUFLLDRCQUFBO0VBT0w7RUFOQTtJQUFPLDJCQUFBO0VBU1A7QUFDRjtBQUxFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQU9KO0FBSkU7RUFDRSw4QkFBQTtBQU1KOztBQURFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUlKO0FBREU7RUFDRSw4QkFBQTtBQUdKOztBQUdFO0VBQ0Usc0NBQUE7RUFDQSx1QkFBQTtBQUFKO0FBR0U7RUFDRSxZQUFBO0FBREo7O0FBTUU7RUFDRSx3Q0FBQTtFQUNBLHNDQUFBO0FBSEo7QUFNRTs7RUFFRSxnQ0FBQTtBQUpKOztBQVNFO0VBQ0Usd0NBQUE7RUFDQSxzQ0FBQTtBQU5KO0FBU0U7O0VBRUUsZ0NBQUE7QUFQSjs7QUFZQTtFQUNFOzs7O0lBSUUsZUFBQTtFQVRGO0VBWUE7SUFDRSxlQUFBO0lBQ0EsVUFBQTtFQVZGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNb2Rlcm4gTG9hZGluZyBTcGlubmVyIFN0eWxlc1xuLnNwaW5uZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmcteGwpO1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgXG4gICYuc3Bpbm5lci1vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB9XG59XG5cbi8vIEN1c3RvbSBTcGlubmVyIEFuaW1hdGlvblxuLmN1c3RvbS1zcGlubmVyIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tY29sb3ItZ3JheS0yMDApO1xuICBib3JkZXItdG9wOiA0cHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy1tZCk7XG59XG5cbi5zcGlubmVyLXRleHQge1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IHZhcigtLXNwYWNpbmctc20pO1xuICBhbmltYXRpb246IHB1bHNlIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG4vLyBQdWxzZSBBbmltYXRpb24gZm9yIExvYWRpbmcgVGV4dFxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIDAlLCAxMDAlIHsgb3BhY2l0eTogMC42OyB9XG4gIDUwJSB7IG9wYWNpdHk6IDE7IH1cbn1cblxuLy8gU3Bpbm5lciBBbmltYXRpb25cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuLy8gQWx0ZXJuYXRpdmUgRG90IFNwaW5uZXJcbi5kb3Qtc3Bpbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogdmFyKC0tc3BhY2luZy14cyk7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctbWQpO1xuICBcbiAgLmRvdCB7XG4gICAgd2lkdGg6IDhweDtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gICAgYW5pbWF0aW9uOiBkb3RCb3VuY2UgMS40cyBlYXNlLWluLW91dCBpbmZpbml0ZSBib3RoO1xuICAgIFxuICAgICY6bnRoLWNoaWxkKDEpIHsgYW5pbWF0aW9uLWRlbGF5OiAtMC4zMnM7IH1cbiAgICAmOm50aC1jaGlsZCgyKSB7IGFuaW1hdGlvbi1kZWxheTogLTAuMTZzOyB9XG4gICAgJjpudGgtY2hpbGQoMykgeyBhbmltYXRpb24tZGVsYXk6IDA7IH1cbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGRvdEJvdW5jZSB7XG4gIDAlLCA4MCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbiAgNDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4vLyBXYXZlIFNwaW5uZXJcbi53YXZlLXNwaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy1tZCk7XG4gIFxuICAuYmFyIHtcbiAgICB3aWR0aDogNHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYW5pbWF0aW9uOiB3YXZlIDEuMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gICAgXG4gICAgJjpudGgtY2hpbGQoMSkgeyBhbmltYXRpb24tZGVsYXk6IDBzOyB9XG4gICAgJjpudGgtY2hpbGQoMikgeyBhbmltYXRpb24tZGVsYXk6IDAuMXM7IH1cbiAgICAmOm50aC1jaGlsZCgzKSB7IGFuaW1hdGlvbi1kZWxheTogMC4yczsgfVxuICAgICY6bnRoLWNoaWxkKDQpIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjNzOyB9XG4gICAgJjpudGgtY2hpbGQoNSkgeyBhbmltYXRpb24tZGVsYXk6IDAuNHM7IH1cbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHdhdmUge1xuICAwJSwgNDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjQpO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuICAyMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLy8gU2tlbGV0b24gTG9hZGluZyBmb3IgQ29udGVudFxuLnNrZWxldG9uLWxvYWRlciB7XG4gIC5za2VsZXRvbi1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLWNvbG9yLWdyYXktMjAwKSAyNSUsIHZhcigtLWNvbG9yLWdyYXktMTAwKSA1MCUsIHZhcigtLWNvbG9yLWdyYXktMjAwKSA3NSUpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xuICAgIGFuaW1hdGlvbjogc2hpbW1lciAxLjVzIGluZmluaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtc20pO1xuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctc20pO1xuICAgIFxuICAgICYuc2tlbGV0b24tdGV4dCB7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIFxuICAgICAgJi5zaG9ydCB7IHdpZHRoOiA2MCU7IH1cbiAgICAgICYubWVkaXVtIHsgd2lkdGg6IDgwJTsgfVxuICAgIH1cbiAgICBcbiAgICAmLnNrZWxldG9uLXRpdGxlIHtcbiAgICAgIGhlaWdodDogMjRweDtcbiAgICAgIHdpZHRoOiA0MCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLW1kKTtcbiAgICB9XG4gICAgXG4gICAgJi5za2VsZXRvbi1hdmF0YXIge1xuICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICAgIFxuICAgICYuc2tlbGV0b24taW1hZ2Uge1xuICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNoaW1tZXIge1xuICAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IC0yMDAlIDA7IH1cbiAgMTAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDIwMCUgMDsgfVxufVxuXG4vLyBTaXplIFZhcmlhbnRzXG4uc3Bpbm5lci1zbWFsbCB7XG4gIC5jdXN0b20tc3Bpbm5lciB7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xuICB9XG4gIFxuICAuc3Bpbm5lci10ZXh0IHtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14cyk7XG4gIH1cbn1cblxuLnNwaW5uZXItbGFyZ2Uge1xuICAuY3VzdG9tLXNwaW5uZXIge1xuICAgIHdpZHRoOiA2NHB4O1xuICAgIGhlaWdodDogNjRweDtcbiAgICBib3JkZXItd2lkdGg6IDZweDtcbiAgfVxuICBcbiAgLnNwaW5uZXItdGV4dCB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGcpO1xuICB9XG59XG5cbi8vIFRoZW1lIFZhcmlhbnRzXG4uc3Bpbm5lci1saWdodCB7XG4gIC5jdXN0b20tc3Bpbm5lciB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIC5zcGlubmVyLXRleHQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuXG4uc3Bpbm5lci1zdWNjZXNzIHtcbiAgLmN1c3RvbS1zcGlubmVyIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXN1Y2Nlc3MtbGlnaHQpO1xuICAgIGJvcmRlci10b3AtY29sb3I6IHZhcigtLWNvbG9yLXN1Y2Nlc3MpO1xuICB9XG4gIFxuICAuZG90LXNwaW5uZXIgLmRvdCxcbiAgLndhdmUtc3Bpbm5lciAuYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1zdWNjZXNzKTtcbiAgfVxufVxuXG4uc3Bpbm5lci13YXJuaW5nIHtcbiAgLmN1c3RvbS1zcGlubmVyIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXdhcm5pbmctbGlnaHQpO1xuICAgIGJvcmRlci10b3AtY29sb3I6IHZhcigtLWNvbG9yLXdhcm5pbmcpO1xuICB9XG4gIFxuICAuZG90LXNwaW5uZXIgLmRvdCxcbiAgLndhdmUtc3Bpbm5lciAuYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci13YXJuaW5nKTtcbiAgfVxufVxuXG4vLyBBY2Nlc3NpYmlsaXR5XG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAuY3VzdG9tLXNwaW5uZXIsXG4gIC5kb3Qtc3Bpbm5lciAuZG90LFxuICAud2F2ZS1zcGlubmVyIC5iYXIsXG4gIC5za2VsZXRvbi1pdGVtIHtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gIH1cbiAgXG4gIC5zcGlubmVyLXRleHQge1xuICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}


/***/ }),

/***/ 13:
/*!********************************************************************!*\
  !*** ./src/app/shared/components/not-found/not-found.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotFoundComponent: () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 3840);




class NotFoundComponent {
  static {
    this.ɵfac = function NotFoundComponent_Factory(t) {
      return new (t || NotFoundComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotFoundComponent,
      selectors: [["app-not-found"]],
      decls: 14,
      vars: 0,
      consts: [[1, "not-found-container"], [1, "not-found-content"], [1, "not-found-icon"], ["mat-raised-button", "", "color", "primary", "routerLink", "/"]],
      template: function NotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-icon", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "sentiment_very_dissatisfied");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "404");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Page Not Found");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "The page you are looking for doesn't exist or has been moved.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3)(11, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "home");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Return to Home ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon],
      styles: ["@charset \"UTF-8\";\n.not-found-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: calc(100vh - 200px);\n  padding: var(--spacing-xl);\n  background: linear-gradient(135deg, var(--color-gray-50), white);\n  text-align: center;\n}\n\n.not-found-content[_ngcontent-%COMP%] {\n  max-width: 600px;\n  padding: var(--spacing-3xl);\n  border-radius: var(--border-radius-xl);\n  box-shadow: var(--shadow-2xl);\n  background: white;\n  border: 1px solid var(--color-gray-100);\n  position: relative;\n  overflow: hidden;\n}\n.not-found-content[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image: radial-gradient(circle at 20% 20%, var(--color-primary-light) 1px, transparent 1px), radial-gradient(circle at 80% 80%, var(--color-secondary-light) 1px, transparent 1px);\n  background-size: 30px 30px;\n  opacity: 0.05;\n  pointer-events: none;\n}\n\n.not-found-icon[_ngcontent-%COMP%] {\n  font-size: 96px;\n  height: 96px;\n  width: 96px;\n  color: var(--color-primary);\n  margin: 0 auto var(--spacing-lg);\n  animation: _ngcontent-%COMP%_float 3s ease-in-out infinite;\n  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n.error-code[_ngcontent-%COMP%] {\n  font-size: 8rem;\n  font-weight: var(--font-weight-bold);\n  margin: 0;\n  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  line-height: 1;\n  margin-bottom: var(--spacing-md);\n  animation: _ngcontent-%COMP%_glow 2s ease-in-out infinite alternate;\n}\n\n@keyframes _ngcontent-%COMP%_glow {\n  0% {\n    filter: brightness(1);\n  }\n  100% {\n    filter: brightness(1.2);\n  }\n}\nh2[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  font-weight: var(--font-weight-semibold);\n  margin: 0 0 var(--spacing-md);\n  color: var(--color-text-primary);\n}\n\n.error-message[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  color: var(--color-text-secondary);\n  margin-bottom: var(--spacing-xl);\n  line-height: 1.6;\n}\n\n.error-suggestions[_ngcontent-%COMP%] {\n  margin: var(--spacing-xl) 0;\n  text-align: left;\n}\n.error-suggestions[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  font-weight: var(--font-weight-semibold);\n  color: var(--color-text-primary);\n  margin-bottom: var(--spacing-md);\n  text-align: center;\n}\n.error-suggestions[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.error-suggestions[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) 0;\n  color: var(--color-text-secondary);\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n}\n.error-suggestions[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: \"\u2713\";\n  color: var(--color-success);\n  font-weight: var(--font-weight-bold);\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-md);\n  align-items: center;\n  margin-top: var(--spacing-xl);\n}\n.action-buttons[_ngcontent-%COMP%]   .home-button[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));\n  color: white;\n  border: none;\n  padding: var(--spacing-md) var(--spacing-2xl);\n  border-radius: var(--border-radius-lg);\n  font-size: var(--font-size-md);\n  font-weight: var(--font-weight-semibold);\n  cursor: pointer;\n  transition: var(--transition-base);\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  box-shadow: var(--shadow-md);\n}\n.action-buttons[_ngcontent-%COMP%]   .home-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-lg);\n}\n.action-buttons[_ngcontent-%COMP%]   .home-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: var(--spacing-xs);\n}\n.action-buttons[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--color-text-secondary);\n  border: 2px solid var(--color-gray-300);\n  padding: var(--spacing-sm) var(--spacing-xl);\n  border-radius: var(--border-radius-md);\n  font-size: var(--font-size-sm);\n  font-weight: var(--font-weight-medium);\n  cursor: pointer;\n  transition: var(--transition-base);\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n}\n.action-buttons[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-primary);\n  color: var(--color-primary);\n  background: var(--color-primary-light);\n}\n\n.search-section[_ngcontent-%COMP%] {\n  margin: var(--spacing-xl) 0;\n  padding: var(--spacing-lg);\n  background: var(--color-gray-50);\n  border-radius: var(--border-radius-lg);\n  border: 1px solid var(--color-gray-200);\n}\n.search-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  font-weight: var(--font-weight-semibold);\n  color: var(--color-text-primary);\n  margin-bottom: var(--spacing-md);\n}\n.search-section[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-sm);\n}\n.search-section[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: var(--spacing-md);\n  border: 2px solid var(--color-gray-300);\n  border-radius: var(--border-radius-md);\n  font-size: var(--font-size-md);\n  transition: var(--transition-base);\n}\n.search-section[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-primary);\n  box-shadow: 0 0 0 3px var(--color-primary-light);\n}\n.search-section[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-muted);\n}\n.search-section[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  color: white;\n  border: none;\n  padding: var(--spacing-md) var(--spacing-lg);\n  border-radius: var(--border-radius-md);\n  font-weight: var(--font-weight-medium);\n  cursor: pointer;\n  transition: var(--transition-base);\n}\n.search-section[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: var(--color-primary-dark);\n}\n\n.popular-links[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-xl);\n}\n.popular-links[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  font-weight: var(--font-weight-semibold);\n  color: var(--color-text-primary);\n  margin-bottom: var(--spacing-md);\n}\n.popular-links[_ngcontent-%COMP%]   .links-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: var(--spacing-sm);\n}\n.popular-links[_ngcontent-%COMP%]   .links-grid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) var(--spacing-md);\n  background: white;\n  border: 1px solid var(--color-gray-200);\n  border-radius: var(--border-radius-md);\n  color: var(--color-text-secondary);\n  text-decoration: none;\n  transition: var(--transition-base);\n  font-size: var(--font-size-sm);\n}\n.popular-links[_ngcontent-%COMP%]   .links-grid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: var(--color-primary-light);\n  color: var(--color-primary-dark);\n  border-color: var(--color-primary);\n  transform: translateY(-2px);\n}\n\n@media (max-width: 768px) {\n  .not-found-container[_ngcontent-%COMP%] {\n    padding: var(--spacing-lg);\n  }\n  .not-found-content[_ngcontent-%COMP%] {\n    padding: var(--spacing-xl);\n  }\n  .error-code[_ngcontent-%COMP%] {\n    font-size: 4rem;\n  }\n  .not-found-icon[_ngcontent-%COMP%] {\n    font-size: 64px;\n    height: 64px;\n    width: 64px;\n  }\n  h2[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xl);\n  }\n  .action-buttons[_ngcontent-%COMP%]   .home-button[_ngcontent-%COMP%], .action-buttons[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .search-form[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .search-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .search-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .links-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 480px) {\n  .error-code[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n  .not-found-icon[_ngcontent-%COMP%] {\n    font-size: 48px;\n    height: 48px;\n    width: 48px;\n  }\n  h2[_ngcontent-%COMP%] {\n    font-size: var(--font-size-lg);\n  }\n  .error-message[_ngcontent-%COMP%] {\n    font-size: var(--font-size-md);\n  }\n}\n.not-found-content[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideUp 0.6s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .not-found-icon[_ngcontent-%COMP%], .error-code[_ngcontent-%COMP%], .not-found-content[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 500;\n  margin: 16px 0;\n  color: #333;\n}\n\np[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 24px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  padding: 8px 24px;\n}\nbutton[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFDaEI7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnRUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFFRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw0TEFDRTtFQUVGLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FBRko7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGdDQUFBO0VBQ0Esd0NBQUE7RUFDQSxpRkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtBQUhGOztBQU1BO0VBQ0U7SUFBVywwQkFBQTtFQUZYO0VBR0E7SUFBTSw0QkFBQTtFQUFOO0FBQ0Y7QUFFQTtFQUNFLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLFNBQUE7RUFDQSxpRkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGlEQUFBO0FBQUY7O0FBR0E7RUFDRTtJQUFLLHFCQUFBO0VBQ0w7RUFBQTtJQUFPLHVCQUFBO0VBR1A7QUFDRjtBQURBO0VBQ0UsK0JBQUE7RUFDQSx3Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUFHRjs7QUFBQTtFQUNFLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBQUE7RUFDRSwyQkFB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QSwyQkFBQTtFQXBDRjtFQXNDQTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFQXBDRjtBQUNGO0FBd0NBO0VBQ0U7OztJQUdFLGVBQUE7RUF0Q0Y7QUFDRjtBQXlDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBdkNGOztBQTBDQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQXZDRjs7QUEwQ0E7RUFDRSxpQkFBQTtBQXZDRjtBQXlDRTtFQUNFLGlCQUFBO0FBdkNKIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9kZXJuIDQwNCBOb3QgRm91bmQgQ29tcG9uZW50IFN0eWxlc1xuLm5vdC1mb3VuZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDIwMHB4KTtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy14bCk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWNvbG9yLWdyYXktNTApLCB3aGl0ZSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5vdC1mb3VuZC1jb250ZW50IHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy0zeGwpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXhsKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LTJ4bCk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ncmF5LTEwMCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAvLyBBbmltYXRlZCBiYWNrZ3JvdW5kIHBhdHRlcm5cbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IFxuICAgICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAyMCUgMjAlLCB2YXIoLS1jb2xvci1wcmltYXJ5LWxpZ2h0KSAxcHgsIHRyYW5zcGFyZW50IDFweCksXG4gICAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDgwJSA4MCUsIHZhcigtLWNvbG9yLXNlY29uZGFyeS1saWdodCkgMXB4LCB0cmFuc3BhcmVudCAxcHgpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMzBweCAzMHB4O1xuICAgIG9wYWNpdHk6IDAuMDU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbn1cblxuLm5vdC1mb3VuZC1pY29uIHtcbiAgZm9udC1zaXplOiA5NnB4O1xuICBoZWlnaHQ6IDk2cHg7XG4gIHdpZHRoOiA5NnB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIG1hcmdpbjogMCBhdXRvIHZhcigtLXNwYWNpbmctbGcpO1xuICBhbmltYXRpb246IGZsb2F0IDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1jb2xvci1wcmltYXJ5KSwgdmFyKC0tY29sb3Itc2Vjb25kYXJ5KSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbn1cblxuQGtleWZyYW1lcyBmbG9hdCB7XG4gIDAlLCAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH1cbiAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTsgfVxufVxuXG4uZXJyb3ItY29kZSB7XG4gIGZvbnQtc2l6ZTogOHJlbTtcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWNvbG9yLXByaW1hcnkpLCB2YXIoLS1jb2xvci1zZWNvbmRhcnkpKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBsaW5lLWhlaWdodDogMTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy1tZCk7XG4gIGFuaW1hdGlvbjogZ2xvdyAycyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbkBrZXlmcmFtZXMgZ2xvdyB7XG4gIDAlIHsgZmlsdGVyOiBicmlnaHRuZXNzKDEpOyB9XG4gIDEwMCUgeyBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTsgfVxufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTJ4bCk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zZW1pYm9sZCk7XG4gIG1hcmdpbjogMCAwIHZhcigtLXNwYWNpbmctbWQpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1wcmltYXJ5KTtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sZyk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmcteGwpO1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuXG4uZXJyb3Itc3VnZ2VzdGlvbnMge1xuICBtYXJnaW46IHZhcigtLXNwYWNpbmcteGwpIDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIFxuICBoMyB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGcpO1xuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zZW1pYm9sZCk7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtcHJpbWFyeSk7XG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy1tZCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBcbiAgICBsaSB7XG4gICAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXNtKSAwO1xuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcbiAgICAgIFxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJ8OiwpzCkyc7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zdWNjZXNzKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uYWN0aW9uLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IHZhcigtLXNwYWNpbmctbWQpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjaW5nLXhsKTtcbiAgXG4gIC5ob21lLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tY29sb3ItcHJpbWFyeSksIHZhcigtLWNvbG9yLXByaW1hcnktZGFyaykpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1tZCkgdmFyKC0tc3BhY2luZy0yeGwpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtbGcpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLW1kKTtcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtc2VtaWJvbGQpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLWJhc2UpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWxnKTtcbiAgICB9XG4gICAgXG4gICAgbWF0LWljb24ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1zcGFjaW5nLXhzKTtcbiAgICB9XG4gIH1cbiAgXG4gIC5iYWNrLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1ncmF5LTMwMCk7XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1zbSkgdmFyKC0tc3BhY2luZy14bCk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1tZCk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLWJhc2UpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcbiAgICB9XG4gIH1cbn1cblxuLy8gU2VhcmNoIHNlY3Rpb25cbi5zZWFyY2gtc2VjdGlvbiB7XG4gIG1hcmdpbjogdmFyKC0tc3BhY2luZy14bCkgMDtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWdyYXktNTApO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLWxnKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItZ3JheS0yMDApO1xuICBcbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxnKTtcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtc2VtaWJvbGQpO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXByaW1hcnkpO1xuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctbWQpO1xuICB9XG4gIFxuICAuc2VhcmNoLWZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcbiAgICBcbiAgICBpbnB1dCB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1tZCk7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1ncmF5LTMwMCk7XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLW1kKTtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLW1kKTtcbiAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tYmFzZSk7XG4gICAgICBcbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0tY29sb3ItcHJpbWFyeS1saWdodCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBidXR0b24ge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1kKSB2YXIoLS1zcGFjaW5nLWxnKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtbWQpO1xuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLWJhc2UpO1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeS1kYXJrKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gUG9wdWxhciBsaW5rc1xuLnBvcHVsYXItbGlua3Mge1xuICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjaW5nLXhsKTtcbiAgXG4gIGgzIHtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sZyk7XG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXNlbWlib2xkKTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1wcmltYXJ5KTtcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLW1kKTtcbiAgfVxuICBcbiAgLmxpbmtzLWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gICAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcbiAgICBcbiAgICBhIHtcbiAgICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctc20pIHZhcigtLXNwYWNpbmctbWQpO1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ncmF5LTIwMCk7XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLW1kKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLWJhc2UpO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeS1saWdodCk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LWRhcmspO1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFJlc3BvbnNpdmUgRGVzaWduXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm5vdC1mb3VuZC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xuICB9XG4gIFxuICAubm90LWZvdW5kLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmcteGwpO1xuICB9XG4gIFxuICAuZXJyb3ItY29kZSB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICB9XG4gIFxuICAubm90LWZvdW5kLWljb24ge1xuICAgIGZvbnQtc2l6ZTogNjRweDtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgd2lkdGg6IDY0cHg7XG4gIH1cbiAgXG4gIGgyIHtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14bCk7XG4gIH1cbiAgXG4gIC5hY3Rpb24tYnV0dG9ucyB7XG4gICAgLmhvbWUtYnV0dG9uLFxuICAgIC5iYWNrLWJ1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgfVxuICBcbiAgLnNlYXJjaC1mb3JtIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIFxuICAgIGlucHV0LFxuICAgIGJ1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbiAgXG4gIC5saW5rcy1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmVycm9yLWNvZGUge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgfVxuICBcbiAgLm5vdC1mb3VuZC1pY29uIHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIHdpZHRoOiA0OHB4O1xuICB9XG4gIFxuICBoMiB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGcpO1xuICB9XG4gIFxuICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbWQpO1xuICB9XG59XG5cbi8vIEFuaW1hdGlvbiBmb3IgdGhlIGVudGlyZSBjb21wb25lbnRcbi5ub3QtZm91bmQtY29udGVudCB7XG4gIGFuaW1hdGlvbjogc2xpZGVVcCAwLjZzIGVhc2Utb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlVXAge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuLy8gQWNjZXNzaWJpbGl0eSBpbXByb3ZlbWVudHNcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIC5ub3QtZm91bmQtaWNvbixcbiAgLmVycm9yLWNvZGUsXG4gIC5ub3QtZm91bmQtY29udGVudCB7XG4gICAgYW5pbWF0aW9uOiBub25lO1xuICB9XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDE2cHggMDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbnAge1xuICBjb2xvcjogIzY2NjtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuYnV0dG9uIHtcbiAgcGFkZGluZzogOHB4IDI0cHg7XG4gIFxuICBtYXQtaWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}


/***/ }),

/***/ 6071:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/product-card/product-card.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductCardComponent: () => (/* binding */ ProductCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _store_actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store/actions/cart.actions */ 6217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var _core_services_wishlist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/wishlist.service */ 7935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 640);
/* harmony import */ var _star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../star-rating/star-rating.component */ 3829);
/* harmony import */ var _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/truncate.pipe */ 980);

 // Import CartActions
 // Import Observable and of for isInWishlist$













function ProductCardComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" -", ctx_r0.discountPercentage, "% ");
  }
}
function ProductCardComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "NEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProductCardComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "FEATURED");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProductCardComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "BESTSELLER");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProductCardComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "SOLD OUT");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProductCardComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 45)(1, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductCardComponent_div_23_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r22.prevImage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "chevron_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductCardComponent_div_23_Template_button_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r24.nextImage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function ProductCardComponent_div_24_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductCardComponent_div_24_span_1_Template_span_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);
      const i_r27 = restoredCtx.index;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r28.setImage(i_r27, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r27 = ctx.index;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", i_r27 === ctx_r25.currentImageIndex);
  }
}
function ProductCardComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductCardComponent_div_24_span_1_Template, 1, 2, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r6.product.images);
  }
}
function ProductCardComponent_div_25_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Only ", ctx_r30.product.stockQuantity, " left");
  }
}
function ProductCardComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 51)(1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ProductCardComponent_div_25_span_3_Template, 2, 1, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", (ctx_r7.product.stockQuantity || 0) / 10 * 100, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.product == null ? null : ctx_r7.product.stockQuantity);
  }
}
function ProductCardComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r8.product.brand);
  }
}
function ProductCardComponent_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r9.product.category.name);
  }
}
function ProductCardComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-star-rating", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rating", ctx_r10.product.rating || 0)("reviewCount", (ctx_r10.product.reviews == null ? null : ctx_r10.product.reviews.length) || 0)("readOnly", true);
  }
}
function ProductCardComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 60)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "truncate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](3, 1, ctx_r11.product.description, 80));
  }
}
function ProductCardComponent_span_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, ctx_r12.product.regularPrice, ctx_r12.currencySymbol), " ");
  }
}
function ProductCardComponent_span_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Save ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, ctx_r13.discountAmount, ctx_r13.currencySymbol), " ");
  }
}
function ProductCardComponent_p_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 2, ctx_r14.product.price / ctx_r14.product.unitQuantity, ctx_r14.currencySymbol), "/", ctx_r14.product.unit, " ");
  }
}
function ProductCardComponent_div_43_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 66)(1, "mat-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "check_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const feature_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", feature_r32, " ");
  }
}
const _c0 = function () {
  return [];
};
function ProductCardComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductCardComponent_div_43_span_1_Template, 4, 1, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", (ctx_r15.product.keyFeatures == null ? null : ctx_r15.product.keyFeatures.slice(0, 2)) || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c0));
  }
}
function ProductCardComponent_div_44_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 70)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "local_shipping");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Free Shipping ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProductCardComponent_div_44_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 70)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "flash_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Fast Delivery ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProductCardComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductCardComponent_div_44_div_1_Template, 4, 0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ProductCardComponent_div_44_div_2_Template, 4, 0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r16.product == null ? null : ctx_r16.product.freeShipping);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r16.product == null ? null : ctx_r16.product.fastDelivery);
  }
}
function ProductCardComponent_mat_icon_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "add_shopping_cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProductCardComponent_mat_progress_spinner_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-progress-spinner", 71);
  }
}
function ProductCardComponent_span_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProductCardComponent_span_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Adding...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProductCardComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 72)(1, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductCardComponent_div_52_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r35.decrementQuantity($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ProductCardComponent_div_52_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r37.selectedQuantity = $event);
    })("change", function ProductCardComponent_div_52_Template_input_change_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r38.onQuantityChange());
    })("click", function ProductCardComponent_div_52_Template_input_click_4_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductCardComponent_div_52_Template_button_click_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r40.incrementQuantity($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r21.selectedQuantity === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r21.selectedQuantity)("max", ctx_r21.product.stockQuantity || 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r21.selectedQuantity >= (ctx_r21.product.stockQuantity || 1));
  }
}
const _c1 = function (a1) {
  return ["/products", a1];
};
const _c2 = function (a0) {
  return {
    "show-quantity": a0
  };
};
class ProductCardComponent {
  constructor(store,
  // Inject Store
  wishlistService,
  // Inject WishlistService
  cdr) {
    this.store = store;
    this.wishlistService = wishlistService;
    this.cdr = cdr;
    this.currencySymbol = '$';
    this.newThresholdDays = 7; // Days to consider a product "new"
    // Configuration for what to show
    this.showNewBadge = true;
    this.showFeaturedBadge = true;
    this.showBestsellerBadge = true;
    this.showSoldOutBadge = true;
    this.showImageHoverControls = true;
    this.showImageIndicators = true;
    this.showStockIndicator = true;
    this.showRating = true;
    this.showShortDescription = false;
    this.showKeyFeatures = false;
    this.showShippingInfo = false;
    this.cycleImagesOnHover = true;
    // New Inputs for layout and specific button visibility
    this.size = 'medium';
    this.showBuyNowButton = true;
    this.showQuantityControl = true; // For controlling the +/- quantity input
    this.layout = 'vertical';
    // Event Emitters - Renamed to avoid conflict with method names
    this.productAddedToCart = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.productAddedToWishlist = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.productCompared = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.productViewed = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter(); // For quick view
    this.productBoughtNow = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.isNew = false;
    this.isBestSeller = false;
    this.isLowStock = false;
    this.discountPercentage = null;
    this.discountAmount = null;
    this.currentImageIndex = 0;
    this.addingToCart = false;
    this.addingToWishlistState = false; // Renamed to avoid conflict
    this.uiShowQuantitySelector = false; // Renamed to avoid conflict
    this.selectedQuantity = 1;
    this.isInWishlist$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(false); // Default to false
    this.isInCompare$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(false); // Placeholder for compare feature
  }

  ngOnInit() {
    this.updateProductFlags();
    this.calculateDiscount();
    if (this.product && this.product.id) {
      // Ensure product and product.id exist
      this.isInWishlist$ = this.wishlistService.isInWishlist(this.product.id);
      // this.isInCompare$ = this.compareService.isInCompare(this.product.id); // If you have a compare service
    }
  }

  ngOnChanges(changes) {
    if (changes['product'] && this.product && this.product.id) {
      // Ensure product and product.id exist
      this.updateProductFlags();
      this.calculateDiscount();
      this.selectedQuantity = 1; // Reset quantity when product changes
      this.uiShowQuantitySelector = false;
      this.isInWishlist$ = this.wishlistService.isInWishlist(this.product.id);
      // this.isInCompare$ = this.compareService.isInCompare(this.product.id);
      this.cdr.markForCheck();
    }
  }
  updateProductFlags() {
    if (!this.product) return;
    const now = new Date();
    const productDate = this.product.createdAt ? new Date(this.product.createdAt) : now;
    const diffTime = Math.abs(now.getTime() - productDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    this.isNew = diffDays <= (this.newThresholdDays || 7);
    this.isBestSeller = !!this.product.featured || (this.product.rating || 0) >= 4.5 && (this.product.reviews?.length || 0) >= 50; // Adjusted review count
    this.isLowStock = (this.product.stockQuantity || 0) > 0 && (this.product.stockQuantity || 0) <= 10;
  }
  calculateDiscount() {
    if (!this.product) {
      this.discountPercentage = null;
      this.discountAmount = null;
      return;
    }
    if (this.product.regularPrice && this.product.regularPrice > this.product.price) {
      this.discountPercentage = Math.round((this.product.regularPrice - this.product.price) / this.product.regularPrice * 100);
      this.discountAmount = this.product.regularPrice - this.product.price;
    } else {
      this.discountPercentage = null;
      this.discountAmount = null;
    }
  }
  // Mouse enter/leave handlers for image cycling
  onMouseEnter() {
    if (this.cycleImagesOnHover) {
      this.startImageCycle();
    }
  }
  onMouseLeave() {
    if (this.cycleImagesOnHover) {
      this.stopImageCycle();
    }
  }
  startImageCycle() {
    if (this.cycleImagesOnHover && this.product?.images && this.product.images.length > 1) {
      this.stopImageCycle(); // Clear existing interval
      this.imageChangeInterval = setInterval(() => {
        if (this.product.images && this.product.images.length > 1) {
          this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length;
          this.cdr.markForCheck(); // Trigger change detection
        }
      }, 2000); // Change image every 2 seconds
    }
  }

  stopImageCycle() {
    if (this.imageChangeInterval) {
      clearInterval(this.imageChangeInterval);
      this.imageChangeInterval = null;
    }
  }
  // Image navigation
  prevImage(event) {
    event.stopPropagation();
    if (this.product?.images && this.product.images.length > 0) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.product.images.length) % this.product.images.length;
    }
  }
  nextImage(event) {
    event.stopPropagation();
    if (this.product?.images && this.product.images.length > 0) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length;
    }
  }
  setImage(index, event) {
    event.stopPropagation();
    this.currentImageIndex = index;
  }
  onImageError(event) {
    const imgElement = event.target;
    imgElement.src = 'assets/images/placeholder.png'; // Fallback image
  }
  // Action Methods
  addToCartHandler(event) {
    event.stopPropagation();
    if (!this.product || (this.product.stockQuantity || 0) === 0 || this.addingToCart) return;
    this.addingToCart = true;
    const cartItem = {
      productId: this.product.id,
      quantity: this.selectedQuantity,
      name: this.product.name,
      price: this.product.discountPrice || this.product.price,
      unitPrice: this.product.discountPrice || this.product.price,
      image: this.product.imageUrl || this.product.images && this.product.images[0]?.url || ''
    };
    // Simulate API call
    setTimeout(() => {
      this.store.dispatch(_store_actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__.addToCart({
        item: cartItem
      }));
      this.productAddedToCart.emit({
        product: this.product,
        quantity: this.selectedQuantity
      });
      this.addingToCart = false;
      this.uiShowQuantitySelector = false; // Hide quantity selector after adding
      this.selectedQuantity = 1; // Reset quantity
      this.cdr.markForCheck();
    }, 500);
  }
  addToWishlistHandler(event) {
    event.stopPropagation();
    if (!this.product || this.addingToWishlistState) return;
    this.addingToWishlistState = true;
    // Assuming WishlistService has a method like toggleWishlistItem or add/remove
    // For now, let's assume toggleWishlist exists and works as intended.
    // If toggleWishlist is not the correct method, this needs to be adjusted based on WishlistService's API.
    this.wishlistService.toggleWishlist(this.product.id).subscribe(() => {
      this.productAddedToWishlist.emit(this.product);
      this.addingToWishlistState = false;
      if (this.product && this.product.id) {
        // Re-check after ensuring product.id exists
        this.isInWishlist$ = this.wishlistService.isInWishlist(this.product.id);
      }
      this.cdr.markForCheck();
    });
  }
  compareProductHandler(event) {
    event.stopPropagation();
    if (!this.product) return;
    this.productCompared.emit(this.product);
    // Add logic for compare service if available
    // this.isInCompare$ = this.compareService.toggleCompare(this.product.id);
    this.cdr.markForCheck();
  }
  viewProductHandler(event) {
    event.stopPropagation();
    if (!this.product) return;
    this.productViewed.emit(this.product);
    // Logic for opening a quick view modal, for example
  }

  buyNowHandler(event) {
    event.stopPropagation();
    if (!this.product || (this.product.stockQuantity || 0) === 0) return;
    const cartItem = {
      productId: this.product.id,
      quantity: this.selectedQuantity,
      name: this.product.name,
      price: this.product.discountPrice || this.product.price,
      unitPrice: this.product.discountPrice || this.product.price,
      image: this.product.imageUrl || this.product.images && this.product.images[0]?.url || ''
    };
    this.store.dispatch(_store_actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__.addToCart({
      item: cartItem
    }));
    this.productBoughtNow.emit({
      product: this.product,
      quantity: this.selectedQuantity
    });
    // Typically, you'd navigate to checkout here or dispatch another action
    // If 'navigateToCheckout' is not a standard action, you might need to implement custom navigation
    // or a specific NGRX effect that handles this. For now, commenting out if it causes issues.
    // this.store.dispatch(CartActions.navigateToCheckout()); 
    console.log('Buy Now: Navigating to checkout (placeholder)');
    this.cdr.markForCheck();
  }
  toggleQuantitySelectorHandler(event) {
    event.stopPropagation();
    if ((this.product?.stockQuantity || 0) === 0) return;
    this.uiShowQuantitySelector = !this.uiShowQuantitySelector;
  }
  onQuantityChange() {
    if (this.selectedQuantity < 1) {
      this.selectedQuantity = 1;
    }
    if (this.product?.stockQuantity && this.selectedQuantity > this.product.stockQuantity) {
      this.selectedQuantity = this.product.stockQuantity;
    }
  }
  incrementQuantity(event) {
    event.stopPropagation();
    if (this.product?.stockQuantity && this.selectedQuantity < this.product.stockQuantity) {
      this.selectedQuantity++;
    }
  }
  decrementQuantity(event) {
    event.stopPropagation();
    if (this.selectedQuantity > 1) {
      this.selectedQuantity--;
    }
  }
  get currentDisplayImage() {
    if (this.product?.images && this.product.images.length > 0 && this.product.images[this.currentImageIndex]?.url) {
      return this.product.images[this.currentImageIndex].url;
    }
    return this.product?.imageUrl || 'assets/images/placeholder.png';
  }
  get stockStatusClass() {
    if ((this.product?.stockQuantity || 0) === 0) return 'out-of-stock';
    if ((this.product?.stockQuantity || 0) <= 10 && (this.product?.stockQuantity || 0) > 0) return 'low-stock'; // Fixed condition
    return 'in-stock';
  }
  get cardClasses() {
    const classes = ['product-card'];
    if (this.product?.featured) {
      classes.push('product-card--featured');
    }
    if (this.isNew) {
      classes.push('product-card--new');
    }
    if (this.isBestSeller) {
      classes.push('product-card--bestseller');
    }
    if ((this.product?.stockQuantity || 0) === 0) {
      classes.push('product-card--out-of-stock');
    }
    return classes;
  }
  static {
    this.ɵfac = function ProductCardComponent_Factory(t) {
      return new (t || ProductCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_wishlist_service__WEBPACK_IMPORTED_MODULE_1__.WishlistService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ProductCardComponent,
      selectors: [["app-product-card"]],
      inputs: {
        product: "product",
        currencySymbol: "currencySymbol",
        newThresholdDays: "newThresholdDays",
        showNewBadge: "showNewBadge",
        showFeaturedBadge: "showFeaturedBadge",
        showBestsellerBadge: "showBestsellerBadge",
        showSoldOutBadge: "showSoldOutBadge",
        showImageHoverControls: "showImageHoverControls",
        showImageIndicators: "showImageIndicators",
        showStockIndicator: "showStockIndicator",
        showRating: "showRating",
        showShortDescription: "showShortDescription",
        showKeyFeatures: "showKeyFeatures",
        showShippingInfo: "showShippingInfo",
        cycleImagesOnHover: "cycleImagesOnHover",
        size: "size",
        showBuyNowButton: "showBuyNowButton",
        showQuantityControl: "showQuantityControl",
        layout: "layout"
      },
      outputs: {
        productAddedToCart: "productAddedToCart",
        productAddedToWishlist: "productAddedToWishlist",
        productCompared: "productCompared",
        productViewed: "productViewed",
        productBoughtNow: "productBoughtNow"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
      decls: 55,
      vars: 56,
      consts: [[1, "product-card-item", 3, "ngClass", "mouseenter", "mouseleave"], [1, "product-card-header"], [1, "product-image-link", 3, "routerLink"], ["mat-card-image", "", "loading", "lazy", 1, "product-image", 3, "src", "alt", "error"], [1, "badges-container"], ["class", "badge discount-badge", 4, "ngIf"], ["class", "badge new-badge", 4, "ngIf"], ["class", "badge featured-badge", 4, "ngIf"], ["class", "badge bestseller-badge", 4, "ngIf"], ["class", "badge sold-out-badge", 4, "ngIf"], [1, "quick-actions"], ["mat-icon-button", "", "matTooltip", "Add to Wishlist", "aria-label", "Add to wishlist", 1, "action-btn", 3, "disabled", "click"], ["mat-icon-button", "", "matTooltip", "Quick View", "aria-label", "Quick view product", 1, "action-btn", 3, "click"], ["mat-icon-button", "", "aria-label", "Compare product", 1, "action-btn", 3, "matTooltip", "click"], ["class", "image-hover-controls", 4, "ngIf"], ["class", "image-indicators", 4, "ngIf"], ["class", "stock-indicator", 4, "ngIf"], [1, "product-card-content"], [1, "product-meta"], ["class", "product-brand", 4, "ngIf"], ["class", "product-category", 4, "ngIf"], [1, "product-name-link", 3, "routerLink"], [1, "product-name", 3, "matTooltip"], ["class", "product-rating", 4, "ngIf"], ["class", "product-description", 4, "ngIf"], [1, "product-price-container"], [1, "product-price"], [1, "current-price"], ["class", "regular-price", 4, "ngIf"], ["class", "discount-amount savings", 4, "ngIf"], ["class", "price-per-unit", 4, "ngIf"], ["class", "product-features", 4, "ngIf"], ["class", "shipping-info", 4, "ngIf"], [1, "product-card-actions", 3, "ngClass"], [1, "main-actions"], ["mat-flat-button", "", "color", "primary", 1, "add-to-cart-btn", 3, "disabled", "click"], [4, "ngIf"], ["mode", "indeterminate", "diameter", "20", 4, "ngIf"], ["class", "quantity-controls", 4, "ngIf"], ["mat-stroked-button", "", 1, "buy-now-btn", 3, "disabled", "click"], [1, "badge", "discount-badge"], [1, "badge", "new-badge"], [1, "badge", "featured-badge"], [1, "badge", "bestseller-badge"], [1, "badge", "sold-out-badge"], [1, "image-hover-controls"], ["mat-icon-button", "", "aria-label", "Previous image", 1, "hover-control", "prev", 3, "click"], ["mat-icon-button", "", "aria-label", "Next image", 1, "hover-control", "next", 3, "click"], [1, "image-indicators"], ["class", "indicator-dot", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "indicator-dot", 3, "click"], [1, "stock-indicator"], [1, "stock-bar"], [1, "stock-fill"], ["class", "stock-text", 4, "ngIf"], [1, "stock-text"], [1, "product-brand"], [1, "product-category"], [1, "product-rating"], [3, "rating", "reviewCount", "readOnly"], [1, "product-description"], [1, "regular-price"], [1, "discount-amount", "savings"], [1, "price-per-unit"], [1, "product-features"], ["class", "feature", 4, "ngFor", "ngForOf"], [1, "feature"], [1, "feature-icon"], [1, "shipping-info"], ["class", "shipping-item", 4, "ngIf"], [1, "shipping-item"], ["mode", "indeterminate", "diameter", "20"], [1, "quantity-controls"], ["mat-icon-button", "", 3, "disabled", "click"], ["type", "number", "min", "1", 1, "quantity-input", 3, "ngModel", "max", "ngModelChange", "change", "click"]],
      template: function ProductCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseenter", function ProductCardComponent_Template_mat_card_mouseenter_0_listener() {
            return ctx.onMouseEnter();
          })("mouseleave", function ProductCardComponent_Template_mat_card_mouseleave_0_listener() {
            return ctx.onMouseLeave();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "a", 2)(3, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("error", function ProductCardComponent_Template_img_error_3_listener($event) {
            return ctx.onImageError($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ProductCardComponent_div_5_Template, 2, 1, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ProductCardComponent_div_6_Template, 2, 0, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ProductCardComponent_div_7_Template, 2, 0, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ProductCardComponent_div_8_Template, 2, 0, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ProductCardComponent_div_9_Template, 2, 0, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 10)(11, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductCardComponent_Template_button_click_11_listener($event) {
            return ctx.addToWishlistHandler($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductCardComponent_Template_button_click_15_listener($event) {
            return ctx.viewProductHandler($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "visibility");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductCardComponent_Template_button_click_18_listener($event) {
            return ctx.compareProductHandler($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](22, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, ProductCardComponent_div_23_Template, 7, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, ProductCardComponent_div_24_Template, 2, 1, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, ProductCardComponent_div_25_Template, 4, 3, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-card-content", 17)(27, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, ProductCardComponent_span_28_Template, 2, 1, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, ProductCardComponent_span_29_Template, 2, 1, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "a", 21)(31, "h3", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, ProductCardComponent_div_33_Template, 2, 3, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, ProductCardComponent_div_34_Template, 4, 4, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 25)(36, "p", 26)(37, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](39, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, ProductCardComponent_span_40_Template, 3, 4, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, ProductCardComponent_span_41_Template, 3, 4, "span", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, ProductCardComponent_p_42_Template, 3, 5, "p", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, ProductCardComponent_div_43_Template, 2, 2, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, ProductCardComponent_div_44_Template, 3, 2, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "mat-card-actions", 33)(46, "div", 34)(47, "button", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductCardComponent_Template_button_click_47_listener($event) {
            return ctx.addToCartHandler($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, ProductCardComponent_mat_icon_48_Template, 2, 0, "mat-icon", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](49, ProductCardComponent_mat_progress_spinner_49_Template, 1, 0, "mat-progress-spinner", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, ProductCardComponent_span_50_Template, 2, 0, "span", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](51, ProductCardComponent_span_51_Template, 2, 0, "span", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](52, ProductCardComponent_div_52_Template, 8, 4, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "button", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductCardComponent_Template_button_click_53_listener($event) {
            return ctx.buyNowHandler($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, " Buy Now ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("out-of-stock", (ctx.product.stockQuantity || 0) === 0)("featured", ctx.product.featured);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.cardClasses);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](50, _c1, ctx.product.id));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.currentDisplayImage, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", ctx.product.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.discountPercentage !== null && ctx.discountPercentage > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isNew && ctx.showNewBadge);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.product == null ? null : ctx.product.featured) && ctx.showFeaturedBadge);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isBestSeller && ctx.showBestsellerBadge);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((ctx.product == null ? null : ctx.product.stockQuantity) || 0) === 0 && ctx.showSoldOutBadge);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.addingToWishlistState);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 41, ctx.isInWishlist$) ? "favorite" : "favorite_border");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](19, 43, ctx.isInCompare$) ? "Remove from compare" : "Add to compare");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](22, 45, ctx.isInCompare$) ? "check_circle" : "compare_arrows");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.product == null ? null : ctx.product.images) && ((ctx.product.images == null ? null : ctx.product.images.length) || 0) > 1 && ctx.showImageHoverControls);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.product == null ? null : ctx.product.images) && ((ctx.product.images == null ? null : ctx.product.images.length) || 0) > 1 && ctx.showImageIndicators);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showStockIndicator && (ctx.product == null ? null : ctx.product.stockQuantity) !== undefined && ((ctx.product == null ? null : ctx.product.stockQuantity) || 0) > 0 && ((ctx.product == null ? null : ctx.product.stockQuantity) || 0) <= 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.product == null ? null : ctx.product.brand);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.product.category && ctx.product.category.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](52, _c1, ctx.product.id));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("matTooltip", ctx.product.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.product.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showRating && (ctx.product == null ? null : ctx.product.rating) !== undefined && ((ctx.product == null ? null : ctx.product.rating) || 0) > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showShortDescription);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](39, 47, ctx.product.discountPrice || ctx.product.price || 0, ctx.currencySymbol));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.product == null ? null : ctx.product.regularPrice) && (ctx.product == null ? null : ctx.product.price) && ((ctx.product == null ? null : ctx.product.regularPrice) || 0) > ((ctx.product == null ? null : ctx.product.price) || 0));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.discountAmount !== null && ctx.discountAmount > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (ctx.product == null ? null : ctx.product.unit) && (ctx.product == null ? null : ctx.product.unitQuantity) && (ctx.product == null ? null : ctx.product.price));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showKeyFeatures && (ctx.product == null ? null : ctx.product.keyFeatures) && ((ctx.product.keyFeatures == null ? null : ctx.product.keyFeatures.length) || 0) > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showShippingInfo);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](54, _c2, ctx.uiShowQuantitySelector));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", (ctx.product.stockQuantity || 0) === 0 || ctx.addingToCart);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.addingToCart);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.addingToCart);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.addingToCart);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.addingToCart);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.uiShowQuantitySelector && ((ctx.product == null ? null : ctx.product.stockQuantity) || 0) > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", (ctx.product.stockQuantity || 0) === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatIconButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardImage, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinner, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltip, _star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_2__.StarRatingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe, _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_3__.TruncatePipe],
      styles: ["[_nghost-%COMP%] {\n  --card-transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  --card-hover-scale: 1.02;\n  --card-image-hover-scale: 1.08;\n  --card-border-hover-color: rgba(37, 99, 235, 0.3);\n  --card-box-shadow:\n    0 4px 6px rgba(0, 0, 0, 0.05),\n    0 1px 3px rgba(0, 0, 0, 0.1);\n  --card-box-shadow-hover:\n    0 20px 25px -5px rgba(0, 0, 0, 0.1),\n    0 10px 10px -5px rgba(0, 0, 0, 0.04),\n    0 0 0 2px var(--card-border-hover-color);\n  --card-gradient-overlay: linear-gradient(\n    to top,\n    rgba(0, 0, 0, 0.7) 0%,\n    rgba(0, 0, 0, 0.3) 40%,\n    transparent 100%\n  );\n  --primary: #2563eb;\n  --primary-light: #3b82f6;\n  --primary-dark: #1d4ed8;\n  --success: #10b981;\n  --warning: #f59e0b;\n  --error: #ef4444;\n  --gray-50: #f9fafb;\n  --gray-100: #f3f4f6;\n  --gray-200: #e5e7eb;\n  --gray-300: #d1d5db;\n  --gray-400: #9ca3af;\n  --gray-500: #6b7280;\n  --gray-600: #4b5563;\n  --gray-700: #374151;\n  --gray-800: #1f2937;\n  --gray-900: #111827;\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.product-card[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  border-radius: 18px;\n  box-shadow: 0 2px 16px rgba(37, 99, 235, 0.07);\n  border: 1px solid #e5e7eb;\n  transition: box-shadow 0.2s, transform 0.2s;\n  will-change: transform, box-shadow;\n  isolation: isolate;\n}\n.product-card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 16px;\n  background: radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.1), transparent 70%);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  pointer-events: none;\n  z-index: -1;\n}\n.product-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 32px rgba(37, 99, 235, 0.13);\n  transform: translateY(-4px) scale(1.02);\n  border-color: rgba(37, 99, 235, 0.2);\n}\n.product-card[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.product-card[_ngcontent-%COMP%]:hover   .product-image[_ngcontent-%COMP%] {\n  transform: scale(var(--card-image-hover-scale));\n}\n.product-card[_ngcontent-%COMP%]:hover   .quick-actions[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(0);\n}\n.product-card[_ngcontent-%COMP%]:hover   .product-badges[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.product-card.featured[_ngcontent-%COMP%] {\n  border: 2px solid var(--primary);\n  background: linear-gradient(135deg, rgba(37, 99, 235, 0.02) 0%, transparent 100%);\n}\n.product-card.featured[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 0;\n  height: 0;\n  border-left: 30px solid transparent;\n  border-top: 30px solid var(--primary);\n  z-index: 2;\n}\n.product-card.out-of-stock[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.product-card.out-of-stock[_ngcontent-%COMP%]   .product-image-container[_ngcontent-%COMP%]::after {\n  content: \"OUT OF STOCK\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) rotate(-15deg);\n  background: rgba(239, 68, 68, 0.9);\n  color: white;\n  padding: 8px 16px;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 14px;\n  letter-spacing: 1px;\n  z-index: 3;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n.product-card.new-arrival[_ngcontent-%COMP%]   .product-image-container[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -10px;\n  left: -10px;\n  right: -10px;\n  bottom: -10px;\n  background: conic-gradient(from 45deg, var(--primary), var(--success), var(--primary));\n  border-radius: 20px;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_rotate 3s linear infinite;\n}\n.product-card.best-seller[_ngcontent-%COMP%] {\n  box-shadow: var(--card-box-shadow), 0 0 0 2px rgba(255, 215, 0, 0.3);\n}\n\n.product-badges[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  z-index: 10;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  max-width: calc(100% - 80px);\n}\n.product-badges[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  transition: transform 0.2s ease;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.product-badges[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.product-badges[_ngcontent-%COMP%]   .badge.discount-badge[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f59e0b, #d97706);\n  color: white;\n}\n.product-badges[_ngcontent-%COMP%]   .badge.new-badge[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #10b981, #059669);\n  color: white;\n}\n.product-badges[_ngcontent-%COMP%]   .badge.bestseller-badge[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #8b5cf6, #7c3aed);\n  color: white;\n}\n.product-badges[_ngcontent-%COMP%]   .badge.featured-badge[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #2563eb, #1d4ed8);\n  color: white;\n}\n.product-badges[_ngcontent-%COMP%]   .badge.sold-out-badge[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ef4444, #dc2626);\n  color: white;\n}\n.product-badges[_ngcontent-%COMP%]   .badge.low-stock-badge[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f97316, #ea580c);\n  color: white;\n}\n\n.quick-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  z-index: 10;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  opacity: 0;\n  transform: translateX(20px);\n  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n.quick-actions[_ngcontent-%COMP%]   .quick-action-btn[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  transition: all 0.2s ease;\n}\n.quick-actions[_ngcontent-%COMP%]   .quick-action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--gray-600);\n  transition: color 0.2s ease;\n}\n.quick-actions[_ngcontent-%COMP%]   .quick-action-btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  background: white;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);\n}\n.quick-actions[_ngcontent-%COMP%]   .quick-action-btn[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.quick-actions[_ngcontent-%COMP%]   .quick-action-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary);\n}\n.quick-actions[_ngcontent-%COMP%]   .quick-action-btn.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.quick-actions[_ngcontent-%COMP%]   .quick-action-btn.active[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n}\n.quick-actions[_ngcontent-%COMP%]   .quick-action-btn.wishlist-btn.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.quick-actions[_ngcontent-%COMP%]   .quick-action-btn.wishlist-btn.active[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  border-color: rgba(239, 68, 68, 0.2);\n}\n\n.product-image-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 240px;\n  overflow: hidden;\n  cursor: pointer;\n  border-radius: 14px;\n  background: #f1f5f9;\n}\n.product-image-container[_ngcontent-%COMP%]   .image-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: var(--card-gradient-overlay);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  z-index: 1;\n}\n.product-image-container[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 14px;\n  object-fit: cover;\n  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  will-change: transform;\n  background: #f1f5f9;\n}\n.product-image-container[_ngcontent-%COMP%]   .image-indicators[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 12px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  gap: 6px;\n  z-index: 2;\n}\n.product-image-container[_ngcontent-%COMP%]   .image-indicators[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.5);\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.product-image-container[_ngcontent-%COMP%]   .image-indicators[_ngcontent-%COMP%]   .indicator.active[_ngcontent-%COMP%] {\n  background: white;\n  transform: scale(1.2);\n}\n.product-image-container[_ngcontent-%COMP%]   .image-indicators[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.8);\n}\n.product-image-container[_ngcontent-%COMP%]   .stock-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 12px;\n  left: 12px;\n  right: 12px;\n  background: rgba(0, 0, 0, 0.8);\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n  border-radius: 8px;\n  padding: 8px;\n  color: white;\n  font-size: 12px;\n  z-index: 2;\n}\n.product-image-container[_ngcontent-%COMP%]   .stock-indicator[_ngcontent-%COMP%]   .stock-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 4px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 2px;\n  margin-bottom: 4px;\n  overflow: hidden;\n}\n.product-image-container[_ngcontent-%COMP%]   .stock-indicator[_ngcontent-%COMP%]   .stock-bar[_ngcontent-%COMP%]   .stock-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: linear-gradient(90deg, #ef4444, #f97316, #10b981);\n  border-radius: 2px;\n  transition: width 0.3s ease;\n}\n.product-image-container[_ngcontent-%COMP%]   .stock-indicator[_ngcontent-%COMP%]   .stock-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.product-image-container[_ngcontent-%COMP%]:hover   .image-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.product-content[_ngcontent-%COMP%] {\n  padding: 18px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.product-content[_ngcontent-%COMP%]   .product-meta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.product-content[_ngcontent-%COMP%]   .product-meta[_ngcontent-%COMP%]   .product-category[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #2563eb;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.product-content[_ngcontent-%COMP%]   .product-meta[_ngcontent-%COMP%]   .product-brand[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #64748b;\n  font-weight: 500;\n}\n.product-content[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0;\n  cursor: pointer;\n  transition: color 0.2s ease;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.product-content[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%]:hover {\n  color: #2563eb;\n}\n.product-content[_ngcontent-%COMP%]   .product-rating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.product-content[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%]   .current-price[_ngcontent-%COMP%] {\n  color: #2563eb;\n  font-size: 1.2rem;\n  font-weight: 700;\n}\n.product-content[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%]   .regular-price[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-size: 1rem;\n  text-decoration: line-through;\n}\n.product-content[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%]   .savings[_ngcontent-%COMP%] {\n  color: #10b981;\n  font-size: 0.95rem;\n}\n.product-content[_ngcontent-%COMP%]   .product-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.product-content[_ngcontent-%COMP%]   .product-features[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.95rem;\n  color: #475569;\n}\n.product-content[_ngcontent-%COMP%]   .product-features[_ngcontent-%COMP%]   .feature[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.product-content[_ngcontent-%COMP%]   .shipping-info[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.product-content[_ngcontent-%COMP%]   .shipping-info[_ngcontent-%COMP%]   .shipping-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.9rem;\n  color: #10b981;\n  font-weight: 500;\n}\n.product-content[_ngcontent-%COMP%]   .shipping-info[_ngcontent-%COMP%]   .shipping-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.product-actions[_ngcontent-%COMP%] {\n  padding: 16px 20px 20px;\n  border-top: 1px solid var(--gray-100);\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.product-actions[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 44px;\n  background: linear-gradient(90deg, #2563eb 60%, #3b82f6 100%);\n  color: #fff;\n  border-radius: 10px;\n  font-weight: 600;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  position: relative;\n  overflow: hidden;\n}\n.product-actions[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);\n  transition: left 0.5s ease;\n}\n.product-actions[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]:hover {\n  background: #1d4ed8;\n  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.2);\n}\n.product-actions[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.product-actions[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.product-actions[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]:disabled {\n  background: #e5e7eb;\n  color: #64748b;\n}\n.product-actions[_ngcontent-%COMP%]   .add-to-cart-btn.loading[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.product-actions[_ngcontent-%COMP%]   .add-to-cart-btn.loading[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]     circle {\n  stroke: white;\n}\n.product-actions[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.product-actions[_ngcontent-%COMP%]   .quantity-controls[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.product-actions[_ngcontent-%COMP%]   .buy-now-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  background: transparent;\n  border-radius: 10px;\n  border: 2px solid #2563eb;\n  color: #2563eb;\n  font-weight: 600;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.product-actions[_ngcontent-%COMP%]   .buy-now-btn[_ngcontent-%COMP%]:hover {\n  background: #2563eb;\n  color: #fff;\n}\n.product-actions[_ngcontent-%COMP%]   .buy-now-btn[_ngcontent-%COMP%]:disabled {\n  border-color: #e5e7eb;\n  color: #64748b;\n}\n\n.loading-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.9);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 20;\n  border-radius: 16px;\n}\n.loading-overlay[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]     circle {\n  stroke: var(--primary);\n}\n\n@media (max-width: 900px) {\n  .product-card[_ngcontent-%COMP%] {\n    border-radius: 12px;\n  }\n  .product-card[_ngcontent-%COMP%]:hover {\n    transform: translateY(-2px) scale(1.01);\n  }\n  .product-image-container[_ngcontent-%COMP%] {\n    height: 180px;\n  }\n  .quick-actions[_ngcontent-%COMP%] {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  .quick-actions[_ngcontent-%COMP%]   .quick-action-btn[_ngcontent-%COMP%] {\n    width: 36px;\n    height: 36px;\n  }\n  .product-content[_ngcontent-%COMP%] {\n    padding: 12px;\n    gap: 8px;\n  }\n  .product-content[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .product-content[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%]   .current-price[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .product-actions[_ngcontent-%COMP%] {\n    padding: 8px 12px 12px;\n  }\n  .product-actions[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%] {\n    height: 36px;\n    font-size: 0.95rem;\n  }\n}\n.product-card--small[_ngcontent-%COMP%]   .product-image-container[_ngcontent-%COMP%] {\n  height: 180px;\n}\n.product-card--small[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%] {\n  padding: 12px;\n  gap: 8px;\n}\n.product-card--small[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.product-card--small[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%]   .price-main[_ngcontent-%COMP%]   .current-price[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.product-card--small[_ngcontent-%COMP%]   .product-actions[_ngcontent-%COMP%] {\n  padding: 8px 12px 12px;\n}\n.product-card--small[_ngcontent-%COMP%]   .product-actions[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%] {\n  height: 36px;\n  font-size: 12px;\n}\n\n.product-card--large[_ngcontent-%COMP%]   .product-image-container[_ngcontent-%COMP%] {\n  height: 300px;\n}\n.product-card--large[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%] {\n  padding: 24px;\n  gap: 16px;\n}\n.product-card--large[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.product-card--large[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%]   .price-main[_ngcontent-%COMP%]   .current-price[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.product-card--large[_ngcontent-%COMP%]   .product-actions[_ngcontent-%COMP%] {\n  padding: 20px 24px 24px;\n}\n.product-card--large[_ngcontent-%COMP%]   .product-actions[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%] {\n  height: 48px;\n  font-size: 16px;\n}\n\n.product-card--horizontal[_ngcontent-%COMP%] {\n  flex-direction: row;\n  height: 200px;\n}\n.product-card--horizontal[_ngcontent-%COMP%]   .product-image-container[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 100%;\n  flex-shrink: 0;\n}\n.product-card--horizontal[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 16px;\n}\n.product-card--horizontal[_ngcontent-%COMP%]   .product-actions[_ngcontent-%COMP%] {\n  width: 200px;\n  flex-shrink: 0;\n  border-top: none;\n  border-left: 1px solid var(--gray-100);\n  justify-content: center;\n}\n.product-card--horizontal[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%] {\n  position: static;\n  opacity: 1;\n  transform: none;\n  flex-direction: row;\n  margin-top: auto;\n}\n\n@keyframes _ngcontent-%COMP%_rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .product-card[_ngcontent-%COMP%] {\n    background: var(--gray-800);\n    border-color: var(--gray-700);\n    color: white;\n  }\n  .product-card[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n    color: white;\n  }\n  .product-card[_ngcontent-%COMP%]   .product-content[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%]   .price-main[_ngcontent-%COMP%]   .current-price[_ngcontent-%COMP%] {\n    color: #60a5fa;\n  }\n  .product-card[_ngcontent-%COMP%]   .product-actions[_ngcontent-%COMP%] {\n    border-color: var(--gray-700);\n  }\n  .product-card[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%]   .quick-action-btn[_ngcontent-%COMP%] {\n    background: rgba(31, 41, 55, 0.95);\n    border-color: rgba(75, 85, 99, 0.2);\n  }\n}\n.product-card[_ngcontent-%COMP%]:focus-within {\n  outline: 2px solid var(--primary);\n  outline-offset: 2px;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: 2px solid var(--primary);\n  outline-offset: 2px;\n}\n\n@media print {\n  .product-card[_ngcontent-%COMP%] {\n    break-inside: avoid;\n    box-shadow: none;\n    border: 1px solid var(--gray-300);\n  }\n  .product-card[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%], .product-card[_ngcontent-%COMP%]   .product-actions[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJvZHVjdC1jYXJkL3Byb2R1Y3QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVFLGdFQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLGlEQUFBO0VBQ0E7O2dDQUFBO0VBR0E7Ozs0Q0FBQTtFQUlBOzs7OztHQUFBO0VBUUEsa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFFQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0FBSkY7QUFPRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLHVGQUFBO0VBS0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBVEo7QUFZRTtFQUNFLDhDQUFBO0VBQ0EsdUNBQUE7RUFDQSxvQ0FBQTtBQVZKO0FBWUk7RUFDRSxVQUFBO0FBVk47QUFhSTtFQUNFLCtDQUFBO0FBWE47QUFjSTtFQUNFLFVBQUE7RUFDQSx3QkFBQTtBQVpOO0FBZ0JNO0VBQ0Usc0JBQUE7QUFkUjtBQW9CRTtFQUNFLGdDQUFBO0VBQ0EsaUZBQUE7QUFsQko7QUFvQkk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFB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QUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUExSEo7QUE2SEU7RUFDRSxPQUFBO0VBQ0EsYUFBQTtBQTNISjtBQThIRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQ0FBQTtFQUNBLHVCQUFBO0FBNUhKO0FBK0hFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUE3SEo7O0FBa0lBO0VBQ0U7SUFDRSx1QkFBQTtFQS9IRjtFQWlJQTtJQUNFLHlCQUFBO0VBL0hGO0FBQ0Y7QUFrSUE7RUFDRTtJQUNFLFVBQUE7RUFoSUY7RUFrSUE7SUFDRSxZQUFBO0VBaElGO0FBQ0Y7QUFvSUE7RUFDRTtJQUNFLDJCQUFBO0lBQ0EsNkJBQUE7SUFDQSxZQUFBO0VBbElGO0VBcUlJO0lBQ0UsWUFBQTtFQW5JTjtFQXNJSTtJQUNFLGNBQUE7RUFwSU47RUF3SUU7SUFDRSw2QkFBQTtFQXRJSjtFQXlJRTtJQUNFLGtDQUFBO0lBQ0EsbUNBQUE7RUF2SUo7QUFDRjtBQTZJRTtFQUNFLGlDQUFBO0VBQ0EsbUJBQUE7QUEzSUo7O0FBZ0pFO0VBQ0UsaUNBQUE7RUFDQSxtQkFBQTtBQTdJSjs7QUFrSkE7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQ0FBQTtFQS9JRjtFQWlKRTs7SUFFRSxhQUFBO0VBL0lKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNb2Rlcm4gUHJvZHVjdCBDYXJkIFN0eWxlcyB3aXRoIEVuaGFuY2VkIERlc2lnbiBTeXN0ZW1cbjpob3N0IHtcbiAgLy8gUHJvZHVjdCBDYXJkIEN1c3RvbSBQcm9wZXJ0aWVzXG4gIC0tY2FyZC10cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCk7XG4gIC0tY2FyZC1ob3Zlci1zY2FsZTogMS4wMjtcbiAgLS1jYXJkLWltYWdlLWhvdmVyLXNjYWxlOiAxLjA4O1xuICAtLWNhcmQtYm9yZGVyLWhvdmVyLWNvbG9yOiByZ2JhKDM3LCA5OSwgMjM1LCAwLjMpO1xuICAtLWNhcmQtYm94LXNoYWRvdzogXG4gICAgMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIFxuICAgIDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC0tY2FyZC1ib3gtc2hhZG93LWhvdmVyOiBcbiAgICAwIDIwcHggMjVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4xKSxcbiAgICAwIDEwcHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4wNCksXG4gICAgMCAwIDAgMnB4IHZhcigtLWNhcmQtYm9yZGVyLWhvdmVyLWNvbG9yKTtcbiAgLS1jYXJkLWdyYWRpZW50LW92ZXJsYXk6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byB0b3AsXG4gICAgcmdiYSgwLCAwLCAwLCAwLjcpIDAlLFxuICAgIHJnYmEoMCwgMCwgMCwgMC4zKSA0MCUsXG4gICAgdHJhbnNwYXJlbnQgMTAwJVxuICApO1xuICBcbiAgLy8gQ29sb3IgcGFsZXR0ZVxuICAtLXByaW1hcnk6ICMyNTYzZWI7XG4gIC0tcHJpbWFyeS1saWdodDogIzNiODJmNjtcbiAgLS1wcmltYXJ5LWRhcms6ICMxZDRlZDg7XG4gIC0tc3VjY2VzczogIzEwYjk4MTtcbiAgLS13YXJuaW5nOiAjZjU5ZTBiO1xuICAtLWVycm9yOiAjZWY0NDQ0O1xuICAtLWdyYXktNTA6ICNmOWZhZmI7XG4gIC0tZ3JheS0xMDA6ICNmM2Y0ZjY7XG4gIC0tZ3JheS0yMDA6ICNlNWU3ZWI7XG4gIC0tZ3JheS0zMDA6ICNkMWQ1ZGI7XG4gIC0tZ3JheS00MDA6ICM5Y2EzYWY7XG4gIC0tZ3JheS01MDA6ICM2YjcyODA7XG4gIC0tZ3JheS02MDA6ICM0YjU1NjM7XG4gIC0tZ3JheS03MDA6ICMzNzQxNTE7XG4gIC0tZ3JheS04MDA6ICMxZjI5Mzc7XG4gIC0tZ3JheS05MDA6ICMxMTE4Mjc7XG4gIFxuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnByb2R1Y3QtY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBib3gtc2hhZG93OiAwIDJweCAxNnB4IHJnYmEoMzcsOTksMjM1LDAuMDcpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlN2ViO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnMsIHRyYW5zZm9ybSAwLjJzO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBib3gtc2hhZG93O1xuICBpc29sYXRpb246IGlzb2xhdGU7XG4gIFxuICAvLyBDYXJkIHN1YnRsZSBnbG93IGVmZmVjdCBvbiBob3ZlclxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoXG4gICAgICBjaXJjbGUgYXQgNTAlIDUwJSxcbiAgICAgIHJnYmEoMzcsIDk5LCAyMzUsIDAuMSksXG4gICAgICB0cmFuc3BhcmVudCA3MCVcbiAgICApO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgei1pbmRleDogLTE7XG4gIH1cbiAgXG4gICY6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSgzNyw5OSwyMzUsMC4xMyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpIHNjYWxlKDEuMDIpO1xuICAgIGJvcmRlci1jb2xvcjogIzI1NjNlYjMzO1xuICAgIFxuICAgICY6OmJlZm9yZSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICBcbiAgICAucHJvZHVjdC1pbWFnZSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKHZhcigtLWNhcmQtaW1hZ2UtaG92ZXItc2NhbGUpKTtcbiAgICB9XG4gICAgXG4gICAgLnF1aWNrLWFjdGlvbnMge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB9XG4gICAgXG4gICAgLnByb2R1Y3QtYmFkZ2VzIHtcbiAgICAgIC5iYWRnZSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAvLyBDYXJkIHZhcmlhdGlvbnNcbiAgJi5mZWF0dXJlZCB7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgzNywgOTksIDIzNSwgMC4wMikgMCUsIHRyYW5zcGFyZW50IDEwMCUpO1xuICAgIFxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIGhlaWdodDogMDtcbiAgICAgIGJvcmRlci1sZWZ0OiAzMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXRvcDogMzBweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuICB9XG4gIFxuICAmLm91dC1vZi1zdG9jayB7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIFxuICAgIC5wcm9kdWN0LWltYWdlLWNvbnRhaW5lcjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJ09VVCBPRiBTVE9DSyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtMTVkZWcpO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyMzksIDY4LCA2OCwgMC45KTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICB6LWluZGV4OiAzO1xuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gICAgfVxuICB9XG4gIFxuICAmLm5ldy1hcnJpdmFsIHtcbiAgICAucHJvZHVjdC1pbWFnZS1jb250YWluZXI6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogLTEwcHg7XG4gICAgICBsZWZ0OiAtMTBweDtcbiAgICAgIHJpZ2h0OiAtMTBweDtcbiAgICAgIGJvdHRvbTogLTEwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiBjb25pYy1ncmFkaWVudChmcm9tIDQ1ZGVnLCB2YXIoLS1wcmltYXJ5KSwgdmFyKC0tc3VjY2VzcyksIHZhcigtLXByaW1hcnkpKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICB6LWluZGV4OiAtMTtcbiAgICAgIGFuaW1hdGlvbjogcm90YXRlIDNzIGxpbmVhciBpbmZpbml0ZTtcbiAgICB9XG4gIH1cbiAgXG4gICYuYmVzdC1zZWxsZXIge1xuICAgIGJveC1zaGFkb3c6IFxuICAgICAgdmFyKC0tY2FyZC1ib3gtc2hhZG93KSxcbiAgICAgIDAgMCAwIDJweCByZ2JhKDI1NSwgMjE1LCAwLCAwLjMpO1xuICB9XG59XG5cbi8vIFByb2R1Y3QgQmFkZ2VzXG4ucHJvZHVjdC1iYWRnZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTJweDtcbiAgbGVmdDogMTJweDtcbiAgei1pbmRleDogMTA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNnB4O1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xuICBcbiAgLmJhZGdlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA0cHg7XG4gICAgcGFkZGluZzogNnB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgIFxuICAgIG1hdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgIH1cbiAgICBcbiAgICAmLmRpc2NvdW50LWJhZGdlIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmNTllMGIsICNkOTc3MDYpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBcbiAgICAmLm5ldy1iYWRnZSB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTBiOTgxLCAjMDU5NjY5KTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgXG4gICAgJi5iZXN0c2VsbGVyLWJhZGdlIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM4YjVjZjYsICM3YzNhZWQpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBcbiAgICAmLmZlYXR1cmVkLWJhZGdlIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyNTYzZWIsICMxZDRlZDgpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBcbiAgICAmLnNvbGQtb3V0LWJhZGdlIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlZjQ0NDQsICNkYzI2MjYpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBcbiAgICAmLmxvdy1zdG9jay1iYWRnZSB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjk3MzE2LCAjZWE1ODBjKTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbn1cblxuLy8gUXVpY2sgQWN0aW9uc1xuLnF1aWNrLWFjdGlvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTJweDtcbiAgcmlnaHQ6IDEycHg7XG4gIHotaW5kZXg6IDEwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhweDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCk7XG4gIFxuICAucXVpY2stYWN0aW9uLWJ0biB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICBcbiAgICBtYXQtaWNvbiB7XG4gICAgICBjb2xvcjogdmFyKC0tZ3JheS02MDApO1xuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlO1xuICAgIH1cbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICBcbiAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAmLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIFxuICAgICAgbWF0LWljb24ge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAmLndpc2hsaXN0LWJ0bi5hY3RpdmUgbWF0LWljb24ge1xuICAgICAgY29sb3I6ICNlZjQ0NDQ7XG4gICAgfVxuICAgIFxuICAgICYud2lzaGxpc3QtYnRuLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjEpO1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjIpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBQcm9kdWN0IEltYWdlIENvbnRhaW5lclxuLnByb2R1Y3QtaW1hZ2UtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xuICBcbiAgLmltYWdlLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1ncmFkaWVudC1vdmVybGF5KTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgXG4gIC5wcm9kdWN0LWltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCk7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xuICB9XG4gIFxuICAuaW1hZ2UtaW5kaWNhdG9ycyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTJweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA2cHg7XG4gICAgei1pbmRleDogMjtcbiAgICBcbiAgICAuaW5kaWNhdG9yIHtcbiAgICAgIHdpZHRoOiA4cHg7XG4gICAgICBoZWlnaHQ6IDhweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICBcbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5zdG9jay1pbmRpY2F0b3Ige1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEycHg7XG4gICAgbGVmdDogMTJweDtcbiAgICByaWdodDogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHotaW5kZXg6IDI7XG4gICAgXG4gICAgLnN0b2NrLWJhciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNHB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIFxuICAgICAgLnN0b2NrLWZpbGwge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2VmNDQ0NCwgI2Y5NzMxNiwgIzEwYjk4MSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuc3RvY2stdGV4dCB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgfVxuICBcbiAgJjpob3ZlciAuaW1hZ2Utb3ZlcmxheSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4vLyBQcm9kdWN0IENvbnRlbnRcbi5wcm9kdWN0LWNvbnRlbnQge1xuICBwYWRkaW5nOiAxOHB4O1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG4gIFxuICAucHJvZHVjdC1tZXRhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIFxuICAgIC5wcm9kdWN0LWNhdGVnb3J5IHtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgY29sb3I6ICMyNTYzZWI7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICB9XG4gICAgXG4gICAgLnByb2R1Y3QtYnJhbmQge1xuICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgY29sb3I6ICM2NDc0OGI7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgfVxuICBcbiAgLnByb2R1Y3QtbmFtZSB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzFlMjkzYjtcbiAgICBtYXJnaW46IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICMyNTYzZWI7XG4gICAgfVxuICB9XG4gIFxuICAucHJvZHVjdC1yYXRpbmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDZweDtcbiAgfVxuICBcbiAgLnByb2R1Y3QtcHJpY2Uge1xuICAgIC5jdXJyZW50LXByaWNlIHtcbiAgICAgIGNvbG9yOiAjMjU2M2ViO1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH1cbiAgICBcbiAgICAucmVndWxhci1wcmljZSB7XG4gICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIH1cbiAgICBcbiAgICAuc2F2aW5ncyB7XG4gICAgICBjb2xvcjogIzEwYjk4MTtcbiAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICB9XG4gIH1cbiAgXG4gIC5wcm9kdWN0LWZlYXR1cmVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiA0cHg7XG4gICAgXG4gICAgLmZlYXR1cmUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDZweDtcbiAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgIGNvbG9yOiAjNDc1NTY5O1xuICAgICAgXG4gICAgICAuZmVhdHVyZS1pY29uIHtcbiAgICAgICAgY29sb3I6ICMxMGI5ODE7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuc2hpcHBpbmctaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEycHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIFxuICAgIC5zaGlwcGluZy1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiA0cHg7XG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgIGNvbG9yOiAjMTBiOTgxO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIFxuICAgICAgbWF0LWljb24ge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFByb2R1Y3QgQWN0aW9uc1xuLnByb2R1Y3QtYWN0aW9ucyB7XG4gIHBhZGRpbmc6IDE2cHggMjBweCAyMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZ3JheS0xMDApO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEycHg7XG4gIFxuICAuYWRkLXRvLWNhcnQtYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMjU2M2ViIDYwJSwgIzNiODJmNiAxMDAlKTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBcbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAtMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB0cmFuc3BhcmVudCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLCB0cmFuc3BhcmVudCk7XG4gICAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuNXMgZWFzZTtcbiAgICB9XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMWQ0ZWQ4O1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggMTZweCAjMjU2M2ViMzM7XG4gICAgICBcbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgICY6YWN0aXZlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTVlN2ViO1xuICAgICAgY29sb3I6ICM2NDc0OGI7XG4gICAgfVxuICAgIFxuICAgICYubG9hZGluZyB7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIFxuICAgICAgbWF0LXNwaW5uZXIge1xuICAgICAgICA6Om5nLWRlZXAgY2lyY2xlIHtcbiAgICAgICAgICBzdHJva2U6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIG1hdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gIH1cbiAgXG4gIC5xdWFudGl0eS1jb250cm9scyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBcbiAgLmJ1eS1ub3ctYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMjU2M2ViO1xuICAgIGNvbG9yOiAjMjU2M2ViO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICMyNTYzZWI7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBib3JkZXItY29sb3I6ICNlNWU3ZWI7XG4gICAgICBjb2xvcjogIzY0NzQ4YjtcbiAgICB9XG4gIH1cbn1cblxuLy8gTG9hZGluZyBPdmVybGF5XG4ubG9hZGluZy1vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAyMDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgXG4gIG1hdC1zcGlubmVyIDo6bmctZGVlcCBjaXJjbGUge1xuICAgIHN0cm9rZTogdmFyKC0tcHJpbWFyeSk7XG4gIH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBEZXNpZ25cbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAucHJvZHVjdC1jYXJkIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpIHNjYWxlKDEuMDEpO1xuICAgIH1cbiAgfVxuICBcbiAgLnByb2R1Y3QtaW1hZ2UtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICB9XG4gIFxuICAucXVpY2stYWN0aW9ucyB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgXG4gICAgLnF1aWNrLWFjdGlvbi1idG4ge1xuICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgfVxuICB9XG4gIFxuICAucHJvZHVjdC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGdhcDogOHB4O1xuICAgIFxuICAgIC5wcm9kdWN0LW5hbWUge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgICBcbiAgICAucHJvZHVjdC1wcmljZSAuY3VycmVudC1wcmljZSB7XG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICB9XG4gIH1cbiAgXG4gIC5wcm9kdWN0LWFjdGlvbnMge1xuICAgIHBhZGRpbmc6IDhweCAxMnB4IDEycHg7XG4gICAgXG4gICAgLmFkZC10by1jYXJ0LWJ0biB7XG4gICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgfVxuICB9XG59XG5cbi8vIFNpemUgVmFyaWF0aW9uc1xuLnByb2R1Y3QtY2FyZC0tc21hbGwge1xuICAucHJvZHVjdC1pbWFnZS1jb250YWluZXIge1xuICAgIGhlaWdodDogMTgwcHg7XG4gIH1cbiAgXG4gIC5wcm9kdWN0LWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgZ2FwOiA4cHg7XG4gICAgXG4gICAgLnByb2R1Y3QtbmFtZSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIFxuICAgIC5wcm9kdWN0LXByaWNlIC5wcmljZS1tYWluIC5jdXJyZW50LXByaWNlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gIH1cbiAgXG4gIC5wcm9kdWN0LWFjdGlvbnMge1xuICAgIHBhZGRpbmc6IDhweCAxMnB4IDEycHg7XG4gICAgXG4gICAgLmFkZC10by1jYXJ0LWJ0biB7XG4gICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICB9XG59XG5cbi5wcm9kdWN0LWNhcmQtLWxhcmdlIHtcbiAgLnByb2R1Y3QtaW1hZ2UtY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICB9XG4gIFxuICAucHJvZHVjdC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIGdhcDogMTZweDtcbiAgICBcbiAgICAucHJvZHVjdC1uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gICAgXG4gICAgLnByb2R1Y3QtcHJpY2UgLnByaWNlLW1haW4gLmN1cnJlbnQtcHJpY2Uge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgIH1cbiAgfVxuICBcbiAgLnByb2R1Y3QtYWN0aW9ucyB7XG4gICAgcGFkZGluZzogMjBweCAyNHB4IDI0cHg7XG4gICAgXG4gICAgLmFkZC10by1jYXJ0LWJ0biB7XG4gICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICB9XG59XG5cbi8vIExheW91dCBWYXJpYXRpb25zXG4ucHJvZHVjdC1jYXJkLS1ob3Jpem9udGFsIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiAyMDBweDtcbiAgXG4gIC5wcm9kdWN0LWltYWdlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmbGV4LXNocmluazogMDtcbiAgfVxuICBcbiAgLnByb2R1Y3QtY29udGVudCB7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG4gIFxuICAucHJvZHVjdC1hY3Rpb25zIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWdyYXktMTAwKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBcbiAgLnF1aWNrLWFjdGlvbnMge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICB9XG59XG5cbi8vIEFuaW1hdGlvbnNcbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIDAlLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG59XG5cbi8vIERhcmsgTW9kZSBTdXBwb3J0XG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gIC5wcm9kdWN0LWNhcmQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYXktODAwKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWdyYXktNzAwKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgXG4gICAgLnByb2R1Y3QtY29udGVudCB7XG4gICAgICAucHJvZHVjdC1uYW1lIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgfVxuICAgICAgXG4gICAgICAucHJvZHVjdC1wcmljZSAucHJpY2UtbWFpbiAuY3VycmVudC1wcmljZSB7XG4gICAgICAgIGNvbG9yOiAjNjBhNWZhO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAucHJvZHVjdC1hY3Rpb25zIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZ3JheS03MDApO1xuICAgIH1cbiAgICBcbiAgICAucXVpY2stYWN0aW9ucyAucXVpY2stYWN0aW9uLWJ0biB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDMxLCA0MSwgNTUsIDAuOTUpO1xuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDc1LCA4NSwgOTksIDAuMik7XG4gICAgfVxuICB9XG59XG5cbi8vIEFjY2Vzc2liaWxpdHlcbi5wcm9kdWN0LWNhcmQge1xuICAmOmZvY3VzLXdpdGhpbiB7XG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xuICAgIG91dGxpbmUtb2Zmc2V0OiAycHg7XG4gIH1cbn1cblxuYnV0dG9uIHtcbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xuICAgIG91dGxpbmUtb2Zmc2V0OiAycHg7XG4gIH1cbn1cblxuLy8gUHJpbnQgU3R5bGVzXG5AbWVkaWEgcHJpbnQge1xuICAucHJvZHVjdC1jYXJkIHtcbiAgICBicmVhay1pbnNpZGU6IGF2b2lkO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JheS0zMDApO1xuICAgIFxuICAgIC5xdWljay1hY3Rpb25zLFxuICAgIC5wcm9kdWN0LWFjdGlvbnMge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}


/***/ }),

/***/ 7329:
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/quantity-selector/quantity-selector.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuantitySelectorComponent: () => (/* binding */ QuantitySelectorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 3840);




class QuantitySelectorComponent {
  constructor() {
    this.quantity = 1;
    this.value = 1;
    this.min = 1;
    this.max = 99;
    this.disabled = false;
    this.quantityChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  increaseQuantity() {
    if (this.quantity < this.max && !this.disabled) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
      this.valueChange.emit(this.quantity);
    }
  }
  decreaseQuantity() {
    if (this.quantity > this.min && !this.disabled) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
      this.valueChange.emit(this.quantity);
    }
  }
  static {
    this.ɵfac = function QuantitySelectorComponent_Factory(t) {
      return new (t || QuantitySelectorComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: QuantitySelectorComponent,
      selectors: [["app-quantity-selector"]],
      inputs: {
        quantity: "quantity",
        value: "value",
        min: "min",
        max: "max",
        disabled: "disabled"
      },
      outputs: {
        quantityChange: "quantityChange",
        valueChange: "valueChange"
      },
      decls: 9,
      vars: 3,
      consts: [[1, "quantity-selector"], ["mat-icon-button", "", "color", "primary", 3, "disabled", "click"], [1, "quantity"]],
      template: function QuantitySelectorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuantitySelectorComponent_Template_button_click_1_listener() {
            return ctx.decreaseQuantity();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "remove");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuantitySelectorComponent_Template_button_click_6_listener() {
            return ctx.increaseQuantity();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "add");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.quantity <= ctx.min || ctx.disabled);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.quantity);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.quantity >= ctx.max || ctx.disabled);
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon],
      styles: [".quantity-selector[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n    \n    .quantity[_ngcontent-%COMP%] {\n      margin: 0 10px;\n      min-width: 30px;\n      text-align: center;\n      font-weight: 500;\n    }\n    \n    button[_ngcontent-%COMP%] {\n      line-height: 30px;\n      height: 30px;\n      width: 30px;\n    }\n    \n    button[_ngcontent-%COMP%]     .mat-icon {\n      font-size: 18px;\n      line-height: 18px;\n      height: 18px;\n      width: 18px;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcXVhbnRpdHktc2VsZWN0b3IvcXVhbnRpdHktc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtNQUNFLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsdUJBQXVCO0lBQ3pCOztJQUVBO01BQ0UsY0FBYztNQUNkLGVBQWU7TUFDZixrQkFBa0I7TUFDbEIsZ0JBQWdCO0lBQ2xCOztJQUVBO01BQ0UsaUJBQWlCO01BQ2pCLFlBQVk7TUFDWixXQUFXO0lBQ2I7O0lBRUE7TUFDRSxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLFlBQVk7TUFDWixXQUFXO0lBQ2IiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAucXVhbnRpdHktc2VsZWN0b3Ige1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgXG4gICAgLnF1YW50aXR5IHtcbiAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgbWluLXdpZHRoOiAzMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gICAgXG4gICAgYnV0dG9uIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgfVxuICAgIFxuICAgIGJ1dHRvbiA6Om5nLWRlZXAgLm1hdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgd2lkdGg6IDE4cHg7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}


/***/ }),

/***/ 3829:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/star-rating/star-rating.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StarRatingComponent: () => (/* binding */ StarRatingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 3840);




function StarRatingComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StarRatingComponent_button_1_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const i_r3 = restoredCtx.index;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](!ctx_r4.readOnly && ctx_r4.rate(i_r3 + 1));
    })("mouseenter", function StarRatingComponent_button_1_Template_button_mouseenter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const i_r3 = restoredCtx.index;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](!ctx_r6.readOnly && ctx_r6.onStarHover(i_r3 + 1));
    })("mouseleave", function StarRatingComponent_button_1_Template_button_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](!ctx_r7.readOnly && ctx_r7.onStarLeave());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filled", i_r3 < ctx_r0.currentRating)("hovered", !ctx_r0.readOnly && ctx_r0.hoverRating !== null && i_r3 < ctx_r0.hoverRating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.hoverRating !== null && i_r3 < ctx_r0.hoverRating ? "star" : i_r3 < ctx_r0.currentRating ? "star" : "star_border");
  }
}
function StarRatingComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" (", ctx_r1.reviewCount, " ", ctx_r1.reviewCount === 1 ? "review" : "reviews", ") ");
  }
}
class StarRatingComponent {
  constructor() {
    this.rating = 0;
    this.maxRating = 5;
    this.readOnly = false; // Added Input
    this.showReviewCount = true;
    this.ratingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.stars = [];
    this.currentRating = 0;
    this.hoverRating = null;
  }
  ngOnChanges(changes) {
    if (changes['rating'] || changes['maxRating']) {
      this.currentRating = this.rating;
      this.stars = Array(this.maxRating).fill(0);
    }
  }
  rate(ratingValue) {
    if (!this.readOnly) {
      this.currentRating = ratingValue;
      this.ratingChange.emit(this.currentRating);
    }
  }
  onStarHover(ratingValue) {
    if (!this.readOnly) {
      this.hoverRating = ratingValue;
    }
  }
  onStarLeave() {
    if (!this.readOnly) {
      this.hoverRating = null;
    }
  }
  static {
    this.ɵfac = function StarRatingComponent_Factory(t) {
      return new (t || StarRatingComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StarRatingComponent,
      selectors: [["app-star-rating"]],
      inputs: {
        rating: "rating",
        maxRating: "maxRating",
        readOnly: "readOnly",
        reviewCount: "reviewCount",
        showReviewCount: "showReviewCount"
      },
      outputs: {
        ratingChange: "ratingChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 3,
      vars: 4,
      consts: [[1, "star-rating-container"], ["type", "button", "class", "star-button", 3, "filled", "hovered", "click", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], ["class", "review-count", 4, "ngIf"], ["type", "button", 1, "star-button", 3, "click", "mouseenter", "mouseleave"], [1, "review-count"]],
      template: function StarRatingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StarRatingComponent_button_1_Template, 3, 5, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StarRatingComponent_span_2_Template, 2, 2, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("readonly", ctx.readOnly);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stars);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showReviewCount && ctx.reviewCount !== undefined);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon],
      styles: [".star-rating-container[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n}\n.star-rating-container[_ngcontent-%COMP%]   .star-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n  color: #f9a825;\n}\n.star-rating-container[_ngcontent-%COMP%]   .star-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  vertical-align: middle;\n}\n.star-rating-container.readonly[_ngcontent-%COMP%]   .star-button[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.star-rating-container[_ngcontent-%COMP%]   .review-count[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  font-size: 0.9em;\n  color: #757575;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3Rhci1yYXRpbmcvc3Rhci1yYXRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQUNGO0FBQ0U7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0o7QUFDSTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBQUNOO0FBR0U7RUFDRSxlQUFBO0FBREo7QUFJRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRkoiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Rhci1yYXRpbmctY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMnB4O1xuXG4gIC5zdGFyLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjZjlhODI1OyAvLyBHb2xkIGNvbG9yIGZvciBzdGFyc1xuXG4gICAgbWF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAyMHB4OyAvLyBBZGp1c3Qgc2l6ZSBhcyBuZWVkZWRcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuICB9XG5cbiAgJi5yZWFkb25seSAuc3Rhci1idXR0b24ge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxuXG4gIC5yZXZpZXctY291bnQge1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICBjb2xvcjogIzc1NzU3NTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 7366:
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/highlight.directive.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HighlightDirective: () => (/* binding */ HighlightDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class HighlightDirective {
  constructor(el, renderer) {
    this.el = el;
    this.renderer = renderer;
    this.highlightEnabled = true;
    this.highlightColor = '#f5f5dc'; // Beige
    this.defaultColor = '';
    this.originalColor = '';
    this.originalColor = this.el.nativeElement.style.backgroundColor;
  }
  ngOnInit() {
    this.defaultColor = this.defaultColor || this.originalColor;
    if (this.highlightEnabled) {
      this.renderer.addClass(this.el.nativeElement, 'highlighted-item');
    }
  }
  onMouseEnter() {
    if (this.highlightEnabled) {
      this.highlight(this.highlightColor);
    }
  }
  onMouseLeave() {
    if (this.highlightEnabled) {
      this.highlight(this.defaultColor);
    }
  }
  highlight(color) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
  static {
    this.ɵfac = function HighlightDirective_Factory(t) {
      return new (t || HighlightDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: HighlightDirective,
      selectors: [["", "appHighlight", ""]],
      hostBindings: function HighlightDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HighlightDirective_mouseenter_HostBindingHandler() {
            return ctx.onMouseEnter();
          })("mouseleave", function HighlightDirective_mouseleave_HostBindingHandler() {
            return ctx.onMouseLeave();
          });
        }
      },
      inputs: {
        highlightEnabled: ["appHighlight", "highlightEnabled"],
        highlightColor: "highlightColor",
        defaultColor: "defaultColor"
      }
    });
  }
}


/***/ }),

/***/ 9026:
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/lazy-img.directive.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LazyImgDirective: () => (/* binding */ LazyImgDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class LazyImgDirective {
  constructor(el) {
    this.el = el;
    this.srcAttr = '';
    this.src = '';
    this.placeholderSrc = 'assets/images/placeholder.png';
  }
  ngOnInit() {
    // Set placeholder image initially
    this.srcAttr = this.placeholderSrc;
    // Use Intersection Observer to detect when the image is in viewport
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Element is in viewport, load the actual image
          this.loadImage();
          // Stop observing once loaded
          observer.unobserve(this.el.nativeElement);
        }
      });
    });
    observer.observe(this.el.nativeElement);
  }
  loadImage() {
    // Create a new image element to preload the image
    const img = new Image();
    img.onload = () => {
      // When the image is loaded, set the source to the element
      this.srcAttr = this.src || this.el.nativeElement.getAttribute('src');
    };
    img.onerror = () => {
      // If the image fails to load, keep the placeholder
      this.srcAttr = this.placeholderSrc;
    };
    // Start loading the image
    img.src = this.src || this.el.nativeElement.getAttribute('src');
  }
  static {
    this.ɵfac = function LazyImgDirective_Factory(t) {
      return new (t || LazyImgDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: LazyImgDirective,
      selectors: [["img", "appLazyImg", ""]],
      hostVars: 1,
      hostBindings: function LazyImgDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", ctx.srcAttr, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      inputs: {
        src: "src",
        placeholderSrc: "placeholderSrc"
      }
    });
  }
}


/***/ }),

/***/ 3535:
/*!********************************************!*\
  !*** ./src/app/shared/pipes/price.pipe.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PricePipe: () => (/* binding */ PricePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class PricePipe {
  transform(value, currency = '$') {
    if (value === undefined || value === null) {
      return '';
    }
    return `${currency}${value.toFixed(2)}`;
  }
  static {
    this.ɵfac = function PricePipe_Factory(t) {
      return new (t || PricePipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "price",
      type: PricePipe,
      pure: true
    });
  }
}


/***/ }),

/***/ 980:
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/truncate.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TruncatePipe: () => (/* binding */ TruncatePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class TruncatePipe {
  transform(value, limit = 100, completeWords = false, ellipsis = '...') {
    if (!value) {
      return '';
    }
    if (value.length <= limit) {
      return value;
    }
    if (completeWords) {
      limit = value.substring(0, limit).lastIndexOf(' ');
    }
    return `${value.substring(0, limit)}${ellipsis}`;
  }
  static {
    this.ɵfac = function TruncatePipe_Factory(t) {
      return new (t || TruncatePipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "truncate",
      type: TruncatePipe,
      pure: true
    });
  }
}


/***/ }),

/***/ 3887:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/badge */ 6256);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/paginator */ 4624);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sort */ 2047);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/divider */ 4102);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/list */ 943);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/stepper */ 6622);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/expansion */ 9322);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/chips */ 2772);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tabs */ 8223);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tooltip */ 640);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 9381);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ 1765);
/* harmony import */ var _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/loading-spinner/loading-spinner.component */ 4333);
/* harmony import */ var _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/product-card/product-card.component */ 6071);
/* harmony import */ var _components_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/star-rating/star-rating.component */ 3829);
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/not-found/not-found.component */ 13);
/* harmony import */ var _components_quantity_selector_quantity_selector_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/quantity-selector/quantity-selector.component */ 7329);
/* harmony import */ var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/confirm-dialog/confirm-dialog.component */ 8709);
/* harmony import */ var _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/truncate.pipe */ 980);
/* harmony import */ var _pipes_price_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/price.pipe */ 3535);
/* harmony import */ var _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/highlight.directive */ 7366);
/* harmony import */ var _directives_lazy_img_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/lazy-img.directive */ 9026);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/core */ 7580);




// Angular Material Imports






















// Components








// Pipes


// Directives



const materialModules = [_angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__.MatSnackBarModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__.MatBadgeModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenuModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__.MatToolbarModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSortModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__.MatDialogModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__.MatProgressSpinnerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_27__.MatDividerModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_28__.MatListModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__.MatStepperModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__.MatExpansionModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_31__.MatChipsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__.MatTabsModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule];
const components = [_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__.LoadingSpinnerComponent, _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_3__.ProductCardComponent, _components_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_4__.StarRatingComponent, _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__.NotFoundComponent, _components_quantity_selector_quantity_selector_component__WEBPACK_IMPORTED_MODULE_6__.QuantitySelectorComponent, _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__.ConfirmDialogComponent];
const pipes = [_pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_8__.TruncatePipe, _pipes_price_pipe__WEBPACK_IMPORTED_MODULE_9__.PricePipe];
const directives = [_directives_highlight_directive__WEBPACK_IMPORTED_MODULE_10__.HighlightDirective, _directives_lazy_img_directive__WEBPACK_IMPORTED_MODULE_11__.LazyImgDirective];
class SharedModule {
  static {
    this.ɵfac = function SharedModule_Factory(t) {
      return new (t || SharedModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_35__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_36__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_38__.HttpClientModule, materialModules, _angular_common__WEBPACK_IMPORTED_MODULE_35__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_36__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.FormsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__.MatSnackBarModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__.MatBadgeModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenuModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__.MatToolbarModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSortModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__.MatDialogModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__.MatProgressSpinnerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_27__.MatDividerModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_28__.MatListModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__.MatStepperModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__.MatExpansionModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_31__.MatChipsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__.MatTabsModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__.LoadingSpinnerComponent, _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_3__.ProductCardComponent, _components_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_4__.StarRatingComponent, _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__.NotFoundComponent, _components_quantity_selector_quantity_selector_component__WEBPACK_IMPORTED_MODULE_6__.QuantitySelectorComponent, _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__.ConfirmDialogComponent, _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_8__.TruncatePipe, _pipes_price_pipe__WEBPACK_IMPORTED_MODULE_9__.PricePipe, _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_10__.HighlightDirective, _directives_lazy_img_directive__WEBPACK_IMPORTED_MODULE_11__.LazyImgDirective],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_35__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_36__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_38__.HttpClientModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__.MatSnackBarModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__.MatBadgeModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenuModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__.MatToolbarModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSortModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__.MatDialogModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__.MatProgressSpinnerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_27__.MatDividerModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_28__.MatListModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__.MatStepperModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__.MatExpansionModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_31__.MatChipsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__.MatTabsModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_35__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_36__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.FormsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__.MatSnackBarModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_19__.MatBadgeModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__.MatMenuModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__.MatToolbarModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSortModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__.MatDialogModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__.MatProgressSpinnerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_27__.MatDividerModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_28__.MatListModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__.MatStepperModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_30__.MatExpansionModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_31__.MatChipsModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__.MatTabsModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule, _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_2__.LoadingSpinnerComponent, _components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_3__.ProductCardComponent, _components_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_4__.StarRatingComponent, _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__.NotFoundComponent, _components_quantity_selector_quantity_selector_component__WEBPACK_IMPORTED_MODULE_6__.QuantitySelectorComponent, _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__.ConfirmDialogComponent, _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_8__.TruncatePipe, _pipes_price_pipe__WEBPACK_IMPORTED_MODULE_9__.PricePipe, _directives_highlight_directive__WEBPACK_IMPORTED_MODULE_10__.HighlightDirective, _directives_lazy_img_directive__WEBPACK_IMPORTED_MODULE_11__.LazyImgDirective]
  });
})();

/***/ }),

/***/ 6513:
/*!***********************************************!*\
  !*** ./src/app/store/actions/auth.actions.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkAuthStatus: () => (/* binding */ checkAuthStatus),
/* harmony export */   checkAuthStatusFailure: () => (/* binding */ checkAuthStatusFailure),
/* harmony export */   checkAuthStatusSuccess: () => (/* binding */ checkAuthStatusSuccess),
/* harmony export */   login: () => (/* binding */ login),
/* harmony export */   loginFailure: () => (/* binding */ loginFailure),
/* harmony export */   loginSuccess: () => (/* binding */ loginSuccess),
/* harmony export */   logout: () => (/* binding */ logout),
/* harmony export */   logoutSuccess: () => (/* binding */ logoutSuccess),
/* harmony export */   register: () => (/* binding */ register),
/* harmony export */   registerFailure: () => (/* binding */ registerFailure),
/* harmony export */   registerSuccess: () => (/* binding */ registerSuccess),
/* harmony export */   resetAuthState: () => (/* binding */ resetAuthState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 1383);

// Check Auth Status
const checkAuthStatus = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Check Auth Status');
const checkAuthStatusSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Check Auth Status Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const checkAuthStatusFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Check Auth Status Failure');
// Login
const login = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Login', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loginSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Login Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loginFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Login Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// Register
const register = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Register', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const registerSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Register Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const registerFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Register Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// Logout
const logout = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Logout');
const logoutSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Logout Success');
// Reset Auth State
const resetAuthState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Auth] Reset Auth State');

/***/ }),

/***/ 6217:
/*!***********************************************!*\
  !*** ./src/app/store/actions/cart.actions.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToCart: () => (/* binding */ addToCart),
/* harmony export */   clearCart: () => (/* binding */ clearCart),
/* harmony export */   loadCart: () => (/* binding */ loadCart),
/* harmony export */   loadCartFailure: () => (/* binding */ loadCartFailure),
/* harmony export */   loadCartSuccess: () => (/* binding */ loadCartSuccess),
/* harmony export */   navigateToCheckout: () => (/* binding */ navigateToCheckout),
/* harmony export */   removeFromCart: () => (/* binding */ removeFromCart),
/* harmony export */   syncCartWithServer: () => (/* binding */ syncCartWithServer),
/* harmony export */   syncCartWithServerFailure: () => (/* binding */ syncCartWithServerFailure),
/* harmony export */   syncCartWithServerSuccess: () => (/* binding */ syncCartWithServerSuccess),
/* harmony export */   updateCartItemQuantity: () => (/* binding */ updateCartItemQuantity)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 1383);

const addToCart = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Cart Page] Add to Cart', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const removeFromCart = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Cart Page] Remove from Cart', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() // Changed from itemId to productId for consistency
);

const updateCartItemQuantity = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Cart Page] Update Cart Item Quantity', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() // Changed from itemId to productId
);

const clearCart = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Cart Page] Clear Cart');
const loadCart = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Cart API] Load Cart');
const loadCartSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Cart API] Load Cart Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadCartFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Cart API] Load Cart Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const navigateToCheckout = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Cart Page] Navigate To Checkout');
// Actions for syncing cart with server (if applicable)
const syncCartWithServer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Cart] Sync Cart With Server');
const syncCartWithServerSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Cart API] Sync Cart With Server Success');
const syncCartWithServerFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Cart API] Sync Cart With Server Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 3574:
/*!**************************************************!*\
  !*** ./src/app/store/actions/product.actions.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadCategories: () => (/* binding */ loadCategories),
/* harmony export */   loadCategoriesFailure: () => (/* binding */ loadCategoriesFailure),
/* harmony export */   loadCategoriesSuccess: () => (/* binding */ loadCategoriesSuccess),
/* harmony export */   loadProductById: () => (/* binding */ loadProductById),
/* harmony export */   loadProductByIdFailure: () => (/* binding */ loadProductByIdFailure),
/* harmony export */   loadProductByIdSuccess: () => (/* binding */ loadProductByIdSuccess),
/* harmony export */   loadProducts: () => (/* binding */ loadProducts),
/* harmony export */   loadProductsFailure: () => (/* binding */ loadProductsFailure),
/* harmony export */   loadProductsSuccess: () => (/* binding */ loadProductsSuccess)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 1383);

// Load All Products
const loadProducts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Products Page] Load Products', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)() // Optional params for filtering, pagination
);

const loadProductsSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Products API] Load Products Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadProductsFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Products API] Load Products Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// Load Single Product
const loadProductById = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Product Details Page] Load Product By Id', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadProductByIdSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Products API] Load Product By Id Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadProductByIdFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Products API] Load Product By Id Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
// Load Categories
const loadCategories = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Category] Load Categories');
const loadCategoriesSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Category API] Load Categories Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const loadCategoriesFailure = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Category API] Load Categories Failure', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());

/***/ }),

/***/ 3013:
/*!*********************************************!*\
  !*** ./src/app/store/actions/ui.actions.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearError: () => (/* binding */ clearError),
/* harmony export */   clearNotification: () => (/* binding */ clearNotification),
/* harmony export */   setError: () => (/* binding */ setError),
/* harmony export */   setLoading: () => (/* binding */ setLoading),
/* harmony export */   showNotification: () => (/* binding */ showNotification)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 1383);

const setLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[UI] Set Loading', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const showNotification = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[UI] Show Notification', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const clearNotification = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[UI] Clear Notification');
const setError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[UI] Set Error', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const clearError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[UI] Clear Error');

/***/ }),

/***/ 7218:
/*!**********************************************!*\
  !*** ./src/app/store/effects/app.effects.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppEffects: () => (/* binding */ AppEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ 347);
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/router-store */ 2175);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var _actions_ui_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/ui.actions */ 3013);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 1383);







class AppEffects {
  constructor(actions$, store) {
    this.actions$ = actions$;
    this.store = store;
    // Clear errors when navigating
    this.navigationEffect$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_ngrx_router_store__WEBPACK_IMPORTED_MODULE_2__.ROUTER_NAVIGATION), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
      this.store.dispatch((0,_actions_ui_actions__WEBPACK_IMPORTED_MODULE_0__.clearError)());
    })), {
      dispatch: false
    });
  }
  static {
    this.ɵfac = function AppEffects_Factory(t) {
      return new (t || AppEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: AppEffects,
      factory: AppEffects.ɵfac
    });
  }
}


/***/ }),

/***/ 5647:
/*!***********************************************!*\
  !*** ./src/app/store/effects/auth.effects.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthEffects: () => (/* binding */ AuthEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ 347);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 7953);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/auth.actions */ 6513);
/* harmony import */ var _actions_ui_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/ui.actions */ 3013);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/auth.service */ 8010);
/* harmony import */ var _core_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/storage.service */ 9117);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/notification.service */ 5567);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ 1383);












class AuthEffects {
  constructor(actions$, authService, storageService, router, notificationService, store) {
    this.actions$ = actions$;
    this.authService = authService;
    this.storageService = storageService;
    this.router = router;
    this.notificationService = notificationService;
    this.store = store;
    this.checkAuthStatus$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.checkAuthStatus), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.store.dispatch(_actions_ui_actions__WEBPACK_IMPORTED_MODULE_1__.setLoading({
      isLoading: true
    }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.exhaustMap)(() => {
      const token = this.storageService.getItem('auth_token');
      if (!token) {
        this.store.dispatch(_actions_ui_actions__WEBPACK_IMPORTED_MODULE_1__.setLoading({
          isLoading: false
        }));
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.checkAuthStatusFailure());
      }
      return this.authService.getCurrentUser().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(user => {
        this.store.dispatch(_actions_ui_actions__WEBPACK_IMPORTED_MODULE_1__.setLoading({
          isLoading: false
        }));
        if (user) {
          return _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.checkAuthStatusSuccess({
            user
          });
        }
        return _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.checkAuthStatusFailure();
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => {
        this.store.dispatch(_actions_ui_actions__WEBPACK_IMPORTED_MODULE_1__.setLoading({
          isLoading: false
        }));
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.checkAuthStatusFailure());
      }));
    })));
    this.login$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.login), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.store.dispatch(_actions_ui_actions__WEBPACK_IMPORTED_MODULE_1__.setLoading({
      isLoading: true
    }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.exhaustMap)(({
      email,
      password
    }) => this.authService.login(email, password).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(response => {
      this.storageService.setItem('auth_token', response.token);
      this.store.dispatch(_actions_ui_actions__WEBPACK_IMPORTED_MODULE_1__.setLoading({
        isLoading: false
      }));
      this.notificationService.showSuccess('Login successful');
      return _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.loginSuccess({
        user: response.user,
        token: response.token
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => {
      this.store.dispatch(_actions_ui_actions__WEBPACK_IMPORTED_MODULE_1__.setLoading({
        isLoading: false
      }));
      this.notificationService.showError(error.message || 'Login failed');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.loginFailure({
        error
      }));
    })))));
    this.register$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.register), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.store.dispatch(_actions_ui_actions__WEBPACK_IMPORTED_MODULE_1__.setLoading({
      isLoading: true
    }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.exhaustMap)(({
      name,
      email,
      password
    }) => this.authService.signup(email, password, name).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(response => {
      this.storageService.setItem('auth_token', response.token);
      this.store.dispatch(_actions_ui_actions__WEBPACK_IMPORTED_MODULE_1__.setLoading({
        isLoading: false
      }));
      this.notificationService.showSuccess('Registration successful');
      return _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.registerSuccess({
        user: response.user,
        token: response.token
      });
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => {
      this.store.dispatch(_actions_ui_actions__WEBPACK_IMPORTED_MODULE_1__.setLoading({
        isLoading: false
      }));
      this.notificationService.showError(error.message || 'Registration failed');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.registerFailure({
        error
      }));
    })))));
    this.loginSuccess$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.loginSuccess, _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.registerSuccess), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => this.router.navigate(['/']))), {
      dispatch: false
    });
    this.logout$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.ofType)(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.logout), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(() => {
      this.storageService.removeItem('auth_token');
      this.notificationService.showInfo('You have been logged out');
      this.router.navigate(['/']);
      return _actions_auth_actions__WEBPACK_IMPORTED_MODULE_0__.logoutSuccess();
    })));
  }
  static {
    this.ɵfac = function AuthEffects_Factory(t) {
      return new (t || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_core_services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_13__.Store));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({
      token: AuthEffects,
      factory: AuthEffects.ɵfac
    });
  }
}


/***/ }),

/***/ 7663:
/*!***********************************************!*\
  !*** ./src/app/store/effects/cart.effects.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartEffects: () => (/* binding */ CartEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ 347);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5842);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 7953);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var _actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/cart.actions */ 6217);
/* harmony import */ var _selectors_cart_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selectors/cart.selectors */ 919);
/* harmony import */ var _selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selectors/auth.selectors */ 1647);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/cart.service */ 3661);
/* harmony import */ var _core_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/storage.service */ 9117);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/notification.service */ 5567);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store */ 1383);












class CartEffects {
  constructor(actions$, cartService, storageService, notificationService, store) {
    this.actions$ = actions$;
    this.cartService = cartService;
    this.storageService = storageService;
    this.notificationService = notificationService;
    this.store = store;
    this.loadCart$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__.loadCart), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.withLatestFrom)(this.store.select(_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_2__.selectIsAuthenticated)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.exhaustMap)(([_, isAuthenticated]) => {
      if (isAuthenticated) {
        return this.cartService.getCart().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(items => _actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__.loadCartSuccess({
          items
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__.loadCartFailure({
          error
        }))));
      } else {
        const localCart = this.storageService.getItem('cart') || '[]';
        try {
          const items = JSON.parse(localCart);
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__.loadCartSuccess({
            items
          }));
        } catch (error) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__.loadCartFailure({
            error: 'Failed to parse cart data'
          }));
        }
      }
    })));
    this.addToCart$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__.addToCart), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(action => action.item),
    // Extract the item from the action
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.withLatestFrom)(this.store.select(_selectors_cart_selectors__WEBPACK_IMPORTED_MODULE_1__.selectCartItems), this.store.select(_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_2__.selectIsAuthenticated)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(([{
      productId,
      quantity
    }, _, __]) => {
      this.notificationService.showSuccess(`${productId} added to cart`);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.exhaustMap)(([item, currentItems, isAuthenticated]) => {
      if (isAuthenticated) {
        // Simulate API call to add item to backend cart
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)({
          type: '[Cart API] Add Item Success - Backend (Placeholder)',
          payload: item
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(() => _actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__.loadCartSuccess({
          items: [...currentItems, {
            productId: item.productId,
            quantity: item.quantity,
            name: item.name || '',
            price: item.price,
            image: item.image || item.imageUrl || '',
            unitPrice: item.unitPrice || item.price
          }]
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__.loadCartFailure({
          error
        }))));
      } else {
        const cartItem = {
          productId: item.productId,
          name: item.name || '',
          price: item.price,
          image: item.image || item.imageUrl || '',
          quantity: item.quantity
        };
        const updatedItems = [...currentItems];
        const existingItemIndex = updatedItems.findIndex(cartItem => cartItem.productId === item.productId);
        if (existingItemIndex >= 0) {
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity: updatedItems[existingItemIndex].quantity + item.quantity
          };
        } else {
          updatedItems.push(cartItem);
        }
        this.storageService.setItem('cart', JSON.stringify(updatedItems));
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__.syncCartWithServerSuccess());
      }
    })));
    this.removeFromCart$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__.removeFromCart), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(action => action.productId),
    // Extract productId
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.withLatestFrom)(this.store.select(_selectors_cart_selectors__WEBPACK_IMPORTED_MODULE_1__.selectCartItems), this.store.select(_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_2__.selectIsAuthenticated)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(([productId, currentItems, _]) => {
      const item = currentItems.find(item => item.productId === productId);
      if (item) {
        this.notificationService.showInfo(`${item.name} removed from cart`);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.exhaustMap)(([productId, currentItems, isAuthenticated]) => {
      const updatedItems = currentItems.filter(item => item.productId !== productId);
      this.storageService.setItem('cart', JSON.stringify(updatedItems));
      if (isAuthenticated) {
        return this.cartService.syncCart(updatedItems).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(() => _actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__.syncCartWithServerSuccess()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__.syncCartWithServerFailure({
          error
        }))));
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__.syncCartWithServerSuccess());
    })));
    this.updateCartItemQuantity$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__.updateCartItemQuantity), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(action => ({
      productId: action.productId,
      quantity: action.quantity
    })),
    // Extract properties
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.withLatestFrom)(this.store.select(_selectors_cart_selectors__WEBPACK_IMPORTED_MODULE_1__.selectCartItems), this.store.select(_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_2__.selectIsAuthenticated)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.exhaustMap)(([{
      productId,
      quantity
    }, currentItems, isAuthenticated]) => {
      const updatedItems = currentItems.map(item => item.productId === productId ? {
        ...item,
        quantity
      } : item);
      this.storageService.setItem('cart', JSON.stringify(updatedItems));
      if (isAuthenticated) {
        return this.cartService.syncCart(updatedItems).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(() => _actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__.syncCartWithServerSuccess()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__.syncCartWithServerFailure({
          error
        }))));
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__.syncCartWithServerSuccess());
    })));
    this.clearCart$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__.clearCart), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.withLatestFrom)(this.store.select(_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_2__.selectIsAuthenticated)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.exhaustMap)(([action, isAuthenticated]) => {
      if (isAuthenticated) {
        // Simulate API call to clear backend cart
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)({
          type: '[Cart API] Clear Cart Success - Backend (Placeholder)'
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(() => _actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__.loadCartSuccess({
          items: []
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)({
          type: '[Cart API] Clear Cart Failure - Backend',
          error
        })));
      } else {
        // For non-authenticated users, just return success
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__.loadCartSuccess({
          items: []
        }));
      }
    })));
  }
  static {
    this.ɵfac = function CartEffects_Factory(t) {
      return new (t || CartEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_core_services_cart_service__WEBPACK_IMPORTED_MODULE_3__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_core_services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_14__.Store));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjectable"]({
      token: CartEffects,
      factory: CartEffects.ɵfac
    });
  }
}


/***/ }),

/***/ 8854:
/*!**************************************************!*\
  !*** ./src/app/store/effects/product.effects.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductEffects: () => (/* binding */ ProductEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 347);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _actions_product_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/product.actions */ 3574);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/product.service */ 7359);







class ProductEffects {
  constructor(actions$, productService) {
    this.actions$ = actions$;
    this.productService = productService;
    this.loadProducts$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_product_actions__WEBPACK_IMPORTED_MODULE_0__.loadProducts), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(({
      params
    }) => this.productService.getProducts(params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(paginatedResponse => _actions_product_actions__WEBPACK_IMPORTED_MODULE_0__.loadProductsSuccess({
      paginatedResponse
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(_actions_product_actions__WEBPACK_IMPORTED_MODULE_0__.loadProductsFailure({
      error
    })))))));
    this.loadProductById$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_product_actions__WEBPACK_IMPORTED_MODULE_0__.loadProductById), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(({
      productId
    }) => this.productService.getProductById(productId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(product => _actions_product_actions__WEBPACK_IMPORTED_MODULE_0__.loadProductByIdSuccess({
      product
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(_actions_product_actions__WEBPACK_IMPORTED_MODULE_0__.loadProductByIdFailure({
      error
    })))))));
    this.loadCategories$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_product_actions__WEBPACK_IMPORTED_MODULE_0__.loadCategories), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(() => this.productService.getCategories().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(categories => _actions_product_actions__WEBPACK_IMPORTED_MODULE_0__.loadCategoriesSuccess({
      categories
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(_actions_product_actions__WEBPACK_IMPORTED_MODULE_0__.loadCategoriesFailure({
      error
    })))))));
  }
  static {
    this.ɵfac = function ProductEffects_Factory(t) {
      return new (t || ProductEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_core_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      token: ProductEffects,
      factory: ProductEffects.ɵfac
    });
  }
}


/***/ }),

/***/ 8144:
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   metaReducers: () => (/* binding */ metaReducers),
/* harmony export */   reducers: () => (/* binding */ reducers)
/* harmony export */ });
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/router-store */ 2175);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/auth.reducer */ 286);
/* harmony import */ var _reducers_cart_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/cart.reducer */ 3326);
/* harmony import */ var _reducers_products_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/products.reducer */ 988);
/* harmony import */ var _reducers_orders_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/orders.reducer */ 7381);
/* harmony import */ var _reducers_ui_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers/ui.reducer */ 9874);


// Import feature reducers





// Combine all reducers
const reducers = {
  router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_6__.routerReducer,
  auth: _reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer,
  cart: _reducers_cart_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer,
  products: _reducers_products_reducer__WEBPACK_IMPORTED_MODULE_3__.reducer,
  orders: _reducers_orders_reducer__WEBPACK_IMPORTED_MODULE_4__.reducer,
  ui: _reducers_ui_reducer__WEBPACK_IMPORTED_MODULE_5__.reducer
};
// Meta reducers
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production ? [] : [];

/***/ }),

/***/ 286:
/*!************************************************!*\
  !*** ./src/app/store/reducers/auth.reducer.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 1383);

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null
};
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createReducer)(initialState
// Add actions later
);

/***/ }),

/***/ 3326:
/*!************************************************!*\
  !*** ./src/app/store/reducers/cart.reducer.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 1383);

const initialState = {
  items: [],
  total: 0,
  loading: false,
  error: null
};
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createReducer)(initialState
// Add actions later
);

/***/ }),

/***/ 7381:
/*!**************************************************!*\
  !*** ./src/app/store/reducers/orders.reducer.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 1383);

const initialState = {
  orders: [],
  currentOrder: null,
  loading: false,
  error: null
};
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createReducer)(initialState
// Add actions later
);

/***/ }),

/***/ 988:
/*!****************************************************!*\
  !*** ./src/app/store/reducers/products.reducer.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 1383);

const initialState = {
  items: [],
  categories: [],
  reviews: [],
  selectedProduct: null,
  currentProduct: null,
  total: 0,
  loading: false,
  error: null
};
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createReducer)(initialState
// Add actions later
);

/***/ }),

/***/ 9874:
/*!**********************************************!*\
  !*** ./src/app/store/reducers/ui.reducer.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initialState: () => (/* binding */ initialState),
/* harmony export */   reducer: () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var _actions_ui_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/ui.actions */ 3013);


const initialState = {
  loading: false,
  sidenavOpen: false,
  error: null
};
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_ui_actions__WEBPACK_IMPORTED_MODULE_0__.setLoading, (state, {
  isLoading
}) => ({
  ...state,
  loading: isLoading
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_ui_actions__WEBPACK_IMPORTED_MODULE_0__.setError, (state, {
  error
}) => ({
  ...state,
  error
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_ui_actions__WEBPACK_IMPORTED_MODULE_0__.clearNotification, state => ({
  ...state,
  error: null
})));

/***/ }),

/***/ 1647:
/*!***************************************************!*\
  !*** ./src/app/store/selectors/auth.selectors.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectAuthError: () => (/* binding */ selectAuthError),
/* harmony export */   selectAuthLoading: () => (/* binding */ selectAuthLoading),
/* harmony export */   selectAuthState: () => (/* binding */ selectAuthState),
/* harmony export */   selectCurrentUser: () => (/* binding */ selectCurrentUser),
/* harmony export */   selectIsAdmin: () => (/* binding */ selectIsAdmin),
/* harmony export */   selectIsAuthenticated: () => (/* binding */ selectIsAuthenticated)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 1383);

const selectAuthState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('auth');
const selectIsAuthenticated = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectAuthState, state => state.isAuthenticated);
const selectCurrentUser = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectAuthState, state => state.user);
const selectAuthError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectAuthState, state => state.error);
const selectAuthLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectAuthState, state => state.loading);
const selectIsAdmin = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectCurrentUser, user => user?.isAdmin || false);

/***/ }),

/***/ 919:
/*!***************************************************!*\
  !*** ./src/app/store/selectors/cart.selectors.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectCartError: () => (/* binding */ selectCartError),
/* harmony export */   selectCartItemCount: () => (/* binding */ selectCartItemCount),
/* harmony export */   selectCartItems: () => (/* binding */ selectCartItems),
/* harmony export */   selectCartLoading: () => (/* binding */ selectCartLoading),
/* harmony export */   selectCartState: () => (/* binding */ selectCartState),
/* harmony export */   selectCartTotal: () => (/* binding */ selectCartTotal)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 1383);

const selectCartState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('cart');
const selectCartItems = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectCartState, state => state.items);
const selectCartItemCount = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectCartItems, items => items.reduce((count, item) => count + item.quantity, 0));
const selectCartTotal = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectCartItems, items => items.reduce((total, item) => total + item.price * item.quantity, 0));
const selectCartLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectCartState, state => state.loading);
const selectCartError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectCartState, state => state.error);

/***/ }),

/***/ 2155:
/*!*************************************************!*\
  !*** ./src/app/store/selectors/ui.selectors.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectError: () => (/* binding */ selectError),
/* harmony export */   selectIsLoading: () => (/* binding */ selectIsLoading),
/* harmony export */   selectSidenavOpen: () => (/* binding */ selectSidenavOpen),
/* harmony export */   selectUiState: () => (/* binding */ selectUiState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 1383);

const selectUiState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('ui');
const selectIsLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectUiState, state => state.loading);
const selectSidenavOpen = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectUiState, state => state.sidenavOpen);
const selectError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectUiState, state => state.error);

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  apiUrl: '/api',
  useMockData: false,
  useFakeStoreApi: true // Added flag for Fake Store API
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map