import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styles: []
})
export class DatePickerComponent implements OnInit {
  @Input()
  formControlName: string;

  constructor() { }

  ngOnInit() {
  }
}
