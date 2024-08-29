import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgSelectModule } from '../../../../projects/ngux/src/lib/component/select/ng-select.module';
import { InitialFocusDirective } from '../../../../projects/ngux/src/lib/directive/initial-focus.directive';
import { Observable } from 'rxjs';
import { DataService } from '../../service/data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CodeComponent } from "../../../../projects/ngux/src/lib/component/code/code.component";

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [NgSelectModule, InitialFocusDirective, FormsModule, CommonModule, CodeComponent],
  template: `
    <h1>Select</h1>

    <h2>Single</h2>
    <ng-select 
      initialFocus
      [items]="items"
      bindLabel="title"
      bindValue="id"
      [searchable]="true"
      placeholder="Search">
    </ng-select>
    
    <h2>Single <small>(populated)</small></h2>
    <ng-select 
      initialFocus
      [items]="items"
      bindLabel="title"
      bindValue="id"
      [searchable]="true"
      placeholder="Search"
      [(ngModel)]="selectedItem">
    </ng-select>

    <h4 class="mt-8">Multiple</h4>
    <ng-select
      [items]="people$ | async"
      [multiple]="true"
      [closeOnSelect]="false"
      [searchable]="true"
      bindLabel="name"
      placeholder="Select people">
    </ng-select>

    <h4 class="mt-8">Multiple <small>(populated)</small></h4>
    <ng-select
      [items]="people$ | async"
      [multiple]="true"
      [closeOnSelect]="false"
      [searchable]="true"
      bindLabel="name"
      placeholder="Select people"
      [(ngModel)]="selectedPeople">
    </ng-select>

    <div class="mt-3">
      <h6 class="my-4">Selected value:</h6>
      <ux-code [code]="selectedPeople | json" language="json"></ux-code>
    </div>
  `,
  styles: ``
})
export class SelectPage {
  data: any;
  items = [
    { id: 1, name: 'item1' },
    { id: 2, name: 'item2' }
  ]
  people$: Observable<any[]>;
	// selectedPeople = [];
  selectedPeople = [{ name: 'Karyn Wright' }];
	selectedItem = 2;

	ngOnInit() {
		this.people$ = this.dataService.getPeople();
	}

	clearModel() {
		this.selectedPeople = [];
	}

	changeModel() {
		this.selectedPeople = [{ name: 'New person' }];
	}

  constructor(private dataService: DataService, httpClient: HttpClient) {
    httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe((data: any) => {
      this.items = data;
    });

    httpClient.get('/assets/icons.json').subscribe((data: any) => {
      this.data = data;
    });
  }
}
