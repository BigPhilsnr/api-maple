(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-faq-faq-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/faq/faq.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/faq/faq.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-3\">\r\n    <div class=\"theme-container\">\r\n  \r\n        <div class=\"my-3\">\r\n          <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"text-center\">  \r\n            <h1 class=\"uppercase\">Frequently Asked Questions</h1>             \r\n            <p>Click on a question to expand and reveal the answer.</p>\r\n          </div>\r\n          <mat-accordion multi=\"true\">              \r\n            <mat-expansion-panel *ngFor=\"let faq of faqs; let i = index;\"  [expanded]=\"i === 0\">\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                    <div class=\"fw-500\">{{faq.question}}</div>\r\n                    <div fxShow=\"false\" fxShow.gt-sm=\"true\" class=\"text-muted\">\r\n                        {{faq.status}}  \r\n                    </div>\r\n                </mat-panel-title>               \r\n              </mat-expansion-panel-header>          \r\n                <p>{{faq.answer}} </p>\r\n                <div class=\"divider\"></div>\r\n                <p class=\"mt-2 mb-0\"><small class=\"text-muted\">Was this answer helpful? <button mat-button>Yes</button><button mat-button>No</button></small></p>\r\n            </mat-expansion-panel>\r\n          </mat-accordion>\r\n        </div> \r\n\r\n    </div>\r\n</div>\r\n\r\n<app-get-in-touch></app-get-in-touch>");

/***/ }),

/***/ "./src/app/pages/faq/faq.component.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/faq/faq.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZhcS9mYXEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/faq/faq.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/faq/faq.component.ts ***!
  \********************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
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

let FaqComponent = class FaqComponent {
    constructor() {
        this.faqs = [
            {
                question: 'What payment methods are available?',
                status: 'Question about selling',
                answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat, sapien id rhoncus pretium, leo massa pellentesque magna, non mattis lectus risus sit amet turpis. Cras et semper tellus. Sed sed leo sapien. Nunc eros nibh, tempor quis rhoncus eget, condimentum vel odio. Duis vitae lacus ligula. Aenean elementum euismod pretium. Nullam sit amet lectus molestie, condimentum odio accumsan, sodales nibh.'
            },
            {
                question: ' What is the difference between a real estate agent and a real estate broker?',
                status: 'Agents FAQs',
                answer: 'Maecenas aliquet cursus tellus in imperdiet. Vivamus consequat ipsum augue, a vulputate eros porta eu. Sed consectetur turpis a arcu dapibus, sit amet elementum dui posuere. Ut sodales nisl nec rhoncus dignissim. Nunc maximus est sed nibh mattis fringilla. Donec vehicula interdum neque bibendum feugiat. Sed porttitor elementum vehicula. Phasellus fermentum leo erat, non fermentum ipsum elementum sed. '
            },
            {
                question: 'How long does the loan process take?',
                status: 'Question about renting',
                answer: 'Etiam a faucibus tortor, pellentesque viverra orci. Donec et cursus quam, eget molestie nisl. Etiam venenatis libero turpis, non placerat orci consequat ut. Nullam vitae lacinia elit. Proin pulvinar faucibus enim, et ullamcorper risus dapibus sit amet. Nam magna sapien, hendrerit eget gravida id, dapibus a diam. Proin condimentum elementum vestibulum. Sed hendrerit vestibulum diam, quis cursus ex efficitur non.'
            },
            {
                question: 'When buying a new home, what upgrades should we go for?',
                status: 'Question about selling',
                answer: 'Curabitur vitae lorem felis. Aenean eu dolor et tortor viverra tempor ac eu lacus. Morbi eget elit ac ligula convallis sollicitudin eu et metus. Nam tempor lacus quis urna tincidunt varius non eu est. Fusce nec lorem eget ipsum dapibus tincidunt. Donec ut mauris efficitur ante pretium finibus. Vestibulum suscipit quis sapien in tincidunt. Aenean dictum sem sed justo venenatis, suscipit fringilla diam suscipit. Mauris sit amet lobortis purus, quis faucibus justo. Quisque tincidunt magna turpis, nec ultrices lorem mollis quis.'
            },
            {
                question: 'What benefits do I receive from private mortgage insurance?',
                status: 'Question about renting',
                answer: 'Ut sodales nisl nec rhoncus dignissim. Nunc maximus est sed nibh mattis fringilla. Donec vehicula interdum neque bibendum feugiat. Sed porttitor elementum vehicula. Phasellus fermentum leo erat, non fermentum ipsum elementum sed. Mauris non risus lectus. Morbi ut metus et nisi malesuada mollis. Maecenas placerat ante urna, sed efficitur magna tempor ac. Nam posuere lorem diam, sit amet rhoncus massa consectetur in. In nec tincidunt ipsum, non volutpat augue. Nam quis imperdiet nisi.'
            },
            {
                question: ' Why should I use a real estate salesperson?',
                status: 'Agents FAQs',
                answer: 'Phasellus nec dapibus est. Nullam erat neque, porttitor sed massa non, vulputate vestibulum libero. Donec quis odio id mi auctor pellentesque. Nulla facilisi. Morbi sed orci neque. Mauris dictum sapien efficitur sagittis efficitur. Fusce tristique rhoncus mauris, sed tristique arcu scelerisque id.'
            },
            {
                question: 'Can a home depreciate in value?',
                status: 'Question about selling',
                answer: 'Etiam a faucibus tortor, pellentesque viverra orci. Donec et cursus quam, eget molestie nisl. Etiam venenatis libero turpis, non placerat orci consequat ut. Nullam vitae lacinia elit. Proin pulvinar faucibus enim, et ullamcorper risus dapibus sit amet. Nam magna sapien, hendrerit eget gravida id, dapibus a diam. Proin condimentum elementum vestibulum. Sed hendrerit vestibulum diam, quis cursus ex efficitur non.'
            }
        ];
    }
    ngOnInit() {
    }
};
FaqComponent.ctorParameters = () => [];
FaqComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-faq',
        template: __importDefault(__webpack_require__(/*! raw-loader!./faq.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/faq/faq.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./faq.component.scss */ "./src/app/pages/faq/faq.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], FaqComponent);



/***/ }),

/***/ "./src/app/pages/faq/faq.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/faq/faq.module.ts ***!
  \*****************************************/
/*! exports provided: routes, FaqModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqModule", function() { return FaqModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _faq_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./faq.component */ "./src/app/pages/faq/faq.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const routes = [
    { path: '', component: _faq_component__WEBPACK_IMPORTED_MODULE_4__["FaqComponent"], pathMatch: 'full' }
];
let FaqModule = class FaqModule {
};
FaqModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_faq_component__WEBPACK_IMPORTED_MODULE_4__["FaqComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
        ]
    })
], FaqModule);



/***/ })

}]);
//# sourceMappingURL=pages-faq-faq-module-es2015.js.map