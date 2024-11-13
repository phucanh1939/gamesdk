(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("fearth", [], factory);
	else if(typeof exports === 'object')
		exports["fearth"] = factory();
	else
		root["fearth"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Gdk.ts":
/*!********************!*\
  !*** ./src/Gdk.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gdk: () => (/* binding */ Gdk)
/* harmony export */ });
/* harmony import */ var _defines_ErrorCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defines/ErrorCode */ "./src/defines/ErrorCode.ts");

var Gdk = /** @class */ (function () {
    function Gdk() {
        this.config = null;
        this.initialized = false;
    }
    Gdk.prototype.initialize = function (config, callback) {
        console.log("[Gdk] <initialize> config = ".concat(JSON.stringify(config)));
        if (this.initialized) {
            callback === null || callback === void 0 ? void 0 : callback(false);
            return;
        }
        this.config = config;
        this.initialized = true;
        callback === null || callback === void 0 ? void 0 : callback(true);
    };
    Gdk.prototype.initializeWithJson = function (configJson, callback) {
        console.log("[Gdk] <initializeWithJson> configJson = ".concat(configJson));
        try {
            var config = JSON.parse(configJson);
            this.initialize(config, callback);
        }
        catch (error) {
            console.error("[Gdk] <initializeWithJson> Error parsing request JSON", error);
            callback === null || callback === void 0 ? void 0 : callback(false);
        }
    };
    Gdk.prototype.login = function (request, callback) {
        console.log("[Gdk] <login> request = ".concat(JSON.stringify(request)));
        var response = {
            success: true,
            errorCode: _defines_ErrorCode__WEBPACK_IMPORTED_MODULE_0__.ErrorCode.OK,
            userId: "xxx1939",
            token: "tk_1222111"
        };
        callback === null || callback === void 0 ? void 0 : callback(response);
    };
    Gdk.prototype.loginWithJson = function (requestJson, callback) {
        console.log("[Gdk] <loginWithJson> requestJson = ".concat(requestJson));
        try {
            var request = JSON.parse(requestJson);
            this.login(request, function (response) {
                var responseJson = JSON.stringify(response);
                callback === null || callback === void 0 ? void 0 : callback(responseJson);
            });
        }
        catch (error) {
            console.error("[Gdk] <loginWithJson> Error parsing request JSON", error);
            var errorResponse = {
                success: false,
                errorCode: _defines_ErrorCode__WEBPACK_IMPORTED_MODULE_0__.ErrorCode.INVALID_INPUT_DATA,
                userId: "",
                token: ""
            };
            callback === null || callback === void 0 ? void 0 : callback(JSON.stringify(errorResponse));
        }
    };
    return Gdk;
}());



/***/ }),

/***/ "./src/defines/ErrorCode.ts":
/*!**********************************!*\
  !*** ./src/defines/ErrorCode.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorCode: () => (/* binding */ ErrorCode)
/* harmony export */ });
var ErrorCode = /** @class */ (function () {
    function ErrorCode() {
    }
    ErrorCode.OK = 0;
    ErrorCode.INVALID_INPUT_DATA = 1;
    return ErrorCode;
}());



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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gdk: () => (/* binding */ gdk)
/* harmony export */ });
/* harmony import */ var _Gdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gdk */ "./src/Gdk.ts");

var gdk = new _Gdk__WEBPACK_IMPORTED_MODULE_0__.Gdk();

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RrLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7QUNWZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHlEQUFTO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHlEQUFTO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNjOzs7Ozs7Ozs7Ozs7Ozs7QUMzRGY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNvQjs7Ozs7OztVQ1ByQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjRCO0FBQ3JCLGNBQWMscUNBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mZWFydGgvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2ZlYXJ0aC8uL3NyYy9HZGsudHMiLCJ3ZWJwYWNrOi8vZmVhcnRoLy4vc3JjL2RlZmluZXMvRXJyb3JDb2RlLnRzIiwid2VicGFjazovL2ZlYXJ0aC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mZWFydGgvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZlYXJ0aC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZlYXJ0aC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZlYXJ0aC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImZlYXJ0aFwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJmZWFydGhcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZmVhcnRoXCJdID0gZmFjdG9yeSgpO1xufSkoc2VsZiwgKCkgPT4ge1xucmV0dXJuICIsImltcG9ydCB7IEVycm9yQ29kZSB9IGZyb20gXCIuL2RlZmluZXMvRXJyb3JDb2RlXCI7XG52YXIgR2RrID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEdkaygpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBudWxsO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgfVxuICAgIEdkay5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChjb25maWcsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW0dka10gPGluaXRpYWxpemU+IGNvbmZpZyA9IFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeShjb25maWcpKSk7XG4gICAgICAgIGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9PT0gbnVsbCB8fCBjYWxsYmFjayA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FsbGJhY2soZmFsc2UpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgY2FsbGJhY2sgPT09IG51bGwgfHwgY2FsbGJhY2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhbGxiYWNrKHRydWUpO1xuICAgIH07XG4gICAgR2RrLnByb3RvdHlwZS5pbml0aWFsaXplV2l0aEpzb24gPSBmdW5jdGlvbiAoY29uZmlnSnNvbiwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJbR2RrXSA8aW5pdGlhbGl6ZVdpdGhKc29uPiBjb25maWdKc29uID0gXCIuY29uY2F0KGNvbmZpZ0pzb24pKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBjb25maWcgPSBKU09OLnBhcnNlKGNvbmZpZ0pzb24pO1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplKGNvbmZpZywgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltHZGtdIDxpbml0aWFsaXplV2l0aEpzb24+IEVycm9yIHBhcnNpbmcgcmVxdWVzdCBKU09OXCIsIGVycm9yKTtcbiAgICAgICAgICAgIGNhbGxiYWNrID09PSBudWxsIHx8IGNhbGxiYWNrID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYWxsYmFjayhmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEdkay5wcm90b3R5cGUubG9naW4gPSBmdW5jdGlvbiAocmVxdWVzdCwgY2FsbGJhY2spIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJbR2RrXSA8bG9naW4+IHJlcXVlc3QgPSBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkocmVxdWVzdCkpKTtcbiAgICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgIGVycm9yQ29kZTogRXJyb3JDb2RlLk9LLFxuICAgICAgICAgICAgdXNlcklkOiBcInh4eDE5MzlcIixcbiAgICAgICAgICAgIHRva2VuOiBcInRrXzEyMjIxMTFcIlxuICAgICAgICB9O1xuICAgICAgICBjYWxsYmFjayA9PT0gbnVsbCB8fCBjYWxsYmFjayA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FsbGJhY2socmVzcG9uc2UpO1xuICAgIH07XG4gICAgR2RrLnByb3RvdHlwZS5sb2dpbldpdGhKc29uID0gZnVuY3Rpb24gKHJlcXVlc3RKc29uLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIltHZGtdIDxsb2dpbldpdGhKc29uPiByZXF1ZXN0SnNvbiA9IFwiLmNvbmNhdChyZXF1ZXN0SnNvbikpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSBKU09OLnBhcnNlKHJlcXVlc3RKc29uKTtcbiAgICAgICAgICAgIHRoaXMubG9naW4ocmVxdWVzdCwgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlSnNvbiA9IEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayA9PT0gbnVsbCB8fCBjYWxsYmFjayA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FsbGJhY2socmVzcG9uc2VKc29uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIltHZGtdIDxsb2dpbldpdGhKc29uPiBFcnJvciBwYXJzaW5nIHJlcXVlc3QgSlNPTlwiLCBlcnJvcik7XG4gICAgICAgICAgICB2YXIgZXJyb3JSZXNwb25zZSA9IHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlcnJvckNvZGU6IEVycm9yQ29kZS5JTlZBTElEX0lOUFVUX0RBVEEsXG4gICAgICAgICAgICAgICAgdXNlcklkOiBcIlwiLFxuICAgICAgICAgICAgICAgIHRva2VuOiBcIlwiXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FsbGJhY2sgPT09IG51bGwgfHwgY2FsbGJhY2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhbGxiYWNrKEpTT04uc3RyaW5naWZ5KGVycm9yUmVzcG9uc2UpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEdkaztcbn0oKSk7XG5leHBvcnQgeyBHZGsgfTtcbiIsInZhciBFcnJvckNvZGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRXJyb3JDb2RlKCkge1xuICAgIH1cbiAgICBFcnJvckNvZGUuT0sgPSAwO1xuICAgIEVycm9yQ29kZS5JTlZBTElEX0lOUFVUX0RBVEEgPSAxO1xuICAgIHJldHVybiBFcnJvckNvZGU7XG59KCkpO1xuZXhwb3J0IHsgRXJyb3JDb2RlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEdkayB9IGZyb20gXCIuL0dka1wiO1xuZXhwb3J0IHZhciBnZGsgPSBuZXcgR2RrKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=