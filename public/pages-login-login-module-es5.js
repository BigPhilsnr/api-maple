function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-3\">\r\n  <div class=\"theme-container\">\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"my-3\">\r\n      <mat-card [style.max-width.px]=\"500\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"text-center\">\r\n          <h1 class=\"uppercase\">Sign In</h1>\r\n          <a mat-button routerLink=\"/register\" color=\"accent\" class=\"w-100\">Don't have an account? Sign up now!</a>\r\n        </div>\r\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLoginFormSubmit(loginForm.value)\">\r\n          <mat-form-field appearance=\"outline\" class=\"w-100 mt-2\">\r\n            <mat-icon matPrefix class=\"mr-1 text-muted\">person</mat-icon>\r\n            <mat-label>Username</mat-label>\r\n            <input matInput placeholder=\"Username\" formControlName=\"username\" required>\r\n            <mat-error *ngIf=\"loginForm.controls.username.errors?.required\">Username is required</mat-error>\r\n            <mat-error *ngIf=\"loginForm.controls.username.hasError('minlength')\">Username isn't long enough, minimum of\r\n              6 characters</mat-error>\r\n          </mat-form-field>\r\n          <mat-form-field appearance=\"outline\" class=\"w-100 mt-1\">\r\n            <mat-icon matPrefix class=\"mr-1 text-muted\">lock</mat-icon>\r\n            <mat-label>Password</mat-label>\r\n            <input matInput placeholder=\"Password\" formControlName=\"password\" required\r\n              [type]=\"hide ? 'password' : 'text'\">\r\n            <mat-error *ngIf=\"loginForm.controls.password.errors?.required\">Password is required</mat-error>\r\n            <mat-error *ngIf=\"loginForm.controls.password.hasError('minlength')\">Password isn't long enough, minimum of\r\n              6 characters</mat-error>\r\n            <button mat-icon-button matSuffix (click)=\"hide = !hide\" type=\"button\" class=\"text-muted\">\r\n              <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n            </button>\r\n          </mat-form-field>\r\n          <mat-slide-toggle formControlName=\"rememberMe\" class=\"my-2\">Keep me signed in</mat-slide-toggle>\r\n          <div class=\"text-center mt-2\">\r\n            <button mat-raised-button color=\"accent\" class=\"uppercase\" type=\"submit\">\r\n              Sign to My Account\r\n            </button>\r\n          </div>\r\n\r\n\r\n        </form>\r\n        <mat-card-actions fxLayoutAlign=\"end center\">\r\n          <button mat-button>\r\n            <mat-icon class=\"text-muted\">vpn_key</mat-icon>\r\n            <span class=\"mx-1\">Reset Password</span>\r\n          </button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/pages/login/login.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/pages/login/login.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".auth {\n  white-space: nowrap;\n  padding: 7px 14px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGh7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgcGFkZGluZzogN3B4IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwOyAgICBcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/login/login.component.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPagesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _register_store_user_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../register/store/user.selectors */
    "./src/app/pages/register/store/user.selectors.ts");
    /* harmony import */


    var _register_store_user_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../register/store/user.actions */
    "./src/app/pages/register/store/user.actions.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _register_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../register/services/auth.service */
    "./src/app/pages/register/services/auth.service.ts");

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

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(fb, router, store, snackBar, auth) {
        _classCallCheck(this, LoginComponent);

        this.fb = fb;
        this.router = router;
        this.store = store;
        this.snackBar = snackBar;
        this.auth = auth;
        this.hide = true;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.loginForm = this.fb.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])],
            rememberMe: false
          });
          this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_register_store_user_selectors__WEBPACK_IMPORTED_MODULE_4__["selectUserToken"])).subscribe(function (token) {
            return _this.checkUsers(null, token);
          });
          this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_register_store_user_selectors__WEBPACK_IMPORTED_MODULE_4__["selectCurrentUser"])).subscribe(function (user) {
            return _this.checkUsers(user, null);
          });
          this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_register_store_user_selectors__WEBPACK_IMPORTED_MODULE_4__["selectUserError"])).subscribe(function (error) {
            return _this.handleError(error);
          });
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          if (error.length > 0) {
            this.snackBar.open(error.split('-')[0], '', {
              panelClass: 'success',
              verticalPosition: 'bottom',
              duration: 3000
            });
          }
        }
      }, {
        key: "checkUsers",
        value: function checkUsers(user, token) {
          if (token) {
            this.auth.saveAuthToken(token);
          } else if (user) {
            this.auth.saveUser(user, null);
            this.router.navigate(['/account/property-groups']);
          }
        }
      }, {
        key: "onLoginFormSubmit",
        value: function onLoginFormSubmit(values) {
          if (this.loginForm.valid) {
            var user = this.loginForm.value;
            this.store.dispatch(new _register_store_user_actions__WEBPACK_IMPORTED_MODULE_5__["UserLoginAction"](user));
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
      }, {
        type: _register_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
      }];
    };

    LoginComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-login',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/pages/login/login.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"], _register_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: routes, LoginModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
      return LoginModule;
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


    var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/pages/login/login.component.ts");

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
      component: _login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
      pathMatch: 'full'
    }];

    var LoginModule = function LoginModule() {
      _classCallCheck(this, LoginModule);
    };

    LoginModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
    })], LoginModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map