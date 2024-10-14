import { Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { CardPage } from './page/layout/card.page';
import { ThemePage } from './page/theme/theme.page';
import { ColorsPage } from './page/theme/colors.page';
import { DarkmodePage } from './page/theme/darkmode.page';
import { IconsPage } from './page/component/icons.page';
import { CodePage } from './page/theme/code.page';
import { SheetPage } from './page/component/sheet.page';
import { ButtonPage } from './page/form/button.page';
import { SelectPage } from './page/component/select.page';
import { FormPage } from './page/form/form.page';
import { IntroductionPage } from './page/getting-started/introduction.page';
import { VariablesPage } from './page/theme/variables.page';
import { MenuPage } from './page/navigation/menu.page';
import { DatepickerPage } from './page/component/datepicker.page';
import { ModalPage } from './page/component/modal.page';
import { TypographyPage } from './page/theme/typography.page';
import { OptionGroupPage } from './page/component/option-group.page';
import { DropdownPage } from './page/component/dropdown.page';
import { AccordionPage } from './page/component/accordion.page';
import { CarouselPage } from './page/component/carousel.page';
import { CollapsePage } from './page/component/collapse.page';
import { FileUploadPage } from './page/component/file-upload.page';
import { PaginationPage } from './page/component/pagination.page';
import { PopoverPage } from './page/component/popover.page';
import { RatingPage } from './page/component/rating.page';
import { TabsetPage } from './page/component/tabset.page';
import { ToastPage } from './page/component/toast.page';
import { TooltipPage } from './page/component/tooltip.page';
import { TypeaheadPage } from './page/component/typeahead.page';
import { PastePage } from './page/component/paste.page';
import { IconButtonPage } from './page/form/icon-button.page';

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
            path: 'variables',
            component: VariablesPage,
          },
        ],
      },
      {
        path: 'layout',
        children: [
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
            path: 'carousel',
            component: CarouselPage,
          },
          {
            path: 'code',
            component: CodePage,
          },
          {
            path: 'collapse',
            component: CollapsePage,
          },
          {
            path: 'datepicker',
            component: DatepickerPage,
          },
          {
            path: 'dropdown',
            component: DropdownPage,
          },
          {
            path: 'file-upload',
            component: FileUploadPage,
          },
          {
            path: 'icons',
            component: IconsPage,
          },
          {
            path: 'icon-button',
            component: IconButtonPage,
          },
          {
            path: 'modal',
            component: ModalPage,
          },
          {
            path: 'option-group',
            component: OptionGroupPage,
          },
          {
            path: 'paste',
            component: PastePage,
          },
          {
            path: 'pagination',
            component: PaginationPage,
          },
          {
            path: 'popover',
            component: PopoverPage,
          },
          {
            path: 'rating',
            component: RatingPage,
          },
          {
            path: 'select',
            component: SelectPage,
          },
          {
            path: 'sheet',
            component: SheetPage,
          },
          {
            path: 'tabset',
            component: TabsetPage,
          },
          {
            path: 'toast',
            component: ToastPage,
          },
          {
            path: 'tooltip',
            component: TooltipPage,
          },
          {
            path: 'typeahead',
            component: TypeaheadPage,
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
            path: 'form',
            component: FormPage,
          },
          {
            path: 'button',
            component: ButtonPage,
          },
        ],
      },
    ],
  },
];
