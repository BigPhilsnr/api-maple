(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-3\">\n    <div class=\"theme-container\">\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"my-3\">\n            <mat-card [style.max-width.px]=\"500\">\n                <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"text-center\">\n                    <h1 class=\"uppercase\">Register</h1>\n                    <a mat-button routerLink=\"/login\" color=\"accent\" class=\"w-100\">Already have an account? Sign in!</a>\n                </div>\n                <form [formGroup]=\"registerForm\" (ngSubmit)=\"onRegisterFormSubmit(registerForm.value)\">\n                    <mat-form-field appearance=\"outline\" class=\"w-100 mt-2\">\n                        <mat-icon matPrefix class=\"mr-1 text-muted\">group</mat-icon>\n                        <mat-label>User type</mat-label>\n                        <mat-select placeholder=\"Select User Type\" formControlName=\"userType\">\n                            <mat-option *ngFor=\"let type of userTypes\" [value]=\"type\">\n                                {{type.name}}\n                            </mat-option>\n                        </mat-select>\n                        <mat-error *ngIf=\"registerForm.controls.userType.errors?.required\">User type is required\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field appearance=\"outline\" class=\"w-100 mt-2\">\n                        <mat-icon matPrefix class=\"mr-1 text-muted\">person</mat-icon>\n                        <mat-label>FullName</mat-label>\n                        <input matInput placeholder=\"FullName\" formControlName=\"fullName\" required>\n                        <mat-error *ngIf=\"registerForm.controls.fullName.errors?.required\">FullName is required\n                        </mat-error>\n                        <mat-error *ngIf=\"registerForm.controls.fullName.hasError('minlength')\">FullName isn't long\n                            enough, minimum of 6 characters</mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field appearance=\"outline\" class=\"w-100 mt-2\">\n                        <mat-icon matPrefix class=\"mr-1 text-muted\">people</mat-icon>\n                        <mat-label>Gender</mat-label>\n                        <mat-select placeholder=\"Select Gender\" formControlName=\"gender\">\n                            <mat-option *ngFor=\"let type of genderTypes\" [value]=\"type\">\n                                {{type.name}}\n                            </mat-option>\n                        </mat-select>\n                        <mat-error *ngIf=\"registerForm.controls.userType.errors?.required\">Gender is required\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field  appearance=\"outline\" class=\"w-100 mt-2\">\n                        <mat-icon matPrefix class=\"mr-1 text-muted\">email</mat-icon>\n                        <mat-label>Email</mat-label>\n                        <input matInput placeholder=\"Email\" formControlName=\"email\" required>\n                        <mat-error *ngIf=\"registerForm.controls.email.errors?.required\">Email is required\n                        </mat-error>\n                        <mat-error *ngIf=\"registerForm.controls.email.hasError('invalidEmail')\">Invalid email\n                            address</mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field appearance=\"outline\" class=\"w-100 mt-1\" >\n                        <mat-icon matPrefix class=\"mr-1 text-muted\">phone</mat-icon>\n                        <mat-label>Phone number</mat-label>\n                        <input matInput placeholder=\"Phone number\" formControlName=\"phone\" required>\n                        <mat-error *ngIf=\"registerForm.controls.phone.errors?.required\">Phone is required\n                        </mat-error>\n                        <mat-error *ngIf=\"registerForm.controls.fullName.hasError('minlength')\">Phone isn't long\n                            enough, minimum of 10 characters</mat-error>\n                    </mat-form-field>\n\n\n                    <mat-form-field appearance=\"outline\" class=\"w-100 mt-1\">\n                        <mat-icon matPrefix class=\"mr-1 text-muted\">lock</mat-icon>\n                        <mat-label>Password</mat-label>\n                        <input matInput placeholder=\"Password\" formControlName=\"password\" type=\"password\" minlength=\"6\"\n                            required [type]=\"hide ? 'password' : 'text'\">\n                        <mat-error *ngIf=\"registerForm.controls.password.errors?.required\">Password is required\n                        </mat-error>\n                        <mat-error *ngIf=\"registerForm.controls.password.hasError('minlength')\">Password isn't long\n                            enough, minimum of 6 characters</mat-error>\n                        <button mat-icon-button matSuffix (click)=\"hide = !hide\" type=\"button\" class=\"text-muted\">\n                            <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                        </button>\n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\" class=\"w-100 mt-1\">\n                        <mat-icon matPrefix class=\"mr-1 text-muted\">lock</mat-icon>\n                        <mat-label>Confirm Password</mat-label>\n                        <input matInput placeholder=\"Confirm Password\" formControlName=\"confirmPassword\" type=\"password\"\n                            required [type]=\"hide ? 'password' : 'text'\">\n                        <mat-error *ngIf=\"registerForm.controls.confirmPassword.errors?.required\">Confirm Password is\n                            required</mat-error>\n                        <mat-error *ngIf=\"registerForm.controls.confirmPassword.hasError('mismatchedPasswords')\">\n                            Passwords do not match</mat-error>\n                        <button mat-icon-button matSuffix (click)=\"hide = !hide\" type=\"button\" class=\"text-muted\">\n                            <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n                        </button>\n                    </mat-form-field>\n                    <mat-slide-toggle formControlName=\"receiveNewsletter\" class=\"my-2\">Receive Newsletter\n                    </mat-slide-toggle>\n                    <div class=\"text-center mt-2\">\n                        <button mat-raised-button color=\"accent\" class=\"uppercase\" type=\"submit\">\n                            Create an Account\n                        </button>\n                    </div>\n                </form>\n                <div class=\"divider mt-4\"></div>\n                <mat-card-actions fxLayoutAlign=\"center center\" class=\"text-center\">\n                    <small class=\"my-3\">By clicking the \"Create an Account\" button you agree with our <a mat-button\n                            routerLink=\"/terms-conditions\" color=\"primary\" class=\"mx-2\">Terms and conditions</a>\n                    </small>\n                </mat-card-actions>\n            </mat-card>\n        </div>\n\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/pages/register/register.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/theme/utils/app-validators */ "./src/app/theme/utils/app-validators.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _store_user_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/user.actions */ "./src/app/pages/register/store/user.actions.ts");
/* harmony import */ var _store_user_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/user.selectors */ "./src/app/pages/register/store/user.selectors.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/pages/register/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};









let RegisterComponent = class RegisterComponent {
    constructor(fb, router, snackBar, store, auth) {
        this.fb = fb;
        this.router = router;
        this.snackBar = snackBar;
        this.store = store;
        this.auth = auth;
        this.hide = true;
        this.userTypes = [
            { id: 1, name: 'Agent' },
            { id: 2, name: 'Agency' },
            { id: 3, name: 'Buyer' },
            { id: 7, name: 'Seller' },
            { id: 4, name: 'LandLord' },
            { id: 5, name: 'CareTaker' },
            { id: 6, name: 'Tenant' },
        ];
        this.genderTypes = [
            { id: 1, name: 'MALE' },
            { id: 2, name: 'FEMALE' }
        ];
    }
    ngOnInit() {
        this.registerForm = this.fb.group({
            userType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])],
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)])],
            dob: ['',],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(9)])],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__["emailValidator"]])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            receiveNewsletter: false
        }, { validator: Object(src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_4__["matchingPasswords"])('password', 'confirmPassword') });
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_user_selectors__WEBPACK_IMPORTED_MODULE_7__["selectCurrentUser"])).subscribe(user => this.checkUsers(user));
    }
    checkUsers(user) {
        if (user) {
            this.auth.saveUser(user, null);
            this.router.navigate(['/account/my-properties']);
        }
    }
    onRegisterFormSubmit(values) {
        if (true) {
            const user = this.registerForm.value;
            this.store.dispatch(new _store_user_actions__WEBPACK_IMPORTED_MODULE_6__["UserInsertAction"](user));
            this.snackBar.open('Registering user', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
        }
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }
];
RegisterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-register',
        template: __importDefault(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./register.component.scss */ "./src/app/pages/register/register.component.scss")).default]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"], _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/pages/register/register.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: routes, RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/user.service */ "./src/app/pages/register/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






const routes = [
    { path: '', component: _register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"], pathMatch: 'full' }
];
let RegisterModule = class RegisterModule {
};
RegisterModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ],
        providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]]
    })
], RegisterModule);



/***/ })

}]);
//# sourceMappingURL=pages-register-register-module-es2015.js.map