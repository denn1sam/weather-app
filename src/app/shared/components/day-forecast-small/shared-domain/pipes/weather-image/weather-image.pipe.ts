import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherImage',
  standalone: true,
})
export class WeatherImagePipe implements PipeTransform {
  transform(imageCode: string): unknown {
    return `https://openweathermap.org/img/wn/${imageCode}@2x.png`;
  }
}
