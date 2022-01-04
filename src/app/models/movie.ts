import { Item } from '../components/item/item';

export interface Movie {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	name: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
	revenue: number;
	runtime: number;
	status: string;
	genres: Genre[];
	first_air_date: string;
}

export interface MovieDto {
	page: number;
	results: Movie[];
	total_pages: number;
	total_results: number;
}

export interface Genre {
	id: number;
	name: string;
}

export interface MovieVideoDto {
	id: number;
	results: MovieVideo[];
}

export interface MovieVideo {
	key: string;
	site: string;
}

export interface MovieImages {
	backdrops: {
		file_path: string;
	}[];
}

export interface MovieCredits {
	cast: {
		name: string;
		profile_path: string;
	}[];
}

export const mapMovieToItem = (movie: Movie): Item => {
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
