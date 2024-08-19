import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CardHeaderComponent } from './card-header.component';

@Component({
  selector: 'ux-card',
  standalone: true,
  imports: [CardHeaderComponent],
  template: `
    <div class="card">
      @if (title) {
        <div class="card-header">
          <span>{{ title }}</span>
        </div>
      }

      <div class="card-body">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: `
    .card {
      border: var(--card-border, 1px solid #ccc);
      border-radius: 4px;
      margin: 1rem 0;
      padding: 0;
    }

    .card-header {
      // background-color: #f4f4f4;
      // border-bottom: 1px solid #ccc;
      padding: 0.6rem 1rem;
    }

    .card-body {
      padding: 0.6rem 1rem;
    }
  `
})
export class CardComponent {
  @Input() title: string | undefined;
}
