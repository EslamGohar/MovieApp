"use strict";
exports.__esModule = true;
exports.mapMovieToItem = void 0;
exports.mapMovieToItem = function (movie) {
    return {
        id: movie.id,
        title: movie.title,
        name: movie.name,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average,
        backdrop_path: movie.backdrop_path,
        vote_count: movie.vote_count,
        release_date: movie.release_date,
        overview: movie.overview,
        first_air_date: movie.release_date
        // routePath: '/movie/' + movie.id
    };
};
