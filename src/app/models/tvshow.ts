import { Item } from '../components/item/item';
import { Movie, MovieDto } from './movie';

export interface Tv extends Movie {
	name: string;
	number_of_episodes: number;
	number_of_seasons: number;
	first_air_date: string;
}

export interface TvDto extends MovieDto {
	results: Tv[];
}

export interface Genre {
	id: number;
	name: string;
}

export interface TvShowVideoDto {
	id: number;
	results: TvShowVideo[];
}

export interface TvShowVideo {
	key: string;
	site: string;
}

export interface TvShowImages {
	backdrops: {
		file_path: string;
	}[];
}

export interface TvShowCredits {
	cast: {
		name: string;
		profile_path: string;
	}[];
}

export const mapTvShowToItem = (tvShow: Tv): Item => {
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
