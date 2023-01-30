import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, switchMap, withLatestFrom } from 'rxjs';
import { setAPIStatus } from "src/app/shared/store/appaction";
import { Appstate } from "src/app/shared/store/appstate";
import { BooksService } from '../books.service';
import { booksFetchAPISuccess, invokeBooksAPI, invokeSaveNewBookAPI, saveNewBookAPISucess } from './booksaction';
import { selectBooks } from './booksselector';
@Injectable()
export class Bookseffect {
  
    constructor(
        private actions$: Actions,
        private booksService: BooksService,
        private store: Store,
        private appStore: Store<Appstate>
      ) {}
     
      loadAllBooks$ = createEffect(() =>
        this.actions$.pipe(
            
          ofType(invokeBooksAPI),
          withLatestFrom(this.store.pipe(select(selectBooks))),
          mergeMap(([, bookformStore]) => {
            debugger;
            if (bookformStore.length > 0) {
              return EMPTY;
            }
            return this.booksService
              .get()
              .pipe(map((data) => booksFetchAPISuccess({ allBooks: data })));
          
            })
        )
      );

       // existing code hidden for display purpose
 
       saveNewBook$ = createEffect(() => {
        debugger
        return this.actions$.pipe(
          ofType(invokeSaveNewBookAPI),
          switchMap((action) => {
            this.appStore.dispatch(
              setAPIStatus({ apiStatus: { apiResponseMessage: '', apiStatus: '' } })
            );
            debugger
            return this.booksService.create(action.newBook).pipe(
               
              map((data) => {
                debugger
                this.appStore.dispatch(
                  setAPIStatus({
                    apiStatus: { apiResponseMessage: '', apiStatus: 'success' },
                  })
                );
                debugger;
                return saveNewBookAPISucess({ newBook: data });
              })
            );
          })
        );
      });
    }
