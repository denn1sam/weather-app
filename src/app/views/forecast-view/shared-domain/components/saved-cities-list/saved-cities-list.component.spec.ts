import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedCitiesListComponent } from './saved-cities-list.component';

describe('SavedCitiesListComponent', () => {
  let component: SavedCitiesListComponent;
  let fixture: ComponentFixture<SavedCitiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SavedCitiesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedCitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
