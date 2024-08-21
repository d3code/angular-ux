import { Component } from '@angular/core';
import { NgSelectModule } from '../../../../projects/ngux/src/lib/component/select/ng-select.module';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [NgSelectModule],
  template: `
    <h1>Select</h1>

    <ng-select 
      [items]="items"
      bindLabel="title"
      bindValue="id"
      [searchable]="true"
      placeholder="Search">
    </ng-select>
  `,
  styles: ``
})
export class SelectPage {
  data: any;
  items = [
    { id: 1, name: 'item1' },
    { id: 2, name: 'item2' }
  ]

  constructor(httpClient: HttpClient) {
    httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe((data: any) => {
      console.log(data);
      this.items = data;
    });

    httpClient.get('/assets/icons.json').subscribe((data: any) => {
      console.log(data);
      this.data = data;
    });
  }
}
