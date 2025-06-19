import {Component} from '@angular/core';
import {IMenuItem, MENU_CONFIG_ADMIN} from '../models/menu.model';


@Component({
  selector: 'kan-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.scss'],

})
export class LayoutAdminComponent {
  readonly menuItems = MENU_CONFIG_ADMIN;
  public isCollapsed = true;

  toggle(item: IMenuItem, event: MouseEvent) {
    if (item.children) {
      item.expanded = !item.expanded;
      event.stopPropagation();
    }
  }
}
