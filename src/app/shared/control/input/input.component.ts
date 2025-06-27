import {Component, forwardRef, Input} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'kan-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent {
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() clearable: boolean = false;
  @Input() type: 'text' | 'number' = 'text';
  @Input() suffixIcon: string = '';
  @Input() prefixIcon: string = '';

  value: string = '';

  clearInput(): void {
    this.value = '';
    this.onChange('');
    this.onTouched();
  }

  onChange = (value: any) => {
  };
  onTouched = () => {
  };

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInputChange(value: string) {
    this.value = value;
    this.onChange(value);
  }
}
