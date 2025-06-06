import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Employee } from '../../../models/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'employee-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})


export class EmployeeFormComponent {

  employee: Employee = {
    email: '',
    lastName: '',
    firstName: '',
    id:0,
    phone:'',
    position:'',
  };
  errorMsg: string = '';

    constructor(private employeeService: EmployeeService, private router:Router){}

  OnSubmit(): void {
    console.log(`On submit: `,this.employee);
    this.employeeService.createEmployee(this.employee)
    .subscribe(
      {
      next: (result) => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Error creating employee:', err);
        this.errorMsg = `Error: ${err.status} - ${err.message}`;
      }
    }
    );
  }

}
