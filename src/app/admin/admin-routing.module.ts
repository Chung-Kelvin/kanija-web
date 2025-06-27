// app/admin/admin-routing.module.ts
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutAdminComponent} from "../shared/layout-admin/layout-admin.component";
// chỉnh lại đường dẫn nếu cần

const routes: Routes = [
  {
    path: '',
    component: LayoutAdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dash-board/dash-board.module').then(m => m.DashboardModule),
      },
      {
        path: 'category',
        loadChildren: () =>
          import('./category/category.module').then(m => m.CategoryModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
