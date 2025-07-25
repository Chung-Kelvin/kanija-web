import { Component } from '@angular/core';

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
  listOfData = [
    {
      image: 'assets/img/apple-watch.png',
      name: 'Apple Watch Series 4',
      category: 'Digital Product',
      price: 690,
      piece: 63,
      colors: ['#333', '#ccc', '#ff4d4f'],
    },
    {
      image: 'assets/img/microsoft-headsquare.png',
      name: 'Microsoft Headsquare',
      category: 'Digital Product',
      price: 190,
      piece: 13,
      colors: ['#000', '#f5222d', '#faad14', '#1890ff'],
    },
    {
      image: 'assets/img/women-dress.png',
      name: "Women's Dress",
      category: 'Fashion',
      price: 640,
      piece: 635,
      colors: ['#722ed1', '#eb2f96', '#1890ff'],
    },
    // ... thêm các sản phẩm khác
  ];
}
