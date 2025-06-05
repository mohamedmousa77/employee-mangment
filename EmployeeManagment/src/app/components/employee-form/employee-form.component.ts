import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../../models/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'employee-form',
  imports: [FormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})


export class EmployeeFormComponent {

  constructor(private employeeService: EmployeeService){}

  
  employee: Employee = {
    email: '',
    lastName: '',
    firstName: '',
    id:0,
    phone:'',
    position:'',
  };

  OnSubmit(): void {
    console.log(`On submit: ${this.employee}`);
    // this.employeeService.createEmployee(this.employee)
    // .subscribe((result) => console.log(result));
  }

}
