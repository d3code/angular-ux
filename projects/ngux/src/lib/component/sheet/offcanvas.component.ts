import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { getMaxIndex } from '../../../../services/util.service';
import { OffcanvasService } from './offcanvas.service';

@Component({
  selector: 'x-offcanvas',
  template: `
    <div class="offcanvas">
      <div class="offcanvas-content">
        <div class="text-right">
          <a close class="px-2 py-1" style="margin-right: -0.4rem">
            <i class="fa fa-thin fa-xl fa-times"></i>
          </a>
        </div>
        <div class="mb-24">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
})
export class OffcanvasComponent implements OnInit, OnDestroy {
  @Input() trigger: string | undefined;

  @Input() width: number = 400;
  @Input() background: boolean = true;

  @Input() fadeIn: number = 0.2;
  @Input() fadeOut: number = 0;

  @Input() container: string = 'body';

  // Component elements
  contentElement: HTMLElement;
  backgroundElement: HTMLElement;

  /**
   * ---------------------------------------------------------
   * Create background element when component is constructed
   * ---------------------------------------------------------
   */
  constructor(
    private el: ElementRef,
    private offcanvasService: OffcanvasService
  ) {
    this.contentElement = el.nativeElement;

    // Create background element
    this.backgroundElement = document.createElement('div');
    this.backgroundElement.style.top = '0';
    this.backgroundElement.style.left = '0';
    this.backgroundElement.style.width = '100%';
    this.backgroundElement.style.height = '100%';
    this.backgroundElement.style.position = 'fixed';
    this.backgroundElement.style.backgroundColor = 'rgba(0,0,0,0.3)';
    this.backgroundElement.onclick = () => this.ngOnDestroy();
  }

  /**
   * ---------------------------------------------------------
   * Initialize component
   * ---------------------------------------------------------
   */
  ngOnInit(): void {
    this.offcanvasService.add(this);

    // Setup content
    this.contentElement.hidden = true;
    this.contentElement.style.position = 'fixed';
    this.contentElement.style.width = this.width + 'px';
    this.contentElement.style.right = '-' + this.width + 'px';
  }

  /**
   * ---------------------------------------------------------
   * Remove background and hide content
   * ---------------------------------------------------------
   */
  ngOnDestroy(): void {
    this.hideDropdown();
  }

  /**
   * ---------------------------------------------------------
   * Show background
   * ---------------------------------------------------------
   */
  private showBackground(topIndex: number) {
    this.backgroundElement.style.zIndex = String(topIndex + 1);
    document.body.appendChild(this.backgroundElement);
  }

  // ---------------------------------------------------------
  // Hide or show dropdown content and background
  // ---------------------------------------------------------
  toggleOffcanvas() {
    if (this.contentElement.hidden) {
      this.showDropdown();
    } else {
      this.hideDropdown();
    }
  }

  showDropdown() {
    this.contentElement.style.transition = 'right ' + this.fadeIn + 's';

    // Set close triggers on [close] content elements
    var closeElements = Array.from(
      this.contentElement.querySelectorAll('[close], a')
    );
    closeElements.forEach((e) => {
      if (e instanceof HTMLElement) {
        e.onclick = () => this.ngOnDestroy();
      }
    });

    // Show dropdown
    this.contentElement.hidden = false;
    this.setContentPosition();

    // Set z-index
    const topIndex = getMaxIndex();
    this.contentElement.style.zIndex = (topIndex + 2).toString();

    // Create dropdown background
    if (this.background) {
      this.showBackground(topIndex);
    }

    // Show content by opacity with fade configuration
    this.contentElement.style.right = '0';
  }

  hideDropdown() {
    if (!this.contentElement) {
      return;
    }

    console.debug('Closing offcanvas', this.trigger);

    this.contentElement.style.transition = 'right ' + this.fadeOut + 's';
    setTimeout(() => {
      this.contentElement.hidden = true;
    }, this.fadeOut * 1000);

    this.contentElement.style.right = '-' + this.width + 'px';

    try {
      document.body.removeChild(this.backgroundElement);
    } catch (error) {
      console.debug('Background not a child');
    }
  }

  // ---------------------------------------------------------
  // Set position of the content element
  // ---------------------------------------------------------
  private setContentPosition() {
    // Get window width
    let windowWidth = document.body.clientWidth;

    // ------------------------------------------------------------
    // If bounding exists on ducument body set to bounding width
    // ------------------------------------------------------------

    const contentRect = this.contentElement.getBoundingClientRect();

    // Set y-position of dropdown
    this.contentElement.style.top = '0';
    this.contentElement.style.bottom = 0 + 'px';
    this.contentElement.style.right = 0 - contentRect.width + 'px';

    // Adjust position if off screen
    const updatedContentRect = this.contentElement.getBoundingClientRect();

    if (windowWidth < updatedContentRect.width + 20) {
      console.log('updating left');
      this.contentElement.style.width = windowWidth - 20 + 'px';
    }
  }
}
