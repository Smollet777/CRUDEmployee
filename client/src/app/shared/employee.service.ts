import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
  selectedEmployee: Employee;
  employees: Employee[];

  constructor(private http: HttpClient) { }

  postEmployee(emp: Employee): Observable<Employee> {
    return this.http.post<Employee>(environment.baseUrl, emp);
  }

  getEmployeeList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(environment.baseUrl);
  }

  putEmployee(emp: Employee): Observable<Employee> {
    return this.http.put<Employee>(environment.baseUrl + `/${emp._id}`, emp);
  }

  deleteEmployee(_id: string): Observable<Employee> {
    return this.http.delete<Employee>(environment.baseUrl + `/${_id}`);
  }

}
