import { Component } from '@angular/core';
import { NgbDatepickerModule, NgbDateStruct } from '../../../../projects/ngux/src/lib/component/datepicker/datepicker.module';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconModule } from '../../../../projects/ngux/src/lib/component/icon/icon.module';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [NgbDatepickerModule, FormsModule, JsonPipe, IconModule],
  template: `
    <h1>Date Picker</h1>

    <!-- 1. inline datepicker -->
<!-- <ngb-datepicker #d></ngb-datepicker> -->

<form class="row row-cols-sm-auto">
	<div class="col-12">
		<div class="input-group">
			<input
				class="form-control"
				placeholder="yyyy-mm-dd"
				name="dp"
				[(ngModel)]="model"
				ngbDatepicker
				#d="ngbDatepicker"
			/>
			<button class="btn btn-outline-secondary bi bi-calendar3" (click)="d.toggle()" type="button">
        <ux-icon name="calendar_month"></ux-icon>
      </button>
		</div>
	</div>
</form>

<hr />
<pre>Model: {{ model | json }}</pre>
  `,
  styles: ``
})
export class DatepickerPage {
	model: NgbDateStruct;

}
