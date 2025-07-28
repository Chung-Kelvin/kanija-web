import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CategoryState } from './category.reducer';

export const selectCategoryState =
  createFeatureSelector<CategoryState>('category');

export const selectCategoryList = createSelector(
  selectCategoryState,
  (state) => state.list,
);

export const selectCategoryLoading = createSelector(
  selectCategoryState,
  (state) => state.loading,
);

export const selectCategoryError = createSelector(
  selectCategoryState,
  (state) => state.error,
);

export const selectCategoryListCategories = createSelector(
  selectCategoryState,
  (state) => state.listCategories,
);

export const selectCategoriesLoading = createSelector(
  selectCategoryState,
  (state) => state.loading,
);
