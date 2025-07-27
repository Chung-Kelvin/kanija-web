import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  Pagination,
  TABLE_ACTION,
  TABLE_CONFIG,
} from '../../models/table.model';
import { STATUS, StatusValue } from '../../models/status.model';

interface ActionEmit {
  action: TABLE_ACTION;
  item: any;
}

@Component({
  selector: 'kan-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  //input
  @Input() key: string = 'id';
  @Input() showNumber: boolean = true;
  @Input() showCheckbox: boolean = false;
  @Input() data: any[] = [];
  @Input() loading: boolean = false;
  @Input() scroll: any = { x: '1000px', y: '300px' };
  @Input() scrollX: string = '1000px';
  @Input() scrollY: string = '300px';
  @Input() columns: any[] = TABLE_CONFIG;
  @Input() pagination: Pagination = {
    pageIndex: 1,
    pageSize: 10,
    total: 0,
  };
  //output
  @Output() onAction = new EventEmitter<any>();
  @Output() onSelectItems = new EventEmitter<any>();
  @Output() onCheckItems = new EventEmitter<any>();

  allChecked: boolean = false;
  indeterminate: boolean = false;

  setKeyCheck = new Set<any>();

  ngOnInit(): void {
    console.log('Data Map:');
  }

  checkAll(value: boolean): void {
    if (value) {
      this.data.forEach((item) => {
        this.setKeyCheck.add(item[this.key]);
      });
    } else {
      this.setKeyCheck.clear();
    }
    this.indeterminate = false;
    this.getCheckedItems();
  }

  onRowCheck(id: number, value: boolean): void {
    if (value) {
      this.setKeyCheck.add(id);
    } else {
      this.setKeyCheck.delete(id);
    }
    this.indeterminate = this.setKeyCheck.size > 0;
    this.allChecked = this.setKeyCheck.size === this.data.length;
    if (this.allChecked) {
      this.indeterminate = false;
    }
    this.getCheckedItems();
  }

  getCheckedItems() {
    const selectedData = this.data.filter((item) =>
      this.setKeyCheck.has(item[this.key]),
    );
    this.onSelectItems.emit(selectedData);
    this.onCheckItems.emit(Array.from(this.setKeyCheck));
  }

  getValue(row: any, key: string) {
    return row[key];
  }

  getStatusStyle(status: StatusValue) {
    console.log('getStatusStyle called with status:', status);
    const statusOjb = STATUS.find((item) => item.value === status);

    return statusOjb;
  }

  onActionOnRow(action: any, data: any): ActionEmit {
    return {
      action: action,
      item: data,
    };
  }

  onEdit(row: any) {
    this.onAction.emit(this.onActionOnRow(TABLE_ACTION.EDIT, row));
  }

  onDelete(row: any) {
    this.onAction.emit(this.onActionOnRow(TABLE_ACTION.DELETE, row));
  }

  onCopy(row: any) {
    this.onAction.emit(this.onActionOnRow(TABLE_ACTION.COPY, row));
  }

  onView(row: any) {
    this.onAction.emit(this.onActionOnRow(TABLE_ACTION.VIEW, row));
  }
}
