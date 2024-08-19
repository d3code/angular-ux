import { Component } from '@angular/core';

@Component({
  selector: 'ux-card-body',
  standalone: true,
  imports: [],
  template: `
    <div class="card-body">
      <ng-content></ng-content>
    </div>
  `,
  styles: `
    .card-body {
      padding: 0.6rem 1rem;
    }
  `
})
export class CardBodyComponent {

}
