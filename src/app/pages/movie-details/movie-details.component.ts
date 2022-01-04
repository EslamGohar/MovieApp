import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, MovieVideo, MovieImages, MovieCredits } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { first } from 'rxjs/operators';

@Component({
	selector: 'app-movie-details',
	templateUrl: './movie-details.component.html',
	styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
	movie: Movie | null = null;
	movieVideos: MovieVideo[] = [];
	similarMovies: Movie[] = [];
	movieImages: MovieImages | null = null;
	movieCredits: MovieCredits | null = null;

	imageSizes = IMAGES_SIZES;

	constructor(private route: ActivatedRoute, private movieService: MoviesService) {}

	ngOnInit(): void {
		this.route.params.pipe(first()).subscribe(({ id }) => {
			this.getMovieDetails(id);
			this.getMovieVideos(id);
			this.getMovieImages(id);
			this.getMovieCredits(id);
			this.getSimilarMovies(id);
		});
	}

	ngOnDestroy(): void {
		console.log('component destroyed');
	}

	getMovieDetails(id: string) {
		this.movieService.getMovieDetails(id).subscribe((movieData) => {
			this.movie = movieData;
		});
	}

	getMovieVideos(id: string) {
		this.movieService.getMovieVideos(id).subscribe((movieVideoData) => {
			this.movieVideos = movieVideoData;
		});
	}

	getMovieImages(id: string) {
		this.movieService.getMovieImages(id).subscribe((movieImage) => {
			this.movieImages = movieImage;
		});
	}

	getMovieCredits(id: string) {
		this.movieService.getMovieCredits(id).subscribe((credits) => {
			this.movieCredits = credits;
		});
	}

	getSimilarMovies(id: string) {
		this.movieService.getSimilarMovies(id).subscribe((similarData) => {
			this.similarMovies = similarData;
		});
	}
}
