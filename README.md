# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

By default you will see Lviv city, but you can find any other city by search field

If you want to see daily forecast for some of the day - just click on the day card to see the hourly forecast for one day

// The unit test were skipped - I know how to write them, but it would take too much time for me, if you have questions about this experience - we can discuss it :)
// Also I skip caching of the latest forecast (too much time to implement it), but If I implemented it, I would have used:

1. localStorage and write logic about how to check date of caching the last forecast (if more than 1h, so refetch it instead of getting it from localStorage)
2. Create ServiceWorker to handle caching
