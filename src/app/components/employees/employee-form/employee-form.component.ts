import {Component, Input, OnInit} from '@angular/core';
import {Employee, EmployeeService} from '../../../services/employee.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styles: []
})
export class EmployeeFormComponent implements OnInit {
  @Input()
  private employee: Employee;

  employeeFormGroup: FormGroup;
  updating = false;

  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.employeeFormGroup = this.formBuilder.group(this.employee);
  }

  async submit() {
    this.updating = true;
    this.employeeService.saveEmployee(<Employee> this.employeeFormGroup.value).subscribe(response => {
      this.updating = false;
      this.location.back();
    });
  }
}
