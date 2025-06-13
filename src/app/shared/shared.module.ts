import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';
import {RouterModule} from "@angular/router";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule, RouterModule, MatMenuModule, MatIconModule
  ],
  exports: [LayoutComponent]
})
export class SharedModule {
}
