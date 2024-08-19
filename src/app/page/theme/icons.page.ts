import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../../../../projects/ngux/src/lib/component/icon/icon.module';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../../../projects/ngux/src/lib/pipe/filter/filter.pipe';
import { Filter } from '../../../../projects/ngux/src/lib/pipe/filter/filter';
import { Pagination } from '../../../../projects/ngux/src/lib/pipe/pagination/pagination';
import { PaginationPipe } from '../../../../projects/ngux/src/lib/pipe/pagination/pagination.pipe';
import { InitialFocusDirective } from '../../../../projects/ngux/src/lib/directive/initial-focus.directive';
import { default as iconVersions } from '../../../../projects/ngux/src/lib/component/icon/fonts/MaterialSymbolsOutlined.json';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [IconModule, CommonModule, FormsModule, FilterPipe, PaginationPipe, InitialFocusDirective],
  template: `
    <h1>Icons</h1>

    <input 
      type="text"
      initialFocus
      placeholder="Search"
      (keyup)="filter.setField($event, 'key')">

    <input type="range" min="1" max="240" step="1" [(ngModel)]="iconSize">

    <div class="grid mt-4">
      <div  class="text-center my-2" *ngFor="let icon of icons | keyvalue | filter : filter | pagination : pagination">
        <ux-icon 
          [name]="icon.key"
          [size]="iconSize"
          [weight]="200"
          [spin]="false"
          [rotate]="0"
        ></ux-icon>
        <div>{{icon.key}}</div>
      </div>
    </div>
  `,
  styles: `
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, 142px);
      justify-content: space-between;
    }
  `
})
export class IconsPage {
  constructor() { 
    this.pagination.pageSize = 200;
  }

  icons: any = iconVersions;
  iconSize = 48;

  filter: Filter = new Filter();
  pagination = new Pagination();
}
