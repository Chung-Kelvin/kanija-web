import { Component } from '@angular/core';
import { StatusValue } from 'src/app/shared/models/status.model';

interface Product {
  image: string;
  name: string;
  category: string;
  price: number;
  piece: number;
  colors: string[];
}

@Component({
  selector: 'kan-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss'],
})
export class ListCategoryComponent {
  mockData = [
    {
      id: 0,
      categoryName: 'Apple Watch Series 4',
      description: 'Digital Product',
      quanityProduct: 690,
      status: StatusValue.ACTIVE,
    },
    {
      id: 1,
      categoryName: 'Microsoft Headsquare',
      description: 'Digital Product',
      quanityProduct: 190,
      status: StatusValue.INACTIVE,
    },
    {
      id: 2,
      categoryName: "Women's Dress",
      description: 'Fashion',
      quanityProduct: 640,
      status: StatusValue.PROCESSING,
    },
  ];

  selectedItems: any[] = [];

  receiveData(event: any) {}
  test(event: any) {}
}
