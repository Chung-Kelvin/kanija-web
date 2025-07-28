import { createAction, props } from '@ngrx/store';

//action get all categories
export const getAllCategories = createAction(
  '[Category] Get all categories',
  props<{ payload: any }>(),
);
export const getAllCategoriesSuccess = createAction(
  '[Category] Get all categories Success',
  props<{ success: any }>(),
);
export const getAllCategoriesFail = createAction(
  '[Category] Get all categories Fail',
  props<{ error: any }>(),
);

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
  '[Category] Create category Fail',
  props<{ error: any }>(),
);
