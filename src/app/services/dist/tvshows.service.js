"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TvshowsService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var TvshowsService = /** @class */ (function () {
    function TvshowsService(http) {
        this.http = http;
        this.baseUrl = 'https://api.themoviedb.org/3';
        this.apiKey = 'fca520cb20f7d9b9d32258543f120954';
    }
    TvshowsService.prototype.getTvShows = function (type, count) {
        if (type === void 0) { type = 'latest'; }
        if (count === void 0) { count = 12; }
        return this.http.get(this.baseUrl + "/tv/" + type + "?api_key=" + this.apiKey).pipe(operators_1.switchMap(function (res) {
            return rxjs_1.of(res.results.slice(0, count));
        }));
    };
    TvshowsService.prototype.getTvShowDetails = function (id) {
        return this.http.get(this.baseUrl + "/tv/" + id + "?api_key=" + this.apiKey);
    };
    TvshowsService.prototype.getTvShowVideos = function (id) {
        return this.http.get(this.baseUrl + "/tv/" + id + "/videos?api_key=" + this.apiKey).pipe(operators_1.switchMap(function (res) {
            return rxjs_1.of(res.results);
        }));
    };
    TvshowsService.prototype.getTvShowImages = function (id) {
        return this.http.get(this.baseUrl + "/tv/" + id + "/images?api_key=" + this.apiKey);
    };
    TvshowsService.prototype.getTvShowCredits = function (id) {
        return this.http.get(this.baseUrl + "/tv/" + id + "/credits?api_key=" + this.apiKey);
    };
    TvshowsService.prototype.getTvShowSimilar = function (id) {
        return this.http.get(this.baseUrl + "/tv/" + id + "/similar?api_key=" + this.apiKey).pipe(operators_1.switchMap(function (res) {
            return rxjs_1.of(res.results.slice(0, 5));
        }));
    };
    TvshowsService.prototype.searchTvShows = function (page, searchValue) {
        var uri = searchValue ? '/search/tv' : '/tv/popular';
        return this.http.get("" + this.baseUrl + uri + "?page=" + page + "&query=" + searchValue + "&api_key=" + this.apiKey).pipe(operators_1.switchMap(function (res) {
            return rxjs_1.of(res.results);
        }));
    };
    TvshowsService.prototype.getTvShowsGenres = function () {
        return this.http.get(this.baseUrl + "/genre/tv/list?api_key=" + this.apiKey).pipe(operators_1.switchMap(function (res) {
            return rxjs_1.of(res.genres);
        }));
    };
    TvshowsService.prototype.getTvShowsByGenre = function (genreId, pageNumber) {
        return this.http
            .get(this.baseUrl + "/discover/tv?with_genres=" + genreId + "&page=" + pageNumber + "&api_key=" + this.apiKey)
            .pipe(operators_1.switchMap(function (res) {
            return rxjs_1.of(res.results);
        }));
    };
    TvshowsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TvshowsService);
    return TvshowsService;
}());
exports.TvshowsService = TvshowsService;
