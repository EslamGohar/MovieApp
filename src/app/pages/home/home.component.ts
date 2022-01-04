import { Component, OnInit } from '@angular/core';
import { mapTvShowToItem } from '../../models/tvshow';
import { mapMovieToItem } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';
import { TvshowsService } from '../../services/tvshows.service';
import { Item } from '../../components/item/item';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	popularMovies: Item[] = [];
	topRatedMovies: Item[] = [];
	upcomingMovies: Item[] = [];
	popularTvShows: Item[] = [];

	constructor(private moviesService: MoviesService, private tvShowsService: TvshowsService) {}

	ngOnInit(): void {
		this.moviesService.getMovies('popular').subscribe((movies) => {
			this.popularMovies = movies.map((movie) => mapMovieToItem(movie)); // response.results
		});

		this.moviesService.getMovies('top_rated').subscribe((movies) => {
			this.topRatedMovies = movies.map((movie) => mapMovieToItem(movie));
		});

		this.moviesService.getMovies('upcoming').subscribe((movies) => {
			this.upcomingMovies = movies.map((movie) => mapMovieToItem(movie));
		});

		this.tvShowsService.getTvShows('popular').subscribe((tvshows) => {
			this.popularTvShows = tvshows.map((tvshow) => mapTvShowToItem(tvshow));
		});
	}
}
