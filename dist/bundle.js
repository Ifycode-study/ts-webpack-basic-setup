/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forms.ts"
/*!**********************!*\
  !*** ./src/forms.ts ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formData: () => (/* binding */ formData)\n/* harmony export */ });\nconst formData = (form) => {\n    const inputs = form.querySelectorAll('input');\n    let values = {};\n    inputs.forEach(input => {\n        values[input.id] = input.value;\n    });\n    return values;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZm9ybXMudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUNPLE1BQU0sUUFBUSxHQUFHLENBQUMsSUFBcUIsRUFBRSxFQUFFO0lBQ2hELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QyxJQUFJLE1BQU0sR0FBNkIsRUFBRSxDQUFDO0lBRTFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDckIsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtd2VicGFjay1iYXNpYy1zZXR1cC8uL3NyYy9mb3Jtcy50cz81MGI2Il0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNvbnN0IGZvcm1EYXRhID0gKGZvcm06IEhUTUxGb3JtRWxlbWVudCkgPT4ge1xuICBjb25zdCBpbnB1dHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG4gIGxldCB2YWx1ZXM6IHtbcHJvcDogc3RyaW5nXTogc3RyaW5nfSA9IHt9O1xuXG4gIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICB2YWx1ZXNbaW5wdXQuaWRdID0gaW5wdXQudmFsdWU7XG4gIH0pO1xuICByZXR1cm4gdmFsdWVzO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/forms.ts\n\n}");

/***/ },

/***/ "./src/index.ts"
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms */ \"./src/forms.ts\");\n// Webpack generated the .js from my ts code.\n\nconst form = document.querySelector('form');\nform.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const data = (0,_forms__WEBPACK_IMPORTED_MODULE_0__.formData)(form);\n    console.log(data);\n});\n// Uncomment this code below when you want to practice debugging with eval source map as shown in video #6 at: https://www.youtube.com/watch?v=Gb9_yBWql24&list=PL4cUxeGkcC9hOkGbwzgYFmaxB0WiduYJC&index=7\n// const person: any = {};\n// console.log(person.speak());\n// console.log('Hello World!');\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7QUFDQSw2Q0FBNkM7QUFFVjtBQUVuQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBRSxDQUFDO0FBRTdDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUNwQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbkIsTUFBTSxJQUFJLEdBQUcsZ0RBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BCLENBQUMsQ0FBQyxDQUFDO0FBRUgsME1BQTBNO0FBQzFNLDBCQUEwQjtBQUMxQiwrQkFBK0I7QUFFL0IsK0JBQStCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtd2VicGFjay1iYXNpYy1zZXR1cC8uL3NyYy9pbmRleC50cz9mZmI0Il0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8gV2VicGFjayBnZW5lcmF0ZWQgdGhlIC5qcyBmcm9tIG15IHRzIGNvZGUuXG5cbmltcG9ydCB7IGZvcm1EYXRhIH0gZnJvbSAnLi9mb3Jtcyc7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJykhO1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgZGF0YSA9IGZvcm1EYXRhKGZvcm0pO1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbn0pO1xuXG4vLyBVbmNvbW1lbnQgdGhpcyBjb2RlIGJlbG93IHdoZW4geW91IHdhbnQgdG8gcHJhY3RpY2UgZGVidWdnaW5nIHdpdGggZXZhbCBzb3VyY2UgbWFwIGFzIHNob3duIGluIHZpZGVvICM2IGF0OiBodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PUdiOV95QldxbDI0Jmxpc3Q9UEw0Y1V4ZUdrY0M5aE9rR2J3emdZRm1heEIwV2lkdVlKQyZpbmRleD03XG4vLyBjb25zdCBwZXJzb246IGFueSA9IHt9O1xuLy8gY29uc29sZS5sb2cocGVyc29uLnNwZWFrKCkpO1xuXG4vLyBjb25zb2xlLmxvZygnSGVsbG8gV29ybGQhJyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n\n}");

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;