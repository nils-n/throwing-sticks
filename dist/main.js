/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/scripts/main.js":
/*!********************************!*\
  !*** ./assets/scripts/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var Simulation = __webpack_require__(/*! ././simulation */ \"./assets/scripts/simulation.js\");\nconsole.log('Hello there');\nmodel = new Simulation();\nconsole.log(model);\nvar testAngles = [{\n  position: 0.0,\n  orientation: 0\n}, {\n  position: 0.0,\n  orientation: 80\n}, {\n  position: 0.5,\n  orientation: 90\n}, {\n  position: 1.0,\n  orientation: 90\n}];\nfor (var _i = 0, _testAngles = testAngles; _i < _testAngles.length; _i++) {\n  var testAngle = _testAngles[_i];\n  model.addNewStick(testAngle);\n}\nmodel.assignColours();\n\n//# sourceURL=webpack://throwing-sticks/./assets/scripts/main.js?");

/***/ }),

/***/ "./assets/scripts/simulation.js":
/*!**************************************!*\
  !*** ./assets/scripts/simulation.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Stick = __webpack_require__(/*! ./stick */ \"./assets/scripts/stick.js\");\n\n/**\n * This class contains the calculation in the background and keeps track of the sticks\n */\nvar Simulation = /*#__PURE__*/function () {\n  function Simulation() {\n    _classCallCheck(this, Simulation);\n    _defineProperty(this, \"sticks\", void 0);\n    _defineProperty(this, \"stickCounter\", void 0);\n    _defineProperty(this, \"estimatedValueOfPi\", void 0);\n    _defineProperty(this, \"numberGreenSticks\", void 0);\n    this.sticks = [];\n    this.stickCounter = {\n      'red': 0,\n      'green': 0,\n      'total': 0\n    };\n    this.estimatedValueOfPi = 42;\n  }\n\n  // adds a new stick\n  _createClass(Simulation, [{\n    key: \"addNewStick\",\n    value: function addNewStick(data) {\n      this.sticks.push(new Stick(data));\n      this.stickCounter['total'] += 1;\n\n      // if color has been defined, move to the next\n      if (data.colour) {\n        this.stickCounter[data.colour] += 1;\n      }\n    }\n\n    //clear stick array\n  }, {\n    key: \"removeAllSticks\",\n    value: function removeAllSticks() {\n      this.sticks = [];\n      this.stickCounter = {\n        'red': 0,\n        'green': 0,\n        'total': 0\n      };\n    }\n\n    //add a stick with a random location and orientation\n    // the stick has a position between 0 and  1\n  }, {\n    key: \"addNewRandomStick\",\n    value: function addNewRandomStick() {\n      // to ensure angle is between 0 and 180\n      var maxAngle = 180;\n\n      // create a random position \n      var randomPosition = Math.random();\n      var randomOrientation = maxAngle * Math.random();\n      var data = {\n        position: randomPosition,\n        orientation: randomOrientation\n      };\n      this.addNewStick(data);\n    }\n\n    // assigns a color to the stick wheter it touches the midlines.\n  }, {\n    key: \"assignColours\",\n    value: function assignColours() {\n      // loop over sticks and assign color\n      var _iterator = _createForOfIteratorHelper(this.sticks),\n        _step;\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var stick = _step.value;\n          // if color has been defined, move to the next\n          if (stick.colour) {\n            console.log('color has been defined already!');\n            continue;\n          }\n\n          // the stick will touch the line under this condition for the orientation \n          var stickTouchesMidline = 2 * this.toRadians(stick.orientation) < this.position;\n\n          // set the color to red if the stick touches - green otherwise \n          stick.colour = stickTouchesMidline ? \"red\" : 'green';\n\n          // update the stick count too\n          this.stickCounter[stick.colour] += 1;\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    }\n\n    // convert angle to radians because Math.cos expects angles in rad \n  }, {\n    key: \"toRadians\",\n    value: function toRadians(angle) {\n      return Math.PI * angle / 180.0;\n    }\n  }, {\n    key: \"estimatePi\",\n    value: function estimatePi() {\n      console.log(\" -> red sticks \".concat(this.stickCounter['red'], \" - green sticks \").concat(this.stickCounter['green'], \"  - total #  \").concat(this.stickCounter['total'], \"  \"));\n\n      // ensure that this.stickCounter['red'] is not zero \n      if (!this.stickCounter['red']) {\n        return 0;\n      }\n      var result = 2 * this.stickCounter['total'] / this.stickCounter['red'];\n      this.estimatedValueOfPi = result;\n      console.log(\" -> estimated value of Pi  \".concat(result, \" \"));\n    }\n  }]);\n  return Simulation;\n}();\n;\nmodule.exports = Simulation;\n\n//# sourceURL=webpack://throwing-sticks/./assets/scripts/simulation.js?");

/***/ }),

/***/ "./assets/scripts/stick.js":
/*!*********************************!*\
  !*** ./assets/scripts/stick.js ***!
  \*********************************/
/***/ ((module) => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n/**\n * This class describes a single stick with all relevant properties for calculating Pi\n */\nvar Stick = /*#__PURE__*/_createClass(function Stick(data) {\n  _classCallCheck(this, Stick);\n  _defineProperty(this, \"position\", void 0);\n  _defineProperty(this, \"orientation\", void 0);\n  _defineProperty(this, \"length\", void 0);\n  _defineProperty(this, \"colour\", void 0);\n  this.position = data.position;\n  this.orientation = data.orientation;\n  this.length = data.length;\n  this.colour = data.colour;\n});\n;\nmodule.exports = Stick;\n\n//# sourceURL=webpack://throwing-sticks/./assets/scripts/stick.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/scripts/main.js");
/******/ 	
/******/ })()
;