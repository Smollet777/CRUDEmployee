import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {
  selectedEmployee: Employee;
  employees: Employee[];
  readonly baseURL = `http://localhost:1337`;

  constructor(private http: HttpClient) { }

  postEmployee(emp: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseURL, emp);
  }

  getEmployeeList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseURL);
  }

  putEmployee(emp: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.baseURL + `/${emp._id}`, emp);
  }

  deleteEmployee(_id: string): Observable<Employee> {
    return this.http.delete<Employee>(this.baseURL + `/${_id}`);
  }

}
