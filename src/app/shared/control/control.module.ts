import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormControlComponent } from './form-control/form-control.component';
import { NzFormModule } from 'ng-zorro-antd/form';

@NgModule({
  declarations: [InputComponent, FormControlComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzInputModule,
    NzIconModule,
    NzFormModule,
  ],
  exports: [InputComponent, FormControlComponent],
})
export class ControlModule {}
