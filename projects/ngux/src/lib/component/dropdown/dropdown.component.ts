import { Component, Input } from '@angular/core';
import { NgbDropdownModule } from './dropdown.module';
import { IconModule } from '../icon/icon.module';

@Component({
  selector: 'ux-dropdown',
  standalone: true,
  imports: [NgbDropdownModule, IconModule],
  template: `
    <div ngbDropdown class="d-inline-block" [placement]="placement">
			<button type="button" class="btn btn-primary" ngbDropdownToggle>
				@if (icon) {
					<ux-icon class="ml-1" [name]="icon" />
				}
				<span class="ml-3 mr-1">{{title}}</span>
				<ux-icon name="arrow_drop_down" />
			</button>
			<div ngbDropdownMenu>
				@for (item of items; track item) {
					@if (item.action) {
						<button (click)="item.action()" ngbDropdownItem>
							
							{{item.title}}
						</button>
					} @else {
						<button ngbDropdownItem>{{item.title}}</button>
					}
				}
			</div>
		</div>
	`,
  styles: `
  `,
})
export class DropdownComponent {
	@Input({required: true}) title: string;
	@Input() arrow: boolean = true;
	@Input() icon: string;

	@Input() placement: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' = 'bottom-right';
	
	@Input() items: DropdownMenuItem[] = [];

}

export type DropdownMenuItem = {
	title: string;
	action?: () => void;
}
