/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@playkit-js/common/dist/hoc/a11y-wrapper/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/hoc/a11y-wrapper/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.A11yWrapper = exports.isKeyboardEvent = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var kaltura_player_js_1 = __webpack_require__(/*! @playkit-js/kaltura-player-js */ "@playkit-js/kaltura-player-js");
var _a = kaltura_player_js_1.ui.utils.KeyMap, ENTER = _a.ENTER, SPACE = _a.SPACE, UP = _a.UP, DOWN = _a.DOWN, LEFT = _a.LEFT, RIGHT = _a.RIGHT;
var stopEvent = function (e) {
    e.preventDefault();
    e.stopPropagation();
};
var isKeyboardEvent = function (e) {
    // space/enter keyEvent is swallowed by NVDA (https://github.com/nvaccess/nvda/issues/7898)
    // check offsetX and offsetY to define keyboard event triggered by NVDA
    return e instanceof KeyboardEvent || [e.offsetX, e.offsetY].every(function (offset) { return offset === 0; });
};
exports.isKeyboardEvent = isKeyboardEvent;
var A11yWrapper = function (_a) {
    var children = _a.children, onClick = _a.onClick, onUpKeyPressed = _a.onUpKeyPressed, onDownKeyPressed = _a.onDownKeyPressed, onLeftKeyPressed = _a.onLeftKeyPressed, onRightKeyPressed = _a.onRightKeyPressed, role = _a.role, type = _a.type;
    var props = {
        onKeyDown: function (e) {
            if (e.keyCode === SPACE || e.keyCode === ENTER) {
                stopEvent(e);
                onClick(e, true);
            }
            else if (e.keyCode === UP && onUpKeyPressed) {
                stopEvent(e);
                onUpKeyPressed(e);
            }
            else if (e.keyCode === DOWN && onDownKeyPressed) {
                stopEvent(e);
                onDownKeyPressed(e);
            }
            else if (e.keyCode === LEFT && onLeftKeyPressed) {
                stopEvent(e);
                onLeftKeyPressed(e);
            }
            else if (e.keyCode === RIGHT && onRightKeyPressed) {
                stopEvent(e);
                onRightKeyPressed(e);
            }
        },
        onClick: function (e) {
            onClick(e, (0, exports.isKeyboardEvent)(e));
        },
        role: role
    };
    if ((children === null || children === void 0 ? void 0 : children.type) === 'button') {
        props.type = type || 'button';
    }
    return (0, preact_1.cloneElement)(children, props);
};
exports.A11yWrapper = A11yWrapper;
exports.A11yWrapper.defaultProps = {
    role: 'button'
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/ui-common/events-manager.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/ui-common/events-manager.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventsManager = void 0;
var EventsManager = /** @class */ (function () {
    function EventsManager() {
        this._eventListeners = {};
        this._wildcardEventListeners = [];
    }
    EventsManager.prototype.on = function (type, handler) {
        if (type === '*') {
            this._wildcardEventListeners.push(handler);
            return;
        }
        (this._eventListeners[type] || (this._eventListeners[type] = [])).push(handler);
    };
    EventsManager.prototype.off = function (type, handler) {
        if (type === '*') {
            this._wildcardEventListeners.splice(this._wildcardEventListeners.indexOf(handler) >>> 0, 1);
            return;
        }
        var eventListeners = this._eventListeners[type];
        if (!eventListeners) {
            return;
        }
        eventListeners.splice(eventListeners.indexOf(handler) >>> 0, 1);
    };
    EventsManager.prototype.emit = function (event) {
        (this._eventListeners[event.type] || []).slice().map(function (handler) {
            handler(event);
        });
        this._wildcardEventListeners.slice().map(function (handler) {
            handler(event);
        });
    };
    return EventsManager;
}());
exports.EventsManager = EventsManager;
//# sourceMappingURL=events-manager.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/ui-common/injected-component/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/ui-common/injected-component/index.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InjectedComponent = void 0;
var injected_component_1 = __webpack_require__(/*! ./injected-component */ "./node_modules/@playkit-js/common/dist/ui-common/injected-component/injected-component.js");
Object.defineProperty(exports, "InjectedComponent", ({ enumerable: true, get: function () { return injected_component_1.InjectedComponent; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/ui-common/injected-component/injected-component.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/ui-common/injected-component/injected-component.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InjectedComponent = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var styles = __webpack_require__(/*! ./injected-component.scss */ "./node_modules/@playkit-js/common/dist/ui-common/injected-component/injected-component.scss");
var InjectedComponent = /** @class */ (function (_super) {
    __extends(InjectedComponent, _super);
    function InjectedComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._root = null;
        return _this;
    }
    InjectedComponent.prototype.shouldComponentUpdate = function () {
        return false;
    };
    InjectedComponent.prototype.componentDidMount = function () {
        var _a = this.props, onCreate = _a.onCreate, label = _a.label;
        if (!onCreate) {
            return;
        }
        var parentElement = this._root;
        if (!parentElement) {
            return;
        }
        onCreate({ parent: parentElement });
    };
    InjectedComponent.prototype.componentWillUnmount = function () {
        var _a = this.props, onDestroy = _a.onDestroy, label = _a.label;
        var parentElement = this._root;
        if (!parentElement || !onDestroy) {
            return;
        }
        onDestroy({ parent: parentElement });
    };
    InjectedComponent.prototype.render = function () {
        var _this = this;
        var _a = this.props, label = _a.label, fillContainer = _a.fillContainer;
        var className = fillContainer ? styles.fillContainer : '';
        return ((0, preact_1.h)("div", { "data-contrib-injected": label, className: className, ref: function (ref) { return (_this._root = ref); } }));
    };
    return InjectedComponent;
}(preact_1.Component));
exports.InjectedComponent = InjectedComponent;
//# sourceMappingURL=injected-component.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/ui-common/managed-component/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/ui-common/managed-component/index.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./managed-component */ "./node_modules/@playkit-js/common/dist/ui-common/managed-component/managed-component.js"), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/ui-common/managed-component/managed-component.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/ui-common/managed-component/managed-component.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ManagedComponent = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var styles = __webpack_require__(/*! ./_managed-component.scss */ "./node_modules/@playkit-js/common/dist/ui-common/managed-component/_managed-component.scss");
var connect = KalturaPlayer.ui.redux.connect;
var mapStateToProps = function (state) { return ({
    playerSize: state.shell.playerSize
}); };
var ManagedComponent = /** @class */ (function (_super) {
    __extends(ManagedComponent, _super);
    function ManagedComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ManagedComponent.prototype.update = function () {
        this.setState(function (prev) {
            return {
                toggler: !prev.toggler
            };
        });
    };
    ManagedComponent.prototype.shouldComponentUpdate = function (prevProps) {
        var _a = this.props, updateOnPlayerSizeChanged = _a.updateOnPlayerSizeChanged, playerSize = _a.playerSize;
        return (updateOnPlayerSizeChanged && prevProps.playerSize !== playerSize) || prevProps.playerSize === playerSize;
    };
    ManagedComponent.prototype.componentDidMount = function () {
        this.setState({
            toggler: false
        });
    };
    ManagedComponent.prototype.render = function () {
        var _a = this.props, fillContainer = _a.fillContainer, isShown = _a.isShown, playerSize = _a.playerSize;
        if (!isShown()) {
            return null;
        }
        return ((0, preact_1.h)("div", { "data-contrib-item": this.props.label, className: "".concat(fillContainer ? styles.fillContainer : '') }, this.props.renderChildren(playerSize)));
    };
    ManagedComponent.defaultProps = {
        fillContainer: false
    };
    ManagedComponent = __decorate([
        connect(mapStateToProps, null, null, { forwardRef: true })
    ], ManagedComponent);
    return ManagedComponent;
}(preact_1.Component));
exports.ManagedComponent = ManagedComponent;
//# sourceMappingURL=managed-component.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/ui-common/player-utils.js":
/*!************************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/ui-common/player-utils.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getVideoSize = exports.getPlayerSize = void 0;
function getPlayerSize(kalturaPlayer) {
    return kalturaPlayer ? kalturaPlayer.dimensions : { width: 0, height: 0 };
}
exports.getPlayerSize = getPlayerSize;
function getVideoSize(kalturaPlayer) {
    if (!kalturaPlayer) {
        return { width: 0, height: 0 };
    }
    var videoTrack = kalturaPlayer.getActiveTracks().video;
    if (!videoTrack ||
        videoTrack.width === undefined ||
        videoTrack.height === undefined) {
        // fallback - mainly for Safari
        if (kalturaPlayer.getVideoElement()) {
            return {
                width: kalturaPlayer.getVideoElement().videoWidth,
                height: kalturaPlayer.getVideoElement().videoHeight,
            };
        }
        return { width: 0, height: 0 };
    }
    return {
        width: videoTrack.width,
        height: videoTrack.height,
    };
}
exports.getVideoSize = getVideoSize;
//# sourceMappingURL=player-utils.js.map

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/@playkit-js/common/dist/ui-common/injected-component/injected-component.scss":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/@playkit-js/common/dist/ui-common/injected-component/injected-component.scss ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fillContainer": () => (/* binding */ fillContainer)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".playkit-fill-container_nM {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}", "",{"version":3,"sources":["webpack://./node_modules/@playkit-js/common/dist/ui-common/injected-component/injected-component.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,YAAA;EACA,gBAAA;AACF","sourcesContent":[".fill-container {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n"],"sourceRoot":""}]);
// Exports
var fillContainer = "playkit-fill-container_nM";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/@playkit-js/common/dist/ui-common/managed-component/_managed-component.scss":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/@playkit-js/common/dist/ui-common/managed-component/_managed-component.scss ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fillContainer": () => (/* binding */ fillContainer)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".playkit-fill-container_qY {\n  width: 100%;\n  height: 100%;\n}", "",{"version":3,"sources":["webpack://./node_modules/@playkit-js/common/dist/ui-common/managed-component/_managed-component.scss"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,YAAA;AACF","sourcesContent":[".fill-container {\n  width: 100%;\n  height: 100%;\n}\n"],"sourceRoot":""}]);
// Exports
var fillContainer = "playkit-fill-container_qY";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/side-panels-manager/ui/panel-item-wrapper/panel-item-wrapper.component.scss":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/side-panels-manager/ui/panel-item-wrapper/panel-item-wrapper.component.scss ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activeState": () => (/* binding */ activeState),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "sidePanelWrapper": () => (/* binding */ sidePanelWrapper)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".playkit-side-panel-wrapper_Wr {\n  visibility: hidden;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.playkit-active-state_vh {\n  visibility: visible;\n}", "",{"version":3,"sources":["webpack://./src/services/side-panels-manager/ui/panel-item-wrapper/panel-item-wrapper.component.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;AACF;;AAEA;EACE,mBAAA;AACF","sourcesContent":[".side-panel-wrapper {\n  visibility: hidden;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.active-state {\n  visibility: visible;\n}\n"],"sourceRoot":""}]);
// Exports
var sidePanelWrapper = "playkit-side-panel-wrapper_Wr";
var activeState = "playkit-active-state_vh";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/upper-bar-manager/ui/displayed-bar/displayed-bar.component.scss":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/upper-bar-manager/ui/displayed-bar/displayed-bar.component.scss ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "rightUpperBarWrapperContainer": () => (/* binding */ rightUpperBarWrapperContainer)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".playkit-right-upper-bar-wrapper-container_Vm {\n  direction: ltr;\n  display: flex;\n}", "",{"version":3,"sources":["webpack://./src/services/upper-bar-manager/ui/displayed-bar/displayed-bar.component.scss"],"names":[],"mappings":"AAAA;EACE,cAAA;EACA,aAAA;AACF","sourcesContent":[".right-upper-bar-wrapper-container {\n  direction: ltr;\n  display: flex;\n}"],"sourceRoot":""}]);
// Exports
var rightUpperBarWrapperContainer = "playkit-right-upper-bar-wrapper-container_Vm";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/upper-bar-manager/ui/dropdown-bar/dropdown-bar.component.scss":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/upper-bar-manager/ui/dropdown-bar/dropdown-bar.component.scss ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "dropdownItem": () => (/* binding */ dropdownItem),
/* harmony export */   "dropdownItemDescription": () => (/* binding */ dropdownItemDescription),
/* harmony export */   "icon": () => (/* binding */ icon),
/* harmony export */   "moreDropdown": () => (/* binding */ moreDropdown)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".playkit-more-dropdown_SJ {\n  position: absolute;\n  padding: 8px 4px;\n  width: 166px;\n  background-color: var(--playkit-tone-7-color);\n  border-radius: 4px;\n  top: 44px;\n  right: 0;\n}\n.playkit-more-dropdown_SJ .playkit-dropdown-item_Aq {\n  border-radius: 4px;\n  padding: 4px 12px 4px 15px;\n  display: flex;\n  margin: 4px 0;\n  cursor: pointer;\n}\n.playkit-more-dropdown_SJ .playkit-dropdown-item_Aq .playkit-icon_h_ {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.playkit-more-dropdown_SJ .playkit-dropdown-item_Aq:hover {\n  background-color: var(--playkit-tone-6-color);\n}\n.playkit-more-dropdown_SJ .playkit-dropdown-item_Aq .playkit-dropdown-item-description_rC {\n  display: flex;\n  flex: 1;\n  font-size: 14px;\n  font-weight: 700;\n  align-items: center;\n  padding-left: 11px;\n}", "",{"version":3,"sources":["webpack://./src/services/upper-bar-manager/ui/dropdown-bar/dropdown-bar.component.scss","webpack://./node_modules/@playkit-js/playkit-js-ui/src/styles/exported.scss"],"names":[],"mappings":"AAEA;EACE,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,6CC8Ba;ED7Bb,kBAAA;EACA,SAAA;EACA,QAAA;AADF;AAGE;EACE,kBAAA;EACA,0BAAA;EACA,aAAA;EACA,aAAA;EACA,eAAA;AADJ;AAGI;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AADN;AAII;EACE,6CCQS;ADVf;AAKI;EACE,aAAA;EACA,OAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,kBAAA;AAHN","sourcesContent":["@import '~@playkit-js/playkit-js-ui';\n\n.more-dropdown {\n  position: absolute;\n  padding: 8px 4px;\n  width: 166px;  // replace to min-width and grow with text\n  background-color: $tone-7-color;\n  border-radius: 4px;\n  top: 44px;\n  right: 0;\n\n  .dropdown-item {\n    border-radius: 4px;\n    padding: 4px 12px 4px 15px;\n    display: flex;\n    margin: 4px 0;\n    cursor: pointer;\n\n    .icon {\n      width: 24px;\n      height: 24px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    &:hover {\n      background-color: $tone-6-color;\n    }\n\n    .dropdown-item-description {\n      display: flex;\n      flex: 1;\n      font-size: 14px;\n      font-weight: 700;\n      align-items: center;\n      padding-left: 11px;\n    }\n  }\n}","// Sass variables exported using the npm package for plugins usage\n\n// Accent Colors\n$primary-color: var(--playkit-primary-color);\n$primary-darker-color: var(--playkit-primary-darker-color);\n$primary-brighter-color: var(--playkit-primary-brighter-color);\n$primary-text-contrast-color: var(--playkit-primary-text-contrast-color);\n\n$secondary-color: var(--playkit-secondary-color);\n$secondary-darker-color: var(--playkit-secondary-darker-color);\n$secondary-brighter-color: var(--playkit-secondary-brighter-color);\n$secondary-text-contrast-color: var(--playkit-secondary-text-contrast-color);\n\n// Acknowledgement Colors\n$success-color: var(--playkit-success-color);\n$success-darker-color: var(--playkit-success-darker-color);\n$success-brighter-color: var(--playkit-success-brighter-color);\n$success-text-contrast-color: var(--playkit-success-text-contrast-color);\n\n$danger-color: var(--playkit-danger-color);\n$danger-darker-color: var(--playkit-danger-darker-color);\n$danger-brighter-color: var(--playkit-danger-brighter-color);\n$danger-text-contrast-color: var(--playkit-danger-text-contrast-color);\n\n$warning-color: var(--playkit-warning-color);\n$warning-darker-color: var(--playkit-warning-darker-color);\n$warning-brighter-color: var(--playkit-warning-brighter-color);\n$warning-text-contrast-color: var(--playkit-warning-text-contrast-color);\n\n// Tone Ramp\n$tone-1-color: var(--playkit-tone-1-color);\n$tone-2-color: var(--playkit-tone-2-color);\n$tone-3-color: var(--playkit-tone-3-color);\n$tone-4-color: var(--playkit-tone-4-color);\n$tone-5-color: var(--playkit-tone-5-color);\n$tone-6-color: var(--playkit-tone-6-color);\n$tone-7-color: var(--playkit-tone-7-color);\n$tone-8-color: var(--playkit-tone-8-color);\n\n$live-color: var(--playkit-live-color);\n$player-background-color: var(--playkit-player-background-color);\n$tab-focus-color: var(--playkit-tab-focus-color);\n$tooltip-background-color: var(--playkit-tooltip-background-color);\n$tooltip-color: var(--playkit-tooltip-color);\n$ads-color: var(--playkit-ads-color);\n"],"sourceRoot":""}]);
// Exports
var moreDropdown = "playkit-more-dropdown_SJ";
var dropdownItem = "playkit-dropdown-item_Aq";
var icon = "playkit-icon_h_";
var dropdownItemDescription = "playkit-dropdown-item-description_rC";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/upper-bar-manager/ui/more-icon/more-icon.component.scss":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/upper-bar-manager/ui/more-icon/more-icon.component.scss ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "moreIcon": () => (/* binding */ moreIcon)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".playkit-more-icon_fR {\n  margin-right: 0;\n  z-index: 2;\n}", "",{"version":3,"sources":["webpack://./src/services/upper-bar-manager/ui/more-icon/more-icon.component.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;EACA,UAAA;AACF","sourcesContent":[".more-icon {\n  margin-right: 0;\n  z-index: 2;\n}\n\n"],"sourceRoot":""}]);
// Exports
var moreIcon = "playkit-more-icon_fR";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/ui-common/injected-component/injected-component.scss":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/ui-common/injected-component/injected-component.scss ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fillContainer": () => (/* reexport safe */ _css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_injected_component_scss__WEBPACK_IMPORTED_MODULE_6__.fillContainer)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_injected_component_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./injected-component.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/@playkit-js/common/dist/ui-common/injected-component/injected-component.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_injected_component_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_injected_component_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_injected_component_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_injected_component_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/ui-common/managed-component/_managed-component.scss":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/ui-common/managed-component/_managed-component.scss ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fillContainer": () => (/* reexport safe */ _css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_managed_component_scss__WEBPACK_IMPORTED_MODULE_6__.fillContainer)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_managed_component_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./_managed-component.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/@playkit-js/common/dist/ui-common/managed-component/_managed-component.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_managed_component_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_managed_component_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_managed_component_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_managed_component_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/services/side-panels-manager/ui/panel-item-wrapper/panel-item-wrapper.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/services/side-panels-manager/ui/panel-item-wrapper/panel-item-wrapper.component.scss ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activeState": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_panel_item_wrapper_component_scss__WEBPACK_IMPORTED_MODULE_6__.activeState),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "sidePanelWrapper": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_panel_item_wrapper_component_scss__WEBPACK_IMPORTED_MODULE_6__.sidePanelWrapper)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_panel_item_wrapper_component_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./panel-item-wrapper.component.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/side-panels-manager/ui/panel-item-wrapper/panel-item-wrapper.component.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_panel_item_wrapper_component_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_panel_item_wrapper_component_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_panel_item_wrapper_component_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_panel_item_wrapper_component_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/services/upper-bar-manager/ui/displayed-bar/displayed-bar.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/services/upper-bar-manager/ui/displayed-bar/displayed-bar.component.scss ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "rightUpperBarWrapperContainer": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_displayed_bar_component_scss__WEBPACK_IMPORTED_MODULE_6__.rightUpperBarWrapperContainer)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_displayed_bar_component_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./displayed-bar.component.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/upper-bar-manager/ui/displayed-bar/displayed-bar.component.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_displayed_bar_component_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_displayed_bar_component_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_displayed_bar_component_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_displayed_bar_component_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/services/upper-bar-manager/ui/dropdown-bar/dropdown-bar.component.scss":
/*!************************************************************************************!*\
  !*** ./src/services/upper-bar-manager/ui/dropdown-bar/dropdown-bar.component.scss ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "dropdownItem": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_dropdown_bar_component_scss__WEBPACK_IMPORTED_MODULE_6__.dropdownItem),
/* harmony export */   "dropdownItemDescription": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_dropdown_bar_component_scss__WEBPACK_IMPORTED_MODULE_6__.dropdownItemDescription),
/* harmony export */   "icon": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_dropdown_bar_component_scss__WEBPACK_IMPORTED_MODULE_6__.icon),
/* harmony export */   "moreDropdown": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_dropdown_bar_component_scss__WEBPACK_IMPORTED_MODULE_6__.moreDropdown)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_dropdown_bar_component_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./dropdown-bar.component.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/upper-bar-manager/ui/dropdown-bar/dropdown-bar.component.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_dropdown_bar_component_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_dropdown_bar_component_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_dropdown_bar_component_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_dropdown_bar_component_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/services/upper-bar-manager/ui/more-icon/more-icon.component.scss":
/*!******************************************************************************!*\
  !*** ./src/services/upper-bar-manager/ui/more-icon/more-icon.component.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "moreIcon": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_more_icon_component_scss__WEBPACK_IMPORTED_MODULE_6__.moreIcon)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_more_icon_component_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./more-icon.component.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/upper-bar-manager/ui/more-icon/more-icon.component.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_more_icon_component_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_more_icon_component_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_more_icon_component_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_more_icon_component_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/services/floating-manager/floating-manager.tsx":
/*!************************************************************!*\
  !*** ./src/services/floating-manager/floating-manager.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FloatingManager": () => (/* binding */ FloatingManager)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _preset_manager_preset_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../preset-manager/preset-manager */ "./src/services/preset-manager/preset-manager.tsx");
/* harmony import */ var _playkit_js_common_dist_ui_common_player_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @playkit-js/common/dist/ui-common//player-utils */ "./node_modules/@playkit-js/common/dist/ui-common/player-utils.js");
/* harmony import */ var _playkit_js_common_dist_ui_common_managed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @playkit-js/common/dist/ui-common/managed-component */ "./node_modules/@playkit-js/common/dist/ui-common/managed-component/index.js");
/* harmony import */ var _playkit_js_common_dist_ui_common_managed_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_playkit_js_common_dist_ui_common_managed_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_floating_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/floating-item */ "./src/services/floating-manager/ui/floating-item.tsx");





const presetAreasMapping = {
    VideoArea: {
        Playback: 'VideoArea',
        Live: 'VideoArea'
    },
    PresetArea: {
        Playback: 'VideoArea',
        Live: 'VideoArea'
    },
    InteractiveArea: {
        Playback: 'VideoArea',
        Live: 'VideoArea'
    }
};
class FloatingManager {
    constructor(_options) {
        this._options = _options;
        this._registered = false;
        this._items = {
            VideoArea: [],
            InteractiveArea: [],
            PresetArea: []
        };
        this._componentRef = {
            InteractiveArea: null,
            VideoArea: null,
            PresetArea: null
        };
        this._cache = {
            canvas: {
                playerSize: { width: 0, height: 0 },
                videoSize: { width: 0, height: 0 }
            }
        };
        this._renderItems = (position) => {
            const props = this._getRendererProps({});
            return this._items[position].map((item) => item.renderFloatingChild(props));
        };
        this._renderChild = (position) => {
            return ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_playkit_js_common_dist_ui_common_managed_component__WEBPACK_IMPORTED_MODULE_3__.ManagedComponent, { label: 'floating-manager', renderChildren: () => this._renderItems(position), isShown: () => true, ref: (ref) => (this._componentRef[position] = ref) }));
        };
        this._onTimeUpdate = () => {
            this._updateComponents();
        };
        this._onMediaLoaded = () => {
            this._updateCachedCanvas();
            this._updateComponents();
        };
        this._onLoadedData = () => {
            this._updateCachedCanvas();
            this._updateComponents();
        };
        Object.keys(presetAreasMapping).forEach((presetType) => {
            this._options.presetManager.add({
                label: 'floating-manager',
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                presetAreas: presetAreasMapping[presetType],
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                renderChild: () => this._renderChild(FloatingPositions[presetType])
            });
        });
        this._eventManager = _options.eventManager;
        this._addPlayerBindings();
        this._updateCachedCanvas();
    }
    /**
     * initialize new floating ui item
     * @param item
     */
    //TODO push new item to relevant position array according to its' FloatingPositions value
    add(data) {
        const { presetManager } = this._options;
        const itemOptions = {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            presetManager,
            ...this._options,
            data
        };
        const item = new _ui_floating_item__WEBPACK_IMPORTED_MODULE_4__.FloatingItem(itemOptions);
        this._items[data.position].push(item);
        return item;
    }
    remove(item) {
        const positionItems = this._items[item.data.position];
        const itemIndex = positionItems.indexOf(item);
        if (itemIndex > -1) {
            positionItems[itemIndex].destroy();
            positionItems.splice(itemIndex, 1);
        }
        else {
            // console.warn(`couldn't remove ${item} since it wasn't found`);
            // TODO
        }
    }
    reset() {
        const { kalturaPlayer } = this._options;
        const allItems = [...this._items.VideoArea, ...this._items.InteractiveArea, ...this._items.PresetArea];
        allItems.forEach((item) => {
            try {
                item.destroy();
            }
            catch (e) {
                // TODO log error
                // console.warn(e);
            }
        });
        this._items.VideoArea = [];
        this._items.PresetArea = [];
        this._items.InteractiveArea = [];
        this._eventManager.unlisten(kalturaPlayer, kalturaPlayer.Event.Core.TIME_UPDATE, this._onTimeUpdate);
        this._eventManager.unlisten(kalturaPlayer, kalturaPlayer.Event.Core.MEDIA_LOADED, this._onMediaLoaded);
        this._eventManager.unlisten(kalturaPlayer, kalturaPlayer.Event.Core.LOADED_DATA, this._onLoadedData);
    }
    _getRendererProps(props) {
        const { kalturaPlayer } = this._options;
        return {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            currentTime: typeof props.currentTime !== 'undefined' ? props.currentTime : kalturaPlayer.currentTime * 1000,
            canvas: this._cache.canvas
        };
    }
    _updateCachedCanvas() {
        this._cache.canvas = {
            playerSize: (0,_playkit_js_common_dist_ui_common_player_utils__WEBPACK_IMPORTED_MODULE_2__.getPlayerSize)(this._options.kalturaPlayer),
            videoSize: (0,_playkit_js_common_dist_ui_common_player_utils__WEBPACK_IMPORTED_MODULE_2__.getVideoSize)(this._options.kalturaPlayer)
        };
    }
    _updateComponents() {
        if (this._componentRef.InteractiveArea) {
            this._componentRef.InteractiveArea.update();
        }
        if (this._componentRef.PresetArea) {
            this._componentRef.PresetArea.update();
        }
        if (this._componentRef.VideoArea) {
            this._componentRef.VideoArea.update();
        }
    }
    _addPlayerBindings() {
        const { kalturaPlayer } = this._options;
        this._eventManager.listen(kalturaPlayer, kalturaPlayer.Event.Core.TIME_UPDATE, this._onTimeUpdate);
        this._eventManager.listen(kalturaPlayer, kalturaPlayer.Event.Core.MEDIA_LOADED, this._onMediaLoaded);
        this._eventManager.listen(kalturaPlayer, kalturaPlayer.Event.Core.LOADED_DATA, this._onLoadedData);
        this._options.presetManager.on(_preset_manager_preset_manager__WEBPACK_IMPORTED_MODULE_1__.PresetManagerEventTypes.VideoResizeEvent, () => {
            this._updateCachedCanvas();
            this._updateComponents();
        });
        this._options.presetManager.on(_preset_manager_preset_manager__WEBPACK_IMPORTED_MODULE_1__.PresetManagerEventTypes.PresetResizeEvent, () => {
            this._updateCachedCanvas();
            this._updateComponents();
        });
    }
    registerUIComponents() {
        if (this._registered) {
            return [];
        }
        this._registered = true;
        return this._options.presetManager.registerComponents();
    }
}


/***/ }),

/***/ "./src/services/floating-manager/ui/floating-item.tsx":
/*!************************************************************!*\
  !*** ./src/services/floating-manager/ui/floating-item.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FloatingItem": () => (/* binding */ FloatingItem)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _playkit_js_common_dist_ui_common_managed_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @playkit-js/common/dist/ui-common/managed-component */ "./node_modules/@playkit-js/common/dist/ui-common/managed-component/index.js");
/* harmony import */ var _playkit_js_common_dist_ui_common_managed_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_playkit_js_common_dist_ui_common_managed_component__WEBPACK_IMPORTED_MODULE_1__);


class FloatingItem {
    constructor(options) {
        this._destroyed = false;
        this._isShown = false;
        this._componentRef = null;
        this.remove = () => {
            this._isShown = false;
            if (!this._componentRef) {
                return;
            }
            this._componentRef.update();
        };
        this.add = () => {
            this._isShown = true;
            if (!this._componentRef) {
                return;
            }
            this._componentRef.update();
        };
        this.update = () => {
            if (!this._componentRef) {
                return;
            }
            this._componentRef.update();
        };
        this._options = options;
        this._eventManager = options.eventManager;
        this._addPlayerBindings();
    }
    get data() {
        return this._options.data;
    }
    /**
     * destory the ui item
     */
    destroy() {
        this._destroyed = true;
        this.remove();
    }
    renderFloatingChild(props) {
        const { label } = this._options.data;
        return ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_playkit_js_common_dist_ui_common_managed_component__WEBPACK_IMPORTED_MODULE_1__.ManagedComponent, { label: label, renderChildren: () => this._options.data.renderContent(props), isShown: () => this._isShown, ref: (ref) => {
                this._componentRef = ref;
            } }));
    }
    _addPlayerBindings() {
        const { kalturaPlayer, data } = this._options;
        if (data.mode === 'MediaLoaded') {
            this._eventManager.listenOnce(kalturaPlayer, kalturaPlayer.Event.Core.MEDIA_LOADED, this.add);
            // kalturaPlayer.addEventListener(kalturaPlayer.Event.MEDIA_LOADED, this.add);
        }
        if (data.mode === 'FirstPlay') {
            this._eventManager.listenOnce(kalturaPlayer, kalturaPlayer.Event.Core.FIRST_PLAY, this.add);
        }
        if (data.mode === 'Immediate') {
            this.add();
        }
    }
}


/***/ }),

/***/ "./src/services/preset-manager/models/preset-item-data.ts":
/*!****************************************************************!*\
  !*** ./src/services/preset-manager/models/preset-item-data.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RelativeToTypes": () => (/* binding */ RelativeToTypes),
/* harmony export */   "ReservedPresetAreas": () => (/* binding */ ReservedPresetAreas),
/* harmony export */   "ReservedPresetNames": () => (/* binding */ ReservedPresetNames)
/* harmony export */ });
var ReservedPresetNames;
(function (ReservedPresetNames) {
    ReservedPresetNames["Playback"] = "Playback";
    ReservedPresetNames["Live"] = "Live";
})(ReservedPresetNames || (ReservedPresetNames = {}));
var ReservedPresetAreas;
(function (ReservedPresetAreas) {
    ReservedPresetAreas["PresetFloating"] = "PresetFloating";
    ReservedPresetAreas["BottomBarLeftControls"] = "BottomBarLeftControls";
    ReservedPresetAreas["BottomBarRightControls"] = "BottomBarRightControls";
    ReservedPresetAreas["TopBarLeftControls"] = "TopBarLeftControls";
    ReservedPresetAreas["TopBarRightControls"] = "TopBarRightControls";
    ReservedPresetAreas["SidePanelTop"] = "SidePanelTop";
    ReservedPresetAreas["SidePanelLeft"] = "SidePanelLeft";
    ReservedPresetAreas["SidePanelRight"] = "SidePanelRight";
    ReservedPresetAreas["SidePanelBottom"] = "SidePanelBottom";
    ReservedPresetAreas["PresetArea"] = "PresetArea";
    ReservedPresetAreas["InteractiveArea"] = "InteractiveArea";
    ReservedPresetAreas["PlayerArea"] = "PlayerArea";
    ReservedPresetAreas["VideoArea"] = "VideoArea";
})(ReservedPresetAreas || (ReservedPresetAreas = {}));
var RelativeToTypes;
(function (RelativeToTypes) {
    RelativeToTypes["Before"] = "Before";
    RelativeToTypes["After"] = "After";
    RelativeToTypes["Replace"] = "Replace";
})(RelativeToTypes || (RelativeToTypes = {}));


/***/ }),

/***/ "./src/services/preset-manager/preset-manager.tsx":
/*!********************************************************!*\
  !*** ./src/services/preset-manager/preset-manager.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PresetManager": () => (/* binding */ PresetManager),
/* harmony export */   "PresetManagerEventTypes": () => (/* binding */ PresetManagerEventTypes)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _playkit_js_common_dist_ui_common_events_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @playkit-js/common/dist/ui-common/events-manager */ "./node_modules/@playkit-js/common/dist/ui-common/events-manager.js");
/* harmony import */ var _ui_player_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui-player-adapter */ "./src/services/preset-manager/ui-player-adapter.ts");
/* harmony import */ var _ui_preset_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/preset-item */ "./src/services/preset-manager/ui/preset-item.tsx");




var PresetManagerEventTypes;
(function (PresetManagerEventTypes) {
    PresetManagerEventTypes["PresetResizeEvent"] = "PresetResizeEvent";
    PresetManagerEventTypes["VideoResizeEvent"] = "VideoResizeEvent";
})(PresetManagerEventTypes || (PresetManagerEventTypes = {}));
class PresetManager {
    constructor(options) {
        this._events = new _playkit_js_common_dist_ui_common_events_manager__WEBPACK_IMPORTED_MODULE_1__.EventsManager();
        this._items = [];
        this._pendingItems = [];
        this._registerToPlayer = () => {
            this._eventManager.listen(this._kalturaPlayer, this._kalturaPlayer.Event.UI.UI_PRESET_RESIZE, this._notifyUIPresetResize);
            this._eventManager.listen(this._kalturaPlayer, this._kalturaPlayer.Event.UI.VIDEO_RESIZE, this._notifyVideoResize);
        };
        this._notifyVideoResize = () => {
            this._events.emit({
                type: PresetManagerEventTypes.VideoResizeEvent
            });
        };
        this._notifyUIPresetResize = () => {
            this._events.emit({
                type: PresetManagerEventTypes.PresetResizeEvent
            });
        };
        this._unregisterToPlayer = () => {
            this._eventManager.unlisten(this._kalturaPlayer, this._kalturaPlayer.Event.UI.UI_PRESET_RESIZE, this._notifyUIPresetResize);
            this._eventManager.unlisten(this._kalturaPlayer, this._kalturaPlayer.Event.UI.VIDEO_RESIZE, this._notifyVideoResize);
        };
        this.on = this._events.on.bind(this._events);
        this.off = this._events.off.bind(this._events);
        this.add({
            label: 'preset-manager',
            presetAreas: { Playback: 'PlayerArea', Live: 'PlayerArea' },
            renderChild: () => ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_ui_player_adapter__WEBPACK_IMPORTED_MODULE_2__.UIPlayerAdapter, { player: options.kalturaPlayer, onMount: this._registerToPlayer, onUnmount: this._unregisterToPlayer }))
        });
        this._eventManager = options.eventManager;
        this._kalturaPlayer = options.kalturaPlayer;
    }
    add(data) {
        const component = new _ui_preset_item__WEBPACK_IMPORTED_MODULE_3__.PresetItem({
            kalturaPlayer: this._kalturaPlayer,
            data
        });
        this._pendingItems.push(component);
    }
    registerComponents() {
        let configs = [];
        this._pendingItems.forEach((item) => {
            configs = [...configs, ...item.playerConfig];
        });
        this._items = [...this._items, ...this._pendingItems];
        this._pendingItems = [];
        return configs.filter(Boolean);
    }
}


/***/ }),

/***/ "./src/services/preset-manager/ui-player-adapter.ts":
/*!**********************************************************!*\
  !*** ./src/services/preset-manager/ui-player-adapter.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UIPlayerAdapter": () => (/* binding */ UIPlayerAdapter)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);

class UIPlayerAdapter extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
    componentDidMount() {
        this.props.onMount(this.props.player);
    }
    componentWillUnmount() {
        this.props.onUnmount(this.props.player);
    }
    render() {
        return null;
    }
}
UIPlayerAdapter.defaultProps = {
    player: null
};


/***/ }),

/***/ "./src/services/preset-manager/ui/preset-item.tsx":
/*!********************************************************!*\
  !*** ./src/services/preset-manager/ui/preset-item.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PresetItem": () => (/* binding */ PresetItem)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_preset_item_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/preset-item-data */ "./src/services/preset-manager/models/preset-item-data.ts");
/* harmony import */ var _playkit_js_common_dist_ui_common_injected_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @playkit-js/common/dist/ui-common//injected-component */ "./node_modules/@playkit-js/common/dist/ui-common/injected-component/index.js");



class PresetItem {
    constructor(options) {
        this._render = () => {
            if (this._options.data.isolateComponent) {
                const { data: { label, fillContainer } } = this._options;
                return ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_playkit_js_common_dist_ui_common_injected_component__WEBPACK_IMPORTED_MODULE_2__.InjectedComponent, { label: label, fillContainer: fillContainer || false, onCreate: this._onCreate, onDestroy: this._onDestroy }));
            }
            return this._options.data.renderChild();
        };
        this._onDestroy = (options) => {
            // TODO sakal handle destroy
            if (!options.parent) {
                return;
            }
            (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(null, options.parent);
        };
        this._onCreate = (options) => {
            try {
                if (!options.parent) {
                    return;
                }
                const child = this._options.data.renderChild();
                if (!child) {
                    return;
                }
                (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(child, options.parent);
            }
            catch (error) {
                // TODO
            }
        };
        this._options = options;
    }
    get playerConfig() {
        const configs = [];
        for (const presetType in this._options.data.presetAreas) {
            const presetContainer = this._options.data.presetAreas[presetType];
            const { relativeTo } = this._options.data;
            if (!presetContainer) {
                continue;
            }
            const result = {
                label: this._options.data.label,
                presets: [presetType],
                container: presetContainer,
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                get: this._render
            };
            if (relativeTo) {
                switch (relativeTo.type) {
                    case _models_preset_item_data__WEBPACK_IMPORTED_MODULE_1__.RelativeToTypes.After:
                        result['afterComponent'] = relativeTo.name;
                        break;
                    case _models_preset_item_data__WEBPACK_IMPORTED_MODULE_1__.RelativeToTypes.Before:
                        result['beforeComponent'] = relativeTo.name;
                        break;
                    case _models_preset_item_data__WEBPACK_IMPORTED_MODULE_1__.RelativeToTypes.Replace:
                        result['replaceComponent'] = relativeTo.name;
                        break;
                }
            }
            configs.push(result);
        }
        return configs;
    }
}


/***/ }),

/***/ "./src/services/side-panels-manager/models/item-wrapper.tsx":
/*!******************************************************************!*\
  !*** ./src/services/side-panels-manager/models/item-wrapper.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemWrapper": () => (/* binding */ ItemWrapper)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_panel_item_wrapper_panel_item_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/panel-item-wrapper/panel-item-wrapper.component */ "./src/services/side-panels-manager/ui/panel-item-wrapper/panel-item-wrapper.component.tsx");


/**
 * Panel item metadata
 * @internal
 */
class ItemWrapper {
    constructor(item, player, onClick) {
        this.id = ++ItemWrapper.nextId;
        this.item = item;
        this.player = player;
        this.upperBarManager = this.player.getService('upperBarManager');
        this.isActive = false;
        this.injectPanelComponent();
        if (item.iconComponent) {
            const itemId = this.id;
            this.iconId = this.upperBarManager.add({
                label: this.item.label,
                svgIcon: this.item.iconComponent.svgIcon,
                onClick: () => onClick(itemId),
                component: this.item.iconComponent.component
            });
        }
    }
    activate() {
        if (this.panelItemComponentRef.current) {
            this.panelItemComponentRef.current.on();
            this.item.onActivate?.();
            this.isActive = true;
        }
        else {
            setTimeout(() => this.activate());
        }
    }
    deactivate(switchMode = false) {
        this.panelItemComponentRef.current.off(switchMode);
        this.item.onDeactivate?.();
        this.isActive = false;
    }
    remove() {
        this.removePanelComponentFn();
        if (this.item.iconComponent?.component)
            this.upperBarManager.remove(this.iconId);
    }
    update() {
        this.panelItemComponentRef.current.forceUpdate();
    }
    injectPanelComponent() {
        const { label, position, panelComponent, presets } = this.item;
        const SidePanelComponent = panelComponent;
        const componentRef = (0,preact__WEBPACK_IMPORTED_MODULE_0__.createRef)();
        this.panelItemComponentRef = componentRef;
        this.removePanelComponentFn = this.player.ui.addComponent({
            label: `Side-panel-${position}-${label}`,
            presets,
            area: ItemWrapper.getPanelArea(position),
            get: () => {
                return ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_ui_panel_item_wrapper_panel_item_wrapper_component__WEBPACK_IMPORTED_MODULE_1__.PanelItemWrapper, { ref: componentRef },
                    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(SidePanelComponent, { isActive: this.isActive })));
            }
        });
    }
    static getPanelArea(position) {
        return `SidePanel${position.charAt(0).toUpperCase()}${position.slice(1)}`;
    }
}
ItemWrapper.nextId = 0;


/***/ }),

/***/ "./src/services/side-panels-manager/side-panels-manager.ts":
/*!*****************************************************************!*\
  !*** ./src/services/side-panels-manager/side-panels-manager.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidePanelsManager": () => (/* binding */ SidePanelsManager)
/* harmony export */ });
/* harmony import */ var _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @playkit-js/kaltura-player-js */ "@playkit-js/kaltura-player-js");
/* harmony import */ var _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_item_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/item-wrapper */ "./src/services/side-panels-manager/models/item-wrapper.tsx");


const { SidePanelModes, SidePanelPositions, ReservedPresetNames } = _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_0__.ui;
const COUNTER_PANELS = {
    [SidePanelPositions.TOP]: SidePanelPositions.BOTTOM,
    [SidePanelPositions.BOTTOM]: SidePanelPositions.TOP,
    [SidePanelPositions.RIGHT]: SidePanelPositions.LEFT,
    [SidePanelPositions.LEFT]: SidePanelPositions.RIGHT
};
class SidePanelsManager {
    /**
     * @ignore
     */
    constructor(player, logger) {
        this.player = player;
        this.activePanels = { top: null, bottom: null, right: null, left: null };
        this.componentsRegistry = new Map();
        this.logger = logger;
    }
    add(item) {
        if (SidePanelsManager.validateItem(item)) {
            const newItemWrapper = new _models_item_wrapper__WEBPACK_IMPORTED_MODULE_1__.ItemWrapper(item, this.player, (id) => this.toggle(id));
            this.componentsRegistry.set(newItemWrapper.id, newItemWrapper);
            this.logger.debug('New Panel Item Added', item);
            return newItemWrapper.id;
        }
        this.logger.warn('Invalid SidePanelItem parameters', item);
    }
    remove(itemId) {
        const itemWrapper = this.componentsRegistry.get(itemId);
        if (itemWrapper) {
            if (this.isItemActive(itemId))
                this.deactivateItem(itemId);
            itemWrapper.remove();
            this.componentsRegistry.delete(itemId);
        }
        else {
            this.logger.warn(`${itemId} is not registered`);
        }
    }
    activateItem(itemId) {
        const itemWrapper = this.componentsRegistry.get(itemId);
        if (itemWrapper) {
            const { position, expandMode } = itemWrapper.item;
            // Trying to activate an already active item
            if (this.isItemActive(itemId))
                return;
            // Switch between items if currently there is an active one (without collapsing / expanding PS)
            const previousItemWrapper = this.activePanels[position];
            if (previousItemWrapper !== null) {
                previousItemWrapper.deactivate(true);
            }
            // Deactivate the counter panel if is active
            const counterPosition = SidePanelsManager.getCounterPanelPosition(position);
            if (this.activePanels[counterPosition]) {
                this.deactivateItem(this.activePanels[counterPosition].id);
            }
            // Update new item as active
            itemWrapper.activate();
            this.expand(position, expandMode);
            this.activePanels[position] = itemWrapper;
        }
        else {
            this.logger.warn(`${itemId} is not registered`);
        }
    }
    deactivateItem(itemId) {
        const itemWrapper = this.componentsRegistry.get(itemId);
        if (itemWrapper) {
            if (!this.isItemActive(itemId))
                return;
            const { position } = itemWrapper.item;
            itemWrapper.deactivate();
            this.collapse(position);
            this.activePanels[position] = null;
        }
        else {
            this.logger.warn(`${itemId} is not registered`);
        }
    }
    isItemActive(itemId) {
        const itemWrapper = this.componentsRegistry.get(itemId);
        if (itemWrapper) {
            return this.activePanels[itemWrapper.item.position]?.id === itemId;
        }
        this.logger.warn(`${itemId} is not registered`);
        return false;
    }
    /**
     * Rerender (uses preact Component.forceUpdate api under the hoods) the side panel item component
     * It's just for backward compatibility you should not use it.
     */
    update(itemId) {
        const itemWrapper = this.componentsRegistry.get(itemId);
        if (itemWrapper) {
            itemWrapper.update();
        }
        else {
            this.logger.warn(`${itemId} is not registered`);
        }
    }
    /**
     * @ignore
     */
    reset() {
        this.logger.debug('reset');
    }
    /**
     * @ignore
     */
    destroy() {
        this.logger.debug('destroy');
        this.removeAllItems();
    }
    removeAllItems() {
        for (const value of this.componentsRegistry.values()) {
            this.remove(value.id);
        }
    }
    toggle(itemId) {
        if (this.isItemActive(itemId)) {
            this.deactivateItem(itemId);
        }
        else {
            this.activateItem(itemId);
        }
    }
    expand(position, expandMode) {
        this.player.ui.store.dispatch(_playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_0__.ui.reducers.shell.actions.updateSidePanelMode(position, expandMode));
    }
    collapse(position) {
        this.player.ui.store.dispatch(_playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_0__.ui.reducers.shell.actions.updateSidePanelMode(position, SidePanelModes.HIDDEN));
    }
    static getCounterPanelPosition(position) {
        return COUNTER_PANELS[position];
    }
    static validateItem(item) {
        const { label, panelComponent, iconComponent, position, expandMode, onActivate, onDeactivate, presets } = item;
        return !!(label &&
            Object.values(SidePanelPositions).includes(position) &&
            Object.values(SidePanelModes).includes(expandMode) &&
            presets.every((preset) => Object.values(ReservedPresetNames).includes(preset)) &&
            typeof panelComponent === 'function' &&
            ((typeof iconComponent?.component === 'function' && typeof iconComponent?.svgIcon.path === 'string') ||
                iconComponent === undefined) &&
            (typeof onActivate === 'function' || onActivate === undefined) &&
            (typeof onDeactivate === 'function' || onDeactivate === undefined));
    }
}


/***/ }),

/***/ "./src/services/side-panels-manager/ui/panel-item-wrapper/panel-item-wrapper.component.tsx":
/*!*************************************************************************************************!*\
  !*** ./src/services/side-panels-manager/ui/panel-item-wrapper/panel-item-wrapper.component.tsx ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelItemWrapper": () => (/* binding */ PanelItemWrapper)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _panel_item_wrapper_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel-item-wrapper.component.scss */ "./src/services/side-panels-manager/ui/panel-item-wrapper/panel-item-wrapper.component.scss");
/* harmony import */ var _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @playkit-js/kaltura-player-js */ "@playkit-js/kaltura-player-js");
/* harmony import */ var _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_2__);



const { defaultTransitionTime } = _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_2__.ui.style;
/**
 * PanelItemWrapper component
 * @internal
 */
class PanelItemWrapper extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor() {
        super();
        this.state = { on: false };
        this.switchMode = false;
    }
    on() {
        this.setState({ on: true });
    }
    off(switchMode) {
        this.switchMode = switchMode;
        this.setState({ on: false });
    }
    render() {
        return ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { className: [_panel_item_wrapper_component_scss__WEBPACK_IMPORTED_MODULE_1__.sidePanelWrapper, this.state.on ? _panel_item_wrapper_component_scss__WEBPACK_IMPORTED_MODULE_1__.activeState : ''].join(' '), style: !this.state.on && !this.switchMode ? { transition: `visibility ${defaultTransitionTime}ms` } : '' }, (0,preact__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(this.props.children)));
    }
}


/***/ }),

/***/ "./src/services/upper-bar-manager/models/icon-model.ts":
/*!*************************************************************!*\
  !*** ./src/services/upper-bar-manager/models/icon-model.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconModel": () => (/* binding */ IconModel)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @playkit-js/kaltura-player-js */ "@playkit-js/kaltura-player-js");
/* harmony import */ var _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_1__);


const { ReservedPresetNames } = _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_1__.ui;
class IconModel {
    constructor(item) {
        this.id = ++IconModel.nextId;
        this.label = item.label;
        this.component = item.component;
        this.svgIcon = item.svgIcon;
        this.onClick = item.onClick;
        this.componentRef = (0,preact__WEBPACK_IMPORTED_MODULE_0__.createRef)();
        this.presets =
            item.presets && item.presets.length > 0 ? item.presets : [ReservedPresetNames.Playback, ReservedPresetNames.Live];
    }
    update() {
        this.componentRef.current.forceUpdate();
    }
}
IconModel.nextId = 0;


/***/ }),

/***/ "./src/services/upper-bar-manager/ui/displayed-bar/displayed-bar.component.tsx":
/*!*************************************************************************************!*\
  !*** ./src/services/upper-bar-manager/ui/displayed-bar/displayed-bar.component.tsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisplayedBar": () => (/* binding */ DisplayedBar)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icon_wrapper_icon_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icon-wrapper/icon-wrapper.component */ "./src/services/upper-bar-manager/ui/icon-wrapper/icon-wrapper.component.tsx");
/* harmony import */ var _displayed_bar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayed-bar.component.scss */ "./src/services/upper-bar-manager/ui/displayed-bar/displayed-bar.component.scss");
/* harmony import */ var _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @playkit-js/kaltura-player-js */ "@playkit-js/kaltura-player-js");
/* harmony import */ var _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _more_icon_more_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../more-icon/more-icon.component */ "./src/services/upper-bar-manager/ui/more-icon/more-icon.component.tsx");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const { PLAYER_SIZE } = _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_3__.ui.Components;
const { connect } = _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_3__.ui.redux;
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type,@typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const mapStateToProps = (state) => ({
    playerSize: state.shell.playerSize
});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
let DisplayedBar = class DisplayedBar extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor() {
        super();
        this.handleOnClick = () => {
            this.setState((prevState) => ({ showDropdown: !prevState.showDropdown }));
        };
        this.update = () => {
            this.forceUpdate();
        };
        this.state = { showDropdown: false };
    }
    closeDropdown() {
        this.setState({ showDropdown: false });
    }
    splitControlsIntoDisplayedAndDropdown() {
        switch (this.props.playerSize) {
            case PLAYER_SIZE.TINY:
                return { displayedControls: [], dropdownControls: [] };
            case PLAYER_SIZE.EXTRA_SMALL:
            case PLAYER_SIZE.SMALL:
                return this.splitControls(2);
            default:
                return this.splitControls(4);
        }
    }
    splitControls(numberOfDisplayedIcon) {
        let displayedControls;
        let dropdownControls;
        const controls = this.props.getControls();
        if (controls.length > numberOfDisplayedIcon + 1) {
            displayedControls = controls.slice(0, numberOfDisplayedIcon);
            dropdownControls = controls.slice(numberOfDisplayedIcon);
        }
        else {
            displayedControls = controls;
            dropdownControls = [];
        }
        return { displayedControls, dropdownControls };
    }
    render() {
        const { displayedControls, dropdownControls } = this.splitControlsIntoDisplayedAndDropdown();
        return ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { className: _displayed_bar_component_scss__WEBPACK_IMPORTED_MODULE_2__.rightUpperBarWrapperContainer },
            displayedControls.map(({ id, component, onClick, componentRef }) => {
                const IconWrapperComponent = component;
                return ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_icon_wrapper_icon_wrapper_component__WEBPACK_IMPORTED_MODULE_1__.IconWrapper, { key: id, onClick: (...e) => {
                        onClick(...e);
                        this.closeDropdown();
                    }, ref: componentRef },
                    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(IconWrapperComponent, null)));
            }),
            dropdownControls.length > 0 && ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_more_icon_more_icon_component__WEBPACK_IMPORTED_MODULE_4__.MoreIcon, { showDropdown: this.state.showDropdown, onClick: this.handleOnClick, icons: dropdownControls }))));
    }
};
DisplayedBar = __decorate([
    connect(mapStateToProps, null, null, { forwardRef: true })
], DisplayedBar);



/***/ }),

/***/ "./src/services/upper-bar-manager/ui/dropdown-bar/dropdown-bar.component.tsx":
/*!***********************************************************************************!*\
  !*** ./src/services/upper-bar-manager/ui/dropdown-bar/dropdown-bar.component.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownBar": () => (/* binding */ DropdownBar)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dropdown_bar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown-bar.component.scss */ "./src/services/upper-bar-manager/ui/dropdown-bar/dropdown-bar.component.scss");
/* harmony import */ var _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @playkit-js/kaltura-player-js */ "@playkit-js/kaltura-player-js");
/* harmony import */ var _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _playkit_js_common_dist_hoc_a11y_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @playkit-js/common/dist/hoc/a11y-wrapper */ "./node_modules/@playkit-js/common/dist/hoc/a11y-wrapper/index.js");




const { Icon } = _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_2__.ui.Components;
class DropdownBar extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
    render() {
        return ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { className: _dropdown_bar_component_scss__WEBPACK_IMPORTED_MODULE_1__.moreDropdown, role: "menu", "aria-expanded": "true" }, this.props.controls.map(({ id, label, svgIcon, onClick }) => {
            return ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: id },
                (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_playkit_js_common_dist_hoc_a11y_wrapper__WEBPACK_IMPORTED_MODULE_3__.A11yWrapper, { onClick: (e) => {
                        onClick(e);
                        this.props.onDropdownClick();
                    }, role: "menuitem" },
                    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { className: _dropdown_bar_component_scss__WEBPACK_IMPORTED_MODULE_1__.dropdownItem, tabIndex: 0, "aria-label": label },
                        (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { className: _dropdown_bar_component_scss__WEBPACK_IMPORTED_MODULE_1__.icon },
                            (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(Icon, { id: `icon${id}`, path: svgIcon.path, viewBox: svgIcon.viewBox })),
                        (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", { className: _dropdown_bar_component_scss__WEBPACK_IMPORTED_MODULE_1__.dropdownItemDescription }, label)))));
        })));
    }
}


/***/ }),

/***/ "./src/services/upper-bar-manager/ui/icon-wrapper/icon-wrapper.component.tsx":
/*!***********************************************************************************!*\
  !*** ./src/services/upper-bar-manager/ui/icon-wrapper/icon-wrapper.component.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconWrapper": () => (/* binding */ IconWrapper)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _playkit_js_common_dist_hoc_a11y_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @playkit-js/common/dist/hoc/a11y-wrapper */ "./node_modules/@playkit-js/common/dist/hoc/a11y-wrapper/index.js");


class IconWrapper extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
    render() {
        return ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_playkit_js_common_dist_hoc_a11y_wrapper__WEBPACK_IMPORTED_MODULE_1__.A11yWrapper, { role: "generic", onClick: this.props.onClick },
            (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,preact__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(this.props.children))));
    }
}


/***/ }),

/***/ "./src/services/upper-bar-manager/ui/more-icon/more-icon.component.tsx":
/*!*****************************************************************************!*\
  !*** ./src/services/upper-bar-manager/ui/more-icon/more-icon.component.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoreIcon": () => (/* binding */ MoreIcon)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _playkit_js_common_dist_hoc_a11y_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @playkit-js/common/dist/hoc/a11y-wrapper */ "./node_modules/@playkit-js/common/dist/hoc/a11y-wrapper/index.js");
/* harmony import */ var _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @playkit-js/kaltura-player-js */ "@playkit-js/kaltura-player-js");
/* harmony import */ var _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _more_icon_component_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./more-icon.component.scss */ "./src/services/upper-bar-manager/ui/more-icon/more-icon.component.scss");
/* harmony import */ var _dropdown_bar_dropdown_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dropdown-bar/dropdown-bar.component */ "./src/services/upper-bar-manager/ui/dropdown-bar/dropdown-bar.component.tsx");
/* harmony import */ var _ui_managers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ui-managers */ "./src/ui-managers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






const { Icon, Tooltip } = _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_2__.ui.Components;
const { withEventManager } = _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_2__.ui.Event;
const { withText, Text } = _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_2__.ui.preacti18n;
const ICON_PATH = 
// eslint-disable-next-line max-len
'M16 22a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0-11a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm0-11a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z';
let MoreIcon = class MoreIcon extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor() {
        super();
        this.moreButtonRef = (0,preact__WEBPACK_IMPORTED_MODULE_0__.createRef)();
    }
    componentDidMount() {
        this.props.eventManager.listen(document, 'click', (e) => this.handleClickOutside(e));
    }
    handleClickOutside(event) {
        if (this.moreButtonRef && !this.moreButtonRef.current.contains(event.target)) {
            this.setState({ toggle: false });
        }
    }
    render() {
        return ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { style: { position: 'relative' } },
            (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(Tooltip, { label: this.props.moreIconTxt },
                (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_playkit_js_common_dist_hoc_a11y_wrapper__WEBPACK_IMPORTED_MODULE_1__.A11yWrapper, { onClick: this.props.onClick },
                    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", { ref: this.moreButtonRef, className: `${_playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_2__.ui.style.upperBarIcon} ${_more_icon_component_scss__WEBPACK_IMPORTED_MODULE_3__.moreIcon}`, tabIndex: 0, "aria-label": this.props.moreIconTxt },
                        (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(Icon, { id: `${_ui_managers__WEBPACK_IMPORTED_MODULE_5__.pluginName}-upper-bar-manager`, path: ICON_PATH, viewBox: '0 0 32 32' })))),
            this.props.showDropdown && ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", null,
                (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_dropdown_bar_dropdown_bar_component__WEBPACK_IMPORTED_MODULE_4__.DropdownBar, { onDropdownClick: this.props.onClick, controls: this.props.icons })))));
    }
};
MoreIcon = __decorate([
    withEventManager,
    withText({ moreIconTxt: (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(Text, { id: "controls.moreIcon" }, "More") })
], MoreIcon);



/***/ }),

/***/ "./src/services/upper-bar-manager/upper-bar-manager.tsx":
/*!**************************************************************!*\
  !*** ./src/services/upper-bar-manager/upper-bar-manager.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpperBarManager": () => (/* binding */ UpperBarManager)
/* harmony export */ });
/* harmony import */ var _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @playkit-js/kaltura-player-js */ "@playkit-js/kaltura-player-js");
/* harmony import */ var _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_icon_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/icon-model */ "./src/services/upper-bar-manager/models/icon-model.ts");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_displayed_bar_displayed_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/displayed-bar/displayed-bar.component */ "./src/services/upper-bar-manager/ui/displayed-bar/displayed-bar.component.tsx");




const { ReservedPresetAreas, ReservedPresetNames } = _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_0__.ui;
const UPPER_BAR_PRESETS = Object.values(ReservedPresetNames).filter((preset) => preset !== ReservedPresetNames.Idle && preset !== ReservedPresetNames.Error);
class UpperBarManager {
    /**
     * @ignore
     */
    constructor(player, logger, config) {
        this.player = player;
        this.componentsRegistry = new Map();
        this.logger = logger;
        this.displayedBarComponentRefs = {};
        UPPER_BAR_PRESETS.forEach((preset) => (this.displayedBarComponentRefs[preset] = (0,preact__WEBPACK_IMPORTED_MODULE_2__.createRef)()));
        this.injectDisplayedBarComponentWrapper(config.pluginsIconsOrder);
    }
    add(icon) {
        if (UpperBarManager.validateItem(icon)) {
            const newIcon = new _models_icon_model__WEBPACK_IMPORTED_MODULE_1__.IconModel(icon);
            this.componentsRegistry.set(newIcon.id, newIcon);
            newIcon.presets.forEach((preset) => this.displayedBarComponentRefs[preset].current?.update());
            this.logger.debug(`Icon Id: '${newIcon.id}' '${newIcon.label}' added`);
            return newIcon.id;
        }
        this.logger.warn('Invalid Icon parameters', icon);
        return undefined;
    }
    remove(itemId) {
        const icon = this.componentsRegistry.get(itemId);
        if (icon) {
            this.componentsRegistry.delete(itemId);
            icon.presets.forEach((preset) => this.displayedBarComponentRefs[preset].current?.update());
            this.logger.debug(`Icon Id: '${icon.id}' Label: '${icon.label}' removed`);
        }
        else {
            this.logger.warn(`${itemId} is not registered`);
        }
    }
    isActive(itemId) {
        return !!this.componentsRegistry.get(itemId);
    }
    update(iconId) {
        const icon = this.componentsRegistry.get(iconId);
        if (icon) {
            icon.update();
        }
        else {
            this.logger.warn(`${iconId} is not registered`);
        }
    }
    getControls(iconsOrder) {
        const icons = Array.from(this.componentsRegistry.values());
        return icons.sort((a, b) => (iconsOrder[a.label] > iconsOrder[b.label] ? 1 : -1));
    }
    injectDisplayedBarComponentWrapper(iconsOrder) {
        for (const preset of UPPER_BAR_PRESETS) {
            this.player.ui.addComponent({
                label: 'Right-Upper-Bar-Wrapper',
                presets: [preset],
                area: ReservedPresetAreas.TopBarRightControls,
                get: () => {
                    return ((0,preact__WEBPACK_IMPORTED_MODULE_2__.h)(_ui_displayed_bar_displayed_bar_component__WEBPACK_IMPORTED_MODULE_3__.DisplayedBar, { ref: this.displayedBarComponentRefs[preset], getControls: () => this.getControls(iconsOrder).filter((icon) => icon.presets.includes(preset)) }));
                }
            });
        }
    }
    static validateItem(icon) {
        return typeof icon.onClick === 'function' && typeof icon.component === 'function';
    }
}


/***/ }),

/***/ "./src/ui-managers.ts":
/*!****************************!*\
  !*** ./src/ui-managers.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UIManagers": () => (/* binding */ UIManagers),
/* harmony export */   "pluginName": () => (/* binding */ pluginName)
/* harmony export */ });
/* harmony import */ var _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @playkit-js/kaltura-player-js */ "@playkit-js/kaltura-player-js");
/* harmony import */ var _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_side_panels_manager_side_panels_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/side-panels-manager/side-panels-manager */ "./src/services/side-panels-manager/side-panels-manager.ts");
/* harmony import */ var _services_upper_bar_manager_upper_bar_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/upper-bar-manager/upper-bar-manager */ "./src/services/upper-bar-manager/upper-bar-manager.tsx");
/* harmony import */ var _services_floating_manager_floating_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/floating-manager/floating-manager */ "./src/services/floating-manager/floating-manager.tsx");
/* harmony import */ var _services_preset_manager_preset_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/preset-manager/preset-manager */ "./src/services/preset-manager/preset-manager.tsx");





const pluginName = 'uiManagers';
/**
 * manages the registration of UI services
 * @internal
 */
class UIManagers extends _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_0__.BasePlugin {
    constructor(name, player, config) {
        super(name, player, config);
        player.registerService('sidePanelsManager', new _services_side_panels_manager_side_panels_manager__WEBPACK_IMPORTED_MODULE_1__.SidePanelsManager(player, this.logger));
        player.registerService('upperBarManager', new _services_upper_bar_manager_upper_bar_manager__WEBPACK_IMPORTED_MODULE_2__.UpperBarManager(player, this.logger, this.config.upperBarManager));
        const presetManager = new _services_preset_manager_preset_manager__WEBPACK_IMPORTED_MODULE_4__.PresetManager({
            kalturaPlayer: player,
            eventManager: this.eventManager
        });
        player.registerService('floatingManager', new _services_floating_manager_floating_manager__WEBPACK_IMPORTED_MODULE_3__.FloatingManager({ presetManager, kalturaPlayer: player, eventManager: this.eventManager }));
    }
    static isValid() {
        return true;
    }
}
UIManagers.defaultConfig = {
    upperBarManager: {
        pluginsIconsOrder: {
            Navigation: 10,
            'Q&A': 20,
            Transcript: 30,
            Download: 40,
            Playlist: 50,
            Related: 60,
            Share: 70,
            Info: 80,
            Moderation: 90
        }
    }
};


/***/ }),

/***/ "@playkit-js/kaltura-player-js":
/*!********************************!*\
  !*** external "KalturaPlayer" ***!
  \********************************/
/***/ ((module) => {

module.exports = KalturaPlayer;

/***/ }),

/***/ "preact":
/*!******************************************!*\
  !*** external "KalturaPlayer.ui.preact" ***!
  \******************************************/
/***/ ((module) => {

module.exports = KalturaPlayer.ui.preact;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @playkit-js/kaltura-player-js */ "@playkit-js/kaltura-player-js");
/* harmony import */ var _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_managers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-managers */ "./src/ui-managers.ts");


(0,_playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)(_ui_managers__WEBPACK_IMPORTED_MODULE_1__.pluginName, _ui_managers__WEBPACK_IMPORTED_MODULE_1__.UIManagers);

})();

/******/ })()
;
//# sourceMappingURL=playkit-ui-managers.js.map