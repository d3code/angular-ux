import { Component, inject, TemplateRef } from '@angular/core';
import { ModalDismissReasons, ModalModule, ModalService } from '../../../../projects/ngux/src/lib/component/modal/modal.module';
import { IconModule } from '../../../../projects/ngux/src/lib/component/icon/icon.module';


@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ModalModule, IconModule],
  template: `
    <h1>Modal</h1>

    <div class="mb-8">
      <p>This is a demo page for the modal component.</p>
    </div>

    <button class="btn btn-primary mb-2" (click)="open(content)">Launch demo modal</button>
    <pre>{{ closeResult }}</pre>

    <ng-template #content let-modal>
      <div class="modal-header">
        <h4 class="modal-title" id="modal-title">Profile update</h4>
        <a class="p-2" aria-label="Close" (click)="modal.dismiss('Cross click')">
          <ux-icon size="sm" name="close" [weight]="300"></ux-icon>
        </a>
      </div>
      <div class="modal-body">
        <p>One fine body…</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" (click)="modal.close('Save click')">Save</button>
      </div>
    </ng-template>
  `,
  styles: ``
})
export class ModalPage {
  private modalService = inject(ModalService);
	closeResult = '';

  open(content: TemplateRef<any>) {
		this.modalService.open(content, { animation: true }).result.then(
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
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}
}
