"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var genres_component_1 = require("./pages/genres/genres.component");
var home_component_1 = require("./pages/home/home.component");
var movie_details_component_1 = require("./pages/movie-details/movie-details.component");
var movies_component_1 = require("./pages/movies/movies.component");
var tv_show_details_component_1 = require("./pages/tv-show-details/tv-show-details.component");
var tv_shows_component_1 = require("./pages/tv-shows/tv-shows.component");
var routes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'movies',
        component: movies_component_1.MoviesComponent
    },
    {
        path: 'movies/genres/:genreId',
        component: movies_component_1.MoviesComponent
    },
    {
        path: 'movie/:id',
        component: movie_details_component_1.MovieDetailsComponent
    },
    {
        path: 'tvshows',
        component: tv_shows_component_1.TvShowsComponent
    },
    {
        path: 'tvshow/:id',
        component: tv_show_details_component_1.TvShowDetailsComponent
    },
    {
        path: 'tvshows/genres/:genreId',
        component: tv_shows_component_1.TvShowsComponent
    },
    {
        path: 'genres',
        component: genres_component_1.GenresComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
