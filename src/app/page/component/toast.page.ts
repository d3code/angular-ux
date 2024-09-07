import { Component, inject, TemplateRef } from '@angular/core';
import { NgbTooltipModule } from '../../../../projects/ngux/src/lib/component/tooltip/tooltip.module';
import { ToastService } from '../../../../projects/ngux/src/lib/component/toast/toast.service';
import { NgTemplateOutlet } from '@angular/common';
import { NgbToastModule } from '../../../../projects/ngux/src/lib/component/toast/toast.module';

@Component({
  selector: 'app-toasts',
  standalone: true,
  imports: [NgbToastModule, NgTemplateOutlet],
  template: `
    @for (toast of toastService.toasts; track toast) {
    <ngb-toast
      [class]="toast.classname"
      [autohide]="true"
      [delay]="toast.delay || 5000"
      (hidden)="toastService.remove(toast)"
    >
      <ng-template [ngTemplateOutlet]="toast.template"></ng-template>
    </ngb-toast>
    }
  `,
  host: {
    class: 'toast-container position-fixed top-0 end-0 p-3',
    style: 'z-index: 1200',
  },
})
export class ToastsContainer {
  toastService = inject(ToastService);
}

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [NgbTooltipModule, ToastsContainer],
  template: `
    <h1>Toast</h1>

    <ng-template #standardTpl> I'm a standard toast </ng-template>

    <ng-template #successTpl> I'm a success toast </ng-template>

    <ng-template #dangerTpl>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#fff"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M10.872 6.831l1.695 3.904 3.654-1.561-1.79 3.426 3.333.954-3.417 1.338 2.231 4.196-4.773-2.582-2.869 2.287.413-3.004-3.792-.726 2.93-1.74-1.885-2.512 3.427.646.843-4.626zm-.786-6.831l-1.665 9.119-6.512-1.228 3.639 4.851-5.548 3.294 7.108 1.361-.834 6.076 5.742-4.577 9.438 5.104-4.288-8.064 6.834-2.677-6.661-1.907 3.25-6.22-6.98 2.982-3.523-8.114z"
        />
      </svg>
      Danger Danger !
    </ng-template>

    <p>
      Please click one of the button to see a Toast being displayed in the top
      right corner of your screen:
    </p>

    <div class="buttons">
      <button
        class="btn btn-primary"
        (click)="showStandard(standardTpl)"
        ngbTooltip="Will disappear in 5s"
      >
        Standard toast</button
      >&nbsp;
      <button
        class="btn btn-success"
        (click)="showSuccess(successTpl)"
        ngbTooltip="Will disappear in 10s"
      >
        Success toast</button
      >&nbsp;
      <button
        class="btn btn-danger"
        (click)="showDanger(dangerTpl)"
        ngbTooltip="Will disappear in 15s"
      >
        Danger toast</button
      >&nbsp;
    </div>

    <app-toasts aria-live="polite" aria-atomic="true"></app-toasts>
  `,
  styles: ``,
})
export class ToastPage {
  toastService = inject(ToastService);

  showStandard(template: TemplateRef<any>) {
    this.toastService.show({ template });
  }

  showSuccess(template: TemplateRef<any>) {
    this.toastService.show({
      template,
      classname: 'bg-success text-light',
      delay: 10000,
    });
  }

  showDanger(template: TemplateRef<any>) {
    this.toastService.show({
      template,
      classname: 'bg-danger text-light',
      delay: 15000,
    });
  }

  ngOnDestroy(): void {
    this.toastService.clear();
  }
}
