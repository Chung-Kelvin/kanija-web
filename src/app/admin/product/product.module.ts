import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminRoutingModule } from '../admin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './page/product-list/product-list.component';
import { ProductCreateComponent } from './page/product-create/product-create.component';

const routes: Routes = [
  {
    path: 'list',
    component: ProductListComponent,
  },
  {
    path: 'create',
    component: ProductCreateComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    TranslateModule,
  ],
  declarations: [ProductListComponent, ProductCreateComponent],
  exports: [ProductListComponent, ProductCreateComponent],
})
export class ProductModule {}
