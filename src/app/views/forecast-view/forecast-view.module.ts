import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ForecastViewComponent } from './forecast-view.component';
import { ForecastBoardComponent } from './shared-domain/components/forecast-board/forecast-board.component';

@NgModule({
  declarations: [ForecastViewComponent],
  imports: [CommonModule, ForecastBoardComponent, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  exports: [ForecastViewComponent],
})
export class ForecastViewModule {}
