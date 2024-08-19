import { Directive, HostListener, Input } from '@angular/core';
import { OffcanvasService } from './offcanvas.service';

@Directive({
  selector: '[x-offcanvas]',
})
export class OffcanvasDirective {
  constructor(private offcanvasService: OffcanvasService) {}

  @HostListener('click')
  onClick() {
    if (!this.trigger) {
      console.error('Offcanvas trigger not defined');
      return;
    }

    let offcanvasTrigger = this.offcanvasService.get(this.trigger);
    if (!offcanvasTrigger) {
      console.error("Offcanvas trigger '" + this.trigger + "' not found");
      return;
    }

    offcanvasTrigger.toggleOffcanvas();
  }

  @Input('x-offcanvas')
  trigger: string | undefined;
}
