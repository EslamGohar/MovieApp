"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var tvshow_1 = require("../../models/tvshow");
var movie_1 = require("../../models/movie");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(moviesService, tvShowsService) {
        this.moviesService = moviesService;
        this.tvShowsService = tvShowsService;
        this.popularMovies = [];
        this.topRatedMovies = [];
        this.upcomingMovies = [];
        this.popularTvShows = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.moviesService.getMovies('popular').subscribe(function (movies) {
            _this.popularMovies = movies.map(function (movie) { return movie_1.mapMovieToItem(movie); }); // response.results
        });
        this.moviesService.getMovies('top_rated').subscribe(function (movies) {
            _this.topRatedMovies = movies.map(function (movie) { return movie_1.mapMovieToItem(movie); });
        });
        this.moviesService.getMovies('upcoming').subscribe(function (movies) {
            _this.upcomingMovies = movies.map(function (movie) { return movie_1.mapMovieToItem(movie); });
        });
        this.tvShowsService.getTvShows('popular').subscribe(function (tvshows) {
            _this.popularTvShows = tvshows.map(function (tvshow) { return tvshow_1.mapTvShowToItem(tvshow); });
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
