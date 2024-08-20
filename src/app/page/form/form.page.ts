import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>Form</h1>

    <p>Forms are used to collect user input. This page demonstrates the various form elements available in the UX library.</p>

    <h2>Button</h2>
    <p>Buttons are used to submit forms, navigate to other pages, or trigger actions.</p>
    <a routerLink="/form/button">Button</a>
  `,
  styles: ``
})
export class FormPage {

}
