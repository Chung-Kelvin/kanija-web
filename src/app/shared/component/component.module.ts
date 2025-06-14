import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselComponent} from './carousel/carousel.component';
import {CardProductComponent} from './card-product/card-product.component';
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    CarouselComponent,
    CardProductComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    CarouselComponent, CardProductComponent
  ]
})
export class ComponentModule {
}
