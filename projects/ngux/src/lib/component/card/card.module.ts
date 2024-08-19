import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardHeaderComponent } from './card-header.component';
import { CardBodyComponent } from './card-body.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent
  ],
  exports: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent
  ]
})
export class CardModule { }
