/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/cinema-town-animated-2.jpg */ "./src/images/cinema-town-animated-2.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/plus-icon.svg */ "./src/images/plus-icon.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --font-family: Verdana, 'Roboto', 'Segoe UI', 'Arial', sans-serif;
    --color-dark: #1f1f1f;
    --color-light: #efefef;
    --color-bg-dark: rgba(3, 3, 3, 0.9);
    --color-bg-light: rgba(225, 225, 225, 0.9);

    --color-lilac: #a57cff;
    --color-lilac-light: #c7aefe;
    --color-lavender: #9648e4;
    --color-lavender-light: #a55bee;
    --color-lavender-dark: #7226be;
    --color-theme: #c09ef4;

    --color-bg-theme: rgba(12, 0, 18, 0.98);
    --color-light: rgb(230, 230, 250);

    /* Testing Colors */
    --color-wheat: rgb(245, 222, 179);
    --color-bg-dark: rgba(3, 3, 3, 0.97);
}

body {
    margin: 0;
    font-family: var(--font-family);
}

.container {
    display: flex;
    flex-direction: column;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
    overflow: auto;
    gap: 4em;
}

#header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: .25em;
    gap: 1.5em;
    border-bottom: 1px solid var(--color-lavender);
    /* box-shadow: 0 24px 12px -26px var(--color-lavender-dark); */
    box-shadow: 0px calc(1vh * 2) calc(2vh) calc(1vh * -2) var(--color-lavender-dark);
}

#header .title-wrapper {
    font-size: 4em;
    padding: 0.25em;
    text-wrap: nowrap;
    letter-spacing: 2px;
    /* word-spacing: -0.125em; */
}

#header .title-wrapper h1 {
    margin: 0;
    font-size: 1em;
}

#content {
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
}

#content>* {
    box-shadow: var(--color-lavender-dark) 0px 3px 10px 2px;
}

#footer {
    padding: 0.75em;
    letter-spacing: 1px;
    gap: 0.125em;
    border-top: 1px solid var(--color-lavender);
    /* box-shadow: 0 -2px 2px 1px var(--color-lavender-dark); */
    box-shadow: 0px calc(1vh * -2) calc(2vh) calc(1vh * -2) var(--color-lavender-dark);
}

#header,
#footer {
    background: var(--color-bg-theme);
    color: var(--color-theme);
    line-height: 1.4;
}

#footer,
#footer a {
    display: flex;
    align-items: center;
    justify-content: center;
}

#footer a {
    text-decoration: none;
    color: inherit;
    font-weight: 600;
    letter-spacing: 0.5px;
    padding: 0.375em;
    gap: 0.25em;
    border-radius: 0.25em;
    transition: filter 150ms ease, background-color 150ms ease, color 150ms ease;
}

#footer a:hover {
    background-color: #dfdfdf;
    color: rgba(5, 5, 5);
}

#footer img {
    width: 1.125em;
    transition: filter 150ms ease;
}

#footer a:hover img {
    filter: invert(1);
}

#footer a>div {
    font-weight: 600;
}

.navigate {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(3, 1fr);
    min-width: 526px;
    width: calc(380px + 12vw);
    padding: 0.25em 0 0.125em;
    border-top: 1px solid var(--color-lavender);
    /* color: var(--color-lilac); */
}

.navigate .grid-cell {
    display: flex;
    align-items: center;
    justify-content: center;
}

.navigate>div.grid-cell:first-of-type {
    justify-content: start;
}

.navigate>div.grid-cell:last-of-type {
    justify-content: end;
}

.navigate a.nav-item {
    padding: 1.25em;
    letter-spacing: 1.75px;
    cursor: pointer;
    position: relative;
    text-wrap: nowrap;
    min-width: 4em;
    text-align: center;
    border: none;
    transition: color 100ms ease, box-shadow 250ms ease-out, transform 200ms ease;
}

.navigate a.nav-item:hover {
    color: var(--color-light);
    transform: translateY(-4px);
    transition: color 75ms ease, box-shadow 400ms ease-out, transform 200ms ease;
    /* box-shadow: 0px -4em 2em -4em var(--color-lavender) inset; */
    /* box-shadow: 0px -3em 1.75em -2em var(--color-lavender-light) inset; */
    /* box-shadow: 0px -2.5em 1.5em -2em var(--color-lavender-light) inset; */
    box-shadow: 0px -1.25em 0.75em -0.875em var(--color-lavender-light) inset;
}

.navigate a::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 0;
    height: clamp(1px, 1px, 1px);
    background-color: var(--color-lavender-dark);
    border: none;
    /* transition: width 400ms ease; */
    transition: all 300ms ease-out, background-color 400ms ease-out;
}

.navigate a:hover::after,
.navigate a.active::after {
    width: 100%;
    background-color: var(--color-lavender);
}

.navigate a.active {
    color: #fff;
    font-weight: 600;
    letter-spacing: 1.25px;
    transform: translateY(-4px);
    pointer-events: none;
    box-shadow: 0px -1.25em 0.75em -0.875em var(--color-lavender-light) inset, 0px 1.25em 0.75em -1.125em var(--color-lavender-light) inset;
}

.navigate a.active,
.navigate a.active::after {
    opacity: 0.96;
}

.home-container {
    font-size: 1.25em;
    padding: 3em 2.5em;
    min-height: 380px;
    width: 60%;
    background: var(--color-bg-theme);
    color: var(--color-light);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2em;
    overflow: hidden;
    border: 4px solid var(--color-lavender);
    border-radius: 0.25rem;
    outline: 2px solid var(--color-lavender-dark);
    outline-offset: -3px;
}

.home-container>* {
    margin: 0;
    width: 90%;
    padding: 0.125em;
}

.home-container h2 {
    font-size: 1.75em;
    letter-spacing: 2px;
    word-spacing: 1px;
}

.home-container .text-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.75em;
}

.home-container p {
    margin: 0;
    letter-spacing: 0.25px;
    line-height: 1.4;
    width: inherit;
}

#orderButton {
    font-size: 1em;
    font-weight: 600;
    font-family: var(--font-family);
    padding: 0.875em;
    margin-top: .625em;
    cursor: pointer;
    width: clamp(30%, 280px, 45%);
    min-width: max-content;
    letter-spacing: .75px;
    word-spacing: .375em;
    line-height: 1.5;
    background-color: var(--color-lavender);
    color: var(--color-light);
    border: none;
    border-radius: 1px;
    outline: 2px solid var(--color-lavender-dark);
    outline-offset: 3px;
    opacity: 0.95;
    transition: all 250ms ease, opacity 50ms ease, outline-color 50ms, color 50ms, background-color 50ms;
}

#orderButton {
    color: var(--color-bg-theme);
    color: rgba(12, 0, 18, 0.98);
    background-color: var(--color-theme);
    outline-width: 2px;
    outline-color: var(--color-lilac);
    border-radius: 1px;
    opacity: 0.85;
}

#orderButton:hover {
    background-color: var(--color-lavender-dark);
    outline-color: var(--color-lavender-light);
    color: #fff;
    opacity: 0.6;
    transform: scaleX(1.2) scaleY(1.05) translateX(22.5px) translateY(-1.5px);
    word-spacing: 0.625em;
    letter-spacing: 1.25px;
}

.menu-container {
    border: 1px solid #fff;
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    color: var(--color-light);
    background: var(--color-bg-theme);
    padding: 2em;
    cursor: default;
}

.menu-container h2 {
    margin: 0;
    font-size: 2em;
    letter-spacing: 0.5px;
    padding: 0.75em;
}

.cards-wrapper {
    border: 1px solid magenta;
    width: 80%;
    display: flex;
    flex-direction: column;
    background-color: rgb(7, 7, 7);
    padding: 1em;
    gap: 3em;
}

.card {
    font-size: 1.125em;
    border: 2px solid white;
    padding: 1.25em;
    padding-right: 2.5em;
    min-height: 10em;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 2fr 5fr 1fr;
    grid-template-rows: 3.25em 1fr;
    align-items: center;
    justify-items: center;
    color: var(--color-light);
    overflow: auto;
}

.card .card-img {
    height: 7.5em;
    width: 8.5em;
    grid-row: span 2;
    background: darkred;
    margin-right: .5em;
}

.card h3,
.card p {
    margin: 0;
    width: 85%;
    justify-self: start;
    letter-spacing: 0.5px;
}

.card h3 {
    font-size: 1.125em;
    line-height: 2;
    align-self: end;
}

.card p {
    line-height: 1.3;
    align-self: start;
    opacity: 0.75;
}

.card div.price,
.card a.card-btn {
    justify-self: end;

}

.card div.price {
    line-height: 2.2;
    align-self: end;
}

.card a.card-btn {
    text-decoration: none;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) no-repeat;
    background-position: center;
    background-size: cover;
    background-color: rgb(7, 7, 7);
    border: 3px solid var(--color-light);
    border-radius: 0.125em;
    height: 2.125em;
    width: 2.125em;
    margin-top: 1.5em;
    transition: transform 200ms ease, border-color 100ms ease, filter 100ms ease;
}

.card a.card-btn:hover {
    transform: scale(1.1) translateY(-1px) translateX(-1px);
    border-color: #000;
    filter: invert(1);
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n    --font-family: Verdana, 'Roboto', 'Segoe UI', 'Arial', sans-serif;\r\n    --color-dark: #1f1f1f;\r\n    --color-light: #efefef;\r\n    --color-bg-dark: rgba(3, 3, 3, 0.9);\r\n    --color-bg-light: rgba(225, 225, 225, 0.9);\r\n\r\n    --color-lilac: #a57cff;\r\n    --color-lilac-light: #c7aefe;\r\n    --color-lavender: #9648e4;\r\n    --color-lavender-light: #a55bee;\r\n    --color-lavender-dark: #7226be;\r\n    --color-theme: #c09ef4;\r\n\r\n    --color-bg-theme: rgba(12, 0, 18, 0.98);\r\n    --color-light: rgb(230, 230, 250);\r\n\r\n    /* Testing Colors */\r\n    --color-wheat: rgb(245, 222, 179);\r\n    --color-bg-dark: rgba(3, 3, 3, 0.97);\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    font-family: var(--font-family);\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: url('./images/cinema-town-animated-2.jpg') no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    height: 100vh;\r\n    overflow: auto;\r\n    gap: 4em;\r\n}\r\n\r\n#header {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    padding: .25em;\r\n    gap: 1.5em;\r\n    border-bottom: 1px solid var(--color-lavender);\r\n    /* box-shadow: 0 24px 12px -26px var(--color-lavender-dark); */\r\n    box-shadow: 0px calc(1vh * 2) calc(2vh) calc(1vh * -2) var(--color-lavender-dark);\r\n}\r\n\r\n#header .title-wrapper {\r\n    font-size: 4em;\r\n    padding: 0.25em;\r\n    text-wrap: nowrap;\r\n    letter-spacing: 2px;\r\n    /* word-spacing: -0.125em; */\r\n}\r\n\r\n#header .title-wrapper h1 {\r\n    margin: 0;\r\n    font-size: 1em;\r\n}\r\n\r\n#content {\r\n    padding: 1em;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-grow: 1;\r\n}\r\n\r\n#content>* {\r\n    box-shadow: var(--color-lavender-dark) 0px 3px 10px 2px;\r\n}\r\n\r\n#footer {\r\n    padding: 0.75em;\r\n    letter-spacing: 1px;\r\n    gap: 0.125em;\r\n    border-top: 1px solid var(--color-lavender);\r\n    /* box-shadow: 0 -2px 2px 1px var(--color-lavender-dark); */\r\n    box-shadow: 0px calc(1vh * -2) calc(2vh) calc(1vh * -2) var(--color-lavender-dark);\r\n}\r\n\r\n#header,\r\n#footer {\r\n    background: var(--color-bg-theme);\r\n    color: var(--color-theme);\r\n    line-height: 1.4;\r\n}\r\n\r\n#footer,\r\n#footer a {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#footer a {\r\n    text-decoration: none;\r\n    color: inherit;\r\n    font-weight: 600;\r\n    letter-spacing: 0.5px;\r\n    padding: 0.375em;\r\n    gap: 0.25em;\r\n    border-radius: 0.25em;\r\n    transition: filter 150ms ease, background-color 150ms ease, color 150ms ease;\r\n}\r\n\r\n#footer a:hover {\r\n    background-color: #dfdfdf;\r\n    color: rgba(5, 5, 5);\r\n}\r\n\r\n#footer img {\r\n    width: 1.125em;\r\n    transition: filter 150ms ease;\r\n}\r\n\r\n#footer a:hover img {\r\n    filter: invert(1);\r\n}\r\n\r\n#footer a>div {\r\n    font-weight: 600;\r\n}\r\n\r\n.navigate {\r\n    display: grid;\r\n    grid-auto-flow: column;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    min-width: 526px;\r\n    width: calc(380px + 12vw);\r\n    padding: 0.25em 0 0.125em;\r\n    border-top: 1px solid var(--color-lavender);\r\n    /* color: var(--color-lilac); */\r\n}\r\n\r\n.navigate .grid-cell {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.navigate>div.grid-cell:first-of-type {\r\n    justify-content: start;\r\n}\r\n\r\n.navigate>div.grid-cell:last-of-type {\r\n    justify-content: end;\r\n}\r\n\r\n.navigate a.nav-item {\r\n    padding: 1.25em;\r\n    letter-spacing: 1.75px;\r\n    cursor: pointer;\r\n    position: relative;\r\n    text-wrap: nowrap;\r\n    min-width: 4em;\r\n    text-align: center;\r\n    border: none;\r\n    transition: color 100ms ease, box-shadow 250ms ease-out, transform 200ms ease;\r\n}\r\n\r\n.navigate a.nav-item:hover {\r\n    color: var(--color-light);\r\n    transform: translateY(-4px);\r\n    transition: color 75ms ease, box-shadow 400ms ease-out, transform 200ms ease;\r\n    /* box-shadow: 0px -4em 2em -4em var(--color-lavender) inset; */\r\n    /* box-shadow: 0px -3em 1.75em -2em var(--color-lavender-light) inset; */\r\n    /* box-shadow: 0px -2.5em 1.5em -2em var(--color-lavender-light) inset; */\r\n    box-shadow: 0px -1.25em 0.75em -0.875em var(--color-lavender-light) inset;\r\n}\r\n\r\n.navigate a::after {\r\n    content: '';\r\n    position: absolute;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    width: 0;\r\n    height: clamp(1px, 1px, 1px);\r\n    background-color: var(--color-lavender-dark);\r\n    border: none;\r\n    /* transition: width 400ms ease; */\r\n    transition: all 300ms ease-out, background-color 400ms ease-out;\r\n}\r\n\r\n.navigate a:hover::after,\r\n.navigate a.active::after {\r\n    width: 100%;\r\n    background-color: var(--color-lavender);\r\n}\r\n\r\n.navigate a.active {\r\n    color: #fff;\r\n    font-weight: 600;\r\n    letter-spacing: 1.25px;\r\n    transform: translateY(-4px);\r\n    pointer-events: none;\r\n    box-shadow: 0px -1.25em 0.75em -0.875em var(--color-lavender-light) inset, 0px 1.25em 0.75em -1.125em var(--color-lavender-light) inset;\r\n}\r\n\r\n.navigate a.active,\r\n.navigate a.active::after {\r\n    opacity: 0.96;\r\n}\r\n\r\n.home-container {\r\n    font-size: 1.25em;\r\n    padding: 3em 2.5em;\r\n    min-height: 380px;\r\n    width: 60%;\r\n    background: var(--color-bg-theme);\r\n    color: var(--color-light);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 2em;\r\n    overflow: hidden;\r\n    border: 4px solid var(--color-lavender);\r\n    border-radius: 0.25rem;\r\n    outline: 2px solid var(--color-lavender-dark);\r\n    outline-offset: -3px;\r\n}\r\n\r\n.home-container>* {\r\n    margin: 0;\r\n    width: 90%;\r\n    padding: 0.125em;\r\n}\r\n\r\n.home-container h2 {\r\n    font-size: 1.75em;\r\n    letter-spacing: 2px;\r\n    word-spacing: 1px;\r\n}\r\n\r\n.home-container .text-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.75em;\r\n}\r\n\r\n.home-container p {\r\n    margin: 0;\r\n    letter-spacing: 0.25px;\r\n    line-height: 1.4;\r\n    width: inherit;\r\n}\r\n\r\n#orderButton {\r\n    font-size: 1em;\r\n    font-weight: 600;\r\n    font-family: var(--font-family);\r\n    padding: 0.875em;\r\n    margin-top: .625em;\r\n    cursor: pointer;\r\n    width: clamp(30%, 280px, 45%);\r\n    min-width: max-content;\r\n    letter-spacing: .75px;\r\n    word-spacing: .375em;\r\n    line-height: 1.5;\r\n    background-color: var(--color-lavender);\r\n    color: var(--color-light);\r\n    border: none;\r\n    border-radius: 1px;\r\n    outline: 2px solid var(--color-lavender-dark);\r\n    outline-offset: 3px;\r\n    opacity: 0.95;\r\n    transition: all 250ms ease, opacity 50ms ease, outline-color 50ms, color 50ms, background-color 50ms;\r\n}\r\n\r\n#orderButton {\r\n    color: var(--color-bg-theme);\r\n    color: rgba(12, 0, 18, 0.98);\r\n    background-color: var(--color-theme);\r\n    outline-width: 2px;\r\n    outline-color: var(--color-lilac);\r\n    border-radius: 1px;\r\n    opacity: 0.85;\r\n}\r\n\r\n#orderButton:hover {\r\n    background-color: var(--color-lavender-dark);\r\n    outline-color: var(--color-lavender-light);\r\n    color: #fff;\r\n    opacity: 0.6;\r\n    transform: scaleX(1.2) scaleY(1.05) translateX(22.5px) translateY(-1.5px);\r\n    word-spacing: 0.625em;\r\n    letter-spacing: 1.25px;\r\n}\r\n\r\n.menu-container {\r\n    border: 1px solid #fff;\r\n    width: 75%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 2em;\r\n    color: var(--color-light);\r\n    background: var(--color-bg-theme);\r\n    padding: 2em;\r\n    cursor: default;\r\n}\r\n\r\n.menu-container h2 {\r\n    margin: 0;\r\n    font-size: 2em;\r\n    letter-spacing: 0.5px;\r\n    padding: 0.75em;\r\n}\r\n\r\n.cards-wrapper {\r\n    border: 1px solid magenta;\r\n    width: 80%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: rgb(7, 7, 7);\r\n    padding: 1em;\r\n    gap: 3em;\r\n}\r\n\r\n.card {\r\n    font-size: 1.125em;\r\n    border: 2px solid white;\r\n    padding: 1.25em;\r\n    padding-right: 2.5em;\r\n    min-height: 10em;\r\n    display: grid;\r\n    grid-auto-flow: column;\r\n    grid-template-columns: 2fr 5fr 1fr;\r\n    grid-template-rows: 3.25em 1fr;\r\n    align-items: center;\r\n    justify-items: center;\r\n    color: var(--color-light);\r\n    overflow: auto;\r\n}\r\n\r\n.card .card-img {\r\n    height: 7.5em;\r\n    width: 8.5em;\r\n    grid-row: span 2;\r\n    background: darkred;\r\n    margin-right: .5em;\r\n}\r\n\r\n.card h3,\r\n.card p {\r\n    margin: 0;\r\n    width: 85%;\r\n    justify-self: start;\r\n    letter-spacing: 0.5px;\r\n}\r\n\r\n.card h3 {\r\n    font-size: 1.125em;\r\n    line-height: 2;\r\n    align-self: end;\r\n}\r\n\r\n.card p {\r\n    line-height: 1.3;\r\n    align-self: start;\r\n    opacity: 0.75;\r\n}\r\n\r\n.card div.price,\r\n.card a.card-btn {\r\n    justify-self: end;\r\n\r\n}\r\n\r\n.card div.price {\r\n    line-height: 2.2;\r\n    align-self: end;\r\n}\r\n\r\n.card a.card-btn {\r\n    text-decoration: none;\r\n    background: url('./images/plus-icon.svg') no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-color: rgb(7, 7, 7);\r\n    border: 3px solid var(--color-light);\r\n    border-radius: 0.125em;\r\n    height: 2.125em;\r\n    width: 2.125em;\r\n    margin-top: 1.5em;\r\n    transition: transform 200ms ease, border-color 100ms ease, filter 100ms ease;\r\n}\r\n\r\n.card a.card-btn:hover {\r\n    transform: scale(1.1) translateY(-1px) translateX(-1px);\r\n    border-color: #000;\r\n    filter: invert(1);\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/images/cinema-town-animated-2.jpg":
/*!***********************************************!*\
  !*** ./src/images/cinema-town-animated-2.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d752872c986cb5221d65.jpg";

/***/ }),

/***/ "./src/images/github-mark-white.svg":
/*!******************************************!*\
  !*** ./src/images/github-mark-white.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1fc1bc774cfed7450008.svg";

/***/ }),

/***/ "./src/images/plus-icon.svg":
/*!**********************************!*\
  !*** ./src/images/plus-icon.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34b0038a53fc127ed259.svg";

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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _images_github_mark_white_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/github-mark-white.svg */ "./src/images/github-mark-white.svg");



const content = document.getElementById('content');
const header = document.getElementById('header');

header.querySelectorAll('.navigate a')
    .forEach(a => a.addEventListener('click', handleNavClick));

function handleNavClick(e) {
    // Delete existing DOM elements inside #content section
    clearContentSection();
    // Toggle wanted nav-item and unmark currently active items
    toggleActive(e);
    // Populate content with the new active nav-item
    const dataName = e.target.getAttribute('data-name');
    if (dataName === 'home') generateHome();
    else if (dataName === 'menu') generateMenu();
    else generateContact();
}

// Helper function that deletes any element inside the #content section.
function clearContentSection() { while (content.firstChild) content.removeChild(content.firstChild) };

function toggleActive(e) {
    header.querySelectorAll('a.nav-item').forEach(item => {
        if (item.classList.contains('active')) item.classList.remove('active');
    });
    e.target.classList.add('active');
}

function enterMenu() {
    clearContentSection();

    const homeBtn = header.querySelector("a.nav-item[data-name='home']");
    const menuBtn = header.querySelector("a.nav-item[data-name='menu']");
    homeBtn.classList.remove('active');
    menuBtn.classList.add('active');

    generateMenu();
};

function generateHome() {
    console.log('clicked on home');

    // Elements creation
    const homeContainer = document.createElement('div');
    homeContainer.className = 'home-container';

    const heading = document.createElement('h2');
    heading.textContent = "Welcom to Tiny Town!";

    const textWrapper = document.createElement('div');
    textWrapper.className = 'text-wrapper';

    const paragraph1 = document.createElement('p');
    const paragraph2 = document.createElement('p');
    paragraph1.textContent = "Here we offer a large variety of comforting homemade food for you to enjoy!";
    paragraph2.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, non fugit id minima provident officiis. Illum illo et aut praesentium animi tenetur esse commodi facere, iure distinctio provident rerum eum.";

    const btnWrapper = document.createElement('div');
    btnWrapper.className = 'btn-wrapper';

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'orderButton';
    btn.textContent = "ORDER NOW";
    btn.addEventListener('click', enterMenu);

    // Append Elements
    textWrapper.appendChild(paragraph1);
    textWrapper.appendChild(paragraph2);

    btnWrapper.appendChild(btn);

    homeContainer.appendChild(heading);
    homeContainer.appendChild(textWrapper);
    homeContainer.appendChild(btnWrapper);

    content.appendChild(homeContainer);
}
function generateMenu() {
    console.log('clicked on menu');

    const menuContainer = document.createElement('div');
    const heading = document.createElement('h2');
    const cardsWrapper = document.createElement('div');

    menuContainer.className = "menu-container";
    heading.textContent = "MENU";
    cardsWrapper.className = "cards-wrapper";

    // Might change later to iterate over a cards images array
    for (let i = 1; i < 7; i++) cardsWrapper.appendChild(cardComponent(i));

    menuContainer.appendChild(heading);
    menuContainer.appendChild(cardsWrapper);
    content.appendChild(menuContainer);
}

function generateContact() {
    console.log('clicked on contact us');
    // TEMPORARY GENERATES BLANK DIV TO DISPLAY BACKGROUND
    const div = document.createElement('div');
    div.style.height = '200vh';
    content.append(div);
    // END OF TEMP CODE
}

// A function that returns a built card template as an element.
function cardComponent(id) {
    const card = document.createElement('div');
    const cardImage = new Image();
    const cardHeading = document.createElement('h3');
    const cardInfo = document.createElement('p');
    const price = document.createElement('div');
    const cardButton = document.createElement('a');

    card.className = 'card';
    cardImage.src = '#';
    cardImage.className = "card-img";
    cardHeading.textContent = `TEMP DISH ${id}`;
    cardInfo.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloremque repellendus labore, est unde fuga deserunt.";
    price.className = 'price';
    price.textContent = "$12.90";
    cardButton.href = '#';
    cardButton.className = "card-btn";

    card.appendChild(cardImage);
    card.appendChild(cardHeading);
    card.appendChild(cardInfo);
    card.appendChild(price);
    card.appendChild(cardButton);

    return card;
}

function fillFooter() {
    const myIcon = new Image();
    const textDiv = document.createElement('div');
    const dest = document.querySelector('#footer a');

    myIcon.src = _images_github_mark_white_svg__WEBPACK_IMPORTED_MODULE_1__;
    myIcon.alt = 'github-logo';
    textDiv.textContent = 'Elad Tsfany';

    dest.appendChild(myIcon);
    dest.appendChild(textDiv);
};

generateHome();
fillFooter();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1KQUFzRDtBQUNsRyw0Q0FBNEMseUhBQXlDO0FBQ3JGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEUsMkVBQTJFO0FBQzNFLDRFQUE0RTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLEdBQUc7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwREFBVTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9jaW5lbWEtdG93bi1hbmltYXRlZC0yLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3BsdXMtaWNvbi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgICAtLWZvbnQtZmFtaWx5OiBWZXJkYW5hLCAnUm9ib3RvJywgJ1NlZ29lIFVJJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtcclxuICAgIC0tY29sb3ItZGFyazogIzFmMWYxZjtcclxuICAgIC0tY29sb3ItbGlnaHQ6ICNlZmVmZWY7XHJcbiAgICAtLWNvbG9yLWJnLWRhcms6IHJnYmEoMywgMywgMywgMC45KTtcclxuICAgIC0tY29sb3ItYmctbGlnaHQ6IHJnYmEoMjI1LCAyMjUsIDIyNSwgMC45KTtcclxuXHJcbiAgICAtLWNvbG9yLWxpbGFjOiAjYTU3Y2ZmO1xyXG4gICAgLS1jb2xvci1saWxhYy1saWdodDogI2M3YWVmZTtcclxuICAgIC0tY29sb3ItbGF2ZW5kZXI6ICM5NjQ4ZTQ7XHJcbiAgICAtLWNvbG9yLWxhdmVuZGVyLWxpZ2h0OiAjYTU1YmVlO1xyXG4gICAgLS1jb2xvci1sYXZlbmRlci1kYXJrOiAjNzIyNmJlO1xyXG4gICAgLS1jb2xvci10aGVtZTogI2MwOWVmNDtcclxuXHJcbiAgICAtLWNvbG9yLWJnLXRoZW1lOiByZ2JhKDEyLCAwLCAxOCwgMC45OCk7XHJcbiAgICAtLWNvbG9yLWxpZ2h0OiByZ2IoMjMwLCAyMzAsIDI1MCk7XHJcblxyXG4gICAgLyogVGVzdGluZyBDb2xvcnMgKi9cclxuICAgIC0tY29sb3Itd2hlYXQ6IHJnYigyNDUsIDIyMiwgMTc5KTtcclxuICAgIC0tY29sb3ItYmctZGFyazogcmdiYSgzLCAzLCAzLCAwLjk3KTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBnYXA6IDRlbTtcclxufVxyXG5cclxuI2hlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIHBhZGRpbmc6IC4yNWVtO1xyXG4gICAgZ2FwOiAxLjVlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1sYXZlbmRlcik7XHJcbiAgICAvKiBib3gtc2hhZG93OiAwIDI0cHggMTJweCAtMjZweCB2YXIoLS1jb2xvci1sYXZlbmRlci1kYXJrKTsgKi9cclxuICAgIGJveC1zaGFkb3c6IDBweCBjYWxjKDF2aCAqIDIpIGNhbGMoMnZoKSBjYWxjKDF2aCAqIC0yKSB2YXIoLS1jb2xvci1sYXZlbmRlci1kYXJrKTtcclxufVxyXG5cclxuI2hlYWRlciAudGl0bGUtd3JhcHBlciB7XHJcbiAgICBmb250LXNpemU6IDRlbTtcclxuICAgIHBhZGRpbmc6IDAuMjVlbTtcclxuICAgIHRleHQtd3JhcDogbm93cmFwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIC8qIHdvcmQtc3BhY2luZzogLTAuMTI1ZW07ICovXHJcbn1cclxuXHJcbiNoZWFkZXIgLnRpdGxlLXdyYXBwZXIgaDEge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuXHJcbiNjb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbiNjb250ZW50Pioge1xyXG4gICAgYm94LXNoYWRvdzogdmFyKC0tY29sb3ItbGF2ZW5kZXItZGFyaykgMHB4IDNweCAxMHB4IDJweDtcclxufVxyXG5cclxuI2Zvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAwLjc1ZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZ2FwOiAwLjEyNWVtO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWxhdmVuZGVyKTtcclxuICAgIC8qIGJveC1zaGFkb3c6IDAgLTJweCAycHggMXB4IHZhcigtLWNvbG9yLWxhdmVuZGVyLWRhcmspOyAqL1xyXG4gICAgYm94LXNoYWRvdzogMHB4IGNhbGMoMXZoICogLTIpIGNhbGMoMnZoKSBjYWxjKDF2aCAqIC0yKSB2YXIoLS1jb2xvci1sYXZlbmRlci1kYXJrKTtcclxufVxyXG5cclxuI2hlYWRlcixcclxuI2Zvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iZy10aGVtZSk7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGhlbWUpO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxufVxyXG5cclxuI2Zvb3RlcixcclxuI2Zvb3RlciBhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNmb290ZXIgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICBwYWRkaW5nOiAwLjM3NWVtO1xyXG4gICAgZ2FwOiAwLjI1ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XHJcbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMTUwbXMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAxNTBtcyBlYXNlLCBjb2xvciAxNTBtcyBlYXNlO1xyXG59XHJcblxyXG4jZm9vdGVyIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZGZkZjtcclxuICAgIGNvbG9yOiByZ2JhKDUsIDUsIDUpO1xyXG59XHJcblxyXG4jZm9vdGVyIGltZyB7XHJcbiAgICB3aWR0aDogMS4xMjVlbTtcclxuICAgIHRyYW5zaXRpb246IGZpbHRlciAxNTBtcyBlYXNlO1xyXG59XHJcblxyXG4jZm9vdGVyIGE6aG92ZXIgaW1nIHtcclxuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xyXG59XHJcblxyXG4jZm9vdGVyIGE+ZGl2IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5uYXZpZ2F0ZSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgICBtaW4td2lkdGg6IDUyNnB4O1xyXG4gICAgd2lkdGg6IGNhbGMoMzgwcHggKyAxMnZ3KTtcclxuICAgIHBhZGRpbmc6IDAuMjVlbSAwIDAuMTI1ZW07XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY29sb3ItbGF2ZW5kZXIpO1xyXG4gICAgLyogY29sb3I6IHZhcigtLWNvbG9yLWxpbGFjKTsgKi9cclxufVxyXG5cclxuLm5hdmlnYXRlIC5ncmlkLWNlbGwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdmlnYXRlPmRpdi5ncmlkLWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG59XHJcblxyXG4ubmF2aWdhdGU+ZGl2LmdyaWQtY2VsbDpsYXN0LW9mLXR5cGUge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbn1cclxuXHJcbi5uYXZpZ2F0ZSBhLm5hdi1pdGVtIHtcclxuICAgIHBhZGRpbmc6IDEuMjVlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxLjc1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LXdyYXA6IG5vd3JhcDtcclxuICAgIG1pbi13aWR0aDogNGVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMTAwbXMgZWFzZSwgYm94LXNoYWRvdyAyNTBtcyBlYXNlLW91dCwgdHJhbnNmb3JtIDIwMG1zIGVhc2U7XHJcbn1cclxuXHJcbi5uYXZpZ2F0ZSBhLm5hdi1pdGVtOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1saWdodCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciA3NW1zIGVhc2UsIGJveC1zaGFkb3cgNDAwbXMgZWFzZS1vdXQsIHRyYW5zZm9ybSAyMDBtcyBlYXNlO1xyXG4gICAgLyogYm94LXNoYWRvdzogMHB4IC00ZW0gMmVtIC00ZW0gdmFyKC0tY29sb3ItbGF2ZW5kZXIpIGluc2V0OyAqL1xyXG4gICAgLyogYm94LXNoYWRvdzogMHB4IC0zZW0gMS43NWVtIC0yZW0gdmFyKC0tY29sb3ItbGF2ZW5kZXItbGlnaHQpIGluc2V0OyAqL1xyXG4gICAgLyogYm94LXNoYWRvdzogMHB4IC0yLjVlbSAxLjVlbSAtMmVtIHZhcigtLWNvbG9yLWxhdmVuZGVyLWxpZ2h0KSBpbnNldDsgKi9cclxuICAgIGJveC1zaGFkb3c6IDBweCAtMS4yNWVtIDAuNzVlbSAtMC44NzVlbSB2YXIoLS1jb2xvci1sYXZlbmRlci1saWdodCkgaW5zZXQ7XHJcbn1cclxuXHJcbi5uYXZpZ2F0ZSBhOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IGNsYW1wKDFweCwgMXB4LCAxcHgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGF2ZW5kZXItZGFyayk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAvKiB0cmFuc2l0aW9uOiB3aWR0aCA0MDBtcyBlYXNlOyAqL1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2Utb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDQwMG1zIGVhc2Utb3V0O1xyXG59XHJcblxyXG4ubmF2aWdhdGUgYTpob3Zlcjo6YWZ0ZXIsXHJcbi5uYXZpZ2F0ZSBhLmFjdGl2ZTo6YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1sYXZlbmRlcik7XHJcbn1cclxuXHJcbi5uYXZpZ2F0ZSBhLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS4yNXB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggLTEuMjVlbSAwLjc1ZW0gLTAuODc1ZW0gdmFyKC0tY29sb3ItbGF2ZW5kZXItbGlnaHQpIGluc2V0LCAwcHggMS4yNWVtIDAuNzVlbSAtMS4xMjVlbSB2YXIoLS1jb2xvci1sYXZlbmRlci1saWdodCkgaW5zZXQ7XHJcbn1cclxuXHJcbi5uYXZpZ2F0ZSBhLmFjdGl2ZSxcclxuLm5hdmlnYXRlIGEuYWN0aXZlOjphZnRlciB7XHJcbiAgICBvcGFjaXR5OiAwLjk2O1xyXG59XHJcblxyXG4uaG9tZS1jb250YWluZXIge1xyXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XHJcbiAgICBwYWRkaW5nOiAzZW0gMi41ZW07XHJcbiAgICBtaW4taGVpZ2h0OiAzODBweDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iZy10aGVtZSk7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItbGlnaHQpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDJlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1jb2xvci1sYXZlbmRlcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWxhdmVuZGVyLWRhcmspO1xyXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0zcHg7XHJcbn1cclxuXHJcbi5ob21lLWNvbnRhaW5lcj4qIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBwYWRkaW5nOiAwLjEyNWVtO1xyXG59XHJcblxyXG4uaG9tZS1jb250YWluZXIgaDIge1xyXG4gICAgZm9udC1zaXplOiAxLjc1ZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgd29yZC1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbi5ob21lLWNvbnRhaW5lciAudGV4dC13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAwLjc1ZW07XHJcbn1cclxuXHJcbi5ob21lLWNvbnRhaW5lciBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjI1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcbn1cclxuXHJcbiNvcmRlckJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xyXG4gICAgcGFkZGluZzogMC44NzVlbTtcclxuICAgIG1hcmdpbi10b3A6IC42MjVlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiBjbGFtcCgzMCUsIDI4MHB4LCA0NSUpO1xyXG4gICAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuNzVweDtcclxuICAgIHdvcmQtc3BhY2luZzogLjM3NWVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWxhdmVuZGVyKTtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1saWdodCk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tY29sb3ItbGF2ZW5kZXItZGFyayk7XHJcbiAgICBvdXRsaW5lLW9mZnNldDogM3B4O1xyXG4gICAgb3BhY2l0eTogMC45NTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLCBvcGFjaXR5IDUwbXMgZWFzZSwgb3V0bGluZS1jb2xvciA1MG1zLCBjb2xvciA1MG1zLCBiYWNrZ3JvdW5kLWNvbG9yIDUwbXM7XHJcbn1cclxuXHJcbiNvcmRlckJ1dHRvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmctdGhlbWUpO1xyXG4gICAgY29sb3I6IHJnYmEoMTIsIDAsIDE4LCAwLjk4KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRoZW1lKTtcclxuICAgIG91dGxpbmUtd2lkdGg6IDJweDtcclxuICAgIG91dGxpbmUtY29sb3I6IHZhcigtLWNvbG9yLWxpbGFjKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICAgIG9wYWNpdHk6IDAuODU7XHJcbn1cclxuXHJcbiNvcmRlckJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1sYXZlbmRlci1kYXJrKTtcclxuICAgIG91dGxpbmUtY29sb3I6IHZhcigtLWNvbG9yLWxhdmVuZGVyLWxpZ2h0KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMS4yKSBzY2FsZVkoMS4wNSkgdHJhbnNsYXRlWCgyMi41cHgpIHRyYW5zbGF0ZVkoLTEuNXB4KTtcclxuICAgIHdvcmQtc3BhY2luZzogMC42MjVlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxLjI1cHg7XHJcbn1cclxuXHJcbi5tZW51LWNvbnRhaW5lciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMmVtO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0KTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJnLXRoZW1lKTtcclxuICAgIHBhZGRpbmc6IDJlbTtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuLm1lbnUtY29udGFpbmVyIGgyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgcGFkZGluZzogMC43NWVtO1xyXG59XHJcblxyXG4uY2FyZHMtd3JhcHBlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBtYWdlbnRhO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcsIDcsIDcpO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgZ2FwOiAzZW07XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xMjVlbTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gICAgcGFkZGluZzogMS4yNWVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMi41ZW07XHJcbiAgICBtaW4taGVpZ2h0OiAxMGVtO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA1ZnIgMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzLjI1ZW0gMWZyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1saWdodCk7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtaW1nIHtcclxuICAgIGhlaWdodDogNy41ZW07XHJcbiAgICB3aWR0aDogOC41ZW07XHJcbiAgICBncmlkLXJvdzogc3BhbiAyO1xyXG4gICAgYmFja2dyb3VuZDogZGFya3JlZDtcclxuICAgIG1hcmdpbi1yaWdodDogLjVlbTtcclxufVxyXG5cclxuLmNhcmQgaDMsXHJcbi5jYXJkIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbn1cclxuXHJcbi5jYXJkIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xMjVlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gICAgYWxpZ24tc2VsZjogZW5kO1xyXG59XHJcblxyXG4uY2FyZCBwIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcclxuICAgIG9wYWNpdHk6IDAuNzU7XHJcbn1cclxuXHJcbi5jYXJkIGRpdi5wcmljZSxcclxuLmNhcmQgYS5jYXJkLWJ0biB7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcclxuXHJcbn1cclxuXHJcbi5jYXJkIGRpdi5wcmljZSB7XHJcbiAgICBsaW5lLWhlaWdodDogMi4yO1xyXG4gICAgYWxpZ24tc2VsZjogZW5kO1xyXG59XHJcblxyXG4uY2FyZCBhLmNhcmQtYnRuIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcsIDcsIDcpO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY29sb3ItbGlnaHQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4xMjVlbTtcclxuICAgIGhlaWdodDogMi4xMjVlbTtcclxuICAgIHdpZHRoOiAyLjEyNWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMS41ZW07XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZSwgYm9yZGVyLWNvbG9yIDEwMG1zIGVhc2UsIGZpbHRlciAxMDBtcyBlYXNlO1xyXG59XHJcblxyXG4uY2FyZCBhLmNhcmQtYnRuOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSB0cmFuc2xhdGVZKC0xcHgpIHRyYW5zbGF0ZVgoLTFweCk7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDA7XHJcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3Nc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W1wiOnJvb3Qge1xcclxcbiAgICAtLWZvbnQtZmFtaWx5OiBWZXJkYW5hLCAnUm9ib3RvJywgJ1NlZ29lIFVJJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgLS1jb2xvci1kYXJrOiAjMWYxZjFmO1xcclxcbiAgICAtLWNvbG9yLWxpZ2h0OiAjZWZlZmVmO1xcclxcbiAgICAtLWNvbG9yLWJnLWRhcms6IHJnYmEoMywgMywgMywgMC45KTtcXHJcXG4gICAgLS1jb2xvci1iZy1saWdodDogcmdiYSgyMjUsIDIyNSwgMjI1LCAwLjkpO1xcclxcblxcclxcbiAgICAtLWNvbG9yLWxpbGFjOiAjYTU3Y2ZmO1xcclxcbiAgICAtLWNvbG9yLWxpbGFjLWxpZ2h0OiAjYzdhZWZlO1xcclxcbiAgICAtLWNvbG9yLWxhdmVuZGVyOiAjOTY0OGU0O1xcclxcbiAgICAtLWNvbG9yLWxhdmVuZGVyLWxpZ2h0OiAjYTU1YmVlO1xcclxcbiAgICAtLWNvbG9yLWxhdmVuZGVyLWRhcms6ICM3MjI2YmU7XFxyXFxuICAgIC0tY29sb3ItdGhlbWU6ICNjMDllZjQ7XFxyXFxuXFxyXFxuICAgIC0tY29sb3ItYmctdGhlbWU6IHJnYmEoMTIsIDAsIDE4LCAwLjk4KTtcXHJcXG4gICAgLS1jb2xvci1saWdodDogcmdiKDIzMCwgMjMwLCAyNTApO1xcclxcblxcclxcbiAgICAvKiBUZXN0aW5nIENvbG9ycyAqL1xcclxcbiAgICAtLWNvbG9yLXdoZWF0OiByZ2IoMjQ1LCAyMjIsIDE3OSk7XFxyXFxuICAgIC0tY29sb3ItYmctZGFyazogcmdiYSgzLCAzLCAzLCAwLjk3KTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9pbWFnZXMvY2luZW1hLXRvd24tYW5pbWF0ZWQtMi5qcGcnKSBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICAgIGdhcDogNGVtO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIHBhZGRpbmc6IC4yNWVtO1xcclxcbiAgICBnYXA6IDEuNWVtO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItbGF2ZW5kZXIpO1xcclxcbiAgICAvKiBib3gtc2hhZG93OiAwIDI0cHggMTJweCAtMjZweCB2YXIoLS1jb2xvci1sYXZlbmRlci1kYXJrKTsgKi9cXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IGNhbGMoMXZoICogMikgY2FsYygydmgpIGNhbGMoMXZoICogLTIpIHZhcigtLWNvbG9yLWxhdmVuZGVyLWRhcmspO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyIC50aXRsZS13cmFwcGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiA0ZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuMjVlbTtcXHJcXG4gICAgdGV4dC13cmFwOiBub3dyYXA7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICAgIC8qIHdvcmQtc3BhY2luZzogLTAuMTI1ZW07ICovXFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIgLnRpdGxlLXdyYXBwZXIgaDEge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIHBhZGRpbmc6IDFlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQ+KiB7XFxyXFxuICAgIGJveC1zaGFkb3c6IHZhcigtLWNvbG9yLWxhdmVuZGVyLWRhcmspIDBweCAzcHggMTBweCAycHg7XFxyXFxufVxcclxcblxcclxcbiNmb290ZXIge1xcclxcbiAgICBwYWRkaW5nOiAwLjc1ZW07XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxuICAgIGdhcDogMC4xMjVlbTtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWxhdmVuZGVyKTtcXHJcXG4gICAgLyogYm94LXNoYWRvdzogMCAtMnB4IDJweCAxcHggdmFyKC0tY29sb3ItbGF2ZW5kZXItZGFyayk7ICovXFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCBjYWxjKDF2aCAqIC0yKSBjYWxjKDJ2aCkgY2FsYygxdmggKiAtMikgdmFyKC0tY29sb3ItbGF2ZW5kZXItZGFyayk7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXIsXFxyXFxuI2Zvb3RlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJnLXRoZW1lKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRoZW1lKTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvb3RlcixcXHJcXG4jZm9vdGVyIGEge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvb3RlciBhIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcclxcbiAgICBwYWRkaW5nOiAwLjM3NWVtO1xcclxcbiAgICBnYXA6IDAuMjVlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcclxcbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMTUwbXMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAxNTBtcyBlYXNlLCBjb2xvciAxNTBtcyBlYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4jZm9vdGVyIGE6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZkZmRmO1xcclxcbiAgICBjb2xvcjogcmdiYSg1LCA1LCA1KTtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvb3RlciBpbWcge1xcclxcbiAgICB3aWR0aDogMS4xMjVlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogZmlsdGVyIDE1MG1zIGVhc2U7XFxyXFxufVxcclxcblxcclxcbiNmb290ZXIgYTpob3ZlciBpbWcge1xcclxcbiAgICBmaWx0ZXI6IGludmVydCgxKTtcXHJcXG59XFxyXFxuXFxyXFxuI2Zvb3RlciBhPmRpdiB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0ZSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICAgIG1pbi13aWR0aDogNTI2cHg7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDM4MHB4ICsgMTJ2dyk7XFxyXFxuICAgIHBhZGRpbmc6IDAuMjVlbSAwIDAuMTI1ZW07XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1sYXZlbmRlcik7XFxyXFxuICAgIC8qIGNvbG9yOiB2YXIoLS1jb2xvci1saWxhYyk7ICovXFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0ZSAuZ3JpZC1jZWxsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0ZT5kaXYuZ3JpZC1jZWxsOmZpcnN0LW9mLXR5cGUge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdGU+ZGl2LmdyaWQtY2VsbDpsYXN0LW9mLXR5cGUge1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmlnYXRlIGEubmF2LWl0ZW0ge1xcclxcbiAgICBwYWRkaW5nOiAxLjI1ZW07XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjc1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0ZXh0LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgbWluLXdpZHRoOiA0ZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAxMDBtcyBlYXNlLCBib3gtc2hhZG93IDI1MG1zIGVhc2Utb3V0LCB0cmFuc2Zvcm0gMjAwbXMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmlnYXRlIGEubmF2LWl0ZW06aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItbGlnaHQpO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XFxyXFxuICAgIHRyYW5zaXRpb246IGNvbG9yIDc1bXMgZWFzZSwgYm94LXNoYWRvdyA0MDBtcyBlYXNlLW91dCwgdHJhbnNmb3JtIDIwMG1zIGVhc2U7XFxyXFxuICAgIC8qIGJveC1zaGFkb3c6IDBweCAtNGVtIDJlbSAtNGVtIHZhcigtLWNvbG9yLWxhdmVuZGVyKSBpbnNldDsgKi9cXHJcXG4gICAgLyogYm94LXNoYWRvdzogMHB4IC0zZW0gMS43NWVtIC0yZW0gdmFyKC0tY29sb3ItbGF2ZW5kZXItbGlnaHQpIGluc2V0OyAqL1xcclxcbiAgICAvKiBib3gtc2hhZG93OiAwcHggLTIuNWVtIDEuNWVtIC0yZW0gdmFyKC0tY29sb3ItbGF2ZW5kZXItbGlnaHQpIGluc2V0OyAqL1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggLTEuMjVlbSAwLjc1ZW0gLTAuODc1ZW0gdmFyKC0tY29sb3ItbGF2ZW5kZXItbGlnaHQpIGluc2V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdGUgYTo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDBweDtcXHJcXG4gICAgbGVmdDogMHB4O1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgaGVpZ2h0OiBjbGFtcCgxcHgsIDFweCwgMXB4KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGF2ZW5kZXItZGFyayk7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgLyogdHJhbnNpdGlvbjogd2lkdGggNDAwbXMgZWFzZTsgKi9cXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2Utb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDQwMG1zIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdGUgYTpob3Zlcjo6YWZ0ZXIsXFxyXFxuLm5hdmlnYXRlIGEuYWN0aXZlOjphZnRlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1sYXZlbmRlcik7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0ZSBhLmFjdGl2ZSB7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMS4yNXB4O1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggLTEuMjVlbSAwLjc1ZW0gLTAuODc1ZW0gdmFyKC0tY29sb3ItbGF2ZW5kZXItbGlnaHQpIGluc2V0LCAwcHggMS4yNWVtIDAuNzVlbSAtMS4xMjVlbSB2YXIoLS1jb2xvci1sYXZlbmRlci1saWdodCkgaW5zZXQ7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0ZSBhLmFjdGl2ZSxcXHJcXG4ubmF2aWdhdGUgYS5hY3RpdmU6OmFmdGVyIHtcXHJcXG4gICAgb3BhY2l0eTogMC45NjtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtY29udGFpbmVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjI1ZW07XFxyXFxuICAgIHBhZGRpbmc6IDNlbSAyLjVlbTtcXHJcXG4gICAgbWluLWhlaWdodDogMzgwcHg7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJnLXRoZW1lKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMmVtO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1jb2xvci1sYXZlbmRlcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxyXFxuICAgIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1sYXZlbmRlci1kYXJrKTtcXHJcXG4gICAgb3V0bGluZS1vZmZzZXQ6IC0zcHg7XFxyXFxufVxcclxcblxcclxcbi5ob21lLWNvbnRhaW5lcj4qIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBwYWRkaW5nOiAwLjEyNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1jb250YWluZXIgaDIge1xcclxcbiAgICBmb250LXNpemU6IDEuNzVlbTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gICAgd29yZC1zcGFjaW5nOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5ob21lLWNvbnRhaW5lciAudGV4dC13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAwLjc1ZW07XFxyXFxufVxcclxcblxcclxcbi5ob21lLWNvbnRhaW5lciBwIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yNXB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMS40O1xcclxcbiAgICB3aWR0aDogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuI29yZGVyQnV0dG9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSk7XFxyXFxuICAgIHBhZGRpbmc6IDAuODc1ZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IC42MjVlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB3aWR0aDogY2xhbXAoMzAlLCAyODBweCwgNDUlKTtcXHJcXG4gICAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC43NXB4O1xcclxcbiAgICB3b3JkLXNwYWNpbmc6IC4zNzVlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGF2ZW5kZXIpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItbGlnaHQpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcXHJcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWxhdmVuZGVyLWRhcmspO1xcclxcbiAgICBvdXRsaW5lLW9mZnNldDogM3B4O1xcclxcbiAgICBvcGFjaXR5OiAwLjk1O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZSwgb3BhY2l0eSA1MG1zIGVhc2UsIG91dGxpbmUtY29sb3IgNTBtcywgY29sb3IgNTBtcywgYmFja2dyb3VuZC1jb2xvciA1MG1zO1xcclxcbn1cXHJcXG5cXHJcXG4jb3JkZXJCdXR0b24ge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmctdGhlbWUpO1xcclxcbiAgICBjb2xvcjogcmdiYSgxMiwgMCwgMTgsIDAuOTgpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10aGVtZSk7XFxyXFxuICAgIG91dGxpbmUtd2lkdGg6IDJweDtcXHJcXG4gICAgb3V0bGluZS1jb2xvcjogdmFyKC0tY29sb3ItbGlsYWMpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XFxyXFxuICAgIG9wYWNpdHk6IDAuODU7XFxyXFxufVxcclxcblxcclxcbiNvcmRlckJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWxhdmVuZGVyLWRhcmspO1xcclxcbiAgICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1jb2xvci1sYXZlbmRlci1saWdodCk7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBvcGFjaXR5OiAwLjY7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEuMikgc2NhbGVZKDEuMDUpIHRyYW5zbGF0ZVgoMjIuNXB4KSB0cmFuc2xhdGVZKC0xLjVweCk7XFxyXFxuICAgIHdvcmQtc3BhY2luZzogMC42MjVlbTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY29udGFpbmVyIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXHJcXG4gICAgd2lkdGg6IDc1JTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1saWdodCk7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJnLXRoZW1lKTtcXHJcXG4gICAgcGFkZGluZzogMmVtO1xcclxcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNvbnRhaW5lciBoMiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1zaXplOiAyZW07XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXHJcXG4gICAgcGFkZGluZzogMC43NWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZHMtd3JhcHBlciB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIG1hZ2VudGE7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3LCA3LCA3KTtcXHJcXG4gICAgcGFkZGluZzogMWVtO1xcclxcbiAgICBnYXA6IDNlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgICBmb250LXNpemU6IDEuMTI1ZW07XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAxLjI1ZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDIuNWVtO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMGVtO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA1ZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMuMjVlbSAxZnI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0KTtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jYXJkIC5jYXJkLWltZyB7XFxyXFxuICAgIGhlaWdodDogNy41ZW07XFxyXFxuICAgIHdpZHRoOiA4LjVlbTtcXHJcXG4gICAgZ3JpZC1yb3c6IHNwYW4gMjtcXHJcXG4gICAgYmFja2dyb3VuZDogZGFya3JlZDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCBoMyxcXHJcXG4uY2FyZCBwIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICB3aWR0aDogODUlO1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGgzIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjEyNWVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMjtcXHJcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCBwIHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMztcXHJcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxyXFxuICAgIG9wYWNpdHk6IDAuNzU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkIGRpdi5wcmljZSxcXHJcXG4uY2FyZCBhLmNhcmQtYnRuIHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5jYXJkIGRpdi5wcmljZSB7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyLjI7XFxyXFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgYS5jYXJkLWJ0biB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKCcuL2ltYWdlcy9wbHVzLWljb24uc3ZnJykgbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3LCA3LCA3KTtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY29sb3ItbGlnaHQpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjEyNWVtO1xcclxcbiAgICBoZWlnaHQ6IDIuMTI1ZW07XFxyXFxuICAgIHdpZHRoOiAyLjEyNWVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxLjVlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2UsIGJvcmRlci1jb2xvciAxMDBtcyBlYXNlLCBmaWx0ZXIgMTAwbXMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgYS5jYXJkLWJ0bjpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKSB0cmFuc2xhdGVZKC0xcHgpIHRyYW5zbGF0ZVgoLTFweCk7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzAwMDtcXHJcXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0IGdpdGh1Ykljb24gZnJvbSAnLi9pbWFnZXMvZ2l0aHViLW1hcmstd2hpdGUuc3ZnJ1xyXG5cclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcclxuXHJcbmhlYWRlci5xdWVyeVNlbGVjdG9yQWxsKCcubmF2aWdhdGUgYScpXHJcbiAgICAuZm9yRWFjaChhID0+IGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVOYXZDbGljaykpO1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlTmF2Q2xpY2soZSkge1xyXG4gICAgLy8gRGVsZXRlIGV4aXN0aW5nIERPTSBlbGVtZW50cyBpbnNpZGUgI2NvbnRlbnQgc2VjdGlvblxyXG4gICAgY2xlYXJDb250ZW50U2VjdGlvbigpO1xyXG4gICAgLy8gVG9nZ2xlIHdhbnRlZCBuYXYtaXRlbSBhbmQgdW5tYXJrIGN1cnJlbnRseSBhY3RpdmUgaXRlbXNcclxuICAgIHRvZ2dsZUFjdGl2ZShlKTtcclxuICAgIC8vIFBvcHVsYXRlIGNvbnRlbnQgd2l0aCB0aGUgbmV3IGFjdGl2ZSBuYXYtaXRlbVxyXG4gICAgY29uc3QgZGF0YU5hbWUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpO1xyXG4gICAgaWYgKGRhdGFOYW1lID09PSAnaG9tZScpIGdlbmVyYXRlSG9tZSgpO1xyXG4gICAgZWxzZSBpZiAoZGF0YU5hbWUgPT09ICdtZW51JykgZ2VuZXJhdGVNZW51KCk7XHJcbiAgICBlbHNlIGdlbmVyYXRlQ29udGFjdCgpO1xyXG59XHJcblxyXG4vLyBIZWxwZXIgZnVuY3Rpb24gdGhhdCBkZWxldGVzIGFueSBlbGVtZW50IGluc2lkZSB0aGUgI2NvbnRlbnQgc2VjdGlvbi5cclxuZnVuY3Rpb24gY2xlYXJDb250ZW50U2VjdGlvbigpIHsgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpIH07XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVBY3RpdmUoZSkge1xyXG4gICAgaGVhZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EubmF2LWl0ZW0nKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlbnRlck1lbnUoKSB7XHJcbiAgICBjbGVhckNvbnRlbnRTZWN0aW9uKCk7XHJcblxyXG4gICAgY29uc3QgaG9tZUJ0biA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKFwiYS5uYXYtaXRlbVtkYXRhLW5hbWU9J2hvbWUnXVwiKTtcclxuICAgIGNvbnN0IG1lbnVCdG4gPSBoZWFkZXIucXVlcnlTZWxlY3RvcihcImEubmF2LWl0ZW1bZGF0YS1uYW1lPSdtZW51J11cIik7XHJcbiAgICBob21lQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgICBnZW5lcmF0ZU1lbnUoKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlSG9tZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdjbGlja2VkIG9uIGhvbWUnKTtcclxuXHJcbiAgICAvLyBFbGVtZW50cyBjcmVhdGlvblxyXG4gICAgY29uc3QgaG9tZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaG9tZUNvbnRhaW5lci5jbGFzc05hbWUgPSAnaG9tZS1jb250YWluZXInO1xyXG5cclxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiV2VsY29tIHRvIFRpbnkgVG93biFcIjtcclxuXHJcbiAgICBjb25zdCB0ZXh0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGV4dFdyYXBwZXIuY2xhc3NOYW1lID0gJ3RleHQtd3JhcHBlcic7XHJcblxyXG4gICAgY29uc3QgcGFyYWdyYXBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IHBhcmFncmFwaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwYXJhZ3JhcGgxLnRleHRDb250ZW50ID0gXCJIZXJlIHdlIG9mZmVyIGEgbGFyZ2UgdmFyaWV0eSBvZiBjb21mb3J0aW5nIGhvbWVtYWRlIGZvb2QgZm9yIHlvdSB0byBlbmpveSFcIjtcclxuICAgIHBhcmFncmFwaDIudGV4dENvbnRlbnQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIE9iY2FlY2F0aSwgbm9uIGZ1Z2l0IGlkIG1pbmltYSBwcm92aWRlbnQgb2ZmaWNpaXMuIElsbHVtIGlsbG8gZXQgYXV0IHByYWVzZW50aXVtIGFuaW1pIHRlbmV0dXIgZXNzZSBjb21tb2RpIGZhY2VyZSwgaXVyZSBkaXN0aW5jdGlvIHByb3ZpZGVudCByZXJ1bSBldW0uXCI7XHJcblxyXG4gICAgY29uc3QgYnRuV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYnRuV3JhcHBlci5jbGFzc05hbWUgPSAnYnRuLXdyYXBwZXInO1xyXG5cclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnRuLnR5cGUgPSAnYnV0dG9uJztcclxuICAgIGJ0bi5pZCA9ICdvcmRlckJ1dHRvbic7XHJcbiAgICBidG4udGV4dENvbnRlbnQgPSBcIk9SREVSIE5PV1wiO1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZW50ZXJNZW51KTtcclxuXHJcbiAgICAvLyBBcHBlbmQgRWxlbWVudHNcclxuICAgIHRleHRXcmFwcGVyLmFwcGVuZENoaWxkKHBhcmFncmFwaDEpO1xyXG4gICAgdGV4dFdyYXBwZXIuYXBwZW5kQ2hpbGQocGFyYWdyYXBoMik7XHJcblxyXG4gICAgYnRuV3JhcHBlci5hcHBlbmRDaGlsZChidG4pO1xyXG5cclxuICAgIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcbiAgICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRXcmFwcGVyKTtcclxuICAgIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuV3JhcHBlcik7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChob21lQ29udGFpbmVyKTtcclxufVxyXG5mdW5jdGlvbiBnZW5lcmF0ZU1lbnUoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnY2xpY2tlZCBvbiBtZW51Jyk7XHJcblxyXG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBjb25zdCBjYXJkc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwibWVudS1jb250YWluZXJcIjtcclxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIk1FTlVcIjtcclxuICAgIGNhcmRzV3JhcHBlci5jbGFzc05hbWUgPSBcImNhcmRzLXdyYXBwZXJcIjtcclxuXHJcbiAgICAvLyBNaWdodCBjaGFuZ2UgbGF0ZXIgdG8gaXRlcmF0ZSBvdmVyIGEgY2FyZHMgaW1hZ2VzIGFycmF5XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDc7IGkrKykgY2FyZHNXcmFwcGVyLmFwcGVuZENoaWxkKGNhcmRDb21wb25lbnQoaSkpO1xyXG5cclxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmRzV3JhcHBlcik7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUNvbnRhY3QoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnY2xpY2tlZCBvbiBjb250YWN0IHVzJyk7XHJcbiAgICAvLyBURU1QT1JBUlkgR0VORVJBVEVTIEJMQU5LIERJViBUTyBESVNQTEFZIEJBQ0tHUk9VTkRcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LnN0eWxlLmhlaWdodCA9ICcyMDB2aCc7XHJcbiAgICBjb250ZW50LmFwcGVuZChkaXYpO1xyXG4gICAgLy8gRU5EIE9GIFRFTVAgQ09ERVxyXG59XHJcblxyXG4vLyBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGJ1aWx0IGNhcmQgdGVtcGxhdGUgYXMgYW4gZWxlbWVudC5cclxuZnVuY3Rpb24gY2FyZENvbXBvbmVudChpZCkge1xyXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgY2FyZEltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBjb25zdCBjYXJkSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBjb25zdCBjYXJkSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBjYXJkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cclxuICAgIGNhcmQuY2xhc3NOYW1lID0gJ2NhcmQnO1xyXG4gICAgY2FyZEltYWdlLnNyYyA9ICcjJztcclxuICAgIGNhcmRJbWFnZS5jbGFzc05hbWUgPSBcImNhcmQtaW1nXCI7XHJcbiAgICBjYXJkSGVhZGluZy50ZXh0Q29udGVudCA9IGBURU1QIERJU0ggJHtpZH1gO1xyXG4gICAgY2FyZEluZm8udGV4dENvbnRlbnQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIExhYm9yaW9zYW0gZG9sb3JlbXF1ZSByZXBlbGxlbmR1cyBsYWJvcmUsIGVzdCB1bmRlIGZ1Z2EgZGVzZXJ1bnQuXCI7XHJcbiAgICBwcmljZS5jbGFzc05hbWUgPSAncHJpY2UnO1xyXG4gICAgcHJpY2UudGV4dENvbnRlbnQgPSBcIiQxMi45MFwiO1xyXG4gICAgY2FyZEJ1dHRvbi5ocmVmID0gJyMnO1xyXG4gICAgY2FyZEJ1dHRvbi5jbGFzc05hbWUgPSBcImNhcmQtYnRuXCI7XHJcblxyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkSW1hZ2UpO1xyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkSGVhZGluZyk7XHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRJbmZvKTtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQocHJpY2UpO1xyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkQnV0dG9uKTtcclxuXHJcbiAgICByZXR1cm4gY2FyZDtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsbEZvb3RlcigpIHtcclxuICAgIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgY29uc3QgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgZGVzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb290ZXIgYScpO1xyXG5cclxuICAgIG15SWNvbi5zcmMgPSBnaXRodWJJY29uO1xyXG4gICAgbXlJY29uLmFsdCA9ICdnaXRodWItbG9nbyc7XHJcbiAgICB0ZXh0RGl2LnRleHRDb250ZW50ID0gJ0VsYWQgVHNmYW55JztcclxuXHJcbiAgICBkZXN0LmFwcGVuZENoaWxkKG15SWNvbik7XHJcbiAgICBkZXN0LmFwcGVuZENoaWxkKHRleHREaXYpO1xyXG59O1xyXG5cclxuZ2VuZXJhdGVIb21lKCk7XHJcbmZpbGxGb290ZXIoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9