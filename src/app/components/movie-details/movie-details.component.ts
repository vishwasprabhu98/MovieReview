import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MovielistService } from 'src/app/services/movielist.service';
import { Movie } from '../movies/movie.interface';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie: Movie;
  url: SafeResourceUrl;
  
  constructor(private movielistService: MovielistService,
    private activatedRoute: ActivatedRoute,
    private _sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    let id: number = +this.activatedRoute.snapshot.params.id;
    this.movie = this.movielistService.getMovie(id);
    this.url = this._sanitizer.bypassSecurityTrustResourceUrl(this.movie.link);
  }
}
