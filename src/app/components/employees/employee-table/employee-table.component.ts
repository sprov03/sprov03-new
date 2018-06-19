import { Component, OnInit } from '@angular/core';
import {Employee, EmployeeService} from '../../../services/employee.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styles: []
})
export class EmployeeTableComponent implements OnInit {
  employees: Employee[];
  displayedColumns = ['id', 'firstName', 'lastName', 'actions'];
  pendingAction = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().toPromise().then(employees => {
      this.employees = employees;
    });
  }

  deleteEmployee(id: number) {
    if (this.pendingAction) {
      return;
    }

    this.pendingAction = true;
    this.employeeService.deleteEmployee(id).toPromise()
      .then(response => {
        this.employees = this.employees.filter(employee => employee.id !== id);
      })
      .catch(response => {
        alert('Error: ');
        console.log(response);
      })
      .then(repsonse => {
        this.pendingAction = false;
      });
  }
}
