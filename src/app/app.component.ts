import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DarkmodeService } from '../../projects/ngux/src/lib/component/darkmode/darkmode.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'angular-libs';
  darkMode = inject(DarkmodeService);

  constructor() {
    this.darkMode.init();
  }
}
