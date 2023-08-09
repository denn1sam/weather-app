import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { City, Forecast, Weather } from '@services/forecast/forecast.model';
import { slideIn } from '@shared/animations/slide-in.animation';
import { CityCardComponent } from '@shared/components/city-card/city-card.component';
import { DayForecastDetailsComponent } from '../day-forecast-details/day-forecast-details.component';
import { DayForecastWrapperComponent } from '../day-forecast-wrapper/day-forecast-wrapper.component';

@Component({
  selector: 'weather-app-forecast-board',
  templateUrl: './forecast-board.component.html',
  styleUrls: ['./forecast-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, DayForecastWrapperComponent, CityCardComponent, DayForecastDetailsComponent, MatCardModule],
  animations: [slideIn()],
})
export class ForecastBoardComponent {
  @Input() public set forecast(forecast: Forecast | null) {
    if (forecast) {
      this.mapForecast(forecast);
    }
  }

  public city?: City;

  public forecastFor5Days?: Weather[][];

  public dayForecast?: Weather[];

  public showDetails(dayForecast: Weather[]): void {
    this.dayForecast = dayForecast;
  }

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
