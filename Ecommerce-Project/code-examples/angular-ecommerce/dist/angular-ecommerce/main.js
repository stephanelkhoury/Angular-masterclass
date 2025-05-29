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
      styles: ["[_nghost-%COMP%] {\n  --primary: #6366f1;\n  --primary-light: #8b5cf6;\n  --primary-dark: #4f46e5;\n  --success: #10b981;\n  --warning: #f59e0b;\n  --error: #ef4444;\n  --accent: #06b6d4;\n  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);\n  --gradient-dark: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);\n  --gray-50: #f8fafc;\n  --gray-100: #f1f5f9;\n  --gray-200: #e2e8f0;\n  --gray-300: #cbd5e1;\n  --gray-400: #94a3b8;\n  --gray-500: #64748b;\n  --gray-600: #475569;\n  --gray-700: #334155;\n  --gray-800: #1e293b;\n  --gray-900: #0f172a;\n  --space-xs: 0.25rem;\n  --space-sm: 0.5rem;\n  --space-md: 1rem;\n  --space-lg: 1.5rem;\n  --space-xl: 2rem;\n  --space-2xl: 3rem;\n  --font-size-xs: 0.75rem;\n  --font-size-sm: 0.875rem;\n  --font-size-base: 1rem;\n  --font-size-lg: 1.125rem;\n  --font-size-xl: 1.25rem;\n  --font-size-2xl: 1.5rem;\n  --font-size-3xl: 1.875rem;\n  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n  --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  --shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  display: block;\n  width: 100%;\n  margin-top: auto;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background: var(--gradient-dark);\n  color: var(--gray-100);\n  font-family: \"Inter\", \"Segoe UI\", system-ui, -apple-system, sans-serif;\n  position: relative;\n}\n.footer[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background: linear-gradient(90deg, transparent, var(--primary), transparent);\n}\n\n.newsletter-section[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  padding: var(--space-2xl) 0;\n  position: relative;\n  overflow: hidden;\n}\n.newsletter-section[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 20\"><defs><radialGradient id=\"a\" cx=\"50%\" cy=\"50%\"><stop offset=\"0%\" stop-color=\"white\" stop-opacity=\"0.1\"/><stop offset=\"100%\" stop-color=\"white\" stop-opacity=\"0\"/></radialGradient></defs><circle cx=\"10\" cy=\"10\" r=\"8\" fill=\"url(%23a)\"/><circle cx=\"50\" cy=\"10\" r=\"6\" fill=\"url(%23a)\"/><circle cx=\"90\" cy=\"10\" r=\"4\" fill=\"url(%23a)\"/></svg>') repeat;\n  animation: _ngcontent-%COMP%_float 20s infinite linear;\n}\n.newsletter-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-2xl);\n}\n@media (max-width: 768px) {\n  .newsletter-section[_ngcontent-%COMP%]   .newsletter-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: var(--space-lg);\n  }\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  font-weight: 700;\n  margin: 0 0 var(--space-sm) 0;\n  color: white;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  margin: 0;\n  color: rgba(255, 255, 255, 0.9);\n  line-height: 1.6;\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 400px;\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   .newsletter-form-wrapper[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-sm);\n  background: white;\n  border-radius: 2rem;\n  padding: var(--space-xs);\n  box-shadow: var(--shadow-lg);\n}\n@media (max-width: 480px) {\n  .newsletter-section[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   .newsletter-form-wrapper[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n    flex-direction: column;\n    border-radius: 1rem;\n  }\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   .newsletter-form-wrapper[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .newsletter-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  padding: var(--space-md) var(--space-lg);\n  font-size: var(--font-size-base);\n  background: transparent;\n  color: var(--gray-800);\n  border-radius: 2rem;\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   .newsletter-form-wrapper[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .newsletter-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--gray-500);\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   .newsletter-form-wrapper[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .newsletter-input[_ngcontent-%COMP%]:focus {\n  background: var(--gray-50);\n}\n@media (max-width: 480px) {\n  .newsletter-section[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   .newsletter-form-wrapper[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .newsletter-input[_ngcontent-%COMP%] {\n    border-radius: 0.75rem;\n  }\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   .newsletter-form-wrapper[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .newsletter-button[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  border: none;\n  border-radius: 2rem;\n  padding: var(--space-md) var(--space-xl);\n  font-weight: 600;\n  font-size: var(--font-size-base);\n  cursor: pointer;\n  transition: var(--transition);\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  gap: var(--space-sm);\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   .newsletter-form-wrapper[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .newsletter-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-dark);\n  transform: translateY(-1px);\n  box-shadow: var(--shadow-md);\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   .newsletter-form-wrapper[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .newsletter-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.newsletter-section[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   .newsletter-form-wrapper[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .newsletter-button[_ngcontent-%COMP%]   .loading-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-sm);\n}\n@media (max-width: 480px) {\n  .newsletter-section[_ngcontent-%COMP%]   .newsletter-form[_ngcontent-%COMP%]   .newsletter-form-wrapper[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   .newsletter-button[_ngcontent-%COMP%] {\n    border-radius: 0.75rem;\n    justify-content: center;\n  }\n}\n\n.main-footer[_ngcontent-%COMP%] {\n  padding: var(--space-2xl) 0;\n}\n.main-footer[_ngcontent-%COMP%]   .footer-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr 1fr;\n  gap: var(--space-2xl);\n}\n@media (max-width: 1024px) {\n  .main-footer[_ngcontent-%COMP%]   .footer-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1.5fr 1fr 1fr;\n    gap: var(--space-xl);\n  }\n}\n@media (max-width: 768px) {\n  .main-footer[_ngcontent-%COMP%]   .footer-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: var(--space-lg);\n  }\n}\n@media (max-width: 480px) {\n  .main-footer[_ngcontent-%COMP%]   .footer-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: var(--space-lg);\n    text-align: center;\n  }\n}\n.main-footer[_ngcontent-%COMP%]   .footer-column.company-info[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--font-size-3xl);\n  font-weight: 800;\n  margin: 0 0 var(--space-md) 0;\n  background: linear-gradient(135deg, var(--primary), var(--accent));\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.main-footer[_ngcontent-%COMP%]   .footer-column.company-info[_ngcontent-%COMP%]   .company-description[_ngcontent-%COMP%] {\n  font-size: var(--font-size-base);\n  line-height: 1.7;\n  color: var(--gray-300);\n  margin: 0 0 var(--space-lg) 0;\n}\n.main-footer[_ngcontent-%COMP%]   .footer-column.company-info[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-sm);\n  margin-bottom: var(--space-sm);\n  font-size: var(--font-size-sm);\n  color: var(--gray-300);\n}\n@media (max-width: 480px) {\n  .main-footer[_ngcontent-%COMP%]   .footer-column.company-info[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n.main-footer[_ngcontent-%COMP%]   .footer-column.company-info[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%]   .contact-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.main-footer[_ngcontent-%COMP%]   .footer-column[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  font-weight: 700;\n  margin: 0 0 var(--space-lg) 0;\n  color: white;\n  position: relative;\n}\n.main-footer[_ngcontent-%COMP%]   .footer-column[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -var(--space-sm);\n  left: 0;\n  width: 2rem;\n  height: 2px;\n  background: var(--primary);\n  border-radius: 1px;\n}\n@media (max-width: 480px) {\n  .main-footer[_ngcontent-%COMP%]   .footer-column[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::after {\n    left: 50%;\n    transform: translateX(-50%);\n  }\n}\n.main-footer[_ngcontent-%COMP%]   .footer-column[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.main-footer[_ngcontent-%COMP%]   .footer-column[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-sm);\n}\n.main-footer[_ngcontent-%COMP%]   .footer-column[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--gray-300);\n  text-decoration: none;\n  font-size: var(--font-size-sm);\n  transition: var(--transition);\n  display: inline-block;\n}\n.main-footer[_ngcontent-%COMP%]   .footer-column[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n  transform: translateX(4px);\n}\n\n.features-section[_ngcontent-%COMP%] {\n  background: var(--gray-50);\n  color: var(--gray-800);\n  padding: var(--space-xl) 0;\n}\n.features-section[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: var(--space-lg);\n}\n@media (max-width: 480px) {\n  .features-section[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.features-section[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-md);\n  background: white;\n  border-radius: 1rem;\n  padding: var(--space-lg);\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--gray-200);\n  transition: var(--transition);\n}\n.features-section[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n  border-color: var(--primary);\n}\n.features-section[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 2rem;\n  width: 2rem;\n  height: 2rem;\n  background: rgba(99, 102, 241, 0.1);\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 2rem;\n}\n.features-section[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   .feature-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: var(--font-size-base);\n  font-weight: 700;\n  margin: 0 0 var(--space-xs) 0;\n  color: var(--gray-800);\n}\n.features-section[_ngcontent-%COMP%]   .features-grid[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   .feature-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  margin: 0;\n  color: var(--gray-600);\n}\n\n.bottom-footer[_ngcontent-%COMP%] {\n  background: var(--gray-900);\n  color: var(--gray-400);\n  padding: var(--space-lg) 0;\n  border-top: 1px solid var(--gray-700);\n}\n.bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-lg);\n}\n@media (max-width: 768px) {\n  .bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: var(--space-md);\n  }\n}\n.bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n}\n.bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-md);\n}\n@media (max-width: 768px) {\n  .bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: var(--space-sm);\n  }\n}\n.bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  font-weight: 600;\n  color: var(--gray-300);\n}\n.bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-sm);\n}\n.bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%]   .payment-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 1.5rem;\n  background: var(--gray-800);\n  border: 1px solid var(--gray-700);\n  border-radius: 0.25rem;\n  font-size: var(--font-size-xs);\n  font-weight: 600;\n  color: var(--gray-300);\n  transition: var(--transition);\n}\n.bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%]   .payment-icon[_ngcontent-%COMP%]:hover {\n  background: var(--gray-700);\n  border-color: var(--primary);\n  color: white;\n}\n.bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%]   .payment-icon.visa[_ngcontent-%COMP%] {\n  color: #1a1f71;\n  background: #f7f7f7;\n}\n.bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%]   .payment-icon.mastercard[_ngcontent-%COMP%] {\n  color: #eb001b;\n  background: #f7f7f7;\n}\n.bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%]   .payment-icon.amex[_ngcontent-%COMP%] {\n  color: #006fcf;\n  background: #f7f7f7;\n}\n.bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%]   .payment-icon.paypal[_ngcontent-%COMP%] {\n  color: #003087;\n  background: #f7f7f7;\n}\n.bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .payment-methods[_ngcontent-%COMP%]   .payment-icons[_ngcontent-%COMP%]   .payment-icon.apple-pay[_ngcontent-%COMP%] {\n  color: #000;\n  background: #f7f7f7;\n}\n.bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--space-sm);\n}\n.bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 50%;\n  background: var(--gray-800);\n  color: var(--gray-400);\n  border: 1px solid var(--gray-700);\n  transition: var(--transition);\n}\n.bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n  border-color: var(--primary);\n  color: white;\n  transform: translateY(-2px);\n}\n.bottom-footer[_ngcontent-%COMP%]   .bottom-footer-content[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n}\n\n.back-to-top[_ngcontent-%COMP%] {\n  position: fixed;\n  right: var(--space-lg);\n  bottom: var(--space-lg);\n  width: 3rem;\n  height: 3rem;\n  background: var(--primary);\n  color: white;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: var(--shadow-lg);\n  cursor: pointer;\n  transition: var(--transition);\n  z-index: 1000;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(1rem);\n}\n.back-to-top.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n}\n.back-to-top[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n  transform: translateY(-2px) scale(1.05);\n  box-shadow: var(--shadow-xl);\n}\n.back-to-top[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  width: 1.5rem;\n  height: 1.5rem;\n}\n@media (max-width: 480px) {\n  .back-to-top[_ngcontent-%COMP%] {\n    right: var(--space-md);\n    bottom: var(--space-md);\n    width: 2.5rem;\n    height: 2.5rem;\n  }\n  .back-to-top[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n    width: 1.25rem;\n    height: 1.25rem;\n  }\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 var(--space-lg);\n}\n@media (max-width: 480px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0 var(--space-md);\n  }\n}\n\n@keyframes _ngcontent-%COMP%_float {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n}\n@media (prefers-contrast: high) {\n  [_nghost-%COMP%] {\n    --gray-300: #a0a0a0;\n    --gray-400: #808080;\n    --gray-600: #404040;\n  }\n  .footer[_ngcontent-%COMP%] {\n    border-top: 2px solid var(--primary);\n  }\n  .footer-column[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::after {\n    height: 3px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  *[_ngcontent-%COMP%] {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n  }\n  .newsletter-section[_ngcontent-%COMP%]::before {\n    animation: none;\n  }\n}\n@media print {\n  .footer[_ngcontent-%COMP%] {\n    background: white !important;\n    color: black !important;\n  }\n  .footer[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    background: transparent !important;\n    color: black !important;\n    box-shadow: none !important;\n  }\n  .newsletter-section[_ngcontent-%COMP%], .features-section[_ngcontent-%COMP%], .back-to-top[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .social-links[_ngcontent-%COMP%], .payment-methods[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUVBQUE7RUFDQSx1RUFBQTtFQUNBLGtFQUFBO0VBR0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFHQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFHQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUdBLG1EQUFBO0VBQ0EsNENBQUE7RUFDQSwyQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsZ0RBQUE7RUFDQSxrREFBQTtFQUVBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFURjs7QUFZQTtFQUNFLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxzRUFBQTtFQUNBLGtCQUFBO0FBVEY7QUFXRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSw0RUFBQTtBQVRKOztBQWNBO0VBQ0UsbUNBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFYRjtBQWFFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHliQUFBO0VBQ0Esb0NBQUE7QUFYSjtBQWNFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FB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QTtFQUNBLGNBQUE7QUEvQ0o7QUFrREU7RUF2Q0Y7SUF3Q0ksc0JBQUE7SUFDQSx1QkFBQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0VBL0NGO0VBaURFO0lBQ0Usa0JBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtFQS9DSjtBQUNGOztBQW9EQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FBakRGO0FBbURFO0VBTEY7SUFNSSwwQkFBQTtFQWhERjtBQUNGOztBQW9EQTtFQUNFO0lBQUssNEJBQUE7RUFoREw7RUFpREE7SUFBTywyQkFBQTtFQTlDUDtBQUNGO0FBaURBO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7RUEvQ0Y7RUFrREE7SUFDRSxvQ0FBQTtFQWhERjtFQW1EQTtJQUNFLFdBQUE7RUFqREY7QUFDRjtBQXFEQTtFQUNFO0lBQ0UscUNBQUE7SUFDQSx1Q0FBQTtJQUNBLHNDQUFBO0VBbkRGO0VBc0RBO0lBQ0UsZUFBQTtFQXBERjtBQUNGO0FBd0RBO0VBQ0U7SUFDRSw0QkFBQTtJQUNBLHVCQUFBO0VBdERGO0VBd0RFO0lBQ0Usa0NBQUE7SUFDQSx1QkFBQTtJQUNBLDJCQUFBO0VBdERKO0VBMERBOzs7SUFHRSx3QkFBQTtFQXhERjtFQTJEQTs7SUFFRSx3QkFBQTtFQXpERjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9kZXJuIEZvb3RlciBDb21wb25lbnQgLSBDb21wbGV0ZSBVSSBPdmVyaGF1bFxuOmhvc3Qge1xuICAtLXByaW1hcnk6ICM2MzY2ZjE7XG4gIC0tcHJpbWFyeS1saWdodDogIzhiNWNmNjtcbiAgLS1wcmltYXJ5LWRhcms6ICM0ZjQ2ZTU7XG4gIC0tc3VjY2VzczogIzEwYjk4MTtcbiAgLS13YXJuaW5nOiAjZjU5ZTBiO1xuICAtLWVycm9yOiAjZWY0NDQ0O1xuICAtLWFjY2VudDogIzA2YjZkNDtcbiAgLS1ncmFkaWVudC1wcmltYXJ5OiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuICAtLWdyYWRpZW50LXNlY29uZGFyeTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2YwOTNmYiAwJSwgI2Y1NTc2YyAxMDAlKTtcbiAgLS1ncmFkaWVudC1kYXJrOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMmMzZTUwIDAlLCAjMzQ0OTVlIDEwMCUpO1xuICBcbiAgLy8gR3JheSBzY2FsZSB3aXRoIGJldHRlciBjb250cmFzdFxuICAtLWdyYXktNTA6ICNmOGZhZmM7XG4gIC0tZ3JheS0xMDA6ICNmMWY1Zjk7XG4gIC0tZ3JheS0yMDA6ICNlMmU4ZjA7XG4gIC0tZ3JheS0zMDA6ICNjYmQ1ZTE7XG4gIC0tZ3JheS00MDA6ICM5NGEzYjg7XG4gIC0tZ3JheS01MDA6ICM2NDc0OGI7XG4gIC0tZ3JheS02MDA6ICM0NzU1Njk7XG4gIC0tZ3JheS03MDA6ICMzMzQxNTU7XG4gIC0tZ3JheS04MDA6ICMxZTI5M2I7XG4gIC0tZ3JheS05MDA6ICMwZjE3MmE7XG4gIFxuICAvLyBTcGFjaW5nXG4gIC0tc3BhY2UteHM6IDAuMjVyZW07XG4gIC0tc3BhY2Utc206IDAuNXJlbTtcbiAgLS1zcGFjZS1tZDogMXJlbTtcbiAgLS1zcGFjZS1sZzogMS41cmVtO1xuICAtLXNwYWNlLXhsOiAycmVtO1xuICAtLXNwYWNlLTJ4bDogM3JlbTtcbiAgXG4gIC8vIFR5cG9ncmFwaHlcbiAgLS1mb250LXNpemUteHM6IDAuNzVyZW07XG4gIC0tZm9udC1zaXplLXNtOiAwLjg3NXJlbTtcbiAgLS1mb250LXNpemUtYmFzZTogMXJlbTtcbiAgLS1mb250LXNpemUtbGc6IDEuMTI1cmVtO1xuICAtLWZvbnQtc2l6ZS14bDogMS4yNXJlbTtcbiAgLS1mb250LXNpemUtMnhsOiAxLjVyZW07XG4gIC0tZm9udC1zaXplLTN4bDogMS44NzVyZW07XG4gIFxuICAvLyBFZmZlY3RzXG4gIC0tdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgLS1zaGFkb3ctc206IDAgMXB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIC0tc2hhZG93OiAwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC0tc2hhZG93LW1kOiAwIDEwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLS1zaGFkb3ctbGc6IDAgMjBweCAyNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtLXNoYWRvdy14bDogMCAyNXB4IDUwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogYXV0bztcbn1cblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LWRhcmspO1xuICBjb2xvcjogdmFyKC0tZ3JheS0xMDApO1xuICBmb250LWZhbWlseTogJ0ludGVyJywgJ1NlZ29lIFVJJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50LCB2YXIoLS1wcmltYXJ5KSwgdHJhbnNwYXJlbnQpO1xuICB9XG59XG5cbi8vIE5ld3NsZXR0ZXIgU2VjdGlvblxuLm5ld3NsZXR0ZXItc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS0yeGwpIDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDEwMCAyMFwiPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD1cImFcIiBjeD1cIjUwJVwiIGN5PVwiNTAlXCI+PHN0b3Agb2Zmc2V0PVwiMCVcIiBzdG9wLWNvbG9yPVwid2hpdGVcIiBzdG9wLW9wYWNpdHk9XCIwLjFcIi8+PHN0b3Agb2Zmc2V0PVwiMTAwJVwiIHN0b3AtY29sb3I9XCJ3aGl0ZVwiIHN0b3Atb3BhY2l0eT1cIjBcIi8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD1cIjEwXCIgY3k9XCIxMFwiIHI9XCI4XCIgZmlsbD1cInVybCglMjNhKVwiLz48Y2lyY2xlIGN4PVwiNTBcIiBjeT1cIjEwXCIgcj1cIjZcIiBmaWxsPVwidXJsKCUyM2EpXCIvPjxjaXJjbGUgY3g9XCI5MFwiIGN5PVwiMTBcIiByPVwiNFwiIGZpbGw9XCJ1cmwoJTIzYSlcIi8+PC9zdmc+JykgcmVwZWF0O1xuICAgIGFuaW1hdGlvbjogZmxvYXQgMjBzIGluZmluaXRlIGxpbmVhcjtcbiAgfVxuICBcbiAgLmNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgXG4gIC5uZXdzbGV0dGVyLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiB2YXIoLS1zcGFjZS0yeGwpO1xuICAgIFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGdhcDogdmFyKC0tc3BhY2UtbGcpO1xuICAgIH1cbiAgfVxuICBcbiAgLm5ld3NsZXR0ZXItdGV4dCB7XG4gICAgZmxleDogMTtcbiAgICBcbiAgICBoMyB7XG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0yeGwpO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIG1hcmdpbjogMCAwIHZhcigtLXNwYWNlLXNtKSAwO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgdGV4dC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgfVxuICAgIFxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGcpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgfVxuICB9XG4gIFxuICAubmV3c2xldHRlci1mb3JtIHtcbiAgICBmbGV4OiAxO1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgXG4gICAgLm5ld3NsZXR0ZXItZm9ybS13cmFwcGVyIHtcbiAgICAgIC5pbnB1dC1ncm91cCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogdmFyKC0tc3BhY2Utc20pO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICAgICAgcGFkZGluZzogdmFyKC0tc3BhY2UteHMpO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbGcpO1xuICAgICAgICBcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAubmV3c2xldHRlci1pbnB1dCB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1tZCkgdmFyKC0tc3BhY2UtbGcpO1xuICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWJhc2UpO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICAgICAgICBcbiAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JheS01MDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYXktNTApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAubmV3c2xldHRlci1idXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1tZCkgdmFyKC0tc3BhY2UteGwpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGdhcDogdmFyKC0tc3BhY2Utc20pO1xuICAgICAgICAgIFxuICAgICAgICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1kYXJrKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLmxvYWRpbmctdGV4dCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGdhcDogdmFyKC0tc3BhY2Utc20pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gTWFpbiBGb290ZXIgQ29udGVudFxuLm1haW4tZm9vdGVyIHtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtMnhsKSAwO1xuICBcbiAgLmZvb3Rlci1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciAxZnIgMWZyO1xuICAgIGdhcDogdmFyKC0tc3BhY2UtMnhsKTtcbiAgICBcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuNWZyIDFmciAxZnI7XG4gICAgICBnYXA6IHZhcigtLXNwYWNlLXhsKTtcbiAgICB9XG4gICAgXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICBnYXA6IHZhcigtLXNwYWNlLWxnKTtcbiAgICB9XG4gICAgXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgIGdhcDogdmFyKC0tc3BhY2UtbGcpO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxuICBcbiAgLmZvb3Rlci1jb2x1bW4ge1xuICAgICYuY29tcGFueS1pbmZvIHtcbiAgICAgIC5mb290ZXItbG9nbyB7XG4gICAgICAgIGgzIHtcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0zeGwpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgdmFyKC0tc3BhY2UtbWQpIDA7XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHJpbWFyeSksIHZhcigtLWFjY2VudCkpO1xuICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmNvbXBhbnktZGVzY3JpcHRpb24ge1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNztcbiAgICAgICAgY29sb3I6IHZhcigtLWdyYXktMzAwKTtcbiAgICAgICAgbWFyZ2luOiAwIDAgdmFyKC0tc3BhY2UtbGcpIDA7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5jb250YWN0LWluZm8ge1xuICAgICAgICAuY29udGFjdC1pdGVtIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZ2FwOiB2YXIoLS1zcGFjZS1zbSk7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2Utc20pO1xuICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JheS0zMDApO1xuICAgICAgICAgIFxuICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgd2lkdGg6IDEuMnJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMS4ycmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBoNCB7XG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1sZyk7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgbWFyZ2luOiAwIDAgdmFyKC0tc3BhY2UtbGcpIDA7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBcbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAtdmFyKC0tc3BhY2Utc20pO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMnJlbTtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgICAgIFxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5mb290ZXItbGlua3Mge1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBcbiAgICAgIGxpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2Utc20pO1xuICAgICAgICBcbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWdyYXktMzAwKTtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xuICAgICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBcbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBGZWF0dXJlcyBTZWN0aW9uXG4uZmVhdHVyZXMtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktNTApO1xuICBjb2xvcjogdmFyKC0tZ3JheS04MDApO1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS14bCkgMDtcbiAgXG4gIC5mZWF0dXJlcy1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICAgIGdhcDogdmFyKC0tc3BhY2UtbGcpO1xuICAgIFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxuICAgIFxuICAgIC5mZWF0dXJlLWl0ZW0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IHZhcigtLXNwYWNlLW1kKTtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLWxnKTtcbiAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5LTIwMCk7XG4gICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgbWF0LWljb24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgd2lkdGg6IDJyZW07XG4gICAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSg5OSwgMTAyLCAyNDEsIDAuMSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1pbi13aWR0aDogMnJlbTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmZlYXR1cmUtY29udGVudCB7XG4gICAgICAgIGg1IHtcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIG1hcmdpbjogMCAwIHZhcigtLXNwYWNlLXhzKSAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LTgwMCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWdyYXktNjAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBCb3R0b20gRm9vdGVyXG4uYm90dG9tLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYXktOTAwKTtcbiAgY29sb3I6IHZhcigtLWdyYXktNDAwKTtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtbGcpIDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ncmF5LTcwMCk7XG4gIFxuICAuYm90dG9tLWZvb3Rlci1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogdmFyKC0tc3BhY2UtbGcpO1xuICAgIFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGdhcDogdmFyKC0tc3BhY2UtbWQpO1xuICAgIH1cbiAgICBcbiAgICAuY29weXJpZ2h0IHtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcbiAgICAgIFxuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnBheW1lbnQtbWV0aG9kcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogdmFyKC0tc3BhY2UtbWQpO1xuICAgICAgXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiB2YXIoLS1zcGFjZS1zbSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5wYXltZW50LWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtc20pO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogdmFyKC0tZ3JheS0zMDApO1xuICAgICAgfVxuICAgICAgXG4gICAgICAucGF5bWVudC1pY29ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogdmFyKC0tc3BhY2Utc20pO1xuICAgICAgICBcbiAgICAgICAgLnBheW1lbnQtaWNvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAyLjVyZW07XG4gICAgICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS04MDApO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXktNzAwKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzKTtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LTMwMCk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgICAgICAgXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTcwMCk7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAmLnZpc2EgeyBjb2xvcjogIzFhMWY3MTsgYmFja2dyb3VuZDogI2Y3ZjdmNzsgfVxuICAgICAgICAgICYubWFzdGVyY2FyZCB7IGNvbG9yOiAjZWIwMDFiOyBiYWNrZ3JvdW5kOiAjZjdmN2Y3OyB9XG4gICAgICAgICAgJi5hbWV4IHsgY29sb3I6ICMwMDZmY2Y7IGJhY2tncm91bmQ6ICNmN2Y3Zjc7IH1cbiAgICAgICAgICAmLnBheXBhbCB7IGNvbG9yOiAjMDAzMDg3OyBiYWNrZ3JvdW5kOiAjZjdmN2Y3OyB9XG4gICAgICAgICAgJi5hcHBsZS1wYXkgeyBjb2xvcjogIzAwMDsgYmFja2dyb3VuZDogI2Y3ZjdmNzsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5zb2NpYWwtbGlua3Mge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogdmFyKC0tc3BhY2Utc20pO1xuICAgICAgXG4gICAgICAuc29jaWFsLWxpbmsge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDIuNXJlbTtcbiAgICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS04MDApO1xuICAgICAgICBjb2xvcjogdmFyKC0tZ3JheS00MDApO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5LTcwMCk7XG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgICBcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBtYXQtaWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgd2lkdGg6IDEuMnJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDEuMnJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBCYWNrIHRvIFRvcCBCdXR0b25cbi5iYWNrLXRvLXRvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IHZhcigtLXNwYWNlLWxnKTtcbiAgYm90dG9tOiB2YXIoLS1zcGFjZS1sZyk7XG4gIHdpZHRoOiAzcmVtO1xuICBoZWlnaHQ6IDNyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWxnKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgei1pbmRleDogMTAwMDtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXJlbSk7XG4gIFxuICAmLnZpc2libGUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktZGFyayk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpIHNjYWxlKDEuMDUpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy14bCk7XG4gIH1cbiAgXG4gIG1hdC1pY29uIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB3aWR0aDogMS41cmVtO1xuICAgIGhlaWdodDogMS41cmVtO1xuICB9XG4gIFxuICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICByaWdodDogdmFyKC0tc3BhY2UtbWQpO1xuICAgIGJvdHRvbTogdmFyKC0tc3BhY2UtbWQpO1xuICAgIHdpZHRoOiAyLjVyZW07XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgXG4gICAgbWF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgd2lkdGg6IDEuMjVyZW07XG4gICAgICBoZWlnaHQ6IDEuMjVyZW07XG4gICAgfVxuICB9XG59XG5cbi8vIENvbnRhaW5lciB1dGlsaXR5XG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLWxnKTtcbiAgXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIHBhZGRpbmc6IDAgdmFyKC0tc3BhY2UtbWQpO1xuICB9XG59XG5cbi8vIEFuaW1hdGlvbnNcbkBrZXlmcmFtZXMgZmxvYXQge1xuICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTsgfVxufVxuXG4vLyBIaWdoIGNvbnRyYXN0IG1vZGUgc3VwcG9ydFxuQG1lZGlhIChwcmVmZXJzLWNvbnRyYXN0OiBoaWdoKSB7XG4gIDpob3N0IHtcbiAgICAtLWdyYXktMzAwOiAjYTBhMGEwO1xuICAgIC0tZ3JheS00MDA6ICM4MDgwODA7XG4gICAgLS1ncmF5LTYwMDogIzQwNDA0MDtcbiAgfVxuICBcbiAgLmZvb3RlciB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xuICB9XG4gIFxuICAuZm9vdGVyLWNvbHVtbiBoNDo6YWZ0ZXIge1xuICAgIGhlaWdodDogM3B4O1xuICB9XG59XG5cbi8vIFJlZHVjZWQgbW90aW9uIHN1cHBvcnRcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gICoge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4wMW1zICFpbXBvcnRhbnQ7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAubmV3c2xldHRlci1zZWN0aW9uOjpiZWZvcmUge1xuICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgfVxufVxuXG4vLyBQcmludCBzdHlsZXNcbkBtZWRpYSBwcmludCB7XG4gIC5mb290ZXIge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgXG4gICAgKiB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIFxuICAubmV3c2xldHRlci1zZWN0aW9uLFxuICAuZmVhdHVyZXMtc2VjdGlvbixcbiAgLmJhY2stdG8tdG9wIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5zb2NpYWwtbGlua3MsXG4gIC5wYXltZW50LW1ldGhvZHMge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
      styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  --primary: #6366f1;\n  --primary-light: #8b5cf6;\n  --primary-dark: #4f46e5;\n  --success: #10b981;\n  --warning: #f59e0b;\n  --error: #ef4444;\n  --accent: #06b6d4;\n  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  --gradient-secondary: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);\n  --gray-50: #f8fafc;\n  --gray-100: #f1f5f9;\n  --gray-200: #e2e8f0;\n  --gray-300: #cbd5e1;\n  --gray-400: #94a3b8;\n  --gray-500: #64748b;\n  --gray-600: #475569;\n  --gray-700: #334155;\n  --gray-800: #1e293b;\n  --gray-900: #0f172a;\n  --space-xs: 0.25rem;\n  --space-sm: 0.5rem;\n  --space-md: 1rem;\n  --space-lg: 1.5rem;\n  --space-xl: 2rem;\n  --space-2xl: 3rem;\n  --font-size-xs: 0.75rem;\n  --font-size-sm: 0.875rem;\n  --font-size-base: 1rem;\n  --font-size-lg: 1.125rem;\n  --font-size-xl: 1.25rem;\n  --font-size-2xl: 1.5rem;\n  --font-size-3xl: 1.875rem;\n  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n  --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  --shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n  display: block;\n  width: 100%;\n}\n\n.header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(20px);\n          backdrop-filter: blur(20px);\n  border-bottom: 1px solid var(--gray-200);\n  box-shadow: var(--shadow-sm);\n  transition: var(--transition);\n  font-family: \"Inter\", \"Segoe UI\", system-ui, -apple-system, sans-serif;\n}\n.header.scrolled[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.98);\n  border-color: var(--gray-300);\n  box-shadow: var(--shadow-md);\n}\n\n.header-main[_ngcontent-%COMP%] {\n  padding: var(--space-md) 0;\n}\n.header-main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--space-lg);\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 0 var(--space-lg);\n}\n@media (max-width: 1024px) {\n  .header-main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    gap: var(--space-md);\n  }\n}\n@media (max-width: 768px) {\n  .header-main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    gap: var(--space-sm);\n    padding: 0 var(--space-md);\n  }\n}\n@media (max-width: 480px) {\n  .header-main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    padding: 0 var(--space-sm);\n  }\n}\n\n.logo-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-sm);\n}\n.logo-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n  transition: var(--transition);\n}\n.logo-section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n}\n.logo-section[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: 2.5rem;\n  width: auto;\n  filter: drop-shadow(0 2px 4px rgba(99, 102, 241, 0.2));\n}\n@media (max-width: 768px) {\n  .logo-section[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    height: 2rem;\n  }\n}\n.logo-section[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  font-weight: 800;\n  background: var(--gradient-primary);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin: 0;\n  letter-spacing: -0.025em;\n}\n@media (max-width: 768px) {\n  .logo-section[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xl);\n  }\n}\n.logo-section[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]   .brand-tagline[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  color: var(--gray-600);\n  margin: 0;\n  font-weight: 500;\n}\n@media (max-width: 768px) {\n  .logo-section[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]   .brand-tagline[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.search-section[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 600px;\n  position: relative;\n}\n.search-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  background: var(--gray-50);\n  border: 2px solid var(--gray-200);\n  border-radius: 2rem;\n  transition: var(--transition);\n  overflow: hidden;\n}\n.search-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]:focus-within {\n  background: white;\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n.search-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  padding: var(--space-md) var(--space-lg);\n  background: transparent;\n  font-size: var(--font-size-base);\n  color: var(--gray-800);\n}\n.search-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--gray-500);\n}\n.search-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  color: var(--gray-500);\n  margin-right: var(--space-md);\n  font-size: 1.25rem;\n  transition: var(--transition);\n}\n.search-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-clear[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: var(--space-xs);\n  margin-right: var(--space-sm);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--gray-500);\n  cursor: pointer;\n  transition: var(--transition);\n}\n.search-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-clear[_ngcontent-%COMP%]:hover {\n  background: var(--gray-200);\n  color: var(--gray-700);\n}\n.search-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-clear[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.search-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]:focus-within   .search-icon[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.search-section[_ngcontent-%COMP%]   .search-suggestions[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid var(--gray-200);\n  border-radius: 1rem;\n  box-shadow: var(--shadow-lg);\n  z-index: 1000;\n  margin-top: var(--space-xs);\n  overflow: hidden;\n}\n.search-section[_ngcontent-%COMP%]   .search-suggestions[_ngcontent-%COMP%]   .suggestion-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-sm);\n  padding: var(--space-md) var(--space-lg);\n  cursor: pointer;\n  transition: var(--transition);\n  border-bottom: 1px solid var(--gray-100);\n}\n.search-section[_ngcontent-%COMP%]   .search-suggestions[_ngcontent-%COMP%]   .suggestion-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.search-section[_ngcontent-%COMP%]   .search-suggestions[_ngcontent-%COMP%]   .suggestion-item[_ngcontent-%COMP%]:hover {\n  background: var(--gray-50);\n  color: var(--primary);\n}\n.search-section[_ngcontent-%COMP%]   .search-suggestions[_ngcontent-%COMP%]   .suggestion-item[_ngcontent-%COMP%]   .suggestion-icon[_ngcontent-%COMP%] {\n  color: var(--gray-400);\n  font-size: 1rem;\n}\n\n.nav-section[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-lg);\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.nav-section[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  position: relative;\n}\n.nav-section[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item.has-dropdown[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]::after {\n  content: \"\u25BC\";\n  margin-left: var(--space-xs);\n  font-size: 0.75rem;\n  transition: var(--transition);\n}\n.nav-section[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item.has-dropdown[_ngcontent-%COMP%]:hover   .nav-link[_ngcontent-%COMP%]::after, .nav-section[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item.has-dropdown.open[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]::after {\n  transform: rotate(180deg);\n}\n.nav-section[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: var(--gray-700);\n  text-decoration: none;\n  font-weight: 500;\n  font-size: var(--font-size-base);\n  padding: var(--space-sm) var(--space-md);\n  border-radius: 0.5rem;\n  transition: var(--transition);\n  position: relative;\n}\n.nav-section[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .nav-section[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: var(--primary);\n  background: rgba(99, 102, 241, 0.05);\n}\n.nav-section[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: -0.5rem;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 0.5rem;\n  height: 0.5rem;\n  background: var(--primary);\n  border-radius: 50%;\n}\n.nav-section[_ngcontent-%COMP%]   .mega-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  background: white;\n  border: 1px solid var(--gray-200);\n  border-radius: 1rem;\n  box-shadow: var(--shadow-xl);\n  padding: var(--space-xl);\n  min-width: 800px;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateX(-50%) translateY(-10px);\n  transition: var(--transition);\n  z-index: 1000;\n}\n.nav-section[_ngcontent-%COMP%]   .mega-menu.open[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(-50%) translateY(0);\n}\n.nav-section[_ngcontent-%COMP%]   .mega-menu[_ngcontent-%COMP%]   .mega-menu-content[_ngcontent-%COMP%]   .mega-menu-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: var(--space-xl);\n}\n.nav-section[_ngcontent-%COMP%]   .mega-menu[_ngcontent-%COMP%]   .mega-menu-content[_ngcontent-%COMP%]   .mega-menu-grid[_ngcontent-%COMP%]   .mega-menu-category[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-sm);\n  font-size: var(--font-size-base);\n  font-weight: 700;\n  color: var(--gray-800);\n  margin: 0 0 var(--space-md) 0;\n}\n.nav-section[_ngcontent-%COMP%]   .mega-menu[_ngcontent-%COMP%]   .mega-menu-content[_ngcontent-%COMP%]   .mega-menu-grid[_ngcontent-%COMP%]   .mega-menu-category[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 1.2rem;\n}\n.nav-section[_ngcontent-%COMP%]   .mega-menu[_ngcontent-%COMP%]   .mega-menu-content[_ngcontent-%COMP%]   .mega-menu-grid[_ngcontent-%COMP%]   .mega-menu-category[_ngcontent-%COMP%]   .category-links[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.nav-section[_ngcontent-%COMP%]   .mega-menu[_ngcontent-%COMP%]   .mega-menu-content[_ngcontent-%COMP%]   .mega-menu-grid[_ngcontent-%COMP%]   .mega-menu-category[_ngcontent-%COMP%]   .category-links[_ngcontent-%COMP%]   .category-link[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-sm);\n}\n.nav-section[_ngcontent-%COMP%]   .mega-menu[_ngcontent-%COMP%]   .mega-menu-content[_ngcontent-%COMP%]   .mega-menu-grid[_ngcontent-%COMP%]   .mega-menu-category[_ngcontent-%COMP%]   .category-links[_ngcontent-%COMP%]   .category-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--gray-600);\n  text-decoration: none;\n  font-size: var(--font-size-sm);\n  transition: var(--transition);\n  display: block;\n  padding: var(--space-xs) 0;\n}\n.nav-section[_ngcontent-%COMP%]   .mega-menu[_ngcontent-%COMP%]   .mega-menu-content[_ngcontent-%COMP%]   .mega-menu-grid[_ngcontent-%COMP%]   .mega-menu-category[_ngcontent-%COMP%]   .category-links[_ngcontent-%COMP%]   .category-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n  transform: translateX(4px);\n}\n\n.user-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-sm);\n}\n.user-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  border: none;\n  background: transparent;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: var(--transition);\n  color: var(--gray-600);\n}\n.user-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]:hover {\n  background: var(--gray-100);\n  color: var(--primary);\n  transform: scale(1.05);\n}\n.user-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.user-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  background: var(--error);\n  color: white;\n  font-size: 0.75rem;\n  font-weight: 600;\n  min-width: 1.25rem;\n  height: 1.25rem;\n  border-radius: 0.625rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid white;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n.user-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]   .user-avatar-icon[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid var(--gray-200);\n  transition: var(--transition);\n}\n.user-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]:hover   .user-avatar-icon[_ngcontent-%COMP%] {\n  border-color: var(--primary);\n}\n.user-actions[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  border: 2px solid var(--primary);\n  padding: var(--space-sm) var(--space-lg);\n  border-radius: 2rem;\n  font-weight: 600;\n  text-decoration: none;\n  transition: var(--transition);\n  white-space: nowrap;\n}\n.user-actions[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n  border-color: var(--primary-dark);\n  transform: translateY(-1px);\n  box-shadow: var(--shadow-md);\n}\n\n.custom-mat-menu[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%] {\n  padding: var(--space-md);\n  border-bottom: 1px solid var(--gray-200);\n  background: var(--gray-50);\n}\n.custom-mat-menu[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-size: var(--font-size-base);\n  font-weight: 600;\n  margin: 0 0 var(--space-xs) 0;\n  color: var(--gray-800);\n}\n.custom-mat-menu[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%] {\n  font-size: var(--font-size-sm);\n  color: var(--gray-600);\n  margin: 0;\n}\n.custom-mat-menu[_ngcontent-%COMP%]   .mat-mdc-menu-item[_ngcontent-%COMP%]   .dropdown-icon[_ngcontent-%COMP%] {\n  margin-right: var(--space-sm);\n  color: var(--gray-500);\n  font-size: 1.1rem;\n}\n.custom-mat-menu[_ngcontent-%COMP%]   .mat-mdc-menu-item.danger[_ngcontent-%COMP%] {\n  color: var(--error);\n}\n.custom-mat-menu[_ngcontent-%COMP%]   .mat-mdc-menu-item.danger[_ngcontent-%COMP%]   .dropdown-icon[_ngcontent-%COMP%] {\n  color: var(--error);\n}\n.custom-mat-menu[_ngcontent-%COMP%]   .mat-mdc-menu-item[_ngcontent-%COMP%]:hover {\n  background: var(--gray-50);\n}\n\n.mobile-search-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  z-index: 2000;\n  opacity: 0;\n  visibility: hidden;\n  transition: var(--transition);\n}\n.mobile-search-overlay.open[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.mobile-search-overlay[_ngcontent-%COMP%]   .mobile-search-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  background: white;\n  padding: var(--space-xl) var(--space-lg);\n  transform: translateY(-100%);\n  transition: var(--transition);\n}\n.mobile-search-overlay[_ngcontent-%COMP%]   .mobile-search-content[_ngcontent-%COMP%]   .mobile-search-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: var(--space-lg);\n}\n.mobile-search-overlay[_ngcontent-%COMP%]   .mobile-search-content[_ngcontent-%COMP%]   .mobile-search-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n  font-weight: 700;\n  margin: 0;\n  color: var(--gray-800);\n}\n.mobile-search-overlay[_ngcontent-%COMP%]   .mobile-search-content[_ngcontent-%COMP%]   .mobile-search-header[_ngcontent-%COMP%]   .close-search[_ngcontent-%COMP%] {\n  color: var(--gray-600);\n}\n.mobile-search-overlay[_ngcontent-%COMP%]   .mobile-search-content[_ngcontent-%COMP%]   .mobile-search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 2px solid var(--gray-200);\n  border-radius: 1rem;\n  padding: var(--space-md);\n  font-size: var(--font-size-base);\n  margin-bottom: var(--space-lg);\n  transition: var(--transition);\n}\n.mobile-search-overlay[_ngcontent-%COMP%]   .mobile-search-content[_ngcontent-%COMP%]   .mobile-search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary);\n}\n.mobile-search-overlay[_ngcontent-%COMP%]   .mobile-search-content[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: white;\n  border: none;\n  border-radius: 1rem;\n  padding: var(--space-md);\n  font-weight: 600;\n  transition: var(--transition);\n}\n.mobile-search-overlay[_ngcontent-%COMP%]   .mobile-search-content[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n}\n.mobile-search-overlay.open[_ngcontent-%COMP%]   .mobile-search-content[_ngcontent-%COMP%] {\n  transform: translateY(0);\n}\n\n.mobile-menu-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  z-index: 2000;\n  opacity: 0;\n  visibility: hidden;\n  transition: var(--transition);\n}\n.mobile-menu-overlay.open[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 320px;\n  background: white;\n  overflow-y: auto;\n  transform: translateX(100%);\n  transition: var(--transition);\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 480px) {\n  .mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: var(--space-xl) var(--space-lg) var(--space-lg);\n  border-bottom: 1px solid var(--gray-200);\n  background: var(--gray-50);\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-header[_ngcontent-%COMP%]   .mobile-menu-title[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n  font-weight: 700;\n  color: var(--gray-800);\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-header[_ngcontent-%COMP%]   .close-menu[_ngcontent-%COMP%] {\n  color: var(--gray-600);\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: var(--space-lg);\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .mobile-nav-item[_ngcontent-%COMP%] {\n  margin-bottom: var(--space-sm);\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .mobile-nav-item.has-submenu[_ngcontent-%COMP%]   .mobile-nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .mobile-nav-item.has-submenu[_ngcontent-%COMP%]   .mobile-nav-link[_ngcontent-%COMP%]   .submenu-toggle[_ngcontent-%COMP%] {\n  transition: var(--transition);\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .mobile-nav-item.has-submenu[_ngcontent-%COMP%]   .mobile-nav-link[_ngcontent-%COMP%]   .submenu-toggle.expanded[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .mobile-nav-item[_ngcontent-%COMP%]   .mobile-nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--space-md);\n  padding: var(--space-md);\n  color: var(--gray-700);\n  text-decoration: none;\n  border-radius: 0.75rem;\n  transition: var(--transition);\n  font-weight: 500;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .mobile-nav-item[_ngcontent-%COMP%]   .mobile-nav-link[_ngcontent-%COMP%]:hover {\n  background: var(--gray-100);\n  color: var(--primary);\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .mobile-nav-item[_ngcontent-%COMP%]   .mobile-nav-link[_ngcontent-%COMP%]   .mobile-nav-icon[_ngcontent-%COMP%] {\n  color: var(--gray-500);\n  font-size: 1.25rem;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .mobile-nav-item[_ngcontent-%COMP%]   .mobile-submenu[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: var(--space-sm) 0 0 0;\n  max-height: 0;\n  overflow: hidden;\n  transition: var(--transition);\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .mobile-nav-item[_ngcontent-%COMP%]   .mobile-submenu.expanded[_ngcontent-%COMP%] {\n  max-height: 300px;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .mobile-nav-item[_ngcontent-%COMP%]   .mobile-submenu[_ngcontent-%COMP%]   .mobile-submenu-item[_ngcontent-%COMP%]   .mobile-submenu-link[_ngcontent-%COMP%] {\n  display: block;\n  padding: var(--space-sm) var(--space-md) var(--space-sm) 3rem;\n  color: var(--gray-600);\n  text-decoration: none;\n  border-radius: 0.5rem;\n  transition: var(--transition);\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .mobile-nav-item[_ngcontent-%COMP%]   .mobile-submenu[_ngcontent-%COMP%]   .mobile-submenu-item[_ngcontent-%COMP%]   .mobile-submenu-link[_ngcontent-%COMP%]:hover {\n  background: var(--gray-100);\n  color: var(--primary);\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-footer[_ngcontent-%COMP%] {\n  padding: var(--space-lg);\n  border-top: 1px solid var(--gray-200);\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background: var(--error);\n  color: white;\n  border: none;\n  border-radius: 0.75rem;\n  padding: var(--space-md);\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--space-sm);\n  transition: var(--transition);\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n  transform: translateY(-1px);\n}\n.mobile-menu-overlay.open[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n}\n@media (max-width: 768px) {\n  .search-section[_ngcontent-%COMP%], .nav-section[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (prefers-contrast: high) {\n  [_nghost-%COMP%] {\n    --gray-300: #a0a0a0;\n    --gray-400: #808080;\n    --gray-600: #404040;\n  }\n  .header[_ngcontent-%COMP%] {\n    border-width: 2px;\n  }\n  .search-container[_ngcontent-%COMP%] {\n    border-width: 3px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  *[_ngcontent-%COMP%] {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n  }\n}\n@media print {\n  .header[_ngcontent-%COMP%] {\n    position: static;\n    background: white !important;\n    border: none !important;\n    box-shadow: none !important;\n  }\n  .header[_ngcontent-%COMP%]   .user-actions[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   .search-section[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .header[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n.logo-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n}\n.logo-section[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: 38px;\n  width: auto;\n}\n@media (max-width: 768px) {\n  .logo-section[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    height: 30px;\n  }\n}\n.logo-section[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: var(--primary-color);\n  margin: 0;\n  letter-spacing: 1px;\n}\n@media (max-width: 768px) {\n  .logo-section[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n}\n.logo-section[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]   .brand-tagline[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .logo-section[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]   .brand-tagline[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.search-section[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 420px;\n  position: relative;\n}\n@media (max-width: 900px) {\n  .search-section[_ngcontent-%COMP%] {\n    display: block;\n    order: 3;\n    width: 100%;\n    margin-top: 0.5rem;\n    max-width: none;\n  }\n}\n@media (min-width: 901px) {\n  .search-section[_ngcontent-%COMP%] {\n    order: 0;\n    margin-top: 0;\n  }\n}\n.search-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.search-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 16px 10px 44px;\n  border-radius: 32px;\n  background: var(--surface-light, #f8fafc);\n  border: 1.5px solid var(--border-color, #e5e7eb);\n  font-size: 1rem;\n  transition: border 0.2s ease;\n}\n.search-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary-color);\n  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1333333333);\n}\n.search-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-muted);\n}\n.search-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--text-muted);\n  font-size: 1.125rem;\n}\n.search-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-clear[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 14px;\n  top: 50%;\n  transform: translateY(-50%);\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 50%;\n  transition: background 0.2s ease, color 0.2s ease;\n}\n.search-section[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .search-clear[_ngcontent-%COMP%]:hover {\n  background: #fca5a5;\n  color: #ef4444;\n}\n.search-section[_ngcontent-%COMP%]   .search-suggestions[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: #fff;\n  border: 1px solid var(--border-color, #e5e7eb);\n  border-radius: 12px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);\n  z-index: 1001;\n  margin-top: 4px;\n  overflow: hidden;\n}\n.search-section[_ngcontent-%COMP%]   .search-suggestions[_ngcontent-%COMP%]   .suggestion-item[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  cursor: pointer;\n  border-bottom: 1px solid var(--border-light, #e5e7eb);\n  transition: background-color 0.2s ease;\n  font-size: 1rem;\n}\n.search-section[_ngcontent-%COMP%]   .search-suggestions[_ngcontent-%COMP%]   .suggestion-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.search-section[_ngcontent-%COMP%]   .search-suggestions[_ngcontent-%COMP%]   .suggestion-item[_ngcontent-%COMP%]:hover {\n  background: var(--surface-light, #f8fafc);\n}\n.search-section[_ngcontent-%COMP%]   .search-suggestions[_ngcontent-%COMP%]   .suggestion-item[_ngcontent-%COMP%]   .suggestion-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  color: var(--text-muted);\n}\n\n.nav-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.nav-section[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.nav-section[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n}\n.nav-section[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.5rem 1.2rem;\n  border-radius: 8px;\n  color: var(--text-primary);\n  font-weight: 600;\n  font-size: 1.05rem;\n  letter-spacing: 0.01em;\n  transition: background 0.18s, color 0.18s;\n  position: relative;\n}\n.nav-section[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .nav-section[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus {\n  background: var(--primary-light);\n  color: #fff;\n  text-decoration: none;\n}\n.nav-section[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  font-size: 1.2rem;\n}\n.nav-section[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item.has-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n.nav-section[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item.has-dropdown[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]::after {\n  content: \"\";\n  margin-left: 6px;\n  border: 4px solid transparent;\n  border-top-color: currentColor;\n  transition: transform 0.3s ease;\n}\n.nav-section[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item.has-dropdown[_ngcontent-%COMP%]:hover   .nav-link[_ngcontent-%COMP%]::after {\n  transform: rotate(180deg);\n}\n.nav-section[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item.has-dropdown.mega-menu-trigger[_ngcontent-%COMP%] {\n  position: relative;\n}\n@media (max-width: 900px) {\n  .nav-section[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.nav-section[_ngcontent-%COMP%]   .nav-menu[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-weight: 700;\n}\n\n.user-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n}\n.user-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%] {\n  background: var(--surface-light, #f8fafc);\n  color: var(--primary-color);\n  border-radius: 50%;\n  padding: 10px;\n  margin-left: 0.2rem;\n  transition: background 0.18s, color 0.18s, box-shadow 0.18s;\n}\n.user-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n  color: #fff;\n  box-shadow: 0 2px 8px rgba(var(--primary-rgb), 0.1);\n}\n.user-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  background: var(--error-color);\n  color: #fff;\n  font-size: 0.8rem;\n  min-width: 18px;\n  height: 18px;\n  top: -4px;\n  right: -4px;\n}\n@media (min-width: 769px) {\n  .user-actions[_ngcontent-%COMP%]   .mobile-search-btn[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (min-width: 1025px) {\n  .user-actions[_ngcontent-%COMP%]   .mobile-menu-btn[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%] {\n  position: relative;\n}\n.user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid var(--border-color);\n}\n.user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: white;\n  border: 1px solid var(--border-color);\n  border-radius: 12px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  z-index: 1001;\n  margin-top: 8px;\n  min-width: 200px;\n  overflow: hidden;\n}\n.user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-bottom: 1px solid var(--border-light);\n  background: var(--surface-light);\n}\n.user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin: 0 0 4px 0;\n}\n.user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n  margin: 0;\n}\n.user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 8px 0;\n}\n.user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  text-decoration: none;\n  color: var(--text-primary);\n  transition: background-color 0.2s ease;\n}\n.user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]:hover {\n  background: var(--surface-light);\n}\n.user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]   .dropdown-icon[_ngcontent-%COMP%] {\n  margin-right: 12px;\n  font-size: 1.125rem;\n  color: var(--text-muted);\n}\n.user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item.danger[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%] {\n  color: var(--error-color);\n}\n.user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item.danger[_ngcontent-%COMP%]   .dropdown-link[_ngcontent-%COMP%]:hover {\n  background: var(--error-light);\n}\n.user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%] {\n  position: relative;\n}\n.user-actions[_ngcontent-%COMP%]   .user-menu[_ngcontent-%COMP%]   .user-avatar-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.user-actions[_ngcontent-%COMP%]   .login-btn[_ngcontent-%COMP%] {\n  padding: 0.4rem 1rem;\n  font-weight: 600;\n}\n.mega-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: max-content;\n  min-width: 400px;\n  max-width: calc(100vw - 40px);\n  background: var(--surface-color, #fff);\n  border: 1px solid var(--border-color);\n  border-top: none;\n  border-radius: 0 0 var(--radius-lg, 8px) var(--radius-lg, 8px);\n  box-shadow: var(--shadow-xl, 0 10px 25px rgba(0, 0, 0, 0.15));\n  z-index: var(--z-dropdown, 1000);\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(10px);\n  transition: opacity 0.25s ease-out, transform 0.25s ease-out, visibility 0.25s ease-out;\n  pointer-events: none;\n}\n.mega-menu.open[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translateY(0);\n  pointer-events: auto;\n}\n.mega-menu[_ngcontent-%COMP%]   .mega-menu-content[_ngcontent-%COMP%] {\n  padding: var(--spacing-lg, 1.5rem);\n}\n.mega-menu[_ngcontent-%COMP%]   .mega-menu-content[_ngcontent-%COMP%]   .mega-menu-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, auto);\n  gap: var(--spacing-xl, 2rem);\n}\n.mega-menu[_ngcontent-%COMP%]   .mega-menu-content[_ngcontent-%COMP%]   .mega-menu-grid[_ngcontent-%COMP%]   .mega-menu-category[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: var(--text-lg, 1.125rem);\n  font-weight: var(--font-semibold, 600);\n  color: var(--primary-color);\n  margin-bottom: var(--spacing-md, 1rem);\n}\n.mega-menu[_ngcontent-%COMP%]   .mega-menu-content[_ngcontent-%COMP%]   .mega-menu-grid[_ngcontent-%COMP%]   .mega-menu-category[_ngcontent-%COMP%]   .category-title[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%] {\n  margin-right: var(--spacing-sm, 0.5rem);\n  font-size: 1.35rem;\n}\n.mega-menu[_ngcontent-%COMP%]   .mega-menu-content[_ngcontent-%COMP%]   .mega-menu-grid[_ngcontent-%COMP%]   .mega-menu-category[_ngcontent-%COMP%]   .category-links[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.mega-menu[_ngcontent-%COMP%]   .mega-menu-content[_ngcontent-%COMP%]   .mega-menu-grid[_ngcontent-%COMP%]   .mega-menu-category[_ngcontent-%COMP%]   .category-links[_ngcontent-%COMP%]   .category-link[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-sm, 0.5rem);\n}\n.mega-menu[_ngcontent-%COMP%]   .mega-menu-content[_ngcontent-%COMP%]   .mega-menu-grid[_ngcontent-%COMP%]   .mega-menu-category[_ngcontent-%COMP%]   .category-links[_ngcontent-%COMP%]   .category-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  text-decoration: none;\n  padding: var(--spacing-xs, 0.25rem) var(--spacing-sm, 0.5rem);\n  display: block;\n  border-radius: var(--radius-md, 6px);\n  transition: color 0.2s ease, background-color 0.2s ease;\n}\n.mega-menu[_ngcontent-%COMP%]   .mega-menu-content[_ngcontent-%COMP%]   .mega-menu-grid[_ngcontent-%COMP%]   .mega-menu-category[_ngcontent-%COMP%]   .category-links[_ngcontent-%COMP%]   .category-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--primary-dark);\n  background-color: rgba(var(--primary-rgb), 0.08);\n}\n\n.mobile-search-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1050;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n}\n.mobile-search-overlay.open[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.mobile-search-overlay[_ngcontent-%COMP%]   .mobile-search-content[_ngcontent-%COMP%] {\n  background: white;\n  padding: 1rem;\n  transform: translateY(-100%);\n  transition: transform 0.3s ease;\n}\n.mobile-search-overlay[_ngcontent-%COMP%]   .mobile-search-content[_ngcontent-%COMP%]   .mobile-search-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.mobile-search-overlay[_ngcontent-%COMP%]   .mobile-search-content[_ngcontent-%COMP%]   .mobile-search-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.125rem;\n}\n.mobile-search-overlay[_ngcontent-%COMP%]   .mobile-search-content[_ngcontent-%COMP%]   .mobile-search-header[_ngcontent-%COMP%]   .close-search[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 4px;\n}\n.mobile-search-overlay[_ngcontent-%COMP%]   .mobile-search-content[_ngcontent-%COMP%]   .mobile-search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 2px solid var(--border-color);\n  border-radius: 8px;\n  font-size: 1rem;\n  margin-bottom: 1.5rem;\n}\n.mobile-search-overlay[_ngcontent-%COMP%]   .mobile-search-content[_ngcontent-%COMP%]   .mobile-search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color);\n}\n.mobile-search-overlay[_ngcontent-%COMP%]   .mobile-search-content[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  font-size: 1rem;\n}\n.mobile-search-overlay.open[_ngcontent-%COMP%]   .mobile-search-content[_ngcontent-%COMP%] {\n  transform: translateY(0);\n}\n\n.mobile-menu-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1100;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n}\n.mobile-menu-overlay.open[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.mobile-menu-overlay.open[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 280px;\n  height: 100%;\n  background: white;\n  overflow-y: auto;\n  transform: translateX(-100%);\n  transition: transform 0.3s ease;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-header[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-bottom: 1px solid var(--border-color);\n  background: var(--surface-light);\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-header[_ngcontent-%COMP%]   .mobile-menu-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 600;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-header[_ngcontent-%COMP%]   .mobile-menu-title[_ngcontent-%COMP%]   .close-menu[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  color: var(--text-muted);\n  cursor: pointer;\n  padding: 4px;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%]   .mobile-nav-item[_ngcontent-%COMP%]   .mobile-nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 1rem;\n  text-decoration: none;\n  color: var(--text-primary);\n  border-bottom: 1px solid var(--border-light);\n  transition: background-color 0.2s ease;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%]   .mobile-nav-item[_ngcontent-%COMP%]   .mobile-nav-link[_ngcontent-%COMP%]:hover {\n  background: var(--surface-light);\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%]   .mobile-nav-item[_ngcontent-%COMP%]   .mobile-nav-link[_ngcontent-%COMP%]   .mobile-nav-icon[_ngcontent-%COMP%] {\n  margin-right: 12px;\n  font-size: 1.25rem;\n  color: var(--text-muted);\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%]   .mobile-nav-item.has-submenu[_ngcontent-%COMP%]   .mobile-nav-link[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%]   .mobile-nav-item.has-submenu[_ngcontent-%COMP%]   .mobile-nav-link[_ngcontent-%COMP%]   .submenu-toggle[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--text-muted);\n  font-size: 1rem;\n  cursor: pointer;\n  padding: 4px;\n  transition: transform 0.3s ease;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%]   .mobile-nav-item.has-submenu[_ngcontent-%COMP%]   .mobile-nav-link.expanded[_ngcontent-%COMP%]   .submenu-toggle[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%]   .mobile-nav-item.has-submenu[_ngcontent-%COMP%]   .mobile-submenu[_ngcontent-%COMP%] {\n  background: var(--surface-light);\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.3s ease;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%]   .mobile-nav-item.has-submenu[_ngcontent-%COMP%]   .mobile-submenu.expanded[_ngcontent-%COMP%] {\n  max-height: 500px;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%]   .mobile-nav-item.has-submenu[_ngcontent-%COMP%]   .mobile-submenu[_ngcontent-%COMP%]   .mobile-submenu-item[_ngcontent-%COMP%]   .mobile-submenu-link[_ngcontent-%COMP%] {\n  display: block;\n  padding: 10px 1rem 10px 3rem;\n  text-decoration: none;\n  color: var(--text-secondary);\n  font-size: 0.875rem;\n  transition: color 0.2s ease;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-nav[_ngcontent-%COMP%]   .mobile-nav-item.has-submenu[_ngcontent-%COMP%]   .mobile-submenu[_ngcontent-%COMP%]   .mobile-submenu-item[_ngcontent-%COMP%]   .mobile-submenu-link[_ngcontent-%COMP%]:hover {\n  color: var(--primary-color);\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-footer[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-top: 1px solid var(--border-color);\n  margin-top: auto;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-footer[_ngcontent-%COMP%]   .mobile-auth-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-footer[_ngcontent-%COMP%]   .mobile-auth-buttons[_ngcontent-%COMP%]   .mobile-auth-btn[_ngcontent-%COMP%] {\n  padding: 12px;\n  border: 2px solid var(--primary-color);\n  border-radius: 8px;\n  font-weight: 600;\n  text-decoration: none;\n  text-align: center;\n  transition: all 0.3s ease;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-footer[_ngcontent-%COMP%]   .mobile-auth-buttons[_ngcontent-%COMP%]   .mobile-auth-btn.primary[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  color: white;\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-footer[_ngcontent-%COMP%]   .mobile-auth-buttons[_ngcontent-%COMP%]   .mobile-auth-btn.primary[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-footer[_ngcontent-%COMP%]   .mobile-auth-buttons[_ngcontent-%COMP%]   .mobile-auth-btn.secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--primary-color);\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-footer[_ngcontent-%COMP%]   .mobile-auth-buttons[_ngcontent-%COMP%]   .mobile-auth-btn.secondary[_ngcontent-%COMP%]:hover {\n  background: var(--primary-light);\n}\n.mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%]   .mobile-menu-footer[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.75rem;\n  font-size: 1rem;\n}\n\n.notification-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: white;\n  border: 1px solid var(--border-color);\n  border-radius: 12px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);\n  z-index: 1001;\n  margin-top: 8px;\n  width: 320px;\n  max-height: 400px;\n  overflow: hidden;\n}\n.notification-dropdown[_ngcontent-%COMP%]   .notification-header[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-bottom: 1px solid var(--border-light);\n  background: var(--surface-light);\n}\n.notification-dropdown[_ngcontent-%COMP%]   .notification-header[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0;\n  font-weight: 600;\n}\n.notification-dropdown[_ngcontent-%COMP%]   .notification-header[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%]   .mark-all-read[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--primary-color);\n  cursor: pointer;\n  font-size: 0.875rem;\n  text-decoration: underline;\n}\n.notification-dropdown[_ngcontent-%COMP%]   .notification-header[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%]   .mark-all-read[_ngcontent-%COMP%]:hover {\n  color: var(--primary-dark);\n}\n.notification-dropdown[_ngcontent-%COMP%]   .notification-list[_ngcontent-%COMP%] {\n  max-height: 300px;\n  overflow-y: auto;\n}\n.notification-dropdown[_ngcontent-%COMP%]   .notification-list[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-bottom: 1px solid var(--border-light);\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.notification-dropdown[_ngcontent-%COMP%]   .notification-list[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.notification-dropdown[_ngcontent-%COMP%]   .notification-list[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]:hover {\n  background: var(--surface-light);\n}\n.notification-dropdown[_ngcontent-%COMP%]   .notification-list[_ngcontent-%COMP%]   .notification-item.unread[_ngcontent-%COMP%] {\n  background: rgba(var(--primary-rgb), 0.05);\n  border-left: 3px solid var(--primary-color);\n}\n.notification-dropdown[_ngcontent-%COMP%]   .notification-list[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .notification-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  margin: 0 0 4px 0;\n  line-height: 1.4;\n}\n.notification-dropdown[_ngcontent-%COMP%]   .notification-list[_ngcontent-%COMP%]   .notification-item[_ngcontent-%COMP%]   .notification-content[_ngcontent-%COMP%]   .notification-time[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n.notification-dropdown[_ngcontent-%COMP%]   .notification-list[_ngcontent-%COMP%]   .empty-notifications[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n  color: var(--text-muted);\n}\n.notification-dropdown[_ngcontent-%COMP%]   .notification-list[_ngcontent-%COMP%]   .empty-notifications[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    transform: translateY(-10px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.search-suggestions[_ngcontent-%COMP%], .user-dropdown[_ngcontent-%COMP%], .notification-dropdown[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease;\n}\n\n@media (max-width: 480px) {\n  .header-main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n  .logo-section[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n  }\n  .user-actions[_ngcontent-%COMP%] {\n    gap: 0.25rem;\n  }\n  .user-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%] {\n    padding: 6px;\n  }\n  .user-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n  }\n}\n@media (prefers-contrast: high) {\n  .header[_ngcontent-%COMP%] {\n    border-bottom-width: 2px;\n  }\n  .action-button[_ngcontent-%COMP%] {\n    border: 1px solid transparent;\n  }\n  .action-button[_ngcontent-%COMP%]:focus {\n    border-color: var(--primary-color);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  *[_ngcontent-%COMP%] {\n    transition: none !important;\n    animation: none !important;\n  }\n}\n@media (max-width: 480px) {\n  .mobile-menu-overlay[_ngcontent-%COMP%]   .mobile-menu-content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 1024px) {\n  .nav-section[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .user-actions[_ngcontent-%COMP%]   .mobile-menu-btn[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n@media (max-width: 600px) {\n  .header-main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    min-height: 56px;\n    padding: 0 0.5rem;\n  }\n  .logo-section[_ngcontent-%COMP%]   .brand-text[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n  .user-actions[_ngcontent-%COMP%] {\n    gap: 0.2rem;\n  }\n  .user-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%] {\n    padding: 7px;\n  }\n  .user-actions[_ngcontent-%COMP%]   .action-button[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n.top-bar[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.custom-mat-menu[_ngcontent-%COMP%] {\n  border-radius: var(--radius-lg) !important;\n  box-shadow: var(--shadow-lg) !important;\n}\n.custom-mat-menu[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-bottom: 1px solid var(--border-light);\n  background: var(--surface-light);\n}\n.custom-mat-menu[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin: 0 0 0.25rem 0;\n  font-size: 1rem;\n}\n.custom-mat-menu[_ngcontent-%COMP%]   .dropdown-header[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n  margin: 0;\n  word-break: break-all;\n}\n.custom-mat-menu[_ngcontent-%COMP%]   .mat-mdc-menu-item[_ngcontent-%COMP%] {\n  min-height: 40px;\n  font-size: 0.95rem;\n}\n.custom-mat-menu[_ngcontent-%COMP%]   .mat-mdc-menu-item[_ngcontent-%COMP%]   .dropdown-icon[_ngcontent-%COMP%] {\n  margin-right: 0.75rem;\n  color: var(--text-muted);\n  font-size: 1.25rem;\n}\n.custom-mat-menu[_ngcontent-%COMP%]   .mat-mdc-menu-item.danger[_ngcontent-%COMP%] {\n  color: var(--error-color);\n}\n.custom-mat-menu[_ngcontent-%COMP%]   .mat-mdc-menu-item.danger[_ngcontent-%COMP%]   .dropdown-icon[_ngcontent-%COMP%] {\n  color: var(--error-color);\n}\n.custom-mat-menu[_ngcontent-%COMP%]   .mat-mdc-menu-item.danger[_ngcontent-%COMP%]:hover {\n  background-color: rgba(var(--error-color), 0.1);\n}\n\n@media (max-width: 900px) {\n  .header-main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: space-between;\n    row-gap: 0.5rem;\n  }\n  .logo-section[_ngcontent-%COMP%] {\n    width: auto;\n    margin-right: auto;\n  }\n  .user-actions[_ngcontent-%COMP%] {\n    margin-left: auto;\n  }\n}\n@media (max-width: 600px) {\n  .header-main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n  .search-section[_ngcontent-%COMP%] {\n    order: 3;\n    width: 100%;\n    margin-top: 0.75rem;\n  }\n  .logo-section[_ngcontent-%COMP%] {\n    flex-grow: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFDaEI7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFFQUFBO0VBQ0EsdUVBQUE7RUFHQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUdBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUdBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBR0EsbURBQUE7RUFDQSw0Q0FBQTtFQUNBLDJDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxnREFBQTtFQUNBLGtEQUFBO0VBRUEsY0FBQTtFQUNBLFdBQUE7QUFSRjs7QUFXQTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzRUFBQTtBQVJGO0FBVUU7RUFDRSxxQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7QUFSSjs7QUFhQTtFQUNFLDBCQUFBO0FBVkY7QUFZRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQVZKO0FBWUk7RUFURjtJQVVJLG9CQUFBO0VBVEo7QUFDRjtBQVdJO0VBYkY7SUFjSSxvQkFBQTtJ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IjpbIi8vIE1vZGVybiBIZWFkZXIgQ29tcG9uZW50IC0gQ29tcGxldGUgVUkgT3ZlcmhhdWxcbjpob3N0IHtcbiAgLS1wcmltYXJ5OiAjNjM2NmYxO1xuICAtLXByaW1hcnktbGlnaHQ6ICM4YjVjZjY7XG4gIC0tcHJpbWFyeS1kYXJrOiAjNGY0NmU1O1xuICAtLXN1Y2Nlc3M6ICMxMGI5ODE7XG4gIC0td2FybmluZzogI2Y1OWUwYjtcbiAgLS1lcnJvcjogI2VmNDQ0NDtcbiAgLS1hY2NlbnQ6ICMwNmI2ZDQ7XG4gIC0tZ3JhZGllbnQtcHJpbWFyeTogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcbiAgLS1ncmFkaWVudC1zZWNvbmRhcnk6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmMDkzZmIgMCUsICNmNTU3NmMgMTAwJSk7XG4gIFxuICAvLyBHcmF5IHNjYWxlIHdpdGggYmV0dGVyIGNvbnRyYXN0XG4gIC0tZ3JheS01MDogI2Y4ZmFmYztcbiAgLS1ncmF5LTEwMDogI2YxZjVmOTtcbiAgLS1ncmF5LTIwMDogI2UyZThmMDtcbiAgLS1ncmF5LTMwMDogI2NiZDVlMTtcbiAgLS1ncmF5LTQwMDogIzk0YTNiODtcbiAgLS1ncmF5LTUwMDogIzY0NzQ4YjtcbiAgLS1ncmF5LTYwMDogIzQ3NTU2OTtcbiAgLS1ncmF5LTcwMDogIzMzNDE1NTtcbiAgLS1ncmF5LTgwMDogIzFlMjkzYjtcbiAgLS1ncmF5LTkwMDogIzBmMTcyYTtcbiAgXG4gIC8vIFNwYWNpbmdcbiAgLS1zcGFjZS14czogMC4yNXJlbTtcbiAgLS1zcGFjZS1zbTogMC41cmVtO1xuICAtLXNwYWNlLW1kOiAxcmVtO1xuICAtLXNwYWNlLWxnOiAxLjVyZW07XG4gIC0tc3BhY2UteGw6IDJyZW07XG4gIC0tc3BhY2UtMnhsOiAzcmVtO1xuICBcbiAgLy8gVHlwb2dyYXBoeVxuICAtLWZvbnQtc2l6ZS14czogMC43NXJlbTtcbiAgLS1mb250LXNpemUtc206IDAuODc1cmVtO1xuICAtLWZvbnQtc2l6ZS1iYXNlOiAxcmVtO1xuICAtLWZvbnQtc2l6ZS1sZzogMS4xMjVyZW07XG4gIC0tZm9udC1zaXplLXhsOiAxLjI1cmVtO1xuICAtLWZvbnQtc2l6ZS0yeGw6IDEuNXJlbTtcbiAgLS1mb250LXNpemUtM3hsOiAxLjg3NXJlbTtcbiAgXG4gIC8vIEVmZmVjdHNcbiAgLS10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAtLXNoYWRvdy1zbTogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgLS1zaGFkb3c6IDAgNHB4IDZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLS1zaGFkb3ctbWQ6IDAgMTBweCAxNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtLXNoYWRvdy1sZzogMCAyMHB4IDI1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC0tc2hhZG93LXhsOiAwIDI1cHggNTBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGVhZGVyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ncmF5LTIwMCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICBmb250LWZhbWlseTogJ0ludGVyJywgJ1NlZ29lIFVJJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBzYW5zLXNlcmlmO1xuXG4gICYuc2Nyb2xsZWQge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45OCk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncmF5LTMwMCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgfVxufVxuXG4vLyBNYWluIGhlYWRlciBjb250YWluZXJcbi5oZWFkZXItbWFpbiB7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLW1kKSAwO1xuXG4gIC5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiB2YXIoLS1zcGFjZS1sZyk7XG4gICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1sZyk7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICBnYXA6IHZhcigtLXNwYWNlLW1kKTtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIGdhcDogdmFyKC0tc3BhY2Utc20pO1xuICAgICAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1tZCk7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLXNtKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gTG9nbyBhbmQgYnJhbmRpbmcgc2VjdGlvblxuLmxvZ28tc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogdmFyKC0tc3BhY2Utc20pO1xuICBcbiAgYSB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbiAgICB9XG4gIH1cblxuICAubG9nbyB7XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgd2lkdGg6IGF1dG87XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDJweCA0cHggcmdiYSg5OSwgMTAyLCAyNDEsIDAuMikpO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBoZWlnaHQ6IDJyZW07XG4gICAgfVxuICB9XG5cbiAgLmJyYW5kLXRleHQge1xuICAgIC5icmFuZC1uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTJ4bCk7XG4gICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMjVlbTtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhsKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYnJhbmQtdGFnbGluZSB7XG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XG4gICAgICBjb2xvcjogdmFyKC0tZ3JheS02MDApO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFNlYXJjaCBzZWN0aW9uXG4uc2VhcmNoLXNlY3Rpb24ge1xuICBmbGV4OiAxO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLnNlYXJjaC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS01MCk7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZ3JheS0yMDApO1xuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICY6Zm9jdXMtd2l0aGluIHtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4xKTtcbiAgICB9XG5cbiAgICAuc2VhcmNoLWlucHV0IHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgcGFkZGluZzogdmFyKC0tc3BhY2UtbWQpIHZhcigtLXNwYWNlLWxnKTtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7XG4gICAgICBjb2xvcjogdmFyKC0tZ3JheS04MDApO1xuXG4gICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LTUwMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNlYXJjaC1pY29uIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LTUwMCk7XG4gICAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNwYWNlLW1kKTtcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgIH1cblxuICAgIC5zZWFyY2gtY2xlYXIge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLXhzKTtcbiAgICAgIG1hcmdpbi1yaWdodDogdmFyKC0tc3BhY2Utc20pO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LTUwMCk7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYXktMjAwKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWdyYXktNzAwKTtcbiAgICAgIH1cblxuICAgICAgbWF0LWljb24ge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpmb2N1cy13aXRoaW4gLnNlYXJjaC1pY29uIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICB9XG4gIH1cblxuICAuc2VhcmNoLXN1Z2dlc3Rpb25zIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JheS0yMDApO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWxnKTtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIG1hcmdpbi10b3A6IHZhcigtLXNwYWNlLXhzKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgLnN1Z2dlc3Rpb24taXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogdmFyKC0tc3BhY2Utc20pO1xuICAgICAgcGFkZGluZzogdmFyKC0tc3BhY2UtbWQpIHZhcigtLXNwYWNlLWxnKTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWdyYXktMTAwKTtcblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYXktNTApO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICB9XG5cbiAgICAgIC5zdWdnZXN0aW9uLWljb24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tZ3JheS00MDApO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIE5hdmlnYXRpb24gc2VjdGlvblxuLm5hdi1zZWN0aW9uIHtcbiAgLm5hdi1tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiB2YXIoLS1zcGFjZS1sZyk7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcblxuICAgIC5uYXYtaXRlbSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICYuaGFzLWRyb3Bkb3duIHtcbiAgICAgICAgLm5hdi1saW5rOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJ8OiwpbCvCc7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IHZhcigtLXNwYWNlLXhzKTtcbiAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIC5uYXYtbGluazo6YWZ0ZXIsXG4gICAgICAgICYub3BlbiAubmF2LWxpbms6OmFmdGVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5uYXYtbGluayB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LTcwMCk7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLXNtKSB2YXIoLS1zcGFjZS1tZCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAmOmhvdmVyLFxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoOTksIDEwMiwgMjQxLCAwLjA1KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0aXZlOjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IC0wLjVyZW07XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgICB3aWR0aDogMC41cmVtO1xuICAgICAgICAgIGhlaWdodDogMC41cmVtO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIE1lZ2EgTWVudVxuICAubWVnYS1tZW51IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JheS0yMDApO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXhsKTtcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjZS14bCk7XG4gICAgbWluLXdpZHRoOiA4MDBweDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgei1pbmRleDogMTAwMDtcblxuICAgICYub3BlbiB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKDApO1xuICAgIH1cblxuICAgIC5tZWdhLW1lbnUtY29udGVudCB7XG4gICAgICAubWVnYS1tZW51LWdyaWQge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgICAgICAgZ2FwOiB2YXIoLS1zcGFjZS14bCk7XG5cbiAgICAgICAgLm1lZ2EtbWVudS1jYXRlZ29yeSB7XG4gICAgICAgICAgLmNhdGVnb3J5LXRpdGxlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZ2FwOiB2YXIoLS1zcGFjZS1zbSk7XG4gICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JheS04MDApO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgdmFyKC0tc3BhY2UtbWQpIDA7XG5cbiAgICAgICAgICAgIC5jYXRlZ29yeS1pY29uIHtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2F0ZWdvcnktbGlua3Mge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgICAgIC5jYXRlZ29yeS1saW5rIHtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2Utc20pO1xuXG4gICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LTYwMCk7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1zcGFjZS14cykgMDtcblxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFVzZXIgYWN0aW9ucyBzZWN0aW9uXG4udXNlci1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiB2YXIoLS1zcGFjZS1zbSk7XG5cbiAgLmFjdGlvbi1idXR0b24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDIuNXJlbTtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICBjb2xvcjogdmFyKC0tZ3JheS02MDApO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTEwMCk7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgIH1cblxuICAgIC5hY3Rpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICB3aWR0aDogMS4yNXJlbTtcbiAgICAgIGhlaWdodDogMS4yNXJlbTtcbiAgICB9XG5cbiAgICAuYmFkZ2Uge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtMnB4O1xuICAgICAgcmlnaHQ6IC0ycHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1lcnJvcik7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgbWluLXdpZHRoOiAxLjI1cmVtO1xuICAgICAgaGVpZ2h0OiAxLjI1cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgICBhbmltYXRpb246IHB1bHNlIDJzIGluZmluaXRlO1xuICAgIH1cblxuICAgIC51c2VyLWF2YXRhci1pY29uIHtcbiAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ncmF5LTIwMCk7XG4gICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICB9XG5cbiAgICAmOmhvdmVyIC51c2VyLWF2YXRhci1pY29uIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgfVxuICB9XG5cbiAgLmxvZ2luLWJ0biB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLXNtKSB2YXIoLS1zcGFjZS1sZyk7XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVXNlciBkcm9wZG93biBtZW51XG4uY3VzdG9tLW1hdC1tZW51IHtcbiAgLmRyb3Bkb3duLWhlYWRlciB7XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2UtbWQpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ncmF5LTIwMCk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS01MCk7XG5cbiAgICAudXNlci1uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWJhc2UpO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIG1hcmdpbjogMCAwIHZhcigtLXNwYWNlLXhzKSAwO1xuICAgICAgY29sb3I6IHZhcigtLWdyYXktODAwKTtcbiAgICB9XG5cbiAgICAudXNlci1lbWFpbCB7XG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XG4gICAgICBjb2xvcjogdmFyKC0tZ3JheS02MDApO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtbWRjLW1lbnUtaXRlbSB7XG4gICAgLmRyb3Bkb3duLWljb24ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1zcGFjZS1zbSk7XG4gICAgICBjb2xvcjogdmFyKC0tZ3JheS01MDApO1xuICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgfVxuXG4gICAgJi5kYW5nZXIge1xuICAgICAgY29sb3I6IHZhcigtLWVycm9yKTtcblxuICAgICAgLmRyb3Bkb3duLWljb24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tZXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS01MCk7XG4gICAgfVxuICB9XG59XG5cbi8vIE1vYmlsZSBzZWFyY2ggb3ZlcmxheVxuLm1vYmlsZS1zZWFyY2gtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xuICB6LWluZGV4OiAyMDAwO1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuXG4gICYub3BlbiB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbiAgLm1vYmlsZS1zZWFyY2gtY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLXhsKSB2YXIoLS1zcGFjZS1sZyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcblxuICAgIC5tb2JpbGUtc2VhcmNoLWhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNlLWxnKTtcblxuICAgICAgaDMge1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14bCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgY29sb3I6IHZhcigtLWdyYXktODAwKTtcbiAgICAgIH1cblxuICAgICAgLmNsb3NlLXNlYXJjaCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LTYwMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1vYmlsZS1zZWFyY2gtaW5wdXQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ncmF5LTIwMCk7XG4gICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgICAgcGFkZGluZzogdmFyKC0tc3BhY2UtbWQpO1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtYmFzZSk7XG4gICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjZS1sZyk7XG4gICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJ0biB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1tZCk7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYub3BlbiAubW9iaWxlLXNlYXJjaC1jb250ZW50IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuLy8gTW9iaWxlIG1lbnUgb3ZlcmxheVxuLm1vYmlsZS1tZW51LW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcbiAgei1pbmRleDogMjAwMDtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcblxuICAmLm9wZW4ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuXG4gIC5tb2JpbGUtbWVudS1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMzIwcHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAubW9iaWxlLW1lbnUtaGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgcGFkZGluZzogdmFyKC0tc3BhY2UteGwpIHZhcigtLXNwYWNlLWxnKSB2YXIoLS1zcGFjZS1sZyk7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZ3JheS0yMDApO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS01MCk7XG5cbiAgICAgIC5tb2JpbGUtbWVudS10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhsKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLWdyYXktODAwKTtcbiAgICAgIH1cblxuICAgICAgLmNsb3NlLW1lbnUge1xuICAgICAgICBjb2xvcjogdmFyKC0tZ3JheS02MDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tb2JpbGUtbWVudS1uYXYge1xuICAgICAgZmxleDogMTtcbiAgICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLWxnKTtcblxuICAgICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgLm1vYmlsZS1uYXYtaXRlbSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2Utc20pO1xuXG4gICAgICAgICAgJi5oYXMtc3VibWVudSAubW9iaWxlLW5hdi1saW5rIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgICAuc3VibWVudS10b2dnbGUge1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcblxuICAgICAgICAgICAgICAmLmV4cGFuZGVkIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1vYmlsZS1uYXYtbGluayB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGdhcDogdmFyKC0tc3BhY2UtbWQpO1xuICAgICAgICAgICAgcGFkZGluZzogdmFyKC0tc3BhY2UtbWQpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWdyYXktNzAwKTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTEwMCk7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1vYmlsZS1uYXYtaWNvbiB7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LTUwMCk7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubW9iaWxlLXN1Ym1lbnUge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IHZhcigtLXNwYWNlLXNtKSAwIDAgMDtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG5cbiAgICAgICAgICAgICYuZXhwYW5kZWQge1xuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1vYmlsZS1zdWJtZW51LWl0ZW0ge1xuICAgICAgICAgICAgICAubW9iaWxlLXN1Ym1lbnUtbGluayB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogdmFyKC0tc3BhY2Utc20pIHZhcigtLXNwYWNlLW1kKSB2YXIoLS1zcGFjZS1zbSkgM3JlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JheS02MDApO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYXktMTAwKTtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubW9iaWxlLW1lbnUtZm9vdGVyIHtcbiAgICAgIHBhZGRpbmc6IHZhcigtLXNwYWNlLWxnKTtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ncmF5LTIwMCk7XG5cbiAgICAgIC5idG4ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1lcnJvcik7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1tZCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBnYXA6IHZhcigtLXNwYWNlLXNtKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2RjMjYyNjtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLm9wZW4gLm1vYmlsZS1tZW51LWNvbnRlbnQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuXG4vLyBBbmltYXRpb25zXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICB9XG59XG5cbi8vIFJlc3BvbnNpdmUgdXRpbGl0aWVzXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnNlYXJjaC1zZWN0aW9uLFxuICAubmF2LXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLy8gSGlnaCBjb250cmFzdCBtb2RlIHN1cHBvcnRcbkBtZWRpYSAocHJlZmVycy1jb250cmFzdDogaGlnaCkge1xuICA6aG9zdCB7XG4gICAgLS1ncmF5LTMwMDogI2EwYTBhMDtcbiAgICAtLWdyYXktNDAwOiAjODA4MDgwO1xuICAgIC0tZ3JheS02MDA6ICM0MDQwNDA7XG4gIH1cblxuICAuaGVhZGVyIHtcbiAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgfVxuXG4gIC5zZWFyY2gtY29udGFpbmVyIHtcbiAgICBib3JkZXItd2lkdGg6IDNweDtcbiAgfVxufVxuXG4vLyBSZWR1Y2VkIG1vdGlvbiBzdXBwb3J0XG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAqIHtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vLyBQcmludCBzdHlsZXNcbkBtZWRpYSBwcmludCB7XG4gIC5oZWFkZXIge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgYmFja2dyb3VuZDogd2hpdGUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG5cbiAgICAudXNlci1hY3Rpb25zLFxuICAgIC5zZWFyY2gtc2VjdGlvbiB7XG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm5hdi1zZWN0aW9uIC5uYXYtbWVudSB7XG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi5sb2dvLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuN3JlbTtcblxuICAubG9nbyB7XG4gICAgaGVpZ2h0OiAzOHB4OyAvLyBBZGp1c3RlZCBmb3IgYmV0dGVyIGJhbGFuY2VcbiAgICB3aWR0aDogYXV0bztcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5icmFuZC10ZXh0IHtcbiAgICAuYnJhbmQtbmFtZSB7XG4gICAgICBmb250LXNpemU6IDEuNnJlbTsgLy8gQWRqdXN0ZWRcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJyYW5kLXRhZ2xpbmUge1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICBtYXJnaW46IDA7XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBTZWFyY2ggc2VjdGlvblxuLnNlYXJjaC1zZWN0aW9uIHtcbiAgZmxleDogMTtcbiAgbWF4LXdpZHRoOiA0MjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkgeyAvLyBTaG93IHNlYXJjaCBvbiB0YWJsZXRzIGlmIG5hdiBpcyBoaWRkZW5cbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvcmRlcjogMzsgLy8gTW92ZXMgc2VhcmNoIGJlbG93IGxvZ28gb24gY29sdW1uIGxheW91dCBmb3IgbW9iaWxlXG4gICAgd2lkdGg6IDEwMCU7IC8vIEZ1bGwgd2lkdGggb24gbW9iaWxlL3RhYmxldCB3aGVuIGl0J3MgaW4gY29sdW1uXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5MDFweCkgeyAvLyBFbnN1cmUgaXQncyBpbiBpdHMgb3JpZ2luYWwgcGxhY2Ugb24gZGVza3RvcFxuICAgIG9yZGVyOiAwO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cblxuICAuc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLnNlYXJjaC1pbnB1dCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTZweCAxMHB4IDQ0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1saWdodCwgI2Y4ZmFmYyk7XG4gICAgICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvciwgI2U1ZTdlYik7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXIgMC4ycyBlYXNlO1xuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICMyNTYzZWIyMjtcbiAgICAgIH1cblxuICAgICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNlYXJjaC1pY29uIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDE0cHg7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgfVxuXG4gICAgLnNlYXJjaC1jbGVhciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMTRweDtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyBlYXNlLCBjb2xvciAwLjJzIGVhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmNhNWE1O1xuICAgICAgICBjb2xvcjogI2VmNDQ0NDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTZWFyY2ggc3VnZ2VzdGlvbnMgZHJvcGRvd25cbiAgLnNlYXJjaC1zdWdnZXN0aW9ucyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCAjZTVlN2ViKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICB6LWluZGV4OiAxMDAxO1xuICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgLnN1Z2dlc3Rpb24taXRlbSB7XG4gICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0LCAjZTVlN2ViKTtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1saWdodCwgI2Y4ZmFmYyk7XG4gICAgICB9XG5cbiAgICAgIC5zdWdnZXN0aW9uLWljb24ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBOYXZpZ2F0aW9uIG1lbnUgKGRlc2t0b3ApXG4ubmF2LXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgLm5hdi1tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAycmVtO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG5cbiAgICAubmF2LWl0ZW0ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAubmF2LWxpbmsge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDEuMDVyZW07XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xOHMsIGNvbG9yIDAuMThzO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgJjpob3ZlcixcbiAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1saWdodCk7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdi1pY29uIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmhhcy1kcm9wZG93biB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgLy8gSW1wb3J0YW50IGZvciBwb3NpdGlvbmluZyB0aGUgbWVnYSBtZW51XG5cbiAgICAgICAgLm5hdi1saW5rOjphZnRlciB7IC8vIElmIHlvdSBoYXZlIGEgZHJvcGRvd24gYXJyb3dcbiAgICAgICAgICBjb250ZW50OiAnJzsgLy8gT3IgeW91ciBpY29uXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICAgICAgICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiBjdXJyZW50Q29sb3I7IC8vIE9yIHZhcigtLXRleHQtcHJpbWFyeSlcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciAubmF2LWxpbms6OmFmdGVyIHsgLy8gQXJyb3cgcm90YXRpb24gb24gaG92ZXJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuaGFzLWRyb3Bkb3duLm1lZ2EtbWVudS10cmlnZ2VyIHsgLy8gRW5zdXJlIHRoZSB0cmlnZ2VyIExJIGlzIHJlbGF0aXZlIGZvciBwb3NpdGlvbmluZyB0aGUgbWVnYS1tZW51XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgLy8gQ3J1Y2lhbCBmb3IgcG9zaXRpb25pbmcgdGhlIGFic29sdXRlIG1lZ2EtbWVudVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkgeyAvLyBIaWRlIGRlc2t0b3AgbmF2IGVhcmxpZXIgaWYgc2VhcmNoIHRha2VzIHNwYWNlXG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5uYXYtbWVudSAubmF2LWl0ZW0gLm5hdi1saW5rIHtcbiAgICAmLmFjdGl2ZSB7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgLy8gYmFja2dyb3VuZDogcmdiYSh2YXIoLS1wcmltYXJ5LXJnYiksIDAuMSk7IC8vIE9wdGlvbmFsIGFjdGl2ZSBiYWNrZ3JvdW5kXG4gICAgfVxuICB9XG59XG5cbi8vIFVzZXIgYWN0aW9ucyBzZWN0aW9uXG4udXNlci1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjdyZW07XG5cbiAgLmFjdGlvbi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtbGlnaHQsICNmOGZhZmMpO1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMC4ycmVtO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xOHMsIGNvbG9yIDAuMThzLCBib3gtc2hhZG93IDAuMThzO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEodmFyKC0tcHJpbWFyeS1yZ2IpLCAwLjEwKTtcbiAgICB9XG5cbiAgICAuYmFkZ2Uge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZXJyb3ItY29sb3IpO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIG1pbi13aWR0aDogMThweDtcbiAgICAgIGhlaWdodDogMThweDtcbiAgICAgIHRvcDogLTRweDtcbiAgICAgIHJpZ2h0OiAtNHB4O1xuICAgIH1cbiAgfVxuXG4gIC8vIFNlYXJjaCBidXR0b24gKG1vYmlsZSBvbmx5KVxuICAubW9iaWxlLXNlYXJjaC1idG4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAvLyBNb2JpbGUgbWVudSBidXR0b25cbiAgLm1vYmlsZS1tZW51LWJ0biB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAvLyBVc2VyIG1lbnUgZHJvcGRvd25cbiAgLnVzZXItbWVudSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLnVzZXItYXZhdGFyIHtcbiAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIH1cblxuICAgIC51c2VyLWRyb3Bkb3duIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMTAwJTtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgei1pbmRleDogMTAwMTtcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAuZHJvcGRvd24taGVhZGVyIHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtbGlnaHQpO1xuXG4gICAgICAgIC51c2VyLW5hbWUge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgNHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAudXNlci1lbWFpbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZHJvcGRvd24tbWVudSB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XG5cbiAgICAgICAgLmRyb3Bkb3duLWl0ZW0ge1xuICAgICAgICAgIC5kcm9wZG93bi1saW5rIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtbGlnaHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZHJvcGRvd24taWNvbiB7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgICYuZGFuZ2VyIC5kcm9wZG93bi1saW5rIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1lcnJvci1jb2xvcik7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1lcnJvci1saWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnVzZXItbWVudSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC51c2VyLWF2YXRhci1pY29uIHtcbiAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuICB9XG5cbiAgLmxvZ2luLWJ0biB7XG4gICAgcGFkZGluZzogMC40cmVtIDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkgeyAvLyBFbnN1cmUgdXNlciBhY3Rpb25zIGFyZSBhbHdheXMgdmlzaWJsZVxuICAgICAvLyBJZiBzZWFyY2ggbW92ZXMgdG8gYSBuZXcgbGluZSwgdXNlciBhY3Rpb25zIG1pZ2h0IG5lZWQgdG8gYWRqdXN0XG4gIH1cbn1cblxuLy8gTWVnYSBtZW51IChkZXNrdG9wKVxuLm1lZ2EtbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlOyAvLyBQb3NpdGlvbiBiZWxvdyB0aGUgbmF2IGl0ZW0gKENhdGVnb3JpZXMgbGluaylcbiAgbGVmdDogMDsgLy8gQWxpZ24gd2l0aCB0aGUgbGVmdCBlZGdlIG9mIHRoZSB0cmlnZ2VyIGVsZW1lbnQgYnkgZGVmYXVsdFxuICAvLyBUbyBjZW50ZXIgaXQgdW5kZXIgdGhlIHRyaWdnZXIgaWYgdGhlIHRyaWdnZXIgaXRzZWxmIGlzIG5vdCBmdWxsIHdpZHRoOlxuICAvLyBsZWZ0OiA1MCU7XG4gIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgLy8gVGhpcyB3b3VsZCBjZW50ZXIgaXQgdW5kZXIgdGhlIHRyaWdnZXIuXG4gIC8vIEhvd2V2ZXIsIGZvciBcImZpdC1jb250ZW50XCIgdGhhdCBtaWdodCBleHRlbmQgYmV5b25kIHRoZSB0cmlnZ2VyLCBzaW1wbGUgbGVmdDogMCBpcyBvZnRlbiBmaW5lLlxuICAvLyBJZiB0aGUgXCJDYXRlZ29yaWVzXCIgbGluayBpcyBmYXIgbGVmdCBhbmQgbWVnYSBtZW51IGlzIHdpZGUsIGl0IG1pZ2h0IGdvIG9mZi1zY3JlZW4uXG4gIC8vIENvbnNpZGVyIHRoaXMgaWYgeW91ciBsYXlvdXQgbmVlZHMgaXQ6XG4gIC8vIEZvciBhIG1lZ2EgbWVudSB0aGF0IG1pZ2h0IGJlIHdpZGVyIHRoYW4gaXRzIHRyaWdnZXIgYnV0IHNob3VsZG4ndCBnbyBvZmYtc2NyZWVuOlxuICAvLyBZb3UgbWlnaHQgbmVlZCBKUyBvciBtb3JlIGNvbXBsZXggQ1NTIGlmIGl0IG5lZWRzIHRvIGR5bmFtaWNhbGx5IGFkanVzdCBsZWZ0L3JpZ2h0IGJhc2VkIG9uIHZpZXdwb3J0LlxuICAvLyBGb3Igbm93LCBgbGVmdDogMGAgcmVsYXRpdmUgdG8gdGhlIHRyaWdnZXIuXG5cbiAgd2lkdGg6IG1heC1jb250ZW50OyAvLyBNYWtlIHRoZSBtZWdhIG1lbnUgYXMgd2lkZSBhcyBpdHMgY29udGVudCBuZWVkcy5cbiAgbWluLXdpZHRoOiA0MDBweDsgLy8gT3B0aW9uYWw6IGVuc3VyZSBpdCBoYXMgYSByZWFzb25hYmxlIG1pbmltdW0gd2lkdGggZm9yIGFlc3RoZXRpY3MuXG4gIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDQwcHgpOyAvLyBPcHRpb25hbDogcHJldmVudCBpdCBmcm9tIGJlaW5nIHdpZGVyIHRoYW4gdmlld3BvcnQgbWludXMgc29tZSBwYWRkaW5nLlxuXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY29sb3IsICNmZmYpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpOyAvLyBBZGQgYSBmdWxsIGJvcmRlciBmb3IgYmV0dGVyIGRlZmluaXRpb25cbiAgYm9yZGVyLXRvcDogbm9uZTsgLy8gQXNzdW1pbmcgdG9wIGJvcmRlciBpcyBoYW5kbGVkIGJ5IGhlYWRlciBvciBub3QgZGVzaXJlZCBoZXJlXG4gIGJvcmRlci1yYWRpdXM6IDAgMCB2YXIoLS1yYWRpdXMtbGcsIDhweCkgdmFyKC0tcmFkaXVzLWxnLCA4cHgpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cteGwsIDAgMTBweCAyNXB4IHJnYmEoMCwwLDAsMC4xNSkpOyAvLyBFbmhhbmNlZCBzaGFkb3dcbiAgei1pbmRleDogdmFyKC0tei1kcm9wZG93biwgMTAwMCk7XG5cbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7IC8vIFN0YXJ0IHNsaWdodGx5IGxvd2VyIGZvciBhbmltYXRpb25cbiAgLy8gSWYgeW91IHVzZWQgbGVmdDogNTAlIGFuZCB0cmFuc2xhdGVYKC01MCUpIGZvciBjZW50ZXJpbmcgdW5kZXIgdHJpZ2dlcjpcbiAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoMTBweCk7IFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2Utb3V0LCB0cmFuc2Zvcm0gMC4yNXMgZWFzZS1vdXQsIHZpc2liaWxpdHkgMC4yNXMgZWFzZS1vdXQ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICYub3BlbiB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAvLyBJZiB5b3UgdXNlZCBsZWZ0OiA1MCUgYW5kIHRyYW5zbGF0ZVgoLTUwJSkgZm9yIGNlbnRlcmluZyB1bmRlciB0cmlnZ2VyOlxuICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKDApO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICB9XG5cbiAgLm1lZ2EtbWVudS1jb250ZW50IHtcbiAgICAvLyBJZiAuY29udGFpbmVyIHdhcyByZW1vdmVkIGZyb20gSFRNTCBmb3IgdGhpcyBkaXYsIGFkZCBwYWRkaW5nIGhlcmU6XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZywgMS41cmVtKTsgXG5cbiAgICAubWVnYS1tZW51LWdyaWQge1xuICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIGF1dG8pOyAvLyBFYWNoIGNvbHVtbiB0YWtlcyB3aWR0aCBvZiBpdHMgY29udGVudFxuICAgICAgLy8gVXNpbmcgYGF1dG9gIGZvciBjb2x1bW4gd2lkdGggd2l0aCBgbWF4LWNvbnRlbnRgIG9uIHBhcmVudCBlbnN1cmVzIGNvbHVtbnMgYXJlIGp1c3Qgd2lkZSBlbm91Z2guXG4gICAgICAvLyBgMWZyYCB3b3VsZCBtYWtlIHRoZW0gZXF1YWwgZnJhY3Rpb25zIG9mIHRoZSBgbWF4LWNvbnRlbnRgIHdpZHRoLiBgYXV0b2AgaXMgbW9yZSBcImZpdFwiLlxuICAgICAgZ2FwOiB2YXIoLS1zcGFjaW5nLXhsLCAycmVtKTsgLy8gSW5jcmVhc2VkIGdhcCBmb3IgYmV0dGVyIHNlcGFyYXRpb25cblxuICAgICAgLm1lZ2EtbWVudS1jYXRlZ29yeSB7XG4gICAgICAgIC5jYXRlZ29yeS10aXRsZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tdGV4dC1sZywgMS4xMjVyZW0pO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXNlbWlib2xkLCA2MDApO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLW1kLCAxcmVtKTsgLy8gSW5jcmVhc2VkIGJvdHRvbSBtYXJnaW5cblxuICAgICAgICAgIC5jYXRlZ29yeS1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogdmFyKC0tc3BhY2luZy1zbSwgMC41cmVtKTsgLy8gQWRqdXN0ZWQgc3BhY2luZ1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjM1cmVtOyAvLyBTbGlnaHRseSBsYXJnZXIgaWNvblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXRlZ29yeS1saW5rcyB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAgIC5jYXRlZ29yeS1saW5rIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctc20sIDAuNXJlbSk7IC8vIEFkanVzdGVkIHNwYWNpbmdcblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy14cywgMC4yNXJlbSkgdmFyKC0tc3BhY2luZy1zbSwgMC41cmVtKTsgLy8gQWRkZWQgc29tZSBwYWRkaW5nXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQsIDZweCk7IC8vIENvbnNpc3RlbnQgcmFkaXVzXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG5cbiAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1wcmltYXJ5LXJnYiksIDAuMDgpOyAvLyBTbGlnaHRseSBkYXJrZXIgaG92ZXJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBNb2JpbGUgc2VhcmNoIG92ZXJsYXlcbi5tb2JpbGUtc2VhcmNoLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB6LWluZGV4OiAxMDUwO1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cbiAgJi5vcGVuIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICAubW9iaWxlLXNlYXJjaC1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcblxuICAgIC5tb2JpbGUtc2VhcmNoLWhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbiAgICAgIGgzIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgICAgfVxuXG4gICAgICAuY2xvc2Utc2VhcmNoIHtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubW9iaWxlLXNlYXJjaC1pbnB1dCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07IC8vIE1vcmUgc3BhY2UgYmVmb3JlIGJ1dHRvblxuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYnRuLXByaW1hcnkgeyAvLyBFbnN1cmUgYnV0dG9uIHN0eWxpbmdcbiAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICB9XG5cbiAgJi5vcGVuIC5tb2JpbGUtc2VhcmNoLWNvbnRlbnQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuXG4vLyBNb2JpbGUgbWVudSBvdmVybGF5XG4ubW9iaWxlLW1lbnUtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHotaW5kZXg6IDExMDA7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAmLm9wZW4ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcblxuICAgIC5tb2JpbGUtbWVudS1jb250ZW50IHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB9XG4gIH1cblxuICAubW9iaWxlLW1lbnUtY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAyODBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG5cbiAgICAubW9iaWxlLW1lbnUtaGVhZGVyIHtcbiAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtbGlnaHQpO1xuXG4gICAgICAubW9iaWxlLW1lbnUtdGl0bGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgICAgICAuY2xvc2UtbWVudSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAubW9iaWxlLW1lbnUtbmF2IHtcbiAgICAgIHBhZGRpbmc6IDFyZW0gMDtcblxuICAgICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG5cbiAgICAgIC5tb2JpbGUtbmF2LWl0ZW0ge1xuICAgICAgICAubW9iaWxlLW5hdi1saW5rIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMTJweCAxcmVtO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1saWdodCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1vYmlsZS1uYXYtaWNvbiB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5oYXMtc3VibWVudSB7XG4gICAgICAgICAgLm1vYmlsZS1uYXYtbGluayB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgICAgIC5zdWJtZW51LXRvZ2dsZSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmV4cGFuZGVkIC5zdWJtZW51LXRvZ2dsZSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1vYmlsZS1zdWJtZW51IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtbGlnaHQpO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuM3MgZWFzZTtcblxuICAgICAgICAgICAgJi5leHBhbmRlZCB7XG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4OyAvLyBBZGp1c3QgYXMgbmVlZGVkXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tb2JpbGUtc3VibWVudS1pdGVtIHtcbiAgICAgICAgICAgICAgLm1vYmlsZS1zdWJtZW51LWxpbmsge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMXJlbSAxMHB4IDNyZW07IC8vIEluZGVudCBzdWItaXRlbXNcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZTtcblxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5tb2JpbGUtbWVudS1mb290ZXIge1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgICAgbWFyZ2luLXRvcDogYXV0bztcblxuICAgICAgLm1vYmlsZS1hdXRoLWJ1dHRvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDAuNXJlbTtcblxuICAgICAgICAubW9iaWxlLWF1dGgtYnRuIHtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblxuICAgICAgICAgICYucHJpbWFyeSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktZGFyayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5zZWNvbmRhcnkge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWxpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmJ0bi1kYW5nZXIgeyAvLyBFbnN1cmUgYnV0dG9uIHN0eWxpbmdcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGdhcDogMC41cmVtO1xuICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIE5vdGlmaWNhdGlvbiBkcm9wZG93blxuLm5vdGlmaWNhdGlvbi1kcm9wZG93biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB6LWluZGV4OiAxMDAxO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIHdpZHRoOiAzMjBweDtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLm5vdGlmaWNhdGlvbi1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1saWdodCk7XG5cbiAgICAubm90aWZpY2F0aW9uLXRpdGxlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICAgICAgLm1hcmstYWxsLXJlYWQge1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5ub3RpZmljYXRpb24tbGlzdCB7XG4gICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcblxuICAgIC5ub3RpZmljYXRpb24taXRlbSB7XG4gICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1saWdodCk7XG4gICAgICB9XG5cbiAgICAgICYudW5yZWFkIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1wcmltYXJ5LXJnYiksIDAuMDUpO1xuICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAubm90aWZpY2F0aW9uLWNvbnRlbnQge1xuICAgICAgICAubm90aWZpY2F0aW9uLXRleHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgbWFyZ2luOiAwIDAgNHB4IDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ub3RpZmljYXRpb24tdGltZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5lbXB0eS1ub3RpZmljYXRpb25zIHtcbiAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG5cbiAgICAgIC5lbXB0eS1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEFuaW1hdGlvbnNcbkBrZXlmcmFtZXMgc2xpZGVEb3duIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4vLyBBcHBseSBhbmltYXRpb25zXG4uc2VhcmNoLXN1Z2dlc3Rpb25zLFxuLnVzZXItZHJvcGRvd24sXG4ubm90aWZpY2F0aW9uLWRyb3Bkb3duIHtcbiAgYW5pbWF0aW9uOiBzbGlkZURvd24gMC4zcyBlYXNlO1xufVxuXG4vLyBSZXNwb25zaXZlIGFkanVzdG1lbnRzXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmhlYWRlci1tYWluIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgfVxuXG4gIC5sb2dvLXNlY3Rpb24gLmJyYW5kLXRleHQgLmJyYW5kLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIH1cblxuICAudXNlci1hY3Rpb25zIHtcbiAgICBnYXA6IDAuMjVyZW07XG5cbiAgICAuYWN0aW9uLWJ1dHRvbiB7XG4gICAgICBwYWRkaW5nOiA2cHg7XG5cbiAgICAgIC5hY3Rpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEhpZ2ggY29udHJhc3QgbW9kZSBzdXBwb3J0XG5AbWVkaWEgKHByZWZlcnMtY29udHJhc3Q6IGhpZ2gpIHtcbiAgLmhlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xuICB9XG5cbiAgLmFjdGlvbi1idXR0b24ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBSZWR1Y2VkIG1vdGlvbiBzdXBwb3J0XG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAqIHtcbiAgICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYW5pbWF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLy8gQWRkaXRpb25hbCByZXNwb25zaXZlIGFkanVzdG1lbnRzIGZvciBtb2JpbGUgbWVudVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5tb2JpbGUtbWVudS1vdmVybGF5IC5tb2JpbGUtbWVudS1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4vLyBNb2JpbGUgbmF2IGltcHJvdmVtZW50c1xuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAubmF2LXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAudXNlci1hY3Rpb25zIC5tb2JpbGUtbWVudS1idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5oZWFkZXItbWFpbiAuY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiA1NnB4O1xuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xuICB9XG5cbiAgLmxvZ28tc2VjdGlvbiAuYnJhbmQtdGV4dCAuYnJhbmQtbmFtZSB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gIH1cblxuICAudXNlci1hY3Rpb25zIHtcbiAgICBnYXA6IDAuMnJlbTtcblxuICAgIC5hY3Rpb24tYnV0dG9uIHtcbiAgICAgIHBhZGRpbmc6IDdweDtcblxuICAgICAgLmFjdGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFJlbW92ZSBhbnkgZXh0cmEgdG9wIGJhcnMgb3IgZG91YmxlIG5hdnNcbi50b3AtYmFyIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4vLyBDdXN0b20gTWF0IE1lbnUgc3R5bGVzIChpZiBuZWVkZWQgZm9yIHVzZXIgZHJvcGRvd24pXG4uY3VzdG9tLW1hdC1tZW51IHtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbGcpICFpbXBvcnRhbnQ7XG5cbiAgLmRyb3Bkb3duLWhlYWRlciB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWxpZ2h0KTtcbiAgICAudXNlci1uYW1lIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBtYXJnaW46IDAgMCAwLjI1cmVtIDA7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICAgIC51c2VyLWVtYWlsIHtcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgIH1cbiAgfVxuICAubWF0LW1kYy1tZW51LWl0ZW0ge1xuICAgIG1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgIC5kcm9wZG93bi1pY29uIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMC43NXJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICB9XG4gICAgJi5kYW5nZXIge1xuICAgICAgY29sb3I6IHZhcigtLWVycm9yLWNvbG9yKTtcbiAgICAgIC5kcm9wZG93bi1pY29uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWVycm9yLWNvbG9yKTtcbiAgICAgIH1cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWVycm9yLWNvbG9yKSwgMC4xKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBhZGp1c3RtZW50c1xuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7IC8vIEFkanVzdGVkIGJyZWFrcG9pbnRcbiAgLmhlYWRlci1tYWluIC5jb250YWluZXIge1xuICAgIGZsZXgtd3JhcDogd3JhcDsgLy8gQWxsb3cgaXRlbXMgdG8gd3JhcFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgLy8gS2VlcCBsb2dvIGFuZCB1c2VyIGFjdGlvbnMgYXQgZW5kc1xuICAgIHJvdy1nYXA6IDAuNXJlbTsgLy8gU3BhY2Ugd2hlbiBpdGVtcyB3cmFwXG4gIH1cbiAgLmxvZ28tc2VjdGlvbiB7XG4gICAgd2lkdGg6IGF1dG87IC8vIERvbid0IGZvcmNlIGZ1bGwgd2lkdGggaWYgc2VhcmNoIGlzIGJlbG93XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyAvLyBQdXNoIHRvIGxlZnRcbiAgfVxuICAudXNlci1hY3Rpb25zIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bzsgLy8gUHVzaCB0byByaWdodFxuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuaGVhZGVyLW1haW4gLmNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgLy8gS2VlcCBsb2dvIGFuZCBhY3Rpb25zIG9uIG9uZSByb3dcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuc2VhcmNoLXNlY3Rpb24geyAvLyBTZWFyY2ggdGFrZXMgZnVsbCB3aWR0aCBiZWxvdyBsb2dvL2FjdGlvbnMgcm93XG4gICAgb3JkZXI6IDM7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMC43NXJlbTtcbiAgfVxuICAubG9nby1zZWN0aW9uIHtcbiAgICBmbGV4LWdyb3c6IDE7IC8vIEFsbG93IGxvZ28gdG8gdGFrZSBhdmFpbGFibGUgc3BhY2VcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _store_actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store/actions/cart.actions */ 6217);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var _core_services_wishlist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/wishlist.service */ 7935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 640);
/* harmony import */ var _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/truncate.pipe */ 980);

 // Import CartActions
 // Import Observable and of for isInWishlist$










function ProductCardComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r0.discountPercentage, "% OFF");
  }
}
function ProductCardComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "NEW");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ProductCardComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "FEATURED");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ProductCardComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "BESTSELLER");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ProductCardComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "SOLD OUT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ProductCardComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "LOW STOCK");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ProductCardComponent_i_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 65);
  }
}
function ProductCardComponent_i_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 66);
  }
}
function ProductCardComponent_i_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 67);
  }
}
function ProductCardComponent_i_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 68);
  }
}
function ProductCardComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 69)(1, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductCardComponent_div_29_Template_button_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r27.prevImage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductCardComponent_div_29_Template_button_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r29.nextImage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ProductCardComponent_div_30_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductCardComponent_div_30_button_1_Template_button_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34);
      const i_r32 = restoredCtx.index;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r33.setImage(i_r32, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r32 = ctx.index;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", i_r32 === ctx_r30.currentImageIndex);
  }
}
function ProductCardComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProductCardComponent_div_30_button_1_Template, 1, 2, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r11.product.images);
  }
}
function ProductCardComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 77)(1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", (ctx_r12.product.stockQuantity || 0) / 10 * 100, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Only ", ctx_r12.product.stockQuantity, " left ");
  }
}
function ProductCardComponent_span_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r13.product.brand, " ");
  }
}
function ProductCardComponent_span_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r14.product.category.name, " ");
  }
}
function ProductCardComponent_div_39_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 95);
  }
}
function ProductCardComponent_div_39_i_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 58);
  }
}
function ProductCardComponent_div_39_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" (", ctx_r37.product.reviews == null ? null : ctx_r37.product.reviews.length, " reviews) ");
  }
}
const _c0 = function () {
  return [1, 2, 3, 4, 5];
};
function ProductCardComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 86)(1, "div", 87)(2, "div", 88)(3, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ProductCardComponent_div_39_i_4_Template, 1, 0, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ProductCardComponent_div_39_i_6_Template, 1, 0, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ProductCardComponent_div_39_span_10_Template, 2, 1, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", (ctx_r15.product.rating || 0) * 20, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](9, 6, ctx_r15.product.rating, "1.1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r15.product.reviews == null ? null : ctx_r15.product.reviews.length);
  }
}
function ProductCardComponent_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 97)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "truncate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 1, ctx_r16.product.description, 80));
  }
}
function ProductCardComponent_span_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](2, 1, ctx_r17.product.regularPrice, ctx_r17.currencySymbol, "symbol", "1.0-0"), " ");
  }
}
function ProductCardComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 99)(1, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Save ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](4, 1, ctx_r18.discountAmount, ctx_r18.currencySymbol, "symbol", "1.0-0"), " ");
  }
}
function ProductCardComponent_p_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](2, 2, ctx_r19.product.price / (ctx_r19.product.unitQuantity || 1), ctx_r19.currencySymbol, "symbol", "1.2-2"), "/", ctx_r19.product.unit, " ");
  }
}
function ProductCardComponent_div_50_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const feature_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](feature_r41);
  }
}
const _c1 = function () {
  return [];
};
function ProductCardComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProductCardComponent_div_50_div_1_Template, 4, 1, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", (ctx_r20.product.keyFeatures == null ? null : ctx_r20.product.keyFeatures.slice(0, 2)) || _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c1));
  }
}
function ProductCardComponent_div_51_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Free Shipping");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ProductCardComponent_div_51_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Fast Delivery");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ProductCardComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProductCardComponent_div_51_div_1_Template, 4, 0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ProductCardComponent_div_51_div_2_Template, 4, 0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r21.product == null ? null : ctx_r21.product.freeShipping);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r21.product == null ? null : ctx_r21.product.fastDelivery);
  }
}
function ProductCardComponent_i_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 110);
  }
}
function ProductCardComponent_mat_progress_spinner_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-progress-spinner", 111);
  }
}
function ProductCardComponent_span_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProductCardComponent_span_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Adding...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ProductCardComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 112)(1, "div", 113)(2, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductCardComponent_div_60_Template_button_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r44.decrementQuantity($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProductCardComponent_div_60_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r45);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r46.selectedQuantity = $event);
    })("change", function ProductCardComponent_div_60_Template_input_change_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r45);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r47.onQuantityChange());
    })("click", function ProductCardComponent_div_60_Template_input_click_4_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductCardComponent_div_60_Template_button_click_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r45);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r49.incrementQuantity($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r26.selectedQuantity === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r26.selectedQuantity)("max", ctx_r26.product.stockQuantity || 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r26.selectedQuantity >= (ctx_r26.product.stockQuantity || 1));
  }
}
const _c2 = function (a1) {
  return ["/products", a1];
};
const _c3 = function (a0) {
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
    this.productAddedToCart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.productAddedToWishlist = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.productCompared = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.productViewed = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter(); // For quick view
    this.productBoughtNow = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
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
    this.isInWishlist$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(false); // Default to false
    this.isInCompare$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(false); // Placeholder for compare feature
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
      return new (t || ProductCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_wishlist_service__WEBPACK_IMPORTED_MODULE_1__.WishlistService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
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
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
      decls: 66,
      vars: 77,
      consts: [[1, "modern-product-card", 3, "ngClass", "mouseenter", "mouseleave"], [1, "product-image-container"], [1, "image-link", 3, "routerLink"], [1, "image-wrapper"], ["loading", "lazy", 1, "product-image", 3, "src", "alt", "error"], [1, "image-overlay"], [1, "product-badges"], ["class", "badge discount-badge", 4, "ngIf"], ["class", "badge new-badge", 4, "ngIf"], ["class", "badge featured-badge", 4, "ngIf"], ["class", "badge bestseller-badge", 4, "ngIf"], ["class", "badge sold-out-badge", 4, "ngIf"], ["class", "badge low-stock-badge", 4, "ngIf"], [1, "quick-actions"], ["mat-fab", "", "color", "primary", "matTooltip", "Add to Wishlist", "matTooltipPosition", "left", 1, "quick-action-btn", "wishlist-btn", 3, "disabled", "click"], ["class", "fas fa-heart", 4, "ngIf"], ["class", "far fa-heart", 4, "ngIf"], ["mat-fab", "", "color", "accent", "matTooltip", "Quick View", "matTooltipPosition", "left", 1, "quick-action-btn", "view-btn", 3, "click"], [1, "fas", "fa-eye"], ["mat-fab", "", "matTooltipPosition", "left", 1, "quick-action-btn", "compare-btn", 3, "matTooltip", "click"], ["class", "fas fa-check-circle", 4, "ngIf"], ["class", "fas fa-balance-scale", 4, "ngIf"], ["class", "image-navigation", 4, "ngIf"], ["class", "image-indicators", 4, "ngIf"], ["class", "stock-indicator", 4, "ngIf"], [1, "product-content"], [1, "product-meta"], ["class", "product-brand", 4, "ngIf"], ["class", "product-category", 4, "ngIf"], [1, "product-name-link", 3, "routerLink"], [1, "product-name", 3, "matTooltip"], ["class", "product-rating", 4, "ngIf"], ["class", "product-description", 4, "ngIf"], [1, "product-price-container"], [1, "price-row"], [1, "current-price"], [1, "fas", "fa-dollar-sign"], ["class", "regular-price", 4, "ngIf"], ["class", "savings-row", 4, "ngIf"], ["class", "price-per-unit", 4, "ngIf"], ["class", "product-features", 4, "ngIf"], ["class", "shipping-info", 4, "ngIf"], [1, "product-actions", 3, "ngClass"], [1, "primary-action"], ["mat-raised-button", "", "color", "primary", 1, "add-to-cart-btn", 3, "disabled", "click"], [1, "btn-content"], ["class", "fas fa-shopping-cart", 4, "ngIf"], ["mode", "indeterminate", "diameter", "18", 4, "ngIf"], [4, "ngIf"], ["class", "quantity-section", 4, "ngIf"], [1, "secondary-action"], ["mat-stroked-button", "", "color", "accent", 1, "buy-now-btn", 3, "disabled", "click"], [1, "fas", "fa-bolt"], [1, "badge", "discount-badge"], [1, "fas", "fa-percentage"], [1, "badge", "new-badge"], [1, "fas", "fa-sparkles"], [1, "badge", "featured-badge"], [1, "fas", "fa-star"], [1, "badge", "bestseller-badge"], [1, "fas", "fa-fire"], [1, "badge", "sold-out-badge"], [1, "fas", "fa-times-circle"], [1, "badge", "low-stock-badge"], [1, "fas", "fa-exclamation-triangle"], [1, "fas", "fa-heart"], [1, "far", "fa-heart"], [1, "fas", "fa-check-circle"], [1, "fas", "fa-balance-scale"], [1, "image-navigation"], ["mat-mini-fab", "", 1, "nav-btn", "prev-btn", 3, "click"], [1, "fas", "fa-chevron-left"], ["mat-mini-fab", "", 1, "nav-btn", "next-btn", 3, "click"], [1, "fas", "fa-chevron-right"], [1, "image-indicators"], ["class", "indicator-dot", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "indicator-dot", 3, "click"], [1, "stock-indicator"], [1, "stock-bar"], [1, "stock-fill"], [1, "stock-text"], [1, "fas", "fa-box"], [1, "product-brand"], [1, "fas", "fa-tag"], [1, "product-category"], [1, "fas", "fa-layer-group"], [1, "product-rating"], [1, "rating-stars"], [1, "stars-container"], [1, "stars-background"], ["class", "far fa-star", 4, "ngFor", "ngForOf"], [1, "stars-filled"], ["class", "fas fa-star", 4, "ngFor", "ngForOf"], [1, "rating-value"], ["class", "review-count", 4, "ngIf"], [1, "far", "fa-star"], [1, "review-count"], [1, "product-description"], [1, "regular-price"], [1, "savings-row"], [1, "discount-amount"], [1, "fas", "fa-piggy-bank"], [1, "price-per-unit"], [1, "product-features"], ["class", "feature", 4, "ngFor", "ngForOf"], [1, "feature"], [1, "shipping-info"], ["class", "shipping-item", 4, "ngIf"], [1, "shipping-item"], [1, "fas", "fa-shipping-fast"], [1, "fas", "fa-shopping-cart"], ["mode", "indeterminate", "diameter", "18"], [1, "quantity-section"], [1, "quantity-controls"], ["mat-icon-button", "", 1, "qty-btn", 3, "disabled", "click"], [1, "fas", "fa-minus"], ["type", "number", "min", "1", 1, "quantity-input", 3, "ngModel", "max", "ngModelChange", "change", "click"], [1, "fas", "fa-plus"]],
      template: function ProductCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseenter", function ProductCardComponent_Template_div_mouseenter_0_listener() {
            return ctx.onMouseEnter();
          })("mouseleave", function ProductCardComponent_Template_div_mouseleave_0_listener() {
            return ctx.onMouseLeave();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "a", 2)(3, "div", 3)(4, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("error", function ProductCardComponent_Template_img_error_4_listener($event) {
            return ctx.onImageError($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ProductCardComponent_div_7_Template, 4, 1, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ProductCardComponent_div_8_Template, 4, 0, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ProductCardComponent_div_9_Template, 4, 0, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ProductCardComponent_div_10_Template, 4, 0, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ProductCardComponent_div_11_Template, 4, 0, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ProductCardComponent_div_12_Template, 4, 0, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 13)(14, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductCardComponent_Template_button_click_14_listener($event) {
            return ctx.addToWishlistHandler($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ProductCardComponent_i_16_Template, 1, 0, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ProductCardComponent_i_18_Template, 1, 0, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductCardComponent_Template_button_click_20_listener($event) {
            return ctx.viewProductHandler($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "i", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductCardComponent_Template_button_click_22_listener($event) {
            return ctx.compareProductHandler($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, ProductCardComponent_i_25_Template, 1, 0, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, ProductCardComponent_i_27_Template, 1, 0, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, ProductCardComponent_div_29_Template, 5, 0, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, ProductCardComponent_div_30_Template, 2, 1, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, ProductCardComponent_div_31_Template, 6, 3, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 25)(33, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, ProductCardComponent_span_34_Template, 3, 1, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, ProductCardComponent_span_35_Template, 3, 1, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "a", 29)(37, "h3", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, ProductCardComponent_div_39_Template, 11, 11, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, ProductCardComponent_div_40_Template, 4, 4, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 33)(42, "div", 34)(43, "span", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](46, "currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, ProductCardComponent_span_47_Template, 3, 6, "span", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, ProductCardComponent_div_48_Template, 5, 6, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, ProductCardComponent_p_49_Template, 3, 7, "p", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, ProductCardComponent_div_50_Template, 2, 2, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, ProductCardComponent_div_51_Template, 3, 2, "div", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 42)(53, "div", 43)(54, "button", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductCardComponent_Template_button_click_54_listener($event) {
            return ctx.addToCartHandler($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, ProductCardComponent_i_56_Template, 1, 0, "i", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, ProductCardComponent_mat_progress_spinner_57_Template, 1, 0, "mat-progress-spinner", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, ProductCardComponent_span_58_Template, 2, 0, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, ProductCardComponent_span_59_Template, 2, 0, "span", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](60, ProductCardComponent_div_60_Template, 7, 4, "div", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 50)(62, "button", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductCardComponent_Template_button_click_62_listener($event) {
            return ctx.buyNowHandler($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "i", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Buy Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("out-of-stock", (ctx.product.stockQuantity || 0) === 0)("featured", ctx.product.featured)("new-arrival", ctx.isNew)("best-seller", ctx.isBestSeller);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.cardClasses);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](71, _c2, ctx.product.id));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.currentDisplayImage, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", ctx.product.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.discountPercentage !== null && ctx.discountPercentage > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isNew && ctx.showNewBadge);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.product == null ? null : ctx.product.featured) && ctx.showFeaturedBadge);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isBestSeller && ctx.showBestsellerBadge);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((ctx.product == null ? null : ctx.product.stockQuantity) || 0) === 0 && ctx.showSoldOutBadge);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((ctx.product == null ? null : ctx.product.stockQuantity) || 0) > 0 && ((ctx.product == null ? null : ctx.product.stockQuantity) || 0) <= 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 52, ctx.isInWishlist$));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.addingToWishlistState);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 54, ctx.isInWishlist$));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](19, 56, ctx.isInWishlist$));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 58, ctx.isInCompare$));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 60, ctx.isInCompare$) ? "Remove from compare" : "Add to compare");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 62, ctx.isInCompare$));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](28, 64, ctx.isInCompare$));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.product == null ? null : ctx.product.images) && ((ctx.product.images == null ? null : ctx.product.images.length) || 0) > 1 && ctx.showImageHoverControls);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.product == null ? null : ctx.product.images) && ((ctx.product.images == null ? null : ctx.product.images.length) || 0) > 1 && ctx.showImageIndicators);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showStockIndicator && (ctx.product == null ? null : ctx.product.stockQuantity) !== undefined && ((ctx.product == null ? null : ctx.product.stockQuantity) || 0) > 0 && ((ctx.product == null ? null : ctx.product.stockQuantity) || 0) <= 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.product == null ? null : ctx.product.brand);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.product.category && ctx.product.category.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](73, _c2, ctx.product.id));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("matTooltip", ctx.product.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.product.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showRating && (ctx.product == null ? null : ctx.product.rating) !== undefined && ((ctx.product == null ? null : ctx.product.rating) || 0) > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showShortDescription);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](46, 66, ctx.product.discountPrice || ctx.product.price || 0, ctx.currencySymbol, "symbol", "1.0-0"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.product == null ? null : ctx.product.regularPrice) && (ctx.product == null ? null : ctx.product.price) && ((ctx.product == null ? null : ctx.product.regularPrice) || 0) > ((ctx.product == null ? null : ctx.product.price) || 0));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.discountAmount !== null && ctx.discountAmount > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.product == null ? null : ctx.product.unit) && (ctx.product == null ? null : ctx.product.unitQuantity) && (ctx.product == null ? null : ctx.product.price));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showKeyFeatures && (ctx.product == null ? null : ctx.product.keyFeatures) && ((ctx.product.keyFeatures == null ? null : ctx.product.keyFeatures.length) || 0) > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showShippingInfo);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](75, _c3, ctx.uiShowQuantitySelector));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", (ctx.product.stockQuantity || 0) === 0 || ctx.addingToCart);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.addingToCart);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.addingToCart);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.addingToCart);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.addingToCart);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.uiShowQuantitySelector && ((ctx.product == null ? null : ctx.product.stockQuantity) || 0) > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", (ctx.product.stockQuantity || 0) === 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatMiniFabButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatFabButton, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinner, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CurrencyPipe, _pipes_truncate_pipe__WEBPACK_IMPORTED_MODULE_2__.TruncatePipe],
      styles: ["[_nghost-%COMP%] {\n  --primary: #6366f1;\n  --primary-light: #8b5cf6;\n  --success: #10b981;\n  --warning: #f59e0b;\n  --error: #ef4444;\n  --accent: #06b6d4;\n  --gray-50: #f8fafc;\n  --gray-100: #f1f5f9;\n  --gray-200: #e2e8f0;\n  --gray-300: #cbd5e1;\n  --gray-400: #94a3b8;\n  --gray-500: #64748b;\n  --gray-600: #475569;\n  --gray-700: #334155;\n  --gray-800: #1e293b;\n  --gray-900: #0f172a;\n  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  --shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  --shadow-hover: 0 12px 40px rgba(99, 102, 241, 0.15);\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.modern-product-card[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  background: white;\n  border-radius: 1.5rem;\n  box-shadow: var(--shadow);\n  border: 1px solid var(--gray-100);\n  transition: var(--transition);\n  overflow: hidden;\n}\n.modern-product-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: var(--shadow-hover);\n  border-color: var(--primary);\n}\n.modern-product-card[_ngcontent-%COMP%]:hover   .product-image[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.modern-product-card[_ngcontent-%COMP%]:hover   .quick-actions[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(0);\n}\n.modern-product-card[_ngcontent-%COMP%]:hover   .image-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.modern-product-card.featured[_ngcontent-%COMP%] {\n  border: 2px solid var(--primary);\n  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.2);\n}\n.modern-product-card.out-of-stock[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.modern-product-card.out-of-stock[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%] {\n  filter: grayscale(100%);\n}\n\n.product-image-container[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  border-radius: 1.5rem 1.5rem 0 0;\n  height: 250px;\n}\n.product-image-container[_ngcontent-%COMP%]   .image-link[_ngcontent-%COMP%], .product-image-container[_ngcontent-%COMP%]   .image-wrapper[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n}\n.product-image-container[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: var(--transition);\n}\n.product-image-container[_ngcontent-%COMP%]   .image-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.8), rgba(139, 92, 246, 0.8));\n  opacity: 0;\n  transition: var(--transition);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.product-image-container[_ngcontent-%COMP%]   .image-overlay[_ngcontent-%COMP%]   .overlay-text[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 600;\n  font-size: 1.1rem;\n  text-align: center;\n}\n\n.product-badges[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  left: 1rem;\n  z-index: 10;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.product-badges[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.75rem;\n  border-radius: 1rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.product-badges[_ngcontent-%COMP%]   .badge.sale[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--error), #ff6b6b);\n  color: white;\n}\n.product-badges[_ngcontent-%COMP%]   .badge.new[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--success), #51cf66);\n  color: white;\n}\n.product-badges[_ngcontent-%COMP%]   .badge.featured[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--primary), var(--primary-light));\n  color: white;\n}\n.product-badges[_ngcontent-%COMP%]   .badge.limited[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--warning), #ffd43b);\n  color: var(--gray-800);\n}\n\n.quick-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  z-index: 10;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  opacity: 0;\n  transform: translateX(20px);\n  transition: var(--transition);\n}\n.quick-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border: none;\n  border-radius: 50%;\n  background: white;\n  color: var(--gray-600);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  transition: var(--transition);\n}\n.quick-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n  color: white;\n  transform: scale(1.1);\n}\n.quick-actions[_ngcontent-%COMP%]   .action-btn.favorited[_ngcontent-%COMP%] {\n  background: var(--error);\n  color: white;\n}\n.quick-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n\n.product-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.product-category[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--primary);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin: 0;\n}\n\n.product-name[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--gray-800);\n  line-height: 1.4;\n}\n.product-name[_ngcontent-%COMP%]   .product-name-link[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n  transition: var(--transition);\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.product-name[_ngcontent-%COMP%]   .product-name-link[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n}\n\n.product-description[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--gray-600);\n  line-height: 1.5;\n  margin: 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.product-rating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.product-rating[_ngcontent-%COMP%]   .rating-stars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.125rem;\n}\n.product-rating[_ngcontent-%COMP%]   .rating-stars[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%] {\n  color: var(--warning);\n  font-size: 0.875rem;\n}\n.product-rating[_ngcontent-%COMP%]   .rating-stars[_ngcontent-%COMP%]   .star.empty[_ngcontent-%COMP%] {\n  color: var(--gray-300);\n}\n.product-rating[_ngcontent-%COMP%]   .rating-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--gray-500);\n}\n.product-rating[_ngcontent-%COMP%]   .rating-text[_ngcontent-%COMP%]   .rating-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--gray-700);\n}\n\n.product-pricing[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin: 0.5rem 0;\n}\n.product-pricing[_ngcontent-%COMP%]   .current-price[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--gray-900);\n}\n.product-pricing[_ngcontent-%COMP%]   .original-price[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--gray-400);\n  text-decoration: line-through;\n}\n.product-pricing[_ngcontent-%COMP%]   .discount-percentage[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  background: linear-gradient(135deg, var(--error), #ff6b6b);\n  color: white;\n  border-radius: 0.5rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n\n.product-stock[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.product-stock.in-stock[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.product-stock.low-stock[_ngcontent-%COMP%] {\n  color: var(--warning);\n}\n.product-stock.out-of-stock[_ngcontent-%COMP%] {\n  color: var(--error);\n}\n.product-stock[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n}\n\n.product-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: auto;\n}\n.product-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.75rem 1rem;\n  border: none;\n  border-radius: 0.75rem;\n  font-weight: 600;\n  font-size: 0.875rem;\n  cursor: pointer;\n  transition: var(--transition);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.product-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--primary), var(--primary-light));\n  color: white;\n}\n.product-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);\n}\n.product-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--gray-100);\n  color: var(--gray-700);\n  border: 1px solid var(--gray-200);\n}\n.product-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--gray-200);\n  border-color: var(--gray-300);\n}\n.product-actions[_ngcontent-%COMP%]   .btn.btn-outline[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--primary);\n  border: 2px solid var(--primary);\n}\n.product-actions[_ngcontent-%COMP%]   .btn.btn-outline[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n  color: white;\n}\n.product-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.product-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled:hover {\n  transform: none;\n  box-shadow: none;\n}\n.product-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modern-product-card[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp 0.6s ease-out;\n}\n\n@media (max-width: 768px) {\n  .modern-product-card[_ngcontent-%COMP%] {\n    border-radius: 1rem;\n  }\n  .modern-product-card[_ngcontent-%COMP%]:hover {\n    transform: translateY(-4px);\n  }\n  .product-image-container[_ngcontent-%COMP%] {\n    height: 200px;\n    border-radius: 1rem 1rem 0 0;\n  }\n  .product-content[_ngcontent-%COMP%] {\n    padding: 1rem;\n    gap: 0.75rem;\n  }\n  .product-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .product-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .quick-actions[_ngcontent-%COMP%] {\n    position: static;\n    flex-direction: row;\n    opacity: 1;\n    transform: none;\n    margin-top: 1rem;\n    justify-content: center;\n  }\n  .quick-actions[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\n    width: 2.5rem;\n    height: 2.5rem;\n  }\n}\n@media (max-width: 480px) {\n  .product-badges[_ngcontent-%COMP%] {\n    top: 0.5rem;\n    left: 0.5rem;\n  }\n  .product-badges[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n    padding: 0.25rem 0.5rem;\n    font-size: 0.625rem;\n  }\n  .product-content[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .product-name[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .product-pricing[_ngcontent-%COMP%]   .current-price[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n  }\n}\n@media (prefers-contrast: high) {\n  .modern-product-card[_ngcontent-%COMP%] {\n    border: 2px solid var(--gray-800);\n  }\n  .modern-product-card[_ngcontent-%COMP%]:hover {\n    border-color: var(--primary);\n  }\n  .badge[_ngcontent-%COMP%] {\n    border: 1px solid currentColor;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .modern-product-card[_ngcontent-%COMP%], .product-image[_ngcontent-%COMP%], .quick-actions[_ngcontent-%COMP%], .image-overlay[_ngcontent-%COMP%], .action-btn[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%] {\n    transition: none;\n    animation: none;\n  }\n  .modern-product-card[_ngcontent-%COMP%]:hover {\n    transform: none;\n  }\n}\n@media print {\n  .modern-product-card[_ngcontent-%COMP%] {\n    break-inside: avoid;\n    box-shadow: none;\n    border: 1px solid var(--gray-300);\n  }\n  .modern-product-card[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%], .modern-product-card[_ngcontent-%COMP%]   .product-actions[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJvZHVjdC1jYXJkL3Byb2R1Y3QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEsbURBQUE7RUFDQSx3Q0FBQTtFQUNBLG9EQUFBO0VBRUEsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUFGRjtBQUlFO0VBQ0UsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0FBRko7QUFJSTtFQUNFLHNCQUFBO0FBRk47QUFLSTtFQUNFLFVBQUE7RUFDQSx3QkFBQTtBQUhOO0FBTUk7RUFDRSxVQUFBO0FBSk47QUFRRTtFQUNFLGdDQUFBO0VBQ0EsOENBQUE7QUFOSjtBQVNFO0VBQ0UsWUFBQTtBQVBKO0FBU0k7RUFDRSx1QkFBQTtBQVBOOztBQWFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtBQVZGO0FBWUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFWSjtBQWFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FBWEo7QUFjRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtF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LGdCQUFBO0VBaEVGO0VBbUVBO0lBQ0UsZUFBQTtFQWpFRjtFQW9FQTtJQUNFLG1CQUFBO0VBbEVGO0FBQ0Y7QUFzRUE7RUFDRTtJQUNFLGlDQUFBO0VBcEVGO0VBc0VFO0lBQ0UsNEJBQUE7RUFwRUo7RUF3RUE7SUFDRSw4QkFBQTtFQXRFRjtBQUNGO0FBMEVBO0VBQ0U7Ozs7OztJQU1FLGdCQUFBO0lBQ0EsZUFBQTtFQXhFRjtFQTJFQTtJQUNFLGVBQUE7RUF6RUY7QUFDRjtBQTZFQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLGlDQUFBO0VBM0VGO0VBNkVFOztJQUVFLGFBQUE7RUEzRUo7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1vZGVybiBQcm9kdWN0IENhcmQgU3R5bGVzIC0gQ29tcGxldGUgVUkgT3ZlcmhhdWxcbjpob3N0IHtcbiAgLS1wcmltYXJ5OiAjNjM2NmYxO1xuICAtLXByaW1hcnktbGlnaHQ6ICM4YjVjZjY7XG4gIC0tc3VjY2VzczogIzEwYjk4MTtcbiAgLS13YXJuaW5nOiAjZjU5ZTBiO1xuICAtLWVycm9yOiAjZWY0NDQ0O1xuICAtLWFjY2VudDogIzA2YjZkNDtcbiAgLS1ncmF5LTUwOiAjZjhmYWZjO1xuICAtLWdyYXktMTAwOiAjZjFmNWY5O1xuICAtLWdyYXktMjAwOiAjZTJlOGYwO1xuICAtLWdyYXktMzAwOiAjY2JkNWUxO1xuICAtLWdyYXktNDAwOiAjOTRhM2I4O1xuICAtLWdyYXktNTAwOiAjNjQ3NDhiO1xuICAtLWdyYXktNjAwOiAjNDc1NTY5O1xuICAtLWdyYXktNzAwOiAjMzM0MTU1O1xuICAtLWdyYXktODAwOiAjMWUyOTNiO1xuICAtLWdyYXktOTAwOiAjMGYxNzJhO1xuICBcbiAgLS10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAtLXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAtLXNoYWRvdy1ob3ZlcjogMCAxMnB4IDQwcHggcmdiYSg5OSwgMTAyLCAyNDEsIDAuMTUpO1xuICBcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5tb2Rlcm4tcHJvZHVjdC1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXktMTAwKTtcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIFxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWhvdmVyKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgIFxuICAgIC5wcm9kdWN0LWltYWdlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgfVxuICAgIFxuICAgIC5xdWljay1hY3Rpb25zIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxuICAgIFxuICAgIC5pbWFnZS1vdmVybGF5IHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG4gIFxuICAmLmZlYXR1cmVkIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcbiAgICBib3gtc2hhZG93OiAwIDhweCAzMnB4IHJnYmEoOTksIDEwMiwgMjQxLCAwLjIpO1xuICB9XG4gIFxuICAmLm91dC1vZi1zdG9jayB7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIFxuICAgIC5wcm9kdWN0LWltYWdlIHtcbiAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBJbWFnZSBDb250YWluZXJcbi5wcm9kdWN0LWltYWdlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtIDEuNXJlbSAwIDA7XG4gIGhlaWdodDogMjUwcHg7XG4gIFxuICAuaW1hZ2UtbGluaywgLmltYWdlLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgLnByb2R1Y3QtaW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgfVxuICBcbiAgLmltYWdlLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg5OSwgMTAyLCAyNDEsIDAuOCksIHJnYmEoMTM5LCA5MiwgMjQ2LCAwLjgpKTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBcbiAgICAub3ZlcmxheS10ZXh0IHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cbn1cblxuLy8gQmFkZ2VzXG4ucHJvZHVjdC1iYWRnZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXJlbTtcbiAgbGVmdDogMXJlbTtcbiAgei1pbmRleDogMTA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41cmVtO1xuICBcbiAgLmJhZGdlIHtcbiAgICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgXG4gICAgJi5zYWxlIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWVycm9yKSwgI2ZmNmI2Yik7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIFxuICAgICYubmV3IHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXN1Y2Nlc3MpLCAjNTFjZjY2KTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgXG4gICAgJi5mZWF0dXJlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5KSwgdmFyKC0tcHJpbWFyeS1saWdodCkpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBcbiAgICAmLmxpbWl0ZWQge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0td2FybmluZyksICNmZmQ0M2IpO1xuICAgICAgY29sb3I6IHZhcigtLWdyYXktODAwKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gUXVpY2sgQWN0aW9uc1xuLnF1aWNrLWFjdGlvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMXJlbTtcbiAgcmlnaHQ6IDFyZW07XG4gIHotaW5kZXg6IDEwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuNXJlbTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgXG4gIC5hY3Rpb24tYnRuIHtcbiAgICB3aWR0aDogM3JlbTtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogdmFyKC0tZ3JheS02MDApO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICB9XG4gICAgXG4gICAgJi5mYXZvcml0ZWQge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZXJyb3IpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBcbiAgICBpIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIH1cbiAgfVxufVxuXG4vLyBQcm9kdWN0IENvbnRlbnRcbi5wcm9kdWN0LWNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXJlbTtcbn1cblxuLnByb2R1Y3QtY2F0ZWdvcnkge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucHJvZHVjdC1uYW1lIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWdyYXktODAwKTtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgXG4gIC5wcm9kdWN0LW5hbWUtbGluayB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICBsaW5lLWNsYW1wOiAyO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICB9XG4gIH1cbn1cblxuLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBjb2xvcjogdmFyKC0tZ3JheS02MDApO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIGxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wcm9kdWN0LXJhdGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBcbiAgLnJhdGluZy1zdGFycyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDAuMTI1cmVtO1xuICAgIFxuICAgIC5zdGFyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS13YXJuaW5nKTtcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICBcbiAgICAgICYuZW1wdHkge1xuICAgICAgICBjb2xvcjogdmFyKC0tZ3JheS0zMDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLnJhdGluZy10ZXh0IHtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgY29sb3I6IHZhcigtLWdyYXktNTAwKTtcbiAgICBcbiAgICAucmF0aW5nLXZhbHVlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0tZ3JheS03MDApO1xuICAgIH1cbiAgfVxufVxuXG4ucHJvZHVjdC1wcmljaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjc1cmVtO1xuICBtYXJnaW46IDAuNXJlbSAwO1xuICBcbiAgLmN1cnJlbnQtcHJpY2Uge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiB2YXIoLS1ncmF5LTkwMCk7XG4gIH1cbiAgXG4gIC5vcmlnaW5hbC1wcmljZSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1ncmF5LTQwMCk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIH1cbiAgXG4gIC5kaXNjb3VudC1wZXJjZW50YWdlIHtcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1lcnJvciksICNmZjZiNmIpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbn1cblxuLnByb2R1Y3Qtc3RvY2sge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIFxuICAmLmluLXN0b2NrIHtcbiAgICBjb2xvcjogdmFyKC0tc3VjY2Vzcyk7XG4gIH1cbiAgXG4gICYubG93LXN0b2NrIHtcbiAgICBjb2xvcjogdmFyKC0td2FybmluZyk7XG4gIH1cbiAgXG4gICYub3V0LW9mLXN0b2NrIHtcbiAgICBjb2xvcjogdmFyKC0tZXJyb3IpO1xuICB9XG4gIFxuICBpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XG4gIH1cbn1cblxuLy8gUHJvZHVjdCBBY3Rpb25zXG4ucHJvZHVjdC1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjc1cmVtO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBcbiAgLmJ0biB7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAwLjVyZW07XG4gICAgXG4gICAgJi5idG4tcHJpbWFyeSB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5KSwgdmFyKC0tcHJpbWFyeS1saWdodCkpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDhweCAyNXB4IHJnYmEoOTksIDEwMiwgMjQxLCAwLjMpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAmLmJ0bi1zZWNvbmRhcnkge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JheS0xMDApO1xuICAgICAgY29sb3I6IHZhcigtLWdyYXktNzAwKTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyYXktMjAwKTtcbiAgICAgIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYXktMjAwKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncmF5LTMwMCk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgICYuYnRuLW91dGxpbmUge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaSB7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICB9XG59XG5cbi8vIEFuaW1hdGlvbnNcbkBrZXlmcmFtZXMgZmFkZUluVXAge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuLm1vZGVybi1wcm9kdWN0LWNhcmQge1xuICBhbmltYXRpb246IGZhZGVJblVwIDAuNnMgZWFzZS1vdXQ7XG59XG5cbi8vIFJlc3BvbnNpdmUgRGVzaWduXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1vZGVybi1wcm9kdWN0LWNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG4gICAgfVxuICB9XG4gIFxuICAucHJvZHVjdC1pbWFnZS1jb250YWluZXIge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbSAxcmVtIDAgMDtcbiAgfVxuICBcbiAgLnByb2R1Y3QtY29udGVudCB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBnYXA6IDAuNzVyZW07XG4gIH1cbiAgXG4gIC5wcm9kdWN0LWFjdGlvbnMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgXG4gICAgLmJ0biB7XG4gICAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgIH1cbiAgfVxuICBcbiAgLnF1aWNrLWFjdGlvbnMge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIFxuICAgIC5hY3Rpb24tYnRuIHtcbiAgICAgIHdpZHRoOiAyLjVyZW07XG4gICAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5wcm9kdWN0LWJhZGdlcyB7XG4gICAgdG9wOiAwLjVyZW07XG4gICAgbGVmdDogMC41cmVtO1xuICAgIFxuICAgIC5iYWRnZSB7XG4gICAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMC42MjVyZW07XG4gICAgfVxuICB9XG4gIFxuICAucHJvZHVjdC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICB9XG4gIFxuICAucHJvZHVjdC1uYW1lIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbiAgXG4gIC5wcm9kdWN0LXByaWNpbmcgLmN1cnJlbnQtcHJpY2Uge1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIH1cbn1cblxuLy8gSGlnaCBDb250cmFzdCBNb2RlXG5AbWVkaWEgKHByZWZlcnMtY29udHJhc3Q6IGhpZ2gpIHtcbiAgLm1vZGVybi1wcm9kdWN0LWNhcmQge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWdyYXktODAwKTtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgfVxuICB9XG4gIFxuICAuYmFkZ2Uge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgfVxufVxuXG4vLyBSZWR1Y2VkIE1vdGlvblxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgLm1vZGVybi1wcm9kdWN0LWNhcmQsXG4gIC5wcm9kdWN0LWltYWdlLFxuICAucXVpY2stYWN0aW9ucyxcbiAgLmltYWdlLW92ZXJsYXksXG4gIC5hY3Rpb24tYnRuLFxuICAuYnRuIHtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgfVxuICBcbiAgLm1vZGVybi1wcm9kdWN0LWNhcmQ6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG4vLyBQcmludCBTdHlsZXNcbkBtZWRpYSBwcmludCB7XG4gIC5tb2Rlcm4tcHJvZHVjdC1jYXJkIHtcbiAgICBicmVhay1pbnNpZGU6IGF2b2lkO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JheS0zMDApO1xuICAgIFxuICAgIC5xdWljay1hY3Rpb25zLFxuICAgIC5wcm9kdWN0LWFjdGlvbnMge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
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
      styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  --star-color: #f59e0b;\n  --star-color-inactive: #e5e7eb;\n  --star-color-hover: #fbbf24;\n  --star-size: 20px;\n  --star-spacing: 2px;\n  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);\n  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  display: inline-block;\n}\n\n.star-rating-container[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--star-spacing);\n}\n.star-rating-container[_ngcontent-%COMP%]   .star-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 4px;\n  margin: 0;\n  cursor: pointer;\n  color: var(--star-color-inactive);\n  transition: all var(--transition-fast);\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.star-rating-container[_ngcontent-%COMP%]   .star-button[_ngcontent-%COMP%]:hover {\n  color: var(--star-color-hover);\n  transform: scale(1.1);\n  background: rgba(251, 191, 36, 0.1);\n}\n.star-rating-container[_ngcontent-%COMP%]   .star-button[_ngcontent-%COMP%]:focus {\n  outline: 2px solid var(--star-color);\n  outline-offset: 2px;\n}\n.star-rating-container[_ngcontent-%COMP%]   .star-button.filled[_ngcontent-%COMP%] {\n  color: var(--star-color);\n}\n.star-rating-container[_ngcontent-%COMP%]   .star-button.filled[_ngcontent-%COMP%]:hover {\n  color: var(--star-color-hover);\n}\n.star-rating-container[_ngcontent-%COMP%]   .star-button.half-filled[_ngcontent-%COMP%] {\n  position: relative;\n  color: var(--star-color-inactive);\n}\n.star-rating-container[_ngcontent-%COMP%]   .star-button.half-filled[_ngcontent-%COMP%]::before {\n  content: \"\u2605\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  color: var(--star-color);\n  width: 50%;\n  overflow: hidden;\n  z-index: 1;\n}\n.star-rating-container[_ngcontent-%COMP%]   .star-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: var(--star-size);\n  width: var(--star-size);\n  height: var(--star-size);\n  vertical-align: middle;\n  transition: inherit;\n}\n.star-rating-container.readonly[_ngcontent-%COMP%]   .star-button[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.star-rating-container.readonly[_ngcontent-%COMP%]   .star-button[_ngcontent-%COMP%]:hover {\n  transform: none;\n  background: none;\n}\n.star-rating-container.small[_ngcontent-%COMP%] {\n  --star-size: 16px;\n  --star-spacing: 1px;\n}\n.star-rating-container.large[_ngcontent-%COMP%] {\n  --star-size: 24px;\n  --star-spacing: 4px;\n}\n.star-rating-container[_ngcontent-%COMP%]   .rating-display[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-left: 8px;\n}\n.star-rating-container[_ngcontent-%COMP%]   .rating-display[_ngcontent-%COMP%]   .rating-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  font-size: 0.875rem;\n}\n.star-rating-container[_ngcontent-%COMP%]   .rating-display[_ngcontent-%COMP%]   .review-count[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.star-rating-container[_ngcontent-%COMP%]   .rating-display[_ngcontent-%COMP%]   .review-count[_ngcontent-%COMP%]:hover {\n  color: #374151;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n@keyframes _ngcontent-%COMP%_starFill {\n  from {\n    transform: scale(0.8);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n.star-button.filled[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_starFill 200ms ease-out;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .star-button[_ngcontent-%COMP%] {\n    transition: none;\n  }\n  .star-button[_ngcontent-%COMP%]:hover {\n    transform: none;\n  }\n  .star-button.filled[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n@media (prefers-contrast: high) {\n  [_nghost-%COMP%] {\n    --star-color: #000000;\n    --star-color-inactive: #666666;\n    --star-color-hover: #333333;\n  }\n  .star-button[_ngcontent-%COMP%] {\n    border: 1px solid currentColor;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3Rhci1yYXRpbmcvc3Rhci1yYXRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQ2hCO0VBRUUscUJBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFEQUFBO0VBQ0EsMENBQUE7RUFFQSxxQkFBQTtBQURGOztBQUlBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0FBREY7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBREo7QUFHSTtFQUNFLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtBQUROO0FBSUk7RUFDRSxvQ0FBQTtFQUNBLG1CQUFBO0FBRk47QUFLSTtFQUNFLHdCQUFBO0FBSE47QUFLTTtFQUNFLDhCQUFBO0FBSFI7QUFPSTtFQUNFLGtCQUFBO0VBQ0EsaUNBQUE7QUFMTjtBQU9NO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQUxSO0FBU0k7RUFDRSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBUE47QUFXRTtFQUNFLGVBQUE7QUFUSjtBQVdJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBVE47QUFhRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFYSjtBQWNFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQVpKO0FBZUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUFiSjtBQWVJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFiTjtBQWdCSTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQWROO0FBZ0JNO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQWRSOztBQXFCQTtFQUNFO0lBQ0UscUJBQUE7RUFsQkY7RUFvQkE7SUFDRSxtQkFBQTtFQWxCRjtBQUNGO0FBcUJBO0VBQ0Usa0NBQUE7QUFuQkY7O0FBdUJBO0VBQ0U7SUFDRSxnQkFBQTtFQXBCRjtFQXNCRTtJQUNFLGVBQUE7RUFwQko7RUF3QkE7SUFDRSxlQUFBO0VBdEJGO0FBQ0Y7QUEwQkE7RUFDRTtJQUNFLHFCQUFBO0lBQ0EsOEJBQUE7SUFDQSwyQkFBQTtFQXhCRjtFQTJCQTtJQUNFLDhCQUFBO0VBekJGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNb2Rlcm4gU3RhciBSYXRpbmcgQ29tcG9uZW50XG46aG9zdCB7XG4gIC8vIERlc2lnbiBzeXN0ZW0gdmFyaWFibGVzXG4gIC0tc3Rhci1jb2xvcjogI2Y1OWUwYjtcbiAgLS1zdGFyLWNvbG9yLWluYWN0aXZlOiAjZTVlN2ViO1xuICAtLXN0YXItY29sb3ItaG92ZXI6ICNmYmJmMjQ7XG4gIC0tc3Rhci1zaXplOiAyMHB4O1xuICAtLXN0YXItc3BhY2luZzogMnB4O1xuICAtLXRyYW5zaXRpb24tZmFzdDogMTUwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgLS1zaGFkb3ctc206IDAgMXB4IDJweCAwIHJnYigwIDAgMCAvIDAuMDUpO1xuICBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc3Rhci1yYXRpbmctY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogdmFyKC0tc3Rhci1zcGFjaW5nKTtcbiAgXG4gIC5zdGFyLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHZhcigtLXN0YXItY29sb3ItaW5hY3RpdmUpO1xuICAgIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLWZhc3QpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogdmFyKC0tc3Rhci1jb2xvci1ob3Zlcik7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1MSwgMTkxLCAzNiwgMC4xKTtcbiAgICB9XG4gICAgXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tc3Rhci1jb2xvcik7XG4gICAgICBvdXRsaW5lLW9mZnNldDogMnB4O1xuICAgIH1cbiAgICBcbiAgICAmLmZpbGxlZCB7XG4gICAgICBjb2xvcjogdmFyKC0tc3Rhci1jb2xvcik7XG4gICAgICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tc3Rhci1jb2xvci1ob3Zlcik7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgICYuaGFsZi1maWxsZWQge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgY29sb3I6IHZhcigtLXN0YXItY29sb3ItaW5hY3RpdmUpO1xuICAgICAgXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnw6LCmMKFJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXN0YXItY29sb3IpO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1hdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tc3Rhci1zaXplKTtcbiAgICAgIHdpZHRoOiB2YXIoLS1zdGFyLXNpemUpO1xuICAgICAgaGVpZ2h0OiB2YXIoLS1zdGFyLXNpemUpO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIHRyYW5zaXRpb246IGluaGVyaXQ7XG4gICAgfVxuICB9XG5cbiAgJi5yZWFkb25seSAuc3Rhci1idXR0b24ge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgfVxuICB9XG4gIFxuICAmLnNtYWxsIHtcbiAgICAtLXN0YXItc2l6ZTogMTZweDtcbiAgICAtLXN0YXItc3BhY2luZzogMXB4O1xuICB9XG4gIFxuICAmLmxhcmdlIHtcbiAgICAtLXN0YXItc2l6ZTogMjRweDtcbiAgICAtLXN0YXItc3BhY2luZzogNHB4O1xuICB9XG5cbiAgLnJhdGluZy1kaXNwbGF5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICBcbiAgICAucmF0aW5nLXZhbHVlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzM3NDE1MTtcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgfVxuICAgIFxuICAgIC5yZXZpZXctY291bnQge1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgIGNvbG9yOiAjNmI3MjgwO1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICMzNzQxNTE7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEFuaW1hdGlvbiBmb3Igc3RhciBmaWxsaW5nXG5Aa2V5ZnJhbWVzIHN0YXJGaWxsIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5cbi5zdGFyLWJ1dHRvbi5maWxsZWQge1xuICBhbmltYXRpb246IHN0YXJGaWxsIDIwMG1zIGVhc2Utb3V0O1xufVxuXG4vLyBBY2Nlc3NpYmlsaXR5IGltcHJvdmVtZW50c1xuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgLnN0YXItYnV0dG9uIHtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgIH1cbiAgfVxuICBcbiAgLnN0YXItYnV0dG9uLmZpbGxlZCB7XG4gICAgYW5pbWF0aW9uOiBub25lO1xuICB9XG59XG5cbi8vIEhpZ2ggY29udHJhc3QgbW9kZVxuQG1lZGlhIChwcmVmZXJzLWNvbnRyYXN0OiBoaWdoKSB7XG4gIDpob3N0IHtcbiAgICAtLXN0YXItY29sb3I6ICMwMDAwMDA7XG4gICAgLS1zdGFyLWNvbG9yLWluYWN0aXZlOiAjNjY2NjY2O1xuICAgIC0tc3Rhci1jb2xvci1ob3ZlcjogIzMzMzMzMztcbiAgfVxuICBcbiAgLnN0YXItYnV0dG9uIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
    this.addToCart$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__.ofType)(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__.addToCart), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.withLatestFrom)(this.store.select(_selectors_cart_selectors__WEBPACK_IMPORTED_MODULE_1__.selectCartItems), this.store.select(_selectors_auth_selectors__WEBPACK_IMPORTED_MODULE_2__.selectIsAuthenticated)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(([action, currentItems, isAuthenticated]) => {
      this.notificationService.showSuccess(`${action.item.name || action.item.productId} added to cart`);
      // Only update localStorage for non-authenticated users
      // The reducer will handle the state update
      if (!isAuthenticated) {
        // Sync with localStorage after reducer updates state
        setTimeout(() => {
          const updatedItems = [...currentItems];
          const existingItemIndex = updatedItems.findIndex(cartItem => cartItem.productId === action.item.productId);
          if (existingItemIndex >= 0) {
            updatedItems[existingItemIndex] = {
              ...updatedItems[existingItemIndex],
              quantity: updatedItems[existingItemIndex].quantity + action.item.quantity
            };
          } else {
            const cartItem = {
              productId: action.item.productId,
              name: action.item.name || '',
              price: action.item.price,
              image: action.item.image || action.item.imageUrl || '',
              quantity: action.item.quantity
            };
            updatedItems.push(cartItem);
          }
          this.storageService.setItem('cart', JSON.stringify(updatedItems));
        }, 0);
      }
    })), {
      dispatch: false
    });
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
    }) => {
      console.log('ProductEffects: loadProducts effect triggered with params:', params);
      return this.productService.getProducts(params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(paginatedResponse => {
        console.log('ProductEffects: loadProducts success with response:', paginatedResponse);
        return _actions_product_actions__WEBPACK_IMPORTED_MODULE_0__.loadProductsSuccess({
          paginatedResponse
        });
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
        console.error('ProductEffects: loadProducts error:', error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(_actions_product_actions__WEBPACK_IMPORTED_MODULE_0__.loadProductsFailure({
          error
        }));
      }));
    })));
    this.loadProductById$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_product_actions__WEBPACK_IMPORTED_MODULE_0__.loadProductById), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(({
      productId
    }) => this.productService.getProductById(productId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(product => _actions_product_actions__WEBPACK_IMPORTED_MODULE_0__.loadProductByIdSuccess({
      product
    })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(_actions_product_actions__WEBPACK_IMPORTED_MODULE_0__.loadProductByIdFailure({
      error
    })))))));
    this.loadCategories$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_product_actions__WEBPACK_IMPORTED_MODULE_0__.loadCategories), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(() => {
      console.log('ProductEffects: loadCategories effect triggered');
      return this.productService.getCategories().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(categories => {
        console.log('ProductEffects: loadCategories success with categories:', categories);
        return _actions_product_actions__WEBPACK_IMPORTED_MODULE_0__.loadCategoriesSuccess({
          categories
        });
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
        console.error('ProductEffects: loadCategories error:', error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(_actions_product_actions__WEBPACK_IMPORTED_MODULE_0__.loadCategoriesFailure({
          error
        }));
      }));
    })));
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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var _actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/cart.actions */ 6217);


const initialState = {
  items: [],
  total: 0,
  loading: false,
  error: null
};
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState,
// Add to cart
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__.addToCart, (state, {
  item
}) => {
  const existingItemIndex = state.items.findIndex(cartItem => cartItem.productId === item.productId);
  let updatedItems;
  if (existingItemIndex >= 0) {
    // Item exists, update quantity
    updatedItems = state.items.map((cartItem, index) => index === existingItemIndex ? {
      ...cartItem,
      quantity: cartItem.quantity + item.quantity
    } : cartItem);
  } else {
    // New item, add to cart
    updatedItems = [...state.items, item];
  }
  const newState = {
    ...state,
    items: updatedItems,
    total: calculateTotal(updatedItems)
  };
  return newState;
}),
// Remove from cart
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__.removeFromCart, (state, {
  productId
}) => {
  const updatedItems = state.items.filter(item => item.productId !== productId);
  return {
    ...state,
    items: updatedItems,
    total: calculateTotal(updatedItems)
  };
}),
// Update cart item quantity
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__.updateCartItemQuantity, (state, {
  productId,
  quantity
}) => {
  const updatedItems = state.items.map(item => item.productId === productId ? {
    ...item,
    quantity
  } : item);
  return {
    ...state,
    items: updatedItems,
    total: calculateTotal(updatedItems)
  };
}),
// Clear cart
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__.clearCart, () => initialState),
// Load cart
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__.loadCart, state => ({
  ...state,
  loading: true,
  error: null
})),
// Load cart success
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__.loadCartSuccess, (state, {
  items
}) => ({
  ...state,
  items,
  total: calculateTotal(items),
  loading: false,
  error: null
})),
// Load cart failure
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__.loadCartFailure, (state, {
  error
}) => ({
  ...state,
  loading: false,
  error: typeof error === 'string' ? error : 'Failed to load cart'
})));
// Helper function to calculate total
function calculateTotal(items) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var _actions_product_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/product.actions */ 3574);


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
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState,
// Load Products
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_product_actions__WEBPACK_IMPORTED_MODULE_0__.loadProducts, state => ({
  ...state,
  loading: true,
  error: null
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_product_actions__WEBPACK_IMPORTED_MODULE_0__.loadProductsSuccess, (state, {
  paginatedResponse
}) => ({
  ...state,
  items: paginatedResponse.items,
  total: paginatedResponse.totalCount,
  loading: false,
  error: null
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_product_actions__WEBPACK_IMPORTED_MODULE_0__.loadProductsFailure, (state, {
  error
}) => ({
  ...state,
  loading: false,
  error: error
})),
// Load Product By ID
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_product_actions__WEBPACK_IMPORTED_MODULE_0__.loadProductById, state => ({
  ...state,
  loading: true,
  error: null
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_product_actions__WEBPACK_IMPORTED_MODULE_0__.loadProductByIdSuccess, (state, {
  product
}) => ({
  ...state,
  currentProduct: product,
  selectedProduct: product,
  loading: false,
  error: null
})), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_product_actions__WEBPACK_IMPORTED_MODULE_0__.loadProductByIdFailure, (state, {
  error
}) => ({
  ...state,
  loading: false,
  error: error
})),
// Load Categories
(0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_product_actions__WEBPACK_IMPORTED_MODULE_0__.loadCategories, state => {
  console.log('Products Reducer: loadCategories action received');
  return {
    ...state,
    loading: true,
    error: null
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_product_actions__WEBPACK_IMPORTED_MODULE_0__.loadCategoriesSuccess, (state, {
  categories
}) => {
  console.log('Products Reducer: loadCategoriesSuccess action received', categories);
  return {
    ...state,
    categories: categories,
    loading: false,
    error: null
  };
}), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_product_actions__WEBPACK_IMPORTED_MODULE_0__.loadCategoriesFailure, (state, {
  error
}) => {
  console.log('Products Reducer: loadCategoriesFailure action received', error);
  return {
    ...state,
    loading: false,
    error: error
  };
}));

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