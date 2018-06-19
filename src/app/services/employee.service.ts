import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  createdAt: Date;
}

@Injectable({providedIn: 'root'})
export class EmployeeService {
  private employeeUrl = '/api/employees';

  constructor(private http: HttpClient) {
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.employeeUrl}/${id}`);
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.employeeUrl}`);
  }

  updateEmployee(employee: Employee): Observable<null> {
    return this.http.put<null>(`${this.employeeUrl}/${employee.id}`, employee);
  }

  createEmployee(employee: Employee): Observable<null> {
    return this.http.post<null>(`${this.employeeUrl}`, employee);
  }

  saveEmployee(employee: Employee): Observable<null> {
    if (employee.id) {
      return this.updateEmployee(employee);
    } else {
      return this.createEmployee(employee);
    }
  }

  deleteEmployee(id: number): Observable<null> {
    return this.http.delete<null>(`${this.employeeUrl}/${id}`);
  }
}
