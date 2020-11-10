import { Component, Input, OnInit } from '@angular/core';
import { MovielistService } from 'src/app/services/movielist.service';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  name: string;
  movielist: Movie[];
  isLoading: boolean = true;
  err: boolean = false;
  errMessage: string = '';

  constructor(private movieService: MovielistService) { 
    
  }

  ngOnInit(): void {
    this.movieService.currentMessage.subscribe((message) => {
      this.name = message; 
      this.getMovieList();
    });
    setTimeout(()=> {
      this.name = 'John';
      this.getMovieList();
    }, 200)

  }

  getMovieList() {
    this.isLoading = true;
    this.movielist = [];
    this.err = false;
    this.errMessage = '';
    this.movieService.getMovieList(this.name).subscribe((res) => {
      this.isLoading = false;
      if(res.Response === 'False' && res.Error !== 'Incorrect IMDb ID.'){
        this.err = true 
        this.errMessage = res.Error
      } else {
        this.movielist = res.Search;
      }
    });
  }
}
