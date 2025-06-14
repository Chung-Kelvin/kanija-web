import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselComponent} from './carousel/carousel.component';
import {CardProductComponent} from './card-product/card-product.component';
import {MatCardModule} from "@angular/material/card";
import {MenuBarComponent} from './menu-bar/menu-bar.component';


@NgModule({
  declarations: [
    CarouselComponent,
    CardProductComponent,
    MenuBarComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    CarouselComponent,
    CardProductComponent,
    MenuBarComponent
  ]
})
export class ComponentModule {
}
