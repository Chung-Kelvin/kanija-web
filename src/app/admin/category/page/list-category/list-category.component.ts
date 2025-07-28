import { Component, OnInit } from '@angular/core';
import { TABLE_CONFIG } from '../../model';
import { Store } from '@ngrx/store';
import * as CategoryActions from '../../state/category.action';
import * as CategorySelectors from '../../state/category.selector';
import { skip, Subject, takeUntil } from 'rxjs';
import { KanNotifyService } from 'src/app/shared/service/kan-notify.service';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'kan-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss'],
})
export class ListCategoryComponent implements OnInit {
  columns = TABLE_CONFIG;
  loading$: any;
  data: any = [];
  selectedItems: any[] = [];
  private destroy$ = new Subject<void>();

  constructor(
    private readonly store: Store,
    private notifyService: KanNotifyService,
    private modal: NzModalService,
  ) {}

  ngOnInit(): void {
    const payload = {};
    this.loading$ = this.store.select(
      CategorySelectors.selectCategoriesLoading,
    );
    this.store.dispatch(CategoryActions.getAllCategories({ payload }));
    this.store
      .select(CategorySelectors.selectCategoryListCategories)
      .pipe(skip(1), takeUntil(this.destroy$))
      .subscribe((res) => {
        if (res.success) {
          this.data = this.mappingData(res.data);
          this.notifyService.success('Thành công', res.message);
        }
      });
  }

  mappingData(res: any): any {
    return res.map((item: any) => ({
      id: item.id,
      categoryName: item.name,
      description: item.description,
    }));
  }

  onAdd() {
    this.modal.info({
      nzTitle: 'Thông tin',
      nzContent: 'Đây là nội dung thông báo.',
    });
  }
}
