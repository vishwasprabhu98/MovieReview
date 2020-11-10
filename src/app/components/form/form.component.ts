import { Component, OnInit } from '@angular/core';
// import { Movie } from '../movies/movie.interface';
import { MovielistService } from 'src/app/services/movielist.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  // newMovie: Movie = {
  //   id: 0,
  //   title: '',
  //   year: null,
  //   image: '',
  //   rating: 3,
  //   link: '',
  //   description: ''
  // }

  constructor(private movielistService: MovielistService) { }

  ngOnInit(): void {
  }

  // addMovie(): void{
  //   this.newMovie.id = Math.floor(Math.random() * 100000) + 1;
  //   this.movielistService.addMovie({...this.newMovie});
  // }
}