/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/style.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/style.scss ***!
  \*********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./open-sans.ttf */ "./src/open-sans.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./banner-background.jpg */ "./src/banner-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./frying-pan.jpg */ "./src/frying-pan.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./spices.jpg */ "./src/spices.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./dinner-table.jpg */ "./src/dinner-table.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "open sans";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-style: normal;
  font-weight: 400;
}
h1,
h2,
h3,
ul,
a,
body {
  margin: 0;
  color: inherit;
}

body {
  font-family: "open sans", Arial, Helvetica, sans-serif;
  font-size: 16px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#content {
  display: flex;
  flex-wrap: wrap;
}
#content #side-bar {
  flex: 0 0 min-content;
  background-color: #F3DA81;
  color: white;
  padding: 1rem;
  font-size: 25px;
  display: flex;
  flex-flow: column nowrap;
}
#content #side-bar > div {
  position: sticky;
  align-self: flex-start;
  top: 0;
}
#content #side-bar h1 {
  font-size: min(10vw, 2em);
  margin: 1em 0;
}
#content #side-bar ul li {
  margin-bottom: 2em;
}
@media screen and (max-width: 750px) {
  #content #side-bar {
    flex-grow: 1;
    position: sticky;
    top: 0;
    width: 100vw;
  }
  #content #side-bar > div {
    align-self: stretch;
  }
  #content #side-bar h1 {
    margin: 0;
    text-align: center;
  }
  #content #side-bar ul {
    display: none;
  }
}
#content .page {
  flex: 500px;
}
#content .page .banner {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  background-attachment: fixed;
  color: white;
  font-size: 4rem;
}
#content .page article {
  padding: 2rem;
  padding-right: 0;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
}
#content .page article h3 {
  font-size: 40px;
}
#content .page article#story {
  background-color: white;
}
#content .page article#story .text {
  align-self: center;
  grid-column: 1 / 7;
  padding-right: 2rem;
}
#content .page article#story .img-container {
  min-height: 35vw;
  grid-column: 7 / 11;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-size: cover;
  background-position: center;
  margin-right: 0;
}
#content .page article#flavors {
  background-color: #F6FFD1;
}
#content .page article#flavors .text {
  align-self: center;
  grid-column: 6 / 11;
  padding-right: 2rem;
}
#content .page article#flavors .img-container {
  min-height: 35vw;
  grid-column: 1 / 6;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  background-size: cover;
  background-position: center;
  margin-right: 2rem;
  order: -1;
}
#content .page article#CTA {
  background-color: #FFF6D6;
}
#content .page article#CTA .text {
  align-self: center;
  grid-column: 1 / 5;
  padding-right: 1rem;
}
#content .page article#CTA .img-container {
  min-height: 35vw;
  grid-column: 5 / 11;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
  background-size: cover;
  background-position: center;
  margin-right: 0;
}
#content .page footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 6rem;
  background-color: #7D8B9F;
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAQA;EACE,wBAAA;EACA,4CAAA;EACA,kBAAA;EACA,gBAAA;AAPF;AAUA;;;;;;EAME,SAAA;EACA,cAAA;AARF;;AAWA;EACE,sDAAA;EACA,eAAA;AARF;;AAWA;EACE,WAAA;EACA,YAAA;EACA,iBAAA;AARF;;AAwBA;EACE,aAAA;EACA,eAAA;AArBF;AAuBE;EACE,qBAAA;EACA,yBAtDS;EAuDT,YAAA;EACA,aAAA;EACA,eAAA;EAGA,aAAA;EACA,wBAAA;AAvBJ;AAyBI;EACE,gBAAA;EACA,sBAAA;EACA,MAAA;AAvBN;AA0BI;EACE,yBAAA;EACA,aAAA;AAxBN;AA2BI;EACE,kBAAA;AAzBN;AA6BI;EA3BF;IA4BI,YAAA;IACA,gBAAA;IACA,MAAA;IACA,YAAA;EA1BJ;EA4BI;IACE,mBAAA;EA1BN;EA6BI;IACE,SAAA;IACA,kBAAA;EA3BN;EA8BI;IACE,aAAA;EA5BN;AACF;AAgCE;EACE,WAAA;AA9BJ;AAgCI;EAnEF,yDAAA;EACA,sBAAA;EACA,2BAAA;EAIA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EA8DI,YAAA;EACA,4BAAA;EACA,YAAA;EACA,eAAA;AA1BN;AA8BI;EACE,aAAA;EACA,gBAAA;EACA,aAAA;EACA,sCAAA;AA5BN;AA8BM;EACE,eAAA;AA5BR;AAsDI;EApBE,uBAqBuE;AApD7E;AAiCM;EACE,kBAAA;EACA,kBAAA;EACA,mBAgB0B;AA/ClC;AAkCM;EACE,gBAAA;EACA,mBAAA;EArGN,yDAAA;EACA,sBAAA;EACA,2BAAA;EAqGM,eASc;AAvCtB;AA0CI;EAxBE,yBA9HQ;AA+Gd;AAiBM;EACE,kBAAA;EACA,mBAAA;EACA,mBAoB8B;AAnCtC;AAkBM;EACE,gBAAA;EACA,kBAAA;EArGN,yDAAA;EACA,sBAAA;EACA,2BAAA;EAqGM,kBAac;EAVZ,SAAA;AAhBV;AA6BI;EA5BE,yBA7HS;AA+Hf;AAAM;EACE,kBAAA;EACA,kBAAA;EACA,mBAwB0B;AAtBlC;AACM;EACE,gBAAA;EACA,mBAAA;EArGN,yDAAA;EACA,sBAAA;EACA,2BAAA;EAqGM,eAiBc;AAdtB;AAiBI;EArHF,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EAoHI,YAAA;EACA,yBA9JM;AAkJZ","sourcesContent":["// color scheme\n$light-gold: #F3DA81;\n$light-green: #F6FFD1;\n$light-orange: #FFF6D6;\n$light-blue: #D3DCE9;\n$gray-blue: #7D8B9F;\n\n// fonts\n@font-face {\n  font-family: 'open sans';\n  src: url('./open-sans.ttf');\n  font-style: normal;\n  font-weight: 400;\n}\n\nh1,\nh2,\nh3,\nul,\na,\nbody {\n  margin: 0;\n  color: inherit;\n}\n\nbody {\n  font-family: 'open sans', Arial, Helvetica, sans-serif;\n  font-size: 16px;\n}\n\nimg {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n@mixin center-bg($url) {\n  background-image: url($url);\n  background-size: cover;\n  background-position: center;\n}\n\n@mixin center-content() {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#content {\n  display: flex;\n  flex-wrap: wrap;\n\n  #side-bar {\n    flex: 0 0 min-content;\n    background-color: $light-gold;\n    color: white;\n    padding: 1rem;\n    font-size: 25px;\n\n    // make content stay fixed to side, without being absolute\n    display: flex;\n    flex-flow: column nowrap;\n\n    >div {\n      position: sticky;\n      align-self: flex-start;\n      top: 0;\n    }\n\n    h1 {\n      font-size: min(10vw, 2em);\n      margin: 1em 0;\n    }\n\n    ul li {\n      margin-bottom: 2em;\n    }\n\n    // make side-bar go across when wrapped\n    @media screen and (max-width: 750px) {\n      flex-grow: 1;\n      position: sticky;\n      top: 0;\n      width: 100vw;\n\n      >div {\n        align-self: stretch;\n      }\n\n      h1 {\n        margin: 0;\n        text-align: center;\n      }\n\n      ul {\n        display: none;\n      }\n    }\n  }\n\n  .page {\n    flex: 500px;\n\n    .banner {\n      @include center-bg(\"./banner-background.jpg\");\n      @include center-content();\n\n      height: 70vh;\n      background-attachment: fixed; // parralax effect\n      color: white;\n      font-size: 4rem;\n    }\n\n    // general rules\n    article {\n      padding: 2rem;\n      padding-right: 0;\n      display: grid;\n      grid-template-columns: repeat(10, 1fr);\n\n      h3 {\n        font-size: 40px;\n      }\n    }\n\n    // keep it DRY when declaring unique layouts for articles\n    @mixin layout($padding-left-text, $text-cols, $padding-right-text, $img-cols, $img-src, $img-first: false, $bg-color) {\n      background-color: $bg-color;\n\n      .text {\n        align-self: center;\n        grid-column: #{$text-cols};\n        padding-right: $padding-right-text;\n      }\n\n      .img-container {\n        min-height: 35vw;\n        grid-column: #{$img-cols};\n        @include center-bg($img-src); // img a background so its height is equal to text\n        margin-right: $padding-left-text; // space between img and text, if text if right\n\n        @if $img-first {\n          order: -1;\n        }\n      }\n    }\n\n    article#story {\n      @include layout(0, \"1 / 7\", 2rem, \"7 / 11\", \"./frying-pan.jpg\", false, white);\n    }\n\n    article#flavors {\n      @include layout(2rem, \"6 / 11\", 2rem, \"1 / 6\", \"./spices.jpg\", true, $light-green);\n    }\n\n    article#CTA {\n      @include layout(0, \"1 / 5\", 1rem, \"5 / 11\", \"./dinner-table.jpg\", false, $light-orange);\n    }\n\n    footer {\n      @include center-content();\n      height: 6rem;\n      background-color: $gray-blue;\n    }\n  }\n}"],"sourceRoot":""}]);
// Exports
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/about-page.js":
/*!***************************!*\
  !*** ./src/about-page.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function renderAboutPage() {
  const contentDiv = document.getElementById("content");

  // Create and append navigation bar
  const navBar = document.createElement("nav");
  navBar.id = "side-bar";

  const navDiv = document.createElement("div");
  const navHeading = document.createElement("h1");
  navHeading.textContent = "Kaj's Kitchen";

  const navList = document.createElement("ul");
  const navItems = ["About", "Menu", "Location"];

  navItems.forEach(itemText => {
    const li = document.createElement("li");
    li.textContent = itemText;
    navList.appendChild(li);
  });

  navDiv.appendChild(navHeading);
  navDiv.appendChild(navList);
  navBar.appendChild(navDiv);
  contentDiv.appendChild(navBar);

  // Create and append main section
  const mainSection = document.createElement("main");
  mainSection.className = "page";

  const banner = document.createElement("hgroup");
  banner.className = "banner";
  const bannerHeading = document.createElement("h2");
  bannerHeading.textContent = "Who we are";
  banner.appendChild(bannerHeading);

  const articleStory = createArticle(
    "story",
    "Our Story",
    [
      "Welcome to Kaj's Kitchen, a culinary haven born from a teenage girl's boundless passion and relentless determination.",
      "From a young age, Kaj found solace in the world of spices, flavors, and recipes. What began as an innocent curiosity in her family's kitchen soon evolved into an all-consuming obsession. Her nights were spent experimenting with ingredients, blending cultures, and crafting culinary wonders that transcended her years.",
      "With unwavering support from her family and mentors who recognized her exceptional talent, Kaj's dream began to take shape. Kaj's Kitchen is a testament to the power of nurturing dreams, regardless of age."
    ]
  );

  const articleFlavors = createArticle(
    "flavors",
    "A Journey of Flavors and Dreams",
    [
      "Every dish that graces our menu carries a piece of Kaj's heart and a story of her journey. The fusion of global inspirations and locally sourced ingredients reflects her commitment to excellence. As you savor each bite, you're tasting not just food, but the culmination of years of dedication and love.",
      "Kaj's Kitchen isn't just a dining establishment; it's a welcoming space where innovation thrives, and passion knows no limits. With its inviting ambiance and the warm smiles of our staff, you'll feel like a cherished guest in Kaj's own kitchen."
    ]
  );

  const articleCTA = createArticle(
    "CTA",
    "Experience Kaj's Vision",
    [
      "Step into Kaj's world and experience a culinary adventure that defies expectations. Reserve your table today and embark on a journey that celebrates not just food, but the boundless potential within us all. Come, be a part of our story.",
      // ... other paragraphs ...
    ]
  );

  // Append elements to main section
  mainSection.appendChild(banner);
  mainSection.appendChild(articleStory);
  mainSection.appendChild(articleFlavors);
  mainSection.appendChild(articleCTA);

  // Create and append footer
  const footer = document.createElement("footer");
  footer.className = "by-line";
  const footerParagraph = document.createElement("p");
  footerParagraph.innerHTML = 'By Ariel Robert Mutebi: <a href="#">source repo</a>';
  footer.appendChild(footerParagraph);

  mainSection.appendChild(footer);

  // Append main section to content
  contentDiv.appendChild(mainSection);
}

// Create article element
function createArticle(id, headingText, paragraphs) {
  const article = document.createElement("article");
  article.id = id;

  const textDiv = document.createElement("div");
  textDiv.className = "text";

  const heading = document.createElement("h3");
  heading.textContent = headingText;
  textDiv.appendChild(heading);

  paragraphs.forEach(paragraphText => {
    const paragraph = document.createElement("p");
    paragraph.textContent = paragraphText;
    textDiv.appendChild(paragraph);
  });

  const imgContainer = document.createElement("aside");
  imgContainer.className = "img-container";

  article.appendChild(textDiv);
  article.appendChild(imgContainer);

  return article;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderAboutPage);

/***/ }),

/***/ "./src/banner-background.jpg":
/*!***********************************!*\
  !*** ./src/banner-background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f356e4e42a4620a3f2c.jpg";

/***/ }),

/***/ "./src/dinner-table.jpg":
/*!******************************!*\
  !*** ./src/dinner-table.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b0d36222d5f7e8f45b78.jpg";

/***/ }),

/***/ "./src/frying-pan.jpg":
/*!****************************!*\
  !*** ./src/frying-pan.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "716b3eb06203c92e2763.jpg";

/***/ }),

/***/ "./src/open-sans.ttf":
/*!***************************!*\
  !*** ./src/open-sans.ttf ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "071a1becc7f00e33cc5b.ttf";

/***/ }),

/***/ "./src/spices.jpg":
/*!************************!*\
  !*** ./src/spices.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ec2c8cfbd9c176eb1cac.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-page */ "./src/about-page.js");


(0,_about_page__WEBPACK_IMPORTED_MODULE_1__["default"])()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c2NzcyIsIndlYnBhY2s6Ly9rYWpzLWNvb2tpbmcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2thanMtY29va2luZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8va2Fqcy1jb29raW5nLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8va2Fqcy1jb29raW5nLy4vc3JjL3N0eWxlLnNjc3M/OGJiMSIsIndlYnBhY2s6Ly9rYWpzLWNvb2tpbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8va2Fqcy1jb29raW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9rYWpzLWNvb2tpbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8va2Fqcy1jb29raW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2thanMtY29va2luZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2thanMtY29va2luZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2thanMtY29va2luZy8uL3NyYy9hYm91dC1wYWdlLmpzIiwid2VicGFjazovL2thanMtY29va2luZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rYWpzLWNvb2tpbmcvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8va2Fqcy1jb29raW5nL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rYWpzLWNvb2tpbmcvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9rYWpzLWNvb2tpbmcvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rYWpzLWNvb2tpbmcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rYWpzLWNvb2tpbmcvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8va2Fqcy1jb29raW5nL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2thanMtY29va2luZy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8va2Fqcy1jb29raW5nLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL29wZW4tc2Fucy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Jhbm5lci1iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZnJ5aW5nLXBhbi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL3NwaWNlcy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2Rpbm5lci10YWJsZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwib3BlbiBzYW5zXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5oMSxcbmgyLFxuaDMsXG51bCxcbmEsXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4gc2Fuc1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4jY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbiNjb250ZW50ICNzaWRlLWJhciB7XG4gIGZsZXg6IDAgMCBtaW4tY29udGVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzREE4MTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbn1cbiNjb250ZW50ICNzaWRlLWJhciA+IGRpdiB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIHRvcDogMDtcbn1cbiNjb250ZW50ICNzaWRlLWJhciBoMSB7XG4gIGZvbnQtc2l6ZTogbWluKDEwdncsIDJlbSk7XG4gIG1hcmdpbjogMWVtIDA7XG59XG4jY29udGVudCAjc2lkZS1iYXIgdWwgbGkge1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICAjY29udGVudCAjc2lkZS1iYXIge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwdnc7XG4gIH1cbiAgI2NvbnRlbnQgI3NpZGUtYmFyID4gZGl2IHtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICB9XG4gICNjb250ZW50ICNzaWRlLWJhciBoMSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAjY29udGVudCAjc2lkZS1iYXIgdWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiNjb250ZW50IC5wYWdlIHtcbiAgZmxleDogNTAwcHg7XG59XG4jY29udGVudCAucGFnZSAuYmFubmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDcwdmg7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA0cmVtO1xufVxuI2NvbnRlbnQgLnBhZ2UgYXJ0aWNsZSB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xufVxuI2NvbnRlbnQgLnBhZ2UgYXJ0aWNsZSBoMyB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cbiNjb250ZW50IC5wYWdlIGFydGljbGUjc3Rvcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbiNjb250ZW50IC5wYWdlIGFydGljbGUjc3RvcnkgLnRleHQge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGdyaWQtY29sdW1uOiAxIC8gNztcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcbn1cbiNjb250ZW50IC5wYWdlIGFydGljbGUjc3RvcnkgLmltZy1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAzNXZ3O1xuICBncmlkLWNvbHVtbjogNyAvIDExO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuI2NvbnRlbnQgLnBhZ2UgYXJ0aWNsZSNmbGF2b3JzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RkZEMTtcbn1cbiNjb250ZW50IC5wYWdlIGFydGljbGUjZmxhdm9ycyAudGV4dCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZ3JpZC1jb2x1bW46IDYgLyAxMTtcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcbn1cbiNjb250ZW50IC5wYWdlIGFydGljbGUjZmxhdm9ycyAuaW1nLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDM1dnc7XG4gIGdyaWQtY29sdW1uOiAxIC8gNjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgb3JkZXI6IC0xO1xufVxuI2NvbnRlbnQgLnBhZ2UgYXJ0aWNsZSNDVEEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGNkQ2O1xufVxuI2NvbnRlbnQgLnBhZ2UgYXJ0aWNsZSNDVEEgLnRleHQge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGdyaWQtY29sdW1uOiAxIC8gNTtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbn1cbiNjb250ZW50IC5wYWdlIGFydGljbGUjQ1RBIC5pbWctY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMzV2dztcbiAgZ3JpZC1jb2x1bW46IDUgLyAxMTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbiNjb250ZW50IC5wYWdlIGZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDZyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM3RDhCOUY7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFRQTtFQUNFLHdCQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBUEY7QUFVQTs7Ozs7O0VBTUUsU0FBQTtFQUNBLGNBQUE7QUFSRjs7QUFXQTtFQUNFLHNEQUFBO0VBQ0EsZUFBQTtBQVJGOztBQVdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVJGOztBQXdCQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBckJGO0FBdUJFO0VBQ0UscUJBQUE7RUFDQSx5QkF0RFM7RUF1RFQsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBR0EsYUFBQTtFQUNBLHdCQUFBO0FBdkJKO0FBeUJJO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLE1BQUE7QUF2Qk47QUEwQkk7RUFDRSx5QkFBQTtFQUNBLGFBQUE7QUF4Qk47QUEyQkk7RUFDRSxrQkFBQTtBQXpCTjtBQTZCSTtFQTNCRjtJQTRCSSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxNQUFBO0lBQ0EsWUFBQTtFQTFCSjtFQTRCSTtJQUNFLG1CQUFBO0VBMUJOO0VBNkJJO0lBQ0UsU0FBQTtJQUNBLGtCQUFBO0VBM0JOO0VBOEJJO0lBQ0UsYUFBQTtFQTVCTjtBQUNGO0FBZ0NFO0VBQ0UsV0FBQTtBQTlCSjtBQWdDSTtFQW5FRix5REFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFJQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBOERJLFlBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBMUJOO0FBOEJJO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0FBNUJOO0FBOEJNO0VBQ0UsZUFBQTtBQTVCUjtBQXNESTtFQXBCRSx1QkFxQnVFO0FBcEQ3RTtBQWlDTTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFnQjBCO0FBL0NsQztBQWtDTTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFyR04seURBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBcUdNLGVBU2M7QUF2Q3RCO0FBMENJO0VBeEJFLHlCQTlIUTtBQStHZDtBQWlCTTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFvQjhCO0FBbkN0QztBQWtCTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFyR04seURBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBcUdNLGtCQWFjO0VBVlosU0FBQTtBQWhCVjtBQTZCSTtFQTVCRSx5QkE3SFM7QUErSGY7QUFBTTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkF3QjBCO0FBdEJsQztBQUNNO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQXJHTix5REFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFxR00sZUFpQmM7QUFkdEI7QUFpQkk7RUFySEYsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQW9ISSxZQUFBO0VBQ0EseUJBOUpNO0FBa0paXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vIGNvbG9yIHNjaGVtZVxcbiRsaWdodC1nb2xkOiAjRjNEQTgxO1xcbiRsaWdodC1ncmVlbjogI0Y2RkZEMTtcXG4kbGlnaHQtb3JhbmdlOiAjRkZGNkQ2O1xcbiRsaWdodC1ibHVlOiAjRDNEQ0U5O1xcbiRncmF5LWJsdWU6ICM3RDhCOUY7XFxuXFxuLy8gZm9udHNcXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnb3BlbiBzYW5zJztcXG4gIHNyYzogdXJsKCcuL29wZW4tc2Fucy50dGYnKTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbnVsLFxcbmEsXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ29wZW4gc2FucycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbmltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG5AbWl4aW4gY2VudGVyLWJnKCR1cmwpIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkdXJsKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbkBtaXhpbiBjZW50ZXItY29udGVudCgpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcblxcbiAgI3NpZGUtYmFyIHtcXG4gICAgZmxleDogMCAwIG1pbi1jb250ZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ29sZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuXFxuICAgIC8vIG1ha2UgY29udGVudCBzdGF5IGZpeGVkIHRvIHNpZGUsIHdpdGhvdXQgYmVpbmcgYWJzb2x1dGVcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcblxcbiAgICA+ZGl2IHtcXG4gICAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgICAgdG9wOiAwO1xcbiAgICB9XFxuXFxuICAgIGgxIHtcXG4gICAgICBmb250LXNpemU6IG1pbigxMHZ3LCAyZW0pO1xcbiAgICAgIG1hcmdpbjogMWVtIDA7XFxuICAgIH1cXG5cXG4gICAgdWwgbGkge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDJlbTtcXG4gICAgfVxcblxcbiAgICAvLyBtYWtlIHNpZGUtYmFyIGdvIGFjcm9zcyB3aGVuIHdyYXBwZWRcXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gICAgICBmbGV4LWdyb3c6IDE7XFxuICAgICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgd2lkdGg6IDEwMHZ3O1xcblxcbiAgICAgID5kaXYge1xcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gICAgICB9XFxuXFxuICAgICAgaDEge1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIH1cXG5cXG4gICAgICB1bCB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLnBhZ2Uge1xcbiAgICBmbGV4OiA1MDBweDtcXG5cXG4gICAgLmJhbm5lciB7XFxuICAgICAgQGluY2x1ZGUgY2VudGVyLWJnKFxcXCIuL2Jhbm5lci1iYWNrZ3JvdW5kLmpwZ1xcXCIpO1xcbiAgICAgIEBpbmNsdWRlIGNlbnRlci1jb250ZW50KCk7XFxuXFxuICAgICAgaGVpZ2h0OiA3MHZoO1xcbiAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7IC8vIHBhcnJhbGF4IGVmZmVjdFxcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICBmb250LXNpemU6IDRyZW07XFxuICAgIH1cXG5cXG4gICAgLy8gZ2VuZXJhbCBydWxlc1xcbiAgICBhcnRpY2xlIHtcXG4gICAgICBwYWRkaW5nOiAycmVtO1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG5cXG4gICAgICBoMyB7XFxuICAgICAgICBmb250LXNpemU6IDQwcHg7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8vIGtlZXAgaXQgRFJZIHdoZW4gZGVjbGFyaW5nIHVuaXF1ZSBsYXlvdXRzIGZvciBhcnRpY2xlc1xcbiAgICBAbWl4aW4gbGF5b3V0KCRwYWRkaW5nLWxlZnQtdGV4dCwgJHRleHQtY29scywgJHBhZGRpbmctcmlnaHQtdGV4dCwgJGltZy1jb2xzLCAkaW1nLXNyYywgJGltZy1maXJzdDogZmFsc2UsICRiZy1jb2xvcikge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcXG5cXG4gICAgICAudGV4dCB7XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICBncmlkLWNvbHVtbjogI3skdGV4dC1jb2xzfTtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6ICRwYWRkaW5nLXJpZ2h0LXRleHQ7XFxuICAgICAgfVxcblxcbiAgICAgIC5pbWctY29udGFpbmVyIHtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM1dnc7XFxuICAgICAgICBncmlkLWNvbHVtbjogI3skaW1nLWNvbHN9O1xcbiAgICAgICAgQGluY2x1ZGUgY2VudGVyLWJnKCRpbWctc3JjKTsgLy8gaW1nIGEgYmFja2dyb3VuZCBzbyBpdHMgaGVpZ2h0IGlzIGVxdWFsIHRvIHRleHRcXG4gICAgICAgIG1hcmdpbi1yaWdodDogJHBhZGRpbmctbGVmdC10ZXh0OyAvLyBzcGFjZSBiZXR3ZWVuIGltZyBhbmQgdGV4dCwgaWYgdGV4dCBpZiByaWdodFxcblxcbiAgICAgICAgQGlmICRpbWctZmlyc3Qge1xcbiAgICAgICAgICBvcmRlcjogLTE7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGFydGljbGUjc3Rvcnkge1xcbiAgICAgIEBpbmNsdWRlIGxheW91dCgwLCBcXFwiMSAvIDdcXFwiLCAycmVtLCBcXFwiNyAvIDExXFxcIiwgXFxcIi4vZnJ5aW5nLXBhbi5qcGdcXFwiLCBmYWxzZSwgd2hpdGUpO1xcbiAgICB9XFxuXFxuICAgIGFydGljbGUjZmxhdm9ycyB7XFxuICAgICAgQGluY2x1ZGUgbGF5b3V0KDJyZW0sIFxcXCI2IC8gMTFcXFwiLCAycmVtLCBcXFwiMSAvIDZcXFwiLCBcXFwiLi9zcGljZXMuanBnXFxcIiwgdHJ1ZSwgJGxpZ2h0LWdyZWVuKTtcXG4gICAgfVxcblxcbiAgICBhcnRpY2xlI0NUQSB7XFxuICAgICAgQGluY2x1ZGUgbGF5b3V0KDAsIFxcXCIxIC8gNVxcXCIsIDFyZW0sIFxcXCI1IC8gMTFcXFwiLCBcXFwiLi9kaW5uZXItdGFibGUuanBnXFxcIiwgZmFsc2UsICRsaWdodC1vcmFuZ2UpO1xcbiAgICB9XFxuXFxuICAgIGZvb3RlciB7XFxuICAgICAgQGluY2x1ZGUgY2VudGVyLWNvbnRlbnQoKTtcXG4gICAgICBoZWlnaHQ6IDZyZW07XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktYmx1ZTtcXG4gICAgfVxcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1swXS51c2VbMl0hLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzBdLnVzZVsyXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIHJlbmRlckFib3V0UGFnZSgpIHtcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICAvLyBDcmVhdGUgYW5kIGFwcGVuZCBuYXZpZ2F0aW9uIGJhclxuICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICBuYXZCYXIuaWQgPSBcInNpZGUtYmFyXCI7XG5cbiAgY29uc3QgbmF2RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbmF2SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgbmF2SGVhZGluZy50ZXh0Q29udGVudCA9IFwiS2FqJ3MgS2l0Y2hlblwiO1xuXG4gIGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNvbnN0IG5hdkl0ZW1zID0gW1wiQWJvdXRcIiwgXCJNZW51XCIsIFwiTG9jYXRpb25cIl07XG5cbiAgbmF2SXRlbXMuZm9yRWFjaChpdGVtVGV4dCA9PiB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGkudGV4dENvbnRlbnQgPSBpdGVtVGV4dDtcbiAgICBuYXZMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgfSk7XG5cbiAgbmF2RGl2LmFwcGVuZENoaWxkKG5hdkhlYWRpbmcpO1xuICBuYXZEaXYuYXBwZW5kQ2hpbGQobmF2TGlzdCk7XG4gIG5hdkJhci5hcHBlbmRDaGlsZChuYXZEaXYpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG5hdkJhcik7XG5cbiAgLy8gQ3JlYXRlIGFuZCBhcHBlbmQgbWFpbiBzZWN0aW9uXG4gIGNvbnN0IG1haW5TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIG1haW5TZWN0aW9uLmNsYXNzTmFtZSA9IFwicGFnZVwiO1xuXG4gIGNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZ3JvdXBcIik7XG4gIGJhbm5lci5jbGFzc05hbWUgPSBcImJhbm5lclwiO1xuICBjb25zdCBiYW5uZXJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBiYW5uZXJIZWFkaW5nLnRleHRDb250ZW50ID0gXCJXaG8gd2UgYXJlXCI7XG4gIGJhbm5lci5hcHBlbmRDaGlsZChiYW5uZXJIZWFkaW5nKTtcblxuICBjb25zdCBhcnRpY2xlU3RvcnkgPSBjcmVhdGVBcnRpY2xlKFxuICAgIFwic3RvcnlcIixcbiAgICBcIk91ciBTdG9yeVwiLFxuICAgIFtcbiAgICAgIFwiV2VsY29tZSB0byBLYWoncyBLaXRjaGVuLCBhIGN1bGluYXJ5IGhhdmVuIGJvcm4gZnJvbSBhIHRlZW5hZ2UgZ2lybCdzIGJvdW5kbGVzcyBwYXNzaW9uIGFuZCByZWxlbnRsZXNzIGRldGVybWluYXRpb24uXCIsXG4gICAgICBcIkZyb20gYSB5b3VuZyBhZ2UsIEthaiBmb3VuZCBzb2xhY2UgaW4gdGhlIHdvcmxkIG9mIHNwaWNlcywgZmxhdm9ycywgYW5kIHJlY2lwZXMuIFdoYXQgYmVnYW4gYXMgYW4gaW5ub2NlbnQgY3VyaW9zaXR5IGluIGhlciBmYW1pbHkncyBraXRjaGVuIHNvb24gZXZvbHZlZCBpbnRvIGFuIGFsbC1jb25zdW1pbmcgb2JzZXNzaW9uLiBIZXIgbmlnaHRzIHdlcmUgc3BlbnQgZXhwZXJpbWVudGluZyB3aXRoIGluZ3JlZGllbnRzLCBibGVuZGluZyBjdWx0dXJlcywgYW5kIGNyYWZ0aW5nIGN1bGluYXJ5IHdvbmRlcnMgdGhhdCB0cmFuc2NlbmRlZCBoZXIgeWVhcnMuXCIsXG4gICAgICBcIldpdGggdW53YXZlcmluZyBzdXBwb3J0IGZyb20gaGVyIGZhbWlseSBhbmQgbWVudG9ycyB3aG8gcmVjb2duaXplZCBoZXIgZXhjZXB0aW9uYWwgdGFsZW50LCBLYWoncyBkcmVhbSBiZWdhbiB0byB0YWtlIHNoYXBlLiBLYWoncyBLaXRjaGVuIGlzIGEgdGVzdGFtZW50IHRvIHRoZSBwb3dlciBvZiBudXJ0dXJpbmcgZHJlYW1zLCByZWdhcmRsZXNzIG9mIGFnZS5cIlxuICAgIF1cbiAgKTtcblxuICBjb25zdCBhcnRpY2xlRmxhdm9ycyA9IGNyZWF0ZUFydGljbGUoXG4gICAgXCJmbGF2b3JzXCIsXG4gICAgXCJBIEpvdXJuZXkgb2YgRmxhdm9ycyBhbmQgRHJlYW1zXCIsXG4gICAgW1xuICAgICAgXCJFdmVyeSBkaXNoIHRoYXQgZ3JhY2VzIG91ciBtZW51IGNhcnJpZXMgYSBwaWVjZSBvZiBLYWoncyBoZWFydCBhbmQgYSBzdG9yeSBvZiBoZXIgam91cm5leS4gVGhlIGZ1c2lvbiBvZiBnbG9iYWwgaW5zcGlyYXRpb25zIGFuZCBsb2NhbGx5IHNvdXJjZWQgaW5ncmVkaWVudHMgcmVmbGVjdHMgaGVyIGNvbW1pdG1lbnQgdG8gZXhjZWxsZW5jZS4gQXMgeW91IHNhdm9yIGVhY2ggYml0ZSwgeW91J3JlIHRhc3Rpbmcgbm90IGp1c3QgZm9vZCwgYnV0IHRoZSBjdWxtaW5hdGlvbiBvZiB5ZWFycyBvZiBkZWRpY2F0aW9uIGFuZCBsb3ZlLlwiLFxuICAgICAgXCJLYWoncyBLaXRjaGVuIGlzbid0IGp1c3QgYSBkaW5pbmcgZXN0YWJsaXNobWVudDsgaXQncyBhIHdlbGNvbWluZyBzcGFjZSB3aGVyZSBpbm5vdmF0aW9uIHRocml2ZXMsIGFuZCBwYXNzaW9uIGtub3dzIG5vIGxpbWl0cy4gV2l0aCBpdHMgaW52aXRpbmcgYW1iaWFuY2UgYW5kIHRoZSB3YXJtIHNtaWxlcyBvZiBvdXIgc3RhZmYsIHlvdSdsbCBmZWVsIGxpa2UgYSBjaGVyaXNoZWQgZ3Vlc3QgaW4gS2FqJ3Mgb3duIGtpdGNoZW4uXCJcbiAgICBdXG4gICk7XG5cbiAgY29uc3QgYXJ0aWNsZUNUQSA9IGNyZWF0ZUFydGljbGUoXG4gICAgXCJDVEFcIixcbiAgICBcIkV4cGVyaWVuY2UgS2FqJ3MgVmlzaW9uXCIsXG4gICAgW1xuICAgICAgXCJTdGVwIGludG8gS2FqJ3Mgd29ybGQgYW5kIGV4cGVyaWVuY2UgYSBjdWxpbmFyeSBhZHZlbnR1cmUgdGhhdCBkZWZpZXMgZXhwZWN0YXRpb25zLiBSZXNlcnZlIHlvdXIgdGFibGUgdG9kYXkgYW5kIGVtYmFyayBvbiBhIGpvdXJuZXkgdGhhdCBjZWxlYnJhdGVzIG5vdCBqdXN0IGZvb2QsIGJ1dCB0aGUgYm91bmRsZXNzIHBvdGVudGlhbCB3aXRoaW4gdXMgYWxsLiBDb21lLCBiZSBhIHBhcnQgb2Ygb3VyIHN0b3J5LlwiLFxuICAgICAgLy8gLi4uIG90aGVyIHBhcmFncmFwaHMgLi4uXG4gICAgXVxuICApO1xuXG4gIC8vIEFwcGVuZCBlbGVtZW50cyB0byBtYWluIHNlY3Rpb25cbiAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQoYmFubmVyKTtcbiAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQoYXJ0aWNsZVN0b3J5KTtcbiAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQoYXJ0aWNsZUZsYXZvcnMpO1xuICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChhcnRpY2xlQ1RBKTtcblxuICAvLyBDcmVhdGUgYW5kIGFwcGVuZCBmb290ZXJcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgZm9vdGVyLmNsYXNzTmFtZSA9IFwiYnktbGluZVwiO1xuICBjb25zdCBmb290ZXJQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZm9vdGVyUGFyYWdyYXBoLmlubmVySFRNTCA9ICdCeSBBcmllbCBSb2JlcnQgTXV0ZWJpOiA8YSBocmVmPVwiI1wiPnNvdXJjZSByZXBvPC9hPic7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJQYXJhZ3JhcGgpO1xuXG4gIG1haW5TZWN0aW9uLmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgLy8gQXBwZW5kIG1haW4gc2VjdGlvbiB0byBjb250ZW50XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWFpblNlY3Rpb24pO1xufVxuXG4vLyBDcmVhdGUgYXJ0aWNsZSBlbGVtZW50XG5mdW5jdGlvbiBjcmVhdGVBcnRpY2xlKGlkLCBoZWFkaW5nVGV4dCwgcGFyYWdyYXBocykge1xuICBjb25zdCBhcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG4gIGFydGljbGUuaWQgPSBpZDtcblxuICBjb25zdCB0ZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGV4dERpdi5jbGFzc05hbWUgPSBcInRleHRcIjtcblxuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gaGVhZGluZ1RleHQ7XG4gIHRleHREaXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgcGFyYWdyYXBocy5mb3JFYWNoKHBhcmFncmFwaFRleHQgPT4ge1xuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IHBhcmFncmFwaFRleHQ7XG4gICAgdGV4dERpdi5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuICB9KTtcblxuICBjb25zdCBpbWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXNpZGVcIik7XG4gIGltZ0NvbnRhaW5lci5jbGFzc05hbWUgPSBcImltZy1jb250YWluZXJcIjtcblxuICBhcnRpY2xlLmFwcGVuZENoaWxkKHRleHREaXYpO1xuICBhcnRpY2xlLmFwcGVuZENoaWxkKGltZ0NvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGFydGljbGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckFib3V0UGFnZSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnXG5pbXBvcnQgcmVuZGVyQWJvdXRQYWdlIGZyb20gXCIuL2Fib3V0LXBhZ2VcIlxucmVuZGVyQWJvdXRQYWdlKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=