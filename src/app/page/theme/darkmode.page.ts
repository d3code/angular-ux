import { Component } from '@angular/core';
import { DarkmodeModule } from '../../../../projects/ngux/src/lib/component/darkmode/darkmode.module';

@Component({
  selector: 'app-darkmode',
  standalone: true,
  imports: [DarkmodeModule],
  template: `
    <h1>Dark Mode</h1>

    <h2>Toggle button</h2>
    <p>Use the <code>ux-darkmode</code> component to add a dark mode toggle button to your application.</p>
    <ux-darkmode></ux-darkmode>
  `,
  styles: ``
})
export class DarkmodePage {

}
