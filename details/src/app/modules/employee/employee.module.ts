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


@NgModule({
  declarations: [ViewEmployeeComponent, AddEmployeeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(EmployeeRouting)
  ]
})
export class EmployeeModule { }
