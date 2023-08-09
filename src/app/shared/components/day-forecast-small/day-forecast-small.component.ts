import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Weather } from '@services/forecast/forecast.model';
import { DAY_OF_WEEK } from '@shared/constants/day-of-week.constant';
import { CardDatePipe } from '@shared/pipes/card-date/card-date.pipe';
import { ForecastInfoType } from './shared-domain/config/forecast-info.enum';

@Component({
  selector: 'weather-app-day-forecast-small',
  templateUrl: './day-forecast-small.component.html',
  styleUrls: ['./day-forecast-small.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule, CardDatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayForecastSmallComponent {
  @Input() public set weather(weather: Weather | null | undefined) {
    if (weather) {
      this.setShortWeather(weather);
    }
  }

  @Input() mode: ForecastInfoType = ForecastInfoType.Day;

  public forecastInfoType = ForecastInfoType;

  public dayName?: string;
  public dayTime?: string;
  public dayNumber?: number;
  public icon?: string;
  public minTemp?: number;
  public maxTemp?: number;

  private setShortWeather(weather: Weather) {
    const dayOfTheWeek = new Date(weather.dt_txt).getUTCDay();
    const dayNumber = new Date(weather.dt_txt).getUTCDate();

    this.dayName = DAY_OF_WEEK.get(dayOfTheWeek);
    this.dayNumber = dayNumber;
    this.dayTime = `${new Date(weather.dt_txt).getHours()}:00`;
    this.icon = weather.weather?.[0]?.icon;
    this.minTemp = Math.floor(weather.main.temp_min!);
    this.maxTemp = Math.floor(weather.main.temp_max!);
  }
}
