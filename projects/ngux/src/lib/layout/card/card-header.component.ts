import { Component } from '@angular/core';

@Component({
  selector: 'ux-card-header',
  standalone: true,
  imports: [],
  template: `
    <div class="card-header">
      <ng-content></ng-content>
    </div>
  `,
  styles: `
    .card-header {
      // background-color: #f4f4f4;
      // border-bottom: 1px solid #ccc;
      padding: 0.6rem 1rem;
    }
  `
})
export class CardHeaderComponent {

}
