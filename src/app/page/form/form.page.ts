import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgSelectModule } from '../../../../projects/ngux/src/lib/component/select/ng-select.module';
import {
  NgbDatepickerModule,
  NgbDateStruct,
} from '../../../../projects/ngux/src/lib/component/datepicker/datepicker.module';
import { IconModule } from '../../../../projects/ngux/src/lib/component/icon/icon.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    NgSelectModule,
    NgbDatepickerModule,
    IconModule,
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
    </form>
  `,
  styles: ``,
})
export class FormPage {
  model: NgbDateStruct;

  items = [
    { id: 1, title: 'item1' },
    { id: 2, title: 'item2' },
  ];
}
