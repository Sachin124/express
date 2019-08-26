/*
 *   Copyright (c) 2019 Created By: Sachin S. Bahegavankar
 *   All rights reserved.
 */

import { Routes } from '@angular/router';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

export const EmployeeRouting: Routes = [
  {
    path:'view',
    component: ViewEmployeeComponent
  }
]