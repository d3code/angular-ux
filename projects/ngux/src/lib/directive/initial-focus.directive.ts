import { AfterContentChecked, AfterContentInit, Directive, ElementRef, HostBinding, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[initialFocus]',
  standalone: true
})
export class InitialFocusDirective implements AfterContentChecked {
  elementRef = inject(ElementRef);

  ngAfterContentChecked(): void {
    this.elementRef.nativeElement.focus();
  }
}
