import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CarouselComponent } from './carousel/carousel.component';
import { CardProductComponent } from './card-product/card-product.component';
import { MatCardModule } from '@angular/material/card';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { HeaderComponent } from './header/header.component';
import { AvatarComponent } from './avatar/avatar.component';
import { AvatarGroupComponent } from './avatar-group/avatar-group.component';

@NgModule({
  declarations: [
    CarouselComponent,
    CardProductComponent,
    MenuBarComponent,
    HeaderComponent,
    AvatarComponent,
    AvatarGroupComponent,
  ],
  imports: [CommonModule, MatCardModule, MatIconModule, MatMenuModule],
  exports: [
    CarouselComponent,
    CardProductComponent,
    MenuBarComponent,
    HeaderComponent,
    AvatarComponent,
  ],
})
export class ComponentModule {}
