import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Weather } from '@services/forecast/forecast.model';
import { DayForecastSmallComponent } from '@shared/components/day-forecast-small/day-forecast-small.component';
import { DayForecastDetailsComponent } from '../day-forecast-details/day-forecast-details.component';

@Component({
  selector: 'weather-app-day-forecast-wrapper',
  templateUrl: './day-forecast-wrapper.component.html',
  styleUrls: ['./day-forecast-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, DayForecastSmallComponent, DayForecastDetailsComponent],
})
export class DayForecastWrapperComponent {
  @Input() dayForecast!: Weather[];

  @Output() showDetails = new EventEmitter<void>();

  public showDayDetails(): void {
    this.showDetails.emit();
  }
}
