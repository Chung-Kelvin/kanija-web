import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Input,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {FormControlDirective, FormControlName, NgControl,} from '@angular/forms';
import {NzFormControlComponent} from 'ng-zorro-antd/form';

@Component({
  selector: 'kan-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormControlComponent implements AfterViewInit {
  @Input() label: string = ''
  @ContentChild(NgControl, {static: false}) content!:
    | FormControlName
    | FormControlDirective;
  @ViewChild(NzFormControlComponent, {static: false})
  child!: NzFormControlComponent;

  constructor(public cd: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.child.defaultValidateControl = this.content;
    this.child.ngAfterContentInit();
    this.cd.detectChanges();
  }
}
