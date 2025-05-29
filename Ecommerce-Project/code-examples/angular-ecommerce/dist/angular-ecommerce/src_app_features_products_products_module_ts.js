"use strict";
(self["webpackChunkangular_ecommerce"] = self["webpackChunkangular_ecommerce"] || []).push([["src_app_features_products_products_module_ts"],{

/***/ 9066:
/*!*********************************************************************************!*\
  !*** ./src/app/features/products/components/add-review/add-review.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddReviewComponent: () => (/* binding */ AddReviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);





function AddReviewComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddReviewComponent_button_8_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const star_r1 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.setRating(star_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u2605 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const star_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.rating >= star_r1);
  }
}
const _c0 = function () {
  return [1, 2, 3, 4, 5];
};
class AddReviewComponent {
  constructor(fb) {
    this.fb = fb;
    this.reviewSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.rating = 0;
    this.reviewForm = this.fb.group({
      title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      content: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(10)]],
      rating: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.min(1)]]
    });
  }
  setRating(star) {
    this.rating = star;
    this.reviewForm.patchValue({
      rating: star
    });
  }
  onSubmit() {
    if (this.reviewForm.valid) {
      const review = {
        id: '',
        productId: this.productId,
        userId: '',
        userName: 'Anonymous User',
        rating: this.reviewForm.value.rating,
        title: this.reviewForm.value.title,
        comment: this.reviewForm.value.content,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      this.reviewSubmitted.emit(review);
      this.reviewForm.reset();
      this.rating = 0;
    }
  }
  static {
    this.ɵfac = function AddReviewComponent_Factory(t) {
      return new (t || AddReviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddReviewComponent,
      selectors: [["app-add-review"]],
      inputs: {
        productId: "productId"
      },
      outputs: {
        reviewSubmitted: "reviewSubmitted"
      },
      decls: 19,
      vars: 4,
      consts: [[1, "add-review-form"], [3, "formGroup", "ngSubmit"], [1, "form-field"], [1, "star-rating-input"], ["type", "button", 3, "active", "click", 4, "ngFor", "ngForOf"], ["for", "title"], ["type", "text", "id", "title", "formControlName", "title", "placeholder", "Summarize your review"], ["for", "content"], ["id", "content", "formControlName", "content", "rows", "4", "placeholder", "Tell others about your experience with this product"], ["type", "submit", 3, "disabled"], ["type", "button", 3, "click"]],
      template: function AddReviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Write a Review");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddReviewComponent_Template_form_ngSubmit_3_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Rating");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddReviewComponent_button_8_Template, 2, 2, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2)(10, "label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Review Title");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2)(14, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Review");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "textarea", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Submit Review");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.reviewForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.reviewForm.invalid);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
      styles: [".add-review-form[_ngcontent-%COMP%] {\n      margin-top: 24px;\n      padding: 24px;\n      border: 1px solid #e0e0e0;\n      border-radius: 8px;\n    }\n    \n    .form-field[_ngcontent-%COMP%] {\n      margin-bottom: 16px;\n    }\n    \n    .form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n      display: block;\n      margin-bottom: 4px;\n      font-weight: 500;\n    }\n    \n    .form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n      width: 100%;\n      padding: 8px;\n      border: 1px solid #ccc;\n      border-radius: 4px;\n    }\n    \n    .star-rating-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n      background: none;\n      border: none;\n      font-size: 24px;\n      color: #ddd;\n      cursor: pointer;\n      margin-right: 4px;\n    }\n    \n    .star-rating-input[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n      color: #ffc107;\n    }\n    \n    button[type=\"submit\"][_ngcontent-%COMP%] {\n      background-color: #3f51b5;\n      color: white;\n      padding: 12px 24px;\n      border: none;\n      border-radius: 4px;\n      cursor: pointer;\n    }\n    \n    button[type=\"submit\"][_ngcontent-%COMP%]:disabled {\n      background-color: #ccc;\n      cursor: not-allowed;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcHJvZHVjdHMvY29tcG9uZW50cy9hZGQtcmV2aWV3L2FkZC1yZXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtNQUNFLGdCQUFnQjtNQUNoQixhQUFhO01BQ2IseUJBQXlCO01BQ3pCLGtCQUFrQjtJQUNwQjs7SUFFQTtNQUNFLG1CQUFtQjtJQUNyQjs7SUFFQTtNQUNFLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsZ0JBQWdCO0lBQ2xCOztJQUVBOztNQUVFLFdBQVc7TUFDWCxZQUFZO01BQ1osc0JBQXNCO01BQ3RCLGtCQUFrQjtJQUNwQjs7SUFFQTtNQUNFLGdCQUFnQjtNQUNoQixZQUFZO01BQ1osZUFBZTtNQUNmLFdBQVc7TUFDWCxlQUFlO01BQ2YsaUJBQWlCO0lBQ25COztJQUVBO01BQ0UsY0FBYztJQUNoQjs7SUFFQTtNQUNFLHlCQUF5QjtNQUN6QixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsZUFBZTtJQUNqQjs7SUFFQTtNQUNFLHNCQUFzQjtNQUN0QixtQkFBbUI7SUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuYWRkLXJldmlldy1mb3JtIHtcbiAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICBwYWRkaW5nOiAyNHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB9XG4gICAgXG4gICAgLmZvcm0tZmllbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG4gICAgXG4gICAgLmZvcm0tZmllbGQgbGFiZWwge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgICBcbiAgICAuZm9ybS1maWVsZCBpbnB1dCxcbiAgICAuZm9ybS1maWVsZCB0ZXh0YXJlYSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuICAgIFxuICAgIC5zdGFyLXJhdGluZy1pbnB1dCBidXR0b24ge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGNvbG9yOiAjZGRkO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgfVxuICAgIFxuICAgIC5zdGFyLXJhdGluZy1pbnB1dCBidXR0b24uYWN0aXZlIHtcbiAgICAgIGNvbG9yOiAjZmZjMTA3O1xuICAgIH1cbiAgICBcbiAgICBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogMTJweCAyNHB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICBcbiAgICBidXR0b25bdHlwZT1cInN1Ym1pdFwiXTpkaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}


/***/ }),

/***/ 1328:
/*!***************************************************************************************!*\
  !*** ./src/app/features/products/components/category-menu/category-menu.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryMenuComponent: () => (/* binding */ CategoryMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);



function CategoryMenuComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryMenuComponent_div_3_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const category_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onCategorySelect(category_r1.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.selectedCategory === category_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r1.name, " ");
  }
}
class CategoryMenuComponent {
  constructor() {
    this.categories = [];
    this.selectedCategory = null;
    this.categorySelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onCategorySelect(categoryId) {
    this.categorySelected.emit(categoryId);
  }
  static {
    this.ɵfac = function CategoryMenuComponent_Factory(t) {
      return new (t || CategoryMenuComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CategoryMenuComponent,
      selectors: [["app-category-menu"]],
      inputs: {
        categories: "categories",
        selectedCategory: "selectedCategory"
      },
      outputs: {
        categorySelected: "categorySelected"
      },
      decls: 4,
      vars: 3,
      consts: [[1, "category-menu"], [1, "category-item", 3, "click"], ["class", "category-item", 3, "active", "click", 4, "ngFor", "ngForOf"]],
      template: function CategoryMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryMenuComponent_Template_div_click_1_listener() {
            return ctx.onCategorySelect(null);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " All Categories ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CategoryMenuComponent_div_3_Template, 2, 3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", !ctx.selectedCategory);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
      styles: [".category-menu[_ngcontent-%COMP%] {\n      display: flex;\n      flex-wrap: wrap;\n      gap: 8px;\n      margin-bottom: 16px;\n    }\n    \n    .category-item[_ngcontent-%COMP%] {\n      padding: 8px 16px;\n      border: 1px solid #ddd;\n      border-radius: 20px;\n      cursor: pointer;\n      transition: all 0.3s ease;\n      background-color: white;\n    }\n    \n    .category-item[_ngcontent-%COMP%]:hover {\n      background-color: #f5f5f5;\n    }\n    \n    .category-item.active[_ngcontent-%COMP%] {\n      background-color: #3f51b5;\n      color: white;\n      border-color: #3f51b5;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcHJvZHVjdHMvY29tcG9uZW50cy9jYXRlZ29yeS1tZW51L2NhdGVnb3J5LW1lbnUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7SUFDSTtNQUNFLGFBQWE7TUFDYixlQUFlO01BQ2YsUUFBUTtNQUNSLG1CQUFtQjtJQUNyQjs7SUFFQTtNQUNFLGlCQUFpQjtNQUNqQixzQkFBc0I7TUFDdEIsbUJBQW1CO01BQ25CLGVBQWU7TUFDZix5QkFBeUI7TUFDekIsdUJBQXVCO0lBQ3pCOztJQUVBO01BQ0UseUJBQXlCO0lBQzNCOztJQUVBO01BQ0UseUJBQXlCO01BQ3pCLFlBQVk7TUFDWixxQkFBcUI7SUFDdkIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuY2F0ZWdvcnktbWVudSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgZ2FwOiA4cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cbiAgICBcbiAgICAuY2F0ZWdvcnktaXRlbSB7XG4gICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBcbiAgICAuY2F0ZWdvcnktaXRlbTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIH1cbiAgICBcbiAgICAuY2F0ZWdvcnktaXRlbS5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlci1jb2xvcjogIzNmNTFiNTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}


/***/ }),

/***/ 9996:
/*!*******************************************************************************************!*\
  !*** ./src/app/features/products/components/product-filters/product-filters.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductFiltersComponent: () => (/* binding */ ProductFiltersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);




function ProductFiltersComponent_div_22_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r3 = ctx.$implicit;
    const star_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("filled", i_r3 <= star_r1);
  }
}
const _c0 = function () {
  return [1, 2, 3, 4, 5];
};
function ProductFiltersComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductFiltersComponent_div_22_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const star_r1 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.onRatingChange(star_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductFiltersComponent_div_22_span_2_Template, 2, 2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const star_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx_r0.rating === star_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", star_r1, "+ stars");
  }
}
const _c1 = function () {
  return [5, 4, 3, 2, 1];
};
class ProductFiltersComponent {
  constructor() {
    this.minPrice = 0;
    this.maxPrice = 1000;
    this.rating = 0;
    this.priceRangeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.ratingChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.filtersCleared = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.maxPossiblePrice = 2000;
  }
  onMinPriceChange(value) {
    const min = Math.min(value, this.maxPrice);
    this.priceRangeChanged.emit({
      min,
      max: this.maxPrice
    });
  }
  onMaxPriceChange(value) {
    const max = Math.max(value, this.minPrice);
    this.priceRangeChanged.emit({
      min: this.minPrice,
      max
    });
  }
  onRatingChange(rating) {
    this.ratingChanged.emit(rating);
  }
  clearFilters() {
    this.filtersCleared.emit();
  }
  static {
    this.ɵfac = function ProductFiltersComponent_Factory(t) {
      return new (t || ProductFiltersComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductFiltersComponent,
      selectors: [["app-product-filters"]],
      inputs: {
        minPrice: "minPrice",
        maxPrice: "maxPrice",
        rating: "rating"
      },
      outputs: {
        priceRangeChanged: "priceRangeChanged",
        ratingChanged: "ratingChanged",
        filtersCleared: "filtersCleared"
      },
      decls: 25,
      vars: 10,
      consts: [[1, "filters-container"], [1, "filter-section"], [1, "price-inputs"], [1, "input-group"], ["for", "min-price"], ["type", "number", "id", "min-price", "min", "0", 3, "ngModel", "ngModelChange"], ["for", "max-price"], ["type", "number", "id", "max-price", "min", "0", 3, "ngModel", "ngModelChange"], [1, "price-slider"], ["type", "range", 1, "slider", "min-slider", 3, "min", "max", "ngModel", "ngModelChange"], ["type", "range", 1, "slider", "max-slider", 3, "min", "max", "ngModel", "ngModelChange"], [1, "rating-filter"], ["class", "rating-option", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "clear-filters-btn", 3, "click"], [1, "rating-option", 3, "click"], [1, "stars"], ["class", "star", 3, "filled", 4, "ngFor", "ngForOf"], [1, "rating-text"], [1, "star"]],
      template: function ProductFiltersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Filters");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1)(4, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Price Range");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2)(7, "div", 3)(8, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Min");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductFiltersComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.onMinPriceChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3)(12, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Max");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductFiltersComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.onMaxPriceChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8)(16, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductFiltersComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.onMinPriceChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductFiltersComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.onMaxPriceChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1)(19, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Rating");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProductFiltersComponent_div_22_Template, 5, 5, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductFiltersComponent_Template_button_click_23_listener() {
            return ctx.clearFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Clear All Filters");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.minPrice);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.maxPrice);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", 0)("max", ctx.maxPossiblePrice)("ngModel", ctx.minPrice);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", 0)("max", ctx.maxPossiblePrice)("ngModel", ctx.maxPrice);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RangeValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel],
      styles: [".filters-container[_ngcontent-%COMP%] {\n      background-color: white;\n      border-radius: 8px;\n      padding: 20px;\n      box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n    }\n    \n    h3[_ngcontent-%COMP%] {\n      margin-top: 0;\n      margin-bottom: 20px;\n      font-size: 1.2rem;\n      color: #333;\n      border-bottom: 1px solid #eee;\n      padding-bottom: 10px;\n    }\n    \n    .filter-section[_ngcontent-%COMP%] {\n      margin-bottom: 25px;\n    }\n    \n    h4[_ngcontent-%COMP%] {\n      margin-top: 0;\n      margin-bottom: 15px;\n      font-size: 1rem;\n      color: #555;\n    }\n    \n    .price-inputs[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: space-between;\n      margin-bottom: 15px;\n    }\n    \n    .input-group[_ngcontent-%COMP%] {\n      width: 48%;\n    }\n    \n    label[_ngcontent-%COMP%] {\n      display: block;\n      margin-bottom: 5px;\n      font-size: 0.8rem;\n      color: #777;\n    }\n    \n    input[type=\"number\"][_ngcontent-%COMP%] {\n      width: 100%;\n      padding: 8px;\n      border: 1px solid #ddd;\n      border-radius: 4px;\n    }\n    \n    .price-slider[_ngcontent-%COMP%] {\n      position: relative;\n      height: 30px;\n    }\n    \n    .slider[_ngcontent-%COMP%] {\n      position: absolute;\n      width: 100%;\n      top: 0;\n      appearance: none;\n      height: 2px;\n      background: #ddd;\n      outline: none;\n    }\n    \n    .slider[_ngcontent-%COMP%]::-webkit-slider-thumb {\n      appearance: none;\n      width: 15px;\n      height: 15px;\n      border-radius: 50%;\n      background: #1976d2;\n      cursor: pointer;\n      z-index: 10;\n      position: relative;\n    }\n    \n    .rating-filter[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n    }\n    \n    .rating-option[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      padding: 8px;\n      cursor: pointer;\n      border-radius: 4px;\n      margin-bottom: 5px;\n    }\n    \n    .rating-option[_ngcontent-%COMP%]:hover {\n      background-color: #f5f5f5;\n    }\n    \n    .rating-option.selected[_ngcontent-%COMP%] {\n      background-color: #e3f2fd;\n    }\n    \n    .stars[_ngcontent-%COMP%] {\n      margin-right: 10px;\n    }\n    \n    .star[_ngcontent-%COMP%] {\n      color: #ddd;\n      font-size: 1rem;\n    }\n    \n    .star.filled[_ngcontent-%COMP%] {\n      color: #FFD700;\n    }\n    \n    .rating-text[_ngcontent-%COMP%] {\n      font-size: 0.9rem;\n      color: #666;\n    }\n    \n    .clear-filters-btn[_ngcontent-%COMP%] {\n      width: 100%;\n      padding: 10px;\n      background-color: transparent;\n      border: 1px solid #ddd;\n      border-radius: 4px;\n      color: #666;\n      font-size: 0.9rem;\n      cursor: pointer;\n      transition: all 0.3s;\n    }\n    \n    .clear-filters-btn[_ngcontent-%COMP%]:hover {\n      background-color: #f5f5f5;\n      border-color: #bbb;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcHJvZHVjdHMvY29tcG9uZW50cy9wcm9kdWN0LWZpbHRlcnMvcHJvZHVjdC1maWx0ZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0k7TUFDRSx1QkFBdUI7TUFDdkIsa0JBQWtCO01BQ2xCLGFBQWE7TUFDYixxQ0FBcUM7SUFDdkM7O0lBRUE7TUFDRSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLGlCQUFpQjtNQUNqQixXQUFXO01BQ1gsNkJBQTZCO01BQzdCLG9CQUFvQjtJQUN0Qjs7SUFFQTtNQUNFLG1CQUFtQjtJQUNyQjs7SUFFQTtNQUNFLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLFdBQVc7SUFDYjs7SUFFQTtNQUNFLGFBQWE7TUFDYiw4QkFBOEI7TUFDOUIsbUJBQW1CO0lBQ3JCOztJQUVBO01BQ0UsVUFBVTtJQUNaOztJQUVBO01BQ0UsY0FBYztNQUNkLGtCQUFrQjtNQUNsQixpQkFBaUI7TUFDakIsV0FBVztJQUNiOztJQUVBO01BQ0UsV0FBVztNQUNYLFlBQVk7TUFDWixzQkFBc0I7TUFDdEIsa0JBQWtCO0lBQ3BCOztJQUVBO01BQ0Usa0JBQWtCO01BQ2xCLFlBQVk7SUFDZDs7SUFFQTtNQUNFLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsTUFBTTtNQUNOLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsZ0JBQWdCO01BQ2hCLGFBQWE7SUFDZjs7SUFFQTtNQUNFLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLFdBQVc7TUFDWCxrQkFBa0I7SUFDcEI7O0lBRUE7TUFDRSxhQUFhO01BQ2Isc0JBQXNCO0lBQ3hCOztJQUVBO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixZQUFZO01BQ1osZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixrQkFBa0I7SUFDcEI7O0lBRUE7TUFDRSx5QkFBeUI7SUFDM0I7O0lBRUE7TUFDRSx5QkFBeUI7SUFDM0I7O0lBRUE7TUFDRSxrQkFBa0I7SUFDcEI7O0lBRUE7TUFDRSxXQUFXO01BQ1gsZUFBZTtJQUNqQjs7SUFFQTtNQUNFLGNBQWM7SUFDaEI7O0lBRUE7TUFDRSxpQkFBaUI7TUFDakIsV0FBVztJQUNiOztJQUVBO01BQ0UsV0FBVztNQUNYLGFBQWE7TUFDYiw2QkFBNkI7TUFDN0Isc0JBQXNCO01BQ3RCLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsaUJBQWlCO01BQ2pCLGVBQWU7TUFDZixvQkFBb0I7SUFDdEI7O0lBRUE7TUFDRSx5QkFBeUI7TUFDekIsa0JBQWtCO0lBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLmZpbHRlcnMtY29udGFpbmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgfVxuICAgIFxuICAgIGgzIHtcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIFxuICAgIC5maWx0ZXItc2VjdGlvbiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIH1cbiAgICBcbiAgICBoNCB7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGNvbG9yOiAjNTU1O1xuICAgIH1cbiAgICBcbiAgICAucHJpY2UtaW5wdXRzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cbiAgICBcbiAgICAuaW5wdXQtZ3JvdXAge1xuICAgICAgd2lkdGg6IDQ4JTtcbiAgICB9XG4gICAgXG4gICAgbGFiZWwge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIGNvbG9yOiAjNzc3O1xuICAgIH1cbiAgICBcbiAgICBpbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG4gICAgXG4gICAgLnByaWNlLXNsaWRlciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICAgIFxuICAgIC5zbGlkZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0b3A6IDA7XG4gICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZGRkO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgLnNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZDogIzE5NzZkMjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICBcbiAgICAucmF0aW5nLWZpbHRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICAgXG4gICAgLnJhdGluZy1vcHRpb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuICAgIFxuICAgIC5yYXRpbmctb3B0aW9uOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgfVxuICAgIFxuICAgIC5yYXRpbmctb3B0aW9uLnNlbGVjdGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2YyZmQ7XG4gICAgfVxuICAgIFxuICAgIC5zdGFycyB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIFxuICAgIC5zdGFyIHtcbiAgICAgIGNvbG9yOiAjZGRkO1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgICBcbiAgICAuc3Rhci5maWxsZWQge1xuICAgICAgY29sb3I6ICNGRkQ3MDA7XG4gICAgfVxuICAgIFxuICAgIC5yYXRpbmctdGV4dCB7XG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgIH1cbiAgICBcbiAgICAuY2xlYXItZmlsdGVycy1idG4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgY29sb3I6ICM2NjY7XG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIH1cbiAgICBcbiAgICAuY2xlYXItZmlsdGVycy1idG46aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgIGJvcmRlci1jb2xvcjogI2JiYjtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}


/***/ }),

/***/ 8082:
/*!*************************************************************************************!*\
  !*** ./src/app/features/products/components/product-grid/product-grid.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductGridComponent: () => (/* binding */ ProductGridComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/product-card/product-card.component */ 6071);





function ProductGridComponent_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "app-product-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("productAddedToCart", function ProductGridComponent_ng_container_1_div_1_Template_app_product_card_productAddedToCart_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.onAddToCart($event));
    })("productAddedToWishlist", function ProductGridComponent_ng_container_1_div_1_Template_app_product_card_productAddedToWishlist_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const product_r4 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.onAddToWishlist(product_r4));
    })("productViewed", function ProductGridComponent_ng_container_1_div_1_Template_app_product_card_productViewed_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const product_r4 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.onViewDetails(product_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("product", product_r4);
  }
}
function ProductGridComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductGridComponent_ng_container_1_div_1_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.products);
  }
}
function ProductGridComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "sentiment_very_dissatisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No Products Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "We couldn't find any products matching your criteria.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class ProductGridComponent {
  constructor() {
    this.products = [];
    this.viewMode = 'grid';
    this.addToCart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.addToWishlist = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.viewDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
  onAddToCart(event) {
    this.addToCart.emit(event.product);
  }
  onAddToWishlist(product) {
    this.addToWishlist.emit(product);
  }
  onViewDetails(product) {
    this.viewDetails.emit(product);
  }
  static {
    this.ɵfac = function ProductGridComponent_Factory(t) {
      return new (t || ProductGridComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProductGridComponent,
      selectors: [["app-product-grid"]],
      inputs: {
        products: "products",
        viewMode: "viewMode"
      },
      outputs: {
        addToCart: "addToCart",
        addToWishlist: "addToWishlist",
        viewDetails: "viewDetails"
      },
      decls: 4,
      vars: 4,
      consts: [[1, "product-grid-container"], [4, "ngIf", "ngIfElse"], ["noProducts", ""], ["class", "product-item", 4, "ngFor", "ngForOf"], [1, "product-item"], [3, "product", "productAddedToCart", "productAddedToWishlist", "productViewed"], [1, "no-products"]],
      template: function ProductGridComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductGridComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProductGridComponent_ng_template_2_Template, 7, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("list-view", ctx.viewMode === "list");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.products && ctx.products.length > 0)("ngIfElse", _r1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_0__.ProductCardComponent],
      styles: ["[_ngcontent-%COMP%]:root {\n  --product-grid-gap: 1.5rem;\n  --product-grid-gap-lg: 2rem;\n  --product-grid-gap-sm: 1rem;\n  --product-card-border-radius: 16px;\n  --product-card-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  --product-card-shadow-hover: 0 8px 32px rgba(0, 0, 0, 0.16);\n  --product-transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.product-grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: var(--product-grid-gap);\n  padding: 0;\n  position: relative;\n}\n.product-grid-container[_ngcontent-%COMP%]:not(.list-view)   .product-item[_ngcontent-%COMP%] {\n  transform: translateY(0);\n  transition: var(--product-transition);\n}\n.product-grid-container[_ngcontent-%COMP%]:not(.list-view)   .product-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n}\n.product-grid-container[_ngcontent-%COMP%]:not(.list-view)   .product-item[_ngcontent-%COMP%]:hover     app-product-card .product-card {\n  box-shadow: var(--product-card-shadow-hover);\n  border-color: rgba(99, 102, 241, 0.2);\n}\n.product-grid-container[_ngcontent-%COMP%]:not(.list-view)   .product-item[_ngcontent-%COMP%]     app-product-card .product-card {\n  height: 100%;\n  border-radius: var(--product-card-border-radius);\n  box-shadow: var(--product-card-shadow);\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  transition: var(--product-transition);\n  background: linear-gradient(145deg, #ffffff 0%, #fafafa 100%);\n  overflow: hidden;\n}\n.product-grid-container[_ngcontent-%COMP%]:not(.list-view)   .product-item[_ngcontent-%COMP%]     app-product-card .product-card:hover .product-image-container .product-image {\n  transform: scale(1.05);\n}\n.product-grid-container[_ngcontent-%COMP%]:not(.list-view)   .product-item[_ngcontent-%COMP%]     app-product-card .product-card .product-image-container {\n  position: relative;\n  overflow: hidden;\n  border-radius: var(--product-card-border-radius) var(--product-card-border-radius) 0 0;\n}\n.product-grid-container[_ngcontent-%COMP%]:not(.list-view)   .product-item[_ngcontent-%COMP%]     app-product-card .product-card .product-image-container .product-image {\n  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  object-fit: cover;\n}\n.product-grid-container[_ngcontent-%COMP%]:not(.list-view)   .product-item[_ngcontent-%COMP%]     app-product-card .product-card .product-image-container::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(to bottom, transparent 0%, transparent 70%, rgba(0, 0, 0, 0.1) 100%);\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.product-grid-container[_ngcontent-%COMP%]:not(.list-view)   .product-item[_ngcontent-%COMP%]     app-product-card .product-card .product-image-container:hover::after {\n  opacity: 1;\n}\n.product-grid-container[_ngcontent-%COMP%]:not(.list-view)   .product-item[_ngcontent-%COMP%]     app-product-card .product-card mat-card-content {\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  flex-grow: 1;\n}\n.product-grid-container[_ngcontent-%COMP%]:not(.list-view)   .product-item[_ngcontent-%COMP%]     app-product-card .product-card mat-card-content .product-name {\n  font-weight: 600;\n  font-size: 1.1rem;\n  line-height: 1.4;\n  color: #1f2937;\n  margin: 0;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.product-grid-container[_ngcontent-%COMP%]:not(.list-view)   .product-item[_ngcontent-%COMP%]     app-product-card .product-card mat-card-content .product-description {\n  color: #6b7280;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  margin: 0;\n}\n.product-grid-container[_ngcontent-%COMP%]:not(.list-view)   .product-item[_ngcontent-%COMP%]     app-product-card .product-card mat-card-content .product-price {\n  font-weight: 700;\n  font-size: 1.25rem;\n  color: #059669;\n  margin: auto 0 0 0;\n}\n.product-grid-container[_ngcontent-%COMP%]:not(.list-view)   .product-item[_ngcontent-%COMP%]     app-product-card .product-card mat-card-actions {\n  padding: 0 1.25rem 1.25rem;\n  margin: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.04);\n  background: rgba(249, 250, 251, 0.5);\n}\n.product-grid-container[_ngcontent-%COMP%]:not(.list-view)   .product-item[_ngcontent-%COMP%]     app-product-card .product-card mat-card-actions button {\n  border-radius: 8px;\n  font-weight: 500;\n  transition: var(--product-transition);\n}\n.product-grid-container[_ngcontent-%COMP%]:not(.list-view)   .product-item[_ngcontent-%COMP%]     app-product-card .product-card mat-card-actions button.add-to-cart-btn {\n  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);\n  color: white;\n}\n.product-grid-container[_ngcontent-%COMP%]:not(.list-view)   .product-item[_ngcontent-%COMP%]     app-product-card .product-card mat-card-actions button.add-to-cart-btn:hover {\n  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);\n}\n.product-grid-container[_ngcontent-%COMP%]:not(.list-view)   .product-item[_ngcontent-%COMP%]     app-product-card .product-card mat-card-actions button.wishlist-btn {\n  color: #ef4444;\n}\n.product-grid-container[_ngcontent-%COMP%]:not(.list-view)   .product-item[_ngcontent-%COMP%]     app-product-card .product-card mat-card-actions button.wishlist-btn:hover {\n  background: rgba(239, 68, 68, 0.1);\n  transform: scale(1.05);\n}\n.product-grid-container.list-view[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n  gap: var(--product-grid-gap-sm);\n}\n.product-grid-container.list-view[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]     app-product-card .product-card {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  min-height: 200px;\n  border-radius: var(--product-card-border-radius);\n  box-shadow: var(--product-card-shadow);\n  transition: var(--product-transition);\n  background: white;\n  border: 1px solid rgba(0, 0, 0, 0.04);\n}\n.product-grid-container.list-view[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]     app-product-card .product-card:hover {\n  box-shadow: var(--product-card-shadow-hover);\n  transform: translateX(4px);\n  border-color: rgba(99, 102, 241, 0.2);\n}\n.product-grid-container.list-view[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]     app-product-card .product-card .product-image-container {\n  flex: 0 0 240px;\n  max-width: 240px;\n  border-radius: var(--product-card-border-radius) 0 0 var(--product-card-border-radius);\n  overflow: hidden;\n}\n.product-grid-container.list-view[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]     app-product-card .product-card .product-image-container .product-image {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.product-grid-container.list-view[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]     app-product-card .product-card .product-image-container:hover .product-image {\n  transform: scale(1.05);\n}\n.product-grid-container.list-view[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]     app-product-card .product-card mat-card-content {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-grow: 1;\n  gap: 1rem;\n}\n.product-grid-container.list-view[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]     app-product-card .product-card mat-card-content .product-name {\n  font-weight: 600;\n  font-size: 1.25rem;\n  color: #1f2937;\n  margin: 0;\n}\n.product-grid-container.list-view[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]     app-product-card .product-card mat-card-content .product-description {\n  display: block;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 0;\n  flex-grow: 1;\n}\n.product-grid-container.list-view[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]     app-product-card .product-card mat-card-content .product-price {\n  font-weight: 700;\n  font-size: 1.5rem;\n  color: #059669;\n  margin: 0;\n}\n.product-grid-container.list-view[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]     app-product-card .product-card mat-card-actions {\n  padding: 1.5rem;\n  margin: 0;\n  border: none;\n  background: transparent;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  min-width: 140px;\n}\n.product-grid-container.list-view[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]     app-product-card .product-card mat-card-actions button {\n  width: 100%;\n  border-radius: 8px;\n  font-weight: 500;\n  transition: var(--product-transition);\n}\n.product-grid-container.list-view[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]     app-product-card .product-card mat-card-actions button.add-to-cart-btn {\n  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);\n  color: white;\n}\n.product-grid-container.list-view[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]     app-product-card .product-card mat-card-actions button.add-to-cart-btn:hover {\n  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);\n}\n.product-grid-container.list-view[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]     app-product-card .product-card mat-card-actions button.wishlist-btn {\n  color: #ef4444;\n  border: 1px solid #fee2e2;\n}\n.product-grid-container.list-view[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]     app-product-card .product-card mat-card-actions button.wishlist-btn:hover {\n  background: rgba(239, 68, 68, 0.1);\n  border-color: #ef4444;\n}\n\n.no-products[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  text-align: center;\n  padding: 4rem 2rem;\n  background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);\n  border-radius: var(--product-card-border-radius);\n  box-shadow: var(--product-card-shadow);\n  border: 2px dashed #e5e7eb;\n  position: relative;\n  overflow: hidden;\n}\n.no-products[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"dots\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\"><circle cx=\"10\" cy=\"10\" r=\"1\" fill=\"rgb(226 232 240)\" opacity=\"0.5\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23dots)\"/></svg>');\n  animation: _ngcontent-%COMP%_float 20s linear infinite;\n  pointer-events: none;\n}\n.no-products[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  height: 4rem;\n  width: 4rem;\n  color: #9ca3af;\n  margin-bottom: 1.5rem;\n  animation: _ngcontent-%COMP%_bounce 2s infinite;\n}\n.no-products[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: #374151;\n  margin: 0 0 0.75rem;\n  position: relative;\n  z-index: 1;\n}\n.no-products[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 1rem;\n  line-height: 1.5;\n  margin: 0;\n  position: relative;\n  z-index: 1;\n}\n.no-products[_ngcontent-%COMP%]   .browse-button[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);\n  color: white;\n  border: none;\n  padding: 0.75rem 2rem;\n  border-radius: 8px;\n  font-weight: 500;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: var(--product-transition);\n  position: relative;\n  z-index: 1;\n}\n.no-products[_ngcontent-%COMP%]   .browse-button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);\n}\n\n@keyframes _ngcontent-%COMP%_float {\n  0% {\n    transform: translate(-50%, -50%) rotate(0deg);\n  }\n  100% {\n    transform: translate(-50%, -50%) rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_bounce {\n  0%, 20%, 50%, 80%, 100% {\n    transform: translateY(0);\n  }\n  40% {\n    transform: translateY(-10px);\n  }\n  60% {\n    transform: translateY(-5px);\n  }\n}\n@media (max-width: 1200px) {\n  .product-grid-container[_ngcontent-%COMP%]:not(.list-view) {\n    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n    gap: calc(var(--product-grid-gap) * 0.8);\n  }\n}\n@media (max-width: 992px) {\n  .product-grid-container[_ngcontent-%COMP%]:not(.list-view) {\n    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n    gap: var(--product-grid-gap-sm);\n  }\n  .product-grid-container.list-view[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]     app-product-card .product-card .product-image-container {\n    flex: 0 0 200px;\n    max-width: 200px;\n  }\n  .product-grid-container.list-view[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]     app-product-card .product-card mat-card-content {\n    padding: 1.25rem;\n  }\n  .product-grid-container.list-view[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]     app-product-card .product-card mat-card-content .product-name {\n    font-size: 1.125rem;\n  }\n  .product-grid-container.list-view[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]     app-product-card .product-card mat-card-actions {\n    padding: 1.25rem;\n    min-width: 120px;\n  }\n}\n@media (max-width: 768px) {\n  .product-grid-container[_ngcontent-%COMP%] {\n    gap: var(--product-grid-gap-sm);\n  }\n  .product-grid-container[_ngcontent-%COMP%]:not(.list-view) {\n    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  }\n  .product-grid-container.list-view[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]     app-product-card .product-card {\n    flex-direction: column;\n    min-height: auto;\n  }\n  .product-grid-container.list-view[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]     app-product-card .product-card .product-image-container {\n    flex: none;\n    max-width: none;\n    height: 200px;\n    border-radius: var(--product-card-border-radius) var(--product-card-border-radius) 0 0;\n  }\n  .product-grid-container.list-view[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]     app-product-card .product-card mat-card-content {\n    padding: 1rem;\n    gap: 0.75rem;\n  }\n  .product-grid-container.list-view[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]     app-product-card .product-card mat-card-actions {\n    padding: 0 1rem 1rem;\n    flex-direction: row;\n    min-width: auto;\n  }\n  .product-grid-container.list-view[_ngcontent-%COMP%]   .product-item[_ngcontent-%COMP%]     app-product-card .product-card mat-card-actions button {\n    flex: 1;\n  }\n  .no-products[_ngcontent-%COMP%] {\n    padding: 3rem 1.5rem;\n  }\n  .no-products[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 3rem;\n    height: 3rem;\n    width: 3rem;\n  }\n  .no-products[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n}\n@media (max-width: 576px) {\n  .product-grid-container[_ngcontent-%COMP%]:not(.list-view) {\n    grid-template-columns: 1fr;\n  }\n  .product-grid-container[_ngcontent-%COMP%]:not(.list-view)   .product-item[_ngcontent-%COMP%]     app-product-card .product-card {\n    max-width: 400px;\n    margin: 0 auto;\n  }\n  .product-grid-container[_ngcontent-%COMP%]:not(.list-view)   .product-item[_ngcontent-%COMP%]     app-product-card .product-card mat-card-content {\n    padding: 1rem;\n  }\n  .product-grid-container[_ngcontent-%COMP%]:not(.list-view)   .product-item[_ngcontent-%COMP%]     app-product-card .product-card mat-card-content .product-name {\n    font-size: 1rem;\n  }\n  .product-grid-container[_ngcontent-%COMP%]:not(.list-view)   .product-item[_ngcontent-%COMP%]     app-product-card .product-card mat-card-actions {\n    padding: 0 1rem 1rem;\n  }\n  .product-grid-container[_ngcontent-%COMP%]:not(.list-view)   .product-item[_ngcontent-%COMP%]     app-product-card .product-card mat-card-actions button {\n    font-size: 0.875rem;\n    padding: 0.5rem 1rem;\n  }\n  .no-products[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n  }\n  .no-products[_ngcontent-%COMP%]   .browse-button[_ngcontent-%COMP%] {\n    padding: 0.625rem 1.5rem;\n    font-size: 0.875rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcHJvZHVjdHMvY29tcG9uZW50cy9wcm9kdWN0LWdyaWQvcHJvZHVjdC1ncmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSxxREFBQTtFQUNBLDJEQUFBO0VBQ0EsMkRBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSw0REFBQTtFQUNBLDRCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBQUY7QUFJSTtFQUNFLHdCQUFBO0VBQ0EscUNBQUE7QUFGTjtBQUlNO0VBQ0UsMkJBQUE7QUFGUjtBQUlRO0VBQ0UsNENBQUE7RUFDQSxxQ0FBQTtBQUZWO0FBTU07RUFDRSxZQUFBO0VBQ0EsZ0RBQUE7RUFDQSxzQ0FBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSw2REFBQTtFQUNBLGdCQUFBO0FBSlI7QUFPVTtFQUNFLHNCQUFBO0FBTFo7QUFTUTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzRkFBQTtBQVBWO0FBU1U7RUFDRSx1REFBQTtFQUNBLGlCQUFBO0FBUFo7QUFXVTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnR0FBQTtFQUlBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0FBWlo7QUFlVTtFQUNFLFVBQUE7QUFiWjtBQWlCUTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFmVjtBQWlCVTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FBZlo7QUFrQlU7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFoQlo7QUFtQlU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBakJaO0FBcUJRO0VBQ0UsMEJBQUE7RUFDQSxTQUFBO0VBQ0EseUNBQUE7RUFDQSxvQ0FBQTtBQW5CVjtBQXFCVTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtBQW5CWjtBQXFCWTtFQUNFLDZEQUFBO0VBQ0EsWUFBQTtBQW5CZDtBQXFCYztFQUNFLDZEQUFBO0VBQ0EsMkJBQUE7RUFDQSw4Q0FBQTtBQW5CaEI7QUF1Qlk7RUFDRSxjQUFBO0FBckJkO0FBdUJjO0VBQ0Usa0NBQUE7RUFDQSxzQkFBQTtBQXJCaEI7QUErQkU7RUFDRSwwQkFBQTtFQUNBLCtCQUFBO0FBN0JKO0FBZ0NNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdEQUFBO0VBQ0Esc0NBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7QUE5QlI7QUFnQ1E7RUFDRSw0Q0FBQTtFQUNBLDBCQUFBO0VBQ0EscUNBQUE7QUE5QlY7QUFpQ1E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzRkFBQTtFQUNBLGdCQUFBO0FBL0JWO0FBaUNVO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHVEQUFBO0FBL0JaO0FBa0NVO0VBQ0Usc0JBQUE7QUFoQ1o7QUFvQ1E7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQWxDVjtBQW9DVTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQWxDWjtBQXFDVTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQW5DWjtBQXNDVTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQXBDWjtBQXdDUTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBdENWO0FBd0NVO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtBQXRDWjtBQXdDWTtFQUNFLDZEQUFBO0VBQ0EsWUFBQTtBQXRDZDtBQXdDYztFQUNFLDZEQUFBO0VBQ0EsMkJBQUE7RUFDQSw4Q0FBQTtBQXRDaEI7QUEwQ1k7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUF4Q2Q7QUEwQ2M7RUFDRSxrQ0FBQTtFQUNBLHFCQUFBO0FBeENoQjs7QUFtREE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2REFBQTtFQUNBLGdEQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFoREY7QUFtREU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa1VBQUE7RUFDQSxvQ0FBQTtFQUNBLG9CQUFBO0FBakRKO0FBb0RFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUFsREo7QUFxREU7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBbkRKO0FBc0RFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFwREo7QUF3REU7RUFDRSxrQkFBQTtFQUNBLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUF0REo7QUF3REk7RUFDRSw2REFBQTtFQUNBLDJCQUFBO0VBQ0EsOENBQUE7QUF0RE47O0FBNERBO0VBQ0U7SUFBSyw2Q0FBQTtFQXhETDtFQXlEQTtJQUFPLCtDQUFBO0VBdERQO0FBQ0Y7QUF3REE7RUFDRTtJQUEwQix3QkFBQTtFQXJEMUI7RUFzREE7SUFBTSw0QkFBQTtFQW5ETjtFQW9EQTtJQUFNLDJCQUFBO0VBakROO0FBQ0Y7QUFvREE7RUFDRTtJQUNFLDREQUFBO0lBQ0Esd0NBQUE7RUFsREY7QUFDRjtBQXFEQTtFQUNFO0lBQ0UsNERBQUE7SUFDQSwrQkFBQTtFQW5ERjtFQXdESTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQXRETjtFQXlESTtJQUNFLGdCQUFBO0VBdkROO0VBeURNO0lBQ0UsbUJBQUE7RUF2RFI7RUEyREk7SUFDRSxnQkFBQTtJQUNBLGdCQUFBO0VBekROO0FBQ0Y7QUE4REE7RUFDRTtJQUNFLCtCQUFBO0VBNURGO0VBOERFO0lBQ0UsNERBQUE7RUE1REo7RUFnRUk7SUFDRSxzQkFBQTtJQUNBLGdCQUFBO0VBOUROO0VBZ0VNO0lBQ0UsVUFBQTtJQUNBLGVBQUE7SUFDQSxhQUFBO0lBQ0Esc0ZBQUE7RUE5RFI7RUFpRU07SUFDRSxhQUFBO0lBQ0EsWUFBQTtFQS9EUjtFQWtFTTtJQUNFLG9CQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0VBaEVSO0VBa0VRO0lBQ0UsT0FBQTtFQWhFVjtFQXVFQTtJQUNFLG9CQUFBO0VBckVGO0VBdUVFO0lBQ0UsZUFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0VBckVKO0VBd0VFO0lBQ0Usa0JBQUE7RUF0RUo7QUFDRjtBQTBFQTtFQUNFO0lBQ0UsMEJBQUE7RUF4RUY7RUEwRUU7SUFDRSxnQkFBQTtJQUNBLGNBQUE7RUF4RUo7RUEwRUk7SUFDRSxhQUFBO0VBeEVOO0VBMEVNO0lBQ0UsZUFBQTtFQXhFUjtFQTRFSTtJQUNFLG9CQUFBO0VBMUVOO0VBNEVNO0lBQ0UsbUJBQUE7SUFDQSxvQkFBQTtFQTFFUjtFQWdGQTtJQUNFLGtCQUFBO0VBOUVGO0VBZ0ZFO0lBQ0Usd0JBQUE7SUFDQSxtQkFBQTtFQTlFSjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9kZXJuIFByb2R1Y3QgR3JpZCBTdHlsZXMgd2l0aCBEZXNpZ24gU3lzdGVtIEludGVncmF0aW9uXG46cm9vdCB7XG4gIC0tcHJvZHVjdC1ncmlkLWdhcDogMS41cmVtO1xuICAtLXByb2R1Y3QtZ3JpZC1nYXAtbGc6IDJyZW07XG4gIC0tcHJvZHVjdC1ncmlkLWdhcC1zbTogMXJlbTtcbiAgLS1wcm9kdWN0LWNhcmQtYm9yZGVyLXJhZGl1czogMTZweDtcbiAgLS1wcm9kdWN0LWNhcmQtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIC0tcHJvZHVjdC1jYXJkLXNoYWRvdy1ob3ZlcjogMCA4cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAtLXByb2R1Y3QtdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbn1cblxuLnByb2R1Y3QtZ3JpZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gIGdhcDogdmFyKC0tcHJvZHVjdC1ncmlkLWdhcCk7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG4gIC8vIEdyaWQgdmlldyBzcGVjaWZpYyBzdHlsZXNcbiAgJjpub3QoLmxpc3Qtdmlldykge1xuICAgIC5wcm9kdWN0LWl0ZW0ge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgdHJhbnNpdGlvbjogdmFyKC0tcHJvZHVjdC10cmFuc2l0aW9uKTtcbiAgICAgIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcbiAgICAgICAgXG4gICAgICAgIDo6bmctZGVlcCBhcHAtcHJvZHVjdC1jYXJkIC5wcm9kdWN0LWNhcmQge1xuICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXByb2R1Y3QtY2FyZC1zaGFkb3ctaG92ZXIpO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSg5OSwgMTAyLCAyNDEsIDAuMik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgOjpuZy1kZWVwIGFwcC1wcm9kdWN0LWNhcmQgLnByb2R1Y3QtY2FyZCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcHJvZHVjdC1jYXJkLWJvcmRlci1yYWRpdXMpO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1wcm9kdWN0LWNhcmQtc2hhZG93KTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tcHJvZHVjdC10cmFuc2l0aW9uKTtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgI2ZmZmZmZiAwJSwgI2ZhZmFmYSAxMDAlKTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIC5wcm9kdWN0LWltYWdlLWNvbnRhaW5lciAucHJvZHVjdC1pbWFnZSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLnByb2R1Y3QtaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1wcm9kdWN0LWNhcmQtYm9yZGVyLXJhZGl1cykgdmFyKC0tcHJvZHVjdC1jYXJkLWJvcmRlci1yYWRpdXMpIDAgMDtcbiAgICAgICAgICBcbiAgICAgICAgICAucHJvZHVjdC1pbWFnZSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC8vIEFkZCBpbWFnZSBvdmVybGF5IGZvciBiZXR0ZXIgdmlzdWFsIGhpZXJhcmNoeVxuICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgXG4gICAgICAgICAgICAgIHRyYW5zcGFyZW50IDAlLCBcbiAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgNzAlLCBcbiAgICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjEpIDEwMCUpO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICY6aG92ZXI6OmFmdGVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBtYXQtY2FyZC1jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nOiAxLjI1cmVtO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBnYXA6IDAuNzVyZW07XG4gICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIFxuICAgICAgICAgIC5wcm9kdWN0LW5hbWUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgICAgIGNvbG9yOiAjMWYyOTM3O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAgICAgICBsaW5lLWNsYW1wOiAyO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNmI3MjgwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAgICAgICAgIGxpbmUtY2xhbXA6IDI7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLnByb2R1Y3QtcHJpY2Uge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjMDU5NjY5O1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvIDAgMCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbWF0LWNhcmQtYWN0aW9ucyB7XG4gICAgICAgICAgcGFkZGluZzogMCAxLjI1cmVtIDEuMjVyZW07XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAyNTAsIDI1MSwgMC41KTtcbiAgICAgICAgICBcbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHZhcigtLXByb2R1Y3QtdHJhbnNpdGlvbik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICYuYWRkLXRvLWNhcnQtYnRuIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzYzNjZmMSAwJSwgIzhiNWNmNiAxMDAlKTtcbiAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzRmNDZlNSAwJSwgIzdjM2FlZCAxMDAlKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDk5LCAxMDIsIDI0MSwgMC40KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAmLndpc2hsaXN0LWJ0biB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZWY0NDQ0O1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMzksIDY4LCA2OCwgMC4xKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAvLyBMaXN0IHZpZXcgc3BlY2lmaWMgc3R5bGVzXG4gICYubGlzdC12aWV3IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IHZhcigtLXByb2R1Y3QtZ3JpZC1nYXAtc20pO1xuICAgIFxuICAgIC5wcm9kdWN0LWl0ZW0ge1xuICAgICAgOjpuZy1kZWVwIGFwcC1wcm9kdWN0LWNhcmQgLnByb2R1Y3QtY2FyZCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcHJvZHVjdC1jYXJkLWJvcmRlci1yYWRpdXMpO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1wcm9kdWN0LWNhcmQtc2hhZG93KTtcbiAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tcHJvZHVjdC10cmFuc2l0aW9uKTtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gICAgICAgIFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1wcm9kdWN0LWNhcmQtc2hhZG93LWhvdmVyKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoOTksIDEwMiwgMjQxLCAwLjIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAucHJvZHVjdC1pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgIGZsZXg6IDAgMCAyNDBweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDI0MHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXByb2R1Y3QtY2FyZC1ib3JkZXItcmFkaXVzKSAwIDAgdmFyKC0tcHJvZHVjdC1jYXJkLWJvcmRlci1yYWRpdXMpO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgXG4gICAgICAgICAgLnByb2R1Y3QtaW1hZ2Uge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICY6aG92ZXIgLnByb2R1Y3QtaW1hZ2Uge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIG1hdC1jYXJkLWNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICBnYXA6IDFyZW07XG4gICAgICAgICAgXG4gICAgICAgICAgLnByb2R1Y3QtbmFtZSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgICAgY29sb3I6ICMxZjI5Mzc7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIC5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgY29sb3I6ICM2YjcyODA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS42O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAucHJvZHVjdC1wcmljZSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICBjb2xvcjogIzA1OTY2OTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIG1hdC1jYXJkLWFjdGlvbnMge1xuICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBnYXA6IDAuNzVyZW07XG4gICAgICAgICAgbWluLXdpZHRoOiAxNDBweDtcbiAgICAgICAgICBcbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tcHJvZHVjdC10cmFuc2l0aW9uKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJi5hZGQtdG8tY2FydC1idG4ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjM2NmYxIDAlLCAjOGI1Y2Y2IDEwMCUpO1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNGY0NmU1IDAlLCAjN2MzYWVkIDEwMCUpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoOTksIDEwMiwgMjQxLCAwLjQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICYud2lzaGxpc3QtYnRuIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNlZjQ0NDQ7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZWUyZTI7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjEpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2VmNDQ0NDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBFbmhhbmNlZCBubyBwcm9kdWN0cyBzdGF0ZVxuLm5vLXByb2R1Y3RzIHtcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA0cmVtIDJyZW07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsICNmZmZmZmYgMCUsICNmOGZhZmMgMTAwJSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXByb2R1Y3QtY2FyZC1ib3JkZXItcmFkaXVzKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tcHJvZHVjdC1jYXJkLXNoYWRvdyk7XG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjZTVlN2ViO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIFxuICAvLyBTdWJ0bGUgYW5pbWF0ZWQgYmFja2dyb3VuZCBwYXR0ZXJuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTUwJTtcbiAgICBsZWZ0OiAtNTAlO1xuICAgIHdpZHRoOiAyMDAlO1xuICAgIGhlaWdodDogMjAwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIj48ZGVmcz48cGF0dGVybiBpZD1cImRvdHNcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiBwYXR0ZXJuVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPjxjaXJjbGUgY3g9XCIxMFwiIGN5PVwiMTBcIiByPVwiMVwiIGZpbGw9XCJyZ2IoMjI2IDIzMiAyNDApXCIgb3BhY2l0eT1cIjAuNVwiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgZmlsbD1cInVybCglMjNkb3RzKVwiLz48L3N2Zz4nKTtcbiAgICBhbmltYXRpb246IGZsb2F0IDIwcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgXG4gIG1hdC1pY29uIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgaGVpZ2h0OiA0cmVtO1xuICAgIHdpZHRoOiA0cmVtO1xuICAgIGNvbG9yOiAjOWNhM2FmO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICBhbmltYXRpb246IGJvdW5jZSAycyBpbmZpbml0ZTtcbiAgfVxuICBcbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMzNzQxNTE7XG4gICAgbWFyZ2luOiAwIDAgMC43NXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICBcbiAgcCB7XG4gICAgY29sb3I6ICM2YjcyODA7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIFxuICAvLyBBZGQgYSBzdWJ0bGUgY2FsbC10by1hY3Rpb24gYnV0dG9uXG4gIC5icm93c2UtYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW07XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzYzNjZmMSAwJSwgIzhiNWNmNiAxMDAlKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDAuNzVyZW0gMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS1wcm9kdWN0LXRyYW5zaXRpb24pO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzRmNDZlNSAwJSwgIzdjM2FlZCAxMDAlKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSg5OSwgMTAyLCAyNDEsIDAuNCk7XG4gICAgfVxuICB9XG59XG5cbi8vIEFuaW1hdGlvbiBrZXlmcmFtZXNcbkBrZXlmcmFtZXMgZmxvYXQge1xuICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuQGtleWZyYW1lcyBib3VuY2Uge1xuICAwJSwgMjAlLCA1MCUsIDgwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICA0MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpOyB9XG4gIDYwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTsgfVxufVxuXG4vLyBSZXNwb25zaXZlIERlc2lnblxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAucHJvZHVjdC1ncmlkLWNvbnRhaW5lcjpub3QoLmxpc3Qtdmlldykge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI4MHB4LCAxZnIpKTtcbiAgICBnYXA6IGNhbGModmFyKC0tcHJvZHVjdC1ncmlkLWdhcCkgKiAwLjgpO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAucHJvZHVjdC1ncmlkLWNvbnRhaW5lcjpub3QoLmxpc3Qtdmlldykge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI2MHB4LCAxZnIpKTtcbiAgICBnYXA6IHZhcigtLXByb2R1Y3QtZ3JpZC1nYXAtc20pO1xuICB9XG4gIFxuICAucHJvZHVjdC1ncmlkLWNvbnRhaW5lci5saXN0LXZpZXcge1xuICAgIC5wcm9kdWN0LWl0ZW0gOjpuZy1kZWVwIGFwcC1wcm9kdWN0LWNhcmQgLnByb2R1Y3QtY2FyZCB7XG4gICAgICAucHJvZHVjdC1pbWFnZS1jb250YWluZXIge1xuICAgICAgICBmbGV4OiAwIDAgMjAwcHg7XG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgIG1hdC1jYXJkLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiAxLjI1cmVtO1xuICAgICAgICBcbiAgICAgICAgLnByb2R1Y3QtbmFtZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBtYXQtY2FyZC1hY3Rpb25zIHtcbiAgICAgICAgcGFkZGluZzogMS4yNXJlbTtcbiAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wcm9kdWN0LWdyaWQtY29udGFpbmVyIHtcbiAgICBnYXA6IHZhcigtLXByb2R1Y3QtZ3JpZC1nYXAtc20pO1xuICAgIFxuICAgICY6bm90KC5saXN0LXZpZXcpIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI0MHB4LCAxZnIpKTtcbiAgICB9XG4gICAgXG4gICAgJi5saXN0LXZpZXcge1xuICAgICAgLnByb2R1Y3QtaXRlbSA6Om5nLWRlZXAgYXBwLXByb2R1Y3QtY2FyZCAucHJvZHVjdC1jYXJkIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgbWluLWhlaWdodDogYXV0bztcbiAgICAgICAgXG4gICAgICAgIC5wcm9kdWN0LWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgZmxleDogbm9uZTtcbiAgICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1wcm9kdWN0LWNhcmQtYm9yZGVyLXJhZGl1cykgdmFyKC0tcHJvZHVjdC1jYXJkLWJvcmRlci1yYWRpdXMpIDAgMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbWF0LWNhcmQtY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICBnYXA6IDAuNzVyZW07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIG1hdC1jYXJkLWFjdGlvbnMge1xuICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgbWluLXdpZHRoOiBhdXRvO1xuICAgICAgICAgIFxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLm5vLXByb2R1Y3RzIHtcbiAgICBwYWRkaW5nOiAzcmVtIDEuNXJlbTtcbiAgICBcbiAgICBtYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICB3aWR0aDogM3JlbTtcbiAgICB9XG4gICAgXG4gICAgaDMge1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnByb2R1Y3QtZ3JpZC1jb250YWluZXI6bm90KC5saXN0LXZpZXcpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBcbiAgICAucHJvZHVjdC1pdGVtIDo6bmctZGVlcCBhcHAtcHJvZHVjdC1jYXJkIC5wcm9kdWN0LWNhcmQge1xuICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgXG4gICAgICBtYXQtY2FyZC1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgXG4gICAgICAgIC5wcm9kdWN0LW5hbWUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICBtYXQtY2FyZC1hY3Rpb25zIHtcbiAgICAgICAgcGFkZGluZzogMCAxcmVtIDFyZW07XG4gICAgICAgIFxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5uby1wcm9kdWN0cyB7XG4gICAgcGFkZGluZzogMnJlbSAxcmVtO1xuICAgIFxuICAgIC5icm93c2UtYnV0dG9uIHtcbiAgICAgIHBhZGRpbmc6IDAuNjI1cmVtIDEuNXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}


/***/ }),

/***/ 3948:
/*!*******************************************************************************************!*\
  !*** ./src/app/features/products/components/product-reviews/product-reviews.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductReviewsComponent: () => (/* binding */ ProductReviewsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


function ProductReviewsComponent_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14)(1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const star_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", star_r5, " stars");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r3.getRatingPercentage(star_r5), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.getRatingCount(star_r5));
  }
}
function ProductReviewsComponent_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19)(1, "div", 20)(2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div")(5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 25)(11, "span", 6)(12, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u2605\u2605\u2605\u2605\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u2605\u2605\u2605\u2605\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 28)(21, "div", 29)(22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Was this review helpful?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const review_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", review_r6.userAvatar || "assets/images/default-avatar.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", review_r6.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r6.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 8, review_r6.createdAt, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", review_r6.rating / 5 * 100, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r6.comment);
  }
}
const _c0 = function () {
  return [5, 4, 3, 2, 1];
};
function ProductReviewsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 3)(2, "div", 4)(3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6)(6, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u2605\u2605\u2605\u2605\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u2605\u2605\u2605\u2605\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProductReviewsComponent_div_1_div_13_Template, 7, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProductReviewsComponent_div_1_div_15_Template, 28, 11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.averageRating.toFixed(1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r0.averageRating / 5 * 100, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.reviews.length, " ", ctx_r0.reviews.length === 1 ? "review" : "reviews", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.reviews);
  }
}
function ProductReviewsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "This product has no reviews yet. Be the first to share your experience!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class ProductReviewsComponent {
  constructor() {
    this.reviews = [];
  }
  get averageRating() {
    if (!this.reviews || this.reviews.length === 0) return 0;
    const sum = this.reviews.reduce((total, review) => total + review.rating, 0);
    return sum / this.reviews.length;
  }
  getRatingCount(stars) {
    if (!this.reviews) return 0;
    return this.reviews.filter(review => review.rating === stars).length;
  }
  getRatingPercentage(stars) {
    if (!this.reviews || this.reviews.length === 0) return 0;
    return this.getRatingCount(stars) / this.reviews.length * 100;
  }
  static {
    this.ɵfac = function ProductReviewsComponent_Factory(t) {
      return new (t || ProductReviewsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductReviewsComponent,
      selectors: [["app-product-reviews"]],
      inputs: {
        reviews: "reviews"
      },
      decls: 4,
      vars: 2,
      consts: [[1, "reviews-container"], [4, "ngIf", "ngIfElse"], ["noReviews", ""], [1, "reviews-summary"], [1, "average-rating"], [1, "rating-number"], [1, "stars"], [1, "filled-stars"], [1, "empty-stars"], [1, "total-reviews"], [1, "rating-distribution"], ["class", "rating-bar", 4, "ngFor", "ngForOf"], [1, "reviews-list"], ["class", "review-item", 4, "ngFor", "ngForOf"], [1, "rating-bar"], [1, "rating-label"], [1, "progress-bar"], [1, "progress"], [1, "rating-count"], [1, "review-item"], [1, "review-header"], [1, "reviewer-info"], [1, "reviewer-avatar", 3, "src", "alt"], [1, "reviewer-name"], [1, "review-date"], [1, "review-rating"], [1, "review-title"], [1, "review-content"], [1, "review-footer"], [1, "helpful-section"], [1, "helpful-btn"], [1, "no-reviews"]],
      template: function ProductReviewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductReviewsComponent_div_1_Template, 16, 8, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductReviewsComponent_ng_template_2_Template, 3, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reviews && ctx.reviews.length > 0)("ngIfElse", _r1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
      styles: [".reviews-container[_ngcontent-%COMP%] {\n      margin-top: 20px;\n    }\n    \n    .reviews-summary[_ngcontent-%COMP%] {\n      display: flex;\n      margin-bottom: 30px;\n      padding-bottom: 20px;\n      border-bottom: 1px solid #eee;\n    }\n    \n    .average-rating[_ngcontent-%COMP%] {\n      flex: 0 0 200px;\n      text-align: center;\n      padding-right: 30px;\n    }\n    \n    .rating-number[_ngcontent-%COMP%] {\n      font-size: 3rem;\n      font-weight: bold;\n      color: #333;\n      margin-bottom: 5px;\n    }\n    \n    .stars[_ngcontent-%COMP%] {\n      position: relative;\n      display: inline-block;\n      color: #ddd;\n      font-size: 1.5rem;\n    }\n    \n    .filled-stars[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 0;\n      left: 0;\n      overflow: hidden;\n      color: #FFD700;\n      white-space: nowrap;\n    }\n    \n    .total-reviews[_ngcontent-%COMP%] {\n      margin-top: 5px;\n      color: #777;\n      font-size: 0.9rem;\n    }\n    \n    .rating-distribution[_ngcontent-%COMP%] {\n      flex: 1;\n    }\n    \n    .rating-bar[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      margin-bottom: 8px;\n    }\n    \n    .rating-label[_ngcontent-%COMP%] {\n      flex: 0 0 60px;\n      font-size: 0.9rem;\n      color: #666;\n    }\n    \n    .progress-bar[_ngcontent-%COMP%] {\n      flex: 1;\n      height: 10px;\n      background-color: #eee;\n      border-radius: 5px;\n      overflow: hidden;\n      margin: 0 10px;\n    }\n    \n    .progress[_ngcontent-%COMP%] {\n      height: 100%;\n      background-color: #1976d2;\n    }\n    \n    .rating-count[_ngcontent-%COMP%] {\n      flex: 0 0 30px;\n      font-size: 0.9rem;\n      color: #666;\n      text-align: right;\n    }\n    \n    .reviews-list[_ngcontent-%COMP%] {\n      margin-top: 20px;\n    }\n    \n    .review-item[_ngcontent-%COMP%] {\n      padding: 20px 0;\n      border-bottom: 1px solid #eee;\n    }\n    \n    .review-header[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: space-between;\n      margin-bottom: 15px;\n    }\n    \n    .reviewer-info[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n    }\n    \n    .reviewer-avatar[_ngcontent-%COMP%] {\n      width: 40px;\n      height: 40px;\n      border-radius: 50%;\n      margin-right: 10px;\n      object-fit: cover;\n    }\n    \n    .reviewer-name[_ngcontent-%COMP%] {\n      font-weight: 500;\n      color: #333;\n    }\n    \n    .review-date[_ngcontent-%COMP%] {\n      font-size: 0.8rem;\n      color: #999;\n    }\n    \n    .review-title[_ngcontent-%COMP%] {\n      margin: 0 0 10px 0;\n      font-size: 1.1rem;\n      color: #333;\n    }\n    \n    .review-content[_ngcontent-%COMP%] {\n      color: #555;\n      line-height: 1.5;\n      margin-bottom: 15px;\n    }\n    \n    .review-footer[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      font-size: 0.9rem;\n    }\n    \n    .verified-badge[_ngcontent-%COMP%] {\n      color: #4CAF50;\n      font-weight: 500;\n    }\n    \n    .helpful-section[_ngcontent-%COMP%] {\n      color: #777;\n    }\n    \n    .helpful-btn[_ngcontent-%COMP%] {\n      background: none;\n      border: 1px solid #ddd;\n      border-radius: 3px;\n      padding: 3px 8px;\n      margin-left: 10px;\n      cursor: pointer;\n      color: #555;\n      font-size: 0.8rem;\n    }\n    \n    .helpful-btn[_ngcontent-%COMP%]:hover {\n      background-color: #f5f5f5;\n    }\n    \n    .no-reviews[_ngcontent-%COMP%] {\n      text-align: center;\n      padding: 40px 0;\n      color: #777;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcHJvZHVjdHMvY29tcG9uZW50cy9wcm9kdWN0LXJldmlld3MvcHJvZHVjdC1yZXZpZXdzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0k7TUFDRSxnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLG9CQUFvQjtNQUNwQiw2QkFBNkI7SUFDL0I7O0lBRUE7TUFDRSxlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLG1CQUFtQjtJQUNyQjs7SUFFQTtNQUNFLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsV0FBVztNQUNYLGtCQUFrQjtJQUNwQjs7SUFFQTtNQUNFLGtCQUFrQjtNQUNsQixxQkFBcUI7TUFDckIsV0FBVztNQUNYLGlCQUFpQjtJQUNuQjs7SUFFQTtNQUNFLGtCQUFrQjtNQUNsQixNQUFNO01BQ04sT0FBTztNQUNQLGdCQUFnQjtNQUNoQixjQUFjO01BQ2QsbUJBQW1CO0lBQ3JCOztJQUVBO01BQ0UsZUFBZTtNQUNmLFdBQVc7TUFDWCxpQkFBaUI7SUFDbkI7O0lBRUE7TUFDRSxPQUFPO0lBQ1Q7O0lBRUE7TUFDRSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLGtCQUFrQjtJQUNwQjs7SUFFQTtNQUNFLGNBQWM7TUFDZCxpQkFBaUI7TUFDakIsV0FBVztJQUNiOztJQUVBO01BQ0UsT0FBTztNQUNQLFlBQVk7TUFDWixzQkFBc0I7TUFDdEIsa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixjQUFjO0lBQ2hCOztJQUVBO01BQ0UsWUFBWTtNQUNaLHlCQUF5QjtJQUMzQjs7SUFFQTtNQUNFLGNBQWM7TUFDZCxpQkFBaUI7TUFDakIsV0FBVztNQUNYLGlCQUFpQjtJQUNuQjs7SUFFQTtNQUNFLGdCQUFnQjtJQUNsQjs7SUFFQTtNQUNFLGVBQWU7TUFDZiw2QkFBNkI7SUFDL0I7O0lBRUE7TUFDRSxhQUFhO01BQ2IsOEJBQThCO01BQzlCLG1CQUFtQjtJQUNyQjs7SUFFQTtNQUNFLGFBQWE7TUFDYixtQkFBbUI7SUFDckI7O0lBRUE7TUFDRSxXQUFXO01BQ1gsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixrQkFBa0I7TUFDbEIsaUJBQWlCO0lBQ25COztJQUVBO01BQ0UsZ0JBQWdCO01BQ2hCLFdBQVc7SUFDYjs7SUFFQTtNQUNFLGlCQUFpQjtNQUNqQixXQUFXO0lBQ2I7O0lBRUE7TUFDRSxrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCLFdBQVc7SUFDYjs7SUFFQTtNQUNFLFdBQVc7TUFDWCxnQkFBZ0I7TUFDaEIsbUJBQW1CO0lBQ3JCOztJQUVBO01BQ0UsYUFBYTtNQUNiLDhCQUE4QjtNQUM5QixtQkFBbUI7TUFDbkIsaUJBQWlCO0lBQ25COztJQUVBO01BQ0UsY0FBYztNQUNkLGdCQUFnQjtJQUNsQjs7SUFFQTtNQUNFLFdBQVc7SUFDYjs7SUFFQTtNQUNFLGdCQUFnQjtNQUNoQixzQkFBc0I7TUFDdEIsa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUNoQixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLFdBQVc7TUFDWCxpQkFBaUI7SUFDbkI7O0lBRUE7TUFDRSx5QkFBeUI7SUFDM0I7O0lBRUE7TUFDRSxrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLFdBQVc7SUFDYiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5yZXZpZXdzLWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbiAgICBcbiAgICAucmV2aWV3cy1zdW1tYXJ5IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgICB9XG4gICAgXG4gICAgLmF2ZXJhZ2UtcmF0aW5nIHtcbiAgICAgIGZsZXg6IDAgMCAyMDBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgfVxuICAgIFxuICAgIC5yYXRpbmctbnVtYmVyIHtcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuICAgIFxuICAgIC5zdGFycyB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBjb2xvcjogI2RkZDtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cbiAgICBcbiAgICAuZmlsbGVkLXN0YXJzIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgY29sb3I6ICNGRkQ3MDA7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cbiAgICBcbiAgICAudG90YWwtcmV2aWV3cyB7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICBjb2xvcjogIzc3NztcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIH1cbiAgICBcbiAgICAucmF0aW5nLWRpc3RyaWJ1dGlvbiB7XG4gICAgICBmbGV4OiAxO1xuICAgIH1cbiAgICBcbiAgICAucmF0aW5nLWJhciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG4gICAgXG4gICAgLnJhdGluZy1sYWJlbCB7XG4gICAgICBmbGV4OiAwIDAgNjBweDtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgY29sb3I6ICM2NjY7XG4gICAgfVxuICAgIFxuICAgIC5wcm9ncmVzcy1iYXIge1xuICAgICAgZmxleDogMTtcbiAgICAgIGhlaWdodDogMTBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgfVxuICAgIFxuICAgIC5wcm9ncmVzcyB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICAgIH1cbiAgICBcbiAgICAucmF0aW5nLWNvdW50IHtcbiAgICAgIGZsZXg6IDAgMCAzMHB4O1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cbiAgICBcbiAgICAucmV2aWV3cy1saXN0IHtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuICAgIFxuICAgIC5yZXZpZXctaXRlbSB7XG4gICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgICB9XG4gICAgXG4gICAgLnJldmlldy1oZWFkZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgfVxuICAgIFxuICAgIC5yZXZpZXdlci1pbmZvIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICBcbiAgICAucmV2aWV3ZXItYXZhdGFyIHtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgfVxuICAgIFxuICAgIC5yZXZpZXdlci1uYW1lIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICB9XG4gICAgXG4gICAgLnJldmlldy1kYXRlIHtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgY29sb3I6ICM5OTk7XG4gICAgfVxuICAgIFxuICAgIC5yZXZpZXctdGl0bGUge1xuICAgICAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICBjb2xvcjogIzMzMztcbiAgICB9XG4gICAgXG4gICAgLnJldmlldy1jb250ZW50IHtcbiAgICAgIGNvbG9yOiAjNTU1O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgfVxuICAgIFxuICAgIC5yZXZpZXctZm9vdGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgfVxuICAgIFxuICAgIC52ZXJpZmllZC1iYWRnZSB7XG4gICAgICBjb2xvcjogIzRDQUY1MDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICAgIFxuICAgIC5oZWxwZnVsLXNlY3Rpb24ge1xuICAgICAgY29sb3I6ICM3Nzc7XG4gICAgfVxuICAgIFxuICAgIC5oZWxwZnVsLWJ0biB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIHBhZGRpbmc6IDNweCA4cHg7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGNvbG9yOiAjNTU1O1xuICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgfVxuICAgIFxuICAgIC5oZWxwZnVsLWJ0bjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIH1cbiAgICBcbiAgICAubm8tcmV2aWV3cyB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA0MHB4IDA7XG4gICAgICBjb2xvcjogIzc3NztcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}


/***/ }),

/***/ 5766:
/*!*************************************************************************************!*\
  !*** ./src/app/features/products/components/product-sort/product-sort.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductSortComponent: () => (/* binding */ ProductSortComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);



class ProductSortComponent {
  constructor() {
    this.currentSort = 'featured';
    this.sortChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onSortChange(value) {
    this.sortChanged.emit(value);
  }
  static {
    this.ɵfac = function ProductSortComponent_Factory(t) {
      return new (t || ProductSortComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductSortComponent,
      selectors: [["app-product-sort"]],
      inputs: {
        currentSort: "currentSort"
      },
      outputs: {
        sortChanged: "sortChanged"
      },
      decls: 20,
      vars: 1,
      consts: [[1, "sort-container"], ["for", "sort-select"], ["id", "sort-select", 3, "ngModel", "ngModelChange"], ["value", "featured"], ["value", "price-low-high"], ["value", "price-high-low"], ["value", "name-a-z"], ["value", "name-z-a"], ["value", "newest"], ["value", "rating"], ["value", "popular"]],
      template: function ProductSortComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "label", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sort By:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductSortComponent_Template_select_ngModelChange_3_listener($event) {
            return ctx.onSortChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Featured");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Price: Low to High");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Price: High to Low");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name: A to Z");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Name: Z to A");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Newest First");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Top Rated");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Most Popular");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentSort);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel],
      styles: [".sort-container[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n    }\n    \n    label[_ngcontent-%COMP%] {\n      margin-right: 10px;\n      font-size: 0.9rem;\n      color: #666;\n    }\n    \n    select[_ngcontent-%COMP%] {\n      padding: 8px 30px 8px 10px;\n      border: 1px solid #ddd;\n      border-radius: 4px;\n      background-color: white;\n      appearance: none;\n      background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\");\n      background-repeat: no-repeat;\n      background-position: right 10px center;\n      background-size: 1em;\n    }\n    \n    select[_ngcontent-%COMP%]:focus {\n      outline: none;\n      border-color: #1976d2;\n    }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcHJvZHVjdHMvY29tcG9uZW50cy9wcm9kdWN0LXNvcnQvcHJvZHVjdC1zb3J0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0lBQ0k7TUFDRSxhQUFhO01BQ2IsbUJBQW1CO0lBQ3JCOztJQUVBO01BQ0Usa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQixXQUFXO0lBQ2I7O0lBRUE7TUFDRSwwQkFBMEI7TUFDMUIsc0JBQXNCO01BQ3RCLGtCQUFrQjtNQUNsQix1QkFBdUI7TUFDdkIsZ0JBQWdCO01BQ2hCLDJSQUEyUjtNQUMzUiw0QkFBNEI7TUFDNUIsc0NBQXNDO01BQ3RDLG9CQUFvQjtJQUN0Qjs7SUFFQTtNQUNFLGFBQWE7TUFDYixxQkFBcUI7SUFDdkIiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuc29ydC1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIFxuICAgIGxhYmVsIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgY29sb3I6ICM2NjY7XG4gICAgfVxuICAgIFxuICAgIHNlbGVjdCB7XG4gICAgICBwYWRkaW5nOiA4cHggMzBweCA4cHggMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VVEYtOCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCclM2UlM2Nwb2x5bGluZSBwb2ludHM9JzYgOSAxMiAxNSAxOCA5JyUzZSUzYy9wb2x5bGluZSUzZSUzYy9zdmclM2VcIik7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTBweCBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDFlbTtcbiAgICB9XG4gICAgXG4gICAgc2VsZWN0OmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3JkZXItY29sb3I6ICMxOTc2ZDI7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}


/***/ }),

/***/ 1743:
/*!******************************************************************************!*\
  !*** ./src/app/features/products/product-detail/product-detail.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductDetailComponent: () => (/* binding */ ProductDetailComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/product.service */ 7359);
/* harmony import */ var _core_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/cart.service */ 3661);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/notification.service */ 5567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ 4102);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tabs */ 8223);
/* harmony import */ var _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/loading-spinner/loading-spinner.component */ 4333);
/* harmony import */ var _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/product-card/product-card.component */ 6071);
/* harmony import */ var _shared_components_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/star-rating/star-rating.component */ 3829);
/* harmony import */ var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/not-found/not-found.component */ 13);
/* harmony import */ var _components_product_reviews_product_reviews_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/product-reviews/product-reviews.component */ 3948);
/* harmony import */ var _components_add_review_add_review_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/add-review/add-review.component */ 9066);
/* harmony import */ var _shared_pipes_price_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/pipes/price.pipe */ 3535);




















function ProductDetailComponent_app_loading_spinner_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-loading-spinner", 7);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("overlay", true);
  }
}
function ProductDetailComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 8)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "error_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProductDetailComponent_div_8_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r5.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Go Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.error);
  }
}
function ProductDetailComponent_ng_container_9_ng_container_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProductDetailComponent_ng_container_9_ng_container_8_div_1_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r20);
      const image_r18 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r19.updateSelectedImage(image_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const image_r18 = ctx.$implicit;
    const product_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2).ngIf;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r17.selectedImage === image_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", image_r18, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"])("alt", product_r7.name + " additional image");
  }
}
function ProductDetailComponent_ng_container_9_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ProductDetailComponent_ng_container_9_ng_container_8_div_1_Template, 2, 4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const product_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", product_r7.additionalImages);
  }
}
function ProductDetailComponent_ng_container_9_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](product_r7.category.name);
  }
}
function ProductDetailComponent_ng_container_9_span_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "price");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, product_r7.regularPrice), " ");
  }
}
function ProductDetailComponent_ng_container_9_span_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](2, 1, (product_r7.regularPrice - product_r7.price) / product_r7.regularPrice * 100, "1.0-0"), "% OFF ");
  }
}
function ProductDetailComponent_ng_container_9_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" (Only ", product_r7.stockQuantity, " left) ");
  }
}
function ProductDetailComponent_ng_container_9_div_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 37)(1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](product_r7.specifications["weight"] || "N/A");
  }
}
function ProductDetailComponent_ng_container_9_div_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 37)(1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Dimensions");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](product_r7.specifications["dimensions"] || "N/A");
  }
}
function ProductDetailComponent_ng_container_9_mat_tab_69_tr_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const spec_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 2, spec_r30.key.toString()));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](spec_r30.value);
  }
}
const _c0 = function () {
  return {};
};
function ProductDetailComponent_ng_container_9_mat_tab_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-tab", 55)(1, "div", 43)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Product Specifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "table", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, ProductDetailComponent_ng_container_9_mat_tab_69_tr_5_Template, 6, 4, "tr", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 1, product_r7.specifications || _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](3, _c0)));
  }
}
function ProductDetailComponent_ng_container_9_section_78_app_product_card_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "app-product-card", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("productAddedToCart", function ProductDetailComponent_ng_container_9_section_78_app_product_card_4_Template_app_product_card_productAddedToCart_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r34.addToCart($event));
    })("productAddedToWishlist", function ProductDetailComponent_ng_container_9_section_78_app_product_card_4_Template_app_product_card_productAddedToWishlist_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r35);
      const relatedProduct_r33 = restoredCtx.$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r36.addToWishlist(relatedProduct_r33));
    })("productViewed", function ProductDetailComponent_ng_container_9_section_78_app_product_card_4_Template_app_product_card_productViewed_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r35);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r37.updateSelectedImage(null));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const relatedProduct_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("product", relatedProduct_r33);
  }
}
function ProductDetailComponent_ng_container_9_section_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "section", 58)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Related Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, ProductDetailComponent_ng_container_9_section_78_app_product_card_4_Template, 1, 1, "app-product-card", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 1, ctx_r16.relatedProducts$));
  }
}
const _c1 = function () {
  return [];
};
function ProductDetailComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 10)(2, "div", 11)(3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 14)(6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProductDetailComponent_ng_container_9_Template_div_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39);
      const product_r7 = restoredCtx.ngIf;
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r38.updateSelectedImage(product_r7.imageUrl));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, ProductDetailComponent_ng_container_9_ng_container_8_Template, 2, 1, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](10, ProductDetailComponent_ng_container_9_div_10_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "h1", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](14, "app-star-rating", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 22)(16, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](18, "price");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, ProductDetailComponent_ng_container_9_span_19_Template, 3, 3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, ProductDetailComponent_ng_container_9_span_20_Template, 3, 4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 26)(22, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, ProductDetailComponent_ng_container_9_span_26_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "div", 29)(30, "div", 30)(31, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProductDetailComponent_ng_container_9_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r40.decrementQuantity());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProductDetailComponent_ng_container_9_Template_button_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r41.incrementQuantity());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProductDetailComponent_ng_container_9_Template_button_click_39_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39);
      const product_r7 = restoredCtx.ngIf;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r42.addToCart(product_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, "shopping_cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, " Add to Cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProductDetailComponent_ng_container_9_Template_button_click_43_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39);
      const product_r7 = restoredCtx.ngIf;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r43.addToWishlist(product_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, "favorite_border");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](46, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "div", 35)(48, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49, "Product Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "div", 36)(51, "div", 37)(52, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, "SKU");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "div", 37)(57, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](58, "Brand");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](61, ProductDetailComponent_ng_container_9_div_61_Template, 5, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](62, ProductDetailComponent_ng_container_9_div_62_Template, 5, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "mat-tab-group", 41)(64, "mat-tab", 42)(65, "div", 43)(66, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](67, "Product Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](68, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](69, ProductDetailComponent_ng_container_9_mat_tab_69_Template, 7, 4, "mat-tab", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "mat-tab", 46)(71, "div", 43)(72, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](73, "Customer Reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](74, "app-product-reviews", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](76, "Add a Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "app-add-review", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("reviewSubmitted", function ProductDetailComponent_ng_container_9_Template_app_add_review_reviewSubmitted_77_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39);
      const product_r7 = restoredCtx.ngIf;
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r44.submitReview(product_r7, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](78, ProductDetailComponent_ng_container_9_section_78_Template, 6, 3, "section", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](79, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const product_r7 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    let tmp_30_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r2.selectedImage || product_r7.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"])("alt", product_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("active", ctx_r2.selectedImage === product_r7.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", product_r7.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"])("alt", product_r7.name + " main image");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", product_r7.additionalImages && product_r7.additionalImages.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", product_r7.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](product_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("rating", product_r7.rating || 0)("reviewCount", (product_r7.reviews == null ? null : product_r7.reviews.length) || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](18, 33, product_r7.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", product_r7.regularPrice && product_r7.regularPrice > product_r7.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", product_r7.regularPrice && product_r7.regularPrice > product_r7.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("out-of-stock", (product_r7.stockQuantity || 0) === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"]((product_r7.stockQuantity || 0) > 0 ? "check_circle" : "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"]((product_r7.stockQuantity || 0) > 0 ? "In Stock" : "Out of Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (product_r7.stockQuantity || 0) > 0 && (product_r7.stockQuantity || 0) < 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](product_r7.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r2.quantity <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r2.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", product_r7.stockQuantity === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](product_r7.sku || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](product_r7.brand || "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", product_r7.specifications);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", product_r7.specifications);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("innerHTML", product_r7.longDescription || product_r7.description, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", product_r7.specifications);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate1"]("label", "Reviews (", (product_r7.reviews == null ? null : product_r7.reviews.length) || 0, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("reviews", product_r7.reviews || _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](37, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("productId", product_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (tmp_30_0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](79, 35, ctx_r2.relatedProducts$)) == null ? null : tmp_30_0.length);
  }
}
function ProductDetailComponent_ng_template_11_app_not_found_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-not-found");
  }
}
function ProductDetailComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, ProductDetailComponent_ng_template_11_app_not_found_0_Template, 1, 0, "app-not-found", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 1, ctx_r4.loading$) && !ctx_r4.error);
  }
}
class ProductDetailComponent {
  constructor(store, route, router, productService, cartService, notificationService) {
    this.store = store;
    this.route = route;
    this.router = router;
    this.productService = productService;
    this.cartService = cartService;
    this.notificationService = notificationService;
    this.error = null;
    this.selectedImage = null;
    this.quantity = 1;
    this.loading$ = this.store.select(state => state.ui.loading);
    // Get product from store based on route param
    this.product$ = this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(params => params.get('id')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(id => {
      if (!id) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)(null);
      }
      return this.store.select(state => state.products.items.find(product => product.id === id) || null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(product => {
        if (!product) {
          // If product not in store, load it
          this.productService.loadProductById(id);
        } else {
          // Set selected image
          this.selectedImage = product.imageUrl;
        }
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.catchError)(err => {
      this.error = 'Failed to load product details';
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)(null);
    }));
    // Get related products
    this.relatedProducts$ = this.product$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(product => {
      if (!product) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)([]);
      }
      return this.store.select(state => state.products.items.filter(p => p.category?.id === product.category?.id && p.id !== product.id).slice(0, 4));
    }));
  }
  ngOnInit() {
    // Ensure all products are loaded
    this.productService.loadProducts();
  }
  updateSelectedImage(imageUrl) {
    this.selectedImage = imageUrl;
  }
  incrementQuantity() {
    this.quantity++;
  }
  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  addToCart(event) {
    const product = 'product' in event ? event.product : event;
    const quantity = 'quantity' in event ? event.quantity : this.quantity;
    this.cartService.addToCart(product, quantity);
    this.notificationService.show(`${product.name} added to cart`);
  }
  addToWishlist(product) {
    // This would dispatch the appropriate action for the wishlist
    this.notificationService.show(`${product.name} added to wishlist`);
  }
  submitReview(product, review) {
    // Extract only the required properties for the addProductReview method
    const reviewData = {
      rating: review.rating,
      title: review.title || '',
      comment: review.comment
    };
    this.productService.addProductReview(product.id, reviewData);
    this.notificationService.show('Thank you for your review!');
  }
  goBack() {
    this.router.navigate(['/products']);
  }
  static {
    this.ɵfac = function ProductDetailComponent_Factory(t) {
      return new (t || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_16__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: ProductDetailComponent,
      selectors: [["app-product-detail"]],
      decls: 13,
      vars: 8,
      consts: [[1, "product-detail-page"], [3, "overlay", 4, "ngIf"], [1, "container"], ["mat-stroked-button", "", 1, "back-button", 3, "click"], ["class", "error-message", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["notFound", ""], [3, "overlay"], [1, "error-message"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "product-detail"], [1, "product-images"], [1, "main-image"], [3, "src", "alt"], [1, "image-gallery"], [1, "image-thumbnail", 3, "click"], [4, "ngIf"], [1, "product-info"], ["class", "product-category", 4, "ngIf"], [1, "product-name"], [1, "product-rating"], [3, "rating", "reviewCount"], [1, "product-price"], [1, "current-price"], ["class", "regular-price", 4, "ngIf"], ["class", "discount-badge", 4, "ngIf"], [1, "product-availability"], ["class", "low-stock", 4, "ngIf"], [1, "product-description"], [1, "product-actions"], [1, "quantity-selector"], ["mat-icon-button", "", "color", "primary", 3, "disabled", "click"], ["mat-icon-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "add-to-cart-btn", 3, "disabled", "click"], ["mat-icon-button", "", 1, "wishlist-btn", 3, "click"], [1, "product-details"], [1, "details-grid"], [1, "detail-item"], [1, "detail-label"], [1, "detail-value"], ["class", "detail-item", 4, "ngIf"], [1, "product-tabs"], ["label", "Description"], [1, "tab-content"], [3, "innerHTML"], ["label", "Specifications", 4, "ngIf"], [3, "label"], [3, "reviews"], [3, "productId", "reviewSubmitted"], ["class", "related-products", 4, "ngIf"], ["class", "image-thumbnail", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "product-category"], [1, "regular-price"], [1, "discount-badge"], [1, "low-stock"], ["label", "Specifications"], [1, "specs-table"], [4, "ngFor", "ngForOf"], [1, "related-products"], [1, "related-grid"], [3, "product", "productAddedToCart", "productAddedToWishlist", "productViewed", 4, "ngFor", "ngForOf"], [3, "product", "productAddedToCart", "productAddedToWishlist", "productViewed"]],
      template: function ProductDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ProductDetailComponent_app_loading_spinner_1_Template, 1, 1, "app-loading-spinner", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 2)(4, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProductDetailComponent_Template_button_click_4_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "arrow_back");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, " Back to Products ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, ProductDetailComponent_div_8_Template, 7, 1, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, ProductDetailComponent_ng_container_9_Template, 80, 38, "ng-container", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](11, ProductDetailComponent_ng_template_11_Template, 2, 3, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 4, ctx.loading$));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.error);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](10, 6, ctx.product$))("ngIfElse", _r3);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__.MatDivider, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_22__.MatTabGroup, _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_3__.LoadingSpinnerComponent, _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_4__.ProductCardComponent, _shared_components_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_5__.StarRatingComponent, _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__.NotFoundComponent, _components_product_reviews_product_reviews_component__WEBPACK_IMPORTED_MODULE_7__.ProductReviewsComponent, _components_add_review_add_review_component__WEBPACK_IMPORTED_MODULE_8__.AddReviewComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_18__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_18__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_18__.KeyValuePipe, _shared_pipes_price_pipe__WEBPACK_IMPORTED_MODULE_9__.PricePipe],
      styles: [".product-detail-page[_ngcontent-%COMP%] {\n  padding: var(--spacing-xl) 0;\n  background: linear-gradient(135deg, var(--color-gray-50), white);\n  min-height: 80vh;\n}\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 var(--spacing-md);\n}\n\n.back-button[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-xl);\n  display: inline-flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  padding: var(--spacing-sm) var(--spacing-md);\n  border: 1px solid var(--color-gray-300);\n  border-radius: var(--border-radius-md);\n  background: white;\n  color: var(--color-text-secondary);\n  text-decoration: none;\n  transition: var(--transition-base);\n  font-weight: var(--font-weight-medium);\n}\n.back-button[_ngcontent-%COMP%]:hover {\n  background: var(--color-primary);\n  color: white;\n  border-color: var(--color-primary);\n  transform: translateX(-3px);\n}\n.back-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  transition: var(--transition-base);\n}\n.back-button[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  transform: translateX(-2px);\n}\n\n.error-message[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--color-error-light), var(--color-error-lighter));\n  border-radius: var(--border-radius-lg);\n  padding: var(--spacing-xl);\n  text-align: center;\n  margin-bottom: var(--spacing-2xl);\n  border: 1px solid var(--color-error-light);\n  box-shadow: var(--shadow-lg);\n}\n.error-message[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  height: 48px;\n  width: 48px;\n  color: var(--color-error);\n  margin-bottom: var(--spacing-md);\n  animation: _ngcontent-%COMP%_shake 0.5s ease-in-out;\n}\n.error-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  color: var(--color-error-dark);\n  margin-bottom: var(--spacing-md);\n  font-weight: var(--font-weight-medium);\n}\n.error-message[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-md);\n  background: var(--color-error);\n  color: white;\n}\n.error-message[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: var(--color-error-dark);\n}\n\n@keyframes _ngcontent-%COMP%_shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-5px);\n  }\n  75% {\n    transform: translateX(5px);\n  }\n}\n.product-detail[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--spacing-2xl);\n  margin-bottom: var(--spacing-3xl);\n  background: white;\n  border-radius: var(--border-radius-xl);\n  padding: var(--spacing-xl);\n  box-shadow: var(--shadow-lg);\n  border: 1px solid var(--color-gray-100);\n}\n\n.product-images[_ngcontent-%COMP%]   .main-image[_ngcontent-%COMP%] {\n  background: var(--color-gray-50);\n  border-radius: var(--border-radius-lg);\n  overflow: hidden;\n  margin-bottom: var(--spacing-md);\n  height: 450px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  box-shadow: var(--shadow-md);\n  border: 1px solid var(--color-gray-200);\n}\n.product-images[_ngcontent-%COMP%]   .main-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n  transition: var(--transition-smooth);\n}\n.product-images[_ngcontent-%COMP%]   .main-image[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.product-images[_ngcontent-%COMP%]   .main-image[_ngcontent-%COMP%]   .zoom-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: var(--spacing-md);\n  right: var(--spacing-md);\n  background: rgba(0, 0, 0, 0.7);\n  color: white;\n  border-radius: var(--border-radius-sm);\n  padding: var(--spacing-xs);\n  font-size: var(--font-size-xs);\n  opacity: 0;\n  transition: var(--transition-base);\n}\n.product-images[_ngcontent-%COMP%]   .main-image[_ngcontent-%COMP%]:hover   .zoom-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.product-images[_ngcontent-%COMP%]   .image-gallery[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-sm);\n  overflow-x: auto;\n  padding-bottom: var(--spacing-xs);\n}\n.product-images[_ngcontent-%COMP%]   .image-gallery[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 4px;\n}\n.product-images[_ngcontent-%COMP%]   .image-gallery[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--color-gray-100);\n  border-radius: var(--border-radius-sm);\n}\n.product-images[_ngcontent-%COMP%]   .image-gallery[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--color-primary);\n  border-radius: var(--border-radius-sm);\n}\n.product-images[_ngcontent-%COMP%]   .image-gallery[_ngcontent-%COMP%]   .image-thumbnail[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: var(--border-radius-md);\n  overflow: hidden;\n  cursor: pointer;\n  border: 2px solid transparent;\n  transition: var(--transition-base);\n  flex-shrink: 0;\n}\n.product-images[_ngcontent-%COMP%]   .image-gallery[_ngcontent-%COMP%]   .image-thumbnail.active[_ngcontent-%COMP%] {\n  border-color: var(--color-primary);\n  box-shadow: 0 0 0 2px var(--color-primary-light);\n}\n.product-images[_ngcontent-%COMP%]   .image-gallery[_ngcontent-%COMP%]   .image-thumbnail[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  box-shadow: var(--shadow-md);\n}\n.product-images[_ngcontent-%COMP%]   .image-gallery[_ngcontent-%COMP%]   .image-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.product-info[_ngcontent-%COMP%]   .product-category[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-size: var(--font-size-sm);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: var(--spacing-sm);\n  font-weight: var(--font-weight-semibold);\n  display: inline-block;\n  background: var(--color-primary-light);\n  padding: var(--spacing-xs) var(--spacing-sm);\n  border-radius: var(--border-radius-sm);\n}\n.product-info[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  font-weight: var(--font-weight-bold);\n  color: var(--color-text-primary);\n  margin: 0 0 var(--spacing-md);\n  line-height: 1.3;\n}\n.product-info[_ngcontent-%COMP%]   .product-rating[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-md);\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n}\n.product-info[_ngcontent-%COMP%]   .product-rating[_ngcontent-%COMP%]   .rating-stars[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2px;\n}\n.product-info[_ngcontent-%COMP%]   .product-rating[_ngcontent-%COMP%]   .rating-text[_ngcontent-%COMP%] {\n  color: var(--color-text-secondary);\n  font-size: var(--font-size-sm);\n}\n.product-info[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n}\n.product-info[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%]   .current-price[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  font-weight: var(--font-weight-bold);\n  color: var(--color-primary);\n}\n.product-info[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%]   .regular-price[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  color: var(--color-text-muted);\n  text-decoration: line-through;\n}\n.product-info[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%]   .discount-badge[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--color-error), var(--color-error-dark));\n  color: white;\n  padding: var(--spacing-xs) var(--spacing-sm);\n  border-radius: var(--border-radius-sm);\n  font-size: var(--font-size-sm);\n  font-weight: var(--font-weight-semibold);\n  box-shadow: var(--shadow-sm);\n}\n.product-info[_ngcontent-%COMP%]   .product-availability[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: var(--spacing-lg);\n  padding: var(--spacing-sm) var(--spacing-md);\n  border-radius: var(--border-radius-md);\n  font-weight: var(--font-weight-medium);\n}\n.product-info[_ngcontent-%COMP%]   .product-availability.in-stock[_ngcontent-%COMP%] {\n  background: var(--color-success-light);\n  color: var(--color-success-dark);\n  border: 1px solid var(--color-success);\n}\n.product-info[_ngcontent-%COMP%]   .product-availability.out-of-stock[_ngcontent-%COMP%] {\n  background: var(--color-error-light);\n  color: var(--color-error-dark);\n  border: 1px solid var(--color-error);\n}\n.product-info[_ngcontent-%COMP%]   .product-availability[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: var(--spacing-sm);\n}\n.product-info[_ngcontent-%COMP%]   .product-availability[_ngcontent-%COMP%]   .low-stock[_ngcontent-%COMP%] {\n  margin-left: var(--spacing-sm);\n  color: var(--color-warning-dark);\n  font-size: var(--font-size-sm);\n}\n.product-info[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-xl);\n  color: var(--color-text-secondary);\n  line-height: 1.7;\n  font-size: var(--font-size-md);\n}\n.product-info[_ngcontent-%COMP%]   .product-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-xl);\n}\n.product-info[_ngcontent-%COMP%]   .product-actions[_ngcontent-%COMP%]   .quantity-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 2px solid var(--color-gray-300);\n  border-radius: var(--border-radius-md);\n  background: white;\n  overflow: hidden;\n}\n.product-info[_ngcontent-%COMP%]   .product-actions[_ngcontent-%COMP%]   .quantity-selector[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 48px;\n  width: 48px;\n  border: none;\n  background: var(--color-gray-50);\n  color: var(--color-text-primary);\n  font-weight: var(--font-weight-bold);\n  cursor: pointer;\n  transition: var(--transition-base);\n}\n.product-info[_ngcontent-%COMP%]   .product-actions[_ngcontent-%COMP%]   .quantity-selector[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: var(--color-primary);\n  color: white;\n}\n.product-info[_ngcontent-%COMP%]   .product-actions[_ngcontent-%COMP%]   .quantity-selector[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.product-info[_ngcontent-%COMP%]   .product-actions[_ngcontent-%COMP%]   .quantity-selector[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 60px;\n  text-align: center;\n  font-weight: var(--font-weight-semibold);\n  padding: 0 var(--spacing-sm);\n  border-left: 1px solid var(--color-gray-300);\n  border-right: 1px solid var(--color-gray-300);\n}\n.product-info[_ngcontent-%COMP%]   .product-actions[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%] {\n  padding: 0 var(--spacing-xl);\n  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));\n  border: none;\n  border-radius: var(--border-radius-md);\n  color: white;\n  font-weight: var(--font-weight-semibold);\n  cursor: pointer;\n  transition: var(--transition-base);\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  flex: 1;\n  justify-content: center;\n}\n.product-info[_ngcontent-%COMP%]   .product-actions[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-lg);\n}\n.product-info[_ngcontent-%COMP%]   .product-actions[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.product-info[_ngcontent-%COMP%]   .product-actions[_ngcontent-%COMP%]   .wishlist-btn[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border: 2px solid var(--color-gray-300);\n  background: white;\n  border-radius: var(--border-radius-md);\n  color: var(--color-text-secondary);\n  cursor: pointer;\n  transition: var(--transition-base);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.product-info[_ngcontent-%COMP%]   .product-actions[_ngcontent-%COMP%]   .wishlist-btn[_ngcontent-%COMP%]:hover, .product-info[_ngcontent-%COMP%]   .product-actions[_ngcontent-%COMP%]   .wishlist-btn.active[_ngcontent-%COMP%] {\n  border-color: var(--color-error);\n  color: var(--color-error);\n  background: var(--color-error-light);\n}\n.product-info[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  margin: var(--spacing-xl) 0;\n}\n.product-info[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  font-weight: var(--font-weight-medium);\n  margin-bottom: var(--spacing-md);\n  position: relative;\n}\n.product-info[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  width: 60px;\n  height: 3px;\n  background-color: var(--color-primary);\n  margin-top: var(--spacing-xs);\n}\n.product-info[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--spacing-md);\n}\n.product-info[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.product-info[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xs);\n  color: var(--color-text-secondary);\n  margin-bottom: var(--spacing-xs);\n}\n.product-info[_ngcontent-%COMP%]   .product-details[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  font-weight: var(--font-weight-medium);\n  color: var(--color-text-primary);\n}\n\n.product-tabs[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-3xl);\n}\n.product-tabs[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%] {\n  padding: var(--spacing-xl);\n}\n.product-tabs[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--font-size-xl);\n  font-weight: var(--font-weight-medium);\n  margin-bottom: var(--spacing-md);\n}\n.product-tabs[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: var(--font-size-lg);\n  font-weight: var(--font-weight-medium);\n  margin: var(--spacing-xl) 0 var(--spacing-md);\n}\n.product-tabs[_ngcontent-%COMP%]   .specs-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.product-tabs[_ngcontent-%COMP%]   .specs-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--color-gray-200);\n}\n.product-tabs[_ngcontent-%COMP%]   .specs-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.product-tabs[_ngcontent-%COMP%]   .specs-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .product-tabs[_ngcontent-%COMP%]   .specs-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: var(--spacing-md);\n  text-align: left;\n}\n.product-tabs[_ngcontent-%COMP%]   .specs-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  width: 30%;\n  color: var(--color-text-secondary);\n  font-weight: var(--font-weight-medium);\n}\n.product-tabs[_ngcontent-%COMP%]   .specs-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: var(--color-text-primary);\n}\n\n.related-products[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-3xl);\n}\n.related-products[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--font-size-2xl);\n  font-weight: var(--font-weight-semibold);\n  margin-bottom: var(--spacing-xl);\n  position: relative;\n}\n.related-products[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  width: 60px;\n  height: 3px;\n  background-color: var(--color-primary);\n  margin-top: var(--spacing-xs);\n}\n.related-products[_ngcontent-%COMP%]   .related-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: var(--spacing-xl);\n}\n\n@media (max-width: 992px) {\n  .related-products[_ngcontent-%COMP%]   .related-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .product-detail[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: var(--spacing-xl);\n  }\n  .product-images[_ngcontent-%COMP%]   .main-image[_ngcontent-%COMP%] {\n    height: 350px;\n  }\n  .related-products[_ngcontent-%COMP%]   .related-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: var(--spacing-md);\n  }\n}\n@media (max-width: 576px) {\n  .product-info[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n    font-size: var(--font-size-xl);\n  }\n  .product-info[_ngcontent-%COMP%]   .product-actions[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .product-info[_ngcontent-%COMP%]   .product-actions[_ngcontent-%COMP%]   .quantity-selector[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-right: 0;\n    margin-bottom: var(--spacing-md);\n    justify-content: center;\n  }\n  .product-info[_ngcontent-%COMP%]   .product-actions[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%] {\n    flex-grow: 1;\n  }\n  .related-products[_ngcontent-%COMP%]   .related-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcHJvZHVjdHMvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSw0QkFBQTtFQUNBLGdFQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0FBRkY7O0FBS0E7RUFDRSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRDQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQkFBQTtFQUNBLGtDQUFBO0VBQ0Esc0NBQUE7QUFGRjtBQUlFO0VBQ0UsZ0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtBQUZKO0FBS0U7RUFDRSxrQ0FBQTtBQUhKO0FBTUU7RUFDRSwyQkFBQTtBQUpKOztBQVFBO0VBQ0UseUZBQUE7RUFDQSxzQ0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsNEJBQUE7QUFMRjtBQU9FO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0FBTEo7QUFRRTtFQUNFLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0FBTko7QUFTRTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FBUEo7QUFTSTtFQUNFLG1DQUFBO0FBUE47O0FBWUE7RUFDRTtJQUFXLHdCQUFBO0VBUlg7RUFTQTtJQUFNLDJCQUFBO0VBTk47RUFPQTtJQUFNLDBCQUFBO0VBSk47QUFDRjtBQU1BO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsdUNBQUE7QUFKRjs7QUFTRTtFQUNFLGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLHVDQUFBO0FBTko7QUFRSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7QUFOTjtBQVNJO0VBQ0Usc0JBQUE7QUFQTjtBQVdJO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO0FBVE47QUFZSTtFQUNFLFVBQUE7QUFWTjtBQWNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtBQVpKO0FBY0k7RUFDRSxXQUFBO0FBWk47QUFlSTtFQUNFLGlDQUFBO0VBQ0Esc0NBQUE7QUFiTjtBQWdCSTtFQUNFLGdDQUFBO0VBQ0Esc0NBQUE7QUFkTjtBQWlCSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtBQWZOO0FBaUJNO0VBQ0Usa0NBQUE7RUFDQSxnREFBQTtBQWZSO0FBa0JNO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtBQWhCUjtBQW1CTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFqQlI7O0FBeUJFO0VBQ0UsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHdDQUFBO0VBQ0EscUJBQUE7RUFDQSxzQ0FBQTtFQUNBLDRDQUFBO0VBQ0Esc0NBQUE7QUF0Qko7QUF5QkU7RUFDRSwrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FBdkJKO0FBMEJFO0VBQ0UsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQXhCSjtBQTBCSTtFQUNFLGFBQUE7RUFDQSxRQUFBO0FBeEJOO0FBMkJJO0VBQ0Usa0NBQUE7RUFDQSw4QkFBQTtBQXpCTjtBQTZCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FBM0JKO0FBNkJJO0VBQ0UsK0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0FBM0JOO0FBOEJJO0VBQ0UsOEJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0FBNUJOO0FBK0JJO0VBQ0UsZ0ZBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7RUFDQSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtBQTdCTjtBQWlDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNENBQUE7RUFDQSxzQ0FBQTtFQUNBLHNDQUFBO0FBL0JKO0FBaUNJO0VBQ0Usc0NBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0FBL0JOO0FBa0NJO0VBQ0Usb0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0FBaENOO0FBbUNJO0VBQ0UsK0JBQUE7QUFqQ047QUFvQ0k7RUFDRSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7QUFsQ047QUFzQ0U7RUFDRSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQXBDSjtBQXVDRTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QUFyQ0o7QUF1Q0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQXJDTjtBQXVDTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtBQXJDUjtBQXVDUTtFQUNFLGdDQUFBO0VBQ0EsWUFBQTtBQXJDVjtBQXdDUTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQXRDVjtBQTBDTTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSw0QkFBQTtFQUNBLDRDQUFBO0VBQ0EsNkNBQUE7QUF4Q1I7QUE0Q0k7RUFDRSw0QkFBQTtFQUNBLG9GQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxPQUFBO0VBQ0EsdUJBQUE7QUExQ047QUE0Q007RUFDRSwyQkFBQTtFQUNBLDRCQUFBO0FBMUNSO0FBNkNNO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQTNDUjtBQStDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQTdDTjtBQStDTTtFQUNFLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtBQTdDUjtBQWtERTtFQUNFLDJCQUFBO0FBaERKO0FBb0RJO0VBQ0UsOEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUFsRE47QUFvRE07RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBQUE7RUFDQSw2QkFBQTtBQWxEUjtBQXNESTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0FBcEROO0FBc0RNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBcERSO0FBc0RRO0VBQ0UsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLGdDQUFBO0FBcERWO0FBdURRO0VBQ0Usc0NBQUE7RUFDQSxnQ0FBQTtBQXJEVjs7QUE2REE7RUFDRSxpQ0FBQTtBQTFERjtBQTRERTtFQUNFLDBCQUFBO0FBMURKO0FBNERJO0VBQ0UsOEJBQUE7RUFDQSxzQ0FBQTtFQUNBLGdDQUFBO0FBMUROO0FBNkRJO0VBQ0UsOEJBQUE7RUFDQSxzQ0FBQTtFQUNBLDZDQUFBO0FBM0ROO0FBK0RFO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0FBN0RKO0FBK0RJO0VBQ0UsOENBQUE7QUE3RE47QUErRE07RUFDRSxtQkFBQTtBQTdEUjtBQWlFSTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7QUEvRE47QUFrRUk7RUFDRSxVQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQ0FBQTtBQWhFTjtBQW1FSTtFQUNFLGdDQUFBO0FBakVOOztBQXVFQTtFQUNFLGlDQUFBO0FBcEVGO0FBc0VFO0VBQ0UsK0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUFwRUo7QUFzRUk7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBQUE7RUFDQSw2QkFBQTtBQXBFTjtBQXdFRTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHNCQUFBO0FBdEVKOztBQTJFQTtFQUVJO0lBQ0UscUNBQUE7RUF6RUo7QUFDRjtBQTZFQTtFQUNFO0lBQ0UsMEJBQUE7SUFDQSxzQkFBQTtFQTNFRjtFQStFRTtJQUNFLGFBQUE7RUE3RUo7RUFrRkU7SUFDRSxxQ0FBQTtJQUNBLHNCQUFBO0VBaEZKO0FBQ0Y7QUFvRkE7RUFFSTtJQUNFLDhCQUFBO0VBbkZKO0VBc0ZFO0lBQ0UsZUFBQTtFQXBGSjtFQXNGSTtJQUNFLFdBQUE7SUFDQSxlQUFBO0lBQ0EsZ0NBQUE7SUFDQSx1QkFBQTtFQXBGTjtFQXVGSTtJQUNFLFlBQUE7RUFyRk47RUEyRkU7SUFDRSwwQkFBQTtFQXpGSjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRW5oYW5jZWQgUHJvZHVjdCBEZXRhaWwgQ29tcG9uZW50IFN0eWxlcyB3aXRoIE1vZGVybiBEZXNpZ24gU3lzdGVtXG5cbi8vIEVuaGFuY2VkIFByb2R1Y3QgRGV0YWlsIENvbnRhaW5lclxuLnByb2R1Y3QtZGV0YWlsLXBhZ2Uge1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXhsKSAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1jb2xvci1ncmF5LTUwKSwgd2hpdGUpO1xuICBtaW4taGVpZ2h0OiA4MHZoO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNpbmctbWQpO1xufVxuXG4uYmFjay1idXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLXhsKTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogdmFyKC0tc3BhY2luZy1zbSk7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctc20pIHZhcigtLXNwYWNpbmctbWQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ncmF5LTMwMCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtbWQpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLWJhc2UpO1xuICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcbiAgXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KTtcbiAgfVxuICBcbiAgbWF0LWljb24ge1xuICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tYmFzZSk7XG4gIH1cbiAgXG4gICY6aG92ZXIgbWF0LWljb24ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnB4KTtcbiAgfVxufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWNvbG9yLWVycm9yLWxpZ2h0KSwgdmFyKC0tY29sb3ItZXJyb3ItbGlnaHRlcikpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLWxnKTtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy14bCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy0yeGwpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1lcnJvci1saWdodCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1sZyk7XG4gIFxuICBtYXQtaWNvbiB7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICB3aWR0aDogNDhweDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZXJyb3IpO1xuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctbWQpO1xuICAgIGFuaW1hdGlvbjogc2hha2UgMC41cyBlYXNlLWluLW91dDtcbiAgfVxuICBcbiAgcCB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGcpO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1lcnJvci1kYXJrKTtcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLW1kKTtcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcbiAgfVxuICBcbiAgYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjaW5nLW1kKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1lcnJvcik7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItZXJyb3ItZGFyayk7XG4gICAgfVxuICB9XG59XG5cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxuICAyNSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCk7IH1cbiAgNzUlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7IH1cbn1cblxuLnByb2R1Y3QtZGV0YWlsIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IHZhcigtLXNwYWNpbmctMnhsKTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy0zeGwpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy14bCk7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmcteGwpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbGcpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ncmF5LTEwMCk7XG59XG5cbi8vIEVuaGFuY2VkIFByb2R1Y3QgSW1hZ2VzXG4ucHJvZHVjdC1pbWFnZXMge1xuICAubWFpbi1pbWFnZSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItZ3JheS01MCk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1sZyk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLW1kKTtcbiAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ncmF5LTIwMCk7XG4gICAgXG4gICAgaW1nIHtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi1zbW9vdGgpO1xuICAgIH1cblxuICAgICY6aG92ZXIgaW1nIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgfVxuXG4gICAgLy8gWm9vbSBmdW5jdGlvbmFsaXR5XG4gICAgLnpvb20tb3ZlcmxheSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IHZhcigtLXNwYWNpbmctbWQpO1xuICAgICAgcmlnaHQ6IHZhcigtLXNwYWNpbmctbWQpO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1zbSk7XG4gICAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXhzKTtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXhzKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLWJhc2UpO1xuICAgIH1cblxuICAgICY6aG92ZXIgLnpvb20tb3ZlcmxheSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuICBcbiAgLmltYWdlLWdhbGxlcnkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zcGFjaW5nLXhzKTtcbiAgICBcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICBoZWlnaHQ6IDRweDtcbiAgICB9XG4gICAgXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItZ3JheS0xMDApO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1zbSk7XG4gICAgfVxuICAgIFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1zbSk7XG4gICAgfVxuICAgIFxuICAgIC5pbWFnZS10aHVtYm5haWwge1xuICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLW1kKTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tYmFzZSk7XG4gICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIFxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggdmFyKC0tY29sb3ItcHJpbWFyeS1saWdodCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gRW5oYW5jZWQgUHJvZHVjdCBJbmZvXG4ucHJvZHVjdC1pbmZvIHtcbiAgLnByb2R1Y3QtY2F0ZWdvcnkge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctc20pO1xuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zZW1pYm9sZCk7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnktbGlnaHQpO1xuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmcteHMpIHZhcigtLXNwYWNpbmctc20pO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtc20pO1xuICB9XG4gIFxuICAucHJvZHVjdC1uYW1lIHtcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0yeGwpO1xuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1wcmltYXJ5KTtcbiAgICBtYXJnaW46IDAgMCB2YXIoLS1zcGFjaW5nLW1kKTtcbiAgICBsaW5lLWhlaWdodDogMS4zO1xuICB9XG4gIFxuICAucHJvZHVjdC1yYXRpbmcge1xuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctbWQpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xuICAgIFxuICAgIC5yYXRpbmctc3RhcnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogMnB4O1xuICAgIH1cbiAgICBcbiAgICAucmF0aW5nLXRleHQge1xuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcbiAgICB9XG4gIH1cbiAgXG4gIC5wcm9kdWN0LXByaWNlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogdmFyKC0tc3BhY2luZy1tZCk7XG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy1sZyk7XG4gICAgXG4gICAgLmN1cnJlbnQtcHJpY2Uge1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtMnhsKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgICB9XG4gICAgXG4gICAgLnJlZ3VsYXItcHJpY2Uge1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGcpO1xuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgfVxuICAgIFxuICAgIC5kaXNjb3VudC1iYWRnZSB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1jb2xvci1lcnJvciksIHZhcigtLWNvbG9yLWVycm9yLWRhcmspKTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmcteHMpIHZhcigtLXNwYWNpbmctc20pO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1zbSk7XG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1zbSk7XG4gICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtc2VtaWJvbGQpO1xuICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbiAgICB9XG4gIH1cbiAgXG4gIC5wcm9kdWN0LWF2YWlsYWJpbGl0eSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctbGcpO1xuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctc20pIHZhcigtLXNwYWNpbmctbWQpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtbWQpO1xuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xuICAgIFxuICAgICYuaW4tc3RvY2sge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc3VjY2Vzcy1saWdodCk7XG4gICAgICBjb2xvcjogdmFyKC0tY29sb3Itc3VjY2Vzcy1kYXJrKTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXN1Y2Nlc3MpO1xuICAgIH1cblxuICAgICYub3V0LW9mLXN0b2NrIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWVycm9yLWxpZ2h0KTtcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1lcnJvci1kYXJrKTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWVycm9yKTtcbiAgICB9XG4gICAgXG4gICAgbWF0LWljb24ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1zcGFjaW5nLXNtKTtcbiAgICB9XG4gICAgXG4gICAgLmxvdy1zdG9jayB7XG4gICAgICBtYXJnaW4tbGVmdDogdmFyKC0tc3BhY2luZy1zbSk7XG4gICAgICBjb2xvcjogdmFyKC0tY29sb3Itd2FybmluZy1kYXJrKTtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXNtKTtcbiAgICB9XG4gIH1cbiAgXG4gIC5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLXhsKTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbWQpO1xuICB9XG4gIFxuICAucHJvZHVjdC1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGdhcDogdmFyKC0tc3BhY2luZy1tZCk7XG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy14bCk7XG4gICAgXG4gICAgLnF1YW50aXR5LXNlbGVjdG9yIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItZ3JheS0zMDApO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1tZCk7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItZ3JheS01MCk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXByaW1hcnkpO1xuICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi1iYXNlKTtcbiAgICAgICAgXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWluLXdpZHRoOiA2MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zZW1pYm9sZCk7XG4gICAgICAgIHBhZGRpbmc6IDAgdmFyKC0tc3BhY2luZy1zbSk7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tY29sb3ItZ3JheS0zMDApO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ncmF5LTMwMCk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC5hZGQtdG8tY2FydC1idG4ge1xuICAgICAgcGFkZGluZzogMCB2YXIoLS1zcGFjaW5nLXhsKTtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWNvbG9yLXByaW1hcnkpLCB2YXIoLS1jb2xvci1wcmltYXJ5LWRhcmspKTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtbWQpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXNlbWlib2xkKTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tYmFzZSk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogdmFyKC0tc3BhY2luZy1zbSk7XG4gICAgICBmbGV4OiAxO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBcbiAgICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1sZyk7XG4gICAgICB9XG4gICAgICBcbiAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLndpc2hsaXN0LWJ0biB7XG4gICAgICB3aWR0aDogNDhweDtcbiAgICAgIGhlaWdodDogNDhweDtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWdyYXktMzAwKTtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1tZCk7XG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi1iYXNlKTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBcbiAgICAgICY6aG92ZXIsICYuYWN0aXZlIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1lcnJvcik7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1lcnJvcik7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWVycm9yLWxpZ2h0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIG1hdC1kaXZpZGVyIHtcbiAgICBtYXJnaW46IHZhcigtLXNwYWNpbmcteGwpIDA7XG4gIH1cbiAgXG4gIC5wcm9kdWN0LWRldGFpbHMge1xuICAgIGgzIHtcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLWxnKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xuICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy1tZCk7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIG1hcmdpbi10b3A6IHZhcigtLXNwYWNpbmcteHMpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuZGV0YWlscy1ncmlkIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICBnYXA6IHZhcigtLXNwYWNpbmctbWQpO1xuICAgICAgXG4gICAgICAuZGV0YWlsLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBcbiAgICAgICAgLmRldGFpbC1sYWJlbCB7XG4gICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteHMpO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy14cyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5kZXRhaWwtdmFsdWUge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1tZWRpdW0pO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXByaW1hcnkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFByb2R1Y3QgVGFic1xuLnByb2R1Y3QtdGFicyB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctM3hsKTtcbiAgXG4gIC50YWItY29udGVudCB7XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy14bCk7XG4gICAgXG4gICAgaDMge1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUteGwpO1xuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XG4gICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLW1kKTtcbiAgICB9XG4gICAgXG4gICAgaDQge1xuICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtbGcpO1xuICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW1lZGl1bSk7XG4gICAgICBtYXJnaW46IHZhcigtLXNwYWNpbmcteGwpIDAgdmFyKC0tc3BhY2luZy1tZCk7XG4gICAgfVxuICB9XG4gIFxuICAuc3BlY3MtdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgXG4gICAgdHIge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWdyYXktMjAwKTtcbiAgICAgIFxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgdGgsIHRkIHtcbiAgICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWQpO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gICAgXG4gICAgdGgge1xuICAgICAgd2lkdGg6IDMwJTtcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbWVkaXVtKTtcbiAgICB9XG4gICAgXG4gICAgdGQge1xuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtcHJpbWFyeSk7XG4gICAgfVxuICB9XG59XG5cbi8vIFJlbGF0ZWQgUHJvZHVjdHNcbi5yZWxhdGVkLXByb2R1Y3RzIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy0zeGwpO1xuICBcbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLTJ4bCk7XG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXNlbWlib2xkKTtcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLXhsKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICBoZWlnaHQ6IDNweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAgICAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2luZy14cyk7XG4gICAgfVxuICB9XG4gIFxuICAucmVsYXRlZC1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gICAgZ2FwOiB2YXIoLS1zcGFjaW5nLXhsKTtcbiAgfVxufVxuXG4vLyBSZXNwb25zaXZlIHN0eWxlc1xuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5yZWxhdGVkLXByb2R1Y3RzIHtcbiAgICAucmVsYXRlZC1ncmlkIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucHJvZHVjdC1kZXRhaWwge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdhcDogdmFyKC0tc3BhY2luZy14bCk7XG4gIH1cbiAgXG4gIC5wcm9kdWN0LWltYWdlcyB7XG4gICAgLm1haW4taW1hZ2Uge1xuICAgICAgaGVpZ2h0OiAzNTBweDtcbiAgICB9XG4gIH1cbiAgXG4gIC5yZWxhdGVkLXByb2R1Y3RzIHtcbiAgICAucmVsYXRlZC1ncmlkIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgICBnYXA6IHZhcigtLXNwYWNpbmctbWQpO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnByb2R1Y3QtaW5mbyB7XG4gICAgLnByb2R1Y3QtbmFtZSB7XG4gICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS14bCk7XG4gICAgfVxuICAgIFxuICAgIC5wcm9kdWN0LWFjdGlvbnMge1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgXG4gICAgICAucXVhbnRpdHktc2VsZWN0b3Ige1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLW1kKTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5hZGQtdG8tY2FydC1idG4ge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAucmVsYXRlZC1wcm9kdWN0cyB7XG4gICAgLnJlbGF0ZWQtZ3JpZCB7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}


/***/ }),

/***/ 6594:
/*!**************************************************************!*\
  !*** ./src/app/features/products/products-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsRoutingModule: () => (/* binding */ ProductsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.component */ 5644);
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-detail/product-detail.component */ 1743);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);





const routes = [{
  path: '',
  component: _products_component__WEBPACK_IMPORTED_MODULE_0__.ProductsComponent
}, {
  path: ':id',
  component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_1__.ProductDetailComponent
}];
class ProductsRoutingModule {
  static {
    this.ɵfac = function ProductsRoutingModule_Factory(t) {
      return new (t || ProductsRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: ProductsRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProductsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 5644:
/*!*********************************************************!*\
  !*** ./src/app/features/products/products.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsComponent: () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 9999);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 2575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _store_actions_product_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/actions/product.actions */ 3574);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store */ 1383);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/product.service */ 7359);
/* harmony import */ var _core_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/cart.service */ 3661);
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/notification.service */ 5567);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/loading-spinner/loading-spinner.component */ 4333);
/* harmony import */ var _components_product_filters_product_filters_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/product-filters/product-filters.component */ 9996);
/* harmony import */ var _components_product_sort_product_sort_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/product-sort/product-sort.component */ 5766);
/* harmony import */ var _components_product_grid_product_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/product-grid/product-grid.component */ 8082);
/* harmony import */ var _components_category_menu_category_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/category-menu/category-menu.component */ 1328);





















function ProductsComponent_app_loading_spinner_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-loading-spinner", 24);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("overlay", true);
  }
}
function ProductsComponent_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProductsComponent_button_30_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r2.searchControl.setValue(""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
class ProductsComponent {
  constructor(store, route, router, productService, cartService, notificationService) {
    this.store = store;
    this.route = route;
    this.router = router;
    this.productService = productService;
    this.cartService = cartService;
    this.notificationService = notificationService;
    this.filters = {};
    this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('');
    this.viewMode = 'grid';
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    this.products$ = this.store.select(state => state.products.items);
    this.categories$ = this.store.select(state => state.products.categories);
    this.loading$ = this.store.select(state => state.products.loading);
    // Create filtered products stream
    this.filteredProducts$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.combineLatest)([this.products$, this.route.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(params => {
      const filters = {};
      if (params['category']) filters.category = params['category'];
      if (params['minPrice']) filters.minPrice = Number(params['minPrice']);
      if (params['maxPrice']) filters.maxPrice = Number(params['maxPrice']);
      if (params['rating']) filters.rating = Number(params['rating']);
      if (params['sort']) filters.sort = params['sort'];
      if (params['search']) {
        filters.search = params['search'];
        this.searchControl.setValue(params['search']);
      }
      this.filters = filters;
      return filters;
    }))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(([products, filters]) => this.filterProducts(products, filters)));
  }
  ngOnInit() {
    console.log('ProductsComponent: ngOnInit - dispatching actions');
    // Dispatch actions to load products and categories
    this.store.dispatch(_store_actions_product_actions__WEBPACK_IMPORTED_MODULE_0__.loadProducts({}));
    this.store.dispatch(_store_actions_product_actions__WEBPACK_IMPORTED_MODULE_0__.loadCategories());
    // Subscribe to products for debugging
    this.products$.subscribe(products => {
      console.log('ProductsComponent: products updated', products);
    });
    // Subscribe to loading state for debugging
    this.loading$.subscribe(loading => {
      console.log('ProductsComponent: loading state', loading);
    });
    // Handle search input with debounce
    this.searchControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this.destroy$)).subscribe(value => {
      this.updateFilters({
        search: value || undefined
      });
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onCategoryChange(categoryId) {
    this.updateFilters({
      category: categoryId || undefined
    });
  }
  onPriceRangeChange(priceRange) {
    this.updateFilters({
      minPrice: priceRange.min,
      maxPrice: priceRange.max
    });
  }
  onRatingChange(rating) {
    this.updateFilters({
      rating: rating || undefined
    });
  }
  onSortChange(sort) {
    this.updateFilters({
      sort
    });
  }
  onViewModeChange(mode) {
    this.viewMode = mode;
  }
  onAddToCart(product) {
    this.cartService.addToCart(product);
    this.notificationService.show(`${product.name} added to cart`);
  }
  onAddToWishlist(product) {
    // This would dispatch the appropriate action for the wishlist
    this.notificationService.show(`${product.name} added to wishlist`);
  }
  onViewDetails(product) {
    this.router.navigate(['/products', product.id]);
  }
  resetFilters() {
    this.searchControl.setValue('');
    this.updateFilters({
      category: undefined,
      minPrice: undefined,
      maxPrice: undefined,
      rating: undefined,
      sort: undefined,
      search: undefined
    });
  }
  updateFilters(newFilters) {
    const updatedFilters = {
      ...this.filters,
      ...newFilters
    };
    // Remove undefined values
    Object.keys(updatedFilters).forEach(key => {
      if (updatedFilters[key] === undefined) {
        delete updatedFilters[key];
      }
    });
    // Navigate with new query params
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        ...updatedFilters
      },
      queryParamsHandling: 'merge'
    });
  }
  filterProducts(products, filters) {
    if (!filters || Object.keys(filters).length === 0) {
      return products;
    }
    let filtered = [...products];
    // Filter by category
    if (filters.category) {
      filtered = filtered.filter(product => product.category?.id === filters.category);
    }
    // Filter by price range
    if (filters.minPrice !== undefined) {
      filtered = filtered.filter(product => product.price >= filters.minPrice);
    }
    if (filters.maxPrice !== undefined) {
      filtered = filtered.filter(product => product.price <= filters.maxPrice);
    }
    // Filter by rating
    if (filters.rating !== undefined) {
      filtered = filtered.filter(product => (product.rating || 0) >= filters.rating);
    }
    // Filter by search term
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filtered = filtered.filter(product => product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm) || product.category?.name.toLowerCase().includes(searchTerm));
    }
    // Sort products
    if (filters.sort) {
      switch (filters.sort) {
        case 'price-low':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
          break;
        case 'newest':
          filtered.sort((a, b) => {
            const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
            const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
            return dateB - dateA;
          });
          break;
        case 'popularity':
          filtered.sort((a, b) => (b.reviews?.length || 0) - (a.reviews?.length || 0));
          break;
      }
    }
    return filtered;
  }
  testApiCall() {
    console.log('Manual test: Calling ProductService.getProducts directly');
    this.productService.getProducts({}).subscribe({
      next: response => {
        console.log('Manual test: Direct API call successful:', response);
      },
      error: error => {
        console.error('Manual test: Direct API call failed:', error);
      }
    });
    console.log('Manual test: Calling ProductService.getCategories directly');
    this.productService.getCategories().subscribe({
      next: categories => {
        console.log('Manual test: Direct categories call successful:', categories);
      },
      error: error => {
        console.error('Manual test: Direct categories call failed:', error);
      }
    });
  }
  static {
    this.ɵfac = function ProductsComponent_Factory(t) {
      return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_16__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
      type: ProductsComponent,
      selectors: [["app-products"]],
      decls: 56,
      vars: 33,
      consts: [[1, "products-page"], [3, "overlay", 4, "ngIf"], [1, "container"], [2, "background", "#f0f0f0", "padding", "10px", "margin", "10px 0", "border-radius", "5px"], ["mat-raised-button", "", "color", "primary", 2, "margin-top", "10px", 3, "click"], [1, "page-header"], [1, "page-title"], [1, "search-container"], ["appearance", "outline", 1, "search-field"], ["matInput", "", "placeholder", "Search by name, category or description", 3, "formControl"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["matSuffix", ""], [1, "products-layout"], [1, "filters-sidebar"], [3, "categories", "selectedCategory", "categorySelected"], [3, "minPrice", "maxPrice", "rating", "priceRangeChanged", "ratingChanged"], [1, "reset-filters"], ["mat-stroked-button", "", "color", "primary", 3, "click"], [1, "products-content"], [1, "products-toolbar"], [3, "currentSort", "sortChanged"], [1, "view-options"], ["mat-icon-button", "", 3, "click"], [3, "products", "viewMode", "addToCart", "addToWishlist", "viewDetails"], [3, "overlay"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"]],
      template: function ProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, ProductsComponent_app_loading_spinner_1_Template, 1, 1, "app-loading-spinner", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Debug Info:");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](12, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](15, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](18, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_20_listener() {
            return ctx.testApiCall();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, " Test Direct API Call ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 5)(23, "h1", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "Shop Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 7)(26, "mat-form-field", 8)(27, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "Search products");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](29, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, ProductsComponent_button_30_Template, 3, 0, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "mat-icon", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "div", 12)(34, "aside", 13)(35, "app-category-menu", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("categorySelected", function ProductsComponent_Template_app_category_menu_categorySelected_35_listener($event) {
            return ctx.onCategoryChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](36, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, "> ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "app-product-filters", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("priceRangeChanged", function ProductsComponent_Template_app_product_filters_priceRangeChanged_38_listener($event) {
            return ctx.onPriceRangeChange($event);
          })("ratingChanged", function ProductsComponent_Template_app_product_filters_ratingChanged_38_listener($event) {
            return ctx.onRatingChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "div", 16)(40, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_40_listener() {
            return ctx.resetFilters();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42, "refresh");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, " Reset Filters ");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "div", 18)(45, "div", 19)(46, "app-product-sort", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("sortChanged", function ProductsComponent_Template_app_product_sort_sortChanged_46_listener($event) {
            return ctx.onSortChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "div", 21)(48, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_48_listener() {
            return ctx.onViewModeChange("grid");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50, "grid_view");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "button", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ProductsComponent_Template_button_click_51_listener() {
            return ctx.onViewModeChange("list");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](53, "view_list");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "app-product-grid", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("addToCart", function ProductsComponent_Template_app_product_grid_addToCart_54_listener($event) {
            return ctx.onAddToCart($event);
          })("addToWishlist", function ProductsComponent_Template_app_product_grid_addToWishlist_54_listener($event) {
            return ctx.onAddToWishlist($event);
          })("viewDetails", function ProductsComponent_Template_app_product_grid_viewDetails_54_listener($event) {
            return ctx.onViewDetails($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](55, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          let tmp_2_0;
          let tmp_3_0;
          let tmp_4_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 19, ctx.loading$));
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Loading: ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 21, ctx.loading$), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Products count: ", ((tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](12, 23, ctx.products$)) == null ? null : tmp_2_0.length) || 0, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Filtered products count: ", ((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](15, 25, ctx.filteredProducts$)) == null ? null : tmp_3_0.length) || 0, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Categories count: ", ((tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](18, 27, ctx.categories$)) == null ? null : tmp_4_0.length) || 0, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formControl", ctx.searchControl);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.searchControl.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("categories", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](36, 29, ctx.categories$))("selectedCategory", ctx.filters.category || null);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("minPrice", ctx.filters.minPrice || 0)("maxPrice", ctx.filters.maxPrice || 1000)("rating", ctx.filters.rating || 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("currentSort", ctx.filters.sort || "name");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx.viewMode === "grid");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("active", ctx.viewMode === "list");
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("products", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](55, 31, ctx.filteredProducts$))("viewMode", ctx.viewMode);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatSuffix, _shared_components_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__.LoadingSpinnerComponent, _components_product_filters_product_filters_component__WEBPACK_IMPORTED_MODULE_5__.ProductFiltersComponent, _components_product_sort_product_sort_component__WEBPACK_IMPORTED_MODULE_6__.ProductSortComponent, _components_product_grid_product_grid_component__WEBPACK_IMPORTED_MODULE_7__.ProductGridComponent, _components_category_menu_category_menu_component__WEBPACK_IMPORTED_MODULE_8__.CategoryMenuComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe],
      styles: [".products-container[_ngcontent-%COMP%] {\n  padding: var(--spacing-lg) 0;\n  min-height: 80vh;\n}\n\n.products-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--spacing-xl);\n  flex-wrap: wrap;\n  gap: var(--spacing-md);\n}\n\n.products-title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  margin: 0;\n}\n\n.products-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-md);\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.filter-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-sm);\n  align-items: center;\n}\n\n.sort-select[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n\n.view-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  border: 1px solid var(--border-color);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n}\n.view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: var(--spacing-sm) var(--spacing-md);\n  border: none;\n  background: var(--bg-primary);\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: all var(--transition-fast);\n}\n.view-toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--primary-color);\n  color: white;\n}\n.view-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.active) {\n  background: var(--bg-secondary);\n}\n\n.products-content[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--spacing-xl);\n  grid-template-columns: 250px 1fr;\n}\n@media (max-width: 992px) {\n  .products-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: var(--spacing-lg);\n  }\n}\n\n.filters-sidebar[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n  border-radius: var(--radius-lg);\n  padding: var(--spacing-lg);\n  height: -moz-fit-content;\n  height: fit-content;\n  box-shadow: var(--shadow-sm);\n}\n@media (max-width: 992px) {\n  .filters-sidebar[_ngcontent-%COMP%] {\n    order: 2;\n  }\n}\n\n@media (max-width: 992px) {\n  .products-main[_ngcontent-%COMP%] {\n    order: 1;\n  }\n}\n\n.products-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--spacing-lg);\n}\n.products-grid.grid-view[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n}\n.products-grid.list-view[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n@media (max-width: 768px) {\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    gap: var(--spacing-md);\n  }\n}\n@media (max-width: 480px) {\n  .products-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.no-products[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--spacing-2xl);\n}\n.no-products[_ngcontent-%COMP%]   .no-products-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: var(--text-muted);\n  margin-bottom: var(--spacing-lg);\n}\n.no-products[_ngcontent-%COMP%]   .no-products-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--text-primary);\n  margin-bottom: var(--spacing-md);\n}\n.no-products[_ngcontent-%COMP%]   .no-products-description[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin-bottom: var(--spacing-lg);\n}\n\n.pagination-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: var(--spacing-xl);\n}\n\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 400px;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSw0QkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxTQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQUFGO0FBRUU7RUFDRSw0Q0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0FBQUo7QUFFSTtFQUNFLGdDQUFBO0VBQ0EsWUFBQTtBQUFOO0FBR0k7RUFDRSwrQkFBQTtBQUROOztBQU1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QUFIRjtBQUtFO0VBTEY7SUFNSSwwQkFBQTtJQUNBLHNCQUFBO0VBRkY7QUFDRjs7QUFLQTtFQUNFLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSw0QkFBQTtBQUZGO0FBSUU7RUFQRjtJQVFJLFFBQUE7RUFERjtBQUNGOztBQUtFO0VBREY7SUFFSSxRQUFBO0VBREY7QUFDRjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQURGO0FBR0U7RUFDRSw0REFBQTtBQURKO0FBSUU7RUFDRSwwQkFBQTtBQUZKO0FBS0U7RUFaRjtJQWFJLDREQUFBO0lBQ0Esc0JBQUE7RUFGRjtBQUNGO0FBSUU7RUFqQkY7SUFrQkksMEJBQUE7RUFERjtBQUNGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtBQURGO0FBR0U7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQ0FBQTtBQURKO0FBSUU7RUFDRSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7QUFGSjtBQUtFO0VBQ0UsNEJBQUE7RUFDQSxnQ0FBQTtBQUhKOztBQU9BO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFKRjs7QUFPQTtFQUNFO0lBQ0UseUJBQUE7RUFKRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9kZXJuIFByb2R1Y3RzIENvbXBvbmVudCBTdHlsZXNcbi5wcm9kdWN0cy1jb250YWluZXIge1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKSAwO1xuICBtaW4taGVpZ2h0OiA4MHZoO1xufVxuXG4ucHJvZHVjdHMtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLXhsKTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IHZhcigtLXNwYWNpbmctbWQpO1xufVxuXG4ucHJvZHVjdHMtdGl0bGUge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIG1hcmdpbjogMDtcbn1cblxuLnByb2R1Y3RzLWNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLW1kKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZmlsdGVyLWNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNvcnQtc2VsZWN0IHtcbiAgbWluLXdpZHRoOiAyMDBweDtcbn1cblxuLnZpZXctdG9nZ2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgXG4gIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1zbSkgdmFyKC0tc3BhY2luZy1tZCk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLXByaW1hcnkpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLWZhc3QpO1xuICAgIFxuICAgICYuYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBcbiAgICAmOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xuICAgIH1cbiAgfVxufVxuXG4ucHJvZHVjdHMtY29udGVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogdmFyKC0tc3BhY2luZy14bCk7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggMWZyO1xuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiB2YXIoLS1zcGFjaW5nLWxnKTtcbiAgfVxufVxuXG4uZmlsdGVycy1zaWRlYmFyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgb3JkZXI6IDI7XG4gIH1cbn1cblxuLnByb2R1Y3RzLW1haW4ge1xuICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICBvcmRlcjogMTtcbiAgfVxufVxuXG4ucHJvZHVjdHMtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogdmFyKC0tc3BhY2luZy1sZyk7XG4gIFxuICAmLmdyaWQtdmlldyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjgwcHgsIDFmcikpO1xuICB9XG4gIFxuICAmLmxpc3QtdmlldyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbiAgXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgICBnYXA6IHZhcigtLXNwYWNpbmctbWQpO1xuICB9XG4gIFxuICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuXG4ubm8tcHJvZHVjdHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctMnhsKTtcbiAgXG4gIC5uby1wcm9kdWN0cy1pY29uIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctbGcpO1xuICB9XG4gIFxuICAubm8tcHJvZHVjdHMtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctbWQpO1xuICB9XG4gIFxuICAubm8tcHJvZHVjdHMtZGVzY3JpcHRpb24ge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy1sZyk7XG4gIH1cbn1cblxuLnBhZ2luYXRpb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IHZhcigtLXNwYWNpbmcteGwpO1xufVxuXG4ubG9hZGluZy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNDAwcHg7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}


/***/ }),

/***/ 6187:
/*!******************************************************!*\
  !*** ./src/app/features/products/products.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsModule: () => (/* binding */ ProductsModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 3887);
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products-routing.module */ 6594);
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.component */ 5644);
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-detail/product-detail.component */ 1743);
/* harmony import */ var _components_product_filters_product_filters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/product-filters/product-filters.component */ 9996);
/* harmony import */ var _components_product_sort_product_sort_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/product-sort/product-sort.component */ 5766);
/* harmony import */ var _components_product_grid_product_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/product-grid/product-grid.component */ 8082);
/* harmony import */ var _components_product_reviews_product_reviews_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/product-reviews/product-reviews.component */ 3948);
/* harmony import */ var _components_add_review_add_review_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/add-review/add-review.component */ 9066);
/* harmony import */ var _components_category_menu_category_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/category-menu/category-menu.component */ 1328);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7580);











class ProductsModule {
  static {
    this.ɵfac = function ProductsModule_Factory(t) {
      return new (t || ProductsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
      type: ProductsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _products_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProductsRoutingModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](ProductsModule, {
    declarations: [_products_component__WEBPACK_IMPORTED_MODULE_2__.ProductsComponent, _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_3__.ProductDetailComponent, _components_product_filters_product_filters_component__WEBPACK_IMPORTED_MODULE_4__.ProductFiltersComponent, _components_product_sort_product_sort_component__WEBPACK_IMPORTED_MODULE_5__.ProductSortComponent, _components_product_grid_product_grid_component__WEBPACK_IMPORTED_MODULE_6__.ProductGridComponent, _components_product_reviews_product_reviews_component__WEBPACK_IMPORTED_MODULE_7__.ProductReviewsComponent, _components_add_review_add_review_component__WEBPACK_IMPORTED_MODULE_8__.AddReviewComponent, _components_category_menu_category_menu_component__WEBPACK_IMPORTED_MODULE_9__.CategoryMenuComponent],
    imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _products_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProductsRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_products_products_module_ts.js.map