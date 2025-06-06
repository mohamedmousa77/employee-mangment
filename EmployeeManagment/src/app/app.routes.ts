import { Routes } from '@angular/router';

import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';

export const routes: Routes = [
    {path:'', component: EmployeeTableComponent},
    {path:'create', component: EmployeeFormComponent},
    {path:'employees', redirectTo: '', pathMatch:'full'},

];
