import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './page/dashboard/dashboard.component';
import {Routes} from "@angular/router";
import {DashboardRoutingModule} from "./dashboard-routing.module";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule, DashboardRoutingModule
  ]
})
export class DashboardModule {
}
