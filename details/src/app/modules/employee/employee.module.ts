/*
 *   Copyright (c) 2019 Created By: Sachin S. Bahegavankar
 *   All rights reserved.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRouting } from './employee-routing.module';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [ViewEmployeeComponent, AddEmployeeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(EmployeeRouting),
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    ModalModule.forRoot(),
    MatIconModule,
    MatInputModule
  ],
  
})
export class EmployeeModule { }
