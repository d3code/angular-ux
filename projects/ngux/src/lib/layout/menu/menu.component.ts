import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconModule } from '../../component/icon/icon.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ux-menu',
  standalone: true,
  imports: [CommonModule, IconModule, RouterModule],
  template: `
    <div class="menu p-12">
      <div *ngFor="let item of menuItems" class="mb-6">

        <div *ngIf="item.label" class="mb-4 text-lg font-weight-500">
          <ux-icon *ngIf="item.icon" [weight]="200" size="md" [name]="item.icon" class="color-text mr-2"></ux-icon>
          {{ item.label }}
        </div>
        <ul class="list-none p-0">
          <li class="pb-3" *ngFor="let sectionItem of item.children">
            <a
              class="pl-4 text-gray-800 text-hover-blue-700 display-block"
              routerLinkActive="active"
              [routerLinkActiveOptions]="{exact: true}"
              [routerLink]="(item.basePath || '') + sectionItem.path"
            >
              {{ sectionItem.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: `
    .menu {
      a {
        border-left: 3px solid transparent;
        &.active {
          border-color: var(--color-blue-700);
        }
      }
    }
  `,
})
export class MenuComponent {
  @Input() menuItems: any[] = [];
  @Input() basePath: string = '';
  @Input() type: 'primary' | 'secondary' = 'primary';
}
