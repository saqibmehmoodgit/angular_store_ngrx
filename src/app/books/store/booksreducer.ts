import { createReducer, on } from '@ngrx/store';
import { Books } from './books';
import { booksFetchAPISuccess } from './booksaction';
 
export const initialState: ReadonlyArray<Books> = [];
 
export const bookReducer = createReducer(
  initialState,
  on(booksFetchAPISuccess, (state, { allBooks }) => {
    return allBooks;
  })
);