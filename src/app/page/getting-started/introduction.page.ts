import { Component } from '@angular/core';
import { CodeComponent } from '../../../../projects/ngux/src/lib/component/code/code.component';
import { AccordionPage } from "../layout/accordion.page";

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [CodeComponent, AccordionPage],
  template: `
    <h1>Introduction</h1>
    <p>Angular UX is a collection of components, directives, and pipes that can be used to build Angular applications.</p>

    <div class="info info-warning">
      <div class="content">
        <p class="pb-2 text-lg"><strong>Angular UX is a work in progress and is not yet ready for production use.</strong></p>
        <p>The information in this documentation may not be accurate and is subject to change. If you wish to contribute to the project, please visit our <a href="https://github.com/d3code/angular-ux" target="_blank">Github</a> page.</p>
      </div>
    </div>

    <h2>Getting Started</h2>

    <p>Start by installing Angular UX:</p>
    <ux-code [code]="installation" language="bash"></ux-code>
  `,
  styles: ``
})
export class IntroductionPage {
  installation = `npm install ngux`;
}
