import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SearchInputComponent,
      multi: true,
    },
  ],
})
export class SearchInputComponent implements ControlValueAccessor {
  public value: string = '';
  public isFull: boolean = false;

  constructor() {}

  onChange!: (value: string) => {};
  onTouch!: () => {};

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  handleInput($event: any): void {
    this.value = $event.target.value;
    this.onChange(this.value);
    this.onTouch();
    this.isFull = !!this.value;
  }

  clear() {
    this.value = '';
    this.onChange(this.value);
    this.isFull = false;
  }
}
