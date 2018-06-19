import { Component, OnInit } from '@angular/core';
import * as date from 'date-fns';

class CalendarEvent {
  lable: string;
  date: Date;
}

class Day {
  date: Date;
  events: CalendarEvent[];
}

class Week {
  days: Day[];
}

@Component({
  selector: 'app-calendar-month-view',
  templateUrl: './calendar-month-view.component.html',
  styles: []
})
export class CalendarMonthViewComponent implements OnInit {
  view: 'month';
  weeks: Week[] = [];
  month: Date;
  months: string[];
  private monthDisplay: string;
  private date: any;
  private events: any;
  constructor() {
    this.date = date;
    this.months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
  }

  ngOnInit() {
    const now = new Date();
    this.monthDisplay = this.months[now.getMonth()];
    this.month = now;
    this.events = [
      {
        label: 'testing',
        date: date.addDays(new Date(), 2)
      }
    ];
    this.drawMonth();
  }

  drawMonth() {
    const startOfMonth = date.startOfMonth(this.month);
    const startOfMonthCalendar = date.startOfWeek(startOfMonth);
    let week;
    let day = startOfMonthCalendar;

    this.weeks = [];

    do {
      week = {
        days: [],
      };

      do {
        console.log(date.isBefore(day, date.addDays(day, 2)));
        console.log(date.isAfter(day, date.addDays(day, 2)));
        console.log(date.isAfter(day, date.addDays(day, -2)));
        const events = this.events.reduce((carry, event) => {
          if (date.isAfter(event.date, date.startOfDay(day)) && date.isBefore(event.date, date.endOfDay(day))) {

            carry.push(event);

          }
          return carry;
        }, []);
        week.days.push({date: day, events: events});
        day = date.addDays(day, 1);
      } while (! date.isSameDay(date.startOfWeek(day), day));
      this.weeks.push(week);
    } while (date.isSameMonth(day, startOfMonth));
  }

  previousMonth() {
    this.month = date.addMonths(this.month, -1);
    this.drawMonth();
  }

  currentMonth() {
    this.month = new Date();
    this.drawMonth();
  }

  nextMonth() {
    this.month = date.addMonths(this.month, 1);
    this.drawMonth();
  }
}
