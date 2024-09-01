import { Component, inject, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '../../../../projects/ngux/src/lib/component/offcanvas/offcanvas';
import { OffcanvasDismissReasons } from '../../../../projects/ngux/src/lib/component/offcanvas/offcanvas-dismiss-reasons';

@Component({
  selector: 'app-sheet',
  standalone: true,
  imports: [],
  template: `
    <h1>Sheet</h1>

    <ng-template #content let-offcanvas>
      <div class="offcanvas-header">
        <h4 class="offcanvas-title" id="offcanvas-basic-title">Profile update</h4>
        <button type="button" class="btn-close" aria-label="Close" (click)="offcanvas.dismiss('Cross click')"></button>
      </div>
      <div class="offcanvas-body">
        <div class="text-end">
          <button type="button" class="btn btn-outline-secondary" (click)="offcanvas.close('Save click')">Save</button>
        </div>
      </div>
    </ng-template>

    <button class="btn btn-lg btn-outline-primary" (click)="open(content)">Launch demo offcanvas</button>

    <hr />

    <pre>{{ closeResult }}</pre>
  `,
  styles: ``
})
export class SheetPage {
  private offcanvasService = inject(NgbOffcanvas);
	closeResult = '';

	open(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		switch (reason) {
			case OffcanvasDismissReasons.ESC:
				return 'by pressing ESC';
			case OffcanvasDismissReasons.BACKDROP_CLICK:
				return 'by clicking on the backdrop';
			default:
				return `with: ${reason}`;
		}
	}

}
