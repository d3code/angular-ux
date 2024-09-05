import { Component } from '@angular/core';
import { NgbDropdownModule } from '../../../../projects/ngux/src/lib/component/dropdown/dropdown.module';
import { DropdownComponent } from '../../../../projects/ngux/src/lib/component/dropdown/dropdown.component';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbTypeaheadModule } from '../../../../projects/ngux/src/lib/component/typeahead/typeahead.module';
import { debounceTime, distinctUntilChanged, map, Observable, OperatorFunction } from 'rxjs';


const states = [
	'Alabama',
	'Alaska',
	'American Samoa',
	'Arizona',
	'Arkansas',
	'California',
	'Colorado',
	'Connecticut',
	'Delaware',
	'District Of Columbia',
	'Federated States Of Micronesia',
	'Florida',
	'Georgia',
	'Guam',
	'Hawaii',
	'Idaho',
	'Illinois',
	'Indiana',
	'Iowa',
	'Kansas',
	'Kentucky',
	'Louisiana',
	'Maine',
	'Marshall Islands',
	'Maryland',
	'Massachusetts',
	'Michigan',
	'Minnesota',
	'Mississippi',
	'Missouri',
	'Montana',
	'Nebraska',
	'Nevada',
	'New Hampshire',
	'New Jersey',
	'New Mexico',
	'New York',
	'North Carolina',
	'North Dakota',
	'Northern Mariana Islands',
	'Ohio',
	'Oklahoma',
	'Oregon',
	'Palau',
	'Pennsylvania',
	'Puerto Rico',
	'Rhode Island',
	'South Carolina',
	'South Dakota',
	'Tennessee',
	'Texas',
	'Utah',
	'Vermont',
	'Virgin Islands',
	'Virginia',
	'Washington',
	'West Virginia',
	'Wisconsin',
	'Wyoming',
];

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [NgbDropdownModule, DropdownComponent, JsonPipe, NgbTypeaheadModule, FormsModule],
  template: `
    <h1>Dropdown</h1>

		<ux-dropdown icon="person" title="Dropdown" placement="bottom-right" [items]="items" />

		A typeahead example that gets values from a static <code>string[]</code>
		<ul>
			<li><code>debounceTime</code> operator</li>
			<li>kicks in only if 2+ characters typed</li>
			<li>limits to 10 results</li>
		</ul>

		<label for="typeahead-basic">Search for a state:</label>
		<input id="typeahead-basic" type="text" class="form-control" [(ngModel)]="model" [ngbTypeahead]="search" />

		<hr />
		<pre>Model: {{ model | json }}</pre>
  `,
  styles: ``
})
export class DropdownPage {
	items = [
		{ title: 'Action - 1', action: () => alert('Action - 1') },
		{ title: 'Another Action', action: () => alert('Another Action') },
		{ title: 'Something else is here' },
	];

	model: any;

	search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(200),
			distinctUntilChanged(),
			map((term) =>
				term.length < 1 ? [] : states.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10),
			),
		);
}
