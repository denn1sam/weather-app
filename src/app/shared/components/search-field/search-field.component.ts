import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { WeatherAppSubscription } from '@shared/rxjs/subscription';

@Component({
  selector: 'weather-app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SearchFieldComponent), multi: true }],
})
export class SearchFieldComponent implements OnInit, OnDestroy, ControlValueAccessor {
  public searchControl = new FormControl<string>('');
  public onChange: any = () => {};
  public onTouch: any = () => {};

  private _sub = new WeatherAppSubscription();

  public ngOnInit(): void {
    this._sub.sink = this.searchControl.valueChanges.subscribe((searchValue: any) => {
      this.value = searchValue;
    });
  }

  public ngOnDestroy(): void {
    this._sub.unsubscribe();
  }

  set value(searchValue: string) {
    this.onChange(searchValue);
    this.onTouch(searchValue);
  }

  public onValueChanges(searchValue: any): void {
    this.value = searchValue;
  }

  public writeValue(searchValue: string): void {
    this.value = searchValue;
  }
  public registerOnChange(onChanged: Function): void {
    this.onChange = onChanged;
  }
  public registerOnTouched(onTouched: Function): void {
    this.onTouch = onTouched;
  }
}
