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
  imports: [
    IconModule,
    CommonModule,
    FormsModule,
    FilterPipe,
    PaginationPipe,
    InitialFocusDirective,
  ],
  template: `
    <h1>Icons</h1>

    <div style="display: flex">
      <div style="max-width: 1200px; flex: 1">
        <h1>Content</h1>
        <div>
          <input
            type="text"
            initialFocus
            placeholder="Search"
            (keyup)="filter.setField($event, 'key')"
          />
        </div>
        <div class="flex-wrap mt-4" style="">
          <div style="width: 120px; flex-grow: 1" class="text-center my-5" *ngFor="let icon of icons | keyvalue | filter : filter | pagination : pagination">
            <ux-icon
              [name]="icon.key"
              [size]="iconSizeValue"
              [weight]="weight"
              [style]="iconStyleValue"
              [spin]="false"
              [rotate]="0"
            ></ux-icon>
            <div class="mt-8">
              <small>{{ icon.key }}</small>
            </div>
          </div>
        </div>
      </div>
      <div style="width: 248px" class="ml-20 p-8">
        <!-- <h3>Options</h3> -->

        <div class="mt-4">
          <label>Icon Size: {{iconSizeValue}}</label>
          <input
            type="range"
            min="1"
            max="7"
            step="1"
            [(ngModel)]="iconSize"
          />
        </div>
        <div class="mt-4">
          <label>Weight: {{weight}}</label>
          <input
            type="range"
            min="100"
            max="700"
            step="100"
            [(ngModel)]="weight"
          />
        </div>
        <div class="mt-4">
          <label>Style: {{iconStyleValue}}</label>
          <input
            type="range"
            min="1"
            max="3"
            step="1"
            [(ngModel)]="style"
          />
        </div>
        <div class="mt-4">
          <label>Page Size: {{pagination.pageSize}}</label>
          <input
            type="range"
            min="10"
            max="500"
            step="10"
            [(ngModel)]="pagination.pageSize"
          />
        </div>
        <div class="mt-4">
          <button (click)="pagination.previousPage()" class="btn btn-sm btn-secondary mr-2">
            <ux-icon name="navigate_before" size="sm"></ux-icon>
          </button>
          <button (click)="pagination.nextPage()" class="btn btn-sm btn-secondary">
            <ux-icon name="navigate_next" size="sm"></ux-icon>
          </button>
        </div>
      </div>
    </div>
  
  `,
  styles: `
    .menu-right {
      flex: 0 0 300px;
    }
  `,
})
export class IconsPage {
  constructor() {
    this.pagination.pageSize = 20;
  }

  icons: any = iconVersions;
  iconSize: 1 | 2 | 3 | 4 | 5 | 6 | 7 = 7;
  weight: any = 200;
  style: 1 | 2 | 3 = 1;

  get iconSizeValue(): any {
    return ICON_SIZES[this.iconSize];
  }

  get iconStyleValue(): any {
    return ICON_STYLES[this.style];
  }

  filter: Filter = new Filter();
  pagination = new Pagination();
}

const ICON_SIZES = {
  1: 'xs',
  2: 'sm',
  3: 'md',
  4: 'lg',
  5: 'xl',
  6: '2xl',
  7: '3xl',
}

const ICON_STYLES = {
  1: 'rounded',
  2: 'outlined',
  3: 'sharp',
}