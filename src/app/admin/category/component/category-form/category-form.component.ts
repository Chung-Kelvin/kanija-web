import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { KanNotifyService } from 'src/app/shared/service/kan-notify.service';

@Component({
  selector: 'kan-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements OnInit {
  form: any;
  fb: FormBuilder | undefined;
  private destroy$ = new Subject<void>();

  constructor(fb: FormBuilder) {
    this.fb = fb;
  }
  ngOnInit(): void {
    this.builderForm();
  }

  builderForm() {
    this.form = this.fb?.group({
      name: [''],
      description: [''],
      parentCategory: [''],
    });
  }
  getData(): any {
    return this.form.value;
  }
}
