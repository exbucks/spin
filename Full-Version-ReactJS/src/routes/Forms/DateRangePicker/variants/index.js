import DateRangePicker from './DateRangePicker';
import DateRangeInputProps from './DRPInputProps';
import DateRangeCalendarProps from './DRPCalendarProps';
import DateRangeDayProps from './DRPDayProps';
import SingleDatePicker from './SingleDatePicker';
import SingleDateInputProps from './SDPInputProps';
import SingleDateCalendarProps from './SDPCalendarProps';
import SingleDateDayProps from './SDPDayProps';
import DayPickerRangeController from './DayPickerRangeController';
import DayPickerProps from './DayPicker';
import BootstrapDateRangeProps from './BootstrapDateRangeProps';
import BootstrapDateProps from './BootstrapDateProps';

const mergedVariants = [].concat(
    DateRangePicker,
    DateRangeInputProps,
    DateRangeCalendarProps,
    DateRangeDayProps,

    SingleDatePicker,
    SingleDateInputProps,
    SingleDateCalendarProps,
    SingleDateDayProps,

    DayPickerRangeController,
    DayPickerProps,

    BootstrapDateRangeProps,
    BootstrapDateProps
);

export {
    DateRangePicker,
    DateRangeInputProps,
    DateRangeCalendarProps,
    DateRangeDayProps,

    SingleDatePicker,
    SingleDateInputProps,
    SingleDateCalendarProps,
    SingleDateDayProps,

    DayPickerRangeController,
    DayPickerProps,

    BootstrapDateRangeProps,
    BootstrapDateProps,
    
    mergedVariants
}
