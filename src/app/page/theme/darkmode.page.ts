import { Component } from '@angular/core';
import { DarkmodeModule } from '../../../../projects/ngux/src/lib/component/darkmode/darkmode.module';

@Component({
  selector: 'app-darkmode',
  standalone: true,
  imports: [DarkmodeModule],
  template: `
    <h1>Dark Mode</h1>
    <ux-darkmode></ux-darkmode>
  `,
  styles: ``
})
export class DarkmodePage {

}
