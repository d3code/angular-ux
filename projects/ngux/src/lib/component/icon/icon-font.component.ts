import {
  Component,
  ElementRef,
  inject,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { default as outlined } from './fonts/MaterialSymbolsOutlined.json';
import { default as rounded } from './fonts/MaterialSymbolsRounded.json';
import { default as sharp } from './fonts/MaterialSymbolsSharp.json';

@Component({
  selector: 'ux-icon',
  standalone: true,
  template: `
    <span
      class="icon"
      [class.spin]="spin"
      [style.font-size.px]="size"
      [style.transform]="'rotate(' + rotate + 'deg)'"
      [style.font-weight]="weight"
      [style.transition]="'transform 0.3s'"
      style="font-variation-settings: 'FILL' {{fill ? 1 : 0}}, 'wght' {{weight}}, 'GRAD' {{grade}}, 'opsz' {{opticalSize}}"
    >
    </span>
  `,
})
export class IconFontComponent implements OnChanges {
  private element: HTMLElement = inject(ElementRef).nativeElement;

  @Input({ required: true }) name: string | undefined;
  @Input() weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 = 300;
  @Input() grade: -25 | 0 | 200 = 0;
  @Input() opticalSize: 20 | 24 | 40 | 48 = 24;
  @Input() fill: boolean = false
  @Input() style: 'rounded' | 'outline' | 'sharp' = 'rounded'

  // Animation
  @Input() spin: boolean = false;

  @Input() rotate: number = 0;
  @Input() size: number = 20;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.name === undefined) {
      throw new Error('Name is required');
    }
    const icon = this.getIcon();
    if (icon === undefined) {
      throw new Error(`Icon not found: ${this.name}`);
    }

    let span = this.element.firstElementChild;
    if (span) {
      span.innerHTML = '&#x' + icon + ';';
    }
  }
  
  icon: string | undefined;

  private getIcon(): string | undefined {
    if (this.style === 'outline') {
      return outlined[this.name as keyof typeof outlined];
    } else if (this.style === 'sharp') {
      return sharp[this.name as keyof typeof sharp];
    }
    return rounded[this.name as keyof typeof rounded];
  }
}
