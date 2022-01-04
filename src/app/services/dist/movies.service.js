"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MoviesService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var MoviesService = /** @class */ (function () {
    function MoviesService(http) {
        this.http = http;
        this.baseUrl = 'https://api.themoviedb.org/3';
        this.apiKey = 'fca520cb20f7d9b9d32258543f120954';
    }
    MoviesService.prototype.getMovies = function (type, count) {
        if (type === void 0) { type = 'upcoming'; }
        if (count === void 0) { count = 12; }
        return this.http.get(this.baseUrl + "/movie/" + type + "?api_key=" + this.apiKey).pipe(operators_1.switchMap(function (res) {
            return rxjs_1.of(res.results.slice(0, count));
        }));
    };
    MoviesService.prototype.getMovieDetails = function (id) {
        return this.http.get(this.baseUrl + "/movie/" + id + "?api_key=" + this.apiKey);
    };
    MoviesService.prototype.getMovieVideos = function (id) {
        return this.http.get(this.baseUrl + "/movie/" + id + "/videos?api_key=" + this.apiKey).pipe(operators_1.switchMap(function (res) {
            return rxjs_1.of(res.results);
        }));
    };
    MoviesService.prototype.getMovieImages = function (id) {
        return this.http.get(this.baseUrl + "/movie/" + id + "/images?api_key=" + this.apiKey);
    };
    MoviesService.prototype.getMovieCredits = function (id) {
        return this.http.get(this.baseUrl + "/movie/" + id + "/credits?api_key=" + this.apiKey);
    };
    MoviesService.prototype.getSimilarMovies = function (id, count) {
        if (count === void 0) { count = 6; }
        return this.http.get(this.baseUrl + "/movie/" + id + "/similar?api_key=" + this.apiKey).pipe(operators_1.switchMap(function (res) {
            return rxjs_1.of(res.results.slice(0, count));
        }));
    };
    MoviesService.prototype.searchMovies = function (page, searchValue) {
        var uri = searchValue ? '/search/movie' : '/movie/popular';
        return this.http
            .get("" + this.baseUrl + uri + "?page=" + page + "&query=" + searchValue + "&api_key=" + this.apiKey)
            .pipe(operators_1.switchMap(function (res) {
            return rxjs_1.of(res.results);
        }));
    };
    MoviesService.prototype.getMovieGenres = function () {
        return this.http.get(this.baseUrl + "/genre/movie/list?api_key=" + this.apiKey).pipe(operators_1.switchMap(function (res) {
            return rxjs_1.of(res.genres);
        }));
    };
    MoviesService.prototype.getMoviesByGenre = function (genreId, pageNumber) {
        return this.http
            .get(this.baseUrl + "/discover/movie?with_genres=" + genreId + "&page=" + pageNumber + "&api_key=" + this.apiKey)
            .pipe(operators_1.switchMap(function (res) {
            return rxjs_1.of(res.results);
        }));
    };
    MoviesService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], MoviesService);
    return MoviesService;
}());
exports.MoviesService = MoviesService;
// pipe() to filter the data and do something with the data
// switchMap() to change the return data type to anothe type
// of() to cover the data in observable
