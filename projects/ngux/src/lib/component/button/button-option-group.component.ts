import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, inject, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ux-button-option-group',
  standalone: true,
  imports: [FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ButtonOptionGroupComponent),
      multi: true,
    }
  ],
  template: `
    <div class="btn-group">
      @for (option of options; track option) {
        <button [class.active]="val === option.id" (click)="writeValue(option.id)" class="btn btn-primary">{{ option.label }}</button>
      }
    </div>
  `,
  styles: `
  `,
})
export class ButtonOptionGroupComponent implements ControlValueAccessor {
  private _cd = inject(ChangeDetectorRef);

  val: any;

  onChange: any = () => {}
  onTouch: any = () => {}

  writeValue(obj: any): void {
    console.log('writeValue', obj);
    this.val = obj;
    this.onChange(obj);
    // this._cd.markForCheck();
  }
  registerOnChange(fn: any): void {
    console.log('registerOnChange', fn);
    this.onChange = fn
    
  }
  registerOnTouched(fn: any): void {
    console.log('registerOnTouched', fn);
    this.onTouch = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    console.log('setDisabledState', isDisabled);

  }


  @Input() options: any;
}
