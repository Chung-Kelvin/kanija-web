import { Component, Input } from '@angular/core';

@Component({
  selector: 'kan-form-action',
  templateUrl: './form-action.component.html',
  styleUrls: ['./form-action.component.scss'],
})
export class FormActionComponent {
  @Input() textOk: string = 'OK';
  @Input() textCancel: string = 'Cancel';
}
