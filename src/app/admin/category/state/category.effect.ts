import { act, Actions, createEffect, ofType } from '@ngrx/effects';
import { CategoryService } from '../service/category.service';
import { Injectable } from '@angular/core';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  createCategory,
  createCategoryFail,
  createCategorySuccess,
} from './category.action';
@Injectable()
export class CategoryEffects {
  constructor(
    private actions$: Actions,
    private categoryService: CategoryService,
  ) {}

  createCategory$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createCategory),
      switchMap((action) => {
        console.log('createCategory action:', action);
        return this.categoryService
          .createCategory({ payload: action.payload })
          .pipe(
            map((response) => ({
              type: createCategorySuccess.type,
              payload: response,
            })),
            catchError((error) =>
              of({
                type: createCategoryFail.type,
                payload: error,
              }),
            ),
          );
      }),
    );
  });
}
