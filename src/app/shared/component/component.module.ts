import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { AdminRoutingModule } from 'src/app/admin/admin-routing.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TranslateModule } from '@ngx-translate/core';
import { StatusStylePipe } from '../pipe/status.pipe';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { FormActionComponent } from './form-action/form-action.component';

@NgModule({
  declarations: [
    CarouselComponent,
    CardProductComponent,
    MenuBarComponent,
    HeaderComponent,
    AvatarComponent,
    AvatarGroupComponent,
    TableComponent,
    StatusStylePipe,
    FormActionComponent,
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    NzFormModule,
    NzTableModule,
    NzToolTipModule,
    AdminRoutingModule,
    NzIconModule,
    TranslateModule,
    NzEmptyModule,
  ],
  exports: [
    CarouselComponent,
    CardProductComponent,
    MenuBarComponent,
    HeaderComponent,
    AvatarComponent,
    TableComponent,
    FormActionComponent,
  ],
})
export class ComponentModule {}
