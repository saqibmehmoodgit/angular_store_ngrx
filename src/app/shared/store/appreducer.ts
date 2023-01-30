import { createReducer, on } from '@ngrx/store';
import { setAPIStatus } from './appaction';
import { Appstate } from './appstate';
 
export const initialState: Readonly<Appstate> = {
  apiResponseMessage: '',
  apiStatus: '',
};
 
export const appReducer = createReducer(
  initialState,
  on(setAPIStatus, (state, { apiStatus }) => {
    return {
      ...state,
      ...apiStatus
    };
  })
);