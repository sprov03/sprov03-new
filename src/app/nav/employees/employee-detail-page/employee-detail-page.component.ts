import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Employee, EmployeeService} from '../../../services/employee.service';

@Component({
  selector: 'app-employee-detail-page',
  templateUrl: './employee-detail-page.component.html',
  styles: []
})
export class EmployeeDetailPageComponent implements OnInit {
  employee: Employee;

  constructor(
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.employeeService.getEmployee(parseInt(params.employee_id, 10)).subscribe(employee => {
        this.employee = employee;
      });
    });
  }
}
