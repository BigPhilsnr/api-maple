(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-compare-compare-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/compare/compare.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/compare/compare.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"px-3\">\r\n  <div class=\"theme-container\">\r\n\r\n    <div *ngIf=\"appService.Data.compareList.length == 0\" class=\"py-5\">  \r\n      <mat-chip-list>\r\n          <mat-chip color=\"warn\" selected=\"true\" class=\"uppercase\">You have no properties to compare.</mat-chip>\r\n      </mat-chip-list>\r\n    </div>\r\n  \r\n    <div *ngIf=\"appService.Data.compareList.length > 0\" class=\"compare-carousel py-3\"> \r\n      \r\n      <mat-card fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"compare-toolbar\">      \r\n        <h3 class=\"uppercase\">Compare: {{appService.Data.compareList.length}}</h3>      \r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" *ngIf=\"config.simulateTouch\">\r\n            <button mat-mini-fab color=\"primary\" class=\"carousel-prev swiper-button-prev swipe-arrow mx-2\"><mat-icon>keyboard_arrow_left</mat-icon></button>\r\n            <button mat-mini-fab color=\"primary\" class=\"carousel-next swiper-button-next swipe-arrow mx-2\"><mat-icon>keyboard_arrow_right</mat-icon></button> \r\n        </div> \r\n        <button mat-mini-fab color=\"warn\" fxHide=\"false\" fxHide.gt-xs (click)=\"clear()\"><mat-icon>cancel</mat-icon></button>\r\n        <button mat-raised-button color=\"warn\" class=\"uppercase\" fxShow=\"false\" fxShow.gt-xs (click)=\"clear()\">Clear All</button>\r\n      </mat-card>\r\n      \r\n      <div class=\"swiper-container h-100 carousel-outer mt-3\" [swiper]=\"config\"> \r\n        <div class=\"swiper-wrapper h-100\">      \r\n          <div *ngFor=\"let property of appService.Data.compareList\" class=\"swiper-slide\">\r\n\r\n            <mat-card class=\"compare-item\">                 \r\n                <img mat-card-image [src]=\"property.gallery[0].medium\" alt=\"image\"> \r\n                <button mat-icon-button class=\"remove\" (click)=\"remove(property)\">\r\n                  <mat-icon color=\"warn\" class=\"mat-icon-lg\">highlight_off</mat-icon>\r\n                </button>              \r\n                <mat-card-content>\r\n                    <h2 class=\"title\"><a [routerLink]=\"['/properties', property.id]\">{{property.title}}</a></h2>\r\n                    <p fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"address\">\r\n                        <mat-icon class=\"text-muted\">location_on</mat-icon>\r\n                        <span>{{property.formattedAddress}}</span>\r\n                    </p>\r\n                    <mat-chip-list>\r\n                        <mat-chip color=\"primary\" selected=\"true\" class=\"w-100\">\r\n                            <h3 *ngIf=\"settings.currency == 'USD'\" class=\"w-100 text-center\">\r\n                                <span *ngIf=\"property.priceDollar.sale\">{{property.priceDollar.sale | currency : 'USD' : 'symbol' : '1.0'}}</span>\r\n                                <span *ngIf=\"property.priceDollar.rent\">{{property.priceDollar.rent | currency : 'USD' : 'symbol' : '1.0'}} /month</span>\r\n                            </h3>\r\n                            <h3 *ngIf=\"settings.currency == 'EUR'\" class=\"w-100 text-center\">\r\n                                <span *ngIf=\"property.priceEuro.sale\">{{property.priceEuro.sale | currency : 'EUR' : 'symbol' : '1.0'}}</span>\r\n                                <span *ngIf=\"property.priceEuro.rent\">{{property.priceEuro.rent | currency : 'EUR' : 'symbol' : '1.0'}} /month</span>\r\n                            </h3>\r\n                        </mat-chip>\r\n                    </mat-chip-list>\r\n                    <div class=\"details py-3\">\r\n                        <div fxLayout=\"row\" class=\"item\">\r\n                          <span>Property Type:</span>\r\n                          <span>{{property.propertyType}}</span>\r\n                        </div> \r\n                        <div fxLayout=\"row\" class=\"item\">\r\n                          <span>Property Status:</span>\r\n                          <div fxLayout=\"row wrap\" class=\"list\">\r\n                            <span *ngFor=\"let status of property.propertyStatus; let last=last\" [class.list-item]=\"property.propertyStatus.length > 1\" [class.last]=\"last\">{{status}}</span>\r\n                          </div>\r\n                        </div> \r\n                        <div fxLayout=\"row\" class=\"item\">\r\n                          <span>City:</span>\r\n                          <span>{{property.city}}</span>\r\n                        </div>\r\n                        <div fxLayout=\"row\" class=\"item\">\r\n                          <span>Zip Code:</span>\r\n                          <span>{{property.zipCode}}</span>\r\n                        </div>\r\n                        <div fxLayout=\"row\" class=\"item\">\r\n                            <span>Neighborhood:</span>\r\n                            <div fxLayout=\"row wrap\" class=\"list\">\r\n                              <span *ngFor=\"let neighborhood of property.neighborhood; let last=last\" [class.list-item]=\"property.neighborhood.length > 1\" [class.last]=\"last\">{{neighborhood}}</span>\r\n                            </div>\r\n                        </div>\r\n                        <div fxLayout=\"row\" class=\"item\">\r\n                            <span>Street:</span>\r\n                            <div fxLayout=\"row wrap\" class=\"list\">\r\n                                <span *ngFor=\"let street of property.street; let last=last\" [class.list-item]=\"property.street.length > 1\" [class.last]=\"last\">{{street}}</span>\r\n                            </div>\r\n                        </div>\r\n                        <div fxLayout=\"row\" class=\"item\">\r\n                          <span>Bedrooms:</span>\r\n                          <span>{{property.bedrooms}}</span>\r\n                        </div>\r\n                        <div fxLayout=\"row\" class=\"item\">\r\n                          <span>Bathrooms:</span>\r\n                          <span>{{property.bathrooms}}</span>\r\n                        </div>\r\n                        <div fxLayout=\"row\" class=\"item\">\r\n                          <span>Garages:</span>\r\n                          <span>{{property.garages}}</span>\r\n                        </div>\r\n                        <div fxLayout=\"row\" class=\"item\">\r\n                          <span>Property size:</span>\r\n                          <span>{{property.area.value}} {{property.area.unit}}</span>\r\n                        </div>\r\n                        <div fxLayout=\"row\" class=\"item\">\r\n                          <span>Year Built:</span>\r\n                          <span>{{property.yearBuilt}}</span>\r\n                        </div>\r\n                        <div fxLayout=\"row\" class=\"item\">\r\n                          <span>Features:</span>\r\n                          <div fxLayout=\"row wrap\" class=\"list\">\r\n                            <span *ngFor=\"let feature of property.features; let last=last\" [class.list-item]=\"property.features.length > 1\" [class.last]=\"last\">{{feature}}</span>\r\n                          </div>\r\n                        </div> \r\n                        <div fxLayout=\"row\" class=\"item\">\r\n                          <span>Published:</span>\r\n                          <span>{{property.published | date:\"dd MMMM, yyyy\" }}</span>\r\n                        </div>                         \r\n                    </div>\r\n                    <p class=\"uppercase text-center fw-500 mb-2\">description</p>\r\n                    <p>{{property.desc}}</p>                     \r\n                </mat-card-content> \r\n                <mat-card-actions class=\"text-center\">  \r\n                    <a [routerLink]=\"['/properties', property.id]\" mat-raised-button color=\"primary\" class=\"uppercase mb-3\">More info</a>                     \r\n                </mat-card-actions>             \r\n            </mat-card> \r\n\r\n          </div>\r\n        </div>   \r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/pages/compare/compare.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/compare/compare.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".compare-carousel .compare-toolbar {\n  min-height: 72px;\n}\n.compare-carousel .compare-toolbar button.swipe-arrow {\n  position: relative;\n  margin-top: 0;\n  right: 0;\n  left: 0;\n  z-index: 2;\n}\n.compare-item .remove {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.compare-item .title {\n  text-align: center;\n}\n.compare-item .title a {\n  transition: 0.2s;\n  text-decoration: none;\n}\n.compare-item .address {\n  font-size: 12px;\n}\n.compare-item .details .item {\n  padding: 8px 0;\n}\n.compare-item .details .item span:first-child {\n  margin-right: 8px;\n  font-weight: 500;\n  min-width: 114px;\n}\n.compare-item .details .item .list span {\n  font-weight: normal;\n  min-width: auto;\n}\n.compare-item .details .item .list span:not(.last):after {\n  content: \",\";\n}\n.compare-item .details .item .list span.last:after {\n  content: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcGFyZS9jb21wYXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZ0JBQUE7QUFBUjtBQUNRO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FBQ1o7QUFJSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7QUFEUjtBQUdJO0VBQ0ksa0JBQUE7QUFEUjtBQUVRO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtBQUFaO0FBR0k7RUFDSSxlQUFBO0FBRFI7QUFJUTtFQUNJLGNBQUE7QUFGWjtBQUdZO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRGhCO0FBSWdCO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FBRnBCO0FBR29CO0VBQ0ksWUFBQTtBQUR4QjtBQUdvQjtFQUNJLGFBQUE7QUFEeEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb21wYXJlL2NvbXBhcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcGFyZS1jYXJvdXNlbHsgICAgXHJcbiAgICAuY29tcGFyZS10b29sYmFye1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDcycHg7XHJcbiAgICAgICAgYnV0dG9uLnN3aXBlLWFycm93e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmNvbXBhcmUtaXRlbXtcclxuICAgIC5yZW1vdmV7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgIH1cclxuICAgIC50aXRsZXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hZGRyZXNze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIC5kZXRhaWxze1xyXG4gICAgICAgIC5pdGVte1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMDsgXHJcbiAgICAgICAgICAgIHNwYW46Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDExNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5saXN0e1xyXG4gICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAmOm5vdCgubGFzdCk6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiLFwiOyBcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICYubGFzdDphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogbm9uZTsgXHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/compare/compare.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/compare/compare.component.ts ***!
  \****************************************************/
/*! exports provided: CompareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareComponent", function() { return CompareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
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





let CompareComponent = class CompareComponent {
    constructor(appSettings, appService, mediaObserver) {
        this.appSettings = appSettings;
        this.appService = appService;
        this.mediaObserver = mediaObserver;
        this.config = {};
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.config = {
            observer: true,
            slidesPerView: 4,
            spaceBetween: 16,
            keyboard: false,
            navigation: false,
            pagination: false,
            simulateTouch: false,
            grabCursor: true,
            loop: false,
            preloadImages: true,
            lazy: false,
            breakpoints: {
                600: {
                    slidesPerView: 1
                },
                960: {
                    slidesPerView: 2,
                },
                1280: {
                    slidesPerView: 3,
                }
            }
        };
        this.watchForChanges();
    }
    ngOnDestroy() {
        this.watcher.unsubscribe();
    }
    disableSwiper() {
        setTimeout(() => {
            if (this.directiveRef) {
                this.config.keyboard = false;
                this.config.navigation = false;
                this.config.simulateTouch = false;
                this.directiveRef.update();
            }
        });
    }
    enableSwiper() {
        setTimeout(() => {
            if (this.directiveRef) {
                this.config.keyboard = true;
                this.config.navigation = { nextEl: '.carousel-next', prevEl: '.carousel-prev' };
                this.config.simulateTouch = true;
                this.directiveRef.update();
            }
        });
    }
    clear() {
        this.appService.Data.compareList.length = 0;
    }
    remove(property) {
        const index = this.appService.Data.compareList.indexOf(property);
        if (index !== -1) {
            this.appService.Data.compareList.splice(index, 1);
        }
        this.watchForChanges();
    }
    watchForChanges() {
        this.watcher = this.mediaObserver.media$.subscribe((change) => {
            if (change.mqAlias == 'xs' && this.appService.Data.compareList.length > 1) {
                this.enableSwiper();
            }
            else if (change.mqAlias == 'sm' && this.appService.Data.compareList.length > 2) {
                this.enableSwiper();
            }
            else if (change.mqAlias == 'md' && this.appService.Data.compareList.length > 3) {
                this.enableSwiper();
            }
            else if (change.mqAlias == 'lg' && this.appService.Data.compareList.length > 4) {
                this.enableSwiper();
            }
            else if (change.mqAlias == 'xl' && this.appService.Data.compareList.length > 4) {
                this.enableSwiper();
            }
            else {
                this.disableSwiper();
            }
        });
    }
};
CompareComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] },
    { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["MediaObserver"] }
];
CompareComponent.propDecorators = {
    directiveRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__["SwiperDirective"],] }]
};
CompareComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-compare',
        template: __importDefault(__webpack_require__(/*! raw-loader!./compare.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/compare/compare.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./compare.component.scss */ "./src/app/pages/compare/compare.component.scss")).default]
    }),
    __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"], _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["MediaObserver"]])
], CompareComponent);



/***/ }),

/***/ "./src/app/pages/compare/compare.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/compare/compare.module.ts ***!
  \*************************************************/
/*! exports provided: routes, CompareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareModule", function() { return CompareModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _compare_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compare.component */ "./src/app/pages/compare/compare.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const routes = [
    { path: '', component: _compare_component__WEBPACK_IMPORTED_MODULE_4__["CompareComponent"], pathMatch: 'full' }
];
let CompareModule = class CompareModule {
};
CompareModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_compare_component__WEBPACK_IMPORTED_MODULE_4__["CompareComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]
    })
], CompareModule);



/***/ })

}]);
//# sourceMappingURL=pages-compare-compare-module-es2015.js.map