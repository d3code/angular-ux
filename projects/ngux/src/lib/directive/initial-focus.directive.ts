import { Directive, ElementRef, HostBinding, inject, OnInit } from '@angular/core';

@Directive({
  selector: '[initialFocus]',
  standalone: true
})
export class InitialFocusDirective implements OnInit {
  elementRef = inject(ElementRef);

  ngOnInit(): void {
    this.elementRef.nativeElement.focus();
  }

  // @HostBinding('tabindex') tabindex = 0;
}
