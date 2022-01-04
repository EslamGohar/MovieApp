"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TvShowDetailsComponent = void 0;
var core_1 = require("@angular/core");
var images_sizes_1 = require("../../constants/images-sizes");
var TvShowDetailsComponent = /** @class */ (function () {
    function TvShowDetailsComponent(route, tvShowsService) {
        this.route = route;
        this.tvShowsService = tvShowsService;
        this.tvShow = null;
        this.tvShowVideos = [];
        this.tvShowImages = null;
        this.tvShowCredits = null;
        this.similarTvshows = [];
        this.imagesSizes = images_sizes_1.IMAGES_SIZES;
    }
    TvShowDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.pipe().subscribe(function (_a) {
            var id = _a.id;
            _this.getTvShowDetails(id);
            _this.getTvShowVideos(id);
            _this.getTvShowImages(id);
            _this.getTvShowCredits(id);
            _this.getSimilarTvshows(id);
        });
    };
    TvShowDetailsComponent.prototype.ngOnDestroy = function () {
        console.log('component destroyed');
    };
    TvShowDetailsComponent.prototype.getTvShowDetails = function (id) {
        var _this = this;
        this.tvShowsService.getTvShowDetails(id).subscribe(function (tvShowData) {
            _this.tvShow = tvShowData;
        });
    };
    TvShowDetailsComponent.prototype.getTvShowVideos = function (id) {
        var _this = this;
        this.tvShowsService.getTvShowVideos(id).subscribe(function (tvShowVideosData) {
            _this.tvShowVideos = tvShowVideosData;
        });
    };
    TvShowDetailsComponent.prototype.getTvShowImages = function (id) {
        var _this = this;
        this.tvShowsService.getTvShowImages(id).subscribe(function (tvShowImagesData) {
            _this.tvShowImages = tvShowImagesData;
        });
    };
    TvShowDetailsComponent.prototype.getTvShowCredits = function (id) {
        var _this = this;
        this.tvShowsService.getTvShowCredits(id).subscribe(function (tvShowCreditsData) {
            _this.tvShowCredits = tvShowCreditsData;
        });
    };
    TvShowDetailsComponent.prototype.getSimilarTvshows = function (id) {
        var _this = this;
        this.tvShowsService.getTvShowSimilar(id).subscribe(function (similarData) {
            _this.similarTvshows = similarData;
        });
    };
    TvShowDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-tv-show-details',
            templateUrl: './tv-show-details.component.html',
            styleUrls: ['./tv-show-details.component.scss']
        })
    ], TvShowDetailsComponent);
    return TvShowDetailsComponent;
}());
exports.TvShowDetailsComponent = TvShowDetailsComponent;
