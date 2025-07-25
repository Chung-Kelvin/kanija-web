import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { CardProductComponent } from './card-product/card-product.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { HeaderComponent } from './header/header.component';
import { AvatarComponent } from './avatar/avatar.component';
import { AvatarGroupComponent } from './avatar-group/avatar-group.component';
import { TableComponent } from './table/table.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [
    CarouselComponent,
    CardProductComponent,
    MenuBarComponent,
    HeaderComponent,
    AvatarComponent,
    AvatarGroupComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    NzFormModule,
    NzTableModule,
    NzToolTipModule,
  ],
  exports: [
    CarouselComponent,
    CardProductComponent,
    MenuBarComponent,
    HeaderComponent,
    AvatarComponent,
    TableComponent,
  ],
})
export class ComponentModule {}
