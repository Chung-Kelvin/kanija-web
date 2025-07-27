import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pagination, TABLE_ACTION, TABLE_CONFIG,} from '../../models/table.model';
import {STATUS, StatusValue} from '../../models/status.model';

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
  @Input() showNumber: boolean = true;
  @Input() showCheckbox: boolean = false;
  @Input() data: any[] = [];
  @Input() loading: boolean = false;
  @Input() scroll: any = {x: '1000px', y: '300px'};
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

  //mock data

  ngOnInit(): void {
    console.log('TableComponent initialized' + this.columns[1]);
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
      item: data
    };
  }

  onEdit(row: any) {
    this.onAction.emit(
      this.onActionOnRow(TABLE_ACTION.EDIT, row)
    );
  }

  onDelete(row: any) {
    this.onAction.emit(
      this.onActionOnRow(TABLE_ACTION.DELETE, row)
    );
  }

  onCopy(row: any) {
    this.onAction.emit(
      this.onActionOnRow(TABLE_ACTION.COPY, row)
    );
  }

  onView(row: any) {
    this.onAction.emit(
      this.onActionOnRow(TABLE_ACTION.VIEW, row)
    );
  }
}
