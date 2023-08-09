import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Weather } from '@services/forecast/forecast.model';
import { DayForecastSmallComponent } from '@shared/components/day-forecast-small/day-forecast-small.component';
import { ForecastInfoType } from '@shared/components/day-forecast-small/shared-domain/config/forecast-info.enum';
import { CardDatePipe } from '@shared/pipes/card-date/card-date.pipe';

@Component({
  selector: 'weather-app-day-forecast-details',
  templateUrl: './day-forecast-details.component.html',
  styleUrls: ['./day-forecast-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, DayForecastSmallComponent, MatCardModule, CardDatePipe],
})
export class DayForecastDetailsComponent {
  @Input() set dayForecast(dayForecast: Weather[]) {
    if (dayForecast) {
      this.currentDay = dayForecast[0];
      this.dayForecastList = dayForecast;
    }
  }

  public forecastInfoType = ForecastInfoType;
  public dayForecastList!: Weather[];
  public currentDay!: Weather;
}
