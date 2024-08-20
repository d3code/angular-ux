import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DarkmodeModule } from '../../projects/ngux/src/lib/component/darkmode/darkmode.module';
import { IconModule } from '../../projects/ngux/src/lib/component/icon/icon.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
    RouterLinkActive,
    DarkmodeModule,
    IconModule,
    FontAwesomeModule,
  ],
  template: `
    <div class="flex-row align-space-between bg-primary px-4 py-2">
      <div class="text-white">
        <span class="pl-2 font-weight-400 text-lg">Angular UX</span>
        <span class="pl-4"><small>ngux</small></span>
      </div>
      <div class="">
        <a href="https://www.npmjs.com/package/ngux" target="_blank" class="btn btn-md btn-primary mr-0">
          <!-- <ux-icon name="deployed_code"></ux-icon> -->
          <fa-icon [icon]="faNpm" size="xl"></fa-icon>
          <!-- <span class="pl-2">Github</span> -->
        </a>
        <a href="https://github.com/d3code/angular-ux" target="_blank" class="btn btn-md btn-primary mr-0">
          <!-- <ux-icon name="deployed_code"></ux-icon> -->
          <fa-icon [icon]="faGithub" size="xl"></fa-icon>
          <!-- <span class="pl-2">Github</span> -->
        </a>
        <ux-darkmode size="md"></ux-darkmode>
      </div>
    </div>
    <div class="flex height-min-100vh">
      <div class="menu p-12">
        <div *ngFor="let item of menuItems" class="mb-6">
          <div class="mb-4 text-lg font-weight-500">{{ item.label }}</div>
          <ul class="list-none p-0">
            <li class="pb-3" *ngFor="let sectionItem of item.children">
              <a
                class="pl-4 text-gray-800 text-hover-blue-700 display-block"
                routerLinkActive="active"
                [routerLink]="(item.basePath || '') + sectionItem.path"
              >
                {{ sectionItem.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="content px-14 py-10">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: `

    .menu {
      flex: 0 0 240px;
      // background-color: var(--color-gray-200);

      a {
        border-left: 3px solid transparent;
        &.active {
          border-color: var(--color-blue-700);
        }
      }
    }

    .content {
      flex: 1;
    }
  `,
})
export class LayoutComponent {
  router = inject(Router);
  faGithub = faGithub;
  faNpm = faNpm;

  menuItems = [
    {
      label: 'Theme',
      basePath: '/theme',
      children: [
        { label: 'Theme', path: '/theme' },
        { label: 'Code', path: '/code' },
        { label: 'Colors', path: '/colors' },
        { label: 'Dark Mode', path: '/darkmode' },
        { label: 'Icons', path: '/icons' },
        { label: 'Typography', path: '/typography' },
      ],
    },
    {
      label: 'Layout',
      basePath: '/layout',
      children: [
        { label: 'Accordion', path: '/accordion' },
        { label: 'Card', path: '/card' },
        { label: 'Carousel', path: '/carousel' },
        { label: 'Collapse', path: '/collapse' },
        { label: 'Dropdown', path: '/dropdown' },
        { label: 'Media', path: '/media' },
        { label: 'Modal', path: '/modal' },
        { label: 'Spacing', path: '/spacing' },
        { label: 'Sheet', path: '/sheet' },
        { label: 'Tag', path: '/tag' },
        { label: 'Tooltip', path: '/tooltip' },
        { label: 'Popover', path: '/popover' },
      ],
    },
    {
      label: 'Navigation',
      basePath: '/navigation',
      children: [
        { label: 'Breadcrumb', path: '/breadcrumb' },
        { label: 'Menu', path: '/menu' },
        { label: 'Navbar', path: '/navbar' },
        { label: 'Pagination', path: '/pagination' },
        { label: 'Sidebar', path: '/sidebar' },
        { label: 'Tree', path: '/tree' },
      ],
    },
    {
      label: 'Form',
      basePath: '/form',
      children: [
        { label: 'Button', path: '/button' },
        { label: 'Checkbox', path: '/checkbox' },
        { label: 'Datepicker', path: '/datepicker' },
        { label: 'Datetimepicker', path: '/datetimepicker' },
        { label: 'Form', path: '/form' },
        { label: 'Input', path: '/input' },
        { label: 'Progress', path: '/progress' },
        { label: 'Radio', path: '/radio' },
        { label: 'Select', path: '/select' },
        { label: 'Switch', path: '/switch' },
        { label: 'Slider', path: '/slider' },
        { label: 'Tag', path: '/tag' },
        { label: 'Timepicker', path: '/timepicker' },
        { label: 'Upload', path: '/upload' },
      ],
    },
    {
      label: 'Data',
      basePath: '/data',
      children: [
        { label: 'Breadcrumb', path: '/breadcrumb' },
        { label: 'Pagination', path: '/pagination' },
        { label: 'Table', path: '/table' },
        { label: 'Tree', path: '/tree' },
      ],
    },
    {
      label: 'Feedback',
      basePath: '/feedback',
      children: [
        { label: 'Alert', path: '/alert' },
        { label: 'Badge', path: '/badge' },
        { label: 'Button', path: '/button' },
        { label: 'Card', path: '/card' },
        { label: 'Progress', path: '/progress' },
        { label: 'Rating', path: '/rating' },
      ],
    },
  ];
}
