import { createFeatureSelector } from '@ngrx/store';
import { Books } from './books';
 
///  name of store is 'mybooks' that store data of type Books[]
export const selectBooks = createFeatureSelector<Books[]>('mybooks');