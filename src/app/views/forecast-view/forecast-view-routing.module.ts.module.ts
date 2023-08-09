import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForecastViewComponent } from './forecast-view.component';
import { ForecastViewModule } from './forecast-view.module';

const routes: Routes = [
  {
    path: '',
    component: ForecastViewComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ForecastViewModule],
  exports: [RouterModule],
})
export class ForecastViewRoutingModule {}
