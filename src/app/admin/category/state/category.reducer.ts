import { createReducer, on } from '@ngrx/store';
import * as CategoryActions from './category.action';

export interface CategoryState {
  list: any;
  loading: boolean;
  error: any;
}

export const initialState: CategoryState = {
  list: null,
  loading: false,
  error: null,
};

export const categoryReducer = createReducer(
  initialState,
  // khi bắt đầu gọi API
  on(CategoryActions.createCategory, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  // khi thành công
  on(CategoryActions.createCategorySuccess, (state, { success }) => ({
    ...state,
    list: success,
    loading: false,
  })),

  // khi thất bại
  on(CategoryActions.createCategoryFail, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
);
