import {Component} from '@angular/core';
import {IMenuItem, MENU_CONFIG} from "../../models/menu.model";

@Component({
  selector: 'kan-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {
  readonly menuConfig: IMenuItem[] = MENU_CONFIG;

}
