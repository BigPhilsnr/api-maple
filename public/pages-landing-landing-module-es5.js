function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-landing-landing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/landing.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/landing.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingLandingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-drawer-container class=\"landing-page\">\n       \n    <div class=\"p-3 header-section\" id=\"top\">\n        <div class=\"theme-container\">\n            <div fxLayout=\"row wrap\" class=\"content\">\n                <div fxFlex=\"100\" class=\"mb-5 py-3\"> \n                    <app-logo></app-logo>\n                </div>\n                <div fxFlex=\"100\" class=\"py-5\"> \n                    <h1>Angular Material Design Real Estate Template</h1>\n                    <h4 class=\"mt-3\">Housekey implements the official Angular Material Design components and built with Angular CLI. No Bootstrap!, No jQuery! and Only TypeScript! Start creating your app with Housekey template, 8 layouts, 8 color styles, 20+ pages</h4>\n                    <div class=\"py-5\">\n                        <button mat-raised-button color=\"primary\" class=\"uppercase mx-2\" (click)=\"scrollToDemos()\">View demos</button>\n                        <a mat-raised-button color=\"accent\" href=\"http://themeseason.com/\" target=\"_blank\" class=\"uppercase mx-2\">Purchase now</a> \n                    </div>\n                </div>\n            </div>\n        </div>\n    </div> \n\n    <div class=\"p-3\">\n        <div class=\"theme-container\">\n\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"center\" id=\"demos\">\n                <div fxFlex=\"100\" class=\"text-center py-4\"> \n                    <h1 class=\"fw-500\">Check out our demo styles</h1>\n                    <p>Fully responsive, organized folder structure, clean & customizable code, easy to use and much more...</p>\n                </div>\n                <div fxFlex=\"100\" class=\"main-wrapper\">\n\n                    <div fxLayout=\"row wrap\">\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/header-default.jpg)'\"></mat-card>\n                            <h2>Header default</h2>\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getDemo(1)\">View demo</button>\n                        </div>\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/header-image.jpg)'\"></mat-card>\n                            <h2>Header image</h2>\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getDemo(2)\">View demo</button>\n                        </div>\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/header-carousel.jpg)'\"></mat-card>\n                            <h2>Header carousel</h2>\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getDemo(3)\">View demo</button>\n                        </div>\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/toolbar-2.jpg)'\"></mat-card>\n                            <h2>Toolbar version 2</h2>\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getDemo(4)\">View demo</button>\n                        </div>\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/dark.jpg)'\"></mat-card>\n                            <h2>Dark version</h2>\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getDemo(5)\">View demo</button>\n                        </div>\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/rtl.jpg)'\"></mat-card>\n                            <h2>RTL</h2>\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getDemo(6)\">View demo</button>\n                        </div>\n\n                        <div fxFlex=\"100\" class=\"mt-5\">                               \n                            <h1 class=\"text-center\">Skins</h1> \n                        </div>\n\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/blue.jpg)'\"></mat-card>\n                            <h2>Blue</h2>\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getSkin(1)\">View demo</button>\n                        </div>\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/green.jpg)'\"></mat-card>\n                            <h2>Green</h2>\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getSkin(2)\">View demo</button>\n                        </div>\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/red.jpg)'\"></mat-card>\n                            <h2>Red</h2>\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getSkin(3)\">View demo</button>\n                        </div>\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/pink.jpg)'\"></mat-card>\n                            <h2>Pink</h2>\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getSkin(4)\">View demo</button>\n                        </div>\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/purple.jpg)'\"></mat-card>\n                            <h2>Purple</h2>\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getSkin(5)\">View demo</button>\n                        </div>\n                        <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" fxFlex.sm=\"50\" class=\"box\">\n                            <mat-card [style.background-image]=\"'url(assets/images/demos/grey.jpg)'\"></mat-card>\n                            <h2>Grey</h2>\n                            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\" (click)=\"getSkin(6)\">View demo</button>\n                        </div>\n\n                        <div fxFlex=\"100\" class=\"py-4 px-3 text-right\">\n                            <button mat-mini-fab (click)=\"goToTop()\">\n                                <mat-icon>keyboard_arrow_up</mat-icon>\n                            </button>\n                        </div>\n\n                    </div>\n\n                </div> \n            </div> \n\n        </div>\n    </div>\n\n    <mat-toolbar class=\"copyright\">\n        <div class=\"theme-container\"> \n            <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\">\n                <p ngClass.xs=\"mt-1\">Copyright © 2020 All Rights Reserved</p>\n                <p>Designed & Developed by <a mat-button href=\"http://philipademba.com/\" target=\"_blank\">maplegroupkenya</a></p>\n            </div>\n        </div>\n    </mat-toolbar> \n\n</mat-drawer-container>";
    /***/
  },

  /***/
  "./src/app/pages/landing/landing.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/pages/landing/landing.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingLandingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".landing-page .header-section {\n  position: relative;\n  overflow: hidden;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  background-image: url('1-big.jpg');\n}\n.landing-page .header-section:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.81);\n}\n.landing-page .header-section .content {\n  position: relative;\n  z-index: 9;\n  color: #fff;\n  text-align: center;\n}\n.landing-page .header-section .content h1 {\n  font-size: 36px;\n  font-weight: 400;\n}\n.landing-page .header-section .content h4 {\n  font-size: 16px;\n  font-weight: 300;\n  max-width: 700px;\n  margin: 0 auto;\n}\n.landing-page .main-wrapper {\n  margin: -16px;\n}\n.landing-page .main-wrapper .box {\n  text-align: center;\n  padding: 16px;\n  margin-bottom: 24px;\n}\n.landing-page .main-wrapper .box h2 {\n  padding: 16px 0;\n  font-weight: 500;\n}\n.landing-page .main-wrapper .box .mat-card {\n  background-size: cover;\n  height: 300px;\n  background-position: top;\n  transition: 5s;\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n}\n.landing-page .main-wrapper .box:hover .mat-card {\n  background-position: bottom;\n}\n.landing-page p {\n  font-size: 16px;\n}\n.landing-page .copyright {\n  margin-top: 36px;\n  height: 64px;\n}\n.landing-page .copyright p {\n  font-size: 13px;\n  font-weight: 400;\n  margin-bottom: 0;\n  line-height: 1.2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO0FBQVI7QUFDUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0FBQ1o7QUFDUTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNaO0FBQVk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFFaEI7QUFBWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVoQjtBQUVJO0VBQ0ksYUFBQTtBQUFSO0FBQ1E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNaO0FBQVk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFFaEI7QUFBWTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlIQUFBO0FBRWhCO0FBR2dCO0VBQ0ksMkJBQUE7QUFEcEI7QUFPSTtFQUNJLGVBQUE7QUFMUjtBQU9JO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FBTFI7QUFNUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFKWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYW5kaW5nLXBhZ2V7IFxyXG4gICAgLmhlYWRlci1zZWN0aW9ueyBcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcHJvcHMvb2ZmaWNlLTIvMS1iaWcuanBnJyk7ICAgICAgIFxyXG4gICAgICAgICY6YmVmb3JleyAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnOyAgICAgICAgXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwgMC44MSk7ICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbnR7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgei1pbmRleDogOTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgaDF7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGg0e1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gIFxyXG4gICAgfVxyXG4gICAgLm1haW4td3JhcHBlcntcclxuICAgICAgICBtYXJnaW46IC0xNnB4O1xyXG4gICAgICAgIC5ib3h7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMTZweDsgIFxyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4OyAgICAgICAgIFxyXG4gICAgICAgICAgICBoMntcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1hdC1jYXJkeyBcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogNXM7IFxyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCAzcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMHB4IDNweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMHB4IDFweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIC5tYXQtY2FyZHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAuY29weXJpZ2h0e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDM2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/landing/landing.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/landing/landing.component.ts ***!
    \****************************************************/

  /*! exports provided: LandingComponent */

  /***/
  function srcAppPagesLandingLandingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
      return LandingComponent;
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


    var src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app.settings */
    "./src/app/app.settings.ts");

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

    var LandingComponent = /*#__PURE__*/function () {
      function LandingComponent(appSettings, router) {
        _classCallCheck(this, LandingComponent);

        this.appSettings = appSettings;
        this.router = router;
        this.settings = this.appSettings.settings;
      }

      _createClass(LandingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          document.getElementById('preloader').classList.add('hide');
        }
      }, {
        key: "getDemo",
        value: function getDemo(number) {
          if (number == 1) {
            this.settings.toolbar = 1;
            this.settings.header = 'default';
            this.settings.theme = 'blue';
            this.settings.rtl = false;
          }

          if (number == 2) {
            this.settings.toolbar = 1;
            this.settings.header = 'image';
            this.settings.theme = 'blue';
            this.settings.rtl = false;
          }

          if (number == 3) {
            this.settings.toolbar = 1;
            this.settings.header = 'carousel';
            this.settings.theme = 'blue';
            this.settings.rtl = false;
          }

          if (number == 4) {
            this.settings.toolbar = 2;
            this.settings.header = 'image';
            this.settings.theme = 'blue';
            this.settings.rtl = false;
          }

          if (number == 5) {
            this.settings.toolbar = 2;
            this.settings.header = 'image';
            this.settings.theme = 'orange-dark';
            this.settings.rtl = false;
          }

          if (number == 6) {
            this.settings.toolbar = 1;
            this.settings.header = 'image';
            this.settings.theme = 'blue';
            this.settings.rtl = true;
          }

          this.router.navigate(['/']);
        }
      }, {
        key: "getSkin",
        value: function getSkin(num) {
          if (num == 1) {
            this.settings.theme = 'blue';
            this.settings.header = "carousel";
          }

          if (num == 2) {
            this.settings.theme = 'green';
            this.settings.header = "carousel";
          }

          if (num == 3) {
            this.settings.theme = 'red';
            this.settings.header = "carousel";
          }

          if (num == 4) {
            this.settings.theme = 'pink';
            this.settings.header = "carousel";
          }

          if (num == 5) {
            this.settings.theme = 'purple';
            this.settings.header = "carousel";
          }

          if (num == 6) {
            this.settings.theme = 'grey';
            this.settings.header = "carousel";
          }

          this.settings.toolbar = 1;
          this.settings.rtl = false;
          this.router.navigate(['/']);
        }
      }, {
        key: "scrollToDemos",
        value: function scrollToDemos() {
          var elmnt = document.getElementById("demos");
          elmnt.scrollIntoView({
            behavior: "smooth"
          });
        }
      }, {
        key: "goToTop",
        value: function goToTop() {
          var elmnt = document.getElementById("top");
          elmnt.scrollIntoView({
            behavior: "smooth"
          });
        }
      }]);

      return LandingComponent;
    }();

    LandingComponent.ctorParameters = function () {
      return [{
        type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    LandingComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-landing',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./landing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/landing.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./landing.component.scss */
      "./src/app/pages/landing/landing.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], LandingComponent);
    /***/
  },

  /***/
  "./src/app/pages/landing/landing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/landing/landing.module.ts ***!
    \*************************************************/

  /*! exports provided: routes, LandingModule */

  /***/
  function srcAppPagesLandingLandingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingModule", function () {
      return LandingModule;
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


    var _landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./landing.component */
    "./src/app/pages/landing/landing.component.ts");

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
      component: _landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"],
      pathMatch: 'full'
    }];

    var LandingModule = function LandingModule() {
      _classCallCheck(this, LandingModule);
    };

    LandingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
    })], LandingModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-landing-landing-module-es5.js.map