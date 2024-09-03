import { Component, ElementRef, inject } from '@angular/core';
import { CodeComponent } from '../../../../projects/ngux/src/lib/component/code/code.component';
import { DarkmodeModule } from '../../../../projects/ngux/src/lib/component/darkmode/darkmode.module';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-colors',
  standalone: true,
  imports: [CodeComponent, DarkmodeModule, NgFor, CommonModule],
  template: `
    <h1>Color Variables</h1>
    <p>Each color has a light and dark variant:</p>

    <div *ngFor="let item of classes">
      <h2>{{ item.title }}</h2>
      <!-- <p>{{item.value.description}}</p> -->
      <table class="mt-4">
        <tr *ngFor="let colors of item.colors">
          <td style="min-width: 224px;">
            <div>
              <strong>{{ colors.title }}</strong>
            </div>
            <div class="text-gray-900">{{ colors.description }}</div>
          </td>
          <td style="width: 224px;">
            <ux-code
              code="{{ colors.variable }}"
              language="text"
              [inline]="true"
            ></ux-code>
          </td>
          <td style="width: 112px;">
            <span><code class="text-muted">{{ cssValue(colors.variable) }}</code></span>
          </td>
          <td style="width: 112px;">
            <span style="color: var({{ colors.variable }});">Sample text</span>
          </td>
          <td style="width: 112px;">
            <div
              style="border-radius: 6px; width: 100px; padding: 6px; height: 40px; background-color: var({{
                colors.variable
              }})"
            ></div>
          </td>
          <td style="width: 112px;">
            <div
              style="border-radius: 6px; width: 100px; padding: 6px; height: 40px; border: 1px solid var({{
                colors.variable
              }})"
            ></div>
          </td>
        </tr>
      </table>
    </div>

    <div *ngFor="let y of ['gray', 'blue', 'green', 'yellow', 'red']">
      <h2>Color: {{ y }}</h2>
      <table>
        <tr *ngFor="let x of [1, 2, 3, 4, 5, 6, 7, 8, 9]">
          <td></td>
          <td style="width: 224px;">
            <ux-code
              code="--color-{{ y }}-{{ x }}00"
              language="text"
              [inline]="true"
            ></ux-code>
          </td>
          <td style="width: 112px;">
            <span><code>{{ cssValueColor(y , x) }}</code></span>
          </td>
          <td style="width: 112px;">
            <span style="color: var(--color-{{ y }}-{{ x }}00);"
              >Sample text</span
            >
          </td>
          <td style="width: 112px;">
            <div
              style="border-radius: 6px; width: 100px; padding: 6px; height: 40px; background-color: var(--color-{{
                y
              }}-{{ x }}00)"
            ></div>
          </td>
          <td style="width: 112px;">
            <div
              style="border-radius: 6px; width: 100px; padding: 6px; height: 40px; border: 1px solid var(--color-{{
                y
              }}-{{ x }}00)"
            ></div>
        </tr>
      </table>
    </div>
  `,
  styles: ``,
})
export class ColorsPage {
  el: any = inject(ElementRef);

  cssValue(key: any){
    return getComputedStyle(this.el.nativeElement).getPropertyValue(key);
  }
  cssValueColor(color: any, shade: any){
    return getComputedStyle(this.el.nativeElement).getPropertyValue('--color-' + color + '-' + shade + '00');
  }

  classes = [
    {
      title: 'Theme Colors',
      description: 'The primary colors of the theme.',
      colors: [
        {
          title: 'Primary',
          description:
            'The primary color is used for primary buttons, links, and other primary elements.',
          variable: '--ux-color-primary',
        },
        {
          title: 'Secondary',
          description:
            'The secondary color is used for secondary buttons, links, and other secondary elements.',
          variable: '--ux-color-secondary',
        },
        {
          title: 'Success',
          description:
            'The success color is used for success messages, buttons, and other success elements.',
          variable: '--ux-color-success',
        },
        {
          title: 'Warning',
          description:
            'The warning color is used for warning messages, buttons, and other warning elements.',
          variable: '--ux-color-warning',
        },
        {
          title: 'Danger',
          description:
            'The danger color is used for error messages, buttons, and other danger elements.',
          variable: '--ux-color-danger',
        },
        {
          title: 'Info',
          description:
            'The info color is used for informational messages, buttons, and other info elements.',
          variable: '--ux-color-info',
        },
        {
          title: 'Light',
          description:
            'The light color is used for light backgrounds and text.',
          variable: '--ux-color-light',
        },
        {
          title: 'Dark',
          description: 'The dark color is used for dark backgrounds and text.',
          variable: '--ux-color-dark',
        },
      ],
    },
    {
      title: 'Main Colors',
      description: 'The core colors of the theme.',
      colors: [
        {
          title: 'Background',
          description:
            'The background color is used for the main background color.',
          variable: '--background-color',
        },
        {
          title: 'Surface',
          description:
            'The surface color is used for card and surface backgrounds.',
          variable: '--color-surface',
        },
        {
          title: 'Border',
          description: 'The border color is used for borders.',
          variable: '--color-border',
        },
        {
          title: 'Text',
          description: 'The text color is used for text.',
          variable: '--color-text',
        },
        {
          title: 'Placeholder',
          description: 'The placeholder color is used for placeholder text.',
          variable: '--color-placeholder',
        },
        {
          title: 'Disabled',
          description: 'The disabled color is used for disabled elements.',
          variable: '--color-disabled',
        },
      ],
    },
  ];
}
