import { Component, OnInit } from '@angular/core';
import { MovielistService } from 'src/app/services/movielist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  search: string;

  constructor(private movieService: MovielistService) {

  }

  ngOnInit(): void {
    this.movieService.currentMessage.subscribe((message) => this.search = message);
  }

  getMovie() {
    let searchString = this.search;
    this.movieService.changeMessage(searchString);
    this.search = '';
  }
}
