import { createReducer, on } from '@ngrx/store';
import { Books } from './books';
import { booksFetchAPISuccess, saveNewBookAPISucess } from './booksaction';
 
export const initialState: ReadonlyArray<Books> = [];
 
export const bookReducer = createReducer(
  initialState,
  ///  when 'booksFetchAPISuccess'  method is called than 
  ///  bookReducer push data to store 
  on(booksFetchAPISuccess, (state, { allBooks }) => {
    debugger
    return allBooks;
  }),
  on(saveNewBookAPISucess, (state, { newBook }) => {
    debugger
    let newState = [...state];
    newState.unshift(newBook);
    return newState;
  })
);