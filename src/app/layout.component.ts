import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { last } from 'rxjs';
import { DarkmodeModule } from '../../projects/ngux/src/lib/component/darkmode/darkmode.module';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, RouterLinkActive, DarkmodeModule],
  template: `
    <div class="root">
      <div class="menu">
        <div *ngFor="let item of menuItems" class="section">
          <h2>{{ item.label }}</h2>
          <ul>
            <li *ngFor="let sectionItem of item.children">
              <a routerLinkActive="active" [routerLink]="(item.basePath || '') + sectionItem.path">{{ sectionItem.label }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="content">
        <div class="text-right">
          <ux-darkmode></ux-darkmode>
        </div>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: `
    .root {
      display: flex;
      min-height: 100vh;
    }

    .menu {
      width: 240px;
      padding: 20px 30px 60px;
      background-color: var(--color-surface);

      .section {
        margin-bottom: 20px;

        h2 {
          margin: 0 0 10px;
          font-size: 16px;
          font-weight: 500;
        }
      }

      ul {
        list-style: none;
        padding: 0;
        margin-bottom: 16px;

        li {
          margin-bottom: 6px;

          a {
            // color: #333;
            text-decoration: none;
            padding-left: 1rem;
            margin-left: 0.4rem;
            border-left: 3px solid transparent;
            display: block;

            &.active {
              border-color: #007bff;
            }

            &:hover {
              color: #007bff;
            }
          }
        }
      }
    }

    .content {
      flex: 1;
      padding: 20px;
    }
  `,
})
export class LayoutComponent {
  menuItems = [
    {
      label: 'Theme',
      basePath: '/theme',
      children: [
        { label: 'Theme', path: '/theme' },
        { label: 'Colors', path: '/colors' },
        { label: 'Dark Mode', path: '/darkmode' },
        { label: 'Icons', path: '/icons' },
        { label: 'Code', path: '/code' },
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
