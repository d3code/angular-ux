import {
  Component,
  Input,
  HostBinding,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'nb-tab',
  template: `
    <ng-content></ng-content>
  `,
})
export class NbTabComponent {

  @Input({required: true}) tabTitle!: string;
  @Input({required: false}) tabId?: string;
  @Input() tabIcon?: string;

  @Input('disabled')
  @HostBinding('class.disabled')
  disabled: boolean = false

  @Input() route?: string;

  responsiveValue: boolean = false;
  disabledValue = false;

  @Input()
  @HostBinding('class.content-active')
  active: boolean = false;

  @HostBinding('class.hidden')
  get hidden() {
    return !this.active;
  }
}
