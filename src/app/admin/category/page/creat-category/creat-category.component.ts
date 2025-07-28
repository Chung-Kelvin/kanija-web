import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { createCategory } from '../../state/category.action';
import * as CategorySelectors from '../../state/category.selector';
import { Store } from '@ngrx/store';
import { KanNotifyService } from '../../../../shared/service/kan-notify.service';
import { skip, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'kan-creat-category',
  templateUrl: './creat-category.component.html',
  styleUrls: ['./creat-category.component.scss'],
})
export class CreatCategoryComponent implements OnInit, OnDestroy {
  form: any;
  fb: FormBuilder | undefined;
  private destroy$ = new Subject<void>();

  constructor(
    fb: FormBuilder,
    private store: Store,
    private notifyService: KanNotifyService,
  ) {
    this.fb = fb;
    this.form = this.fb.group({
      name: [''],
      description: [''],
      parentCategory: [''],
    });
  }

  ngOnInit(): void {
    this.store
      .select(CategorySelectors.selectCategoryList)
      .pipe(skip(1), takeUntil(this.destroy$))
      .subscribe((res) => {
        res;
        if (res.success) {
          this.notifyService.success('Thành công', res.message);
        } else {
          this.notifyService.error(res.message);
        }
      });
  }

  onSubmit() {
    const value = this.form.value;

    const payload = {
      name: value.name,
      description: value.description,
      parentId: value.parentCategory === '' ? undefined : value.parentCategory,
    };

    this.store.dispatch(createCategory({ payload: payload }));
  }

  show() {
    this.notifyService.success('Thành công', 'Lưu dữ liệu thành công!');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
