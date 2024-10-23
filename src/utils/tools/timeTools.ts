import moment from 'moment-jalaali';

export function getPersianDayOfWeek(enDate: string) {
  // this condition used for part of project that not converted to TS
  if ([null, undefined, '', 'null'].includes(enDate?.trim())) return '';
  const persianWeekDaysArray = ['یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'];

  return persianWeekDaysArray[moment(enDate).weekday()];
}

export function georgianDateToJalaliDate(enDate: string) {
  // this condition used for part of project that not converted to TS
  if ([null, undefined, '', 'null'].includes(enDate?.trim())) return '';

  return moment(enDate).format('jYYYY/jMM/jDD');
}

export function georgianDateTimeToTime(enDate: string) {
  // this condition used for part of project that not converted to TS
  if ([null, undefined, '', 'null'].includes(enDate?.trim())) return '';

  return moment(enDate).format('HH:mm:ss');
}

export function georgianDateTimeToJalaliDateTime(enDateTime: string) {
  // this condition used for part of project that not converted to TS
  if ([null, undefined, '', 'null'].includes(enDateTime?.trim())) return '';

  return moment(enDateTime).format('jYYYY/jMM/jDD - HH:mm');
}

export function georgianDateTimeToJalaliDateTimeWithSeconds(enDateTime?: string) {
  // this condition used for part of project that not converted to TS
  if ([null, undefined, '', 'null'].includes(enDateTime?.trim())) return '';

  return moment(enDateTime).format('HH:mm:ss - jYYYY/jMM/jDD');
}

export function jalaliDateToGeorgianDate(faDate: string) {
  // this condition used for part of project that not converted to TS
  if ([null, undefined, '', 'null'].includes(faDate?.trim())) return '';

  // if (!faDate) return null
  return isJalaliDateValid(faDate) ? moment(faDate, 'jYYYY/jMM/jDD').format('YYYY-MM-DD') : null;
}

export function jalaliDateToGeorgianDateTime(faDateTime: string) {
  // this condition used for part of project that not converted to TS
  if ([null, undefined, '', 'null'].includes(faDateTime?.trim())) return '';

  return moment(faDateTime, 'jYYYY/jMM/jDD').format('YYYY-MM-DDTHH:mm:ss');
}

export function jalaliDateTimeToGeorgianDateTime(faDateTime: string) {
  // this condition used for part of project that not converted to TS
  if ([null, undefined, '', 'null'].includes(faDateTime?.trim())) return '';

  return moment(faDateTime, 'jYYYY/jMM/jDDTHH:mm').format('YYYY-MM-DDTHH:mm:ss');
}

export function jalaliDateTimeToGregorianDateTimeWithNullReturn(faDateTime: string) {
  if ([null, undefined, '', 'null'].includes(faDateTime?.trim())) return null;
  if (faDateTime?.trim().includes('_')) return null;

  return moment(faDateTime, 'jYYYY/jMM/jDDTHH:mm').format('YYYY-MM-DDTHH:mm:ss');
}

export function getCurrentJalaliDate() {
  return moment().format('jYYYY/jMM/jDD');
}

export function getCurrentGregorianDateTime() {
  return moment().format('YYYY-MM-DDTHH:mm:ss');
}

// export function getStartOfMonth(date) {
export function getStartOfMonth(date?: string) {
  return moment(date).startOf('jMonth').format('jYYYY/jMM/jDD');
}

export function getStartOfYear() {
  return moment().startOf('jYear').format('jYYYY/jMM/jDD');
}

export function getCurrentTime() {
  return moment().format('HH:mm');
}

export function getValidTimeFromTimeString(timeString: string) {
  return moment(timeString, 'HH:mm').format('HH:mm');
}

export function getCurrentJalaliDateTime() {
  return moment().format('jYYYY/jMM/jDD - HH:mm');
}

export function isJalaliDateValid(date: string) {
  if (date) {
    return moment(date, 'jYYYY/jMM/jDD')._isValid;
  }

  return false;
}

export function isTimeValid(time: string): boolean {
  return moment(time, 'HH:mm')._isValid;
}

export function getDiffDate(startDate:string,endDate:string) {
  const date1 = moment(startDate); // First date
  const date2 = moment(endDate); // Second date
  // Calculate the difference in days
  const diffInDays = date2.diff(date1, "days");


  // Calculate the difference in months
  const diffInMonths = date2.diff(date1, "months");
  

  // Calculate the difference in years
  const diffInYears = date2.diff(date1, "years");

  const diffInHours = date2.diff(date1, "hours");
  const diffInMinutes = date2.diff(date1, 'minutes');
  

  return {
    year:diffInYears,
    month:diffInMonths,
    day:diffInDays,
    hours:diffInHours,
    minutes:diffInMinutes
  }
}

// moment(endDate).fromNow()