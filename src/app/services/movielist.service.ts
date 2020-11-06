import { Injectable } from '@angular/core';
import { Movie } from '../components/movies/movie.interface';
import { MOVIE_LIST } from '../components/movies/movielist';

@Injectable({
  providedIn: 'root'
})
export class MovielistService {

  movielist: Movie[] = JSON.parse(localStorage.getItem('movies'));

  constructor() {
    if(!localStorage.getItem('movies')){
      localStorage.setItem('movies', JSON.stringify(MOVIE_LIST));
    }
  }

  getMovieList(): Movie[] {
    return this.movielist;
  }

  getMovie(id: number): Movie {
    return this.movielist.find((item) => item.id === id);
  }

  addMovie(movie: Movie): void {
    this.movielist.push(movie);
    localStorage.setItem('movies', JSON.stringify(this.movielist));
  }
}
