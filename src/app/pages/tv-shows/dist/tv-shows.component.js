"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TvShowsComponent = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var TvShowsComponent = /** @class */ (function () {
    function TvShowsComponent(tvshowsService, route) {
        this.tvshowsService = tvshowsService;
        this.route = route;
        this.tvShows = [];
        this.genreId = null;
        this.searchValue = null;
    }
    TvShowsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.pipe(operators_1.take(1)).subscribe(function (_a) {
            var genreId = _a.genreId;
            if (genreId) {
                _this.genreId = genreId;
                _this.getTvshowsByGenre(genreId, 1);
            }
            else {
                _this.getPagedTvshows(1);
            }
        });
    };
    TvShowsComponent.prototype.getPagedTvshows = function (page, searchKeyword) {
        var _this = this;
        this.tvshowsService.searchTvShows(page, searchKeyword).subscribe(function (tvshowsData) {
            _this.tvShows = tvshowsData;
        });
    };
    TvShowsComponent.prototype.getTvshowsByGenre = function (genreId, page) {
        var _this = this;
        this.tvshowsService.getTvShowsByGenre(genreId, page).subscribe(function (tvshowsData) {
            _this.tvShows = tvshowsData;
        });
    };
    TvShowsComponent.prototype.paginate = function (event) {
        var pageNumber = event.page + 1;
        if (this.genreId) {
            this.getTvshowsByGenre(this.genreId, pageNumber);
        }
        else {
            if (this.searchValue) {
                // to show the search results in all pages.
                this.getPagedTvshows(pageNumber, this.searchValue);
            }
            else {
                this.getPagedTvshows(pageNumber);
            }
        }
    };
    TvShowsComponent.prototype.searchChanged = function () {
        if (this.searchValue) {
            this.getPagedTvshows(1, this.searchValue);
        }
    };
    TvShowsComponent = __decorate([
        core_1.Component({
            selector: 'app-tv-shows',
            templateUrl: './tv-shows.component.html',
            styleUrls: ['./tv-shows.component.scss']
        })
    ], TvShowsComponent);
    return TvShowsComponent;
}());
exports.TvShowsComponent = TvShowsComponent;
