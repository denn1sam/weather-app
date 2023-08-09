import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ForecastService } from '@services/forecast';
import { debounceTime, filter, startWith, switchMap } from 'rxjs';
import { lvivWeather } from './lviv-weather.constant';

@Component({
  selector: 'weather-app-forecast-view',
  templateUrl: './forecast-view.component.html',
  styleUrls: ['./forecast-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastViewComponent implements OnInit {
  public search = new FormControl<string>('');

  public forecast$ = this.search.valueChanges.pipe(
    startWith('Lviv'),
    debounceTime(400),
    filter(Boolean),
    switchMap(cityName => this.forecastService.getForecastFor5Days(cityName)),
  );

  constructor(private forecastService: ForecastService) {}

  public ngOnInit(): void {
    console.log(lvivWeather);
  }
}
