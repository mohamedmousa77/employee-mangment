import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Employee } from '../../../models/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'employee-table',
  imports: [CommonModule],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css'
})

export class EmployeeTableComponent {
  employees: Employee[] = [];


  constructor( private employeeService: EmployeeService ) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
      console.log(data)
    })
  }
}
