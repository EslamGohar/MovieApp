import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tv, TvShowCredits, TvShowImages, TvShowVideo } from '../../models/tvshow';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { TvshowsService } from '../../services/tvshows.service';

@Component({
	selector: 'app-tv-show-details',
	templateUrl: './tv-show-details.component.html',
	styleUrls: ['./tv-show-details.component.scss']
})
export class TvShowDetailsComponent implements OnInit {
	tvShow: Tv | null = null;
	tvShowVideos: TvShowVideo[] = [];
	tvShowImages: TvShowImages | null = null;
	tvShowCredits: TvShowCredits | null = null;
	imagesSizes = IMAGES_SIZES;

	constructor(private route: ActivatedRoute, private tvShowsService: TvshowsService) {}

	ngOnInit(): void {
		this.route.params.pipe().subscribe(({ id }) => {
			this.getTvShowDetails(id);
			this.getTvShowVideos(id);
			this.getTvShowImages(id);
			this.getTvShowCredits(id);
		});
	}

	ngOnDestroy() {
		console.log('component destroyed');
	}

	getTvShowDetails(id: string) {
		this.tvShowsService.getTvShowDetails(id).subscribe((tvShowData) => {
			this.tvShow = tvShowData;
		});
	}

	getTvShowVideos(id: string) {
		this.tvShowsService.getTvShowVideos(id).subscribe((tvShowVideosData) => {
			this.tvShowVideos = tvShowVideosData;
		});
	}

	getTvShowImages(id: string) {
		this.tvShowsService.getTvShowImages(id).subscribe((tvShowImagesData) => {
			this.tvShowImages = tvShowImagesData;
		});
	}

	getTvShowCredits(id: string) {
		this.tvShowsService.getTvShowCredits(id).subscribe((tvShowCreditsData) => {
			this.tvShowCredits = tvShowCreditsData;
		});
	}
}
