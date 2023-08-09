import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Forecast } from './forecast.model';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  private BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';
  private API_KEY = '8f3a67d403780d1d02b2b3d1dc283f0d';

  constructor(private http: HttpClient) {}

  public getForecastFor5Days(cityName: string): Observable<Forecast> {
    return this.http.get<Forecast>(`${this.BASE_URL}?q=${cityName}&APPID=${this.API_KEY}&units=metric`);
  }

  public getWeather(cityName: string): Observable<Forecast> {
    return this.http.get<Forecast>(`${this.BASE_URL}?q=${cityName}&APPID=${this.API_KEY}&units=metric`);
  }

  public getCurrent(cityName: string): Observable<Forecast> {
    return this.http.get<Forecast>(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${this.API_KEY}&units=metric`,
    );
  }
}
