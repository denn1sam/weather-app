export interface Forecast {
  city: City;
  cnt: number;
  cod: string;
  list: Weather[];
  message: number;
}

export interface City {
  coord: Coord;
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}

export interface Coord {
  lat: number;
  lon: number;
}

export interface Weather {
  clouds: { all: number };
  dt: number;
  dt_txt: string;
  main: {
    temp?: number;
    feels_like?: number;
    temp_min?: number;
    temp_max?: number;
    pressure?: number;
    sea_level?: number;
    grnd_level?: number;
    humidity?: number;
    temp_kf?: number;
  };
  rain?: any;
  pop: number;
  sys: { pod: string };
  visibility: number;
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  }[];
  wind: { speed: number; deg: number; gust: number };
}
