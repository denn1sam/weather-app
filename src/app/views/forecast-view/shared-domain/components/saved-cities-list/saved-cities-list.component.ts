import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'weather-app-saved-cities-list',
  templateUrl: './saved-cities-list.component.html',
  styleUrls: ['./saved-cities-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, MatChipsModule],
})
export class SavedCitiesListComponent {
  @Input() public citiesList: string[] | null = [];

  @Output() public selectCity = new EventEmitter<string>();
}
