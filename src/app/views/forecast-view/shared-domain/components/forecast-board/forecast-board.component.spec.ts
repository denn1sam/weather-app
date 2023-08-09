import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastBoardComponent } from './forecast-board.component';

describe('ForecastBoardComponent', () => {
  let component: ForecastBoardComponent;
  let fixture: ComponentFixture<ForecastBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ForecastBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecastBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
