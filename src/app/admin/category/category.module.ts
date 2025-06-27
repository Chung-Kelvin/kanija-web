import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatCategoryComponent } from './page/creat-category/creat-category.component';
import { RouterModule, Routes } from '@angular/router';
import { ControlModule } from '../../shared/control/control.module';
import { StoreModule } from '@ngrx/store';
import { categoryReducer } from './state/category.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CategoryEffects } from './state/category.effect';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CreatCategoryComponent,
  },
];

@NgModule({
  declarations: [CreatCategoryComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ControlModule,
    StoreModule.forFeature('category', categoryReducer),
    EffectsModule.forFeature([CategoryEffects]),
  ],
})
export class CategoryModule {}
