import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SearchFieldComponent } from '@shared/components/search-field/search-field.component';
import { ForecastViewComponent } from './forecast-view.component';
import { ForecastBoardComponent } from './shared-domain/components/forecast-board/forecast-board.component';

@NgModule({
  declarations: [ForecastViewComponent],
  imports: [CommonModule, ForecastBoardComponent, SearchFieldComponent, ReactiveFormsModule, MatProgressSpinnerModule],
  exports: [ForecastViewComponent],
})
export class ForecastViewModule {}
