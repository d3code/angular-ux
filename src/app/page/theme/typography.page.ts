import { Component } from '@angular/core';
import { CodeComponent } from '../../../../projects/ngux/src/lib/component/code/code.component';

@Component({
  selector: 'app-typography',
  standalone: true,
  imports: [CodeComponent],
  template: `
    <h1>Typography</h1>

    <h2>Headings</h2>
    <p>Use the following classes to create headings:</p>

    <div class="p-8">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
    </div>

    <ux-code [code]="headingCode" language="html"></ux-code>
  `,
  styles: ``
})
export class TypographyPage {

  headingCode = `<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`;
}
