import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  @Input() favList: Movie[];
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  remove(id: string){
    this.newItemEvent.emit(id);
  }
}
