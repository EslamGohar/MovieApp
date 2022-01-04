"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MovieDetailsComponent = void 0;
var core_1 = require("@angular/core");
var images_sizes_1 = require("../../constants/images-sizes");
var operators_1 = require("rxjs/operators");
var MovieDetailsComponent = /** @class */ (function () {
    function MovieDetailsComponent(route, movieService) {
        this.route = route;
        this.movieService = movieService;
        this.movie = null;
        this.movieVideos = [];
        this.similarMovies = [];
        this.movieImages = null;
        this.movieCredits = null;
        this.imageSizes = images_sizes_1.IMAGES_SIZES;
    }
    MovieDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.pipe(operators_1.first()).subscribe(function (_a) {
            var id = _a.id;
            _this.getMovieDetails(id);
            _this.getMovieVideos(id);
            _this.getMovieImages(id);
            _this.getMovieCredits(id);
            _this.getSimilarMovies(id);
        });
    };
    MovieDetailsComponent.prototype.ngOnDestroy = function () {
        console.log('component destroyed');
    };
    MovieDetailsComponent.prototype.getMovieDetails = function (id) {
        var _this = this;
        this.movieService.getMovieDetails(id).subscribe(function (movieData) {
            _this.movie = movieData;
        });
    };
    MovieDetailsComponent.prototype.getMovieVideos = function (id) {
        var _this = this;
        this.movieService.getMovieVideos(id).subscribe(function (movieVideoData) {
            _this.movieVideos = movieVideoData;
        });
    };
    MovieDetailsComponent.prototype.getMovieImages = function (id) {
        var _this = this;
        this.movieService.getMovieImages(id).subscribe(function (movieImage) {
            _this.movieImages = movieImage;
        });
    };
    MovieDetailsComponent.prototype.getMovieCredits = function (id) {
        var _this = this;
        this.movieService.getMovieCredits(id).subscribe(function (credits) {
            _this.movieCredits = credits;
        });
    };
    MovieDetailsComponent.prototype.getSimilarMovies = function (id) {
        var _this = this;
        this.movieService.getSimilarMovies(id).subscribe(function (similarData) {
            _this.similarMovies = similarData;
        });
    };
    MovieDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-movie-details',
            templateUrl: './movie-details.component.html',
            styleUrls: ['./movie-details.component.scss']
        })
    ], MovieDetailsComponent);
    return MovieDetailsComponent;
}());
exports.MovieDetailsComponent = MovieDetailsComponent;
