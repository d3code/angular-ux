import {
  Component,
  Input,
  Output,
  EventEmitter,
  ContentChildren,
  QueryList,
  AfterContentInit,
  inject,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbTabComponent } from './tab.component';

@Component({
  selector: 'nb-tabset',
  template: `
    <ul class="tabset pb-4">
      <li
        *ngFor="let tab of tabs"
        (click)="selectTab(tab)"
        (keyup.space)="selectTab(tab)"
        (keyup.enter)="selectTab(tab)"
        [class.active]="tab.active"
        [class.disabled]="tab.disabled"
        [attr.tabindex]="tab.disabled ? -1 : 0"
        [attr.data-tab-id]="tab.tabId"
        class="tab px-4 py-2"
      >
        <span class="tab-text">{{ tab.tabTitle }}</span>
      </li>
    </ul>
    <ng-content select="nb-tab"></ng-content>
  `,
  styles: `

    $border-width: 2px;

    .tabset {
      display: flex;
      flex-direction: row;
      list-style-type: none;
      margin: 0 0 1rem;
      padding: 0;
      border-bottom: $border-width solid var(--color-gray-200);

      .tab {
        margin-bottom: -#{$border-width};
        text-align: center;
        position: relative;
        border-bottom: $border-width solid transparent;
        cursor: pointer;

        &.active {
          color: var(--color-blue-700);
          border-color: var(--color-blue-700);
          z-index: 1;
        }

        &:not(.active):hover {
          border-color: var(--color-gray-300);
        }

        &.disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }
      }
    }
  `
})
export class NbTabsetComponent implements AfterContentInit {
  private route = inject(ActivatedRoute);

  @ContentChildren(NbTabComponent) tabs = new QueryList<NbTabComponent>();
  
  @Input() routeParam?: string;
  @Output() changeTab = new EventEmitter<any>();

  ngAfterContentInit() {
    this.route.queryParams.subscribe((params) => {
      var tab;
      if (this.routeParam) {
        tab = this.tabs.find((t) => t.route === params[this.routeParam!]);
      }
      this.selectTab(tab || this.tabs.first);
    });
  }

  selectTab(selectedTab: NbTabComponent) {
    if (!selectedTab.disabled) {
      this.tabs.forEach((tab) => (tab.active = tab === selectedTab));
      this.changeTab.emit(selectedTab);
    }
  }
}
