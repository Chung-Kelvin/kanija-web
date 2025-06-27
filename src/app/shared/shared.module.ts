import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {RouterModule} from '@angular/router';
import {ComponentModule} from './component/component.module';
import {LayoutAdminComponent} from './layout-admin/layout-admin.component';
import {ControlModule} from './control/control.module';

@NgModule({
  declarations: [
    LayoutComponent, LayoutAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    ComponentModule,

    ControlModule,
  ],
  exports: [LayoutComponent, LayoutAdminComponent],
})
export class SharedModule {
}
