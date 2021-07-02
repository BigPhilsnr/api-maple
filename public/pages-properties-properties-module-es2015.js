(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-properties-properties-module"],{

/***/ "./node_modules/mat-video/__ivy_ngcc__/fesm2015/mat-video.js":
/*!*******************************************************************!*\
  !*** ./node_modules/mat-video/__ivy_ngcc__/fesm2015/mat-video.js ***!
  \*******************************************************************/
/*! exports provided: MatVideoModule, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatVideoModule", function() { return MatVideoModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return SecondsToTimePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return MatVideoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return EventService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return MatSliderProgressBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return MatPlayButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return MatVolumeControlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return MatDownloadButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return MatFullscreenButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return FullscreenService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return MatTimeControlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return MatQualityControlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return MatVideoSpinnerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return MatSeekProgressControlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return MatVideoSourceDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return MatVideoTrackDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return MatFrameByFrameControlComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */








const _c0 = ["player"];
const _c1 = ["video"];
function MatVideoComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.getOverlayClass("visible", "hidden"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.title, " ");
} }
function MatVideoComponent_div_8_mat_frame_by_frame_control_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-frame-by-frame-control", 21);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("video", _r2)("fps", ctx_r4.fps);
} }
function MatVideoComponent_div_8_mat_quality_control_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-quality-control", 16);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("video", _r2);
} }
function MatVideoComponent_div_8_mat_download_button_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-download-button", 22);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", ctx_r6.title)("video", _r2);
} }
function MatVideoComponent_div_8_mat_fullscreen_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-fullscreen-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("fullscreenChanged", function MatVideoComponent_div_8_mat_fullscreen_button_12_Template_mat_fullscreen_button_fullscreenChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.isFullscreen = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("player", _r0)("keyboard", ctx_r7.keyboard);
} }
function MatVideoComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-seek-progress-control", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-play-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("playChanged", function MatVideoComponent_div_8_Template_mat_play_button_playChanged_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.playing = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MatVideoComponent_div_8_mat_frame_by_frame_control_6_Template, 1, 2, "mat-frame-by-frame-control", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-volume-control", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mutedChanged", function MatVideoComponent_div_8_Template_mat_volume_control_mutedChanged_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r12.muted = $event; return ctx_r12.mutedChange.emit(ctx_r12.muted); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "mat-time-control", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MatVideoComponent_div_8_mat_quality_control_10_Template, 1, 1, "mat-quality-control", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MatVideoComponent_div_8_mat_download_button_11_Template, 1, 2, "mat-download-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, MatVideoComponent_div_8_mat_fullscreen_button_12_Template, 1, 2, "mat-fullscreen-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r3.getOverlayClass("visible", "hidden"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r3.color)("video", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("video", _r2)("keyboard", ctx_r3.keyboard);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.showFrameByFrame);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("muted", ctx_r3.muted)("color", ctx_r3.color)("video", _r2)("keyboard", ctx_r3.keyboard);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("video", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.quality);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.download);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.fullscreen);
} }
const _c2 = [[["source"]], [["track"]]];
const _c3 = ["source", "track"];
function MatFullscreenButtonComponent_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "fullscreen");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MatFullscreenButtonComponent_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "fullscreen_exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MatPlayButtonComponent_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "play_arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MatPlayButtonComponent_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "pause");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MatQualityControlComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.video.videoHeight, "p");
} }
function MatVideoSpinnerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.spinner);
} }
function MatVolumeControlComponent_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "volume_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MatVolumeControlComponent_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "volume_mute");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MatVolumeControlComponent_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "volume_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MatVolumeControlComponent_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "volume_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class EventService {
    constructor() { }
    /**
     * @param {?} renderer
     * @param {?} events
     * @return {?}
     */
    addEvents(renderer, events) {
        for (const event of events) {
            event.dispose = renderer.listen(event.element, event.name, (/**
             * @param {?} newEvent
             * @return {?}
             */
            newEvent => event.callback(newEvent)));
        }
    }
    /**
     * @param {?} events
     * @return {?}
     */
    removeEvents(events) {
        for (const event of events) {
            if (event.dispose) {
                event.dispose();
            }
        }
    }
}
EventService.ɵfac = function EventService_Factory(t) { return new (t || EventService)(); };
EventService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EventService, factory: EventService.ɵfac });
/** @nocollapse */
EventService.ctorParameters = () => [];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EventService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatVideoComponent {
    /**
     * @param {?} renderer
     * @param {?} evt
     */
    constructor(renderer, evt) {
        this.renderer = renderer;
        this.evt = evt;
        this.src = null;
        this.title = null;
        this.autoplay = false;
        this.preload = true;
        this.loop = false;
        this.quality = true;
        this.fullscreen = true;
        this.playsinline = false;
        this.showFrameByFrame = false;
        this.fps = 29.97;
        this.download = false;
        this.color = "primary";
        this.spinner = "spin";
        this.poster = null;
        this.keyboard = true;
        this.overlay = null;
        this.muted = false;
        this.mutedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.timeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.playing = false;
        this.isFullscreen = false;
        this.videoLoaded = false;
        this.isMouseMoving = false;
        this.isMouseMovingTimeout = 2000;
    }
    /**
     * @return {?}
     */
    get time() {
        return this.getVideoTag().currentTime;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set time(val) {
        /** @type {?} */
        const video = this.getVideoTag();
        if (video && val) {
            if (val > video.duration) {
                val = video.duration;
            }
            if (val < 0) {
                val = 0;
            }
            if (Math.abs(val - video.currentTime) > 0.0001) {
                video.currentTime = val;
            }
            if (Math.abs(this.lastTime - video.currentTime) > 0.0001) {
                setTimeout((/**
                 * @return {?}
                 */
                () => this.timeChange.emit(video.currentTime)), 0);
                this.lastTime = video.currentTime;
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.events = [
            {
                element: this.video.nativeElement,
                name: "loadstart",
                callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => (this.videoLoaded = false)),
                dispose: null
            },
            {
                element: this.video.nativeElement,
                name: "loadedmetadata",
                callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => this.evLoadedMetadata(event)),
                dispose: null
            },
            {
                element: this.video.nativeElement,
                name: "error",
                callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => console.error("Unhandled Video Error", event)),
                dispose: null
            },
            {
                element: this.video.nativeElement,
                name: "contextmenu",
                callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => event.preventDefault()),
                dispose: null
            },
            {
                element: this.video.nativeElement,
                name: "timeupdate",
                callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => this.evTimeUpdate(event)),
                dispose: null
            },
            {
                element: this.player.nativeElement,
                name: "mousemove",
                callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => this.evMouseMove(event)),
                dispose: null
            }
        ];
        this.video.nativeElement.onloadeddata = (/**
         * @return {?}
         */
        () => (this.videoLoaded = true));
        this.evt.addEvents(this.renderer, this.events);
        this.setVideoSrc(this.src);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.src) {
            this.setVideoSrc(this.src);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.video.nativeElement.onloadeddata = null;
        this.evt.removeEvents(this.events);
    }
    /**
     * @return {?}
     */
    load() {
        if (this.video && this.video.nativeElement) {
            this.video.nativeElement.load();
        }
    }
    /**
     * @return {?}
     */
    getVideoTag() {
        return this.video && this.video.nativeElement ? ((/** @type {?} */ (this.video.nativeElement))) : null;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    evLoadedMetadata(event) {
        this.videoWidth = this.video.nativeElement.videoWidth;
        this.videoHeight = this.video.nativeElement.videoHeight;
        this.videoLoaded = true;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    evMouseMove(event) {
        this.isMouseMoving = true;
        clearTimeout(this.isMouseMovingTimer);
        this.isMouseMovingTimer = setTimeout((/**
         * @return {?}
         */
        () => {
            this.isMouseMoving = false;
        }), this.isMouseMovingTimeout);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    evTimeUpdate(event) {
        this.time = this.getVideoTag().currentTime;
    }
    /**
     * @param {?} activeClass
     * @param {?} inactiveClass
     * @return {?}
     */
    getOverlayClass(activeClass, inactiveClass) {
        if (this.overlay === null) {
            return !this.playing || this.isMouseMoving ? activeClass : inactiveClass;
        }
        else {
            return this.overlay ? activeClass : inactiveClass;
        }
    }
    /**
     * @private
     * @param {?} src
     * @return {?}
     */
    setVideoSrc(src) {
        if (this.srcObjectURL) {
            URL.revokeObjectURL(this.srcObjectURL);
            this.srcObjectURL = null;
        }
        if (!this.video || !this.video.nativeElement) {
            return;
        }
        if (!src) {
            this.video.nativeElement.src = null;
            if ("srcObject" in HTMLVideoElement.prototype) {
                this.video.nativeElement.srcObject = new MediaStream();
            }
        }
        else if (typeof src === "string") {
            this.video.nativeElement.src = src;
        }
        else if ("srcObject" in HTMLVideoElement.prototype) {
            this.video.nativeElement.srcObject = src;
        }
        else {
            this.srcObjectURL = URL.createObjectURL(src);
            this.video.nativeElement.src = this.srcObjectURL;
        }
        this.video.nativeElement.muted = this.muted;
    }
}
MatVideoComponent.ɵfac = function MatVideoComponent_Factory(t) { return new (t || MatVideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](EventService)); };
MatVideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatVideoComponent, selectors: [["mat-video"]], viewQuery: function MatVideoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.player = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.video = _t.first);
    } }, inputs: { src: "src", title: "title", autoplay: "autoplay", preload: "preload", loop: "loop", quality: "quality", fullscreen: "fullscreen", playsinline: "playsinline", showFrameByFrame: "showFrameByFrame", fps: "fps", download: "download", color: "color", spinner: "spinner", poster: "poster", keyboard: "keyboard", overlay: "overlay", muted: "muted", time: "time" }, outputs: { mutedChange: "mutedChange", timeChange: "timeChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c3, decls: 10, vars: 10, consts: [[1, "videoplayer", 3, "ngClass"], ["player", ""], ["class", "header", 3, "ngClass", 4, "ngIf"], [1, "video", 3, "preload"], ["video", ""], ["class", "controls", 3, "ngClass", 4, "ngIf"], [3, "spinner", "video"], [1, "header", 3, "ngClass"], [1, "controls", 3, "ngClass"], [1, "progress"], [3, "color", "video"], [1, "menu"], [1, "left"], [3, "video", "keyboard", "playChanged"], [3, "video", "fps", 4, "ngIf"], [3, "muted", "color", "video", "keyboard", "mutedChanged"], [3, "video"], [1, "right"], [3, "video", 4, "ngIf"], [3, "title", "video", 4, "ngIf"], [3, "player", "keyboard", "fullscreenChanged", 4, "ngIf"], [3, "video", "fps"], [3, "title", "video"], [3, "player", "keyboard", "fullscreenChanged"]], template: function MatVideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MatVideoComponent_div_2_Template, 2, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "video", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](6, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " This browser does not support HTML5 video. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MatVideoComponent_div_8_Template, 13, 14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "mat-video-spinner", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.getOverlayClass("show-mouse", "hide-mouse"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("preload", ctx.preload ? "auto" : "metadata");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("autoplay", ctx.autoplay ? true : null)("poster", ctx.poster ? ctx.poster : null, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("loop", ctx.loop ? ctx.loop : null)("playsinline", ctx.playsinline ? true : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.videoLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("spinner", ctx.spinner)("video", _r2);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], MatVideoSpinnerComponent, MatSeekProgressControlComponent, MatPlayButtonComponent, MatVolumeControlComponent, MatTimeControlComponent, MatFrameByFrameControlComponent, MatQualityControlComponent, MatDownloadButtonComponent, MatFullscreenButtonComponent]; }, styles: [".videoplayer[_ngcontent-%COMP%]{font-family:Roboto,\"Helvetica Neue\",sans-serif;background-color:#000;position:relative;width:100%;height:100%}.header[_ngcontent-%COMP%]{color:#fff;display:flex;justify-content:center;align-items:center;position:absolute;left:0;top:0;padding:14px 0;width:100%;z-index:1;background-image:linear-gradient(to top,rgba(0,0,0,0),rgba(0,0,0,.65))}.video[_ngcontent-%COMP%]{display:block;width:100%;height:100%;z-index:0}.controls[_ngcontent-%COMP%]{color:#fff;position:absolute;left:0;bottom:0;width:100%;z-index:1;background-image:linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.65))}.controls[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%]{height:26px}.controls[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:row;justify-content:space-between;height:48px}.controls[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{justify-content:flex-start}.controls[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{justify-content:flex-end}.visible[_ngcontent-%COMP%]{visibility:visible;opacity:1;transition:opacity .5s linear}.hidden[_ngcontent-%COMP%]{visibility:hidden;opacity:0;transition:visibility .5s,opacity .5s linear}.show-mouse[_ngcontent-%COMP%]{cursor:default}.hide-mouse[_ngcontent-%COMP%]{cursor:none}", "@font-face{font-family:\"Material Icons\";font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialicons/v36/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format(\"woff2\")} .material-icons{font-family:\"Material Icons\";font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:\"liga\";-webkit-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased}"] });
/** @nocollapse */
MatVideoComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: EventService }
];
MatVideoComponent.propDecorators = {
    player: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ["player", { static: false },] }],
    video: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ["video", { static: false },] }],
    src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    autoplay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    preload: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    loop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    quality: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fullscreen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    playsinline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    showFrameByFrame: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    download: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    spinner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    poster: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    keyboard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    overlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    muted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    mutedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    timeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    time: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatVideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "mat-video",
                template: "<div #player class=\"videoplayer\" [ngClass]=\"getOverlayClass('show-mouse', 'hide-mouse')\">\n  <div class=\"header\" *ngIf=\"title\" [ngClass]=\"getOverlayClass('visible', 'hidden')\">\n    {{ title }}\n  </div>\n\n  <video\n    #video\n    class=\"video\"\n    [attr.autoplay]=\"autoplay ? true : null\"\n    [preload]=\"preload ? 'auto' : 'metadata'\"\n    [attr.poster]=\"poster ? poster : null\"\n    [attr.loop]=\"loop ? loop : null\"\n    [attr.playsinline]=\"playsinline ? true : null\"\n  >\n    <ng-content select=\"source\"></ng-content>\n    <ng-content select=\"track\"></ng-content>\n    This browser does not support HTML5 video.\n  </video>\n\n  <div class=\"controls\" *ngIf=\"videoLoaded\" [ngClass]=\"getOverlayClass('visible', 'hidden')\">\n    <div class=\"progress\">\n      <mat-seek-progress-control [color]=\"color\" [video]=\"video\"></mat-seek-progress-control>\n    </div>\n\n    <div class=\"menu\">\n      <div class=\"left\">\n        <mat-play-button (playChanged)=\"playing = $event\" [video]=\"video\" [keyboard]=\"keyboard\"> </mat-play-button>\n\n        <mat-frame-by-frame-control *ngIf=\"showFrameByFrame\" [video]=\"video\" [fps]=\"fps\"></mat-frame-by-frame-control>\n\n        <mat-volume-control\n          [muted]=\"muted\"\n          (mutedChanged)=\"muted = $event; mutedChange.emit(muted)\"\n          [color]=\"color\"\n          [video]=\"video\"\n          [keyboard]=\"keyboard\"\n        >\n        </mat-volume-control>\n\n        <mat-time-control [video]=\"video\"></mat-time-control>\n      </div>\n\n      <div class=\"right\">\n        <mat-quality-control *ngIf=\"quality\" [video]=\"video\"></mat-quality-control>\n\n        <mat-download-button *ngIf=\"download\" [title]=\"title\" [video]=\"video\"></mat-download-button>\n\n        <mat-fullscreen-button\n          *ngIf=\"fullscreen\"\n          (fullscreenChanged)=\"isFullscreen = $event\"\n          [player]=\"player\"\n          [keyboard]=\"keyboard\"\n        ></mat-fullscreen-button>\n      </div>\n    </div>\n  </div>\n\n  <mat-video-spinner [spinner]=\"spinner\" [video]=\"video\"></mat-video-spinner>\n</div>\n",
                styles: [".videoplayer{font-family:Roboto,\"Helvetica Neue\",sans-serif;background-color:#000;position:relative;width:100%;height:100%}.header{color:#fff;display:flex;justify-content:center;align-items:center;position:absolute;left:0;top:0;padding:14px 0;width:100%;z-index:1;background-image:linear-gradient(to top,rgba(0,0,0,0),rgba(0,0,0,.65))}.video{display:block;width:100%;height:100%;z-index:0}.controls{color:#fff;position:absolute;left:0;bottom:0;width:100%;z-index:1;background-image:linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.65))}.controls .progress{height:26px}.controls .menu{display:flex;align-items:center;flex-direction:row;justify-content:space-between;height:48px}.controls .menu .left{justify-content:flex-start}.controls .menu .right{justify-content:flex-end}.visible{visibility:visible;opacity:1;transition:opacity .5s linear}.hidden{visibility:hidden;opacity:0;transition:visibility .5s,opacity .5s linear}.show-mouse{cursor:default}.hide-mouse{cursor:none}", "@font-face{font-family:\"Material Icons\";font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialicons/v36/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format(\"woff2\")}::ng-deep.material-icons{font-family:\"Material Icons\";font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:\"liga\";-webkit-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: EventService }]; }, { src: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], autoplay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], preload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], loop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], quality: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], fullscreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], playsinline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], showFrameByFrame: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], fps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], download: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], spinner: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], poster: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], keyboard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], overlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], muted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], mutedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], timeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], time: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], player: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["player", { static: false }]
        }], video: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["video", { static: false }]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatVideoSourceDirective {
    /**
     * @param {?} matVideoComponent
     * @param {?} el
     */
    constructor(matVideoComponent, el) {
        this.matVideoComponent = matVideoComponent;
        this.el = el;
        this.src = null;
        this.type = null;
        this.init = true;
        this.video = matVideoComponent;
        this.source = el.nativeElement;
        this.init = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.source.src = this.src;
        this.source.type = this.type;
        if (!this.init) {
            this.video.load();
        }
    }
}
MatVideoSourceDirective.ɵfac = function MatVideoSourceDirective_Factory(t) { return new (t || MatVideoSourceDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MatVideoComponent, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
MatVideoSourceDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatVideoSourceDirective, selectors: [["", "matVideoSource", ""]], inputs: { src: "src", type: "type" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
MatVideoSourceDirective.ctorParameters = () => [
    { type: MatVideoComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
MatVideoSourceDirective.propDecorators = {
    src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatVideoSourceDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: "[matVideoSource]"
            }]
    }], function () { return [{ type: MatVideoComponent, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { src: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatVideoTrackDirective {
    /**
     * @param {?} matVideoComponent
     * @param {?} el
     */
    constructor(matVideoComponent, el) {
        this.matVideoComponent = matVideoComponent;
        this.el = el;
        this.src = null;
        this.kind = null;
        this.srclang = null;
        this.label = null;
        this.init = true;
        this.video = matVideoComponent;
        this.track = el.nativeElement;
        this.init = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.track.src = this.src;
        this.track.kind = this.kind;
        this.track.srclang = this.srclang;
        this.track.label = this.label;
        if (!this.init) {
            this.video.load();
        }
    }
}
MatVideoTrackDirective.ɵfac = function MatVideoTrackDirective_Factory(t) { return new (t || MatVideoTrackDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MatVideoComponent, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
MatVideoTrackDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MatVideoTrackDirective, selectors: [["", "matVideoTrack", ""]], inputs: { src: "src", kind: "kind", srclang: "srclang", label: "label" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
MatVideoTrackDirective.ctorParameters = () => [
    { type: MatVideoComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
MatVideoTrackDirective.propDecorators = {
    src: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    kind: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    srclang: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatVideoTrackDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: "[matVideoTrack]"
            }]
    }], function () { return [{ type: MatVideoComponent, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { src: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], kind: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], srclang: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Counter used to generate unique IDs for progress bars.
 * @type {?}
 */
let sliderprogressbarId = 0;
class MatSliderProgressBarComponent extends _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSlider"] {
    /**
     * @param {?} elementRef
     * @param {?} focusMonitor
     * @param {?} changeDetectorRef
     * @param {?} dir
     * @param {?} tabIndex
     */
    constructor(elementRef, focusMonitor, changeDetectorRef, dir, tabIndex) {
        super(elementRef, focusMonitor, changeDetectorRef, dir, tabIndex);
        this.mode = "buffer";
        this.value = 0;
        this.pBufferValue = 0;
        /**
         * The id of the progress bar.
         */
        this.sliderprogressbarId = `mat-slider-progress-bar-${sliderprogressbarId++}`;
        this.tabIndex = parseInt(tabIndex, 10) || 0;
    }
    /**
     * Buffer value of the progress bar. Defaults to zero.
     * @return {?}
     */
    get bufferValue() {
        return this.pBufferValue;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set bufferValue(v) {
        this.pBufferValue = clamp(v || 0);
    }
    /**
     * CSS styles for the track fill element.
     * @return {?}
     */
    get _trackBufferStyles() {
        if (this.mode === "buffer") {
            /** @type {?} */
            const axis = this.vertical ? "Y" : "X";
            return {
                transform: `translate${axis}(0px) scale${axis}(${this.pBufferValue / 100})`
            };
        }
    }
}
MatSliderProgressBarComponent.ɵfac = function MatSliderProgressBarComponent_Factory(t) { return new (t || MatSliderProgressBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]("tabindex")); };
MatSliderProgressBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatSliderProgressBarComponent, selectors: [["mat-slider-progress-bar"]], hostAttrs: ["role", "slider", 1, "mat-slider"], hostVars: 24, hostBindings: function MatSliderProgressBarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatSliderProgressBarComponent_focus_HostBindingHandler() { return ctx._onFocus(); })("blur", function MatSliderProgressBarComponent_blur_HostBindingHandler() { return ctx._onBlur(); })("click", function MatSliderProgressBarComponent_click_HostBindingHandler($event) { return ctx["_onClick"] ? ctx["_onClick"]($event) : null; })("mousedown", function MatSliderProgressBarComponent_mousedown_HostBindingHandler($event) { return ctx["_onMousedown"] ? ctx["_onMousedown"]($event) : null; })("keydown", function MatSliderProgressBarComponent_keydown_HostBindingHandler($event) { return ctx._onKeydown($event); })("keyup", function MatSliderProgressBarComponent_keyup_HostBindingHandler() { return ctx._onKeyup(); })("mouseenter", function MatSliderProgressBarComponent_mouseenter_HostBindingHandler() { return ctx._onMouseenter(); })("slide", function MatSliderProgressBarComponent_slide_HostBindingHandler($event) { return ctx._onSlide($event); })("slideend", function MatSliderProgressBarComponent_slideend_HostBindingHandler() { return ctx._onSlideEnd(); })("slidestart", function MatSliderProgressBarComponent_slidestart_HostBindingHandler($event) { return ctx._onSlideStart($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("tabIndex", ctx.tabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-disabled", ctx.disabled)("aria-valuemax", ctx.max)("aria-valuemin", ctx.min)("aria-valuenow", ctx.value)("aria-orientation", ctx.vertical ? "vertical" : "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-slider-disabled", ctx.disabled)("mat-slider-has-ticks", ctx.tickInterval)("mat-slider-horizontal", !ctx.vertical)("mat-slider-axis-inverted", ctx._invertAxis)("mat-slider-sliding", ctx._isSliding)("mat-slider-thumb-label-showing", ctx.thumbLabel)("mat-slider-vertical", ctx.vertical)("mat-slider-min-value", ctx._isMinValue)("mat-slider-hide-last-tick", ctx.disabled || ctx._isMinValue && ctx._thumbGap && ctx._invertAxis);
    } }, inputs: { disabled: "disabled", color: "color", tabIndex: "tabIndex", mode: "mode", value: "value", bufferValue: "bufferValue" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MAT_SLIDER_VALUE_ACCESSOR"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 18, vars: 8, consts: [[1, "mat-slider-wrapper"], ["sliderWrapper", ""], [1, "mat-slider-track-wrapper"], ["width", "100%", "height", "2", "focusable", "false", 1, "mat-slider-progress-background"], ["x", "2.5", "y", "0", "width", "5", "height", "2.5", "patternUnits", "userSpaceOnUse", 3, "id"], ["cx", "1.25", "cy", "1.25", "r", "1.25"], ["width", "100%", "height", "100%"], [1, "mat-slider-track-fill", "mat-slider-track-buffer", 3, "ngStyle"], [1, "mat-slider-track-fill", 3, "ngStyle"], [1, "mat-slider-ticks-container", 3, "ngStyle"], [1, "mat-slider-ticks", 3, "ngStyle"], [1, "mat-slider-thumb-container", 3, "ngStyle"], [1, "mat-slider-focus-ring"], [1, "mat-slider-thumb"], [1, "mat-slider-thumb-label"], [1, "mat-slider-thumb-label-text"]], template: function MatSliderProgressBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "pattern", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "circle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "rect", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.sliderprogressbarId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("fill", "url(#" + ctx.sliderprogressbarId + ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._trackBufferStyles);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._trackFillStyles);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._ticksContainerStyles);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._ticksStyles);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._thumbContainerStyles);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.displayValue);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgStyle"]], styles: ["[_nghost-%COMP%]{width:100%}.mat-slider-progress-background[_ngcontent-%COMP%]{position:absolute;height:2px;width:100%;fill:#d3d3d3}.mat-slider-track-buffer[_ngcontent-%COMP%]{background-color:#d3d3d3!important}.mat-slider-thumb[_ngcontent-%COMP%]{border-color:transparent!important;visibility:hidden;opacity:0;transition:visibility .2s,opacity .2s linear}[_nghost-%COMP%]:hover   .mat-slider-thumb[_ngcontent-%COMP%]{visibility:visible;opacity:1;transition:opacity .2s linear}"], changeDetection: 0 });
/** @nocollapse */
MatSliderProgressBarComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"], args: ["tabindex",] }] }
];
MatSliderProgressBarComponent.propDecorators = {
    mode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    bufferValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSliderProgressBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "mat-slider-progress-bar",
                template: "<div class=\"mat-slider-wrapper\" #sliderWrapper>\r\n  <div class=\"mat-slider-track-wrapper\">\r\n    <svg width=\"100%\" height=\"2\" focusable=\"false\" class=\"mat-slider-progress-background\">\r\n      <defs>\r\n        <pattern [id]=\"sliderprogressbarId\" x=\"2.5\" y=\"0\" width=\"5\" height=\"2.5\" patternUnits=\"userSpaceOnUse\">\r\n          <circle cx=\"1.25\" cy=\"1.25\" r=\"1.25\" />\r\n        </pattern>\r\n      </defs>\r\n      <rect [attr.fill]=\"'url(#' + sliderprogressbarId + ')'\" width=\"100%\" height=\"100%\" />\r\n    </svg>\r\n    <div class=\"mat-slider-track-fill mat-slider-track-buffer\" [ngStyle]=\"_trackBufferStyles\"></div>\r\n    <div class=\"mat-slider-track-fill\" [ngStyle]=\"_trackFillStyles\"></div>\r\n  </div>\r\n  <div class=\"mat-slider-ticks-container\" [ngStyle]=\"_ticksContainerStyles\">\r\n    <div class=\"mat-slider-ticks\" [ngStyle]=\"_ticksStyles\"></div>\r\n  </div>\r\n  <div class=\"mat-slider-thumb-container\" [ngStyle]=\"_thumbContainerStyles\">\r\n    <div class=\"mat-slider-focus-ring\"></div>\r\n    <div class=\"mat-slider-thumb\"></div>\r\n    <div class=\"mat-slider-thumb-label\">\r\n      <span class=\"mat-slider-thumb-label-text\">{{ displayValue }}</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                providers: [_angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MAT_SLIDER_VALUE_ACCESSOR"]],
                host: {
                    "(focus)": "_onFocus()",
                    "(blur)": "_onBlur()",
                    "(click)": 'this["_onClick"] ? this["_onClick"]($event) : null',
                    // Angular 5/6 support
                    "(mousedown)": 'this["_onMousedown"] ? this["_onMousedown"]($event) : null',
                    // Angular 7 support
                    "(keydown)": "_onKeydown($event)",
                    "(keyup)": "_onKeyup()",
                    "(mouseenter)": "_onMouseenter()",
                    "(slide)": "_onSlide($event)",
                    "(slideend)": "_onSlideEnd()",
                    "(slidestart)": "_onSlideStart($event)",
                    class: "mat-slider",
                    role: "slider",
                    "[tabIndex]": "tabIndex",
                    "[attr.aria-disabled]": "disabled",
                    "[attr.aria-valuemax]": "max",
                    "[attr.aria-valuemin]": "min",
                    "[attr.aria-valuenow]": "value",
                    "[attr.aria-orientation]": 'vertical ? "vertical" : "horizontal"',
                    "[class.mat-slider-disabled]": "disabled",
                    "[class.mat-slider-has-ticks]": "tickInterval",
                    "[class.mat-slider-horizontal]": "!vertical",
                    "[class.mat-slider-axis-inverted]": "_invertAxis",
                    "[class.mat-slider-sliding]": "_isSliding",
                    "[class.mat-slider-thumb-label-showing]": "thumbLabel",
                    "[class.mat-slider-vertical]": "vertical",
                    "[class.mat-slider-min-value]": "_isMinValue",
                    "[class.mat-slider-hide-last-tick]": "disabled || _isMinValue && _thumbGap && _invertAxis"
                },
                inputs: ["disabled", "color", "tabIndex"],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                styles: [":host{width:100%}.mat-slider-progress-background{position:absolute;height:2px;width:100%;fill:#d3d3d3}.mat-slider-track-buffer{background-color:#d3d3d3!important}.mat-slider-thumb{border-color:transparent!important;visibility:hidden;opacity:0;transition:visibility .2s,opacity .2s linear}:host:hover .mat-slider-thumb{visibility:visible;opacity:1;transition:opacity .2s linear}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
                args: ["tabindex"]
            }] }]; }, { mode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], bufferValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/**
 * Clamps a value to be between two numbers, by default 0 and 100.
 * @param {?} v
 * @param {?=} min
 * @param {?=} max
 * @return {?}
 */
function clamp(v, min = 0, max = 100) {
    return Math.max(min, Math.min(max, v));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SecondsToTimePipe {
    constructor() {
        this.times = {
            year: 31557600,
            month: 2629746,
            day: 86400,
            hour: 3600
        };
    }
    /**
     * @param {?} seconds
     * @return {?}
     */
    transform(seconds) {
        if (!seconds) {
            return "0:00";
        }
        else {
            /** @type {?} */
            let timeString = "";
            for (const key in this.times) {
                if (Math.floor(seconds / this.times[key]) > 0) {
                    timeString += Math.floor(seconds / this.times[key]).toString() + ":";
                    seconds = seconds - this.times[key] * Math.floor(seconds / this.times[key]);
                }
            }
            timeString += Math.floor(seconds / 60).toString() + ":";
            seconds = seconds - 60 * Math.floor(seconds / 60);
            if (Math.floor(seconds) < 10) {
                timeString += "0";
            }
            timeString += Math.floor(seconds).toString();
            return timeString;
        }
    }
}
SecondsToTimePipe.ɵfac = function SecondsToTimePipe_Factory(t) { return new (t || SecondsToTimePipe)(); };
SecondsToTimePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "secondsToTime", type: SecondsToTimePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SecondsToTimePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
                name: "secondsToTime"
            }]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FullscreenService {
    constructor() {
        this.fnMap = [
            // Object keys
            ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
            // New WebKit
            [
                "webkitRequestFullscreen",
                "webkitExitFullscreen",
                "webkitFullscreenElement",
                "webkitFullscreenEnabled",
                "webkitfullscreenchange",
                "webkitfullscreenerror"
            ],
            // Old WebKit (Safari 5.1)
            [
                "webkitRequestFullScreen",
                "webkitCancelFullScreen",
                "webkitCurrentFullScreenElement",
                "webkitCancelFullScreen",
                "webkitfullscreenchange",
                "webkitfullscreenerror"
            ],
            // Mozilla
            [
                "mozRequestFullScreen",
                "mozCancelFullScreen",
                "mozFullScreenElement",
                "mozFullScreenEnabled",
                "mozfullscreenchange",
                "mozfullscreenerror"
            ],
            // MS
            ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
        ];
        this.keyboardAllowed = typeof Element !== "undefined" && "ALLOW_KEYBOARD_INPUT" in Element;
        /** @type {?} */
        const ret = {};
        /** @type {?} */
        let val;
        for (let i = 0; i < this.fnMap.length; i++) {
            val = this.fnMap[i];
            if (val && val[1] in document) {
                for (i = 0; i < val.length; i++) {
                    // Map everything to the first list of keys
                    ret[this.fnMap[0][i].toString()] = val[i];
                }
                this.fn = ret;
            }
        }
    }
    /**
     * @param {?} elem
     * @return {?}
     */
    request(elem) {
        /** @type {?} */
        const request = this.fn.requestFullscreen;
        elem = elem || document.documentElement;
        // Work around Safari 5.1 bug: reports support for
        // keyboard in fullscreen even though it doesn't.
        // Browser sniffing, since the alternative with
        // setTimeout is even worse.
        if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) {
            elem[request]();
        }
        else {
            elem[request](this.keyboardAllowed ? ((/** @type {?} */ (Element))).ALLOW_KEYBOARD_INPUT : {});
        }
    }
    /**
     * @return {?}
     */
    exit() {
        document[this.fn.exitFullscreen]();
    }
    /**
     * @param {?} elem
     * @return {?}
     */
    toggle(elem) {
        if (this.isFullscreen()) {
            this.exit();
        }
        else {
            this.request(elem);
        }
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    onChange(callback) {
        document.addEventListener(this.fn.fullscreenchange, callback, false);
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    onError(callback) {
        document.addEventListener(this.fn.fullscreenerror, callback, false);
    }
    /**
     * @return {?}
     */
    isFullscreen() {
        return Boolean(document[this.fn.fullscreenElement]);
    }
    /**
     * @return {?}
     */
    isEnabled() {
        // Coerce to boolean in case of old WebKit
        return Boolean(document[this.fn.fullscreenEnabled]);
    }
    /**
     * @return {?}
     */
    getElement() {
        return document[this.fn.fullscreenElement];
    }
}
FullscreenService.ɵfac = function FullscreenService_Factory(t) { return new (t || FullscreenService)(); };
FullscreenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FullscreenService, factory: FullscreenService.ɵfac });
/** @nocollapse */
FullscreenService.ctorParameters = () => [];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FullscreenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return []; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatDownloadButtonComponent {
    constructor() { }
}
MatDownloadButtonComponent.ɵfac = function MatDownloadButtonComponent_Factory(t) { return new (t || MatDownloadButtonComponent)(); };
MatDownloadButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatDownloadButtonComponent, selectors: [["mat-download-button"]], inputs: { video: "video", title: "title" }, decls: 3, vars: 2, consts: [["mat-icon-button", "", 3, "href", "download"]], template: function MatDownloadButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "file_download");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.video == null ? null : ctx.video.currentSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("download", ctx.title);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: ["a[_ngcontent-%COMP%]{color:inherit;text-decoration:none}"] });
/** @nocollapse */
MatDownloadButtonComponent.ctorParameters = () => [];
MatDownloadButtonComponent.propDecorators = {
    video: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatDownloadButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "mat-download-button",
                template: "<a mat-icon-button [href]=\"video?.currentSrc\" [download]=\"title\">\r\n  <mat-icon>file_download</mat-icon>\r\n</a>\r\n",
                styles: ["a{color:inherit;text-decoration:none}"]
            }]
    }], function () { return []; }, { video: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatFrameByFrameControlComponent {
    constructor() {
        this.fps = 29.97;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} nbFrames
     * @return {?}
     */
    seekFrames(nbFrames) {
        if (!this.video.paused) {
            this.video.pause();
        }
        /** @type {?} */
        const currentFrames = this.video.currentTime * this.fps;
        /** @type {?} */
        const newPos = (currentFrames + nbFrames) / this.fps + 0.00001;
        this.video.currentTime = newPos;
    }
}
MatFrameByFrameControlComponent.ɵfac = function MatFrameByFrameControlComponent_Factory(t) { return new (t || MatFrameByFrameControlComponent)(); };
MatFrameByFrameControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatFrameByFrameControlComponent, selectors: [["mat-frame-by-frame-control"]], inputs: { fps: "fps", video: "video" }, decls: 12, vars: 0, consts: [["mat-icon-button", "", 3, "click"]], template: function MatFrameByFrameControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatFrameByFrameControlComponent_Template_button_click_0_listener() { return ctx.seekFrames(0 - 5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "skip_previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatFrameByFrameControlComponent_Template_button_click_3_listener() { return ctx.seekFrames(0 - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "arrow_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatFrameByFrameControlComponent_Template_button_click_6_listener() { return ctx.seekFrames(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "arrow_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatFrameByFrameControlComponent_Template_button_click_9_listener() { return ctx.seekFrames(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "skip_next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [""] });
/** @nocollapse */
MatFrameByFrameControlComponent.ctorParameters = () => [];
MatFrameByFrameControlComponent.propDecorators = {
    video: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fps: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatFrameByFrameControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "mat-frame-by-frame-control",
                template: "<button mat-icon-button (click)=\"seekFrames(-5)\">\r\n  <mat-icon>skip_previous</mat-icon>\r\n</button>\r\n\r\n<button mat-icon-button (click)=\"seekFrames(-1)\">\r\n  <mat-icon>arrow_left</mat-icon>\r\n</button>\r\n\r\n<button mat-icon-button (click)=\"seekFrames(1)\">\r\n  <mat-icon>arrow_right</mat-icon>\r\n</button>\r\n\r\n<button mat-icon-button (click)=\"seekFrames(5)\">\r\n  <mat-icon>skip_next</mat-icon>\r\n</button>\r\n",
                styles: [""]
            }]
    }], function () { return []; }, { fps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], video: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatFullscreenButtonComponent {
    /**
     * @param {?} fscreen
     * @param {?} evt
     */
    constructor(fscreen, evt) {
        this.fscreen = fscreen;
        this.evt = evt;
        this.canFullscreen = false;
        this.fullscreen = false;
        this.fullscreenChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.keyboard = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.fscreen.isEnabled()) {
            this.canFullscreen = true;
        }
        this.fscreen.onChange((/**
         * @param {?} event
         * @return {?}
         */
        event => (this.fscreen.isFullscreen() ? this.onChangesFullscreen(true) : this.onChangesFullscreen(false))));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setFullscreen(value) {
        if (this.canFullscreen && this.fullscreen !== value) {
            this.toggleFullscreen();
        }
    }
    /**
     * @return {?}
     */
    toggleFullscreen() {
        this.fullscreen = !this.fullscreen;
        this.updateFullscreen();
    }
    /**
     * @return {?}
     */
    updateFullscreen() {
        this.fullscreen ? this.fscreen.request(this.player) : this.fscreen.exit();
        this.fullscreenChanged.emit(this.fullscreen);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onChangesFullscreen(value) {
        this.fullscreen = value;
        this.fullscreenChanged.emit(this.fullscreen);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFullscreenKey(event) {
        if (this.keyboard) {
            this.toggleFullscreen();
            event.preventDefault();
        }
    }
}
MatFullscreenButtonComponent.ɵfac = function MatFullscreenButtonComponent_Factory(t) { return new (t || MatFullscreenButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FullscreenService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](EventService)); };
MatFullscreenButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatFullscreenButtonComponent, selectors: [["mat-fullscreen-button"]], hostBindings: function MatFullscreenButtonComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.f", function MatFullscreenButtonComponent_keyup_f_HostBindingHandler($event) { return ctx.onFullscreenKey($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    } }, inputs: { fullscreen: "fullscreen", keyboard: "keyboard", player: "player" }, outputs: { fullscreenChanged: "fullscreenChanged" }, decls: 3, vars: 3, consts: [["mat-icon-button", "", 3, "disabled", "click"], [4, "ngIf"]], template: function MatFullscreenButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatFullscreenButtonComponent_Template_button_click_0_listener() { return ctx.toggleFullscreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MatFullscreenButtonComponent_mat_icon_1_Template, 2, 0, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MatFullscreenButtonComponent_mat_icon_2_Template, 2, 0, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.canFullscreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.fullscreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fullscreen);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [""] });
/** @nocollapse */
MatFullscreenButtonComponent.ctorParameters = () => [
    { type: FullscreenService },
    { type: EventService }
];
MatFullscreenButtonComponent.propDecorators = {
    player: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fullscreen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    fullscreenChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    keyboard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    onFullscreenKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ["document:keyup.f", ["$event"],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatFullscreenButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "mat-fullscreen-button",
                template: "<button mat-icon-button [disabled]=\"!canFullscreen\" (click)=\"toggleFullscreen()\">\r\n  <mat-icon *ngIf=\"!fullscreen\">fullscreen</mat-icon>\r\n  <mat-icon *ngIf=\"fullscreen\">fullscreen_exit</mat-icon>\r\n</button>\r\n",
                styles: [""]
            }]
    }], function () { return [{ type: FullscreenService }, { type: EventService }]; }, { fullscreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], fullscreenChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], keyboard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onFullscreenKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ["document:keyup.f", ["$event"]]
        }], player: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatPlayButtonComponent {
    /**
     * @param {?} renderer
     * @param {?} evt
     */
    constructor(renderer, evt) {
        this.renderer = renderer;
        this.evt = evt;
        this.play = false;
        this.playChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.keyboard = true;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.events = [
            { element: this.video, name: "play", callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => this.setVideoPlayback(true)), dispose: null },
            { element: this.video, name: "pause", callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => this.setVideoPlayback(false)), dispose: null },
            { element: this.video, name: "durationchange", callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => this.setVideoPlayback(false)), dispose: null },
            { element: this.video, name: "ended", callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => this.setVideoPlayback(false)), dispose: null },
            { element: this.video, name: "click", callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => this.toggleVideoPlayback()), dispose: null }
        ];
        this.evt.addEvents(this.renderer, this.events);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.evt.removeEvents(this.events);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setVideoPlayback(value) {
        if (this.play !== value) {
            this.toggleVideoPlayback();
        }
    }
    /**
     * @return {?}
     */
    toggleVideoPlayback() {
        this.play = !this.play;
        this.updateVideoPlayback();
    }
    /**
     * @return {?}
     */
    updateVideoPlayback() {
        this.play ? this.video.play() : this.video.pause();
        this.playChanged.emit(this.play);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onPlayKey(event) {
        if (this.keyboard) {
            this.toggleVideoPlayback();
            event.preventDefault();
        }
    }
}
MatPlayButtonComponent.ɵfac = function MatPlayButtonComponent_Factory(t) { return new (t || MatPlayButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](EventService)); };
MatPlayButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatPlayButtonComponent, selectors: [["mat-play-button"]], hostBindings: function MatPlayButtonComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.space", function MatPlayButtonComponent_keyup_space_HostBindingHandler($event) { return ctx.onPlayKey($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    } }, inputs: { play: "play", keyboard: "keyboard", video: "video" }, outputs: { playChanged: "playChanged" }, decls: 3, vars: 2, consts: [["mat-icon-button", "", 3, "click"], [4, "ngIf"]], template: function MatPlayButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatPlayButtonComponent_Template_button_click_0_listener() { return ctx.toggleVideoPlayback(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MatPlayButtonComponent_mat_icon_1_Template, 2, 0, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MatPlayButtonComponent_mat_icon_2_Template, 2, 0, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.play);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.play);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [""] });
/** @nocollapse */
MatPlayButtonComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: EventService }
];
MatPlayButtonComponent.propDecorators = {
    video: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    play: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    playChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    keyboard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    onPlayKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ["document:keyup.space", ["$event"],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatPlayButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "mat-play-button",
                template: "<button mat-icon-button (click)=\"toggleVideoPlayback()\">\r\n  <mat-icon *ngIf=\"!play\">play_arrow</mat-icon>\r\n  <mat-icon *ngIf=\"play\">pause</mat-icon>\r\n</button>\r\n",
                styles: [""]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: EventService }]; }, { play: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], playChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], keyboard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onPlayKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ["document:keyup.space", ["$event"]]
        }], video: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatQualityControlComponent {
    constructor() { }
}
MatQualityControlComponent.ɵfac = function MatQualityControlComponent_Factory(t) { return new (t || MatQualityControlComponent)(); };
MatQualityControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatQualityControlComponent, selectors: [["mat-quality-control"]], inputs: { video: "video" }, decls: 1, vars: 1, consts: [["class", "quality", 4, "ngIf"], [1, "quality"]], template: function MatQualityControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MatQualityControlComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.video && ctx.video.videoHeight);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"]], styles: [".quality[_ngcontent-%COMP%]{display:inline-block;font-size:12px;padding-left:12px;padding-right:12px}"] });
/** @nocollapse */
MatQualityControlComponent.ctorParameters = () => [];
MatQualityControlComponent.propDecorators = {
    video: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatQualityControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "mat-quality-control",
                template: "<div *ngIf=\"video && video.videoHeight\" class=\"quality\">{{ video.videoHeight }}p</div>\r\n",
                styles: [".quality{display:inline-block;font-size:12px;padding-left:12px;padding-right:12px}"]
            }]
    }], function () { return []; }, { video: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatSeekProgressControlComponent {
    /**
     * @param {?} renderer
     * @param {?} evt
     */
    constructor(renderer, evt) {
        this.renderer = renderer;
        this.evt = evt;
        this.curTimePercent = 0;
        this.bufTimePercent = 0;
        this.video = null;
        this.color = "primary";
        this.currentTime = 0;
        this.currentTimeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.bufferedTime = 0;
        this.bufferedTimeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.events = [
            { element: this.video, name: "seeking", callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => this.updateCurrentTime(this.video.currentTime)), dispose: null },
            { element: this.video, name: "canplaythrough", callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => this.updateBufferedTime()), dispose: null },
            { element: this.video, name: "timeupdate", callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => this.updateCurrentTime(this.video.currentTime)), dispose: null },
            { element: this.video, name: "progress", callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => this.updateBufferedTime()), dispose: null }
        ];
        this.evt.addEvents(this.renderer, this.events);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.evt.removeEvents(this.events);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    seekVideo(value) {
        /** @type {?} */
        const percentage = value / 100;
        /** @type {?} */
        const newTime = this.video.duration * percentage;
        this.video.currentTime = newTime;
    }
    /**
     * @param {?} time
     * @return {?}
     */
    updateCurrentTime(time) {
        this.currentTime = time;
        this.curTimePercent = this.updateTime(this.currentTimeChanged, this.currentTime);
    }
    /**
     * @return {?}
     */
    updateBufferedTime() {
        if (this.video.buffered.length > 0) {
            /** @type {?} */
            let largestBufferValue = 0;
            for (let i = 0; i < this.video.buffered.length; i++) {
                /** @type {?} */
                const cur = this.video.currentTime;
                /** @type {?} */
                const start = this.video.buffered.start(i);
                /** @type {?} */
                const end = this.video.buffered.end(i);
                if (start <= cur && end > cur && end - start > largestBufferValue) {
                    largestBufferValue = end;
                }
            }
            this.bufferedTime = largestBufferValue;
            this.bufTimePercent = this.updateTime(this.bufferedTimeChanged, this.bufferedTime);
        }
    }
    /**
     * @param {?} emitter
     * @param {?} time
     * @return {?}
     */
    updateTime(emitter, time) {
        emitter.emit(time);
        return (time / this.video.duration) * 100;
    }
}
MatSeekProgressControlComponent.ɵfac = function MatSeekProgressControlComponent_Factory(t) { return new (t || MatSeekProgressControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](EventService)); };
MatSeekProgressControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatSeekProgressControlComponent, selectors: [["mat-seek-progress-control"]], inputs: { video: "video", color: "color", currentTime: "currentTime", bufferedTime: "bufferedTime" }, outputs: { currentTimeChanged: "currentTimeChanged", bufferedTimeChanged: "bufferedTimeChanged" }, decls: 1, vars: 3, consts: [["mode", "buffer", "step", "0.01", 3, "color", "value", "bufferValue", "input"]], template: function MatSeekProgressControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-slider-progress-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function MatSeekProgressControlComponent_Template_mat_slider_progress_bar_input_0_listener($event) { return ctx.seekVideo($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx.color)("value", ctx.curTimePercent)("bufferValue", ctx.bufTimePercent);
    } }, directives: [MatSliderProgressBarComponent], styles: [""] });
/** @nocollapse */
MatSeekProgressControlComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: EventService }
];
MatSeekProgressControlComponent.propDecorators = {
    video: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    currentTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    currentTimeChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    bufferedTime: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    bufferedTimeChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSeekProgressControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "mat-seek-progress-control",
                template: "<mat-slider-progress-bar\r\n  [color]=\"color\"\r\n  mode=\"buffer\"\r\n  step=\"0.01\"\r\n  [value]=\"curTimePercent\"\r\n  [bufferValue]=\"bufTimePercent\"\r\n  (input)=\"seekVideo($event.value)\"\r\n></mat-slider-progress-bar>\r\n",
                styles: [""]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: EventService }]; }, { video: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], currentTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], currentTimeChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], bufferedTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], bufferedTimeChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatTimeControlComponent {
    constructor() { }
}
MatTimeControlComponent.ɵfac = function MatTimeControlComponent_Factory(t) { return new (t || MatTimeControlComponent)(); };
MatTimeControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatTimeControlComponent, selectors: [["mat-time-control"]], inputs: { video: "video" }, decls: 4, vars: 6, consts: [[1, "playtime"]], template: function MatTimeControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "secondsToTime");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "secondsToTime");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, ctx.video == null ? null : ctx.video.currentTime), " / ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, ctx.video == null ? null : ctx.video.duration), "");
    } }, pipes: [SecondsToTimePipe], styles: [".playtime[_ngcontent-%COMP%]{display:inline;font-size:12px}"] });
/** @nocollapse */
MatTimeControlComponent.ctorParameters = () => [];
MatTimeControlComponent.propDecorators = {
    video: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTimeControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "mat-time-control",
                template: "<div class=\"playtime\">{{ video?.currentTime | secondsToTime }} / {{ video?.duration | secondsToTime }}</div>\r\n",
                styles: [".playtime{display:inline;font-size:12px}"]
            }]
    }], function () { return []; }, { video: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatVideoSpinnerComponent {
    /**
     * @param {?} renderer
     * @param {?} evt
     */
    constructor(renderer, evt) {
        this.renderer = renderer;
        this.evt = evt;
        this.spinner = "spin";
        this.videoBuffering = false;
        this.events = [];
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.events = [
            { element: this.video, name: "loadstart", callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => (this.videoBuffering = true)), dispose: null },
            { element: this.video, name: "loadedmetadata", callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => (this.videoBuffering = false)), dispose: null },
            { element: this.video, name: "playing", callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => (this.videoBuffering = false)), dispose: null },
            { element: this.video, name: "waiting", callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => (this.videoBuffering = true)), dispose: null },
            { element: this.video, name: "durationchange", callback: (/**
                 * @param {?} event
                 * @return {?}
                 */
                event => (this.videoBuffering = true)), dispose: null }
        ];
        this.video.onloadeddata = (/**
         * @return {?}
         */
        () => (this.videoBuffering = false));
        this.evt.addEvents(this.renderer, this.events);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.video.onloadeddata = null;
        this.evt.removeEvents(this.events);
    }
}
MatVideoSpinnerComponent.ɵfac = function MatVideoSpinnerComponent_Factory(t) { return new (t || MatVideoSpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](EventService)); };
MatVideoSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatVideoSpinnerComponent, selectors: [["mat-video-spinner"]], inputs: { spinner: "spinner", video: "video" }, decls: 1, vars: 1, consts: [[3, "class", 4, "ngIf"]], template: function MatVideoSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MatVideoSpinnerComponent_div_0_Template, 1, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.videoBuffering);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"]], styles: ["[_nghost-%COMP%]{position:absolute;left:calc(50% - 32px);top:calc(50% - 32px);z-index:1}", ".spin[_ngcontent-%COMP%]{box-sizing:border-box;width:64px;height:64px;border-radius:100%;border:10px solid rgba(255,255,255,.2);border-top-color:#fff;-webkit-animation:1s linear infinite spin;animation:1s linear infinite spin}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}", ".dot[_ngcontent-%COMP%]{width:64px;height:64px;background-color:#fff;border-radius:100%;-webkit-animation:1s ease-in-out infinite dot;animation:1s ease-in-out infinite dot}@-webkit-keyframes dot{0%{-webkit-transform:scale(0)}100%{-webkit-transform:scale(1);opacity:0}}@keyframes dot{0%{transform:scale(0)}100%{transform:scale(1);opacity:0}}", ".split-ring[_ngcontent-%COMP%]{display:inline-block;width:64px;height:64px}.split-ring[_ngcontent-%COMP%]:after{content:\" \";display:block;width:46px;height:46px;margin:1px;border-radius:50%;border:5px solid #fff;border-color:#fff transparent;-webkit-animation:1.2s linear infinite split-ring;animation:1.2s linear infinite split-ring}@-webkit-keyframes split-ring{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes split-ring{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}", ".hourglass[_ngcontent-%COMP%]{display:inline-block;position:relative;width:64px;height:64px}.hourglass[_ngcontent-%COMP%]:after{content:\" \";display:block;border-radius:50%;width:0;height:0;margin:6px;box-sizing:border-box;border:26px solid #fff;border-color:#fff transparent;-webkit-animation:1.2s infinite hourglass;animation:1.2s infinite hourglass}@-webkit-keyframes hourglass{0%{-webkit-transform:rotate(0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19)}50%{-webkit-transform:rotate(360deg);-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1)}100%{-webkit-transform:rotate(720deg)}}@keyframes hourglass{0%{transform:rotate(0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}50%{transform:rotate(360deg);-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}100%{transform:rotate(720deg)}}"] });
/** @nocollapse */
MatVideoSpinnerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: EventService }
];
MatVideoSpinnerComponent.propDecorators = {
    video: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    spinner: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatVideoSpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "mat-video-spinner",
                template: "<div *ngIf=\"videoBuffering\" [class]=\"spinner\"></div>\n",
                styles: [":host{position:absolute;left:calc(50% - 32px);top:calc(50% - 32px);z-index:1}", ".spin{box-sizing:border-box;width:64px;height:64px;border-radius:100%;border:10px solid rgba(255,255,255,.2);border-top-color:#fff;-webkit-animation:1s linear infinite spin;animation:1s linear infinite spin}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}", ".dot{width:64px;height:64px;background-color:#fff;border-radius:100%;-webkit-animation:1s ease-in-out infinite dot;animation:1s ease-in-out infinite dot}@-webkit-keyframes dot{0%{-webkit-transform:scale(0)}100%{-webkit-transform:scale(1);opacity:0}}@keyframes dot{0%{transform:scale(0)}100%{transform:scale(1);opacity:0}}", ".split-ring{display:inline-block;width:64px;height:64px}.split-ring:after{content:\" \";display:block;width:46px;height:46px;margin:1px;border-radius:50%;border:5px solid #fff;border-color:#fff transparent;-webkit-animation:1.2s linear infinite split-ring;animation:1.2s linear infinite split-ring}@-webkit-keyframes split-ring{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes split-ring{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}", ".hourglass{display:inline-block;position:relative;width:64px;height:64px}.hourglass:after{content:\" \";display:block;border-radius:50%;width:0;height:0;margin:6px;box-sizing:border-box;border:26px solid #fff;border-color:#fff transparent;-webkit-animation:1.2s infinite hourglass;animation:1.2s infinite hourglass}@-webkit-keyframes hourglass{0%{-webkit-transform:rotate(0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19)}50%{-webkit-transform:rotate(360deg);-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1)}100%{-webkit-transform:rotate(720deg)}}@keyframes hourglass{0%{transform:rotate(0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}50%{transform:rotate(360deg);-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}100%{transform:rotate(720deg)}}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: EventService }]; }, { spinner: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], video: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatVolumeControlComponent {
    /**
     * @param {?} evt
     */
    constructor(evt) {
        this.evt = evt;
        this.video = null;
        this.color = "primary";
        this.volume = 1;
        this.volumeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.muted = false;
        this.mutedChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.keyboard = true;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.updateMuted(false);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.muted) {
            this.updateMuted(false);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setVolume(value) {
        this.volume = value;
        this.video.volume = this.volume;
        this.volumeChanged.emit(this.volume);
        if (this.volume > 0) {
            this.setMuted(false);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setMuted(value) {
        if (this.muted !== value) {
            this.toggleMuted();
        }
    }
    /**
     * @return {?}
     */
    toggleMuted() {
        this.muted = !this.muted;
        this.updateMuted();
    }
    /**
     * @param {?=} emitChange
     * @return {?}
     */
    updateMuted(emitChange = true) {
        if (this.video) {
            this.video.muted = this.muted;
        }
        if (emitChange) {
            this.mutedChanged.emit(this.muted);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMuteKey(event) {
        if (this.keyboard) {
            this.toggleMuted();
            event.preventDefault();
        }
    }
}
MatVolumeControlComponent.ɵfac = function MatVolumeControlComponent_Factory(t) { return new (t || MatVolumeControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](EventService)); };
MatVolumeControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatVolumeControlComponent, selectors: [["mat-volume-control"]], hostBindings: function MatVolumeControlComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.m", function MatVolumeControlComponent_keyup_m_HostBindingHandler($event) { return ctx.onMuteKey($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    } }, inputs: { video: "video", color: "color", volume: "volume", muted: "muted", keyboard: "keyboard" }, outputs: { volumeChanged: "volumeChanged", mutedChanged: "mutedChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 5, consts: [[1, "volume-control"], ["mat-icon-button", "", 3, "click"], [4, "ngIf"], ["min", "0", "max", "1", "step", "0.01", "value", "1", 1, "volume-slider", 3, "color", "input"]], template: function MatVolumeControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatVolumeControlComponent_Template_button_click_1_listener() { return ctx.toggleMuted(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MatVolumeControlComponent_mat_icon_2_Template, 2, 0, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MatVolumeControlComponent_mat_icon_3_Template, 2, 0, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MatVolumeControlComponent_mat_icon_4_Template, 2, 0, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MatVolumeControlComponent_mat_icon_5_Template, 2, 0, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-slider", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function MatVolumeControlComponent_Template_mat_slider_input_6_listener($event) { return ctx.setVolume($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.muted || ctx.volume === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.muted && ctx.volume > 0 && ctx.volume < 0.25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.muted && ctx.volume >= 0.25 && ctx.volume < 0.5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.muted && ctx.volume >= 0.5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx.color);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSlider"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".volume-control[_ngcontent-%COMP%]{display:inline}.volume-slider[_ngcontent-%COMP%]{margin-left:-15px} .mat-slider-thumb{border-color:transparent!important} .mat-slider-track-background{background-color:#d3d3d3!important;transform:translateX(0)!important}.volume-control[_ngcontent-%COMP%]   .volume-slider[_ngcontent-%COMP%]{visibility:hidden;opacity:0;min-width:0;width:0;transition:visibility .2s,opacity .2s linear,width .2s linear}.volume-control[_ngcontent-%COMP%]:hover   .volume-slider[_ngcontent-%COMP%]{visibility:visible;opacity:1;min-width:90px;width:90px;transition:opacity .2s linear,width .2s linear,min-width .2s linear}"] });
/** @nocollapse */
MatVolumeControlComponent.ctorParameters = () => [
    { type: EventService }
];
MatVolumeControlComponent.propDecorators = {
    video: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    volume: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    volumeChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    muted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    mutedChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    keyboard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    onMuteKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ["document:keyup.m", ["$event"],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatVolumeControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "mat-volume-control",
                template: "<div class=\"volume-control\">\r\n  <button mat-icon-button (click)=\"toggleMuted()\">\r\n    <mat-icon *ngIf=\"muted || volume === 0\">volume_off</mat-icon>\r\n    <mat-icon *ngIf=\"!muted && volume > 0 && volume < 0.25\">volume_mute</mat-icon>\r\n    <mat-icon *ngIf=\"!muted && volume >= 0.25 && volume < 0.5\">volume_down</mat-icon>\r\n    <mat-icon *ngIf=\"!muted && volume >= 0.5\">volume_up</mat-icon>\r\n  </button>\r\n  <mat-slider class=\"volume-slider\" [color]=\"color\" min=\"0\" max=\"1\" step=\"0.01\" value=\"1\" (input)=\"setVolume($event.value)\"> </mat-slider>\r\n</div>\r\n",
                styles: [".volume-control{display:inline}.volume-slider{margin-left:-15px}::ng-deep.mat-slider-thumb{border-color:transparent!important}::ng-deep.mat-slider-track-background{background-color:#d3d3d3!important;transform:translateX(0)!important}.volume-control .volume-slider{visibility:hidden;opacity:0;min-width:0;width:0;transition:visibility .2s,opacity .2s linear,width .2s linear}.volume-control:hover .volume-slider{visibility:visible;opacity:1;min-width:90px;width:90px;transition:opacity .2s linear,width .2s linear,min-width .2s linear}"]
            }]
    }], function () { return [{ type: EventService }]; }, { video: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], volume: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], volumeChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], muted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], mutedChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], keyboard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onMuteKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ["document:keyup.m", ["$event"]]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatVideoModule {
}
MatVideoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MatVideoModule });
MatVideoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function MatVideoModule_Factory(t) { return new (t || MatVideoModule)(); }, providers: [FullscreenService, EventService], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatVideoModule, { declarations: function () { return [SecondsToTimePipe, MatVideoComponent, MatSliderProgressBarComponent, MatPlayButtonComponent, MatVolumeControlComponent, MatDownloadButtonComponent, MatFullscreenButtonComponent, MatTimeControlComponent, MatQualityControlComponent, MatVideoSpinnerComponent, MatSeekProgressControlComponent, MatVideoSourceDirective, MatVideoTrackDirective, MatFrameByFrameControlComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"]]; }, exports: function () { return [MatVideoComponent, MatVideoSourceDirective, MatVideoTrackDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatVideoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    SecondsToTimePipe,
                    MatVideoComponent,
                    MatSliderProgressBarComponent,
                    MatPlayButtonComponent,
                    MatVolumeControlComponent,
                    MatDownloadButtonComponent,
                    MatFullscreenButtonComponent,
                    MatTimeControlComponent,
                    MatQualityControlComponent,
                    MatVideoSpinnerComponent,
                    MatSeekProgressControlComponent,
                    MatVideoSourceDirective,
                    MatVideoTrackDirective,
                    MatFrameByFrameControlComponent
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"]],
                exports: [MatVideoComponent, MatVideoSourceDirective, MatVideoTrackDirective],
                providers: [FullscreenService, EventService]
            }]
    }], null, null); })();



//# sourceMappingURL=mat-video.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/properties/properties.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/properties/properties.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-banner [backgroundImage]=\"'assets/images/carousel/slide-3.jpg'\" [bgImageAnimate]=\"false\"\n    [contentOffsetToTop]=\"false\" [title]=\"'Rent / Buy / Develop'\"\n    [desc]=\"'“Home couldnt be much more important...” –T.S. Eliot'\" [contentMinHeight]=\"200\">\n</app-banner>\n\n<div class=\"px-3\">\n\n    <div class=\"theme-container\">\n\n        <mat-sidenav-container class=\"all-properties mt-3\">\n\n            <mat-sidenav #sidenav [autoFocus]=\"false\" [opened]=\"sidenavOpen\" [mode]=\"sidenavOpen ? 'side' : 'over'\"\n                class=\"search-sidenav\">\n                <mat-card [perfectScrollbar]=\"psConfig\">\n                    <button fxHide=\"false\" fxHide.gt-xs mat-icon-button (click)=\"sidenav.toggle()\">\n                        <mat-icon color=\"accent\">close</mat-icon>\n                    </button>\n                    <app-properties-search [variant]=\"settings.searchPanelVariant\" [vertical]=\"true\"\n                        [searchOnBtnClick]=\"settings.searchOnBtnClick\" [removedSearchField]=\"removedSearchField\"\n                        (onSearchChange)=\"searchChanged($event)\" (onSearchClick)=\"searchClicked()\">\n                    </app-properties-search>\n                </mat-card>\n            </mat-sidenav>\n\n            <mat-sidenav-content ngClass.gt-sm=\"distance\">\n\n                <div fxLayout=\"row wrap\" class=\"properties-wrapper mt-0\">\n\n                    <div fxFlex=\"100\" class=\"px-2 pb-2 pt-0\">\n                        <app-properties-toolbar [showSidenavToggle]=\"!sidenavOpen\" (onSidenavToggle)=\"sidenav.toggle()\"\n                            (onChangeCount)=\"changeCount($event)\" (onChangeSorting)=\"changeSorting($event)\"\n                            (onChangeViewType)=\"changeViewType($event)\">\n                        </app-properties-toolbar>\n                    </div>\n\n                    <div fxFlex=\"100\" fxLayoutAlign=\"start start\" class=\"p-2\">\n                        <mat-chip-list [ngClass]=\"(settings.rtl) ? 'ml-2' : 'mr-2'\">\n                            <mat-chip selected disableRipple=\"true\" color=\"warn\" class=\"uppercase ws-nowrap\">\n                                {{ pagination?.total }} found\n                            </mat-chip>\n                        </mat-chip-list>\n                        <app-properties-search-results-filters [searchFields]=\"searchFields\"\n                            (onRemoveSearchField)=\"removeSearchField($event)\">\n                        </app-properties-search-results-filters>\n                    </div>\n\n                    <div *ngFor=\"let property of properties\" [fxFlex]=\"(viewType=='grid') ? viewCol : 100\" class=\"item\">\n                        <app-property-item [property]=\"property\" [viewType]=\"viewType\" [viewColChanged]=\"viewCol\"\n                            [fullWidthPage]=\"false\"></app-property-item>\n                    </div>\n\n                    <div *ngIf=\"properties?.length == 0\" fxFlex=\"100\" fxLayoutAlign=\"center center\"\n                        [style.min-height.px]=\"200\">\n                        <mat-spinner *ngIf=\"!message\"></mat-spinner>\n                        <mat-chip-list *ngIf=\"message\">\n                            <mat-chip selected disableRipple=\"true\" color=\"warn\" class=\"uppercase ws-nowrap\">\n                                {{message}}\n                            </mat-chip>\n                        </mat-chip-list>\n                    </div>\n\n                    <div *ngIf=\"properties?.length > 0\" fxFlex=\"100\" fxLayoutAlign=\"center center\" class=\"p-2\">\n                        <mat-paginator [length]=\"total\" [pageSize]=\"count\"\n                            (page)=\"onPageChange($event)\" class=\"w-100 mat-elevation-z1\">\n                        </mat-paginator>\n                    </div>\n\n                </div>\n            </mat-sidenav-content>\n        </mat-sidenav-container>\n\n    </div>\n\n</div>\n\n<!-- <app-get-in-touch></app-get-in-touch> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/properties/property-developments/property-development/property-development.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/properties/property-developments/property-development/property-development.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>property-development works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/properties/property/property.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/properties/property/property.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"\" style=\"background: white;\">\r\n    <div style=\"background: white;\">\r\n\r\n        <div style=\"background: #f3f3f5;\" fxLayout=\"column\">\r\n\r\n            <!-- slider -->\r\n            <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-around center\" class=\"mt-3 w-100\"   style=\"background: #f3f3f5;\">\r\n                <div class=\"slider\" fxFlex.gt-md=\"70\" fxFlex.gt-sm=\"100\" class=\"w-100\"\r\n                    style=\"background: #f3f3f5;width: 90%!important;\">\r\n                    <div>\r\n                        <div class=\"main-carousel mb-3\">\r\n                            <div *ngIf=\"property\" class=\"control-icons\">\r\n                                <button mat-button [disabled]=\"onFavorites()\" (click)=\"addToFavorites()\"\r\n                                    matTooltip=\"Add To Favorite\">\r\n                                    <mat-icon class=\"\">favorite_border</mat-icon>\r\n                                </button>\r\n                                <button mat-button [disabled]=\"onCompare()\" (click)=\"addToCompare()\"\r\n                                    matTooltip=\"Add To Compare\">\r\n                                    <mat-icon class=\"\">compare_arrows</mat-icon>\r\n                                </button>\r\n                            </div>\r\n\r\n                            <div id=\"main-carousel\" class=\"swiper-container\" [swiper]=\"config\" style=\"height: 300px;\"\r\n                                (indexChange)=\"onIndexChange($event)\">\r\n                                <div class=\"swiper-wrapper\">\r\n                                    <div *ngFor=\"let image of property?.gallery\" class=\"swiper-slide\">\r\n                                        <img [attr.data-src]=\"img(image.medium)\" class=\"swiper-lazy\">\r\n                                        <div class=\"swiper-lazy-preloader\"></div>\r\n                                    </div>\r\n                                </div>\r\n                                <button mat-icon-button color=\"primary\" class=\"swiper-button-prev swipe-arrow\">\r\n                                    <mat-icon class=\"large-arrow\">keyboard_arrow_left</mat-icon>\r\n                                </button>\r\n                                <button mat-icon-button color=\"primary\" class=\"swiper-button-next swipe-arrow\">\r\n                                    <mat-icon class=\"large-arrow\">keyboard_arrow_right</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n                <div fxLayout=\"column\" fxFlex.gt-md=\"20\" fxShow=\"false\" fxShow.gt-sm>\r\n                    <div class=\"mb-3\"  *ngFor=\"let image of property?.gallery; let i=index\" fxLayout=\"column\" fxLayoutAlign=\"space-between start\">\r\n                        <img [attr.src]=\"img(image.medium)\" style=\"width: 75%;\" *ngIf=\"i<4\">\r\n                      \r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"column\" style=\"background: white;\"> \r\n                <div style=\"margin-left: 2%;margin-right: 2%;\">\r\n                    <!-- general details -->\r\n                    <div fxLayout=\"row\" style=\"padding: 16px;\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\"\r\n                        class=\"phone mb-3\">\r\n                        <div>\r\n                            <h2 class=\"uppercase\" ngClass.xs=\"text-center\">{{property?.title}}</h2>\r\n                            <p fxLayout=\"row\" fxLayoutAlign.xs=\"center\" class=\"address mb-0\">\r\n                                <mat-icon class=\"text-muted\">location_on</mat-icon>\r\n                                <span>{{property?.formattedAddress}}</span>\r\n                            </p>\r\n\r\n                            <div fxLayout=\"column\" fxLayoutAlign.xs=\"center center\" class=\"mx-2\">\r\n                                <h2 *ngIf=\"settings.currency == 'USD'\" class=\"primary-color \">\r\n                                    <span\r\n                                        *ngIf=\"property?.priceDollar.sale && false\">{{property?.priceDollar.sale | currency : 'USD' : 'symbol' : '1.0'}}</span>\r\n                                    <span\r\n                                        *ngIf=\"property?.priceDollar.rent\">{{property?.priceDollar.rent | currency : 'Ksh &nbsp;' : 'symbol' : '1.0'}}\r\n                                        p.m</span>\r\n                                </h2>\r\n                                <h2 *ngIf=\"settings.currency == 'EUR'\" class=\"primary-color price\">\r\n                                    <span\r\n                                        *ngIf=\"property?.priceEuro.sale\">{{property?.priceEuro.sale | currency : 'EUR' : 'symbol' : '1.0'}}</span>\r\n                                    <span\r\n                                        *ngIf=\"property?.priceEuro.rent\">{{property?.priceEuro.rent | currency : 'EUR' : 'symbol' : '1.0'}}\r\n                                        p.m</span>\r\n                                </h2>\r\n                                <app-rating [ratingsCount]=\"property?.ratingsCount\"\r\n                                    [ratingsValue]=\"property?.ratingsValue\">\r\n                                </app-rating>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div>\r\n                            <button fxHide.xs fxHide.sm fxHide=\"false\" mat-flat-button color=\"primary\"\r\n                               >Share</button>\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n\r\n\r\n                    <mat-accordion>\r\n                        <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\"\r\n                            [expanded]=\"true\">\r\n                            <mat-expansion-panel-header>\r\n                                <mat-panel-title>\r\n                                    Details\r\n                                </mat-panel-title>\r\n                                <mat-panel-description>\r\n\r\n                                </mat-panel-description>\r\n                            </mat-expansion-panel-header>\r\n                            <div *ngIf=\"property\" class=\"mt-3\">\r\n                                <div fxLayout=\"row wrap\" class=\"details\">\r\n                                    <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\r\n                                        <span>Property Type:</span>\r\n                                        <span>{{property.propertyType}}</span>\r\n                                    </div>\r\n                                    <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\r\n                                        <span>Property Status:</span>\r\n                                        <div fxLayout=\"row wrap\" class=\"list\">\r\n                                            <span *ngFor=\"let status of property.propertyStatus; let last=last\"\r\n                                                [class.list-item]=\"property.propertyStatus.length > 1\"\r\n                                                [class.last]=\"last\">{{status}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\r\n                                        <span>City:</span>\r\n                                        <span>{{property.city}}</span>\r\n                                    </div>\r\n\r\n                                    <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\r\n                                        <span>Bedrooms:</span>\r\n                                        <span>{{property.bedrooms}}</span>\r\n                                    </div>\r\n\r\n                                    <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\r\n                                        <span>Bathrooms:</span>\r\n                                        <span>{{property.bathrooms}}</span>\r\n                                    </div>\r\n\r\n                                    <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\r\n                                        <span>Garages:</span>\r\n                                        <span>{{property.garages}}</span>\r\n                                    </div>\r\n\r\n                                    <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\r\n                                        <span>Property size:</span>\r\n                                        <span>{{property.area.value}} {{property.area.unit}}</span>\r\n                                    </div>\r\n\r\n                                    <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayout=\"row\" class=\"item\">\r\n                                        <span>Year Built:</span>\r\n                                        <span>{{property.yearBuilt}}</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </mat-expansion-panel>\r\n\r\n                        <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\r\n                            <mat-expansion-panel-header>\r\n                                <mat-panel-title>\r\n                                    Features\r\n                                </mat-panel-title>\r\n                                <mat-panel-description>\r\n\r\n                                </mat-panel-description>\r\n                            </mat-expansion-panel-header>\r\n                            <div class=\"mt-3\">\r\n                                <div-header fxLayoutAlign=\"center center\">\r\n\r\n                                </div-header>\r\n                                <div>\r\n                                    <div fxLayout=\"row wrap\">\r\n                                        <div *ngFor=\"let feature of property?.features\" fxFlex=\"100\"\r\n                                            fxFlex.gt-xs=\"33.3\">\r\n                                            <mat-icon class=\"mat-icon-sm\" color=\"primary\">check</mat-icon>\r\n                                            <span class=\"mx-2\">{{feature}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </mat-expansion-panel>\r\n\r\n                        <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\r\n                            <mat-expansion-panel-header>\r\n                                <mat-panel-title>\r\n                                    Description\r\n                                </mat-panel-title>\r\n                                <mat-panel-description>\r\n\r\n                                </mat-panel-description>\r\n                            </mat-expansion-panel-header>\r\n                            <div class=\"mt-3\" fxLayout=\"row wrap\">\r\n                                <div-header fxLayoutAlign=\"center center\" fxFlex=\"100\">\r\n\r\n                                </div-header>\r\n                                <div fxFlex=\"100\" class=\"w-100\">\r\n                                    <p>{{property?.desc}}</p>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </mat-expansion-panel>\r\n\r\n                        <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\r\n                            <mat-expansion-panel-header>\r\n                                <mat-panel-title>\r\n                                    Location\r\n                                </mat-panel-title>\r\n                                <mat-panel-description>\r\n\r\n                                </mat-panel-description>\r\n                            </mat-expansion-panel-header>\r\n                            <div class=\"mt-3\">\r\n                                <div-header fxLayoutAlign=\"center center\">\r\n\r\n                                </div-header>\r\n                                <div>\r\n                                    <agm-map [latitude]=\"property?.location!=null?property?.location.lat:0\"\r\n                                        [longitude]=\"property?.location!=null?property?.location.lng:0\"\r\n                                        [mapTypeControl]=\"true\" [fullscreenControl]=\"true\">\r\n                                        <agm-marker [latitude]=\"property?.location!=null?property?.location.lat:0\"\r\n                                            [longitude]=\"property?.location!=null?property?.location.lng:0\"\r\n                                            [markerDraggable]=\"false\">\r\n                                        </agm-marker>\r\n                                    </agm-map>\r\n                                </div>\r\n                            </div>\r\n                        </mat-expansion-panel>\r\n\r\n                        <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\r\n                            <mat-expansion-panel-header>\r\n                                <mat-panel-title>\r\n                                    Property plan\r\n                                </mat-panel-title>\r\n                                <mat-panel-description>\r\n\r\n                                </mat-panel-description>\r\n                            </mat-expansion-panel-header>\r\n\r\n                            <div class=\"mt-3\" *ngIf=\"property?.plans\">\r\n                                <div-header fxLayoutAlign=\"center center\">\r\n\r\n                                </div-header>\r\n                                <div>\r\n                                    <mat-accordion>\r\n                                        <mat-expansion-panel *ngFor=\"let plan of property?.plans; let i = index;\"\r\n                                            [expanded]=\"i === 0\">\r\n                                            <mat-expansion-panel-header>\r\n                                                <mat-panel-title fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n                                                    <div class=\"fw-500\">{{plan.name}}</div>\r\n                                                    <div fxShow=\"false\" fxShow.gt-xs=\"true\" class=\"text-muted\">\r\n                                                        <span>Area: <span class=\"fw-500\">{{plan.area.value}}\r\n                                                                {{plan.area.unit}}</span></span>\r\n                                                        <span class=\"mx-3\">Rooms: <span\r\n                                                                class=\"fw-500\">{{plan.rooms}}</span></span>\r\n                                                        <span>Baths: <span class=\"fw-500\">{{plan.baths}}</span></span>\r\n                                                    </div>\r\n                                                </mat-panel-title>\r\n                                            </mat-expansion-panel-header>\r\n                                            <img [src]=\"plan.image\" [alt]=\"plan.name\" class=\"mw-100\">\r\n                                            <p>{{plan.desc}}</p>\r\n                                        </mat-expansion-panel>\r\n                                    </mat-accordion>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </mat-expansion-panel>\r\n\r\n                        <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\r\n                            <mat-expansion-panel-header>\r\n                                <mat-panel-title>\r\n                                    video\r\n                                </mat-panel-title>\r\n                                <mat-panel-description>\r\n\r\n                                </mat-panel-description>\r\n                            </mat-expansion-panel-header>\r\n                            <div *ngIf=\"property && property.videos && property.videos[0]\" class=\"mt-3\">\r\n                                <div-header fxLayoutAlign=\"center center\">\r\n\r\n                                </div-header>\r\n                                <div>\r\n                                    <video controls class=\"mw-100\">\r\n                                        <source [src]=\"property.videos[0]!=null?property.videos[0].link:null\"\r\n                                            type=\"video/mp4\">\r\n                                        Your browser does not support the video tag.\r\n                                    </video>\r\n                                    <!-- <mat-video [src]=\"property.videos[0].link\" [title]=\"property.videos[0].name\" [download]=\"true\" [keyboard]=\"false\"></mat-video> -->\r\n                                    <div class=\"mt-5\">\r\n                                        <h3 class=\"text-center fw-500\">\r\n                                            {{property.videos[0]!=null?property.videos[0].name:''}}\r\n                                        </h3>\r\n                                        <div [innerHtml]=\"embedVideo\" class=\"videoWrapper\"></div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </mat-expansion-panel>\r\n\r\n                    </mat-accordion>\r\n\r\n                    <mat-card class=\"mt-3\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\r\n                        <span>ID:<span class=\"fw-500 mx-2\">{{property?.id}}</span></span>\r\n                        <span>Published:<span\r\n                                class=\"fw-500 mx-2\">{{property?.published | date:\"dd MMMM, yyyy\"}}</span></span>\r\n                        <span>Last Update:<span\r\n                                class=\"fw-500 mx-2\">{{property?.lastUpdate | date:\"dd MMMM, yyyy\"}}</span></span>\r\n                        <span>Views:<span class=\"fw-500 mx-2\">{{property?.views}}</span></span>\r\n                    </mat-card>\r\n\r\n                    <mat-expansion-panel class=\"mt-3\" (opened)=\"panelOpenState = true\"\r\n                        (closed)=\"panelOpenState = false\">\r\n                        <mat-expansion-panel-header>\r\n                            <mat-panel-title>\r\n                                Comments\r\n                            </mat-panel-title>\r\n                            <mat-panel-description>\r\n                                Leave reply for this listing\r\n                            </mat-panel-description>\r\n                        </mat-expansion-panel-header>\r\n                        <app-comments *ngIf=\"property\" [propertyId]=\"property.id\"></app-comments>\r\n                    </mat-expansion-panel>\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>\r\n\r\n<div class=\"section mt-3\">\r\n    <div class=\"px-3\" style=\"background: #f3f3f5;\">\r\n        <div class=\"theme-container\" style=\"padding: 25px;\">\r\n            <app-callback></app-callback>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- <app-get-in-touch></app-get-in-touch> -->");

/***/ }),

/***/ "./src/app/pages/properties/properties.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/properties/properties.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb3BlcnRpZXMvcHJvcGVydGllcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/properties/properties.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/properties/properties.component.ts ***!
  \**********************************************************/
/*! exports provided: PropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesComponent", function() { return PropertiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _app_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app.models */ "./src/app/app.models.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _store_property_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/property.actions */ "./src/app/pages/properties/store/property.actions.ts");
/* harmony import */ var _store_property_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/property.selectors */ "./src/app/pages/properties/store/property.selectors.ts");
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










let PropertiesComponent = class PropertiesComponent {
    constructor(appSettings, appService, mediaObserver, store) {
        this.appSettings = appSettings;
        this.appService = appService;
        this.mediaObserver = mediaObserver;
        this.store = store;
        this.sidenavOpen = true;
        this.psConfig = {
            wheelPropagation: true
        };
        this.properties = [];
        this.viewType = 'grid';
        this.viewCol = 33.3;
        this.count = 10;
        this.page = 1;
        this.total = 0;
        this.pagination = new _app_models__WEBPACK_IMPORTED_MODULE_6__["Pagination"](1, this.count, null, 2, 0, 0);
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
        // this.getProperties();
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["select"])(_store_property_selectors__WEBPACK_IMPORTED_MODULE_9__["selectAllProperty"])).subscribe(data => {
            this.properties = data;
        });
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["select"])(_store_property_selectors__WEBPACK_IMPORTED_MODULE_9__["selectPropertyTotal"])).subscribe(total => {
            this.total = total;
            const data = new Array(total);
            const result = this.filterData(data);
            if (result.data.length == 0) {
                this.properties.length = 0;
                this.pagination = new _app_models__WEBPACK_IMPORTED_MODULE_6__["Pagination"](1, this.count, null, 2, 0, 0);
                this.message = 'No Results Found';
                return false;
            }
            this.pagination = result.pagination;
            this.message = null;
        });
        this.loadProperties({ page: 1, limit: 10 });
    }
    ngOnDestroy() {
        this.watcher.unsubscribe();
    }
    getProperties() {
        // this.appService.getProperties().subscribe(data => {
        //   const result = this.filterData(data);
        //   if (result.data.length == 0){
        //     this.properties.length = 0;
        //     this.pagination = new Pagination(1, this.count, null, 2, 0, 0);
        //     this.message = 'No Results Found';
        //     return false;
        //   }
        //   this.properties = result.data;
        //   this.pagination = result.pagination;
        //   this.message = null;
        // });
    }
    resetPagination() {
        if (this.paginator) {
            this.paginator.pageIndex = 0;
        }
        this.pagination = new _app_models__WEBPACK_IMPORTED_MODULE_6__["Pagination"](1, this.count, null, null, this.pagination.total, this.pagination.totalPages);
    }
    filterData(data) {
        return this.appService.filterData(data, this.searchFields, this.sort, this.pagination.page, this.pagination.perPage);
    }
    loadProperties(data) {
        this.store.dispatch(new _store_property_actions__WEBPACK_IMPORTED_MODULE_8__["PropertyLoadAction"](data));
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
        event.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])()).subscribe(() => {
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
        const nextPage = e.pageIndex + 1;
        this.pagination.page = nextPage;
        this.loadProperties({ page: nextPage, limit: 10 });
        window.scrollTo(0, 0);
    }
};
PropertiesComponent.ctorParameters = () => [
    { type: _app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] },
    { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] }
];
PropertiesComponent.propDecorators = {
    sidenav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['sidenav',] }],
    paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"],] }]
};
PropertiesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-properties',
        template: __importDefault(__webpack_require__(/*! raw-loader!./properties.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/properties/properties.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./properties.component.scss */ "./src/app/pages/properties/properties.component.scss")).default]
    }),
    __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"], _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]])
], PropertiesComponent);



/***/ }),

/***/ "./src/app/pages/properties/properties.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/properties/properties.module.ts ***!
  \*******************************************************/
/*! exports provided: routes, PropertiesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesModule", function() { return PropertiesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var mat_video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mat-video */ "./node_modules/mat-video/__ivy_ngcc__/fesm2015/mat-video.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _properties_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./properties.component */ "./src/app/pages/properties/properties.component.ts");
/* harmony import */ var _property_property_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./property/property.component */ "./src/app/pages/properties/property/property.component.ts");
/* harmony import */ var _property_developments_property_development_property_development_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./property-developments/property-development/property-development.component */ "./src/app/pages/properties/property-developments/property-development/property-development.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









const routes = [
    { path: '', component: _properties_component__WEBPACK_IMPORTED_MODULE_6__["PropertiesComponent"], pathMatch: 'full' },
    { path: ':id', component: _property_property_component__WEBPACK_IMPORTED_MODULE_7__["PropertyComponent"] }
];
let PropertiesModule = class PropertiesModule {
};
PropertiesModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [
            _properties_component__WEBPACK_IMPORTED_MODULE_6__["PropertiesComponent"],
            _property_property_component__WEBPACK_IMPORTED_MODULE_7__["PropertyComponent"],
            _property_developments_property_development_property_development_component__WEBPACK_IMPORTED_MODULE_8__["PropertyDevelopmentComponent"]
        ],
        exports: [
            _properties_component__WEBPACK_IMPORTED_MODULE_6__["PropertiesComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"],
            mat_video__WEBPACK_IMPORTED_MODULE_4__["MatVideoModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        ],
    })
], PropertiesModule);



/***/ }),

/***/ "./src/app/pages/properties/property-developments/property-development/property-development.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/properties/property-developments/property-development/property-development.component.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb3BlcnRpZXMvcHJvcGVydHktZGV2ZWxvcG1lbnRzL3Byb3BlcnR5LWRldmVsb3BtZW50L3Byb3BlcnR5LWRldmVsb3BtZW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/properties/property-developments/property-development/property-development.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/properties/property-developments/property-development/property-development.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: PropertyDevelopmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyDevelopmentComponent", function() { return PropertyDevelopmentComponent; });
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

let PropertyDevelopmentComponent = class PropertyDevelopmentComponent {
    constructor() { }
    ngOnInit() {
    }
};
PropertyDevelopmentComponent.ctorParameters = () => [];
PropertyDevelopmentComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-property-development',
        template: __importDefault(__webpack_require__(/*! raw-loader!./property-development.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/properties/property-developments/property-development/property-development.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./property-development.component.scss */ "./src/app/pages/properties/property-developments/property-development/property-development.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], PropertyDevelopmentComponent);



/***/ }),

/***/ "./src/app/pages/properties/property/property.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/properties/property/property.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-carousel .swiper-slide {\n  text-align: center;\n  padding-bottom: 66.25%;\n  position: relative;\n  overflow: hidden;\n  background: rgba(0, 0, 0, 0.04);\n}\n.main-carousel img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: auto;\n  max-width: 100%;\n}\n.main-carousel .control-icons {\n  position: absolute;\n  z-index: 2;\n  top: 24px;\n  right: 20px;\n}\n.main-carousel .control-icons button.mat-button {\n  min-width: 36px;\n  width: 36px;\n  padding: 0;\n  margin: 0 4px;\n  background: rgba(255, 252, 252, 0.6);\n  transition: 0.2s;\n  color: rgba(0, 0, 0, 0.87);\n}\n.main-carousel .control-icons button.mat-button:disabled {\n  color: rgba(0, 0, 0, 0.26);\n}\n.main-carousel .control-icons button.mat-button:hover:enabled {\n  background: #fffcfc;\n}\n.large-arrow {\n  font-size: 50px;\n  color: white;\n  opacity: 0.7;\n  font-weight: bold;\n}\n.small-carousel .swiper-slide img {\n  display: block;\n  opacity: 0.3;\n}\n.small-carousel .swiper-slide.active-thumb img {\n  border-width: 3px;\n  border-style: solid;\n  box-sizing: border-box;\n  opacity: 1;\n}\n.small-carousel .swiper-slide .swiper-lazy-preloader {\n  margin-top: 10px;\n}\n@media screen and (max-width: 960px) {\n  h2 {\n    font-size: small;\n  }\n\n  .phone {\n    font-size: small;\n  }\n\n  .large-arrow {\n    font-size: 25px;\n    color: white;\n    opacity: 0.7;\n    font-weight: bold;\n  }\n}\n.widget {\n  margin-bottom: 40px;\n}\n.widget .widget-title {\n  margin: 0 -16px 16px;\n  padding: 8px 16px;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.widget:first-child .widget-title {\n  margin: -16px -16px 16px;\n  padding: 8px 16px;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvcGVydGllcy9wcm9wZXJ0eS9wcm9wZXJ0eS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUFBUjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUFSO0FBRUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUFSO0FBQ1E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBQ1o7QUFBWTtFQUNJLDBCQUFBO0FBRWhCO0FBQVk7RUFDSSxtQkFBQTtBQUVoQjtBQUtBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFGSjtBQU1RO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUFIWjtBQU1ZO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQUpoQjtBQU9RO0VBQ0ksZ0JBQUE7QUFMWjtBQVdBO0VBQ0k7SUFDSSxnQkFBQTtFQVJOOztFQVdFO0lBQ0ksZ0JBQUE7RUFSTjs7RUFVRTtJQUNJLGVBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VBUE47QUFDRjtBQVVBO0VBQ0ksbUJBQUE7QUFSSjtBQVNJO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFQUjtBQVVRO0VBQ0ksd0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFSWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb3BlcnRpZXMvcHJvcGVydHkvcHJvcGVydHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jYXJvdXNlbHsgXHJcbiAgICAuc3dpcGVyLXNsaWRleyAgICAgICAgICAgICAgXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA2Ni4yNSU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47ICBcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDQpOyAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfSBcclxuICAgIC5jb250cm9sLWljb25zeyBcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMjsgXHJcbiAgICAgICAgdG9wOiAyNHB4O1xyXG4gICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGJ1dHRvbi5tYXQtYnV0dG9ue1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDM2cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgNHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjUyLCAyNTIsIDAuNik7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7IFxyXG4gICAgICAgICAgICBjb2xvcjpyZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG4gICAgICAgICAgICAmOmRpc2FibGVke1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6aG92ZXI6ZW5hYmxlZHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTIsIDI1MiwgMSk7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmxhcmdlLWFycm93e1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnNtYWxsLWNhcm91c2VseyBcclxuICAgIC5zd2lwZXItc2xpZGV7ICBcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuYWN0aXZlLXRodW1ie1xyXG4gICAgICAgICAgICBpbWd7IFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAzcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgIFxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgLnN3aXBlci1sYXp5LXByZWxvYWRlcntcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH0gXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gICAgaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIH1cclxuXHJcbiAgICAucGhvbmV7XHJcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIH1cclxuICAgIC5sYXJnZS1hcnJvd3tcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufVxyXG4gXHJcbi53aWRnZXR7IFxyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIC53aWRnZXQtdGl0bGV7XHJcbiAgICAgICAgbWFyZ2luOiAwIC0xNnB4IDE2cHg7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgJjpmaXJzdC1jaGlsZHsgIFxyXG4gICAgICAgIC53aWRnZXQtdGl0bGV7XHJcbiAgICAgICAgICAgIG1hcmdpbjogLTE2cHggLTE2cHggMTZweDtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxufSAiXX0= */");

/***/ }),

/***/ "./src/app/pages/properties/property/property.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/properties/property/property.component.ts ***!
  \*****************************************************************/
/*! exports provided: PropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyComponent", function() { return PropertyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.settings */ "./src/app/app.settings.ts");
/* harmony import */ var src_app_shared_compare_overview_compare_overview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/compare-overview/compare-overview.component */ "./src/app/shared/compare-overview/compare-overview.component.ts");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-embed-video */ "./node_modules/ngx-embed-video/__ivy_ngcc__/dist/index.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/theme/utils/app-validators */ "./src/app/theme/utils/app-validators.ts");
/* harmony import */ var _utils_to_formdata__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/to-formdata */ "./src/app/pages/properties/utils/to-formdata.ts");
/* harmony import */ var _contact_services_contact_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../contact/services/contact.service */ "./src/app/pages/contact/services/contact.service.ts");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/notification.service */ "./src/app/services/notification.service.ts");
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












let PropertyComponent = class PropertyComponent {
    constructor(appSettings, appService, activatedRoute, embedService, contactService, notificationService, fb) {
        this.appSettings = appSettings;
        this.appService = appService;
        this.activatedRoute = activatedRoute;
        this.embedService = embedService;
        this.contactService = contactService;
        this.notificationService = notificationService;
        this.fb = fb;
        this.psConfig = {
            wheelPropagation: true,
        };
        this.sidenavOpen = true;
        this.config = {};
        this.config2 = {};
        this.propertyId = '';
        this.settings = this.appSettings.settings;
    }
    ngOnInit() {
        this.sub = this.activatedRoute.params.subscribe(params => {
            this.propertyId = params.id;
            this.getPropertyById(params.id);
        });
        this.getRelatedProperties();
        this.getFeaturedProperties();
        this.getAgent(1);
        if (window.innerWidth < 960) {
            this.sidenavOpen = false;
            if (this.sidenav) {
                this.sidenav.close();
            }
        }
        this.mortgageForm = this.fb.group({
            principalAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            downPayment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            interestRate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            period: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.contactForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, src_app_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_8__["emailValidator"]])],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    onWindowResize() {
        (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
    }
    getPropertyById(id) {
        this.appService.getPropertyById(id).subscribe(data => {
            this.property = data;
            if (this.property && this.property.videos && this.property.videos[1]) {
                this.embedVideo = this.embedService.embed(this.property.videos[1].link);
            }
            setTimeout(() => {
                this.config.observer = true;
                this.config2.observer = true;
                this.swipers.forEach(swiper => {
                    if (swiper) {
                        swiper.setIndex(0);
                    }
                });
            });
        });
    }
    ngAfterViewInit() {
        this.config = {
            observer: false,
            slidesPerView: 1,
            spaceBetween: 0,
            keyboard: true,
            navigation: true,
            pagination: false,
            grabCursor: true,
            height: 350,
            loop: false,
            preloadImages: false,
            lazy: true,
            autoplay: {
                delay: 10000,
                disableOnInteraction: false,
            },
        };
        this.config2 = {
            observer: false,
            slidesPerView: 4,
            spaceBetween: 16,
            direction: 'vertical',
            keyboard: true,
            navigation: false,
            pagination: false,
            grabCursor: true,
            loop: false,
            preloadImages: false,
            lazy: true,
            breakpoints: {
                480: {
                    slidesPerView: 2,
                },
                600: {
                    slidesPerView: 3,
                },
            },
        };
    }
    img(url) {
        return Object(_utils_to_formdata__WEBPACK_IMPORTED_MODULE_9__["img"])(url);
    }
    onOpenedChange() {
        this.swipers.forEach(swiper => {
            if (swiper) {
                swiper.update();
            }
        });
    }
    selectImage(index) {
        this.swipers.forEach(swiper => {
            if (swiper.elementRef.nativeElement.id == 'main-carousel') {
                swiper.setIndex(index);
            }
        });
    }
    onIndexChange(index) {
        this.swipers.forEach(swiper => {
            const elem = swiper.elementRef.nativeElement;
            if (elem.id == 'small-carousel') {
                swiper.setIndex(index);
                for (let i = 0; i < elem.children[0].children.length; i++) {
                    const element = elem.children[0].children[i];
                    if (element.classList.contains('thumb-' + index)) {
                        element.classList.add('active-thumb');
                    }
                    else {
                        element.classList.remove('active-thumb');
                    }
                }
            }
        });
    }
    addToCompare() {
        this.appService.addToCompare(this.property, src_app_shared_compare_overview_compare_overview_component__WEBPACK_IMPORTED_MODULE_6__["CompareOverviewComponent"], (this.settings.rtl) ? 'rtl' : 'ltr');
    }
    onCompare() {
        return this.appService.Data.compareList.filter(item => item.id == this.property.id)[0];
    }
    addToFavorites() {
        this.appService.addToFavorites(this.property, (this.settings.rtl) ? 'rtl' : 'ltr');
    }
    onFavorites() {
        return this.appService.Data.favorites.filter(item => item.id == this.property.id)[0];
    }
    getRelatedProperties() {
        this.appService.getRelatedProperties().subscribe(properties => {
            this.relatedProperties = properties;
        });
    }
    getFeaturedProperties() {
        this.appService.getFeaturedProperties().subscribe(properties => {
            this.featuredProperties = properties.slice(0, 3);
        });
    }
    getAgent(agentId = 1) {
        const ids = [1, 2, 3, 4, 5]; // agent ids
        agentId = ids[Math.floor(Math.random() * ids.length)]; // random agent id
        this.agent = this.appService.getAgents().filter(agent => agent.id == agentId)[0];
    }
    onContactFormSubmit(values) {
        if (this.contactForm.valid) {
            const contact = values;
            contact.property = this.propertyId;
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
    onMortgageFormSubmit(values) {
        if (this.mortgageForm.valid) {
            const principalAmount = values.principalAmount;
            const down = values.downPayment;
            const interest = values.interestRate;
            const term = values.period;
            this.monthlyPayment = this.calculateMortgage(principalAmount, down, interest / 100 / 12, term * 12).toFixed(2);
        }
    }
    calculateMortgage(principalAmount, downPayment, interestRate, period) {
        return ((principalAmount - downPayment) * interestRate) / (1 - Math.pow(1 + interestRate, -period));
    }
};
PropertyComponent.ctorParameters = () => [
    { type: src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"] },
    { type: src_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: ngx_embed_video__WEBPACK_IMPORTED_MODULE_7__["EmbedVideoService"] },
    { type: _contact_services_contact_service__WEBPACK_IMPORTED_MODULE_10__["ContactService"] },
    { type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
];
PropertyComponent.propDecorators = {
    sidenav: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['sidenav',] }],
    formGroupDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"],] }],
    swipers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"], args: [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_4__["SwiperDirective"],] }],
    onWindowResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize',] }]
};
PropertyComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-property',
        template: __importDefault(__webpack_require__(/*! raw-loader!./property.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/properties/property/property.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./property.component.scss */ "./src/app/pages/properties/property/property.component.scss")).default]
    }),
    __metadata("design:paramtypes", [src_app_app_settings__WEBPACK_IMPORTED_MODULE_5__["AppSettings"],
        src_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        ngx_embed_video__WEBPACK_IMPORTED_MODULE_7__["EmbedVideoService"],
        _contact_services_contact_service__WEBPACK_IMPORTED_MODULE_10__["ContactService"],
        src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_11__["NotificationService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
], PropertyComponent);



/***/ })

}]);
//# sourceMappingURL=pages-properties-properties-module-es2015.js.map