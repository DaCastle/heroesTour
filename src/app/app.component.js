"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Dakota\'s Tour of Heroes';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <h1>{{title}}</h1><h4>Check out my current \n  <a href=\"http://dakotacastleberg.netlify.com/\" target=\"_blank\">portfolio</a></h4>\n  <nav>\n  <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n  <a routerLink=\"/heroes\" routerLinkActive=\"active\">Heroes</a>\n  </nav>\n  <router-outlet></router-outlet>\n  ",
        styleUrls: ['app/app.component.css'],
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map