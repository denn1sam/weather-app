import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Weather } from '@services/forecast/forecast.model';

@Component({
  selector: 'weather-app-day-forecast-small',
  templateUrl: './day-forecast-small.component.html',
  styleUrls: ['./day-forecast-small.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayForecastSmallComponent {
  @Input() public set weather(weather: Weather[] | null | undefined) {
    if (weather?.[0]) {
      this.setShortWeather(weather[0]);
    }
  }

  public shortInfo!: Weather;

  public dayName?: string;
  public dayNumber?: number;
  public icon?: string;
  public minTemp?: number;
  public maxTemp?: number;

  private setShortWeather(weather: Weather) {
    console.log(new Date(weather.dt_txt).getDay());
    const dayOfTheWeek = new Date(weather.dt_txt).getUTCDay();
    const dayNumber = new Date(weather.dt_txt).getUTCDate();
    this.dayName = DAY_OF_WEEK.get(dayOfTheWeek);
    this.dayNumber = dayNumber;
    this.icon = weather.weather?.[0]?.icon;
    this.minTemp = weather.main.temp_min;
    this.maxTemp = weather.main.temp_max;
  }
}

export const DAY_OF_WEEK = new Map<number, string>([
  [0, 'Monday'],
  [1, 'Tuesday'],
  [2, 'Wednesday'],
  [3, 'Thursday'],
  [4, 'Friday'],
  [5, 'Saturday'],
  [6, 'Sunday'],
]);
