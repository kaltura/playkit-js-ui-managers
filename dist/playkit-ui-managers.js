/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@playkit-js/common/dist/hoc/a11y-wrapper/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/hoc/a11y-wrapper/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

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
    if (e instanceof KeyboardEvent) {
        return true;
    }
    // Space/Enter keyEvent is swallowed by NVDA (https://github.com/nvaccess/nvda/issues/7898)
    // check additional PointerEvent props to determine if it was triggered by keyboard
    if (e instanceof PointerEvent) {
        // Chrome has offsetX/offsetY as 0, FF doesn't have pointerType
        return [e.offsetX, e.offsetY].every(function (offset) { return offset === 0; }) || !e.pointerType;
    }
    return false;
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
        }
    };
    if ((children === null || children === void 0 ? void 0 : children.type) === 'button') {
        props.type = type || 'button';
    }
    if (role !== null) {
        props.role = role;
    }
    return (0, preact_1.cloneElement)(children, props);
};
exports.A11yWrapper = A11yWrapper;
exports.A11yWrapper.defaultProps = {
    role: 'button'
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/add.js":
/*!****************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/add.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Add = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var Add = function () { return ((0, preact_1.h)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    (0, preact_1.h)("path", { d: "M21.8083 4C22.4665 4 23 4.55964 23 5.25V18.75C23 19.4404 22.4665 20 21.8083 20H2.19167C1.53353 20 1 19.4404 1 18.75V5.25C1 4.55964 1.53353 4 2.19167 4H21.8083ZM15 6H3V18H15V6ZM12.999 8.967L13 9L12.998 8.94L12.999 8.967L13 9V15C13 15.5523 12.5523 16 12 16C11.4872 16 11.0645 15.614 11.0067 15.1166L11 15V11.414L6.70711 15.7071C6.34662 16.0676 5.77939 16.0953 5.3871 15.7903L5.29289 15.7071C4.93241 15.3466 4.90468 14.7794 5.2097 14.3871L5.29289 14.2929L9.584 10H6C5.48716 10 5.06449 9.61396 5.00673 9.11662L5 9C5 8.44772 5.44772 8 6 8L12.0193 8.00018C12.0427 8.00063 12.066 8.00189 12.0893 8.00397C12.1097 8.00575 12.1294 8.0081 12.149 8.01102C12.1659 8.01363 12.1834 8.0167 12.2007 8.02024C12.2227 8.02464 12.2444 8.02983 12.2658 8.03572C12.2815 8.0401 12.2969 8.04473 12.3121 8.04974C12.3318 8.05612 12.3516 8.06332 12.3711 8.0711L12.4232 8.09367C12.4439 8.10338 12.4643 8.11379 12.4843 8.12488C12.4964 8.1315 12.5086 8.13861 12.5207 8.146C12.5463 8.16172 12.5711 8.17849 12.5952 8.19631L12.6525 8.24221L12.6167 8.21279C12.6802 8.26255 12.7374 8.31982 12.7872 8.38325C12.7927 8.39016 12.7982 8.3974 12.8037 8.40469C12.8215 8.42887 12.8383 8.45372 12.8539 8.47934L12.8753 8.51594C12.8862 8.53571 12.8966 8.55611 12.9063 8.5769L12.9288 8.62866C12.9367 8.64842 12.9439 8.6682 12.9505 8.68826C12.9553 8.70315 12.9599 8.71854 12.9642 8.73401C12.9702 8.75556 12.9754 8.77725 12.9798 8.79921C12.9833 8.81662 12.9864 8.83405 12.989 8.85153L12.9972 8.92482L12.998 8.94L12.999 8.967Z", fill: "white" }))); };
exports.Add = Add;
//# sourceMappingURL=add.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/answerOnAir.js":
/*!************************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/answerOnAir.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnswerOnAir = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var AnswerOnAir = function () { return ((0, preact_1.h)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none" },
    (0, preact_1.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M5.99999 10C7.72605 10 11.1196 10.84 11.3237 12.5079L11.3333 12.6667V13.3333C11.3333 13.6667 11.0854 13.9449 10.7648 13.9927L10.6667 14H1.33332C0.99999 14 0.721753 13.7521 0.673919 13.4315L0.666656 13.3333V12.6667C0.666656 10.8933 4.21999 10 5.99999 10ZM13.9533 1.99333C15.7933 4.42667 15.7867 7.64667 13.9533 10.0067C13.6967 10.3428 13.2103 10.3932 12.8794 10.1476L12.7933 10.0733L12.7733 10.0533C12.5133 9.79333 12.4667 9.38 12.68 9.08C14.0067 7.18667 14.0133 4.74 12.7 2.91333C12.48 2.60667 12.52 2.19333 12.7867 1.92667C13.1133 1.6 13.6733 1.62667 13.9533 1.99333ZM5.99999 3.33333C7.47275 3.33333 8.66666 4.52724 8.66666 6C8.66666 7.47276 7.47275 8.66667 5.99999 8.66667C4.52723 8.66667 3.33332 7.47276 3.33332 6C3.33332 4.52724 4.52723 3.33333 5.99999 3.33333ZM11.7867 4.46C12.3067 5.46667 12.3067 6.6 11.8 7.56667C11.5635 8.02089 10.9728 8.12086 10.5808 7.8178L10.5 7.74667L10.48 7.72667C10.24 7.48667 10.1867 7.13333 10.3133 6.82C10.5267 6.29333 10.5267 5.70667 10.3133 5.18C10.2025 4.90583 10.2295 4.59594 10.3898 4.36643L10.4667 4.27333L10.4733 4.26667C10.8667 3.87333 11.5333 3.96667 11.7867 4.46Z", fill: "white" }))); };
exports.AnswerOnAir = AnswerOnAir;
//# sourceMappingURL=answerOnAir.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/arrowClose.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/arrowClose.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArrowClose = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var ArrowClose = function () { return ((0, preact_1.h)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none" },
    (0, preact_1.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M7.5 21C5.01472 21 3 18.9853 3 16.5L3 7.5C3 5.01472 5.01472 3 7.5 3L16.5 3C18.9853 3 21 5.01472 21 7.5V16.5C21 18.9853 18.9853 21 16.5 21H7.5ZM8.625 17.625L14.25 17.625L14.3812 17.6174C14.9407 17.5524 15.375 17.0769 15.375 16.5C15.375 15.8787 14.8713 15.375 14.25 15.375L10.218 15.375L17.2955 8.2955L17.3891 8.18951C17.7322 7.74819 17.701 7.11005 17.2955 6.70451C16.8562 6.26517 16.1438 6.26517 15.7045 6.70451L8.625 13.7843L8.625 9.75L8.61743 9.6188C8.55245 9.0593 8.07694 8.625 7.5 8.625C6.87868 8.625 6.375 9.12868 6.375 9.75L6.375 15.375L6.38117 15.5429C6.46706 16.7071 7.43884 17.625 8.625 17.625Z", fill: "white" }))); };
exports.ArrowClose = ArrowClose;
//# sourceMappingURL=arrowClose.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/arrowOpen.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/arrowOpen.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArrowOpen = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var ArrowOpen = function () { return ((0, preact_1.h)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    (0, preact_1.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M16.5 3C18.9853 3 21 5.01472 21 7.5V16.5C21 18.9853 18.9853 21 16.5 21H7.5C5.01472 21 3 18.9853 3 16.5V7.5C3 5.01472 5.01472 3 7.5 3H16.5ZM15.375 6.375H9.75L9.6188 6.38257C9.0593 6.44755 8.625 6.92306 8.625 7.5C8.625 8.12132 9.12868 8.625 9.75 8.625H13.782L6.7045 15.7045L6.61092 15.8105C6.26776 16.2518 6.29896 16.89 6.7045 17.2955C7.14384 17.7348 7.85616 17.7348 8.2955 17.2955L15.375 10.2158V14.25L15.3826 14.3812C15.4476 14.9407 15.9231 15.375 16.5 15.375C17.1213 15.375 17.625 14.8713 17.625 14.25V8.625L17.6188 8.45708C17.5329 7.29286 16.5612 6.375 15.375 6.375Z", fill: "white" }))); };
exports.ArrowOpen = ArrowOpen;
//# sourceMappingURL=arrowOpen.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/attach.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/attach.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Attach = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var Attach = function () { return ((0, preact_1.h)("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    (0, preact_1.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M12.657 9.34254L21.657 9.34254C22.2093 9.34254 22.657 9.79026 22.657 10.3425L22.657 19.3425C22.657 19.8948 22.2093 20.3425 21.657 20.3425C21.1047 20.3425 20.657 19.8948 20.657 19.3425L20.657 12.7568L11.0504 22.3634C10.6599 22.7539 10.0267 22.7539 9.63618 22.3634C9.24566 21.9728 9.24566 21.3397 9.63618 20.9491L19.2428 11.3425L12.657 11.3425C12.1047 11.3425 11.657 10.8948 11.657 10.3425C11.657 9.79026 12.1047 9.34254 12.657 9.34254Z", fill: "white" }))); };
exports.Attach = Attach;
//# sourceMappingURL=attach.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/audio.js":
/*!******************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/audio.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Audio = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var Audio = function () { return ((0, preact_1.h)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    (0, preact_1.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M10.5 4.5C10.5 3.67157 11.1716 3 12 3C12.8284 3 13.5 3.67157 13.5 4.5V19.5C13.5 20.3284 12.8284 21 12 21C11.1716 21 10.5 20.3284 10.5 19.5V4.5ZM4.5 9C4.5 8.17157 5.17157 7.5 6 7.5C6.82843 7.5 7.5 8.17157 7.5 9V15C7.5 15.8284 6.82843 16.5 6 16.5C5.17157 16.5 4.5 15.8284 4.5 15V9ZM18 7.5C17.1716 7.5 16.5 8.17157 16.5 9V15C16.5 15.8284 17.1716 16.5 18 16.5C18.8284 16.5 19.5 15.8284 19.5 15V9C19.5 8.17157 18.8284 7.5 18 7.5Z", fill: "white" }))); };
exports.Audio = Audio;
//# sourceMappingURL=audio.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/autoScroll.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/autoScroll.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AutoScroll = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var AutoScroll = function () { return ((0, preact_1.h)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true" },
    (0, preact_1.h)("path", { d: "M6.29289 15.2929C6.65338 14.9324 7.22061 14.9047 7.6129 15.2097L7.70711 15.2929L12 19.585L16.2929 15.2929C16.6534 14.9324 17.2206 14.9047 17.6129 15.2097L17.7071 15.2929C18.0676 15.6534 18.0953 16.2206 17.7903 16.6129L17.7071 16.7071L12.7071 21.7071C12.3466 22.0676 11.7794 22.0953 11.3871 21.7903L11.2929 21.7071L6.29289 16.7071C5.90237 16.3166 5.90237 15.6834 6.29289 15.2929Z", fill: "white" }),
    (0, preact_1.h)("path", { d: "M17.7071 8.70711C17.3466 9.06759 16.7794 9.09532 16.3871 8.7903L16.2929 8.70711L12 4.415L7.70711 8.70711C7.34662 9.06759 6.77939 9.09532 6.3871 8.79029L6.29289 8.70711C5.93241 8.34662 5.90468 7.77939 6.2097 7.3871L6.29289 7.29289L11.2929 2.29289C11.6534 1.93241 12.2206 1.90468 12.6129 2.2097L12.7071 2.29289L17.7071 7.29289C18.0976 7.68342 18.0976 8.31658 17.7071 8.70711Z", fill: "white" }),
    (0, preact_1.h)("rect", { x: "10", y: "10", width: "4", height: "4", rx: "2", fill: "white" }))); };
exports.AutoScroll = AutoScroll;
//# sourceMappingURL=autoScroll.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/chapter.js":
/*!********************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/chapter.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Chapter = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var Chapter = function () { return ((0, preact_1.h)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none" },
    (0, preact_1.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M4 4C4 3.44772 4.44772 3 5 3H11C11.5523 3 12 3.44772 12 4V13C12 13.824 11.0592 14.2944 10.4 13.8L8.6 12.45C8.24444 12.1833 7.75556 12.1833 7.4 12.45L5.6 13.8C4.94076 14.2944 4 13.824 4 13V4Z", fill: "white" }))); };
exports.Chapter = Chapter;
//# sourceMappingURL=chapter.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/check.js":
/*!******************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/check.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Check = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var Check = function () { return ((0, preact_1.h)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    (0, preact_1.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M12.6402 4.2318C13.0645 4.58537 13.1218 5.21593 12.7682 5.64021L7.76822 11.6402C7.58835 11.856 7.32599 11.9863 7.04531 11.999C6.76464 12.0117 6.49156 11.9058 6.29289 11.7071L4.29289 9.70713C3.90237 9.31661 3.90237 8.68344 4.29289 8.29292C4.68342 7.90239 5.31658 7.90239 5.70711 8.29292L6.9328 9.51861L11.2318 4.35984C11.5853 3.93556 12.2159 3.87824 12.6402 4.2318Z", fill: "white" }))); };
exports.Check = Check;
//# sourceMappingURL=check.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/chevronRight.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/chevronRight.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChevronRight = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var ChevronRight = function () { return ((0, preact_1.h)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    (0, preact_1.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M6.29289 11.7071C5.90237 11.3166 5.90237 10.6834 6.29289 10.2929L8.58579 8L6.29289 5.70711C5.90237 5.31658 5.90237 4.68342 6.29289 4.29289C6.68342 3.90237 7.31658 3.90237 7.70711 4.29289L10.7071 7.29289C11.0976 7.68342 11.0976 8.31658 10.7071 8.70711L7.70711 11.7071C7.31658 12.0976 6.68342 12.0976 6.29289 11.7071Z", fill: "white" }))); };
exports.ChevronRight = ChevronRight;
//# sourceMappingURL=chevronRight.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/close.js":
/*!******************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/close.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Close = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var Close = function () { return ((0, preact_1.h)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    (0, preact_1.h)("path", { d: "M11.6592 10.245L6.70483 5.29061C6.31701 4.9028 5.68581 4.90476 5.29528 5.29528C4.90204 5.68853 4.90267 6.31688 5.29061 6.70483L10.245 11.6592L5.29061 16.6137C4.9028 17.0015 4.90476 17.6327 5.29528 18.0232C5.68853 18.4165 6.31688 18.4158 6.70483 18.0279L11.6592 13.0735L16.6137 18.0279C17.0015 18.4157 17.6327 18.4137 18.0232 18.0232C18.4165 17.63 18.4158 17.0016 18.0279 16.6137L13.0735 11.6592L18.0279 6.70483C18.4157 6.31701 18.4137 5.68581 18.0232 5.29528C17.63 4.90204 17.0016 4.90267 16.6137 5.29061L11.6592 10.245Z", fill: "white" }))); };
exports.Close = Close;
//# sourceMappingURL=close.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/closedCaptions.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/closedCaptions.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClosedCaptions = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var ClosedCaptions = function () { return ((0, preact_1.h)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    (0, preact_1.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M3.53616 4C2.68845 4 2 4.68038 2 5.51967V18.4803C2 19.3125 2.68776 20 3.53616 20H20.4638C21.3116 20 22 19.3196 22 18.4803V5.51967C22 4.6875 21.3122 4 20.4638 4H3.53616ZM11.4852 13.4164C11.4852 13.6096 11.4297 13.8161 11.3186 14.0358C11.2074 14.2555 11.0381 14.4648 10.8104 14.6637C10.5827 14.8626 10.2958 15.0227 9.94978 15.1439C9.60371 15.2652 9.21394 15.3258 8.78045 15.3258C7.85882 15.3258 7.13938 15.0464 6.6221 14.4876C6.10483 13.9288 5.84619 13.1796 5.84619 12.2401C5.84619 11.6036 5.96458 11.041 6.20136 10.5523C6.43814 10.0636 6.78056 9.68567 7.22863 9.41858C7.67669 9.15149 8.21217 9.01794 8.83509 9.01794C9.22123 9.01794 9.57548 9.07667 9.89787 9.19411C10.2203 9.31155 10.4935 9.46309 10.7175 9.64873C10.9415 9.83436 11.1127 10.0323 11.2311 10.2426C11.3495 10.4528 11.4087 10.6489 11.4087 10.8307C11.4087 11.0164 11.3422 11.1736 11.2093 11.3024C11.0763 11.4312 10.9151 11.4956 10.7257 11.4956C10.6018 11.4956 10.4989 11.4625 10.417 11.3962C10.335 11.3299 10.243 11.2228 10.141 11.0751C9.95889 10.7872 9.76855 10.5712 9.57002 10.4273C9.37149 10.2833 9.11923 10.2113 8.81323 10.2113C8.37246 10.2113 8.01729 10.3903 7.74772 10.7483C7.47815 11.1064 7.34337 11.596 7.34337 12.2173C7.34337 12.509 7.37798 12.7771 7.44719 13.0214C7.51641 13.2658 7.61658 13.4742 7.74772 13.6465C7.87886 13.8189 8.03732 13.9496 8.2231 14.0386C8.40889 14.1277 8.61288 14.1722 8.83509 14.1722C9.1338 14.1722 9.3897 14.1002 9.60281 13.9562C9.81591 13.8123 10.0044 13.5925 10.1683 13.297C10.2594 13.1228 10.3578 12.9864 10.4634 12.8879C10.5691 12.7894 10.6984 12.7401 10.8514 12.7401C11.0335 12.7401 11.1847 12.8121 11.3049 12.9561C11.4251 13.1 11.4852 13.2535 11.4852 13.4164ZM18.1351 13.4164C18.1351 13.6096 18.0796 13.8161 17.9684 14.0358C17.8573 14.2555 17.688 14.4648 17.4603 14.6637C17.2326 14.8626 16.9457 15.0227 16.5997 15.1439C16.2536 15.2652 15.8638 15.3258 15.4303 15.3258C14.5087 15.3258 13.7893 15.0464 13.272 14.4876C12.7547 13.9288 12.4961 13.1796 12.4961 12.2401C12.4961 11.6036 12.6145 11.041 12.8513 10.5523C13.088 10.0636 13.4305 9.68567 13.8785 9.41858C14.3266 9.15149 14.8621 9.01794 15.485 9.01794C15.8711 9.01794 16.2254 9.07667 16.5478 9.19411C16.8702 9.31155 17.1434 9.46309 17.3674 9.64873C17.5914 9.83436 17.7626 10.0323 17.881 10.2426C17.9994 10.4528 18.0586 10.6489 18.0586 10.8307C18.0586 11.0164 17.9921 11.1736 17.8592 11.3024C17.7262 11.4312 17.565 11.4956 17.3756 11.4956C17.2517 11.4956 17.1488 11.4625 17.0669 11.3962C16.9849 11.3299 16.8929 11.2228 16.7909 11.0751C16.6088 10.7872 16.4184 10.5712 16.2199 10.4273C16.0214 10.2833 15.7691 10.2113 15.4631 10.2113C15.0223 10.2113 14.6672 10.3903 14.3976 10.7483C14.128 11.1064 13.9933 11.596 13.9933 12.2173C13.9933 12.509 14.0279 12.7771 14.0971 13.0214C14.1663 13.2658 14.2665 13.4742 14.3976 13.6465C14.5288 13.8189 14.6872 13.9496 14.873 14.0386C15.0588 14.1277 15.2628 14.1722 15.485 14.1722C15.7837 14.1722 16.0396 14.1002 16.2527 13.9562C16.4658 13.8123 16.6543 13.5925 16.8182 13.297C16.9093 13.1228 17.0077 12.9864 17.1133 12.8879C17.2189 12.7894 17.3483 12.7401 17.5013 12.7401C17.6834 12.7401 17.8346 12.8121 17.9548 12.9561C18.075 13.1 18.1351 13.2535 18.1351 13.4164Z", fill: "white" }))); };
exports.ClosedCaptions = ClosedCaptions;
//# sourceMappingURL=closedCaptions.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/detach.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/detach.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Detach = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var Detach = function () { return ((0, preact_1.h)("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    (0, preact_1.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8 6C6.89543 6 6 6.89543 6 8V14C6 15.1046 6.89543 16 8 16L8 23C8 24.6569 9.34315 26 11 26H23C24.6569 26 26 24.6569 26 23V11C26 9.34315 24.6569 8 23 8H16C16 6.89543 15.1046 6 14 6H8ZM10 16H14C15.1046 16 16 15.1046 16 14V10H23C23.5523 10 24 10.4477 24 11V23C24 23.5523 23.5523 24 23 24H11C10.4477 24 10 23.5523 10 23V16Z", fill: "white" }))); };
exports.Detach = Detach;
//# sourceMappingURL=detach.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/document.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/document.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Document = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var Document = function () { return ((0, preact_1.h)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    (0, preact_1.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M6 2H9.82843H14.1716H18C19.1046 2 20 2.89543 20 4V7.82843V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V7.82843V4C4 2.89543 4.89543 2 6 2ZM13 16C13 15.4477 12.5523 15 12 15H8C7.44772 15 7 15.4477 7 16C7 16.5523 7.44772 17 8 17H12C12.5523 17 13 16.5523 13 16ZM17 12C17 11.4477 16.5523 11 16 11H8C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16C16.5523 13 17 12.5523 17 12ZM17 8C17 7.44772 16.5523 7 16 7H8C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9H16C16.5523 9 17 8.55228 17 8Z", fill: "white" }))); };
exports.Document = Document;
//# sourceMappingURL=document.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/download.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/download.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Download = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var Download = function () { return ((0, preact_1.h)("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    (0, preact_1.h)("path", { d: "M17.5 6C17.5 5.44772 17.0523 5 16.5 5L16.3834 5.00673C15.886 5.06449 15.5 5.48716 15.5 6L15.4997 17.693L9.71029 12.2702C9.30721 11.8926 8.67439 11.9133 8.29683 12.3164C7.91928 12.7195 7.93998 13.3523 8.34306 13.7298L15.8164 20.7298C15.8212 20.7343 15.826 20.7387 15.8308 20.7431L15.8164 20.7298L15.9035 20.8027C15.9034 20.8026 15.9037 20.8028 15.9035 20.8027C15.9135 20.8101 15.9231 20.817 15.9333 20.824C15.956 20.8397 15.9793 20.8544 16.0038 20.8684C16.0148 20.8747 16.0259 20.8808 16.0366 20.8864C16.0596 20.8984 16.0832 20.9096 16.1077 20.9201C16.1223 20.9263 16.1371 20.9322 16.1515 20.9376C16.1769 20.947 16.2028 20.9555 16.2299 20.963C16.2399 20.9658 16.25 20.9684 16.2595 20.9709C16.3365 20.9899 16.4171 21 16.5 21C16.5804 21 16.6585 20.9905 16.7336 20.9725C16.7521 20.968 16.7706 20.963 16.7889 20.9576C16.8097 20.9514 16.8303 20.9444 16.8507 20.9367C16.8632 20.932 16.8756 20.9271 16.8878 20.922C16.9121 20.9118 16.936 20.9006 16.9596 20.8883C16.9735 20.8812 16.9872 20.8736 17.0007 20.8658C17.0223 20.8533 17.0434 20.84 17.0636 20.8262C17.0764 20.8174 17.0891 20.8083 17.1021 20.7985C17.1224 20.7831 17.1422 20.767 17.161 20.7504C17.1685 20.7437 17.176 20.737 17.1834 20.7301L24.6619 13.7301C25.0651 13.3527 25.086 12.7198 24.7086 12.3166L24.6172 12.2304C24.2352 11.9126 23.6674 11.9215 23.2952 12.2699L17.4997 17.694L17.5 6Z", fill: "white" }),
    (0, preact_1.h)("path", { d: "M27 26C27 26.5523 26.5523 27 26 27H7C6.44772 27 6 26.5523 6 26C6 25.4477 6.44772 25 7 25H26C26.5523 25 27 25.4477 27 26Z", fill: "white" }))); };
exports.Download = Download;
//# sourceMappingURL=download.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/excel.js":
/*!******************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/excel.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Excel = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var Excel = function () { return ((0, preact_1.h)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    (0, preact_1.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M22 6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6ZM8 16C8 15.4477 7.55228 15 7 15H5C4.44772 15 4 15.4477 4 16C4 16.5523 4.44772 17 5 17H7C7.55228 17 8 16.5523 8 16ZM14 16C14 15.4477 13.5523 15 13 15H11C10.4477 15 10 15.4477 10 16C10 16.5523 10.4477 17 11 17H13C13.5523 17 14 16.5523 14 16ZM8 12C8 11.4477 7.55228 11 7 11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H7C7.55228 13 8 12.5523 8 12ZM14 12C14 11.4477 13.5523 11 13 11H11C10.4477 11 10 11.4477 10 12C10 12.5523 10.4477 13 11 13H13C13.5523 13 14 12.5523 14 12ZM8 8C8 7.44772 7.55228 7 7 7H5C4.44772 7 4 7.44772 4 8C4 8.55228 4.44772 9 5 9H7C7.55228 9 8 8.55228 8 8ZM14 8C14 7.44772 13.5523 7 13 7H11C10.4477 7 10 7.44772 10 8C10 8.55228 10.4477 9 11 9H13C13.5523 9 14 8.55228 14 8ZM19 17H17C16.4477 17 16 16.5523 16 16C16 15.4477 16.4477 15 17 15H19C19.5523 15 20 15.4477 20 16C20 16.5523 19.5523 17 19 17ZM17 13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H17C16.4477 11 16 11.4477 16 12C16 12.5523 16.4477 13 17 13ZM19 9H17C16.4477 9 16 8.55228 16 8C16 7.44772 16.4477 7 17 7H19C19.5523 7 20 7.44772 20 8C20 8.55228 19.5523 9 19 9Z", fill: "white" }))); };
exports.Excel = Excel;
//# sourceMappingURL=excel.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/expand.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/expand.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Expand = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var Expand = function () { return ((0, preact_1.h)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    (0, preact_1.h)("path", { d: "M20.997 3.924L20.998 3.945L20.999 3.98L21 4V10C21 10.5523 20.5523 11 20 11C19.4872 11 19.0645 10.614 19.0067 10.1166L19 10V6.416L14.7071 10.7071C14.3466 11.0676 13.7794 11.0953 13.3871 10.7903L13.2929 10.7071C12.9324 10.3466 12.9047 9.77939 13.2097 9.3871L13.2929 9.29289L17.586 5H14C13.4872 5 13.0645 4.61396 13.0067 4.11662L13 4C13 3.48716 13.386 3.06449 13.8834 3.00673L14 3L20.0332 3.00054C20.0503 3.00109 20.0683 3.00216 20.0862 3.0037C20.1079 3.00553 20.1285 3.00797 20.149 3.01102C20.166 3.01363 20.1834 3.0167 20.2007 3.02024C20.2227 3.02464 20.2444 3.02983 20.2658 3.03572C20.2815 3.0401 20.2969 3.04473 20.3121 3.04974C20.3318 3.05612 20.3516 3.06332 20.3711 3.0711L20.4232 3.09367C20.4439 3.10338 20.4643 3.11379 20.4843 3.12488C20.4964 3.1315 20.5086 3.13861 20.5207 3.146C20.5463 3.16172 20.5711 3.17849 20.5952 3.19631L20.6525 3.24221L20.6168 3.21279C20.6802 3.26255 20.7374 3.31982 20.7872 3.38325C20.7927 3.39016 20.7982 3.3974 20.8037 3.40469C20.8215 3.42887 20.8383 3.45373 20.8539 3.47934L20.8753 3.51594C20.8862 3.53571 20.8966 3.55611 20.9063 3.5769L20.9288 3.62866C20.9367 3.64842 20.9439 3.6682 20.9505 3.68826C20.9553 3.70315 20.9599 3.71854 20.9642 3.73401C20.9702 3.75556 20.9754 3.77725 20.9798 3.79921C20.9833 3.81662 20.9864 3.83405 20.989 3.85153L20.996 3.91075L20.996 3.919L20.997 3.921V3.924ZM3.002 20.059V20.071L3.00175 20.0593C3.00122 20.0503 3.00081 20.0413 3.00052 20.0323L3 14C3 13.4477 3.44772 13 4 13C4.51284 13 4.93551 13.386 4.99327 13.8834L5 14V17.586L9.29289 13.2929C9.65338 12.9324 10.2206 12.9047 10.6129 13.2097L10.7071 13.2929C11.0676 13.6534 11.0953 14.2206 10.7903 14.6129L10.7071 14.7071L6.416 19H10C10.5128 19 10.9355 19.386 10.9933 19.8834L11 20C11 20.5128 10.614 20.9355 10.1166 20.9933L10 21H4C3.99354 21 3.98709 20.9999 3.98066 20.9998C3.95732 20.9994 3.93401 20.9981 3.91075 20.996C3.89031 20.9943 3.87058 20.9919 3.85104 20.989C3.83405 20.9864 3.81662 20.9833 3.79927 20.9798C3.77725 20.9754 3.75556 20.9702 3.73416 20.9643C3.71854 20.9599 3.70315 20.9553 3.68786 20.9503C3.6682 20.9439 3.64842 20.9367 3.62894 20.9289L3.57678 20.9063C3.55611 20.8966 3.53571 20.8862 3.51572 20.8751C3.50361 20.8685 3.49139 20.8614 3.47929 20.854C3.45373 20.8383 3.42887 20.8215 3.40484 20.8037L3.34745 20.7578L3.38325 20.7872C3.31982 20.7374 3.26255 20.6802 3.21279 20.6168C3.20728 20.6098 3.20175 20.6026 3.19633 20.5953C3.17849 20.5711 3.16172 20.5463 3.14607 20.5207L3.12467 20.4841C3.11379 20.4643 3.10338 20.4439 3.09365 20.4231L3.07123 20.3713C3.06332 20.3516 3.05612 20.3318 3.04955 20.3117C3.04473 20.2969 3.0401 20.2815 3.03585 20.266C3.02983 20.2444 3.02464 20.2227 3.02017 20.2008C3.0167 20.1834 3.01363 20.1659 3.01102 20.1485L3.0037 20.0862L3.002 20.059Z", fill: "white" }))); };
exports.Expand = Expand;
//# sourceMappingURL=expand.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/genericFile.js":
/*!************************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/genericFile.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GenericFile = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var GenericFile = function () { return ((0, preact_1.h)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    (0, preact_1.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M6 2C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V7.82843C20 7.29799 19.7893 6.78929 19.4142 6.41421L15.5858 2.58579C15.2107 2.21071 14.702 2 14.1716 2H6ZM14.3657 4.36569C13.8617 3.86171 13 4.21865 13 4.93137V8.2C13 8.64183 13.3582 9 13.8 9H17.0686C17.7814 9 18.1383 8.13829 17.6343 7.63431L14.3657 4.36569Z", fill: "white" }))); };
exports.GenericFile = GenericFile;
//# sourceMappingURL=genericFile.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/hotspot.js":
/*!********************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/hotspot.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Hotspot = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var Hotspot = function () { return ((0, preact_1.h)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none" },
    (0, preact_1.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M6.5 2C6.11537 2 5.79837 2.28953 5.75505 2.66253L5.75 2.75V3.5C5.75 3.91421 6.08579 4.25 6.5 4.25C6.88463 4.25 7.20163 3.96047 7.24495 3.58747L7.25 3.5V2.75C7.25 2.33579 6.91421 2 6.5 2ZM11.7955 3.8295C11.5235 3.55753 11.0946 3.53811 10.8003 3.77123L10.7348 3.8295L10.2045 4.35984C9.91161 4.65273 9.91161 5.1276 10.2045 5.4205C10.4765 5.69247 10.9054 5.71189 11.1997 5.47878L11.2652 5.4205L11.7955 4.89016C12.0884 4.59727 12.0884 4.1224 11.7955 3.8295ZM3.4545 12.1705C3.72648 12.4425 4.15536 12.4619 4.44975 12.2288L4.51516 12.1705L5.0455 11.6402C5.33839 11.3473 5.33839 10.8724 5.0455 10.5795C4.77352 10.3075 4.34464 10.2881 4.05025 10.5212L3.98484 10.5795L3.4545 11.1098C3.16161 11.4027 3.16161 11.8776 3.4545 12.1705ZM6.53592 6.98358C6.65797 6.61718 7.05316 6.41577 7.4186 6.53371L13.5234 8.50394C13.6272 8.53745 13.7214 8.59497 13.7983 8.67186C14.0693 8.94255 14.0669 9.38382 13.793 9.65748L12.8998 10.5499C12.7787 10.6708 12.7713 10.8642 12.8828 10.9915L13.6084 11.8185C14.0177 12.3362 13.9793 13.0939 13.4958 13.5769L13.4659 13.6069C12.9452 14.127 12.1056 14.1316 11.5906 13.6171L10.9802 12.9207C10.8554 12.7952 10.6516 12.7959 10.525 12.9224L9.66058 13.786C9.58277 13.8638 9.48795 13.9223 9.38376 13.957C9.01702 14.0789 8.624 13.8818 8.50593 13.5167L6.53356 7.41792C6.48802 7.27709 6.48885 7.12492 6.53592 6.98358ZM3.5 5.75C3.91421 5.75 4.25 6.08579 4.25 6.5C4.25 6.91421 3.91421 7.25 3.5 7.25H2.75C2.33579 7.25 2 6.91421 2 6.5C2 6.08579 2.33579 5.75 2.75 5.75H3.5Z", fill: "white" }))); };
exports.Hotspot = Hotspot;
//# sourceMappingURL=hotspot.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/image.js":
/*!******************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/image.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Image = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var Image = function () { return ((0, preact_1.h)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    (0, preact_1.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M20 4C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4H20ZM13.4658 9.8483C13.739 9.41452 14.1763 9.3854 14.4736 9.76788L14.5351 9.85614L18.2077 15.7324C18.6176 16.3882 18.3599 16.9391 17.6281 16.9953L17.5018 17H6.49825C5.71856 17 5.40843 16.498 5.77171 15.8584L5.83853 15.7506L8.44382 11.8687C8.72793 11.4454 9.26701 11.3331 9.6897 11.5934L9.785 11.6602L10.696 12.3798C11.1046 12.7026 11.6375 12.6332 11.9477 12.2465L12.0152 12.1517L13.4658 9.8483ZM9 8.5C9 7.672 8.328 7 7.5 7C6.672 7 6 7.672 6 8.5C6 9.329 6.672 10 7.5 10C8.328 10 9 9.329 9 8.5Z", fill: "white" }))); };
exports.Image = Image;
//# sourceMappingURL=image.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Icons = void 0;
var close_1 = __webpack_require__(/*! ./close */ "./node_modules/@playkit-js/common/dist/icon/icons/close.js");
var print_1 = __webpack_require__(/*! ./print */ "./node_modules/@playkit-js/common/dist/icon/icons/print.js");
var download_1 = __webpack_require__(/*! ./download */ "./node_modules/@playkit-js/common/dist/icon/icons/download.js");
var related_1 = __webpack_require__(/*! ./related */ "./node_modules/@playkit-js/common/dist/icon/icons/related.js");
var message_1 = __webpack_require__(/*! ./message */ "./node_modules/@playkit-js/common/dist/icon/icons/message.js");
var share_1 = __webpack_require__(/*! ./share */ "./node_modules/@playkit-js/common/dist/icon/icons/share.js");
var more_1 = __webpack_require__(/*! ./more */ "./node_modules/@playkit-js/common/dist/icon/icons/more.js");
var quiz_1 = __webpack_require__(/*! ./quiz */ "./node_modules/@playkit-js/common/dist/icon/icons/quiz.js");
var switch_1 = __webpack_require__(/*! ./switch */ "./node_modules/@playkit-js/common/dist/icon/icons/switch.js");
var add_1 = __webpack_require__(/*! ./add */ "./node_modules/@playkit-js/common/dist/icon/icons/add.js");
var minimizedVideo_1 = __webpack_require__(/*! ./minimizedVideo */ "./node_modules/@playkit-js/common/dist/icon/icons/minimizedVideo.js");
var pictureInPicture_1 = __webpack_require__(/*! ./pictureInPicture */ "./node_modules/@playkit-js/common/dist/icon/icons/pictureInPicture.js");
var expand_1 = __webpack_require__(/*! ./expand */ "./node_modules/@playkit-js/common/dist/icon/icons/expand.js");
var arrowOpen_1 = __webpack_require__(/*! ./arrowOpen */ "./node_modules/@playkit-js/common/dist/icon/icons/arrowOpen.js");
var arrowClose_1 = __webpack_require__(/*! ./arrowClose */ "./node_modules/@playkit-js/common/dist/icon/icons/arrowClose.js");
var chapter_1 = __webpack_require__(/*! ./chapter */ "./node_modules/@playkit-js/common/dist/icon/icons/chapter.js");
var hotspot_1 = __webpack_require__(/*! ./hotspot */ "./node_modules/@playkit-js/common/dist/icon/icons/hotspot.js");
var answerOnAir_1 = __webpack_require__(/*! ./answerOnAir */ "./node_modules/@playkit-js/common/dist/icon/icons/answerOnAir.js");
var screenRotation_1 = __webpack_require__(/*! ./screenRotation */ "./node_modules/@playkit-js/common/dist/icon/icons/screenRotation.js");
var autoScroll_1 = __webpack_require__(/*! ./autoScroll */ "./node_modules/@playkit-js/common/dist/icon/icons/autoScroll.js");
var replay_1 = __webpack_require__(/*! ./replay */ "./node_modules/@playkit-js/common/dist/icon/icons/replay.js");
var closedCaptions_1 = __webpack_require__(/*! ./closedCaptions */ "./node_modules/@playkit-js/common/dist/icon/icons/closedCaptions.js");
var genericFile_1 = __webpack_require__(/*! ./genericFile */ "./node_modules/@playkit-js/common/dist/icon/icons/genericFile.js");
var presentation_1 = __webpack_require__(/*! ./presentation */ "./node_modules/@playkit-js/common/dist/icon/icons/presentation.js");
var image_1 = __webpack_require__(/*! ./image */ "./node_modules/@playkit-js/common/dist/icon/icons/image.js");
var document_1 = __webpack_require__(/*! ./document */ "./node_modules/@playkit-js/common/dist/icon/icons/document.js");
var excel_1 = __webpack_require__(/*! ./excel */ "./node_modules/@playkit-js/common/dist/icon/icons/excel.js");
var pdf_1 = __webpack_require__(/*! ./pdf */ "./node_modules/@playkit-js/common/dist/icon/icons/pdf.js");
var zip_1 = __webpack_require__(/*! ./zip */ "./node_modules/@playkit-js/common/dist/icon/icons/zip.js");
var volumeOn_1 = __webpack_require__(/*! ./volumeOn */ "./node_modules/@playkit-js/common/dist/icon/icons/volumeOn.js");
var volumeMute_1 = __webpack_require__(/*! ./volumeMute */ "./node_modules/@playkit-js/common/dist/icon/icons/volumeMute.js");
var spinner_1 = __webpack_require__(/*! ./spinner */ "./node_modules/@playkit-js/common/dist/icon/icons/spinner.js");
var detach_1 = __webpack_require__(/*! ./detach */ "./node_modules/@playkit-js/common/dist/icon/icons/detach.js");
var attach_1 = __webpack_require__(/*! ./attach */ "./node_modules/@playkit-js/common/dist/icon/icons/attach.js");
var audio_1 = __webpack_require__(/*! ./audio */ "./node_modules/@playkit-js/common/dist/icon/icons/audio.js");
var chevronRight_1 = __webpack_require__(/*! ./chevronRight */ "./node_modules/@playkit-js/common/dist/icon/icons/chevronRight.js");
var check_1 = __webpack_require__(/*! ./check */ "./node_modules/@playkit-js/common/dist/icon/icons/check.js");
exports.Icons = {
    close: close_1.Close,
    print: print_1.Print,
    download: download_1.Download,
    related: related_1.Related,
    message: message_1.Message,
    share: share_1.Share,
    more: more_1.More,
    quiz: quiz_1.QuizIcon,
    switch: switch_1.Switch,
    add: add_1.Add,
    minimizedVideo: minimizedVideo_1.MinimizedVideo,
    pictureInPicture: pictureInPicture_1.PictureInPicture,
    expand: expand_1.Expand,
    arrowOpen: arrowOpen_1.ArrowOpen,
    arrowClose: arrowClose_1.ArrowClose,
    chapter: chapter_1.Chapter,
    hotspot: hotspot_1.Hotspot,
    answerOnAir: answerOnAir_1.AnswerOnAir,
    screenRotation: screenRotation_1.ScreenRotation,
    autoScroll: autoScroll_1.AutoScroll,
    replay: replay_1.ReplayIcon,
    closedCaptions: closedCaptions_1.ClosedCaptions,
    genericFile: genericFile_1.GenericFile,
    presentation: presentation_1.Presentation,
    image: image_1.Image,
    document: document_1.Document,
    excel: excel_1.Excel,
    pdf: pdf_1.PDF,
    zip: zip_1.Zip,
    volumeOn: volumeOn_1.VolumeOn,
    volumeMute: volumeMute_1.VolumeMute,
    spinner: spinner_1.Spinner,
    detach: detach_1.Detach,
    attach: attach_1.Attach,
    audio: audio_1.Audio,
    chevronRight: chevronRight_1.ChevronRight,
    check: check_1.Check
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/message.js":
/*!********************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/message.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Message = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var Message = function () { return ((0, preact_1.h)("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    (0, preact_1.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M25 5C27.2091 5 29 6.75035 29 8.90952V18.6833C29 20.8425 27.2091 22.5928 25 22.5928H14.985L10.7019 26.7188C10.546 26.8689 10.3449 26.9641 10.1302 26.9917L10 27C9.44772 27 9 26.5624 9 26.0226V22.5928H7C4.79086 22.5928 3 20.8425 3 18.6833V8.90952C3 6.75035 4.79086 5 7 5H25ZM25 6.95476H7C5.89543 6.95476 5 7.82994 5 8.90952V18.6833C5 19.7629 5.89543 20.6381 7 20.6381H11V23.687L14.1651 20.6381H25C26.1046 20.6381 27 19.7629 27 18.6833V8.90952C27 7.82994 26.1046 6.95476 25 6.95476ZM19 14.7738C19.5523 14.7738 20 15.2114 20 15.7512C20 16.291 19.5523 16.7286 19 16.7286H10C9.44772 16.7286 9 16.291 9 15.7512C9 15.2114 9.44772 14.7738 10 14.7738H19ZM23 10.8643C23.5523 10.8643 24 11.3019 24 11.8417C24 12.3815 23.5523 12.819 23 12.819H10C9.44772 12.819 9 12.3815 9 11.8417C9 11.3019 9.44772 10.8643 10 10.8643H23Z", fill: "white" }))); };
exports.Message = Message;
//# sourceMappingURL=message.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/minimizedVideo.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/minimizedVideo.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MinimizedVideo = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var MinimizedVideo = function () { return ((0, preact_1.h)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    (0, preact_1.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M5.25 4.5H18.75C19.9926 4.5 21 5.50736 21 6.75V17.25C21 18.4926 19.9926 19.5 18.75 19.5H5.25C4.00736 19.5 3 18.4926 3 17.25V6.75C3 5.50736 4.00736 4.5 5.25 4.5ZM5.25 6C4.83579 6 4.5 6.33579 4.5 6.75V17.25C4.5 17.6642 4.83579 18 5.25 18H18.75C19.1642 18 19.5 17.6642 19.5 17.25V6.75C19.5 6.33579 19.1642 6 18.75 6H5.25ZM13 12C12.4477 12 12 12.4477 12 13V15.5C12 16.0523 12.4477 16.5 13 16.5H17C17.5523 16.5 18 16.0523 18 15.5V13C18 12.4477 17.5523 12 17 12H13Z", fill: "white" }))); };
exports.MinimizedVideo = MinimizedVideo;
//# sourceMappingURL=minimizedVideo.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/more.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/more.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.More = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var More = function () { return ((0, preact_1.h)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true" },
    (0, preact_1.h)("path", { d: "M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12ZM20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z", fill: "white" }))); };
exports.More = More;
//# sourceMappingURL=more.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/pdf.js":
/*!****************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/pdf.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PDF = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var PDF = function () { return ((0, preact_1.h)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    (0, preact_1.h)("path", { d: "M16.2428 13.7325C17.4357 13.7542 18.6185 13.8543 19.7692 14.1927C20.2755 14.3415 20.7634 14.5301 21.1919 14.8459C22.0863 15.5045 22.2575 16.5466 21.6176 17.4515C20.9502 18.3952 19.8553 18.72 18.699 18.3321C17.8678 18.0533 17.1473 17.5995 16.5083 17.0166C15.915 16.4753 15.3392 15.9159 14.7469 15.3728C14.6746 15.3069 14.5482 15.2591 14.4503 15.2645C13.1247 15.3448 11.8091 15.509 10.5119 15.7995C10.0065 15.9123 9.50577 16.0458 9.00867 16.1884C8.9162 16.2146 8.82374 16.3138 8.77522 16.4031C8.07579 17.6978 7.33425 18.9672 6.42427 20.1329C5.98118 20.7004 5.49231 21.2273 4.87985 21.6261C3.70346 22.3912 2.4932 21.9482 2.10595 20.6075C1.88074 19.828 2.01715 19.1098 2.49045 18.4458C3.25945 17.3658 4.29212 16.5917 5.46301 15.998C6.15878 15.6453 6.89849 15.3755 7.61256 15.0561C7.72516 15.0056 7.84509 14.9081 7.89911 14.8017C8.68916 13.2489 9.37486 11.6511 9.98182 10.0199C10.0386 9.86741 10.023 9.75825 9.93879 9.62562C9.17254 8.42205 8.68001 7.12375 8.59212 5.69644C8.52987 4.68865 8.64431 3.71155 9.23845 2.84631C9.8207 1.99822 10.8058 1.74831 11.6059 2.27611C12.2705 2.71459 12.6788 3.33712 12.7594 4.13649C12.8656 5.19209 12.6788 6.22063 12.4216 7.23743C12.2357 7.97275 12.0087 8.69813 11.7899 9.42532C11.7487 9.56246 11.7643 9.659 11.8494 9.77629C12.8399 11.1441 13.9632 12.4018 15.147 13.608C15.2156 13.6784 15.341 13.7217 15.4427 13.7289C15.7081 13.7434 15.9755 13.7325 16.2428 13.7325ZM9.79415 14.3894C10.9486 14.1981 12.0792 14.0104 13.2171 13.8219C12.5168 13.0017 11.8155 12.1798 11.1069 11.3507C10.6648 12.3738 10.2327 13.3735 9.79415 14.3894ZM10.7133 7.76704C10.7591 7.60103 10.8058 7.43592 10.8497 7.26901C11.0777 6.4101 11.3029 5.54937 11.2855 4.65347C11.2809 4.40716 11.2141 4.14551 11.1079 3.92176C11.0319 3.76207 10.8424 3.65471 10.7041 3.52388C10.5833 3.67095 10.4267 3.80267 10.3471 3.96868C10.1137 4.45588 10.0834 4.98458 10.1127 5.51329C10.1576 6.29912 10.3379 7.05428 10.7133 7.76704ZM6.60279 17.0942C5.92899 17.4163 5.3083 17.7592 4.77915 18.2283C4.40197 18.563 4.06233 18.942 3.73642 19.3272C3.48832 19.6204 3.46452 19.9696 3.62931 20.3242C3.70438 20.4866 3.80233 20.5461 3.96071 20.427C4.11817 20.3088 4.28662 20.2015 4.42852 20.068C5.31471 19.2334 5.95097 18.2148 6.58356 17.1944C6.59546 17.1763 6.59272 17.152 6.60279 17.0942ZM16.8937 15.2762C17.54 15.9394 18.2166 16.5529 19.1055 16.8678C19.3087 16.9399 19.5358 16.9715 19.7518 16.9724C20.0594 16.9742 20.4055 16.6792 20.4503 16.3842C20.497 16.0792 20.2233 15.9998 20.0237 15.9033C19.0396 15.426 17.9685 15.3484 16.8937 15.2762Z", fill: "white" }))); };
exports.PDF = PDF;
//# sourceMappingURL=pdf.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/pictureInPicture.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/pictureInPicture.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PictureInPicture = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var PictureInPicture = function () { return ((0, preact_1.h)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    (0, preact_1.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M18.75 4.5H5.25C4.00736 4.5 3 5.50736 3 6.75V17.25C3 18.4926 4.00736 19.5 5.25 19.5H18.75C19.9926 19.5 21 18.4926 21 17.25V6.75C21 5.50736 19.9926 4.5 18.75 4.5ZM13 12C12.4477 12 12 12.4477 12 13V15.5C12 16.0523 12.4477 16.5 13 16.5H17C17.5523 16.5 18 16.0523 18 15.5V13C18 12.4477 17.5523 12 17 12H13Z", fill: "white" }))); };
exports.PictureInPicture = PictureInPicture;
//# sourceMappingURL=pictureInPicture.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/presentation.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/presentation.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Presentation = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var Presentation = function () { return ((0, preact_1.h)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    (0, preact_1.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M6 4C4.34315 4 3 5.34315 3 7V17C3 18.6569 4.34315 20 6 20H18C19.6569 20 21 18.6569 21 17V7C21 5.34315 19.6569 4 18 4H6ZM18 8H6V16H18V8Z", fill: "white" }))); };
exports.Presentation = Presentation;
//# sourceMappingURL=presentation.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/print.js":
/*!******************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/print.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Print = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var Print = function () { return ((0, preact_1.h)("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    (0, preact_1.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M23 23H26C27.1046 23 28 22.1046 28 21V11C28 9.89543 27.1046 9 26 9H23V5C23 3.89543 22.1046 3 21 3H11C9.89543 3 9 3.89543 9 5V9H6C4.89543 9 4 9.89543 4 11V21C4 22.1046 4.89543 23 6 23H9V28C9 29.1046 9.89543 30 11 30H21C22.1046 30 23 29.1046 23 28V23ZM6 11V21H9V19C8.44772 19 8 18.5523 8 18C8 17.4477 8.44772 17 9 17H23C23.5523 17 24 17.4477 24 18C24 18.5523 23.5523 19 23 19V21H26V11H6ZM21 9V5H11V9H21ZM11 19V28H21V19H11Z", fill: "white" }))); };
exports.Print = Print;
//# sourceMappingURL=print.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/quiz.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/quiz.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QuizIcon = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var QuizIcon = function () {
    return ((0, preact_1.h)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        (0, preact_1.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.49857 2.11499L12.7442 4.2052C12.9162 4.28987 12.9812 4.48721 12.8895 4.64597C12.8594 4.69807 12.8145 4.74163 12.7597 4.77201L8.54484 7.10634C8.20953 7.29205 7.79063 7.29205 7.45532 7.10634L3.2405 4.77202C3.07335 4.67945 3.01915 4.47933 3.11944 4.32505C3.15235 4.27441 3.19956 4.23299 3.256 4.2052L7.50203 2.11498C7.81345 1.96167 8.18715 1.96168 8.49857 2.11499ZM14 6.02878V10.7642C14 11.1075 13.8049 11.4256 13.486 11.6022L9.24043 13.9536C9.07328 14.0461 8.85649 13.9961 8.7562 13.8418C8.72329 13.7912 8.7059 13.7333 8.7059 13.6742V8.93882C8.7059 8.59551 8.90104 8.27738 9.21997 8.10075L13.4655 5.74942C13.6326 5.65685 13.8494 5.70688 13.9497 5.86116C13.9826 5.91179 14 5.96973 14 6.02878ZM6.5145 8.31192L2.50483 6.04476C2.45303 6.01547 2.39375 6 2.33333 6C2.14924 6 2 6.14064 2 6.31412V10.88C2 11.211 2.1843 11.5178 2.4855 11.6881L6.49517 13.9552C6.54697 13.9845 6.60625 14 6.66667 14C6.85076 14 7 13.8594 7 13.6859V9.12C7 8.78898 6.8157 8.48223 6.5145 8.31192Z", fill: "white" })));
};
exports.QuizIcon = QuizIcon;
//# sourceMappingURL=quiz.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/related.js":
/*!********************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/related.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Related = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var Related = function () { return ((0, preact_1.h)("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    (0, preact_1.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8 7H12C13.1046 7 14 7.89543 14 9V13C14 14.1046 13.1046 15 12 15H8C6.89543 15 6 14.1046 6 13V9C6 7.89543 6.89543 7 8 7ZM8 13H12V9H8V13Z", fill: "white" }),
    (0, preact_1.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8 18H12C13.1046 18 14 18.8954 14 20V24C14 25.1046 13.1046 26 12 26H8C6.89543 26 6 25.1046 6 24V20C6 18.8954 6.89543 18 8 18ZM8 24H12V20H8V24Z", fill: "white" }),
    (0, preact_1.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M24 7H20C18.8954 7 18 7.89543 18 9V13C18 14.1046 18.8954 15 20 15H24C25.1046 15 26 14.1046 26 13V9C26 7.89543 25.1046 7 24 7ZM24 13H20V9H24V13Z", fill: "white" }),
    (0, preact_1.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M20 18H24C25.1046 18 26 18.8954 26 20V24C26 25.1046 25.1046 26 24 26H20C18.8954 26 18 25.1046 18 24V20C18 18.8954 18.8954 18 20 18ZM20 24H24V20H20V24Z", fill: "white" }))); };
exports.Related = Related;
//# sourceMappingURL=related.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/replay.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/replay.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReplayIcon = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var ReplayIcon = function () {
    return ((0, preact_1.h)("svg", { width: "33", height: "32", viewBox: "0 0 33 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        (0, preact_1.h)("g", { opacity: "0.8" },
            (0, preact_1.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M11.5 7.50049C8.73858 7.50049 6.5 9.73906 6.5 12.5005V16.5005C6.5 19.2619 8.73858 21.5005 11.5 21.5005H13.0858L11.7929 22.7934C11.4024 23.1839 11.4024 23.8171 11.7929 24.2076C12.1834 24.5981 12.8166 24.5981 13.2071 24.2076L16.2071 21.2076C16.5976 20.8171 16.5976 20.1839 16.2071 19.7934L13.2071 16.7934C12.8166 16.4029 12.1834 16.4029 11.7929 16.7934C11.4024 17.1839 11.4024 17.8171 11.7929 18.2076L13.0858 19.5005H11.5C9.84315 19.5005 8.5 18.1573 8.5 16.5005V12.5005C8.5 10.8436 9.84315 9.50049 11.5 9.50049H21.5C23.1569 9.50049 24.5 10.8436 24.5 12.5005V16.5005C24.5 18.1573 23.1569 19.5005 21.5 19.5005H20C19.4477 19.5005 19 19.9482 19 20.5005C19 21.0528 19.4477 21.5005 20 21.5005H21.5C24.2614 21.5005 26.5 19.2619 26.5 16.5005V12.5005C26.5 9.73906 24.2614 7.50049 21.5 7.50049H11.5Z", fill: "white" }))));
};
exports.ReplayIcon = ReplayIcon;
//# sourceMappingURL=replay.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/screenRotation.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/screenRotation.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScreenRotation = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var ScreenRotation = function () { return ((0, preact_1.h)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    (0, preact_1.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M12 3C12 2.44772 12.4477 2 13 2C17.9706 2 22 6.02944 22 11C22 11.5523 21.5523 12 21 12C20.4477 12 20 11.5523 20 11C20 7.13401 16.866 4 13 4C12.4477 4 12 3.55228 12 3ZM10.6569 7.82843L7.82843 10.6569L13.4853 16.3137L16.3137 13.4853L10.6569 7.82843ZM12.0711 6.41421C11.29 5.63317 10.0237 5.63317 9.24265 6.41421L6.41422 9.24264C5.63317 10.0237 5.63317 11.29 6.41422 12.0711L12.0711 17.7279C12.8521 18.509 14.1185 18.509 14.8995 17.7279L17.7279 14.8995C18.509 14.1184 18.509 12.8521 17.7279 12.0711L12.0711 6.41421ZM11 22C11.5523 22 12 21.5523 12 21C12 20.4477 11.5523 20 11 20C7.13401 20 4 16.866 4 13C4 12.4477 3.55228 12 3 12C2.44771 12 2 12.4477 2 13C2 17.9706 6.02944 22 11 22Z", fill: "white" }))); };
exports.ScreenRotation = ScreenRotation;
//# sourceMappingURL=screenRotation.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/share.js":
/*!******************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/share.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Share = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var Share = function () { return ((0, preact_1.h)("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    (0, preact_1.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M22.6667 12.6667C24.5076 12.6667 26 11.1743 26 9.33333C26 7.49238 24.5076 6 22.6667 6C20.8257 6 19.3333 7.49238 19.3333 9.33333C19.3333 9.38882 19.3347 9.44399 19.3374 9.49881L11.9575 13.9443C11.3473 13.1665 10.3987 12.6667 9.33333 12.6667C7.49238 12.6667 6 14.1591 6 16C6 17.8409 7.49238 19.3333 9.33333 19.3333C10.3981 19.3333 11.3462 18.8341 11.9564 18.057L19.3374 22.5013C19.3347 22.5561 19.3333 22.6112 19.3333 22.6667C19.3333 24.5076 20.8257 26 22.6667 26C24.5076 26 26 24.5076 26 22.6667C26 20.8257 24.5076 19.3333 22.6667 19.3333C21.6074 19.3333 20.6636 19.8274 20.053 20.5976L12.864 16.2689L12.8651 15.7324L20.0531 11.4025C20.6637 12.1727 21.6075 12.6667 22.6667 12.6667ZM22.6667 10.6667C21.9303 10.6667 21.3333 10.0697 21.3333 9.33333C21.3333 8.59695 21.9303 8 22.6667 8C23.403 8 24 8.59695 24 9.33333C24 10.0697 23.403 10.6667 22.6667 10.6667ZM9.33333 17.3333C8.59695 17.3333 8 16.7364 8 16C8 15.2636 8.59695 14.6667 9.33333 14.6667C10.0697 14.6667 10.6667 15.2636 10.6667 16C10.6667 16.7364 10.0697 17.3333 9.33333 17.3333ZM21.3333 22.6667C21.3333 23.403 21.9303 24 22.6667 24C23.403 24 24 23.403 24 22.6667C24 21.9303 23.403 21.3333 22.6667 21.3333C21.9303 21.3333 21.3333 21.9303 21.3333 22.6667Z", fill: "white" }))); };
exports.Share = Share;
//# sourceMappingURL=share.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/spinner.js":
/*!********************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/spinner.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Spinner = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var styles = __webpack_require__(/*! ./spinner.scss */ "./node_modules/@playkit-js/common/dist/icon/icons/spinner.scss");
var Spinner = function () { return ((0, preact_1.h)("svg", { width: "25", height: "24", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: styles.spinner },
    (0, preact_1.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M12.5 18C15.8137 18 18.5 15.3137 18.5 12C18.5 8.68629 15.8137 6 12.5 6C9.18629 6 6.5 8.68629 6.5 12C6.5 15.3137 9.18629 18 12.5 18ZM12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z", fill: "white", "fill-opacity": "0.2" }),
    (0, preact_1.h)("path", { d: "M18.5 12H22.5C22.5 6.47715 18.0228 2 12.5 2V6C15.8137 6 18.5 8.68629 18.5 12Z", fill: "white" }))); };
exports.Spinner = Spinner;
//# sourceMappingURL=spinner.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/switch.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/switch.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Switch = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var Switch = function () { return ((0, preact_1.h)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    (0, preact_1.h)("path", { d: "M17.6744 9.27934L21.7563 13.3632L21.8282 13.4537L21.887 13.5492L21.9333 13.6489L21.9684 13.7556L21.9824 13.8172L21.9974 13.929L22 14L21.9897 14.1405L21.9824 14.1828L21.9535 14.2949L21.9231 14.3759L21.887 14.4508L21.8281 14.5463L21.7763 14.6137L21.7207 14.6744L17.6744 18.7207C17.3019 19.0931 16.6981 19.0931 16.3256 18.7207C15.9818 18.3769 15.9554 17.8359 16.2463 17.4617L16.3256 17.3719L18.7439 14.9536L12.9537 14.9537C12.4675 14.9537 12.0663 14.5899 12.0074 14.1196L12 14C12 13.5109 12.3682 13.1078 12.8425 13.0527L12.9537 13.0463L18.7426 13.0451L16.3256 10.6281C15.9798 10.2823 15.9551 9.73687 16.2515 9.36252L16.3256 9.27934C16.6981 8.90689 17.3019 8.90689 17.6744 9.27934ZM6.32562 5.27934C6.69807 4.90689 7.30193 4.90689 7.67438 5.27934L7.74849 5.36252C8.04493 5.73687 8.02023 6.28225 7.67438 6.6281L5.2574 9.04508L11.0463 9.04628L11.1575 9.0527C11.6318 9.10779 12 9.5109 12 10L11.9926 10.1196C11.9337 10.5899 11.5325 10.9537 11.0463 10.9537L5.25605 10.9536L7.67438 13.3719L7.75372 13.4617C8.04463 13.8359 8.01818 14.3769 7.67438 14.7207C7.30193 15.0931 6.69807 15.0931 6.32562 14.7207L2.25793 10.6523L2.18664 10.5668L2.12413 10.4708L2.07695 10.3759L2.03697 10.2639L2.01028 10.1405L2 10C2 9.95226 2.00351 9.90534 2.01036 9.85937L2.01758 9.81716L2.04651 9.70514L2.08932 9.59642L2.12415 9.52899L2.18631 9.43351L2.24369 9.36325L6.32562 5.27934Z", fill: "white" }))); };
exports.Switch = Switch;
//# sourceMappingURL=switch.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/volumeMute.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/volumeMute.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VolumeMute = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var VolumeMute = function () { return ((0, preact_1.h)("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    (0, preact_1.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M7 11L14.2433 6.97588C15.2135 6.43689 16 6.89817 16 7.99076V24.0092C16 25.1087 15.2171 25.565 14.2433 25.024L7 21H3.00293C2.44903 21 2 20.5443 2 20.0046V11.9954C2 11.4456 2.43788 11 3.00293 11H7ZM9 12.1768V19.8232L14 22.6009V9.39899L9 12.1768ZM7 13H4V19H7V13Z", fill: "white" }),
    (0, preact_1.h)("path", { d: "M20.4645 12.4644C20.0739 12.855 20.0739 13.4881 20.4645 13.8786L22.5858 16L20.4645 18.1213C20.0739 18.5118 20.0739 19.145 20.4645 19.5355C20.855 19.926 21.4882 19.926 21.8787 19.5355L24 17.4142L26.1213 19.5355C26.5118 19.926 27.145 19.926 27.5355 19.5355C27.9261 19.145 27.9261 18.5118 27.5355 18.1213L25.4142 16L27.5355 13.8786C27.9261 13.4881 27.9261 12.855 27.5355 12.4644C27.145 12.0739 26.5118 12.0739 26.1213 12.4644L24 14.5857L21.8787 12.4644C21.4882 12.0739 20.855 12.0739 20.4645 12.4644Z", fill: "white" }))); };
exports.VolumeMute = VolumeMute;
//# sourceMappingURL=volumeMute.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/volumeOn.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/volumeOn.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VolumeOn = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var VolumeOn = function () { return ((0, preact_1.h)("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    (0, preact_1.h)("path", { d: "M25.063 26.1618C27.6367 23.4547 29.1 19.8564 29.1 16.0287C29.1 12.1544 27.6007 8.51592 24.971 5.79967C24.5869 5.40288 23.9538 5.39263 23.557 5.77678C23.1602 6.16093 23.15 6.79402 23.5341 7.19081C25.8057 9.53719 27.1 12.6782 27.1 16.0287C27.1 19.339 25.8368 22.4453 23.6136 24.7838C23.233 25.184 23.249 25.817 23.6493 26.1975C24.0495 26.5781 24.6825 26.5621 25.063 26.1618Z", fill: "white" }),
    (0, preact_1.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M7 11L14.2433 6.97595C15.2135 6.43696 16 6.89824 16 7.99082V24.0092C16 25.1087 15.2171 25.5651 14.2433 25.0241L7 21H3.00293C2.44903 21 2 20.5444 2 20.0046V11.9954C2 11.4457 2.43788 11 3.00293 11H7ZM9 12.1768V19.8232L14 22.601V9.39906L9 12.1768ZM7 13H4V19H7V13Z", fill: "white" }),
    (0, preact_1.h)("path", { d: "M24.2097 15.6872C24.2097 18.6042 22.9749 21.3231 20.8574 23.2257C20.4466 23.5948 19.8143 23.561 19.4452 23.1502C19.076 22.7394 19.1098 22.1071 19.5207 21.738C21.2197 20.2114 22.2097 18.0316 22.2097 15.6872C22.2097 13.4938 21.344 11.4424 19.8323 9.93166C19.4417 9.54127 19.4414 8.9081 19.8318 8.51745C20.2222 8.12679 20.8554 8.12657 21.246 8.51697C23.1299 10.3996 24.2097 12.9585 24.2097 15.6872Z", fill: "white" }))); };
exports.VolumeOn = VolumeOn;
//# sourceMappingURL=volumeOn.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/zip.js":
/*!****************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/zip.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Zip = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var Zip = function () { return ((0, preact_1.h)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    (0, preact_1.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M6 2C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V7.82843C20 7.29799 19.7893 6.78929 19.4142 6.41421L15.5858 2.58579C15.2107 2.21071 14.702 2 14.1716 2H6ZM14.3657 4.36569C13.8617 3.86171 13 4.21865 13 4.93137V8.2C13 8.64183 13.3582 9 13.8 9H17.0686C17.7814 9 18.1383 8.13829 17.6343 7.63431L14.3657 4.36569ZM7 5H9V7H7V5ZM9 9H7V11H9V9ZM7 13H9V15H7V13ZM10 17H6V19H10V17Z", fill: "white" }))); };
exports.Zip = Zip;
//# sourceMappingURL=zip.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Icon = exports.IconSize = void 0;
var preact_1 = __webpack_require__(/*! preact */ "preact");
var classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
var icons_1 = __webpack_require__(/*! ./icons */ "./node_modules/@playkit-js/common/dist/icon/icons/index.js");
var styles = __webpack_require__(/*! ./icon.scss */ "./node_modules/@playkit-js/common/dist/icon/icon.scss");
var IconSize;
(function (IconSize) {
    IconSize["small"] = "small";
    IconSize["medium"] = "medium";
    IconSize["large"] = "large";
})(IconSize = exports.IconSize || (exports.IconSize = {}));
var Icon = function (props) {
    var Icon = icons_1.Icons[props.name];
    if (!Icon) {
        return null;
    }
    return ((0, preact_1.h)("div", { className: classnames(styles.iconWrapper, styles[props.size]) },
        (0, preact_1.h)(Icon, null)));
};
exports.Icon = Icon;
exports.Icon.defaultProps = {
    size: IconSize.medium
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/ui-common/events-manager.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/ui-common/events-manager.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

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

"use strict";

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

"use strict";

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

/***/ "./node_modules/@playkit-js/common/dist/ui-common/player-utils.js":
/*!************************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/ui-common/player-utils.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

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

/***/ "./node_modules/@playkit-js/common/dist/ui-common/uuid.js":
/*!****************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/ui-common/uuid.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UUID = void 0;
var UUID = /** @class */ (function () {
    function UUID() {
    }
    //timestamp
    UUID.uuidV1 = function () {
        return "".concat(Date.now(), "-").concat(Math.random());
    };
    return UUID;
}());
exports.UUID = UUID;
//# sourceMappingURL=uuid.js.map

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/@playkit-js/common/dist/icon/icon.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/@playkit-js/common/dist/icon/icon.scss ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "iconWrapper": () => (/* binding */ iconWrapper),
/* harmony export */   "large": () => (/* binding */ large),
/* harmony export */   "medium": () => (/* binding */ medium),
/* harmony export */   "small": () => (/* binding */ small)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".playkit-iconWrapper_XI.playkit-small_S5 {\n  width: 16px;\n  height: 16px;\n}\n.playkit-iconWrapper_XI.playkit-medium_Jb {\n  width: 24px;\n  height: 24px;\n}\n.playkit-iconWrapper_XI.playkit-large_dv {\n  width: 32px;\n  height: 32px;\n}\n.playkit-iconWrapper_XI > svg {\n  width: 100%;\n  height: 100%;\n}", "",{"version":3,"sources":["webpack://./node_modules/@playkit-js/common/dist/icon/icon.scss"],"names":[],"mappings":"AACE;EACE,WAAA;EACA,YAAA;AAAJ;AAEE;EACE,WAAA;EACA,YAAA;AAAJ;AAEE;EACE,WAAA;EACA,YAAA;AAAJ;AAEE;EACE,WAAA;EACA,YAAA;AAAJ","sourcesContent":[".iconWrapper {\n  &.small {\n    width: 16px;\n    height: 16px;\n  }\n  &.medium {\n    width: 24px;\n    height: 24px;\n  }\n  &.large {\n    width: 32px;\n    height: 32px;\n  }\n  > svg {\n    width: 100%;\n    height: 100%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
var iconWrapper = "playkit-iconWrapper_XI";
var small = "playkit-small_S5";
var medium = "playkit-medium_Jb";
var large = "playkit-large_dv";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/@playkit-js/common/dist/icon/icons/spinner.scss":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/@playkit-js/common/dist/icon/icons/spinner.scss ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "spinner": () => (/* binding */ spinner),
/* harmony export */   "spinnerAnimation": () => (/* binding */ spinnerAnimation)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".playkit-spinner_ny {\n  animation: playkit-spinner-animation_u8 1s linear infinite;\n}\n\n@keyframes playkit-spinner-animation_u8 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}", "",{"version":3,"sources":["webpack://./node_modules/@playkit-js/common/dist/icon/icons/spinner.scss"],"names":[],"mappings":"AAAA;EACE,0DAAA;AACF;;AACA;EACE;IACE,uBAAA;EAEF;EAAA;IACE,yBAAA;EAEF;AACF","sourcesContent":[".spinner {\n  animation: spinner-animation 1s linear infinite;\n}\n@keyframes spinner-animation {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
var spinner = "playkit-spinner_ny";
var spinnerAnimation = "playkit-spinner-animation_u8";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/@playkit-js/common/dist/ui-common/injected-component/injected-component.scss":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/@playkit-js/common/dist/ui-common/injected-component/injected-component.scss ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/banner-manager/ui/banner-container/banner-container.scss":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/banner-manager/ui/banner-container/banner-container.scss ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bannerContainer": () => (/* binding */ bannerContainer),
/* harmony export */   "bannerContainerRoot": () => (/* binding */ bannerContainerRoot),
/* harmony export */   "closeButton": () => (/* binding */ closeButton),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "large": () => (/* binding */ large),
/* harmony export */   "small": () => (/* binding */ small)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".playkit-bannerContainerRoot_If {\n  position: absolute;\n  max-width: 100%;\n  min-width: 270px;\n  padding: 0 16px 8px;\n  height: 88px;\n  bottom: 0;\n  left: 0;\n  transition: all 0.5s ease;\n}\n\n.playkit-bannerContainer_Pb {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border-radius: 4px;\n  transition: all 0.5s ease;\n}\n\n.playkit-closeButton__6 {\n  position: absolute;\n  background-color: transparent;\n  padding: 0;\n  border: none;\n  top: 0;\n  right: 0;\n  width: 32px;\n  height: 32px;\n  padding: 0;\n}\n.playkit-closeButton__6 .playkit-small_Hx {\n  display: none;\n}\n\n.playkit-closeButton__6:hover,\n.playkit-closeButton__6:active {\n  cursor: pointer;\n}\n\n.playkit-size-md .playkit-bannerContainerRoot_If {\n  height: 68px;\n  min-width: 230px;\n}\n.playkit-size-md .playkit-closeButton__6 {\n  top: 8px;\n  right: 8px;\n  width: 10px;\n  height: 10px;\n}\n.playkit-size-md .playkit-closeButton__6 .playkit-large_v4 {\n  display: none;\n}\n.playkit-size-md .playkit-closeButton__6 .playkit-small_Hx {\n  display: block;\n}\n\n.playkit-size-sm .playkit-bannerContainerRoot_If, .playkit-size-xs .playkit-bannerContainerRoot_If, .playkit-size-ty .playkit-bannerContainerRoot_If {\n  display: none;\n  width: 0;\n  height: 0;\n}", "",{"version":3,"sources":["webpack://./src/services/banner-manager/ui/banner-container/banner-container.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,YAAA;EACA,SAAA;EACA,OAAA;EACA,yBAAA;AACJ;;AAEE;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,yBAAA;AACJ;;AAEE;EACE,kBAAA;EACA,6BAAA;EACA,UAAA;EACA,YAAA;EACA,MAAA;EACA,QAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;AACJ;AAAI;EACE,aAAA;AAEN;;AAEE;;EAEE,eAAA;AACJ;;AAKQ;EACE,YAAA;EACA,gBAAA;AAFV;AAIQ;EACE,QAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;AAFV;AAGU;EACE,aAAA;AADZ;AAGU;EACE,cAAA;AADZ;;AAYM;EACE,aAAA;EACA,QAAA;EACA,SAAA;AAPR","sourcesContent":[".bannerContainerRoot {\n    position: absolute;\n    max-width: 100%;\n    min-width: 270px;\n    padding: 0 16px 8px;\n    height: 88px;\n    bottom: 0;\n    left: 0;\n    transition: all 0.5s ease;\n  }\n  \n  .bannerContainer {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    border-radius: 4px;\n    transition: all 0.5s ease;\n  }\n  \n  .closeButton {\n    position: absolute;\n    background-color: transparent;\n    padding: 0;\n    border: none;\n    top: 0;\n    right: 0;\n    width: 32px;\n    height: 32px;\n    padding: 0;\n    .small {\n      display: none;\n    }\n  }\n  \n  .closeButton:hover,\n  .closeButton:active {\n    cursor: pointer;\n  }\n  \n  :global {\n    .playkit-size-md {\n      :local {\n        .bannerContainerRoot {\n          height: 68px;\n          min-width: 230px;\n        }\n        .closeButton {\n          top: 8px;\n          right: 8px;\n          width: 10px;\n          height: 10px;\n          .large {\n            display: none;\n          }\n          .small {\n            display: block;\n          }\n        }\n      }\n    }\n  }\n  \n  :global {\n    .playkit-size-sm,\n    .playkit-size-xs,\n    .playkit-size-ty {\n      :local .bannerContainerRoot {\n        display: none;\n        width: 0;\n        height: 0;\n      }\n    }\n  }\n  "],"sourceRoot":""}]);
// Exports
var bannerContainerRoot = "playkit-bannerContainerRoot_If";
var bannerContainer = "playkit-bannerContainer_Pb";
var closeButton = "playkit-closeButton__6";
var small = "playkit-small_Hx";
var large = "playkit-large_v4";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/banner-manager/ui/banner/banner.scss":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/banner-manager/ui/banner/banner.scss ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bannerBody": () => (/* binding */ bannerBody),
/* harmony export */   "bannerWrapper": () => (/* binding */ bannerWrapper),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "defaultBannerRoot": () => (/* binding */ defaultBannerRoot),
/* harmony export */   "iconContainer": () => (/* binding */ iconContainer),
/* harmony export */   "iconImage": () => (/* binding */ iconImage),
/* harmony export */   "iconWrapper": () => (/* binding */ iconWrapper),
/* harmony export */   "large": () => (/* binding */ large),
/* harmony export */   "small": () => (/* binding */ small),
/* harmony export */   "text": () => (/* binding */ text),
/* harmony export */   "title": () => (/* binding */ title)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".playkit-defaultBannerRoot_CP {\n  display: flex;\n  max-width: 100%;\n  height: 100%;\n  transition: all 0.5s ease;\n  text-align: left;\n}\n\n.playkit-bannerWrapper_co {\n  padding: 18px 17px 17px 16px;\n}\n\n.playkit-iconContainer_sj {\n  height: 100%;\n  width: 64px;\n}\n\n.playkit-iconWrapper_a5 {\n  position: relative;\n  height: 48px;\n  width: 48px;\n  background-color: rgba(255, 255, 255, 0.14);\n  border-radius: 50%;\n  transition: all 0.5s ease;\n}\n\n.playkit-iconImage_BL {\n  position: absolute;\n  width: 32px;\n  height: 32px;\n  left: calc(50% - 16px);\n  top: calc(50% - 16px);\n  transition: all 0.5s ease;\n  padding: 0;\n}\n.playkit-iconImage_BL .playkit-small_bv {\n  display: none;\n}\n\n.playkit-bannerBody_Fj {\n  height: 100%;\n  flex: 1 1 auto;\n  overflow: hidden;\n}\n\n.playkit-title_vu {\n  opacity: 0.9;\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1;\n  letter-spacing: normal;\n  color: #ebebeb;\n}\n\n.playkit-text_OX {\n  opacity: 0.9;\n  font-size: 24px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.21;\n  letter-spacing: normal;\n  color: #ffffff;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  transition: all 0.5s ease;\n}\n\n.playkit-size-md .playkit-bannerWrapper_co {\n  padding: 14px 16px 14px;\n}\n.playkit-size-md .playkit-iconContainer_sj {\n  width: 44px;\n}\n.playkit-size-md .playkit-iconWrapper_a5 {\n  height: 32px;\n  width: 32px;\n}\n.playkit-size-md .playkit-iconImage_BL {\n  width: 20px;\n  height: 20px;\n  left: calc(50% - 10px);\n  top: calc(50% - 10px);\n}\n.playkit-size-md .playkit-iconImage_BL .playkit-small_bv {\n  display: block;\n}\n.playkit-size-md .playkit-iconImage_BL .playkit-large_Ii {\n  display: none;\n}\n.playkit-size-md .playkit-bannerBody_Fj {\n  flex: 1 1 auto;\n}\n.playkit-size-md .playkit-title_vu {\n  font-size: 12px;\n  font-weight: bold;\n  line-height: 1.17;\n}\n.playkit-size-md .playkit-text_OX {\n  font-size: 15px;\n  line-height: 1.27;\n}", "",{"version":3,"sources":["webpack://./src/services/banner-manager/ui/banner/banner.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,eAAA;EACA,YAAA;EACA,yBAAA;EACA,gBAAA;AACJ;;AAEE;EACE,4BAAA;AACJ;;AAEE;EACE,YAAA;EACA,WAAA;AACJ;;AAEE;EACE,kBAAA;EACA,YAAA;EACA,WAAA;EACA,2CAAA;EACA,kBAAA;EACA,yBAAA;AACJ;;AAEE;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;EACA,qBAAA;EACA,yBAAA;EACA,UAAA;AACJ;AAAI;EACE,aAAA;AAEN;;AAEE;EACE,YAAA;EACA,cAAA;EACA,gBAAA;AACJ;;AAEE;EACE,YAAA;EACA,eAAA;EACA,mBAAA;EACA,kBAAA;EACA,oBAAA;EACA,cAAA;EACA,sBAAA;EACA,cAAA;AACJ;;AAEE;EACE,YAAA;EACA,eAAA;EACA,mBAAA;EACA,kBAAA;EACA,oBAAA;EACA,iBAAA;EACA,sBAAA;EACA,cAAA;EACA,mBAAA;EACA,gBAAA;EACA,uBAAA;EACA,yBAAA;AACJ;;AAKQ;EACE,uBAAA;AAFV;AAIQ;EACE,WAAA;AAFV;AAIQ;EACE,YAAA;EACA,WAAA;AAFV;AAIQ;EACE,WAAA;EACA,YAAA;EACA,sBAAA;EACA,qBAAA;AAFV;AAGU;EACE,cAAA;AADZ;AAGU;EACE,aAAA;AADZ;AAIQ;EACE,cAAA;AAFV;AAIQ;EACE,eAAA;EACA,iBAAA;EACA,iBAAA;AAFV;AAIQ;EACE,eAAA;EACA,iBAAA;AAFV","sourcesContent":[".defaultBannerRoot {\n    display: flex;\n    max-width: 100%;\n    height: 100%;\n    transition: all 0.5s ease;\n    text-align: left;\n  }\n  \n  .bannerWrapper {\n    padding: 18px 17px 17px 16px;\n  }\n  \n  .iconContainer {\n    height: 100%;\n    width: 64px;\n  }\n  \n  .iconWrapper {\n    position: relative;\n    height: 48px;\n    width: 48px;\n    background-color: rgba(255, 255, 255, 0.14);\n    border-radius: 50%;\n    transition: all 0.5s ease;\n  }\n  \n  .iconImage {\n    position: absolute;\n    width: 32px;\n    height: 32px;\n    left: calc(50% - 16px);\n    top: calc(50% - 16px);\n    transition: all 0.5s ease;\n    padding: 0;\n    .small {\n      display: none;\n    }\n  }\n  \n  .bannerBody {\n    height: 100%;\n    flex: 1 1 auto;\n    overflow: hidden;\n  }\n  \n  .title {\n    opacity: 0.9;\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1;\n    letter-spacing: normal;\n    color: #ebebeb;\n  }\n  \n  .text {\n    opacity: 0.9;\n    font-size: 24px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.21;\n    letter-spacing: normal;\n    color: #ffffff;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    transition: all 0.5s ease;\n  }\n  \n  :global {\n    .playkit-size-md {\n      :local {\n        .bannerWrapper {\n          padding: 14px 16px 14px;\n        }\n        .iconContainer {\n          width: 44px;\n        }\n        .iconWrapper {\n          height: 32px;\n          width: 32px;\n        }\n        .iconImage {\n          width: 20px;\n          height: 20px;\n          left: calc(50% - 10px);\n          top: calc(50% - 10px);\n          .small {\n            display: block;\n          }\n          .large {\n            display: none;\n          }\n        }\n        .bannerBody {\n          flex: 1 1 auto;\n        }\n        .title {\n          font-size: 12px;\n          font-weight: bold;\n          line-height: 1.17;\n        }\n        .text {\n          font-size: 15px;\n          line-height: 1.27;\n        }\n      }\n    }\n  }\n  "],"sourceRoot":""}]);
// Exports
var defaultBannerRoot = "playkit-defaultBannerRoot_CP";
var bannerWrapper = "playkit-bannerWrapper_co";
var iconContainer = "playkit-iconContainer_sj";
var iconWrapper = "playkit-iconWrapper_a5";
var iconImage = "playkit-iconImage_BL";
var small = "playkit-small_bv";
var bannerBody = "playkit-bannerBody_Fj";
var title = "playkit-title_vu";
var text = "playkit-text_OX";
var large = "playkit-large_Ii";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/component-injection-manager/ui/bottom-right-overlay.scss":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/component-injection-manager/ui/bottom-right-overlay.scss ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bottomRightOverlay": () => (/* binding */ bottomRightOverlay),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".playkit-bottomRightOverlay_q3 {\n  position: absolute;\n  bottom: 80px;\n  right: 20px;\n  z-index: 10;\n  max-width: 400px;\n  max-height: 300px;\n  pointer-events: auto;\n}", "",{"version":3,"sources":["webpack://./src/services/component-injection-manager/ui/bottom-right-overlay.scss"],"names":[],"mappings":"AACA;EACE,kBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,gBAAA;EACA,iBAAA;EACA,oBAAA;AAAF","sourcesContent":["// src/services/component-injection-manager/ui/bottom-right-overlay.scss\n.bottomRightOverlay {\n  position: absolute;\n  bottom: 80px; // Above bottom bar\n  right: 20px;\n  z-index: 10;\n  max-width: 400px;\n  max-height: 300px;\n  pointer-events: auto;\n}\n"],"sourceRoot":""}]);
// Exports
var bottomRightOverlay = "playkit-bottomRightOverlay_q3";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/component-injection-manager/ui/side-by-side-wrapper.scss":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/component-injection-manager/ui/side-by-side-wrapper.scss ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "componentContainer": () => (/* binding */ componentContainer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "sideBySideWrapper": () => (/* binding */ sideBySideWrapper),
/* harmony export */   "videoContainer": () => (/* binding */ videoContainer)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".playkit-sideBySideWrapper_yO {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: flex;\n}\n\n.playkit-videoContainer_ur,\n.playkit-componentContainer_WQ {\n  flex: 1;\n  position: relative;\n  height: 100%;\n}\n\n.playkit-componentContainer_WQ {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #000;\n}", "",{"version":3,"sources":["webpack://./src/services/component-injection-manager/ui/side-by-side-wrapper.scss"],"names":[],"mappings":"AACA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,aAAA;AAAF;;AAGA;;EAEE,OAAA;EACA,kBAAA;EACA,YAAA;AAAF;;AAGA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,sBAAA;AAAF","sourcesContent":["// src/services/component-injection-manager/ui/side-by-side-wrapper.scss\n.sideBySideWrapper {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: flex;\n}\n\n.videoContainer,\n.componentContainer {\n  flex: 1;\n  position: relative;\n  height: 100%;\n}\n\n.componentContainer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #000;\n}\n"],"sourceRoot":""}]);
// Exports
var sideBySideWrapper = "playkit-sideBySideWrapper_yO";
var videoContainer = "playkit-videoContainer_ur";
var componentContainer = "playkit-componentContainer_WQ";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/preset-manager/ui/managed-component.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/preset-manager/ui/managed-component.scss ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fillContainer": () => (/* binding */ fillContainer)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".playkit-fill-container_Ah {\n  width: 100%;\n  height: 100%;\n}", "",{"version":3,"sources":["webpack://./src/services/preset-manager/ui/managed-component.scss"],"names":[],"mappings":"AAAA;EACI,WAAA;EACA,YAAA;AACJ","sourcesContent":[".fill-container {\n    width: 100%;\n    height: 100%;\n  }"],"sourceRoot":""}]);
// Exports
var fillContainer = "playkit-fill-container_Ah";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/side-panels-manager/ui/panel-item-wrapper/panel-item-wrapper.component.scss":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/side-panels-manager/ui/panel-item-wrapper/panel-item-wrapper.component.scss ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/toast-manager/ui/toast/toast.scss":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/toast-manager/ui/toast/toast.scss ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeButton": () => (/* binding */ closeButton),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "errorToast": () => (/* binding */ errorToast),
/* harmony export */   "iconContainer": () => (/* binding */ iconContainer),
/* harmony export */   "iconWrapper": () => (/* binding */ iconWrapper),
/* harmony export */   "infoToast": () => (/* binding */ infoToast),
/* harmony export */   "successToast": () => (/* binding */ successToast),
/* harmony export */   "text": () => (/* binding */ text),
/* harmony export */   "title": () => (/* binding */ title),
/* harmony export */   "toastBody": () => (/* binding */ toastBody),
/* harmony export */   "toastWrapper": () => (/* binding */ toastWrapper),
/* harmony export */   "warnToast": () => (/* binding */ warnToast)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".playkit-toastWrapper_Ys {\n  position: relative;\n  min-width: 120px;\n  max-width: 310px;\n  height: 100%;\n  border-radius: 4px;\n  background-color: #222222;\n  border-left-style: solid;\n  border-left-width: 2px;\n  text-align: left;\n  padding: 8px;\n}\n\n.playkit-infoToast_Xh {\n  border-left-color: var(--playkit-primary-color);\n}\n\n.playkit-successToast_g_ {\n  border-left-color: var(--playkit-success-color);\n}\n\n.playkit-warnToast_w7 {\n  border-left-color: var(--playkit-warning-color);\n}\n\n.playkit-errorToast_t6 {\n  border-left-color: var(--playkit-danger-color);\n}\n\n.playkit-closeButton_zr {\n  position: absolute;\n  background-color: transparent;\n  top: 0;\n  right: 0;\n  width: 16px;\n  height: 16px;\n  object-fit: contain;\n  background-repeat: no-repeat;\n  border: none;\n  padding: 0;\n  margin-top: 8px;\n  margin-right: 8px;\n}\n.playkit-closeButton_zr:hover {\n  cursor: pointer;\n}\n\n.playkit-title_SE {\n  font-size: 12px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.17;\n  letter-spacing: normal;\n  color: var(--playkit-tone-1-color);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding-top: 4px;\n  padding-right: 16px;\n}\n\n.playkit-toastBody_YK {\n  position: relative;\n  width: 100%;\n  padding: 0px 16px 5px 0px;\n  margin-top: 8px;\n}\n\n.playkit-iconContainer_dR {\n  position: relative;\n  height: 16px;\n  width: 16px;\n  float: left;\n  margin-right: 7px;\n}\n\n.playkit-iconWrapper_C5 {\n  height: 16px;\n  width: 16px;\n}\n\n.playkit-text_XI {\n  font-size: 14px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: var(--playkit-tone-1-color);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}", "",{"version":3,"sources":["webpack://./src/services/toast-manager/ui/toast/toast.scss","webpack://./node_modules/@playkit-js/playkit-js-ui/src/styles/exported.scss"],"names":[],"mappings":"AAEA;EACI,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,YAAA;EACA,kBAAA;EACA,yBAAA;EACA,wBAAA;EACA,sBAAA;EACA,gBAAA;EACA,YAAA;AADJ;;AAIE;EACE,+CCbY;ADYhB;;AAIE;EACE,+CCNY;ADKhB;;AAIE;EACE,+CAAA;AADJ;;AAIE;EACE,8CCTW;ADQf;;AAIE;EACE,kBAAA;EACA,6BAAA;EACA,MAAA;EACA,QAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,4BAAA;EACA,YAAA;EACA,UAAA;EACA,eAAA;EACA,iBAAA;AADJ;AAGI;EACE,eAAA;AADN;;AAKE;EACE,eAAA;EACA,mBAAA;EACA,kBAAA;EACA,oBAAA;EACA,iBAAA;EACA,sBAAA;EACA,kCC3BW;ED4BX,mBAAA;EACA,gBAAA;EACA,uBAAA;EACA,gBAAA;EACA,mBAAA;AAFJ;;AAKE;EACE,kBAAA;EACA,WAAA;EACA,yBAAA;EACA,eAAA;AAFJ;;AAKE;EACE,kBAAA;EACA,YAAA;EACA,WAAA;EACA,WAAA;EACA,iBAAA;AAFJ;;AAKE;EACE,YAAA;EACA,WAAA;AAFJ;;AAKE;EACE,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,oBAAA;EACA,mBAAA;EACA,sBAAA;EACA,kCC9DW;ED+DX,mBAAA;EACA,gBAAA;EACA,uBAAA;AAFJ","sourcesContent":["@import '~@playkit-js/playkit-js-ui';\n\n.toastWrapper {\n    position: relative;\n    min-width: 120px;\n    max-width: 310px;\n    height: 100%;\n    border-radius: 4px;\n    background-color: #222222;\n    border-left-style: solid;\n    border-left-width: 2px;\n    text-align: left;\n    padding: 8px;\n  }\n\n  .infoToast {\n    border-left-color: $primary-color;\n  }\n\n  .successToast {\n    border-left-color: $success-color;\n  }\n\n  .warnToast {\n    border-left-color: $warning-color;\n  }\n\n  .errorToast {\n    border-left-color: $danger-color;\n  }\n\n  .closeButton {\n    position: absolute;\n    background-color: transparent;\n    top: 0;\n    right: 0;\n    width: 16px;\n    height: 16px;\n    object-fit: contain;\n    background-repeat: no-repeat;\n    border: none;\n    padding: 0;\n    margin-top: 8px;\n    margin-right: 8px;\n\n    &:hover {\n      cursor: pointer;\n    }\n  }\n\n  .title {\n    font-size: 12px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.17;\n    letter-spacing: normal;\n    color: $tone-1-color;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    padding-top: 4px;\n    padding-right: 16px;\n  }\n\n  .toastBody {\n    position: relative;\n    width: 100%;\n    padding: 0px 16px 5px 0px;\n    margin-top: 8px;\n  }\n\n  .iconContainer {\n    position: relative;\n    height: 16px;\n    width: 16px;\n    float: left;\n    margin-right: 7px;\n  }\n\n  .iconWrapper {\n    height: 16px;\n    width: 16px;\n  }\n\n  .text {\n    font-size: 14px;\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: $tone-1-color;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n","// Sass variables exported using the npm package for plugins usage\n\n// Accent Colors\n$primary-color: var(--playkit-primary-color);\n$primary-darker-color: var(--playkit-primary-darker-color);\n$primary-brighter-color: var(--playkit-primary-brighter-color);\n$primary-text-contrast-color: var(--playkit-primary-text-contrast-color);\n\n$secondary-color: var(--playkit-secondary-color);\n$secondary-darker-color: var(--playkit-secondary-darker-color);\n$secondary-brighter-color: var(--playkit-secondary-brighter-color);\n$secondary-text-contrast-color: var(--playkit-secondary-text-contrast-color);\n\n// Acknowledgement Colors\n$success-color: var(--playkit-success-color);\n$success-darker-color: var(--playkit-success-darker-color);\n$success-brighter-color: var(--playkit-success-brighter-color);\n$success-text-contrast-color: var(--playkit-success-text-contrast-color);\n\n$danger-color: var(--playkit-danger-color);\n$danger-darker-color: var(--playkit-danger-darker-color);\n$danger-brighter-color: var(--playkit-danger-brighter-color);\n$danger-text-contrast-color: var(--playkit-danger-text-contrast-color);\n\n$warning-color: var(--playkit-warning-color);\n$warning-darker-color: var(--playkit-warning-darker-color);\n$warning-brighter-color: var(--playkit-warning-brighter-color);\n$warning-text-contrast-color: var(--playkit-warning-text-contrast-color);\n\n// Tone Ramp\n$tone-1-color: var(--playkit-tone-1-color);\n$tone-2-color: var(--playkit-tone-2-color);\n$tone-3-color: var(--playkit-tone-3-color);\n$tone-4-color: var(--playkit-tone-4-color);\n$tone-5-color: var(--playkit-tone-5-color);\n$tone-6-color: var(--playkit-tone-6-color);\n$tone-7-color: var(--playkit-tone-7-color);\n$tone-8-color: var(--playkit-tone-8-color);\n\n$live-color: var(--playkit-live-color);\n$player-background-color: var(--playkit-player-background-color);\n$tab-focus-color: var(--playkit-tab-focus-color);\n$tooltip-background-color: var(--playkit-tooltip-background-color);\n$tooltip-color: var(--playkit-tooltip-color);\n$ads-color: var(--playkit-ads-color);\n"],"sourceRoot":""}]);
// Exports
var toastWrapper = "playkit-toastWrapper_Ys";
var infoToast = "playkit-infoToast_Xh";
var successToast = "playkit-successToast_g_";
var warnToast = "playkit-warnToast_w7";
var errorToast = "playkit-errorToast_t6";
var closeButton = "playkit-closeButton_zr";
var title = "playkit-title_SE";
var toastBody = "playkit-toastBody_YK";
var iconContainer = "playkit-iconContainer_dR";
var iconWrapper = "playkit-iconWrapper_C5";
var text = "playkit-text_XI";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/toast-manager/ui/toasts-container/toasts-container.scss":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/toast-manager/ui/toasts-container/toasts-container.scss ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bottomLeft": () => (/* binding */ bottomLeft),
/* harmony export */   "bottomRight": () => (/* binding */ bottomRight),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "toastRow": () => (/* binding */ toastRow),
/* harmony export */   "toastsContainer": () => (/* binding */ toastsContainer),
/* harmony export */   "topLeft": () => (/* binding */ topLeft),
/* harmony export */   "topRight": () => (/* binding */ topRight)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".playkit-toastsContainer_Ev {\n  position: absolute;\n  min-width: 120px;\n  max-width: 310px;\n  display: flex;\n  flex-direction: column;\n  z-index: 2;\n}\n.playkit-toastsContainer_Ev.playkit-top-right_fC {\n  right: 0;\n  top: 0;\n}\n.playkit-toastsContainer_Ev.playkit-top-left_Pi {\n  left: 0;\n  top: 0;\n}\n.playkit-toastsContainer_Ev.playkit-top-left_Pi .playkit-toastRow_Va {\n  align-self: flex-start;\n}\n.playkit-toastsContainer_Ev.playkit-bottom-right_KT {\n  right: 0;\n  bottom: 0;\n}\n.playkit-toastsContainer_Ev.playkit-bottom-left_Dx {\n  left: 0;\n  bottom: 0;\n}\n.playkit-toastsContainer_Ev.playkit-bottom-left_Dx .playkit-toastRow_Va {\n  align-self: flex-start;\n}\n\n.playkit-toastRow_Va {\n  height: 58px;\n  min-width: 120px;\n  max-width: 310px;\n  margin-top: 8px;\n  overflow: hidden;\n  overflow-wrap: break-word;\n  text-overflow: ellipsis;\n  align-self: flex-end;\n}", "",{"version":3,"sources":["webpack://./src/services/toast-manager/ui/toasts-container/toasts-container.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,UAAA;AACJ;AAAI;EACI,QAAA;EACA,MAAA;AAER;AAAI;EACI,OAAA;EACA,MAAA;AAER;AADQ;EACI,sBAAA;AAGZ;AAAI;EACI,QAAA;EACA,SAAA;AAER;AAAI;EACI,OAAA;EACA,SAAA;AAER;AADQ;EACI,sBAAA;AAGZ;;AAEA;EACI,YAAA;EACA,gBAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;EACA,yBAAA;EACA,uBAAA;EACA,oBAAA;AACJ","sourcesContent":[".toastsContainer {\n    position: absolute;\n    min-width: 120px;\n    max-width: 310px;\n    display: flex;\n    flex-direction: column;\n    z-index: 2;\n    &.top-right {\n        right: 0;\n        top: 0;\n    }\n    &.top-left {\n        left: 0;\n        top: 0;\n        .toastRow {\n            align-self: flex-start;\n        }\n    }\n    &.bottom-right {\n        right: 0;\n        bottom: 0;\n    }\n    &.bottom-left {\n        left: 0;\n        bottom: 0;\n        .toastRow {\n            align-self: flex-start;\n        }\n    }\n}\n\n.toastRow {\n    height: 58px;\n    min-width: 120px;\n    max-width: 310px;\n    margin-top: 8px;\n    overflow: hidden;\n    overflow-wrap: break-word;\n    text-overflow: ellipsis;\n    align-self: flex-end;\n}\n"],"sourceRoot":""}]);
// Exports
var toastsContainer = "playkit-toastsContainer_Ev";
var topRight = "playkit-top-right_fC";
var topLeft = "playkit-top-left_Pi";
var toastRow = "playkit-toastRow_Va";
var bottomRight = "playkit-bottom-right_KT";
var bottomLeft = "playkit-bottom-left_Dx";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/upper-bar-manager/ui/displayed-bar/displayed-bar.component.scss":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/upper-bar-manager/ui/displayed-bar/displayed-bar.component.scss ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, ".playkit-right-upper-bar-wrapper-container_Vm {\n  direction: ltr;\n  display: flex;\n  align-items: center;\n}", "",{"version":3,"sources":["webpack://./src/services/upper-bar-manager/ui/displayed-bar/displayed-bar.component.scss"],"names":[],"mappings":"AAAA;EACE,cAAA;EACA,aAAA;EACA,mBAAA;AACF","sourcesContent":[".right-upper-bar-wrapper-container {\n  direction: ltr;\n  display: flex;\n  align-items: center;\n}"],"sourceRoot":""}]);
// Exports
var rightUpperBarWrapperContainer = "playkit-right-upper-bar-wrapper-container_Vm";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/upper-bar-manager/ui/dropdown-bar-item/dropdown-bar-item.scss":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/upper-bar-manager/ui/dropdown-bar-item/dropdown-bar-item.scss ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "comparisonText": () => (/* binding */ comparisonText),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "disabled": () => (/* binding */ disabled),
/* harmony export */   "dropdownItem": () => (/* binding */ dropdownItem),
/* harmony export */   "dropdownItemDescription": () => (/* binding */ dropdownItemDescription),
/* harmony export */   "icon": () => (/* binding */ icon),
/* harmony export */   "moreItemTooltip": () => (/* binding */ moreItemTooltip),
/* harmony export */   "trimText": () => (/* binding */ trimText)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".playkit-dropdown-item_kw {\n  border-radius: 4px;\n  padding: 4px 12px 4px 15px;\n  display: flex;\n  margin: 4px 0;\n  cursor: pointer;\n  align-items: center;\n}\n.playkit-dropdown-item_kw.playkit-disabled_Zw {\n  pointer-events: none !important;\n  color: #666;\n}\n.playkit-dropdown-item_kw .playkit-icon_tv {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.playkit-dropdown-item_kw .playkit-icon_tv i {\n  display: inline-block;\n}\n.playkit-dropdown-item_kw:hover {\n  background-color: var(--playkit-tone-6-color);\n}\n.playkit-dropdown-item_kw .playkit-dropdown-item-description_Al {\n  flex: 1;\n  font-size: 14px;\n  font-weight: 700;\n  padding-left: 11px;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.playkit-dropdown-item_kw .playkit-dropdown-item-description_Al.playkit-trim-text_Kj {\n  text-overflow: ellipsis;\n}\n.playkit-dropdown-item_kw .playkit-comparison-text_OS {\n  position: absolute;\n  font-size: 14px;\n  font-weight: 700;\n  left: 0;\n  padding: 0;\n}\n\n.playkit-more-item-tooltip_y7 {\n  z-index: 1;\n}", "",{"version":3,"sources":["webpack://./src/services/upper-bar-manager/ui/dropdown-bar-item/dropdown-bar-item.scss","webpack://./node_modules/@playkit-js/playkit-js-ui/src/styles/exported.scss"],"names":[],"mappings":"AAEA;EACE,kBAAA;EACA,0BAAA;EACA,aAAA;EACA,aAAA;EACA,eAAA;EACA,mBAAA;AADF;AAGE;EACE,+BAAA;EACA,WAAA;AADJ;AAIE;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAFJ;AAII;EACE,qBAAA;AAFN;AAME;EACE,6CCOW;ADXf;AAOE;EACE,OAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;AALJ;AAOI;EACE,uBAAA;AALN;AASE;EACE,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,OAAA;EACA,UAAA;AAPJ;;AAWA;EACE,UAAA;AARF","sourcesContent":["@import '~@playkit-js/playkit-js-ui';\n\n.dropdown-item {\n  border-radius: 4px;\n  padding: 4px 12px 4px 15px;\n  display: flex;\n  margin: 4px 0;\n  cursor: pointer;\n  align-items: center;\n\n  &.disabled {\n    pointer-events: none !important;\n    color: #666;\n  }\n\n  .icon {\n    width: 24px;\n    height: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    i {\n      display: inline-block;\n    }\n  }\n\n  &:hover {\n    background-color: $tone-6-color;\n  }\n\n  .dropdown-item-description {\n    flex: 1;\n    font-size: 14px;\n    font-weight: 700;\n    padding-left: 11px;\n    overflow: hidden;\n    white-space: nowrap;\n\n    &.trim-text {\n      text-overflow: ellipsis;\n    }\n  }\n\n  .comparison-text {\n    position: absolute;\n    font-size: 14px;\n    font-weight: 700;\n    left: 0;\n    padding: 0;\n  }\n}\n\n.more-item-tooltip {\n  z-index: 1;\n}\n","// Sass variables exported using the npm package for plugins usage\n\n// Accent Colors\n$primary-color: var(--playkit-primary-color);\n$primary-darker-color: var(--playkit-primary-darker-color);\n$primary-brighter-color: var(--playkit-primary-brighter-color);\n$primary-text-contrast-color: var(--playkit-primary-text-contrast-color);\n\n$secondary-color: var(--playkit-secondary-color);\n$secondary-darker-color: var(--playkit-secondary-darker-color);\n$secondary-brighter-color: var(--playkit-secondary-brighter-color);\n$secondary-text-contrast-color: var(--playkit-secondary-text-contrast-color);\n\n// Acknowledgement Colors\n$success-color: var(--playkit-success-color);\n$success-darker-color: var(--playkit-success-darker-color);\n$success-brighter-color: var(--playkit-success-brighter-color);\n$success-text-contrast-color: var(--playkit-success-text-contrast-color);\n\n$danger-color: var(--playkit-danger-color);\n$danger-darker-color: var(--playkit-danger-darker-color);\n$danger-brighter-color: var(--playkit-danger-brighter-color);\n$danger-text-contrast-color: var(--playkit-danger-text-contrast-color);\n\n$warning-color: var(--playkit-warning-color);\n$warning-darker-color: var(--playkit-warning-darker-color);\n$warning-brighter-color: var(--playkit-warning-brighter-color);\n$warning-text-contrast-color: var(--playkit-warning-text-contrast-color);\n\n// Tone Ramp\n$tone-1-color: var(--playkit-tone-1-color);\n$tone-2-color: var(--playkit-tone-2-color);\n$tone-3-color: var(--playkit-tone-3-color);\n$tone-4-color: var(--playkit-tone-4-color);\n$tone-5-color: var(--playkit-tone-5-color);\n$tone-6-color: var(--playkit-tone-6-color);\n$tone-7-color: var(--playkit-tone-7-color);\n$tone-8-color: var(--playkit-tone-8-color);\n\n$live-color: var(--playkit-live-color);\n$player-background-color: var(--playkit-player-background-color);\n$tab-focus-color: var(--playkit-tab-focus-color);\n$tooltip-background-color: var(--playkit-tooltip-background-color);\n$tooltip-color: var(--playkit-tooltip-color);\n$ads-color: var(--playkit-ads-color);\n"],"sourceRoot":""}]);
// Exports
var dropdownItem = "playkit-dropdown-item_kw";
var disabled = "playkit-disabled_Zw";
var icon = "playkit-icon_tv";
var dropdownItemDescription = "playkit-dropdown-item-description_Al";
var trimText = "playkit-trim-text_Kj";
var comparisonText = "playkit-comparison-text_OS";
var moreItemTooltip = "playkit-more-item-tooltip_y7";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/upper-bar-manager/ui/dropdown-bar/dropdown-bar.component.scss":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/upper-bar-manager/ui/dropdown-bar/dropdown-bar.component.scss ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "moreDropdown": () => (/* binding */ moreDropdown)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".playkit-more-dropdown_SJ {\n  position: absolute;\n  padding: 8px 4px;\n  width: 200px;\n  background-color: var(--playkit-tone-7-color);\n  border-radius: 4px;\n  top: 44px;\n  right: 0;\n  overflow: hidden;\n}", "",{"version":3,"sources":["webpack://./src/services/upper-bar-manager/ui/dropdown-bar/dropdown-bar.component.scss","webpack://./node_modules/@playkit-js/playkit-js-ui/src/styles/exported.scss"],"names":[],"mappings":"AAEA;EACE,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,6CC8Ba;ED7Bb,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gBAAA;AADF","sourcesContent":["@import '~@playkit-js/playkit-js-ui';\n\n.more-dropdown {\n  position: absolute;\n  padding: 8px 4px;\n  width: 200px;  // replace to min-width and grow with text\n  background-color: $tone-7-color;\n  border-radius: 4px;\n  top: 44px;\n  right: 0;\n  overflow: hidden;\n}","// Sass variables exported using the npm package for plugins usage\n\n// Accent Colors\n$primary-color: var(--playkit-primary-color);\n$primary-darker-color: var(--playkit-primary-darker-color);\n$primary-brighter-color: var(--playkit-primary-brighter-color);\n$primary-text-contrast-color: var(--playkit-primary-text-contrast-color);\n\n$secondary-color: var(--playkit-secondary-color);\n$secondary-darker-color: var(--playkit-secondary-darker-color);\n$secondary-brighter-color: var(--playkit-secondary-brighter-color);\n$secondary-text-contrast-color: var(--playkit-secondary-text-contrast-color);\n\n// Acknowledgement Colors\n$success-color: var(--playkit-success-color);\n$success-darker-color: var(--playkit-success-darker-color);\n$success-brighter-color: var(--playkit-success-brighter-color);\n$success-text-contrast-color: var(--playkit-success-text-contrast-color);\n\n$danger-color: var(--playkit-danger-color);\n$danger-darker-color: var(--playkit-danger-darker-color);\n$danger-brighter-color: var(--playkit-danger-brighter-color);\n$danger-text-contrast-color: var(--playkit-danger-text-contrast-color);\n\n$warning-color: var(--playkit-warning-color);\n$warning-darker-color: var(--playkit-warning-darker-color);\n$warning-brighter-color: var(--playkit-warning-brighter-color);\n$warning-text-contrast-color: var(--playkit-warning-text-contrast-color);\n\n// Tone Ramp\n$tone-1-color: var(--playkit-tone-1-color);\n$tone-2-color: var(--playkit-tone-2-color);\n$tone-3-color: var(--playkit-tone-3-color);\n$tone-4-color: var(--playkit-tone-4-color);\n$tone-5-color: var(--playkit-tone-5-color);\n$tone-6-color: var(--playkit-tone-6-color);\n$tone-7-color: var(--playkit-tone-7-color);\n$tone-8-color: var(--playkit-tone-8-color);\n\n$live-color: var(--playkit-live-color);\n$player-background-color: var(--playkit-player-background-color);\n$tab-focus-color: var(--playkit-tab-focus-color);\n$tooltip-background-color: var(--playkit-tooltip-background-color);\n$tooltip-color: var(--playkit-tooltip-color);\n$ads-color: var(--playkit-ads-color);\n"],"sourceRoot":""}]);
// Exports
var moreDropdown = "playkit-more-dropdown_SJ";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/upper-bar-manager/ui/more-icon/more-icon.component.scss":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/upper-bar-manager/ui/more-icon/more-icon.component.scss ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";


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

"use strict";


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

/***/ "./node_modules/preact-render-to-string/dist/index.module.js":
/*!*******************************************************************!*\
  !*** ./node_modules/preact-render-to-string/dist/index.module.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "render": () => (/* binding */ F),
/* harmony export */   "renderToStaticMarkup": () => (/* binding */ M),
/* harmony export */   "renderToString": () => (/* binding */ D),
/* harmony export */   "renderToStringAsync": () => (/* binding */ S)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
var r=/[\s\n\\/='"\0<>]/,o=/^(xlink|xmlns|xml)([A-Z])/,i=/^accessK|^auto[A-Z]|^cell|^ch|^col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|popoverT|readO|rowS|src[A-Z]|tabI|useM|item[A-Z]/,a=/^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/,c=new Set(["draggable","spellcheck"]),s=/["&<]/;function l(e){if(0===e.length||!1===s.test(e))return e;for(var t=0,n=0,r="",o="";n<e.length;n++){switch(e.charCodeAt(n)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;default:continue}n!==t&&(r+=e.slice(t,n)),r+=o,t=n+1}return n!==t&&(r+=e.slice(t,n)),r}var u={},f=new Set(["animation-iteration-count","border-image-outset","border-image-slice","border-image-width","box-flex","box-flex-group","box-ordinal-group","column-count","fill-opacity","flex","flex-grow","flex-negative","flex-order","flex-positive","flex-shrink","flood-opacity","font-weight","grid-column","grid-row","line-clamp","line-height","opacity","order","orphans","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","widows","z-index","zoom"]),p=/[A-Z]/g;function h(e){var t="";for(var n in e){var r=e[n];if(null!=r&&""!==r){var o="-"==n[0]?n:u[n]||(u[n]=n.replace(p,"-$&").toLowerCase()),i=";";"number"!=typeof r||o.startsWith("--")||f.has(o)||(i="px;"),t=t+o+":"+r+i}}return t||void 0}function d(){this.__d=!0}function _(e,t){return{__v:e,context:t,props:e.props,setState:d,forceUpdate:d,__d:!0,__h:new Array(0)}}function v(e,t,n){if(!e.s){if(n instanceof m){if(!n.s)return void(n.o=v.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(v.bind(null,e,t),v.bind(null,e,2));e.s=t,e.v=n;const r=e.o;r&&r(e)}}var m=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(t,n){var r=new e,o=this.s;if(o){var i=1&o?t:n;if(i){try{v(r,1,i(this.v))}catch(e){v(r,2,e)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?v(r,1,t?t(o):o):n?v(r,1,n(o)):v(r,2,o)}catch(e){v(r,2,e)}},r},e}();function y(e){return e instanceof m&&1&e.s}function g(e,t,n){for(var r;;){var o=e();if(y(o)&&(o=o.v),!o)return i;if(o.then){r=0;break}var i=n();if(i&&i.then){if(!y(i)){r=1;break}i=i.s}if(t){var a=t();if(a&&a.then&&!y(a)){r=2;break}}}var c=new m,s=v.bind(null,c,2);return(0===r?o.then(u):1===r?i.then(l):a.then(f)).then(void 0,s),c;function l(r){i=r;do{if(t&&(a=t())&&a.then&&!y(a))return void a.then(f).then(void 0,s);if(!(o=e())||y(o)&&!o.v)return void v(c,1,i);if(o.then)return void o.then(u).then(void 0,s);y(i=n())&&(i=i.v)}while(!i||!i.then);i.then(l).then(void 0,s)}function u(e){e?(i=n())&&i.then?i.then(l).then(void 0,s):l(i):v(c,1,i)}function f(){(o=e())?o.then?o.then(u).then(void 0,s):u(o):v(c,1,i)}}function b(e,t){try{var n=e()}catch(e){return t(!0,e)}return n&&n.then?n.then(t.bind(null,!1),t.bind(null,!0)):t(!1,n)}var k,w,x,C,S=function(r,o){try{var i=preact__WEBPACK_IMPORTED_MODULE_0__.options.__s;preact__WEBPACK_IMPORTED_MODULE_0__.options.__s=!0,k=preact__WEBPACK_IMPORTED_MODULE_0__.options.__b,w=preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed,x=preact__WEBPACK_IMPORTED_MODULE_0__.options.__r,C=preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;var a=(0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,null);return a.__k=[r],Promise.resolve(b(function(){return Promise.resolve(U(r,o||A,!1,void 0,a,!0,void 0)).then(function(e){var t,n=function(){if(E(e)){var n=function(){var e=o.join(j);return t=1,e},r=0,o=e,i=g(function(){return!!o.some(function(e){return e&&"function"==typeof e.then})&&r++<25},void 0,function(){return Promise.resolve(Promise.all(o)).then(function(e){o=e.flat()})});return i&&i.then?i.then(n):n()}}();return n&&n.then?n.then(function(n){return t?n:e}):t?n:e})},function(t,n){if(preact__WEBPACK_IMPORTED_MODULE_0__.options.__c&&preact__WEBPACK_IMPORTED_MODULE_0__.options.__c(r,L),preact__WEBPACK_IMPORTED_MODULE_0__.options.__s=i,L.length=0,t)throw n;return n}))}catch(e){return Promise.reject(e)}},A={},L=[],E=Array.isArray,T=Object.assign,j="";function D(r,o,i){var a=preact__WEBPACK_IMPORTED_MODULE_0__.options.__s;preact__WEBPACK_IMPORTED_MODULE_0__.options.__s=!0,k=preact__WEBPACK_IMPORTED_MODULE_0__.options.__b,w=preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed,x=preact__WEBPACK_IMPORTED_MODULE_0__.options.__r,C=preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;var c=(0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,null);c.__k=[r];try{var s=U(r,o||A,!1,void 0,c,!1,i);return E(s)?s.join(j):s}catch(e){if(e.then)throw new Error('Use "renderToStringAsync" for suspenseful rendering.');throw e}finally{preact__WEBPACK_IMPORTED_MODULE_0__.options.__c&&preact__WEBPACK_IMPORTED_MODULE_0__.options.__c(r,L),preact__WEBPACK_IMPORTED_MODULE_0__.options.__s=a,L.length=0}}function P(e,t){var n,r=e.type,o=!0;return e.__c?(o=!1,(n=e.__c).state=n.__s):n=new r(e.props,t),e.__c=n,n.__v=e,n.props=e.props,n.context=t,n.__d=!0,null==n.state&&(n.state=A),null==n.__s&&(n.__s=n.state),r.getDerivedStateFromProps?n.state=T({},n.state,r.getDerivedStateFromProps(n.props,n.state)):o&&n.componentWillMount?(n.componentWillMount(),n.state=n.__s!==n.state?n.__s:n.state):!o&&n.componentWillUpdate&&n.componentWillUpdate(),x&&x(e),n.render(n.props,n.state,t)}function U(t,s,u,f,p,d,v){if(null==t||!0===t||!1===t||t===j)return j;var m=typeof t;if("object"!=m)return"function"==m?j:"string"==m?l(t):t+j;if(E(t)){var y,g=j;p.__k=t;for(var b=0;b<t.length;b++){var S=t[b];if(null!=S&&"boolean"!=typeof S){var L,D=U(S,s,u,f,p,d,v);"string"==typeof D?g+=D:(y||(y=[]),g&&y.push(g),g=j,E(D)?(L=y).push.apply(L,D):y.push(D))}}return y?(g&&y.push(g),y):g}if(void 0!==t.constructor)return j;t.__=p,k&&k(t);var F=t.type,M=t.props;if("function"==typeof F){var W,$,z,H=s;if(F===preact__WEBPACK_IMPORTED_MODULE_0__.Fragment){if("tpl"in M){for(var N=j,q=0;q<M.tpl.length;q++)if(N+=M.tpl[q],M.exprs&&q<M.exprs.length){var B=M.exprs[q];if(null==B)continue;"object"!=typeof B||void 0!==B.constructor&&!E(B)?N+=B:N+=U(B,s,u,f,t,d,v)}return N}if("UNSTABLE_comment"in M)return"\x3c!--"+l(M.UNSTABLE_comment)+"--\x3e";$=M.children}else{if(null!=(W=F.contextType)){var I=s[W.__c];H=I?I.props.value:W.__}var O=F.prototype&&"function"==typeof F.prototype.render;if(O)$=P(t,H),z=t.__c;else{t.__c=z=_(t,H);for(var R=0;z.__d&&R++<25;)z.__d=!1,x&&x(t),$=F.call(z,M,H);z.__d=!0}if(null!=z.getChildContext&&(s=T({},s,z.getChildContext())),O&&preact__WEBPACK_IMPORTED_MODULE_0__.options.errorBoundaries&&(F.getDerivedStateFromError||z.componentDidCatch)){$=null!=$&&$.type===preact__WEBPACK_IMPORTED_MODULE_0__.Fragment&&null==$.key&&null==$.props.tpl?$.props.children:$;try{return U($,s,u,f,t,d,v)}catch(e){return F.getDerivedStateFromError&&(z.__s=F.getDerivedStateFromError(e)),z.componentDidCatch&&z.componentDidCatch(e,A),z.__d?($=P(t,s),null!=(z=t.__c).getChildContext&&(s=T({},s,z.getChildContext())),U($=null!=$&&$.type===preact__WEBPACK_IMPORTED_MODULE_0__.Fragment&&null==$.key&&null==$.props.tpl?$.props.children:$,s,u,f,t,d,v)):j}finally{w&&w(t),t.__=null,C&&C(t)}}}$=null!=$&&$.type===preact__WEBPACK_IMPORTED_MODULE_0__.Fragment&&null==$.key&&null==$.props.tpl?$.props.children:$;try{var V=U($,s,u,f,t,d,v);return w&&w(t),t.__=null,preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount&&preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount(t),V}catch(n){if(!d&&v&&v.onError){var K=v.onError(n,t,function(e){return U(e,s,u,f,t,d,v)});if(void 0!==K)return K;var G=preact__WEBPACK_IMPORTED_MODULE_0__.options.__e;return G&&G(n,t),j}if(!d)throw n;if(!n||"function"!=typeof n.then)throw n;return n.then(function e(){try{return U($,s,u,f,t,d,v)}catch(n){if(!n||"function"!=typeof n.then)throw n;return n.then(function(){return U($,s,u,f,t,d,v)},e)}})}}var J,Q="<"+F,X=j;for(var Y in M){var ee=M[Y];if("function"!=typeof ee||"class"===Y||"className"===Y){switch(Y){case"children":J=ee;continue;case"key":case"ref":case"__self":case"__source":continue;case"htmlFor":if("for"in M)continue;Y="for";break;case"className":if("class"in M)continue;Y="class";break;case"defaultChecked":Y="checked";break;case"defaultSelected":Y="selected";break;case"defaultValue":case"value":switch(Y="value",F){case"textarea":J=ee;continue;case"select":f=ee;continue;case"option":f!=ee||"selected"in M||(Q+=" selected")}break;case"dangerouslySetInnerHTML":X=ee&&ee.__html;continue;case"style":"object"==typeof ee&&(ee=h(ee));break;case"acceptCharset":Y="accept-charset";break;case"httpEquiv":Y="http-equiv";break;default:if(o.test(Y))Y=Y.replace(o,"$1:$2").toLowerCase();else{if(r.test(Y))continue;"-"!==Y[4]&&!c.has(Y)||null==ee?u?a.test(Y)&&(Y="panose1"===Y?"panose-1":Y.replace(/([A-Z])/g,"-$1").toLowerCase()):i.test(Y)&&(Y=Y.toLowerCase()):ee+=j}}null!=ee&&!1!==ee&&(Q=!0===ee||ee===j?Q+" "+Y:Q+" "+Y+'="'+("string"==typeof ee?l(ee):ee+j)+'"')}}if(r.test(F))throw new Error(F+" is not a valid HTML tag name in "+Q+">");if(X||("string"==typeof J?X=l(J):null!=J&&!1!==J&&!0!==J&&(X=U(J,s,"svg"===F||"foreignObject"!==F&&u,f,t,d,v))),w&&w(t),t.__=null,C&&C(t),!X&&Z.has(F))return Q+"/>";var te="</"+F+">",ne=Q+">";return E(X)?[ne].concat(X,[te]):"string"!=typeof X?[ne,X,te]:ne+X+te}var Z=new Set(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]),F=D,M=D;/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (D);
//# sourceMappingURL=index.module.js.map


/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icon.scss":
/*!*************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icon.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "iconWrapper": () => (/* reexport safe */ _css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_icon_scss__WEBPACK_IMPORTED_MODULE_5__.iconWrapper),
/* harmony export */   "large": () => (/* reexport safe */ _css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_icon_scss__WEBPACK_IMPORTED_MODULE_5__.large),
/* harmony export */   "medium": () => (/* reexport safe */ _css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_icon_scss__WEBPACK_IMPORTED_MODULE_5__.medium),
/* harmony export */   "small": () => (/* reexport safe */ _css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_icon_scss__WEBPACK_IMPORTED_MODULE_5__.small)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_icon_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !!../../../../css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./icon.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/@playkit-js/common/dist/icon/icon.scss");

      
      
      
      
      
      
      
      
      

var options = {"attributes":{"id":"@playkit-js/ui-managers"}};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2___default());
options.insert = function (styleElement) {
    if (window.kalturaGlobalConfig && typeof window.kalturaGlobalConfig.stylesNonce === 'string') {
        styleElement.setAttribute('nonce', window.kalturaGlobalConfig.stylesNonce);
    }
    document.head.appendChild(styleElement);
};
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_icon_scss__WEBPACK_IMPORTED_MODULE_5__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_icon_scss__WEBPACK_IMPORTED_MODULE_5__["default"] && _css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_icon_scss__WEBPACK_IMPORTED_MODULE_5__["default"].locals ? _css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_icon_scss__WEBPACK_IMPORTED_MODULE_5__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/icon/icons/spinner.scss":
/*!**********************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/icon/icons/spinner.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "spinner": () => (/* reexport safe */ _css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_spinner_scss__WEBPACK_IMPORTED_MODULE_5__.spinner),
/* harmony export */   "spinnerAnimation": () => (/* reexport safe */ _css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_spinner_scss__WEBPACK_IMPORTED_MODULE_5__.spinnerAnimation)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_spinner_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !!../../../../../css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./spinner.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/@playkit-js/common/dist/icon/icons/spinner.scss");

      
      
      
      
      
      
      
      
      

var options = {"attributes":{"id":"@playkit-js/ui-managers"}};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2___default());
options.insert = function (styleElement) {
    if (window.kalturaGlobalConfig && typeof window.kalturaGlobalConfig.stylesNonce === 'string') {
        styleElement.setAttribute('nonce', window.kalturaGlobalConfig.stylesNonce);
    }
    document.head.appendChild(styleElement);
};
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_spinner_scss__WEBPACK_IMPORTED_MODULE_5__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_spinner_scss__WEBPACK_IMPORTED_MODULE_5__["default"] && _css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_spinner_scss__WEBPACK_IMPORTED_MODULE_5__["default"].locals ? _css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_spinner_scss__WEBPACK_IMPORTED_MODULE_5__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/@playkit-js/common/dist/ui-common/injected-component/injected-component.scss":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@playkit-js/common/dist/ui-common/injected-component/injected-component.scss ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fillContainer": () => (/* reexport safe */ _css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_injected_component_scss__WEBPACK_IMPORTED_MODULE_5__.fillContainer)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_injected_component_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !!../../../../../css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./injected-component.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/@playkit-js/common/dist/ui-common/injected-component/injected-component.scss");

      
      
      
      
      
      
      
      
      

var options = {"attributes":{"id":"@playkit-js/ui-managers"}};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2___default());
options.insert = function (styleElement) {
    if (window.kalturaGlobalConfig && typeof window.kalturaGlobalConfig.stylesNonce === 'string') {
        styleElement.setAttribute('nonce', window.kalturaGlobalConfig.stylesNonce);
    }
    document.head.appendChild(styleElement);
};
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_injected_component_scss__WEBPACK_IMPORTED_MODULE_5__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_injected_component_scss__WEBPACK_IMPORTED_MODULE_5__["default"] && _css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_injected_component_scss__WEBPACK_IMPORTED_MODULE_5__["default"].locals ? _css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_injected_component_scss__WEBPACK_IMPORTED_MODULE_5__["default"].locals : undefined);


/***/ }),

/***/ "./src/services/banner-manager/ui/banner-container/banner-container.scss":
/*!*******************************************************************************!*\
  !*** ./src/services/banner-manager/ui/banner-container/banner-container.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bannerContainer": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_banner_container_scss__WEBPACK_IMPORTED_MODULE_5__.bannerContainer),
/* harmony export */   "bannerContainerRoot": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_banner_container_scss__WEBPACK_IMPORTED_MODULE_5__.bannerContainerRoot),
/* harmony export */   "closeButton": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_banner_container_scss__WEBPACK_IMPORTED_MODULE_5__.closeButton),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "large": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_banner_container_scss__WEBPACK_IMPORTED_MODULE_5__.large),
/* harmony export */   "small": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_banner_container_scss__WEBPACK_IMPORTED_MODULE_5__.small)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_banner_container_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./banner-container.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/banner-manager/ui/banner-container/banner-container.scss");

      
      
      
      
      
      
      
      
      

var options = {"attributes":{"id":"@playkit-js/ui-managers"}};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2___default());
options.insert = function (styleElement) {
    if (window.kalturaGlobalConfig && typeof window.kalturaGlobalConfig.stylesNonce === 'string') {
        styleElement.setAttribute('nonce', window.kalturaGlobalConfig.stylesNonce);
    }
    document.head.appendChild(styleElement);
};
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_banner_container_scss__WEBPACK_IMPORTED_MODULE_5__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_banner_container_scss__WEBPACK_IMPORTED_MODULE_5__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_banner_container_scss__WEBPACK_IMPORTED_MODULE_5__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_banner_container_scss__WEBPACK_IMPORTED_MODULE_5__["default"].locals : undefined);


/***/ }),

/***/ "./src/services/banner-manager/ui/banner/banner.scss":
/*!***********************************************************!*\
  !*** ./src/services/banner-manager/ui/banner/banner.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bannerBody": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_banner_scss__WEBPACK_IMPORTED_MODULE_5__.bannerBody),
/* harmony export */   "bannerWrapper": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_banner_scss__WEBPACK_IMPORTED_MODULE_5__.bannerWrapper),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "defaultBannerRoot": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_banner_scss__WEBPACK_IMPORTED_MODULE_5__.defaultBannerRoot),
/* harmony export */   "iconContainer": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_banner_scss__WEBPACK_IMPORTED_MODULE_5__.iconContainer),
/* harmony export */   "iconImage": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_banner_scss__WEBPACK_IMPORTED_MODULE_5__.iconImage),
/* harmony export */   "iconWrapper": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_banner_scss__WEBPACK_IMPORTED_MODULE_5__.iconWrapper),
/* harmony export */   "large": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_banner_scss__WEBPACK_IMPORTED_MODULE_5__.large),
/* harmony export */   "small": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_banner_scss__WEBPACK_IMPORTED_MODULE_5__.small),
/* harmony export */   "text": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_banner_scss__WEBPACK_IMPORTED_MODULE_5__.text),
/* harmony export */   "title": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_banner_scss__WEBPACK_IMPORTED_MODULE_5__.title)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_banner_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./banner.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/banner-manager/ui/banner/banner.scss");

      
      
      
      
      
      
      
      
      

var options = {"attributes":{"id":"@playkit-js/ui-managers"}};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2___default());
options.insert = function (styleElement) {
    if (window.kalturaGlobalConfig && typeof window.kalturaGlobalConfig.stylesNonce === 'string') {
        styleElement.setAttribute('nonce', window.kalturaGlobalConfig.stylesNonce);
    }
    document.head.appendChild(styleElement);
};
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_banner_scss__WEBPACK_IMPORTED_MODULE_5__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_banner_scss__WEBPACK_IMPORTED_MODULE_5__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_banner_scss__WEBPACK_IMPORTED_MODULE_5__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_banner_scss__WEBPACK_IMPORTED_MODULE_5__["default"].locals : undefined);


/***/ }),

/***/ "./src/services/component-injection-manager/ui/bottom-right-overlay.scss":
/*!*******************************************************************************!*\
  !*** ./src/services/component-injection-manager/ui/bottom-right-overlay.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bottomRightOverlay": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_bottom_right_overlay_scss__WEBPACK_IMPORTED_MODULE_5__.bottomRightOverlay),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_bottom_right_overlay_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./bottom-right-overlay.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/component-injection-manager/ui/bottom-right-overlay.scss");

      
      
      
      
      
      
      
      
      

var options = {"attributes":{"id":"@playkit-js/ui-managers"}};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2___default());
options.insert = function (styleElement) {
    if (window.kalturaGlobalConfig && typeof window.kalturaGlobalConfig.stylesNonce === 'string') {
        styleElement.setAttribute('nonce', window.kalturaGlobalConfig.stylesNonce);
    }
    document.head.appendChild(styleElement);
};
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_bottom_right_overlay_scss__WEBPACK_IMPORTED_MODULE_5__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_bottom_right_overlay_scss__WEBPACK_IMPORTED_MODULE_5__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_bottom_right_overlay_scss__WEBPACK_IMPORTED_MODULE_5__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_bottom_right_overlay_scss__WEBPACK_IMPORTED_MODULE_5__["default"].locals : undefined);


/***/ }),

/***/ "./src/services/component-injection-manager/ui/side-by-side-wrapper.scss":
/*!*******************************************************************************!*\
  !*** ./src/services/component-injection-manager/ui/side-by-side-wrapper.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "componentContainer": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_side_by_side_wrapper_scss__WEBPACK_IMPORTED_MODULE_5__.componentContainer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "sideBySideWrapper": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_side_by_side_wrapper_scss__WEBPACK_IMPORTED_MODULE_5__.sideBySideWrapper),
/* harmony export */   "videoContainer": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_side_by_side_wrapper_scss__WEBPACK_IMPORTED_MODULE_5__.videoContainer)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_side_by_side_wrapper_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./side-by-side-wrapper.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/component-injection-manager/ui/side-by-side-wrapper.scss");

      
      
      
      
      
      
      
      
      

var options = {"attributes":{"id":"@playkit-js/ui-managers"}};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2___default());
options.insert = function (styleElement) {
    if (window.kalturaGlobalConfig && typeof window.kalturaGlobalConfig.stylesNonce === 'string') {
        styleElement.setAttribute('nonce', window.kalturaGlobalConfig.stylesNonce);
    }
    document.head.appendChild(styleElement);
};
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_side_by_side_wrapper_scss__WEBPACK_IMPORTED_MODULE_5__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_side_by_side_wrapper_scss__WEBPACK_IMPORTED_MODULE_5__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_side_by_side_wrapper_scss__WEBPACK_IMPORTED_MODULE_5__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_side_by_side_wrapper_scss__WEBPACK_IMPORTED_MODULE_5__["default"].locals : undefined);


/***/ }),

/***/ "./src/services/preset-manager/ui/managed-component.scss":
/*!***************************************************************!*\
  !*** ./src/services/preset-manager/ui/managed-component.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fillContainer": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_managed_component_scss__WEBPACK_IMPORTED_MODULE_5__.fillContainer)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_managed_component_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./managed-component.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/preset-manager/ui/managed-component.scss");

      
      
      
      
      
      
      
      
      

var options = {"attributes":{"id":"@playkit-js/ui-managers"}};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2___default());
options.insert = function (styleElement) {
    if (window.kalturaGlobalConfig && typeof window.kalturaGlobalConfig.stylesNonce === 'string') {
        styleElement.setAttribute('nonce', window.kalturaGlobalConfig.stylesNonce);
    }
    document.head.appendChild(styleElement);
};
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_managed_component_scss__WEBPACK_IMPORTED_MODULE_5__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_managed_component_scss__WEBPACK_IMPORTED_MODULE_5__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_managed_component_scss__WEBPACK_IMPORTED_MODULE_5__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_managed_component_scss__WEBPACK_IMPORTED_MODULE_5__["default"].locals : undefined);


/***/ }),

/***/ "./src/services/side-panels-manager/ui/panel-item-wrapper/panel-item-wrapper.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/services/side-panels-manager/ui/panel-item-wrapper/panel-item-wrapper.component.scss ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activeState": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_panel_item_wrapper_component_scss__WEBPACK_IMPORTED_MODULE_5__.activeState),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "sidePanelWrapper": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_panel_item_wrapper_component_scss__WEBPACK_IMPORTED_MODULE_5__.sidePanelWrapper)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_panel_item_wrapper_component_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./panel-item-wrapper.component.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/side-panels-manager/ui/panel-item-wrapper/panel-item-wrapper.component.scss");

      
      
      
      
      
      
      
      
      

var options = {"attributes":{"id":"@playkit-js/ui-managers"}};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2___default());
options.insert = function (styleElement) {
    if (window.kalturaGlobalConfig && typeof window.kalturaGlobalConfig.stylesNonce === 'string') {
        styleElement.setAttribute('nonce', window.kalturaGlobalConfig.stylesNonce);
    }
    document.head.appendChild(styleElement);
};
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_panel_item_wrapper_component_scss__WEBPACK_IMPORTED_MODULE_5__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_panel_item_wrapper_component_scss__WEBPACK_IMPORTED_MODULE_5__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_panel_item_wrapper_component_scss__WEBPACK_IMPORTED_MODULE_5__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_panel_item_wrapper_component_scss__WEBPACK_IMPORTED_MODULE_5__["default"].locals : undefined);


/***/ }),

/***/ "./src/services/toast-manager/ui/toast/toast.scss":
/*!********************************************************!*\
  !*** ./src/services/toast-manager/ui/toast/toast.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeButton": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_toast_scss__WEBPACK_IMPORTED_MODULE_5__.closeButton),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "errorToast": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_toast_scss__WEBPACK_IMPORTED_MODULE_5__.errorToast),
/* harmony export */   "iconContainer": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_toast_scss__WEBPACK_IMPORTED_MODULE_5__.iconContainer),
/* harmony export */   "iconWrapper": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_toast_scss__WEBPACK_IMPORTED_MODULE_5__.iconWrapper),
/* harmony export */   "infoToast": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_toast_scss__WEBPACK_IMPORTED_MODULE_5__.infoToast),
/* harmony export */   "successToast": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_toast_scss__WEBPACK_IMPORTED_MODULE_5__.successToast),
/* harmony export */   "text": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_toast_scss__WEBPACK_IMPORTED_MODULE_5__.text),
/* harmony export */   "title": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_toast_scss__WEBPACK_IMPORTED_MODULE_5__.title),
/* harmony export */   "toastBody": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_toast_scss__WEBPACK_IMPORTED_MODULE_5__.toastBody),
/* harmony export */   "toastWrapper": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_toast_scss__WEBPACK_IMPORTED_MODULE_5__.toastWrapper),
/* harmony export */   "warnToast": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_toast_scss__WEBPACK_IMPORTED_MODULE_5__.warnToast)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_toast_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./toast.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/toast-manager/ui/toast/toast.scss");

      
      
      
      
      
      
      
      
      

var options = {"attributes":{"id":"@playkit-js/ui-managers"}};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2___default());
options.insert = function (styleElement) {
    if (window.kalturaGlobalConfig && typeof window.kalturaGlobalConfig.stylesNonce === 'string') {
        styleElement.setAttribute('nonce', window.kalturaGlobalConfig.stylesNonce);
    }
    document.head.appendChild(styleElement);
};
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_toast_scss__WEBPACK_IMPORTED_MODULE_5__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_toast_scss__WEBPACK_IMPORTED_MODULE_5__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_toast_scss__WEBPACK_IMPORTED_MODULE_5__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_toast_scss__WEBPACK_IMPORTED_MODULE_5__["default"].locals : undefined);


/***/ }),

/***/ "./src/services/toast-manager/ui/toasts-container/toasts-container.scss":
/*!******************************************************************************!*\
  !*** ./src/services/toast-manager/ui/toasts-container/toasts-container.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bottomLeft": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_toasts_container_scss__WEBPACK_IMPORTED_MODULE_5__.bottomLeft),
/* harmony export */   "bottomRight": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_toasts_container_scss__WEBPACK_IMPORTED_MODULE_5__.bottomRight),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "toastRow": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_toasts_container_scss__WEBPACK_IMPORTED_MODULE_5__.toastRow),
/* harmony export */   "toastsContainer": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_toasts_container_scss__WEBPACK_IMPORTED_MODULE_5__.toastsContainer),
/* harmony export */   "topLeft": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_toasts_container_scss__WEBPACK_IMPORTED_MODULE_5__.topLeft),
/* harmony export */   "topRight": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_toasts_container_scss__WEBPACK_IMPORTED_MODULE_5__.topRight)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_toasts_container_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./toasts-container.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/toast-manager/ui/toasts-container/toasts-container.scss");

      
      
      
      
      
      
      
      
      

var options = {"attributes":{"id":"@playkit-js/ui-managers"}};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2___default());
options.insert = function (styleElement) {
    if (window.kalturaGlobalConfig && typeof window.kalturaGlobalConfig.stylesNonce === 'string') {
        styleElement.setAttribute('nonce', window.kalturaGlobalConfig.stylesNonce);
    }
    document.head.appendChild(styleElement);
};
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_toasts_container_scss__WEBPACK_IMPORTED_MODULE_5__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_toasts_container_scss__WEBPACK_IMPORTED_MODULE_5__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_toasts_container_scss__WEBPACK_IMPORTED_MODULE_5__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_toasts_container_scss__WEBPACK_IMPORTED_MODULE_5__["default"].locals : undefined);


/***/ }),

/***/ "./src/services/upper-bar-manager/ui/displayed-bar/displayed-bar.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/services/upper-bar-manager/ui/displayed-bar/displayed-bar.component.scss ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "rightUpperBarWrapperContainer": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_displayed_bar_component_scss__WEBPACK_IMPORTED_MODULE_5__.rightUpperBarWrapperContainer)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_displayed_bar_component_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./displayed-bar.component.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/upper-bar-manager/ui/displayed-bar/displayed-bar.component.scss");

      
      
      
      
      
      
      
      
      

var options = {"attributes":{"id":"@playkit-js/ui-managers"}};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2___default());
options.insert = function (styleElement) {
    if (window.kalturaGlobalConfig && typeof window.kalturaGlobalConfig.stylesNonce === 'string') {
        styleElement.setAttribute('nonce', window.kalturaGlobalConfig.stylesNonce);
    }
    document.head.appendChild(styleElement);
};
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_displayed_bar_component_scss__WEBPACK_IMPORTED_MODULE_5__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_displayed_bar_component_scss__WEBPACK_IMPORTED_MODULE_5__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_displayed_bar_component_scss__WEBPACK_IMPORTED_MODULE_5__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_displayed_bar_component_scss__WEBPACK_IMPORTED_MODULE_5__["default"].locals : undefined);


/***/ }),

/***/ "./src/services/upper-bar-manager/ui/dropdown-bar-item/dropdown-bar-item.scss":
/*!************************************************************************************!*\
  !*** ./src/services/upper-bar-manager/ui/dropdown-bar-item/dropdown-bar-item.scss ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "comparisonText": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_dropdown_bar_item_scss__WEBPACK_IMPORTED_MODULE_5__.comparisonText),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "disabled": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_dropdown_bar_item_scss__WEBPACK_IMPORTED_MODULE_5__.disabled),
/* harmony export */   "dropdownItem": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_dropdown_bar_item_scss__WEBPACK_IMPORTED_MODULE_5__.dropdownItem),
/* harmony export */   "dropdownItemDescription": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_dropdown_bar_item_scss__WEBPACK_IMPORTED_MODULE_5__.dropdownItemDescription),
/* harmony export */   "icon": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_dropdown_bar_item_scss__WEBPACK_IMPORTED_MODULE_5__.icon),
/* harmony export */   "moreItemTooltip": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_dropdown_bar_item_scss__WEBPACK_IMPORTED_MODULE_5__.moreItemTooltip),
/* harmony export */   "trimText": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_dropdown_bar_item_scss__WEBPACK_IMPORTED_MODULE_5__.trimText)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_dropdown_bar_item_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./dropdown-bar-item.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/upper-bar-manager/ui/dropdown-bar-item/dropdown-bar-item.scss");

      
      
      
      
      
      
      
      
      

var options = {"attributes":{"id":"@playkit-js/ui-managers"}};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2___default());
options.insert = function (styleElement) {
    if (window.kalturaGlobalConfig && typeof window.kalturaGlobalConfig.stylesNonce === 'string') {
        styleElement.setAttribute('nonce', window.kalturaGlobalConfig.stylesNonce);
    }
    document.head.appendChild(styleElement);
};
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_dropdown_bar_item_scss__WEBPACK_IMPORTED_MODULE_5__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_dropdown_bar_item_scss__WEBPACK_IMPORTED_MODULE_5__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_dropdown_bar_item_scss__WEBPACK_IMPORTED_MODULE_5__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_dropdown_bar_item_scss__WEBPACK_IMPORTED_MODULE_5__["default"].locals : undefined);


/***/ }),

/***/ "./src/services/upper-bar-manager/ui/dropdown-bar/dropdown-bar.component.scss":
/*!************************************************************************************!*\
  !*** ./src/services/upper-bar-manager/ui/dropdown-bar/dropdown-bar.component.scss ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "moreDropdown": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_dropdown_bar_component_scss__WEBPACK_IMPORTED_MODULE_5__.moreDropdown)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_dropdown_bar_component_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./dropdown-bar.component.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/upper-bar-manager/ui/dropdown-bar/dropdown-bar.component.scss");

      
      
      
      
      
      
      
      
      

var options = {"attributes":{"id":"@playkit-js/ui-managers"}};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2___default());
options.insert = function (styleElement) {
    if (window.kalturaGlobalConfig && typeof window.kalturaGlobalConfig.stylesNonce === 'string') {
        styleElement.setAttribute('nonce', window.kalturaGlobalConfig.stylesNonce);
    }
    document.head.appendChild(styleElement);
};
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_dropdown_bar_component_scss__WEBPACK_IMPORTED_MODULE_5__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_dropdown_bar_component_scss__WEBPACK_IMPORTED_MODULE_5__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_dropdown_bar_component_scss__WEBPACK_IMPORTED_MODULE_5__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_dropdown_bar_component_scss__WEBPACK_IMPORTED_MODULE_5__["default"].locals : undefined);


/***/ }),

/***/ "./src/services/upper-bar-manager/ui/more-icon/more-icon.component.scss":
/*!******************************************************************************!*\
  !*** ./src/services/upper-bar-manager/ui/more-icon/more-icon.component.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "moreIcon": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_more_icon_component_scss__WEBPACK_IMPORTED_MODULE_5__.moreIcon)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_more_icon_component_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./more-icon.component.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/upper-bar-manager/ui/more-icon/more-icon.component.scss");

      
      
      
      
      
      
      
      
      

var options = {"attributes":{"id":"@playkit-js/ui-managers"}};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_4___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_2___default());
options.insert = function (styleElement) {
    if (window.kalturaGlobalConfig && typeof window.kalturaGlobalConfig.stylesNonce === 'string') {
        styleElement.setAttribute('nonce', window.kalturaGlobalConfig.stylesNonce);
    }
    document.head.appendChild(styleElement);
};
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_more_icon_component_scss__WEBPACK_IMPORTED_MODULE_5__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_more_icon_component_scss__WEBPACK_IMPORTED_MODULE_5__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_more_icon_component_scss__WEBPACK_IMPORTED_MODULE_5__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_more_icon_component_scss__WEBPACK_IMPORTED_MODULE_5__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement, attributes) {
  Object.keys(attributes).forEach(function (key) {
    styleElement.setAttribute(key, attributes[key]);
  });
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

/***/ "./src/event-type/ui-managers-event.ts":
/*!*********************************************!*\
  !*** ./src/event-type/ui-managers-event.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiManagersEvent": () => (/* binding */ UiManagersEvent)
/* harmony export */ });
const UiManagersEvent = {
    UPDATE_COMPONENTS: 'UPDATE_COMPONENTS'
};


/***/ }),

/***/ "./src/services/banner-manager/banner-manager.tsx":
/*!********************************************************!*\
  !*** ./src/services/banner-manager/banner-manager.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerManager": () => (/* binding */ BannerManager),
/* harmony export */   "VisibilityMode": () => (/* binding */ VisibilityMode)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/banner */ "./src/services/banner-manager/ui/banner/index.ts");
/* harmony import */ var _ui_banner_container_banner_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/banner-container/banner-container */ "./src/services/banner-manager/ui/banner-container/banner-container.tsx");
/* harmony import */ var _playkit_js_common_dist_ui_common_player_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @playkit-js/common/dist/ui-common/player-utils */ "./node_modules/@playkit-js/common/dist/ui-common/player-utils.js");




var VisibilityMode;
(function (VisibilityMode) {
    VisibilityMode["VISIBLE"] = "VISIBLE";
    VisibilityMode["HIDDEN"] = "HIDDEN";
})(VisibilityMode || (VisibilityMode = {}));
const MinPlayerWidth = 480;
const DefaultDuration = 60 * 1000;
const MinDuration = 5 * 1000;
/**
 * banner manager manages the display (add / remove) of a single banner in the player.
 */
class BannerManager {
    constructor(options) {
        this.options = options;
        this._floatingItem = null;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this._timerSubscription = undefined;
        this._options = options;
        this._bannerConfig = {
            theme: {
                backgroundColor: 'rgba(0, 0, 0, .7)',
                blur: '10px'
            }
        };
    }
    add(props) {
        if (this._floatingItem) {
            this.remove();
        }
        this._floatingItem = this._options.floatingManager.add({
            label: 'Banner',
            mode: 'Immediate',
            position: 'InteractiveArea',
            renderContent: this._createRenderBanner(props, {
                onClose: this._handleCloseEvent.bind(this),
                theme: this._bannerConfig.theme
            })
        });
        if (props.autoClose) {
            this._startDurationTimer(props.duration);
        }
        return this._getState();
    }
    remove() {
        if (this._floatingItem) {
            if (this._timerSubscription)
                clearTimeout(this._timerSubscription);
            this._options.floatingManager.remove(this._floatingItem);
            this._floatingItem = null;
        }
    }
    reset() {
        this.remove();
    }
    _createRenderBanner({ content, renderContent }, { onClose, theme }) {
        function _renderContent(floatingItemProps) {
            return ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_ui_banner_container_banner_container__WEBPACK_IMPORTED_MODULE_2__.BannerContainer, { onClose: onClose, theme: theme }, renderContent ? renderContent(content, floatingItemProps) : (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_ui_banner__WEBPACK_IMPORTED_MODULE_1__.Banner, { content: content })));
        }
        return _renderContent;
    }
    _handleCloseEvent() {
        this.remove();
    }
    _startDurationTimer(displayDuration = DefaultDuration) {
        this._timerSubscription = setTimeout(this.remove.bind(this), Math.max(MinDuration, displayDuration));
    }
    _getState() {
        const playerSize = (0,_playkit_js_common_dist_ui_common_player_utils__WEBPACK_IMPORTED_MODULE_3__.getPlayerSize)(this._options.kalturaPlayer);
        return {
            visibilityMode: !playerSize || playerSize.width < MinPlayerWidth ? VisibilityMode.HIDDEN : VisibilityMode.VISIBLE
        };
    }
}


/***/ }),

/***/ "./src/services/banner-manager/ui/banner-container/banner-container.tsx":
/*!******************************************************************************!*\
  !*** ./src/services/banner-manager/ui/banner-container/banner-container.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerContainer": () => (/* binding */ BannerContainer)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _banner_container_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner-container.scss */ "./src/services/banner-manager/ui/banner-container/banner-container.scss");
/* harmony import */ var _playkit_js_common_dist_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @playkit-js/common/dist/icon */ "./node_modules/@playkit-js/common/dist/icon/index.js");



class BannerContainer extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
    render(props) {
        const { backgroundColor, blur } = this.props.theme;
        return ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { className: _banner_container_scss__WEBPACK_IMPORTED_MODULE_1__.bannerContainerRoot, "aria-live": "polite" },
            (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { style: `
                background-color:${backgroundColor}; 
                backdrop-filter: blur(${blur});
             `, className: _banner_container_scss__WEBPACK_IMPORTED_MODULE_1__.bannerContainer },
                (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", { className: _banner_container_scss__WEBPACK_IMPORTED_MODULE_1__.closeButton, onClick: props.onClose },
                    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { className: _banner_container_scss__WEBPACK_IMPORTED_MODULE_1__.small },
                        (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_playkit_js_common_dist_icon__WEBPACK_IMPORTED_MODULE_2__.Icon, { size: _playkit_js_common_dist_icon__WEBPACK_IMPORTED_MODULE_2__.IconSize.small, name: "close" })),
                    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { className: _banner_container_scss__WEBPACK_IMPORTED_MODULE_1__.large },
                        (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_playkit_js_common_dist_icon__WEBPACK_IMPORTED_MODULE_2__.Icon, { size: _playkit_js_common_dist_icon__WEBPACK_IMPORTED_MODULE_2__.IconSize.large, name: "close" }))),
                this.props.children)));
    }
}


/***/ }),

/***/ "./src/services/banner-manager/ui/banner/banner.tsx":
/*!**********************************************************!*\
  !*** ./src/services/banner-manager/ui/banner/banner.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Banner": () => (/* binding */ Banner)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _banner_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner.scss */ "./src/services/banner-manager/ui/banner/banner.scss");
/* harmony import */ var _someone_asks_large__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./someone-asks-large */ "./src/services/banner-manager/ui/banner/someone-asks-large.tsx");
/* harmony import */ var _someone_asks_small__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./someone-asks-small */ "./src/services/banner-manager/ui/banner/someone-asks-small.tsx");




class Banner extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
    render({ content }) {
        const { text, title = 'Audience asks:', icon = this._defaultIcon() } = content;
        return ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { className: `${_banner_scss__WEBPACK_IMPORTED_MODULE_1__.defaultBannerRoot} ${_banner_scss__WEBPACK_IMPORTED_MODULE_1__.bannerWrapper}`, role: "alert", "aria-live": "polite" },
            (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { className: _banner_scss__WEBPACK_IMPORTED_MODULE_1__.iconContainer },
                (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { className: _banner_scss__WEBPACK_IMPORTED_MODULE_1__.iconWrapper }, icon)),
            (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { className: _banner_scss__WEBPACK_IMPORTED_MODULE_1__.bannerBody },
                (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { className: _banner_scss__WEBPACK_IMPORTED_MODULE_1__.title }, title),
                (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { className: _banner_scss__WEBPACK_IMPORTED_MODULE_1__.text }, text))));
    }
    _defaultIcon() {
        return ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { className: _banner_scss__WEBPACK_IMPORTED_MODULE_1__.iconImage },
            (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_someone_asks_large__WEBPACK_IMPORTED_MODULE_2__.SomeoneAsksLarge, { className: _banner_scss__WEBPACK_IMPORTED_MODULE_1__.large }),
            (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_someone_asks_small__WEBPACK_IMPORTED_MODULE_3__.SomeoneAsksSmall, { className: _banner_scss__WEBPACK_IMPORTED_MODULE_1__.small })));
    }
}


/***/ }),

/***/ "./src/services/banner-manager/ui/banner/index.ts":
/*!********************************************************!*\
  !*** ./src/services/banner-manager/ui/banner/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Banner": () => (/* reexport safe */ _banner__WEBPACK_IMPORTED_MODULE_0__.Banner)
/* harmony export */ });
/* harmony import */ var _banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner */ "./src/services/banner-manager/ui/banner/banner.tsx");



/***/ }),

/***/ "./src/services/banner-manager/ui/banner/someone-asks-large.tsx":
/*!**********************************************************************!*\
  !*** ./src/services/banner-manager/ui/banner/someone-asks-large.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SomeoneAsksLarge": () => (/* binding */ SomeoneAsksLarge)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SomeoneAsksLarge = (props) => ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { width: "32px", height: "32px", viewBox: "0 0 32 32", version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ...props },
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("g", { id: "Icons/32/Someone-asks", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
        (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("g", { id: "Group", transform: "translate(4.000000, 5.000000)", fill: "#B2D238" },
            (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("ellipse", { id: "Oval", cx: "12", cy: "5.5", rx: "6", ry: "5.5" }),
            (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M12,13 C7.995,13 0,15.01 0,19 L0,20.5 C0,21.325 0.675,22 1.5,22 L22.5,22 C23.325,22 24,21.325 24,20.5 L24,19 C24,15.01 16.005,13 12,13 Z", id: "Path" })))));


/***/ }),

/***/ "./src/services/banner-manager/ui/banner/someone-asks-small.tsx":
/*!**********************************************************************!*\
  !*** ./src/services/banner-manager/ui/banner/someone-asks-small.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SomeoneAsksSmall": () => (/* binding */ SomeoneAsksSmall)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SomeoneAsksSmall = (props) => ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { width: "20px", height: "20px", viewBox: "0 0 20 20", version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", ...props },
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("g", { id: "Icons/20/Someone-asks", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
        (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("g", { id: "Group", transform: "translate(2.000000, 2.000000)", fill: "#B2D238" },
            (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("circle", { id: "Oval", cx: "8", cy: "4", r: "4" }),
            (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M8,9 C5.33,9 0,10.5633333 0,13.6666667 L0,14.8333333 C0,15.475 0.45,16 1,16 L15,16 C15.55,16 16,15.475 16,14.8333333 L16,13.6666667 C16,10.5633333 10.67,9 8,9 Z", id: "Path" })))));


/***/ }),

/***/ "./src/services/component-injection-manager/component-injection-manager.tsx":
/*!**********************************************************************************!*\
  !*** ./src/services/component-injection-manager/component-injection-manager.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentInjectionManager": () => (/* binding */ ComponentInjectionManager)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models */ "./src/services/component-injection-manager/models/index.ts");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ "./src/services/component-injection-manager/ui/index.ts");



class ComponentInjectionManager {
    constructor(options) {
        this._currentComponent = null;
        this._kalturaPlayer = options.kalturaPlayer;
        this._eventManager = options.eventManager;
    }
    inject(options) {
        // Remove existing component if any
        if (this._currentComponent) {
            this._removeCurrentComponent();
        }
        // Render and store removal function
        const removeFunction = this._renderComponent(options);
        this._currentComponent = {
            component: options.component,
            props: options.props,
            position: options.position,
            removeFunction
        };
    }
    switchPosition(position) {
        if (!this._currentComponent) {
            return;
        }
        // Skip if already at this position
        if (this._currentComponent.position === position) {
            return;
        }
        // Store component and props
        const { component, props } = this._currentComponent;
        // Re-inject at new position (handles cleanup automatically)
        this.inject({ position, component, props });
    }
    remove() {
        this._removeCurrentComponent();
        this._currentComponent = null;
    }
    getCurrentPosition() {
        return this._currentComponent?.position || null;
    }
    destroy() {
        this.remove();
    }
    _removeCurrentComponent() {
        if (!this._currentComponent) {
            return;
        }
        // Call removal function (SideBySideWrapper's cleanup will restore video)
        this._currentComponent.removeFunction();
    }
    _renderComponent(options) {
        const { position, component, props } = options;
        if (position === _models__WEBPACK_IMPORTED_MODULE_1__.InjectionPosition.BottomRight) {
            return this._kalturaPlayer.ui.addComponent({
                label: 'component-injection-bottom-right',
                presets: ['Playback', 'Live'],
                container: 'VideoArea',
                get: () => (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_ui__WEBPACK_IMPORTED_MODULE_2__.BottomRightOverlay, null, component(props))
            });
        }
        else if (position === _models__WEBPACK_IMPORTED_MODULE_1__.InjectionPosition.SideBySide) {
            return this._kalturaPlayer.ui.addComponent({
                label: 'component-injection-side-by-side',
                presets: ['Playback', 'Live'],
                container: 'PlayerArea',
                get: () => (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_ui__WEBPACK_IMPORTED_MODULE_2__.SideBySideWrapper, { player: this._kalturaPlayer, component: component, componentProps: props })
            });
        }
        // Fallback (should never happen)
        return () => {
            // No-op cleanup function
        };
    }
}


/***/ }),

/***/ "./src/services/component-injection-manager/models/index.ts":
/*!******************************************************************!*\
  !*** ./src/services/component-injection-manager/models/index.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InjectionPosition": () => (/* reexport safe */ _injection_position__WEBPACK_IMPORTED_MODULE_0__.InjectionPosition)
/* harmony export */ });
/* harmony import */ var _injection_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./injection-position */ "./src/services/component-injection-manager/models/injection-position.ts");



/***/ }),

/***/ "./src/services/component-injection-manager/models/injection-position.ts":
/*!*******************************************************************************!*\
  !*** ./src/services/component-injection-manager/models/injection-position.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InjectionPosition": () => (/* binding */ InjectionPosition)
/* harmony export */ });
var InjectionPosition;
(function (InjectionPosition) {
    InjectionPosition["BottomRight"] = "bottom-right";
    InjectionPosition["SideBySide"] = "side-by-side";
})(InjectionPosition || (InjectionPosition = {}));


/***/ }),

/***/ "./src/services/component-injection-manager/ui/bottom-right-overlay.tsx":
/*!******************************************************************************!*\
  !*** ./src/services/component-injection-manager/ui/bottom-right-overlay.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BottomRightOverlay": () => (/* binding */ BottomRightOverlay)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bottom_right_overlay_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bottom-right-overlay.scss */ "./src/services/component-injection-manager/ui/bottom-right-overlay.scss");
// src/services/component-injection-manager/ui/bottom-right-overlay.tsx


const BottomRightOverlay = ({ children }) => {
    return ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { className: _bottom_right_overlay_scss__WEBPACK_IMPORTED_MODULE_1__.bottomRightOverlay, "aria-live": "polite" }, children));
};


/***/ }),

/***/ "./src/services/component-injection-manager/ui/index.ts":
/*!**************************************************************!*\
  !*** ./src/services/component-injection-manager/ui/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BottomRightOverlay": () => (/* reexport safe */ _bottom_right_overlay__WEBPACK_IMPORTED_MODULE_0__.BottomRightOverlay),
/* harmony export */   "SideBySideWrapper": () => (/* reexport safe */ _side_by_side_wrapper__WEBPACK_IMPORTED_MODULE_1__.SideBySideWrapper)
/* harmony export */ });
/* harmony import */ var _bottom_right_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bottom-right-overlay */ "./src/services/component-injection-manager/ui/bottom-right-overlay.tsx");
/* harmony import */ var _side_by_side_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-by-side-wrapper */ "./src/services/component-injection-manager/ui/side-by-side-wrapper.tsx");
// src/services/component-injection-manager/ui/index.ts




/***/ }),

/***/ "./src/services/component-injection-manager/ui/side-by-side-wrapper.tsx":
/*!******************************************************************************!*\
  !*** ./src/services/component-injection-manager/ui/side-by-side-wrapper.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideBySideWrapper": () => (/* binding */ SideBySideWrapper)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "preact/hooks");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(preact_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _side_by_side_wrapper_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./side-by-side-wrapper.scss */ "./src/services/component-injection-manager/ui/side-by-side-wrapper.scss");
// src/services/component-injection-manager/ui/side-by-side-wrapper.tsx



const SideBySideWrapper = ({ player, component: InjectedComponent, componentProps }) => {
    const videoContainerRef = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const videoElement = player.getVideoElement();
        const originalParent = videoElement?.parentElement;
        if (videoContainerRef.current && videoElement) {
            // Remove from tab order as video controls are managed by the player
            videoElement.tabIndex = -1;
            videoContainerRef.current.prepend(videoElement);
        }
        // Cleanup: restore video element to original location
        return () => {
            if (videoElement && originalParent) {
                originalParent.appendChild(videoElement);
            }
        };
    }, [player]);
    return ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { className: _side_by_side_wrapper_scss__WEBPACK_IMPORTED_MODULE_2__.sideBySideWrapper },
        (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { className: _side_by_side_wrapper_scss__WEBPACK_IMPORTED_MODULE_2__.videoContainer, ref: videoContainerRef, "aria-label": "Video player" }),
        (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { className: _side_by_side_wrapper_scss__WEBPACK_IMPORTED_MODULE_2__.componentContainer, "aria-label": "Injected component" },
            (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(InjectedComponent, { ...componentProps }))));
};


/***/ }),

/***/ "./src/services/floating-manager/floating-manager.tsx":
/*!************************************************************!*\
  !*** ./src/services/floating-manager/floating-manager.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FloatingManager": () => (/* binding */ FloatingManager)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _preset_manager_preset_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../preset-manager/preset-manager */ "./src/services/preset-manager/preset-manager.tsx");
/* harmony import */ var _preset_manager_ui_managed_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../preset-manager/ui/managed-component */ "./src/services/preset-manager/ui/managed-component.tsx");
/* harmony import */ var _playkit_js_common_dist_ui_common_player_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @playkit-js/common/dist/ui-common/player-utils */ "./node_modules/@playkit-js/common/dist/ui-common/player-utils.js");
/* harmony import */ var _ui_floating_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/floating-item */ "./src/services/floating-manager/ui/floating-item.tsx");
/* harmony import */ var _event_type_ui_managers_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../event-type/ui-managers-event */ "./src/event-type/ui-managers-event.ts");






const areaToPresetMapping = {
    VideoArea: {
        Live: 'VideoArea',
        Playback: 'VideoArea'
    },
    PresetArea: {
        Live: 'PresetArea',
        Playback: 'PresetArea'
    },
    InteractiveArea: {
        Live: 'InteractiveArea',
        Playback: 'InteractiveArea'
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
            return ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_preset_manager_ui_managed_component__WEBPACK_IMPORTED_MODULE_2__.ManagedComponent, { label: 'floating-manager', renderChildren: () => this._renderItems(position), isShown: () => true, ref: (ref) => (this._componentRef[position] = ref) }));
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
        Object.keys(areaToPresetMapping).forEach((areaType) => {
            // add floating manager in every preset
            this._options.presetManager.add({
                label: 'floating-manager',
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                presetAreas: areaToPresetMapping[areaType],
                renderChild: () => this._renderChild(areaType)
            });
        });
        this._logger = _options.logger;
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
            this._logger.warn(`couldn't remove ${item} since it wasn't found`);
        }
    }
    reset() {
        const allItems = [...this._items.VideoArea, ...this._items.InteractiveArea, ...this._items.PresetArea];
        allItems.forEach((item) => {
            try {
                item.destroy();
            }
            catch (e) {
                this._logger.warn(e);
            }
        });
        this._items.VideoArea = [];
        this._items.PresetArea = [];
        this._items.InteractiveArea = [];
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
            playerSize: (0,_playkit_js_common_dist_ui_common_player_utils__WEBPACK_IMPORTED_MODULE_3__.getPlayerSize)(this._options.kalturaPlayer),
            videoSize: (0,_playkit_js_common_dist_ui_common_player_utils__WEBPACK_IMPORTED_MODULE_3__.getVideoSize)(this._options.kalturaPlayer)
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
        this._eventManager.listen(kalturaPlayer, _event_type_ui_managers_event__WEBPACK_IMPORTED_MODULE_5__.UiManagersEvent.UPDATE_COMPONENTS, () => this._updateComponents());
    }
}


/***/ }),

/***/ "./src/services/floating-manager/ui/floating-item.tsx":
/*!************************************************************!*\
  !*** ./src/services/floating-manager/ui/floating-item.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FloatingItem": () => (/* binding */ FloatingItem)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _preset_manager_ui_managed_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../preset-manager/ui/managed-component */ "./src/services/preset-manager/ui/managed-component.tsx");


class FloatingItem {
    constructor(options) {
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
        this._addPlayerBindings();
    }
    get data() {
        return this._options.data;
    }
    /**
     * destory the ui item
     */
    destroy() {
        this.remove();
    }
    renderFloatingChild(props) {
        const { label } = this._options.data;
        return ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_preset_manager_ui_managed_component__WEBPACK_IMPORTED_MODULE_1__.ManagedComponent, { label: label, renderChildren: () => this._options.data.renderContent(props), isShown: () => this._isShown, ref: (ref) => {
                this._componentRef = ref;
            } }));
    }
    _addPlayerBindings() {
        const { kalturaPlayer, data, eventManager } = this._options;
        if (data.mode === 'MediaLoaded') {
            eventManager.listenOnce(kalturaPlayer, kalturaPlayer.Event.Core.MEDIA_LOADED, this.add);
        }
        if (data.mode === 'FirstPlay') {
            eventManager.listenOnce(kalturaPlayer, kalturaPlayer.Event.Core.FIRST_PLAY, this.add);
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

"use strict";
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

"use strict";
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
        this._eventManager = options.eventManager;
        this._kalturaPlayer = options.kalturaPlayer;
        this.add({
            label: 'preset-manager',
            presetAreas: { Playback: 'PlayerArea', Live: 'PlayerArea' },
            renderChild: () => ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_ui_player_adapter__WEBPACK_IMPORTED_MODULE_2__.UIPlayerAdapter, { player: options.kalturaPlayer, onMount: this._registerToPlayer, onUnmount: this._unregisterToPlayer }))
        });
    }
    add(data) {
        const component = new _ui_preset_item__WEBPACK_IMPORTED_MODULE_3__.PresetItem({
            kalturaPlayer: this._kalturaPlayer,
            data
        });
        const configs = component.playerConfig;
        for (const config of configs) {
            const { label, presets, container, get } = config;
            this._kalturaPlayer.ui.addComponent({
                label,
                presets,
                container,
                get
            });
        }
    }
}


/***/ }),

/***/ "./src/services/preset-manager/ui-player-adapter.ts":
/*!**********************************************************!*\
  !*** ./src/services/preset-manager/ui-player-adapter.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./src/services/preset-manager/ui/managed-component.tsx":
/*!**************************************************************!*\
  !*** ./src/services/preset-manager/ui/managed-component.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagedComponent": () => (/* binding */ ManagedComponent)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _managed_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./managed-component.scss */ "./src/services/preset-manager/ui/managed-component.scss");
/* harmony import */ var _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @playkit-js/kaltura-player-js */ "@playkit-js/kaltura-player-js");
/* harmony import */ var _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



const { connect } = _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_2__.ui.redux;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapStateToProps = (state) => ({
    playerSize: state.shell.playerSize
});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
let ManagedComponent = class ManagedComponent extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
    update() {
        this.setState((prev) => {
            return {
                toggler: !prev.toggler
            };
        });
    }
    shouldComponentUpdate(prevProps) {
        const { updateOnPlayerSizeChanged, playerSize } = this.props;
        return (updateOnPlayerSizeChanged && prevProps.playerSize !== playerSize) || prevProps.playerSize === playerSize;
    }
    componentDidMount() {
        // eslint-disable-next-line react/no-did-mount-set-state
        this.setState({
            toggler: false
        });
    }
    render() {
        const { fillContainer, isShown, playerSize } = this.props;
        if (!isShown()) {
            return null;
        }
        return ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "data-contrib-item": this.props.label, className: `${fillContainer ? _managed_component_scss__WEBPACK_IMPORTED_MODULE_1__.fillContainer : ''}` }, this.props.renderChildren(playerSize)));
    }
};
ManagedComponent.defaultProps = {
    fillContainer: false
};
ManagedComponent = __decorate([
    connect(mapStateToProps, null, null, { forwardRef: true })
], ManagedComponent);



/***/ }),

/***/ "./src/services/preset-manager/ui/preset-item.tsx":
/*!********************************************************!*\
  !*** ./src/services/preset-manager/ui/preset-item.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PresetItem": () => (/* binding */ PresetItem)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_preset_item_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/preset-item-data */ "./src/services/preset-manager/models/preset-item-data.ts");
/* harmony import */ var _playkit_js_common_dist_ui_common_injected_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @playkit-js/common/dist/ui-common/injected-component */ "./node_modules/@playkit-js/common/dist/ui-common/injected-component/index.js");



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
                /**/
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemWrapper": () => (/* binding */ ItemWrapper)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_panel_item_wrapper_panel_item_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/panel-item-wrapper/panel-item-wrapper.component */ "./src/services/side-panels-manager/ui/panel-item-wrapper/panel-item-wrapper.component.tsx");
/* harmony import */ var _side_panel_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./side-panel-item */ "./src/services/side-panels-manager/models/side-panel-item.ts");



/**
 * Panel item metadata
 * @internal
 */
class ItemWrapper {
    constructor(item, player) {
        this._detachWindow = null;
        this._closingDetachWindow = false;
        this._attachingDetachWindow = false;
        this._detachWindowPosition = { screenX: 0, screenY: 0 };
        this._detachWindowSize = { innerWidth: 0, innerHeight: 0 };
        this._detachWindowAnalyticsInterval = null;
        this._initialDetachWindowSizeSet = false;
        this.attach = () => {
            if (this.isDetached) {
                this._attachingDetachWindow = true;
                this.panelItemComponentRef.current.attach();
                this._closeDetachedWindow();
            }
        };
        this._setDetachWindowPosition = (x, y) => {
            this._detachWindowPosition = { screenX: x, screenY: y };
        };
        this._setDetachWindowSize = (width, height) => {
            this._detachWindowSize = { innerWidth: width, innerHeight: height };
        };
        this._closeDetachedWindow = () => {
            if (!this._detachWindow || this._closingDetachWindow) {
                return;
            }
            this._closingDetachWindow = true;
            _side_panel_item__WEBPACK_IMPORTED_MODULE_2__.CLOSE_DETACH_EVENTS.forEach((closeEvent) => {
                window.removeEventListener(closeEvent, this._closeDetachedWindow);
            });
            this._detachWindow.close();
            this._detachWindow = null;
            this._closingDetachWindow = false;
            this._attachingDetachWindow = false;
            this._initialDetachWindowSizeSet = false;
            this._setDetachWindowPosition(0, 0);
            this._setDetachWindowSize(0, 0);
            if (this._detachWindowAnalyticsInterval) {
                clearInterval(this._detachWindowAnalyticsInterval);
                this._detachWindowAnalyticsInterval = null;
            }
        };
        this.id = ++ItemWrapper.nextId;
        this.item = item;
        this.player = player;
        this.isActive = false;
        this.injectPanelComponent();
    }
    activate() {
        if (this.panelItemComponentRef.current) {
            this.panelItemComponentRef.current.on();
            this.isActive = true;
        }
        else {
            setTimeout(() => this.activate());
        }
    }
    deactivate(switchMode = false) {
        this.panelItemComponentRef.current?.off(switchMode);
        this.isActive = false;
    }
    detach(options) {
        const el = document.createElement('div');
        el.style.width = '100%';
        el.style.height = '100%';
        el.className = `${_side_panel_item__WEBPACK_IMPORTED_MODULE_2__.DETACH_CONTAINER_CLASS}-${this.id}`;
        // create and set params to the new window
        let newWindowParams = 'menubar=no,status=no,location=no,toolbar=no';
        newWindowParams += `,width=${options?.width || 'auto'},height=${options?.height || 'auto'}`;
        newWindowParams += `,top=${options?.top || 'auto'}, left=${options?.left || 'auto'}`;
        this._detachWindow = window.open('', '_blank', newWindowParams);
        this._detachWindow.document.title = options?.title;
        this._detachWindow?.focus();
        // copy and set styles to the new window
        const currentPageHead = document.head;
        const newPageHead = this._detachWindow.document.head;
        const newPageBody = this._detachWindow.document.body;
        const styles = currentPageHead.querySelectorAll('style');
        styles.forEach((style) => {
            const newStyle = this._detachWindow.document.createElement('style');
            newStyle.textContent = style.textContent;
            newPageHead.appendChild(newStyle);
        });
        Object.assign(newPageBody.style, _side_panel_item__WEBPACK_IMPORTED_MODULE_2__.DETACHED_WINDOW_STYLES);
        // Append the <div> element to the new window's document
        this._detachWindow?.document.body.appendChild(el);
        // handle close of new window
        this._detachWindow.onbeforeunload = () => {
            if (this._attachingDetachWindow) {
                return;
            }
            options.onDetachWindowClose();
            this._closeDetachedWindow();
        };
        _side_panel_item__WEBPACK_IMPORTED_MODULE_2__.CLOSE_DETACH_EVENTS.forEach((closeEvent) => {
            window.addEventListener(closeEvent, this._closeDetachedWindow);
        });
        // handle resize of new window
        if (options?.maxWidth || options?.maxHeight) {
            this._detachWindow.addEventListener('resize', (event) => {
                event.preventDefault();
                if (options?.maxWidth && this._detachWindow.innerWidth > options.maxWidth) {
                    this._detachWindow.resizeTo(options.maxWidth, this._detachWindow.outerHeight);
                }
                if (options?.maxHeight && this._detachWindow.innerHeight > options.maxHeight) {
                    this._detachWindow.resizeTo(this._detachWindow.outerWidth, options.maxHeight);
                }
            });
        }
        // handle window move and resize
        if (options.onDetachMove || options.onDetachResize) {
            const { screenX, screenY } = this._detachWindow;
            this._setDetachWindowPosition(screenX, screenY);
            // use interval since there no handlers for new window position change
            this._detachWindowAnalyticsInterval = setInterval(() => {
                if (!this._initialDetachWindowSizeSet) {
                    this._setDetachWindowSize(this._detachWindow.innerWidth, this._detachWindow.innerHeight);
                    this._initialDetachWindowSizeSet = true;
                }
                if (options.onDetachMove &&
                    (this._detachWindow.screenX !== this._detachWindowPosition.screenX ||
                        this._detachWindow.screenY !== this._detachWindowPosition.screenY)) {
                    this._setDetachWindowPosition(this._detachWindow.screenX, this._detachWindow.screenY);
                    options.onDetachMove(this._detachWindow.screenX, this._detachWindow.screenY);
                }
                if (options.onDetachResize &&
                    (this._detachWindow.innerWidth !== this._detachWindowSize.innerWidth ||
                        this._detachWindow.innerHeight !== this._detachWindowSize.innerHeight)) {
                    this._setDetachWindowSize(this._detachWindow.innerWidth, this._detachWindow.innerHeight);
                    options.onDetachResize(this._detachWindow.innerWidth, this._detachWindow.innerHeight);
                }
            }, _side_panel_item__WEBPACK_IMPORTED_MODULE_2__.DETACH_POSITION_INTERVAL);
        }
        this.panelItemComponentRef.current.detach(el, options?.attachPlaceholder || (() => null));
    }
    get isDetached() {
        return Boolean(this._detachWindow);
    }
    getDetachedRef() {
        return this.panelItemComponentRef.current?.detachRef;
    }
    remove() {
        this.removePanelComponentFn();
        this._closeDetachedWindow();
    }
    update() {
        this.panelItemComponentRef.current?.forceUpdate();
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

/***/ "./src/services/side-panels-manager/models/side-panel-item.ts":
/*!********************************************************************!*\
  !*** ./src/services/side-panels-manager/models/side-panel-item.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CLOSE_DETACH_EVENTS": () => (/* binding */ CLOSE_DETACH_EVENTS),
/* harmony export */   "DETACHED_WINDOW_STYLES": () => (/* binding */ DETACHED_WINDOW_STYLES),
/* harmony export */   "DETACH_CONTAINER_CLASS": () => (/* binding */ DETACH_CONTAINER_CLASS),
/* harmony export */   "DETACH_POSITION_INTERVAL": () => (/* binding */ DETACH_POSITION_INTERVAL)
/* harmony export */ });
const DETACHED_WINDOW_STYLES = {
    margin: '0px',
    backgroundColor: '#000'
};
const DETACH_CONTAINER_CLASS = 'playkit-player detach-sidebar-container';
const CLOSE_DETACH_EVENTS = ['beforeunload', 'popstate'];
const DETACH_POSITION_INTERVAL = 1000;


/***/ }),

/***/ "./src/services/side-panels-manager/side-panels-manager.ts":
/*!*****************************************************************!*\
  !*** ./src/services/side-panels-manager/side-panels-manager.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
            const newItemWrapper = new _models_item_wrapper__WEBPACK_IMPORTED_MODULE_1__.ItemWrapper(item, this.player);
            this.componentsRegistry.set(newItemWrapper.id, newItemWrapper);
            this.logger.debug('New Panel Item Added', item);
            return newItemWrapper.id;
        }
        this.logger.error('Invalid SidePanelItem parameters', item);
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
    isItemDetached(itemId) {
        const itemWrapper = this.componentsRegistry.get(itemId);
        if (itemWrapper) {
            return itemWrapper.isDetached;
        }
        this.logger.warn(`${itemId} is not registered`);
        return false;
    }
    detachItem(itemId, options) {
        const itemWrapper = this.componentsRegistry.get(itemId);
        if (itemWrapper) {
            this.deactivateItem(itemId);
            itemWrapper.detach({
                ...options,
                onDetachWindowClose: () => {
                    // detach window closed by system
                    this.attachItem(itemId);
                    options?.onDetachWindowClose();
                }
            });
        }
        else {
            this.logger.warn(`${itemId} is not registered`);
        }
    }
    attachItem(itemId) {
        const itemWrapper = this.componentsRegistry.get(itemId);
        if (itemWrapper) {
            itemWrapper.attach();
            this.activateItem(itemId);
        }
        else {
            this.logger.warn(`${itemId} is not registered`);
        }
    }
    getDetachedRef(itemId) {
        if (this.isItemDetached(itemId)) {
            const itemWrapper = this.componentsRegistry.get(itemId);
            return itemWrapper.getDetachedRef();
        }
        return null;
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
        const { label, panelComponent, position, expandMode, presets } = item;
        return !!(label &&
            Object.values(SidePanelPositions).includes(position) &&
            Object.values(SidePanelModes).includes(expandMode) &&
            presets.every((preset) => Object.values(ReservedPresetNames).includes(preset)) &&
            typeof panelComponent === 'function');
    }
}


/***/ }),

/***/ "./src/services/side-panels-manager/ui/panel-item-wrapper/panel-item-wrapper.component.tsx":
/*!*************************************************************************************************!*\
  !*** ./src/services/side-panels-manager/ui/panel-item-wrapper/panel-item-wrapper.component.tsx ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const { createPortal } = _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_2__.ui;
/**
 * PanelItemWrapper component
 * @internal
 */
class PanelItemWrapper extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor() {
        super();
        this.detach = (detachRef, attachPlaceholder) => {
            this.setState({ detachRef, attachPlaceholder });
        };
        this.attach = () => {
            this.setState({ detachRef: null, attachPlaceholder: () => null });
        };
        this.state = {
            on: false,
            detachRef: null,
            attachPlaceholder: () => null
        };
        this.switchMode = false;
    }
    on() {
        this.setState({ on: true });
    }
    off(switchMode) {
        this.switchMode = switchMode;
        this.setState({ on: false });
    }
    get detachRef() {
        return this.state.detachRef;
    }
    render() {
        const node = (0,preact__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(this.props.children);
        return ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { className: [_panel_item_wrapper_component_scss__WEBPACK_IMPORTED_MODULE_1__.sidePanelWrapper, this.state.on ? _panel_item_wrapper_component_scss__WEBPACK_IMPORTED_MODULE_1__.activeState : ''].join(' '), style: !this.state.on && !this.switchMode ? { transition: `visibility ${defaultTransitionTime}ms` } : '' }, this.detachRef ? ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            createPortal(node, this.detachRef),
            (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(this.state.attachPlaceholder, null))) : (node)));
    }
}


/***/ }),

/***/ "./src/services/toast-manager/models/index.ts":
/*!****************************************************!*\
  !*** ./src/services/toast-manager/models/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastType": () => (/* reexport safe */ _toast_type__WEBPACK_IMPORTED_MODULE_0__.ToastType)
/* harmony export */ });
/* harmony import */ var _toast_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toast-type */ "./src/services/toast-manager/models/toast-type.ts");




/***/ }),

/***/ "./src/services/toast-manager/models/toast-type.ts":
/*!*********************************************************!*\
  !*** ./src/services/toast-manager/models/toast-type.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastType": () => (/* binding */ ToastType)
/* harmony export */ });
var ToastType;
(function (ToastType) {
    ToastType["TopRight"] = "topRight";
    ToastType["TopLeft"] = "topLeft";
    ToastType["BottomRight"] = "bottomRight";
    ToastType["BottomLeft"] = "bottomLeft";
})(ToastType || (ToastType = {}));


/***/ }),

/***/ "./src/services/toast-manager/toast-manager.tsx":
/*!******************************************************!*\
  !*** ./src/services/toast-manager/toast-manager.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastManager": () => (/* binding */ ToastManager)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _playkit_js_common_dist_ui_common_uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @playkit-js/common/dist/ui-common/uuid */ "./node_modules/@playkit-js/common/dist/ui-common/uuid.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models */ "./src/services/toast-manager/models/index.ts");
/* harmony import */ var _ui_toasts_container_toasts_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/toasts-container/toasts-container */ "./src/services/toast-manager/ui/toasts-container/toasts-container.tsx");
/* harmony import */ var _event_type_ui_managers_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../event-type/ui-managers-event */ "./src/event-type/ui-managers-event.ts");





class ToastManager {
    constructor(options, dispatchEvent) {
        this.options = options;
        this.dispatchEvent = dispatchEvent;
        this._toasts = [];
        this._floatingItem = null;
        this._remove = (id) => {
            const index = this._findToastIndexById(id);
            if (index === -1)
                return;
            clearTimeout(this._toasts[index].timerSubscription);
            this._toasts.splice(index, 1);
            this._updateToastsUI();
            if (this._toasts.length === 0)
                this._removeToastsContainer();
        };
        this._options = options;
        this._dispatchEvent = dispatchEvent;
    }
    add(data) {
        const { duration, toastType, ...props } = data;
        if (!this._floatingItem)
            this._addToastsContainer(toastType);
        const managedToast = {
            toastProps: {
                ...props,
                id: _playkit_js_common_dist_ui_common_uuid__WEBPACK_IMPORTED_MODULE_1__.UUID.uuidV1(),
                onClose: this._remove
            },
            duration,
            timerSubscription: null
        };
        this._toasts.push(managedToast);
        this._updateToastsUI();
        this._startDurationTimer(managedToast);
        this.dispatchEvent(_event_type_ui_managers_event__WEBPACK_IMPORTED_MODULE_4__.UiManagersEvent.UPDATE_COMPONENTS);
    }
    reset() {
        this._toasts.forEach((managedToast) => {
            this._remove(managedToast.toastProps.id);
        });
    }
    _startDurationTimer(managedToast) {
        managedToast.timerSubscription = setTimeout(() => {
            this._remove(managedToast.toastProps.id);
        }, managedToast.duration);
    }
    _addToastsContainer(toastType) {
        this._floatingItem = this._options.floatingManager.add({
            label: 'Toasts',
            mode: 'Immediate',
            position: 'InteractiveArea',
            renderContent: () => {
                return ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_ui_toasts_container_toasts_container__WEBPACK_IMPORTED_MODULE_3__.ToastsContainer, { toastType: toastType || _models__WEBPACK_IMPORTED_MODULE_2__.ToastType.BottomLeft, toasts: this._toasts.map((toast) => {
                        return toast.toastProps;
                    }) }));
            }
        });
    }
    _removeToastsContainer() {
        if (!this._floatingItem)
            return;
        this._options.floatingManager.remove(this._floatingItem);
        this._floatingItem = null;
    }
    _updateToastsUI() {
        if (this._floatingItem)
            this._floatingItem.update();
    }
    _findToastIndexById(id) {
        let index = 0;
        while (index < this._toasts.length) {
            if (this._toasts[index].toastProps.id === id) {
                return index;
            }
            index++;
        }
        return -1;
    }
}


/***/ }),

/***/ "./src/services/toast-manager/ui/toast/toast.tsx":
/*!*******************************************************!*\
  !*** ./src/services/toast-manager/ui/toast/toast.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Toast": () => (/* binding */ Toast)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _toast_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toast.scss */ "./src/services/toast-manager/ui/toast/toast.scss");
/* harmony import */ var _playkit_js_common_dist_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @playkit-js/common/dist/icon */ "./node_modules/@playkit-js/common/dist/icon/index.js");



class Toast extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor() {
        super(...arguments);
        this.state = {
            isShown: true
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this._onClick = (e) => {
            this.props.onClick();
            this._onClose(e);
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this._onClose = (e) => {
            e.stopPropagation();
            this.setState({ isShown: false });
            this.props.onClose(this.props.id);
        };
    }
    _getToastSeverityClass() {
        switch (this.props.severity) {
            case 'Success':
                return _toast_scss__WEBPACK_IMPORTED_MODULE_1__.successToast;
            case 'Warning':
                return _toast_scss__WEBPACK_IMPORTED_MODULE_1__.warnToast;
            case 'Error':
                return _toast_scss__WEBPACK_IMPORTED_MODULE_1__.errorToast;
            default:
                //info
                return _toast_scss__WEBPACK_IMPORTED_MODULE_1__.infoToast;
        }
    }
    render() {
        const { text, title, icon } = this.props;
        return ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { className: `${_toast_scss__WEBPACK_IMPORTED_MODULE_1__.toastWrapper} ${this._getToastSeverityClass()}`, onClick: this._onClick },
            (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", { className: _toast_scss__WEBPACK_IMPORTED_MODULE_1__.closeButton, onClick: this._onClose },
                (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_playkit_js_common_dist_icon__WEBPACK_IMPORTED_MODULE_2__.Icon, { size: _playkit_js_common_dist_icon__WEBPACK_IMPORTED_MODULE_2__.IconSize.small, name: "close" })),
            (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { className: _toast_scss__WEBPACK_IMPORTED_MODULE_1__.title }, title),
            (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { className: _toast_scss__WEBPACK_IMPORTED_MODULE_1__.toastBody, role: "alert", "aria-live": "assertive" },
                (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { className: _toast_scss__WEBPACK_IMPORTED_MODULE_1__.iconContainer },
                    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { className: _toast_scss__WEBPACK_IMPORTED_MODULE_1__.iconWrapper }, icon)),
                (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { className: _toast_scss__WEBPACK_IMPORTED_MODULE_1__.text }, text))));
    }
}


/***/ }),

/***/ "./src/services/toast-manager/ui/toasts-container/toasts-container.tsx":
/*!*****************************************************************************!*\
  !*** ./src/services/toast-manager/ui/toasts-container/toasts-container.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastsContainer": () => (/* binding */ ToastsContainer)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _toast_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toast/toast */ "./src/services/toast-manager/ui/toast/toast.tsx");
/* harmony import */ var _toasts_container_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toasts-container.scss */ "./src/services/toast-manager/ui/toasts-container/toasts-container.scss");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models */ "./src/services/toast-manager/models/index.ts");




class ToastsContainer extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
    render() {
        const className = [_toasts_container_scss__WEBPACK_IMPORTED_MODULE_2__.toastsContainer, _toasts_container_scss__WEBPACK_IMPORTED_MODULE_2__[`${this.props.toastType || _models__WEBPACK_IMPORTED_MODULE_3__.ToastType.BottomLeft}`]];
        return ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { className: className.join(' '), "aria-live": "polite" }, this.props.toasts.map((toast) => {
            return ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { className: _toasts_container_scss__WEBPACK_IMPORTED_MODULE_2__.toastRow, key: toast.id },
                (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_toast_toast__WEBPACK_IMPORTED_MODULE_1__.Toast, { ...toast })));
        })));
    }
}


/***/ }),

/***/ "./src/services/upper-bar-manager/models/icon-model.ts":
/*!*************************************************************!*\
  !*** ./src/services/upper-bar-manager/models/icon-model.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
        this.displayName = item.displayName;
        this.label = item.label || item.ariaLabel;
        this.ariaLabel = item.ariaLabel;
        this.order = item.order;
        this.component = item.component;
        this.svgIcon = item.svgIcon;
        this.onClick = item.onClick;
        this.componentRef = (0,preact__WEBPACK_IMPORTED_MODULE_0__.createRef)();
        this.presets =
            item.presets && item.presets.length > 0 ? item.presets : [ReservedPresetNames.Playback, ReservedPresetNames.Live];
        this.shouldHandleOnClick = typeof item.shouldHandleOnClick === 'boolean' ? item.shouldHandleOnClick : true;
        this.isDisabled = item.isDisabled || false;
    }
    update() {
        this.componentRef.current?.forceUpdate();
    }
}
IconModel.nextId = 0;


/***/ }),

/***/ "./src/services/upper-bar-manager/move-controls-manager.ts":
/*!*****************************************************************!*\
  !*** ./src/services/upper-bar-manager/move-controls-manager.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoveControlsManager": () => (/* binding */ MoveControlsManager)
/* harmony export */ });
class MoveControlsManager {
    constructor(player, logger, upperBarManager, redux) {
        this.player = player;
        this.logger = logger;
        this.store = redux.useStore();
        this.upperBarManager = upperBarManager;
        this.store.subscribe(this.handleStoreChange.bind(this));
        this.currentState = this.store.getState();
        this.iconIds = new Map();
    }
    get bottomBarRegistryManager() {
        return this.player.getService('bottomBarRegistryManager') || undefined;
    }
    get state() {
        return this.store.getState();
    }
    handleStoreChange() {
        const newState = this.state;
        const bottomBarRegistryManager = this.bottomBarRegistryManager;
        if (bottomBarRegistryManager && this.currentState.bottomBar !== newState.bottomBar) {
            this.logger.debug('Removing core controls from upper bar');
            // remove all the core icons and clear map
            [...this.iconIds.values()].forEach((iconId) => this.upperBarManager.remove(iconId));
            this.iconIds.clear();
            const { controlsToMove } = newState.bottomBar;
            if (controlsToMove.length > 0) {
                this.logger.debug('Adding core controls to upper bar: ', controlsToMove);
                controlsToMove.forEach((componentName) => {
                    const componentToMove = bottomBarRegistryManager.getComponentItem(componentName);
                    if (componentToMove) {
                        const iconId = this.upperBarManager.add(componentToMove);
                        if (typeof iconId === 'number') {
                            this.iconIds.set(componentName, iconId);
                        }
                    }
                });
            }
            this.currentState = newState;
        }
    }
}


/***/ }),

/***/ "./src/services/upper-bar-manager/ui/displayed-bar/displayed-bar.component.tsx":
/*!*************************************************************************************!*\
  !*** ./src/services/upper-bar-manager/ui/displayed-bar/displayed-bar.component.tsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
        this.moreIconRef = (0,preact__WEBPACK_IMPORTED_MODULE_0__.createRef)();
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
        return displayedControls.length > 0 ? ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { className: _displayed_bar_component_scss__WEBPACK_IMPORTED_MODULE_2__.rightUpperBarWrapperContainer },
            displayedControls.map(({ id, component, onClick, componentRef, shouldHandleOnClick }) => {
                const IconWrapperComponent = component;
                return ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_icon_wrapper_icon_wrapper_component__WEBPACK_IMPORTED_MODULE_1__.IconWrapper, { key: id, onClick: (...e) => {
                        if (shouldHandleOnClick) {
                            onClick(...e);
                        }
                        this.closeDropdown();
                    }, ref: componentRef },
                    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(IconWrapperComponent, null)));
            }),
            dropdownControls.length > 0 && ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_more_icon_more_icon_component__WEBPACK_IMPORTED_MODULE_4__.MoreIcon, { showDropdown: this.state.showDropdown, onClick: this.handleOnClick, icons: dropdownControls, player: this.props.player, ref: (node) => {
                    this.moreIconRef.current = node;
                } })))) : undefined;
    }
};
DisplayedBar = __decorate([
    connect(mapStateToProps, null, null, { forwardRef: true })
], DisplayedBar);



/***/ }),

/***/ "./src/services/upper-bar-manager/ui/dropdown-bar-item/dropdown-bar-item.tsx":
/*!***********************************************************************************!*\
  !*** ./src/services/upper-bar-manager/ui/dropdown-bar-item/dropdown-bar-item.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownBarItem": () => (/* binding */ DropdownBarItem)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact/hooks */ "preact/hooks");
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(preact_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dropdown_bar_item_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown-bar-item.scss */ "./src/services/upper-bar-manager/ui/dropdown-bar-item/dropdown-bar-item.scss");
/* harmony import */ var preact_render_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact-render-to-string */ "./node_modules/preact-render-to-string/dist/index.module.js");
/* harmony import */ var _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @playkit-js/kaltura-player-js */ "@playkit-js/kaltura-player-js");
/* harmony import */ var _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _playkit_js_common_dist_hoc_a11y_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @playkit-js/common/dist/hoc/a11y-wrapper */ "./node_modules/@playkit-js/common/dist/hoc/a11y-wrapper/index.js");






const { Icon, Tooltip } = _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_4__.ui.Components;
const PADDING = 11;
const DropdownBarItem = ({ displayName, text, ariaLabel, isDisabled, icon, onClick, onDropdownClick, tooltipPosition }) => {
    const comparisonTextRef = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const textRef = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [showTooltip, setShowTooltip] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isFinalized, setIsFinalized] = (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,preact_hooks__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(() => {
        if (!isFinalized && textRef?.current && comparisonTextRef?.current) {
            setIsFinalized(true);
            const textWidth = textRef?.current.getBoundingClientRect().width - PADDING;
            const comparisonTextWidth = comparisonTextRef?.current.getBoundingClientRect().width;
            setShowTooltip(comparisonTextWidth > textWidth);
        }
    });
    const renderIcon = () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(Icon, { type: icon.type, id: displayName, path: icon.path, viewBox: icon.viewBox || '0 0 32 32' });
    };
    const textElement = ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", { className: [_dropdown_bar_item_scss__WEBPACK_IMPORTED_MODULE_2__.dropdownItemDescription, showTooltip ? _dropdown_bar_item_scss__WEBPACK_IMPORTED_MODULE_2__.trimText : ''].join(' '), ref: textRef }, text));
    const comparisonTextElement = ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("span", { ref: comparisonTextRef, className: _dropdown_bar_item_scss__WEBPACK_IMPORTED_MODULE_2__.comparisonText }, text));
    const content = !isFinalized ? ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        textElement,
        comparisonTextElement)) : (textElement);
    const ariaLabelString = typeof ariaLabel === 'string' ? ariaLabel : (0,preact_render_to_string__WEBPACK_IMPORTED_MODULE_3__.renderToString)(ariaLabel);
    const renderContent = () => {
        return ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_playkit_js_common_dist_hoc_a11y_wrapper__WEBPACK_IMPORTED_MODULE_5__.A11yWrapper, { onClick: (e) => {
                onClick(e);
                onDropdownClick();
            }, role: "menuitem" },
            (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { className: [_dropdown_bar_item_scss__WEBPACK_IMPORTED_MODULE_2__.dropdownItem, isDisabled ? _dropdown_bar_item_scss__WEBPACK_IMPORTED_MODULE_2__.disabled : ''].join(' '), tabIndex: 0, "aria-label": ariaLabelString },
                (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { className: _dropdown_bar_item_scss__WEBPACK_IMPORTED_MODULE_2__.icon }, renderIcon()),
                content)));
    };
    return ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(preact__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, showTooltip ? (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(Tooltip, { label: text, type: tooltipPosition, className: _dropdown_bar_item_scss__WEBPACK_IMPORTED_MODULE_2__.moreItemTooltip }, renderContent())) : (renderContent())));
};



/***/ }),

/***/ "./src/services/upper-bar-manager/ui/dropdown-bar/dropdown-bar.component.tsx":
/*!***********************************************************************************!*\
  !*** ./src/services/upper-bar-manager/ui/dropdown-bar/dropdown-bar.component.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownBar": () => (/* binding */ DropdownBar)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dropdown_bar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown-bar.component.scss */ "./src/services/upper-bar-manager/ui/dropdown-bar/dropdown-bar.component.scss");
/* harmony import */ var _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @playkit-js/kaltura-player-js */ "@playkit-js/kaltura-player-js");
/* harmony import */ var _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dropdown_bar_item_dropdown_bar_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dropdown-bar-item/dropdown-bar-item */ "./src/services/upper-bar-manager/ui/dropdown-bar-item/dropdown-bar-item.tsx");




// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const { Scrollable } = _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_2__.ui.Components;
const PADDING_FROM_BOTTOM = 16;
class DropdownBar extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
    calculateMaxHeight() {
        const playerHeight = this.props.player.getVideoElement().clientHeight;
        // taking the topBarMaxHeight from the window because ui-managers repo is not working with updated ui version
        // once aligning ui-managers with latest ui we can import ui and get the topBarMaxHeight from there, instead of window
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return playerHeight - Number(window.KalturaPlayer.ui.style.topBarMaxHeight) - PADDING_FROM_BOTTOM;
    }
    render() {
        const maxHeightStyle = this.calculateMaxHeight();
        const dropDownProps = {
            className: _dropdown_bar_component_scss__WEBPACK_IMPORTED_MODULE_1__.moreDropdown,
            role: 'menu',
            ariaExpanded: true,
            style: { maxHeight: `${maxHeightStyle}px` }
        };
        const controlsLength = this.props.controls.length;
        return ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { ...dropDownProps },
            (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(Scrollable, { isVertical: true }, this.props.controls.map(({ id, displayName, label, ariaLabel, svgIcon, onClick, isDisabled }, index) => {
                const icon = typeof svgIcon === 'function' ? svgIcon() : svgIcon;
                const text = typeof label === 'function' ? label() : label;
                const ariaLabelText = typeof ariaLabel === 'function' ? ariaLabel() : ariaLabel;
                const isDisabledValue = typeof isDisabled === 'function' ? isDisabled() : isDisabled;
                return ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_dropdown_bar_item_dropdown_bar_item__WEBPACK_IMPORTED_MODULE_3__.DropdownBarItem, { key: id, displayName: displayName, text: text, ariaLabel: ariaLabelText, isDisabled: isDisabledValue, icon: icon, onClick: onClick, onDropdownClick: this.props.onDropdownClick, tooltipPosition: index === controlsLength - 1 ? 'top' : 'bottom' }));
            }))));
    }
}


/***/ }),

/***/ "./src/services/upper-bar-manager/ui/icon-wrapper/icon-wrapper.component.tsx":
/*!***********************************************************************************!*\
  !*** ./src/services/upper-bar-manager/ui/icon-wrapper/icon-wrapper.component.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconWrapper": () => (/* binding */ IconWrapper)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _playkit_js_common_dist_hoc_a11y_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @playkit-js/common/dist/hoc/a11y-wrapper */ "./node_modules/@playkit-js/common/dist/hoc/a11y-wrapper/index.js");


class IconWrapper extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
    render() {
        return ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_playkit_js_common_dist_hoc_a11y_wrapper__WEBPACK_IMPORTED_MODULE_1__.A11yWrapper, { role: null, onClick: this.props.onClick },
            (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", null, (0,preact__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(this.props.children))));
    }
}


/***/ }),

/***/ "./src/services/upper-bar-manager/ui/more-icon/more-icon.component.tsx":
/*!*****************************************************************************!*\
  !*** ./src/services/upper-bar-manager/ui/more-icon/more-icon.component.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
            (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(Tooltip, { label: this.props.moreIconTxt, type: "bottom-left", strictPosition: true },
                (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_playkit_js_common_dist_hoc_a11y_wrapper__WEBPACK_IMPORTED_MODULE_1__.A11yWrapper, { onClick: this.props.onClick },
                    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", { ref: this.moreButtonRef, className: `${_playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_2__.ui.style.upperBarIcon} ${_more_icon_component_scss__WEBPACK_IMPORTED_MODULE_3__.moreIcon}`, tabIndex: 0, "aria-label": this.props.moreIconTxt },
                        (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(Icon, { id: `${_ui_managers__WEBPACK_IMPORTED_MODULE_5__.pluginName}-upper-bar-manager`, path: ICON_PATH, viewBox: '0 0 32 32' })))),
            this.props.showDropdown && ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", null,
                (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_dropdown_bar_dropdown_bar_component__WEBPACK_IMPORTED_MODULE_4__.DropdownBar, { onDropdownClick: this.props.onClick, controls: this.props.icons, player: this.props.player })))));
    }
};
MoreIcon = __decorate([
    withEventManager,
    withText({ moreIconTxt: (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(Text, { id: "uiManagers.moreIcon" }, "More") })
], MoreIcon);



/***/ }),

/***/ "./src/services/upper-bar-manager/upper-bar-manager.tsx":
/*!**************************************************************!*\
  !*** ./src/services/upper-bar-manager/upper-bar-manager.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _move_controls_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./move-controls-manager */ "./src/services/upper-bar-manager/move-controls-manager.ts");





const { ReservedPresetAreas, ReservedPresetNames, redux } = _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_0__.ui;
const UPPER_BAR_PRESETS = Object.values(ReservedPresetNames).filter((preset) => preset !== ReservedPresetNames.Idle && preset !== ReservedPresetNames.Error);
class UpperBarManager {
    /**
     * @ignore
     */
    constructor(player, logger) {
        this.player = player;
        this.componentsRegistry = new Map();
        this.logger = logger;
        this.displayedBarComponentRefs = {};
        this.iconsOrder = {};
        UPPER_BAR_PRESETS.forEach((preset) => (this.displayedBarComponentRefs[preset] = (0,preact__WEBPACK_IMPORTED_MODULE_2__.createRef)()));
        this.injectDisplayedBarComponentWrapper();
        this.moveControlsManager = new _move_controls_manager__WEBPACK_IMPORTED_MODULE_4__.MoveControlsManager(player, logger, this, redux);
    }
    add(icon) {
        if (UpperBarManager.validateItem(icon)) {
            const newIcon = new _models_icon_model__WEBPACK_IMPORTED_MODULE_1__.IconModel(icon);
            this.componentsRegistry.set(newIcon.id, newIcon);
            this.iconsOrder[icon.displayName] = icon.order;
            newIcon.presets.forEach((preset) => this.displayedBarComponentRefs[preset].current?.update());
            this.logger.debug(`control '${newIcon.displayName}' added, id: '${newIcon.id}' `);
            return newIcon.id;
        }
        this.logger.error('icon cannot be added due to invalid parameters', JSON.stringify(icon));
        return undefined;
    }
    remove(itemId) {
        const icon = this.componentsRegistry.get(itemId);
        if (icon) {
            this.componentsRegistry.delete(itemId);
            icon.presets.forEach((preset) => this.displayedBarComponentRefs[preset].current?.update());
            this.logger.debug(`control '${icon.displayName}' removed, id: '${icon.id}' `);
        }
        else {
            this.logger.warn(`control ${itemId} is not registered`);
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
            this.logger.warn(`control ${iconId} is not registered`);
        }
    }
    getControls(iconsOrder) {
        const icons = Array.from(this.componentsRegistry.values());
        return icons.sort((a, b) => iconsOrder[a.displayName] - iconsOrder[b.displayName]);
    }
    getMorePluginButton() {
        const moreElement = this.displayedBarComponentRefs.Playback.current?.moreIconRef?.current?.base;
        return moreElement?.querySelector('[tabindex="0"]');
    }
    focusPluginButton(pluginId, event) {
        let pluginButton;
        const controls = this.getControls(this.iconsOrder);
        const pluginElement = controls.find((control) => control.id === pluginId)?.componentRef?.current?.base;
        if (pluginElement) {
            pluginButton = pluginElement.querySelector('[tabindex="0"]');
        }
        else {
            pluginButton = this.getMorePluginButton();
        }
        if (pluginButton) {
            event?.preventDefault();
            pluginButton.focus();
        }
    }
    injectDisplayedBarComponentWrapper() {
        const iconsOrder = this.iconsOrder;
        for (const preset of UPPER_BAR_PRESETS) {
            this.player.ui.addComponent({
                label: 'Right-Upper-Bar-Wrapper',
                presets: [preset],
                area: ReservedPresetAreas.TopBarRightControls,
                get: () => {
                    return ((0,preact__WEBPACK_IMPORTED_MODULE_2__.h)(_ui_displayed_bar_displayed_bar_component__WEBPACK_IMPORTED_MODULE_3__.DisplayedBar, { ref: this.displayedBarComponentRefs[preset], getControls: () => this.getControls(iconsOrder).filter((icon) => icon.presets.includes(preset)), player: this.player }));
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

"use strict";
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
/* harmony import */ var _services_toast_manager_toast_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/toast-manager/toast-manager */ "./src/services/toast-manager/toast-manager.tsx");
/* harmony import */ var _services_banner_manager_banner_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/banner-manager/banner-manager */ "./src/services/banner-manager/banner-manager.tsx");
/* harmony import */ var _services_component_injection_manager_component_injection_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/component-injection-manager/component-injection-manager */ "./src/services/component-injection-manager/component-injection-manager.tsx");








const pluginName = 'uiManagers';
/**
 * manages the registration of UI services
 * @internal
 */
class UIManagers extends _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_0__.BasePlugin {
    constructor(name, player, config) {
        super(name, player, config);
        player.registerService('sidePanelsManager', new _services_side_panels_manager_side_panels_manager__WEBPACK_IMPORTED_MODULE_1__.SidePanelsManager(player, this.logger));
        player.registerService('upperBarManager', new _services_upper_bar_manager_upper_bar_manager__WEBPACK_IMPORTED_MODULE_2__.UpperBarManager(player, this.logger));
        const presetManager = new _services_preset_manager_preset_manager__WEBPACK_IMPORTED_MODULE_4__.PresetManager({
            kalturaPlayer: player,
            eventManager: this.eventManager
        });
        const floatingManager = new _services_floating_manager_floating_manager__WEBPACK_IMPORTED_MODULE_3__.FloatingManager({
            presetManager,
            kalturaPlayer: player,
            logger: this.logger,
            eventManager: this.eventManager
        });
        player.registerService('floatingManager', floatingManager);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        player.registerService('toastManager', new _services_toast_manager_toast_manager__WEBPACK_IMPORTED_MODULE_5__.ToastManager({ floatingManager }, (event) => this.dispatchEvent(event)));
        player.registerService('bannerManager', new _services_banner_manager_banner_manager__WEBPACK_IMPORTED_MODULE_6__.BannerManager({ floatingManager, kalturaPlayer: player }));
        this._componentInjectionManager = new _services_component_injection_manager_component_injection_manager__WEBPACK_IMPORTED_MODULE_7__.ComponentInjectionManager({
            kalturaPlayer: player,
            eventManager: this.eventManager
        });
        player.registerService('componentInjectionManager', this._componentInjectionManager);
    }
    static isValid() {
        return true;
    }
    getComponentInjectionManager() {
        return this._componentInjectionManager;
    }
    destroy() {
        this._componentInjectionManager?.destroy();
        super.destroy();
    }
}
UIManagers.defaultConfig = {};


/***/ }),

/***/ "@playkit-js/kaltura-player-js":
/*!********************************!*\
  !*** external "KalturaPlayer" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = KalturaPlayer;

/***/ }),

/***/ "preact":
/*!******************************************!*\
  !*** external "KalturaPlayer.ui.preact" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = KalturaPlayer.ui.preact;

/***/ }),

/***/ "preact/hooks":
/*!***********************************************!*\
  !*** external "KalturaPlayer.ui.preactHooks" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = KalturaPlayer.ui.preactHooks;

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentInjectionManager": () => (/* reexport safe */ _services_component_injection_manager_component_injection_manager__WEBPACK_IMPORTED_MODULE_2__.ComponentInjectionManager),
/* harmony export */   "InjectionPosition": () => (/* reexport safe */ _services_component_injection_manager_models__WEBPACK_IMPORTED_MODULE_3__.InjectionPosition)
/* harmony export */ });
/* harmony import */ var _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @playkit-js/kaltura-player-js */ "@playkit-js/kaltura-player-js");
/* harmony import */ var _playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_managers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-managers */ "./src/ui-managers.ts");
/* harmony import */ var _services_component_injection_manager_component_injection_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/component-injection-manager/component-injection-manager */ "./src/services/component-injection-manager/component-injection-manager.tsx");
/* harmony import */ var _services_component_injection_manager_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/component-injection-manager/models */ "./src/services/component-injection-manager/models/index.ts");


(0,_playkit_js_kaltura_player_js__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)(_ui_managers__WEBPACK_IMPORTED_MODULE_1__.pluginName, _ui_managers__WEBPACK_IMPORTED_MODULE_1__.UIManagers);



})();

/******/ })()
;
//# sourceMappingURL=playkit-ui-managers.js.map