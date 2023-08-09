import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayForecastWrapperComponent } from './day-forecast-wrapper.component';

describe('DayForecastWrapperComponent', () => {
  let component: DayForecastWrapperComponent;
  let fixture: ComponentFixture<DayForecastWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DayForecastWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayForecastWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
