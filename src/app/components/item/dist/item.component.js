"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ItemComponent = void 0;
var core_1 = require("@angular/core");
var images_sizes_1 = require("../../constants/images-sizes");
var ItemComponent = /** @class */ (function () {
    function ItemComponent() {
        this.itemData = null;
        this.imageSizes = images_sizes_1.IMAGES_SIZES;
    }
    ItemComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input()
    ], ItemComponent.prototype, "itemData");
    ItemComponent = __decorate([
        core_1.Component({
            selector: 'item',
            templateUrl: './item.component.html',
            styleUrls: ['./item.component.scss']
        })
    ], ItemComponent);
    return ItemComponent;
}());
exports.ItemComponent = ItemComponent;
