(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-agents-agents-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agents/agent/agent.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agents/agent/agent.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"px-3\"> \r\n  \r\n\r\n  <div class=\"theme-container\">  \r\n\r\n    <h3 class=\"uppercase mt-3\">My Listing</h3>\r\n\r\n    <mat-sidenav-container class=\"all-properties mt-3\"> \r\n      <mat-sidenav #sidenav [autoFocus]=\"false\" [opened]=\"sidenavOpen\" [mode]=\"sidenavOpen ? 'side' : 'over'\" class=\"search-sidenav\">         \r\n        <mat-card [perfectScrollbar]=\"psConfig\">\r\n          <button fxHide=\"false\" fxHide.gt-xs mat-icon-button (click)=\"sidenav.toggle()\">\r\n            <mat-icon color=\"accent\">close</mat-icon>\r\n          </button>\r\n          <app-properties-search \r\n              [variant]=\"settings.searchPanelVariant\"\r\n              [vertical]=\"false\"\r\n              [searchOnBtnClick]=\"settings.searchOnBtnClick\"              \r\n              [removedSearchField]=\"removedSearchField\" \r\n              (onSearchChange)=\"searchChanged($event)\"\r\n              (onSearchClick)=\"searchClicked()\">\r\n          </app-properties-search>\r\n        </mat-card> \r\n      </mat-sidenav>\r\n\r\n      <mat-sidenav-content ngClass.gt-sm=\"distance\"> \r\n\r\n        <div fxLayout=\"row wrap\" class=\"properties-wrapper mt-0\">            \r\n            \r\n            <div fxFlex=\"100\" class=\"px-2 pb-2 pt-0\">                \r\n                <app-properties-toolbar [showSidenavToggle]=\"!sidenavOpen\"\r\n                                        (onSidenavToggle)=\"sidenav.toggle()\"\r\n                                        (onChangeCount)=\"changeCount($event)\"\r\n                                        (onChangeSorting)=\"changeSorting($event)\"\r\n                                        (onChangeViewType)=\"changeViewType($event)\">\r\n                </app-properties-toolbar>\r\n            </div>\r\n            \r\n            <div fxFlex=\"100\" fxLayoutAlign=\"start start\" class=\"p-2\"> \r\n                <mat-chip-list [ngClass]=\"(settings.rtl) ? 'ml-2' : 'mr-2'\">\r\n                    <mat-chip selected disableRipple=\"true\" color=\"warn\" class=\"uppercase ws-nowrap\">\r\n                        {{ pagination?.total }} found\r\n                    </mat-chip> \r\n                </mat-chip-list>\r\n                <app-properties-search-results-filters \r\n                    [searchFields]=\"searchFields\" \r\n                    (onRemoveSearchField)=\"removeSearchField($event)\">\r\n                </app-properties-search-results-filters>                 \r\n            </div>\r\n\r\n            <div *ngFor=\"let property of properties\" [fxFlex]=\"(viewType=='grid') ? viewCol : 100\"  class=\"item\">                         \r\n                <app-property-item [property]=\"property\" [viewType]=\"viewType\" [viewColChanged]=\"viewCol\" [fullWidthPage]=\"false\"></app-property-item>\r\n            </div>\r\n\r\n            <div *ngIf=\"properties?.length == 0\" fxFlex=\"100\" fxLayoutAlign=\"center center\" [style.min-height.px]=\"200\">                \r\n                <mat-spinner *ngIf=\"!message\"></mat-spinner>\r\n                <mat-chip-list *ngIf=\"message\">\r\n                    <mat-chip selected disableRipple=\"true\" color=\"warn\" class=\"uppercase ws-nowrap\">\r\n                        {{message}}\r\n                    </mat-chip> \r\n                </mat-chip-list> \r\n            </div>            \r\n\r\n            <div *ngIf=\"properties?.length > 0\" fxFlex=\"100\" fxLayoutAlign=\"center center\" class=\"p-2\">\r\n                <mat-paginator [length]=\"pagination?.total\"\r\n                              [pageSize]=\"pagination?.perPage\"\r\n                              (page)=\"onPageChange($event)\"\r\n                              class=\"w-100 mat-elevation-z1\">\r\n                </mat-paginator>\r\n            </div>          \r\n          \r\n        </div>\r\n\r\n        \r\n\r\n      </mat-sidenav-content>\r\n    </mat-sidenav-container>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<!-- <app-get-in-touch></app-get-in-touch> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agents/agents.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agents/agents.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header-image [backgroundImage]=\"'assets/images/others/contact.jpg'\" \r\n                  [bgImageAnimate]=\"false\" \r\n                  [contentOffsetToTop]=\"false\"                \r\n                  [title]=\"'Our Agents'\"\r\n                  [desc]=\"'Hire a real estate agent, who will invest in your  success'\">\r\n</app-header-image>\r\n\r\n<div class=\"px-3\">\r\n  <div class=\"theme-container\">\r\n    <div fxLayout=\"row wrap\" class=\"agents-wrapper\">\r\n      <div *ngFor=\"let agent of agents\" fxFlex=\"100\" fxFlex.gt-md=\"25\" fxFlex.md=\"33.3\" fxFlex.sm=\"50\" class=\"p-3\">\r\n          <mat-card>\r\n              <a [routerLink]=\"['/agents', agent.id]\" class=\"agent-img\">\r\n                <img mat-card-image [src]=\"agent.image\" [alt]=\"agent.fullName\"> \r\n              </a>\r\n              <!-- <img mat-card-image [src]=\"agent.image\" [alt]=\"agent.fullName\">  -->\r\n              <mat-card-content>\r\n                  <h2 class=\"fw-600\">{{agent.fullName}}</h2>\r\n                  <app-rating [ratingsCount]=\"agent.ratingsCount\" [ratingsValue]=\"agent.ratingsValue\"></app-rating>\r\n                  <p class=\"mt-3\">{{agent.desc}}</p>                                    \r\n                  <p fxLayoutAlign=\"start center\"><mat-icon color=\"primary\" matTooltip=\"Organization\" matTooltipPosition=\"above\">business</mat-icon><span class=\"mx-2\">{{agent.organization}}</span></p>\r\n                  <p fxLayoutAlign=\"start center\"><mat-icon color=\"primary\">email</mat-icon><span class=\"mx-2\">{{agent.email}}</span></p>\r\n                  <p fxLayoutAlign=\"start center\"><mat-icon color=\"primary\">call</mat-icon><span class=\"mx-2\">{{agent.phone}}</span></p>\r\n              </mat-card-content>\r\n              <mat-divider></mat-divider>\r\n              <mat-card-actions fxLayoutAlign=\"space-between center\">\r\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"text-muted\">\r\n                      <a [href]=\"'https://www.facebook.com/'+agent.social.facebook\" target=\"blank\" class=\"social-icon\">\r\n                        <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                          <path d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z\" />\r\n                        </svg>\r\n                      </a>\r\n                      <a [href]=\"'https://twitter.com/'+agent.social.twitter\" target=\"blank\" class=\"social-icon\">\r\n                        <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                            <path d=\"M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33Z\" />\r\n                        </svg> \r\n                      </a>\r\n                      <a [href]=\"'https://www.linkedin.com/'+agent.social.linkedin\" target=\"blank\" class=\"social-icon\"> \r\n                        <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                          <path d=\"M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z\" />\r\n                        </svg>\r\n                      </a>\r\n                      <a [href]=\"'https://instagram.com/'+agent.social.instagram\" target=\"blank\" class=\"social-icon\"> \r\n                        <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                            <path d=\"M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z\" />\r\n                        </svg>\r\n                      </a> \r\n                      <a [href]=\"agent.social.website\" target=\"blank\" class=\"social-icon\"> \r\n                        <svg class=\"mat-icon\" viewBox=\"0 0 24 24\">\r\n                            <path d=\"M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z\" />\r\n                        </svg>\r\n                      </a>  \r\n                  </div>\r\n                  <div>\r\n                      <a [routerLink]=\"['/agents', agent.id]\" mat-button color=\"primary\" class=\"uppercase\">View Profile</a>\r\n                  </div> \r\n              </mat-card-actions>                              \r\n          </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/pages/agents/agent/agent.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/agents/agent/agent.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".agent-wrapper {\n  margin: -24px !important;\n}\n.agent-wrapper img {\n  border-radius: 4px;\n}\n.agent-wrapper .listed-count {\n  font-weight: 600;\n  min-width: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWdlbnRzL2FnZW50L2FnZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksd0JBQUE7QUFESjtBQUVJO0VBQ0ksa0JBQUE7QUFBUjtBQUVJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBQVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZ2VudHMvYWdlbnQvYWdlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWdlbnQtd3JhcHBlcntcclxuICAgIC8vIG1hcmdpbjogMCAtMzJweDtcclxuICAgIC8vIHBhZGRpbmc6IDAgMTZweDsgIFxyXG4gICAgbWFyZ2luOiAtMjRweCAhaW1wb3J0YW50OyAgXHJcbiAgICBpbWd7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG4gICAgLmxpc3RlZC1jb3VudHtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIG1pbi13aWR0aDogMjRweDtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/agents/agent/agent.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/agents/agent/agent.component.ts ***!
  \*******************************************************/
/*! exports provided: AgentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentComponent", function() { return AgentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var src_app_app_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/app.models */ "./src/app/app.models.ts");
/* harmony import */ var src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/theme/utils/app-validators */ "./src/app/theme/utils/app-validators.ts");
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










let AgentComponent = class AgentComponent {
    constructor(appSettings, appService, activatedRoute, mediaObserver, fb) {
        this.appSettings = appSettings;
        this.appService = appService;
        this.activatedRoute = activatedRoute;
        this.mediaObserver = mediaObserver;
        this.fb = fb;
        this.sidenavOpen = true;
        this.psConfig = {
            wheelPropagation: true
        };
        this.viewType = 'grid';
        this.viewCol = 33.3;
        this.count = 12;
        this.pagination = new src_app_app_models__WEBPACK_IMPORTED_MODULE_8__["Pagination"](1, this.count, null, 2, 0, 0);
        this.settings = this.appSettings.settings;
        this.watcher = mediaObserver.media$.subscribe((change) => {
            if (change.mqAlias == 'xs') {
                this.sidenavOpen = false;
                this.viewCol = 100;
            }
            else if (change.mqAlias == 'sm') {
                this.sidenavOpen = false;
                this.viewCol = 50;
            }
            else if (change.mqAlias == 'md') {
                this.viewCol = 50;
                this.sidenavOpen = true;
            }
            else {
                this.viewCol = 33.3;
                this.sidenavOpen = true;
            }
        });
    }
    ngOnInit() {
        this.sub = this.activatedRoute.params.subscribe(params => {
            this.agentId = params['id'];
            this.getAgentById(params['id']);
            this.getProperties();
        });
        this.contactForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_9__["emailValidator"]])],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
        this.watcher.unsubscribe();
    }
    getAgentById(id) {
        this.agent = this.appService.getAgents().filter(agent => agent.id == id)[0];
    }
    getProperties() {
        this.appService.getPropertiesByAgentId(this.agentId).subscribe(data => {
            let result = this.filterData(data);
            if (result.data.length == 0) {
                this.properties.length = 0;
                this.pagination = new src_app_app_models__WEBPACK_IMPORTED_MODULE_8__["Pagination"](1, this.count, null, 2, 0, 0);
                this.message = 'No Results Found';
                return false;
            }
            this.properties = result.data;
            this.pagination = result.pagination;
            this.message = null;
        });
    }
    resetPagination() {
        if (this.paginator) {
            this.paginator.pageIndex = 0;
        }
        this.pagination = new src_app_app_models__WEBPACK_IMPORTED_MODULE_8__["Pagination"](1, this.count, null, null, this.pagination.total, this.pagination.totalPages);
    }
    filterData(data) {
        return this.appService.filterData(data, this.searchFields, this.sort, this.pagination.page, this.pagination.perPage);
    }
    searchClicked() {
        this.properties.length = 0;
        this.getProperties();
        window.scrollTo(0, 0);
    }
    searchChanged(event) {
        event.valueChanges.subscribe(() => {
            this.resetPagination();
            this.searchFields = event.value;
            setTimeout(() => {
                this.removedSearchField = null;
            });
            if (!this.settings.searchOnBtnClick) {
                this.properties.length = 0;
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
    changeCount(count) {
        this.count = count;
        this.properties.length = 0;
        this.resetPagination();
        this.getProperties();
    }
    changeSorting(sort) {
        this.sort = sort;
        this.properties.length = 0;
        this.getProperties();
    }
    changeViewType(obj) {
        this.viewType = obj.viewType;
        this.viewCol = obj.viewCol;
    }
    onPageChange(e) {
        this.pagination.page = e.pageIndex + 1;
        this.getProperties();
        window.scrollTo(0, 0);
    }
    onContactFormSubmit(values) {
        if (this.contactForm.valid) {
            console.log(values);
        }
    }
};
AgentComponent.ctorParameters = () => [
    { type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_7__["AppSettings"] },
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["MediaObserver"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
AgentComponent.propDecorators = {
    sidenav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['sidenav',] }],
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"],] }]
};
AgentComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-agent',
        template: __importDefault(__webpack_require__(/*! raw-loader!./agent.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agents/agent/agent.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./agent.component.scss */ "./src/app/pages/agents/agent/agent.component.scss")).default]
    }),
    __metadata("design:paramtypes", [src_app_app_settings__WEBPACK_IMPORTED_MODULE_7__["AppSettings"],
        src_app_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["MediaObserver"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], AgentComponent);



/***/ }),

/***/ "./src/app/pages/agents/agents.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/agents/agents.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".agents-wrapper {\n  margin: -16px;\n  padding: 32px 0;\n}\n.agents-wrapper .agent-img {\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWdlbnRzL2FnZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUNJLCtCQUFBO0VBQ0EsZ0NBQUE7QUFFUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FnZW50cy9hZ2VudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWdlbnRzLXdyYXBwZXJ7XHJcbiAgICBtYXJnaW46IC0xNnB4O1xyXG4gICAgcGFkZGluZzogMzJweCAwO1xyXG4gICAgLmFnZW50LWltZ3tcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBpbmhlcml0O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBpbmhlcml0O1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/agents/agents.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/agents/agents.component.ts ***!
  \**************************************************/
/*! exports provided: AgentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentsComponent", function() { return AgentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
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


let AgentsComponent = class AgentsComponent {
    constructor(appService) {
        this.appService = appService;
    }
    ngOnInit() {
        this.agents = this.appService.getAgents();
    }
};
AgentsComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }
];
AgentsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-agents',
        template: __importDefault(__webpack_require__(/*! raw-loader!./agents.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agents/agents.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./agents.component.scss */ "./src/app/pages/agents/agents.component.scss")).default]
    }),
    __metadata("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
], AgentsComponent);



/***/ }),

/***/ "./src/app/pages/agents/agents.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/agents/agents.module.ts ***!
  \***********************************************/
/*! exports provided: routes, AgentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentsModule", function() { return AgentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _agents_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./agents.component */ "./src/app/pages/agents/agents.component.ts");
/* harmony import */ var _agent_agent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agent/agent.component */ "./src/app/pages/agents/agent/agent.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






const routes = [
    { path: '', component: _agents_component__WEBPACK_IMPORTED_MODULE_4__["AgentsComponent"], pathMatch: 'full' },
    { path: ':id', component: _agent_agent_component__WEBPACK_IMPORTED_MODULE_5__["AgentComponent"] }
];
let AgentsModule = class AgentsModule {
};
AgentsModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [
            _agents_component__WEBPACK_IMPORTED_MODULE_4__["AgentsComponent"],
            _agent_agent_component__WEBPACK_IMPORTED_MODULE_5__["AgentComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]
    })
], AgentsModule);



/***/ })

}]);
//# sourceMappingURL=pages-agents-agents-module-es2015.js.map