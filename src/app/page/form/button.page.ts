import { Component } from '@angular/core';
import { IconModule } from '../../../../projects/ngux/src/lib/component/icon/icon.module';
import { CodeComponent } from '../../../../projects/ngux/src/lib/component/code/code.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [IconModule, CodeComponent],
  template: `
    <h1>Button</h1>
    <p>Buttons are used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.</p>

    <!-- Types -->
    <div id="types">
      <h2>Button types</h2>
      <p>There are several types of buttons:</p>
      <ul>
        <li>Standard button: A standard button that can be clicked to perform an action.</li>
        <li>Icon button: A button that displays an icon instead of text.</li>
        <li>Link button: A button that looks like a link.</li>
        <li>Toggle button: A button that can be toggled on and off.</li>
      </ul>

      <ux-code [code]="buttonTypes"></ux-code>

      <div class="example">
        <button class="btn btn-primary">Standard button</button>
        <button class="btn btn-primary">
          <ux-icon name="menu"></ux-icon>
        </button>
        <a href="#" class="btn btn-primary">Link button</a>
      </div>
    </div>

    <!-- States -->
    <div id="states">
      <h2>Button states</h2>
      <p>Buttons can have different states:</p>
      <ul>
        <li>Enabled: The button can be clicked.</li>
        <li>Disabled: The button is not clickable.</li>
        <li>Active: The button is currently pressed down.</li>
      </ul>

      <div class="example">
        <button class="btn btn-primary">Enabled</button>
        <button class="btn btn-primary" disabled>Disabled</button>
        <button class="btn btn-primary active">Active</button>
      </div>
    </div>

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
        <button class="btn btn-sm btn-primary">Small</button>
        <button class="btn btn-sm btn-primary">
          <ux-icon [size]="16" name="menu"></ux-icon>
        </button>
        <button class="btn btn-primary">Medium</button>
        <button class="btn btn-primary">
          <ux-icon name="menu"></ux-icon>
        </button>
        <button class="btn btn-lg btn-primary">Large</button>
        <button class="btn btn-lg btn-primary">
          <ux-icon [size]="24" name="menu"></ux-icon>
        </button>
      </div>
    </div>

    <!-- Colors -->
    <div id="colors">
      <h2>Button colors</h2>
      <p>Buttons can have different colors:</p>
      <ul>
        <li>Primary: The primary button color.</li>
        <li>Secondary: The secondary button color.</li>
        <li>Success: The success button color.</li>
        <li>Warning: The warning button color.</li>
        <li>Danger: The danger button color.</li>
        <li>Info: The info button color.</li>
        <li>Light: The light button color.</li>
        <li>Dark: The dark button color.</li>
      </ul>

      <div class="example">
        <button class="btn btn-primary">Primary</button>
        <button class="btn btn-secondary">Secondary</button>
        <button class="btn btn-success">Success</button>
        <button class="btn btn-warning">Warning</button>
        <button class="btn btn-danger">Danger</button>
        <button class="btn btn-info">Info</button>
        <button class="btn btn-light">Light</button>
        <button class="btn btn-dark">Dark</button>
      </div>
    </div>
  `,
  styles: `
    .example {
      margin-top: 1rem;
      display: flex;
      flex-wrap: nowrap;
      > button {
        margin-right: 6px;
      }
    }
  `
})
export class ButtonPage {

  buttonTypes = `
    <button class="btn btn-primary">Standard button</button>
    <button class="btn btn-primary">
      <span class="icon-container">
        <span class="material-symbols">menu</span>
      </span>
    </button>
    <button class="btn btn-primary">
      <span class="icon-container">
        <span class="material-symbols">home</span>
      </span>  
      <span>Hello</span>
    </button>
    <button class="btn btn-primary">Link button</button>
    <button class="btn btn-primary btn-toggle">Toggle button</button>
  `
}
