webpackJsonp([0],{

/***/ 104:
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
webpackEmptyAsyncContext.id = 104;

/***/ }),

/***/ 145:
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
webpackEmptyAsyncContext.id = 145;

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navController) {
        this.navController = navController;
        this.appName = 'Ionic App';
        this.elements = [
            { title: 'aaa', type: "check" },
            { title: 'bbb', type: "check" },
            { title: 'ccc', type: "check" },
            { title: 'aaa2', type: "check2" },
            { title: 'bbb2', type: "check2" },
            { title: 'ccc2', type: "check2" },
            { title: 'ddd', type: "other" },
            { title: 'eee', type: "other" },
            { title: 'fff', type: "other" },
        ];
    }
    HomePage.prototype.reorderItems = function (indexes) {
        this.elements = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* reorderArray */])(this.elements, indexes);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/sergio/work/exps/ionic/IonicBugNestedComponent/src/app/home.page.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ appName }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-icon name="ionic"></ion-icon> <b>Ionic 2 app</b>\n  <ion-list>\n    <ion-item-group reorder="true" (ionItemReorder)="reorderItems($event)">\n      <ion-item-sliding *ngFor="let item of elements" >\n        <ion-item *ngIf="item.type === \'other\'">\n          <simple-comp [item]="item"></simple-comp>\n        </ion-item>\n\n        <ion-item *ngIf="item.type === \'check\'">\n            <!-- <ion-label>{{item.title}}</ion-label> -->\n            <!-- <ion-checkbox ></ion-checkbox> -->\n            <check-comp [item]="item"></check-comp>\n\n        </ion-item>\n        <ion-item *ngIf="item.type === \'check2\'">\n            <check2-comp [item]="item"></check2-comp>\n        </ion-item>\n      </ion-item-sliding>\n    </ion-item-group>\n  </ion-list>\n  End of list\n</ion-content>\n'/*ion-inline-end:"/Users/sergio/work/exps/ionic/IonicBugNestedComponent/src/app/home.page.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.page.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(206);


var platform = Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])();
platform.bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_page__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__simple_comp__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__check_comp__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__check2_comp__ = __webpack_require__(250);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { FlexLayoutModule } from "@angular/flex-layout";





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]),
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_4__home_page__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_5__simple_comp__["a" /* SimpleComp */], __WEBPACK_IMPORTED_MODULE_6__check_comp__["a" /* CheckComp */], __WEBPACK_IMPORTED_MODULE_7__check2_comp__["a" /* Check2Comp */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_4__home_page__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_5__simple_comp__["a" /* SimpleComp */], __WEBPACK_IMPORTED_MODULE_6__check_comp__["a" /* CheckComp */], __WEBPACK_IMPORTED_MODULE_7__check2_comp__["a" /* Check2Comp */]],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]]
    })
], AppModule);

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_page__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_1__home_page__["a" /* HomePage */];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "<ion-nav [root]=\"rootPage\"></ion-nav>"
    })
], AppComponent);

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleComp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SimpleComp = (function () {
    function SimpleComp() {
        console.log("simple component task constructor..");
    }
    SimpleComp.prototype.ionViewDidLoad = function () {
        console.log("IonViewDidLoad.");
    };
    return SimpleComp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], SimpleComp.prototype, "item", void 0);
SimpleComp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'simple-comp',template:/*ion-inline-start:"/Users/sergio/work/exps/ionic/IonicBugNestedComponent/src/app/simple-comp.html"*/'e: {{item.title}}\n'/*ion-inline-end:"/Users/sergio/work/exps/ionic/IonicBugNestedComponent/src/app/simple-comp.html"*/,
    }),
    __metadata("design:paramtypes", [])
], SimpleComp);

//# sourceMappingURL=simple-comp.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckComp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckComp = (function () {
    function CheckComp() {
        console.log("check component task constructor..");
    }
    CheckComp.prototype.ionViewDidLoad = function () {
        console.log("IonViewDidLoad.");
    };
    return CheckComp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], CheckComp.prototype, "item", void 0);
CheckComp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'check-comp',template:/*ion-inline-start:"/Users/sergio/work/exps/ionic/IonicBugNestedComponent/src/app/check-comp.html"*/'<ion-item>\n  <ion-checkbox ></ion-checkbox>\n  <ion-label>{{item.title}}</ion-label>\n</ion-item>\n'/*ion-inline-end:"/Users/sergio/work/exps/ionic/IonicBugNestedComponent/src/app/check-comp.html"*/,
    }),
    __metadata("design:paramtypes", [])
], CheckComp);

//# sourceMappingURL=check-comp.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Check2Comp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Check2Comp = (function () {
    function Check2Comp() {
        console.log("check component task constructor..");
    }
    Check2Comp.prototype.ionViewDidLoad = function () {
        console.log("IonViewDidLoad.");
    };
    return Check2Comp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], Check2Comp.prototype, "item", void 0);
Check2Comp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'check2-comp',template:/*ion-inline-start:"/Users/sergio/work/exps/ionic/IonicBugNestedComponent/src/app/check2-comp.html"*/'  <ion-checkbox ></ion-checkbox>\n  <ion-label>{{item.title}}</ion-label>\n'/*ion-inline-end:"/Users/sergio/work/exps/ionic/IonicBugNestedComponent/src/app/check2-comp.html"*/,
    }),
    __metadata("design:paramtypes", [])
], Check2Comp);

//# sourceMappingURL=check2-comp.js.map

/***/ })

},[186]);
//# sourceMappingURL=main.js.map