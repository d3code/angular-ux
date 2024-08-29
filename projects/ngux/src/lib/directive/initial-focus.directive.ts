import { AfterViewInit, Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[initialFocus]',
  standalone: true,
})
export class InitialFocusDirective implements AfterViewInit {
  elementRef = inject(ElementRef);

  ngAfterViewInit(): void {
    if (this.elementRef.nativeElement.tagName === 'NG-SELECT') {
      (this.elementRef.nativeElement as HTMLElement)
        .querySelector('input')
        ?.focus();
      return;
    }

    this.elementRef.nativeElement.focus();
  }
}
