import { Component } from '@angular/core';
import { IconModule } from '../../../../projects/ngux/src/lib/component/icon/icon.module';
import { CodeComponent } from '../../../../projects/ngux/src/lib/component/code/code.component';
import { ButtonComponent } from '../../../../projects/ngux/src/lib/component/button/button.component';
import { ButtonGroupComponent } from '../../../../projects/ngux/src/lib/component/button/button-group.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [IconModule, CodeComponent, ButtonComponent, ButtonGroupComponent],
  template: `
    <h1>Button</h1>
    <p>Buttons are used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.</p>

    <!-- Base class -->
    <div id="base">
      <h2>Base style</h2>
      <p>Buttons have a base style</p>

      <div class="example">
        <button>No class</button>
        <button class="btn">.btn Class</button>
        <button class="btn" disabled>Disabled</button>
      </div>
    </div>

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

      <div class="example">
        <button class="btn btn-primary">Standard button</button>
        <button class="btn btn-primary">
          <ux-icon name="menu"></ux-icon>
        </button>
        <button class="btn btn-primary">
          <ux-icon name="home"></ux-icon>
          <span class="pl-2">With text</span>
        </button>
        <a class="btn btn-primary">Link button</a>
      </div>

      <ux-code [code]="buttonTypes"></ux-code>
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
          <ux-icon name="menu" size="sm"></ux-icon>
        </button>
        <button class="btn btn-primary">Medium</button>
        <button class="btn btn-primary">
          <ux-icon name="menu"></ux-icon>
        </button>
        <button class="btn btn-lg btn-primary">Large</button>
        <button class="btn btn-lg btn-primary">
          <ux-icon name="menu" size="lg"></ux-icon>
        </button>
      </div>
    </div>

    <!-- Themes -->
    <div id="themes">
      <h2>Button themes</h2>
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

      <ux-code [code]="buttonThemes"></ux-code>
    </div>

    <!-- Group -->
    <div id="button-group">
      <h2>Button Group</h2>

      <div class="btn-group">
        <button class="btn btn-primary">Button 1</button>
        <button class="btn btn-primary">Button 2</button>
        <button class="btn btn-primary">Button 3</button>
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
export class ButtonPage {

  buttonTypes = `<button class="btn btn-primary">Standard button</button>
<button class="btn btn-primary">
  <ux-icon name="menu"></ux-icon>
</button>
<button class="btn btn-primary">
  <ux-icon name="menu"></ux-icon>
  <span class="pl-2" [weight]="300">With text</span>
</button>
<a class="btn btn-primary">Link button</a>`

  buttonThemes = `<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-light">Light</button>
<button class="btn btn-dark">Dark</button>`
}
