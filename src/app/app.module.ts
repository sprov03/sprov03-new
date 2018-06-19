import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { HeroDashboardPageComponent } from './components/heros/hero-dashboard-page/hero-dashboard-page.component';
import { HeroListPageComponent } from './components/heros/hero-list-page/hero-list-page.component';
import { HeroDetailPageComponent } from './components/heros/hero-detail-page/hero-detail-page.component';

import { AppComponent } from './app.component';
import { HerosComponent } from './components/heros/heros.component';
import { HeroDetailsComponent } from './components/heros/hero-details/hero-details.component';
import { HeroNavComponent } from './nav/heros/hero-nav/hero-nav.component';
import { TodoNavComponent } from './nav/todo-nav/todo-nav.component';
import { TodoDashboardPageComponent } from './nav/todos/todo-dashboard-page/todo-dashboard-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatNativeDateModule,
  MatTableModule
} from '@angular/material';
import {TodoDetailPageComponent} from './nav/todos/todo-detail-page/todo-detail-page.component';
import { FormDashboardPageComponent } from './nav/forms/form-dashboard-page/form-dashboard-page.component';
import { FormNavComponent } from './nav/forms/form-nav/form-nav.component';
import { FormDetailPageComponent } from './nav/forms/form-detail-page/form-detail-page.component';
import { FinancialNavComponent } from './nav/financial-nav/financial-nav.component';
import { FinancialDashboardPageComponent } from './nav/financial-dashboard-page/financial-dashboard-page.component';
import { FinancialDetailPageComponent } from './nav/financial-detail-page/financial-detail-page.component';
import {MobxAngularModule} from 'mobx-angular';
import { CreateTransactionPageComponent } from './nav/financials/create-transaction-page/create-transaction-page.component';
import { DatePickerComponent } from './components/utilities/forms/date-picker/date-picker.component';
import { ScheduleDashboardPageComponent } from './components/schedules/schedule-dashboard-page/schedule-dashboard-page.component';
import { ScheduleNavComponent } from './components/schedules/schedule-nav/schedule-nav.component';
import {CalendarModule} from 'angular-calendar';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import { CalendarMonthViewComponent } from './components/utilities/calendars/calendar-month-view/calendar-month-view.component';
import { EmployeeNavComponent } from './nav/employees/employee-nav/employee-nav.component';
import { EmployeeDashboardPageComponent } from './nav/employees/employee-dashboard-page/employee-dashboard-page.component';
import { EmployeeListPageComponent } from './nav/employees/employee-list-page/employee-list-page.component';
import { EmployeeDetailPageComponent } from './nav/employees/employee-detail-page/employee-detail-page.component';
import { CreateEmployeePageComponent } from './nav/employees/create-employee-page/create-employee-page.component';
import { EmployeeTableComponent } from './components/employees/employee-table/employee-table.component';
import { EmployeeFormComponent } from './components/employees/employee-form/employee-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HeroDetailsComponent,
    HeroDashboardPageComponent,
    HeroListPageComponent,
    HeroDetailPageComponent,
    HeroNavComponent,
    TodoNavComponent,
    TodoDashboardPageComponent,
    TodoDetailPageComponent,
    FormDashboardPageComponent,
    FormNavComponent,
    FormDetailPageComponent,
    FinancialNavComponent,
    FinancialDashboardPageComponent,
    FinancialDetailPageComponent,
    CreateTransactionPageComponent,
    DatePickerComponent,
    ScheduleDashboardPageComponent,
    ScheduleNavComponent,
    CalendarMonthViewComponent,
    EmployeeNavComponent,
    EmployeeDashboardPageComponent,
    EmployeeListPageComponent,
    EmployeeDetailPageComponent,
    CreateEmployeePageComponent,
    EmployeeTableComponent,
    EmployeeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    // Material Design Modules
    MatCheckboxModule,
    MatTableModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,

    MobxAngularModule,
    HttpClientModule,

    // Calendar Module
    CalendarModule.forRoot(),
    NgbModalModule.forRoot(),
    // Ng2BootstrapModule,


// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
