import { Component, OnInit } from '@angular/core';
import { TvshowsService } from '../../services/tvshows.service';
import { Tv } from '../../models/tvshow';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
	selector: 'app-tv-shows',
	templateUrl: './tv-shows.component.html',
	styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {
	tvShows: Tv[] = [];
	genreId: string | null = null;
	searchValue: string | null = null;

	constructor(private tvshowsService: TvshowsService, private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
			if (genreId) {
				this.genreId = genreId;
				this.getTvshowsByGenre(genreId, 1);
			} else {
				this.getPagedTvshows(1);
			}
		});
	}

	getPagedTvshows(page: number, searchKeyword?: string) {
		this.tvshowsService.searchTvShows(page, searchKeyword).subscribe((tvshowsData) => {
			this.tvShows = tvshowsData;
		});
	}

	getTvshowsByGenre(genreId: string, page: number) {
		this.tvshowsService.getTvShowsByGenre(genreId, page).subscribe((tvshowsData) => {
			this.tvShows = tvshowsData;
		});
	}

	paginate(event: any) {
		const pageNumber = event.page + 1;
		if (this.genreId) {
			this.getTvshowsByGenre(this.genreId, pageNumber);
		} else {
			if (this.searchValue) {
				// to show the search results in all pages.
				this.getPagedTvshows(pageNumber, this.searchValue);
			} else {
				this.getPagedTvshows(pageNumber);
			}
		}
	}

	searchChanged() {
		if (this.searchValue) {
			this.getPagedTvshows(1, this.searchValue);
		}
	}
}
