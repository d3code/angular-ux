import { Component } from '@angular/core';

@Component({
  selector: 'ux-button-group',
  standalone: true,
  imports: [],
  template: `
    <div class="btn-group">
      <ng-content select="button"></ng-content>
    </div>
  `,
  styles: `
  `,
})
export class ButtonGroupComponent {

}
