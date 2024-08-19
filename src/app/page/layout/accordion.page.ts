import { Component } from '@angular/core';
import { AccordionModule } from '../../../../projects/ngux/src/lib/component/accordion/accordion.module';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [AccordionModule],
  template: `
    <h1>Accordion</h1>

    <ux-accordion>
      <ux-accordion-item title="Item 1">
        <p>Content 1</p>
      </ux-accordion-item>
      <ux-accordion-item title="Item 2">
        <p>Content 2</p>
      </ux-accordion-item>
      <ux-accordion-item title="Item 3">
        <p>Content 3</p>
      </ux-accordion-item>
    </ux-accordion>
  `,
  styles: ``
})
export class AccordionPage {

}
