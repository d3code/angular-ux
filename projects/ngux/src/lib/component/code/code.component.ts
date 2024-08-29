import { AfterViewInit, Component, ElementRef, inject, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import hljs from 'highlight.js';

@Component({
  selector: 'ux-code',
  standalone: true,
  imports: [],
  encapsulation: ViewEncapsulation.None,
  template: `
      <code [class.code-block]="!inline" class="hljs" [class.pre]="!inline"></code>
  `,
})
export class CodeComponent implements OnChanges {
  elementRef = inject(ElementRef);
  
  @Input({required: true}) code: string = '';
  @Input() language: string = '';
  @Input() inline: boolean = false;

  ngOnChanges(): void {
    const pre = this.elementRef.nativeElement.querySelector('code');

    if (this.language) {
      pre.innerHTML = hljs.highlight(this.code, {
        language: this.language
      }).value;
    } else {
      pre.innerHTML = hljs.highlightAuto(this.code).value;
    }
  }
}
