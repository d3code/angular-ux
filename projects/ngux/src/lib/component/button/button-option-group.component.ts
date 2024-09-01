import {
  Component,
  forwardRef,
  Input,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'ux-button-option-group',
  standalone: true,
  imports: [FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ButtonOptionGroupComponent),
      multi: true,
    },
  ],
  template: `
    <div class="btn-group">
      @for (option of options; track option) {
      <button
        [attr.disabled]="disabled ? true : null"
        [class.active]="value === option.id"
        (click)="writeValue(option.id)"
        class="btn btn-primary"
      >
        {{ option.label }}
      </button>
      }
    </div>
  `,
  styles: `
  `,
})
export class ButtonOptionGroupComponent implements ControlValueAccessor {
  @Input() options: any;

  value: any;
  disabled: boolean = false;

  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(obj: any): void {
    this.value = obj;
    this.onChange(obj);
    this.onTouch(obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
