import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout.component';
import { AccordionPage } from './page/layout/accordion.page';
import { CardPage } from './page/layout/card.page';
import { ThemePage } from './page/theme/theme.page';
import { ColorsPage } from './page/theme/colors.page';
import { DarkmodePage } from './page/theme/darkmode.page';
import { IconsPage } from './page/theme/icons.page';
import { CodePage } from './page/theme/code.page';
import { SheetPage } from './page/layout/sheet.page';
import { ButtonPage } from './page/form/button.page';
import { SelectPage } from './page/form/select.page';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'theme',
        children: [
          {
            path: 'theme',
            component: ThemePage,
          },
          {
            path: 'colors',
            component: ColorsPage,
          },
          {
            path: 'darkmode',
            component: DarkmodePage,
          },
          {
            path: 'icons',
            component: IconsPage,
          },
          {
            path: 'code',
            component: CodePage,
          },
        ],
      },
      {
        path: 'layout',
        children: [
          {
            path: 'accordion',
            component: AccordionPage,
          },
          {
            path: 'card',
            component: CardPage,
          },
          {
            path: 'sheet',
            component: SheetPage,
          },
        ],
      },
      {
        path: 'form',
        children: [
          {
            path: 'button',
            component: ButtonPage,
          },
          {
            path: 'select',
            component: SelectPage,
          },
        ],
      },
    ],
  },
];
