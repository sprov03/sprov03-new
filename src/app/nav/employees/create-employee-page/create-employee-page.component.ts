import { Component, OnInit } from '@angular/core';
import {Employee, EmployeeService} from '../../../services/employee.service';

@Component({
  selector: 'app-create-employee-page',
  templateUrl: './create-employee-page.component.html',
  styles: []
})
export class CreateEmployeePageComponent implements OnInit {
  defaultEmployee: Employee;

  constructor(
    private employeeService: EmployeeService
  ) { }

  async ngOnInit() {
    this.employeeService.getEmployee(0).subscribe(employee => {
      delete(employee.id);
      this.defaultEmployee = employee;
    });
  }
}
