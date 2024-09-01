import { Component, forwardRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgSelectModule } from '../../../../projects/ngux/src/lib/component/select/ng-select.module';
import {
  NgbDatepickerModule,
  NgbDateStruct,
} from '../../../../projects/ngux/src/lib/component/datepicker/datepicker.module';
import { IconModule } from '../../../../projects/ngux/src/lib/component/icon/icon.module';
import { FormControl, FormGroup, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonOptionGroupComponent } from '../../../../projects/ngux/src/lib/component/button/button-option-group.component';
import { CodeComponent } from '../../../../projects/ngux/src/lib/component/code/code.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
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

    <form class="my-8" [formGroup]="formGroup">
      <div class="row">
        <div class="input-group">
          <input
            formControlName="date"
            class="form-control"
            placeholder="yyyy-mm-dd"
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
          formControlName="select"
          [items]="selectItems"
          bindLabel="title"
          bindValue="id"
          [searchable]="true"
          placeholder="Search"
        />
      </div>

      <div class="row">
        <ux-button-option-group 
          [options]="optionsItems"
          name="opt"
          formControlName="option"
        />
      </div>

    </form>

    <ux-code [code]="formModel | json" language="json"/>
  `,
  styles: `
    .row {
      padding-bottom: 1rem;
    }
  `,
})
export class FormPage {
  formGroup = new FormGroup({
    date: new FormControl({ year: 2021, month: 2, day: 1 }),
    select: new FormControl(null),
    option: new FormControl(1, Validators.required),
  });

  selectItems = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
  ];

  optionsItems = [
    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' },
  ];

  get formModel() {
    let formControls: any = {};

    for (const control in this.formGroup.controls) {
      formControls[control] = {};
      formControls[control]['touched'] = this.formGroup.controls[control].touched
      formControls[control]['valid'] = this.formGroup.controls[control].valid
      formControls[control]['dirty'] = this.formGroup.controls[control].dirty
    }

    return {
      form: {
        status: this.formGroup.status,
        errors: this.formGroup.errors,
        valid: this.formGroup.valid,
        dirty: this.formGroup.dirty,
        touched: this.formGroup.touched,
      },
      value: this.formGroup.value,
      controls: formControls,
    }
  }
}
