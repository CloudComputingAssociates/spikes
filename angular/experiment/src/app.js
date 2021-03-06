"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//our root app component
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
// Annotation section
var App = (function () {
    function App() {
    }
    App = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div style=\"width: 50%; margin: 0 auto;\">     \n      <user-selector></user-selector>\n    </div>\n  ",
        })
    ], App);
    return App;
}());
exports.App = App;
// Annotation section
var UserInformation = (function () {
    function UserInformation(_http) {
        this._http = _http;
        this.url = 'http://dogservice.azurewebsites.net/api/values';
    } //end constructor 
    UserInformation.prototype.onClick = function () {
        var _this = this;
        this._http.get(this.url)
            .subscribe(function (res) {
            _this.servers = res.json();
        });
    };
    UserInformation = __decorate([
        core_1.Component({
            selector: 'user-selector',
            templateUrl: 'user-information-apps.html'
        })
    ], UserInformation);
    return UserInformation;
}());
exports.UserInformation = UserInformation;
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule
            ],
            declarations: [App, UserInformation],
            bootstrap: [App]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.js.map