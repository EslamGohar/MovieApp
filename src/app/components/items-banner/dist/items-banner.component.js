"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ItemsBannerComponent = void 0;
var core_1 = require("@angular/core");
var ItemsBannerComponent = /** @class */ (function () {
    function ItemsBannerComponent() {
        this.items = [];
        this.title = '';
    }
    __decorate([
        core_1.Input()
    ], ItemsBannerComponent.prototype, "items");
    __decorate([
        core_1.Input()
    ], ItemsBannerComponent.prototype, "title");
    ItemsBannerComponent = __decorate([
        core_1.Component({
            selector: 'items-banner',
            templateUrl: './items-banner.component.html',
            styleUrls: ['./items-banner.component.scss']
        })
    ], ItemsBannerComponent);
    return ItemsBannerComponent;
}());
exports.ItemsBannerComponent = ItemsBannerComponent;
