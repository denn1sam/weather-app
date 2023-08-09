import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayForecastSmallComponent } from './day-forecast-small.component';

describe('DayForecastSmallComponent', () => {
  let component: DayForecastSmallComponent;
  let fixture: ComponentFixture<DayForecastSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayForecastSmallComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DayForecastSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
