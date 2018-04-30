webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-wrapper\">\n    <div class=\"tab left\">\n        <div class=\"inside\">\n            <app-general-info></app-general-info>\n        </div>\n    </div>\n    <div class=\"tab middle\">\n        <div class=\"inside\">\n            <app-basic-info></app-basic-info>\n        </div>\n    </div>\n    <div class=\"tab right\">\n        <div class=\"inside\">\n            <app-showoff-info></app-showoff-info>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/***/ (function(module, exports) {

module.exports = ".tab-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  background: #fff;\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto;\n  width: 100%; }\n  .tab-wrapper .tab {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 calc(100%/3);\n            flex: 0 0 calc(100%/3);\n    background: #F7F7F7; }\n  .tab-wrapper .tab .inside {\n      margin: 50px 30px 0 30px;\n      -webkit-box-sizing: content-box;\n              box-sizing: content-box; }\n  .tab-wrapper .tab .inside .title {\n        text-transform: uppercase;\n        padding-bottom: 10px; }\n  .tab-wrapper .tab .inside .title:before {\n          content: '_';\n          color: #f73b56; }\n  .tab-wrapper .tab .inside .summary {\n        color: #959393;\n        padding-bottom: 10px; }\n  .tab-wrapper .tab .inside .list {\n        list-style-type: none;\n        margin: auto;\n        padding-top: 20px; }\n  .tab-wrapper .tab .inside .list .list-item {\n          padding-bottom: 10px; }\n  .tab-wrapper .tab .inside .list .list-item .key {\n            text-transform: uppercase;\n            font-weight: bold; }\n  .tab-wrapper .tab .inside .list .list-item .key:after {\n              content: ':'; }\n  .tab-wrapper .tab .inside .list .list-item .value {\n            margin-left: 10px; }\n  .tab-wrapper .tab .inside .list .showoff {\n          padding-bottom: 30px;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row; }\n  .tab-wrapper .tab .inside .list .showoff .showoff-icon {\n            color: #959393; }\n  .tab-wrapper .tab .inside .list .showoff .showoff-wrapper {\n            padding-left: 20px; }\n  .tab-wrapper .tab .inside .list .showoff .showoff-wrapper .showoff-title {\n              font-weight: bold; }\n  .tab-wrapper .tab.middle {\n      background: #EFEFEF; }\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/academics/academics.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/academics/academics.component.scss":
/***/ (function(module, exports) {

module.exports = "#wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  background: #fff;\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto;\n  width: 100%; }\n  #wrapper .tab {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33%;\n            flex: 0 0 33%;\n    background: #F7F7F7; }\n"

/***/ }),

/***/ "./src/app/academics/academics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcademicsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AcademicsComponent = /** @class */ (function () {
    function AcademicsComponent() {
    }
    AcademicsComponent.prototype.ngOnInit = function () {
    };
    AcademicsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-academics',
            template: __webpack_require__("./src/app/academics/academics.component.html"),
            styles: [__webpack_require__("./src/app/academics/academics.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AcademicsComponent);
    return AcademicsComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <app-header></app-header>\n  <app-menu></app-menu>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "#wrapper {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  #wrapper app-header, #wrapper app-menu {\n    width: 100%; }\n  #wrapper app-header {\n    position: relative;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 200px;\n            flex: 0 0 200px; }\n  #wrapper app-header:after {\n      content: '';\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      top: 0;\n      left: 0;\n      background-image: url(/assets/imgs/cover.jpg) !important;\n      background-position: center;\n      background-size: cover;\n      -webkit-filter: contrast(75%);\n              filter: contrast(75%);\n      z-index: -1; }\n  #wrapper app-menu {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 75px;\n            flex: 0 0 75px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    background: #fff; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(translate) {
        this.title = 'app';
        translate.setDefaultLang('en');
        translate.use('en');
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__("./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__menu_menu_component__ = __webpack_require__("./src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__academics_academics_component__ = __webpack_require__("./src/app/academics/academics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http);
}
var appRoutes = [
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */] },
    { path: 'academics', component: __WEBPACK_IMPORTED_MODULE_10__academics_academics_component__["a" /* AcademicsComponent */] },
    { path: '',
        redirectTo: '/about',
        pathMatch: 'full'
    },
    { path: '**',
        redirectTo: '/about'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_10__academics_academics_component__["a" /* AcademicsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"info\">\n  <h1 id=\"name\">Daniil Tete<p>r</p>evkov</h1>\n  <h2 id=\"occupation\">{{ 'header.occupation' | translate}}</h2>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = "#info {\n  padding: 20px 0 0 20px;\n  color: white;\n  font-family: 'Montserrat', sans-serif; }\n  #info #name {\n    text-transform: uppercase;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex; }\n  #info #name > p {\n      -webkit-transition: 0.3s all;\n      transition: 0.3s all; }\n  #info #name:hover > p {\n      -webkit-transform: rotateY(180deg);\n              transform: rotateY(180deg); }\n  #info #occupation {\n    text-transform: capitalize; }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li\n    [ngClass]=\"{'item-picture': item.name === 'picture', 'item-option': item.name !== 'picture'}\"\n    *ngFor=\"let item of items\"\n  >\n\n    <div id=\"picture-wrapper\" *ngIf=\"item.name==='picture'; else options\">\n        <div id=\"picture\">\n            <img src=\"assets/imgs/user.png\" alt=\"\">\n        </div>\n    </div>\n\n    <ng-template #options >\n        <button routerLink=\"{{item.url}}\" routerLinkActive=\"active\" class=\"item-button\">\n          <span class=\"item-name\">{{item.name | translate}}</span>\n          <i class=\"item-icon fas {{item.icon}}\"></i>\n        </button>\n    </ng-template>\n\n  </li>\n</ul>\n\n<!-- <div *ngIf=\"show; else elseBlock\">Text to show</div>\n<ng-template #elseBlock>Alternate text while primary text is hidden</ng-template> -->"

/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/***/ (function(module, exports) {

module.exports = "ul {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  list-style-type: none; }\n  ul li {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n  ul li.item-picture {\n      -webkit-box-flex: 3;\n          -ms-flex-positive: 3;\n              flex-grow: 3; }\n  ul li.item-picture #picture-wrapper {\n        position: absolute;\n        width: 150px;\n        border: 5px solid #fff;\n        overflow: hidden;\n        border-radius: 50%; }\n  ul li.item-picture #picture-wrapper #picture {\n          width: 100%; }\n  ul li.item-picture #picture-wrapper #picture img {\n            width: 100%;\n            height: auto; }\n  ul li.item-option .item-button {\n      width: 100%;\n      height: 100%;\n      background: transparent;\n      border: none;\n      outline: none;\n      -webkit-transition: 0.4s all;\n      transition: 0.4s all; }\n  ul li.item-option .item-button .item-name {\n        font-family: 'Montserrat', sans-serif;\n        text-transform: uppercase;\n        font-size: 0.9em; }\n  ul li.item-option .item-button .item-icon {\n        color: #f73b56;\n        padding-left: 5px; }\n  ul li.item-option .item-button:hover {\n        cursor: pointer;\n        background: #f73b56; }\n  ul li.item-option .item-button:hover .item-icon, ul li.item-option .item-button:hover .item-name {\n          color: #fff; }\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.items = [];
        this.items = [
            {
                name: 'menu.home',
                icon: 'fa-home'
            },
            {
                name: 'menu.about',
                icon: 'fa-user',
                url: '/about'
            },
            {
                name: 'menu.academics',
                icon: 'fa-graduation-cap',
                url: '/academics'
            },
            {
                name: 'picture'
            },
            {
                name: 'menu.experience',
                icon: 'fa-flask'
            },
            {
                name: 'menu.blog',
                icon: 'fa-blog'
            },
            {
                name: 'menu.contact',
                icon: 'fa-envelope'
            }
        ];
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-menu',
            template: __webpack_require__("./src/app/menu/menu.component.html"),
            styles: [__webpack_require__("./src/app/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/basic-info/basic-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tab middle\">\n    <div class=\"inside\">\n        <h1 class=\"title font-title\">{{'about.info.title' | translate}}</h1>\n        <ul class=\"list\">\n            <li class=\"list-item\" *ngFor=\"let i of info\">\n                <span class=\"key font-title\">{{'about.info.keys.'+i | translate}}</span>\n                <span class=\"value font-text\">{{'about.info.values.'+i | translate}}</span>\n            </li>\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/basic-info/basic-info.component.scss":
/***/ (function(module, exports) {

module.exports = ".tab {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 calc(100%/3);\n          flex: 0 0 calc(100%/3);\n  background: #F7F7F7; }\n  .tab .inside {\n    margin: 50px 30px 0 30px;\n    -webkit-box-sizing: content-box;\n            box-sizing: content-box; }\n  .tab .inside .title {\n      text-transform: uppercase;\n      padding-bottom: 10px; }\n  .tab .inside .title:before {\n        content: '_';\n        color: #f73b56; }\n  .tab .inside .summary {\n      color: #959393;\n      padding-bottom: 10px; }\n  .tab .inside .list {\n      list-style-type: none;\n      margin: auto;\n      padding-top: 20px; }\n  .tab .inside .list .list-item {\n        padding-bottom: 10px; }\n  .tab .inside .list .list-item .key {\n          text-transform: uppercase;\n          font-weight: bold; }\n  .tab .inside .list .list-item .key:after {\n            content: ':'; }\n  .tab .inside .list .list-item .value {\n          margin-left: 10px; }\n  .tab .inside .list .showoff {\n        padding-bottom: 30px;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row; }\n  .tab .inside .list .showoff .showoff-icon {\n          color: #959393; }\n  .tab .inside .list .showoff .showoff-wrapper {\n          padding-left: 20px; }\n  .tab .inside .list .showoff .showoff-wrapper .showoff-title {\n            font-weight: bold; }\n  .tab.middle {\n    background: #EFEFEF; }\n"

/***/ }),

/***/ "./src/app/shared/components/basic-info/basic-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BasicInfoComponent = /** @class */ (function () {
    function BasicInfoComponent() {
        this.info = [];
        this.info = ["birthday", "email", "languages"];
    }
    BasicInfoComponent.prototype.ngOnInit = function () {
    };
    BasicInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-basic-info',
            template: __webpack_require__("./src/app/shared/components/basic-info/basic-info.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/basic-info/basic-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicInfoComponent);
    return BasicInfoComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/general-info/general-info.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title font-title\">{{'about.mystory.title' | translate }}</h1>\n<h2 class=\"summary font-title\">{{'about.mystory.summary' | translate }}</h2>\n<p class=\"text font-text\">{{'about.mystory.text' | translate }}</p>\n"

/***/ }),

/***/ "./src/app/shared/components/general-info/general-info.component.scss":
/***/ (function(module, exports) {

module.exports = ".title {\n  text-transform: uppercase;\n  padding-bottom: 10px; }\n  .title:before {\n    content: '_';\n    color: #f73b56; }\n  .summary {\n  color: #959393;\n  padding-bottom: 10px; }\n  .list {\n  list-style-type: none;\n  margin: auto;\n  padding-top: 20px; }\n  .list .list-item {\n    padding-bottom: 10px; }\n  .list .list-item .key {\n      text-transform: uppercase;\n      font-weight: bold; }\n  .list .list-item .key:after {\n        content: ':'; }\n  .list .list-item .value {\n      margin-left: 10px; }\n  .list .showoff {\n    padding-bottom: 30px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n  .list .showoff .showoff-icon {\n      color: #959393; }\n  .list .showoff .showoff-wrapper {\n      padding-left: 20px; }\n  .list .showoff .showoff-wrapper .showoff-title {\n        font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/shared/components/general-info/general-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GeneralInfoComponent = /** @class */ (function () {
    function GeneralInfoComponent() {
    }
    GeneralInfoComponent.prototype.ngOnInit = function () {
    };
    GeneralInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-general-info',
            template: __webpack_require__("./src/app/shared/components/general-info/general-info.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/general-info/general-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GeneralInfoComponent);
    return GeneralInfoComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/showoff-info/showoff-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tab right\">\n    <div class=\"inside\">\n        <h1 class=\"title font-title\">{{'about.knowledge.title' | translate}}</h1>\n        <ul class=\"list\">\n            <li class=\"list-item showoff\" *ngFor=\"let k of knowledge\">\n                <i class=\"showoff-icon {{k.icon}} fa-2x\"></i>\n                <div class=\"showoff-wrapper\">\n                    <p class=\"font-title showoff-title\">{{ k.title | translate }}</p>\n                    <p class=\"font-text showoff-info\">{{ k.info | translate }}</p>\n                </div>\n            </li>\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/showoff-info/showoff-info.component.scss":
/***/ (function(module, exports) {

module.exports = ".tab {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 calc(100%/3);\n          flex: 0 0 calc(100%/3);\n  background: #F7F7F7; }\n  .tab .inside {\n    margin: 50px 30px 0 30px;\n    -webkit-box-sizing: content-box;\n            box-sizing: content-box; }\n  .tab .inside .title {\n      text-transform: uppercase;\n      padding-bottom: 10px; }\n  .tab .inside .title:before {\n        content: '_';\n        color: #f73b56; }\n  .tab .inside .summary {\n      color: #959393;\n      padding-bottom: 10px; }\n  .tab .inside .list {\n      list-style-type: none;\n      margin: auto;\n      padding-top: 20px; }\n  .tab .inside .list .list-item {\n        padding-bottom: 10px; }\n  .tab .inside .list .list-item .key {\n          text-transform: uppercase;\n          font-weight: bold; }\n  .tab .inside .list .list-item .key:after {\n            content: ':'; }\n  .tab .inside .list .list-item .value {\n          margin-left: 10px; }\n  .tab .inside .list .showoff {\n        padding-bottom: 30px;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row; }\n  .tab .inside .list .showoff .showoff-icon {\n          color: #959393; }\n  .tab .inside .list .showoff .showoff-wrapper {\n          padding-left: 20px; }\n  .tab .inside .list .showoff .showoff-wrapper .showoff-title {\n            font-weight: bold; }\n  .tab.middle {\n    background: #EFEFEF; }\n"

/***/ }),

/***/ "./src/app/shared/components/showoff-info/showoff-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowoffInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowoffInfoComponent = /** @class */ (function () {
    function ShowoffInfoComponent() {
        this.knowledge = [];
        this.knowledge = [
            {
                icon: "fal fa-desktop-alt",
                title: "about.knowledge.web.title",
                info: "about.knowledge.web.info"
            },
            {
                icon: "fal fa-server",
                title: "about.knowledge.server.title",
                info: "about.knowledge.server.info"
            },
            {
                icon: "fal fa-mobile-alt",
                title: "about.knowledge.phone.title",
                info: "about.knowledge.phone.info"
            },
            {
                icon: "fal fa-comments",
                title: "about.knowledge.team.title",
                info: "about.knowledge.team.info"
            }
        ];
    }
    ShowoffInfoComponent.prototype.ngOnInit = function () {
    };
    ShowoffInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-showoff-info',
            template: __webpack_require__("./src/app/shared/components/showoff-info/showoff-info.component.html"),
            styles: [__webpack_require__("./src/app/shared/components/showoff-info/showoff-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ShowoffInfoComponent);
    return ShowoffInfoComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_showoff_info_showoff_info_component__ = __webpack_require__("./src/app/shared/components/showoff-info/showoff-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_general_info_general_info_component__ = __webpack_require__("./src/app/shared/components/general-info/general-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_basic_info_basic_info_component__ = __webpack_require__("./src/app/shared/components/basic-info/basic-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_2__components_showoff_info_showoff_info_component__["a" /* ShowoffInfoComponent */],
    __WEBPACK_IMPORTED_MODULE_3__components_general_info_general_info_component__["a" /* GeneralInfoComponent */],
    __WEBPACK_IMPORTED_MODULE_4__components_basic_info_basic_info_component__["a" /* BasicInfoComponent */]
];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */]
            ],
            declarations: COMPONENTS.slice(),
            exports: COMPONENTS.slice()
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map