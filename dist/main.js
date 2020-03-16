/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Contact; });\nfunction Contact() {\n  const content = document.getElementById('content');\n  const contactDiv = document.createElement('div');\n  contactDiv.setAttribute('class', 'contact');\n\n  const contactTitle = document.createElement('h1');\n  contactTitle.textContent = 'Contact';\n\n  const restaurantEmail = document.createElement('h4');\n  restaurantEmail.textContent = 'restaurant@gmail.com';\n  const restaurantTel = document.createElement('h4');\n  restaurantTel.textContent = '00237 677 32 14 10';\n  const restaurantAdress = document.createElement('h4');\n  restaurantAdress.textContent = 'Bastos, Yaounde, Cameroon';\n\n  contactDiv.append(contactTitle, restaurantEmail, restaurantTel, restaurantAdress);\n\n  content.append(contactDiv);\n}\n\n\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\nfunction Home() {\n  const content = document.getElementById('content');\n  const homeDiv = document.createElement('div');\n  homeDiv.setAttribute('class', 'home');\n\n  const title = () => {\n    const h1 = document.createElement('h1');\n    h1.setAttribute('class', 'title');\n    h1.textContent = 'Enjoy our Haus favourites for 5 euro at lunchtime.';\n    homeDiv.append(h1);\n  };\n\n  const image = () => {\n    const header = document.createElement('div');\n    header.setAttribute('class', 'header');\n    const url = 'assets/banner.jpg';\n    header.style.height = '600px';\n    header.style.backgroundImage = `url(\"${url}\")`;\n    homeDiv.append(header);\n  };\n\n  const text = () => {\n    const p = document.createElement('p');\n    p.setAttribute('class', 'text');\n    p.textContent = 'From 12 - 3pm join us for Express Lunch pr Business Lunch. THe perfect break to the day, especially when enjoyed with a pint of one of our Munich beers!';\n    homeDiv.append(p);\n  };\n\n  image();\n  title();\n  text();\n\n  content.append(homeDiv);\n}\n\n\n\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n\n\n\n\n\nwindow.onload = Object(_navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\nObject(_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nconst navigationHeader = document.getElementById('header');\nconst content = document.getElementById('content');\nconst updatePageContent = event => {\n  const innerText = event.target.textContent;\n  // eslint-disable-next-line default-case\n  switch (innerText) {\n    case 'Menu':\n      content.innerHTML = '';\n      Object(_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n      break;\n    case 'Contact':\n      content.innerHTML = '';\n      Object(_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n      break;\n    case 'Home':\n      content.innerHTML = '';\n      Object(_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n      break;\n  }\n};\n\nnavigationHeader.addEventListener('click', updatePageContent);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Menu; });\nconst menuLists = [\n  {\n    name: 'Taro',\n    description: 'Taro is a traditional food come from west Cameroon',\n    price: '$20',\n  },\n  {\n    name: 'Eru',\n    description: 'Taro is a traditional food come from west Cameroon',\n    price: '$20',\n  },\n  {\n    name: 'Okok',\n    description: 'Taro is a traditional food come from west Cameroon',\n    price: '$20',\n  },\n  {\n    name: 'Congré',\n    description: 'Taro is a traditional food come from west Cameroon',\n    price: '$20',\n  },\n  {\n    name: 'Met de pistache',\n    description: 'Taro is a traditional food come from west Cameroon',\n    price: '$20',\n  },\n];\n\nfunction Menu() {\n  const content = document.getElementById('content');\n  const menuDiv = document.createElement('div');\n  menuDiv.setAttribute('class', 'menu');\n  const ul = document.createElement('ul');\n  const title = document.createElement('h1');\n  title.textContent = 'Menu List';\n\n  menuLists.forEach(menu => {\n    const list = document.createElement('li');\n    const name = document.createElement('h4');\n    name.textContent = menu.name;\n\n    const desc = document.createElement('p');\n    desc.textContent = menu.description;\n\n    const price = document.createElement('span');\n    price.textContent = menu.price;\n    list.append(name, desc, price);\n    ul.append(list);\n  });\n\n  menuDiv.append(ul);\n  content.append(menuDiv);\n}\n\n\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NavBar; });\nfunction NavBar() {\n  const content = document.getElementById('content');\n\n  const navDiv = document.createElement('div');\n\n  navDiv.setAttribute('id', 'header');\n\n  const navs = document.createElement('ul');\n  navs.setAttribute('id', 'navs');\n\n  const navbar = (page) => {\n    const link = document.createElement('a');\n    link.setAttribute('class', 'nav-bar');\n    // eslint-disable-next-line no-script-url\n    link.setAttribute('href', 'javascript:void(0)');\n    link.textContent = page;\n    navDiv.append(link);\n  };\n\n  navbar('Home');\n  navbar('Menu');\n  navbar('Contact');\n\n  content.parentNode.insertBefore(navDiv, content);\n}\n\n\n\n\n//# sourceURL=webpack:///./src/navbar.js?");

/***/ })

/******/ });