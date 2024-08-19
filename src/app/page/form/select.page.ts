import { Component } from '@angular/core';
import { NgSelectModule } from '../../../../projects/ngux/src/lib/component/select/ng-select.module';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [NgSelectModule],
  template: `
    <h1>Select</h1>

    <ng-select 
      [items]="items"
      bindLabel="name"
      bindValue="id"
      [searchable]="true"
      placeholder="Search">
    </ng-select>
  `,
  styles: ``
})
export class SelectPage {
  items = [
    { id: 1, name: 'item1' },
    { id: 2, name: 'item2' }
  ]
}
