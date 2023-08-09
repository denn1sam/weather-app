import { Pipe, PipeTransform } from '@angular/core';
import { DAY_OF_WEEK } from '@shared/constants/day-of-week.constant';
import { MONTH_OF_YEAR } from '@shared/constants/month-of-year.constant';

@Pipe({
  name: 'cardDate',
  standalone: true,
})
export class CardDatePipe implements PipeTransform {
  transform(date: string): string {
    const dayOfWeek = new Date(date).getUTCDay();
    const dayOfMonth = new Date(date).getDate();
    const monthOfYear = new Date(date).getUTCMonth();

    const currentDay = dayOfMonth;
    const currentDayOfWeek = DAY_OF_WEEK.get(dayOfWeek);
    const currentMonth = MONTH_OF_YEAR.get(monthOfYear);

    return `${currentDayOfWeek}, ${currentDay}, ${currentMonth}`;
  }
}
