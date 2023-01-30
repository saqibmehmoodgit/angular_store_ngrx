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

  //////  books$  is observable variable that listen store state 
  //// where as store has selector  'selectBooks'
  books$ = this.store.pipe(select(selectBooks));
 
  ngOnInit(): void {
    //////   when we dispatch action than we pass action , action is used to send data 
    ////  to reducer where reducer update store state
    debugger;
    this.store.dispatch(invokeBooksAPI());
  }

}
