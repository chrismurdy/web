webpackJsonp(["styles"],{

/***/ "../../../../../src/images/blue_background.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "blue_background.25df40475feba23775e7.png";

/***/ }),

/***/ "../../../../../src/images/donor_edit.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "donor_edit.62d2a6fea61b5930dd2d.png";

/***/ }),

/***/ "../../../../../src/images/login_password_icon.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "login_password_icon.156f38f473242c02fa6f.png";

/***/ }),

/***/ "../../../../../src/images/login_user_icon.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "login_user_icon.620b669058d50fd1e7ab.png";

/***/ }),

/***/ "../../../../../src/images/sunnybrook_foundation_white.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sunnybrook_foundation_white.07effa112287da0ae415.png";

/***/ }),

/***/ "../../../../../src/sass/style.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/sass/style.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js??ref--8-1!../../node_modules/postcss-loader/lib/index.js??postcss!../../node_modules/sass-loader/lib/loader.js??ref--8-3!./style.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js??ref--8-1!../../node_modules/postcss-loader/lib/index.js??postcss!../../node_modules/sass-loader/lib/loader.js??ref--8-3!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/sass/style.scss":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* variables */\n.login__login-button {\n  border: 1px solid #000000;\n  border-radius: 12px;\n  font-size: 12px;\n  font-family: arial, helvetica, sans-serif;\n  padding: 10px 35px 10px 35px;\n  text-decoration: none;\n  display: inline-block;\n  text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.3);\n  font-weight: bold;\n  color: #FFFFFF;\n  background-color: #7d7e7d;\n  background-image: linear-gradient(to bottom, #7d7e7d, #0e0e0e);\n  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#7d7e7d, endColorstr=#0e0e0e);\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  text-transform: uppercase;\n  margin-top: 20px;\n  cursor: pointer; }\n\n.login__login-button:hover {\n  border: 1px solid #4a4b4a;\n  background-color: #646464;\n  background-image: linear-gradient(to bottom, #646464, #282828);\n  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=#646464, endColorstr=#282828); }\n\n.login__container {\n  background: url(" + escape(__webpack_require__("../../../../../src/images/blue_background.png")) + ");\n  background-size: contain;\n  height: 100%; }\n\n.login__logo-container {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 2;\n      -ms-flex: 2;\n          flex: 2; }\n  .login__logo-container > .login__logo {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .login__logo-container > .login__logo > h3 {\n      -ms-flex-item-align: end;\n          align-self: flex-end;\n      text-transform: uppercase;\n      font-size: 18px;\n      color: #fff;\n      font-weight: 500;\n      margin-right: -10px;\n      margin-top: 10px; }\n\n.login__credentials-container {\n  -webkit-box-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.login__copyrights {\n  -webkit-box-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .login__copyrights > p {\n    color: #fff;\n    margin: 2px 0;\n    font-size: 13px; }\n  .login__copyrights > p:last-child {\n    margin-top: 0; }\n\n.login__form {\n  background: #fff;\n  padding: 0 10px;\n  border-radius: 10px;\n  width: 350px;\n  -ms-flex-line-pack: distribute;\n      align-content: space-around;\n  box-shadow: 8px 11px 60px -10px rgba(0, 0, 0, 0.5); }\n  .login__form > .login__input-row {\n    padding: 20px 10px; }\n    .login__form > .login__input-row > .login__icon {\n      background-size: 16px;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n      background-repeat: no-repeat;\n      background-position: 0 50%; }\n    .login__form > .login__input-row > input {\n      border: none;\n      -webkit-box-flex: 10;\n          -ms-flex: 10;\n              flex: 10; }\n    .login__form > .login__input-row > input::-webkit-input-placeholder {\n      color: #bcbec0;\n      font-size: 14px; }\n    .login__form > .login__input-row > input:-ms-input-placeholder {\n      color: #bcbec0;\n      font-size: 14px; }\n    .login__form > .login__input-row > input::placeholder {\n      color: #bcbec0;\n      font-size: 14px; }\n  .login__form > .login__input-row:first-of-type {\n    border-bottom: 3px solid #bcbec0; }\n\n.login__icon.password {\n  background: url(" + escape(__webpack_require__("../../../../../src/images/login_password_icon.png")) + "); }\n\n.login__icon.user {\n  background: url(" + escape(__webpack_require__("../../../../../src/images/login_user_icon.png")) + "); }\n\n.login__form-error {\n  height: 16px;\n  line-height: 16px;\n  font-size: 16px;\n  margin-bottom: 5px;\n  color: #FF5B0F; }\n\n.home__container {\n  background: url(" + escape(__webpack_require__("../../../../../src/images/blue_background.png")) + ");\n  background-size: contain;\n  height: 100%; }\n\n.home__logo-container {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 2;\n      -ms-flex: 2;\n          flex: 2; }\n  .home__logo-container > .home__logo {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .home__logo-container > .home__logo > h3 {\n      -ms-flex-item-align: end;\n          align-self: flex-end;\n      text-transform: uppercase;\n      font-size: 18px;\n      color: #fff;\n      font-weight: 500;\n      margin-right: -10px;\n      margin-top: 10px; }\n\n.home__buttons-container {\n  -webkit-box-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .home__buttons-container > .home__button-row {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    width: 450px; }\n    .home__buttons-container > .home__button-row > .home__button {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      margin: 10px;\n      background: #fff;\n      border: none;\n      border-radius: 10px;\n      text-transform: uppercase;\n      font-weight: 500;\n      font-size: 1.3em;\n      cursor: pointer;\n      box-shadow: 8px 11px 60px -10px rgba(0, 0, 0, 0.5); }\n\n.home__donors-color {\n  color: #0080c7; }\n\n.home__playlist-color {\n  color: #00b293; }\n\n.home__users-color {\n  color: #ff4343; }\n\n.home__media-color {\n  color: #e7ad47; }\n\n/* variables */\n/* variables */\n.header__container {\n  height: 90px;\n  background-color: #e8e9e9; }\n\n.header__logo-container {\n  -webkit-box-flex: 15;\n      -ms-flex-positive: 15;\n          flex-grow: 15;\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  min-width: 220px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background-color: #0081c8; }\n  .header__logo-container > .header__logo {\n    margin-top: 10px; }\n    .header__logo-container > .header__logo > img {\n      -ms-flex-item-align: center;\n          -ms-grid-row-align: center;\n          align-self: center;\n      width: 70%; }\n    .header__logo-container > .header__logo > h3 {\n      color: white;\n      margin-top: 4px;\n      margin-right: 10%;\n      font-size: 11px;\n      font-weight: 400;\n      text-transform: uppercase;\n      -ms-flex-item-align: end;\n          align-self: flex-end; }\n\n.header__button-row {\n  -webkit-box-flex: 85;\n      -ms-flex-positive: 85;\n          flex-grow: 85;\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  margin-bottom: 22.5px;\n  height: 30px; }\n\n.header__nav-buttons {\n  -webkit-box-flex: 70;\n      -ms-flex: 70;\n          flex: 70; }\n  .header__nav-buttons > .header__button {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    border-right: 1px solid #77787b;\n    text-transform: uppercase;\n    color: #77787a;\n    cursor: pointer; }\n    .header__nav-buttons > .header__button.active {\n      color: #3d3d3d; }\n  .header__nav-buttons > .header__button:last-of-type {\n    border-right: none; }\n\n.header__user-button {\n  position: relative;\n  -webkit-box-flex: 25;\n      -ms-flex: 25;\n          flex: 25;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n  .header__user-button > button {\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAABh0lEQVQ4ja3VMWsUQRjG8d+tjQExCDEiIrbiBzBgQCz8ANZa2sUP4C6u3cBMl0rBXq0thDQWIQQLP0BiaQgIxqCQImeTO4ubk2B2907vnmaZd573v+8w78z0hsOhLpVV3cNNLOMAn1MMnUnFBOBj7GEHm/n7Jcdb1WurtKzqF1jryH2ZYngyNbSs6od401VN1qMUw9u/g23Lr6YAtvrOVFpW9RK+TwmFyymGw9OBpkov/AOw0d8E/YHBlMBB9ndDUwxH2J4Sup393dCs5yZXO8i+M2qEphi2jHr0pAV4grXsmw6awa+wivfo53A/j1fzfKNaT9RplVVd4CKOUgwTN7GpT+/gPi7hEO+wk2IY5svlFh5gCT/xIcXwsRFaVvU1vMa9hp/38Q1XsNAwv2l0ZL/+gZZVvYxPuDFpaR3aw+0Uw8F4o9ZnBMr569B7Wj67in2cmxHKqNWuF1iZE1DmrBRYnBNwrMXO5+R/VeB4zszjAhvYnRNwFxvjPl3AXZyfAfgLWymG/m9weYZYB60qKgAAAABJRU5ErkJggg==\");\n    border: none;\n    border-radius: 50%;\n    background-color: #fff;\n    background-size: 18px;\n    background-repeat: no-repeat;\n    background-position: 50% 50%;\n    height: 40px;\n    width: 40px;\n    margin-top: -6px;\n    margin-right: 40px;\n    cursor: pointer;\n    outline: none; }\n  .header__user-button > .header__logout-dropdown {\n    position: absolute;\n    right: 20px;\n    top: 150%;\n    display: none;\n    cursor: pointer;\n    width: 80px;\n    height: 30px;\n    background-color: #FAFAFA;\n    line-height: 30px;\n    text-align: center;\n    border-radius: 5px; }\n    .header__user-button > .header__logout-dropdown.show {\n      display: block; }\n    .header__user-button > .header__logout-dropdown:after {\n      bottom: 100%;\n      left: 50%;\n      border: solid transparent;\n      content: \" \";\n      height: 0;\n      width: 0;\n      position: absolute;\n      pointer-events: none;\n      border-color: rgba(255, 255, 255, 0);\n      border-bottom-color: #FAFAFA;\n      border-width: 10px;\n      margin-left: -10px; }\n\n/* variables */\n.donors__CSV-upload {\n  -webkit-box-flex: 3;\n      -ms-flex: 3;\n          flex: 3;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 90%; }\n  .donors__CSV-upload > .donors__CSV-button {\n    background-color: #f1595f;\n    border-radius: 5px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 40px;\n    box-shadow: 0px 0px 58px -20px rgba(0, 0, 0, 0.46);\n    cursor: pointer; }\n    .donors__CSV-upload > .donors__CSV-button > p {\n      font-size: 13px;\n      color: white;\n      padding: 0 10px;\n      margin: 0; }\n    .donors__CSV-upload > .donors__CSV-button > .icon {\n      height: 15px;\n      width: 20px;\n      margin-left: 10px;\n      background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAAAzUlEQVQ4ja2TgQ0CIQxFvzfBbaAjOIIbeG7ACI7iCLjBOYGM4AjnBjhBDbEgYqHB+JKmJHDl0/5bEREERgCGc8ADsJzbhIJFGCLy9I3nPembFKXCHYCrouEAYMtrx/GmuMEJyjRMS6HU0AvnfUXxI+v1h8JJUGKzfdtQmurExUkpphU1ecGjcGBuTHKuFL0R0Rh6uABYF325s+8WzmBfbjiX5yNnKBN0vQ4YFM91M/Dz/kdlKDnBAZILJGzLNr2kKcfXhv9z+vHpLzcAeAJWN2mucQDjvAAAAABJRU5ErkJggg==\"); }\n\n.donors__list {\n  -webkit-box-flex: 17;\n      -ms-flex: 17;\n          flex: 17;\n  overflow: auto;\n  width: 90%; }\n  .donors__list > .donors__list-item {\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    border-top-left-radius: 7px;\n    border-top-right-radius: 7px;\n    border: 1px solid #ccc;\n    margin-bottom: 30px; }\n\n.donors__list-item-header {\n  height: 50px;\n  background-color: #0081c8;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0 15px; }\n  .donors__list-item-header > .donors__list-item-title {\n    -webkit-box-flex: 9;\n        -ms-flex: 9;\n            flex: 9;\n    color: #fff;\n    margin: 0; }\n  .donors__list-item-header > button {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    background: url(" + escape(__webpack_require__("../../../../../src/images/donor_edit.png")) + ");\n    height: 31px;\n    max-width: 31px;\n    outline: none;\n    border: none;\n    cursor: pointer; }\n\n.donors__list-item-info {\n  padding: 15px; }\n  .donors__list-item-info > p {\n    color: #77787a;\n    margin: 0 10px; }\n\n.donors__edit__list-title {\n  margin-top: 20px;\n  height: 50px;\n  background-color: #0081c8;\n  border-radius: 7px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0 15px;\n  width: 90%; }\n  .donors__edit__list-title > .donors__edit__title-box {\n    -webkit-box-flex: 9;\n        -ms-flex: 9;\n            flex: 9;\n    color: #fff;\n    margin: 0; }\n    .donors__edit__list-title > .donors__edit__title-box > input {\n      width: 40%; }\n  .donors__edit__list-title > button {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    background: url(" + escape(__webpack_require__("../../../../../src/images/donor_edit.png")) + ");\n    height: 31px;\n    max-width: 31px;\n    outline: none;\n    border: none;\n    cursor: pointer; }\n    .donors__edit__list-title > button.delete {\n      background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAfCAYAAACGVs+MAAAACXBIWXMAAAsSAAALEgHS3X78AAABbklEQVRIDe2X0U3DMBCG/6C+NxvABngDygTQDTICG1A2KBuUDboBYQO6QbtBOsGhq86RZcU+Ow7NSz+pTU6xfZfzb+dcEREEA2AD4AV5HAB0GT2OAHYA2ovFARCRIaKOrkvDvm0G9iPevJQzgNoGQP/qKszzYmTHj34OgZVcawANgGXOQFoAJxGNSytitbTe/ZvXngN7DHoQEQ5xJKJanpf+dgEfq7vI2+8zl1cMP4s9mgh/JgrABLShivApoAO/zWhSVoEpnIrfmAhjGrCU6iDaPyUAl0YyYuH714itkrsRNXK1m89WNFCJzc7fHVslNwOTkxvAkOIPzr0ZeB5ligy4IqvnCKCIWwC3AGYPYKGs3ZNnr70vI1c/D57tjxcbv+N6gLfV70CD85i17REreCttCpZyiBjLRuunZSCF0MmIp+Ze8z/3uaCfgs8ZnH9d/p1ye3vFk2FrS373dMzwvLnLKgVbnKTCNSKX/ACAP+nkqvaK6bHGAAAAAElFTkSuQmCC\");\n      margin-left: 15px; }\n    .donors__edit__list-title > button.save {\n      background: url(\"data:image/svg+xml,%3Csvg aria-hidden%3D%22true%22 data-prefix%3D%22fas%22 data-icon%3D%22save%22 class%3D%22svg-inline--fa fa-save fa-w-14%22 role%3D%22img%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 448 512%22%3E%3Cpath fill%3D%22white%22 d%3D%22M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E\");\n      background-size: 31px 31px;\n      background-repeat: no-repeat; }\n\n.donors__edit__add-donor {\n  height: 35px;\n  margin-top: 20px;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  margin-right: 5%;\n  width: 60%; }\n  .donors__edit__add-donor > .donors__edit__add-name {\n    -webkit-box-flex: 4;\n        -ms-flex: 4;\n            flex: 4;\n    margin-right: 10px;\n    padding-left: 10px; }\n  .donors__edit__add-donor > .donors__edit__add-letter {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    margin: 0 10px;\n    width: 60px;\n    text-align: center; }\n    .donors__edit__add-donor > .donors__edit__add-letter::-webkit-input-placeholder {\n      text-align: center; }\n    .donors__edit__add-donor > .donors__edit__add-letter:-ms-input-placeholder {\n      text-align: center; }\n    .donors__edit__add-donor > .donors__edit__add-letter::placeholder {\n      text-align: center; }\n  .donors__edit__add-donor > button {\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAACXBIWXMAAAsSAAALEgHS3X78AAAAeUlEQVQYlZVRWw2AMAw8CP8gBQcgYZKQgBQkDAdIwcGRbh1pCh/bJZe22eX6WEcSBquyICozRExyInnwH1HfX7EXiuB2dRLP/Aqh0SIMAIKZ8QRwaV7iDGBMu5DcnKNn6RB747ro5rvWEqUW59ypZebma1Tfuf4HATyguSk4f9Kk6AAAAABJRU5ErkJggg==\");\n    width: 180px;\n    background-size: 12px;\n    background-position: 30px 50%;\n    background-repeat: no-repeat;\n    margin-left: 10px;\n    border: none;\n    background-color: #9dc44d;\n    color: #fff;\n    font-size: 13px;\n    cursor: pointer;\n    border-radius: 5px; }\n  .donors__edit__add-donor.only-button {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    margin-bottom: 20px; }\n    .donors__edit__add-donor.only-button > button {\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none; }\n\n.donors__edit__table-header {\n  width: 90%;\n  margin-top: 20px;\n  height: 35px;\n  background-color: #0081c8;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px; }\n  .donors__edit__table-header > .donors__edit__table-item {\n    color: white; }\n\n.donors__edit__table-item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 14px; }\n  .donors__edit__table-item.center {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .donors__edit__table-item i.fa {\n    font-size: 17px; }\n\n.donors__edit__table-body {\n  width: 90%;\n  overflow: auto; }\n  .donors__edit__table-body > .donors__edit__table-row {\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    height: 40px; }\n    .donors__edit__table-body > .donors__edit__table-row .donors__edit__table-item {\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n      color: #77787b; }\n    .donors__edit__table-body > .donors__edit__table-row i.fa {\n      cursor: pointer; }\n\n.donors__CSV-button.download-button {\n  margin-right: 20px; }\n  .donors__CSV-button.download-button > .icon {\n    background-size: contain;\n    background-repeat: no-repeat;\n    background: url(\"data:image/png;base64,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\"); }\n\n/* variables */\n.playlist__list-item-header {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n\n.playlist__item-header-label {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  margin: 0 10px;\n  font-size: 14px;\n  color: #fff; }\n\n.playlist__item-body {\n  padding: 20px; }\n  .playlist__item-body p {\n    color: #77787b; }\n\n.playlist__body-layout-type > p {\n  -ms-flex-item-align: start;\n      align-self: flex-start; }\n\n.playlist__body-layout-type > .playlist__image-box {\n  border: 1px solid #e8e9e9;\n  padding: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.playlist__body-description {\n  margin-left: 15px; }\n  .playlist__body-description .playlist__text {\n    width: 120px; }\n\n.playlist__checkbox input {\n  display: none;\n  position: relative;\n  z-index: -9999; }\n\n.playlist__checkbox span {\n  width: 25px;\n  height: 29px;\n  display: block;\n  background: url(\"data:image/svg+xml,%3Csvg aria-hidden%3D%22true%22 data-prefix%3D%22far%22 data-icon%3D%22check-square%22 class%3D%22svg-inline--fa fa-check-square fa-w-14%22 role%3D%22img%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 448 512%22%3E%3Cpath style%3D%22fill%3A %2377787bl%22 d%3D%22M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E\");\n  cursor: pointer; }\n\n.playlist__checkbox input:checked + span {\n  background: url(\"data:image/svg+xml,%3Csvg aria-hidden%3D%22true%22 data-prefix%3D%22fas%22 data-icon%3D%22check-square%22 class%3D%22svg-inline--fa fa-check-square fa-w-14%22 role%3D%22img%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 448 512%22%3E%3Cpath style%3D%22fill%3A %2377787bl%3B%22 d%3D%22M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E\"); }\n\n.playlist__checkbox input:disabled + span {\n  cursor: default; }\n\n.playlist__body-buttons {\n  -webkit-box-flex: 1.05;\n      -ms-flex: 1.05;\n          flex: 1.05; }\n  .playlist__body-buttons > .playlist__action-buttons {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start; }\n    .playlist__body-buttons > .playlist__action-buttons:last-of-type {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n    .playlist__body-buttons > .playlist__action-buttons > img {\n      cursor: pointer;\n      height: 30px;\n      margin-bottom: 15px; }\n\n.users__registration-container {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .users__registration-container > input {\n    width: 60%; }\n  .users__registration-container > input[type=\"checkbox\"] {\n    width: auto; }\n  .users__registration-container > .playlist_add_entry {\n    width: 35%; }\n\n.media-grid-item {\n  padding: 5px;\n  border: 1px solid #ccc;\n  max-width: 100%; }\n\n.media-grid-item-container {\n  position: relative; }\n  .media-grid-item-container:hover .media-grid-item-delete {\n    visibility: visible; }\n  .media-grid-item-container .media-grid-item-delete {\n    position: absolute;\n    visibility: hidden;\n    top: 20px;\n    right: 20px;\n    z-index: 10; }\n    .media-grid-item-container .media-grid-item-delete > button {\n      padding: 0; }\n\n.media-item-description {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 10px;\n  height: 100%; }\n  .media-item-description > p {\n    color: #202020; }\n    .media-item-description > p > span {\n      color: #77787b; }\n\n.media-grid {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.media-grid-column {\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch; }\n\n.media__upload-error {\n  color: #cc0000; }\n\n.loader {\n  height: 4px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background-color: #ddd; }\n\n.loader:before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  left: -200px;\n  width: 200px;\n  height: 4px;\n  background-color: #2980b9;\n  -webkit-animation: loading 2s linear infinite;\n          animation: loading 2s linear infinite; }\n\n.media__loader-container {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin-right: 20px; }\n\n@-webkit-keyframes loading {\n  from {\n    left: -200px;\n    width: 30%; }\n  50% {\n    width: 30%; }\n  70% {\n    width: 70%; }\n  80% {\n    left: 50%; }\n  95% {\n    left: 120%; }\n  to {\n    left: 100%; } }\n\n@keyframes loading {\n  from {\n    left: -200px;\n    width: 30%; }\n  50% {\n    width: 30%; }\n  70% {\n    width: 70%; }\n  80% {\n    left: 50%; }\n  95% {\n    left: 120%; }\n  to {\n    left: 100%; } }\n\n.media__view-type-selector > button {\n  border: 1px solid #0081c8;\n  background-color: #0081c8;\n  color: white;\n  width: 120px;\n  height: 40px;\n  line-height: 38px;\n  cursor: pointer; }\n\n.media__view-type-selector > button.active {\n  background-color: #fff;\n  color: #0081c8; }\n\n.media__view-type-selector > button:first-of-type {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n\n.media__view-type-selector > button:last-of-type {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.help-tip {\n  position: relative;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  margin-left: 10px;\n  text-align: center;\n  background-color: #BCDBEA;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  font-size: 14px;\n  line-height: 26px;\n  cursor: default;\n  z-index: 10000; }\n\n.help-tip:before {\n  content: '?';\n  font-weight: bold;\n  color: #fff; }\n\n.help-tip:hover p {\n  display: block;\n  -webkit-transform-origin: 100% 0%;\n          transform-origin: 100% 0%;\n  -webkit-animation: fadeIn 0.3s ease-in-out;\n  animation: fadeIn 0.3s ease-in-out; }\n\n.help-tip p {\n  /* The tooltip */\n  display: none;\n  text-align: left;\n  background-color: #1E2021;\n  padding: 15px;\n  width: 300px;\n  position: absolute;\n  border-radius: 3px;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);\n  right: -4px;\n  color: #FFF;\n  font-size: 13px;\n  line-height: 1.4; }\n\n.help-tip p:before {\n  /* The pointer of the tooltip */\n  position: absolute;\n  content: '';\n  width: 0;\n  height: 0;\n  border: 6px solid transparent;\n  border-bottom-color: #1E2021;\n  right: 10px;\n  top: -12px; }\n\n.help-tip p:after {\n  /* Prevents the tooltip from being hidden */\n  width: 100%;\n  height: 40px;\n  content: '';\n  position: absolute;\n  top: -40px;\n  left: 0; }\n\n/* CSS animation */\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.6);\n            transform: scale(0.6); }\n  100% {\n    opacity: 100%;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 100%; } }\n\nbutton.grid-delete-btn {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  outline: 0;\n  overflow: hidden; }\n  button.grid-delete-btn .icon {\n    position: relative;\n    background: #1D242B;\n    line-height: 30px;\n    width: 30px;\n    height: 30px;\n    text-align: center;\n    color: #fff;\n    font-size: 18px;\n    transition: .2s color;\n    border-radius: 2px; }\n    button.grid-delete-btn .icon .fa {\n      width: 30px;\n      transition: .2s all; }\n    button.grid-delete-btn .icon .fa-check {\n      color: #38B87C; }\n    button.grid-delete-btn .icon .fa-question {\n      color: #2492FF; }\n    button.grid-delete-btn .icon:after {\n      content: ' ';\n      display: block;\n      position: absolute;\n      width: 5px;\n      height: 5px;\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg);\n      background: #1D242B;\n      top: 12.5px;\n      right: 1px;\n      transition: .2s right;\n      z-index: 1; }\n  button.grid-delete-btn > .text {\n    position: relative;\n    width: 0;\n    height: 30px;\n    overflow: hidden;\n    font-family: \"Roboto\", sans-serif;\n    background: #F34541;\n    text-align: center;\n    line-height: 30px;\n    color: #fff;\n    font-weight: 300;\n    transition: .2s all;\n    border-top-right-radius: 2px;\n    border-bottom-right-radius: 2px; }\n    button.grid-delete-btn > .text > span {\n      width: 100%;\n      opacity: 0;\n      position: absolute;\n      top: -30px;\n      left: 50%;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%);\n      transition: .3s all; }\n  button.grid-delete-btn:hover .icon {\n    color: #F34541;\n    border-radius: 0;\n    border-top-left-radius: 2px;\n    border-bottom-left-radius: 2px; }\n    button.grid-delete-btn:hover .icon:after {\n      right: -2px; }\n  button.grid-delete-btn:hover .text {\n    width: 120px; }\n    button.grid-delete-btn:hover .text span {\n      opacity: 1;\n      top: 0; }\n  button.grid-delete-btn.confirm .icon {\n    border-radius: 0;\n    border-top-left-radius: 2px;\n    border-bottom-left-radius: 2px; }\n    button.grid-delete-btn.confirm .icon .fa {\n      -webkit-transform: translateY(-30px);\n              transform: translateY(-30px); }\n    button.grid-delete-btn.confirm .icon:after {\n      right: -2px; }\n  button.grid-delete-btn.confirm .text {\n    background: #2492FF;\n    width: 120px; }\n    button.grid-delete-btn.confirm .text span {\n      opacity: 1;\n      top: 0; }\n  button.grid-delete-btn.done .icon {\n    border-radius: 0;\n    border-top-left-radius: 2px;\n    border-bottom-left-radius: 2px; }\n    button.grid-delete-btn.done .icon .fa {\n      -webkit-transform: translateY(-60px);\n              transform: translateY(-60px); }\n    button.grid-delete-btn.done .icon:after {\n      right: -2px; }\n  button.grid-delete-btn.done .text {\n    background: #38B87C;\n    width: 120px; }\n    button.grid-delete-btn.done .text span {\n      opacity: 1;\n      top: 0; }\n\n@-webkit-keyframes fadeInZoom {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes fadeInZoom {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7); }\n  100% {\n    opacity: 1;\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n/* variables */\n.takeover__container {\n  padding: 20px;\n  width: 100%;\n  -ms-flex-preferred-size: 66%;\n      flex-basis: 66%; }\n  .takeover__container p {\n    margin-bottom: 0; }\n\n.takeover__label {\n  color: #707070;\n  font-size: 18px; }\n\n.takeover__image {\n  width: 75%; }\n\n.takeover__text {\n  width: 67%;\n  color: #707070; }\n\n.takeover__button-container {\n  padding-bottom: 20px;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -ms-flex-preferred-size: 33%;\n      flex-basis: 33%; }\n  .takeover__button-container > .takeover__button-text-container {\n    width: 60%;\n    color: #707070; }\n    .takeover__button-container > .takeover__button-text-container > p {\n      margin-bottom: 0.8rem;\n      line-height: 1.2; }\n\n.takeover__overflow {\n  width: 100%;\n  overflow: auto; }\n\n.takeover__submit {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 10px;\n  background-color: rgba(255, 255, 255, 0.3); }\n\n.takeover__screenshot {\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  margin-bottom: 0.8rem; }\n\n.glyphicon {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transform: translate(0, 0);\n          transform: translate(0, 0); }\n\n.glyphicon.pull-left {\n  margin-right: 0.3em; }\n\n.glyphicon.pull-right {\n  margin-left: 0.3em; }\n\n.glyphicon.glyphicon-chevron-left:before {\n  content: \"\\F053\"; }\n\n.glyphicon.glyphicon-chevron-right:before {\n  content: \"\\F054\"; }\n\n.glyphicon.glyphicon-chevron-up:before {\n  content: \"\\F077\"; }\n\n.glyphicon.glyphicon-chevron-down:before {\n  content: \"\\F078\"; }\n\n::-webkit-scrollbar {\n  width: 10px; }\n\n::-webkit-scrollbar-track {\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.1); }\n\n::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  background: rgba(0, 0, 0, 0.1); }\n\nbody {\n  font-family: 'Open Sans', sans-serif; }\n\n.left {\n  float: left; }\n\n.right {\n  float: right; }\n\n.clear {\n  clear: both; }\n\n.app-container {\n  height: auto;\n  min-height: 100%;\n  width: 100%; }\n\n.startpage_loader {\n  font-size: 26px;\n  text-align: center;\n  margin-top: 30px; }\n\n.headerBar {\n  height: 30px;\n  background-color: #EFEFEF;\n  padding: 5px 20px; }\n\n.headerr_link {\n  cursor: pointer; }\n\n.donors_cotainer {\n  padding: 5px 20px; }\n\n.donor_button {\n  width: 70%;\n  height: 40px;\n  font-size: 14px;\n  background-color: #2DA1F2;\n  border-radius: 5px;\n  margin: 5px auto;\n  text-align: center;\n  color: #FFFFFF;\n  padding-top: 8px;\n  cursor: pointer; }\n  .donor_button:hover {\n    background-color: #4267b2; }\n\n.donor_info {\n  font-size: 10px;\n  text-align: left;\n  padding-left: 25%; }\n\n.donor_table_head {\n  font-size: 12px;\n  font-weight: 600; }\n\n.donor_table_body {\n  font-size: 12px;\n  font-weight: 400; }\n\n.listTitle {\n  font-size: 16px;\n  font-weight: 600; }\n\n.btn {\n  border-radius: 4px;\n  color: #FFFFFF;\n  text-align: center;\n  margin: 2px;\n  padding: 2px 8px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 600; }\n\n.viewBtn {\n  background-color: #6ECA63; }\n  .viewBtn:hover {\n    background-color: #C8DB60; }\n\n.editBtn {\n  background-color: #F59B69; }\n  .editBtn:hover {\n    background-color: #F6AC7A; }\n\n.deleteBtn {\n  background-color: #EA5C55; }\n  .deleteBtn:hover {\n    background-color: #FB6D66; }\n\n.saveBtn {\n  background-color: #6ECA63; }\n  .saveBtn:hover {\n    background-color: #C8DB60; }\n\n.cancelBtn {\n  background-color: #EA5C55; }\n  .cancelBtn:hover {\n    background-color: #FB6D66; }\n\n.login_title {\n  text-align: center; }\n\n.login_correct {\n  text-align: center;\n  color: #6ECA63; }\n\n.login_incorrect {\n  text-align: center;\n  color: #EA5C55; }\n\n.registration_page {\n  font-size: 12px; }\n\n.registration_error {\n  text-align: center;\n  color: #EA5C55; }\n\n.textInput {\n  width: 100%;\n  margin: 5px 0px;\n  padding: 2px; }\n\n.active_platlist_header {\n  font-size: 12px;\n  font-weight: 600; }\n\n.inactive_platlist_row {\n  font-size: 12px;\n  margin-bottom: 5px; }\n\n.active_platlist_row {\n  font-size: 12px;\n  margin-bottom: 5px;\n  cursor: pointer; }\n  .active_platlist_row:hover {\n    background-color: #DDDDDD; }\n\n.active_platlist_content {\n  padding-top: 4px; }\n\n.active_platlist_row_dark {\n  background-color: #EEEEEE; }\n\n.active_platlist_row_light {\n  background-color: #EFEFEF; }\n\n.layout_element {\n  border-radius: 3px;\n  background-color: #162126;\n  color: #FFFFFF;\n  font-size: 11px;\n  text-align: center;\n  margin: 2px 0px;\n  padding: 5px;\n  cursor: pointer; }\n  .layout_element:hover {\n    background-color: #666666; }\n\n.add_layout_btn {\n  border-radius: 3px;\n  background-color: #6ECA63;\n  color: #FFFFFF;\n  font-size: 11px;\n  text-align: center;\n  margin: 2px auto;\n  padding: 5px;\n  width: 60%;\n  cursor: pointer; }\n  .add_layout_btn:hover {\n    background-color: #C8DB60; }\n\n.back_button {\n  font-size: 12px;\n  cursor: pointer;\n  color: #333333; }\n  .back_button:hover {\n    color: #999999; }\n\n.playlist_add_entry {\n  background-color: #6ECA63;\n  color: #FFFFFF;\n  font-size: 16px;\n  border-radius: 5px;\n  text-align: center;\n  font-weight: 600;\n  height: 30px;\n  cursor: pointer;\n  padding-top: 3px;\n  margin: 5px 0; }\n  .playlist_add_entry:hover {\n    background-color: #C8DB60; }\n\n.playlist_save_entry {\n  background-color: #999999;\n  color: #FFFFFF;\n  font-size: 16px;\n  border-radius: 5px;\n  text-align: center;\n  font-weight: 600;\n  height: 30px;\n  cursor: pointer;\n  padding-top: 3px;\n  margin: 15px 0px 5px 0px; }\n  .playlist_save_entry:hover {\n    background-color: #AEAEAE; }\n\n.sequence_layout_panel {\n  font-size: 12px; }\n  .sequence_layout_panel input {\n    margin: 5px 0px;\n    width: 100%; }\n  .sequence_layout_panel select {\n    margin: 5px 0px;\n    width: 100%; }\n  .sequence_layout_panel textarea {\n    margin: 5px 0px;\n    width: 100%; }\n\n.file_selector label {\n  display: none; }\n\n.donor_file_uploader {\n  font-size: 12px;\n  text-align: center;\n  margin-bottom: 30px; }\n  .donor_file_uploader input {\n    margin-left: 10px; }\n\n.itemFadeOut {\n  -webkit-transition: opacity .5s ease-out;\n  -moz-transition: opacity .5s ease-out;\n  -ms-transition: opacity .5s ease-out;\n  -o-transition: opacity .5s ease-out;\n  opacity: 0; }\n\n.create_playlist_sequence input {\n  width: 100%;\n  margin: 2px 0px; }\n\n.create_playlist_sequence select {\n  width: 100%;\n  margin: 2px 0px; }\n\n/* utility classes */\n.flex_container_row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.flex_container_column {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.align-items-center {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.no-shrink {\n  -ms-flex-negative: 0;\n      flex-shrink: 0; }\n\n.flex-1 {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.flex-2 {\n  -webkit-box-flex: 2;\n      -ms-flex: 2;\n          flex: 2; }\n\n.flex-3 {\n  -webkit-box-flex: 3;\n      -ms-flex: 3;\n          flex: 3; }\n\n.flex-4 {\n  -webkit-box-flex: 4;\n      -ms-flex: 4;\n          flex: 4; }\n\n.flex-5 {\n  -webkit-box-flex: 5;\n      -ms-flex: 5;\n          flex: 5; }\n\n.scrollbar-measure {\n  width: 100px;\n  height: 100px;\n  overflow: scroll;\n  position: absolute;\n  top: -9999px; }\n\nimg.img-button {\n  cursor: pointer; }\n\n.relative {\n  position: relative; }\n\n/* new styles */\nhtml {\n  height: 100%; }\n\nbody {\n  height: 100%;\n  font-family: 'Roboto', sans-serif; }\n\n.left-bar {\n  background-color: #3d3d3d; }\n\n.main-view {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n  .main-view > *:not(router-outlet) {\n    -webkit-box-flex: 85;\n        -ms-flex-positive: 85;\n            flex-grow: 85;\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0; }\n  .main-view > .left-bar {\n    -webkit-box-flex: 15;\n        -ms-flex-positive: 15;\n            flex-grow: 15;\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    min-width: 220px; }\n\n.core__copyrights {\n  background-color: #2e2e2e;\n  min-height: 50px;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .core__copyrights > p {\n    color: #fff;\n    margin: 2px 0;\n    font-size: 13px; }\n  .core__copyrights > p:last-child {\n    margin-top: 0; }\n\n.sunnybrook-logo {\n  background: url(" + escape(__webpack_require__("../../../../../src/images/sunnybrook_foundation_white.png")) + ");\n  background-repeat: no-repeat;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  min-height: 85px;\n  background-size: contain;\n  background-position-x: 50%; }\n\n.left-bar-description-container {\n  -ms-flex-preferred-size: calc(100vh - 90px - 85px - 50px);\n      flex-basis: calc(100vh - 90px - 85px - 50px);\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  overflow-y: auto;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0; }\n\n.part-screen__container {\n  height: calc(100vh - 90px);\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.left-bar-description {\n  color: white;\n  width: 90%;\n  font-size: 14px; }\n\n.part-screen__refresh-button {\n  background-color: #f1595f;\n  border-radius: 5px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 40px;\n  box-shadow: 0px 0px 58px -20px rgba(0, 0, 0, 0.46);\n  cursor: pointer; }\n  .part-screen__refresh-button > p {\n    font-size: 13px;\n    color: white;\n    padding: 0 10px;\n    margin: 0; }\n  .part-screen__refresh-button > .icon {\n    height: 15px;\n    width: 20px;\n    margin-left: 10px;\n    background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAAAzUlEQVQ4ja2TgQ0CIQxFvzfBbaAjOIIbeG7ACI7iCLjBOYGM4AjnBjhBDbEgYqHB+JKmJHDl0/5bEREERgCGc8ADsJzbhIJFGCLy9I3nPembFKXCHYCrouEAYMtrx/GmuMEJyjRMS6HU0AvnfUXxI+v1h8JJUGKzfdtQmurExUkpphU1ecGjcGBuTHKuFL0R0Rh6uABYF325s+8WzmBfbjiX5yNnKBN0vQ4YFM91M/Dz/kdlKDnBAZILJGzLNr2kKcfXhv9z+vHpLzcAeAJWN2mucQDjvAAAAABJRU5ErkJggg==\"); }\n\n.part-screen__with-refresh {\n  width: 90%; }\n  .part-screen__with-refresh > .part-screen__refresh-button-container {\n    height: 35px;\n    margin-top: 20px;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n  .part-screen__with-refresh > .part-screen__refresh-button {\n    max-width: 150px; }\n  .part-screen__with-refresh > .donors__edit__add-donor {\n    margin-right: 0; }\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../css-loader/lib/url/escape.js":
/***/ (function(module, exports) {

module.exports = function escape(url) {
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/sass/style.scss");


/***/ })

},[1]);
//# sourceMappingURL=styles.bundle.js.map