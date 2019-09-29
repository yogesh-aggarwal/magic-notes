(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n  <div class=\"logo\">\r\n    <img src=\"../assets/img/logo.png\" />\r\n  </div>\r\n  <ul>\r\n    <li>\r\n      <a [routerLink]=\"['/']\">Home</a>\r\n    </li>\r\n    <li>\r\n      <a href=\"https://github.com/yogesh-aggarwal/magic-notes\">GitHub</a>\r\n    </li>\r\n  </ul>\r\n</header>\r\n\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"main\">\n    <div class=\"heading\">\n      <h2>Title:</h2>\n    </div>\n    <input #title type=\"text\" placeholder=\"Note title...\" />\n    <div class=\"heading\">\n      <h2>Note:</h2>\n    </div>\n    <textarea #content placeholder=\"Take notes here...\"></textarea>\n\n    <div class=\"buttons\">\n      <button class=\"add-btn\" (click)=\"addNote(title.value, content.value)\">\n        <img src=\"../../assets/img/right.png\" alt=\"\" />\n        Add note\n      </button>\n      <button class=\"delete-btn\" (click)=\"deleteAllNotes()\">\n        <img src=\"../../assets/img/cross.png\" alt=\"\" />\n        Delete all notes\n      </button>\n    </div>\n  </div>\n\n  <br /><br />\n\n  <div class=\"notes\">\n    <ng-container *ngIf=\"notes.length != 0; else noNotes\">\n      <h1 class=\"description\">My Notes:</h1>\n      <ng-container class=\"group\" *ngFor=\"let note of notes\">\n        <div class=\"note\">\n          <div class=\"title\">\n            {{ note.title }}\n          </div>\n          <div class=\"content\">\n            {{ note.content }}\n          </div>\n          <div class=\"actions\">\n            <button class=\"view-btn\" (click)=\"(view(note.id))\">View</button>\n            <button class=\"edit-btn\" (click)=\"(edit(note.id))\">Edit</button>\n            <button class=\"delete-btn\" (click)=\"delete(note.id)\">Delete</button>\n          </div>\n        </div>\n      </ng-container>\n    </ng-container>\n    <ng-template #noNotes>\n      <h1 class=\"description\">No notes to show</h1>\n    </ng-template>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");




const routes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'magic-notes';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn, .notes .note .actions .delete-btn, .notes .note .actions .edit-btn, .notes .note .actions .view-btn, .container .main .buttons .delete-btn, .container .main .buttons .add-btn {\n  border-radius: 5px;\n  background: #fff;\n  border: none;\n  padding: 12px 15px 15px 15px;\n  color: #fff;\n  outline: none;\n  transition: all 0.2s;\n  box-shadow: 0 3px 6px #c1c1c1;\n  font-size: 13px;\n  cursor: pointer;\n}\n.btn:hover, .notes .note .actions .delete-btn:hover, .notes .note .actions .edit-btn:hover, .notes .note .actions .view-btn:hover, .container .main .buttons .delete-btn:hover, .container .main .buttons .add-btn:hover {\n  box-shadow: 0 4px 7px #c1c1c1;\n  margin-top: -1px;\n}\n.btn img, .notes .note .actions .delete-btn img, .notes .note .actions .edit-btn img, .notes .note .actions .view-btn img, .container .main .buttons .delete-btn img, .container .main .buttons .add-btn img {\n  width: 20px;\n  margin-bottom: -6px;\n  margin-right: 7px;\n}\n.container .main {\n  text-align: center;\n}\n.container .main .heading {\n  text-align: left;\n  margin-left: 5%;\n}\n.container .main textarea,\n.container .main input {\n  text-align: left;\n  width: 90%;\n  resize: none;\n  outline: none;\n  border: none;\n  background: #fff;\n  box-shadow: 0 1px 3px #c1c1c1;\n  border-radius: 5px;\n  height: 14em;\n  padding: 1rem;\n  margin: 0 0 1rem 0;\n}\n.container .main input {\n  height: 1rem;\n}\n.container .main .buttons {\n  width: 90%;\n  padding: 0 5%;\n  display: block;\n}\n.container .main .buttons .add-btn {\n  float: left;\n  background: #5e72e4;\n}\n.container .main .buttons .add-btn:hover {\n  background: #4057da;\n}\n.container .main .buttons .delete-btn {\n  float: right;\n  background: #f5365c;\n}\n.container .main .buttons .delete-btn:hover {\n  background: #c50027;\n}\n.notes {\n  margin: 1rem 5%;\n  text-align: left;\n  display: inline-block;\n}\n.notes .description {\n  font-size: 22px;\n}\n.notes .note {\n  position: relative;\n  display: inline-block;\n  text-align: left;\n  box-shadow: 0 2px 5px #c1c1c1;\n  border-radius: 8px;\n  margin: 0.8rem;\n  padding: 1rem;\n  width: 18rem;\n  height: 12rem;\n}\n.notes .note .title {\n  text-align: center;\n  padding-bottom: 8px;\n  border-bottom: 1px solid #ccc;\n}\n.notes .note .content {\n  padding-top: 8px;\n}\n.notes .note .actions {\n  left: 0;\n  bottom: 0;\n  position: absolute;\n  width: 90%;\n  margin: 1rem 1rem 1rem 0.7rem;\n  display: flex;\n  justify-content: center;\n}\n.notes .note .actions .action-btn, .notes .note .actions .delete-btn, .notes .note .actions .edit-btn, .notes .note .actions .view-btn {\n  margin: 0 0.5rem;\n}\n.notes .note .actions .action-btn:hover, .notes .note .actions .delete-btn:hover, .notes .note .actions .edit-btn:hover, .notes .note .actions .view-btn:hover {\n  margin-top: 0px;\n}\n.notes .note .actions .view-btn {\n  background: #5e72e4;\n}\n.notes .note .actions .edit-btn {\n  background: #5e72e4;\n}\n.notes .note .actions .delete-btn {\n  background: #5e72e4;\n}\n@media (max-width: 768px) {\n  .notes {\n    text-align: center;\n  }\n  .notes .note {\n    width: 12rem;\n  }\n  .notes .description {\n    text-align: left;\n    margin-top: 2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9KOlxcQW5ndWxhclxcbWFnaWMtbm90ZXMvc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0FGO0FERUU7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0FDQUo7QURHRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDREo7QURNRTtFQUNFLGtCQUFBO0FDSEo7QURLSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0hOO0FETUk7O0VBRUUsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0pOO0FET0k7RUFDRSxZQUFBO0FDTE47QURRSTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ05OO0FEUU07RUFFRSxXQUFBO0VBQ0EsbUJBQUE7QUNQUjtBRFNRO0VBQ0UsbUJBQUE7QUNQVjtBRFdNO0VBRUUsWUFBQTtFQUNBLG1CQUFBO0FDVlI7QURZUTtFQUNFLG1CQUFBO0FDVlY7QURpQkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ2RGO0FEZ0JFO0VBQ0UsZUFBQTtBQ2RKO0FEaUJFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNmSjtBRGlCSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ2ZOO0FEa0JJO0VBQ0UsZ0JBQUE7QUNoQk47QURtQkk7RUFDRSxPQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDakJOO0FEbUJNO0VBQ0UsZ0JBQUE7QUNqQlI7QURtQlE7RUFDRSxlQUFBO0FDakJWO0FEcUJNO0VBRUUsbUJBQUE7QUNwQlI7QUR1Qk07RUFFRSxtQkFBQTtBQ3RCUjtBRHlCTTtFQUVFLG1CQUFBO0FDeEJSO0FEOEJBO0VBQ0U7SUFDRSxrQkFBQTtFQzNCRjtFRDZCRTtJQUNFLFlBQUE7RUMzQko7RUQ4QkU7SUFDRSxnQkFBQTtJQUNBLGdCQUFBO0VDNUJKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBHbG9iYWwgY2xhc3Nlc1xyXG4uYnRuIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMTJweCAxNXB4IDE1cHggMTVweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCAjYzFjMWMxO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggN3B4ICNjMWMxYzE7XHJcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTZweDtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgLm1haW4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIC5oZWFkaW5nIHtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgfVxyXG5cclxuICAgIHRleHRhcmVhLFxyXG4gICAgaW5wdXQge1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4ICNjMWMxYzE7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgaGVpZ2h0OiAxNGVtO1xyXG4gICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICBtYXJnaW46IDAgMCAxcmVtIDA7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbnMge1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICBwYWRkaW5nOiAwIDUlO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAgIC5hZGQtYnRuIHtcclxuICAgICAgICBAZXh0ZW5kIC5idG47XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzVlNzJlNDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDA1N2RhO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmRlbGV0ZS1idG4ge1xyXG4gICAgICAgIEBleHRlbmQgLmJ0bjtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1MzY1YztcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjYzUwMDI3O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm5vdGVzIHtcclxuICBtYXJnaW46IDFyZW0gNSU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gIC5kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG5cclxuICAubm90ZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4ICNjMWMxYzE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBtYXJnaW46IDAuOHJlbTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB3aWR0aDogMThyZW07XHJcbiAgICBoZWlnaHQ6IDEycmVtO1xyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hY3Rpb25zIHtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgIG1hcmdpbjogMXJlbSAxcmVtIDFyZW0gLjdyZW07XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgLmFjdGlvbi1idG4ge1xyXG4gICAgICAgIG1hcmdpbjogMCAuNXJlbTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAudmlldy1idG4ge1xyXG4gICAgICAgIEBleHRlbmQgLmJ0biwgLmFjdGlvbi1idG47XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzVlNzJlNDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmVkaXQtYnRuIHtcclxuICAgICAgICBAZXh0ZW5kIC5idG4sIC5hY3Rpb24tYnRuO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM1ZTcyZTQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kZWxldGUtYnRuIHtcclxuICAgICAgICBAZXh0ZW5kIC5idG4sIC5hY3Rpb24tYnRuO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM1ZTcyZTQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5ub3RlcyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgLm5vdGUge1xyXG4gICAgICB3aWR0aDogMTJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmJ0biwgLm5vdGVzIC5ub3RlIC5hY3Rpb25zIC5kZWxldGUtYnRuLCAubm90ZXMgLm5vdGUgLmFjdGlvbnMgLmVkaXQtYnRuLCAubm90ZXMgLm5vdGUgLmFjdGlvbnMgLnZpZXctYnRuLCAuY29udGFpbmVyIC5tYWluIC5idXR0b25zIC5kZWxldGUtYnRuLCAuY29udGFpbmVyIC5tYWluIC5idXR0b25zIC5hZGQtYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDEycHggMTVweCAxNXB4IDE1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4ICNjMWMxYzE7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJ0bjpob3ZlciwgLm5vdGVzIC5ub3RlIC5hY3Rpb25zIC5kZWxldGUtYnRuOmhvdmVyLCAubm90ZXMgLm5vdGUgLmFjdGlvbnMgLmVkaXQtYnRuOmhvdmVyLCAubm90ZXMgLm5vdGUgLmFjdGlvbnMgLnZpZXctYnRuOmhvdmVyLCAuY29udGFpbmVyIC5tYWluIC5idXR0b25zIC5kZWxldGUtYnRuOmhvdmVyLCAuY29udGFpbmVyIC5tYWluIC5idXR0b25zIC5hZGQtYnRuOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCA0cHggN3B4ICNjMWMxYzE7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG59XG4uYnRuIGltZywgLm5vdGVzIC5ub3RlIC5hY3Rpb25zIC5kZWxldGUtYnRuIGltZywgLm5vdGVzIC5ub3RlIC5hY3Rpb25zIC5lZGl0LWJ0biBpbWcsIC5ub3RlcyAubm90ZSAuYWN0aW9ucyAudmlldy1idG4gaW1nLCAuY29udGFpbmVyIC5tYWluIC5idXR0b25zIC5kZWxldGUtYnRuIGltZywgLmNvbnRhaW5lciAubWFpbiAuYnV0dG9ucyAuYWRkLWJ0biBpbWcge1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogLTZweDtcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XG59XG5cbi5jb250YWluZXIgLm1haW4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5tYWluIC5oZWFkaW5nIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuLmNvbnRhaW5lciAubWFpbiB0ZXh0YXJlYSxcbi5jb250YWluZXIgLm1haW4gaW5wdXQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogOTAlO1xuICByZXNpemU6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4ICNjMWMxYzE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgaGVpZ2h0OiAxNGVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW46IDAgMCAxcmVtIDA7XG59XG4uY29udGFpbmVyIC5tYWluIGlucHV0IHtcbiAgaGVpZ2h0OiAxcmVtO1xufVxuLmNvbnRhaW5lciAubWFpbiAuYnV0dG9ucyB7XG4gIHdpZHRoOiA5MCU7XG4gIHBhZGRpbmc6IDAgNSU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNvbnRhaW5lciAubWFpbiAuYnV0dG9ucyAuYWRkLWJ0biB7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiAjNWU3MmU0O1xufVxuLmNvbnRhaW5lciAubWFpbiAuYnV0dG9ucyAuYWRkLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM0MDU3ZGE7XG59XG4uY29udGFpbmVyIC5tYWluIC5idXR0b25zIC5kZWxldGUtYnRuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kOiAjZjUzNjVjO1xufVxuLmNvbnRhaW5lciAubWFpbiAuYnV0dG9ucyAuZGVsZXRlLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNjNTAwMjc7XG59XG5cbi5ub3RlcyB7XG4gIG1hcmdpbjogMXJlbSA1JTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLm5vdGVzIC5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5ub3RlcyAubm90ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggI2MxYzFjMTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW46IDAuOHJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgd2lkdGg6IDE4cmVtO1xuICBoZWlnaHQ6IDEycmVtO1xufVxuLm5vdGVzIC5ub3RlIC50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG59XG4ubm90ZXMgLm5vdGUgLmNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuLm5vdGVzIC5ub3RlIC5hY3Rpb25zIHtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMXJlbSAxcmVtIDFyZW0gMC43cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5ub3RlcyAubm90ZSAuYWN0aW9ucyAuYWN0aW9uLWJ0biwgLm5vdGVzIC5ub3RlIC5hY3Rpb25zIC5kZWxldGUtYnRuLCAubm90ZXMgLm5vdGUgLmFjdGlvbnMgLmVkaXQtYnRuLCAubm90ZXMgLm5vdGUgLmFjdGlvbnMgLnZpZXctYnRuIHtcbiAgbWFyZ2luOiAwIDAuNXJlbTtcbn1cbi5ub3RlcyAubm90ZSAuYWN0aW9ucyAuYWN0aW9uLWJ0bjpob3ZlciwgLm5vdGVzIC5ub3RlIC5hY3Rpb25zIC5kZWxldGUtYnRuOmhvdmVyLCAubm90ZXMgLm5vdGUgLmFjdGlvbnMgLmVkaXQtYnRuOmhvdmVyLCAubm90ZXMgLm5vdGUgLmFjdGlvbnMgLnZpZXctYnRuOmhvdmVyIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLm5vdGVzIC5ub3RlIC5hY3Rpb25zIC52aWV3LWJ0biB7XG4gIGJhY2tncm91bmQ6ICM1ZTcyZTQ7XG59XG4ubm90ZXMgLm5vdGUgLmFjdGlvbnMgLmVkaXQtYnRuIHtcbiAgYmFja2dyb3VuZDogIzVlNzJlNDtcbn1cbi5ub3RlcyAubm90ZSAuYWN0aW9ucyAuZGVsZXRlLWJ0biB7XG4gIGJhY2tncm91bmQ6ICM1ZTcyZTQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubm90ZXMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAubm90ZXMgLm5vdGUge1xuICAgIHdpZHRoOiAxMnJlbTtcbiAgfVxuICAubm90ZXMgLmRlc2NyaXB0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    addNote(title, content) {
        if (title && content) {
            const lastNote = this.notes[this.notes.length - 1];
            let lastId;
            if (lastNote == undefined) {
                lastId = 1;
            }
            else {
                lastId = lastNote.id + 1;
            }
            // console.log(typeof this.notes);
            this.notes.push({ id: lastId, title: title, content: content });
            localStorage.setItem("notes", JSON.stringify(this.notes));
            console.log(this.notes);
        }
    }
    deleteAllNotes() {
        localStorage.clear();
        localStorage.setItem("notes", JSON.stringify([]));
        this.notes = JSON.parse(localStorage.getItem("notes"));
    }
    delete(_id) {
        this.notes.forEach(note => (this.notes.pop(_id) ? _id == note.id : true));
        localStorage.setItem("notes", JSON.stringify(this.notes));
    }
    ngOnInit() {
        this.notes = JSON.parse(localStorage.getItem("notes"));
        console.log(this.notes);
        if (this.notes == null) {
            localStorage.setItem("notes", JSON.stringify([]));
            this.notes = JSON.parse(localStorage.getItem("notes"));
        }
        this.notes.forEach((note) => {
            if (note.title.endsWith("...") == false) {
                note.title = `${note.title.slice(0, 25)}...`;
            }
            if (note.content.endsWith("...") == false) {
                note.content = `${note.content.slice(0, 150)}...`;
            }
        });
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! J:\Angular\magic-notes\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map