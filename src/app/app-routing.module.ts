import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenresComponent } from './pages/genres/genres.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvShowDetailsComponent } from './pages/tv-show-details/tv-show-details.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'movies',
		component: MoviesComponent
	},
	{
		path: 'movies/genres/:genreId',
		component: MoviesComponent
	},
	{
		path: 'movie/:id',
		component: MovieDetailsComponent
	},
	{
		path: 'tvshows',
		component: TvShowsComponent
	},
	{
		path: 'tvshow/:id',
		component: TvShowDetailsComponent
	},
	{
		path: 'tvshows/genres/:genreId',
		component: TvShowsComponent
	},
	{
		path: 'genres',
		component: GenresComponent
	},
	{
		path: '**',
		redirectTo: ''
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
