function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_checkout_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/checkout/checkout/checkout.component */
    "./src/app/pages/checkout/checkout/checkout.component.ts");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _pages_product_full_view_product_full_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/product-full-view/product-full-view.component */
    "./src/app/pages/product-full-view/product-full-view.component.ts");

    var routes = [{
      path: '',
      component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'product',
      component: _pages_product_full_view_product_full_view_component__WEBPACK_IMPORTED_MODULE_4__["ProductFullViewComponent"]
    }, {
      path: 'checkout',
      component: _pages_checkout_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_2__["CheckoutComponent"]
    }];

    var AppRoutingModule =
    /*#__PURE__*/
    _createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    _createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'med-store';
    });

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      consts: [[2, "height", "98%"], [1, "top-nav"], [1, "router-container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: [".top-nav[_ngcontent-%COMP%] {\r\n  height: 64px;\r\n  position: fixed;\r\n  top: 0px;\r\n  width: 100%;\r\n  z-index: 1000;\r\n}\r\n\r\n.router-container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  overflow: hidden;\r\n  bottom: 0;\r\n  top: 64px;\r\n  height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixRQUFRO0VBQ1IsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFNBQVM7RUFDVCxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udG9wLW5hdiB7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAxMDAwO1xyXG59XHJcblxyXG4ucm91dGVyLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3R0b206IDA7XHJcbiAgdG9wOiA2NHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_products_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/products/products.component */
    "./src/app/components/products/products.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _pages_product_full_view_product_full_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/product-full-view/product-full-view.component */
    "./src/app/pages/product-full-view/product-full-view.component.ts");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _components_square_pay_square_pay_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/square-pay/square-pay.component */
    "./src/app/components/square-pay/square-pay.component.ts");
    /* harmony import */


    var _pages_checkout_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/checkout/checkout/checkout.component */
    "./src/app/pages/checkout/checkout/checkout.component.ts");
    /* harmony import */


    var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/cart/cart.component */
    "./src/app/components/cart/cart.component.ts");

    var AppModule =
    /*#__PURE__*/
    _createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _components_products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _pages_product_full_view_product_full_view_component__WEBPACK_IMPORTED_MODULE_8__["ProductFullViewComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _components_square_pay_square_pay_component__WEBPACK_IMPORTED_MODULE_13__["SquarePayComponent"], _pages_checkout_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_14__["CheckoutComponent"], _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_15__["CartComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _components_products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _pages_product_full_view_product_full_view_component__WEBPACK_IMPORTED_MODULE_8__["ProductFullViewComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _components_square_pay_square_pay_component__WEBPACK_IMPORTED_MODULE_13__["SquarePayComponent"], _pages_checkout_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_14__["CheckoutComponent"], _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_15__["CartComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/cart/cart.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/cart/cart.component.ts ***!
    \***************************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppComponentsCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/cart-service/cart.service */
    "./src/app/services/cart-service/cart.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function CartComponent_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Items In Cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CartComponent_div_2_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r113.ItemImageURL ? item_r113.ItemImageURL : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function CartComponent_div_2_div_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CartComponent_div_2_div_14_Template_input_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122);

          var item_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          return item_r113.quantity = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r113.quantity);
      }
    }

    function CartComponent_div_2_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r113.quantity, " ");
      }
    }

    function CartComponent_div_2_div_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_2_div_17_Template_span_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127);

          var item_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r125.edit(item_r113);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_2_div_17_Template_span_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r127);

          var item_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r128.removeCartItem(item_r113);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Remove");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CartComponent_div_2_div_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_2_div_18_Template_span_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r132);

          var item_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r130.updateItemQuantity(item_r113);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_2_div_18_Template_span_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r132);

          var item_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r133.cancel(item_r113);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CartComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CartComponent_div_2_div_2_Template, 2, 1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Quantity: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CartComponent_div_2_div_14_Template, 2, 1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CartComponent_div_2_div_15_Template, 2, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CartComponent_div_2_div_17_Template, 5, 0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CartComponent_div_2_div_18_Template, 5, 0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r113 = ctx.$implicit;

        var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r112.image);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r113.ProductName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, item_r113.SalePrice * item_r113.quantity), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r113.editing);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r113.editing);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r113.editing);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r113.editing);
      }
    }

    var CartComponent =
    /*#__PURE__*/
    function () {
      function CartComponent(cartService) {
        var _this = this;

        _classCallCheck(this, CartComponent);

        this.cartService = cartService;
        this.cartService.cart.subscribe(function (cart) {
          _this.cart = cart;
        });
      }

      _createClass(CartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cart = this.cartService.getCart();
        }
      }, {
        key: "removeCartItem",
        value: function removeCartItem(item) {
          this.cartService.deleteCartItem(item);
        }
      }, {
        key: "updateItemQuantity",
        value: function updateItemQuantity(item) {
          this.cartService.updateItemQuantity(item._id, item.quantity);
          item.editing = false;
        }
      }, {
        key: "edit",
        value: function edit(item) {
          item.originalQuantity = item.quantity;
          item.editing = true;
        }
      }, {
        key: "save",
        value: function save(item) {
          item.editing = false;
        }
      }, {
        key: "cancel",
        value: function cancel(item) {
          item.editing = false;
          item.quantity = item.originalQuantity;
        }
      }]);

      return CartComponent;
    }();

    CartComponent.ɵfac = function CartComponent_Factory(t) {
      return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]));
    };

    CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CartComponent,
      selectors: [["app-cart"]],
      inputs: {
        image: "image"
      },
      decls: 3,
      vars: 2,
      consts: [[1, "py-4", "pb-5"], ["class", "align-center", "style", "font-style: italic; color: gray;", 4, "ngIf"], ["class", "mb-3", 4, "ngFor", "ngForOf"], [1, "align-center", 2, "font-style", "italic", "color", "gray"], [1, "mb-3"], [1, "d-flex", 2, "width", "100%"], ["class", "d-flex", "style", "width: 20%; padding-right: 10px;", 4, "ngIf"], [2, "width", "100%"], [2, "float", "right"], [1, "d-flex"], [1, "d-flex", "mt-2"], [1, "d-flex", 2, "color", "gray"], ["class", "pl-3", 4, "ngIf"], ["class", "ml-2", 4, "ngIf"], [1, "d-flex", "ml-5"], ["class", "d-flex", 4, "ngIf"], [1, "d-flex", 2, "width", "20%", "padding-right", "10px"], ["alt", "...", 2, "max-height", "90px", "max-width", "100%", "min-height", "90px", 3, "src"], [1, "pl-3"], ["type", "text", 2, "max-width", "40px", "max-height", "25px", "font-size", "15px", "text-align", "center", 3, "ngModel", "ngModelChange"], [1, "ml-2"], [1, "btn", 2, "color", "rgb(36, 36, 228)", "margin-left", "5%", 3, "click"], [1, "btn", 2, "color", "rgb(145, 0, 0)", "margin-left", "5%", 3, "click"]],
      template: function CartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartComponent_span_1_Template, 2, 0, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CartComponent_div_2_Template, 20, 9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cart.items.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cart.items);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cart',
          templateUrl: './cart.component.html',
          styleUrls: ['./cart.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]
        }];
      }, {
        image: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToLink",
        value: function goToLink(url) {
          window.open(url, "_blank");
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 13,
      vars: 0,
      consts: [[1, "py-3", "text-center", 2, "background-color", "rgb(0, 0, 95)"], [1, "container"], [1, "m-0", "text-center", "text-white", "py-1", 2, "font-size", "large"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ASii Medical Solutions LLC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Holly Springs, NC 27540");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Phone: 919-444-2339");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Email: info@asiimedical.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_products_service_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/products-service/products.service */
    "./src/app/services/products-service/products.service.ts");
    /* harmony import */


    var src_app_services_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/cart-service/cart.service */
    "./src/app/services/cart-service/cart.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_api_services_products_apis_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/api-services/products-apis.service */
    "./src/app/services/api-services/products-apis.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _cart_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../cart/cart.component */
    "./src/app/components/cart/cart.component.ts");

    function NavbarComponent_form_37_Template(rf, ctx) {
      if (rf & 1) {
        var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_form_37_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58);

          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);

          return ctx_r57.open(_r51);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Cart ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r50.cart.items.length);
      }
    }

    function NavbarComponent_ng_template_38_span_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Orders must be $300 or more");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["checkout"];
    };

    function NavbarComponent_ng_template_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cart ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_ng_template_38_Template_button_click_4_listener() {
          var modal_r59 = ctx.$implicit;
          return modal_r59.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-cart", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_ng_template_38_Template_button_click_13_listener() {
          var modal_r59 = ctx.$implicit;
          return modal_r59.close("Save click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Checkout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NavbarComponent_ng_template_38_span_16_Template, 2, 0, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total: $", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 5, ctx_r52.cart.total), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r52.cart.items.length || ctx_r52.cart.total < 300)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r52.cart.total < 300);
      }
    }

    function NavbarComponent_ng_template_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Terms of Service ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_ng_template_40_Template_button_click_4_listener() {
          var modal_r63 = ctx.$implicit;
          return modal_r63.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "The ASii Medical");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " We Guarantee the Best Price and will match any manufacturer's authorized pricing on most of our items (*Some manufacturers are excluded). If you see a lower price give us a call at 516-840-5040 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "MINIMUM ORDERS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Domestic Shipping Orders");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " for domestic shipments (USA and Outlining Territories) have a $300.00 minimum order Requirement. Any Orders Placed on this website under $300 may be Subject to a ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "$25.00 Minimum Order Fee");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " in addition to freight charges and/or a total ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Cancellation of the order.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "International Shipping:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Orders for international shipment have a $2,500.00 minimum order requirement, will be assessed a $100.00 processing fee in addition to freight charges and require a wire transfer of funds to process the order. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "SHIPPING CHARGES");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Please be advised that shipping charges vary based on package weight, dimensions, total number of packages, perishability, urgency, and delivery location. Shipping fee starts at $9.50 for most orders. You may request a specific carrier by noting that with our customer service team when placing your order or add it to the comment section if placing the order online. You may also request that we bill the shipping to your account number. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "DELIVERY TERMS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Please be advised that our shipping terms are FOB: Origin. We are not responsible for shipments once they leave our dock. Your shipment may be insured for an additional fee by calling our customer service. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "EXPEDITED SHIPPING");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Expedited shipping transit times are calculated from the time the product is shipped from our facility. Not all items available on our web site are stocked in our facility and may take from 1 to 3 weeks to arrive at our facility for shipping. If your order has a critical shipping requirement please contact us for specific availability. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "DROP SHIPPED ITEMS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Items that are drop shipped from the Manufacturer may be subject to a qualification period and shipping times may vary. Some manufacturers do not allow expedited shipping request. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "All orders may be subject to additional Fees and Taxes required by state laws and manufacturers.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "SALES TAX");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Taxes may be collected from our customers in North Carolina, in addition drop ship items from certain states may have to be collected outside of the original order. This does not relieve customers from other states of their obligation to pay taxes that may be required. Taxes on orders are subject to change at any time due to federal and individual states changing their regulations. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "RETURNS & CANCELLATIONS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "**Due to FDA Guidelines and Supply Chain Demands All Coronaviruses COVID-19 Related Orders and/or Products are NON-Cancellable and NON-Returnable.**");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Items eligible for return are subject to a 25% restocking fee and must be accompanied by a Return Authorization that is made available by contacting ASii Medical 516-840-5040. Customer is responsible for return freight. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Returned items must be returned within 30 days");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " of shipment and within 14 days of receipt of the Return Authorization. Product and product packaging ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "must be in resaleable condition.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Labels on exterior packaging would be considered not in resalable condition. Refrigerated Items, Pharmaceuticals, Injectables, Reagent Test Cassettes, and most Non-Stock Items are not eligible for return. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Defective or Items shipped in error will be the responsibility of ASii Medical or the original manufacturer. Shipping errors must be brought to our attention within 7 days of receipt. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "PRODUCT DISCLAIMER");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "PLEASE NOTE:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Images, Descriptions, and Titles may not accurately represent the product. You are encouraged to confirm that the manufacturer item code above matches the products you are seeking. All patients or home users should have a valid prescription for any medical supplies or devices that require one. Some of our products have special shipping requirements due to weight and refrigeration; please visit our Shipping Page for Details. All products on this website are subject to current manufacturer pricing changes and availability. If you are uncertain or have questions, Please E-mail or Call us at 516-840-5040 for additional information.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_ng_template_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_ng_template_42_Template_button_click_4_listener() {
          var modal_r65 = ctx.$implicit;
          return modal_r65.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "ASii Medical Solutions LLC");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " was founded in 2019 (Raleigh, North Carolina) with the aim of challenging the consumable/distribution market status quo. Company employees have more than 20 years of experience making the decision to strategically partner with trusted industry leaders and newer manufacturers to provide commonly used items in the supply chain, with some on an exclusive basis. This strategy has allowed ASii Medical to show customer savings when possible but ultimately meet customer expectations to become a trusted resource. ASii Medical now has the references and credibility to offer more than 200,000 commonly used supplies and equipment.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Fulfillment");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " The company understands the importance of swift and reliable fulfillment and ensures all markets are well served with our partnered fulfillment centers and local contacts.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Programs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " The company also understands the value of partnerships through its programs by ensuring items normally ordered by customers are stocked and readily available once a relationship has been established. GPO and Local Vendor Contracts Available.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(productsService, cartService, modalService, router, productsApis) {
        var _this2 = this;

        _classCallCheck(this, NavbarComponent);

        this.productsService = productsService;
        this.cartService = cartService;
        this.modalService = modalService;
        this.router = router;
        this.productsApis = productsApis;
        this.query = '';
        this.cart = {};
        this.totalCartPrice = 0;
        this.autoCompleteOptions = [];
        this.checkingOut = false;
        this.productQuantityType = "Large";

        this.search = function (text) {
          return text.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (term) {
            return term.length < 2 ? [].slice() : _this2.autoCompleteOptions;
          }));
        };

        this.closeResult = '';
        router.events.subscribe(function (val) {
          if (val['url'] === '/checkout') {
            _this2.checkingOut = true;
          }
        });
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.productQuantityType = this.productsService.getProductQuantityType();
          this.cart = this.cartService.getCart();
          this.cartService.cart.subscribe(function (cart) {
            _this3.cart = cart;
          });
        }
      }, {
        key: "makePayment",
        value: function makePayment() {
          window.open('https://pay-accept.americanexpress.com/asiimedical', '_blank');
        }
      }, {
        key: "changeProductQuantityType",
        value: function changeProductQuantityType(quantity) {
          this.productQuantityType = quantity;
          this.productsService.setProductApiURL(quantity);
        }
      }, {
        key: "searchProducts",
        value: function searchProducts() {
          this.query.length ? this.productsService.updateQuery(this.query) : this.productsService.getProducts();
        }
      }, {
        key: "exactNameSearch",
        value: function exactNameSearch(productName) {
          this.autoCompleteOptions = [];
          this.productsService.exactNameSearch(productName);
        }
      }, {
        key: "onSearchInput",
        value: function onSearchInput() {
          var _this4 = this;

          if (10 > this.query.length && this.query.length > 2) {
            this.productsApis.autoComplete(this.query).subscribe(function (res) {
              _this4.autoCompleteOptions = res.map(function (item) {
                return item['_id']['ProductName'];
              });
            });
          }
        }
      }, {
        key: "open",
        value: function open(content) {
          var _this5 = this;

          this.modalService.open(content, {
            size: 'lg',
            ariaLabelledBy: 'modal-basic-title'
          }).result.then(function (result) {
            _this5.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this5.closeResult = "Dismissed ".concat(_this5.getDismissReason(reason));
          });
        }
      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }, {
        key: "removeCartItem",
        value: function removeCartItem(item) {
          this.cartService.deleteCartItem(item);
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_products_service_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_services_products_apis_service__WEBPACK_IMPORTED_MODULE_6__["ProductsApisService"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 44,
      vars: 4,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container", "px-2", "px-lg-5"], ["href", "", 1, "navbar-brand", 2, "color", "rgb(0, 0, 95)", "font-weight", "500", "font-family", "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mb-2", "mb-lg-0", "ms-lg-4"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuButton1", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", 2, "color", "rgb(0, 0, 95)", "border", "none", "outline", "none"], ["aria-labelledby", "dropdownMenuButton1", 1, "dropdown-menu", 2, "cursor", "pointer"], [1, "dropdown-item", 3, "click"], ["type", "button", 1, "btn", 2, "color", "rgb(0, 0, 95)", "border", "none", "outline", "none", 3, "click"], [1, "navbar-nav", "mb-2", "mb-lg-0", "ms-lg-4", "pr-4"], [1, "input-group", "mb-3", "me-auto", "mb-lg-0", "pr-5", 2, "width", "60%"], ["type", "text", "aria-describedby", "basic-addon2", "placeholder", "Search", "aria-label", "Search", 1, "form-control", 2, "box-shadow", "none", 3, "ngbTypeahead", "ngModel", "input", "ngModelChange", "keyup.enter", "selectItem"], [1, "input-group-append"], ["type", "button", 1, "btn", "search-btn", 3, "click"], [1, "bi", "bi-search"], ["class", "d-flex", 4, "ngIf"], ["content", ""], ["tos", ""], ["about", ""], [1, "d-flex"], ["type", "button", 1, "btn", 2, "color", "rgb(0, 0, 95)", "outline", "1px solid rgb(0, 0, 95)", 3, "click"], [1, "bi-cart-fill", "me-1"], [1, "badge", "text-white", "ms-1", "rounded-pill", 2, "background-color", "rgb(0, 0, 95)"], [1, "modal-body", "modal-lg"], ["type", "button", "aria-label", "Close", 1, "close", "float-right", 3, "click"], ["aria-hidden", "true"], [3, "image"], [2, "font-weight", "500", "font-size", "large"], ["type", "button", 1, "btn", 2, "background-color", "rgb(0, 0, 95)", "color", "white", "width", "fit-content", "float", "right", 3, "disabled", "routerLink", "click"], ["style", "color: gray; font-size: small;", 4, "ngIf"], [2, "color", "gray", "font-size", "small"], [2, "padding", "10px"], [2, "font-weight", "500"], [2, "color", "red"], [1, "modal-body", "modal-lg", "p-4"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ASii Medical");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_13_listener() {
            return ctx.changeProductQuantityType("Large");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Large Quantity Items");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_16_listener() {
            return ctx.changeProductQuantityType("Small");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Small Quantity Items");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_19_listener() {
            return ctx.makePayment();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Make Payment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Info ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_27_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67);

            var _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

            return ctx.open(_r53);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Terms of Service");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67);

            var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);

            return ctx.open(_r55);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function NavbarComponent_Template_input_input_33_listener() {
            return ctx.onSearchInput();
          })("ngModelChange", function NavbarComponent_Template_input_ngModelChange_33_listener($event) {
            return ctx.query = $event;
          })("keyup.enter", function NavbarComponent_Template_input_keyup_enter_33_listener() {
            return ctx.searchProducts();
          })("selectItem", function NavbarComponent_Template_input_selectItem_33_listener($event) {
            return ctx.exactNameSearch($event.item);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_35_listener() {
            return ctx.searchProducts();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, NavbarComponent_form_37_Template, 6, 1, "form", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, NavbarComponent_ng_template_38_Template, 17, 8, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, NavbarComponent_ng_template_40_Template, 94, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, NavbarComponent_ng_template_42_Template, 24, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.productQuantityType, " Quantity Items ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbTypeahead", ctx.search)("ngModel", ctx.query);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.checkingOut);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTypeahead"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_9__["CartComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DecimalPipe"]],
      styles: [".search-btn[_ngcontent-%COMP%] {\r\n  border-bottom-left-radius: 0;\r\n  border-top-left-radius: 0;\r\n  background-color: rgb(0, 0, 95);\r\n  color: white;\r\n  box-shadow: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWJ0biB7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCA5NSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_products_service_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]
        }, {
          type: src_app_services_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_services_api_services_products_apis_service__WEBPACK_IMPORTED_MODULE_6__["ProductsApisService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/products/products.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/products/products.component.ts ***!
    \***********************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppComponentsProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_api_services_products_apis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/api-services/products-apis.service */
    "./src/app/services/api-services/products-apis.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_products_service_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/products-service/products.service */
    "./src/app/services/products-service/products.service.ts");
    /* harmony import */


    var src_app_services_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/cart-service/cart.service */
    "./src/app/services/cart-service/cart.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["sub1"];

    function ProductsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ProductsComponent_div_1_div_2_div_6_div_4_div_1_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_div_1_div_2_div_6_div_4_div_1_div_4_div_1_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84);

          var sub_category_2_r82 = ctx.$implicit;

          var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](7);

          return ctx_r83.filterByCategory(sub_category_2_r82);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var sub_category_2_r82 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", sub_category_2_r82.CategoryPathName, " ");
      }
    }

    function ProductsComponent_div_1_div_2_div_6_div_4_div_1_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductsComponent_div_1_div_2_div_6_div_4_div_1_div_4_div_1_Template, 3, 1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var sub_category_1_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", sub_category_1_r79.SubCategories);
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "categoryOpen": a0
      };
    };

    function ProductsComponent_div_1_div_2_div_6_div_4_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_div_1_div_2_div_6_div_4_div_1_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r87);

          var sub_category_1_r79 = ctx.$implicit;

          var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);

          return sub_category_1_r79.SubCategories && sub_category_1_r79.SubCategories.length ? ctx_r86.expandSecondLevelCategories(sub_category_1_r79) : ctx_r86.filterByCategory(sub_category_1_r79);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProductsComponent_div_1_div_2_div_6_div_4_div_1_div_4_Template, 2, 1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var sub_category_1_r79 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, sub_category_1_r79.open));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](sub_category_1_r79.CategoryPathName);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", sub_category_1_r79.open);
      }
    }

    function ProductsComponent_div_1_div_2_div_6_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductsComponent_div_1_div_2_div_6_div_4_div_1_Template, 5, 5, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", category_r76.SubCategories);
      }
    }

    function ProductsComponent_div_1_div_2_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_div_1_div_2_div_6_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r90);

          var category_r76 = ctx.$implicit;

          var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return category_r76.SubCategories.length ? ctx_r89.expandFirstLevelCategories(category_r76) : ctx_r89.filterByCategory(category_r76);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProductsComponent_div_1_div_2_div_6_div_4_Template, 2, 1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r76 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, category_r76.open));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r76.CategoryPathName);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", category_r76.open);
      }
    }

    function ProductsComponent_div_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Categories");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProductsComponent_div_1_div_2_div_6_Template, 5, 5, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r70.categories);
      }
    }

    function ProductsComponent_div_1_div_5_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", product_r91.ItemDescription);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r91.ItemDescription);
      }
    }

    function ProductsComponent_div_1_div_5_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", product_r91.ItemName);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r91.ItemName);
      }
    }

    function ProductsComponent_div_1_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_div_1_div_5_Template_img_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r97);

          var product_r91 = ctx.$implicit;

          var ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r96.viewProduct(product_r91);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_div_1_div_5_Template_div_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r97);

          var product_r91 = ctx.$implicit;

          var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r98.viewProduct(product_r91);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProductsComponent_div_1_div_5_div_7_Template, 2, 2, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ProductsComponent_div_1_div_5_div_8_Template, 2, 2, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r91 = ctx.$implicit;

        var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", product_r91.ItemImageURL ? product_r91.ItemImageURL : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r91.ProductName);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r71.productQuantityType === "Large");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r71.productQuantityType === "Small");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 5, product_r91.SalePrice), "");
      }
    }

    var _c2 = function _c2(a0) {
      return {
        "button-active": a0
      };
    };

    function ProductsComponent_div_1_ng_container_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_div_1_ng_container_13_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r100);

          var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r99.updatePage(ctx_r99.page - 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c2, ctx_r72.page === 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r72.page - 1);
      }
    }

    function ProductsComponent_div_1_ng_container_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_div_1_ng_container_17_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r102);

          var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r101.updatePage(ctx_r101.page + 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r73.page + 1);
      }
    }

    function ProductsComponent_div_1_li_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_div_1_li_26_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r105);

          var count_r103 = ctx.$implicit;

          var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r104.updateItemsPerPage(count_r103);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var count_r103 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](count_r103);
      }
    }

    function ProductsComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProductsComponent_div_1_div_2_Template, 7, 1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProductsComponent_div_1_div_5_Template, 14, 7, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nav", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_div_1_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r107);

          var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r106.updatePage(ctx_r106.page - 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "<");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ProductsComponent_div_1_ng_container_13_Template, 3, 4, "ng-container", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_div_1_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r107);

          var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r108.updatePage(ctx_r108.page);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ProductsComponent_div_1_ng_container_17_Template, 3, 1, "ng-container", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_div_1_Template_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r107);

          var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r109.updatePage(ctx_r109.page + 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, ">");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ul", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ProductsComponent_div_1_li_26_Template, 3, 1, "li", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r69.productQuantityType === "Large");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r69.products);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r69.page === 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r69.page > 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c2, ctx_r69.page > 1));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r69.page);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx_r69.products.length < ctx_r69.itemsPerPage));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r69.products.length < ctx_r69.itemsPerPage);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Items per page: ", ctx_r69.itemsPerPage, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r69.itemsPerPageOptions);
      }
    }

    var ProductsComponent =
    /*#__PURE__*/
    function () {
      function ProductsComponent(productsApi, router, productsService, cartService) {
        _classCallCheck(this, ProductsComponent);

        this.productsApi = productsApi;
        this.router = router;
        this.productsService = productsService;
        this.cartService = cartService;
        this.totalProducts = 49103;
        this.page = 1;
        this.itemsPerPage = 20;
        this.itemsPerPageOptions = [20, 50, 100, 200];
        this.query = '';
        this.categorySelected = false;
        this.productsLoaded = false;
        this.productQuantityType = 'Large';
        this.currentOpenFirstLevelCategoryID = "-1";
        this.currentOpenSecondLevelCategoryID = "-1";
      }

      _createClass(ProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this6 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.productsService.categoryRefresh.subscribe(function (res) {
                      if (res && _this6.productQuantityType === 'Large') {
                        _this6.productsApi.getCategories().subscribe(function (res) {
                          _this6.setCategories(res);
                        });

                        _this6.productQuantityType = 'Small';
                      } else {
                        _this6.productQuantityType = 'Large';
                      }
                    });
                    this.productQuantityType = this.productsService.getProductQuantityType();
                    _context.next = 4;
                    return this.productsService.products.subscribe(function (products) {
                      _this6.products = products;
                      _this6.page = _this6.productsService.getPage();

                      _this6.products.forEach(function (product) {
                        return product.quantity = 1;
                      });

                      _this6.productsLoaded = true;
                    });

                  case 4:
                    _context.next = 6;
                    return this.productsService.updateProducts();

                  case 6:
                    _context.next = 8;
                    return this.productsApi.getCategories().subscribe(function (res) {
                      _this6.setCategories(res);
                    });

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getProductQuantityType",
        value: function getProductQuantityType() {
          return this.productsService.getProductQuantityType();
        }
      }, {
        key: "setCategories",
        value: function setCategories(res) {
          this.categories = res;
          this.categories.sort(function (a, b) {
            return a.CategoryPathName.localeCompare(b.CategoryPathName);
          });
          this.categories.forEach(function (category) {
            category.SubCategories.sort(function (a, b) {
              return a.CategoryPathName.localeCompare(b.CategoryPathName);
            });
          });
          this.categories.map(function (item) {
            if (item.SubCategories.length) {
              item.open = false;
              item.SubCategories.map(function (item2) {
                if (item2.SubCategories.length) {
                  item2.open = false;
                }
              });
            }
          });
        }
      }, {
        key: "viewProduct",
        value: function viewProduct(product) {
          this.router.navigate(['product'], {
            queryParams: {
              productId: product._id
            }
          });
        }
      }, {
        key: "updatePage",
        value: function updatePage(page) {
          this.productsLoaded = false;
          this.page = page;
          this.productsService.updatePage(page);
        }
      }, {
        key: "updateItemsPerPage",
        value: function updateItemsPerPage(count) {
          this.productsLoaded = false;
          this.itemsPerPage = count;
          this.productsService.updateItemsPerPage(count);
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          this.productsLoaded = false;
          this.productsService.updateProducts();
        }
      }, {
        key: "filterByCategory",
        value: function filterByCategory(category) {
          this.productsLoaded = false;

          if (this.productQuantityType === 'Large') {
            this.selectedCategory = category;
            var categoryId = category.CategoryPathID;
            this.page = 1;
            this.productsService.updateCategory(categoryId);
          } else {
            console.log(category);
          }
        }
      }, {
        key: "searchProducts",
        value: function searchProducts() {
          this.productsLoaded = false;
          this.categorySelected = false;
          this.page = 1;
          this.productsService.updateQuery(this.query);
        }
      }, {
        key: "addToCart",
        value: function addToCart(product) {
          this.cartService.updateCart(product, product.quantity);
        }
      }, {
        key: "expandFirstLevelCategories",
        value: function expandFirstLevelCategories(category) {
          var _this7 = this;

          category.open = !category.open;

          if (this.currentOpenFirstLevelCategoryID !== category.CategoryPathID) {
            this.categories.find(function (item) {
              if (item.CategoryPathID === _this7.currentOpenFirstLevelCategoryID && _this7.currentOpenFirstLevelCategoryID !== "-1") {
                item.open = false;
              }
            });
            this.currentOpenFirstLevelCategoryID = category.CategoryPathID;
          }
        }
      }, {
        key: "expandSecondLevelCategories",
        value: function expandSecondLevelCategories(category) {
          var _this8 = this;

          category.open = !category.open;

          if (this.currentOpenSecondLevelCategoryID !== category.CategoryPathID) {
            this.categories.find(function (item) {
              if (item.CategoryPathID === _this8.currentOpenSecondLevelCategoryID && _this8.currentOpenSecondLevelCategoryID !== "-1") {
                item.open = false;
              }
            });
            this.currentOpenSecondLevelCategoryID = category.CategoryPathID;
          }
        }
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
      return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_services_products_apis_service__WEBPACK_IMPORTED_MODULE_2__["ProductsApisService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_products_service_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]));
    };

    ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProductsComponent,
      selectors: [["app-products"]],
      viewQuery: function ProductsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sub1 = _t.first);
        }
      },
      decls: 2,
      vars: 2,
      consts: [["class", "d-flex justify-content-center mt-5", 4, "ngIf"], [4, "ngIf"], [1, "d-flex", "justify-content-center", "mt-5"], ["role", "status", 1, "spinner-border", "text-secondary", 2, "width", "6rem", "height", "6rem"], [1, "visually-hidden"], [1, "d-flex", 2, "height", "100%"], ["class", "container px-4 mt-5", "style", "max-width: 20%; position: sticky; top: 0;", 4, "ngIf"], [1, "container", "px-4", "mt-5"], [1, "row", "gx-sm-3", "gx-4", "gx-lg-5", "row-cols-1", "row-cols-sm-2", "row-cols-md-3", "row-cols-xl-4", "justify-content-center"], ["class", "col mb-5", 4, "ngFor", "ngForOf"], [1, "p-4", "d-flex", "justify-content-center", "mb-4"], ["aria-label", "Page navigation example"], [1, "pagination", "mb-0"], [1, "page-item"], ["aria-label", "Previous", 1, "page-link", 2, "background-color", "transparent", "border", "none", "color", "black", 3, "disabled", "click"], ["aria-hidden", "true"], [1, "page-link", "page-number", 3, "ngClass", "click"], ["aria-label", "Next", 1, "page-link", 2, "background-color", "transparent", "border", "none", "color", "black", 3, "disabled", "click"], [1, "dropdown", "d-flex"], ["id", "navbarDropdown", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle", 2, "background-color", "transparent", "border", "none"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], [3, "click", 4, "ngFor", "ngForOf"], [1, "container", "px-4", "mt-5", 2, "max-width", "20%", "position", "sticky", "top", "0"], [1, "pb-5"], [2, "color", "rgb(0, 0, 95)"], [4, "ngFor", "ngForOf"], [2, "text-align", "left", "background-color", "transparent", "border", "none", "font-size", "small", 3, "click"], [3, "ngClass"], ["class", "px-3", 4, "ngFor", "ngForOf"], [1, "px-3"], [1, "col", "mb-5"], [1, "card", "h-100"], ["alt", "...", 1, "card-img-top", 2, "max-height", "200px", "min-height", "200px", "cursor", "pointer", 3, "src", "click"], [1, "card-body", "py-3", "px-2"], [1, "text-center", 2, "cursor", "pointer", 3, "click"], [1, "fw-bolder", "item-name"], ["class", "item-description", 3, "title", 4, "ngIf"], [1, "item-price"], [1, "item-description", 3, "title"], [1, "page-link", "page-number", 3, "click"], [3, "click"], [1, "dropdown-item"]],
      template: function ProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProductsComponent_div_0_Template, 4, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProductsComponent_div_1_Template, 27, 12, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.productsLoaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.productsLoaded);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]],
      styles: ["image[_ngcontent-%COMP%] {\r\n  max-height: 100px;\r\n}\r\n.pagination[_ngcontent-%COMP%] {\r\n  border: 0px solid #ddd;\r\n  color: black;\r\n  outline: none;\r\n}\r\n.pagination[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  border: 0px solid #ddd;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  color: black;\r\n  outline: none;\r\n}\r\n.pag[_ngcontent-%COMP%]:active, a[_ngcontent-%COMP%]:focus {\r\n  box-shadow: none;\r\n}\r\n.page-number[_ngcontent-%COMP%] {\r\n  border: none;\r\n  box-shadow: none;\r\n  color: black;\r\n  border-radius: 4px;\r\n}\r\n.button-active[_ngcontent-%COMP%] {\r\n  background-color: #dfdfdf;\r\n  border-radius: 4px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 6px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 3px transparent;\r\n  border-radius: 10px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: rgba(0, 0, 95, 0.233);\r\n  border-radius: 10px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\r\n  background: rgb(0, 0, 95);\r\n}\r\n.categoryOpen[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\r\n.add-to-cart[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(0, 0, 95);\r\n  color: white;\r\n}\r\n.item-name[_ngcontent-%COMP%] {\r\n  height: 70px;\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 3;\r\n  -webkit-box-orient: vertical;\r\n  overflow: hidden;\r\n}\r\n.item-description[_ngcontent-%COMP%]{\r\n  height: 45px;\r\n  width: 100%;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 2;\r\n  -webkit-box-orient: vertical;\r\n  overflow: hidden;\r\n}\r\n.item-price[_ngcontent-%COMP%] {\r\n  height: 30px;\r\n  margin-top: -25px;\r\n  font-weight: 600;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7QUFFQSxVQUFVO0FBQ1Y7RUFDRSxVQUFVO0FBQ1o7QUFFQSxVQUFVO0FBQ1Y7RUFDRSxxQ0FBcUM7RUFDckMsbUJBQW1CO0FBQ3JCO0FBRUEsV0FBVztBQUNYO0VBQ0UsaUNBQWlDO0VBQ2pDLG1CQUFtQjtBQUNyQjtBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1hZ2Uge1xyXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG59XHJcbi5wYWdpbmF0aW9uIHtcclxuICBib3JkZXI6IDBweCBzb2xpZCAjZGRkO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5wYWdpbmF0aW9uID4gbGkgPiBhIHtcclxuICBib3JkZXI6IDBweCBzb2xpZCAjZGRkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5wYWc6YWN0aXZlLCBhOmZvY3VzIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5wYWdlLW51bWJlciB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4uYnV0dG9uLWFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZkZjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA2cHg7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgOTUsIDAuMjMzKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDk1KTtcclxufVxyXG5cclxuLmNhdGVnb3J5T3BlbiB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5hZGQtdG8tY2FydDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDk1KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pdGVtLW5hbWUge1xyXG4gIGhlaWdodDogNzBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uaXRlbS1kZXNjcmlwdGlvbntcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLml0ZW0tcHJpY2Uge1xyXG4gIGhlaWdodDogMzBweDtcclxuICBtYXJnaW4tdG9wOiAtMjVweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-products',
          templateUrl: './products.component.html',
          styleUrls: ['./products.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_api_services_products_apis_service__WEBPACK_IMPORTED_MODULE_2__["ProductsApisService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_services_products_service_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]
        }, {
          type: src_app_services_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]
        }];
      }, {
        sub1: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['sub1', {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/square-pay/square-pay.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/square-pay/square-pay.component.ts ***!
    \***************************************************************/

  /*! exports provided: SquarePayComponent */

  /***/
  function srcAppComponentsSquarePaySquarePayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SquarePayComponent", function () {
      return SquarePayComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var src_app_services_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/cart-service/cart.service */
    "./src/app/services/cart-service/cart.service.ts");

    var _c0 = ["iframe"];

    var SquarePayComponent =
    /*#__PURE__*/
    function () {
      function SquarePayComponent(sanitizer, cartService) {
        _classCallCheck(this, SquarePayComponent);

        this.sanitizer = sanitizer;
        this.cartService = cartService;
        this.squarePayFrame = document.getElementById('squarePayFrame');
        this.squarePayLink = this.sanitizer.bypassSecurityTrustResourceUrl('http://localhost:3000');
      }

      _createClass(SquarePayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SquarePayComponent;
    }();

    SquarePayComponent.ɵfac = function SquarePayComponent_Factory(t) {
      return new (t || SquarePayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]));
    };

    SquarePayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SquarePayComponent,
      selectors: [["app-square-pay"]],
      viewQuery: function SquarePayComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.squarePayFrame = _t.first);
        }
      },
      decls: 2,
      vars: 1,
      consts: [[2, "height", "100%", "width", "100%", 3, "src"], ["squarePayFrame", ""]],
      template: function SquarePayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 0, 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.squarePayLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3F1YXJlLXBheS9zcXVhcmUtcGF5LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SquarePayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-square-pay',
          templateUrl: './square-pay.component.html',
          styleUrls: ['./square-pay.component.css']
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }, {
          type: src_app_services_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
        }];
      }, {
        squarePayFrame: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['iframe']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/checkout/checkout/checkout.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/checkout/checkout/checkout.component.ts ***!
    \***************************************************************/

  /*! exports provided: CheckoutComponent */

  /***/
  function srcAppPagesCheckoutCheckoutCheckoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function () {
      return CheckoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_services_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/cart-service/cart.service */
    "./src/app/services/cart-service/cart.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_api_services_products_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/api-services/products-apis.service */
    "./src/app/services/api-services/products-apis.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CheckoutComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading...");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CheckoutComponent_div_1_div_6_li_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "small", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r13.ProductName);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Quantity: ", item_r13.quantity, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 3, item_r13.SalePrice), "");
      }
    }

    function CheckoutComponent_div_1_div_6_span_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\xA0(", ctx_r6.salesTaxPercent, "%)");
      }
    }

    function CheckoutComponent_div_1_div_6_span_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " ~ ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CheckoutComponent_div_1_div_6_span_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r8.salesTax, "1.2-2"), "");
      }
    }

    function CheckoutComponent_div_1_div_6_span_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " ~ ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CheckoutComponent_div_1_div_6_span_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, (ctx_r10.cart.total + ctx_r10.salesTax) * (ctx_r10.serviceFee / 100), "1.2-2"), "");
      }
    }

    function CheckoutComponent_div_1_div_6_span_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " ~ ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CheckoutComponent_div_1_div_6_span_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r12.orderTotal, "1.2-2"), "");
      }
    }

    function CheckoutComponent_div_1_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Your cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CheckoutComponent_div_1_div_6_li_7_Template, 9, 5, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Cart Total");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Sales Tax ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CheckoutComponent_div_1_div_6_span_17_Template, 2, 1, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CheckoutComponent_div_1_div_6_span_18_Template, 2, 0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, CheckoutComponent_div_1_div_6_span_19_Template, 3, 4, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Service Fee \xA0(3.5%)");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, CheckoutComponent_div_1_div_6_span_23_Template, 2, 0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, CheckoutComponent_div_1_div_6_span_24_Template, 3, 4, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Total");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, CheckoutComponent_div_1_div_6_span_28_Template, 2, 0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, CheckoutComponent_div_1_div_6_span_29_Template, 3, 4, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.cart.items.length);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.cart.items);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](13, 10, ctx_r2.cart.total, "1.2-2"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.salesTaxPercent);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.salesTax === undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.salesTax !== undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.salesTax === undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.salesTax !== undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.salesTax === undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.salesTax !== undefined);
      }
    }

    function CheckoutComponent_div_1_div_7_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\xA0Valid first name is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CheckoutComponent_div_1_div_7_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\xA0Valid last name is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CheckoutComponent_div_1_div_7_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\xA0Please enter a valid email address. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CheckoutComponent_div_1_div_7_div_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\xA0Please enter a valid phone number. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CheckoutComponent_div_1_div_7_div_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\xA0Please enter a valid shipping account number. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CheckoutComponent_div_1_div_7_div_52_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\xA0Please enter your shipping address. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CheckoutComponent_div_1_div_7_div_59_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\xA0Please provide a valid city. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CheckoutComponent_div_1_div_7_div_69_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\xA0Please select a valid country. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CheckoutComponent_div_1_div_7_option_78_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CheckoutComponent_div_1_div_7_option_78_Template_option_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28);

          var state_r26 = ctx.$implicit;

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r27.updateSalesTax(state_r26);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var state_r26 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](state_r26.state);
      }
    }

    function CheckoutComponent_div_1_div_7_div_79_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\xA0Please provide a valid state. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CheckoutComponent_div_1_div_7_div_86_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\xA0Zip code required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        "form-control": a0,
        "form-control-error": a1
      };
    };

    var _c1 = function _c1(a0, a1) {
      return {
        "custom-select d-block w-100": a0,
        "form-control-error": a1
      };
    };

    function CheckoutComponent_div_1_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Shipping Information");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 24, 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Company Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function CheckoutComponent_div_1_div_7_Template_input_focus_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r29.resetFormField("companyName");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "First name");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\xA0*");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function CheckoutComponent_div_1_div_7_Template_input_focus_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r31.resetFormField("firstName");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CheckoutComponent_div_1_div_7_div_16_Template, 3, 0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Last name");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\xA0*");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function CheckoutComponent_div_1_div_7_Template_input_focus_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r32.resetFormField("lastName");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, CheckoutComponent_div_1_div_7_div_23_Template, 3, 0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "\xA0*");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "input", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function CheckoutComponent_div_1_div_7_Template_input_focus_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r33.resetFormField("email");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, CheckoutComponent_div_1_div_7_div_31_Template, 3, 0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Phone");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\xA0*");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "input", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function CheckoutComponent_div_1_div_7_Template_input_focus_37_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r34.resetFormField("phone");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, CheckoutComponent_div_1_div_7_div_38_Template, 3, 0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Shipping Account Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "\xA0*");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "input", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function CheckoutComponent_div_1_div_7_Template_input_focus_44_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r35.resetFormField("shippingAccountNumber");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, CheckoutComponent_div_1_div_7_div_45_Template, 3, 0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "label", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Address");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "\xA0*");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "input", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function CheckoutComponent_div_1_div_7_Template_input_focus_51_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r36.resetFormField("address");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, CheckoutComponent_div_1_div_7_div_52_Template, 3, 0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "label", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "City");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "\xA0*");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "input", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function CheckoutComponent_div_1_div_7_Template_input_focus_58_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r37.resetFormField("city");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, CheckoutComponent_div_1_div_7_div_59_Template, 3, 0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "label", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Country");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\xA0*");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "select", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function CheckoutComponent_div_1_div_7_Template_select_focus_66_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r38.resetFormField("country");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "US");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, CheckoutComponent_div_1_div_7_div_69_Template, 3, 0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "label", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "State");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "\xA0*");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "select", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CheckoutComponent_div_1_div_7_Template_select_change_75_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r39.updateSalesTax($event.target.value);
        })("focus", function CheckoutComponent_div_1_div_7_Template_select_focus_75_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r40.resetFormField("state");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "option", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Choose...");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](78, CheckoutComponent_div_1_div_7_option_78_Template, 2, 1, "option", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, CheckoutComponent_div_1_div_7_div_79_Template, 3, 0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "label", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Zip");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "\xA0*");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "input", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function CheckoutComponent_div_1_div_7_Template_input_focus_85_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r41.resetFormField("zip");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](86, CheckoutComponent_div_1_div_7_div_86_Template, 3, 0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "hr", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "button", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CheckoutComponent_div_1_div_7_Template_button_click_88_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r42.continueToPayment();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Submit Order");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](21, _c0, ctx_r3.validFirstName, !ctx_r3.validFirstName));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.validFirstName);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](24, _c0, ctx_r3.validLastName, !ctx_r3.validLastName));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.validLastName);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](27, _c0, ctx_r3.validEmail, !ctx_r3.validEmail));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.validEmail);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](30, _c0, ctx_r3.validPhone, !ctx_r3.validPhone));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.validPhone);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](33, _c0, ctx_r3.validShippingAccountNumber, !ctx_r3.validShippingAccountNumber));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.validShippingAccountNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](36, _c0, ctx_r3.validAddress, !ctx_r3.validAddress));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.validAddress);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](39, _c0, ctx_r3.validCity, !ctx_r3.validCity));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.validCity);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](42, _c1, ctx_r3.validCountry, !ctx_r3.validCountry));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.validCountry);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](45, _c1, ctx_r3.validState, !ctx_r3.validState));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.states);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.validState);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](48, _c0, ctx_r3.validZip, !ctx_r3.validZip));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.validZip);
      }
    }

    function CheckoutComponent_div_1_div_8_span_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r43.orderInfo.companyName);
      }
    }

    function CheckoutComponent_div_1_div_8_span_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r45 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", item_r45.ProductName, " (Quantity: ", item_r45.quantity, ") ");
      }
    }

    function CheckoutComponent_div_1_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Order Submitted");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Thank you for your order. To complete the payment we will call you for your credit card information. With any questions or concerns please email us at info@asiimedical.com or call 919-285-4426. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Contact Information");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Name: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Email: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Phone: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Shipping Information");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, CheckoutComponent_div_1_div_8_span_28_Template, 3, 1, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " United States ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Shipping Account Number: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Items Ordered:");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, CheckoutComponent_div_1_div_8_span_44_Template, 2, 2, "span", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Payment Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Cart Total: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Sales Tax: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "span", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Service Fee: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Order Total: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r4.orderInfo.firstname, " ", ctx_r4.orderInfo.lastname, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r4.orderInfo.buyerEmailAddress, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r4.orderInfo.phone, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.orderInfo.companyName);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.orderInfo.shippingAddress.addressLine1, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", ctx_r4.orderInfo.shippingAddress.locality, " ", ctx_r4.orderInfo.shippingAddress.administrativeDistrictLevel1, " ", ctx_r4.orderInfo.shippingAddress.postalCode, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r4.orderInfo.shippingAccountNumber, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.orderInfo.cart);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", ctx_r4.orderInfo.costDetails.cartTotal.toFixed(2), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("%", ctx_r4.orderInfo.costDetails.salesTax, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", ctx_r4.orderInfo.costDetails.serviceFee.toFixed(2), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", ctx_r4.orderInfo.costDetails.orderTotal.toFixed(2), " ");
      }
    }

    function CheckoutComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Checkout ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CheckoutComponent_div_1_div_6_Template, 30, 13, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CheckoutComponent_div_1_div_7_Template, 90, 51, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CheckoutComponent_div_1_div_8_Template, 65, 15, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.stage === "shipping" || ctx_r1.stage === "payment");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.stage === "shipping");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.stage === "submitted");
      }
    }

    var CheckoutComponent =
    /*#__PURE__*/
    function () {
      function CheckoutComponent(cartService, fb, productsApis, router) {
        _classCallCheck(this, CheckoutComponent);

        this.cartService = cartService;
        this.fb = fb;
        this.productsApis = productsApis;
        this.router = router;
        this.states = [{
          state: "Alaska",
          tax: 1.76
        }, {
          state: "Alabama",
          tax: 9.24
        }, {
          state: "Arkansas",
          tax: 9.47
        }, {
          state: "Arizona",
          tax: 8.4
        }, {
          state: "California",
          tax: 8.82
        }, {
          state: "Colorado",
          tax: 7.77
        }, {
          state: "Connecticut",
          tax: 6.35
        }, {
          state: "Delaware",
          tax: 0
        }, {
          state: "Florida",
          tax: 7.01
        }, {
          state: "Georgia",
          tax: 7.35
        }, {
          state: "Hawaii",
          tax: 4.44
        }, {
          state: "Idaho",
          tax: 6.02
        }, {
          state: "Illinois",
          tax: 8.81
        }, {
          state: "Indiana",
          tax: 7
        }, {
          state: "Iowa",
          tax: 6.94
        }, {
          state: "Kansas",
          tax: 8.7
        }, {
          state: "Kentucky",
          tax: 6
        }, {
          state: "Louisiana",
          tax: 9.55
        }, {
          state: "Maine",
          tax: 5.5
        }, {
          state: "Maryland",
          tax: 6
        }, {
          state: "Massachusetts",
          tax: 6.25
        }, {
          state: "Michigan",
          tax: 6
        }, {
          state: "Minnesota",
          tax: 7.49
        }, {
          state: "Mississippi",
          tax: 7.07
        }, {
          state: "Missouri",
          tax: 8.29
        }, {
          state: "Montana",
          tax: 0
        }, {
          state: "Nebraska",
          tax: 6.94
        }, {
          state: "Nevada",
          tax: 8.23
        }, {
          state: "New Hampshire",
          tax: 0
        }, {
          state: "New Jersey",
          tax: 6.6
        }, {
          state: "New Mexico",
          tax: 7.84
        }, {
          state: "New York",
          tax: 8.52
        }, {
          state: "North Carolina",
          tax: 6.98
        }, {
          state: "North Dakota",
          tax: 6.96
        }, {
          state: "Ohio",
          tax: 7.22
        }, {
          state: "Oklahoma",
          tax: 8.97
        }, {
          state: "Oregon",
          tax: 0
        }, {
          state: "Pennsylvania",
          tax: 6.34
        }, {
          state: "Rhode Island",
          tax: 7
        }, {
          state: "South Carolina",
          tax: 7.44
        }, {
          state: "South Dakota",
          tax: 6.40
        }, {
          state: "Tennessee",
          tax: 9.55
        }, {
          state: "Texas",
          tax: 8.20
        }, {
          state: "Utah",
          tax: 7.19
        }, {
          state: "Vermont",
          tax: 6.24
        }, {
          state: "Virginia",
          tax: 5.75
        }, {
          state: "Washington",
          tax: 9.29
        }, {
          state: "West Virginia",
          tax: 6.52
        }, {
          state: "Wisconsin",
          tax: 5.43
        }, {
          state: "Wyoming",
          tax: 5.22
        }];
        this.loaded = false;
        this.stage = 'shipping';
        this.serviceFee = 0;
        this.validFirstName = true;
        this.validLastName = true;
        this.validEmail = true;
        this.validAddress = true;
        this.validCity = true;
        this.validCountry = true;
        this.validState = true;
        this.validZip = true;
        this.validPhone = true;
        this.validShippingAccountNumber = true;
      }

      _createClass(CheckoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.cartService.getCart();

                  case 2:
                    this.cart = _context2.sent;
                    this.orderTotal = this.cart.total + this.salesTax;
                    this.serviceFee = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serviceFee;

                    if (localStorage.getItem('ASii_Medical_Cart') && !localStorage.getItem('ASii_Medical_Cart').length || !localStorage.getItem('ASii_Medical_Cart')) {
                      this.router.navigate(["/"]);
                    }

                    this.loaded = true;

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "checkForm",
        value: function checkForm() {
          var checkoutForm = document.getElementById("checkoutForm");

          if (!checkoutForm["firstName"].value) {
            this.validFirstName = false;
          }

          if (!checkoutForm["lastName"].value) {
            this.validLastName = false;
          }

          if (!checkoutForm["email"].value) {
            this.validEmail = false;
          }

          if (!checkoutForm["city"].value) {
            this.validCity = false;
          }

          if (!checkoutForm["address"].value) {
            this.validAddress = false;
          }

          if (!checkoutForm["country"].value) {
            this.validCountry = false;
          }

          if (!checkoutForm["state"].value) {
            this.validState = false;
          }

          if (!checkoutForm["zip"].value) {
            this.validZip = false;
          }

          if (!checkoutForm["phone"].value) {
            this.validPhone = false;
          }

          if (!checkoutForm["shippingAccountNumber"].value) {
            this.validShippingAccountNumber = false;
          }
        }
      }, {
        key: "resetFormField",
        value: function resetFormField(field) {
          if (field === 'firstName') {
            this.validFirstName = true;
          }

          if (field === 'lastName') {
            this.validLastName = true;
          }

          if (field === 'email') {
            this.validEmail = true;
          }

          if (field === 'city') {
            this.validCity = true;
          }

          if (field === 'address') {
            this.validAddress = true;
          }

          if (field === 'country') {
            this.validCountry = true;
          }

          if (field === 'state') {
            this.validState = true;
          }

          if (field === 'zip') {
            this.validZip = true;
          }

          if (field === 'phone') {
            this.validPhone = true;
          }

          if (field === 'shippingAccountNumber') {
            this.validShippingAccountNumber = true;
          }
        }
      }, {
        key: "updateSalesTax",
        value: function updateSalesTax(selectedState) {
          var tax = 0;
          var state = this.states.find(function (state) {
            return state.state === selectedState;
          });
          tax = state.tax / 100;
          this.salesTaxPercent = state.tax;
          this.salesTax = Number((this.cart.total * tax).toFixed(2));
          this.orderTotal = Number((this.cart.total + this.salesTax).toFixed(2));
          this.orderTotal += Number((this.orderTotal * (this.serviceFee / 100)).toFixed(2));
        }
      }, {
        key: "continueToPayment",
        value: function continueToPayment() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var form, costDetails, body, paymentResponse, errorBody;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    form = document.getElementById("checkoutForm");

                    if (!(form["firstName"].value === "" || form["lastName"].value === "" || form["email"].value === "" || form["address"].value === "" || form["city"].value === "" || form["country"].value === "" || form["state"].value === "" || form["zip"].value === "" || form["phone"].value === "" || form["shippingAccountNumber"].value === "")) {
                      _context3.next = 5;
                      break;
                    }

                    this.checkForm();
                    _context3.next = 22;
                    break;

                  case 5:
                    this.checkoutData = {
                      firstName: form["firstName"].value,
                      lastName: form["lastName"].value,
                      companyName: form["companyName"].value,
                      shippingAccountNumber: form["shippingAccountNumber"].value,
                      email: form["email"].value,
                      address: form["address"].value,
                      city: form["city"].value,
                      state: form["state"].value,
                      country: form["country"].value,
                      zip: form["zip"].value,
                      phone: form["phone"].value
                    }; //this.initializePayment()

                    costDetails = {
                      cartTotal: this.cart.total,
                      salesTax: this.salesTaxPercent,
                      serviceFee: this.orderTotal * (this.serviceFee / 100),
                      orderTotal: this.orderTotal
                    };
                    body = JSON.stringify({
                      costDetails: costDetails,
                      cart: this.cart.items,
                      firstname: this.checkoutData.firstName,
                      lastname: this.checkoutData.lastName,
                      companyName: this.checkoutData.companyName,
                      shippingAccountNumber: this.checkoutData.shippingAccountNumber,
                      buyerEmailAddress: this.checkoutData.email,
                      phone: this.checkoutData.phone,
                      shippingAddress: {
                        addressLine1: this.checkoutData.address,
                        locality: this.checkoutData.city,
                        administrativeDistrictLevel1: this.checkoutData.state,
                        country: this.checkoutData.country,
                        postalCode: this.checkoutData.zip
                      }
                    });
                    this.orderInfo = JSON.parse(body);
                    _context3.next = 11;
                    return fetch('/api/products/createPayment', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: body
                    });

                  case 11:
                    paymentResponse = _context3.sent;

                    if (!paymentResponse.ok) {
                      _context3.next = 18;
                      break;
                    }

                    this.stage = 'submitted';
                    localStorage.clear();
                    console.log(this.orderInfo);
                    _context3.next = 22;
                    break;

                  case 18:
                    _context3.next = 20;
                    return paymentResponse.text();

                  case 20:
                    errorBody = _context3.sent;
                    throw new Error(errorBody);

                  case 22:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "initializePayment",
        value: function initializePayment() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            var appId, locationId, costDetails, initializeCard, createPayment, tokenize, payments, card, handlePaymentMethodSubmission, cardButton, checkoutForm, cart, handleOrderCreation;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    handleOrderCreation = function _handleOrderCreation() {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee9() {
                        var body, orderResponse;
                        return regeneratorRuntime.wrap(function _callee9$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                body = JSON.stringify({
                                  cart: cart,
                                  costDetails: costDetails
                                });
                                _context9.prev = 1;
                                _context9.next = 4;
                                return fetch('/api/products/order', {
                                  method: 'POST',
                                  headers: {
                                    'Content-Type': 'application/json'
                                  },
                                  body: body
                                });

                              case 4:
                                orderResponse = _context9.sent;
                                return _context9.abrupt("return", orderResponse.json());

                              case 8:
                                _context9.prev = 8;
                                _context9.t0 = _context9["catch"](1);

                              case 10:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _callee9, null, [[1, 8]]);
                      }));
                    };

                    handlePaymentMethodSubmission = function _handlePaymentMethodS(event, paymentMethod, shippingInfo, orderInfo) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee7() {
                        var token, paymentResults;
                        return regeneratorRuntime.wrap(function _callee7$(_context7) {
                          while (1) {
                            switch (_context7.prev = _context7.next) {
                              case 0:
                                event.preventDefault();
                                _context7.prev = 1;
                                cardButton['disabled'] = true;
                                _context7.next = 5;
                                return tokenize(paymentMethod);

                              case 5:
                                token = _context7.sent;
                                _context7.next = 8;
                                return createPayment(token, shippingInfo, orderInfo);

                              case 8:
                                paymentResults = _context7.sent;

                                if (paymentResults.success) {
                                  localStorage.clear();
                                  window.location.replace("http://localhost:4200");
                                }

                                _context7.next = 16;
                                break;

                              case 12:
                                _context7.prev = 12;
                                _context7.t0 = _context7["catch"](1);
                                cardButton['disabled'] = false;
                                console.error(_context7.t0.message);

                              case 16:
                              case "end":
                                return _context7.stop();
                            }
                          }
                        }, _callee7, null, [[1, 12]]);
                      }));
                    };

                    tokenize = function _tokenize(paymentMethod) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee6() {
                        var tokenResult, errorMessage;
                        return regeneratorRuntime.wrap(function _callee6$(_context6) {
                          while (1) {
                            switch (_context6.prev = _context6.next) {
                              case 0:
                                _context6.next = 2;
                                return paymentMethod.tokenize();

                              case 2:
                                tokenResult = _context6.sent;

                                if (!(tokenResult.status === 'OK')) {
                                  _context6.next = 7;
                                  break;
                                }

                                return _context6.abrupt("return", tokenResult.token);

                              case 7:
                                errorMessage = "Tokenization failed-status: ".concat(tokenResult.status);

                                if (tokenResult.errors) {
                                  errorMessage += " and errors: ".concat(JSON.stringify(tokenResult.errors));
                                }

                                throw new Error(errorMessage);

                              case 10:
                              case "end":
                                return _context6.stop();
                            }
                          }
                        }, _callee6);
                      }));
                    };

                    createPayment = function _createPayment(token, shippingInfo, orderInfo) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee5() {
                        var body, paymentResponse, errorBody;
                        return regeneratorRuntime.wrap(function _callee5$(_context5) {
                          while (1) {
                            switch (_context5.prev = _context5.next) {
                              case 0:
                                body = JSON.stringify({
                                  locationId: locationId,
                                  sourceId: token,
                                  amountMoney: {
                                    amount: orderInfo.totalAmount,
                                    currency: 'USD'
                                  },
                                  cart: cart,
                                  firstname: shippingInfo.firstName,
                                  lastname: shippingInfo.lastName,
                                  companyName: shippingInfo.companyName,
                                  shippingAccountNumber: shippingInfo.shippingAccountNumber,
                                  orderId: orderInfo.orderId,
                                  buyerEmailAddress: shippingInfo.email,
                                  phone: shippingInfo.phone,
                                  shippingAddress: {
                                    addressLine1: shippingInfo.address,
                                    locality: shippingInfo.city,
                                    administrativeDistrictLevel1: shippingInfo.state,
                                    country: shippingInfo.country,
                                    postalCode: shippingInfo.zip
                                  }
                                });
                                _context5.next = 3;
                                return fetch('/api/products/createPayment', {
                                  method: 'POST',
                                  headers: {
                                    'Content-Type': 'application/json'
                                  },
                                  body: body
                                });

                              case 3:
                                paymentResponse = _context5.sent;

                                if (!paymentResponse.ok) {
                                  _context5.next = 6;
                                  break;
                                }

                                return _context5.abrupt("return", paymentResponse.json());

                              case 6:
                                _context5.next = 8;
                                return paymentResponse.text();

                              case 8:
                                errorBody = _context5.sent;
                                throw new Error(errorBody);

                              case 10:
                              case "end":
                                return _context5.stop();
                            }
                          }
                        }, _callee5);
                      }));
                    };

                    initializeCard = function _initializeCard(payments) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee4() {
                        var card;
                        return regeneratorRuntime.wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                _context4.next = 2;
                                return payments.card();

                              case 2:
                                card = _context4.sent;
                                _context4.next = 5;
                                return card.attach('#card-container');

                              case 5:
                                return _context4.abrupt("return", card);

                              case 6:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4);
                      }));
                    };

                    appId = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].squareAppID;
                    locationId = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].squareLocationID;
                    costDetails = {
                      cartTotal: this.cart.total,
                      salesTax: this.salesTaxPercent,
                      serviceFee: this.orderTotal * (this.serviceFee / 100)
                    };

                    if (window['Square']) {
                      _context10.next = 10;
                      break;
                    }

                    throw new Error('Square.js failed to load properly');

                  case 10:
                    payments = window['Square'].payments(appId, locationId);
                    _context10.prev = 11;
                    _context10.next = 14;
                    return initializeCard(payments);

                  case 14:
                    card = _context10.sent;
                    _context10.next = 21;
                    break;

                  case 17:
                    _context10.prev = 17;
                    _context10.t0 = _context10["catch"](11);
                    console.error('Initializing Card failed', _context10.t0);
                    return _context10.abrupt("return");

                  case 21:
                    cardButton = document.getElementById('card-button');
                    checkoutForm = this.checkoutData;
                    cardButton.addEventListener('click', function (event) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee8() {
                        var orderResponse;
                        return regeneratorRuntime.wrap(function _callee8$(_context8) {
                          while (1) {
                            switch (_context8.prev = _context8.next) {
                              case 0:
                                _context8.next = 2;
                                return handleOrderCreation();

                              case 2:
                                orderResponse = _context8.sent;

                                if (!orderResponse) {
                                  _context8.next = 8;
                                  break;
                                }

                                _context8.next = 6;
                                return handlePaymentMethodSubmission(event, card, checkoutForm, orderResponse);

                              case 6:
                                _context8.next = 8;
                                break;

                              case 8:
                              case "end":
                                return _context8.stop();
                            }
                          }
                        }, _callee8);
                      }));
                    });
                    cart = JSON.stringify(this.cart);

                  case 25:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this, [[11, 17]]);
          }));
        }
      }]);

      return CheckoutComponent;
    }();

    CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) {
      return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_services_products_apis_service__WEBPACK_IMPORTED_MODULE_5__["ProductsApisService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    CheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CheckoutComponent,
      selectors: [["app-checkout"]],
      decls: 2,
      vars: 2,
      consts: [["class", "d-flex justify-content-center mt-5", "style", "padding-top: 200px;", 4, "ngIf"], ["style", "padding: 2%", 4, "ngIf"], [1, "d-flex", "justify-content-center", "mt-5", 2, "padding-top", "200px"], ["role", "status", 1, "spinner-border", "text-secondary", 2, "width", "6rem", "height", "6rem"], [1, "visually-hidden"], [2, "padding", "2%"], [2, "margin-top", "45px", "text-align", "center", "color", "grey", "font-weight", "400", "font-size", "x-large"], [1, "container"], [1, "row"], ["class", "col-md-4 order-md-2 mb-4", 4, "ngIf"], ["class", "col-md-8 order-md-1", 4, "ngIf"], [4, "ngIf"], [1, "col-md-4", "order-md-2", "mb-4"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "text-muted"], [1, "badge", "badge-secondary", "badge-pill"], [1, "list-group", "mb-3"], ["class", "list-group-item d-flex justify-content-between lh-condensed", 4, "ngFor", "ngForOf"], [1, "list-group-item", "d-flex", "justify-content-between"], ["class", "text-muted", 4, "ngIf"], [1, "list-group-item", "d-flex", "justify-content-between", "lh-condensed"], [1, "my-0"], [1, "col-md-8", "order-md-1"], [1, "mb-3"], ["name", "checkoutForm", "id", "checkoutForm"], ["checkoutForm", ""], ["for", "companyName"], ["name", "companyName", "type", "text", "id", "companyName", 1, "form-control", 3, "focus"], [1, "col-md-6", "mb-3"], ["for", "firstName"], [2, "color", "red"], ["name", "firstName", "type", "text", "id", "firstName", "placeholder", "", "value", "", "required", "", 3, "ngClass", "focus"], ["class", "form-error", 4, "ngIf"], ["for", "lastName"], ["name", "lastName", "type", "text", "id", "lastName", "placeholder", "", "value", "", "required", "", 3, "ngClass", "focus"], ["for", "email"], ["name", "email", "type", "email", "id", "email", "required", "", 3, "ngClass", "focus"], ["name", "phone", "type", "phone", "id", "phone", "required", "", 3, "ngClass", "focus"], ["for", "shippingAccountNumber"], ["name", "shippingAccountNumber", "type", "text", "id", "shippingAccountNumber", 3, "ngClass", "focus"], ["for", "address"], ["name", "address", "type", "text", "id", "address", "placeholder", "1234 Main St", "required", "", 3, "ngClass", "focus"], ["for", "city"], ["name", "city", "type", "text", "id", "city", "required", "", 3, "ngClass", "focus"], [1, "col-md-4", "mb-3"], ["for", "country"], ["name", "country", "id", "country", "required", "", 3, "ngClass", "focus"], [1, "col-md-5", "mb-3"], ["for", "state"], ["name", "state", "id", "state", "required", "", 3, "ngClass", "change", "focus"], ["value", ""], [3, "click", 4, "ngFor", "ngForOf"], [1, "col-md-3", "mb-3"], ["for", "zip"], ["maxlength", "5", "name", "zipCode", "type", "text", "id", "zip", "placeholder", "", "required", "", 2, "margin-top", "0px", 3, "ngClass", "focus"], [1, "mb-4"], [2, "background-color", "rgb(0, 0, 95)", 3, "click"], [1, "form-error"], [1, "bi", "bi-exclamation-circle-fill"], [3, "click"], [2, "font-weight", "500"], [4, "ngFor", "ngForOf"]],
      template: function CheckoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CheckoutComponent_div_0_Template, 4, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CheckoutComponent_div_1_Template, 9, 3, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loaded);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]],
      styles: ["[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 8px;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 5px grey;\r\n  border-radius: 3px;\r\n}\r\n\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background: rgba(0, 0, 95, 0.568);\r\n  border-radius: 3px;\r\n}\r\n\r\n*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  font-family: Arial, sans-serif;\r\n}\r\n\r\n#payment-form[_ngcontent-%COMP%] {\r\n  min-width: 300px;\r\n}\r\n\r\n.buyer-inputs[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  gap: 20px;\r\n  justify-content: space-between;\r\n  border: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n#card-container[_ngcontent-%COMP%] {\r\n  margin-top: 50px;\r\n  min-height: 90px;\r\n}\r\n\r\n@media screen {\r\n  #card-container[_ngcontent-%COMP%] {\r\n    min-height: 140px;\r\n  }\r\n}\r\n\r\n#landing-page-layout[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n  margin: 150px auto;\r\n  max-width: 1000px;\r\n}\r\n\r\n#card-input[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  margin-bottom: 40px;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  line-height: 24px;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  width: 100%;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  padding: 12px;\r\n  width: 100%;\r\n  border-radius: 5px;\r\n  border-width: 1px;\r\n  margin-top: 20px;\r\n  font-size: 16px;\r\n  border: 1px solid rgba(0, 0, 0, 0.15);\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus {\r\n  border: 1px solid #006aff;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  color: #ffffff;\r\n  background-color: #006aff;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  border-style: none;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n          user-select: none;\r\n  outline: none;\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  line-height: 24px;\r\n  padding: 12px;\r\n  width: 100%;\r\n  box-shadow: 1px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:active {\r\n  background-color: rgb(0, 85, 204);\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:disabled {\r\n  background-color: rgba(0, 0, 0, 0.05);\r\n  color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n#payment-status-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border: 1px solid rgba(0, 0, 0, 0.05);\r\n  box-sizing: border-box;\r\n  border-radius: 50px;\r\n  margin: 0 auto;\r\n  width: 225px;\r\n  height: 48px;\r\n  visibility: hidden;\r\n}\r\n\r\n#payment-status-container.missing-credentials[_ngcontent-%COMP%] {\r\n  width: 350px;\r\n}\r\n\r\n#payment-status-container.is-success[_ngcontent-%COMP%]:before {\r\n  content: '';\r\n  background-color: #00b23b;\r\n  width: 16px;\r\n  height: 16px;\r\n  margin-right: 16px;\r\n  -webkit-mask: url(\"data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 6.70711C12.0968 6.31744 12.0978 5.68597 11.7093 5.29509C11.3208 4.90422 10.6894 4.90128 10.2973 5.28852L11 6C10.2973 5.28852 10.2973 5.28853 10.2973 5.28856L10.2971 5.28866L10.2967 5.28908L10.2951 5.29071L10.2886 5.29714L10.2632 5.32224L10.166 5.41826L9.81199 5.76861C9.51475 6.06294 9.10795 6.46627 8.66977 6.90213C8.11075 7.4582 7.49643 8.07141 6.99329 8.57908L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.31658 4.29289 8.70711L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z' fill='black' fill-opacity='0.9'/%3E%3C/svg%3E\");\r\n  mask: url(\"data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 6.70711C12.0968 6.31744 12.0978 5.68597 11.7093 5.29509C11.3208 4.90422 10.6894 4.90128 10.2973 5.28852L11 6C10.2973 5.28852 10.2973 5.28853 10.2973 5.28856L10.2971 5.28866L10.2967 5.28908L10.2951 5.29071L10.2886 5.29714L10.2632 5.32224L10.166 5.41826L9.81199 5.76861C9.51475 6.06294 9.10795 6.46627 8.66977 6.90213C8.11075 7.4582 7.49643 8.07141 6.99329 8.57908L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.31658 4.29289 8.70711L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z' fill='black' fill-opacity='0.9'/%3E%3C/svg%3E\");\r\n}\r\n\r\n#payment-status-container.is-success[_ngcontent-%COMP%]:after {\r\n  content: 'Payment successful';\r\n  font-size: 14px;\r\n  line-height: 16px;\r\n}\r\n\r\n#payment-status-container.is-failure[_ngcontent-%COMP%]:before {\r\n  content: '';\r\n  background-color: #cc0023;\r\n  width: 16px;\r\n  height: 16px;\r\n  margin-right: 16px;\r\n  -webkit-mask: url(\"data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM5.70711 4.29289C5.31658 3.90237 4.68342 3.90237 4.29289 4.29289C3.90237 4.68342 3.90237 5.31658 4.29289 5.70711L6.58579 8L4.29289 10.2929C3.90237 10.6834 3.90237 11.3166 4.29289 11.7071C4.68342 12.0976 5.31658 12.0976 5.70711 11.7071L8 9.41421L10.2929 11.7071C10.6834 12.0976 11.3166 12.0976 11.7071 11.7071C12.0976 11.3166 12.0976 10.6834 11.7071 10.2929L9.41421 8L11.7071 5.70711C12.0976 5.31658 12.0976 4.68342 11.7071 4.29289C11.3166 3.90237 10.6834 3.90237 10.2929 4.29289L8 6.58579L5.70711 4.29289Z' fill='black' fill-opacity='0.9'/%3E%3C/svg%3E%0A\");\r\n  mask: url(\"data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM5.70711 4.29289C5.31658 3.90237 4.68342 3.90237 4.29289 4.29289C3.90237 4.68342 3.90237 5.31658 4.29289 5.70711L6.58579 8L4.29289 10.2929C3.90237 10.6834 3.90237 11.3166 4.29289 11.7071C4.68342 12.0976 5.31658 12.0976 5.70711 11.7071L8 9.41421L10.2929 11.7071C10.6834 12.0976 11.3166 12.0976 11.7071 11.7071C12.0976 11.3166 12.0976 10.6834 11.7071 10.2929L9.41421 8L11.7071 5.70711C12.0976 5.31658 12.0976 4.68342 11.7071 4.29289C11.3166 3.90237 10.6834 3.90237 10.2929 4.29289L8 6.58579L5.70711 4.29289Z' fill='black' fill-opacity='0.9'/%3E%3C/svg%3E%0A\");\r\n}\r\n\r\n#payment-status-container.is-failure[_ngcontent-%COMP%]:after {\r\n  content: 'Payment failed';\r\n  font-size: 14px;\r\n  line-height: 16px;\r\n}\r\n\r\n#payment-status-container.missing-credentials[_ngcontent-%COMP%]:before {\r\n  content: '';\r\n  background-color: #cc0023;\r\n  width: 16px;\r\n  height: 16px;\r\n  margin-right: 16px;\r\n  -webkit-mask: url(\"data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM5.70711 4.29289C5.31658 3.90237 4.68342 3.90237 4.29289 4.29289C3.90237 4.68342 3.90237 5.31658 4.29289 5.70711L6.58579 8L4.29289 10.2929C3.90237 10.6834 3.90237 11.3166 4.29289 11.7071C4.68342 12.0976 5.31658 12.0976 5.70711 11.7071L8 9.41421L10.2929 11.7071C10.6834 12.0976 11.3166 12.0976 11.7071 11.7071C12.0976 11.3166 12.0976 10.6834 11.7071 10.2929L9.41421 8L11.7071 5.70711C12.0976 5.31658 12.0976 4.68342 11.7071 4.29289C11.3166 3.90237 10.6834 3.90237 10.2929 4.29289L8 6.58579L5.70711 4.29289Z' fill='black' fill-opacity='0.9'/%3E%3C/svg%3E%0A\");\r\n  mask: url(\"data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM5.70711 4.29289C5.31658 3.90237 4.68342 3.90237 4.29289 4.29289C3.90237 4.68342 3.90237 5.31658 4.29289 5.70711L6.58579 8L4.29289 10.2929C3.90237 10.6834 3.90237 11.3166 4.29289 11.7071C4.68342 12.0976 5.31658 12.0976 5.70711 11.7071L8 9.41421L10.2929 11.7071C10.6834 12.0976 11.3166 12.0976 11.7071 11.7071C12.0976 11.3166 12.0976 10.6834 11.7071 10.2929L9.41421 8L11.7071 5.70711C12.0976 5.31658 12.0976 4.68342 11.7071 4.29289C11.3166 3.90237 10.6834 3.90237 10.2929 4.29289L8 6.58579L5.70711 4.29289Z' fill='black' fill-opacity='0.9'/%3E%3C/svg%3E%0A\");\r\n}\r\n\r\n#payment-status-container.missing-credentials[_ngcontent-%COMP%]:after {\r\n  content: 'applicationId and/or locationId is incorrect';\r\n  font-size: 14px;\r\n  line-height: 16px;\r\n}\r\n\r\n#payment-status-container.is-success.store-card-message[_ngcontent-%COMP%]:after {\r\n  content: 'Store card successful';\r\n}\r\n\r\n#payment-status-container.is-failure.store-card-message[_ngcontent-%COMP%]:after {\r\n  content: 'Store card failed';\r\n}\r\n\r\n.form-error[_ngcontent-%COMP%] {\r\n  margin-top: 2px;\r\n  color: rgb(204,0,35);\r\n}\r\n\r\n.form-control-error[_ngcontent-%COMP%] {\r\n  border-color: rgb(204,0,35);\r\n  box-shadow: rgba(255, 0, 0, 0.6);\r\n  display: block;\r\n  width: 100%;\r\n  padding: 0.375rem 0.75rem;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  background-clip: padding-box;\r\n  border-radius: 0.25rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hlY2tvdXQvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWjs7QUFFQSxVQUFVOztBQUNWO0VBQ0UsOEJBQThCO0VBQzlCLGtCQUFrQjtBQUNwQjs7QUFFQSxXQUFXOztBQUNYO0VBQ0UsaUNBQWlDO0VBQ2pDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix5QkFBaUI7S0FBakIsc0JBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHFDQUFxQztFQUNyQyxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsNjRCQUE2NEI7RUFDNzRCLHE0QkFBcTRCO0FBQ3Y0Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxMUJBQXExQjtFQUNyMUIsNjBCQUE2MEI7QUFDLzBCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHExQkFBcTFCO0VBQ3IxQiw2MEJBQTYwQjtBQUMvMEI7O0FBRUE7RUFDRSx1REFBdUQ7RUFDdkQsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsZ0NBQWdDO0VBQ2hDLGNBQWM7RUFDZCxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QixzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGVja291dC9jaGVja291dC9jaGVja291dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDhweDtcclxufVxyXG5cclxuLyogVHJhY2sgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCBncmV5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgOTUsIDAuNTY4KTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuI3BheW1lbnQtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLmJ1eWVyLWlucHV0cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDIwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuI2NhcmQtY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDkwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4ge1xyXG4gICNjYXJkLWNvbnRhaW5lciB7XHJcbiAgICBtaW4taGVpZ2h0OiAxNDBweDtcclxuICB9XHJcbn1cclxuXHJcbiNsYW5kaW5nLXBhZ2UtbGF5b3V0IHtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbjogMTUwcHggYXV0bztcclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxufVxyXG5cclxuI2NhcmQtaW5wdXQge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuaDMge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxucCB7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwNmFmZjtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2YWZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3gtc2hhZG93OiAxcHg7XHJcbn1cclxuXHJcbmJ1dHRvbjphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCA4NSwgMjA0KTtcclxufVxyXG5cclxuYnV0dG9uOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbiNwYXltZW50LXN0YXR1cy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogMjI1cHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuI3BheW1lbnQtc3RhdHVzLWNvbnRhaW5lci5taXNzaW5nLWNyZWRlbnRpYWxzIHtcclxuICB3aWR0aDogMzUwcHg7XHJcbn1cclxuXHJcbiNwYXltZW50LXN0YXR1cy1jb250YWluZXIuaXMtc3VjY2VzczpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGIyM2I7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAtd2Via2l0LW1hc2s6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgd2lkdGg9JzE2JyBoZWlnaHQ9JzE2JyB2aWV3Qm94PScwIDAgMTYgMTYnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGZpbGwtcnVsZT0nZXZlbm9kZCcgY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNOCAxNkMxMi40MTgzIDE2IDE2IDEyLjQxODMgMTYgOEMxNiAzLjU4MTcyIDEyLjQxODMgMCA4IDBDMy41ODE3MiAwIDAgMy41ODE3MiAwIDhDMCAxMi40MTgzIDMuNTgxNzIgMTYgOCAxNlpNMTEuNzA3MSA2LjcwNzExQzEyLjA5NjggNi4zMTc0NCAxMi4wOTc4IDUuNjg1OTcgMTEuNzA5MyA1LjI5NTA5QzExLjMyMDggNC45MDQyMiAxMC42ODk0IDQuOTAxMjggMTAuMjk3MyA1LjI4ODUyTDExIDZDMTAuMjk3MyA1LjI4ODUyIDEwLjI5NzMgNS4yODg1MyAxMC4yOTczIDUuMjg4NTZMMTAuMjk3MSA1LjI4ODY2TDEwLjI5NjcgNS4yODkwOEwxMC4yOTUxIDUuMjkwNzFMMTAuMjg4NiA1LjI5NzE0TDEwLjI2MzIgNS4zMjIyNEwxMC4xNjYgNS40MTgyNkw5LjgxMTk5IDUuNzY4NjFDOS41MTQ3NSA2LjA2Mjk0IDkuMTA3OTUgNi40NjYyNyA4LjY2OTc3IDYuOTAyMTNDOC4xMTA3NSA3LjQ1ODIgNy40OTY0MyA4LjA3MTQxIDYuOTkzMjkgOC41NzkwOEw1LjcwNzExIDcuMjkyODlDNS4zMTY1OCA2LjkwMjM3IDQuNjgzNDIgNi45MDIzNyA0LjI5Mjg5IDcuMjkyODlDMy45MDIzNyA3LjY4MzQyIDMuOTAyMzcgOC4zMTY1OCA0LjI5Mjg5IDguNzA3MTFMNi4yOTI4OSAxMC43MDcxQzYuNjgzNDIgMTEuMDk3NiA3LjMxNjU4IDExLjA5NzYgNy43MDcxMSAxMC43MDcxTDExLjcwNzEgNi43MDcxMVonIGZpbGw9J2JsYWNrJyBmaWxsLW9wYWNpdHk9JzAuOScvJTNFJTNDL3N2ZyUzRVwiKTtcclxuICBtYXNrOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgdmlld0JveD0nMCAwIDE2IDE2JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTggMTZDMTIuNDE4MyAxNiAxNiAxMi40MTgzIDE2IDhDMTYgMy41ODE3MiAxMi40MTgzIDAgOCAwQzMuNTgxNzIgMCAwIDMuNTgxNzIgMCA4QzAgMTIuNDE4MyAzLjU4MTcyIDE2IDggMTZaTTExLjcwNzEgNi43MDcxMUMxMi4wOTY4IDYuMzE3NDQgMTIuMDk3OCA1LjY4NTk3IDExLjcwOTMgNS4yOTUwOUMxMS4zMjA4IDQuOTA0MjIgMTAuNjg5NCA0LjkwMTI4IDEwLjI5NzMgNS4yODg1MkwxMSA2QzEwLjI5NzMgNS4yODg1MiAxMC4yOTczIDUuMjg4NTMgMTAuMjk3MyA1LjI4ODU2TDEwLjI5NzEgNS4yODg2NkwxMC4yOTY3IDUuMjg5MDhMMTAuMjk1MSA1LjI5MDcxTDEwLjI4ODYgNS4yOTcxNEwxMC4yNjMyIDUuMzIyMjRMMTAuMTY2IDUuNDE4MjZMOS44MTE5OSA1Ljc2ODYxQzkuNTE0NzUgNi4wNjI5NCA5LjEwNzk1IDYuNDY2MjcgOC42Njk3NyA2LjkwMjEzQzguMTEwNzUgNy40NTgyIDcuNDk2NDMgOC4wNzE0MSA2Ljk5MzI5IDguNTc5MDhMNS43MDcxMSA3LjI5Mjg5QzUuMzE2NTggNi45MDIzNyA0LjY4MzQyIDYuOTAyMzcgNC4yOTI4OSA3LjI5Mjg5QzMuOTAyMzcgNy42ODM0MiAzLjkwMjM3IDguMzE2NTggNC4yOTI4OSA4LjcwNzExTDYuMjkyODkgMTAuNzA3MUM2LjY4MzQyIDExLjA5NzYgNy4zMTY1OCAxMS4wOTc2IDcuNzA3MTEgMTAuNzA3MUwxMS43MDcxIDYuNzA3MTFaJyBmaWxsPSdibGFjaycgZmlsbC1vcGFjaXR5PScwLjknLyUzRSUzQy9zdmclM0VcIik7XHJcbn1cclxuXHJcbiNwYXltZW50LXN0YXR1cy1jb250YWluZXIuaXMtc3VjY2VzczphZnRlciB7XHJcbiAgY29udGVudDogJ1BheW1lbnQgc3VjY2Vzc2Z1bCc7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG4jcGF5bWVudC1zdGF0dXMtY29udGFpbmVyLmlzLWZhaWx1cmU6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2MwMDIzO1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIGhlaWdodDogMTZweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgLXdlYmtpdC1tYXNrOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgdmlld0JveD0nMCAwIDE2IDE2JyBmaWxsPSdub25lJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGNsaXAtcnVsZT0nZXZlbm9kZCcgZD0nTTggMTZDMTIuNDE4MyAxNiAxNiAxMi40MTgzIDE2IDhDMTYgMy41ODE3MiAxMi40MTgzIDAgOCAwQzMuNTgxNzIgMCAwIDMuNTgxNzIgMCA4QzAgMTIuNDE4MyAzLjU4MTcyIDE2IDggMTZaTTUuNzA3MTEgNC4yOTI4OUM1LjMxNjU4IDMuOTAyMzcgNC42ODM0MiAzLjkwMjM3IDQuMjkyODkgNC4yOTI4OUMzLjkwMjM3IDQuNjgzNDIgMy45MDIzNyA1LjMxNjU4IDQuMjkyODkgNS43MDcxMUw2LjU4NTc5IDhMNC4yOTI4OSAxMC4yOTI5QzMuOTAyMzcgMTAuNjgzNCAzLjkwMjM3IDExLjMxNjYgNC4yOTI4OSAxMS43MDcxQzQuNjgzNDIgMTIuMDk3NiA1LjMxNjU4IDEyLjA5NzYgNS43MDcxMSAxMS43MDcxTDggOS40MTQyMUwxMC4yOTI5IDExLjcwNzFDMTAuNjgzNCAxMi4wOTc2IDExLjMxNjYgMTIuMDk3NiAxMS43MDcxIDExLjcwNzFDMTIuMDk3NiAxMS4zMTY2IDEyLjA5NzYgMTAuNjgzNCAxMS43MDcxIDEwLjI5MjlMOS40MTQyMSA4TDExLjcwNzEgNS43MDcxMUMxMi4wOTc2IDUuMzE2NTggMTIuMDk3NiA0LjY4MzQyIDExLjcwNzEgNC4yOTI4OUMxMS4zMTY2IDMuOTAyMzcgMTAuNjgzNCAzLjkwMjM3IDEwLjI5MjkgNC4yOTI4OUw4IDYuNTg1NzlMNS43MDcxMSA0LjI5Mjg5WicgZmlsbD0nYmxhY2snIGZpbGwtb3BhY2l0eT0nMC45Jy8lM0UlM0Mvc3ZnJTNFJTBBXCIpO1xyXG4gIG1hc2s6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgd2lkdGg9JzE2JyBoZWlnaHQ9JzE2JyB2aWV3Qm94PScwIDAgMTYgMTYnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGZpbGwtcnVsZT0nZXZlbm9kZCcgY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNOCAxNkMxMi40MTgzIDE2IDE2IDEyLjQxODMgMTYgOEMxNiAzLjU4MTcyIDEyLjQxODMgMCA4IDBDMy41ODE3MiAwIDAgMy41ODE3MiAwIDhDMCAxMi40MTgzIDMuNTgxNzIgMTYgOCAxNlpNNS43MDcxMSA0LjI5Mjg5QzUuMzE2NTggMy45MDIzNyA0LjY4MzQyIDMuOTAyMzcgNC4yOTI4OSA0LjI5Mjg5QzMuOTAyMzcgNC42ODM0MiAzLjkwMjM3IDUuMzE2NTggNC4yOTI4OSA1LjcwNzExTDYuNTg1NzkgOEw0LjI5Mjg5IDEwLjI5MjlDMy45MDIzNyAxMC42ODM0IDMuOTAyMzcgMTEuMzE2NiA0LjI5Mjg5IDExLjcwNzFDNC42ODM0MiAxMi4wOTc2IDUuMzE2NTggMTIuMDk3NiA1LjcwNzExIDExLjcwNzFMOCA5LjQxNDIxTDEwLjI5MjkgMTEuNzA3MUMxMC42ODM0IDEyLjA5NzYgMTEuMzE2NiAxMi4wOTc2IDExLjcwNzEgMTEuNzA3MUMxMi4wOTc2IDExLjMxNjYgMTIuMDk3NiAxMC42ODM0IDExLjcwNzEgMTAuMjkyOUw5LjQxNDIxIDhMMTEuNzA3MSA1LjcwNzExQzEyLjA5NzYgNS4zMTY1OCAxMi4wOTc2IDQuNjgzNDIgMTEuNzA3MSA0LjI5Mjg5QzExLjMxNjYgMy45MDIzNyAxMC42ODM0IDMuOTAyMzcgMTAuMjkyOSA0LjI5Mjg5TDggNi41ODU3OUw1LjcwNzExIDQuMjkyODlaJyBmaWxsPSdibGFjaycgZmlsbC1vcGFjaXR5PScwLjknLyUzRSUzQy9zdmclM0UlMEFcIik7XHJcbn1cclxuXHJcbiNwYXltZW50LXN0YXR1cy1jb250YWluZXIuaXMtZmFpbHVyZTphZnRlciB7XHJcbiAgY29udGVudDogJ1BheW1lbnQgZmFpbGVkJztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbiNwYXltZW50LXN0YXR1cy1jb250YWluZXIubWlzc2luZy1jcmVkZW50aWFsczpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjYzAwMjM7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAtd2Via2l0LW1hc2s6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgd2lkdGg9JzE2JyBoZWlnaHQ9JzE2JyB2aWV3Qm94PScwIDAgMTYgMTYnIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGZpbGwtcnVsZT0nZXZlbm9kZCcgY2xpcC1ydWxlPSdldmVub2RkJyBkPSdNOCAxNkMxMi40MTgzIDE2IDE2IDEyLjQxODMgMTYgOEMxNiAzLjU4MTcyIDEyLjQxODMgMCA4IDBDMy41ODE3MiAwIDAgMy41ODE3MiAwIDhDMCAxMi40MTgzIDMuNTgxNzIgMTYgOCAxNlpNNS43MDcxMSA0LjI5Mjg5QzUuMzE2NTggMy45MDIzNyA0LjY4MzQyIDMuOTAyMzcgNC4yOTI4OSA0LjI5Mjg5QzMuOTAyMzcgNC42ODM0MiAzLjkwMjM3IDUuMzE2NTggNC4yOTI4OSA1LjcwNzExTDYuNTg1NzkgOEw0LjI5Mjg5IDEwLjI5MjlDMy45MDIzNyAxMC42ODM0IDMuOTAyMzcgMTEuMzE2NiA0LjI5Mjg5IDExLjcwNzFDNC42ODM0MiAxMi4wOTc2IDUuMzE2NTggMTIuMDk3NiA1LjcwNzExIDExLjcwNzFMOCA5LjQxNDIxTDEwLjI5MjkgMTEuNzA3MUMxMC42ODM0IDEyLjA5NzYgMTEuMzE2NiAxMi4wOTc2IDExLjcwNzEgMTEuNzA3MUMxMi4wOTc2IDExLjMxNjYgMTIuMDk3NiAxMC42ODM0IDExLjcwNzEgMTAuMjkyOUw5LjQxNDIxIDhMMTEuNzA3MSA1LjcwNzExQzEyLjA5NzYgNS4zMTY1OCAxMi4wOTc2IDQuNjgzNDIgMTEuNzA3MSA0LjI5Mjg5QzExLjMxNjYgMy45MDIzNyAxMC42ODM0IDMuOTAyMzcgMTAuMjkyOSA0LjI5Mjg5TDggNi41ODU3OUw1LjcwNzExIDQuMjkyODlaJyBmaWxsPSdibGFjaycgZmlsbC1vcGFjaXR5PScwLjknLyUzRSUzQy9zdmclM0UlMEFcIik7XHJcbiAgbWFzazogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIHZpZXdCb3g9JzAgMCAxNiAxNicgZmlsbD0nbm9uZScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZmlsbC1ydWxlPSdldmVub2RkJyBjbGlwLXJ1bGU9J2V2ZW5vZGQnIGQ9J004IDE2QzEyLjQxODMgMTYgMTYgMTIuNDE4MyAxNiA4QzE2IDMuNTgxNzIgMTIuNDE4MyAwIDggMEMzLjU4MTcyIDAgMCAzLjU4MTcyIDAgOEMwIDEyLjQxODMgMy41ODE3MiAxNiA4IDE2Wk01LjcwNzExIDQuMjkyODlDNS4zMTY1OCAzLjkwMjM3IDQuNjgzNDIgMy45MDIzNyA0LjI5Mjg5IDQuMjkyODlDMy45MDIzNyA0LjY4MzQyIDMuOTAyMzcgNS4zMTY1OCA0LjI5Mjg5IDUuNzA3MTFMNi41ODU3OSA4TDQuMjkyODkgMTAuMjkyOUMzLjkwMjM3IDEwLjY4MzQgMy45MDIzNyAxMS4zMTY2IDQuMjkyODkgMTEuNzA3MUM0LjY4MzQyIDEyLjA5NzYgNS4zMTY1OCAxMi4wOTc2IDUuNzA3MTEgMTEuNzA3MUw4IDkuNDE0MjFMMTAuMjkyOSAxMS43MDcxQzEwLjY4MzQgMTIuMDk3NiAxMS4zMTY2IDEyLjA5NzYgMTEuNzA3MSAxMS43MDcxQzEyLjA5NzYgMTEuMzE2NiAxMi4wOTc2IDEwLjY4MzQgMTEuNzA3MSAxMC4yOTI5TDkuNDE0MjEgOEwxMS43MDcxIDUuNzA3MTFDMTIuMDk3NiA1LjMxNjU4IDEyLjA5NzYgNC42ODM0MiAxMS43MDcxIDQuMjkyODlDMTEuMzE2NiAzLjkwMjM3IDEwLjY4MzQgMy45MDIzNyAxMC4yOTI5IDQuMjkyODlMOCA2LjU4NTc5TDUuNzA3MTEgNC4yOTI4OVonIGZpbGw9J2JsYWNrJyBmaWxsLW9wYWNpdHk9JzAuOScvJTNFJTNDL3N2ZyUzRSUwQVwiKTtcclxufVxyXG5cclxuI3BheW1lbnQtc3RhdHVzLWNvbnRhaW5lci5taXNzaW5nLWNyZWRlbnRpYWxzOmFmdGVyIHtcclxuICBjb250ZW50OiAnYXBwbGljYXRpb25JZCBhbmQvb3IgbG9jYXRpb25JZCBpcyBpbmNvcnJlY3QnO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxufVxyXG5cclxuI3BheW1lbnQtc3RhdHVzLWNvbnRhaW5lci5pcy1zdWNjZXNzLnN0b3JlLWNhcmQtbWVzc2FnZTphZnRlciB7XHJcbiAgY29udGVudDogJ1N0b3JlIGNhcmQgc3VjY2Vzc2Z1bCc7XHJcbn1cclxuXHJcbiNwYXltZW50LXN0YXR1cy1jb250YWluZXIuaXMtZmFpbHVyZS5zdG9yZS1jYXJkLW1lc3NhZ2U6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICdTdG9yZSBjYXJkIGZhaWxlZCc7XHJcbn1cclxuXHJcbi5mb3JtLWVycm9yIHtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgY29sb3I6IHJnYigyMDQsMCwzNSk7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtZXJyb3Ige1xyXG4gIGJvcmRlci1jb2xvcjogcmdiKDIwNCwwLDM1KTtcclxuICBib3gtc2hhZG93OiByZ2JhKDI1NSwgMCwgMCwgMC42KTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CheckoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-checkout',
          templateUrl: './checkout.component.html',
          styleUrls: ['./checkout.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: src_app_services_api_services_products_apis_service__WEBPACK_IMPORTED_MODULE_5__["ProductsApisService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/home/home.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/home/home.component.ts ***!
    \**********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppPagesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_products_products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../components/products/products.component */
    "./src/app/components/products/products.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.query = '';
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 10,
      vars: 0,
      consts: [[1, "py-5", 2, "background-color", "rgb(0, 0, 95)"], [1, "container", "px-2", "px-lg-5", "my-5"], [1, "text-center", "text-white", "pt-5"], [1, "display-4", "fw-bolder"], [1, "lead", "fw-normal", "text-white-50", "mb-0"], [1, "py-1"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ASii Medical");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Purchase Orders can be emailed to orders@asiimedical.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-footer");
        }
      },
      directives: [_components_products_products_component__WEBPACK_IMPORTED_MODULE_1__["ProductsComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/product-full-view/product-full-view.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/product-full-view/product-full-view.component.ts ***!
    \************************************************************************/

  /*! exports provided: ProductFullViewComponent */

  /***/
  function srcAppPagesProductFullViewProductFullViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductFullViewComponent", function () {
      return ProductFullViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_api_services_products_apis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/api-services/products-apis.service */
    "./src/app/services/api-services/products-apis.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/cart-service/cart.service */
    "./src/app/services/cart-service/cart.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function ProductFullViewComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h1", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProductFullViewComponent_div_0_Template_input_ngModelChange_22_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48);

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r47.quantity = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductFullViewComponent_div_0_Template_button_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48);

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r49.addToCart(ctx_r49.product, ctx_r49.quantity);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Add to cart ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r46.product.ItemImageURL ? ctx_r46.product.ItemImageURL : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Item Code: ", ctx_r46.product.NDCItemCode, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r46.product.ProductName);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 7, ctx_r46.product.SalePrice), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r46.product.ItemDescription);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r46.product.ProductDescription);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r46.quantity);
      }
    }

    var ProductFullViewComponent =
    /*#__PURE__*/
    function () {
      function ProductFullViewComponent(productsApi, route, cartService) {
        _classCallCheck(this, ProductFullViewComponent);

        this.productsApi = productsApi;
        this.route = route;
        this.cartService = cartService;
        this.loaded = false;
        this.quantity = 1;
      }

      _createClass(ProductFullViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.route.queryParams.subscribe(function (params) {
            _this9.productId = params['productId'];
          });
          this.getProduct();
        }
      }, {
        key: "getProduct",
        value: function getProduct() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            var _this10 = this;

            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.productsApi.getProductById(this.productId).subscribe(function (res) {
                      _this10.product = res;
                      _this10.loaded = true;
                    });

                  case 2:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "addToCart",
        value: function addToCart(product, quantity) {
          this.cartService.updateCart(product, quantity);
        }
      }]);

      return ProductFullViewComponent;
    }();

    ProductFullViewComponent.ɵfac = function ProductFullViewComponent_Factory(t) {
      return new (t || ProductFullViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_services_products_apis_service__WEBPACK_IMPORTED_MODULE_2__["ProductsApisService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]));
    };

    ProductFullViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProductFullViewComponent,
      selectors: [["app-product-full-view"]],
      decls: 1,
      vars: 1,
      consts: [["style", "height: 100%; ", 4, "ngIf"], [2, "height", "100%"], [1, "py-5"], [1, "container", "px-4", "px-lg-5", "my-5"], [1, "row", "gx-4", "gx-lg-5", "align-items-center"], [1, "col-md-6"], ["alt", "...", 1, "card-img-top", "mb-5", "mb-md-0", 3, "src"], [1, "small", "mb-1"], [1, "display-5", "fw-bolder"], [1, "fs-5", "mb-5"], [1, "lead"], [1, "d-flex"], ["id", "inputQuantity", "type", "num", "onkeypress", "return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57", 1, "form-control", "text-center", "me-3", 2, "max-width", "3rem", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "flex-shrink-0", "add-to-cart", 2, "outline", "1px solid rgb(0, 0, 95)", 3, "click"], [1, "bi-cart-fill", "me-1"]],
      template: function ProductFullViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProductFullViewComponent_div_0_Template, 26, 9, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loaded);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]],
      styles: [".add-to-cart[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(0, 0, 95);\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC1mdWxsLXZpZXcvcHJvZHVjdC1mdWxsLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0LWZ1bGwtdmlldy9wcm9kdWN0LWZ1bGwtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC10by1jYXJ0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgOTUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductFullViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-product-full-view',
          templateUrl: './product-full-view.component.html',
          styleUrls: ['./product-full-view.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_api_services_products_apis_service__WEBPACK_IMPORTED_MODULE_2__["ProductsApisService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_app_services_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/api-services/products-apis.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/services/api-services/products-apis.service.ts ***!
    \****************************************************************/

  /*! exports provided: ProductsApisService */

  /***/
  function srcAppServicesApiServicesProductsApisServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsApisService", function () {
      return ProductsApisService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var ProductsApisService =
    /*#__PURE__*/
    function () {
      function ProductsApisService(http) {
        _classCallCheck(this, ProductsApisService);

        this.http = http;
        this.productsApiURL = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseApi, "/").concat(localStorage.getItem("productQuantityType") ? localStorage.getItem("productQuantityType") : "products");
      }

      _createClass(ProductsApisService, [{
        key: "setProductApiURL",
        value: function setProductApiURL(quantityType) {
          this.productsApiURL = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseApi, "/").concat(quantityType);
        }
      }, {
        key: "getProducts",
        value: function getProducts(page, itemsPerPage) {
          return this.http.get("".concat(this.productsApiURL, "/all/").concat(page, "/").concat(itemsPerPage));
        }
      }, {
        key: "getProductById",
        value: function getProductById(id) {
          console.log(this.productsApiURL);
          return this.http.get("".concat(this.productsApiURL, "/getById/").concat(id));
        }
      }, {
        key: "searchProducts",
        value: function searchProducts(page, itemsPerPage, query) {
          return this.http.get("".concat(this.productsApiURL, "/search/").concat(page, "/").concat(itemsPerPage, "/").concat(encodeURIComponent(query)));
        }
      }, {
        key: "searchProductsByCategory",
        value: function searchProductsByCategory(page, itemsPerPage, categoryId) {
          return this.http.post("".concat(this.productsApiURL, "/filterCategory/").concat(page, "/").concat(itemsPerPage), {
            category: categoryId
          });
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          return this.http.get("".concat(this.productsApiURL, "/categories"));
        }
      }, {
        key: "autoComplete",
        value: function autoComplete(query) {
          return this.http.get("".concat(this.productsApiURL, "/autocomplete/").concat(encodeURIComponent(query)));
        }
      }, {
        key: "exactNameSearch",
        value: function exactNameSearch(page, itemsPerPage, name) {
          return this.http.get("".concat(this.productsApiURL, "/exactNameSearch/").concat(page, "/").concat(itemsPerPage, "/").concat(encodeURIComponent(name)));
        }
      }, {
        key: "checkout",
        value: function checkout(cart) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.http.post("".concat(this.productsApiURL, "/order"), cart, {
            headers: headers
          });
        }
      }, {
        key: "sendPayment",
        value: function sendPayment(token) {
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseApi, "/products/createPayment"), token);
        }
      }]);

      return ProductsApisService;
    }();

    ProductsApisService.ɵfac = function ProductsApisService_Factory(t) {
      return new (t || ProductsApisService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
    };

    ProductsApisService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ProductsApisService,
      factory: ProductsApisService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductsApisService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/cart-service/cart.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/cart-service/cart.service.ts ***!
    \*******************************************************/

  /*! exports provided: CartService */

  /***/
  function srcAppServicesCartServiceCartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartService", function () {
      return CartService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _api_services_products_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../api-services/products-apis.service */
    "./src/app/services/api-services/products-apis.service.ts");

    var CartService =
    /*#__PURE__*/
    function () {
      function CartService(router, productsApis) {
        _classCallCheck(this, CartService);

        this.router = router;
        this.productsApis = productsApis;
        this.cart = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]();
        this.cartSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.cartItems = {
          items: [],
          total: 0
        };
        this.cartTotal = 0;
        this.cartSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.cart = this.cartSubject.asObservable();

        if (localStorage.getItem('ASii_Medical_Cart')) {
          this.setCartFromLocalStorage();
        }
      }

      _createClass(CartService, [{
        key: "setCartFromLocalStorage",
        value: function setCartFromLocalStorage() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            var itemIds, cart;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    itemIds = JSON.parse(localStorage.getItem('ASii_Medical_Cart'));
                    _context12.next = 3;
                    return this.getCartItems(itemIds);

                  case 3:
                    cart = _context12.sent;
                    this.cartItems.items = cart;
                    this.setCartTotal();

                  case 6:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "getCartItems",
        value: function getCartItems(itemIds) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee13() {
            var cart, _iterator, _step, item, res;

            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    cart = [];
                    _iterator = _createForOfIteratorHelper(itemIds);
                    _context13.prev = 2;

                    _iterator.s();

                  case 4:
                    if ((_step = _iterator.n()).done) {
                      _context13.next = 13;
                      break;
                    }

                    item = _step.value;
                    _context13.next = 8;
                    return this.productsApis.getProductById(item._id).toPromise();

                  case 8:
                    res = _context13.sent;
                    res['quantity'] = item.quantity;
                    cart.push(res);

                  case 11:
                    _context13.next = 4;
                    break;

                  case 13:
                    _context13.next = 18;
                    break;

                  case 15:
                    _context13.prev = 15;
                    _context13.t0 = _context13["catch"](2);

                    _iterator.e(_context13.t0);

                  case 18:
                    _context13.prev = 18;

                    _iterator.f();

                    return _context13.finish(18);

                  case 21:
                    return _context13.abrupt("return", cart);

                  case 22:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this, [[2, 15, 18, 21]]);
          }));
        }
      }, {
        key: "getCart",
        value: function getCart() {
          return this.cartItems;
        }
      }, {
        key: "getCartTotal",
        value: function getCartTotal() {
          return this.cartItems.total;
        }
      }, {
        key: "updateCart",
        value: function updateCart(item, quantity) {
          var duplicates = this.cartItems.items.filter(function (cartItem) {
            return item._id === cartItem._id;
          });

          if (duplicates.length) {
            var duplicate = this.cartItems.items.find(function (cartItem) {
              return cartItem._id === item._id;
            });
            duplicate.quantity = Number(duplicate.quantity) + Number(quantity);
            this.setCartTotal();
          } else {
            item.quantity = quantity;
            this.cartItems.items.push(item);
            this.setCartTotal();
            this.cartSubject.next(this.cartItems);
          }

          this.cartChangeEffects();
        }
      }, {
        key: "deleteCartItem",
        value: function deleteCartItem(item) {
          this.cartItems.items = this.cartItems.items.filter(function (cartItem) {
            return cartItem._id !== item._id;
          });
          this.setCartTotal();
          this.cartSubject.next(this.cartItems);
          this.cartChangeEffects();
        }
      }, {
        key: "setCartTotal",
        value: function setCartTotal() {
          var total = 0;
          this.cartItems.items.forEach(function (item) {
            total += Number((item.SalePrice * item.quantity).toFixed(2));
          });
          this.cartItems.total = total;
        }
      }, {
        key: "updateItemQuantity",
        value: function updateItemQuantity(itemId, itemQuantity) {
          this.cartItems.items.find(function (item) {
            return item._id === itemId;
          }).quantity = itemQuantity;
          this.setCartTotal();
          this.cartSubject.next(this.cartItems);
          this.cartChangeEffects();
        }
      }, {
        key: "cartChangeEffects",
        value: function cartChangeEffects() {
          this.setLocalStorageCart();
        } // public clearCart() {
        //   this.cartItems = {items: [], total: 0};
        //   this.cartTotal = 0;
        //   localStorage.removeItem("ASii_Medical_Cart");
        //   this.cartChangeEffects();
        //   this.cartSubject.next(this.cartItems)
        // }

      }, {
        key: "setLocalStorageCart",
        value: function setLocalStorageCart() {
          var cart = [];
          this.cartItems.items.forEach(function (item) {
            cart.push({
              _id: item._id,
              quantity: item.quantity
            });
          });
          localStorage.setItem('ASii_Medical_Cart', JSON.stringify(cart));
        }
      }, {
        key: "setPaymentDetails",
        value: function setPaymentDetails(orderId) {
          this.orderId = orderId;
        }
      }, {
        key: "getPaymentDetails",
        value: function getPaymentDetails() {
          return this.orderId;
        }
      }]);

      return CartService;
    }();

    CartService.ɵfac = function CartService_Factory(t) {
      return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_services_products_apis_service__WEBPACK_IMPORTED_MODULE_4__["ProductsApisService"]));
    };

    CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CartService,
      factory: CartService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _api_services_products_apis_service__WEBPACK_IMPORTED_MODULE_4__["ProductsApisService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/products-service/products.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/services/products-service/products.service.ts ***!
    \***************************************************************/

  /*! exports provided: ProductsService */

  /***/
  function srcAppServicesProductsServiceProductsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsService", function () {
      return ProductsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _api_services_products_apis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api-services/products-apis.service */
    "./src/app/services/api-services/products-apis.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _cart_service_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../cart-service/cart.service */
    "./src/app/services/cart-service/cart.service.ts");

    var ProductsService =
    /*#__PURE__*/
    function () {
      function ProductsService(productsApis, router, cartService) {
        _classCallCheck(this, ProductsService);

        this.productsApis = productsApis;
        this.router = router;
        this.cartService = cartService;
        this.products = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
        this.productsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.categoryRefresh = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
        this.categoryRefreshSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.page = 1;
        this.itemsPerPage = 20;
        this.category = '';
        this.query = '';
        this.productQuantityType = localStorage.getItem("productQuantityLabel") ? localStorage.getItem("productQuantityLabel") : 'Large';
        this.productsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.products = this.productsSubject.asObservable();
        this.categoryRefreshSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.categoryRefresh = this.categoryRefreshSubject.asObservable();
      }

      _createClass(ProductsService, [{
        key: "setProductApiURL",
        value: function setProductApiURL(quantityType) {
          //this.cartService.clearCart();
          this.productQuantityType = quantityType;
          localStorage.setItem("productQuantityLabel", quantityType);

          if (quantityType === 'Large') {
            this.productsApis.setProductApiURL('products');
            localStorage.setItem("productQuantityType", 'products');
          } else if (quantityType === 'Small') {
            this.productsApis.setProductApiURL('smallQuantityProducts');
            localStorage.setItem("productQuantityType", 'smallQuantityProducts');
          }

          this.page = 1;
          this.itemsPerPage = 20;
          this.getProducts();
          this.categoryRefreshSubject.next(true);
          this.router.navigate(['/']);
        }
      }, {
        key: "getProductQuantityType",
        value: function getProductQuantityType() {
          return this.productQuantityType;
        }
      }, {
        key: "updateProducts",
        value: function updateProducts() {
          if (this.query.length) {
            this.searchProducts();
          } else if (this.category.length) {
            this.searchProductsByCategory();
          } else {
            this.getProducts();
          }
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          var _this11 = this;

          this.category = '';
          this.query = '';
          this.productsApis.getProducts(this.page, this.itemsPerPage).subscribe(function (res) {
            _this11.productsSubject.next(res);
          });
        }
      }, {
        key: "searchProducts",
        value: function searchProducts() {
          var _this12 = this;

          this.category = '';
          this.router.url !== '/' ? this.router.navigate(['/']) : null;
          this.productsApis.searchProducts(this.page, this.itemsPerPage, this.query).subscribe(function (res) {
            _this12.productsSubject.next(res);
          });
        }
      }, {
        key: "searchProductsByCategory",
        value: function searchProductsByCategory() {
          var _this13 = this;

          this.query = '';
          this.productsApis.searchProductsByCategory(this.page, this.itemsPerPage, this.category).subscribe(function (res) {
            _this13.productsSubject.next(res);
          });
        }
      }, {
        key: "getPage",
        value: function getPage() {
          return this.page;
        }
      }, {
        key: "updatePage",
        value: function updatePage(page) {
          this.page = page;
          this.updateProducts();
        }
      }, {
        key: "getItemsPerPage",
        value: function getItemsPerPage() {
          return this.itemsPerPage;
        }
      }, {
        key: "updateItemsPerPage",
        value: function updateItemsPerPage(itemsPerPage) {
          this.itemsPerPage = itemsPerPage;
          this.updateProducts();
        }
      }, {
        key: "getCategory",
        value: function getCategory() {
          return this.category;
        }
      }, {
        key: "updateCategory",
        value: function updateCategory(category) {
          this.page = 1;
          this.category = category;
          this.searchProductsByCategory();
        }
      }, {
        key: "getQuery",
        value: function getQuery() {
          return this.query;
        }
      }, {
        key: "updateQuery",
        value: function updateQuery(query) {
          this.page = 1;
          this.query = query;
          this.searchProducts();
        }
      }, {
        key: "exactNameSearch",
        value: function exactNameSearch(name) {
          var _this14 = this;

          this.page = 1;
          this.query = name;
          this.productsApis.exactNameSearch(this.page, this.itemsPerPage, name).subscribe(function (res) {
            _this14.productsSubject.next(res);
          });
        }
      }]);

      return ProductsService;
    }();

    ProductsService.ɵfac = function ProductsService_Factory(t) {
      return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_services_products_apis_service__WEBPACK_IMPORTED_MODULE_2__["ProductsApisService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_cart_service_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]));
    };

    ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProductsService,
      factory: ProductsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _api_services_products_apis_service__WEBPACK_IMPORTED_MODULE_2__["ProductsApisService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _cart_service_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      baseApi: '/api',
      squareAppID: 'sq0idp-ofxIOu99bEbYg2hNFjg6UA',
      squareLocationID: '4MM15PDYYA3HY',
      serviceFee: 3.5,
      shipping: 0
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\icete\Desktop\TEMP\ASii-Frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map