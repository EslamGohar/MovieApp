"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SliderComponent = void 0;
var animations_1 = require("@angular/animations");
var core_1 = require("@angular/core");
var images_sizes_1 = require("../../constants/images-sizes");
var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
        this.items = [];
        this.isBanner = false;
        this.currentSlideIndex = 0;
        this.imageSizes = images_sizes_1.IMAGES_SIZES;
    }
    SliderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.isBanner) {
            setInterval(function () {
                _this.currentSlideIndex = ++_this.currentSlideIndex % _this.items.length; //21%20=1 | 22%20=2
            }, 4500);
        }
    };
    __decorate([
        core_1.Input()
    ], SliderComponent.prototype, "items");
    __decorate([
        core_1.Input()
    ], SliderComponent.prototype, "isBanner");
    SliderComponent = __decorate([
        core_1.Component({
            selector: 'slider',
            templateUrl: './slider.component.html',
            styleUrls: ['./slider.component.scss'],
            animations: [animations_1.trigger('slideFade', [animations_1.state('void', animations_1.style({ opacity: 0 })), animations_1.transition('void <=> *', [animations_1.animate('1s')])])]
        })
    ], SliderComponent);
    return SliderComponent;
}());
exports.SliderComponent = SliderComponent;
