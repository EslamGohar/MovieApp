import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieCredits, MovieDto, MovieImages, MovieVideoDto } from '../models/movie';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class MoviesService {
	baseUrl: string = 'https://api.themoviedb.org/3';
	apiKey: string = 'fca520cb20f7d9b9d32258543f120954';

	constructor(private http: HttpClient) {}

	getMovies(type: string = 'upcoming', count: number = 12) {
		return this.http.get<MovieDto>(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`).pipe(
			switchMap((res) => {
				return of(res.results.slice(0, count));
			})
		);
	}

	getMovieDetails(id: string) {
		return this.http.get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
	}

	getMovieVideos(id: string) {
		return this.http.get<MovieVideoDto>(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`).pipe(
			switchMap((res) => {
				return of(res.results);
			})
		);
	}

	getMovieImages(id: string) {
		return this.http.get<MovieImages>(`${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`);
	}

	getMovieCredits(id: string) {
		return this.http.get<MovieCredits>(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`);
	}

	searchMovies(page: number) {
		return this.http.get<MovieDto>(`${this.baseUrl}/movie/popular?page=${page}&api_key=${this.apiKey}`).pipe(
			switchMap((res) => {
				return of(res.results);
			})
		);
	}

	// getTvs(type: string = 'latest', count: number = 12) {
	//   return this.http.get<TvDto>(`${this.baseUrl}/tv/${type}?api_key=${this.apiKey}`).pipe(
	//     switchMap((res) => {
	//       return of(res.results.slice(0, count));
	//     })
	//   );
	// }
}

// pipe() to filter the data and do something with the data
// switchMap() to change return data type to anothe type
// of() to cover the data in observable
