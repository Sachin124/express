/*
 *   Copyright (c) 2019 Created By: Sachin S. Bahegavankar
 *   All rights reserved.
 */

import {
  Routes
} from '@angular/router';
import {
  LayoutComponent
} from './layout/layout/layout.component';

// import {} from './modules/employee/employee.module'

export const AppRouting: Routes = [{
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      
      {
      path: 'dashboard',
      loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    {
      path:'employee',
      loadChildren: './modules/employee/employee.module#EmployeeModule'
    }
  ]
  }
]
