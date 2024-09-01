import { Component, forwardRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgSelectModule } from '../../../../projects/ngux/src/lib/component/select/ng-select.module';
import {
  NgbDatepickerModule,
  NgbDateStruct,
} from '../../../../projects/ngux/src/lib/component/datepicker/datepicker.module';
import { IconModule } from '../../../../projects/ngux/src/lib/component/icon/icon.module';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ButtonOptionGroupComponent } from '../../../../projects/ngux/src/lib/component/button/button-option-group.component';
import { CodeComponent } from '../../../../projects/ngux/src/lib/component/code/code.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    JsonPipe,
    NgSelectModule,
    NgbDatepickerModule,
    ButtonOptionGroupComponent,
    IconModule,
    CodeComponent,
  ],
  template: `
    <h1>Form</h1>

    <p>
      Forms are used to collect user input. This page demonstrates the various
      form elements available in the UX library.
    </p>

    <form class="my-8">
      <div class="row">
        <div class="input-group">
          <input
            class="form-control"
            placeholder="yyyy-mm-dd"
            name="dp"
            [(ngModel)]="model"
            ngbDatepicker
            #d="ngbDatepicker"
          />
          <button (click)="d.toggle()">
            <ux-icon name="calendar_month"></ux-icon>
          </button>
        </div>
      </div>

      <div class="row">
        <ng-select
          initialFocus
          [items]="items"
          bindLabel="title"
          bindValue="id"
          [searchable]="true"
          placeholder="Search"
        />
      </div>

      <div class="row">
        <ux-button-option-group 
          [options]="buttonOptions"
          name="opt"
          [(ngModel)]="optGroupModel"
        />
      </div>

    </form>

    <ux-code [code]="formModel | json" />
  `,
  styles: `
    .row {
      padding-bottom: 1rem;
    }
  `,
})
export class FormPage {
  model: NgbDateStruct;
  optGroupModel: any = 1;

  items = [
    { id: 1, title: 'item1' },
    { id: 2, title: 'item2' },
  ];

  buttonOptions = [
    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' },
  ];

  get formModel() {
    return {
      date: this.model,
      opt: this.optGroupModel
    };
  }
}
