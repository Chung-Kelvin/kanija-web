import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from './input/input.component';
import {FormsModule} from '@angular/forms';
import {NzInputModule} from "ng-zorro-antd/input";


@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, FormsModule, NzInputModule],
  exports: [InputComponent]
})
export class ControlModule {
}
