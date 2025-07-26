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
      categoryName: 'Apple Watch Series 4',
      description: 'Digital Product',
      quanityProduct: 690,
      status: StatusValue.ACTIVE,
    },
    {
      categoryName: 'Microsoft Headsquare',
      description: 'Digital Product',
      quanityProduct: 190,
      status: StatusValue.INACTIVE,
    },
    {
      categoryName: "Women's Dress",
      description: 'Fashion',
      quanityProduct: 640,
      status: StatusValue.PROCESSING,
    },
    {
      categoryName: 'Apple Watch Series 4',
      description: 'Digital Product',
      quanityProduct: 690,
      status: StatusValue.ACTIVE,
    },
    {
      categoryName: 'Microsoft Headsquare',
      description: 'Digital Product',
      quanityProduct: 190,
      status: StatusValue.INACTIVE,
    },
    {
      categoryName: "Women's Dress",
      description: 'Fashion',
      quanityProduct: 640,
      status: StatusValue.PROCESSING,
    },
    {
      categoryName: 'Apple Watch Series 4',
      description: 'Digital Product',
      quanityProduct: 690,
      status: StatusValue.ACTIVE,
    },
    {
      categoryName: 'Microsoft Headsquare',
      description: 'Digital Product',
      quanityProduct: 190,
      status: StatusValue.INACTIVE,
    },
    {
      categoryName: "Women's Dress",
      description: 'Fashion',
      quanityProduct: 640,
      status: StatusValue.PROCESSING,
    },
    {
      categoryName: 'Apple Watch Series 4',
      description: 'Digital Product',
      quanityProduct: 690,
      status: StatusValue.ACTIVE,
    },
    {
      categoryName: 'Microsoft Headsquare',
      description: 'Digital Product',
      quanityProduct: 190,
      status: StatusValue.INACTIVE,
    },
    {
      categoryName: "Women's Dress",
      description: 'Fashion',
      quanityProduct: 640,
      status: StatusValue.PROCESSING,
    },
  ];

  receiveData(event: any) {
    console.log('Received action:', event.action);
    console.log('Row data:', event.row);
  }
}
