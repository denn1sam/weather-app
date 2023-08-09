import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ForecastViewComponent } from './forecast-view.component';

@NgModule({
  declarations: [ForecastViewComponent],
  imports: [CommonModule],
  exports: [ForecastViewComponent],
})
export class ForecastViewModule {}
