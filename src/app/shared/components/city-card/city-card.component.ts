import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { City } from '@services/forecast/forecast.model';

@Component({
  selector: 'weather-app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
})
export class CityCardComponent {
  @Input() set city(city: City | undefined) {
    console.log(city);
    if (city) {
      this.mapProperties(city);
    }
  }

  @Output() public saveCity = new EventEmitter();

  public name!: string;
  public country!: string;

  public sunrise!: string;
  public sunset!: string;

  private mapProperties(city: City): void {
    this.name = city.name;
    this.country = city.country;

    const timeZone = city.timezone * 1000; // convert to milliseconds

    this.sunrise = new Date(city.sunrise + timeZone).toLocaleTimeString();
    this.sunset = new Date(city.sunset + timeZone).toLocaleTimeString();
  }
}
