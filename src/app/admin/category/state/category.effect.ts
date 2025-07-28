import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CategoryService } from '../service/category.service';
import { Injectable } from '@angular/core';

import * as CategoryActions from './category.action';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class CategoryEffects {
  constructor(
    private actions$: Actions,
    private categoryService: CategoryService,
  ) {}

  getAllCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoryActions.getAllCategories),
      mergeMap(() =>
        this.categoryService.getAllCategories().pipe(
          map((res: any) =>
            CategoryActions.getAllCategoriesSuccess({ success: res }),
          ),
          catchError((err) => {
            console.error('API 400 Response:', err.error);
            return of(
              CategoryActions.getAllCategoriesFail({ error: err.error }),
            );
          }),
        ),
      ),
    ),
  );

  createCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoryActions.createCategory),
      mergeMap(({ payload }) =>
        this.categoryService.createCategory(payload).pipe(
          map((res: any) =>
            CategoryActions.createCategorySuccess({ success: res }),
          ),
          catchError((err) => {
            console.error('API 400 Response:', err.error);
            return of(CategoryActions.createCategoryFail({ error: err.error }));
          }),
        ),
      ),
    ),
  );
}
