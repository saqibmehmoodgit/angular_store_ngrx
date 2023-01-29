import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { HomeComponent } from './home/home.component';

import { bookReducer } from './store/booksreducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Bookseffect } from './store/bookseffect';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    StoreModule.forFeature('mybooks', bookReducer),
    EffectsModule.forFeature([Bookseffect])
    
  ],
})
export class BooksModule { }
