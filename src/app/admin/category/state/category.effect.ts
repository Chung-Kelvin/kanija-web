import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CategoryService } from '../service/category.service';
import { Injectable } from '@angular/core';
import {
  createCategory,
  createCategoryFail,
  createCategorySuccess,
} from './category.action';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class CategoryEffects {
  createCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createCategory),
      mergeMap(({ payload }) =>
        this.categoryService.createCategory(payload).pipe(
          map((res: any) => createCategorySuccess({ success: res })),
          catchError((err) => {
            console.error('API 400 Response:', err.error); // Response từ API khi lỗi
            return of(createCategoryFail({ error: err.error }));
          }),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private categoryService: CategoryService,
  ) {}
}
