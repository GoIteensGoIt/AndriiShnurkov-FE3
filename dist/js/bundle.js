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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

const modalForm = `
<a class="modal-btn">
    <img src="../favicon/close-24px (1).svg" alt="close" width="24" height="24">
</a>
<div class="modal_form-wrapper">
    <div class="modal_form">
        <h2 class="modal_form-title">Оставить заявку</h2>
        <input type="text" placeholder="Ваше имя">
        <input type="text" placeholder="Телефон">
        <button>Отправить</button>
    </div>
</div>
`;

const modalDiscount = `
<a class="modal-btn"> 
    <img src="../favicon/close-24px (1).svg" alt="close" width="24" height="24"> 
</a>
<div class="modal_discount-wrapper">
      <div class="modal_discount">
        <p class="modal_discount-title">Акции</p>
        <h2 class="modal_discount-subTitle">Мальчишник</h2>
        <p class="modal_discount-text">Караоке - скидка <span>50% </span></p>
        <p class="modal_discount-text">Скидка на заказ <span>10%</span></p>
        <h2 class="modal_discount-subTitle">Девичник</h2>
        <p class="modal_discount-text">Караоке - скидка <span>50% </span></p>
        <p class="modal_discount-text">Бутылка <span>шампанского</span> в подарок!</p>
        <h2 class="modal_discount-subTitle">День рождения</h2>
        <p class="modal_discount-text">Отпразднуй день рождения День в День</p>
        <p class="modal_discount-text">и получи <span>караоке Бесплатно </span>+</p>
        <p class="modal_discount-text">скидка <span>10%</span> на заказ!</p>
      </div>
    </div>
`;

function openModalBackDrop(modalFormStr) {
    const instance = basicLightbox.create(modalFormStr, {
        onShow: (instance) => {
            instance.element().querySelector('a').onclick = instance.close
        }
    })
    instance.show()
}

document.querySelector('button[data-action = "contactus"]').addEventListener('click', (e) => {
    openModalBackDrop(modalForm)
})

document.querySelector('button[data-action = "slider_button"]').addEventListener('click', (e) => {
    openModalBackDrop(modalForm)
})

document.querySelector('button[data-action = "reservation__imgBar-button"]').addEventListener('click', (e) => {
    openModalBackDrop(modalForm)
})

document.querySelector('button[data-action = "discount__imgBar-button"]').addEventListener('click', (e) => {
    openModalBackDrop(modalDiscount)
})
document.querySelector('.header__lines').addEventListener('click', (e) => {
    document.querySelector('.burger_open').classList.add('enter')
})
document.querySelector('.burger_open-btn').addEventListener('click', () => {
    document.querySelector('.burger_open').classList.remove('enter')
})





/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/js/index.js ./src/scss/style.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");
module.exports = __webpack_require__(/*! ./src/scss/style.scss */"./src/scss/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map