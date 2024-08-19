import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordionItemComponent } from './accordion-item.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccordionComponent,
    AccordionItemComponent
  ],
  exports: [
    AccordionComponent,
    AccordionItemComponent
  ]
})
export class AccordionModule { }
