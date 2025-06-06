import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Employee } from '../../../models/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'employee-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})


export class EmployeeFormComponent implements OnInit{

  errorMsg: string = '';
  isEditing: boolean = false;
  employee: Employee = {
    email: '',
    lastName: '',
    firstName: '',
    id:0,
    phoneNumber:'',
    position:'',
  };

  constructor(
    private employeeService: EmployeeService, 
    private router:Router, 
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
      this.route.paramMap.subscribe((result) => {
        const id = result.get('id');
        if(id){
          this.isEditing = true;
          this.employeeService.getEmployeeById(Number(id)).subscribe({
            next: (Response)=> this.employee = Response,
            error: (err) => console.log('Error loading the employee', err),
          });
        }
      });
    }

  OnSubmit(): void {
    if(this.isEditing){
      this.employeeService.updateEmployee(this.employee)
      .subscribe({
        next: (response) => {
          this.router.navigate(['/']);
        },
        error: (err) => {
          
          console.error('Error occured during editing employee:', err);
          this.errorMsg = `Error occured during editing employee: ${err.status}`;
        }
        })
    }else {
    this.employeeService.createEmployee(this.employee)
      .subscribe(
        {
        next: (result) => {
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Error occured during creating employee:', err);
          this.errorMsg = `Error occured during the creation of employee: ${err.status}`;
        }
      });
    }
    
  }

}
