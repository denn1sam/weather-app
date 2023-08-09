import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { City, Forecast, Weather } from '@services/forecast/forecast.model';
import { CityCardComponent } from '@shared/components/city-card/city-card.component';
import { DayForecastSmallComponent } from '@shared/components/day-forecast-small/day-forecast-small.component';

@Component({
  selector: 'weather-app-forecast-board',
  templateUrl: './forecast-board.component.html',
  styleUrls: ['./forecast-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, DayForecastSmallComponent, CityCardComponent],
})
export class ForecastBoardComponent {
  @Input() public set forecast(forecast: Forecast | null) {
    if (forecast) {
      this.mapForecast(forecast);
    }
  }

  public city?: City;

  public forecastFor5Days?: Weather[][];

  private mapForecast(forecast: Forecast): void {
    this.city = forecast.city;

    let dayOfWeek: number;

    const forecastFor5Days = forecast?.list.reduce((acc, weather) => {
      dayOfWeek = new Date(weather.dt_txt).getDay();

      if (acc[dayOfWeek]) {
        acc[dayOfWeek].push(weather);
      } else {
        acc[dayOfWeek] = [weather];
      }

      return acc;
    }, {} as Weather[][]);

    this.forecastFor5Days = Object.values(forecastFor5Days).sort((first, second) => first[0].dt - second[0].dt);

    console.log(this.forecastFor5Days);
  }
}
