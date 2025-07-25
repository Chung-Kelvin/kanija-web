import { Component, Input } from '@angular/core';
import { TABLE_CONFIG } from '../../models/table.model';

@Component({
  selector: 'kan-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  //input
  @Input() showNumber: boolean = true;
  @Input() showCheckbox: boolean = false;
  //mock data
  tableConfig = TABLE_CONFIG;

  listOfData = [
    {
      categoryName: 'Apple Watch Series 4',
      description: 'Digital Product',
      quanityProduct: 690,
      status: 63,
    },
    {
      categoryName: 'Microsoft Headsquare',
      description: 'Digital Product',
      quanityProduct: 190,
      status: 13,
    },
    {
      categoryName: "Women's Dress",
      description: 'Fashion',
      quanityProduct: 640,
      status: 635,
    },
  ];
  getValue(row: any, key: string) {
    return row[key];
  }
}
