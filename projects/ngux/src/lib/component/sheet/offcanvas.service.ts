import { Injectable } from '@angular/core';
import { OffcanvasComponent } from './offcanvas.component';

@Injectable({
  providedIn: 'root',
})
export class OffcanvasService {
  constructor() {}
  offcanvasMap: Map<string, any> = new Map();

  add(offcanvas: OffcanvasComponent) {

    if (!offcanvas.trigger) {
      console.error('Offcanvas trigger not defined');
      return;
    }

    if (this.offcanvasMap.has(offcanvas.trigger)) {
      console.debug('Offcanvas trigger already exists, replacing: ' + offcanvas.trigger);
    }

    this.offcanvasMap.set(offcanvas.trigger, offcanvas);
  }

  get(trigger: string) {
    return this.offcanvasMap.get(trigger);
  }
}
