import { Component, Input } from '@angular/core';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'ux-menu-layout',
  standalone: true,
  imports: [MenuComponent],
  template: `
    <div class="flex height-min-100vh">
      <div class="menu">
        <ux-menu [menuItems]="menuItems"></ux-menu>
      </div>
      <div class="content px-14 py-10">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: `
    .menu {
      flex: 0 0 240px;
    }

    .content {
      flex: 1;
    }
  `
})
export class MenuLayoutComponent {
  @Input() position: 'left' | 'right' = 'left';
  @Input() menuItems: any[] = [];
  @Input() basePath: string = '';
  @Input() type: 'primary' | 'secondary' = 'primary';
}
