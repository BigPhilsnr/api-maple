(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contact-contact-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-banner [backgroundImage]=\"'assets/images/carousel/slide-3.jpg'\" [bgImageAnimate]=\"false\"\n    [contentOffsetToTop]=\"false\" [title]=\"'Rent / Buy / Develop'\"\n    [desc]=\"'“Home couldnt be much more important...” –T.S. Eliot'\" [contentMinHeight]=\"200\">\n</app-banner>\n\n<div class=\"px-3\" style=\"margin-top:2%\">\n\n    <div class=\"theme-container\">\n        <mat-card class=\"\" style=\"border: 0px!important;\">\n\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-around\">\n                <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\">\n                    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"text-center\">\n                        <mat-icon color=\"primary\" class=\"mat-icon-lg\">home</mat-icon>\n                        <h3 class=\"primary-color py-1\">ADDRESS :</h3>\n                        <span>Maple Homes, Masaai Avenue Nakuru</span>\n                    </div>\n                </div>\n                <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" ngClass.xs=\"mt-2\">\n                    <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                        <mat-icon color=\"primary\" class=\"mat-icon-lg\">call</mat-icon>\n                        <h3 class=\"primary-color py-1\">PHONES :</h3>\n                        <span>+254722302929 </span>\n\n                    </div>\n                </div>\n                <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" ngClass.xs=\"mt-2\">\n                    <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                        <mat-icon color=\"primary\" class=\"mat-icon-lg\">mail_outline</mat-icon>\n                        <h3 class=\"primary-color py-1\">E-MAIL :</h3>\n                        <span>info@maplegroupkenya.com</span>\n\n                    </div>\n                </div>\n                <div class=\"divider w-100 mt-3\"></div>\n                <h3 class=\"w-100 text-center py-3\">CONTACT US</h3>\n\n                <form [formGroup]=\"contactForm\" (ngSubmit)=\"onContactFormSubmit(contactForm.value)\" fxLayout=\"row wrap\">\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Name</mat-label>\n                            <input matInput placeholder=\"Name\" formControlName=\"name\" required>\n                            <mat-error *ngIf=\"contactForm.controls.name.errors?.required\">Name is required</mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Email</mat-label>\n                            <input matInput placeholder=\"Email\" formControlName=\"email\" required>\n                            <mat-error *ngIf=\"contactForm.controls.email.errors?.required\">Email is required</mat-error>\n                            <mat-error *ngIf=\"contactForm.controls.email.hasError('invalidEmail')\">Invalid email address\n                            </mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"px-1\" ngClass.sm=\"mt-1\" ngClass.xs=\"mt-1\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Phone</mat-label>\n                            <input matInput placeholder=\"Phone\" formControlName=\"phone\" required>\n                            <mat-error *ngIf=\"contactForm.controls.phone.errors?.required\">Phone is required</mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div fxFlex=\"100\" class=\"px-1 mt-1\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Message</mat-label>\n                            <textarea matInput placeholder=\"Message\" formControlName=\"message\" required\n                                rows=\"7\"></textarea>\n                            <mat-error *ngIf=\"contactForm.controls.message.errors?.required\">Message is required\n                            </mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"w-100 py-2 text-center\">\n                        <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\">Submit</button>\n                    </div>\n                </form>\n\n            </div>\n\n            <div class=\"mt-5 contact-map\">\n                <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [mapTypeControl]=\"true\"\n                    [fullscreenControl]=\"true\">\n                    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [markerDraggable]=\"false\"></agm-marker>\n                </agm-map>\n            </div>\n\n        </mat-card>\n    </div>\n\n</div>");

/***/ }),

/***/ "./src/app/pages/contact/contact.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contact-map .sebm-google-map-container {\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3QtbWFwIC5zZWJtLWdvb2dsZS1tYXAtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/theme/utils/app-validators */ "./src/app/theme/utils/app-validators.ts");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/contact.service */ "./src/app/pages/contact/services/contact.service.ts");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/notification.service */ "./src/app/services/notification.service.ts");
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





let ContactComponent = class ContactComponent {
    constructor(formBuilder, contactService, notificationService) {
        this.formBuilder = formBuilder;
        this.contactService = contactService;
        this.notificationService = notificationService;
        this.lat = -0.307308;
        this.lng = 36.0598205;
        this.zoom = 14;
    }
    ngOnInit() {
        this.contactForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__["emailValidator"]])],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        const contact = this.contactForm.value;
        this.contactService.createFeedback(contact);
        this.contactService.addToMailingList(contact.email);
    }
    onContactFormSubmit(values) {
        if (this.contactForm.valid) {
            const contact = values;
            this.contactService.addToMailingList(contact.email);
            this.contactService.createFeedback(contact).subscribe((val) => {
                this.notificationService.openSnackBar('Thank you email recieved we will get back to you within 24hrs', 'close');
                setTimeout(() => this.formGroupDirective.resetForm(), 0);
            }, response => {
                if (this.contactForm.valid) {
                    this.notificationService.openSnackBar('Error could not saved', 'close');
                }
            }, () => {
                console.log('The PATCH observable is now completed.');
            });
        }
    }
};
ContactComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _services_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"] },
    { type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }
];
ContactComponent.propDecorators = {
    formGroupDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"],] }]
};
ContactComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-contact',
        template: __importDefault(__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./contact.component.scss */ "./src/app/pages/contact/contact.component.scss")).default]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"], src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
], ContactComponent);



/***/ }),

/***/ "./src/app/pages/contact/contact.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/contact/contact.module.ts ***!
  \*************************************************/
/*! exports provided: routes, ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







const routes = [
    { path: '', component: _contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"], pathMatch: 'full' }
];
let ContactModule = class ContactModule {
};
ContactModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"]
        ]
    })
], ContactModule);



/***/ })

}]);
//# sourceMappingURL=pages-contact-contact-module-es2015.js.map