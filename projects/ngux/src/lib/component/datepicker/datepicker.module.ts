import { NgModule } from '@angular/core';
import { NgbDatepicker, NgbDatepickerContent } from './datepicker';
import { NgbDatepickerMonth } from './datepicker';
import { NgbInputDatepicker } from './datepicker-input.directive';

export { NgbDatepicker, NgbDatepickerContent, NgbDatepickerNavigateEvent, NgbDatepickerState } from './datepicker';
export { NgbInputDatepicker } from './datepicker-input.directive';
export { NgbCalendar, NgbPeriod, NgbCalendarGregorian } from './ngb-calendar';
export { NgbDatepickerMonth } from './datepicker';
export { NgbDatepickerDayView } from './datepicker-day-view';
export { NgbDatepickerNavigation } from './datepicker-navigation';
export { NgbDatepickerNavigationSelect } from './datepicker-navigation-select';
export { NgbDatepickerConfig } from './datepicker-config';
export { NgbInputDatepickerConfig } from './datepicker-input-config';
export { NgbDatepickerI18n, NgbDatepickerI18nDefault } from './datepicker-i18n';
export { NgbDateStruct } from './ngb-date-struct';
export { NgbDate } from './ngb-date';
export { NgbDateAdapter, NgbDateStructAdapter } from './adapters/ngb-date-adapter';
export { NgbDateNativeAdapter } from './adapters/ngb-date-native-adapter';
export { NgbDateNativeUTCAdapter } from './adapters/ngb-date-native-utc-adapter';
export { NgbDateParserFormatter } from './ngb-date-parser-formatter';
export { NgbDatepickerKeyboardService } from './datepicker-keyboard.service';

const NGB_DATEPICKER_DIRECTIVES = [NgbDatepicker, NgbDatepickerContent, NgbInputDatepicker, NgbDatepickerMonth];

@NgModule({
	exports: NGB_DATEPICKER_DIRECTIVES,
	imports: NGB_DATEPICKER_DIRECTIVES,
})
export class NgbDatepickerModule {}
