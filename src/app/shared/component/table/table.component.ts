import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TABLE_ACTION, TABLE_CONFIG } from '../../models/table.model';
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
  @Input() showNumber: boolean = true;
  @Input() showCheckbox: boolean = false;
  @Input() data: any[] = [];
  @Input() loading: boolean = false;
  @Input() scroll: any = { x: '1000px', y: '300px' };
  @Input() scrollX: string = '1000px';
  @Input() scrollY: string = '300px';
  @Input() columns: any[] = TABLE_CONFIG;
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

  onEdit(row: any) {
    const action: ActionEmit = {
      action: TABLE_ACTION.EDIT,
      item: row,
    };
    this.onAction.emit(action);
  }

  onDelete(row: any) {
    const action: ActionEmit = {
      action: TABLE_ACTION.DELETE,
      item: row,
    };
    this.onAction.emit(action);
  }
  onCopy(row: any) {
    const action: ActionEmit = {
      action: TABLE_ACTION.COPY,
      item: row,
    };
    this.onAction.emit(action);
  }
  onView(row: any) {
    const action: ActionEmit = {
      action: TABLE_ACTION.VIEW,
      item: row,
    };
    this.onAction.emit(action);
  }
}
