import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { createCategory } from '../../state/category.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'kan-creat-category',
  templateUrl: './creat-category.component.html',
  styleUrls: ['./creat-category.component.scss'],
})
export class CreatCategoryComponent {
  form: any;
  fb: FormBuilder | undefined;
  constructor(
    fb: FormBuilder,
    private store: Store,
  ) {
    this.fb = fb;
    this.form = this.fb.group({
      name: [''],
      description: [''],
    });
  }
  onSubmit() {
    const value = this.form.value;
    this.store.dispatch(createCategory({ payload: value }));
  }
}
