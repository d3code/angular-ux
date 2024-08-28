import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject } from '@angular/core';
import { OrderByPipe } from '../../../../projects/ngux/src/lib/pipe/orderby/orderby.pipe';
import { FormsModule, NgModel } from '@angular/forms';
import { LodashFilterPipe } from '../../../../projects/ngux/src/lib/pipe/filter-lodash/filter.pipe';
import { InitialFocusDirective } from '../../../../projects/ngux/src/lib/directive/initial-focus.directive';
import { NbTabsetModule } from '../../../../projects/ngux/src/lib/component/tabset/tabset.module';

@Component({
  selector: 'app-variables',
  standalone: true,
  imports: [
    CommonModule,
    OrderByPipe,
    FormsModule,
    LodashFilterPipe,
    InitialFocusDirective,
    NbTabsetModule,
  ],
  template: `
    <h2>CSS Variables</h2>

    <nb-tabset routeParam="tab">
      <nb-tab route="color" tabTitle="Color">
        <input
          placeholder="Search"
          type="search"
          name="search"
          id="search"
          class="mb-8"
          [(ngModel)]="filter"
          initialFocus
        />
        <table>
          <tr>
            <th>Variable</th>
            <th style="width: 240px">Value</th>
          </tr>
          <tr
            *ngFor="
              let variable of varables
                | lodashFilter : filter
                | orderBy : [] : ['asc']
            "
          >
            <td>{{ variable }}</td>
            <td>
              <code>{{ cssValue(variable) }}</code>
            </td>
          </tr>
        </table>
      </nb-tab>
      <nb-tab route="button" tabTitle="Button">
        Tab content 2
      </nb-tab>
    </nb-tabset>
  `,
  styles: ``,
})
export class VariablesPage {
  varables: string[];
  filter = '';

  el: any = inject(ElementRef);

  cssValue(key: any) {
    return getComputedStyle(this.el.nativeElement).getPropertyValue(key);
  }

  constructor() {
    this.varables = getAllCSSVariableNames();
  }
}

// could pass in an array of specific stylesheets for optimization
function getAllCSSVariableNames(
  prefix: string = '--',
  styleSheets = document.styleSheets
): string[] {
  var cssVars = [];

  for (var i = 0; i < styleSheets.length; i++) {
    try {
      for (var j = 0; j < styleSheets[i].cssRules.length; j++) {
        try {
          for (
            var k = 0; k < (styleSheets[i].cssRules[j] as CSSStyleRule).style.length; k++) {
            let name = (styleSheets[i].cssRules[j] as CSSStyleRule).style[k];
            if (name.startsWith(prefix) && cssVars.indexOf(name) == -1) {
              cssVars.push(name);
            }
          }
        } catch (error) {
        }
      }
    } catch (error) {
    }
  }

  return cssVars;
}
