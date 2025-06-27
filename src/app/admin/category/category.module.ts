import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreatCategoryComponent} from './page/creat-category/creat-category.component';
import {RouterModule, Routes} from "@angular/router";
import {ControlModule} from "../../shared/control/control.module";

const routes: Routes = [
  {
    path: '',
    component: CreatCategoryComponent,
  },
];

@NgModule({
  declarations: [
    CreatCategoryComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), ControlModule
  ]
})
export class CategoryModule {
}
