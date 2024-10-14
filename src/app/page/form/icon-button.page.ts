import { Component } from '@angular/core';
import { IconModule } from '../../../../projects/ngux/src/lib/component/icon/icon.module';
import { CodeComponent } from '../../../../projects/ngux/src/lib/component/code/code.component';
import { IconButtonComponent } from '../../../../projects/ngux/src/lib/component/button/icon-button.component';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [IconButtonComponent, CodeComponent],
  template: `
    <h1>Icon Button</h1>
    <p>Buttons are used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.</p>

    <!-- Sizes -->
    <div id="sizes">
      <h2>Button sizes</h2>
      <p>Buttons can have different sizes:</p>
      <ul>
        <li>Small: A small button.</li>
        <li>Medium: A medium button.</li>
        <li>Large: A large button.</li>
      </ul>

      <div class="example">
        <ux-icon-button name="add_circle" size="sm"></ux-icon-button>
        <ux-icon-button name="add_circle"></ux-icon-button>
        <ux-icon-button name="add_circle" size="lg"></ux-icon-button>
      </div>
    </div>


  `,
  styles: `
    .example {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem;
      align-items: flex-start;
    }
  `
})
export class IconButtonPage {

}
