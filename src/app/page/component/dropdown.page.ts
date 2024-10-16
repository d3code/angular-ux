import { Component } from '@angular/core';
import { NgbDropdownModule } from '../../../../projects/ngux/src/lib/component/dropdown/dropdown.module';
import { DropdownComponent } from '../../../../projects/ngux/src/lib/component/dropdown/dropdown.component';


@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [NgbDropdownModule, DropdownComponent],
  template: `
    <h1>Dropdown</h1>

		<ux-dropdown class="display-block mb-2" icon="person" title="Dropdown" placement="bottom-left" [items]="items" />


		<ux-dropdown title="Dropdown" placement="bottom-left" [items]="items" />
  `,
  styles: ``
})
export class DropdownPage {
	items = [
		{ title: 'Action - 1', action: () => alert('Action - 1') },
		{ title: 'Another Action', action: () => alert('Another Action') },
		{ title: 'Something else is here' },
	];

}
