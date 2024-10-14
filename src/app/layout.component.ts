import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DarkmodeModule } from '../../projects/ngux/src/lib/component/darkmode/darkmode.module';
import { IconModule } from '../../projects/ngux/src/lib/component/icon/icon.module';
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
    MenuComponent,
    MenuLayoutComponent,
  ],
  template: `
    <header class="flex-row align-space-between bg-primary px-3">
      <div>
        <button class="btn-primary mr-2">
          <ux-icon name="menu"></ux-icon>
        </button>
        <span class="pl-2 font-weight-400 text-lg">Angular UX</span>
        <span class="pl-4"><small>ngux</small></span>
      </div>
      <div class="flex-row">
        <a href="https://www.npmjs.com/package/ngux" target="_blank" class="btn btn-md btn-primary mr-0">
          <svg role="img" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="npm" class="fa-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path fill="currentColor" d="M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z"></path>
          </svg>
        </a>
        <a href="https://github.com/d3code/angular-ux" target="_blank" class="btn btn-md btn-primary mr-0">
          <svg role="img" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" class="fa-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
            <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
          </svg>
        </a>
        <ux-darkmode size="md"></ux-darkmode>
      </div>
    </header>

    <div class="flex">
      <div class="sidemenu">
        <ux-menu [menuItems]="menuItems"></ux-menu>
      </div>
      <div class="content px-14 py-10">
        <router-outlet></router-outlet>
      </div>
    <div>
  `,
  styles: `
    header {
      height: 4rem;
    }
    .content {
      flex: 1;
      height: calc(100vh - 4rem);
      overflow-y: scroll;
     overflow-x: show;
    }
    .fa-icon {
      height: 1.5rem;
      padding-inline: 0.2rem;
      padding-bottom: 0.1rem;
      overflow: visible;
    }
    .sidemenu {
      flex: 0 0 240px;
      height: calc(100vh - 4rem);
      display: flex;
      overflow-y: scroll;
      border-right: 1px solid var(--surface-color);
    }
  `,
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
        { label: 'Icon Button', path: '/icon-button' },
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
        { label: 'Card', path: '/card' },
        { label: 'Progress', path: '/progress' },
        { label: 'Rating', path: '/rating' },
      ],
    },
  ];
}
