import { NgModule } from '@angular/core';

import { NbTabComponent } from './tab.component';
import { NbTabsetComponent } from './tabset.component';
import { CommonModule } from '@angular/common';

const NB_TABSET_COMPONENTS = [NbTabsetComponent, NbTabComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [...NB_TABSET_COMPONENTS],
  exports: [...NB_TABSET_COMPONENTS],
})
export class NbTabsetModule {}
