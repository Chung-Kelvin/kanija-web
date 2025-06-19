import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'kan-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @Input() kIcon: string = '';
  @Input() kShape: 'circle' | 'square' = 'circle';
  @Input() kSize: 'small' | 'medium' | 'large' | number = 'medium';
  @Input() kSrc: string = '';
  @Input() kAlt: string = 'Avatar Image';
  @Input() kClass: string = '';

  @Output() kClick = () => {};
}
