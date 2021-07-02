(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-account-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-3\" style=\"padding: 0px !important;\">\n    <div class=\"theme-container\">\n        <mat-sidenav-container class=\"account\">\n            <mat-sidenav #sidenav [opened]=\"sidenavOpen\" [mode]=\"sidenavOpen ? 'side' : 'over'\"\n                class=\"account-sidenav p-3\" style=\"background: white !important;\">\n                <div [perfectScrollbar]=\"psConfig\" class=\"inner-div\">\n                    <button fxHide=\"false\" fxHide.gt-sm mat-button color=\"warn\" class=\"close\"\n                        (click)=\"sidenav.toggle()\">\n                        <mat-icon>clear_all</mat-icon>\n                    </button>\n                    <mat-card-header fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                        <img style=\"width: 100px;height: 100px;\" mat-card-avatar [attr.src]=\"img(user.avatar)\" alt=\"\">\n                        <div class=\"column\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n                            <mat-card-title class=\"mb-0\">{{user.fullName}}</mat-card-title>\n                            <p> {{user.email}}</p>\n                        </div>\n\n                    </mat-card-header>\n                    <div class=\"divider my-3\"></div>\n                    <div style=\"height: 400px;overflow-y:scroll;\">\n                        <div *ngFor=\"let link of links\">\n                            <a matLine (click)=\"openLink($event,link)\" [routerLink]=\"link.href\"\n                                routerLinkActive=\"horizontal-active-link\" [routerLinkActiveOptions]=\"{exact:true}\"\n                                fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"p-3\">\n                                <mat-icon class=\"text-muted\">{{link.icon}}</mat-icon>\n                                <span class=\"mx-2\">{{ link.name }}</span>\n                            </a>\n                        </div>\n                    </div>\n\n                </div>\n            </mat-sidenav>\n\n            <mat-sidenav-content ngClass.gt-sm=\"distance\" style=\"height: 600px;overflow-y:scroll;\">\n                <mat-card fxHide=\"true\" *ngIf=\"!sidenavOpen\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\"\n                    class=\"text-muted mb-3\">\n                    <button mat-icon-button (click)=\"sidenav.toggle()\">\n                        <mat-icon>tune</mat-icon>\n                    </button>\n                    <h3> My Account</h3>\n                </mat-card>\n                <div class=\"sector\">\n                    <mat-card class=\"account-wrapper\">\n                        <router-outlet></router-outlet>\n                    </mat-card>\n                </div>\n\n            </mat-sidenav-content>\n        </mat-sidenav-container>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/dashboard/dashboard.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/dashboard/dashboard.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  dashboard works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/edit-property/edit-property.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/edit-property/edit-property.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-accordion [formGroup]=\"submitForm\" class=\"edit-property\">\r\n\r\n  <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>    \r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>Basic</mat-panel-title> \r\n    </mat-expansion-panel-header>\r\n    <form formGroupName=\"basic\" fxLayout=\"row wrap\">\r\n\r\n        <div fxFlex=\"100\" class=\"p-3\">\r\n          <h1 class=\"fw-500 text-center\">Basic</h1>\r\n        </div>\r\n                \r\n        <div fxFlex=\"100\" class=\"px-2\">\r\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Title</mat-label>\r\n              <input matInput placeholder=\"Title\" formControlName=\"title\" required autocomplete=\"off\">\r\n              <mat-error *ngIf=\"submitForm.get('basic')['controls'].title.errors?.required\">Title is required</mat-error>\r\n          </mat-form-field>\r\n        </div>  \r\n\r\n        \r\n        <div fxFlex=\"100\" class=\"px-2\">\r\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Short description</mat-label> \r\n              <textarea matInput placeholder=\"Short description\" formControlName=\"shortDesc\" rows=\"3\"></textarea> \r\n          </mat-form-field> \r\n        </div> \r\n    \r\n    \r\n        <div fxFlex=\"100\" class=\"px-2\">\r\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Description</mat-label> \r\n              <textarea matInput placeholder=\"Description\" formControlName=\"desc\" rows=\"7\"></textarea> \r\n          </mat-form-field> \r\n        </div> \r\n    \r\n        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Price (RENT)</mat-label>\r\n              <input matInput placeholder=\"Enter sale or rent price\" formControlName=\"priceDollar\" autocomplete=\"off\"> \r\n          </mat-form-field>\r\n        </div> \r\n    \r\n        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Price (SALE)</mat-label>\r\n              <input matInput placeholder=\"Enter sale or rent price\" formControlName=\"priceEuro\" autocomplete=\"off\"> \r\n          </mat-form-field>\r\n        </div> \r\n    \r\n        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Property Type</mat-label> \r\n              <mat-select placeholder=\"Select Property Type\" formControlName=\"propertyType\" required>\r\n                  <mat-option *ngFor=\"let propertyType of propertyTypes\" [value]=\"propertyType\">\r\n                      {{propertyType.name}}\r\n                  </mat-option>\r\n              </mat-select>\r\n              <mat-error *ngIf=\"submitForm.get('basic')['controls'].propertyType.errors?.required\">Property Type is required</mat-error>                               \r\n          </mat-form-field>\r\n        </div>\r\n    \r\n        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Property Status</mat-label>\r\n              <mat-select placeholder=\"Select Property Status\" formControlName=\"propertyStatus\" multiple>\r\n                  <mat-option *ngFor=\"let propertyStatus of propertyStatuses\" [value]=\"propertyStatus\">\r\n                      {{propertyStatus.name}}\r\n                  </mat-option>\r\n              </mat-select>                             \r\n          </mat-form-field>\r\n        </div>\r\n    \r\n        <div fxFlex=\"100\" class=\"step-section pb-2\">\r\n            <p class=\"mb-0\"><span class=\"uppercase fw-500\">Gallery</span><span class=\"text-muted mx-3\">(max 8 images)</span></p>  \r\n            <input-file formControlName=\"gallery\" fileLimit=\"8\" fileAccept=\"image/*\" [linkEnabled]=\"true\"></input-file>  \r\n        </div> \r\n    \r\n        <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"end center\">\r\n          <button mat-raised-button color=\"primary\" fxLayout=\"row\" fxLayoutAlign=\"center center\" (click)=\"onSubmitForm('basic')\" type=\"submit\">\r\n            <span class=\"mx-1 uppercase\">Next</span>                    \r\n            <mat-icon>navigate_next</mat-icon>\r\n          </button> \r\n        </div> \r\n    \r\n    </form> \r\n  </mat-expansion-panel>\r\n\r\n  <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle [disabled]=\"!submitForm.get('basic').valid\">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>Address</mat-panel-title> \r\n    </mat-expansion-panel-header>\r\n    <form formGroupName=\"address\" fxLayout=\"row wrap\">\r\n            \r\n        <div fxFlex=\"100\" class=\"p-3\">\r\n          <h1 class=\"fw-500 text-center\">Address</h1>\r\n        </div>\r\n\r\n        <div fxFlex=\"100\"  class=\"px-2\">\r\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>City</mat-label>\r\n              <mat-select placeholder=\"Select City...\" formControlName=\"city\" (selectionChange)=\"onSelectCity()\" required> \r\n                <mat-option *ngFor=\"let city of cities\" [value]=\"city\">\r\n                  {{city.name}}\r\n                </mat-option>\r\n              </mat-select> \r\n              <mat-error *ngIf=\"submitForm.get('address')['controls'].city.errors?.required\">City is required</mat-error>                    \r\n          </mat-form-field>\r\n        </div> \r\n                  \r\n        <div fxFlex=\"100\" class=\"px-2\">\r\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-icon matPrefix class=\"mr-1 text-muted\">location_on</mat-icon>\r\n              <mat-label>Location</mat-label>\r\n              <input matInput placeholder=\"Enter a location\" formControlName=\"location\" autocomplete=\"off\" #addressAutocomplete> \r\n              <button *ngIf=\"submitForm.get('address')['controls'].location.value\" mat-button matSuffix mat-icon-button (click)=\"submitForm.get('address')['controls'].location.setValue(null)\" type=\"button\">\r\n                <mat-icon>close</mat-icon>\r\n              </button>\r\n              <mat-error *ngIf=\"submitForm.get('address')['controls'].location.errors?.required\">Location is required</mat-error>   \r\n          </mat-form-field>\r\n        </div> \r\n      \r\n        <div fxFlex=\"100\" class=\"px-2 mb-4\">\r\n            <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [mapTypeControl]=\"true\" [fullscreenControl]=\"true\" (mapClick)=\"onMapClick($event)\">\r\n                <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [markerDraggable]=\"true\" (markerClick)=\"onMarkerClick($event)\"></agm-marker>\r\n            </agm-map>\r\n        </div>\r\n      \r\n       \r\n      \r\n        <!-- <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Zip Code</mat-label>\r\n              <input matInput placeholder=\"exp. 98104\" autocomplete=\"off\" formControlName=\"zipCode\">                  \r\n            </mat-form-field>\r\n        </div>\r\n      \r\n        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n            <mat-label>Neighborhood</mat-label>\r\n            <mat-select placeholder=\"Select Neighborhood...\" formControlName=\"neighborhood\" multiple (selectionChange)=\"onSelectNeighborhood()\">\r\n              <mat-option *ngFor=\"let neighborhood of neighborhoods | filterNeighborhoods: submitForm.get('address')['controls'].city.value?.id\" [value]=\"neighborhood\">\r\n                {{neighborhood.name}}\r\n              </mat-option>\r\n            </mat-select>   \r\n          </mat-form-field>\r\n        </div> \r\n      \r\n        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n          <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n            <mat-label>Street</mat-label>\r\n            <mat-select placeholder=\"Select Street...\" formControlName=\"street\" multiple> \r\n              <mat-option *ngFor=\"let street of streets | filterStreets : { neighborhoods: submitForm.get('address')['controls'].neighborhood.value?.id, cityId:submitForm.get('address')['controls'].city.value?.id } \" [value]=\"street\">\r\n                {{street.name}}\r\n              </mat-option>\r\n            </mat-select>  \r\n          </mat-form-field>\r\n        </div> \r\n       -->\r\n        <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"space-between center\">\r\n          <button mat-raised-button color=\"primary\" fxLayout=\"row\" fxLayoutAlign=\"center center\" (click)=\"prevStep()\" type=\"button\">\r\n            <mat-icon>navigate_before</mat-icon>\r\n            <span class=\"mx-1 uppercase\">Back</span>  \r\n          </button>\r\n          <button mat-raised-button color=\"primary\" fxLayout=\"row\" fxLayoutAlign=\"center center\" (click)=\"onSubmitForm('address')\" type=\"submit\">\r\n            <span class=\"mx-1 uppercase\">Next</span>                    \r\n            <mat-icon>navigate_next</mat-icon>\r\n          </button> \r\n        </div>  \r\n      \r\n    </form>    \r\n  </mat-expansion-panel>\r\n\r\n  <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle [disabled]=\"!submitForm.get('basic').valid || !submitForm.get('address').valid\">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>Additional</mat-panel-title> \r\n    </mat-expansion-panel-header>\r\n    <form formGroupName=\"additional\" fxLayout=\"row wrap\">\r\n    \r\n        <div fxFlex=\"100\" class=\"p-3\">\r\n          <h1 class=\"fw-500 text-center\">Additional</h1>\r\n        </div>\r\n    \r\n        <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Bedrooms</mat-label>\r\n              <input matInput type=\"number\" placeholder=\"bedrooms\" autocomplete=\"off\" formControlName=\"bedrooms\" onlyNumber maxlength=\"2\">                  \r\n            </mat-form-field>\r\n        </div>\r\n    \r\n        <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Bathrooms</mat-label>\r\n              <input matInput type=\"number\" placeholder=\"bathrooms\" autocomplete=\"off\" formControlName=\"bathrooms\" onlyNumber maxlength=\"2\">                  \r\n            </mat-form-field>\r\n        </div>\r\n    \r\n        <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Garages</mat-label>\r\n              <input type=\"number\" matInput placeholder=\"Garages\" autocomplete=\"off\" formControlName=\"garages\" onlyNumber maxlength=\"2\">                  \r\n            </mat-form-field>\r\n        </div>\r\n        \r\n        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Area (ft²)</mat-label>\r\n              <input matInput placeholder=\"Area\" autocomplete=\"off\" formControlName=\"area\" onlyNumber>                  \r\n            </mat-form-field>\r\n        </div>\r\n        \r\n        <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\r\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n              <mat-label>Year Built</mat-label>\r\n              <input matInput placeholder=\"Year Built\" autocomplete=\"off\" formControlName=\"yearBuilt\" onlyNumber  maxlength=\"4\">                  \r\n            </mat-form-field>\r\n        </div>\r\n    \r\n        <div fxFlex=\"100\" class=\"mb-2\"> \r\n            <p class=\"uppercase m-2 fw-500\">Features</p> \r\n            <div formArrayName=\"features\" fxLayout=\"row wrap\">\r\n                <div [formGroupName]=\"i\" *ngFor=\"let control of submitForm.get('additional')['controls'].features['controls']; index as i\" class=\"p-2\">\r\n                    <mat-checkbox formControlName=\"selected\">{{features[i].name}}</mat-checkbox>                         \r\n                </div>\r\n            </div>\r\n        </div>\r\n    \r\n\r\n        <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"space-between center\">\r\n          <button mat-raised-button color=\"primary\" fxLayout=\"row\" fxLayoutAlign=\"center center\" (click)=\"prevStep()\" type=\"button\">\r\n            <mat-icon>navigate_before</mat-icon>\r\n            <span class=\"mx-1 uppercase\">Back</span>  \r\n          </button>\r\n          <button mat-raised-button color=\"primary\" fxLayout=\"row\" fxLayoutAlign=\"center center\" (click)=\"onSubmitForm('additional')\" type=\"submit\">\r\n            <span class=\"mx-1 uppercase\">Next</span>                    \r\n            <mat-icon>navigate_next</mat-icon>\r\n          </button> \r\n        </div>  \r\n    \r\n        \r\n    \r\n    \r\n    </form>\r\n  </mat-expansion-panel> \r\n\r\n  <mat-expansion-panel [expanded]=\"step === 3\" (opened)=\"setStep(3)\" hideToggle [disabled]=\"!submitForm.get('basic').valid || !submitForm.get('address').valid || !submitForm.get('additional').valid \">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>Media</mat-panel-title> \r\n    </mat-expansion-panel-header>\r\n    <form formGroupName=\"media\" fxLayout=\"row wrap\">    \r\n                  \r\n        <div fxFlex=\"100\" class=\"p-3\">\r\n          <h1 class=\"fw-500 text-center\">Media</h1>\r\n        </div>\r\n    \r\n        <div fxFlex=\"100\" fxLayoutAlign=\"start center\" class=\"my-3 px-2\"> \r\n            <p class=\"mb-0\"><span class=\"uppercase fw-500\">Videos</span><span class=\"text-muted mx-3\">(video link to .mp4)</span></p>                            \r\n            <button type=\"button\" mat-icon-button color=\"primary\" (click)=\"addVideo()\" matTooltip=\"Add New Video\" matTooltipPosition=\"after\">\r\n                <mat-icon>add_circle</mat-icon>\r\n            </button>\r\n        </div> \r\n        <div formArrayName=\"videos\" fxFlex=\"100\" fxLayout=\"row wrap\">  \r\n            <div *ngFor=\"let item of submitForm.get('media')['controls'].videos['controls']; let i = index;\" fxFlex=\"100\" class=\"step-section\">\r\n                <div fxFlex=\"4\" class=\"fw-500 text-center pt-3\">{{i+1}}.</div>\r\n                <div [formGroupName]=\"i\" fxFlex=\"90\" fxLayout=\"row wrap\">\r\n                    <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"40\" class=\"px-2\">\r\n                        <mat-label>Name</mat-label>\r\n                        <input matInput placeholder=\"Video name\" formControlName=\"name\" autocomplete=\"off\">     \r\n                    </mat-form-field>\r\n                    <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"60\" class=\"px-2\">\r\n                        <mat-label>Link</mat-label>\r\n                        <input matInput placeholder=\"Link to video\" formControlName=\"link\" autocomplete=\"off\">     \r\n                    </mat-form-field>                                                 \r\n                </div>\r\n                <div fxFlex=\"6\" class=\"text-center pt-2\">\r\n                    <button mat-icon-button color=\"warn\" (click)=\"deleteVideo(i)\" matTooltip=\"Delete Video\">\r\n                        <mat-icon>cancel</mat-icon>\r\n                    </button>\r\n                </div>                            \r\n            </div>        \r\n        </div>\r\n    \r\n        <div fxFlex=\"100\" fxLayoutAlign=\"start center\" class=\"my-3 px-2\"> \r\n            <p class=\"uppercase fw-500 mb-0\">Plans</p>                            \r\n            <button type=\"button\" mat-icon-button color=\"primary\" (click)=\"addPlan()\" matTooltip=\"Add New Plan\" matTooltipPosition=\"after\" class=\"mx-3\">\r\n                <mat-icon>add_circle</mat-icon>\r\n            </button>\r\n        </div> \r\n        <div formArrayName=\"plans\" fxFlex=\"100\" fxLayout=\"row wrap\">  \r\n            <div *ngFor=\"let item of submitForm.get('media')['controls'].plans['controls']; let i = index;\" fxFlex=\"100\" class=\"step-section pb-2\">\r\n                <div fxFlex=\"4\" class=\"fw-500 text-center pt-3\">{{i+1}}.</div>\r\n                <div [formGroupName]=\"i\" fxFlex=\"90\" fxLayout=\"row wrap\">\r\n                    <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"40\" class=\"px-2\">\r\n                        <mat-label>Name</mat-label>\r\n                        <input matInput placeholder=\"Plan name\" formControlName=\"name\" autocomplete=\"off\">     \r\n                    </mat-form-field>\r\n                    <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"60\" class=\"px-2\">\r\n                        <mat-label>Desc</mat-label>\r\n                        <input matInput placeholder=\"Description\" formControlName=\"desc\" autocomplete=\"off\">     \r\n                    </mat-form-field> \r\n                    <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\r\n                        <mat-label>Area (ft²)</mat-label>\r\n                        <input matInput placeholder=\"Area\" formControlName=\"area\" autocomplete=\"off\" onlyNumber>     \r\n                    </mat-form-field>\r\n                    <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\r\n                        <mat-label>Rooms</mat-label>\r\n                        <input matInput placeholder=\"Rooms\" formControlName=\"rooms\" autocomplete=\"off\" onlyNumber>     \r\n                    </mat-form-field>\r\n                    <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\r\n                        <mat-label>Baths</mat-label>\r\n                        <input matInput placeholder=\"Baths\" formControlName=\"baths\" autocomplete=\"off\" onlyNumber>     \r\n                    </mat-form-field>\r\n                    <div fxFlex=\"100\" class=\"px-2\">  \r\n                        <input-file placeholder=\"Image (or link to image)\" formControlName=\"image\" fileLimit=\"1\" fileAccept=\"image/*\" [linkEnabled]=\"true\"></input-file>  \r\n                    </div>                \r\n                </div>\r\n                <div fxFlex=\"6\" class=\"text-center pt-2\">\r\n                    <button mat-icon-button color=\"warn\" (click)=\"deletePlan(i)\" matTooltip=\"Delete Plan\">\r\n                        <mat-icon>cancel</mat-icon>\r\n                    </button>\r\n                </div>  \r\n            </div>        \r\n        </div> \r\n    \r\n        \r\n        <div fxFlex=\"100\" fxLayoutAlign=\"start center\" class=\"my-3 px-2\"> \r\n            <p class=\"mb-0 uppercase fw-500\">Additional features</p>                            \r\n            <button type=\"button\" mat-icon-button color=\"primary\" (click)=\"addFeature()\" matTooltip=\"Add New Feature\" matTooltipPosition=\"after\">\r\n                <mat-icon>add_circle</mat-icon>\r\n            </button>\r\n        </div> \r\n        <div formArrayName=\"additionalFeatures\" fxFlex=\"100\" fxLayout=\"row wrap\">  \r\n            <div *ngFor=\"let item of submitForm.get('media')['controls'].additionalFeatures['controls']; let i = index;\" fxFlex=\"100\" class=\"step-section\">\r\n                <div fxFlex=\"4\" class=\"fw-500 text-center pt-3\">{{i+1}}.</div>\r\n                <div [formGroupName]=\"i\" fxFlex=\"90\" fxLayout=\"row wrap\">\r\n                    <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"40\" class=\"px-2\">\r\n                        <mat-label>Name</mat-label>\r\n                        <input matInput placeholder=\"Feature name\" formControlName=\"name\" autocomplete=\"off\">     \r\n                    </mat-form-field>\r\n                    <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"60\" class=\"px-2\">\r\n                        <mat-label>Value</mat-label>\r\n                        <input matInput placeholder=\"Feature value\" formControlName=\"value\" autocomplete=\"off\">     \r\n                    </mat-form-field>                                                 \r\n                </div>\r\n                <div fxFlex=\"6\" class=\"text-center pt-2\">\r\n                    <button mat-icon-button color=\"warn\" (click)=\"deleteFeature(i)\" matTooltip=\"Delete Feature\">\r\n                        <mat-icon>cancel</mat-icon>\r\n                    </button>\r\n                </div>                            \r\n            </div>        \r\n        </div>    \r\n    \r\n        <div fxFlex=\"100\" class=\"py-3\">\r\n            <mat-slide-toggle formControlName=\"featured\">Featured</mat-slide-toggle>\r\n        </div>\r\n        <div fxFlex=\"100\" class=\"py-3\">\r\n          <mat-slide-toggle formControlName=\"advertise\">Advertise</mat-slide-toggle>\r\n      </div>\r\n\r\n        <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"space-between center\">\r\n          <button mat-raised-button color=\"primary\" fxLayout=\"row\" fxLayoutAlign=\"center center\" (click)=\"prevStep()\" type=\"button\">\r\n            <mat-icon>navigate_before</mat-icon>\r\n            <span class=\"mx-1 uppercase\">Back</span>  \r\n          </button>\r\n          <button mat-raised-button color=\"primary\" fxLayout=\"row\" fxLayoutAlign=\"center center\" (click)=\"onSubmitForm('media')\" type=\"submit\">\r\n            <span class=\"mx-1 uppercase\">Update</span>\r\n          </button> \r\n        </div>\r\n    \r\n    </form>\r\n  </mat-expansion-panel> \r\n\r\n</mat-accordion> \r\n\r\n<div *ngIf=\"step === 4\" fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"pt-3\">  \r\n  <button  (click)=\"goBack()\" mat-raised-button color=\"accent\">Return to my properties</button>       \r\n</div> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/favorites/favorites.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/favorites/favorites.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field appearance=\"outline\" class=\"w-100\">\r\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter properties\" autocomplete=\"off\">\r\n</mat-form-field> \r\n<div class=\"table-wrapper\"> \r\n    <table mat-table [dataSource]=\"dataSource\" matSort class=\"w-100\">\r\n  \r\n      <!-- ID Column -->\r\n      <ng-container matColumnDef=\"id\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\r\n        <td mat-cell *matCellDef=\"let property\"> {{property.id}} </td>\r\n      </ng-container>  \r\n\r\n      <!-- Image Column -->\r\n      <ng-container matColumnDef=\"image\">\r\n        <th mat-header-cell *matHeaderCellDef> Image </th>\r\n        <td mat-cell *matCellDef=\"let property\"><img [src]=\"property.gallery[0].small\" [style.width.px]=\"100\" class=\"d-block\"></td>\r\n      </ng-container> \r\n  \r\n      <!-- Title Column -->\r\n      <ng-container matColumnDef=\"title\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Title </th>\r\n        <td mat-cell *matCellDef=\"let property\"><a [routerLink]=\"['/properties', property.id ]\" class=\"property-name\">{{property.title}}</a></td>\r\n      </ng-container>  \r\n\r\n      <!-- Actions Column -->\r\n      <ng-container matColumnDef=\"actions\">\r\n        <th mat-header-cell *matHeaderCellDef> Remove </th>\r\n        <td mat-cell *matCellDef=\"let property\"> \r\n            <button mat-icon-button color=\"warn\" (click)=\"remove(property)\" matTooltip=\"Remove\" class=\"remove\">\r\n                <mat-icon>delete</mat-icon>\r\n            </button> \r\n        </td>\r\n      </ng-container> \r\n  \r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let property; columns: displayedColumns;\">\r\n      </tr>\r\n    </table> \r\n    <p *ngIf=\"dataSource?.data.length === 0\" class=\"py-5 mb-0 text-center\">No data available</p> \r\n</div>\r\n<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/featured/featured.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/featured/featured.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\">\n    <div fxFlex=\"100\" class=\"\">\n      <div class=\"\">\n        <h1 class=\"bg-primary p-3 title\">{{pgroup.title}}</h1>\n      </div>\n      <div class=\"w-100 btn-padding mt-3\" fxLayout=\"row wrap\" fxLayoutAlign=\"end center\">\n        <a mat-stroked-button color=\"primary\"  fxLayoutAlign=\"center center\"  [routerLink]=\"['/account/submit-property', pgroupId ]\">\n          <mat-icon>add_box</mat-icon> Add New Property\n        </a>\n      </div>\n      <mat-form-field appearance=\"outline\" class=\"w-100\" fxHide.xs fxHide.sm >\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter properties\" autocomplete=\"off\">\n      </mat-form-field>\n\n      <div class=\"table-wrapper\" fxHide.xs fxHide.sm fx>\n        <table mat-table [dataSource]=\"dataSource\" matSort class=\"w-100\">\n  \n          <!-- ID Column -->\n          <ng-container matColumnDef=\"id\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n            <td mat-cell *matCellDef=\"let property;let i = index;\"> {{i+1}} </td>\n          </ng-container>\n  \n          <!-- Image Column -->\n          <ng-container matColumnDef=\"image\">\n            <th mat-header-cell *matHeaderCellDef> Image </th>\n            <td mat-cell *matCellDef=\"let property\"><img\n                [src]=\"property.gallery.length>0?img(property.gallery[0].medium):null\" [style.width.px]=\"100\"\n                class=\"d-block\">\n            </td>\n          </ng-container>\n  \n          <!-- Title Column -->\n          <ng-container matColumnDef=\"title\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Title </th>\n            <td mat-cell *matCellDef=\"let property\"><a [routerLink]=\"['/properties', property._id ]\"\n                class=\"property-name\">{{property.title}}</a></td>\n          </ng-container>\n  \n          <!-- Published Column -->\n          <ng-container matColumnDef=\"published\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Published </th>\n            <td mat-cell *matCellDef=\"let property\"> {{property.published | date:\"dd MMMM, yyyy\"}} </td>\n          </ng-container>\n  \n          <!-- Views Column -->\n          <ng-container matColumnDef=\"views\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Views </th>\n            <td mat-cell *matCellDef=\"let property\"> {{property.views}} </td>\n          </ng-container>\n  \n          <!-- Actions Column -->\n          <ng-container matColumnDef=\"actions\">\n            <th mat-header-cell *matHeaderCellDef> Actions </th>\n            <td mat-cell *matCellDef=\"let property\">\n              <a [routerLink]=\"['/account/my-properties', property._id]\" mat-icon-button color=\"primary\"\n                matTooltip=\"Edit property\">\n                <mat-icon>edit</mat-icon>\n              </a>\n              <a [routerLink]=\"['/account/hunits', property._id]\" mat-icon-button color=\"primary\"\n               matTooltip=\"Details\" class=\"remove\">\n                <mat-icon>business</mat-icon>\n              </a>\n              <button mat-icon-button color=\"warn\" (click)=\"remove(property)\" matTooltip=\"Remove\" class=\"remove\">\n                <mat-icon>delete</mat-icon>\n              </button>\n  \n            </td>\n          </ng-container>\n  \n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let property; columns: displayedColumns;let i = index\">\n          </tr>\n        </table>\n        <p *ngIf=\"dataSource?.data.length === 0\" class=\"py-5 mb-0 text-center\">No data available</p>\n      </div>\n      <!-- fxHide.gt-md fxHide.gt-sm -->\n      <div class=\"\" fxHide.gt-md fxHide.gt-sm>\n         <div class=\"w-100\"  *ngFor=\"let property of properties\">\n             <app-property-item style=\"margin: 5%;\" [property]=\"property\" [viewType]=\"viewType\" [viewColChanged]=\"viewCol\">\n             </app-property-item>\n         </div>\n      </div>\n      \n\n      <mat-paginator [length]=\"total\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\" showFirstLastButtons>\n      </mat-paginator>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/housingunit/housingunit/add-hunit.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/housingunit/housingunit/add-hunit.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\">\n    <form [formGroup]=\"infoForm\">\n        <div fxFlex>\n            <h2 class=\"text-muted text-center fw-600 mb-3\">{{title}}</h2>\n            <mat-form-field appearance=\"outline\" class=\"w-100 mt-2\">\n                <mat-icon matPrefix class=\"mr-1 text-muted\">group</mat-icon>\n                <mat-label>Status</mat-label>\n                <mat-select placeholder=\"Select User Type\" formControlName=\"status\">\n                    <mat-option *ngFor=\"let type of status\" [value]=\"type.name\">\n                        {{type.name}}\n                    </mat-option>\n                </mat-select>\n                <mat-error *ngIf=\"infoForm.controls.status.errors?.required\">Status is required\n                </mat-error>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                <mat-label>House Number</mat-label>\n                <input matInput placeholder=\"House Number\" formControlName=\"hnumber\" required autocomplete=\"off\">\n                <mat-error *ngIf=\"infoForm.controls.hnumber.errors?.required\">House number is required</mat-error>\n                <mat-error *ngIf=\"infoForm.controls.hnumber.hasError('minlength')\">Number isn't long enough, minimum of\n                    3\n                    characters</mat-error>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                <mat-label>Floor </mat-label>\n                <input type=\"number\" inputmode=\"numeric\" matInput placeholder=\"Floor\" formControlName=\"floor\" onlyNumber\n                    autocomplete=\"off\">\n            </mat-form-field>\n\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                <mat-label>Description</mat-label>\n                <textarea matInput placeholder=\"Description\" formControlName=\"description\" required\n                    autocomplete=\"off\"></textarea>\n                <mat-error *ngIf=\"infoForm.controls.description.errors?.required\">Description is required</mat-error>\n            </mat-form-field>\n            <div fxLayout=\"row wrap\">\n                <div class=\"text-center mt-2 btn-padding\" fxFlex=\"48\">\n                    <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase w-100\" \n                        [mat-dialog-close]=\"infoForm.value\">Save</button>\n                </div>\n                <div class=\"text-center mt-2 btn-padding\" fxFlex=\"48\">\n                    <button mat-stroked-button color=\"primary\"  class=\"uppercase w-100\"\n                        (click)=\"closeDialog()\">Cancel</button>\n                </div>\n            </div>\n\n\n\n        </div>\n\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/housingunit/housingunit/housingunit.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/housingunit/housingunit/housingunit.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\">\n    <div fxFlex=\"100\" class=\"header-banner\">\n        <div fxLayout=\"wrap\" class=\"w-100\" style=\"border: 1px solid #cfc387;\">\n            <div class=\"btn-padding slide-item\" [style.background-image]=\"'url(' +img(check(property))+')'\"\n                style=\"width: 150px;height: 136px;margin: 16px;\"></div>\n            <div fxFlex fxLayout=\"column\" class=\"btn-padding\">\n                <h2>{{property.title}}</h2>\n                <span> {{property.city}}</span>\n                <span> {{property.formattedAddress}}</span>\n                <p>Bedroooms: {{property.bedrooms}} &nbsp; Units: {{total}}</p>\n                <div>\n                    <button mat-flat-button color=\"primary\" fxLayoutAlign=\"end end\" (click)=\"openDialog()\">\n                        <mat-icon class=\"mat-18\">add</mat-icon> Add Hunits\n                    </button>\n                </div>\n\n            </div>\n        </div>\n        <br />\n        <mat-form-field appearance=\"outline\" class=\"w-100\">\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter hunits\" autocomplete=\"off\">\n        </mat-form-field>\n        <div class=\"table-wrapper w-100\">\n            <mat-table [dataSource]=\"dataSource\" matSort class=\"w-100\">\n\n                <!-- ID Column -->\n                <ng-container matColumnDef=\"id\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>\n                    <mat-cell *matCellDef=\"let hunit;let i = index;\"> {{i+1}} </mat-cell>\n                </ng-container>\n\n                <!-- House Number-->\n                <ng-container matColumnDef=\"hnumber\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> HNo. </mat-header-cell>\n                    <mat-cell *matCellDef=\"let hunit\"><a [routerLink]=\"['/hunits', hunit._id ]\"\n                            class=\"property-name\">{{hunit.hnumber}}</a></mat-cell>\n                </ng-container>\n\n                <!-- Published Column -->\n                <ng-container matColumnDef=\"balance\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> Bill Amount </mat-header-cell>\n                    <mat-cell *matCellDef=\"let hunit\" [ngStyle]=\"{'color' : (hunit.bills-hunit.payments) > 1 ? 'red' : 'darkgreen'}\"> {{ hunit.bills-hunit.payments | currency : 'KSH' : 'symbol' : '1.0'}} </mat-cell>\n                </ng-container>\n\n                <!-- House Column -->\n                <ng-container matColumnDef=\"status\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> Status </mat-header-cell>\n                    <mat-cell *matCellDef=\"let hunit\"><a [routerLink]=\"['/hunits', hunit._id ]\"\n                            class=\"property-name\">{{hunit.status}}</a></mat-cell>\n                </ng-container>\n\n\n                <!-- Actions Column -->\n                <ng-container matColumnDef=\"actions\">\n                    <mat-header-cell *matHeaderCellDef> Actions </mat-header-cell>\n                    <mat-cell *matCellDef=\"let hunit\">\n                        <button mat-icon-button color=\"primary\" (click)=\"openEditDialog(hunit)\" matTooltip=\"Edit hunit\">\n                            <mat-icon>edit</mat-icon>\n                        </button>\n                        <a [routerLink]=\"['/account/singleunit', hunit._id]\" mat-icon-button color=\"primary\"\n                             matTooltip=\"Details\" class=\"remove\">\n                            <mat-icon>list_alt</mat-icon>\n                        </a>\n                        <button mat-icon-button color=\"warn\" (click)=\"remove(hunit)\" matTooltip=\"Remove\" class=\"remove\">\n                            <mat-icon>delete</mat-icon>\n                        </button>\n\n                    </mat-cell>\n                </ng-container>\n\n                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                <mat-row *matRowDef=\"let hunit; columns: displayedColumns;let i = index\">\n                </mat-row>\n            </mat-table>\n            <p *ngIf=\"dataSource?.data.leng=== 0\" class=\"py-5 mb-0 text-center\">No data available</p>\n        </div>\n        <mat-paginator [length]=\"total\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\" showFirstLastButtons>\n        </mat-paginator>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/housingunit/housingunit/single-unit/single-unit.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/housingunit/housingunit/single-unit/single-unit.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\">\n    <div fxLayout=\"wrap\" class=\"w-100\" style=\"border: 1px solid #cfc387;\">\n\n        <div fxFlex fxLayout=\"column\" class=\"btn-padding\">\n            <h2 class=\"primary-color\">\n                <mat-icon style=\"font-size:16px;\">apartment</mat-icon>{{hunit.hnumber}}\n            </h2>\n            <!-- <span> {{hunit.hnumber}}</span> -->\n            <!-- <span> {{property.formattedAddress}}</span>\n        <p>Bedroooms: {{property.bedrooms}} &nbsp; Units: {{total}}</p> -->\n\n        </div>\n    </div>\n    <div class=\"w-100\">\n        <mat-tab-group mat-align-tabs=\"end\">\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <mat-icon class=\"example-tab-icon\">supervisor_account</mat-icon>\n                    Tenants\n                </ng-template>\n                <app-tenant></app-tenant>\n            </mat-tab>\n\n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <mat-icon class=\"example-tab-icon\">receipt_long</mat-icon>\n                    Bills\n                </ng-template>\n                <app-bill></app-bill>\n            </mat-tab>\n            \n            <mat-tab>\n                <ng-template mat-tab-label>\n                    <mat-icon class=\"example-tab-icon\">payment</mat-icon>\n                    Payments\n                </ng-template>\n                <app-payment></app-payment>\n            </mat-tab>\n           \n        </mat-tab-group>\n\n    </div>\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/my-properties/my-properties.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/my-properties/my-properties.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\">\r\n  <div fxFlex=\"100\" class=\"\">\r\n    <div class=\"\">\r\n      <h1 class=\"bg-primary p-3 title\">{{pgroup.title}}</h1>\r\n    </div>\r\n    <div class=\"w-100 btn-padding mt-3\" fxLayout=\"row wrap\" fxLayoutAlign=\"end center\">\r\n      <a mat-stroked-button color=\"primary\"  fxLayoutAlign=\"center center\"  [routerLink]=\"['/account/submit-property', pgroupId ]\">\r\n        <mat-icon>add_box</mat-icon> Add New Property\r\n      </a>\r\n    </div>\r\n    <mat-form-field appearance=\"outline\" class=\"w-100\">\r\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter properties\" autocomplete=\"off\">\r\n    </mat-form-field>\r\n    <div class=\"table-wrapper\">\r\n      <table mat-table [dataSource]=\"dataSource\" matSort class=\"w-100\">\r\n\r\n        <!-- ID Column -->\r\n        <ng-container matColumnDef=\"id\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\r\n          <td mat-cell *matCellDef=\"let property;let i = index;\"> {{i+1}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Image Column -->\r\n        <ng-container matColumnDef=\"image\">\r\n          <th mat-header-cell *matHeaderCellDef> Image </th>\r\n          <td mat-cell *matCellDef=\"let property\"><img\r\n              [src]=\"property.gallery.length>0?img(property.gallery[0].medium):null\" [style.width.px]=\"100\"\r\n              class=\"d-block\">\r\n          </td>\r\n        </ng-container>\r\n\r\n        <!-- Title Column -->\r\n        <ng-container matColumnDef=\"title\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Title </th>\r\n          <td mat-cell *matCellDef=\"let property\"><a [routerLink]=\"['/properties', property._id ]\"\r\n              class=\"property-name\">{{property.title}}</a></td>\r\n        </ng-container>\r\n\r\n        <!-- Published Column -->\r\n        <ng-container matColumnDef=\"published\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Published </th>\r\n          <td mat-cell *matCellDef=\"let property\"> {{property.published | date:\"dd MMMM, yyyy\"}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Views Column -->\r\n        <ng-container matColumnDef=\"views\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Views </th>\r\n          <td mat-cell *matCellDef=\"let property\"> {{property.views}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Actions Column -->\r\n        <ng-container matColumnDef=\"actions\">\r\n          <th mat-header-cell *matHeaderCellDef> Actions </th>\r\n          <td mat-cell *matCellDef=\"let property\">\r\n            <a [routerLink]=\"['/account/my-properties', property._id]\" mat-icon-button color=\"primary\"\r\n              matTooltip=\"Edit property\">\r\n              <mat-icon>edit</mat-icon>\r\n            </a>\r\n            <a [routerLink]=\"['/account/hunits', property._id]\" mat-icon-button color=\"primary\"\r\n             matTooltip=\"Details\" class=\"remove\">\r\n              <mat-icon>business</mat-icon>\r\n            </a>\r\n            <button mat-icon-button color=\"warn\" (click)=\"remove(property)\" matTooltip=\"Remove\" class=\"remove\">\r\n              <mat-icon>delete</mat-icon>\r\n            </button>\r\n\r\n          </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let property; columns: displayedColumns;let i = index\">\r\n        </tr>\r\n      </table>\r\n      <p *ngIf=\"dataSource?.data.length === 0\" class=\"py-5 mb-0 text-center\">No data available</p>\r\n    </div>\r\n    <mat-paginator [length]=\"total\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\" showFirstLastButtons>\r\n    </mat-paginator>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/profile/profile.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/profile/profile.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"infoForm\" (ngSubmit)=\"onInfoFormSubmit(infoForm.value)\">\n    <div fxLayout=\"row wrap\">\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-3\">\n            <h2 class=\"text-muted text-center fw-600 mb-3\">Account details</h2>\n            <mat-form-field appearance=\"outline\" class=\"w-100 mt-2\">\n                <mat-icon matPrefix class=\"mr-1 text-muted\">group</mat-icon>\n                <mat-label>User type</mat-label>\n                <mat-select placeholder=\"Select User Type\" formControlName=\"userType\">\n                    <mat-option *ngFor=\"let type of userTypes\" [value]=\"type\">\n                        {{type.name}}\n                    </mat-option>\n                </mat-select>\n                <mat-error *ngIf=\"infoForm.controls.userType.errors?.required\">User type is required\n                </mat-error>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                <mat-label>Name</mat-label>\n                <input matInput placeholder=\"Name\" formControlName=\"fullName\" required autocomplete=\"off\">\n                <mat-error *ngIf=\"infoForm.controls.fullName.errors?.required\">Name is required</mat-error>\n                <mat-error *ngIf=\"infoForm.controls.fullName.hasError('minlength')\">Name isn't long enough, minimum of 3\n                    characters</mat-error>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                <mat-label>Phone</mat-label>\n                <input matInput placeholder=\"Phone\" formControlName=\"phone\" required onlyNumber autocomplete=\"off\">\n                <mat-error *ngIf=\"infoForm.controls.phone.errors?.required\">Phone is required</mat-error>\n            </mat-form-field>\n\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                <mat-label>Id number</mat-label>\n                <input matInput placeholder=\"Id number\" formControlName=\"idNumber\" onlyNumber autocomplete=\"off\">\n\n            </mat-form-field>\n            <mat-slide-toggle formControlName=\"receiveNewsletter\" class=\"my-2\">Receive Newsletter\n            </mat-slide-toggle>\n\n        </div>\n\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-3\">\n            <div class=\"mb-3\">\n                <input-file placeholder=\"Change profile picture\" formControlName=\"image\" fileLimit=\"1\"\n                    fileAccept=\"image/*\" [linkEnabled]=\"true\"></input-file>\n            </div>\n        </div>\n\n        <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-3\">\n            <div class=\"mb-3\">\n                <a mat-icon-button [routerLink]=\"['/account/security']\">\n                    <mat-icon class=\"mat-18\">lock</mat-icon> Change Password\n                </a>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"text-center mt-2 w-100\" style=\"margin-bottom: 200px;\" fxLayout=\"row wrap\"\n        fxLayoutAlign=\"space-between center\">\n        <button fxFlex mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\">Update </button>\n        <div style=\"width: 10px;\"></div>\n        <button fxFlex mat-stroked-button color=\"primary\" class=\"uppercase \" (click)=\"logOut()\"> log out </button>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/security/security.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/security/security.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\">\n    \n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"p-3\" ngClass.sm=\"mt-2\" ngClass.xs=\"mt-2\">\n        <h2 class=\"text-muted text-center fw-600 mb-3\">Password change</h2>\n        <form [formGroup]=\"passwordForm\" (ngSubmit)=\"onPasswordFormSubmit(passwordForm.value)\">            \n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                <mat-label>Current Password</mat-label>\n                <input matInput placeholder=\"Current Password\" formControlName=\"currentPassword\" type=\"password\" minlength=\"6\" required autocomplete=\"off\">\n                <mat-error *ngIf=\"passwordForm.controls.currentPassword.errors?.required\">Current Password is required</mat-error>\n                <mat-error *ngIf=\"passwordForm.controls.currentPassword.hasError('minlength')\">Current Password isn't long enough, minimum of 6 characters</mat-error>\n            </mat-form-field>\n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n                <mat-label>New Password</mat-label>\n                <input matInput placeholder=\"New Password\" formControlName=\"newPassword\" type=\"password\" minlength=\"6\" required autocomplete=\"off\">\n                <mat-error *ngIf=\"passwordForm.controls.newPassword.errors?.required\">New Password is required</mat-error>\n                <mat-error *ngIf=\"passwordForm.controls.newPassword.hasError('minlength')\">New Password isn't long enough, minimum of 6 characters</mat-error>\n            </mat-form-field> \n            <mat-form-field appearance=\"outline\" class=\"w-100\">\n              <mat-label>Confirm New Password</mat-label>\n              <input matInput placeholder=\"Confirm New Password\" formControlName=\"confirmNewPassword\" type=\"password\" required autocomplete=\"off\">\n              <mat-error *ngIf=\"passwordForm.controls.confirmNewPassword.errors?.required\">Confirm New Password is required</mat-error>\n              <mat-error *ngIf=\"passwordForm.controls.confirmNewPassword.hasError('mismatchedPasswords')\">Passwords do not match</mat-error>\n            </mat-form-field>\n            <div class=\"text-center mt-2\">\n                <button mat-raised-button color=\"primary\" type=\"submit\" class=\"uppercase\">Change password</button>\n            </div>\n        </form>\n    </div>\n</div> \n");

/***/ }),

/***/ "./src/app/pages/account/account.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/account/account.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".account-sidenav {\n  width: 280px;\n  padding: 2px;\n  margin: 0px;\n}\n.account-sidenav .mat-nav-list {\n  box-sizing: border-box;\n}\n.account-sidenav .mat-nav-list .mat-list-item {\n  height: 36px;\n  font-size: 14px;\n}\nbutton {\n  border-radius: 10px !important;\n}\n.sector {\n  padding: 1rem !important;\n}\n@media screen and (max-width: 960px) {\n  .sector {\n    padding: 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0o7QUFBSTtFQUNJLHNCQUFBO0FBRVI7QUFEUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FBR1o7QUFHQTtFQUNJLDhCQUFBO0FBQUo7QUFFQTtFQUNJLHdCQUFBO0FBQ0o7QUFFQTtFQUNJO0lBQ0ksdUJBQUE7RUFDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY291bnQtc2lkZW5hdntcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgLm1hdC1uYXYtbGlzdHtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIC5tYXQtbGlzdC1pdGVte1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5idXR0b24ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5zZWN0b3J7XHJcbiAgICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICAuc2VjdG9ye1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbi8vIC5hY2NvdW50LWNvbnRlbnR7XHJcbi8vICAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuLy8gICAgIHBhZGRpbmc6IDJweDtcclxuLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgICAmLnAtbGVmdHtcclxuLy8gICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbi8vICAgICB9XHJcbi8vICAgICAuaGVhZGVyLXJvd3tcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuLy8gICAgICAgICBoZWlnaHQ6IDU2cHg7XHJcbi8vICAgICB9XHJcbi8vICAgICAuYWNjb3VudC13cmFwcGVye1xyXG4vLyAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbi8vICAgICAgICAgcGFkZGluZzogMTZweDtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIGJvZHl7XHJcbi8vICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbi8vIH1cclxuXHJcbi8vIC5hY2NvdW50LXNpZGVuYXZ7XHJcbi8vICAgICB3aWR0aDogMjgwcHg7IFxyXG4vLyAgICAgZmxvYXQ6IGxlZnQ7XHJcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAxNnB4OyAgXHJcbi8vICAgICBib3JkZXI6IDAgIWltcG9ydGFudDsgXHJcbi8vICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4vLyAgICAgLm1hdC1kcmF3ZXItaW5uZXItY29udGFpbmVye1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuLy8gICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuLy8gICAgICAgICAubWF0LWNhcmR7XHJcbi8vICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuLy8gICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuLy8gICAgICAgICAgICAgLm1hdC1uYXYtbGlzdHtcclxuLy8gICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbi8vICAgICAgICAgICAgICAgICAubWF0LWxpc3QtaXRlbXtcclxuLy8gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSBcclxuLy8gfSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/account/account.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/account/account.component.ts ***!
  \****************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _register_store_user_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../register/store/user.selectors */ "./src/app/pages/register/store/user.selectors.ts");
/* harmony import */ var _register_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../register/services/auth.service */ "./src/app/pages/register/services/auth.service.ts");
/* harmony import */ var _register_store_user_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../register/store/user.actions */ "./src/app/pages/register/store/user.actions.ts");
/* harmony import */ var _properties_utils_to_formdata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../properties/utils/to-formdata */ "./src/app/pages/properties/utils/to-formdata.ts");
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







let AccountComponent = class AccountComponent {
    constructor(router, store, authService) {
        this.router = router;
        this.store = store;
        this.authService = authService;
        this.psConfig = {
            wheelPropagation: true
        };
        this.sidenavOpen = true;
        this.links = [
            { name: 'My Properties', href: 'property-groups', icon: 'apartment' },
            { name: 'Manage Properties', href: 'featured', icon: 'settings' },
            { name: 'Customer Feedback', href: 'feedback', icon: 'list_alt' },
            { name: 'Blog posts', href: 'blog', icon: 'how_to_reg' },
            { name: 'Mailing list', href: 'mailing-list', icon: 'attach_email' },
            { name: 'Bookmarks', href: 'favorites', icon: 'bookmarks' },
            { name: 'Account', href: 'profile', icon: 'person' },
            { name: 'Logout', href: '/login', icon: 'power_settings_new' },
        ];
    }
    ngOnInit() {
        if (window.innerWidth < 960) {
            this.sidenavOpen = false;
        }
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_register_store_user_selectors__WEBPACK_IMPORTED_MODULE_3__["selectCurrentUser"])).subscribe(user => this.checkUser(user));
    }
    checkUser(user) {
        this.user = user;
    }
    onWindowResize() {
        (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
    }
    openLink($event, link) {
        if (link.name === 'Logout') {
            $event.stopPropagation();
            this.authService.logout();
            this.store.dispatch(new _register_store_user_actions__WEBPACK_IMPORTED_MODULE_5__["UserLogoutAction"]());
            this.router.navigate(['/login']);
        }
        return;
        // navigates to /test
    }
    img(url) {
        if (url) {
            return Object(_properties_utils_to_formdata__WEBPACK_IMPORTED_MODULE_6__["img"])(url);
        }
        return 'assets/images/others/user.jpg';
    }
    ngAfterViewInit() {
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (window.innerWidth < 960) {
                    this.sidenav.close();
                }
            }
        });
    }
};
AccountComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _register_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
AccountComponent.propDecorators = {
    sidenav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['sidenav',] }],
    onWindowResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize',] }]
};
AccountComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-account',
        template: __importDefault(__webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./account.component.scss */ "./src/app/pages/account/account.component.scss")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _register_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], AccountComponent);



/***/ }),

/***/ "./src/app/pages/account/account.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.module.ts ***!
  \*************************************************/
/*! exports provided: routes, AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_input_file__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-input-file */ "./node_modules/ngx-input-file/__ivy_ngcc__/fesm2015/ngx-input-file.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.component */ "./src/app/pages/account/account.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/pages/account/dashboard/dashboard.component.ts");
/* harmony import */ var _my_properties_my_properties_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my-properties/my-properties.component */ "./src/app/pages/account/my-properties/my-properties.component.ts");
/* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./favorites/favorites.component */ "./src/app/pages/account/favorites/favorites.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/pages/account/profile/profile.component.ts");
/* harmony import */ var _edit_property_edit_property_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-property/edit-property.component */ "./src/app/pages/account/edit-property/edit-property.component.ts");
/* harmony import */ var _register_services_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../register/services/auth.guard */ "./src/app/pages/register/services/auth.guard.ts");
/* harmony import */ var _security_security_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./security/security.component */ "./src/app/pages/account/security/security.component.ts");
/* harmony import */ var _submit_property_submit_property_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../submit-property/submit-property.component */ "./src/app/pages/submit-property/submit-property.component.ts");
/* harmony import */ var _housingunit_services_hunit_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./housingunit/services/hunit.service */ "./src/app/pages/account/housingunit/services/hunit.service.ts");
/* harmony import */ var _housingunit_housingunit_housingunit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./housingunit/housingunit/housingunit.component */ "./src/app/pages/account/housingunit/housingunit/housingunit.component.ts");
/* harmony import */ var _housingunit_housingunit_single_unit_single_unit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./housingunit/housingunit/single-unit/single-unit.component */ "./src/app/pages/account/housingunit/housingunit/single-unit/single-unit.component.ts");
/* harmony import */ var src_app_shared_pgroup_ui_pgroup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/pgroup/ui/pgroup.component */ "./src/app/shared/pgroup/ui/pgroup.component.ts");
/* harmony import */ var _featured_featured_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./featured/featured.component */ "./src/app/pages/account/featured/featured.component.ts");
/* harmony import */ var _submit_property_submit_property_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../submit-property/submit-property.module */ "./src/app/pages/submit-property/submit-property.module.ts");
/* harmony import */ var src_app_shared_feedback_ui_feedback_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/feedback/ui/feedback.component */ "./src/app/shared/feedback/ui/feedback.component.ts");
/* harmony import */ var src_app_shared_publication_ui_publication_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/shared/publication/ui/publication.component */ "./src/app/shared/publication/ui/publication.component.ts");
/* harmony import */ var src_app_shared_email_ui_email_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/shared/email/ui/email.component */ "./src/app/shared/email/ui/email.component.ts");
/* harmony import */ var src_app_shared_owner_ui_owner_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/shared/owner/ui/owner.component */ "./src/app/shared/owner/ui/owner.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























const routes = [
    {
        path: '',
        component: _account_component__WEBPACK_IMPORTED_MODULE_6__["AccountComponent"], children: [
            { path: '', redirectTo: 'profile', pathMatch: 'full' },
            { path: 'property-groups', component: src_app_shared_pgroup_ui_pgroup_component__WEBPACK_IMPORTED_MODULE_18__["PgroupComponent"] },
            { path: 'property-groups/:id', component: _my_properties_my_properties_component__WEBPACK_IMPORTED_MODULE_8__["MyPropertiesComponent"] },
            { path: 'my-properties', component: _my_properties_my_properties_component__WEBPACK_IMPORTED_MODULE_8__["MyPropertiesComponent"] },
            { path: 'my-properties/:id', component: _edit_property_edit_property_component__WEBPACK_IMPORTED_MODULE_11__["EditPropertyComponent"] },
            { path: 'favorites', component: _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_9__["FavoritesComponent"] },
            { path: 'blog', component: src_app_shared_publication_ui_publication_component__WEBPACK_IMPORTED_MODULE_22__["PublicationComponent"] },
            { path: 'feedback', component: src_app_shared_feedback_ui_feedback_component__WEBPACK_IMPORTED_MODULE_21__["FeedbackComponent"] },
            { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"] },
            { path: 'submit-property', component: _submit_property_submit_property_component__WEBPACK_IMPORTED_MODULE_14__["SubmitPropertyComponent"] },
            { path: 'submit-property/:id', component: _submit_property_submit_property_component__WEBPACK_IMPORTED_MODULE_14__["SubmitPropertyComponent"] },
            { path: 'hunits/:id', component: _housingunit_housingunit_housingunit_component__WEBPACK_IMPORTED_MODULE_16__["HousingunitComponent"] },
            { path: 'singleunit/:id', component: _housingunit_housingunit_single_unit_single_unit_component__WEBPACK_IMPORTED_MODULE_17__["SingleUnitComponent"] },
            { path: 'owner/:id', component: src_app_shared_owner_ui_owner_component__WEBPACK_IMPORTED_MODULE_24__["OwnerComponent"] },
            { path: 'security', component: _security_security_component__WEBPACK_IMPORTED_MODULE_13__["SecurityComponent"] },
            { path: 'mailing-list', component: src_app_shared_email_ui_email_component__WEBPACK_IMPORTED_MODULE_23__["EmailComponent"] },
            { path: 'featured', component: _featured_featured_component__WEBPACK_IMPORTED_MODULE_19__["FeaturedComponent"] },
        ], canActivate: [_register_services_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]],
    },
];
let AccountModule = class AccountModule {
};
AccountModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
            _account_component__WEBPACK_IMPORTED_MODULE_6__["AccountComponent"],
            _my_properties_my_properties_component__WEBPACK_IMPORTED_MODULE_8__["MyPropertiesComponent"],
            _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_9__["FavoritesComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
            _edit_property_edit_property_component__WEBPACK_IMPORTED_MODULE_11__["EditPropertyComponent"],
            _security_security_component__WEBPACK_IMPORTED_MODULE_13__["SecurityComponent"],
            _housingunit_housingunit_housingunit_component__WEBPACK_IMPORTED_MODULE_16__["HousingunitComponent"],
            _housingunit_housingunit_housingunit_component__WEBPACK_IMPORTED_MODULE_16__["AddHunitComponent"],
            _housingunit_housingunit_single_unit_single_unit_component__WEBPACK_IMPORTED_MODULE_17__["SingleUnitComponent"],
            _featured_featured_component__WEBPACK_IMPORTED_MODULE_19__["FeaturedComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            ngx_input_file__WEBPACK_IMPORTED_MODULE_4__["InputFileModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"],
            _submit_property_submit_property_module__WEBPACK_IMPORTED_MODULE_20__["SubmitPropertyModule"],
        ],
        providers: [_housingunit_services_hunit_service__WEBPACK_IMPORTED_MODULE_15__["HunitService"]],
    })
], AccountModule);



/***/ }),

/***/ "./src/app/pages/account/dashboard/dashboard.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/account/dashboard/dashboard.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/account/dashboard/dashboard.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/account/dashboard/dashboard.component.ts ***!
  \****************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
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

let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent.ctorParameters = () => [];
DashboardComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-dashboard',
        template: __importDefault(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/dashboard/dashboard.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/pages/account/dashboard/dashboard.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);



/***/ }),

/***/ "./src/app/pages/account/edit-property/edit-property.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/account/edit-property/edit-property.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".edit-property .sebm-google-map-container {\n  height: 400px;\n}\n.edit-property .step-section {\n  padding: 20px 10px 0;\n  border-radius: 4px;\n  margin: 8px 8px 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9lZGl0LXByb3BlcnR5L2VkaXQtcHJvcGVydHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0FBQVI7QUFFSTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUFSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWNjb3VudC9lZGl0LXByb3BlcnR5L2VkaXQtcHJvcGVydHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdC1wcm9wZXJ0eSB7IFxyXG4gICAgLnNlYm0tZ29vZ2xlLW1hcC1jb250YWluZXIge1xyXG4gICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICB9IFxyXG4gICAgLnN0ZXAtc2VjdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAxMHB4IDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIG1hcmdpbjogOHB4IDhweCAxNnB4O1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/account/edit-property/edit-property.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/account/edit-property/edit-property.component.ts ***!
  \************************************************************************/
/*! exports provided: EditPropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPropertyComponent", function() { return EditPropertyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _properties_store_property_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../properties/store/property.actions */ "./src/app/pages/properties/store/property.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _properties_utils_to_formdata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../properties/utils/to-formdata */ "./src/app/pages/properties/utils/to-formdata.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
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










let EditPropertyComponent = class EditPropertyComponent {
    constructor(appService, activatedRoute, fb, mapsAPILoader, ngZone, location, snackBar, store) {
        this.appService = appService;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.location = location;
        this.snackBar = snackBar;
        this.store = store;
        this.features = [];
        this.propertyTypes = [];
        this.propertyStatuses = [];
        this.cities = [];
        this.neighborhoods = [];
        this.streets = [];
        this.lat = 40.678178;
        this.lng = -73.944158;
        this.zoom = 12;
        this.city = '';
        this.step = 0;
    }
    goBack() {
        this.location.back();
    }
    ngOnInit() {
        this.features = this.appService.getFeatures();
        this.propertyTypes = this.appService.getPropertyTypes();
        this.propertyStatuses = this.appService.getPropertyStatuses();
        this.cities = this.appService.getCities();
        this.neighborhoods = this.appService.getNeighborhoods();
        this.streets = this.appService.getStreets();
        this.submitForm = this.fb.group({
            basic: this.fb.group({
                title: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                desc: null,
                shortDesc: null,
                priceDollar: null,
                priceEuro: null,
                propertyType: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                propertyStatus: null,
                gallery: null,
            }),
            address: this.fb.group({
                location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                zipCode: '',
                neighborhood: '',
                street: '',
            }),
            additional: this.fb.group({
                bedrooms: '',
                bathrooms: '',
                garages: '',
                area: '',
                yearBuilt: '',
                features: this.buildFeatures(),
            }),
            media: this.fb.group({
                videos: this.fb.array([this.createVideo()]),
                plans: this.fb.array([this.createPlan()]),
                additionalFeatures: this.fb.array([this.createFeature()]),
                featured: false,
                advertise: false,
            }),
        });
        this.placesAutocomplete();
        this.sub = this.activatedRoute.params.subscribe(params => {
            this.getPropertyById(params.id);
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    getPropertyById(id) {
        this.appService.getPropertyById(id).subscribe(data => {
            var _a, _b;
            console.log(data);
            this.property = data;
            this.submitForm.controls.basic.get('title').setValue(this.property.title);
            this.submitForm.controls.basic.get('desc').setValue(this.property.desc);
            this.submitForm.controls.basic.get('shortDesc').setValue(this.property.shortDesc);
            this.submitForm.controls.basic.get('priceDollar').setValue((this.property.priceDollar.sale) ? this.property.priceDollar.sale : this.property.priceDollar.rent);
            this.submitForm.controls.basic.get('priceEuro').setValue((this.property.priceEuro.sale) ? this.property.priceEuro.sale : this.property.priceEuro.rent);
            this.submitForm.controls.basic.get('propertyType').setValue(this.propertyTypes.filter(p => p.name == this.property.propertyType)[0]);
            this.submitForm.controls.additional.get('bedrooms').setValue(this.property.bedrooms);
            this.submitForm.controls.additional.get('bathrooms').setValue(this.property.bathrooms);
            this.submitForm.controls.additional.get('garages').setValue(this.property.garages);
            this.submitForm.controls.additional.get('area').setValue(this.property.area.value);
            this.submitForm.controls.additional.get('yearBuilt').setValue(this.property.yearBuilt);
            this.submitForm.controls.address.get('city').setValue({ id: 1, name: this.property.city });
            this.submitForm.controls.address.get('zipCode').setValue(this.property.zipCode);
            this.submitForm.controls.address.get('street').setValue(this.property.street);
            this.city = this.property.city;
            const statusList = [];
            this.propertyStatuses.forEach(status => {
                this.property.propertyStatus.forEach(name => {
                    if (status.name == name) {
                        statusList.push(status);
                    }
                });
            });
            this.submitForm.controls.basic.get('propertyStatus').setValue(statusList);
            const images = [];
            this.property.gallery.forEach(item => {
                const image = {
                    link: item.medium,
                    preview: Object(_properties_utils_to_formdata__WEBPACK_IMPORTED_MODULE_8__["img"])(item.medium),
                };
                images.push(image);
            });
            this.submitForm.controls.basic.get('gallery').setValue(images);
            this.submitForm.controls.address.get('location').setValue(this.property.formattedAddress);
            this.lat = ((_a = this.property) === null || _a === void 0 ? void 0 : _a.location) != null ? this.property.location.lat : 0;
            this.lng = ((_b = this.property) === null || _b === void 0 ? void 0 : _b.location) != null ? this.property.location.lng : 0;
            // this.getAddress();
            this.features.forEach(feature => {
                this.property.features.forEach(name => {
                    if (feature.name == name) {
                        feature.selected = true;
                    }
                });
            });
            this.submitForm.controls.additional.get('features').setValue(this.features);
            const videos = this.submitForm.controls.media.get('videos');
            while (videos.length) {
                videos.removeAt(0);
            }
            this.property.videos.forEach(video => videos.push(this.fb.group(video)));
            const plans = this.submitForm.controls.media.get('plans');
            while (plans.length) {
                plans.removeAt(0);
            }
            this.property.plans.forEach(plan => {
                const p = {
                    id: plan.id,
                    name: plan.name,
                    desc: plan.desc,
                    area: plan.area.value,
                    rooms: plan.rooms,
                    baths: plan.baths,
                    image: null,
                };
                plans.push(this.fb.group(p));
            });
            this.property.plans.forEach((plan, index) => {
                const image = {
                    link: plan.image,
                    preview: plan.image,
                };
                this.submitForm.controls.media.get('plans').controls[index].controls.image.setValue([image]);
            });
            const additionalFeatures = this.submitForm.controls.media.get('additionalFeatures');
            while (additionalFeatures.length) {
                additionalFeatures.removeAt(0);
            }
            this.property.additionalFeatures.forEach(feature => additionalFeatures.push(this.fb.group(feature)));
            this.submitForm.controls.media.get('featured').setValue(this.property.featured);
            this.submitForm.controls.media.get('advertise').setValue(this.property.advertise);
        });
    }
    // -------------------- Address ---------------------------
    onSelectCity() {
        this.submitForm.controls.address.get('neighborhood').setValue(null, { emitEvent: false });
        this.submitForm.controls.address.get('street').setValue(null, { emitEvent: false });
    }
    onSelectNeighborhood() {
        this.submitForm.controls.address.get('street').setValue(null, { emitEvent: false });
    }
    setCurrentPosition() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
            });
        }
    }
    placesAutocomplete() {
        this.mapsAPILoader.load().then(() => {
            const autocomplete = new google.maps.places.Autocomplete(this.addressAutocomplete.nativeElement, {
                types: ['address'],
            });
            autocomplete.addListener('place_changed', () => {
                this.ngZone.run(() => {
                    const place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    this.lat = place.geometry.location.lat();
                    this.lng = place.geometry.location.lng();
                    this.getAddress();
                });
            });
        });
    }
    getAddress() {
        this.appService.getAddress(this.lat, this.lng).subscribe(response => {
            const responseResult = response;
            const address = responseResult.results[0].formatted_address;
            this.submitForm.controls.address.get('location').setValue(address);
            this.setAddresses(responseResult.results[0]);
        });
    }
    onMapClick(e) {
        this.lat = e.coords.lat;
        this.lng = e.coords.lng;
        this.getAddress();
    }
    onMarkerClick(e) {
        console.log(e);
    }
    setAddresses(result) {
        alert(';');
        this.submitForm.controls.address.get('city').setValue(null);
        this.submitForm.controls.address.get('zipCode').setValue(null);
        this.submitForm.controls.address.get('street').setValue(null);
        let newCity, newStreet, newNeighborhood;
        result.address_components.forEach(item => {
            if (item.types.indexOf('locality') > -1) {
                if (this.cities.filter(city => city.name == item.long_name)[0]) {
                    newCity = this.cities.filter(city => city.name == item.long_name)[0];
                }
                else {
                    newCity = { id: this.cities.length + 1, name: item.long_name };
                    this.cities.push(newCity);
                }
                this.submitForm.controls.address.get('city').setValue(newCity);
            }
            if (item.types.indexOf('postal_code') > -1) {
                this.submitForm.controls.address.get('zipCode').setValue(item.long_name);
            }
        });
        if (!newCity) {
            result.address_components.forEach(item => {
                if (item.types.indexOf('administrative_area_level_1') > -1) {
                    if (this.cities.filter(city => city.name == item.long_name)[0]) {
                        newCity = this.cities.filter(city => city.name == item.long_name)[0];
                    }
                    else {
                        newCity = {
                            id: this.cities.length + 1,
                            name: item.long_name,
                        };
                        this.cities.push(newCity);
                    }
                    this.submitForm.controls.address.get('city').setValue(newCity);
                }
            });
        }
        if (newCity) {
            result.address_components.forEach(item => {
                if (item.types.indexOf('neighborhood') > -1) {
                    const neighborhood = this.neighborhoods.filter(n => n.name == item.long_name && n.cityId == newCity.id)[0];
                    if (neighborhood) {
                        newNeighborhood = neighborhood;
                    }
                    else {
                        newNeighborhood = {
                            id: this.neighborhoods.length + 1,
                            name: item.long_name,
                            cityId: newCity.id,
                        };
                        this.neighborhoods.push(newNeighborhood);
                    }
                    this.neighborhoods = [...this.neighborhoods];
                    this.submitForm.controls.address.get('neighborhood').setValue([newNeighborhood]);
                }
            });
        }
        if (newCity) {
            result.address_components.forEach(item => {
                if (item.types.indexOf('route') > -1) {
                    if (this.streets.filter(street => street.name == item.long_name && street.cityId == newCity.id)[0]) {
                        newStreet = this.streets.filter(street => street.name == item.long_name && street.cityId == newCity.id)[0];
                    }
                    else {
                        newStreet = {
                            id: this.streets.length + 1,
                            name: item.long_name,
                            cityId: newCity.id,
                            neighborhoodId: (newNeighborhood) ? newNeighborhood.id : null,
                        };
                        this.streets.push(newStreet);
                    }
                    this.streets = [...this.streets];
                    this.submitForm.controls.address.get('street').setValue([newStreet]);
                }
            });
        }
    }
    // -------------------- Additional ---------------------------
    buildFeatures() {
        const arr = this.features.map(feature => {
            return this.fb.group({
                id: feature.id,
                name: feature.name,
                selected: feature.selected,
            });
        });
        return this.fb.array(arr);
    }
    // -------------------- Media ---------------------------
    createVideo() {
        return this.fb.group({
            id: null,
            name: null,
            link: null,
        });
    }
    addVideo() {
        const videos = this.submitForm.controls.media.get('videos');
        videos.push(this.createVideo());
    }
    deleteVideo(index) {
        const videos = this.submitForm.controls.media.get('videos');
        videos.removeAt(index);
    }
    createPlan() {
        return this.fb.group({
            id: null,
            name: null,
            desc: null,
            area: null,
            rooms: null,
            baths: null,
            image: null,
        });
    }
    addPlan() {
        const plans = this.submitForm.controls.media.get('plans');
        plans.push(this.createPlan());
    }
    deletePlan(index) {
        const plans = this.submitForm.controls.media.get('plans');
        plans.removeAt(index);
    }
    createFeature() {
        return this.fb.group({
            id: null,
            name: null,
            value: null,
        });
    }
    addFeature() {
        const features = this.submitForm.controls.media.get('additionalFeatures');
        features.push(this.createFeature());
    }
    deleteFeature(index) {
        const features = this.submitForm.controls.media.get('additionalFeatures');
        features.removeAt(index);
    }
    setStep(index) {
        this.step = index;
    }
    uploadProperty() {
        const propertyInput = this.submitForm.value;
        propertyInput._id = this.property._id;
        this.store.dispatch(new _properties_store_property_actions__WEBPACK_IMPORTED_MODULE_6__["PropertyUpdateAction"](propertyInput));
    }
    onSubmitForm(form) {
        if (this.submitForm.get(form).valid) {
            this.nextStep();
            if (form == 'media') {
                this.uploadProperty();
                this.snackBar.open('The property "' + this.property.title + '" has been updated.', '×', {
                    verticalPosition: 'top',
                    duration: 5000,
                });
            }
        }
    }
    nextStep() {
        this.step++;
    }
    prevStep() {
        this.step--;
    }
};
EditPropertyComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_4__["MapsAPILoader"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }
];
EditPropertyComponent.propDecorators = {
    addressAutocomplete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['addressAutocomplete',] }]
};
EditPropertyComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-edit-property',
        template: __importDefault(__webpack_require__(/*! raw-loader!./edit-property.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/edit-property/edit-property.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./edit-property.component.scss */ "./src/app/pages/account/edit-property/edit-property.component.scss")).default]
    }),
    __metadata("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _agm_core__WEBPACK_IMPORTED_MODULE_4__["MapsAPILoader"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
        _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]])
], EditPropertyComponent);



/***/ }),

/***/ "./src/app/pages/account/favorites/favorites.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/account/favorites/favorites.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvZmF2b3JpdGVzL2Zhdm9yaXRlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/account/favorites/favorites.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/account/favorites/favorites.component.ts ***!
  \****************************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
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





let FavoritesComponent = class FavoritesComponent {
    constructor(appService) {
        this.appService = appService;
        this.displayedColumns = ['id', 'image', 'title', 'actions'];
    }
    ngOnInit() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.appService.Data.favorites);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    remove(property) {
        const index = this.dataSource.data.indexOf(property);
        if (index !== -1) {
            this.dataSource.data.splice(index, 1);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.dataSource.data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
};
FavoritesComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }
];
FavoritesComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true },] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true },] }]
};
FavoritesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-favorites',
        template: __importDefault(__webpack_require__(/*! raw-loader!./favorites.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/favorites/favorites.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./favorites.component.scss */ "./src/app/pages/account/favorites/favorites.component.scss")).default]
    }),
    __metadata("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
], FavoritesComponent);



/***/ }),

/***/ "./src/app/pages/account/featured/featured.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/account/featured/featured.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".test {\n  border-radius: 10px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9mZWF0dXJlZC9mZWF0dXJlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY2NvdW50L2ZlYXR1cmVkL2ZlYXR1cmVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlc3R7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/account/featured/featured.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/account/featured/featured.component.ts ***!
  \**************************************************************/
/*! exports provided: FeaturedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedComponent", function() { return FeaturedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _properties_store_property_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../properties/store/property.selectors */ "./src/app/pages/properties/store/property.selectors.ts");
/* harmony import */ var src_app_shared_pgroup_store_pgroup_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/pgroup/store/pgroup.selectors */ "./src/app/shared/pgroup/store/pgroup.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_pgroup_store_pgroup_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/pgroup/store/pgroup.actions */ "./src/app/shared/pgroup/store/pgroup.actions.ts");
/* harmony import */ var _properties_store_property_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../properties/store/property.actions */ "./src/app/pages/properties/store/property.actions.ts");
/* harmony import */ var _properties_utils_to_formdata__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../properties/utils/to-formdata */ "./src/app/pages/properties/utils/to-formdata.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
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














let FeaturedComponent = class FeaturedComponent {
    constructor(appService, store, activatedRoute, router, mediaObserver) {
        this.appService = appService;
        this.store = store;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.mediaObserver = mediaObserver;
        this.displayedColumns = ['id', 'image', 'title', 'published', 'views', 'actions'];
        this.total = 0;
        this.pgroupId = '';
        this.viewType = 'grid';
        this.viewCol = 33.3;
        this.count = 8;
        this.properties = [];
        this.pgroup = { title: 'Properties' };
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
                this.viewCol = 33.3;
                // this.viewCol = 25;
            }
        });
    }
    ngOnInit() {
        this.appService.getProperties().subscribe(data => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            this.properties = data;
        });
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_properties_store_property_selectors__WEBPACK_IMPORTED_MODULE_7__["selectPropertyTotal"])).subscribe(total => {
            this.total = total;
        });
        this.activatedRoute.params.subscribe(params => {
            this.loadProperties({ page: 1, limit: 10, pgroup: params.id });
            this.pgroupId = params.id;
            this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(src_app_shared_pgroup_store_pgroup_selectors__WEBPACK_IMPORTED_MODULE_8__["selectAllPgroup"]))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(properties => properties.find(x => x._id === this.pgroupId)))
                .subscribe(item => { if (item) {
                this.pgroup = item;
            } });
            this.store.dispatch(new src_app_shared_pgroup_store_pgroup_actions__WEBPACK_IMPORTED_MODULE_10__["PgroupLoadAction"]({ _id: this.pgroupId }));
        });
        this.store.dispatch(new _properties_store_property_actions__WEBPACK_IMPORTED_MODULE_11__["PropertyLoadAction"]({ page: 1, limit: 10 }));
    }
    loadProperties(data) {
        this.store.dispatch(new _properties_store_property_actions__WEBPACK_IMPORTED_MODULE_11__["PropertyLoadAction"](data));
    }
    remove(property) {
        this.store.dispatch(new _properties_store_property_actions__WEBPACK_IMPORTED_MODULE_11__["PropertyDeleteAction"](property));
        const index = this.dataSource.data.indexOf(property);
        if (index !== -1) {
            this.dataSource.data.splice(index, 1);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.dataSource.data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    img(url) {
        return Object(_properties_utils_to_formdata__WEBPACK_IMPORTED_MODULE_12__["img"])(url);
    }
    ngOnDestroy() {
        this.watcher.unsubscribe();
    }
};
FeaturedComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["MediaObserver"] }
];
FeaturedComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true },] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true },] }]
};
FeaturedComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-featured',
        template: __importDefault(__webpack_require__(/*! raw-loader!./featured.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/featured/featured.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./featured.component.scss */ "./src/app/pages/account/featured/featured.component.scss")).default]
    }),
    __metadata("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
        _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["MediaObserver"]])
], FeaturedComponent);



/***/ }),

/***/ "./src/app/pages/account/housingunit/housingunit/add-hunit.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/account/housingunit/housingunit/add-hunit.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-padding {\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9ob3VzaW5ndW5pdC9ob3VzaW5ndW5pdC9hZGQtaHVuaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY2NvdW50L2hvdXNpbmd1bml0L2hvdXNpbmd1bml0L2FkZC1odW5pdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tcGFkZGluZ3tcbiAgICBwYWRkaW5nOiA4cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/account/housingunit/housingunit/housingunit.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/account/housingunit/housingunit/housingunit.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-padding {\n  padding: 8px;\n}\n\n.slide-item {\n  background-size: cover;\n  background-position: center;\n}\n\n.header-banner {\n  margin-bottom: 16px;\n}\n\n@media screen and (max-width: 960px) {\n  .mat-table {\n    border: 0;\n    vertical-align: middle;\n    font-size: small !important;\n  }\n\n  .mat-cell.mat-icon {\n    font-size: 30px;\n    margin-right: 16px !important;\n  }\n\n  .actions {\n    background: wheat;\n  }\n\n  .table-wrapper {\n    display: block;\n    overflow-x: auto;\n    overflow-y: scroll;\n    height: 549px;\n  }\n  .table-wrapper .mat-icon {\n    font-size: 30px;\n    margin-right: 60px !important;\n    color: white;\n  }\n\n  .mat-table caption {\n    font-size: 1em;\n  }\n\n  .mat-header-row {\n    display: none;\n  }\n\n  .mat-table .mat-header-cell {\n    border: 10px solid;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n  }\n\n  .mat-table .mat-row {\n    display: block;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    border-radius: 6px;\n    transition: 0.3s;\n    margin: 8px;\n    padding: 4px;\n  }\n\n  /*\n  .mat-table .mat-row:nth-child(even) {background: #CCC}\n  .mat-table .mat-row:nth-child(odd) {background: #FFF}\n  */\n  .mat-table .mat-cell {\n    display: block;\n    font-size: 1em;\n    text-align: left;\n    height: 30px;\n    padding-left: 38px;\n    margin-bottom: 0%;\n  }\n\n  .mat-table .mat-cell:before {\n    /*\n    * aria-label has no advantage, it won't be read inside a table\n    content: attr(aria-label);\n    */\n    content: attr(data-label);\n    float: left;\n    text-transform: uppercase;\n    font-weight: normal;\n    font-size: 0.85em;\n  }\n\n  .mat-table .mat-cell:last-child {\n    border-top: 1px solid #c3b574;\n    background: #c3b574;\n  }\n\n  .mat-table .mat-cell:first-child {\n    margin-top: 9%;\n  }\n\n  .mat-row::after {\n    display: flex !important;\n    min-height: 0px !important;\n    content: \"\";\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9ob3VzaW5ndW5pdC9ob3VzaW5ndW5pdC9ob3VzaW5ndW5pdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFDQTtFQUNJLHNCQUFBO0VBQ0EsMkJBQUE7QUFFSjs7QUFBQTtFQUNJLG1CQUFBO0FBR0o7O0FBQUE7RUFDSTtJQUNJLFNBQUE7SUFDQSxzQkFBQTtJQUNBLDJCQUFBO0VBR047O0VBQUU7SUFDSSxlQUFBO0lBQ0EsNkJBQUE7RUFHTjs7RUFBRTtJQUNJLGlCQUFBO0VBR047O0VBQ0U7SUFDSSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7RUFFTjtFQUFNO0lBQ0ksZUFBQTtJQUNBLDZCQUFBO0lBQ0EsWUFBQTtFQUVWOztFQUdFO0lBQ0ksY0FBQTtFQUFOOztFQUdFO0lBQ0ksYUFBQTtFQUFOOztFQUlFO0lBQ0ksa0JBQUE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtFQUROOztFQUlFO0lBRUksY0FBQTtJQUNBLDBDQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBRk47O0VBS0U7OztHQUFBO0VBSUE7SUFDSSxjQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7RUFGTjs7RUFLRTtJQUNJOzs7S0FBQTtJQUlBLHlCQUFBO0lBQ0EsV0FBQTtJQUNBLHlCQUFBO0lBQ0EsbUJBQUE7SUFFQSxpQkFBQTtFQUhOOztFQU1FO0lBQ0ksNkJBQUE7SUFDQSxtQkFBQTtFQUhOOztFQU9FO0lBQ0ksY0FBQTtFQUpOOztFQU9FO0lBQ0ksd0JBQUE7SUFDQSwwQkFBQTtJQUNBLFdBQUE7RUFKTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWNjb3VudC9ob3VzaW5ndW5pdC9ob3VzaW5ndW5pdC9ob3VzaW5ndW5pdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tcGFkZGluZ3tcbiAgICBwYWRkaW5nOiA4cHg7XG59XG4uc2xpZGUtaXRlbXtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgICAgICBcbn1cbi5oZWFkZXItYmFubmVye1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gICAgLm1hdC10YWJsZSB7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tYXQtY2VsbC5tYXQtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmFjdGlvbnMge1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGVhdDtcbiAgICB9XG5cblxuICAgIC50YWJsZS13cmFwcGVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgaGVpZ2h0OiA1NDlweDtcblxuICAgICAgICAubWF0LWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICBcbiAgICB9XG5cbiAgICAubWF0LXRhYmxlIGNhcHRpb24ge1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICB9XG5cbiAgICAubWF0LWhlYWRlci1yb3cge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuXG4gICAgLm1hdC10YWJsZSAubWF0LWhlYWRlci1jZWxsIHtcbiAgICAgICAgYm9yZGVyOiAxMHB4IHNvbGlkO1xuICAgICAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgbWFyZ2luOiAtMXB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxcHg7XG4gICAgfVxuXG4gICAgLm1hdC10YWJsZSAubWF0LXJvdyB7XG5cbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgICBtYXJnaW46IDhweDtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgIH1cblxuICAgIC8qXG4gICAgLm1hdC10YWJsZSAubWF0LXJvdzpudGgtY2hpbGQoZXZlbikge2JhY2tncm91bmQ6ICNDQ0N9XG4gICAgLm1hdC10YWJsZSAubWF0LXJvdzpudGgtY2hpbGQob2RkKSB7YmFja2dyb3VuZDogI0ZGRn1cbiAgICAqL1xuICAgIC5tYXQtdGFibGUgLm1hdC1jZWxsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMzhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMCU7XG4gICAgfVxuXG4gICAgLm1hdC10YWJsZSAubWF0LWNlbGw6YmVmb3JlIHtcbiAgICAgICAgLypcbiAgICAgICogYXJpYS1sYWJlbCBoYXMgbm8gYWR2YW50YWdlLCBpdCB3b24ndCBiZSByZWFkIGluc2lkZSBhIHRhYmxlXG4gICAgICBjb250ZW50OiBhdHRyKGFyaWEtbGFiZWwpO1xuICAgICAgKi9cbiAgICAgICAgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cbiAgICAgICAgZm9udC1zaXplOiAuODVlbTtcbiAgICB9XG5cbiAgICAubWF0LXRhYmxlIC5tYXQtY2VsbDpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjM2I1NzQ7XG4gICAgICAgIGJhY2tncm91bmQ6ICNjM2I1NzQ7XG5cbiAgICB9XG5cbiAgICAubWF0LXRhYmxlIC5tYXQtY2VsbDpmaXJzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDklO1xuICAgIH1cbiBcbiAgICAubWF0LXJvdzo6YWZ0ZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/account/housingunit/housingunit/housingunit.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/account/housingunit/housingunit/housingunit.component.ts ***!
  \********************************************************************************/
/*! exports provided: HousingunitComponent, AddHunitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HousingunitComponent", function() { return HousingunitComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHunitComponent", function() { return AddHunitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _store_hunit_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/hunit.actions */ "./src/app/pages/account/housingunit/store/hunit.actions.ts");
/* harmony import */ var src_app_pages_account_housingunit_store_hunit_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pages/account/housingunit/store/hunit.selectors */ "./src/app/pages/account/housingunit/store/hunit.selectors.ts");
/* harmony import */ var src_app_pages_properties_utils_to_formdata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pages/properties/utils/to-formdata */ "./src/app/pages/properties/utils/to-formdata.ts");
/* harmony import */ var _services_hunit_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/hunit.service */ "./src/app/pages/account/housingunit/services/hunit.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
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













let HousingunitComponent = class HousingunitComponent {
    constructor(appService, store, hunitService, activatedRoute, router, dialog) {
        this.appService = appService;
        this.store = store;
        this.hunitService = hunitService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'hnumber', 'status', 'balance', 'actions'];
        this.total = 0;
        this.hunit = {};
        this.property = {};
    }
    ngOnInit() {
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(src_app_pages_account_housingunit_store_hunit_selectors__WEBPACK_IMPORTED_MODULE_7__["selectAllHunit"])).subscribe(data => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(src_app_pages_account_housingunit_store_hunit_selectors__WEBPACK_IMPORTED_MODULE_7__["selectHunitTotal"])).subscribe(total => {
            this.total = total;
        });
        this.activatedRoute.params.subscribe(params => {
            this.propertyId = params.id;
            this.loadHunit({ page: 1, limit: 10, property: params.id });
            this.appService.getPropertyById(params.id).subscribe(property => {
                if (property) {
                    this.property = property;
                }
            });
        });
    }
    loadHunit(data) {
        this.store.dispatch(new _store_hunit_actions__WEBPACK_IMPORTED_MODULE_6__["HunitLoadAction"](data));
    }
    remove(hunit) {
        this.store.dispatch(new _store_hunit_actions__WEBPACK_IMPORTED_MODULE_6__["HunitDeleteAction"]({ hunit }));
        const index = this.dataSource.data.indexOf(hunit);
        if (index !== -1) {
            this.dataSource.data.splice(index, 1);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.dataSource.data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    img(url) {
        if (url) {
            return Object(src_app_pages_properties_utils_to_formdata__WEBPACK_IMPORTED_MODULE_8__["img"])(url);
        }
        return '';
    }
    check(property) {
        if (property && property.gallery) {
            return property.gallery[0].medium;
        }
        else {
            return null;
        }
    }
    openEditDialog(hunit) {
        const dialogRef = this.dialog.open(AddHunitComponent, {
            width: '500px',
            data: hunit
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.hunit = result;
            this.hunit._id = hunit._id;
            this.hunit.propertyId = this.propertyId;
            const hunitParams = { hunit: this.hunit };
            this.store.dispatch(new _store_hunit_actions__WEBPACK_IMPORTED_MODULE_6__["HunitUpdateAction"](hunitParams));
        });
    }
    openDialog() {
        const dialogRef = this.dialog.open(AddHunitComponent, {
            width: '500px',
            data: this.hunit
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.hunit = result;
            this.hunit.propertyId = this.propertyId;
            const hunitParams = { hunit: this.hunit };
            this.store.dispatch(new _store_hunit_actions__WEBPACK_IMPORTED_MODULE_6__["HunitInsertAction"](hunitParams));
        });
    }
};
HousingunitComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
    { type: _services_hunit_service__WEBPACK_IMPORTED_MODULE_9__["HunitService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] }
];
HousingunitComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true },] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true },] }]
};
HousingunitComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-housingunit',
        template: __importDefault(__webpack_require__(/*! raw-loader!./housingunit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/housingunit/housingunit/housingunit.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./housingunit.component.scss */ "./src/app/pages/account/housingunit/housingunit/housingunit.component.scss")).default]
    }),
    __metadata("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
        _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
        _services_hunit_service__WEBPACK_IMPORTED_MODULE_9__["HunitService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_11__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]])
], HousingunitComponent);

let AddHunitComponent = class AddHunitComponent {
    constructor(dialogRef, formBuilder, data) {
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this.data = data;
        this.title = 'Add Housing units';
        this.status = [
            { id: 1, name: 'VACCANT' },
            { id: 2, name: 'TAKEN' },
            { id: 3, name: 'BOOKED' }
        ];
        this.type = { id: 1, name: 'VACCANT' };
    }
    closeDialog() {
        this.dialogRef.close();
    }
    onInfoFormSubmit(hunit) {
        if (this.infoForm.valid) {
            this.data = hunit;
            this.dialogRef.close();
        }
    }
    ngOnInit() {
        this.infoForm = this.formBuilder.group({
            status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required],
            hnumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["Validators"].minLength(3)])],
            floor: [''],
            description: [''],
        });
        if (this.data._id) {
            this.title = 'Edit Housing unit ' + this.data.hnumber;
            this.infoForm.patchValue(this.data);
            this.type = { id: 1, name: this.data.status };
        }
    }
};
AddHunitComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MAT_DIALOG_DATA"],] }] }
];
AddHunitComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-add-hunit',
        template: __importDefault(__webpack_require__(/*! raw-loader!./add-hunit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/housingunit/housingunit/add-hunit.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./add-hunit.component.scss */ "./src/app/pages/account/housingunit/housingunit/add-hunit.component.scss")).default]
    }),
    __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogRef"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"], Object])
], AddHunitComponent);



/***/ }),

/***/ "./src/app/pages/account/housingunit/housingunit/single-unit/single-unit.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/account/housingunit/housingunit/single-unit/single-unit.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  font-weight: bold;\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9ob3VzaW5ndW5pdC9ob3VzaW5ndW5pdC9zaW5nbGUtdW5pdC9zaW5nbGUtdW5pdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvaG91c2luZ3VuaXQvaG91c2luZ3VuaXQvc2luZ2xlLXVuaXQvc2luZ2xlLXVuaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/account/housingunit/housingunit/single-unit/single-unit.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/account/housingunit/housingunit/single-unit/single-unit.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SingleUnitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleUnitComponent", function() { return SingleUnitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _store_hunit_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/hunit.actions */ "./src/app/pages/account/housingunit/store/hunit.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _store_hunit_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/hunit.selectors */ "./src/app/pages/account/housingunit/store/hunit.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
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






let SingleUnitComponent = class SingleUnitComponent {
    constructor(store, activatedRoute) {
        this.store = store;
        this.activatedRoute = activatedRoute;
        this.hunit = {};
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_hunit_selectors__WEBPACK_IMPORTED_MODULE_4__["selectAllHunit"])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(hunits => hunits.find(x => x._id === params.id))).subscribe(unit => {
                if (unit) {
                    this.hunit = unit;
                }
            });
            this.store.dispatch(new _store_hunit_actions__WEBPACK_IMPORTED_MODULE_2__["HunitLoadAction"]({ _id: params.id }));
        });
    }
};
SingleUnitComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
SingleUnitComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-single-unit',
        template: __importDefault(__webpack_require__(/*! raw-loader!./single-unit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/housingunit/housingunit/single-unit/single-unit.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./single-unit.component.scss */ "./src/app/pages/account/housingunit/housingunit/single-unit/single-unit.component.scss")).default]
    }),
    __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], SingleUnitComponent);



/***/ }),

/***/ "./src/app/pages/account/housingunit/store/hunit.selectors.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/account/housingunit/store/hunit.selectors.ts ***!
  \********************************************************************/
/*! exports provided: _selectHunitDataIds, _selectHunitEntities, _selectAllHunit, _selectHunitTotal, selectHunitState, selectHunitIds, selectHunitEntities, selectAllHunit, selectHunitError, selectHunitLoading, selectHunitTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_selectHunitDataIds", function() { return _selectHunitDataIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_selectHunitEntities", function() { return _selectHunitEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_selectAllHunit", function() { return _selectAllHunit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_selectHunitTotal", function() { return _selectHunitTotal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectHunitState", function() { return selectHunitState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectHunitIds", function() { return selectHunitIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectHunitEntities", function() { return selectHunitEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllHunit", function() { return selectAllHunit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectHunitError", function() { return selectHunitError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectHunitLoading", function() { return selectHunitLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectHunitTotal", function() { return selectHunitTotal; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _hunit_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hunit.state */ "./src/app/pages/account/housingunit/store/hunit.state.ts");


const { selectIds: _selectHunitDataIds, selectEntities: _selectHunitEntities, selectAll: _selectAllHunit, selectTotal: _selectHunitTotal, } = _hunit_state__WEBPACK_IMPORTED_MODULE_1__["hunitAdapter"].getSelectors();
const selectHunitState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('hunit');
const selectHunitIds = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectHunitState, _selectHunitDataIds);
const selectHunitEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectHunitState, _selectHunitEntities);
const selectAllHunit = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectHunitState, _selectAllHunit);
const selectHunitError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectHunitState, (state) => state.error);
const selectHunitLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectHunitState, (state) => state.loading);
const selectHunitTotal = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectHunitState, (state) => state.total);


/***/ }),

/***/ "./src/app/pages/account/my-properties/my-properties.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/account/my-properties/my-properties.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".test {\n  border-radius: 10px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9teS1wcm9wZXJ0aWVzL215LXByb3BlcnRpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWNjb3VudC9teS1wcm9wZXJ0aWVzL215LXByb3BlcnRpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVzdHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/account/my-properties/my-properties.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/account/my-properties/my-properties.component.ts ***!
  \************************************************************************/
/*! exports provided: MyPropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPropertiesComponent", function() { return MyPropertiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _properties_store_property_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../properties/store/property.selectors */ "./src/app/pages/properties/store/property.selectors.ts");
/* harmony import */ var _properties_store_property_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../properties/store/property.actions */ "./src/app/pages/properties/store/property.actions.ts");
/* harmony import */ var _properties_utils_to_formdata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../properties/utils/to-formdata */ "./src/app/pages/properties/utils/to-formdata.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_pgroup_store_pgroup_selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/pgroup/store/pgroup.selectors */ "./src/app/shared/pgroup/store/pgroup.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_pgroup_store_pgroup_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/pgroup/store/pgroup.actions */ "./src/app/shared/pgroup/store/pgroup.actions.ts");
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













let MyPropertiesComponent = class MyPropertiesComponent {
    constructor(appService, store, activatedRoute, router) {
        this.appService = appService;
        this.store = store;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.displayedColumns = ['id', 'image', 'title', 'published', 'views', 'actions'];
        this.total = 0;
        this.pgroupId = '';
        this.pgroup = { title: 'Properties' };
    }
    ngOnInit() {
        this.appService.getProperties().subscribe(data => {
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_properties_store_property_selectors__WEBPACK_IMPORTED_MODULE_6__["selectPropertyTotal"])).subscribe(total => {
            this.total = total;
        });
        this.activatedRoute.params.subscribe(params => {
            this.loadProperties({ page: 1, limit: 10, pgroup: params.id });
            this.pgroupId = params.id;
            this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(src_app_shared_pgroup_store_pgroup_selectors__WEBPACK_IMPORTED_MODULE_10__["selectAllPgroup"]))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(properties => properties.find(x => x._id === this.pgroupId)))
                .subscribe(item => { if (item) {
                this.pgroup = item;
            } });
            this.store.dispatch(new src_app_shared_pgroup_store_pgroup_actions__WEBPACK_IMPORTED_MODULE_12__["PgroupLoadAction"]({ _id: this.pgroupId }));
        });
    }
    loadProperties(data) {
        this.store.dispatch(new _properties_store_property_actions__WEBPACK_IMPORTED_MODULE_7__["PropertyLoadAction"](data));
    }
    remove(property) {
        this.store.dispatch(new _properties_store_property_actions__WEBPACK_IMPORTED_MODULE_7__["PropertyDeleteAction"](property));
        const index = this.dataSource.data.indexOf(property);
        if (index !== -1) {
            this.dataSource.data.splice(index, 1);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.dataSource.data);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        }
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    img(url) {
        return Object(_properties_utils_to_formdata__WEBPACK_IMPORTED_MODULE_8__["img"])(url);
    }
};
MyPropertiesComponent.ctorParameters = () => [
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
];
MyPropertiesComponent.propDecorators = {
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true },] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true },] }]
};
MyPropertiesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-my-properties',
        template: __importDefault(__webpack_require__(/*! raw-loader!./my-properties.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/my-properties/my-properties.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./my-properties.component.scss */ "./src/app/pages/account/my-properties/my-properties.component.scss")).default]
    }),
    __metadata("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"],
        _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
], MyPropertiesComponent);



/***/ }),

/***/ "./src/app/pages/account/profile/profile.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/account/profile/profile.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/account/profile/profile.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/account/profile/profile.component.ts ***!
  \************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _register_store_user_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../register/store/user.selectors */ "./src/app/pages/register/store/user.selectors.ts");
/* harmony import */ var _register_store_user_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../register/store/user.actions */ "./src/app/pages/register/store/user.actions.ts");
/* harmony import */ var _register_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../register/services/auth.service */ "./src/app/pages/register/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
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








let ProfileComponent = class ProfileComponent {
    constructor(formBuilder, snackBar, authService, router, store) {
        this.formBuilder = formBuilder;
        this.snackBar = snackBar;
        this.authService = authService;
        this.router = router;
        this.store = store;
        this.userTypes = [
            { id: 1, name: 'Agent' },
            { id: 2, name: 'Agency' },
            { id: 3, name: 'Buyer' },
            { id: 7, name: 'Seller' },
            { id: 4, name: 'LandLord' },
            { id: 5, name: 'CareTaker' },
            { id: 6, name: 'Tenant' },
        ];
    }
    ngOnInit() {
        this.infoForm = this.formBuilder.group({
            userType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)])],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            idNumber: [''],
            image: null,
            receiveNewsletter: false,
            organization: null,
        });
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_register_store_user_selectors__WEBPACK_IMPORTED_MODULE_4__["selectCurrentUser"])).subscribe(user => this.checkUser(user));
    }
    checkUser(user) {
        this.user = user;
        this.infoForm.patchValue(user);
    }
    logOut() {
        this.authService.logout();
        this.store.dispatch(new _register_store_user_actions__WEBPACK_IMPORTED_MODULE_5__["UserLogoutAction"]());
        this.router.navigate(['/login']);
    }
    onInfoFormSubmit(values) {
        if (this.infoForm.valid) {
            console.log(values);
            const user = values;
            user.userType = values.userType.name;
            user._id = this.user._id;
            let file = null;
            if (values.image) {
                file = (values.image[0].file);
            }
            const userParams = { user, file };
            this.store.dispatch(new _register_store_user_actions__WEBPACK_IMPORTED_MODULE_5__["UserUpdateAction"](userParams));
            this.snackBar
                .open('Your account information updated successfully!', 'cancel', { panelClass: 'success', verticalPosition: 'bottom', duration: 3000 });
        }
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _register_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
ProfileComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-profile',
        template: __importDefault(__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/profile/profile.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./profile.component.scss */ "./src/app/pages/account/profile/profile.component.scss")).default]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
        _register_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
], ProfileComponent);



/***/ }),

/***/ "./src/app/pages/account/security/security.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/account/security/security.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvc2VjdXJpdHkvc2VjdXJpdHkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/account/security/security.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/account/security/security.component.ts ***!
  \**************************************************************/
/*! exports provided: SecurityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityComponent", function() { return SecurityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/theme/utils/app-validators */ "./src/app/theme/utils/app-validators.ts");
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



let SecurityComponent = class SecurityComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.passwordForm = this.formBuilder.group({
            currentPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            newPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            confirmNewPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, { validator: Object(src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_2__["matchingPasswords"])('newPassword', 'confirmNewPassword') });
    }
    onPasswordFormSubmit(values) {
        if (this.passwordForm.valid) {
        }
    }
};
SecurityComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
];
SecurityComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-security',
        template: __importDefault(__webpack_require__(/*! raw-loader!./security.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/security/security.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./security.component.scss */ "./src/app/pages/account/security/security.component.scss")).default]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
], SecurityComponent);



/***/ })

}]);
//# sourceMappingURL=pages-account-account-module-es2015.js.map