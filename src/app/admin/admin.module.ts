import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, TranslateModule, AdminRoutingModule],
})
export class AdminModule {}
