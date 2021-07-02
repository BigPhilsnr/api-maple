(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/featured-properties/featured-properties.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/featured-properties/featured-properties.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section mt-3\">\r\n  <div class=\"px-3\">\r\n      <div class=\"theme-container\">\r\n          <h1 class=\"section-title\">Featured properties</h1>\r\n\r\n          <app-properties-carousel [properties]=\"featuredProperties\"></app-properties-carousel>\r\n              \r\n      </div>\r\n  </div>   \r\n</div> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\">\n    <app-header-image class=\"w-100\" *ngIf=\"settings.header == 'image'\"\n        [backgroundImage]=\"bgImages\"\n        [bgImageAnimate]=\"true\"\n        [contentOffsetToTop]=\"false\" [title]=\"'Find your house key'\" [desc]=\"'Maple Homes'\"\n        [titles]=\"titles\"\n        [descriptions]=\"desc\"\n        [isHomePage]=\"true\">\n    </app-header-image>\n    <div class=\"w-100\">\n        <app-header-carousel *ngIf=\"settings.header == 'carousel'\" [slides]=\"slides\" [contentOffsetToTop]=\"true\">\n        </app-header-carousel>\n\n        <div class=\"px-3\" style=\"background-color: #F1F1F6;padding: 25px\">\n            <div class=\"theme-container searchbar\" style=\"margin-right: 25px;font-size: 12px;\">\n                <div class=\"main-content-header\" style=\"background-color: white;\">\n                    <app-properties-search [variant]=\"settings.searchPanelVariant\"\n                        [searchOnBtnClick]=\"settings.searchOnBtnClick\" [removedSearchField]=\"removedSearchField\"\n                        (onSearchChange)=\"searchChanged($event)\" (onClearChange)=\"clearChanged($event)\"\n                        (onSearchClick)=\"searchClicked()\">\n                    </app-properties-search>\n\n                </div>\n\n            </div>\n            <div class=\"theme-container\" *ngIf=\"showResult\" style=\"padding-right:5%;padding-left:5%\">\n\n                <div fxLayout=\"row wrap\" class=\"properties-wrapper\">\n\n                    <div fxFlex=\"100\" fxLayoutAlign=\"start start\" class=\"p-2\">\n                        <mat-chip-list [ngClass]=\"(settings.rtl) ? 'ml-2' : 'mr-2'\">\n                            <mat-chip selected disableRipple=\"true\" color=\"warn\" class=\"uppercase ws-nowrap\">\n                                {{ pagination?.total }} found\n                            </mat-chip>\n                        </mat-chip-list>\n                        <app-properties-search-results-filters [searchFields]=\"searchFields\"\n                            (onRemoveSearchField)=\"removeSearchField($event)\">\n                        </app-properties-search-results-filters>\n                    </div>\n                    <div fxFlex=\"100\" class=\"p-2\">\n                        <app-properties-toolbar [isHomePage]=\"true\" (onChangeCount)=\"changeCount($event)\"\n                            (onChangeSorting)=\"changeSorting($event)\" (onChangeViewType)=\"changeViewType($event)\">\n                        </app-properties-toolbar>\n                    </div>\n                    <div *ngFor=\"let property of properties\" [fxFlex]=\"(viewType=='grid') ? viewCol : 100\" class=\"item\">\n                        <app-property-item [property]=\"property\" [viewType]=\"viewType\" [viewColChanged]=\"viewCol\">\n                        </app-property-item>\n                    </div>\n                    <div *ngIf=\"properties?.length\" fxFlex=\"100\" fxLayoutAlign=\"center center\" class=\"p-2 mt-2\">\n                        <app-load-more [step]=\"2\"></app-load-more>\n                    </div>\n\n                    <div *ngIf=\"properties?.length == 0\" fxFlex=\"100\" fxLayoutAlign=\"center center\"\n                        [style.min-height.px]=\"200\">\n                        <mat-spinner *ngIf=\"!message\"></mat-spinner>\n                        <mat-chip-list *ngIf=\"message\">\n                            <mat-chip selected disableRipple=\"true\" color=\"warn\" class=\"uppercase ws-nowrap\">\n                                {{message}}\n                            </mat-chip>\n                        </mat-chip-list>\n                    </div>\n\n                </div>\n\n            </div>\n        </div>\n        <app-developments style=\"background-color: white;width: 80%;\"\n            [backgroundImage]=\"'assets/images/others/homepage.jpg'\"></app-developments>\n        <!-- <app-our-services></app-our-services> -->\n        <app-products></app-products>\n    </div>\n</div>\n\n<!-- <app-news></app-news> -->\n<!-- <app-testimonials></app-testimonials> -->\n\n<!-- <app-hot-offer-today [propertyId]=\"4\"></app-hot-offer-today> -->\n\n<!-- <app-featured-properties [properties]=\"featuredProperties\"></app-featured-properties> -->\n\n<!-- <app-our-agents></app-our-agents> -->\n\n<!-- <app-clients></app-clients> -->\n\n\n<!-- <app-get-in-touch></app-get-in-touch> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/hot-offer-today/hot-offer-today.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/hot-offer-today/hot-offer-today.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section mt-3\">\n    <div class=\"px-3\">\n        <div class=\"theme-container\">\n            <h1 class=\"section-title\">Hot offer today</h1>\n            <app-property-item *ngIf=\"property\" [property]=\"property\" [viewType]=\"'list'\"></app-property-item> \n                \n        </div>\n    </div>   \n</div>");

/***/ }),

/***/ "./src/app/pages/home/featured-properties/featured-properties.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/home/featured-properties/featured-properties.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvZmVhdHVyZWQtcHJvcGVydGllcy9mZWF0dXJlZC1wcm9wZXJ0aWVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/home/featured-properties/featured-properties.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/home/featured-properties/featured-properties.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FeaturedPropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedPropertiesComponent", function() { return FeaturedPropertiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
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

let FeaturedPropertiesComponent = class FeaturedPropertiesComponent {
    constructor() { }
    ngOnInit() {
    }
};
FeaturedPropertiesComponent.ctorParameters = () => [];
FeaturedPropertiesComponent.propDecorators = {
    featuredProperties: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['properties',] }]
};
FeaturedPropertiesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-featured-properties',
        template: __importDefault(__webpack_require__(/*! raw-loader!./featured-properties.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/featured-properties/featured-properties.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./featured-properties.component.scss */ "./src/app/pages/home/featured-properties/featured-properties.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], FeaturedPropertiesComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".searchbar {\n  margin-top: 0px;\n}\n\n.flat-button {\n  border-radius: 0;\n}\n\n.border {\n  border: 1px solid gray;\n  border-radius: 0px;\n}\n\n::-webkit-scrollbar {\n  width: 1px !important;\n}\n\n::-webkit-scrollbar-track {\n  background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFHQTtFQUNJLHFCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQ0FBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaGJhciB7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uZmxhdC1idXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5ib3JkZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuXG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAxcHggIWltcG9ydGFudDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _app_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.models */ "./src/app/app.models.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _properties_store_property_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../properties/store/property.actions */ "./src/app/pages/properties/store/property.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _properties_store_search_property_search_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../properties/store/search/property.search.selectors */ "./src/app/pages/properties/store/search/property.search.selectors.ts");
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









let HomeComponent = class HomeComponent {
    constructor(appSettings, appService, mediaObserver, store) {
        this.appSettings = appSettings;
        this.appService = appService;
        this.mediaObserver = mediaObserver;
        this.store = store;
        this.activeMediaQuery = '';
        this.slides = [];
        this.properties = [];
        this.viewType = 'grid';
        this.viewCol = 25;
        this.count = 8;
        this.pagination = new _app_models__WEBPACK_IMPORTED_MODULE_3__["Pagination"](1, 8, null, 2, 0, 0);
        this.showResult = false;
        this.desc = ['An unprecedented concept set to transform Riverside Drive, Riverside Square is a mixed use marvel that brings together shopping, working, living and leisure.', 'An unprecedented concept set to transform Riverside Drive, Riverside Square is a mixed use marvel that brings together shopping, working, living and leisure.', 'An unprecedented concept set to transform Riverside Drive, Riverside Square is a mixed use marvel that brings together shopping, working, living and leisure.'];
        this.titles = ['Milimani', 'Cairo Heights', 'El capoor', 'Serene Gardens'];
        this.bgImages = [
            'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            'https://images.pexels.com/photos/813692/pexels-photo-813692.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        ];
        this.filteredData = {};
        this.settings = this.appSettings.settings;
        // tslint:disable-next-line: deprecation
        this.watcher = mediaObserver.media$.subscribe((change) => {
            // console.log(change)
            if (change.mqAlias == 'xs') {
                this.viewCol = 100;
            }
            else if (change.mqAlias == 'sm') {
                this.viewCol = 50;
            }
            else if (change.mqAlias == 'md') {
                this.viewCol = 33.3;
            }
            else {
                this.viewCol = 25;
            }
        });
    }
    ngOnInit() {
        this.getSlides();
        this.getProperties();
        // if (this.mediaObserver.isActive('xs')) {
        //    console.log('mobile version -XS')
        // }
        this.getFeaturedProperties();
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["select"])(_properties_store_search_property_search_selectors__WEBPACK_IMPORTED_MODULE_8__["selectAllPropertySearch"])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinct"])(property => property)).subscribe(data => {
            if (this.properties && this.properties.length > 0) {
                this.settings.loadMore.page++;
                this.pagination.page = this.settings.loadMore.page;
            }
            const result = this.filterData(data);
            if (data.length === 0) {
                this.properties.length = 0;
                this.pagination = new _app_models__WEBPACK_IMPORTED_MODULE_3__["Pagination"](1, this.count, null, 2, 0, 0);
                this.message = 'No Results Found';
                return false;
            }
            if (this.properties && this.properties.length > 0) {
                this.properties = this.properties.concat(result.data);
            }
            else {
                this.properties = result.data;
            }
            this.pagination = result.pagination;
            this.message = null;
            if (this.properties.length == this.pagination.total) {
                this.settings.loadMore.complete = true;
                this.settings.loadMore.result = this.properties.length;
            }
            else {
                this.settings.loadMore.complete = false;
            }
        });
        this.loadProperties({ page: 1, limit: 10 });
    }
    ngDoCheck() {
        if (this.settings.loadMore.load) {
            this.settings.loadMore.load = false;
            this.getProperties();
        }
    }
    ngOnDestroy() {
        this.resetLoadMore();
        this.watcher.unsubscribe();
    }
    getSlides() {
        this.appService.getHomeCarouselSlides().subscribe(res => {
            this.slides = res;
        });
    }
    getProperties() {
        if (this.searchFields) {
            this.appService.filterProperty(this.searchFields, this.sort, this.pagination.page, this.pagination.perPage);
        }
    }
    resetLoadMore() {
        this.settings.loadMore.complete = false;
        this.settings.loadMore.start = false;
        this.settings.loadMore.page = 1;
        this.pagination = new _app_models__WEBPACK_IMPORTED_MODULE_3__["Pagination"](1, this.count, null, null, this.pagination.total, this.pagination.totalPages);
    }
    filterData(data) {
        return this.appService.paginator(data, this.pagination.page, this.pagination.perPage);
    }
    searchClicked() {
        this.properties.length = 0;
        this.getProperties();
    }
    clearChanged(event) {
        this.showResult = false;
    }
    searchChanged(event) {
        event.valueChanges.subscribe(() => {
            this.showResult = true;
            this.resetLoadMore();
            this.searchFields = event.value;
            setTimeout(() => {
                this.removedSearchField = null;
            });
            if (!this.settings.searchOnBtnClick) {
                if (this.properties) {
                    this.properties.length = 0;
                }
            }
        });
        event.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])()).subscribe(() => {
            if (!this.settings.searchOnBtnClick) {
                this.getProperties();
            }
        });
    }
    removeSearchField(field) {
        this.message = null;
        this.removedSearchField = field;
    }
    loadProperties(data) {
        this.store.dispatch(new _properties_store_property_actions__WEBPACK_IMPORTED_MODULE_6__["PropertyFilteringAction"](data));
    }
    changeCount(count) {
        this.count = count;
        this.resetLoadMore();
        this.properties.length = 0;
        this.getProperties();
    }
    changeSorting(sort) {
        this.sort = sort;
        this.resetLoadMore();
        this.properties.length = 0;
        this.getProperties();
    }
    changeViewType(obj) {
        this.viewType = obj.viewType;
        this.viewCol = obj.viewCol;
    }
    getFeaturedProperties() {
        this.appService.getFeaturedProperties().subscribe(properties => {
            this.featuredProperties = properties;
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
    { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["MediaObserver"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }
];
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")).default]
    }),
    __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"],
        _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["MediaObserver"],
        _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: routes, HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _hot_offer_today_hot_offer_today_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hot-offer-today/hot-offer-today.component */ "./src/app/pages/home/hot-offer-today/hot-offer-today.component.ts");
/* harmony import */ var _featured_properties_featured_properties_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./featured-properties/featured-properties.component */ "./src/app/pages/home/featured-properties/featured-properties.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







const routes = [
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], pathMatch: 'full' }
];
let HomeModule = class HomeModule {
};
HomeModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [
            _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
            _hot_offer_today_hot_offer_today_component__WEBPACK_IMPORTED_MODULE_5__["HotOfferTodayComponent"],
            _featured_properties_featured_properties_component__WEBPACK_IMPORTED_MODULE_6__["FeaturedPropertiesComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/pages/home/hot-offer-today/hot-offer-today.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/home/hot-offer-today/hot-offer-today.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG90LW9mZmVyLXRvZGF5L2hvdC1vZmZlci10b2RheS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/home/hot-offer-today/hot-offer-today.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/home/hot-offer-today/hot-offer-today.component.ts ***!
  \*************************************************************************/
/*! exports provided: HotOfferTodayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotOfferTodayComponent", function() { return HotOfferTodayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
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




let HotOfferTodayComponent = class HotOfferTodayComponent {
    constructor(appService, appSettings, sanitizer) {
        this.appService = appService;
        this.appSettings = appSettings;
        this.sanitizer = sanitizer;
        this.bgImages = [
            ('assets/images/props/outside/inside_1.jpg'),
            ('assets/images/props/outside/inside_2.jpg'),
            ('assets/images/props/outside/inside_3.jpg'),
            ('assets/images/props/outside/inside_4.jpg'),
            ('assets/images/props/outside/inside_5.jpg'),
            ('assets/images/props/outside/outside_6.jpg'),
            ('assets/images/props/outside/outside_7.jpg')
        ];
    }
    ngOnInit() {
        this.appService.getPropertyById(this.propertyId).subscribe(property => {
            property.title = 'Nakuru Estate House 001';
            property.formattedAddress = ' 34km off Nairobi-Nakuru highway';
            property.desc = '';
            property.gallery.map((item, index) => {
                item.medium = this.bgImages[index];
            });
            this.property = property;
        });
    }
    wrap(url) {
        return this.sanitizer.bypassSecurityTrustStyle('url(' + url + ')');
    }
};
HotOfferTodayComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] },
    { type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
HotOfferTodayComponent.propDecorators = {
    propertyId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['propertyId',] }]
};
HotOfferTodayComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-hot-offer-today',
        template: __importDefault(__webpack_require__(/*! raw-loader!./hot-offer-today.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/hot-offer-today/hot-offer-today.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./hot-offer-today.component.scss */ "./src/app/pages/home/hot-offer-today/hot-offer-today.component.scss")).default]
    }),
    __metadata("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], src_app_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
], HotOfferTodayComponent);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map