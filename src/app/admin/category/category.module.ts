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
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ListCategoryComponent } from './page/list-category/list-category.component';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: CreatCategoryComponent,
  },
];

@NgModule({
  declarations: [CreatCategoryComponent, ListCategoryComponent],
  imports: [
    TranslateModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ControlModule,
    StoreModule.forFeature('category', categoryReducer),
    EffectsModule.forFeature([CategoryEffects]),
    NzButtonModule,
    NzFormModule,
  ],
})
export class CategoryModule {}
