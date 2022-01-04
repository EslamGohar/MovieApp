"use strict";
exports.__esModule = true;
exports.mapTvShowToItem = void 0;
exports.mapTvShowToItem = function (tvShow) {
    return {
        id: tvShow.id,
        title: tvShow.name,
        name: tvShow.name,
        poster_path: tvShow.poster_path,
        vote_average: tvShow.vote_average,
        backdrop_path: tvShow.backdrop_path,
        vote_count: tvShow.vote_count,
        release_date: tvShow.release_date,
        overview: tvShow.overview,
        first_air_date: tvShow.first_air_date
        // routePath: '/tvshow/' + tvShow.id
    };
};
