function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-about-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-banner [backgroundImage]=\"'assets/images/carousel/slide-3.jpg'\" [bgImageAnimate]=\"false\"\n    [contentOffsetToTop]=\"false\" [title]=\"'Rent / Buy / Develop'\"\n    [desc]=\"'“Home couldnt be much more important...” –T.S. Eliot'\" [contentMinHeight]=\"200\">\n</app-banner>\n\n\n<div class=\"theme-container\">\n    <mat-card class=\"main-content-header\">\n\n        <div class=\"section pt-2\">\n            <div class=\"px-3\">\n                <div class=\"theme-container\">\n                    <h1 class=\"section-title\">our story</h1>\n\n                    <p class=\"px-3\" style=\"text-align: center;\">Home has never been more important, thats why we as Maple Homes offers investment-grade\n                        developments all over the Country. The\n                        developments we offer have\n                        been conceptualized by our development team to be high quality assets using a data-driven\n                        approach\n                        in planning and design, that gears property for high rental returns and an escalated rate of\n                        capital\n                        growth</p>\n\n                    <div fxLayout=\"row wrap\">\n\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-3\">\n                            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                <mat-icon class=\"mat-icon-xlg\" color=\"primary\">business</mat-icon>\n                                <h2 class=\"capitalize fw-600 mx-2\">About company</h2>\n                            </div>\n                            <p class=\"mt-2\">Maple Homes LLP was established in 2018 with a far on multi –unit\n                                development. The goal was to bring to the real estate industry innovation and excellence\n                                in the conceptualization, sale and marketing and management of multi unit development.\n                                Maple homes continuously builds on its experience in emerging markets, benchmarking on\n                                global trends from the developed world and partnering with established realty companies\n                                around the globe to bring the best to the Kenyan market.\n                            </p>\n                        </div>\n\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-3\">\n                            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                                <mat-icon class=\"mat-icon-xlg\" color=\"primary\">list_alt</mat-icon>\n                                <h2 class=\"capitalize fw-600 mx-2\">Vision & Mission</h2>\n                            </div>\n                            <p class=\"mt-2\">Our vision is to bring innovation, excellence and unquestionable ethics to\n                                any real estate transaction </p>\n                            <p class=\"mt-2\">At Maple Homes our mission is to provide an outstanding level of service and\n                                expertise in the real estate market to our clients always bearing in mind that for any\n                                real estate transaction there is always a person or family involved. To act in the best\n                                interest of our clients offering unquestionable ethics, collaboration and innovation to\n                                our client\n                            </p>\n                        </div>\n\n                    </div>\n\n\n                </div>\n            </div>\n        </div>\n\n    </mat-card>\n\n</div>\n\n<app-mission></app-mission>\n\n<!-- <app-our-services></app-our-services> -->\n<!-- \n<app-testimonials></app-testimonials> -->\n\n<!-- <app-our-agents></app-our-agents> -->\n\n<!-- <app-clients></app-clients> -->\n\n<!-- <app-get-in-touch></app-get-in-touch> -->";
    /***/
  },

  /***/
  "./src/app/pages/about/about.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/pages/about/about.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAboutAboutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/about/about.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/about/about.component.ts ***!
    \************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppPagesAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ctorParameters = function () {
      return [];
    };

    AboutComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-about',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./about.component.scss */
      "./src/app/pages/about/about.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [])], AboutComponent);
    /***/
  },

  /***/
  "./src/app/pages/about/about.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/about/about.module.ts ***!
    \*********************************************/

  /*! exports provided: routes, AboutModule */

  /***/
  function srcAppPagesAboutAboutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutModule", function () {
      return AboutModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./about.component */
    "./src/app/pages/about/about.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var routes = [{
      path: '',
      component: _about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
      pathMatch: 'full'
    }];

    var AboutModule = function AboutModule() {
      _classCallCheck(this, AboutModule);
    };

    AboutModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
    })], AboutModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-about-about-module-es5.js.map