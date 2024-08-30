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
import { FormPage } from './page/form/form.page';
import { IntroductionPage } from './page/getting-started/introduction.page';
import { VariablesPage } from './page/theme/variables.page';
import { MenuPage } from './page/navigation/menu.page';
import { DatepickerPage } from './page/component/datepicker.page';
import { ModalPage } from './page/component/modal.page';
import { TypographyPage } from './page/theme/typography.page';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: IntroductionPage,
        pathMatch: 'full',
      },
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
            path: 'typography',
            component: TypographyPage,
          },
          {
            path: 'icons',
            component: IconsPage,
          },
          {
            path: 'variables',
            component: VariablesPage,
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
        path: 'component',
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
            path: 'code',
            component: CodePage,
          },
          {
            path: 'datepicker',
            component: DatepickerPage,
          },
          {
            path: 'modal',
            component: ModalPage,
          },
          {
            path: 'sheet',
            component: SheetPage,
          },
        ],
      },
      {
        path: 'navigation',
        children: [
          {
            path: 'menu',
            component: MenuPage,
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
            path: 'form',
            component: FormPage,
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
