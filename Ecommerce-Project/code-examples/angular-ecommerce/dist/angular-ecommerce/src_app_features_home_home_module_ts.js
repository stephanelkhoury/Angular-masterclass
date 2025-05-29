"use strict";
(self["webpackChunkangular_ecommerce"] = self["webpackChunkangular_ecommerce"] || []).push([["src_app_features_home_home_module_ts"],{

/***/ 149:
/*!***********************************************************************************!*\
  !*** ./src/app/features/home/components/category-card/category-card.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryCardComponent: () => (/* binding */ CategoryCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class CategoryCardComponent {
  constructor() {
    this.categorySelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onClick() {
    this.categorySelected.emit(this.category);
  }
  static {
    this.ɵfac = function CategoryCardComponent_Factory(t) {
      return new (t || CategoryCardComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CategoryCardComponent,
      selectors: [["app-category-card"]],
      inputs: {
        category: "category"
      },
      outputs: {
        categorySelected: "categorySelected"
      },
      decls: 6,
      vars: 4,
      consts: [[1, "category-card", 3, "click"], [1, "category-overlay"], [1, "product-count"]],
      template: function CategoryCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryCardComponent_Template_div_click_0_listener() {
            return ctx.onClick();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx.category.imageUrl + ")");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.category.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.category.productCount || 0, " Products");
        }
      },
      styles: [".category-card[_ngcontent-%COMP%] {\n      position: relative;\n      height: 180px;\n      border-radius: 8px;\n      background-size: cover;\n      background-position: center;\n      overflow: hidden;\n      cursor: pointer;\n      transition: transform 0.3s ease;\n    }\n    \n    .category-card[_ngcontent-%COMP%]:hover {\n      transform: translateY(-5px);\n    }\n    \n    .category-overlay[_ngcontent-%COMP%] {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      padding: 15px;\n      background: linear-gradient(transparent, rgba(0,0,0,0.7));\n      color: white;\n      text-align: center;\n    }\n    \n    h3[_ngcontent-%COMP%] {\n      margin: 0 0 5px 0;\n      font-size: 1.2rem;\n    }\n    \n    .product-count[_ngcontent-%COMP%] {\n      font-size: 0.9rem;\n      opacity: 0.8;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvaG9tZS9jb21wb25lbnRzL2NhdGVnb3J5LWNhcmQvY2F0ZWdvcnktY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0Usa0JBQWtCO01BQ2xCLGFBQWE7TUFDYixrQkFBa0I7TUFDbEIsc0JBQXNCO01BQ3RCLDJCQUEyQjtNQUMzQixnQkFBZ0I7TUFDaEIsZUFBZTtNQUNmLCtCQUErQjtJQUNqQzs7SUFFQTtNQUNFLDJCQUEyQjtJQUM3Qjs7SUFFQTtNQUNFLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsT0FBTztNQUNQLFFBQVE7TUFDUixhQUFhO01BQ2IseURBQXlEO01BQ3pELFlBQVk7TUFDWixrQkFBa0I7SUFDcEI7O0lBRUE7TUFDRSxpQkFBaUI7TUFDakIsaUJBQWlCO0lBQ25COztJQUVBO01BQ0UsaUJBQWlCO01BQ2pCLFlBQVk7SUFDZCIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5jYXRlZ29yeS1jYXJkIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGhlaWdodDogMTgwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gICAgfVxuICAgIFxuICAgIC5jYXRlZ29yeS1jYXJkOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgICB9XG4gICAgXG4gICAgLmNhdGVnb3J5LW92ZXJsYXkge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgcmdiYSgwLDAsMCwwLjcpKTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgXG4gICAgaDMge1xuICAgICAgbWFyZ2luOiAwIDAgNXB4IDA7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB9XG4gICAgXG4gICAgLnByb2R1Y3QtY291bnQge1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICBvcGFjaXR5OiAwLjg7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}


/***/ }),

/***/ 3229:
/*!*******************************************************************************************!*\
  !*** ./src/app/features/home/components/featured-products/featured-products.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeaturedProductsComponent: () => (/* binding */ FeaturedProductsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _store_actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../store/actions/cart.actions */ 6217);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_services_wishlist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/services/wishlist.service */ 7935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/product-card/product-card.component */ 6071);









function FeaturedProductsComponent_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " View All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", ctx_r0.viewAllLink);
  }
}
function FeaturedProductsComponent_div_6_app_product_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-product-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("productAddedToCart", function FeaturedProductsComponent_div_6_app_product_card_1_Template_app_product_card_productAddedToCart_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.onAddToCart($event));
    })("productAddedToWishlist", function FeaturedProductsComponent_div_6_app_product_card_1_Template_app_product_card_productAddedToWishlist_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.onAddToWishlist($event));
    })("productViewed", function FeaturedProductsComponent_div_6_app_product_card_1_Template_app_product_card_productViewed_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.onViewDetails($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("product", product_r5)("showNewBadge", true)("showFeaturedBadge", true)("showRating", true)("showShortDescription", false)("showBuyNowButton", true)("showQuantityControl", false);
  }
}
const _c0 = function (a0, a1) {
  return {
    "product-grid": a0,
    "product-carousel": a1
  };
};
function FeaturedProductsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FeaturedProductsComponent_div_6_app_product_card_1_Template, 1, 7, "app-product-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](3, _c0, ctx_r1.layout === "grid", ctx_r1.layout === "carousel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.products)("ngForTrackBy", ctx_r1.trackByProductId);
  }
}
function FeaturedProductsComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "No featured products available at the moment. Check back soon!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class FeaturedProductsComponent {
  constructor(store, router, wishlistService) {
    this.store = store;
    this.router = router;
    this.wishlistService = wishlistService;
    this.title = 'Featured Products';
    this.showViewAll = true;
    this.viewAllLink = '/products';
    this.limit = 8;
    this.products = [];
    this.layout = 'grid';
    this.addToCart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.addToWishlist = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.viewDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.productClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.loading$ = this.store.select(state => state.ui.loading);
  }
  ngOnInit() {
    // Any initialization logic if needed
  }
  onAddToCart(payload) {
    console.log('Featured: Add to cart', payload);
    const cartItem = {
      productId: payload.product.id,
      quantity: payload.quantity,
      name: payload.product.name,
      price: payload.product.discountPrice || payload.product.price,
      unitPrice: payload.product.discountPrice || payload.product.price,
      image: payload.product.imageUrl,
      imageUrl: payload.product.imageUrl
    };
    this.store.dispatch(_store_actions_cart_actions__WEBPACK_IMPORTED_MODULE_0__.addToCart({
      item: cartItem
    }));
    // Optionally emit further up
    // this.productClicked.emit(payload.product); 
  }

  onAddToWishlist(product) {
    console.log('Featured: Add to wishlist', product);
    this.wishlistService.toggleWishlist(product.id).subscribe();
    this.addToWishlist.emit(product);
  }
  onViewDetails(product) {
    console.log('Featured: View details', product);
    this.router.navigate(['/products', product.id]);
    this.viewDetails.emit(product);
  }
  trackByProductId(index, product) {
    return product.id;
  }
  static {
    this.ɵfac = function FeaturedProductsComponent_Factory(t) {
      return new (t || FeaturedProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_wishlist_service__WEBPACK_IMPORTED_MODULE_1__.WishlistService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: FeaturedProductsComponent,
      selectors: [["app-featured-products"]],
      inputs: {
        title: "title",
        showViewAll: "showViewAll",
        viewAllLink: "viewAllLink",
        limit: "limit",
        products: "products",
        layout: "layout"
      },
      outputs: {
        addToCart: "addToCart",
        addToWishlist: "addToWishlist",
        viewDetails: "viewDetails",
        productClicked: "productClicked"
      },
      decls: 9,
      vars: 4,
      consts: [[1, "featured-products"], [1, "featured-header"], [1, "featured-title"], ["class", "view-all-link", 3, "routerLink", 4, "ngIf"], [1, "products-grid"], [3, "ngClass", 4, "ngIf", "ngIfElse"], ["noProducts", ""], [1, "view-all-link", 3, "routerLink"], [3, "ngClass"], [3, "product", "showNewBadge", "showFeaturedBadge", "showRating", "showShortDescription", "showBuyNowButton", "showQuantityControl", "productAddedToCart", "productAddedToWishlist", "productViewed", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "product", "showNewBadge", "showFeaturedBadge", "showRating", "showShortDescription", "showBuyNowButton", "showQuantityControl", "productAddedToCart", "productAddedToWishlist", "productViewed"], [1, "no-products-message"]],
      template: function FeaturedProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, FeaturedProductsComponent_a_4_Template, 4, 1, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, FeaturedProductsComponent_div_6_Template, 2, 6, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, FeaturedProductsComponent_ng_template_7_Template, 3, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showViewAll);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.products && ctx.products.length > 0)("ngIfElse", _r2);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_2__.ProductCardComponent],
      styles: ["@charset \"UTF-8\";\n[_ngcontent-%COMP%]:root {\n  --featured-spacing: 2.5rem;\n  --featured-spacing-mobile: 1.5rem;\n  --featured-card-gap: 1.5rem;\n  --featured-transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  --featured-title-gradient: linear-gradient(135deg, #1f2937 0%, #374151 100%);\n}\n\n.featured-products[_ngcontent-%COMP%] {\n  padding: var(--featured-spacing) 0;\n  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);\n  position: relative;\n  overflow: hidden;\n}\n.featured-products[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"grid\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\"><path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"rgb(148 163 184)\" stroke-width=\"0.5\" opacity=\"0.3\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23grid)\"/></svg>');\n  pointer-events: none;\n}\n\n.featured-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 3rem;\n  position: relative;\n  z-index: 1;\n}\n.featured-header[_ngcontent-%COMP%]   .featured-title[_ngcontent-%COMP%] {\n  font-size: clamp(2rem, 4vw, 2.5rem);\n  font-weight: 700;\n  margin: 0;\n  background: var(--featured-title-gradient);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  position: relative;\n}\n.featured-header[_ngcontent-%COMP%]   .featured-title[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -12px;\n  left: 0;\n  width: 80px;\n  height: 4px;\n  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);\n  border-radius: 2px;\n  animation: _ngcontent-%COMP%_titleAccent 3s ease-in-out infinite alternate;\n}\n.featured-header[_ngcontent-%COMP%]   .featured-title[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  bottom: -16px;\n  left: 4px;\n  width: 72px;\n  height: 4px;\n  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);\n  border-radius: 2px;\n  opacity: 0.3;\n  animation: _ngcontent-%COMP%_titleAccentShadow 3s ease-in-out infinite alternate;\n}\n.featured-header[_ngcontent-%COMP%]   .view-all-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #6366f1;\n  font-weight: 600;\n  text-decoration: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 50px;\n  background: rgba(99, 102, 241, 0.1);\n  border: 2px solid transparent;\n  transition: var(--featured-transition);\n  position: relative;\n  overflow: hidden;\n}\n.featured-header[_ngcontent-%COMP%]   .view-all-link[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%);\n  transition: left 0.6s ease;\n}\n.featured-header[_ngcontent-%COMP%]   .view-all-link[_ngcontent-%COMP%]:hover {\n  color: white;\n  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);\n  border-color: rgba(255, 255, 255, 0.2);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);\n}\n.featured-header[_ngcontent-%COMP%]   .view-all-link[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.featured-header[_ngcontent-%COMP%]   .view-all-link[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n.featured-header[_ngcontent-%COMP%]   .view-all-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  height: 1.25rem;\n  width: 1.25rem;\n  transition: var(--featured-transition);\n}\n\n.products-grid[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 400px;\n  z-index: 1;\n}\n\n.products-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: var(--featured-card-gap);\n}\n.products-container[_ngcontent-%COMP%]   .product-card-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  transform: translateY(0);\n  transition: var(--featured-transition);\n}\n.products-container[_ngcontent-%COMP%]   .product-card-wrapper[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n}\n.products-container[_ngcontent-%COMP%]   .product-card-wrapper[_ngcontent-%COMP%]:hover     app-product-card .product-card {\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);\n  border-color: rgba(99, 102, 241, 0.2);\n}\n.products-container[_ngcontent-%COMP%]   .product-card-wrapper[_ngcontent-%COMP%]     app-product-card .product-card {\n  height: 100%;\n  border-radius: 16px;\n  background: white;\n  border: 1px solid rgba(0, 0, 0, 0.06);\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  transition: var(--featured-transition);\n  overflow: hidden;\n}\n.products-container[_ngcontent-%COMP%]   .product-card-wrapper[_ngcontent-%COMP%]     app-product-card .product-card .product-image-container {\n  position: relative;\n  overflow: hidden;\n  border-radius: 16px 16px 0 0;\n}\n.products-container[_ngcontent-%COMP%]   .product-card-wrapper[_ngcontent-%COMP%]     app-product-card .product-card .product-image-container .product-image {\n  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.products-container[_ngcontent-%COMP%]   .product-card-wrapper[_ngcontent-%COMP%]     app-product-card .product-card .product-image-container:hover .product-image {\n  transform: scale(1.05);\n}\n.products-container[_ngcontent-%COMP%]   .product-card-wrapper[_ngcontent-%COMP%]     app-product-card .product-card .product-image-container::before {\n  content: \"\u2728 Featured\";\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);\n  color: white;\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  z-index: 2;\n  box-shadow: 0 2px 8px rgba(245, 158, 11, 0.4);\n}\n.products-container[_ngcontent-%COMP%]   .product-card-wrapper[_ngcontent-%COMP%]     app-product-card .product-card mat-card-content {\n  padding: 1.25rem;\n}\n.products-container[_ngcontent-%COMP%]   .product-card-wrapper[_ngcontent-%COMP%]     app-product-card .product-card mat-card-content .product-name {\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 0.5rem;\n  line-height: 1.4;\n}\n.products-container[_ngcontent-%COMP%]   .product-card-wrapper[_ngcontent-%COMP%]     app-product-card .product-card mat-card-content .product-price {\n  font-weight: 700;\n  color: #059669;\n  font-size: 1.125rem;\n}\n.products-container[_ngcontent-%COMP%]   .product-card-wrapper[_ngcontent-%COMP%]     app-product-card .product-card mat-card-actions {\n  padding: 0 1.25rem 1.25rem;\n  border-top: 1px solid rgba(0, 0, 0, 0.04);\n  background: rgba(249, 250, 251, 0.5);\n}\n.products-container[_ngcontent-%COMP%]   .product-card-wrapper[_ngcontent-%COMP%]     app-product-card .product-card mat-card-actions button {\n  border-radius: 8px;\n  font-weight: 500;\n  transition: var(--featured-transition);\n}\n.products-container[_ngcontent-%COMP%]   .product-card-wrapper[_ngcontent-%COMP%]     app-product-card .product-card mat-card-actions button:first-child {\n  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);\n  color: white;\n}\n.products-container[_ngcontent-%COMP%]   .product-card-wrapper[_ngcontent-%COMP%]     app-product-card .product-card mat-card-actions button:first-child:hover {\n  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);\n}\n\n.no-products-message[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n  background: rgba(255, 255, 255, 0.8);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border-radius: 20px;\n  text-align: center;\n  border: 2px dashed #e5e7eb;\n  position: relative;\n  overflow: hidden;\n}\n.no-products-message[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background: conic-gradient(from 0deg, transparent, rgba(99, 102, 241, 0.1), transparent);\n  animation: _ngcontent-%COMP%_rotate 20s linear infinite;\n  pointer-events: none;\n}\n.no-products-message[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  height: 4rem;\n  width: 4rem;\n  color: #9ca3af;\n  margin-bottom: 1.5rem;\n  animation: _ngcontent-%COMP%_float 3s ease-in-out infinite;\n  position: relative;\n  z-index: 1;\n}\n.no-products-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1.125rem;\n  line-height: 1.6;\n  margin: 0;\n  position: relative;\n  z-index: 1;\n  max-width: 300px;\n}\n.no-products-message[_ngcontent-%COMP%]   .explore-button[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);\n  color: white;\n  border: none;\n  padding: 0.75rem 2rem;\n  border-radius: 50px;\n  font-weight: 600;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: var(--featured-transition);\n  position: relative;\n  z-index: 1;\n}\n.no-products-message[_ngcontent-%COMP%]   .explore-button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);\n}\n\n.loading-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.9);\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  border-radius: 16px;\n  z-index: 10;\n}\n.loading-container[_ngcontent-%COMP%]     app-loading-spinner .spinner-container .loading-text {\n  color: #6366f1;\n  font-weight: 600;\n  margin-top: 1rem;\n}\n\n@keyframes _ngcontent-%COMP%_titleAccent {\n  0% {\n    width: 80px;\n  }\n  100% {\n    width: 120px;\n  }\n}\n@keyframes _ngcontent-%COMP%_titleAccentShadow {\n  0% {\n    width: 72px;\n    opacity: 0.3;\n  }\n  100% {\n    width: 112px;\n    opacity: 0.2;\n  }\n}\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-10px);\n  }\n}\n@keyframes _ngcontent-%COMP%_rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 992px) {\n  .products-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .featured-header[_ngcontent-%COMP%]   .featured-title[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .products-container[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 16px;\n  }\n}\n@media (max-width: 576px) {\n  .products-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvaG9tZS9jb21wb25lbnRzL2ZlYXR1cmVkLXByb2R1Y3RzL2ZlYXR1cmVkLXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQjtFQUNFLDBCQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtFQUNBLDREQUFBO0VBQ0EsNEVBQUE7QUFDRjs7QUFFQTtFQUNFLGtDQUFBO0VBQ0EsNkRBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFFRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxpV0FBQTtFQUNBLG9CQUFBO0FBQUo7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBREY7QUFHRTtFQUNFLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsMENBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtBQURKO0FBR0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNkRBQUE7RUFDQSxrQkFBQTtFQUNBLHdEQUFBO0FBRE47QUFJSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSw2REFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDhEQUFBO0FBRk47QUFNRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNB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LHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUF2Q0Y7QUEyQ007RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQXpDUjs7QUFnREE7RUFDRTtJQUFLLFdBQUE7RUE1Q0w7RUE2Q0E7SUFBTyxZQUFBO0VBMUNQO0FBQ0Y7QUE0Q0E7RUFDRTtJQUFLLFdBQUE7SUFBYSxZQUFBO0VBeENsQjtFQXlDQTtJQUFPLFlBQUE7SUFBYyxZQUFBO0VBckNyQjtBQUNGO0FBdUNBO0VBQ0U7SUFBVyx3QkFBQTtFQXBDWDtFQXFDQTtJQUFNLDRCQUFBO0VBbENOO0FBQ0Y7QUFvQ0E7RUFDRTtJQUFLLHVCQUFBO0VBakNMO0VBa0NBO0lBQU8seUJBQUE7RUEvQlA7QUFDRjtBQWlDQTtFQUNFO0lBQ0UscUNBQUE7RUEvQkY7QUFDRjtBQWtDQTtFQUVJO0lBQ0UsZUFBQTtFQWpDSjtFQXFDQTtJQUNFLHFDQUFBO0lBQ0EsU0FBQTtFQW5DRjtBQUNGO0FBc0NBO0VBQ0U7SUFDRSwwQkFBQTtFQXBDRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9kZXJuIEZlYXR1cmVkIFByb2R1Y3RzIFNlY3Rpb24gd2l0aCBEZXNpZ24gU3lzdGVtIEludGVncmF0aW9uXG46cm9vdCB7XG4gIC0tZmVhdHVyZWQtc3BhY2luZzogMi41cmVtO1xuICAtLWZlYXR1cmVkLXNwYWNpbmctbW9iaWxlOiAxLjVyZW07XG4gIC0tZmVhdHVyZWQtY2FyZC1nYXA6IDEuNXJlbTtcbiAgLS1mZWF0dXJlZC10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAtLWZlYXR1cmVkLXRpdGxlLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMWYyOTM3IDAlLCAjMzc0MTUxIDEwMCUpO1xufVxuXG4uZmVhdHVyZWQtcHJvZHVjdHMge1xuICBwYWRkaW5nOiB2YXIoLS1mZWF0dXJlZC1zcGFjaW5nKSAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmYWZjIDAlLCAjZjFmNWY5IDEwMCUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIFxuICAvLyBTdWJ0bGUgYmFja2dyb3VuZCBwYXR0ZXJuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIj48ZGVmcz48cGF0dGVybiBpZD1cImdyaWRcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiBwYXR0ZXJuVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPjxwYXRoIGQ9XCJNIDIwIDAgTCAwIDAgMCAyMFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwicmdiKDE0OCAxNjMgMTg0KVwiIHN0cm9rZS13aWR0aD1cIjAuNVwiIG9wYWNpdHk9XCIwLjNcIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGZpbGw9XCJ1cmwoJTIzZ3JpZClcIi8+PC9zdmc+Jyk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbn1cblxuLmZlYXR1cmVkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBcbiAgLmZlYXR1cmVkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDR2dywgMi41cmVtKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1mZWF0dXJlZC10aXRsZS1ncmFkaWVudCk7XG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IC0xMnB4O1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjM2NmYxIDAlLCAjOGI1Y2Y2IDEwMCUpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgYW5pbWF0aW9uOiB0aXRsZUFjY2VudCAzcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gICAgfVxuICAgIFxuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogLTE2cHg7XG4gICAgICBsZWZ0OiA0cHg7XG4gICAgICB3aWR0aDogNzJweDtcbiAgICAgIGhlaWdodDogNHB4O1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzYzNjZmMSAwJSwgIzhiNWNmNiAxMDAlKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgIGFuaW1hdGlvbjogdGl0bGVBY2NlbnRTaGFkb3cgM3MgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgIH1cbiAgfVxuICBcbiAgLnZpZXctYWxsLWxpbmsge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICBjb2xvcjogIzYzNjZmMTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoOTksIDEwMiwgMjQxLCAwLjEpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IHZhcigtLWZlYXR1cmVkLXRyYW5zaXRpb24pO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIFxuICAgIC8vIEhvdmVyIHNoaW1tZXIgZWZmZWN0XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogLTEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgXG4gICAgICAgIHRyYW5zcGFyZW50IDAlLCBcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIDUwJSwgXG4gICAgICAgIHRyYW5zcGFyZW50IDEwMCUpO1xuICAgICAgdHJhbnNpdGlvbjogbGVmdCAwLjZzIGVhc2U7XG4gICAgfVxuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzYzNjZmMSAwJSwgIzhiNWNmNiAxMDAlKTtcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDk5LCAxMDIsIDI0MSwgMC40KTtcbiAgICAgIFxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgbGVmdDogMTAwJTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgbWF0LWljb24ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgbWF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgaGVpZ2h0OiAxLjI1cmVtO1xuICAgICAgd2lkdGg6IDEuMjVyZW07XG4gICAgICB0cmFuc2l0aW9uOiB2YXIoLS1mZWF0dXJlZC10cmFuc2l0aW9uKTtcbiAgICB9XG4gIH1cbn1cblxuLnByb2R1Y3RzLWdyaWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICB6LWluZGV4OiAxO1xufVxuXG4ucHJvZHVjdHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICBnYXA6IHZhcigtLWZlYXR1cmVkLWNhcmQtZ2FwKTtcbiAgXG4gIC8vIEVuaGFuY2VkIHByb2R1Y3QgY2FyZCBzdHlsaW5nXG4gIC5wcm9kdWN0LWNhcmQtd3JhcHBlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS1mZWF0dXJlZC10cmFuc2l0aW9uKTtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KTtcbiAgICAgIFxuICAgICAgOjpuZy1kZWVwIGFwcC1wcm9kdWN0LWNhcmQgLnByb2R1Y3QtY2FyZCB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMjBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSg5OSwgMTAyLCAyNDEsIDAuMik7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIDo6bmctZGVlcCBhcHAtcHJvZHVjdC1jYXJkIC5wcm9kdWN0LWNhcmQge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICAgIHRyYW5zaXRpb246IHZhcigtLWZlYXR1cmVkLXRyYW5zaXRpb24pO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIFxuICAgICAgLnByb2R1Y3QtaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4IDE2cHggMCAwO1xuICAgICAgICBcbiAgICAgICAgLnByb2R1Y3QtaW1hZ2Uge1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICY6aG92ZXIgLnByb2R1Y3QtaW1hZ2Uge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIFByb2R1Y3QgYmFkZ2UgZm9yIGZlYXR1cmVkIGl0ZW1zXG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogJ8OiwpzCqCBGZWF0dXJlZCc7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMTJweDtcbiAgICAgICAgICBsZWZ0OiAxMnB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmNTllMGIgMCUsICNkOTc3MDYgMTAwJSk7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMjQ1LCAxNTgsIDExLCAwLjQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIG1hdC1jYXJkLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiAxLjI1cmVtO1xuICAgICAgICBcbiAgICAgICAgLnByb2R1Y3QtbmFtZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBjb2xvcjogIzFmMjkzNztcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLnByb2R1Y3QtcHJpY2Uge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgY29sb3I6ICMwNTk2Njk7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBtYXQtY2FyZC1hY3Rpb25zIHtcbiAgICAgICAgcGFkZGluZzogMCAxLjI1cmVtIDEuMjVyZW07XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0OSwgMjUwLCAyNTEsIDAuNSk7XG4gICAgICAgIFxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IHZhcigtLWZlYXR1cmVkLXRyYW5zaXRpb24pO1xuICAgICAgICAgIFxuICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzYzNjZmMSAwJSwgIzhiNWNmNiAxMDAlKTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM0ZjQ2ZTUgMCUsICM3YzNhZWQgMTAwJSk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDk5LCAxMDIsIDI0MSwgMC40KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gRW5oYW5jZWQgbm8gcHJvZHVjdHMgc3RhdGVcbi5uby1wcm9kdWN0cy1tZXNzYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDRyZW0gMnJlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAycHggZGFzaGVkICNlNWU3ZWI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgXG4gIC8vIEFuaW1hdGVkIGJhY2tncm91bmRcbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtNTAlO1xuICAgIGxlZnQ6IC01MCU7XG4gICAgd2lkdGg6IDIwMCU7XG4gICAgaGVpZ2h0OiAyMDAlO1xuICAgIGJhY2tncm91bmQ6IGNvbmljLWdyYWRpZW50KGZyb20gMGRlZywgdHJhbnNwYXJlbnQsIHJnYmEoOTksIDEwMiwgMjQxLCAwLjEpLCB0cmFuc3BhcmVudCk7XG4gICAgYW5pbWF0aW9uOiByb3RhdGUgMjBzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICBcbiAgbWF0LWljb24ge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBoZWlnaHQ6IDRyZW07XG4gICAgd2lkdGg6IDRyZW07XG4gICAgY29sb3I6ICM5Y2EzYWY7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIGFuaW1hdGlvbjogZmxvYXQgM3MgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgXG4gIHAge1xuICAgIGNvbG9yOiAjNmI3MjgwO1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICBtYXJnaW46IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgfVxuICBcbiAgLmV4cGxvcmUtYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2MzY2ZjEgMCUsICM4YjVjZjYgMTAwJSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC41cmVtO1xuICAgIHRyYW5zaXRpb246IHZhcigtLWZlYXR1cmVkLXRyYW5zaXRpb24pO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzRmNDZlNSAwJSwgIzdjM2FlZCAxMDAlKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSg5OSwgMTAyLCAyNDEsIDAuNCk7XG4gICAgfVxuICB9XG59XG5cbi8vIExvYWRpbmcgc3RhdGUgZW5oYW5jZW1lbnRcbi5sb2FkaW5nLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgei1pbmRleDogMTA7XG4gIFxuICA6Om5nLWRlZXAgYXBwLWxvYWRpbmctc3Bpbm5lciB7XG4gICAgLnNwaW5uZXItY29udGFpbmVyIHtcbiAgICAgIC5sb2FkaW5nLXRleHQge1xuICAgICAgICBjb2xvcjogIzYzNjZmMTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gQW5pbWF0aW9uIGtleWZyYW1lc1xuQGtleWZyYW1lcyB0aXRsZUFjY2VudCB7XG4gIDAlIHsgd2lkdGg6IDgwcHg7IH1cbiAgMTAwJSB7IHdpZHRoOiAxMjBweDsgfVxufVxuXG5Aa2V5ZnJhbWVzIHRpdGxlQWNjZW50U2hhZG93IHtcbiAgMCUgeyB3aWR0aDogNzJweDsgb3BhY2l0eTogMC4zOyB9XG4gIDEwMCUgeyB3aWR0aDogMTEycHg7IG9wYWNpdHk6IDAuMjsgfVxufVxuXG5Aa2V5ZnJhbWVzIGZsb2F0IHtcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbiAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTsgfVxufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5wcm9kdWN0cy1jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5mZWF0dXJlZC1oZWFkZXIge1xuICAgIC5mZWF0dXJlZC10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxuICB9XG4gIFxuICAucHJvZHVjdHMtY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdhcDogMTZweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnByb2R1Y3RzLWNvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}


/***/ }),

/***/ 6437:
/*!*******************************************************************************!*\
  !*** ./src/app/features/home/components/hero-banner/hero-banner.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeroBannerComponent: () => (/* binding */ HeroBannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ 4102);









function HeroBannerComponent_div_59_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function HeroBannerComponent_div_59_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", product_r5.originalPrice, "");
  }
}
function HeroBannerComponent_div_59_i_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
  }
  if (rf & 2) {
    const j_r12 = ctx.index;
    const product_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filled", j_r12 < product_r5.rating);
  }
}
const _c0 = function () {
  return [1, 2, 3, 4, 5];
};
function HeroBannerComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66)(1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeroBannerComponent_div_59_div_3_Template, 2, 0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 70)(5, "h4", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 72)(8, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeroBannerComponent_div_59_span_10_Template, 2, 1, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 75)(12, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HeroBannerComponent_div_59_i_13_Template, 1, 2, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const product_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("animation-delay", i_r6 * 200, "ms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r5.image || "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", product_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r5.isNew);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", product_r5.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r5.originalPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", product_r5.reviewCount || 0, ")");
  }
}
function HeroBannerComponent_div_77_div_4_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 88);
  }
}
function HeroBannerComponent_div_77_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroBannerComponent_div_77_div_4_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const suggestion_r15 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.selectSuggestion(suggestion_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeroBannerComponent_div_77_div_4_i_4_Template, 1, 0, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const suggestion_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](suggestion_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", suggestion_r15.trending);
  }
}
function HeroBannerComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 81)(1, "div", 82)(2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Popular Searches");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeroBannerComponent_div_77_div_4_Template, 5, 2, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.searchSuggestions);
  }
}
function HeroBannerComponent_button_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroBannerComponent_button_82_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);
      const category_r19 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r20.searchByCategory(category_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const category_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](category_r19.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r19.name);
  }
}
function HeroBannerComponent_button_125_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroBannerComponent_button_125_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);
      const category_r22 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r23.selectCategory(category_r22.slug));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const category_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](category_r22.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r22.name);
  }
}
class HeroBannerComponent {
  constructor() {
    this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.categoryFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.addToCart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('');
    // Search functionality
    this.showSearchSuggestions = false;
    this.searchSuggestions = [{
      text: 'Wireless Headphones',
      trending: true
    }, {
      text: 'Gaming Laptop',
      trending: false
    }, {
      text: 'Smart Phone',
      trending: true
    }, {
      text: 'Fitness Tracker',
      trending: false
    }, {
      text: 'Coffee Maker',
      trending: false
    }];
    // Popular categories for quick access
    this.popularCategories = [{
      name: 'Electronics',
      icon: 'fas fa-laptop',
      slug: 'electronics'
    }, {
      name: 'Fashion',
      icon: 'fas fa-tshirt',
      slug: 'fashion'
    }, {
      name: 'Home & Garden',
      icon: 'fas fa-home',
      slug: 'home-garden'
    }, {
      name: 'Sports',
      icon: 'fas fa-dumbbell',
      slug: 'sports'
    }, {
      name: 'Books',
      icon: 'fas fa-book',
      slug: 'books'
    }];
    // Featured products for showcase
    this.featuredProducts = [{
      id: 1,
      name: 'Premium Wireless Headphones',
      category: 'Electronics',
      price: 199.99,
      originalPrice: 249.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
      rating: 4.8,
      reviews: 234,
      reviewCount: 234,
      isNew: true,
      discount: 20
    }, {
      id: 2,
      name: 'Smart Fitness Watch',
      category: 'Wearables',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
      rating: 4.6,
      reviews: 187,
      reviewCount: 187,
      isNew: false
    }, {
      id: 3,
      name: 'Ergonomic Office Chair',
      category: 'Furniture',
      price: 459.99,
      originalPrice: 599.99,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop',
      rating: 4.9,
      reviews: 156,
      reviewCount: 156,
      discount: 23
    }];
    // Category filters
    this.categories = [{
      id: 'all',
      name: 'All Categories',
      icon: 'fas fa-th-large',
      slug: 'all',
      active: true
    }, {
      id: 'electronics',
      name: 'Electronics',
      icon: 'fas fa-laptop',
      slug: 'electronics'
    }, {
      id: 'fashion',
      name: 'Fashion',
      icon: 'fas fa-tshirt',
      slug: 'fashion'
    }, {
      id: 'home',
      name: 'Home & Garden',
      icon: 'fas fa-home',
      slug: 'home-garden'
    }, {
      id: 'sports',
      name: 'Sports',
      icon: 'fas fa-dumbbell',
      slug: 'sports'
    }, {
      id: 'books',
      name: 'Books',
      icon: 'fas fa-book',
      slug: 'books'
    }];
    // Popular search tags
    this.popularTags = ['Wireless Headphones', 'Smartphones', 'Laptops', 'Gaming', 'Home Decor', 'Fitness Equipment'];
    // Trust indicators
    this.trustIndicators = [{
      icon: 'fas fa-shipping-fast',
      title: 'Free Shipping',
      description: 'Free delivery on orders over $50. Fast and reliable shipping worldwide.'
    }, {
      icon: 'fas fa-shield-alt',
      title: 'Secure Payment',
      description: '100% secure payment with SSL encryption. Your data is always protected.'
    }, {
      icon: 'fas fa-undo',
      title: 'Easy Returns',
      description: '30-day hassle-free returns. No questions asked return policy.'
    }, {
      icon: 'fas fa-headset',
      title: '24/7 Support',
      description: 'Round-the-clock customer support via chat, email, and phone.'
    }];
  }
  onSearch() {
    const searchTerm = this.searchControl.value || '';
    if (searchTerm.trim()) {
      this.search.emit(searchTerm);
      this.searchControl.setValue('');
    }
  }
  onCategoryFilter(categoryId) {
    // Update active category
    this.categories.forEach(cat => cat.active = cat.id === categoryId);
    this.categoryFilter.emit(categoryId);
  }
  onAddToCart(product) {
    this.addToCart.emit(product);
  }
  onPopularTagClick(tag) {
    this.searchControl.setValue(tag);
    this.onSearch();
  }
  // Helper methods for templates
  getStarArray(rating) {
    return Array(5).fill(0).map((_, index) => index < Math.floor(rating) ? 1 : 0);
  }
  formatPrice(price) {
    return `$${price.toFixed(2)}`;
  }
  calculateDiscount(originalPrice, currentPrice) {
    return Math.round((originalPrice - currentPrice) / originalPrice * 100);
  }
  // Search suggestion methods
  hideSearchSuggestions() {
    setTimeout(() => {
      this.showSearchSuggestions = false;
    }, 150); // Delay to allow click events
  }

  selectSuggestion(suggestion) {
    this.searchControl.setValue(suggestion.text);
    this.showSearchSuggestions = false;
    this.onSearch();
  }
  searchByCategory(category) {
    this.categoryFilter.emit(category.slug);
  }
  selectCategory(categorySlug) {
    if (categorySlug) {
      this.onCategoryFilter(categorySlug);
    }
  }
  scrollToCategories() {
    // Scroll to categories section or navigate to categories page
    const categoriesSection = document.getElementById('categories-section');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
  static {
    this.ɵfac = function HeroBannerComponent_Factory(t) {
      return new (t || HeroBannerComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeroBannerComponent,
      selectors: [["app-hero-banner"]],
      outputs: {
        search: "search",
        categoryFilter: "categoryFilter",
        addToCart: "addToCart"
      },
      decls: 126,
      vars: 6,
      consts: [["data-aos", "fade-in", 1, "hero-banner"], [1, "hero-main"], [1, "hero-background"], [1, "gradient-overlay"], [1, "geometric-shapes"], [1, "shape", "shape-1"], [1, "shape", "shape-2"], [1, "shape", "shape-3"], ["src", "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", "alt", "Shopping Experience", "loading", "eager", 1, "hero-image"], [1, "hero-content"], [1, "container"], ["data-aos", "fade-up", "data-aos-delay", "200", 1, "hero-text"], [1, "hero-badge"], [1, "fas", "fa-star"], [1, "hero-title"], [1, "gradient-text"], [1, "hero-description"], ["data-aos", "fade-up", "data-aos-delay", "400", 1, "hero-stats"], [1, "stat-item"], [1, "stat-icon"], [1, "fas", "fa-users"], [1, "stat-info"], [1, "stat-number"], [1, "stat-label"], [1, "fas", "fa-box"], [1, "fas", "fa-shipping-fast"], ["data-aos", "fade-up", "data-aos-delay", "600", 1, "hero-actions"], ["mat-raised-button", "", "routerLink", "/products", 1, "btn-primary", "hero-btn"], [1, "fas", "fa-shopping-bag"], ["mat-stroked-button", "", 1, "btn-secondary", "hero-btn", 3, "click"], [1, "fas", "fa-play"], ["data-aos", "fade-left", "data-aos-delay", "300", 1, "hero-visual"], [1, "product-showcase"], ["class", "showcase-card", 3, "animation-delay", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-delay", "800", 1, "hero-search"], [1, "search-container"], [1, "search-wrapper"], [1, "search-input-group"], [1, "search-icon"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Search for products, brands, categories...", 1, "search-input", 3, "formControl", "keyup.enter", "focus", "blur"], [1, "search-filters"], ["mat-button", "", 1, "filter-btn", 3, "matMenuTriggerFor"], [1, "fas", "fa-chevron-down"], ["mat-raised-button", "", 1, "search-btn", 3, "click"], ["class", "search-suggestions", 4, "ngIf"], [1, "quick-categories"], [1, "quick-label"], [1, "category-tags"], ["mat-button", "", "class", "category-tag", 3, "click", 4, "ngFor", "ngForOf"], ["data-aos", "fade-up", "data-aos-delay", "1000", 1, "trust-indicators"], [1, "trust-items"], [1, "trust-item"], [1, "trust-icon"], [1, "fas", "fa-shield-alt"], [1, "trust-text"], [1, "trust-title"], [1, "trust-desc"], [1, "fas", "fa-truck"], [1, "fas", "fa-undo"], [1, "fas", "fa-headset"], [1, "category-filter-menu"], ["categoryMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], [1, "fas", "fa-th-large"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], [1, "showcase-card"], [1, "product-image"], [3, "src", "alt"], ["class", "product-badge", 4, "ngIf"], [1, "product-info"], [1, "product-name"], [1, "product-price"], [1, "current-price"], ["class", "original-price", 4, "ngIf"], [1, "product-rating"], [1, "stars"], ["class", "fas fa-star", 3, "filled", 4, "ngFor", "ngForOf"], [1, "rating-count"], [1, "product-badge"], [1, "original-price"], [1, "search-suggestions"], [1, "suggestions-header"], ["class", "suggestion-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "suggestion-item", 3, "click"], [1, "fas", "fa-search", "suggestion-icon"], [1, "suggestion-text"], ["class", "fas fa-trending-up trending-icon", 4, "ngIf"], [1, "fas", "fa-trending-up", "trending-icon"], ["mat-button", "", 1, "category-tag", 3, "click"]],
      template: function HeroBannerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5)(6, "div", 6)(7, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Premium Quality");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Discover Amazing ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " for Your Lifestyle ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Shop from thousands of premium products with free shipping, easy returns, and 24/7 customer support. Your satisfaction is our priority. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17)(24, "div", 18)(25, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21)(28, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "50K+");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Happy Customers");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18)(33, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21)(36, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "10K+");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 18)(41, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 21)(44, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "24h");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Fast Delivery");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 26)(49, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Shop Now");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroBannerComponent_Template_button_click_53_listener() {
            return ctx.scrollToCategories();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Explore Categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 31)(58, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, HeroBannerComponent_div_59_Template, 16, 11, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 34)(61, "div", 10)(62, "div", 35)(63, "div", 36)(64, "div", 37)(65, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "input", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function HeroBannerComponent_Template_input_keyup_enter_67_listener() {
            return ctx.onSearch();
          })("focus", function HeroBannerComponent_Template_input_focus_67_listener() {
            return ctx.showSearchSuggestions = true;
          })("blur", function HeroBannerComponent_Template_input_blur_67_listener() {
            return ctx.hideSearchSuggestions();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 41)(69, "button", 42)(70, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "All Categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroBannerComponent_Template_button_click_73_listener() {
            return ctx.onSearch();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Search");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, HeroBannerComponent_div_77_Template, 5, 1, "div", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 46)(79, "span", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Popular:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, HeroBannerComponent_button_82_Template, 4, 3, "button", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 50)(84, "div", 10)(85, "div", 51)(86, "div", 52)(87, "div", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 55)(90, "span", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Secure Shopping");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "256-bit SSL encryption");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 52)(95, "div", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 55)(98, "span", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Free Shipping");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "On orders over $50");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 52)(103, "div", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 55)(106, "span", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Easy Returns");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "30-day return policy");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 52)(111, "div", 53);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "i", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 55)(114, "span", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "24/7 Support");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Expert customer service");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "mat-menu", 61, 62)(120, "button", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroBannerComponent_Template_button_click_120_listener() {
            return ctx.selectCategory("all");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "i", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "All Categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "mat-divider");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](125, HeroBannerComponent_button_125_Template, 4, 3, "button", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](119);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](59);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.featuredProducts);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.searchControl);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSearchSuggestions && ctx.searchSuggestions.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.popularCategories);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuTrigger, _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__.MatDivider],
      styles: ["[_ngcontent-%COMP%]:root {\n  --hero-primary: #6366f1;\n  --hero-secondary: #8b5cf6;\n  --hero-accent: #10b981;\n  --hero-text-dark: #1f2937;\n  --hero-text-light: #6b7280;\n  --hero-background: #f8fafc;\n  --hero-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  --hero-shadow: 0 20px 80px rgba(0, 0, 0, 0.1);\n  --hero-transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.hero-section[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  background: var(--hero-gradient);\n  overflow: hidden;\n}\n.hero-section[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background: radial-gradient(circle at 30% 40%, rgba(99, 102, 241, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%);\n  animation: _ngcontent-%COMP%_float 20s ease-in-out infinite;\n  z-index: 1;\n}\n\n.floating-shapes[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  pointer-events: none;\n}\n.floating-shapes[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));\n  -webkit-backdrop-filter: blur(20px);\n          backdrop-filter: blur(20px);\n  animation: _ngcontent-%COMP%_float 15s ease-in-out infinite;\n}\n.floating-shapes[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%]:nth-child(1) {\n  top: 10%;\n  left: 10%;\n  width: 100px;\n  height: 100px;\n  animation-delay: 0s;\n}\n.floating-shapes[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%]:nth-child(2) {\n  top: 60%;\n  right: 15%;\n  width: 150px;\n  height: 150px;\n  animation-delay: 2s;\n}\n.floating-shapes[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%]:nth-child(3) {\n  bottom: 20%;\n  left: 20%;\n  width: 80px;\n  height: 80px;\n  animation-delay: 4s;\n}\n.floating-shapes[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%]:nth-child(4) {\n  top: 30%;\n  right: 30%;\n  width: 120px;\n  height: 120px;\n  animation-delay: 6s;\n}\n\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n}\n.hero-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 0 2rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: center;\n}\n\n.hero-text[_ngcontent-%COMP%] {\n  color: white;\n}\n.hero-text[_ngcontent-%COMP%]   .hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: rgba(255, 255, 255, 0.1);\n  -webkit-backdrop-filter: blur(20px);\n          backdrop-filter: blur(20px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 50px;\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  margin-bottom: 1.5rem;\n  animation: _ngcontent-%COMP%_glow 3s ease-in-out infinite alternate;\n}\n.hero-text[_ngcontent-%COMP%]   .hero-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #10b981;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n.hero-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(3rem, 6vw, 5rem);\n  font-weight: 900;\n  line-height: 1.1;\n  margin-bottom: 1.5rem;\n  background: linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);\n}\n.hero-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  line-height: 1.6;\n  margin-bottom: 2rem;\n  opacity: 0.9;\n  max-width: 600px;\n}\n.hero-text[_ngcontent-%COMP%]   .hero-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.hero-text[_ngcontent-%COMP%]   .hero-buttons[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #10b981 0%, #059669 100%);\n  color: white;\n  padding: 1rem 2rem;\n  border-radius: 50px;\n  font-weight: 600;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: var(--hero-transition);\n  box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);\n  border: none;\n}\n.hero-text[_ngcontent-%COMP%]   .hero-buttons[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 15px 40px rgba(16, 185, 129, 0.4);\n  background: linear-gradient(135deg, #059669 0%, #047857 100%);\n}\n.hero-text[_ngcontent-%COMP%]   .hero-buttons[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transition: var(--hero-transition);\n}\n.hero-text[_ngcontent-%COMP%]   .hero-buttons[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: translateX(3px);\n}\n.hero-text[_ngcontent-%COMP%]   .hero-buttons[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  color: white;\n  padding: 1rem 2rem;\n  border-radius: 50px;\n  font-weight: 600;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: var(--hero-transition);\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(20px);\n          backdrop-filter: blur(20px);\n}\n.hero-text[_ngcontent-%COMP%]   .hero-buttons[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n  border-color: rgba(255, 255, 255, 0.4);\n  transform: translateY(-2px);\n}\n\n.hero-image[_ngcontent-%COMP%] {\n  position: relative;\n}\n.hero-image[_ngcontent-%COMP%]   .main-hero-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 600px;\n  object-fit: cover;\n  border-radius: 2rem;\n  box-shadow: var(--hero-shadow);\n  animation: _ngcontent-%COMP%_fadeInUp 1s ease-out;\n}\n.hero-image[_ngcontent-%COMP%]   .floating-stats[_ngcontent-%COMP%] {\n  position: absolute;\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(20px);\n          backdrop-filter: blur(20px);\n  border-radius: 1rem;\n  padding: 1.5rem;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n.hero-image[_ngcontent-%COMP%]   .floating-stats.stat-1[_ngcontent-%COMP%] {\n  top: 10%;\n  left: -10%;\n  animation: _ngcontent-%COMP%_float 6s ease-in-out infinite;\n}\n.hero-image[_ngcontent-%COMP%]   .floating-stats.stat-2[_ngcontent-%COMP%] {\n  bottom: 15%;\n  right: -10%;\n  animation: _ngcontent-%COMP%_float 6s ease-in-out infinite 2s;\n}\n.hero-image[_ngcontent-%COMP%]   .floating-stats[_ngcontent-%COMP%]   .stat-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background: linear-gradient(135deg, var(--hero-primary), var(--hero-secondary));\n  border-radius: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n}\n.hero-image[_ngcontent-%COMP%]   .floating-stats[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 900;\n  color: var(--hero-text-dark);\n  margin-bottom: 0.25rem;\n}\n.hero-image[_ngcontent-%COMP%]   .floating-stats[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: var(--hero-text-light);\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n\n.product-showcase[_ngcontent-%COMP%] {\n  background: white;\n  padding: 5rem 0;\n}\n.product-showcase[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 0 2rem;\n}\n.product-showcase[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 4rem;\n}\n.product-showcase[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: linear-gradient(135deg, var(--hero-primary), var(--hero-secondary));\n  color: white;\n  padding: 0.5rem 1rem;\n  border-radius: 50px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n}\n.product-showcase[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(2.5rem, 4vw, 3.5rem);\n  font-weight: 900;\n  color: var(--hero-text-dark);\n  margin-bottom: 1rem;\n  line-height: 1.2;\n}\n.product-showcase[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: var(--hero-text-light);\n  max-width: 600px;\n  margin: 0 auto;\n  line-height: 1.6;\n}\n.product-showcase[_ngcontent-%COMP%]   .product-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2rem;\n}\n.product-showcase[_ngcontent-%COMP%]   .product-grid[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 1.5rem;\n  overflow: hidden;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);\n  transition: var(--hero-transition);\n  border: 1px solid #f1f5f9;\n}\n.product-showcase[_ngcontent-%COMP%]   .product-grid[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px);\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);\n}\n.product-showcase[_ngcontent-%COMP%]   .product-grid[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 250px;\n  object-fit: cover;\n  transition: var(--hero-transition);\n}\n.product-showcase[_ngcontent-%COMP%]   .product-grid[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]:hover   .product-image[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.product-showcase[_ngcontent-%COMP%]   .product-grid[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.product-showcase[_ngcontent-%COMP%]   .product-grid[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .product-category[_ngcontent-%COMP%] {\n  color: var(--hero-primary);\n  font-size: 0.875rem;\n  font-weight: 600;\n  margin-bottom: 0.5rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.product-showcase[_ngcontent-%COMP%]   .product-grid[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--hero-text-dark);\n  margin-bottom: 0.5rem;\n}\n.product-showcase[_ngcontent-%COMP%]   .product-grid[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 900;\n  color: var(--hero-accent);\n  margin-bottom: 1rem;\n}\n.product-showcase[_ngcontent-%COMP%]   .product-grid[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .product-rating[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.product-showcase[_ngcontent-%COMP%]   .product-grid[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .product-rating[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%] {\n  color: #fbbf24;\n  font-size: 0.875rem;\n}\n.product-showcase[_ngcontent-%COMP%]   .product-grid[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .product-rating[_ngcontent-%COMP%]   .rating-text[_ngcontent-%COMP%] {\n  color: var(--hero-text-light);\n  font-size: 0.875rem;\n}\n.product-showcase[_ngcontent-%COMP%]   .product-grid[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%] {\n  width: 100%;\n  background: linear-gradient(135deg, var(--hero-primary), var(--hero-secondary));\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.75rem;\n  font-weight: 600;\n  transition: var(--hero-transition);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.product-showcase[_ngcontent-%COMP%]   .product-grid[_ngcontent-%COMP%]   .product-card[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #4f46e5, #7c3aed);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);\n}\n\n.search-section[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);\n  padding: 4rem 0;\n}\n.search-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 2rem;\n}\n.search-section[_ngcontent-%COMP%]   .search-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.search-section[_ngcontent-%COMP%]   .search-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 900;\n  color: var(--hero-text-dark);\n  margin-bottom: 1rem;\n}\n.search-section[_ngcontent-%COMP%]   .search-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: var(--hero-text-light);\n}\n.search-section[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 1rem;\n  box-shadow: var(--hero-shadow);\n  padding: 1rem;\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  margin-bottom: 2rem;\n}\n.search-section[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 1.125rem;\n  color: var(--hero-text-dark);\n}\n.search-section[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--hero-text-light);\n}\n.search-section[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  color: var(--hero-text-light);\n  font-size: 1.5rem;\n}\n.search-section[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--hero-primary), var(--hero-secondary));\n  color: white;\n  border: none;\n  padding: 0.75rem 1.5rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  transition: var(--hero-transition);\n}\n.search-section[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #4f46e5, #7c3aed);\n  transform: translateY(-2px);\n}\n.search-section[_ngcontent-%COMP%]   .category-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-bottom: 2rem;\n}\n.search-section[_ngcontent-%COMP%]   .category-filters[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%] {\n  background: white;\n  border: 2px solid #e5e7eb;\n  color: var(--hero-text-dark);\n  padding: 0.75rem 1.5rem;\n  border-radius: 50px;\n  font-weight: 600;\n  transition: var(--hero-transition);\n  text-decoration: none;\n}\n.search-section[_ngcontent-%COMP%]   .category-filters[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%]:hover, .search-section[_ngcontent-%COMP%]   .category-filters[_ngcontent-%COMP%]   .filter-btn.active[_ngcontent-%COMP%] {\n  background: var(--hero-primary);\n  color: white;\n  border-color: var(--hero-primary);\n  transform: translateY(-2px);\n}\n.search-section[_ngcontent-%COMP%]   .popular-searches[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.search-section[_ngcontent-%COMP%]   .popular-searches[_ngcontent-%COMP%]   .popular-label[_ngcontent-%COMP%] {\n  color: var(--hero-text-light);\n  font-size: 0.875rem;\n  margin-bottom: 1rem;\n}\n.search-section[_ngcontent-%COMP%]   .popular-searches[_ngcontent-%COMP%]   .popular-tags[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.search-section[_ngcontent-%COMP%]   .popular-searches[_ngcontent-%COMP%]   .popular-tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  color: var(--hero-primary);\n  padding: 0.5rem 1rem;\n  border-radius: 20px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  text-decoration: none;\n  transition: var(--hero-transition);\n}\n.search-section[_ngcontent-%COMP%]   .popular-searches[_ngcontent-%COMP%]   .popular-tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]:hover {\n  background: var(--hero-primary);\n  color: white;\n  transform: translateY(-1px);\n}\n\n.trust-section[_ngcontent-%COMP%] {\n  background: white;\n  padding: 4rem 0;\n}\n.trust-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 2rem;\n}\n.trust-section[_ngcontent-%COMP%]   .trust-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 2rem;\n}\n.trust-section[_ngcontent-%COMP%]   .trust-grid[_ngcontent-%COMP%]   .trust-item[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem 1rem;\n}\n.trust-section[_ngcontent-%COMP%]   .trust-grid[_ngcontent-%COMP%]   .trust-item[_ngcontent-%COMP%]   .trust-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background: linear-gradient(135deg, var(--hero-primary), var(--hero-secondary));\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 1.5rem;\n  color: white;\n  font-size: 2rem;\n  box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);\n}\n.trust-section[_ngcontent-%COMP%]   .trust-grid[_ngcontent-%COMP%]   .trust-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--hero-text-dark);\n  margin-bottom: 0.75rem;\n}\n.trust-section[_ngcontent-%COMP%]   .trust-grid[_ngcontent-%COMP%]   .trust-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--hero-text-light);\n  line-height: 1.6;\n}\n\n@keyframes _ngcontent-%COMP%_float {\n  0%, 100% {\n    transform: translateY(0px) rotate(0deg);\n  }\n  50% {\n    transform: translateY(-20px) rotate(180deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_glow {\n  0% {\n    box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);\n  }\n  100% {\n    box-shadow: 0 0 20px rgba(255, 255, 255, 0.6);\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.1);\n  }\n}\n@media (max-width: 1200px) {\n  .hero-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 3rem;\n    text-align: center;\n  }\n  .hero-image[_ngcontent-%COMP%]   .main-hero-image[_ngcontent-%COMP%] {\n    height: 500px;\n  }\n}\n@media (max-width: 768px) {\n  .hero-content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n  .hero-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: clamp(2rem, 8vw, 3rem);\n  }\n  .hero-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .hero-text[_ngcontent-%COMP%]   .hero-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .hero-text[_ngcontent-%COMP%]   .hero-buttons[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], .hero-text[_ngcontent-%COMP%]   .hero-buttons[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 300px;\n    justify-content: center;\n  }\n  .hero-image[_ngcontent-%COMP%]   .main-hero-image[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n  .hero-image[_ngcontent-%COMP%]   .floating-stats[_ngcontent-%COMP%] {\n    position: static;\n    margin: 1rem 0;\n  }\n  .hero-image[_ngcontent-%COMP%]   .floating-stats.stat-1[_ngcontent-%COMP%], .hero-image[_ngcontent-%COMP%]   .floating-stats.stat-2[_ngcontent-%COMP%] {\n    animation: none;\n  }\n  .product-showcase[_ngcontent-%COMP%], .search-section[_ngcontent-%COMP%], .trust-section[_ngcontent-%COMP%] {\n    padding: 3rem 0;\n  }\n  .product-showcase[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%], .search-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%], .trust-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n  .product-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .category-filters[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .trust-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 480px) {\n  .hero-section[_ngcontent-%COMP%] {\n    min-height: 90vh;\n  }\n  .search-bar[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .search-bar[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .floating-shapes[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvaG9tZS9jb21wb25lbnRzL2hlcm8tYmFubmVyL2hlcm8tYmFubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0VBQUE7RUFDQSw2Q0FBQTtFQUNBLHdEQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQUFGO0FBR0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNlBBQUE7RUFHQSx5Q0FBQTtFQUNBLFVBQUE7QUFISjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQUpGO0FBTUU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0ZBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EseUNBQUE7QUFKSjtBQU1JO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBSk47QUFPSTtFQUNFLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUxOO0FBUUk7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFOTjtBQVNJO0VBQ0UsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBUE47O0FBWUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBVEY7QUFXRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVB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QS9FRjtFQWtGQTtJQUNFLHNCQUFBO0lBQ0EsbUJBQUE7RUFoRkY7RUFtRkE7SUFDRSwwQkFBQTtFQWpGRjtBQUNGO0FBb0ZBO0VBQ0U7SUFDRSxnQkFBQTtFQWxGRjtFQXFGQTtJQUNFLHNCQUFBO0VBbkZGO0VBcUZFO0lBQ0UsV0FBQTtFQW5GSjtFQXVGQTtJQUNFLGFBQUE7RUFyRkY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE1vZGVybiBIZXJvIEJhbm5lciAtIENvbXBsZXRlIFVJIE92ZXJoYXVsXG46cm9vdCB7XG4gIC0taGVyby1wcmltYXJ5OiAjNjM2NmYxO1xuICAtLWhlcm8tc2Vjb25kYXJ5OiAjOGI1Y2Y2O1xuICAtLWhlcm8tYWNjZW50OiAjMTBiOTgxO1xuICAtLWhlcm8tdGV4dC1kYXJrOiAjMWYyOTM3O1xuICAtLWhlcm8tdGV4dC1saWdodDogIzZiNzI4MDtcbiAgLS1oZXJvLWJhY2tncm91bmQ6ICNmOGZhZmM7XG4gIC0taGVyby1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcbiAgLS1oZXJvLXNoYWRvdzogMCAyMHB4IDgwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtLWhlcm8tdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbn1cblxuLmhlcm8tc2VjdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWhlcm8tZ3JhZGllbnQpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBcbiAgLy8gQW5pbWF0ZWQgYmFja2dyb3VuZCBzaGFwZXNcbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtNTAlO1xuICAgIGxlZnQ6IC01MCU7XG4gICAgd2lkdGg6IDIwMCU7XG4gICAgaGVpZ2h0OiAyMDAlO1xuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMzAlIDQwJSwgcmdiYSg5OSwgMTAyLCAyNDEsIDAuMSkgMCUsIHRyYW5zcGFyZW50IDUwJSksXG4gICAgICAgICAgICAgICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA4MCUgMjAlLCByZ2JhKDEzOSwgOTIsIDI0NiwgMC4xKSAwJSwgdHJhbnNwYXJlbnQgNTAlKSxcbiAgICAgICAgICAgICAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDQwJSA4MCUsIHJnYmEoMTYsIDE4NSwgMTI5LCAwLjEpIDAlLCB0cmFuc3BhcmVudCA1MCUpO1xuICAgIGFuaW1hdGlvbjogZmxvYXQgMjBzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbn1cblxuLmZsb2F0aW5nLXNoYXBlcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAyO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgXG4gIC5zaGFwZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbiAgICBhbmltYXRpb246IGZsb2F0IDE1cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICBcbiAgICAmOm50aC1jaGlsZCgxKSB7XG4gICAgICB0b3A6IDEwJTtcbiAgICAgIGxlZnQ6IDEwJTtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xuICAgIH1cbiAgICBcbiAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICB0b3A6IDYwJTtcbiAgICAgIHJpZ2h0OiAxNSU7XG4gICAgICB3aWR0aDogMTUwcHg7XG4gICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAycztcbiAgICB9XG4gICAgXG4gICAgJjpudGgtY2hpbGQoMykge1xuICAgICAgYm90dG9tOiAyMCU7XG4gICAgICBsZWZ0OiAyMCU7XG4gICAgICB3aWR0aDogODBweDtcbiAgICAgIGhlaWdodDogODBweDtcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogNHM7XG4gICAgfVxuICAgIFxuICAgICY6bnRoLWNoaWxkKDQpIHtcbiAgICAgIHRvcDogMzAlO1xuICAgICAgcmlnaHQ6IDMwJTtcbiAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICBhbmltYXRpb24tZGVsYXk6IDZzO1xuICAgIH1cbiAgfVxufVxuXG4uaGVyby1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgXG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTQwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDAgMnJlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBnYXA6IDRyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuXG4uaGVyby10ZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBcbiAgLmhlcm8tYmFkZ2Uge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjVyZW07XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIGFuaW1hdGlvbjogZ2xvdyAzcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gICAgXG4gICAgaSB7XG4gICAgICBjb2xvcjogIzEwYjk4MTtcbiAgICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XG4gICAgfVxuICB9XG4gIFxuICBoMSB7XG4gICAgZm9udC1zaXplOiBjbGFtcCgzcmVtLCA2dncsIDVyZW0pO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmZmZmZiAwJSwgI2U1ZTdlYiAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRleHQtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgfVxuICBcbiAgcCB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgfVxuICBcbiAgLmhlcm8tYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDFyZW07XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIFxuICAgIC5idG4tcHJpbWFyeSB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTBiOTgxIDAlLCAjMDU5NjY5IDEwMCUpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDAuNXJlbTtcbiAgICAgIHRyYW5zaXRpb246IHZhcigtLWhlcm8tdHJhbnNpdGlvbik7XG4gICAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDE2LCAxODUsIDEyOSwgMC4zKTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxNXB4IDQwcHggcmdiYSgxNiwgMTg1LCAxMjksIDAuNCk7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwNTk2NjkgMCUsICMwNDc4NTcgMTAwJSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGkge1xuICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS1oZXJvLXRyYW5zaXRpb24pO1xuICAgICAgfVxuICAgICAgXG4gICAgICAmOmhvdmVyIGkge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmJ0bi1zZWNvbmRhcnkge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBnYXA6IDAuNXJlbTtcbiAgICAgIHRyYW5zaXRpb246IHZhcigtLWhlcm8tdHJhbnNpdGlvbik7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gICAgICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5oZXJvLWltYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBcbiAgLm1haW4taGVyby1pbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLWhlcm8tc2hhZG93KTtcbiAgICBhbmltYXRpb246IGZhZGVJblVwIDFzIGVhc2Utb3V0O1xuICB9XG4gIFxuICAuZmxvYXRpbmctc3RhdHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgIFxuICAgICYuc3RhdC0xIHtcbiAgICAgIHRvcDogMTAlO1xuICAgICAgbGVmdDogLTEwJTtcbiAgICAgIGFuaW1hdGlvbjogZmxvYXQgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gICAgfVxuICAgIFxuICAgICYuc3RhdC0yIHtcbiAgICAgIGJvdHRvbTogMTUlO1xuICAgICAgcmlnaHQ6IC0xMCU7XG4gICAgICBhbmltYXRpb246IGZsb2F0IDZzIGVhc2UtaW4tb3V0IGluZmluaXRlIDJzO1xuICAgIH1cbiAgICBcbiAgICAuc3RhdC1pY29uIHtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0taGVyby1wcmltYXJ5KSwgdmFyKC0taGVyby1zZWNvbmRhcnkpKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH1cbiAgICBcbiAgICAuc3RhdC1udW1iZXIge1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1oZXJvLXRleHQtZGFyayk7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICAgIH1cbiAgICBcbiAgICAuc3RhdC1sYWJlbCB7XG4gICAgICBjb2xvcjogdmFyKC0taGVyby10ZXh0LWxpZ2h0KTtcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgfVxufVxuXG4ucHJvZHVjdC1zaG93Y2FzZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiA1cmVtIDA7XG4gIFxuICAuY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAwIDJyZW07XG4gIH1cbiAgXG4gIC5zZWN0aW9uLWhlYWRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XG4gICAgXG4gICAgLnNlY3Rpb24tYmFkZ2Uge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0taGVyby1wcmltYXJ5KSwgdmFyKC0taGVyby1zZWNvbmRhcnkpKTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG4gICAgXG4gICAgaDIge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCgyLjVyZW0sIDR2dywgMy41cmVtKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICBjb2xvcjogdmFyKC0taGVyby10ZXh0LWRhcmspO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgfVxuICAgIFxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS1oZXJvLXRleHQtbGlnaHQpO1xuICAgICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICB9XG4gIH1cbiAgXG4gIC5wcm9kdWN0LWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gICAgZ2FwOiAycmVtO1xuICAgIFxuICAgIC5wcm9kdWN0LWNhcmQge1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICAgIHRyYW5zaXRpb246IHZhcigtLWhlcm8tdHJhbnNpdGlvbik7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjFmNWY5O1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAyMHB4IDYwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAucHJvZHVjdC1pbWFnZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0taGVyby10cmFuc2l0aW9uKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgJjpob3ZlciAucHJvZHVjdC1pbWFnZSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5wcm9kdWN0LWluZm8ge1xuICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICAgIFxuICAgICAgICAucHJvZHVjdC1jYXRlZ29yeSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWhlcm8tcHJpbWFyeSk7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5wcm9kdWN0LW5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1oZXJvLXRleHQtZGFyayk7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAucHJvZHVjdC1wcmljZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taGVyby1hY2NlbnQpO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5wcm9kdWN0LXJhdGluZyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGdhcDogMC41cmVtO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgXG4gICAgICAgICAgLnN0YXJzIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmJiZjI0O1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLnJhdGluZy10ZXh0IHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1oZXJvLXRleHQtbGlnaHQpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5hZGQtdG8tY2FydCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0taGVyby1wcmltYXJ5KSwgdmFyKC0taGVyby1zZWNvbmRhcnkpKTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS1oZXJvLXRyYW5zaXRpb24pO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBnYXA6IDAuNXJlbTtcbiAgICAgICAgICBcbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM0ZjQ2ZTUsICM3YzNhZWQpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA4cHggMjVweCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4zKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnNlYXJjaC1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZmFmYyAwJSwgI2UyZThmMCAxMDAlKTtcbiAgcGFkZGluZzogNHJlbSAwO1xuICBcbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMCAycmVtO1xuICB9XG4gIFxuICAuc2VhcmNoLWhlYWRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgXG4gICAgaDIge1xuICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgY29sb3I6IHZhcigtLWhlcm8tdGV4dC1kYXJrKTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuICAgIFxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS1oZXJvLXRleHQtbGlnaHQpO1xuICAgIH1cbiAgfVxuICBcbiAgLnNlYXJjaC1iYXIge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgYm94LXNoYWRvdzogdmFyKC0taGVyby1zaGFkb3cpO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDFyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIFxuICAgIC5zZWFyY2gtaW5wdXQge1xuICAgICAgZmxleDogMTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgICAgY29sb3I6IHZhcigtLWhlcm8tdGV4dC1kYXJrKTtcbiAgICAgIFxuICAgICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0taGVyby10ZXh0LWxpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnNlYXJjaC1pY29uIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1oZXJvLXRleHQtbGlnaHQpO1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgfVxuICAgIFxuICAgIC5zZWFyY2gtYnRuIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWhlcm8tcHJpbWFyeSksIHZhcigtLWhlcm8tc2Vjb25kYXJ5KSk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0cmFuc2l0aW9uOiB2YXIoLS1oZXJvLXRyYW5zaXRpb24pO1xuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzRmNDZlNSwgIzdjM2FlZCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5jYXRlZ29yeS1maWx0ZXJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMXJlbTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBcbiAgICAuZmlsdGVyLWJ0biB7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlNWU3ZWI7XG4gICAgICBjb2xvcjogdmFyKC0taGVyby10ZXh0LWRhcmspO1xuICAgICAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRyYW5zaXRpb246IHZhcigtLWhlcm8tdHJhbnNpdGlvbik7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBcbiAgICAgICY6aG92ZXIsICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taGVyby1wcmltYXJ5KTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWhlcm8tcHJpbWFyeSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5wb3B1bGFyLXNlYXJjaGVzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG4gICAgLnBvcHVsYXItbGFiZWwge1xuICAgICAgY29sb3I6IHZhcigtLWhlcm8tdGV4dC1saWdodCk7XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG4gICAgXG4gICAgLnBvcHVsYXItdGFncyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAwLjc1cmVtO1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBcbiAgICAgIC50YWcge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDk5LCAxMDIsIDI0MSwgMC4xKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWhlcm8tcHJpbWFyeSk7XG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246IHZhcigtLWhlcm8tdHJhbnNpdGlvbik7XG4gICAgICAgIFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1oZXJvLXByaW1hcnkpO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnRydXN0LXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogNHJlbSAwO1xuICBcbiAgLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZzogMCAycmVtO1xuICB9XG4gIFxuICAudHJ1c3QtZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgICBnYXA6IDJyZW07XG4gICAgXG4gICAgLnRydXN0LWl0ZW0ge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcGFkZGluZzogMnJlbSAxcmVtO1xuICAgICAgXG4gICAgICAudHJ1c3QtaWNvbiB7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWhlcm8tcHJpbWFyeSksIHZhcigtLWhlcm8tc2Vjb25kYXJ5KSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDEuNXJlbTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoOTksIDEwMiwgMjQxLCAwLjIpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6IHZhcigtLWhlcm8tdGV4dC1kYXJrKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgcCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1oZXJvLXRleHQtbGlnaHQpO1xuICAgICAgICBsaW5lLWhlaWdodDogMS42O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBBbmltYXRpb25zXG5Aa2V5ZnJhbWVzIGZsb2F0IHtcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoMGRlZyk7IH1cbiAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KSByb3RhdGUoMTgwZGVnKTsgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJblVwIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZ2xvdyB7XG4gIDAlIHsgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7IH1cbiAgMTAwJSB7IGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTsgfVxufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XG4gIDUwJSB7IHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgfVxufVxuXG4vLyBSZXNwb25zaXZlIERlc2lnblxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuaGVyby1jb250ZW50IC5jb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogM3JlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5oZXJvLWltYWdlIC5tYWluLWhlcm8taW1hZ2Uge1xuICAgIGhlaWdodDogNTAwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oZXJvLWNvbnRlbnQgLmNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICB9XG4gIFxuICAuaGVyby10ZXh0IHtcbiAgICBoMSB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKDJyZW0sIDh2dywgM3JlbSk7XG4gICAgfVxuICAgIFxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgICBcbiAgICAuaGVyby1idXR0b25zIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgXG4gICAgICAuYnRuLXByaW1hcnksIC5idG4tc2Vjb25kYXJ5IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLmhlcm8taW1hZ2Uge1xuICAgIC5tYWluLWhlcm8taW1hZ2Uge1xuICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICB9XG4gICAgXG4gICAgLmZsb2F0aW5nLXN0YXRzIHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICAgIFxuICAgICAgJi5zdGF0LTEsICYuc3RhdC0yIHtcbiAgICAgICAgYW5pbWF0aW9uOiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLnByb2R1Y3Qtc2hvd2Nhc2UsXG4gIC5zZWFyY2gtc2VjdGlvbixcbiAgLnRydXN0LXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDNyZW0gMDtcbiAgICBcbiAgICAuY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICB9XG4gIH1cbiAgXG4gIC5wcm9kdWN0LWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG4gIFxuICAuY2F0ZWdvcnktZmlsdGVycyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIFxuICAudHJ1c3QtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5oZXJvLXNlY3Rpb24ge1xuICAgIG1pbi1oZWlnaHQ6IDkwdmg7XG4gIH1cbiAgXG4gIC5zZWFyY2gtYmFyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIFxuICAgIC5zZWFyY2gtYnRuIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuICBcbiAgLmZsb2F0aW5nLXNoYXBlcyAuc2hhcGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}


/***/ }),

/***/ 8225:
/*!*******************************************************************************************!*\
  !*** ./src/app/features/home/components/newsletter-signup/newsletter-signup.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewsletterSignupComponent: () => (/* binding */ NewsletterSignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);




function NewsletterSignupComponent_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Subscribe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function NewsletterSignupComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Subscribing...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function NewsletterSignupComponent_div_13_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function NewsletterSignupComponent_div_13_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter a valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function NewsletterSignupComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewsletterSignupComponent_div_13_span_1_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewsletterSignupComponent_div_13_span_2_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f["email"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f["email"].errors["email"]);
  }
}
function NewsletterSignupComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Thank you for subscribing to our newsletter! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class NewsletterSignupComponent {
  constructor(fb) {
    this.fb = fb;
    this.loading = false;
    this.submitted = false;
    this.success = false;
    this.newsletterForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]]
    });
  }
  get f() {
    return this.newsletterForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.newsletterForm.invalid) {
      return;
    }
    this.loading = true;
    // Simulate API call
    setTimeout(() => {
      this.loading = false;
      this.success = true;
      this.newsletterForm.reset();
      this.submitted = false;
      // Reset success message after 5 seconds
      setTimeout(() => {
        this.success = false;
      }, 5000);
    }, 1500);
  }
  static {
    this.ɵfac = function NewsletterSignupComponent_Factory(t) {
      return new (t || NewsletterSignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewsletterSignupComponent,
      selectors: [["app-newsletter-signup"]],
      decls: 17,
      vars: 8,
      consts: [[1, "newsletter-section"], [1, "newsletter-container"], [1, "newsletter-content"], [1, "newsletter-form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "email", "formControlName", "email", "placeholder", "Your email address"], ["type", "submit", 3, "disabled"], [4, "ngIf"], ["class", "error-message", 4, "ngIf"], ["class", "success-message", 4, "ngIf"], [1, "privacy-note"], [1, "error-message"], [1, "success-message"]],
      template: function NewsletterSignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Subscribe to Our Newsletter");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Stay updated with our latest products, exclusive offers, and shopping tips.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewsletterSignupComponent_Template_form_ngSubmit_7_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NewsletterSignupComponent_span_11_Template, 2, 0, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NewsletterSignupComponent_span_12_Template, 2, 0, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NewsletterSignupComponent_div_13_Template, 3, 2, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NewsletterSignupComponent_div_14_Template, 2, 0, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "By subscribing, you agree to our Privacy Policy and consent to receive our promotional emails.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newsletterForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invalid", ctx.submitted && ctx.f["email"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f["email"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.success);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
      styles: [".newsletter-section[_ngcontent-%COMP%] {\n      background-color: #f0f7ff;\n      padding: 60px 20px;\n    }\n    \n    .newsletter-container[_ngcontent-%COMP%] {\n      max-width: 800px;\n      margin: 0 auto;\n      text-align: center;\n    }\n    \n    .newsletter-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n      margin-bottom: 15px;\n      font-size: 2rem;\n      color: #333;\n    }\n    \n    .newsletter-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      margin-bottom: 30px;\n      color: #666;\n      font-size: 1.1rem;\n    }\n    \n    .newsletter-form[_ngcontent-%COMP%] {\n      margin-bottom: 20px;\n    }\n    \n    .form-group[_ngcontent-%COMP%] {\n      display: flex;\n      max-width: 500px;\n      margin: 0 auto;\n    }\n    \n    input[type=\"email\"][_ngcontent-%COMP%] {\n      flex: 1;\n      padding: 15px;\n      border: 1px solid #ddd;\n      border-radius: 4px 0 0 4px;\n      font-size: 1rem;\n    }\n    \n    input[type=\"email\"].invalid[_ngcontent-%COMP%] {\n      border-color: #ff3b30;\n    }\n    \n    button[_ngcontent-%COMP%] {\n      padding: 0 25px;\n      background-color: #1976d2;\n      color: white;\n      border: none;\n      border-radius: 0 4px 4px 0;\n      font-size: 1rem;\n      cursor: pointer;\n      transition: background-color 0.3s;\n    }\n    \n    button[_ngcontent-%COMP%]:hover {\n      background-color: #1565c0;\n    }\n    \n    button[_ngcontent-%COMP%]:disabled {\n      background-color: #90caf9;\n      cursor: not-allowed;\n    }\n    \n    .error-message[_ngcontent-%COMP%] {\n      color: #ff3b30;\n      margin-top: 10px;\n      font-size: 0.9rem;\n    }\n    \n    .success-message[_ngcontent-%COMP%] {\n      color: #34c759;\n      margin-top: 10px;\n      font-size: 1rem;\n    }\n    \n    .privacy-note[_ngcontent-%COMP%] {\n      font-size: 0.8rem;\n      color: #999;\n      margin-top: 15px;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvaG9tZS9jb21wb25lbnRzL25ld3NsZXR0ZXItc2lnbnVwL25ld3NsZXR0ZXItc2lnbnVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0k7TUFDRSx5QkFBeUI7TUFDekIsa0JBQWtCO0lBQ3BCOztJQUVBO01BQ0UsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCxrQkFBa0I7SUFDcEI7O0lBRUE7TUFDRSxtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLFdBQVc7SUFDYjs7SUFFQTtNQUNFLG1CQUFtQjtNQUNuQixXQUFXO01BQ1gsaUJBQWlCO0lBQ25COztJQUVBO01BQ0UsbUJBQW1CO0lBQ3JCOztJQUVBO01BQ0UsYUFBYTtNQUNiLGdCQUFnQjtNQUNoQixjQUFjO0lBQ2hCOztJQUVBO01BQ0UsT0FBTztNQUNQLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsMEJBQTBCO01BQzFCLGVBQWU7SUFDakI7O0lBRUE7TUFDRSxxQkFBcUI7SUFDdkI7O0lBRUE7TUFDRSxlQUFlO01BQ2YseUJBQXlCO01BQ3pCLFlBQVk7TUFDWixZQUFZO01BQ1osMEJBQTBCO01BQzFCLGVBQWU7TUFDZixlQUFlO01BQ2YsaUNBQWlDO0lBQ25DOztJQUVBO01BQ0UseUJBQXlCO0lBQzNCOztJQUVBO01BQ0UseUJBQXlCO01BQ3pCLG1CQUFtQjtJQUNyQjs7SUFFQTtNQUNFLGNBQWM7TUFDZCxnQkFBZ0I7TUFDaEIsaUJBQWlCO0lBQ25COztJQUVBO01BQ0UsY0FBYztNQUNkLGdCQUFnQjtNQUNoQixlQUFlO0lBQ2pCOztJQUVBO01BQ0UsaUJBQWlCO01BQ2pCLFdBQVc7TUFDWCxnQkFBZ0I7SUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAubmV3c2xldHRlci1zZWN0aW9uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGY3ZmY7XG4gICAgICBwYWRkaW5nOiA2MHB4IDIwcHg7XG4gICAgfVxuICAgIFxuICAgIC5uZXdzbGV0dGVyLWNvbnRhaW5lciB7XG4gICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC5uZXdzbGV0dGVyLWNvbnRlbnQgaDIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgIH1cbiAgICBcbiAgICAubmV3c2xldHRlci1jb250ZW50IHAge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgfVxuICAgIFxuICAgIC5uZXdzbGV0dGVyLWZvcm0ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgXG4gICAgLmZvcm0tZ3JvdXAge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgXG4gICAgaW5wdXRbdHlwZT1cImVtYWlsXCJdIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgICBcbiAgICBpbnB1dFt0eXBlPVwiZW1haWxcIl0uaW52YWxpZCB7XG4gICAgICBib3JkZXItY29sb3I6ICNmZjNiMzA7XG4gICAgfVxuICAgIFxuICAgIGJ1dHRvbiB7XG4gICAgICBwYWRkaW5nOiAwIDI1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDA7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG4gICAgfVxuICAgIFxuICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU2NWMwO1xuICAgIH1cbiAgICBcbiAgICBidXR0b246ZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzkwY2FmOTtcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgfVxuICAgIFxuICAgIC5lcnJvci1tZXNzYWdlIHtcbiAgICAgIGNvbG9yOiAjZmYzYjMwO1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIH1cbiAgICBcbiAgICAuc3VjY2Vzcy1tZXNzYWdlIHtcbiAgICAgIGNvbG9yOiAjMzRjNzU5O1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gICAgXG4gICAgLnByaXZhY3ktbm90ZSB7XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}


/***/ }),

/***/ 1891:
/*!*********************************************************************************!*\
  !*** ./src/app/features/home/components/promo-banner/promo-banner.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PromoBannerComponent: () => (/* binding */ PromoBannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4175);




const _c0 = function (a0) {
  return {
    "background-image": a0
  };
};
class PromoBannerComponent {
  constructor() {
    this.promoData = {
      title: 'Summer Sale',
      subtitle: 'Special Offer',
      description: 'Get up to 40% off on selected items! Limited time offer.',
      buttonText: 'Shop Now',
      buttonLink: '/products?sale=true',
      backgroundImage: 'assets/images/banners/summer-sale.jpg'
    };
  }
  static {
    this.ɵfac = function PromoBannerComponent_Factory(t) {
      return new (t || PromoBannerComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PromoBannerComponent,
      selectors: [["app-promo-banner"]],
      decls: 12,
      vars: 8,
      consts: [[1, "promo-banner", 3, "ngStyle"], [1, "promo-overlay"], [1, "container"], [1, "promo-content"], [1, "promo-subtitle"], [1, "promo-title"], [1, "promo-description"], ["mat-raised-button", "", "color", "accent", 1, "promo-button", 3, "routerLink"]],
      template: function PromoBannerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, "url(" + ctx.promoData.backgroundImage + ")"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.promoData.subtitle);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.promoData.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.promoData.description);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.promoData.buttonLink);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.promoData.buttonText, " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatAnchor],
      styles: ["[_nghost-%COMP%] {\n  --promo-section-padding: clamp(3rem, 5vw, 4rem);\n  --promo-container-max-width: 1200px;\n  --promo-content-max-width: 540px;\n  --promo-height: clamp(280px, 25vw, 350px);\n  --promo-primary-accent: #ff4081;\n  --promo-secondary-accent: #3f51b5;\n  --promo-overlay-gradient: linear-gradient(\n    135deg,\n    rgba(63, 81, 181, 0.85) 0%,\n    rgba(255, 64, 129, 0.75) 50%,\n    rgba(0, 0, 0, 0.6) 100%\n  );\n  --promo-content-background: rgba(255, 255, 255, 0.08);\n  --promo-backdrop-filter: blur(12px) saturate(180%);\n  --promo-subtitle-size: clamp(0.875rem, 2vw, 1rem);\n  --promo-title-size: clamp(1.75rem, 5vw, 2.5rem);\n  --promo-description-size: clamp(0.95rem, 2.5vw, 1.1rem);\n  --promo-transition-primary: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  --promo-transition-slow: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  --promo-hover-scale: 1.02;\n  --promo-button-scale: 1.05;\n}\n\n.promo-banner[_ngcontent-%COMP%] {\n  position: relative;\n  height: var(--promo-height);\n  background-size: cover;\n  background-position: center;\n  background-attachment: fixed;\n  margin: var(--promo-section-padding) 0;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  border-radius: 20px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.08);\n  transition: var(--promo-transition-slow);\n}\n.promo-banner[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: radial-gradient(circle at 20% 80%, rgba(255, 64, 129, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(63, 81, 181, 0.1) 0%, transparent 50%);\n  animation: _ngcontent-%COMP%_backgroundFloat 8s ease-in-out infinite alternate;\n  z-index: 1;\n}\n.promo-banner[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px) scale(var(--promo-hover-scale));\n  box-shadow: 0 32px 64px rgba(0, 0, 0, 0.15), 0 16px 32px rgba(0, 0, 0, 0.12);\n}\n.promo-banner[_ngcontent-%COMP%]:hover   .promo-overlay[_ngcontent-%COMP%] {\n  background: var(--promo-overlay-gradient);\n}\n.promo-banner[_ngcontent-%COMP%]:hover   .promo-content[_ngcontent-%COMP%] {\n  transform: translateX(8px);\n}\n.promo-banner[_ngcontent-%COMP%]   .promo-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(135deg, rgba(63, 81, 181, 0.75) 0%, rgba(255, 64, 129, 0.65) 50%, rgba(0, 0, 0, 0.5) 100%);\n  transition: var(--promo-transition-slow);\n  z-index: 2;\n}\n.promo-banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 3;\n  max-width: var(--promo-container-max-width);\n  margin: 0 auto;\n  padding: 0 clamp(1rem, 4vw, 2rem);\n  width: 100%;\n}\n.promo-banner[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%] {\n  max-width: var(--promo-content-max-width);\n  color: white;\n  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n  background: var(--promo-content-background);\n  backdrop-filter: var(--promo-backdrop-filter);\n  -webkit-backdrop-filter: var(--promo-backdrop-filter);\n  border-radius: 16px;\n  padding: clamp(1.5rem, 4vw, 2.5rem);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  transition: var(--promo-transition-primary);\n  animation: _ngcontent-%COMP%_slideContentIn 0.8s ease-out;\n}\n.promo-banner[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .promo-subtitle[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: var(--promo-subtitle-size);\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.15em;\n  background: linear-gradient(135deg, var(--promo-primary-accent), var(--promo-secondary-accent));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  padding: 0.5rem 1rem;\n  border-radius: 50px;\n  margin-bottom: 1rem;\n  position: relative;\n  animation: _ngcontent-%COMP%_subtitleGlow 2s ease-in-out infinite alternate;\n}\n.promo-banner[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .promo-subtitle[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(135deg, rgba(255, 64, 129, 0.2), rgba(63, 81, 181, 0.2));\n  border-radius: 50px;\n  z-index: -1;\n  -webkit-backdrop-filter: blur(8px);\n          backdrop-filter: blur(8px);\n}\n.promo-banner[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .promo-title[_ngcontent-%COMP%] {\n  font-size: var(--promo-title-size);\n  font-weight: 700;\n  margin: 0 0 1.25rem;\n  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  text-shadow: none;\n  position: relative;\n  animation: _ngcontent-%COMP%_titleShine 3s ease-in-out infinite;\n}\n.promo-banner[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .promo-title[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);\n  animation: _ngcontent-%COMP%_titleSweep 4s ease-in-out infinite;\n}\n.promo-banner[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .promo-description[_ngcontent-%COMP%] {\n  font-size: var(--promo-description-size);\n  margin-bottom: 2rem;\n  line-height: 1.7;\n  color: rgba(255, 255, 255, 0.95);\n  font-weight: 400;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n}\n.promo-banner[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .promo-button[_ngcontent-%COMP%] {\n  padding: 0.75rem 2rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  border-radius: 50px;\n  position: relative;\n  overflow: hidden;\n  background: linear-gradient(135deg, var(--promo-primary-accent), var(--promo-secondary-accent));\n  box-shadow: 0 8px 24px rgba(255, 64, 129, 0.3), 0 4px 12px rgba(63, 81, 181, 0.2);\n  transition: var(--promo-transition-primary);\n}\n.promo-banner[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .promo-button[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);\n  transition: left 0.6s ease;\n}\n.promo-banner[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .promo-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px) scale(var(--promo-button-scale));\n  box-shadow: 0 12px 32px rgba(255, 64, 129, 0.4), 0 6px 16px rgba(63, 81, 181, 0.3);\n}\n.promo-banner[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .promo-button[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n\n@keyframes _ngcontent-%COMP%_backgroundFloat {\n  0% {\n    transform: translateY(0) rotate(0deg);\n    opacity: 0.8;\n  }\n  100% {\n    transform: translateY(-10px) rotate(2deg);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideContentIn {\n  0% {\n    opacity: 0;\n    transform: translateX(-50px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_subtitleGlow {\n  0% {\n    filter: drop-shadow(0 0 8px rgba(255, 64, 129, 0.3));\n  }\n  100% {\n    filter: drop-shadow(0 0 16px rgba(255, 64, 129, 0.6));\n  }\n}\n@keyframes _ngcontent-%COMP%_titleShine {\n  0%, 100% {\n    background-position: -200% center;\n  }\n  50% {\n    background-position: 200% center;\n  }\n}\n@keyframes _ngcontent-%COMP%_titleSweep {\n  0% {\n    left: -100%;\n  }\n  50% {\n    left: 100%;\n  }\n  100% {\n    left: -100%;\n  }\n}\n@media (max-width: 768px) {\n  [_nghost-%COMP%] {\n    --promo-height: clamp(220px, 20vw, 280px);\n    --promo-section-padding: clamp(2rem, 4vw, 3rem);\n  }\n  .promo-banner[_ngcontent-%COMP%] {\n    border-radius: 16px;\n    background-attachment: scroll;\n  }\n  .promo-banner[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%] {\n    padding: clamp(1rem, 3vw, 1.5rem);\n  }\n  .promo-banner[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .promo-subtitle[_ngcontent-%COMP%] {\n    font-size: clamp(0.75rem, 2vw, 0.875rem);\n    letter-spacing: 0.1em;\n  }\n  .promo-banner[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .promo-title[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n  .promo-banner[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .promo-description[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem;\n    font-size: clamp(0.875rem, 2vw, 1rem);\n  }\n  .promo-banner[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .promo-button[_ngcontent-%COMP%] {\n    padding: 0.625rem 1.5rem;\n    font-size: 0.875rem;\n  }\n}\n@media (max-width: 576px) {\n  [_nghost-%COMP%] {\n    --promo-height: clamp(200px, 18vw, 250px);\n  }\n  .promo-banner[_ngcontent-%COMP%] {\n    border-radius: 12px;\n    margin: 2rem 0;\n  }\n  .promo-banner[_ngcontent-%COMP%]:hover {\n    transform: translateY(-1px) scale(1.01);\n  }\n  .promo-banner[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n  .promo-banner[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%] {\n    padding: 1rem;\n    border-radius: 12px;\n  }\n  .promo-banner[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .promo-subtitle[_ngcontent-%COMP%] {\n    padding: 0.375rem 0.75rem;\n    margin-bottom: 0.75rem;\n  }\n  .promo-banner[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .promo-title[_ngcontent-%COMP%] {\n    margin-bottom: 0.75rem;\n  }\n  .promo-banner[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .promo-description[_ngcontent-%COMP%] {\n    margin-bottom: 1.25rem;\n  }\n}\n@media (prefers-contrast: high) {\n  [_nghost-%COMP%] {\n    --promo-overlay-gradient: linear-gradient(\n      135deg,\n      rgba(0, 0, 0, 0.9) 0%,\n      rgba(0, 0, 0, 0.8) 100%\n    );\n    --promo-content-background: rgba(0, 0, 0, 0.3);\n  }\n  .promo-banner[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%] {\n    border: 2px solid rgba(255, 255, 255, 0.3);\n  }\n  .promo-banner[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .promo-subtitle[_ngcontent-%COMP%] {\n    background: #ff4081;\n    -webkit-text-fill-color: white;\n    color: white;\n  }\n  .promo-banner[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .promo-title[_ngcontent-%COMP%] {\n    -webkit-text-fill-color: white;\n    color: white;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  [_nghost-%COMP%] {\n    --promo-transition-primary: none;\n    --promo-transition-slow: none;\n  }\n  .promo-banner[_ngcontent-%COMP%]::before {\n    animation: none;\n  }\n  .promo-banner[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%] {\n    animation: none;\n  }\n  .promo-banner[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .promo-subtitle[_ngcontent-%COMP%] {\n    animation: none;\n  }\n  .promo-banner[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .promo-title[_ngcontent-%COMP%] {\n    animation: none;\n  }\n  .promo-banner[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .promo-title[_ngcontent-%COMP%]::after {\n    animation: none;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  [_nghost-%COMP%] {\n    --promo-content-background: rgba(0, 0, 0, 0.2);\n    --promo-backdrop-filter: blur(16px) saturate(200%);\n  }\n  .promo-banner[_ngcontent-%COMP%]   .promo-content[_ngcontent-%COMP%]   .promo-description[_ngcontent-%COMP%] {\n    color: rgba(255, 255, 255, 0.9);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvaG9tZS9jb21wb25lbnRzL3Byb21vLWJhbm5lci9wcm9tby1iYW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFRSwrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5Q0FBQTtFQUdBLCtCQUFBO0VBQ0EsaUNBQUE7RUFDQTs7Ozs7R0FBQTtFQU1BLHFEQUFBO0VBQ0Esa0RBQUE7RUFHQSxpREFBQTtFQUNBLCtDQUFBO0VBQ0EsdURBQUE7RUFHQSx5RUFBQTtFQUNBLHNFQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQVJGOztBQVdBO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBFQUNFO0VBRUYsd0NBQUE7QUFWRjtBQWFFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJLQUNFO0VBRUYsNERBQUE7RUFDQSxVQUFBO0FBYko7QUFpQkU7RUFDRSwyREFBQTtFQUNBLDRFQUNFO0FBaEJOO0FBbUJJO0VBQ0UseUNBQUE7QUFqQk47QUFvQkk7RUFDRSwwQkFBQTtBQWxCTjtBQXNCRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNIQUFBO0VBTUEsd0NBQUE7RUFDQSxVQUFBO0FBekJKO0FBNEJFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMkNBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0FBMUJKO0FBNkJFO0VBQ0UseUNBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSwyQ0FBQTtFQUNBLDZDQUFBO0VBQ0EscURBQUE7RUFDQSxtQkFB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LFlBQUE7RUE1Rko7RUErRkU7SUFDRSw4QkFBQTtJQUNBLFlBQUE7RUE3Rko7QUFDRjtBQWtHQTtFQUNFO0lBQ0UsZ0NBQUE7SUFDQSw2QkFBQTtFQWhHRjtFQW9HRTtJQUNFLGVBQUE7RUFsR0o7RUFxR0U7SUFDRSxlQUFBO0VBbkdKO0VBcUdJO0lBQ0UsZUFBQTtFQW5HTjtFQXNHSTtJQUNFLGVBQUE7RUFwR047RUFzR007SUFDRSxlQUFBO0VBcEdSO0FBQ0Y7QUEyR0E7RUFDRTtJQUNFLDhDQUFBO0lBQ0Esa0RBQUE7RUF6R0Y7RUE2R0U7SUFDRSwrQkFBQTtFQTNHSjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBNb2Rlcm4gRGVzaWduIFN5c3RlbSAtIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAvLyBTcGFjaW5nICYgU2l6aW5nXG4gIC0tcHJvbW8tc2VjdGlvbi1wYWRkaW5nOiBjbGFtcCgzcmVtLCA1dncsIDRyZW0pO1xuICAtLXByb21vLWNvbnRhaW5lci1tYXgtd2lkdGg6IDEyMDBweDtcbiAgLS1wcm9tby1jb250ZW50LW1heC13aWR0aDogNTQwcHg7XG4gIC0tcHJvbW8taGVpZ2h0OiBjbGFtcCgyODBweCwgMjV2dywgMzUwcHgpO1xuICBcbiAgLy8gQ29sb3JzICYgRWZmZWN0c1xuICAtLXByb21vLXByaW1hcnktYWNjZW50OiAjZmY0MDgxO1xuICAtLXByb21vLXNlY29uZGFyeS1hY2NlbnQ6ICMzZjUxYjU7XG4gIC0tcHJvbW8tb3ZlcmxheS1ncmFkaWVudDogbGluZWFyLWdyYWRpZW50KFxuICAgIDEzNWRlZyxcbiAgICByZ2JhKDYzLCA4MSwgMTgxLCAwLjg1KSAwJSxcbiAgICByZ2JhKDI1NSwgNjQsIDEyOSwgMC43NSkgNTAlLFxuICAgIHJnYmEoMCwgMCwgMCwgMC42KSAxMDAlXG4gICk7XG4gIC0tcHJvbW8tY29udGVudC1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xuICAtLXByb21vLWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KSBzYXR1cmF0ZSgxODAlKTtcbiAgXG4gIC8vIFR5cG9ncmFwaHlcbiAgLS1wcm9tby1zdWJ0aXRsZS1zaXplOiBjbGFtcCgwLjg3NXJlbSwgMnZ3LCAxcmVtKTtcbiAgLS1wcm9tby10aXRsZS1zaXplOiBjbGFtcCgxLjc1cmVtLCA1dncsIDIuNXJlbSk7XG4gIC0tcHJvbW8tZGVzY3JpcHRpb24tc2l6ZTogY2xhbXAoMC45NXJlbSwgMi41dncsIDEuMXJlbSk7XG4gIFxuICAvLyBBbmltYXRpb24gJiBUcmFuc2l0aW9uc1xuICAtLXByb21vLXRyYW5zaXRpb24tcHJpbWFyeTogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpO1xuICAtLXByb21vLXRyYW5zaXRpb24tc2xvdzogYWxsIDAuNnMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpO1xuICAtLXByb21vLWhvdmVyLXNjYWxlOiAxLjAyO1xuICAtLXByb21vLWJ1dHRvbi1zY2FsZTogMS4wNTtcbn1cblxuLnByb21vLWJhbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiB2YXIoLS1wcm9tby1oZWlnaHQpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIG1hcmdpbjogdmFyKC0tcHJvbW8tc2VjdGlvbi1wYWRkaW5nKSAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3gtc2hhZG93OiBcbiAgICAwIDIwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMSksXG4gICAgMCA4cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICB0cmFuc2l0aW9uOiB2YXIoLS1wcm9tby10cmFuc2l0aW9uLXNsb3cpO1xuICBcbiAgLy8gQW5pbWF0ZWQgQmFja2dyb3VuZCBQYXR0ZXJuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBcbiAgICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMjAlIDgwJSwgcmdiYSgyNTUsIDY0LCAxMjksIDAuMSkgMCUsIHRyYW5zcGFyZW50IDUwJSksXG4gICAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDgwJSAyMCUsIHJnYmEoNjMsIDgxLCAxODEsIDAuMSkgMCUsIHRyYW5zcGFyZW50IDUwJSk7XG4gICAgYW5pbWF0aW9uOiBiYWNrZ3JvdW5kRmxvYXQgOHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgXG4gIC8vIEVuaGFuY2VkIGhvdmVyIGVmZmVjdFxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCkgc2NhbGUodmFyKC0tcHJvbW8taG92ZXItc2NhbGUpKTtcbiAgICBib3gtc2hhZG93OiBcbiAgICAgIDAgMzJweCA2NHB4IHJnYmEoMCwgMCwgMCwgMC4xNSksXG4gICAgICAwIDE2cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgICAgXG4gICAgLnByb21vLW92ZXJsYXkge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHJvbW8tb3ZlcmxheS1ncmFkaWVudCk7XG4gICAgfVxuICAgIFxuICAgIC5wcm9tby1jb250ZW50IHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg4cHgpO1xuICAgIH1cbiAgfVxuICBcbiAgLnByb21vLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgMTM1ZGVnLFxuICAgICAgcmdiYSg2MywgODEsIDE4MSwgMC43NSkgMCUsXG4gICAgICByZ2JhKDI1NSwgNjQsIDEyOSwgMC42NSkgNTAlLFxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjUpIDEwMCVcbiAgICApO1xuICAgIHRyYW5zaXRpb246IHZhcigtLXByb21vLXRyYW5zaXRpb24tc2xvdyk7XG4gICAgei1pbmRleDogMjtcbiAgfVxuICBcbiAgLmNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDM7XG4gICAgbWF4LXdpZHRoOiB2YXIoLS1wcm9tby1jb250YWluZXItbWF4LXdpZHRoKTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAwIGNsYW1wKDFyZW0sIDR2dywgMnJlbSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5wcm9tby1jb250ZW50IHtcbiAgICBtYXgtd2lkdGg6IHZhcigtLXByb21vLWNvbnRlbnQtbWF4LXdpZHRoKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXByb21vLWNvbnRlbnQtYmFja2dyb3VuZCk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiB2YXIoLS1wcm9tby1iYWNrZHJvcC1maWx0ZXIpO1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiB2YXIoLS1wcm9tby1iYWNrZHJvcC1maWx0ZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgcGFkZGluZzogY2xhbXAoMS41cmVtLCA0dncsIDIuNXJlbSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIHRyYW5zaXRpb246IHZhcigtLXByb21vLXRyYW5zaXRpb24tcHJpbWFyeSk7XG4gICAgYW5pbWF0aW9uOiBzbGlkZUNvbnRlbnRJbiAwLjhzIGVhc2Utb3V0O1xuICAgIFxuICAgIC5wcm9tby1zdWJ0aXRsZSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBmb250LXNpemU6IHZhcigtLXByb21vLXN1YnRpdGxlLXNpemUpO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4xNWVtO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAxMzVkZWcsXG4gICAgICAgIHZhcigtLXByb21vLXByaW1hcnktYWNjZW50KSxcbiAgICAgICAgdmFyKC0tcHJvbW8tc2Vjb25kYXJ5LWFjY2VudClcbiAgICAgICk7XG4gICAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBhbmltYXRpb246IHN1YnRpdGxlR2xvdyAycyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gICAgICBcbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgIDEzNWRlZyxcbiAgICAgICAgICByZ2JhKDI1NSwgNjQsIDEyOSwgMC4yKSxcbiAgICAgICAgICByZ2JhKDYzLCA4MSwgMTgxLCAwLjIpXG4gICAgICAgICk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnByb21vLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tcHJvbW8tdGl0bGUtc2l6ZSk7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgbWFyZ2luOiAwIDAgMS4yNXJlbTtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgMTM1ZGVnLFxuICAgICAgICAjZmZmZmZmIDAlLFxuICAgICAgICAjZjhmOWZhIDUwJSxcbiAgICAgICAgI2U5ZWNlZiAxMDAlXG4gICAgICApO1xuICAgICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGFuaW1hdGlvbjogdGl0bGVTaGluZSAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICAgIFxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IC0xMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgOTBkZWcsXG4gICAgICAgICAgdHJhbnNwYXJlbnQsXG4gICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpLFxuICAgICAgICAgIHRyYW5zcGFyZW50XG4gICAgICAgICk7XG4gICAgICAgIGFuaW1hdGlvbjogdGl0bGVTd2VlcCA0cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLnByb21vLWRlc2NyaXB0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tcHJvbW8tZGVzY3JpcHRpb24tc2l6ZSk7XG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNztcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIHRleHQtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIH1cbiAgICBcbiAgICAucHJvbW8tYnV0dG9uIHtcbiAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMnJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIDEzNWRlZyxcbiAgICAgICAgdmFyKC0tcHJvbW8tcHJpbWFyeS1hY2NlbnQpLFxuICAgICAgICB2YXIoLS1wcm9tby1zZWNvbmRhcnktYWNjZW50KVxuICAgICAgKTtcbiAgICAgIGJveC1zaGFkb3c6IFxuICAgICAgICAwIDhweCAyNHB4IHJnYmEoMjU1LCA2NCwgMTI5LCAwLjMpLFxuICAgICAgICAwIDRweCAxMnB4IHJnYmEoNjMsIDgxLCAxODEsIDAuMik7XG4gICAgICB0cmFuc2l0aW9uOiB2YXIoLS1wcm9tby10cmFuc2l0aW9uLXByaW1hcnkpO1xuICAgICAgXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IC0xMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgOTBkZWcsXG4gICAgICAgICAgdHJhbnNwYXJlbnQsXG4gICAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpLFxuICAgICAgICAgIHRyYW5zcGFyZW50XG4gICAgICAgICk7XG4gICAgICAgIHRyYW5zaXRpb246IGxlZnQgMC42cyBlYXNlO1xuICAgICAgfVxuICAgICAgXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpIHNjYWxlKHZhcigtLXByb21vLWJ1dHRvbi1zY2FsZSkpO1xuICAgICAgICBib3gtc2hhZG93OiBcbiAgICAgICAgICAwIDEycHggMzJweCByZ2JhKDI1NSwgNjQsIDEyOSwgMC40KSxcbiAgICAgICAgICAwIDZweCAxNnB4IHJnYmEoNjMsIDgxLCAxODEsIDAuMyk7XG4gICAgICAgICAgXG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgbGVmdDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBBbmltYXRpb24gS2V5ZnJhbWVzXG5Aa2V5ZnJhbWVzIGJhY2tncm91bmRGbG9hdCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlKDBkZWcpO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpIHJvdGF0ZSgyZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVDb250ZW50SW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3VidGl0bGVHbG93IHtcbiAgMCUge1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDhweCByZ2JhKDI1NSwgNjQsIDEyOSwgMC4zKSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMTZweCByZ2JhKDI1NSwgNjQsIDEyOSwgMC42KSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyB0aXRsZVNoaW5lIHtcbiAgMCUsIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDAlIGNlbnRlcjtcbiAgfVxuICA1MCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIwMCUgY2VudGVyO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgdGl0bGVTd2VlcCB7XG4gIDAlIHtcbiAgICBsZWZ0OiAtMTAwJTtcbiAgfVxuICA1MCUge1xuICAgIGxlZnQ6IDEwMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgbGVmdDogLTEwMCU7XG4gIH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBEZXNpZ24gLSBNb2JpbGUgRmlyc3QgQXBwcm9hY2hcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICA6aG9zdCB7XG4gICAgLS1wcm9tby1oZWlnaHQ6IGNsYW1wKDIyMHB4LCAyMHZ3LCAyODBweCk7XG4gICAgLS1wcm9tby1zZWN0aW9uLXBhZGRpbmc6IGNsYW1wKDJyZW0sIDR2dywgM3JlbSk7XG4gIH1cblxuICAucHJvbW8tYmFubmVyIHtcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogc2Nyb2xsOyAvLyBCZXR0ZXIgcGVyZm9ybWFuY2Ugb24gbW9iaWxlXG4gICAgXG4gICAgLnByb21vLWNvbnRlbnQge1xuICAgICAgcGFkZGluZzogY2xhbXAoMXJlbSwgM3Z3LCAxLjVyZW0pO1xuICAgICAgXG4gICAgICAucHJvbW8tc3VidGl0bGUge1xuICAgICAgICBmb250LXNpemU6IGNsYW1wKDAuNzVyZW0sIDJ2dywgMC44NzVyZW0pO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5wcm9tby10aXRsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5wcm9tby1kZXNjcmlwdGlvbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICAgICAgZm9udC1zaXplOiBjbGFtcCgwLjg3NXJlbSwgMnZ3LCAxcmVtKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnByb21vLWJ1dHRvbiB7XG4gICAgICAgIHBhZGRpbmc6IDAuNjI1cmVtIDEuNXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIDpob3N0IHtcbiAgICAtLXByb21vLWhlaWdodDogY2xhbXAoMjAwcHgsIDE4dncsIDI1MHB4KTtcbiAgfVxuXG4gIC5wcm9tby1iYW5uZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgbWFyZ2luOiAycmVtIDA7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCkgc2NhbGUoMS4wMSk7XG4gICAgfVxuICAgIFxuICAgIC5jb250YWluZXIge1xuICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgIH1cbiAgICBcbiAgICAucHJvbW8tY29udGVudCB7XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgIFxuICAgICAgLnByb21vLXN1YnRpdGxlIHtcbiAgICAgICAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnByb21vLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnByb21vLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gSGlnaCBDb250cmFzdCAmIEFjY2Vzc2liaWxpdHkgU3VwcG9ydFxuQG1lZGlhIChwcmVmZXJzLWNvbnRyYXN0OiBoaWdoKSB7XG4gIDpob3N0IHtcbiAgICAtLXByb21vLW92ZXJsYXktZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAgIDEzNWRlZyxcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC45KSAwJSxcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC44KSAxMDAlXG4gICAgKTtcbiAgICAtLXByb21vLWNvbnRlbnQtYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB9XG4gIFxuICAucHJvbW8tYmFubmVyIC5wcm9tby1jb250ZW50IHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgXG4gICAgLnByb21vLXN1YnRpdGxlIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZjQwODE7XG4gICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogd2hpdGU7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIFxuICAgIC5wcm9tby10aXRsZSB7XG4gICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogd2hpdGU7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG59XG5cbi8vIFJlZHVjZWQgTW90aW9uIFN1cHBvcnRcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIDpob3N0IHtcbiAgICAtLXByb21vLXRyYW5zaXRpb24tcHJpbWFyeTogbm9uZTtcbiAgICAtLXByb21vLXRyYW5zaXRpb24tc2xvdzogbm9uZTtcbiAgfVxuICBcbiAgLnByb21vLWJhbm5lciB7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgLnByb21vLWNvbnRlbnQge1xuICAgICAgYW5pbWF0aW9uOiBub25lO1xuICAgICAgXG4gICAgICAucHJvbW8tc3VidGl0bGUge1xuICAgICAgICBhbmltYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5wcm9tby10aXRsZSB7XG4gICAgICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgICAgICAgXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBhbmltYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gRGFyayBNb2RlIFN1cHBvcnQgKEZ1dHVyZSBFbmhhbmNlbWVudClcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgOmhvc3Qge1xuICAgIC0tcHJvbW8tY29udGVudC1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgLS1wcm9tby1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCkgc2F0dXJhdGUoMjAwJSk7XG4gIH1cbiAgXG4gIC5wcm9tby1iYW5uZXIgLnByb21vLWNvbnRlbnQge1xuICAgIC5wcm9tby1kZXNjcmlwdGlvbiB7XG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 9477:
/*!*********************************************************************************************!*\
  !*** ./src/app/features/home/components/testimonial-slider/testimonial-slider.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestimonialSliderComponent: () => (/* binding */ TestimonialSliderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


function TestimonialSliderComponent_div_4_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const star_r5 = ctx.$implicit;
    const testimonial_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filled", star_r5 <= testimonial_r2.rating);
  }
}
const _c0 = function () {
  return [1, 2, 3, 4, 5];
};
function TestimonialSliderComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TestimonialSliderComponent_div_4_span_5_Template, 2, 2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 15)(9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const testimonial_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.currentIndex === i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\"", testimonial_r2.content, "\"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", testimonial_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", testimonial_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](testimonial_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", testimonial_r2.position, ", ", testimonial_r2.company, "");
  }
}
function TestimonialSliderComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestimonialSliderComponent_span_9_Template_span_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const i_r8 = restoredCtx.index;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.goToTestimonial(i_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r8 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r1.currentIndex === i_r8);
  }
}
class TestimonialSliderComponent {
  constructor() {
    this.testimonials = [{
      id: 1,
      name: 'John Smith',
      position: 'Marketing Director',
      company: 'Tech Solutions',
      image: 'assets/images/testimonials/person1.jpg',
      content: 'This e-commerce platform has completely transformed our shopping experience. The interface is intuitive, and the product quality exceeds expectations. Will definitely be a returning customer!',
      rating: 5
    }, {
      id: 2,
      name: 'Sarah Johnson',
      position: 'UX Designer',
      company: 'Creative Labs',
      image: 'assets/images/testimonials/person2.jpg',
      content: 'I\'ve tried many online stores, but this one stands out for its user-friendly design and seamless checkout process. The customer service is also top-notch!',
      rating: 4
    }, {
      id: 3,
      name: 'Michael Chen',
      position: 'Product Manager',
      company: 'Innovate Inc.',
      image: 'assets/images/testimonials/person3.jpg',
      content: 'The variety of products available here is impressive. I appreciate the detailed descriptions and honest reviews that help make informed purchasing decisions.',
      rating: 5
    }];
    this.currentIndex = 0;
  }
  ngOnInit() {
    this.startAutoSlide();
  }
  prevTestimonial() {
    this.currentIndex = this.currentIndex === 0 ? this.testimonials.length - 1 : this.currentIndex - 1;
  }
  nextTestimonial() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }
  goToTestimonial(index) {
    this.currentIndex = index;
  }
  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextTestimonial();
    }, 5000);
  }
  ngOnDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }
  static {
    this.ɵfac = function TestimonialSliderComponent_Factory(t) {
      return new (t || TestimonialSliderComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TestimonialSliderComponent,
      selectors: [["app-testimonial-slider"]],
      decls: 12,
      vars: 2,
      consts: [[1, "testimonial-section"], [1, "section-title"], [1, "testimonials-container"], ["class", "testimonial", 3, "active", 4, "ngFor", "ngForOf"], [1, "navigation"], [1, "nav-btn", "prev", 3, "click"], [1, "dots"], ["class", "dot", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "nav-btn", "next", 3, "click"], [1, "testimonial"], [1, "testimonial-content"], [1, "testimonial-rating"], ["class", "star", 3, "filled", 4, "ngFor", "ngForOf"], [1, "testimonial-author"], [1, "author-image", 3, "src", "alt"], [1, "author-info"], [1, "star"], [1, "dot", 3, "click"]],
      template: function TestimonialSliderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "h2", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "What Our Customers Say");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TestimonialSliderComponent_div_4_Template, 13, 10, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestimonialSliderComponent_Template_button_click_6_listener() {
            return ctx.prevTestimonial();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u276E");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TestimonialSliderComponent_span_9_Template, 1, 2, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestimonialSliderComponent_Template_button_click_10_listener() {
            return ctx.nextTestimonial();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u276F");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.testimonials);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.testimonials);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
      styles: [".testimonial-section[_ngcontent-%COMP%] {\n      padding: 60px 20px;\n      background-color: #f9f9f9;\n    }\n    \n    .section-title[_ngcontent-%COMP%] {\n      text-align: center;\n      margin-bottom: 40px;\n      font-size: 2rem;\n      color: #333;\n    }\n    \n    .testimonials-container[_ngcontent-%COMP%] {\n      max-width: 800px;\n      margin: 0 auto;\n      position: relative;\n    }\n    \n    .testimonial[_ngcontent-%COMP%] {\n      display: none;\n      flex-direction: column;\n      align-items: center;\n      text-align: center;\n      padding: 30px;\n      margin-bottom: 30px;\n    }\n    \n    .testimonial.active[_ngcontent-%COMP%] {\n      display: flex;\n    }\n    \n    .testimonial-content[_ngcontent-%COMP%] {\n      margin-bottom: 30px;\n    }\n    \n    .testimonial-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      font-size: 1.2rem;\n      line-height: 1.6;\n      font-style: italic;\n      color: #555;\n    }\n    \n    .testimonial-rating[_ngcontent-%COMP%] {\n      margin: 15px 0;\n    }\n    \n    .star[_ngcontent-%COMP%] {\n      font-size: 1.5rem;\n      color: #ddd;\n      margin: 0 2px;\n    }\n    \n    .star.filled[_ngcontent-%COMP%] {\n      color: #FFD700;\n    }\n    \n    .testimonial-author[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n    }\n    \n    .author-image[_ngcontent-%COMP%] {\n      width: 60px;\n      height: 60px;\n      border-radius: 50%;\n      object-fit: cover;\n      margin-right: 15px;\n    }\n    \n    .author-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n      margin: 0;\n      font-size: 1.1rem;\n      color: #333;\n    }\n    \n    .author-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      margin: 5px 0 0;\n      font-size: 0.9rem;\n      color: #777;\n    }\n    \n    .navigation[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      margin-top: 20px;\n    }\n    \n    .nav-btn[_ngcontent-%COMP%] {\n      background: none;\n      border: none;\n      font-size: 1.5rem;\n      color: #555;\n      cursor: pointer;\n      padding: 5px 10px;\n    }\n    \n    .nav-btn[_ngcontent-%COMP%]:hover {\n      color: #333;\n    }\n    \n    .dots[_ngcontent-%COMP%] {\n      display: flex;\n      margin: 0 15px;\n    }\n    \n    .dot[_ngcontent-%COMP%] {\n      width: 10px;\n      height: 10px;\n      border-radius: 50%;\n      background-color: #ddd;\n      margin: 0 5px;\n      cursor: pointer;\n      transition: background-color 0.3s;\n    }\n    \n    .dot.active[_ngcontent-%COMP%] {\n      background-color: #555;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvaG9tZS9jb21wb25lbnRzL3Rlc3RpbW9uaWFsLXNsaWRlci90ZXN0aW1vbmlhbC1zbGlkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtNQUNFLGtCQUFrQjtNQUNsQix5QkFBeUI7SUFDM0I7O0lBRUE7TUFDRSxrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLGVBQWU7TUFDZixXQUFXO0lBQ2I7O0lBRUE7TUFDRSxnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLGtCQUFrQjtJQUNwQjs7SUFFQTtNQUNFLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsbUJBQW1CO01BQ25CLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsbUJBQW1CO0lBQ3JCOztJQUVBO01BQ0UsYUFBYTtJQUNmOztJQUVBO01BQ0UsbUJBQW1CO0lBQ3JCOztJQUVBO01BQ0UsaUJBQWlCO01BQ2pCLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsV0FBVztJQUNiOztJQUVBO01BQ0UsY0FBYztJQUNoQjs7SUFFQTtNQUNFLGlCQUFpQjtNQUNqQixXQUFXO01BQ1gsYUFBYTtJQUNmOztJQUVBO01BQ0UsY0FBYztJQUNoQjs7SUFFQTtNQUNFLGFBQWE7TUFDYixtQkFBbUI7SUFDckI7O0lBRUE7TUFDRSxXQUFXO01BQ1gsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixpQkFBaUI7TUFDakIsa0JBQWtCO0lBQ3BCOztJQUVBO01BQ0UsU0FBUztNQUNULGlCQUFpQjtNQUNqQixXQUFXO0lBQ2I7O0lBRUE7TUFDRSxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLFdBQVc7SUFDYjs7SUFFQTtNQUNFLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLGdCQUFnQjtJQUNsQjs7SUFFQTtNQUNFLGdCQUFnQjtNQUNoQixZQUFZO01BQ1osaUJBQWlCO01BQ2pCLFdBQVc7TUFDWCxlQUFlO01BQ2YsaUJBQWlCO0lBQ25COztJQUVBO01BQ0UsV0FBVztJQUNiOztJQUVBO01BQ0UsYUFBYTtNQUNiLGNBQWM7SUFDaEI7O0lBRUE7TUFDRSxXQUFXO01BQ1gsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixzQkFBc0I7TUFDdEIsYUFBYTtNQUNiLGVBQWU7TUFDZixpQ0FBaUM7SUFDbkM7O0lBRUE7TUFDRSxzQkFBc0I7SUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAudGVzdGltb25pYWwtc2VjdGlvbiB7XG4gICAgICBwYWRkaW5nOiA2MHB4IDIwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgIH1cbiAgICBcbiAgICAuc2VjdGlvbi10aXRsZSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgfVxuICAgIFxuICAgIC50ZXN0aW1vbmlhbHMtY29udGFpbmVyIHtcbiAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgXG4gICAgLnRlc3RpbW9uaWFsIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cbiAgICBcbiAgICAudGVzdGltb25pYWwuYWN0aXZlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIFxuICAgIC50ZXN0aW1vbmlhbC1jb250ZW50IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgfVxuICAgIFxuICAgIC50ZXN0aW1vbmlhbC1jb250ZW50IHAge1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBsaW5lLWhlaWdodDogMS42O1xuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgY29sb3I6ICM1NTU7XG4gICAgfVxuICAgIFxuICAgIC50ZXN0aW1vbmlhbC1yYXRpbmcge1xuICAgICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgfVxuICAgIFxuICAgIC5zdGFyIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgY29sb3I6ICNkZGQ7XG4gICAgICBtYXJnaW46IDAgMnB4O1xuICAgIH1cbiAgICBcbiAgICAuc3Rhci5maWxsZWQge1xuICAgICAgY29sb3I6ICNGRkQ3MDA7XG4gICAgfVxuICAgIFxuICAgIC50ZXN0aW1vbmlhbC1hdXRob3Ige1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC5hdXRob3ItaW1hZ2Uge1xuICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICB9XG4gICAgXG4gICAgLmF1dGhvci1pbmZvIGg0IHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgfVxuICAgIFxuICAgIC5hdXRob3ItaW5mbyBwIHtcbiAgICAgIG1hcmdpbjogNXB4IDAgMDtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgY29sb3I6ICM3Nzc7XG4gICAgfVxuICAgIFxuICAgIC5uYXZpZ2F0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbiAgICBcbiAgICAubmF2LWJ0biB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBjb2xvcjogIzU1NTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIH1cbiAgICBcbiAgICAubmF2LWJ0bjpob3ZlciB7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICB9XG4gICAgXG4gICAgLmRvdHMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIG1hcmdpbjogMCAxNXB4O1xuICAgIH1cbiAgICBcbiAgICAuZG90IHtcbiAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG4gICAgfVxuICAgIFxuICAgIC5kb3QuYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}


/***/ }),

/***/ 6284:
/*!******************************************************!*\
  !*** ./src/app/features/home/home-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeRoutingModule: () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 3738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




const routes = [{
  path: '',
  component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}];
class HomeRoutingModule {
  static {
    this.ɵfac = function HomeRoutingModule_Factory(t) {
      return new (t || HomeRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: HomeRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 3738:
/*!*************************************************!*\
  !*** ./src/app/features/home/home.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _Users_stephanelkhoury_Documents_GitHub_Angular_masterclass_Ecommerce_Project_code_examples_angular_ecommerce_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 3942);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _store_selectors_product_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/selectors/product.selectors */ 5974);
/* harmony import */ var _store_actions_product_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/product.actions */ 3574);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/product.service */ 7359);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/cart.service */ 3661);
/* harmony import */ var _core_services_wishlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/wishlist.service */ 7935);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/notification.service */ 5567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/divider */ 4102);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tooltip */ 640);
/* harmony import */ var _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/loading-spinner/loading-spinner.component */ 4333);
/* harmony import */ var _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/product-card/product-card.component */ 6071);
/* harmony import */ var _components_hero_banner_hero_banner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/hero-banner/hero-banner.component */ 6437);
/* harmony import */ var _components_promo_banner_promo_banner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/promo-banner/promo-banner.component */ 1891);
/* harmony import */ var _components_category_card_category_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/category-card/category-card.component */ 149);
/* harmony import */ var _components_testimonial_slider_testimonial_slider_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/testimonial-slider/testimonial-slider.component */ 9477);
/* harmony import */ var _components_newsletter_signup_newsletter_signup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/newsletter-signup/newsletter-signup.component */ 8225);

 // Import select



// Importing product actions from the correct path





















function HomeComponent_app_loading_spinner_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-loading-spinner", 31);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("overlay", true);
  }
}
function HomeComponent_ng_container_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 34)(1, "app-product-card", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("productAddedToCart", function HomeComponent_ng_container_23_div_1_Template_app_product_card_productAddedToCart_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r11.addToCart($event));
    })("productAddedToWishlist", function HomeComponent_ng_container_23_div_1_Template_app_product_card_productAddedToWishlist_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r13.addToWishlist($event));
    })("productCompared", function HomeComponent_ng_container_23_div_1_Template_app_product_card_productCompared_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r12);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r14.addToCompare($event));
    })("productViewed", function HomeComponent_ng_container_23_div_1_Template_app_product_card_productViewed_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r12);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r15.openQuickView($event));
    })("productBoughtNow", function HomeComponent_ng_container_23_div_1_Template_app_product_card_productBoughtNow_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r12);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r16.buyNow($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("featured-main", i_r10 === 0)("featured-secondary", i_r10 === 1 || i_r10 === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("product", product_r9)("currencySymbol", "$")("size", i_r10 === 0 ? "large" : "medium")("showBuyNowButton", true)("showQuantityControl", false);
  }
}
function HomeComponent_ng_container_23_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 36)(1, "div", 37)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "inventory_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "No Featured Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "Check back soon for amazing featured products!");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, " Browse All Products ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
}
function HomeComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, HomeComponent_ng_container_23_div_1_Template, 2, 9, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, HomeComponent_ng_container_23_div_2_Template, 10, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const featuredProducts_r6 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", featuredProducts_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", featuredProducts_r6.length === 0);
  }
}
function HomeComponent_ng_container_70_app_category_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "app-category-card", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function HomeComponent_ng_container_70_app_category_card_1_Template_app_category_card_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r22);
      const category_r20 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r21.viewCategory(category_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("category", category_r20);
  }
}
function HomeComponent_ng_container_70_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 42)(1, "div", 37)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "category");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "No Categories Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "Categories will be available soon!");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
}
function HomeComponent_ng_container_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, HomeComponent_ng_container_70_app_category_card_1_Template, 1, 1, "app-category-card", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, HomeComponent_ng_container_70_div_2_Template, 8, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const categories_r17 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", categories_r17)("ngForTrackBy", ctx_r2.trackByCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", categories_r17.length === 0);
  }
}
function HomeComponent_ng_container_95_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 44)(1, "app-product-card", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("productAddedToCart", function HomeComponent_ng_container_95_div_1_Template_app_product_card_productAddedToCart_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r27.addToCart($event));
    })("productAddedToWishlist", function HomeComponent_ng_container_95_div_1_Template_app_product_card_productAddedToWishlist_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r28);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r29.addToWishlist($event));
    })("productCompared", function HomeComponent_ng_container_95_div_1_Template_app_product_card_productCompared_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r28);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r30.addToCompare($event));
    })("productViewed", function HomeComponent_ng_container_95_div_1_Template_app_product_card_productViewed_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r28);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r31.openQuickView($event));
    })("productBoughtNow", function HomeComponent_ng_container_95_div_1_Template_app_product_card_productBoughtNow_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r28);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r32.buyNow($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r26 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("product", product_r26)("layout", ctx_r24.viewMode === "list" ? "horizontal" : "vertical")("showBuyNowButton", true)("showQuantityControl", ctx_r24.viewMode === "list");
  }
}
function HomeComponent_ng_container_95_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 36)(1, "div", 37)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "new_releases");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "No New Arrivals Yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "Stay tuned for exciting new products!");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, " Browse Existing Products ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
}
function HomeComponent_ng_container_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, HomeComponent_ng_container_95_div_1_Template, 2, 4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, HomeComponent_ng_container_95_div_2_Template, 10, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const newArrivals_r23 = ctx.ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", newArrivals_r23)("ngForTrackBy", ctx_r3.trackByProduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", newArrivals_r23.length === 0);
  }
}
function HomeComponent_ng_container_112_div_1_div_1_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "emoji_events");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function HomeComponent_ng_container_112_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 51)(1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, HomeComponent_ng_container_112_div_1_div_1_mat_icon_3_Template, 2, 0, "mat-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](i_r37 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", i_r37 === 0);
  }
}
function HomeComponent_ng_container_112_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, HomeComponent_ng_container_112_div_1_div_1_Template, 4, 2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "app-product-card", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("productAddedToCart", function HomeComponent_ng_container_112_div_1_Template_app_product_card_productAddedToCart_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r41.addToCart($event));
    })("productAddedToWishlist", function HomeComponent_ng_container_112_div_1_Template_app_product_card_productAddedToWishlist_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r42);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r43.addToWishlist($event));
    })("productCompared", function HomeComponent_ng_container_112_div_1_Template_app_product_card_productCompared_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r42);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r44.addToCompare($event));
    })("productViewed", function HomeComponent_ng_container_112_div_1_Template_app_product_card_productViewed_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r42);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r45.openQuickView($event));
    })("productBoughtNow", function HomeComponent_ng_container_112_div_1_Template_app_product_card_productBoughtNow_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r42);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r46.buyNow($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r36 = ctx.$implicit;
    const i_r37 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵattribute"]("data-rank", i_r37 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", i_r37 < 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("product", product_r36)("showBuyNowButton", true);
  }
}
function HomeComponent_ng_container_112_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 36)(1, "div", 37)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "No Best Sellers Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "Best seller rankings will appear here soon!");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
}
function HomeComponent_ng_container_112_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, HomeComponent_ng_container_112_div_1_Template, 3, 4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, HomeComponent_ng_container_112_div_2_Template, 8, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const bestSellers_r33 = ctx.ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", bestSellers_r33)("ngForTrackBy", ctx_r4.trackByProduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", bestSellers_r33.length === 0);
  }
}
const _c0 = function () {
  return {
    sort: "newest"
  };
};
const _c1 = function () {
  return {
    sort: "popular"
  };
};
// Placeholder for selectNewArrivals - replace with your actual selector
// Ensure this selector is correctly defined in your product.selectors.ts
const selectNewArrivals = state => state.products.items; // Example: all products, then sorted
class HomeComponent {
  constructor(store, productService, router,
  // Inject Router
  cartService,
  // Inject CartService
  wishlistService,
  // Inject WishlistService
  notificationService // Inject NotificationService
  ) {
    this.store = store;
    this.productService = productService;
    this.router = router;
    this.cartService = cartService;
    this.wishlistService = wishlistService;
    this.notificationService = notificationService;
    // View and filter controls
    this.viewMode = 'grid';
    this.gridSize = 'medium';
    this.sortBy = 'newest';
    this.selectedCategory = 'all';
    this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('');
    // Filter and sorting options
    this.sortOptions = [{
      value: 'newest',
      label: 'Newest First'
    }, {
      value: 'name',
      label: 'Name A-Z'
    }, {
      value: 'price',
      label: 'Price Low to High'
    }, {
      value: 'rating',
      label: 'Highest Rated'
    }];
    this.categoryOptions = [{
      value: 'all',
      label: 'All Categories'
    }, {
      value: 'electronics',
      label: 'Electronics'
    }, {
      value: 'clothing',
      label: 'Clothing'
    }, {
      value: 'home',
      label: 'Home & Garden'
    }, {
      value: 'books',
      label: 'Books'
    }, {
      value: 'sports',
      label: 'Sports & Outdoors'
    }];
    // Stats data
    this.siteStats = {
      totalProducts: 1250,
      happyCustomers: 15000,
      yearsExperience: 10,
      countriesServed: 25
    };
    // Newsletter subscription
    this.newsletterEmail = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('');
    this.isSubscribing = false;
    this.store.dispatch(_store_actions_product_actions__WEBPACK_IMPORTED_MODULE_2__.loadProducts({
      params: {}
    })); // Dispatch action to load products
    this.store.dispatch(_store_actions_product_actions__WEBPACK_IMPORTED_MODULE_2__.loadCategories()); // Dispatch action to load categories
    this.featuredProducts$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_16__.select)(_store_selectors_product_selectors__WEBPACK_IMPORTED_MODULE_1__.selectFeaturedProducts),
    // Use your actual selector
    (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(products => products.slice(0, 8)));
    this.newArrivals$ = this.store.select(selectNewArrivals).pipe(
    // Using the placeholder
    (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(products => [...(products || [])].sort((a, b) => {
      const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
      const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
      return dateB - dateA;
    }).slice(0, 8)));
    this.topCategories$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_16__.select)(_store_selectors_product_selectors__WEBPACK_IMPORTED_MODULE_1__.selectFeaturedCategories),
    // Use your actual selector for featured categories
    (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(categories => (categories || []).slice(0, 6)));
    this.bestSellers$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_16__.select)(_store_selectors_product_selectors__WEBPACK_IMPORTED_MODULE_1__.selectAllProducts),
    // Example: select all products
    (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(products => [...(products || [])].filter(p => p.featured) // Or a more specific bestseller logic
    .sort((a, b) => (b.rating || 0) - (a.rating || 0)) // Example: sort by rating
    .slice(0, 8)));
    this.onSaleProducts$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_16__.select)(_store_selectors_product_selectors__WEBPACK_IMPORTED_MODULE_1__.selectAllProducts),
    // Example: select all products
    (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(products => [...(products || [])].filter(p => p.discountPrice && p.discountPrice < p.price).slice(0, 8)));
    this.loading$ = this.store.select(state => state.ui.loading);
  }
  ngOnInit() {}
  // View and filter methods
  setViewMode(mode) {
    this.viewMode = mode;
  }
  setGridSize(size) {
    this.gridSize = size;
  }
  onSortChange(sortBy) {
    this.sortBy = sortBy;
  }
  onCategoryChange(categoryId) {
    this.selectedCategory = categoryId;
  }
  onSearch(query) {
    if (query.trim()) {
      this.router.navigate(['/products'], {
        queryParams: {
          search: query
        }
      });
    }
  }
  clearSearch() {
    this.searchControl.setValue('');
  }
  // Product interaction methods
  addToCart(payload) {
    if ('product' in payload) {
      // Payload is { product: Product, quantity: number }
      this.cartService.addToCart(payload.product, payload.quantity);
      this.notificationService.show(`${payload.product.name} added to cart`);
    } else {
      // Payload is Product (fallback)
      this.cartService.addToCart(payload, 1);
      this.notificationService.show(`${payload.name} added to cart`);
    }
  }
  addToWishlist(product) {
    this.wishlistService.toggleWishlist(product.id).subscribe(added => {
      if (added) {
        this.notificationService.show(`${product.name} added to wishlist`);
      } else {
        this.notificationService.show(`${product.name} removed from wishlist`);
      }
    });
  }
  removeFromWishlist(product) {
    this.wishlistService.toggleWishlist(product.id).subscribe(() => {
      this.notificationService.show('Product removed from wishlist');
    });
  }
  openQuickView(product) {
    // Open quick view modal or navigate to product detail
    console.log('Quick view for:', product.name);
    // For now, navigate to product detail
    this.router.navigate(['/products', product.id]);
  }
  viewProductDetails(product) {
    this.router.navigate(['/products', product.id]);
  }
  onCategoryClick(category) {
    this.router.navigate(['/products'], {
      queryParams: {
        category: category.id
      }
    });
  }
  buyNow(payload) {
    // Add to cart and navigate to cart/checkout
    this.addToCart(payload);
    this.router.navigate(['/cart']);
  }
  // Helper methods for template
  trackByCategory(index, category) {
    return category.id || index;
  }
  trackByProduct(index, product) {
    return product.id || index;
  }
  filterByCategory(category) {
    this.selectedCategory = category;
    // Apply filtering logic here
    console.log('Filtering by category:', category);
  }
  sortProducts(sortBy) {
    this.sortBy = sortBy;
    // Apply sorting logic here
    console.log('Sorting by:', sortBy);
  }
  // Newsletter subscription
  subscribeToNewsletter() {
    var _this = this;
    return (0,_Users_stephanelkhoury_Documents_GitHub_Angular_masterclass_Ecommerce_Project_code_examples_angular_ecommerce_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const email = _this.newsletterEmail.value;
      if (!email) {
        _this.notificationService.error('Please enter a valid email address');
        return;
      }
      _this.isSubscribing = true;
      try {
        // Simulate API call
        yield new Promise(resolve => setTimeout(resolve, 1000));
        _this.notificationService.success('Successfully subscribed to newsletter!');
        _this.newsletterEmail.setValue('');
      } catch (error) {
        _this.notificationService.error('Failed to subscribe. Please try again.');
      } finally {
        _this.isSubscribing = false;
      }
    })();
  }
  // Search functionality
  searchProducts(query) {
    if (query.trim()) {
      this.router.navigate(['/products'], {
        queryParams: {
          search: query
        }
      });
    }
  }
  // Compare functionality
  addToCompare(product) {
    // Implement compare functionality here
    // For now, just show a notification
    this.notificationService.show(`${product.name} added to compare`);
    console.log('Product added to compare:', product);
  }
  // Category navigation
  viewCategory(category) {
    this.router.navigate(['/products'], {
      queryParams: {
        category: category.id
      }
    });
  }
  // Helper methods for wishlist and compare status
  isInWishlist(productId) {
    return this.wishlistService.isInWishlist(productId);
  }
  isInCompare(productId) {
    // return this.compareService.isInCompare(productId);
    return new rxjs__WEBPACK_IMPORTED_MODULE_18__.Observable(observer => observer.next(false)); // Placeholder
  }

  get compareCount$() {
    // return this.compareService.compareCount$;
    return new rxjs__WEBPACK_IMPORTED_MODULE_18__.Observable(observer => observer.next(0)); // Placeholder
  }

  get wishlistCount$() {
    return this.wishlistService.wishlistCount$;
  }
  static {
    this.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_16__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_services_product_service__WEBPACK_IMPORTED_MODULE_3__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_services_cart_service__WEBPACK_IMPORTED_MODULE_4__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_services_wishlist_service__WEBPACK_IMPORTED_MODULE_5__.WishlistService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__.NotificationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 154,
      vars: 26,
      consts: [[1, "home-container"], [3, "overlay", 4, "ngIf"], [3, "search"], [1, "section", "featured-products-section"], [1, "container"], [1, "section-header"], [1, "section-title-group"], [1, "section-title"], [1, "section-subtitle"], [1, "section-actions"], ["mat-button", "", 1, "filter-btn", 3, "matMenuTriggerFor"], ["routerLink", "/products", 1, "view-all-link"], [1, "products-grid", "featured-grid"], [4, "ngIf"], [1, "section", "stats-section"], [1, "stats-grid"], [1, "stat-item"], [1, "stat-content"], [1, "section", "categories-section"], [1, "categories-grid"], [1, "section", "new-arrivals-section"], [1, "title-icon"], [1, "view-toggle"], ["mat-icon-button", "", "matTooltip", "Grid view", 3, "click"], ["mat-icon-button", "", "matTooltip", "List view", 3, "click"], ["routerLink", "/products", 1, "view-all-link", 3, "queryParams"], [1, "products-grid"], [1, "section", "best-sellers-section"], [1, "products-grid", "best-sellers-grid"], ["filterMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], [3, "overlay"], ["class", "product-card-wrapper", 3, "featured-main", "featured-secondary", 4, "ngFor", "ngForOf"], ["class", "no-products-message", 4, "ngIf"], [1, "product-card-wrapper"], [3, "product", "currencySymbol", "size", "showBuyNowButton", "showQuantityControl", "productAddedToCart", "productAddedToWishlist", "productCompared", "productViewed", "productBoughtNow"], [1, "no-products-message"], [1, "empty-state"], ["mat-raised-button", "", "color", "primary", "routerLink", "/products"], [3, "category", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "no-categories-message", 4, "ngIf"], [3, "category", "click"], [1, "no-categories-message"], ["class", "product-card-wrapper new-arrival-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "product-card-wrapper", "new-arrival-item"], [3, "product", "layout", "showBuyNowButton", "showQuantityControl", "productAddedToCart", "productAddedToWishlist", "productCompared", "productViewed", "productBoughtNow"], ["mat-stroked-button", "", "color", "primary", "routerLink", "/products"], ["class", "product-card-wrapper bestseller-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "product-card-wrapper", "bestseller-item"], ["class", "bestseller-rank", 4, "ngIf"], [3, "product", "showBuyNowButton", "productAddedToCart", "productAddedToWishlist", "productCompared", "productViewed", "productBoughtNow"], [1, "bestseller-rank"], [1, "rank-number"], ["class", "crown-icon", 4, "ngIf"], [1, "crown-icon"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, HomeComponent_app_loading_spinner_1_Template, 1, 1, "app-loading-spinner", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "app-hero-banner", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("search", function HomeComponent_Template_app_hero_banner_search_3_listener($event) {
            return ctx.searchProducts($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "section", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "h2", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9, "Featured Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11, "Handpicked items from our premium collection");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "div", 9)(13, "button", 10)(14, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15, "tune");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, "Filter");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19, " View All ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21, "arrow_forward");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](23, HomeComponent_ng_container_23_Template, 3, 2, "ng-container", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](24, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "section", 14)(26, "div", 4)(27, "div", 15)(28, "div", 16)(29, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](30, "local_shipping");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "div", 17)(32, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](33, "Free Shipping");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](34, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](35, "On orders over $50");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "div", 16)(37, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](38, "replay");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "div", 17)(40, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](41, "30-Day Returns");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](42, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](43, "Hassle-free returns");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](44, "div", 16)(45, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](46, "support_agent");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](47, "div", 17)(48, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](49, "24/7 Support");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](50, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](51, "Expert customer service");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](52, "div", 16)(53, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](54, "security");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](55, "div", 17)(56, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](57, "Secure Payment");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](58, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](59, "100% secure transactions");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](60, "app-promo-banner");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](61, "section", 18)(62, "div", 4)(63, "div", 5)(64, "div", 6)(65, "h2", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](66, "Shop by Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](67, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](68, "Explore our diverse product categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](69, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](70, HomeComponent_ng_container_70_Template, 3, 3, "ng-container", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](71, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](72, "section", 20)(73, "div", 4)(74, "div", 5)(75, "div", 6)(76, "h2", 7)(77, "mat-icon", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](78, "fiber_new");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](79, " New Arrivals ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](80, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](81, "Fresh products just added to our collection");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](82, "div", 9)(83, "div", 22)(84, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_84_listener() {
            return ctx.setViewMode("grid");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](85, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](86, "grid_view");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](87, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_87_listener() {
            return ctx.setViewMode("list");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](88, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](89, "view_list");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](90, "a", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](91, " View All New ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](92, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](93, "arrow_forward");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](94, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](95, HomeComponent_ng_container_95_Template, 3, 3, "ng-container", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](96, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](97, "section", 27)(98, "div", 4)(99, "div", 5)(100, "div", 6)(101, "h2", 7)(102, "mat-icon", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](103, "trending_up");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](104, " Best Sellers ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](105, "p", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](106, "Most popular products loved by our customers");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](107, "a", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](108, " View All Best Sellers ");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](109, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](110, "arrow_forward");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](111, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](112, HomeComponent_ng_container_112_Template, 3, 3, "ng-container", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](113, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](114, "app-testimonial-slider")(115, "app-newsletter-signup");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](116, "mat-menu", null, 29)(118, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_118_listener() {
            return ctx.filterByCategory("all");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](119, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](120, "category");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](121, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](122, "All Categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](123, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_123_listener() {
            return ctx.filterByCategory("electronics");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](124, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](125, "devices");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](126, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](127, "Electronics");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](128, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_128_listener() {
            return ctx.filterByCategory("fashion");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](129, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](130, "checkroom");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](131, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](132, "Fashion");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](133, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_133_listener() {
            return ctx.filterByCategory("home");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](134, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](135, "home");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](136, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](137, "Home & Garden");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](138, "mat-divider");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](139, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_139_listener() {
            return ctx.sortProducts("price-low");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](140, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](141, "trending_down");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](142, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](143, "Price: Low to High");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](144, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_144_listener() {
            return ctx.sortProducts("price-high");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](145, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](146, "trending_up");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](147, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](148, "Price: High to Low");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](149, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_149_listener() {
            return ctx.sortProducts("rating");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](150, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](151, "star");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](152, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](153, "Highest Rated");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](117);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 14, ctx.loading$));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matMenuTriggerFor", _r5);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](24, 16, ctx.featuredProducts$));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](47);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](71, 18, ctx.topCategories$));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("active", ctx.viewMode === "grid");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("active", ctx.viewMode === "list");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](24, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassProp"]("list-view", ctx.viewMode === "list");
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](96, 20, ctx.newArrivals$));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](25, _c1));
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](113, 22, ctx.bestSellers$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuTrigger, _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__.MatDivider, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__.MatTooltip, _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_7__.LoadingSpinnerComponent, _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_8__.ProductCardComponent, _components_hero_banner_hero_banner_component__WEBPACK_IMPORTED_MODULE_9__.HeroBannerComponent, _components_promo_banner_promo_banner_component__WEBPACK_IMPORTED_MODULE_10__.PromoBannerComponent, _components_category_card_category_card_component__WEBPACK_IMPORTED_MODULE_11__.CategoryCardComponent, _components_testimonial_slider_testimonial_slider_component__WEBPACK_IMPORTED_MODULE_12__.TestimonialSliderComponent, _components_newsletter_signup_newsletter_signup_component__WEBPACK_IMPORTED_MODULE_13__.NewsletterSignupComponent, _angular_common__WEBPACK_IMPORTED_MODULE_20__.AsyncPipe],
      styles: [".home-container[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n\n.hero-section[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 70vh;\n  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);\n  display: flex;\n  align-items: center;\n  color: white;\n  overflow: hidden;\n}\n.hero-section[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"grain\" width=\"100\" height=\"100\" patternUnits=\"userSpaceOnUse\"><circle cx=\"50\" cy=\"50\" r=\"1\" fill=\"white\" opacity=\"0.05\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23grain)\"/></svg>');\n  pointer-events: none;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  max-width: 600px;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 700;\n  margin-bottom: var(--spacing-lg);\n  line-height: 1.2;\n}\n@media (max-width: 768px) {\n  .hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin-bottom: var(--spacing-xl);\n  opacity: 0.9;\n  line-height: 1.6;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-lg);\n}\n@media (max-width: 480px) {\n  .hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: var(--spacing-md);\n  }\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .btn-hero[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  font-size: 1.125rem;\n  font-weight: 600;\n  border-radius: var(--radius-lg);\n  text-decoration: none;\n  transition: all var(--transition-normal);\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .btn-hero.btn-primary[_ngcontent-%COMP%] {\n  background: white;\n  color: var(--primary-color);\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .btn-hero.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .btn-hero.btn-outline[_ngcontent-%COMP%] {\n  background: transparent;\n  color: white;\n  border: 2px solid white;\n}\n.hero-section[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   .hero-actions[_ngcontent-%COMP%]   .btn-hero.btn-outline[_ngcontent-%COMP%]:hover {\n  background: white;\n  color: var(--primary-color);\n  transform: translateY(-3px);\n}\n.hero-section[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -10%;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 50%;\n  height: 80%;\n  opacity: 0.1;\n}\n@media (max-width: 992px) {\n  .hero-section[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.section[_ngcontent-%COMP%] {\n  padding: var(--spacing-2xl) 0;\n  position: relative;\n}\n.section.featured-products[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n}\n.section.categories-section[_ngcontent-%COMP%] {\n  background: var(--bg-secondary);\n}\n.section.testimonials-section[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--gray-50) 0%, var(--gray-100) 100%);\n}\n.section.newsletter-section[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);\n  color: white;\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 0 var(--spacing-lg);\n}\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0 var(--spacing-md);\n  }\n}\n\n.section-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: var(--spacing-2xl);\n}\n.section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  margin-bottom: var(--spacing-md);\n  color: var(--text-primary);\n  position: relative;\n  display: inline-block;\n}\n.section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -8px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 80px;\n  height: 4px;\n  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));\n  border-radius: var(--radius-sm);\n}\n.section-header[_ngcontent-%COMP%]   .section-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: var(--text-secondary);\n  max-width: 600px;\n  margin: 0 auto;\n  line-height: 1.6;\n}\n.section-header[_ngcontent-%COMP%]   .view-all-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  color: var(--primary-color);\n  font-weight: 600;\n  text-decoration: none;\n  margin-top: var(--spacing-lg);\n  padding: var(--spacing-sm) var(--spacing-lg);\n  border: 2px solid var(--primary-color);\n  border-radius: var(--radius-lg);\n  transition: all var(--transition-fast);\n}\n.section-header[_ngcontent-%COMP%]   .view-all-link[_ngcontent-%COMP%]:hover {\n  background: var(--primary-color);\n  color: white;\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-md);\n}\n\n.featured-products-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: var(--spacing-xl);\n}\n@media (max-width: 768px) {\n  .featured-products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    gap: var(--spacing-lg);\n  }\n}\n\n.categories-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: var(--spacing-xl);\n}\n.categories-grid[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-xl);\n  overflow: hidden;\n  box-shadow: var(--shadow-sm);\n  transition: all var(--transition-normal);\n  text-decoration: none;\n  color: inherit;\n}\n.categories-grid[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: var(--shadow-xl);\n}\n.categories-grid[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]:hover   .category-image[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.categories-grid[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]   .category-image-container[_ngcontent-%COMP%] {\n  height: 200px;\n  overflow: hidden;\n  background: var(--gray-100);\n}\n.categories-grid[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]   .category-image-container[_ngcontent-%COMP%]   .category-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform var(--transition-slow);\n}\n.categories-grid[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%] {\n  padding: var(--spacing-lg);\n  text-align: center;\n}\n.categories-grid[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin-bottom: var(--spacing-sm);\n  color: var(--text-primary);\n}\n.categories-grid[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%]   .category-description[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 0.875rem;\n  margin-bottom: var(--spacing-md);\n}\n.categories-grid[_ngcontent-%COMP%]   .category-card[_ngcontent-%COMP%]   .category-content[_ngcontent-%COMP%]   .category-count[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-weight: 500;\n  font-size: 0.875rem;\n}\n\n.stats-section[_ngcontent-%COMP%] {\n  padding: var(--spacing-2xl) 0;\n  background: var(--primary-color);\n  color: white;\n}\n.stats-section[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: var(--spacing-xl);\n}\n.stats-section[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.stats-section[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-number[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 700;\n  margin-bottom: var(--spacing-sm);\n  background: linear-gradient(135deg, white, rgba(255, 255, 255, 0.8));\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.stats-section[_ngcontent-%COMP%]   .stats-grid[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  opacity: 0.9;\n}\n\n.benefits-section[_ngcontent-%COMP%] {\n  padding: var(--spacing-2xl) 0;\n  background: var(--bg-primary);\n}\n.benefits-section[_ngcontent-%COMP%]   .benefits-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: var(--spacing-xl);\n}\n.benefits-section[_ngcontent-%COMP%]   .benefits-grid[_ngcontent-%COMP%]   .benefit-item[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--spacing-lg);\n}\n.benefits-section[_ngcontent-%COMP%]   .benefits-grid[_ngcontent-%COMP%]   .benefit-item[_ngcontent-%COMP%]   .benefit-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto var(--spacing-lg);\n  color: white;\n  font-size: 2rem;\n}\n.benefits-section[_ngcontent-%COMP%]   .benefits-grid[_ngcontent-%COMP%]   .benefit-item[_ngcontent-%COMP%]   .benefit-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin-bottom: var(--spacing-sm);\n  color: var(--text-primary);\n}\n.benefits-section[_ngcontent-%COMP%]   .benefits-grid[_ngcontent-%COMP%]   .benefit-item[_ngcontent-%COMP%]   .benefit-description[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  line-height: 1.6;\n}\n\n.loading-section[_ngcontent-%COMP%] {\n  padding: var(--spacing-2xl) 0;\n  text-align: center;\n}\n.loading-section[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border: 4px solid var(--gray-200);\n  border-top-color: var(--primary-color);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto var(--spacing-lg);\n}\n.loading-section[_ngcontent-%COMP%]   .loading-text[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  font-size: 1.125rem;\n}\n\n@media (max-width: 768px) {\n  .section[_ngcontent-%COMP%] {\n    padding: var(--spacing-xl) 0;\n  }\n  .section-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .benefits-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: var(--spacing-lg);\n  }\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7QUFBRjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5RkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQURGO0FBR0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNFRBQUE7RUFDQSxvQkFBQTtBQURKO0FBSUU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUZKO0FBSUk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQUZOO0FBSU07RUFORjtJQU9JLGlCQUFBO0VBRE47QUFDRjtBQUlJO0VBQ0Usa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUZOO0FBS0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFITjtBQUtNO0VBSkY7SUFLSSxzQkFBQTtJQUNBLHNCQUFBO0VBRk47QUFDRjtBQUlNO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdDQUFBO0FBRlI7QUFJUTtFQUNFLGlCQUFBO0VBQ0EsMkJBQUE7QUFGVjtBQUlVO0VBQ0UsMkJBQUE7RUFDQSwwQ0FBQTtBQUZaO0FBTVE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUpWO0FBTVU7RUFDRSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7QUFKWjtBQVdFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBVEo7QUFXSTtFQVRGO0lBVUksYUFBQTtFQVJKO0FBQ0Y7O0FBYUE7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QUE7QUF4Q0Y7QUEwQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0NBQUE7QUF4Q0o7QUEyQ0U7RUFDRSw0QkFBQTtFQUNBLG1CQUFBO0FBekNKOztBQThDQTtFQUNFO0lBQ0UsNEJBQUE7RUEzQ0Y7RUE4Q0E7SUFDRSxlQUFBO0VBNUNGO0VBK0NBO0lBQ0UsMEJBQUE7SUFDQSxzQkFBQTtFQTdDRjtBQUNGO0FBZ0RBO0VBQ0U7SUFDRSx5QkFBQTtFQTlDRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9kZXJuIEhvbWUgQ29tcG9uZW50IFN0eWxlc1xuLmhvbWUtY29udGFpbmVyIHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4vLyBIZXJvIFNlY3Rpb24gU3R5bGVzXG4uaGVyby1zZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiA3MHZoO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSAwJSwgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSAxMDAlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBcbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPjxkZWZzPjxwYXR0ZXJuIGlkPVwiZ3JhaW5cIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIHBhdHRlcm5Vbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+PGNpcmNsZSBjeD1cIjUwXCIgY3k9XCI1MFwiIHI9XCIxXCIgZmlsbD1cIndoaXRlXCIgb3BhY2l0eT1cIjAuMDVcIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGZpbGw9XCJ1cmwoJTIzZ3JhaW4pXCIvPjwvc3ZnPicpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gIFxuICAuaGVyby1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMjtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIFxuICAgIC5oZXJvLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctbGcpO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgIFxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuaGVyby1zdWJ0aXRsZSB7XG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLXhsKTtcbiAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgfVxuICAgIFxuICAgIC5oZXJvLWFjdGlvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogdmFyKC0tc3BhY2luZy1sZyk7XG4gICAgICBcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IHZhcigtLXNwYWNpbmctbWQpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuYnRuLWhlcm8ge1xuICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tbm9ybWFsKTtcbiAgICAgICAgXG4gICAgICAgICYuYnRuLXByaW1hcnkge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICBcbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICYuYnRuLW91dGxpbmUge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICBcbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLmhlcm8taW1hZ2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLTEwJTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBvcGFjaXR5OiAwLjE7XG4gICAgXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG4vLyBTZWN0aW9uIFN0eWxlc1xuLnNlY3Rpb24ge1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLTJ4bCkgMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBcbiAgJi5mZWF0dXJlZC1wcm9kdWN0cyB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XG4gIH1cbiAgXG4gICYuY2F0ZWdvcmllcy1zZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xuICB9XG4gIFxuICAmLnRlc3RpbW9uaWFscy1zZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1ncmF5LTUwKSAwJSwgdmFyKC0tZ3JheS0xMDApIDEwMCUpO1xuICB9XG4gIFxuICAmLm5ld3NsZXR0ZXItc2VjdGlvbiB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHJpbWFyeS1jb2xvcikgMCUsIHZhcigtLXNlY29uZGFyeS1jb2xvcikgMTAwJSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG59XG5cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgdmFyKC0tc3BhY2luZy1sZyk7XG4gIFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBwYWRkaW5nOiAwIHZhcigtLXNwYWNpbmctbWQpO1xuICB9XG59XG5cbi5zZWN0aW9uLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy0yeGwpO1xuICBcbiAgLnNlY3Rpb24tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy1tZCk7XG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBcbiAgICAmOjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogLThweDtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLXByaW1hcnktY29sb3IpLCB2YXIoLS1zZWNvbmRhcnktY29sb3IpKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XG4gICAgfVxuICB9XG4gIFxuICAuc2VjdGlvbi1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgfVxuICBcbiAgLnZpZXctYWxsLWxpbmsge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2luZy1sZyk7XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1zbSkgdmFyKC0tc3BhY2luZy1sZyk7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1mYXN0KTtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gRmVhdHVyZWQgUHJvZHVjdHMgU2VjdGlvblxuLmZlYXR1cmVkLXByb2R1Y3RzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLXhsKTtcbiAgXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICAgIGdhcDogdmFyKC0tc3BhY2luZy1sZyk7XG4gIH1cbn1cblxuLy8gQ2F0ZWdvcmllcyBTZWN0aW9uXG4uY2F0ZWdvcmllcy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gIGdhcDogdmFyKC0tc3BhY2luZy14bCk7XG4gIFxuICAuY2F0ZWdvcnktY2FyZCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXhsKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tbm9ybWFsKTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCk7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cteGwpO1xuICAgICAgXG4gICAgICAuY2F0ZWdvcnktaW1hZ2Uge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5jYXRlZ29yeS1pbWFnZS1jb250YWluZXIge1xuICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5LTEwMCk7XG4gICAgICBcbiAgICAgIC5jYXRlZ29yeS1pbWFnZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gdmFyKC0tdHJhbnNpdGlvbi1zbG93KTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLmNhdGVnb3J5LWNvbnRlbnQge1xuICAgICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBcbiAgICAgIC5jYXRlZ29yeS1uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLXNtKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5jYXRlZ29yeS1kZXNjcmlwdGlvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctbWQpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuY2F0ZWdvcnktY291bnQge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFN0YXRpc3RpY3MgU2VjdGlvblxuLnN0YXRzLXNlY3Rpb24ge1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLTJ4bCkgMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgXG4gIC5zdGF0cy1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xuICAgIGdhcDogdmFyKC0tc3BhY2luZy14bCk7XG4gICAgXG4gICAgLnN0YXQtaXRlbSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBcbiAgICAgIC5zdGF0LW51bWJlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy1zbSk7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHdoaXRlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCkpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5zdGF0LWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICAgICAgb3BhY2l0eTogMC45O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBCZW5lZml0cyBTZWN0aW9uXG4uYmVuZWZpdHMtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctMnhsKSAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgXG4gIC5iZW5lZml0cy1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICAgIGdhcDogdmFyKC0tc3BhY2luZy14bCk7XG4gICAgXG4gICAgLmJlbmVmaXQtaXRlbSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcbiAgICAgIFxuICAgICAgLmJlbmVmaXQtaWNvbiB7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXByaW1hcnktY29sb3IpLCB2YXIoLS1zZWNvbmRhcnktY29sb3IpKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gdmFyKC0tc3BhY2luZy1sZyk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuYmVuZWZpdC10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy1zbSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuYmVuZWZpdC1kZXNjcmlwdGlvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIExvYWRpbmcgU3RhdGVzXG4ubG9hZGluZy1zZWN0aW9uIHtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy0yeGwpIDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gIC5sb2FkaW5nLXNwaW5uZXIge1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1ncmF5LTIwMCk7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgbWFyZ2luOiAwIGF1dG8gdmFyKC0tc3BhY2luZy1sZyk7XG4gIH1cbiAgXG4gIC5sb2FkaW5nLXRleHQge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgfVxufVxuXG4vLyBSZXNwb25zaXZlIERlc2lnblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXhsKSAwO1xuICB9XG4gIFxuICAuc2VjdGlvbi1oZWFkZXIgLnNlY3Rpb24tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuICBcbiAgLmJlbmVmaXRzLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogdmFyKC0tc3BhY2luZy1sZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
      changeDetection: 0
    });
  }
}


/***/ }),

/***/ 2829:
/*!**********************************************!*\
  !*** ./src/app/features/home/home.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeModule: () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 3887);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 6284);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ 3738);
/* harmony import */ var _components_hero_banner_hero_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/hero-banner/hero-banner.component */ 6437);
/* harmony import */ var _components_featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/featured-products/featured-products.component */ 3229);
/* harmony import */ var _components_promo_banner_promo_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/promo-banner/promo-banner.component */ 1891);
/* harmony import */ var _components_category_card_category_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/category-card/category-card.component */ 149);
/* harmony import */ var _components_testimonial_slider_testimonial_slider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/testimonial-slider/testimonial-slider.component */ 9477);
/* harmony import */ var _components_newsletter_signup_newsletter_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/newsletter-signup/newsletter-signup.component */ 8225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);










class HomeModule {
  static {
    this.ɵfac = function HomeModule_Factory(t) {
      return new (t || HomeModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
      type: HomeModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomeRoutingModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _components_hero_banner_hero_banner_component__WEBPACK_IMPORTED_MODULE_3__.HeroBannerComponent, _components_featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_4__.FeaturedProductsComponent, _components_promo_banner_promo_banner_component__WEBPACK_IMPORTED_MODULE_5__.PromoBannerComponent, _components_category_card_category_card_component__WEBPACK_IMPORTED_MODULE_6__.CategoryCardComponent, _components_testimonial_slider_testimonial_slider_component__WEBPACK_IMPORTED_MODULE_7__.TestimonialSliderComponent, _components_newsletter_signup_newsletter_signup_component__WEBPACK_IMPORTED_MODULE_8__.NewsletterSignupComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomeRoutingModule]
  });
})();

/***/ }),

/***/ 5974:
/*!******************************************************!*\
  !*** ./src/app/store/selectors/product.selectors.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   selectAllCategories: () => (/* binding */ selectAllCategories),
/* harmony export */   selectAllProducts: () => (/* binding */ selectAllProducts),
/* harmony export */   selectFeaturedCategories: () => (/* binding */ selectFeaturedCategories),
/* harmony export */   selectFeaturedProducts: () => (/* binding */ selectFeaturedProducts),
/* harmony export */   selectProductById: () => (/* binding */ selectProductById),
/* harmony export */   selectProductError: () => (/* binding */ selectProductError),
/* harmony export */   selectProductLoading: () => (/* binding */ selectProductLoading),
/* harmony export */   selectProductState: () => (/* binding */ selectProductState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 1383);

const selectProductState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('products');
const selectAllProducts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectProductState, state => state.items);
const selectProductLoading = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectProductState, state => state.loading);
const selectProductError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectProductState, state => state.error);
const selectFeaturedProducts = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectAllProducts, products => products.filter(product => product.featured));
const selectProductById = productId => (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectAllProducts, products => products.find(product => product.id === productId));
// Category Selectors (assuming categories are part of product state or their own feature state)
const selectAllCategories = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectProductState,
// Or a dedicated category state selector
state => state.categories || [] // Assuming categories are loaded here
);

const selectFeaturedCategories = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(selectAllCategories, categories => categories.filter(category => category.featured));

/***/ })

}]);
//# sourceMappingURL=src_app_features_home_home_module_ts.js.map