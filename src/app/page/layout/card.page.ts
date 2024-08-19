import { Component } from '@angular/core';
import { CardModule } from '../../../../projects/ngux/src/lib/component/card/card.module';
import { NgSelectModule } from '../../../../projects/ngux/src/lib/component/select/ng-select.module';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardModule, NgSelectModule],
  template: `
    <h1>Card</h1>

    <ux-card title="Text header">
      <p>Card body</p>
    </ux-card>

  `,
  styles: ``
})
export class CardPage {

}
