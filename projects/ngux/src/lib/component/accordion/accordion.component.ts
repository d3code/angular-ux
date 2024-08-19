import { Component } from '@angular/core';

@Component({
  selector: 'ux-accordion',
  standalone: true,
  imports: [],
  template: `
    <div class="accordion">
      <ng-content select="ux-accordion-item"></ng-content>
    </div>
  `,
  styles: `
    .accordion {
      // border-top: 1px solid #ccc;
      // border-bottom: 1px solid #ccc;
    }
  `
})
export class AccordionComponent {

}
