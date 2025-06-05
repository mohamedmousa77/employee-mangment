import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../../enviroments/enviroment.prod';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = `${enviroment.apiUrl}/employee`;

  // private apiUrl = '';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {

    return this.http.get<Employee[]>(this.apiUrl);
  }

  // createEmployee(employee: Employee): Observable<Employee> {
    // return this.http.post<Employee>(this.apiUrl);
    // return this.http.post<Employee>(this.apiUrl, employee);
  // }
}
