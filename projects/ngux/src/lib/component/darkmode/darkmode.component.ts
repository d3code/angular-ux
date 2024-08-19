import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { DarkmodeService } from './darkmode.service';
import { IconModule } from '../icon/icon.module';

@Component({
  selector: 'ux-darkmode',
  standalone: true,
  imports: [IconModule, AsyncPipe],
  template: `
    <button class="btn btn-sm btn-light" (click)="darkmodeService.toggle()">
      <ux-icon [size]="16" [name]="mode"></ux-icon>
    </button>
  `,
  styles: ``
})
export class DarkmodeComponent implements OnInit {
  darkmodeService = inject(DarkmodeService);
  $mode = this.darkmodeService.$modeSubject;
  mode: 'light_mode' | 'mode_night' | 'night_sight_auto' = 'night_sight_auto';

  ngOnInit(): void {
    this.$mode.subscribe((mode) => {
      if (mode === 'dark') {
        this.mode = 'mode_night';
      } else if (mode === 'light') {
        this.mode = 'light_mode';
      } else {
        this.mode = 'night_sight_auto';
      }
    });
  }
}
