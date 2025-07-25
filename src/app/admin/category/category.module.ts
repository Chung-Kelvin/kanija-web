import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
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
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { ListCategoryComponent } from './page/list-category/list-category.component';
import { TranslateModule } from '@ngx-translate/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { ComponentModule } from 'src/app/shared/component/component.module';

const routes: Routes = [
  {
    path: '',
    component: ListCategoryComponent,
  },
  {
    path: 'create',
    component: CreatCategoryComponent,
  },
];

@NgModule({
  imports: [
    NzBreadCrumbModule,
    TranslateModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ControlModule,
    StoreModule.forFeature('category', categoryReducer),
    EffectsModule.forFeature([CategoryEffects]),
    NzButtonModule,
    NzFormModule,
    NzTableModule,
    NzToolTipModule,
    NgOptimizedImage,
    ComponentModule,
  ],
  declarations: [CreatCategoryComponent, ListCategoryComponent],
  exports: [CreatCategoryComponent, ListCategoryComponent],
})
export class CategoryModule {}
