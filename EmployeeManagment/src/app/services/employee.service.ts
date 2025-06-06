import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Employee } from '../../models/employee';
import { enviroment } from '../../enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = `${enviroment.apiUrl}/employee`;

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${id}`);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee);
  }

  deleteEmployee(id:number): Observable<void>{
    return this.http.delete<void> (`${this.apiUrl}/${id}`);
  }

  updateEmployee(updatedEmployeeInfo: Employee): Observable<Employee>{
    return this.http.put<Employee> (`${this.apiUrl}/${updatedEmployeeInfo.id}`,updatedEmployeeInfo);
  }
}
