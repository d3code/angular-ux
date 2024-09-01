import { Component } from '@angular/core';
import { ButtonOptionGroupComponent } from '../../../../projects/ngux/src/lib/component/button/button-option-group.component';

@Component({
  selector: 'app-option-group',
  standalone: true,
  imports: [ButtonOptionGroupComponent],
  template: `
    <h1>Option Group</h1>

    <p>
      The option group component is a simple button group that allows you to select one of many options.
    </p>

    <p>
      The options are passed to the component as an array of objects with a label and an id.
    </p>

    <p>
      The id of the selected option is stored in the value property of the component.
    </p>

    <p>
      The disabled property can be used to disable the entire group of buttons.
    </p>

    <p>
      The component implements the ControlValueAccessor interface so it can be used in reactive forms.
    </p>

    <ux-button-option-group
      [options]="[
        { id: 1, label: 'Option 1' },
        { id: 2, label: 'Option 2' },
        { id: 3, label: 'Option 3' },
      ]"
    />
  `,
  styles: ``
})
export class OptionGroupPage {

}
