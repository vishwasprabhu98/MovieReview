import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Movie } from '../interfaces/movie.interface';
import {baseUrl, Key} from '../baseUrlAndKey'

@Injectable({
  providedIn: 'root'
})
export class MovielistService {
  movielist: Movie[];

  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) {
    
    // if(!localStorage.getItem('movies')){
    //   localStorage.setItem('movies', JSON.stringify(MOVIE_LIST));
    // }
  }

  getMovieList(name): Observable<any> {
    let url = `${baseUrl}s=${name}${Key}`;
    return this.http.get(url)
  }

  getMovie(id: string): Observable<any> {
    return this.http.get(`${baseUrl}i=${id}${Key}`);
  }

  addMovie(movie: Movie): void {
    this.movielist.push(movie);
    localStorage.setItem('movies', JSON.stringify(this.movielist));
  }

  changeMessage(message: string) {
    if(message === ''){
    this.messageSource.next('John')
    }
    this.messageSource.next(message)
  }
}
