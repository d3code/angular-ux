import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DarkmodeModule } from '../../projects/ngux/src/lib/component/darkmode/darkmode.module';
import { IconModule } from '../../projects/ngux/src/lib/component/icon/icon.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons';
import { MenuComponent } from '../../projects/ngux/src/lib/layout/menu/menu.component';
import { MenuLayoutComponent } from '../../projects/ngux/src/lib/layout/menu-layout.component';

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
    MenuComponent,
    MenuLayoutComponent,
  ],
  template: `
    <div class="flex-row align-space-between bg-primary px-4 py-2">
      <div>
        <span class="pl-2 font-weight-400 text-lg">Angular UX</span>
        <span class="pl-4"><small>ngux</small></span>
      </div>
      <div>
        <a href="https://www.npmjs.com/package/ngux" target="_blank" class="btn btn-md btn-primary mr-0">
          <fa-icon [icon]="faNpm" size="xl"></fa-icon>
        </a>
        <a href="https://github.com/d3code/angular-ux" target="_blank" class="btn btn-md btn-primary mr-0">
          <fa-icon [icon]="faGithub" size="xl"></fa-icon>
        </a>
        <ux-darkmode size="md"></ux-darkmode>
      </div>
    </div>
    <ux-menu-layout [menuItems]="menuItems">
      <router-outlet></router-outlet>
    </ux-menu-layout>
  `,
  styles: ``,
})
export class LayoutComponent {
  router = inject(Router);
  faGithub = faGithub;
  faNpm = faNpm;

  menuItems = [
    {
      label: 'Getting started',
      basePath: '/',
      children: [
        { label: 'Introduction', path: '' },
      ],
    },
    {
      label: 'Theme',
      icon: 'format_paint',
      basePath: '/theme',
      children: [
        { label: 'Theme', path: '/theme' },
        { label: 'Colors', path: '/colors' },
        { label: 'Dark Mode', path: '/darkmode' },
        { label: 'Typography', path: '/typography' },
        { label: 'Variables', path: '/variables' },
      ],
    },
    {
      label: 'Layout',
      icon: 'view_quilt',
      basePath: '/layout',
      children: [
        { label: 'Card', path: '/card' },
        { label: 'Spacing', path: '/spacing' },
      ],
    },
    {
      label: 'Component',
      icon: 'package_2',
      basePath: '/component',
      children: [
        { label: 'Accordion', path: '/accordion' },
        { label: 'Carousel', path: '/carousel' },
        { label: 'Code', path: '/code' },
        { label: 'Collapse', path: '/collapse' },
        { label: 'Date Picker', path: '/datepicker' },
        { label: 'Dropdown', path: '/dropdown' },
        { label: 'File Upload', path: '/file-upload' },
        { label: 'Icons', path: '/icons' },
        { label: 'Modal', path: '/modal' },
        { label: 'Option Group', path: '/option-group' },
        { label: 'Paste', path: '/paste' },
        { label: 'Pagination', path: '/pagination' },
        { label: 'Popover', path: '/popover' },
        { label: 'Rating', path: '/rating' },
        { label: 'Select', path: '/select' },
        { label: 'Sheet', path: '/sheet' },
        { label: 'Tabset', path: '/tabset' },
        { label: 'Toast', path: '/toast' },
        { label: 'Tooltip', path: '/tooltip' },
        { label: 'Typeahead', path: '/typeahead' },
      ],
    },
    {
      label: 'Navigation',
      icon: 'navigation',
      basePath: '/navigation',
      children: [
        { label: 'Breadcrumb', path: '/breadcrumb' },
        { label: 'Menu', path: '/menu' },
        { label: 'Navbar', path: '/navbar' },
        { label: 'Sidebar', path: '/sidebar' },
        { label: 'Tree', path: '/tree' },
      ],
    },
    {
      label: 'Form',
      icon: 'lab_profile',
      basePath: '/form',
      children: [
        { label: 'Form', path: '/form' },
        { label: 'Button', path: '/button' },
        { label: 'Checkbox', path: '/checkbox' },
        { label: 'Input', path: '/input' },
        { label: 'Progress', path: '/progress' },
        { label: 'Radio', path: '/radio' },
        { label: 'Switch', path: '/switch' },
        { label: 'Slider', path: '/slider' },
      ],
    },
    {
      label: 'Data',
      icon: 'database',
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
      icon: 'feedback',
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
