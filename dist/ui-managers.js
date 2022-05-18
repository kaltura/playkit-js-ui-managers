/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/side-panels/ui/toggel.scss":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/side-panels/ui/toggel.scss ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "active": () => (/* binding */ active),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "sidePanel": () => (/* binding */ sidePanel)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".side-panel_eQxAW {\n  visibility: hidden; }\n\n.active_evVeN {\n  visibility: visible; }\n", "",{"version":3,"sources":["webpack://./src/services/side-panels/ui/toggel.scss"],"names":[],"mappings":"AAAA;EACE,kBAAkB,EAAA;;AAGpB;EACE,mBAAmB,EAAA","sourcesContent":[".side-panel {\n  visibility: hidden;\n}\n\n.active {\n  visibility: visible;\n}"],"sourceRoot":""}]);
// Exports
var sidePanel = "side-panel_eQxAW";
var active = "active_evVeN";
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

/***/ "./src/services/side-panels/ui/toggel.scss":
/*!*************************************************!*\
  !*** ./src/services/side-panels/ui/toggel.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "active": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_toggel_scss__WEBPACK_IMPORTED_MODULE_6__.active),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "sidePanel": () => (/* reexport safe */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_toggel_scss__WEBPACK_IMPORTED_MODULE_6__.sidePanel)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_toggel_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./toggel.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/services/side-panels/ui/toggel.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_toggel_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_toggel_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_toggel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_toggel_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/services/side-panels/models/item-wrapper.ts":
/*!*********************************************************!*\
  !*** ./src/services/side-panels/models/item-wrapper.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemWrapper": () => (/* binding */ ItemWrapper)
/* harmony export */ });
/**
 * Panel item metadata
 * @internal
 */
class ItemWrapper {
    constructor(item, componentRef, removePanelComponentFunc) {
        this.id = ++ItemWrapper.nextId;
        this.item = item;
        this.removePanelComponentFunc = removePanelComponentFunc;
        this.removeIconComponentFn = () => {
            return;
        };
        this.componentRef = componentRef;
    }
    set removeIconComponentFunc(removeIconComponentFunc) {
        this.removeIconComponentFn = removeIconComponentFunc;
    }
}
ItemWrapper.nextId = 0;


/***/ }),

/***/ "./src/services/side-panels/models/side-panel-item-dto.ts":
/*!****************************************************************!*\
  !*** ./src/services/side-panels/models/side-panel-item-dto.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidePanelItem": () => (/* binding */ SidePanelItem)
/* harmony export */ });
class SidePanelItem {
    constructor(item) {
        this.label = item.label;
        this.renderIcon = item.renderIcon;
        this.renderContent = item.renderContent;
        this.presets = item.presets;
        this.position = item.position;
        this.expandMode = item.expandMode;
        this.onActivate = item.onActivate;
        this.onDeactivate = item.onDeactivate;
    }
}


/***/ }),

/***/ "./src/services/side-panels/side-panels-manager.tsx":
/*!**********************************************************!*\
  !*** ./src/services/side-panels/side-panels-manager.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidePanelsManager": () => (/* binding */ SidePanelsManager)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var kaltura_player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kaltura-player-js */ "kaltura-player-js");
/* harmony import */ var kaltura_player_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(kaltura_player_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_side_panel_item_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/side-panel-item-dto */ "./src/services/side-panels/models/side-panel-item-dto.ts");
/* harmony import */ var _ui_toggel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/toggel */ "./src/services/side-panels/ui/toggel.tsx");
/* harmony import */ var _models_item_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/item-wrapper */ "./src/services/side-panels/models/item-wrapper.ts");





const { SidePanelModes, SidePanelPositions, ReservedPresetNames, ReservedPresetAreas } = kaltura_player_js__WEBPACK_IMPORTED_MODULE_1__.ui;
const OPPOSITE_PANELS = {
    [SidePanelPositions.TOP]: SidePanelPositions.BOTTOM,
    [SidePanelPositions.BOTTOM]: SidePanelPositions.TOP,
    [SidePanelPositions.RIGHT]: SidePanelPositions.LEFT,
    [SidePanelPositions.LEFT]: SidePanelPositions.RIGHT
};
class SidePanelsManager {
    constructor(player, logger) {
        this.player = player;
        this.activePanels = { top: null, bottom: null, right: null, left: null };
        this.componentsRegistry = new Map();
        this.logger = logger;
    }
    addItem(item) {
        if (SidePanelsManager.validateItem(item)) {
            const newPanelItem = new _models_side_panel_item_dto__WEBPACK_IMPORTED_MODULE_2__.SidePanelItem(item);
            const { componentRef, removeComponentFunc } = this.injectPanelComponent(newPanelItem);
            const newItemWrapper = new _models_item_wrapper__WEBPACK_IMPORTED_MODULE_4__.ItemWrapper(newPanelItem, componentRef, removeComponentFunc);
            if (item.renderIcon) {
                newItemWrapper.removeIconComponentFunc = this.injectIconComponent(newItemWrapper);
            }
            this.componentsRegistry.set(newItemWrapper.id, newItemWrapper);
            this.logger.debug('New Panel Item Added', item);
            return newItemWrapper.id;
        }
        this.logger.warn('Invalid SidePanelItem parameters', item);
    }
    removeItem(itemId) {
        const item = this.componentsRegistry.get(itemId);
        if (item) {
            if (this.isItemActive(itemId))
                this.deactivateItem(itemId);
            item.removePanelComponentFunc();
            item.removeIconComponentFunc();
            this.componentsRegistry.delete(itemId);
        }
        else {
            this.logger.warn(`${itemId} is not registered`);
        }
    }
    activateItem(itemId) {
        const itemMetadata = this.componentsRegistry.get(itemId);
        if (itemMetadata) {
            const { position, expandMode } = itemMetadata.item;
            // Trying to activate an already active item
            if (this.isItemActive(itemId))
                return;
            // Switch between items if currently there is an active one (without collapsing / expanding PS)
            let switchMode = false;
            if (this.activePanels[position] !== null) {
                switchMode = true;
                this.deactivateItem(this.activePanels[position].id, switchMode);
            }
            // Deactivate the opposite panel if is active
            const oppositePosition = SidePanelsManager.getOppositePanelPosition(position);
            if (this.activePanels[oppositePosition]) {
                this.deactivateItem(this.activePanels[oppositePosition].id);
            }
            // Update new item as active
            itemMetadata.componentRef.current?.toggle(switchMode);
            this.expand(position, expandMode);
            this.activePanels[position] = itemMetadata;
            itemMetadata.item.onActivate?.();
        }
        else {
            this.logger.warn(`${itemId} is not registered`);
        }
    }
    deactivateItem(itemId, switchMode) {
        const itemMetadata = this.componentsRegistry.get(itemId);
        if (itemMetadata) {
            if (!this.isItemActive(itemId))
                return;
            const { position } = itemMetadata.item;
            this.activePanels[position]?.componentRef.current?.toggle(switchMode);
            this.collapse(position);
            this.activePanels[position] = null;
            itemMetadata.item.onDeactivate?.();
        }
        else {
            this.logger.warn(`${itemId} is not registered`);
        }
    }
    isItemActive(itemId) {
        const itemMetadata = this.componentsRegistry.get(itemId);
        return itemMetadata ? this.activePanels[itemMetadata.item.position]?.id === itemId : false;
    }
    reset() {
        for (const value of this.componentsRegistry.values()) {
            this.removeItem(value.id);
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
        this.player.ui.store.dispatch(kaltura_player_js__WEBPACK_IMPORTED_MODULE_1__.ui.reducers.shell.actions.updateSidePanelMode(position, expandMode));
    }
    collapse(position) {
        this.player.ui.store.dispatch(kaltura_player_js__WEBPACK_IMPORTED_MODULE_1__.ui.reducers.shell.actions.updateSidePanelMode(position, SidePanelModes.HIDDEN));
    }
    injectIconComponent(panelItemData) {
        const { id, item } = panelItemData;
        const IconComponent = item.renderIcon;
        const togglePanelFunc = () => this.toggle(id);
        return this.player.ui.addComponent({
            label: `Side-Panel-Icon-${item.label}`,
            presets: item.presets,
            area: ReservedPresetAreas.TopBarRightControls,
            get: function MyComponent() {
                return ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { onClick: togglePanelFunc },
                    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(IconComponent, null)));
            }
        });
    }
    injectPanelComponent(item) {
        const { label, position, renderContent, presets } = item;
        const SidePanelComponent = renderContent;
        const componentRef = (0,preact__WEBPACK_IMPORTED_MODULE_0__.createRef)();
        const removeComponentFunc = this.player.ui.addComponent({
            label: `Side-panel-${position}-${label}`,
            presets,
            area: SidePanelsManager.getPanelArea(position),
            get: () => {
                return ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_ui_toggel__WEBPACK_IMPORTED_MODULE_3__.Toggle, { ref: componentRef },
                    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(SidePanelComponent, null)));
            }
        });
        return { componentRef, removeComponentFunc };
    }
    static getPanelArea(position) {
        return `SidePanel${position.charAt(0).toUpperCase()}${position.slice(1)}`;
    }
    static getOppositePanelPosition(position) {
        return OPPOSITE_PANELS[position];
    }
    static validateItem(item) {
        const { label, renderContent, renderIcon, position, expandMode, onActivate, onDeactivate, presets } = item;
        return !!(label &&
            Object.values(SidePanelPositions).includes(position) &&
            Object.values(SidePanelModes).includes(expandMode) &&
            presets.every(preset => Object.values(ReservedPresetNames).includes(preset)) &&
            typeof renderContent === 'function' &&
            (typeof renderIcon === 'function' || renderIcon === undefined) &&
            (typeof onActivate === 'function' || onActivate === undefined) &&
            (typeof onDeactivate === 'function' || onDeactivate === undefined));
    }
}


/***/ }),

/***/ "./src/services/side-panels/ui/toggel.tsx":
/*!************************************************!*\
  !*** ./src/services/side-panels/ui/toggel.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Toggle": () => (/* binding */ Toggle)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "preact");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _toggel_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggel.scss */ "./src/services/side-panels/ui/toggel.scss");
/* harmony import */ var kaltura_player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kaltura-player-js */ "kaltura-player-js");
/* harmony import */ var kaltura_player_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(kaltura_player_js__WEBPACK_IMPORTED_MODULE_2__);



const { defaultTransitionTime } = kaltura_player_js__WEBPACK_IMPORTED_MODULE_2__.ui.style;
/**
 * Toggle component rapper
 * @internal
 */
class Toggle extends preact__WEBPACK_IMPORTED_MODULE_0__.Component {
    constructor() {
        super();
        this.state = { on: false };
        this.switchMode = false;
    }
    toggle(switchMode) {
        this.switchMode = !!switchMode;
        this.setState((state) => {
            return { on: !state.on };
        });
    }
    render() {
        return ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { className: [_toggel_scss__WEBPACK_IMPORTED_MODULE_1__.sidePanel, this.state.on ? _toggel_scss__WEBPACK_IMPORTED_MODULE_1__.active : ''].join(' '), style: !this.state.on && !this.switchMode ? { transition: `visibility ${defaultTransitionTime}ms` } : '' }, this.props.children));
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
/* harmony import */ var kaltura_player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kaltura-player-js */ "kaltura-player-js");
/* harmony import */ var kaltura_player_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kaltura_player_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_side_panels_side_panels_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/side-panels/side-panels-manager */ "./src/services/side-panels/side-panels-manager.tsx");


const pluginName = 'uiManagers';
/**
 * manages the registration of UI services
 * @internal
 */
class UIManagers extends kaltura_player_js__WEBPACK_IMPORTED_MODULE_0__.BasePlugin {
    constructor(name, player) {
        super(name, player);
        player.registerService('sidePanelsManager', new _services_side_panels_side_panels_manager__WEBPACK_IMPORTED_MODULE_1__.SidePanelsManager(player, this.logger));
    }
    reset() {
        this.player.getService('sidePanelsManager').reset();
    }
    destroy() {
        this.reset();
    }
    static isValid() {
        return true;
    }
}
UIManagers.defaultConfig = {};


/***/ }),

/***/ "kaltura-player-js":
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/* harmony import */ var kaltura_player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kaltura-player-js */ "kaltura-player-js");
/* harmony import */ var kaltura_player_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kaltura_player_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_managers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-managers */ "./src/ui-managers.ts");


(0,kaltura_player_js__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)(_ui_managers__WEBPACK_IMPORTED_MODULE_1__.pluginName, _ui_managers__WEBPACK_IMPORTED_MODULE_1__.UIManagers);

})();

/******/ })()
;
//# sourceMappingURL=ui-managers.js.map