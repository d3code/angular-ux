import { Component } from '@angular/core';
import { CodeComponent } from '../../../../projects/ngux/src/lib/component/code/code.component';

@Component({
  selector: 'app-code',
  standalone: true,
  imports: [CodeComponent],
  template: `
    <h1>Code</h1>

    <p>Code component is a simple component that uses highlight.js to highlight code
    snippets. It has three inputs:</p>

    <ul>
      <li><code>code</code> - the code snippet to be highlighted</li>
      <li><code>language</code> - the language of the code snippet, if left blank autodetect will be used</li>
      <li><code>inline</code> - if the code snippet should be displayed inline</li>
    </ul>

    <h3>Inline code</h3>
    <p>This is an example of inline <ux-code [inline]="true" code='<code style="inline">html</code>' language="html"/>.</p>
    
    <h3>Block code</h3>
    <ux-code [code]="code"></ux-code>

  `,
  styles: ``
})
export class CodePage {

  code = `import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby',
  standalone: true
})
export class OrderbyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}`
}
