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

/***/ "./resources/js/generator.js":
/*!***********************************!*\
  !*** ./resources/js/generator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomInteger\": () => (/* binding */ getRandomInteger),\n/* harmony export */   \"getRandomNumber\": () => (/* binding */ getRandomNumber)\n/* harmony export */ });\nconst getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;\r\nconst getRandomNumber = () => Math.random();\r\n\r\n\r\n\n\n//# sourceURL=webpack://encacap_august/./resources/js/generator.js?");

/***/ }),

/***/ "./resources/js/home.js":
/*!******************************!*\
  !*** ./resources/js/home.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification */ \"./resources/js/notification.js\");\n\r\n\r\nconst home = () => {\r\n    const showButton = document.querySelector(\"button\");\r\n    const notification = new _notification__WEBPACK_IMPORTED_MODULE_0__.default();\r\n\r\n    showButton.onclick = () => {\r\n        notification.success(\r\n            \"Lưu bài viết không thành công\",\r\n            \"Đã xảy ra lỗi khi <span>cố gằng kết nối tới máy chủ</span>.\",\r\n            [[\"Xem báo cáo lỗi\", () => console.log(\"Update\")]]\r\n        );\r\n    };\r\n};\r\n\r\nhome();\r\n\n\n//# sourceURL=webpack://encacap_august/./resources/js/home.js?");

/***/ }),

/***/ "./resources/js/notification.js":
/*!**************************************!*\
  !*** ./resources/js/notification.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generator */ \"./resources/js/generator.js\");\n\r\n\r\nclass Notification {\r\n    constructor(option) {\r\n        this.container = document.createElement(\"div\");\r\n        this.timeouts = [];\r\n\r\n        this.container.className = \"notification\";\r\n\r\n        document.querySelector(\"body\").prepend(this.container);\r\n    }\r\n\r\n    renderIcon(status) {\r\n        if (status === \"error\") {\r\n            return `<ion-icon name=\"remove-circle\"></ion-icon>`;\r\n        } else if (status === \"success\") {\r\n            return `<ion-icon name=\"checkmark-circle\"></ion-icon>`;\r\n        } else if (status === \"warning\") {\r\n            return `<ion-icon name=\"warning\"></ion-icon>`;\r\n        } else {\r\n            return `<ion-icon name=\"notifications-sharp\"></ion-icon>`;\r\n        }\r\n    }\r\n\r\n    renderNotification(title, additonalData) {\r\n        const tmpNode = document.createElement(\"div\");\r\n        const { isShowCloseButton, className, message, buttons } = additonalData;\r\n\r\n        let closeButtonNode = \"\";\r\n        let messageNode = \"\";\r\n\r\n        if (message && message.length > 0) {\r\n            messageNode = `<div class=\"notification-content\">${message}</div>`;\r\n        }\r\n\r\n        if (isShowCloseButton) {\r\n            closeButtonNode = `\r\n                <div class=\"notification-close\">\r\n                    <ion-icon name=\"close\"></ion-icon>\r\n                </div>\r\n            `;\r\n        }\r\n\r\n        tmpNode.innerHTML = `\r\n            <div class=\"\r\n                notification-item \r\n                notification-${className !== \"normal\" ? className : \"\"} \r\n                animate-slide-up \r\n                relative\r\n            \">\r\n                <div class=\"notification-header\">\r\n                    <div class=\"notification-icon\">\r\n                        ${this.renderIcon(className)}\r\n                    </div>\r\n                    <div class=\"notification-title\">${title}</div>\r\n                    ${closeButtonNode}\r\n                </div>\r\n                ${messageNode}\r\n            </div>\r\n        `;\r\n\r\n        const notificationNode = tmpNode.querySelector(\".notification-item\");\r\n\r\n        if (buttons && buttons.length > 0) {\r\n            const footerNode = document.createElement(\"div\");\r\n\r\n            footerNode.className = \"notification-action\";\r\n\r\n            if (buttons[0]) {\r\n                const primaryButtonNode = document.createElement(\"button\");\r\n                const [title, event] = buttons[0];\r\n\r\n                primaryButtonNode.className = \"btn btn-primary\";\r\n                primaryButtonNode.innerText = title;\r\n\r\n                if (typeof event === \"function\") {\r\n                    primaryButtonNode.addEventListener(\"click\", event);\r\n                } else if (typeof event === \"string\") {\r\n                    primaryButtonNode.addEventListener(\"click\", () => {\r\n                        window.location.href = event;\r\n                    });\r\n                }\r\n\r\n                footerNode.appendChild(primaryButtonNode);\r\n            }\r\n\r\n            if (buttons[1]) {\r\n                const secondaryButtonNode = document.createElement(\"button\");\r\n                const [title, event] = buttons[1];\r\n\r\n                secondaryButtonNode.className = \"btn btn-secondary\";\r\n                secondaryButtonNode.innerText = title;\r\n\r\n                if (typeof event === \"function\") {\r\n                    secondaryButtonNode.addEventListener(\"click\", event);\r\n                } else if (typeof event === \"string\") {\r\n                    secondaryButtonNode.addEventListener(\"click\", () => {\r\n                        window.location.href = event;\r\n                    });\r\n                }\r\n\r\n                footerNode.appendChild(secondaryButtonNode);\r\n            }\r\n\r\n            notificationNode.appendChild(footerNode);\r\n        }\r\n\r\n        return notificationNode;\r\n    }\r\n\r\n    pushNotification(notificationNode) {\r\n        const id = (0,_generator__WEBPACK_IMPORTED_MODULE_0__.getRandomNumber)();\r\n\r\n        this.container.appendChild(notificationNode);\r\n        this.timeouts.push({\r\n            id,\r\n            timeoutId: setTimeout(() => this.remove(id, notificationNode), 5000),\r\n        });\r\n    }\r\n\r\n    remove(notificationId, notificationNode) {\r\n        const { timeoutId: timeout } = this.timeouts.find(({ id }) => id === notificationId);\r\n        clearTimeout(timeout);\r\n        notificationNode.classList.add(\"animate-slide-down\");\r\n        setTimeout(() => {\r\n            this.container.removeChild(notificationNode);\r\n        }, 150);\r\n    }\r\n\r\n    prePush(type, data) {\r\n        const notificationNode = this.renderNotification(data.title, {\r\n            className: type,\r\n            ...data,\r\n        });\r\n\r\n        this.pushNotification(notificationNode);\r\n    }\r\n\r\n    normal(title, message = null, buttons = null) {\r\n        this.prePush(\"normal\", { title, message, buttons });\r\n    }\r\n\r\n    error(title, message = null, buttons = null) {\r\n        this.prePush(\"error\", { title, message, buttons });\r\n    }\r\n\r\n    success(title, message = null, buttons = null) {\r\n        this.prePush(\"success\", { title, message, buttons });\r\n    }\r\n\r\n    warning(title, message = null, buttons = null) {\r\n        this.prePush(\"warning\", { title, message, buttons });\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Notification);\r\n\n\n//# sourceURL=webpack://encacap_august/./resources/js/notification.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/js/home.js");
/******/ 	
/******/ })()
;