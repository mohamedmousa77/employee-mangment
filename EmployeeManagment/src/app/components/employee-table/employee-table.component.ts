import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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


  constructor( private employeeService: EmployeeService, private router: Router ) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
      console.table(data)
    })
  }

  deleteEmployee(id:number): void {
    // Redirect the user to the page where can edite the emp info
    this.employeeService.deleteEmployee(id)
    .subscribe({
        next: (response) => {
          this.employees = this.employees.filter(e => e.id !== id);
        },
        error: (err) => {
          console.error('error deleting employee', err);
        }
      }
    );
  }

  editeEmployee(id:number, updateInfo:Employee): void {
    this.router.navigate(['/edite', id]);
    // this.employeeService.updateEmployee(id, updateInfo)
    // .subscribe({
    //     next: (response) => {
    //       this.employees = this.employees.filter(e => e.id !== id);
    //     },
    //     error: (err) => {
    //       console.error('error deleting employee', err);
    //     }
    //   }
    // );
  }


}
