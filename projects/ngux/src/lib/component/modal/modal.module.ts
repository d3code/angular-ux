import { NgModule } from '@angular/core';

import { ModalService } from './modal.service';

export { ModalService } from './modal.service';
export { NgbModalConfig, NgbModalOptions, NgbModalUpdatableOptions } from './modal-config';
export { NgbModalRef, NgbActiveModal } from './modal-ref';
export { ModalDismissReasons } from './modal-dismiss-reasons';

@NgModule({ providers: [ModalService] })
export class ModalModule {}
