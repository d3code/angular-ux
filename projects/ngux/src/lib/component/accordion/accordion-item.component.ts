import { Component, Input } from '@angular/core';

@Component({
  selector: 'ux-accordion-item',
  standalone: true,
  imports: [],
  template: `
    <div class="accordion-item">
      <div (click)="toggle()" class="accordion-item-header">
        <span class="accordion-item-title">{{ title }}</span>
        <svg [class.rotate]="open" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
          <path d="M522-480 358-644q-11-11-11-25.5t11-25.5q11-11 25.5-11t25.84 11.34L599-505q5 5.4 7.5 11.7 2.5 6.3 2.5 13.5t-2.5 13.5Q604-460 599-455L409.34-265.34Q398-254 384-254.5T359-266q-11-11-11-25.5t11-25.5l163-163Z"/>
        </svg>
      </div>
      <div [class.hidden]="!open" class="accordion-item-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: `

    .accordion-item {
    }

    .accordion-item-title {
      font-weight: 500;
    }

    .accordion-item-header {
      border-bottom: 1px solid #ccc;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      padding: 10px;
    }

    .accordion-item-content {
      padding: 10px;
      // height: 0;
      // overflow: hidden;
    }

    svg {
      transition: transform 0.3s;
    }

    svg.rotate {
      transform: rotate(90deg);
    }

    .hidden {
      display: none;
    }
  `
})
export class AccordionItemComponent {
  @Input() title: string | undefined;
  @Input() open: boolean = false;

  toggle() {
    this.open = !this.open;
  }
}
