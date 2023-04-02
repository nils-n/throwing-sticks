/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/variables.js":
/*!*************************************!*\
  !*** ./src/components/variables.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"keyValue\": () => (/* binding */ keyValue),\n/* harmony export */   \"sayHelloWorld\": () => (/* binding */ sayHelloWorld)\n/* harmony export */ });\nvar keyValue = 1000;\nfunction sayHelloWorld() {\n  keyValue = 2000;\n  console.log(\"Well Well Well, if that isn't neat.\");\n}\n\n//# sourceURL=webpack://throwing-sticks/./src/components/variables.js?");

/***/ }),

/***/ "./src/diagram.js":
/*!************************!*\
  !*** ./src/diagram.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animateExample\": () => (/* binding */ animateExample),\n/* harmony export */   \"diagram\": () => (/* binding */ diagram),\n/* harmony export */   \"getMaxValue\": () => (/* binding */ getMaxValue)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'd3/dist/d3.min.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\nvar diagram = {\n  sticks: [],\n  resetSticks: function resetSticks() {\n    this.sticks = [];\n  },\n  initDiagram: function initDiagram() {\n    var _this = this;\n    document.getElementById('hero-reset').addEventListener('click', function () {\n      console.log('diagram.js : reset button has been clicked!)');\n      _this.resetSticks();\n    });\n    document.getElementById('hero-throw').addEventListener('click', function () {\n      console.log('diagram.js : throw button has been clicked!)');\n      _this.sticks.push('at least something');\n    });\n  }\n};\nfunction getMaxValue(data) {\n  var maxValue = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'd3/dist/d3.min.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(data);\n  return maxValue;\n}\n\n// based on https://busypeoples.github.io/post/testing-d3-with-jasmine/\nfunction animateExample() {\n  var d3 = require('d3');\n  var that = {};\n  that.render = function () {\n    var height = 200;\n    var width = 300;\n    var svg = d3.select(\"#main-diagram\").append('svg').attr('width', width).attr('height', height);\n    svg.fillStyle = '#2#cc9616';\n  };\n  return that;\n}\n\n//# sourceURL=webpack://throwing-sticks/./src/diagram.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/variables.js */ \"./src/components/variables.js\");\n/* harmony import */ var _src_diagram_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/diagram.js */ \"./src/diagram.js\");\n\n\nconsole.log(_components_variables_js__WEBPACK_IMPORTED_MODULE_0__.keyValue);\n(0,_components_variables_js__WEBPACK_IMPORTED_MODULE_0__.sayHelloWorld)();\nconsole.log(_components_variables_js__WEBPACK_IMPORTED_MODULE_0__.keyValue);\nvar data = [1, 2, 3, 4, 5];\nvar maxValue = (0,_src_diagram_js__WEBPACK_IMPORTED_MODULE_1__.getMaxValue)(data);\nconsole.log(\"D3 says --> the max value of [1,2,3,4,5] is \".concat(maxValue));\n\n//# sourceURL=webpack://throwing-sticks/./src/index.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;