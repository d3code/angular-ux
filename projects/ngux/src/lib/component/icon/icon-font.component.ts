import {
  Component,
  ElementRef,
  HostBinding,
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
      [class.spin]="spin"
      [style.font-size.rem]="sizeValue"
      [style.transform]="'rotate(' + rotate + 'deg)'"
      [style.font-weight]="weight"
      [style.transition]="'transform 0.3s'"
      [style.font-family]="fontFamiliy"
      [style.line-height]="0"
      [style.position]="'relative'"
      [style.top.rem]="topValue"
      style="font-variation-settings: 'FILL' {{fill ? 1 : 0}}, 'wght' {{weight}}, 'GRAD' {{grade}}, 'opsz' {{opticalSizeValue}}"
    >
    </span>
  `,
  styles: `
  `
})
export class IconFontComponent implements OnChanges {
  private element: HTMLElement = inject(ElementRef).nativeElement;

  @Input({ required: true }) name: string | undefined;
  @Input() style: 'rounded' | 'outlined' | 'sharp' = 'rounded';
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' = 'md';

  // Font styling
  @Input() weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 = 200;
  @Input() grade: -25 | 0 | 200 = 0;
  @Input() fill: boolean = false;

  @Input() opticalSize: 20 | 24 | 40 | 48 | undefined;

  // Animation
  @Input() spin: boolean = false;

  // Transform
  @Input() rotate: number = 0;

  // Calculated values
  get opticalSizeValue(): number {
    if (this.opticalSize) {
      return this.opticalSize;
    }

    const size = ICON_DEFAULTS[this.size];
    if (size === undefined) {
      return ICON_DEFAULTS['md'].opticalSize;
    } else {
      return size.opticalSize;
    }
  }

  get sizeValue(): number {
    const size = ICON_DEFAULTS[this.size];
    if (size === undefined) {
      return ICON_DEFAULTS['md'].size;
    } else {
      return size.size;
    }
  }

  get topValue(): number {
    const size = ICON_DEFAULTS[this.size];
    if (size === undefined) {
      return ICON_DEFAULTS['md'].top;
    } else {
      return size.top;
    }
  }

  get fontFamiliy(): string {
    return ICONS[this.style].font;
  }

  // Set innerHTML of span element
  ngOnChanges(changes: SimpleChanges): void {
    if (this.name === undefined) {
      throw new Error('Name is required');
    }

    const iconFile = ICONS[this.style].file;
    const icon = iconFile[this.name as keyof typeof iconFile];
    if (icon === undefined) {
      throw new Error(`Icon not found: ${this.name}`);
    }

    let span = this.element.firstElementChild;
    if (span) {
      span.innerHTML = '&#x' + icon + ';';
    }
  }
}

const ICON_DEFAULTS = {
  'xs': {
    size: 1,
    opticalSize: 20,
    top: 0.2,
  },
  'sm': {
    size: 1.1,
    opticalSize: 20,
    top: 0.26,
  },
  'md': {
    size: 1.6,
    opticalSize: 24,
    top: 0.4,
  },
  'lg': {
    size: 2.2,
    opticalSize: 40,
    top: 0.65,
  },
  'xl': {
    size: 2.6,
    opticalSize: 48,
    top: 0.8,
  },
  '2xl': {
    size: 3.6,
    opticalSize: 48,
    top: 1.2,
  },
  '3xl': {
    size: 5.2,
    opticalSize: 48,
    top: 1.8,
  },
};

const ICONS = {
  'outlined': {
    'file': outlined,
    'font': 'Material Symbols Outlined',
  },
  'rounded': {
    'file': rounded,
    'font': 'Material Symbols Rounded',
  },
  'sharp': {
    'file': sharp,
    'font': 'Material Symbols Sharp',
  },
};