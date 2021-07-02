function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-account-account-module~pages-submit-property-submit-property-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/submit-property/submit-property.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/submit-property/submit-property.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSubmitPropertySubmitPropertyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-3\">\n    <div class=\"theme-container\">\n  \n      <div ngClass.lt-lg=\"p-0\" [formGroup]=\"submitForm\">\n  \n        <mat-horizontal-stepper #horizontalStepper linear=\"true\" class=\"submit-property\" (selectionChange)=\"onSelectionChange($event)\">\n\n            <mat-step [stepControl]=\"submitForm.get('basic')\" label=\"Basic\">\n              <div class=\"step-content\">\n\n                  <form formGroupName=\"basic\" fxLayout=\"row wrap\">\n\n                      <div fxFlex=\"100\" class=\"p-3\">\n                        <h1 class=\"fw-500 text-center\">Basic</h1>\n                      </div>\n                              \n                      <div fxFlex=\"100\" class=\"px-2\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Title</mat-label>\n                            <input matInput placeholder=\"Title\" formControlName=\"title\" required autocomplete=\"off\">\n                            <mat-error *ngIf=\"submitForm.get('basic')['controls'].title.errors?.required\">Title is required</mat-error>\n                        </mat-form-field>\n                      </div>  \n                  \n                      <div fxFlex=\"100\" class=\"px-2\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Description</mat-label> \n                            <textarea matInput placeholder=\"Description\" formControlName=\"desc\" rows=\"7\"></textarea> \n                        </mat-form-field> \n                      </div> \n                  \n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Price Rent</mat-label>\n                            <input type=\"number\" matInput placeholder=\"Enter rent price\" formControlName=\"priceDollar\" autocomplete=\"off\"> \n                        </mat-form-field>\n                      </div> \n                  \n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Price Sale</mat-label>\n                            <input type=\"number\" matInput placeholder=\"Enter sale price\" formControlName=\"priceEuro\" autocomplete=\"off\" > \n                        </mat-form-field>\n                      </div> \n                  \n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Property Type</mat-label> \n                            <mat-select placeholder=\"Select Property Type\" formControlName=\"propertyType\" required>\n                                <mat-option *ngFor=\"let propertyType of propertyTypes\" [value]=\"propertyType\">\n                                    {{propertyType.name}}\n                                </mat-option>\n                            </mat-select>\n                            <mat-error *ngIf=\"submitForm.get('basic')['controls'].propertyType.errors?.required\">Property Type is required</mat-error>                               \n                        </mat-form-field>\n                      </div>\n                  \n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Property Status</mat-label>\n                            <mat-select placeholder=\"Select Property Status\" formControlName=\"propertyStatus\" multiple>\n                                <mat-option *ngFor=\"let propertyStatus of propertyStatuses\" [value]=\"propertyStatus\">\n                                    {{propertyStatus.name}}\n                                </mat-option>\n                            </mat-select>                             \n                        </mat-form-field>\n                      </div>\n                  \n                      <div fxFlex=\"100\" class=\"step-section pb-2\">\n                          <p class=\"mb-0\"><span class=\"uppercase fw-500\">Gallery</span><span class=\"text-muted mx-3\">(max 8 images)</span></p>  \n                          <input-file formControlName=\"gallery\" fileLimit=\"8\" fileAccept=\"image/*\"  [linkEnabled]=\"true\" ></input-file>  \n                      </div> \n                  \n                      <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"end center\">\n                        <button mat-raised-button color=\"primary\" matStepperNext fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\">\n                          <span class=\"mx-1 uppercase\">Next</span>                    \n                          <mat-icon>navigate_next</mat-icon>\n                        </button> \n                      </div> \n                  \n                  </form>\n               \n              </div>\n            </mat-step>\n            \n            <mat-step [stepControl]=\"submitForm.get('address')\" label=\"Address\">\n              <div class=\"step-content\">\n\n                  <form formGroupName=\"address\" fxLayout=\"row wrap\">\n            \n                      <div fxFlex=\"100\" class=\"p-3\">\n                        <h1 class=\"fw-500 text-center\">Address</h1>\n                      </div>\n\n                      <div fxFlex=\"100\" class=\"px-2\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>City</mat-label>\n                            <mat-select placeholder=\"Select City...\" formControlName=\"city\" (selectionChange)=\"onSelectCity()\" required> \n                              <mat-option *ngFor=\"let city of cities\" [value]=\"city\">\n                                {{city.name}}\n                              </mat-option>\n                            </mat-select> \n                            <mat-error *ngIf=\"submitForm.get('address')['controls'].city.errors?.required\">City is required</mat-error>                    \n                        </mat-form-field>\n                      </div> \n                                \n                      <div fxFlex=\"100\" class=\"px-2\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-icon matPrefix class=\"mr-1 text-muted\">location_on</mat-icon>\n                            <mat-label>Location</mat-label>\n                            <input matInput placeholder=\"Enter a location\" formControlName=\"location\" autocomplete=\"off\" #addressAutocomplete> \n                            <button *ngIf=\"submitForm.get('address')['controls'].location.value\" mat-button matSuffix mat-icon-button (click)=\"submitForm.get('address')['controls'].location.setValue(null)\" type=\"button\">\n                              <mat-icon>close</mat-icon>\n                            </button>\n                            <mat-error *ngIf=\"submitForm.get('address')['controls'].location.errors?.required\">Location is required</mat-error>   \n                        </mat-form-field>\n                      </div> \n                    \n                      <div fxFlex=\"100\" class=\"px-2 mb-4\">\n                          <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [mapTypeControl]=\"true\" [fullscreenControl]=\"true\" (mapClick)=\"onMapClick($event)\">\n                              <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [markerDraggable]=\"true\" (markerClick)=\"onMarkerClick($event)\"></agm-marker>\n                          </agm-map>\n                      </div>\n                    \n                     \n                    \n                      <!-- <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\n                          <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Zip Code</mat-label>\n                            <input matInput placeholder=\"exp. 98104\" autocomplete=\"off\" formControlName=\"zipCode\">                  \n                          </mat-form-field>\n                      </div>\n                    \n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                          <mat-label>Neighborhood</mat-label>\n                          <mat-select placeholder=\"Select Neighborhood...\" formControlName=\"neighborhood\" multiple (selectionChange)=\"onSelectNeighborhood()\">\n                            <mat-option *ngFor=\"let neighborhood of neighborhoods | filterNeighborhoods: submitForm.get('address')['controls'].city.value?.id\" [value]=\"neighborhood\">\n                              {{neighborhood.name}}\n                            </mat-option>\n                          </mat-select>   \n                        </mat-form-field>\n                      </div> \n                    \n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\n                        <mat-form-field appearance=\"outline\" class=\"w-100\">\n                          <mat-label>Street</mat-label>\n                          <mat-select placeholder=\"Select Street...\" formControlName=\"street\" multiple> \n                            <mat-option *ngFor=\"let street of streets | filterStreets : { neighborhoods: submitForm.get('address')['controls'].neighborhood.value?.id, cityId:submitForm.get('address')['controls'].city.value?.id } \" [value]=\"street\">\n                              {{street.name}}\n                            </mat-option>\n                          </mat-select>  \n                        </mat-form-field>\n                      </div>  -->\n                    \n                      <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"space-between center\">\n                        <button mat-raised-button color=\"primary\" matStepperPrevious fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\">\n                          <mat-icon>navigate_before</mat-icon>\n                          <span class=\"mx-1 uppercase\">Back</span>  \n                        </button>\n                        <button mat-raised-button color=\"primary\" matStepperNext fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\">\n                          <span class=\"mx-1 uppercase\">Next</span>                    \n                          <mat-icon>navigate_next</mat-icon>\n                        </button> \n                      </div>  \n                    \n                  </form>\n                \n              </div> \n            </mat-step>\n\n            <mat-step [stepControl]=\"submitForm.get('additional')\" label=\"Additional\">\n              <div class=\"step-content\">\n\n                  <form formGroupName=\"additional\" fxLayout=\"row wrap\">\n    \n                      <div fxFlex=\"100\" class=\"p-3\">\n                        <h1 class=\"fw-500 text-center\">Additional</h1>\n                      </div>\n                  \n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\n                          <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Bedrooms</mat-label>\n                            <input matInput placeholder=\"bedrooms\" autocomplete=\"off\" formControlName=\"bedrooms\" onlyNumber  type=\"number\"  maxlength=\"2\">                  \n                          </mat-form-field>\n                      </div>\n                  \n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\n                          <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Bathrooms</mat-label>\n                            <input matInput placeholder=\"bathrooms\" autocomplete=\"off\" formControlName=\"bathrooms\" onlyNumber  type=\"number\"  maxlength=\"2\">                  \n                          </mat-form-field>\n                      </div>\n                  \n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\n                          <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Garages</mat-label>\n                            <input matInput placeholder=\"Garages\" autocomplete=\"off\" formControlName=\"garages\" onlyNumber  type=\"number\"  maxlength=\"2\">                  \n                          </mat-form-field>\n                      </div>\n                      \n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\n                          <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Area (ft²)</mat-label>\n                            <input matInput placeholder=\"Area\" autocomplete=\"off\" formControlName=\"area\" onlyNumber  type=\"number\" >                  \n                          </mat-form-field>\n                      </div>\n                      \n                      <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"px-2\">\n                          <mat-form-field appearance=\"outline\" class=\"w-100\">\n                            <mat-label>Year Built</mat-label>\n                            <input type=\"number\" matInput placeholder=\"Year Built\" autocomplete=\"off\" formControlName=\"yearBuilt\" onlyNumber  type=\"number\"   maxlength=\"4\">                  \n                          </mat-form-field>\n                      </div>\n                  \n                      <div fxFlex=\"100\" class=\"mb-2\"> \n                          <p class=\"uppercase m-2 fw-500\">Features</p> \n                          <div formArrayName=\"features\" fxLayout=\"row wrap\">\n                              <div [formGroupName]=\"i\" *ngFor=\"let control of submitForm.get('additional')['controls'].features['controls']; index as i\" class=\"p-2\">\n                                  <mat-checkbox formControlName=\"selected\">{{features[i].name}}</mat-checkbox>                         \n                              </div>\n                          </div>\n                      </div>\n                  \n                  \n                      <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"space-between center\">\n                        <button mat-raised-button color=\"primary\" matStepperPrevious fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\">\n                          <mat-icon>navigate_before</mat-icon>\n                          <span class=\"mx-1 uppercase\">Back</span>  \n                        </button>\n                        <button mat-raised-button color=\"primary\" matStepperNext fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\">\n                          <span class=\"mx-1 uppercase\">Next</span>                    \n                          <mat-icon>navigate_next</mat-icon>\n                        </button> \n                      </div>  \n            \n                  \n                  </form>\n                  \n                \n              </div> \n            </mat-step>\n\n            <mat-step [stepControl]=\"submitForm.get('media')\" label=\"Media\">\n              <div class=\"step-content\">\n\n                  <form formGroupName=\"media\" fxLayout=\"row wrap\">    \n                   \n                      <div fxFlex=\"100\" class=\"p-3\">\n                        <h1 class=\"fw-500 text-center\">Media</h1>\n                      </div>\n                  \n                      <div fxFlex=\"100\" fxLayoutAlign=\"start center\" class=\"my-3 px-2\"> \n                          <p class=\"mb-0\"><span class=\"uppercase fw-500\">Videos</span><span class=\"text-muted mx-3\">(video link to .mp4)</span></p>                            \n                          <button type=\"button\" mat-icon-button color=\"primary\" (click)=\"addVideo()\" matTooltip=\"Add New Video\" matTooltipPosition=\"after\">\n                              <mat-icon>add_circle</mat-icon>\n                          </button>\n                      </div> \n                      <div formArrayName=\"videos\" fxFlex=\"100\" fxLayout=\"row wrap\">  \n                          <div *ngFor=\"let item of submitForm.get('media')['controls'].videos['controls']; let i = index;\" fxFlex=\"100\" class=\"step-section\">\n                              <div fxFlex=\"4\" class=\"fw-500 text-center pt-3\">{{i+1}}.</div>\n                              <div [formGroupName]=\"i\" fxFlex=\"90\" fxLayout=\"row wrap\">\n                                  <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"40\" class=\"px-2\">\n                                      <mat-label>Name</mat-label>\n                                      <input matInput placeholder=\"Video name\" formControlName=\"name\" autocomplete=\"off\">     \n                                  </mat-form-field>\n                                  <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"60\" class=\"px-2\">\n                                      <mat-label>Link</mat-label>\n                                      <input matInput placeholder=\"Link to video\" formControlName=\"link\" autocomplete=\"off\">     \n                                  </mat-form-field>                                                 \n                              </div>\n                              <div fxFlex=\"6\" class=\"text-center pt-2\">\n                                  <button mat-icon-button color=\"warn\" (click)=\"deleteVideo(i)\" matTooltip=\"Delete Video\">\n                                      <mat-icon>cancel</mat-icon>\n                                  </button>\n                              </div>                            \n                          </div>        \n                      </div>\n                  \n                      <div fxFlex=\"100\" fxLayoutAlign=\"start center\" class=\"my-3 px-2\"> \n                          <p class=\"uppercase fw-500 mb-0\">Plans</p>                            \n                          <button type=\"button\" mat-icon-button color=\"primary\" (click)=\"addPlan()\" matTooltip=\"Add New Plan\" matTooltipPosition=\"after\" class=\"mx-3\">\n                              <mat-icon>add_circle</mat-icon>\n                          </button>\n                      </div> \n                      <div formArrayName=\"plans\" fxFlex=\"100\" fxLayout=\"row wrap\">  \n                          <div *ngFor=\"let item of submitForm.get('media')['controls'].plans['controls']; let i = index;\" fxFlex=\"100\" class=\"step-section pb-2\">\n                              <div fxFlex=\"4\" class=\"fw-500 text-center pt-3\">{{i+1}}.</div>\n                              <div [formGroupName]=\"i\" fxFlex=\"90\" fxLayout=\"row wrap\">\n                                  <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"40\" class=\"px-2\">\n                                      <mat-label>Name</mat-label>\n                                      <input matInput placeholder=\"Plan name\" formControlName=\"name\" autocomplete=\"off\">     \n                                  </mat-form-field>\n                                  <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"60\" class=\"px-2\">\n                                      <mat-label>Desc</mat-label>\n                                      <input matInput placeholder=\"Description\" formControlName=\"desc\" autocomplete=\"off\">     \n                                  </mat-form-field> \n                                  <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\n                                      <mat-label>Area (ft²)</mat-label>\n                                      <input matInput placeholder=\"Area\" formControlName=\"area\" autocomplete=\"off\" onlyNumber  type=\"number\" >     \n                                  </mat-form-field>\n                                  <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\n                                      <mat-label>Rooms</mat-label>\n                                      <input matInput placeholder=\"Rooms\" formControlName=\"rooms\" autocomplete=\"off\" onlyNumber  type=\"number\" >     \n                                  </mat-form-field>\n                                  <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"33.3\" class=\"px-2\">\n                                      <mat-label>Baths</mat-label>\n                                      <input matInput placeholder=\"Baths\" formControlName=\"baths\" autocomplete=\"off\" onlyNumber  type=\"number\" >     \n                                  </mat-form-field>\n                                  <div fxFlex=\"100\" class=\"px-2\">  \n                                      <input-file placeholder=\"Image (or link to image)\" formControlName=\"image\" fileLimit=\"1\" fileAccept=\"image/*\" [linkEnabled]=\"true\"></input-file>  \n                                  </div>                \n                              </div>\n                              <div fxFlex=\"6\" class=\"text-center pt-2\">\n                                  <button mat-icon-button color=\"warn\" (click)=\"deletePlan(i)\" matTooltip=\"Delete Plan\">\n                                      <mat-icon>cancel</mat-icon>\n                                  </button>\n                              </div>  \n                          </div>        \n                      </div> \n                  \n                      \n                      <div fxFlex=\"100\" fxLayoutAlign=\"start center\" class=\"my-3 px-2\"> \n                          <p class=\"mb-0 uppercase fw-500\">Additional features</p>                            \n                          <button type=\"button\" mat-icon-button color=\"primary\" (click)=\"addFeature()\" matTooltip=\"Add New Feature\" matTooltipPosition=\"after\">\n                              <mat-icon>add_circle</mat-icon>\n                          </button>\n                      </div> \n                      <div formArrayName=\"additionalFeatures\" fxFlex=\"100\" fxLayout=\"row wrap\">  \n                          <div *ngFor=\"let item of submitForm.get('media')['controls'].additionalFeatures['controls']; let i = index;\" fxFlex=\"100\" class=\"step-section\">\n                              <div fxFlex=\"4\" class=\"fw-500 text-center pt-3\">{{i+1}}.</div>\n                              <div [formGroupName]=\"i\" fxFlex=\"90\" fxLayout=\"row wrap\">\n                                  <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"40\" class=\"px-2\">\n                                      <mat-label>Name</mat-label>\n                                      <input matInput placeholder=\"Feature name\" formControlName=\"name\" autocomplete=\"off\">     \n                                  </mat-form-field>\n                                  <mat-form-field appearance=\"outline\" fxFlex=\"100\" fxFlex.gt-xs=\"60\" class=\"px-2\">\n                                      <mat-label>Value</mat-label>\n                                      <input matInput placeholder=\"Feature value\" formControlName=\"value\" autocomplete=\"off\">     \n                                  </mat-form-field>                                                 \n                              </div>\n                              <div fxFlex=\"6\" class=\"text-center pt-2\">\n                                  <button mat-icon-button color=\"warn\" (click)=\"deleteFeature(i)\" matTooltip=\"Delete Feature\">\n                                      <mat-icon>cancel</mat-icon>\n                                  </button>\n                              </div>                            \n                          </div>        \n                      </div>\n                  \n                  \n                      <div fxFlex=\"100\" class=\"py-3\">\n                          <mat-slide-toggle formControlName=\"featured\">Featured</mat-slide-toggle>\n                      </div>\n                     \n                      <div fxFlex=\"100\" class=\"mt-3 p-2\" fxLayoutAlign=\"space-between center\">\n                          <button mat-raised-button color=\"primary\" matStepperPrevious fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\">\n                              <mat-icon>navigate_before</mat-icon>\n                              <span class=\"mx-1 uppercase\">Back</span>  \n                          </button>\n                          <button mat-raised-button color=\"primary\" matStepperNext fxLayout=\"row\" fxLayoutAlign=\"center center\" type=\"button\" (click)=\"uploadProperty()\">\n                              <span class=\"mx-1 uppercase\">Submit</span>                    \n                              <mat-icon>navigate_next</mat-icon>\n                          </button> \n                      </div> \n                   \n                  \n                  </form>\n                \n              </div> \n            </mat-step>\n\n            <mat-step label=\"Confirmation\">\n              <div class=\"step-content\">\n                \n                  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"pt-5 text-center\"> \n                    <button mat-fab color=\"primary\"><mat-icon>check</mat-icon></button>\n                    <h2 class=\"mt-3 uppercase\">Congratulation!</h2>\n                    <h2 class=\"my-3\">Your property <span class=\"primary-color\">\"{{submitForm.get('basic')['controls'].title.value}}\"</span> has been submitted</h2>\n                    <p class=\"text-muted\">Thank you we will review you request and get back to you within 24hours, feel free to add more properties.</p>\n                  </div>\n                  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"pt-3\">  \n                    <button mat-raised-button color=\"accent\" (click)=\"reset()\" type=\"button\">Return to submit new property</button>       \n                  </div>\n\n              </div> \n            </mat-step>\n\n        </mat-horizontal-stepper>\n\n      </div>\n\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./src/app/pages/submit-property/submit-property.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/submit-property/submit-property.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSubmitPropertySubmitPropertyComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1Ym1pdC1wcm9wZXJ0eS9zdWJtaXQtcHJvcGVydHkuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/submit-property/submit-property.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/submit-property/submit-property.component.ts ***!
    \********************************************************************/

  /*! exports provided: SubmitPropertyComponent */

  /***/
  function srcAppPagesSubmitPropertySubmitPropertyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubmitPropertyComponent", function () {
      return SubmitPropertyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/app.service */
    "./src/app/app.service.ts");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var _properties_store_property_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../properties/store/property.actions */
    "./src/app/pages/properties/store/property.actions.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

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
    }; /// <reference types="@types/googlemaps" />


    var SubmitPropertyComponent = /*#__PURE__*/function () {
      function SubmitPropertyComponent(appService, fb, mapsAPILoader, activatedRoute, router, store, ngZone) {
        _classCallCheck(this, SubmitPropertyComponent);

        this.appService = appService;
        this.fb = fb;
        this.mapsAPILoader = mapsAPILoader;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.store = store;
        this.ngZone = ngZone;
        this.features = [];
        this.propertyTypes = [];
        this.propertyStatuses = [];
        this.cities = [];
        this.neighborhoods = [];
        this.streets = [];
        this.lat = 40.678178;
        this.lng = -73.944158;
        this.zoom = 12;
        this.pgroupId = '';
      }

      _createClass(SubmitPropertyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.activatedRoute.params.subscribe(function (params) {
            _this.pgroupId = params.id;

            if (!params.id) {
              _this.router.navigateByUrl('/');
            }
          });
          this.features = this.appService.getFeatures();
          this.propertyTypes = this.appService.getPropertyTypes();
          this.propertyStatuses = this.appService.getPropertyStatuses();
          this.cities = this.appService.getCities();
          this.neighborhoods = this.appService.getNeighborhoods();
          this.streets = this.appService.getStreets();
          this.submitForm = this.fb.group({
            basic: this.fb.group({
              title: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              desc: null,
              priceDollar: null,
              priceEuro: null,
              propertyType: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              propertyStatus: null,
              gallery: null
            }),
            address: this.fb.group({
              location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              zipCode: '',
              neighborhood: '',
              street: '',
              lat: '',
              lng: ''
            }),
            additional: this.fb.group({
              bedrooms: '',
              bathrooms: '',
              garages: '',
              area: '',
              yearBuilt: '',
              features: this.buildFeatures()
            }),
            media: this.fb.group({
              videos: this.fb.array([this.createVideo()]),
              plans: this.fb.array([this.createPlan()]),
              additionalFeatures: this.fb.array([this.createFeature()]),
              featured: false
            })
          });
          this.setCurrentPosition();
          this.placesAutocomplete();
        }
      }, {
        key: "onSelectionChange",
        value: function onSelectionChange(e) {
          if (e.selectedIndex == 4) {
            this.horizontalStepper._steps.forEach(function (step) {
              return step.editable = false;
            });

            console.log(this.submitForm.value);
          }
        }
      }, {
        key: "reset",
        value: function reset() {
          this.horizontalStepper.reset();
          var videos = this.submitForm.controls.media.get('videos');

          while (videos.length > 1) {
            videos.removeAt(0);
          }

          var plans = this.submitForm.controls.media.get('plans');

          while (plans.length > 1) {
            plans.removeAt(0);
          }

          var additionalFeatures = this.submitForm.controls.media.get('additionalFeatures');

          while (additionalFeatures.length > 1) {
            additionalFeatures.removeAt(0);
          }

          this.submitForm.reset({
            additional: {
              features: this.features
            },
            media: {
              featured: false
            }
          });
        } // -------------------- Address ---------------------------

      }, {
        key: "onSelectCity",
        value: function onSelectCity() {
          this.submitForm.controls.address.get('neighborhood').setValue(null, {
            emitEvent: false
          });
          this.submitForm.controls.address.get('street').setValue(null, {
            emitEvent: false
          });
        }
      }, {
        key: "onSelectNeighborhood",
        value: function onSelectNeighborhood() {
          this.submitForm.controls.address.get('street').setValue(null, {
            emitEvent: false
          });
        }
      }, {
        key: "setCurrentPosition",
        value: function setCurrentPosition() {
          var _this2 = this;

          if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
              _this2.lat = position.coords.latitude;
              _this2.lng = position.coords.longitude;
            });
          }
        }
      }, {
        key: "placesAutocomplete",
        value: function placesAutocomplete() {
          var _this3 = this;

          this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this3.addressAutocomplete.nativeElement, {
              types: ['address']
            });
            autocomplete.addListener('place_changed', function () {
              _this3.ngZone.run(function () {
                var place = autocomplete.getPlace();

                if (place.geometry === undefined || place.geometry === null) {
                  return;
                }

                _this3.lat = place.geometry.location.lat();
                _this3.lng = place.geometry.location.lng();

                _this3.getAddress();
              });
            });
          });
        } // public getAddress(){
        //   this.mapsAPILoader.load().then(() => {
        //     let geocoder = new google.maps.Geocoder();
        //     let latlng = new google.maps.LatLng(this.lat, this.lng);
        //     geocoder.geocode({'location': latlng}, (results, status) => {
        //       if(status === google.maps.GeocoderStatus.OK) {
        //         console.log(results);
        //         //this.addresstext.nativeElement.focus();
        //         let address = results[0].formatted_address;
        //         this.submitForm.controls.location.setValue(address);
        //         this.setAddresses(results[0]);
        //       }
        //     });
        //   });
        // }

      }, {
        key: "getAddress",
        value: function getAddress() {
          var _this4 = this;

          this.appService.getAddress(this.lat, this.lng).subscribe(function (response) {
            var responseResult = response;
            console.log(response);

            if (responseResult.results.length) {
              var address = responseResult.results[0].formatted_address;

              _this4.submitForm.controls.address.get('location').setValue(address);

              _this4.setAddresses(responseResult.results[0]);
            }
          });
        }
      }, {
        key: "onMapClick",
        value: function onMapClick(e) {
          this.lat = e.coords.lat;
          this.lng = e.coords.lng;
          this.submitForm.controls.address.get('lat').setValue(this.lat);
          this.submitForm.controls.address.get('lng').setValue(this.lng);
          this.getAddress();
        }
      }, {
        key: "onMarkerClick",
        value: function onMarkerClick(e) {
          console.log(e);
        }
      }, {
        key: "setAddresses",
        value: function setAddresses(result) {
          var _this5 = this;

          this.submitForm.controls.address.get('city').setValue(null);
          this.submitForm.controls.address.get('zipCode').setValue(null);
          this.submitForm.controls.address.get('street').setValue(null);
          var newCity, newStreet, newNeighborhood;
          result.address_components.forEach(function (item) {
            if (item.types.indexOf('locality') > -1) {
              if (_this5.cities.filter(function (city) {
                return city.name == item.long_name;
              })[0]) {
                newCity = _this5.cities.filter(function (city) {
                  return city.name == item.long_name;
                })[0];
              } else {
                newCity = {
                  id: _this5.cities.length + 1,
                  name: item.long_name
                };

                _this5.cities.push(newCity);
              }

              _this5.submitForm.controls.address.get('city').setValue(newCity);
            }

            if (item.types.indexOf('postal_code') > -1) {
              _this5.submitForm.controls.address.get('zipCode').setValue(item.long_name);
            }
          });

          if (!newCity) {
            result.address_components.forEach(function (item) {
              if (item.types.indexOf('administrative_area_level_1') > -1) {
                if (_this5.cities.filter(function (city) {
                  return city.name == item.long_name;
                })[0]) {
                  newCity = _this5.cities.filter(function (city) {
                    return city.name == item.long_name;
                  })[0];
                } else {
                  newCity = {
                    id: _this5.cities.length + 1,
                    name: item.long_name
                  };

                  _this5.cities.push(newCity);
                }

                _this5.submitForm.controls.address.get('city').setValue(newCity);
              }
            });
          }

          if (newCity) {
            result.address_components.forEach(function (item) {
              if (item.types.indexOf('neighborhood') > -1) {
                var neighborhood = _this5.neighborhoods.filter(function (n) {
                  return n.name == item.long_name && n.cityId == newCity.id;
                })[0];

                if (neighborhood) {
                  newNeighborhood = neighborhood;
                } else {
                  newNeighborhood = {
                    id: _this5.neighborhoods.length + 1,
                    name: item.long_name,
                    cityId: newCity.id
                  };

                  _this5.neighborhoods.push(newNeighborhood);
                }

                _this5.neighborhoods = _toConsumableArray(_this5.neighborhoods);

                _this5.submitForm.controls.address.get('neighborhood').setValue([newNeighborhood]);
              }
            });
          }

          if (newCity) {
            result.address_components.forEach(function (item) {
              if (item.types.indexOf('route') > -1) {
                if (_this5.streets.filter(function (street) {
                  return street.name == item.long_name && street.cityId == newCity.id;
                })[0]) {
                  newStreet = _this5.streets.filter(function (street) {
                    return street.name == item.long_name && street.cityId == newCity.id;
                  })[0];
                } else {
                  newStreet = {
                    id: _this5.streets.length + 1,
                    name: item.long_name,
                    cityId: newCity.id,
                    neighborhoodId: newNeighborhood ? newNeighborhood.id : null
                  };

                  _this5.streets.push(newStreet);
                }

                _this5.streets = _toConsumableArray(_this5.streets);

                _this5.submitForm.controls.address.get('street').setValue([newStreet]);
              }
            });
          }
        } // -------------------- Additional ---------------------------

      }, {
        key: "buildFeatures",
        value: function buildFeatures() {
          var _this6 = this;

          var arr = this.features.map(function (feature) {
            return _this6.fb.group({
              id: feature.id,
              name: feature.name,
              selected: feature.selected
            });
          });
          return this.fb.array(arr);
        } // -------------------- Media ---------------------------

      }, {
        key: "createVideo",
        value: function createVideo() {
          return this.fb.group({
            id: null,
            name: null,
            link: null
          });
        }
      }, {
        key: "addVideo",
        value: function addVideo() {
          var videos = this.submitForm.controls.media.get('videos');
          videos.push(this.createVideo());
        }
      }, {
        key: "deleteVideo",
        value: function deleteVideo(index) {
          var videos = this.submitForm.controls.media.get('videos');
          videos.removeAt(index);
        }
      }, {
        key: "createPlan",
        value: function createPlan() {
          return this.fb.group({
            id: null,
            name: null,
            desc: null,
            area: null,
            rooms: null,
            baths: null,
            image: null
          });
        }
      }, {
        key: "addPlan",
        value: function addPlan() {
          var plans = this.submitForm.controls.media.get('plans');
          plans.push(this.createPlan());
        }
      }, {
        key: "deletePlan",
        value: function deletePlan(index) {
          var plans = this.submitForm.controls.media.get('plans');
          plans.removeAt(index);
        }
      }, {
        key: "createFeature",
        value: function createFeature() {
          return this.fb.group({
            id: null,
            name: null,
            value: null
          });
        }
      }, {
        key: "addFeature",
        value: function addFeature() {
          var features = this.submitForm.controls.media.get('additionalFeatures');
          features.push(this.createFeature());
        }
      }, {
        key: "deleteFeature",
        value: function deleteFeature(index) {
          var features = this.submitForm.controls.media.get('additionalFeatures');
          features.removeAt(index);
        }
      }, {
        key: "uploadProperty",
        value: function uploadProperty() {
          var propertyInput = this.submitForm.value;
          propertyInput.pgroup = this.pgroupId;
          this.store.dispatch(new _properties_store_property_actions__WEBPACK_IMPORTED_MODULE_5__["PropertyInsertAction"](propertyInput));
        }
      }]);

      return SubmitPropertyComponent;
    }();

    SubmitPropertyComponent.ctorParameters = function () {
      return [{
        type: src_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _agm_core__WEBPACK_IMPORTED_MODULE_4__["MapsAPILoader"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }];
    };

    SubmitPropertyComponent.propDecorators = {
      horizontalStepper: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['horizontalStepper']
      }],
      addressAutocomplete: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['addressAutocomplete']
      }]
    };
    SubmitPropertyComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-submit-property',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./submit-property.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/submit-property/submit-property.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./submit-property.component.scss */
      "./src/app/pages/submit-property/submit-property.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["MapsAPILoader"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])], SubmitPropertyComponent);
    /***/
  },

  /***/
  "./src/app/pages/submit-property/submit-property.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/submit-property/submit-property.module.ts ***!
    \*****************************************************************/

  /*! exports provided: routes, SubmitPropertyModule */

  /***/
  function srcAppPagesSubmitPropertySubmitPropertyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubmitPropertyModule", function () {
      return SubmitPropertyModule;
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


    var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var ngx_input_file__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-input-file */
    "./node_modules/ngx-input-file/__ivy_ngcc__/fesm2015/ngx-input-file.js");
    /* harmony import */


    var _submit_property_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./submit-property.component */
    "./src/app/pages/submit-property/submit-property.component.ts");
    /* harmony import */


    var _register_services_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../register/services/auth.guard */
    "./src/app/pages/register/services/auth.guard.ts");

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
      component: _submit_property_component__WEBPACK_IMPORTED_MODULE_6__["SubmitPropertyComponent"],
      pathMatch: 'full',
      canActivate: [_register_services_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    }];

    var SubmitPropertyModule = function SubmitPropertyModule() {
      _classCallCheck(this, SubmitPropertyModule);
    };

    SubmitPropertyModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_submit_property_component__WEBPACK_IMPORTED_MODULE_6__["SubmitPropertyComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"], ngx_input_file__WEBPACK_IMPORTED_MODULE_5__["InputFileModule"]]
    })], SubmitPropertyModule);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-account-account-module~pages-submit-property-submit-property-module-es5.js.map