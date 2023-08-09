import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ForecastService } from '@services/forecast';
import { Subject, catchError, debounceTime, filter, of, shareReplay, startWith, switchMap, tap } from 'rxjs';

@Component({
  selector: 'weather-app-forecast-view',
  templateUrl: './forecast-view.component.html',
  styleUrls: ['./forecast-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastViewComponent {
  public search = new FormControl<string>('');

  public forecast$ = this.search.valueChanges.pipe(
    startWith('Lviv'),
    debounceTime(400),
    filter(Boolean),
    tap(() => this.isLoading$.next(true)),
    switchMap(cityName =>
      this.forecastService.getForecastFor5Days(cityName).pipe(
        tap(() => this.isLoading$.next(false)),
        catchError(() => {
          this.isLoading$.next(false);
          return of(null);
        }),
      ),
    ),
    shareReplay(1),
  );

  public isLoading$ = new Subject<boolean>();

  constructor(private forecastService: ForecastService) {}
}
