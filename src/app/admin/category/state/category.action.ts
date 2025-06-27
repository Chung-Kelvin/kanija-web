import { createAction, props } from '@ngrx/store';

//action create new category
export const createCategory = createAction(
  '[Category] Create category',
  props<{ payload: any }>(),
);
export const createCategorySuccess = createAction(
  '[Category] Create category Success',
  props<{ success: any }>(),
);
export const createCategoryFail = createAction(
  '[UsCategoryer] Create category Fail',
  props<{ error: any }>(),
);
