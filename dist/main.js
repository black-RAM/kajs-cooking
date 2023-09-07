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
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./imgsA/banner-background.jpg */ "./src/imgsA/banner-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./imgsA/frying-pan.jpg */ "./src/imgsA/frying-pan.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./imgsA/spices.jpg */ "./src/imgsA/spices.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./imgsA/dinner-table.jpg */ "./src/imgsA/dinner-table.jpg"), __webpack_require__.b);
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

.center-content, #content main.page footer, #content main.page .banner,
#content main.page .flow-break {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.parralax, #content main.page .banner,
#content main.page .flow-break {
  background-attachment: fixed;
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
#content main.page {
  flex: 500px;
}
#content main.page .banner,
#content main.page .flow-break {
  height: 70vh;
  background-attachment: fixed;
  color: white;
  font-size: 4rem;
}
#content main.page article {
  padding: 2rem;
  padding-right: 0;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
}
#content main.page article h3 {
  font-size: 40px;
}
#content main.page footer {
  height: 6rem;
  background-color: #7D8B9F;
}

#about-page .banner {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: cover;
  background-position: center;
}
#about-page article#story {
  background-color: white;
}
#about-page article#story .text {
  align-self: center;
  grid-column: 1 / 7;
  padding-right: 2rem;
}
#about-page article#story .img-container {
  min-height: 35vw;
  grid-column: 7 / 11;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-size: cover;
  background-position: center;
  margin-right: 0;
}
#about-page article#flavors {
  background-color: #F6FFD1;
}
#about-page article#flavors .text {
  align-self: center;
  grid-column: 6 / 11;
  padding-right: 2rem;
}
#about-page article#flavors .img-container {
  min-height: 35vw;
  grid-column: 1 / 6;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  background-size: cover;
  background-position: center;
  margin-right: 2rem;
  order: -1;
}
#about-page article#CTA {
  background-color: #FFF6D6;
}
#about-page article#CTA .text {
  align-self: center;
  grid-column: 1 / 5;
  padding-right: 1rem;
}
#about-page article#CTA .img-container {
  min-height: 35vw;
  grid-column: 5 / 11;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
  background-size: cover;
  background-position: center;
  margin-right: 0;
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAQA;EACE,wBAAA;EACA,4CAAA;EACA,kBAAA;EACA,gBAAA;AAPF;AAUA;;;;;;EAME,SAAA;EACA,cAAA;AARF;;AAWA;EACE,sDAAA;EACA,eAAA;AARF;;AAWA;EACE,WAAA;EACA,YAAA;EACA,iBAAA;AARF;;AAiBA;;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAbF;;AAgBA;;EACE,4BAAA;AAZF;;AAeA;EACE,aAAA;EACA,eAAA;AAZF;AAcE;EACE,qBAAA;EACA,yBA1DS;EA2DT,YAAA;EACA,aAAA;EACA,eAAA;EAGA,aAAA;EACA,wBAAA;AAdJ;AAgBI;EACE,gBAAA;EACA,sBAAA;EACA,MAAA;AAdN;AAiBI;EACE,yBAAA;EACA,aAAA;AAfN;AAkBI;EACE,kBAAA;AAhBN;AAoBI;EA3BF;IA4BI,YAAA;IACA,gBAAA;IACA,MAAA;IACA,YAAA;EAjBJ;EAmBI;IACE,mBAAA;EAjBN;EAoBI;IACE,SAAA;IACA,kBAAA;EAlBN;EAqBI;IACE,aAAA;EAnBN;AACF;AAuBE;EACE,WAAA;AArBJ;AAuBI;;EAKE,YAAA;EACA,4BAAA;EACA,YAAA;EACA,eAAA;AAxBN;AA4BI;EACE,aAAA;EACA,gBAAA;EAEA,aAAA;EACA,sCAAA;AA3BN;AA6BM;EACE,eAAA;AA3BR;AA+BI;EAEE,YAAA;EACA,yBAlIM;AAoGZ;;AA2DE;EA/HA,yDAAA;EACA,sBAAA;EACA,2BAAA;AAwEF;AAyDE;EA1BA,uBA2B+E;AAvDjF;AA8BE;EACE,kBAAA;EACA,kBAAA;EACA,mBAsB4B;AAlDhC;AA+BE;EACE,gBAAA;EACA,mBAAA;EAnHF,yDAAA;EACA,sBAAA;EACA,2BAAA;EAmHE,eAegB;AA1CpB;AA6CE;EA9BA,yBA5IY;AAgId;AAcE;EACE,kBAAA;EACA,mBAAA;EACA,mBA0BgC;AAtCpC;AAeE;EACE,gBAAA;EACA,kBAAA;EAnHF,yDAAA;EACA,sBAAA;EACA,2BAAA;EAmHE,kBAmBgB;EAhBd,SAAA;AAbN;AAgCE;EAlCA,yBA3Ia;AAgJf;AAHE;EACE,kBAAA;EACA,kBAAA;EACA,mBA8B4B;AAzBhC;AAFE;EACE,gBAAA;EACA,mBAAA;EAnHF,yDAAA;EACA,sBAAA;EACA,2BAAA;EAmHE,eAuBgB;AAjBpB","sourcesContent":["// color scheme\n$light-gold: #F3DA81;\n$light-green: #F6FFD1;\n$light-orange: #FFF6D6;\n$light-blue: #D3DCE9;\n$gray-blue: #7D8B9F;\n\n// fonts\n@font-face {\n  font-family: 'open sans';\n  src: url('./open-sans.ttf');\n  font-style: normal;\n  font-weight: 400;\n}\n\nh1,\nh2,\nh3,\nul,\na,\nbody {\n  margin: 0;\n  color: inherit;\n}\n\nbody {\n  font-family: 'open sans', Arial, Helvetica, sans-serif;\n  font-size: 16px;\n}\n\nimg {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n@mixin center-bg($url) {\n  background-image: url($url);\n  background-size: cover;\n  background-position: center;\n}\n\n.center-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.parralax {\n  background-attachment: fixed;\n}\n\n#content {\n  display: flex;\n  flex-wrap: wrap;\n\n  #side-bar {\n    flex: 0 0 min-content;\n    background-color: $light-gold;\n    color: white;\n    padding: 1rem;\n    font-size: 25px;\n\n    // make content stay fixed to side, without being absolute\n    display: flex;\n    flex-flow: column nowrap;\n\n    >div {\n      position: sticky;\n      align-self: flex-start;\n      top: 0;\n    }\n\n    h1 {\n      font-size: min(10vw, 2em);\n      margin: 1em 0;\n    }\n\n    ul li {\n      margin-bottom: 2em;\n    }\n\n    // make side-bar go across when wrapped\n    @media screen and (max-width: 750px) {\n      flex-grow: 1;\n      position: sticky;\n      top: 0;\n      width: 100vw;\n\n      >div {\n        align-self: stretch;\n      }\n\n      h1 {\n        margin: 0;\n        text-align: center;\n      }\n\n      ul {\n        display: none;\n      }\n    }\n  }\n\n  main.page {\n    flex: 500px;\n\n    .banner,\n    .flow-break {\n      @extend .center-content;\n      @extend .parralax;\n\n      height: 70vh;\n      background-attachment: fixed; // parralax effect\n      color: white;\n      font-size: 4rem;\n    }\n\n    // general rules\n    article {\n      padding: 2rem;\n      padding-right: 0;\n\n      display: grid;\n      grid-template-columns: repeat(10, 1fr);\n\n      h3 {\n        font-size: 40px;\n      }\n    }\n\n    footer {\n      @extend .center-content;\n      height: 6rem;\n      background-color: $gray-blue;\n    }\n  }\n}\n\n// keep it DRY when declaring unique layouts for articles\n@mixin layout($padding-left-text, $text-cols, $padding-right-text, $img-cols, $img-src, $img-first: false, $bg-color) {\n  background-color: $bg-color;\n\n  .text {\n    align-self: center;\n    grid-column: #{$text-cols};\n    padding-right: $padding-right-text;\n  }\n\n  .img-container {\n    min-height: 35vw;\n    grid-column: #{$img-cols};\n    @include center-bg($img-src); // img a background so its height is equal to text\n    margin-right: $padding-left-text; // space between img and text, if text if right\n\n    @if $img-first {\n      order: -1;\n    }\n  }\n}\n\n// page-specific layouts\n#about-page {\n  .banner {\n    @include center-bg(\"./imgsA/banner-background.jpg\");\n  }\n\n  article#story {\n    @include layout(0, \"1 / 7\", 2rem, \"7 / 11\", \"./imgsA/frying-pan.jpg\", false, white);\n  }\n\n  article#flavors {\n    @include layout(2rem, \"6 / 11\", 2rem, \"1 / 6\", \"./imgsA/spices.jpg\", true, $light-green);\n  }\n\n  article#CTA {\n    @include layout(0, \"1 / 5\", 1rem, \"5 / 11\", \"./imgsA/dinner-table.jpg\", false, $light-orange);\n  }\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ "./src/template.js");


function renderAboutPage(contentDiv) {

  const navBar = (0,_template__WEBPACK_IMPORTED_MODULE_0__.createNavbar)()

  // Create main section and banner
  const mainSection = (0,_template__WEBPACK_IMPORTED_MODULE_0__.createMainWithBanner)("about-page", "Who We Are");

  // create articles
  const articleStory = (0,_template__WEBPACK_IMPORTED_MODULE_0__.createArticle)(
    "story",
    "Our Story",
    [
      "Welcome to Kaj's Kitchen, a culinary haven born from a teenage girl's boundless passion and relentless determination.",
      "From a young age, Kaj found solace in the world of spices, flavors, and recipes. What began as an innocent curiosity in her family's kitchen soon evolved into an all-consuming obsession. Her nights were spent experimenting with ingredients, blending cultures, and crafting culinary wonders that transcended her years.",
      "With unwavering support from her family and mentors who recognized her exceptional talent, Kaj's dream began to take shape. Kaj's Kitchen is a testament to the power of nurturing dreams, regardless of age."
    ]
  );

  const articleFlavors = (0,_template__WEBPACK_IMPORTED_MODULE_0__.createArticle)(
    "flavors",
    "A Journey of Flavors and Dreams",
    [
      "Every dish that graces our menu carries a piece of Kaj's heart and a story of her journey. The fusion of global inspirations and locally sourced ingredients reflects her commitment to excellence. As you savor each bite, you're tasting not just food, but the culmination of years of dedication and love.",
      "Kaj's Kitchen isn't just a dining establishment; it's a welcoming space where innovation thrives, and passion knows no limits. With its inviting ambiance and the warm smiles of our staff, you'll feel like a cherished guest in Kaj's own kitchen."
    ]
  );

  const articleCTA = (0,_template__WEBPACK_IMPORTED_MODULE_0__.createArticle)(
    "CTA",
    "Experience Kaj's Vision",
    [
      "Step into Kaj's world and experience a culinary adventure that defies expectations. Reserve your table today and embark on a journey that celebrates not just food, but the boundless potential within us all. Come, be a part of our story.",
      // ... other paragraphs ...
    ]
  );

  // Create footer
  const footer = (0,_template__WEBPACK_IMPORTED_MODULE_0__.createFooter)()

  // Append articles to main section
  ;(0,_template__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(mainSection, [articleStory, articleFlavors, articleCTA, footer])

  // Append navbar and main section to content
  ;(0,_template__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(contentDiv, [navBar, mainSection])
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderAboutPage);

/***/ }),

/***/ "./src/template.js":
/*!*************************!*\
  !*** ./src/template.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendChildren: () => (/* binding */ appendChildren),
/* harmony export */   createArticle: () => (/* binding */ createArticle),
/* harmony export */   createFooter: () => (/* binding */ createFooter),
/* harmony export */   createMainWithBanner: () => (/* binding */ createMainWithBanner),
/* harmony export */   createNavbar: () => (/* binding */ createNavbar)
/* harmony export */ });
// centralise creation of shared components

function createNavbar() {
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

  return navBar;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.className = "by-line";
  const footerParagraph = document.createElement("p");
  footerParagraph.innerHTML = 'By Ariel Robert Mutebi: <a href="#">source repo</a>';
  footer.appendChild(footerParagraph);

  return footer;
}

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

function createMainWithBanner(pageName, bannerText) {
  const mainSection = document.createElement("main");
  mainSection.className = "page";
  mainSection.id = pageName;

  const banner = document.createElement("hgroup");
  banner.className = "banner";
  const bannerHeading = document.createElement("h2");
  bannerHeading.textContent = bannerText;
  banner.appendChild(bannerHeading);

  mainSection.appendChild(banner);

  return mainSection;
}

function appendChildren(parent, children) {
  for (const child of children) {
    parent.appendChild(child)
  }
}



/***/ }),

/***/ "./src/imgsA/banner-background.jpg":
/*!*****************************************!*\
  !*** ./src/imgsA/banner-background.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f356e4e42a4620a3f2c.jpg";

/***/ }),

/***/ "./src/imgsA/dinner-table.jpg":
/*!************************************!*\
  !*** ./src/imgsA/dinner-table.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b0d36222d5f7e8f45b78.jpg";

/***/ }),

/***/ "./src/imgsA/frying-pan.jpg":
/*!**********************************!*\
  !*** ./src/imgsA/frying-pan.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "716b3eb06203c92e2763.jpg";

/***/ }),

/***/ "./src/imgsA/spices.jpg":
/*!******************************!*\
  !*** ./src/imgsA/spices.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ec2c8cfbd9c176eb1cac.jpg";

/***/ }),

/***/ "./src/open-sans.ttf":
/*!***************************!*\
  !*** ./src/open-sans.ttf ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "071a1becc7f00e33cc5b.ttf";

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



// setup: create the content div
const contentDiv = document.createElement("div");
contentDiv.id = "content";

// Call the renderAboutPage function
(0,_about_page__WEBPACK_IMPORTED_MODULE_1__["default"])(contentDiv);

// append content to body
document.body.appendChild(contentDiv);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDJHQUFrQztBQUM5RSw0Q0FBNEMsdUlBQWdEO0FBQzVGLDRDQUE0Qyx5SEFBeUM7QUFDckYsNENBQTRDLGlIQUFxQztBQUNqRiw0Q0FBNEMsNkhBQTJDO0FBQ3ZGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxPQUFPLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxPQUFPLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLFVBQVUsS0FBSyxNQUFNLFdBQVcsVUFBVSxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxNQUFNLE9BQU8sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sY0FBYyxPQUFPLE1BQU0sV0FBVyxXQUFXLGFBQWEsT0FBTyxNQUFNLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxZQUFZLE9BQU8sTUFBTSxhQUFhLE1BQU0sS0FBSyxXQUFXLFdBQVcsYUFBYSxPQUFPLEtBQUssV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLGNBQWMsV0FBVyxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssV0FBVyxXQUFXLGFBQWEsT0FBTyxLQUFLLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxhQUFhLGlFQUFpRSx3QkFBd0IseUJBQXlCLHVCQUF1QixzQkFBc0IsMEJBQTBCLDZCQUE2QixnQ0FBZ0MsdUJBQXVCLHFCQUFxQixHQUFHLGtDQUFrQyxjQUFjLG1CQUFtQixHQUFHLFVBQVUsMkRBQTJELG9CQUFvQixHQUFHLFNBQVMsZ0JBQWdCLGlCQUFpQixzQkFBc0IsR0FBRyw0QkFBNEIsZ0NBQWdDLDJCQUEyQixnQ0FBZ0MsR0FBRyxxQkFBcUIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLEdBQUcsZUFBZSxpQ0FBaUMsR0FBRyxjQUFjLGtCQUFrQixvQkFBb0IsaUJBQWlCLDRCQUE0QixvQ0FBb0MsbUJBQW1CLG9CQUFvQixzQkFBc0Isc0ZBQXNGLCtCQUErQixjQUFjLHlCQUF5QiwrQkFBK0IsZUFBZSxPQUFPLFlBQVksa0NBQWtDLHNCQUFzQixPQUFPLGVBQWUsMkJBQTJCLE9BQU8sMkZBQTJGLHFCQUFxQix5QkFBeUIsZUFBZSxxQkFBcUIsZ0JBQWdCLDhCQUE4QixTQUFTLGNBQWMsb0JBQW9CLDZCQUE2QixTQUFTLGNBQWMsd0JBQXdCLFNBQVMsT0FBTyxLQUFLLGlCQUFpQixrQkFBa0IsbUNBQW1DLGdDQUFnQywwQkFBMEIsdUJBQXVCLHNDQUFzQyx1Q0FBdUMsd0JBQXdCLE9BQU8sdUNBQXVDLHNCQUFzQix5QkFBeUIsd0JBQXdCLCtDQUErQyxjQUFjLDBCQUEwQixTQUFTLE9BQU8sZ0JBQWdCLGdDQUFnQyxxQkFBcUIscUNBQXFDLE9BQU8sS0FBSyxHQUFHLHNMQUFzTCxnQ0FBZ0MsYUFBYSx5QkFBeUIscUJBQXFCLFlBQVkseUNBQXlDLEtBQUssc0JBQXNCLHVCQUF1QixxQkFBcUIsV0FBVyxvQ0FBb0MsMEZBQTBGLHVFQUF1RSxrQkFBa0IsT0FBTyxLQUFLLEdBQUcsMkNBQTJDLGFBQWEsNERBQTRELEtBQUsscUJBQXFCLGdHQUFnRyxLQUFLLHVCQUF1QixxR0FBcUcsS0FBSyxtQkFBbUIsMEdBQTBHLEtBQUssR0FBRyxtQkFBbUI7QUFDdnVKO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDbEwxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUF3SztBQUN4SztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLG9KQUFPOzs7O0FBSWtIO0FBQzFJLE9BQU8saUVBQWUsb0pBQU8sSUFBSSxvSkFBTyxVQUFVLG9KQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNiNkc7O0FBRTdHOztBQUVBLGlCQUFpQix1REFBWTs7QUFFN0I7QUFDQSxzQkFBc0IsK0RBQW9COztBQUUxQztBQUNBLHVCQUF1Qix3REFBYTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5Qix3REFBYTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBOztBQUVBLHFCQUFxQix3REFBYTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQix1REFBWTs7QUFFN0I7QUFDQSxFQUFFLDBEQUFjOztBQUVoQjtBQUNBLEVBQUUsMERBQWM7QUFDaEI7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNxQjs7QUFFMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdURBQWU7O0FBRWY7QUFDQSxzQyIsInNvdXJjZXMiOlsid2VicGFjazovL2thanMtY29va2luZy8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL2thanMtY29va2luZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8va2Fqcy1jb29raW5nLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9rYWpzLWNvb2tpbmcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9rYWpzLWNvb2tpbmcvLi9zcmMvc3R5bGUuc2Nzcz84YmIxIiwid2VicGFjazovL2thanMtY29va2luZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9rYWpzLWNvb2tpbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2thanMtY29va2luZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9rYWpzLWNvb2tpbmcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8va2Fqcy1jb29raW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8va2Fqcy1jb29raW5nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8va2Fqcy1jb29raW5nLy4vc3JjL2Fib3V0LXBhZ2UuanMiLCJ3ZWJwYWNrOi8va2Fqcy1jb29raW5nLy4vc3JjL3RlbXBsYXRlLmpzIiwid2VicGFjazovL2thanMtY29va2luZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rYWpzLWNvb2tpbmcvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8va2Fqcy1jb29raW5nL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rYWpzLWNvb2tpbmcvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9rYWpzLWNvb2tpbmcvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rYWpzLWNvb2tpbmcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rYWpzLWNvb2tpbmcvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8va2Fqcy1jb29raW5nL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2thanMtY29va2luZy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8va2Fqcy1jb29raW5nLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL29wZW4tc2Fucy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltZ3NBL2Jhbm5lci1iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1nc0EvZnJ5aW5nLXBhbi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ltZ3NBL3NwaWNlcy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2ltZ3NBL2Rpbm5lci10YWJsZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwib3BlbiBzYW5zXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5oMSxcbmgyLFxuaDMsXG51bCxcbmEsXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIm9wZW4gc2Fuc1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uY2VudGVyLWNvbnRlbnQsICNjb250ZW50IG1haW4ucGFnZSBmb290ZXIsICNjb250ZW50IG1haW4ucGFnZSAuYmFubmVyLFxuI2NvbnRlbnQgbWFpbi5wYWdlIC5mbG93LWJyZWFrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wYXJyYWxheCwgI2NvbnRlbnQgbWFpbi5wYWdlIC5iYW5uZXIsXG4jY29udGVudCBtYWluLnBhZ2UgLmZsb3ctYnJlYWsge1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuXG4jY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbiNjb250ZW50ICNzaWRlLWJhciB7XG4gIGZsZXg6IDAgMCBtaW4tY29udGVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzREE4MTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbn1cbiNjb250ZW50ICNzaWRlLWJhciA+IGRpdiB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIHRvcDogMDtcbn1cbiNjb250ZW50ICNzaWRlLWJhciBoMSB7XG4gIGZvbnQtc2l6ZTogbWluKDEwdncsIDJlbSk7XG4gIG1hcmdpbjogMWVtIDA7XG59XG4jY29udGVudCAjc2lkZS1iYXIgdWwgbGkge1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICAjY29udGVudCAjc2lkZS1iYXIge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwdnc7XG4gIH1cbiAgI2NvbnRlbnQgI3NpZGUtYmFyID4gZGl2IHtcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICB9XG4gICNjb250ZW50ICNzaWRlLWJhciBoMSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAjY29udGVudCAjc2lkZS1iYXIgdWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiNjb250ZW50IG1haW4ucGFnZSB7XG4gIGZsZXg6IDUwMHB4O1xufVxuI2NvbnRlbnQgbWFpbi5wYWdlIC5iYW5uZXIsXG4jY29udGVudCBtYWluLnBhZ2UgLmZsb3ctYnJlYWsge1xuICBoZWlnaHQ6IDcwdmg7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA0cmVtO1xufVxuI2NvbnRlbnQgbWFpbi5wYWdlIGFydGljbGUge1xuICBwYWRkaW5nOiAycmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbn1cbiNjb250ZW50IG1haW4ucGFnZSBhcnRpY2xlIGgzIHtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuI2NvbnRlbnQgbWFpbi5wYWdlIGZvb3RlciB7XG4gIGhlaWdodDogNnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdEOEI5Rjtcbn1cblxuI2Fib3V0LXBhZ2UgLmJhbm5lciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuI2Fib3V0LXBhZ2UgYXJ0aWNsZSNzdG9yeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuI2Fib3V0LXBhZ2UgYXJ0aWNsZSNzdG9yeSAudGV4dCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZ3JpZC1jb2x1bW46IDEgLyA3O1xuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xufVxuI2Fib3V0LXBhZ2UgYXJ0aWNsZSNzdG9yeSAuaW1nLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDM1dnc7XG4gIGdyaWQtY29sdW1uOiA3IC8gMTE7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG4jYWJvdXQtcGFnZSBhcnRpY2xlI2ZsYXZvcnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGRkQxO1xufVxuI2Fib3V0LXBhZ2UgYXJ0aWNsZSNmbGF2b3JzIC50ZXh0IHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBncmlkLWNvbHVtbjogNiAvIDExO1xuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xufVxuI2Fib3V0LXBhZ2UgYXJ0aWNsZSNmbGF2b3JzIC5pbWctY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMzV2dztcbiAgZ3JpZC1jb2x1bW46IDEgLyA2O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICBvcmRlcjogLTE7XG59XG4jYWJvdXQtcGFnZSBhcnRpY2xlI0NUQSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY2RDY7XG59XG4jYWJvdXQtcGFnZSBhcnRpY2xlI0NUQSAudGV4dCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZ3JpZC1jb2x1bW46IDEgLyA1O1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xufVxuI2Fib3V0LXBhZ2UgYXJ0aWNsZSNDVEEgLmltZy1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAzNXZ3O1xuICBncmlkLWNvbHVtbjogNSAvIDExO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBUUE7RUFDRSx3QkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVBGO0FBVUE7Ozs7OztFQU1FLFNBQUE7RUFDQSxjQUFBO0FBUkY7O0FBV0E7RUFDRSxzREFBQTtFQUNBLGVBQUE7QUFSRjs7QUFXQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFSRjs7QUFpQkE7O0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWJGOztBQWdCQTs7RUFDRSw0QkFBQTtBQVpGOztBQWVBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFaRjtBQWNFO0VBQ0UscUJBQUE7RUFDQSx5QkExRFM7RUEyRFQsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBR0EsYUFBQTtFQUNBLHdCQUFBO0FBZEo7QUFnQkk7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsTUFBQTtBQWROO0FBaUJJO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FBZk47QUFrQkk7RUFDRSxrQkFBQTtBQWhCTjtBQW9CSTtFQTNCRjtJQTRCSSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxNQUFBO0lBQ0EsWUFBQTtFQWpCSjtFQW1CSTtJQUNFLG1CQUFBO0VBakJOO0VBb0JJO0lBQ0UsU0FBQTtJQUNBLGtCQUFBO0VBbEJOO0VBcUJJO0lBQ0UsYUFBQTtFQW5CTjtBQUNGO0FBdUJFO0VBQ0UsV0FBQTtBQXJCSjtBQXVCSTs7RUFLRSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQXhCTjtBQTRCSTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUVBLGFBQUE7RUFDQSxzQ0FBQTtBQTNCTjtBQTZCTTtFQUNFLGVBQUE7QUEzQlI7QUErQkk7RUFFRSxZQUFBO0VBQ0EseUJBbElNO0FBb0daOztBQTJERTtFQS9IQSx5REFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUF3RUY7QUF5REU7RUExQkEsdUJBMkIrRTtBQXZEakY7QUE4QkU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBc0I0QjtBQWxEaEM7QUErQkU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBbkhGLHlEQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQW1IRSxlQWVnQjtBQTFDcEI7QUE2Q0U7RUE5QkEseUJBNUlZO0FBZ0lkO0FBY0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBMEJnQztBQXRDcEM7QUFlRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFuSEYseURBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBbUhFLGtCQW1CZ0I7RUFoQmQsU0FBQTtBQWJOO0FBZ0NFO0VBbENBLHlCQTNJYTtBQWdKZjtBQUhFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQThCNEI7QUF6QmhDO0FBRkU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBbkhGLHlEQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQW1IRSxlQXVCZ0I7QUFqQnBCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vIGNvbG9yIHNjaGVtZVxcbiRsaWdodC1nb2xkOiAjRjNEQTgxO1xcbiRsaWdodC1ncmVlbjogI0Y2RkZEMTtcXG4kbGlnaHQtb3JhbmdlOiAjRkZGNkQ2O1xcbiRsaWdodC1ibHVlOiAjRDNEQ0U5O1xcbiRncmF5LWJsdWU6ICM3RDhCOUY7XFxuXFxuLy8gZm9udHNcXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnb3BlbiBzYW5zJztcXG4gIHNyYzogdXJsKCcuL29wZW4tc2Fucy50dGYnKTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbnVsLFxcbmEsXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ29wZW4gc2FucycsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbmltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG5AbWl4aW4gY2VudGVyLWJnKCR1cmwpIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkdXJsKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi5jZW50ZXItY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBhcnJhbGF4IHtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuXFxuICAjc2lkZS1iYXIge1xcbiAgICBmbGV4OiAwIDAgbWluLWNvbnRlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1nb2xkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG5cXG4gICAgLy8gbWFrZSBjb250ZW50IHN0YXkgZml4ZWQgdG8gc2lkZSwgd2l0aG91dCBiZWluZyBhYnNvbHV0ZVxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuXFxuICAgID5kaXYge1xcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgICB0b3A6IDA7XFxuICAgIH1cXG5cXG4gICAgaDEge1xcbiAgICAgIGZvbnQtc2l6ZTogbWluKDEwdncsIDJlbSk7XFxuICAgICAgbWFyZ2luOiAxZW0gMDtcXG4gICAgfVxcblxcbiAgICB1bCBsaSB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbiAgICB9XFxuXFxuICAgIC8vIG1ha2Ugc2lkZS1iYXIgZ28gYWNyb3NzIHdoZW4gd3JhcHBlZFxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICAgIHRvcDogMDtcXG4gICAgICB3aWR0aDogMTAwdnc7XFxuXFxuICAgICAgPmRpdiB7XFxuICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgICAgIH1cXG5cXG4gICAgICBoMSB7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgfVxcblxcbiAgICAgIHVsIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICBtYWluLnBhZ2Uge1xcbiAgICBmbGV4OiA1MDBweDtcXG5cXG4gICAgLmJhbm5lcixcXG4gICAgLmZsb3ctYnJlYWsge1xcbiAgICAgIEBleHRlbmQgLmNlbnRlci1jb250ZW50O1xcbiAgICAgIEBleHRlbmQgLnBhcnJhbGF4O1xcblxcbiAgICAgIGhlaWdodDogNzB2aDtcXG4gICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkOyAvLyBwYXJyYWxheCBlZmZlY3RcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICB9XFxuXFxuICAgIC8vIGdlbmVyYWwgcnVsZXNcXG4gICAgYXJ0aWNsZSB7XFxuICAgICAgcGFkZGluZzogMnJlbTtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcblxcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuXFxuICAgICAgaDMge1xcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICBmb290ZXIge1xcbiAgICAgIEBleHRlbmQgLmNlbnRlci1jb250ZW50O1xcbiAgICAgIGhlaWdodDogNnJlbTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheS1ibHVlO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi8vIGtlZXAgaXQgRFJZIHdoZW4gZGVjbGFyaW5nIHVuaXF1ZSBsYXlvdXRzIGZvciBhcnRpY2xlc1xcbkBtaXhpbiBsYXlvdXQoJHBhZGRpbmctbGVmdC10ZXh0LCAkdGV4dC1jb2xzLCAkcGFkZGluZy1yaWdodC10ZXh0LCAkaW1nLWNvbHMsICRpbWctc3JjLCAkaW1nLWZpcnN0OiBmYWxzZSwgJGJnLWNvbG9yKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XFxuXFxuICAudGV4dCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZ3JpZC1jb2x1bW46ICN7JHRleHQtY29sc307XFxuICAgIHBhZGRpbmctcmlnaHQ6ICRwYWRkaW5nLXJpZ2h0LXRleHQ7XFxuICB9XFxuXFxuICAuaW1nLWNvbnRhaW5lciB7XFxuICAgIG1pbi1oZWlnaHQ6IDM1dnc7XFxuICAgIGdyaWQtY29sdW1uOiAjeyRpbWctY29sc307XFxuICAgIEBpbmNsdWRlIGNlbnRlci1iZygkaW1nLXNyYyk7IC8vIGltZyBhIGJhY2tncm91bmQgc28gaXRzIGhlaWdodCBpcyBlcXVhbCB0byB0ZXh0XFxuICAgIG1hcmdpbi1yaWdodDogJHBhZGRpbmctbGVmdC10ZXh0OyAvLyBzcGFjZSBiZXR3ZWVuIGltZyBhbmQgdGV4dCwgaWYgdGV4dCBpZiByaWdodFxcblxcbiAgICBAaWYgJGltZy1maXJzdCB7XFxuICAgICAgb3JkZXI6IC0xO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi8vIHBhZ2Utc3BlY2lmaWMgbGF5b3V0c1xcbiNhYm91dC1wYWdlIHtcXG4gIC5iYW5uZXIge1xcbiAgICBAaW5jbHVkZSBjZW50ZXItYmcoXFxcIi4vaW1nc0EvYmFubmVyLWJhY2tncm91bmQuanBnXFxcIik7XFxuICB9XFxuXFxuICBhcnRpY2xlI3N0b3J5IHtcXG4gICAgQGluY2x1ZGUgbGF5b3V0KDAsIFxcXCIxIC8gN1xcXCIsIDJyZW0sIFxcXCI3IC8gMTFcXFwiLCBcXFwiLi9pbWdzQS9mcnlpbmctcGFuLmpwZ1xcXCIsIGZhbHNlLCB3aGl0ZSk7XFxuICB9XFxuXFxuICBhcnRpY2xlI2ZsYXZvcnMge1xcbiAgICBAaW5jbHVkZSBsYXlvdXQoMnJlbSwgXFxcIjYgLyAxMVxcXCIsIDJyZW0sIFxcXCIxIC8gNlxcXCIsIFxcXCIuL2ltZ3NBL3NwaWNlcy5qcGdcXFwiLCB0cnVlLCAkbGlnaHQtZ3JlZW4pO1xcbiAgfVxcblxcbiAgYXJ0aWNsZSNDVEEge1xcbiAgICBAaW5jbHVkZSBsYXlvdXQoMCwgXFxcIjEgLyA1XFxcIiwgMXJlbSwgXFxcIjUgLyAxMVxcXCIsIFxcXCIuL2ltZ3NBL2Rpbm5lci10YWJsZS5qcGdcXFwiLCBmYWxzZSwgJGxpZ2h0LW9yYW5nZSk7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzBdLnVzZVsyXSEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMF0udXNlWzJdIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlTmF2YmFyLCBjcmVhdGVGb290ZXIsIGNyZWF0ZUFydGljbGUsIGNyZWF0ZU1haW5XaXRoQmFubmVyLCBhcHBlbmRDaGlsZHJlbiB9IGZyb20gXCIuL3RlbXBsYXRlXCI7XG5cbmZ1bmN0aW9uIHJlbmRlckFib3V0UGFnZShjb250ZW50RGl2KSB7XG5cbiAgY29uc3QgbmF2QmFyID0gY3JlYXRlTmF2YmFyKClcblxuICAvLyBDcmVhdGUgbWFpbiBzZWN0aW9uIGFuZCBiYW5uZXJcbiAgY29uc3QgbWFpblNlY3Rpb24gPSBjcmVhdGVNYWluV2l0aEJhbm5lcihcImFib3V0LXBhZ2VcIiwgXCJXaG8gV2UgQXJlXCIpO1xuXG4gIC8vIGNyZWF0ZSBhcnRpY2xlc1xuICBjb25zdCBhcnRpY2xlU3RvcnkgPSBjcmVhdGVBcnRpY2xlKFxuICAgIFwic3RvcnlcIixcbiAgICBcIk91ciBTdG9yeVwiLFxuICAgIFtcbiAgICAgIFwiV2VsY29tZSB0byBLYWoncyBLaXRjaGVuLCBhIGN1bGluYXJ5IGhhdmVuIGJvcm4gZnJvbSBhIHRlZW5hZ2UgZ2lybCdzIGJvdW5kbGVzcyBwYXNzaW9uIGFuZCByZWxlbnRsZXNzIGRldGVybWluYXRpb24uXCIsXG4gICAgICBcIkZyb20gYSB5b3VuZyBhZ2UsIEthaiBmb3VuZCBzb2xhY2UgaW4gdGhlIHdvcmxkIG9mIHNwaWNlcywgZmxhdm9ycywgYW5kIHJlY2lwZXMuIFdoYXQgYmVnYW4gYXMgYW4gaW5ub2NlbnQgY3VyaW9zaXR5IGluIGhlciBmYW1pbHkncyBraXRjaGVuIHNvb24gZXZvbHZlZCBpbnRvIGFuIGFsbC1jb25zdW1pbmcgb2JzZXNzaW9uLiBIZXIgbmlnaHRzIHdlcmUgc3BlbnQgZXhwZXJpbWVudGluZyB3aXRoIGluZ3JlZGllbnRzLCBibGVuZGluZyBjdWx0dXJlcywgYW5kIGNyYWZ0aW5nIGN1bGluYXJ5IHdvbmRlcnMgdGhhdCB0cmFuc2NlbmRlZCBoZXIgeWVhcnMuXCIsXG4gICAgICBcIldpdGggdW53YXZlcmluZyBzdXBwb3J0IGZyb20gaGVyIGZhbWlseSBhbmQgbWVudG9ycyB3aG8gcmVjb2duaXplZCBoZXIgZXhjZXB0aW9uYWwgdGFsZW50LCBLYWoncyBkcmVhbSBiZWdhbiB0byB0YWtlIHNoYXBlLiBLYWoncyBLaXRjaGVuIGlzIGEgdGVzdGFtZW50IHRvIHRoZSBwb3dlciBvZiBudXJ0dXJpbmcgZHJlYW1zLCByZWdhcmRsZXNzIG9mIGFnZS5cIlxuICAgIF1cbiAgKTtcblxuICBjb25zdCBhcnRpY2xlRmxhdm9ycyA9IGNyZWF0ZUFydGljbGUoXG4gICAgXCJmbGF2b3JzXCIsXG4gICAgXCJBIEpvdXJuZXkgb2YgRmxhdm9ycyBhbmQgRHJlYW1zXCIsXG4gICAgW1xuICAgICAgXCJFdmVyeSBkaXNoIHRoYXQgZ3JhY2VzIG91ciBtZW51IGNhcnJpZXMgYSBwaWVjZSBvZiBLYWoncyBoZWFydCBhbmQgYSBzdG9yeSBvZiBoZXIgam91cm5leS4gVGhlIGZ1c2lvbiBvZiBnbG9iYWwgaW5zcGlyYXRpb25zIGFuZCBsb2NhbGx5IHNvdXJjZWQgaW5ncmVkaWVudHMgcmVmbGVjdHMgaGVyIGNvbW1pdG1lbnQgdG8gZXhjZWxsZW5jZS4gQXMgeW91IHNhdm9yIGVhY2ggYml0ZSwgeW91J3JlIHRhc3Rpbmcgbm90IGp1c3QgZm9vZCwgYnV0IHRoZSBjdWxtaW5hdGlvbiBvZiB5ZWFycyBvZiBkZWRpY2F0aW9uIGFuZCBsb3ZlLlwiLFxuICAgICAgXCJLYWoncyBLaXRjaGVuIGlzbid0IGp1c3QgYSBkaW5pbmcgZXN0YWJsaXNobWVudDsgaXQncyBhIHdlbGNvbWluZyBzcGFjZSB3aGVyZSBpbm5vdmF0aW9uIHRocml2ZXMsIGFuZCBwYXNzaW9uIGtub3dzIG5vIGxpbWl0cy4gV2l0aCBpdHMgaW52aXRpbmcgYW1iaWFuY2UgYW5kIHRoZSB3YXJtIHNtaWxlcyBvZiBvdXIgc3RhZmYsIHlvdSdsbCBmZWVsIGxpa2UgYSBjaGVyaXNoZWQgZ3Vlc3QgaW4gS2FqJ3Mgb3duIGtpdGNoZW4uXCJcbiAgICBdXG4gICk7XG5cbiAgY29uc3QgYXJ0aWNsZUNUQSA9IGNyZWF0ZUFydGljbGUoXG4gICAgXCJDVEFcIixcbiAgICBcIkV4cGVyaWVuY2UgS2FqJ3MgVmlzaW9uXCIsXG4gICAgW1xuICAgICAgXCJTdGVwIGludG8gS2FqJ3Mgd29ybGQgYW5kIGV4cGVyaWVuY2UgYSBjdWxpbmFyeSBhZHZlbnR1cmUgdGhhdCBkZWZpZXMgZXhwZWN0YXRpb25zLiBSZXNlcnZlIHlvdXIgdGFibGUgdG9kYXkgYW5kIGVtYmFyayBvbiBhIGpvdXJuZXkgdGhhdCBjZWxlYnJhdGVzIG5vdCBqdXN0IGZvb2QsIGJ1dCB0aGUgYm91bmRsZXNzIHBvdGVudGlhbCB3aXRoaW4gdXMgYWxsLiBDb21lLCBiZSBhIHBhcnQgb2Ygb3VyIHN0b3J5LlwiLFxuICAgICAgLy8gLi4uIG90aGVyIHBhcmFncmFwaHMgLi4uXG4gICAgXVxuICApO1xuXG4gIC8vIENyZWF0ZSBmb290ZXJcbiAgY29uc3QgZm9vdGVyID0gY3JlYXRlRm9vdGVyKClcblxuICAvLyBBcHBlbmQgYXJ0aWNsZXMgdG8gbWFpbiBzZWN0aW9uXG4gIGFwcGVuZENoaWxkcmVuKG1haW5TZWN0aW9uLCBbYXJ0aWNsZVN0b3J5LCBhcnRpY2xlRmxhdm9ycywgYXJ0aWNsZUNUQSwgZm9vdGVyXSlcblxuICAvLyBBcHBlbmQgbmF2YmFyIGFuZCBtYWluIHNlY3Rpb24gdG8gY29udGVudFxuICBhcHBlbmRDaGlsZHJlbihjb250ZW50RGl2LCBbbmF2QmFyLCBtYWluU2VjdGlvbl0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckFib3V0UGFnZSIsIi8vIGNlbnRyYWxpc2UgY3JlYXRpb24gb2Ygc2hhcmVkIGNvbXBvbmVudHNcblxuZnVuY3Rpb24gY3JlYXRlTmF2YmFyKCkge1xuICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICBuYXZCYXIuaWQgPSBcInNpZGUtYmFyXCI7XG5cbiAgY29uc3QgbmF2RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbmF2SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgbmF2SGVhZGluZy50ZXh0Q29udGVudCA9IFwiS2FqJ3MgS2l0Y2hlblwiO1xuXG4gIGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGNvbnN0IG5hdkl0ZW1zID0gW1wiQWJvdXRcIiwgXCJNZW51XCIsIFwiTG9jYXRpb25cIl07XG5cbiAgbmF2SXRlbXMuZm9yRWFjaChpdGVtVGV4dCA9PiB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGkudGV4dENvbnRlbnQgPSBpdGVtVGV4dDtcbiAgICBuYXZMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgfSk7XG5cbiAgbmF2RGl2LmFwcGVuZENoaWxkKG5hdkhlYWRpbmcpO1xuICBuYXZEaXYuYXBwZW5kQ2hpbGQobmF2TGlzdCk7XG4gIG5hdkJhci5hcHBlbmRDaGlsZChuYXZEaXYpO1xuXG4gIHJldHVybiBuYXZCYXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgZm9vdGVyLmNsYXNzTmFtZSA9IFwiYnktbGluZVwiO1xuICBjb25zdCBmb290ZXJQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZm9vdGVyUGFyYWdyYXBoLmlubmVySFRNTCA9ICdCeSBBcmllbCBSb2JlcnQgTXV0ZWJpOiA8YSBocmVmPVwiI1wiPnNvdXJjZSByZXBvPC9hPic7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJQYXJhZ3JhcGgpO1xuXG4gIHJldHVybiBmb290ZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFydGljbGUoaWQsIGhlYWRpbmdUZXh0LCBwYXJhZ3JhcGhzKSB7XG4gIGNvbnN0IGFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcbiAgYXJ0aWNsZS5pZCA9IGlkO1xuXG4gIGNvbnN0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0ZXh0RGl2LmNsYXNzTmFtZSA9IFwidGV4dFwiO1xuXG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBoZWFkaW5nVGV4dDtcbiAgdGV4dERpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICBwYXJhZ3JhcGhzLmZvckVhY2gocGFyYWdyYXBoVGV4dCA9PiB7XG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gcGFyYWdyYXBoVGV4dDtcbiAgICB0ZXh0RGl2LmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG4gIH0pO1xuXG4gIGNvbnN0IGltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhc2lkZVwiKTtcbiAgaW1nQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiaW1nLWNvbnRhaW5lclwiO1xuXG4gIGFydGljbGUuYXBwZW5kQ2hpbGQodGV4dERpdik7XG4gIGFydGljbGUuYXBwZW5kQ2hpbGQoaW1nQ29udGFpbmVyKTtcblxuICByZXR1cm4gYXJ0aWNsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbldpdGhCYW5uZXIocGFnZU5hbWUsIGJhbm5lclRleHQpIHtcbiAgY29uc3QgbWFpblNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgbWFpblNlY3Rpb24uY2xhc3NOYW1lID0gXCJwYWdlXCI7XG4gIG1haW5TZWN0aW9uLmlkID0gcGFnZU5hbWU7XG5cbiAgY29uc3QgYmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhncm91cFwiKTtcbiAgYmFubmVyLmNsYXNzTmFtZSA9IFwiYmFubmVyXCI7XG4gIGNvbnN0IGJhbm5lckhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGJhbm5lckhlYWRpbmcudGV4dENvbnRlbnQgPSBiYW5uZXJUZXh0O1xuICBiYW5uZXIuYXBwZW5kQ2hpbGQoYmFubmVySGVhZGluZyk7XG5cbiAgbWFpblNlY3Rpb24uYXBwZW5kQ2hpbGQoYmFubmVyKTtcblxuICByZXR1cm4gbWFpblNlY3Rpb247XG59XG5cbmZ1bmN0aW9uIGFwcGVuZENoaWxkcmVuKHBhcmVudCwgY2hpbGRyZW4pIHtcbiAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZClcbiAgfVxufVxuXG5leHBvcnQgeyBjcmVhdGVOYXZiYXIsIGNyZWF0ZUZvb3RlciwgY3JlYXRlQXJ0aWNsZSwgY3JlYXRlTWFpbldpdGhCYW5uZXIsIGFwcGVuZENoaWxkcmVuIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJ1xuaW1wb3J0IHJlbmRlckFib3V0UGFnZSBmcm9tIFwiLi9hYm91dC1wYWdlXCJcblxuLy8gc2V0dXA6IGNyZWF0ZSB0aGUgY29udGVudCBkaXZcbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29udGVudERpdi5pZCA9IFwiY29udGVudFwiO1xuXG4vLyBDYWxsIHRoZSByZW5kZXJBYm91dFBhZ2UgZnVuY3Rpb25cbnJlbmRlckFib3V0UGFnZShjb250ZW50RGl2KTtcblxuLy8gYXBwZW5kIGNvbnRlbnQgdG8gYm9keVxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50RGl2KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=