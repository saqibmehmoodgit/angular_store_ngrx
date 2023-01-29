import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { invokeBooksAPI } from '../store/booksaction';
import { selectBooks } from '../store/booksselector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private store: Store) {}
  books$ = this.store.pipe(select(selectBooks));
 
  ngOnInit(): void {
    this.store.dispatch(invokeBooksAPI());
  }

}
