import { Component, OnInit } from '@angular/core';
import { MovielistService } from 'src/app/services/movielist.service';
import { Movie } from './movie.interface';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movielist: Movie[];

  constructor(private movieService: MovielistService) { }

  ngOnInit(): void {
    this.movielist = this.movieService.getMovieList();
  }
}
