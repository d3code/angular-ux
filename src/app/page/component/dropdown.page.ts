import { Component } from '@angular/core';
import { NgbDropdownModule } from '../../../../projects/ngux/src/lib/component/dropdown/dropdown.module';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [NgbDropdownModule],
  template: `
    <h1>Dropdown</h1>

    <div ngbDropdown class="d-inline-block" placement="bottom-right">
			<button type="button" class="btn btn-outline-primary" id="dropdownBasic1" ngbDropdownToggle>
				Toggle dropdown
			</button>
			<div ngbDropdownMenu aria-labelledby="dropdownBasic1">
				<button ngbDropdownItem>Action - 1</button>
				<button ngbDropdownItem>Another Action</button>
				<button ngbDropdownItem>Something else is here</button>
			</div>
		</div>
  `,
  styles: ``
})
export class DropdownPage {

}
