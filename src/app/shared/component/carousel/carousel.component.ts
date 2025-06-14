import {Component} from '@angular/core';

@Component({
  selector: 'kan-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  images = [
    'assets/img/banner/acn_topbanner_desktop-070525.webp',
    'assets/img/banner/doraemon_topbanner_desktop-260525.webp',
    'assets/img/banner/eoea-topbanner_desktop.webp',
    'assets/img/banner/viettin_topbanner_desktop-110625a.webp',
  ];
  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
