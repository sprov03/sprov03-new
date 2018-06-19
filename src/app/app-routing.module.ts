///<reference path="nav/employees/employee-detail-page/employee-detail-page.component.ts"/>
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroDashboardPageComponent} from './components/heros/hero-dashboard-page/hero-dashboard-page.component';
import {HeroListPageComponent} from './components/heros/hero-list-page/hero-list-page.component';
import {HeroDetailPageComponent} from './components/heros/hero-detail-page/hero-detail-page.component';
import {HeroNavComponent} from './nav/heros/hero-nav/hero-nav.component';
import {TodoNavComponent} from './nav/todo-nav/todo-nav.component';
import {TodoDashboardPageComponent} from './nav/todos/todo-dashboard-page/todo-dashboard-page.component';
import {TodoDetailPageComponent} from './nav/todos/todo-detail-page/todo-detail-page.component';
import {FormDashboardPageComponent} from './nav/forms/form-dashboard-page/form-dashboard-page.component';
import {FormNavComponent} from './nav/forms/form-nav/form-nav.component';
import {FormDetailPageComponent} from './nav/forms/form-detail-page/form-detail-page.component';
import {FinancialNavComponent} from './nav/financial-nav/financial-nav.component';
import {FinancialDashboardPageComponent} from './nav/financial-dashboard-page/financial-dashboard-page.component';
import {FinancialDetailPageComponent} from './nav/financial-detail-page/financial-detail-page.component';
import {CreateTransactionPageComponent} from './nav/financials/create-transaction-page/create-transaction-page.component';
import {ScheduleDashboardPageComponent} from './components/schedules/schedule-dashboard-page/schedule-dashboard-page.component';
import {ScheduleNavComponent} from './components/schedules/schedule-nav/schedule-nav.component';
import {EmployeeNavComponent} from './nav/employees/employee-nav/employee-nav.component';
import {EmployeeDashboardPageComponent} from './nav/employees/employee-dashboard-page/employee-dashboard-page.component';
import {EmployeeListPageComponent} from './nav/employees/employee-list-page/employee-list-page.component';
import {EmployeeDetailPageComponent} from './nav/employees/employee-detail-page/employee-detail-page.component';
import {CreateEmployeePageComponent} from './nav/employees/create-employee-page/create-employee-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'heroes/dashboard', pathMatch: 'full'},
  {path: 'heroes', redirectTo: 'heroes/dashboard'},
  {path: 'heroes', component: HeroNavComponent, children: [
      {path: 'dashboard', component: HeroDashboardPageComponent},
      {path: 'list', component: HeroListPageComponent},
      {path: ':hero_id', component: HeroDetailPageComponent}
  ]},
  {path: 'todos', redirectTo: 'todos/dashboard'},
  {path: 'todos', component: TodoNavComponent, children: [
      {path: 'dashboard', component: TodoDashboardPageComponent},
      {path: 'list', component: TodoDashboardPageComponent},
      {path: ':todo_id', component: TodoDetailPageComponent}
  ]},
  {path: 'forms', redirectTo: 'forms/dashboard'},
  {path: 'forms', component: FormNavComponent, children: [
      {path: 'dashboard', component: FormDashboardPageComponent},
      {path: ':form_id', component: FormDetailPageComponent}
  ]},
  {path: 'financial', redirectTo: 'financial/dashboard'},
  {path: 'financial', component: FinancialNavComponent, children: [
      {path: 'dashboard', component: FinancialDashboardPageComponent},
      {path: ':financial_id', component: FinancialDetailPageComponent},
      {path: 'transactions/create', component: CreateTransactionPageComponent}
  ]},
  {path: 'schedule', redirectTo: 'schedule/dashboard'},
  {path: 'schedule', component: ScheduleNavComponent, children: [
      {path: 'dashboard', component: ScheduleDashboardPageComponent},
      // {path: 'list', component: TodoDashboardPageComponent},
      // {path: ':todo_id', component: TodoDetailPageComponent}
  ]},
  {path: 'employees', redirectTo: 'employees/dashboard'},
  {path: 'employees', component: EmployeeNavComponent, children: [
      {path: 'dashboard', component: EmployeeDashboardPageComponent},
      {path: 'list', component: EmployeeListPageComponent},
      {path: 'create', component: CreateEmployeePageComponent},
      {path: ':employee_id', component: EmployeeDetailPageComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
