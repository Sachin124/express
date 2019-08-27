/*
 *   Copyright (c) 2019 Created By: Sachin S. Bahegavankar
 *   All rights reserved.
 */

import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  Observable
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {}

  getEmployeeData(): Observable < any > {
    return this.httpClient.get < any > (this.baseUrl + `employee`);
  }
  addEmployee(empData: any): Observable < any > {
    return this.httpClient.post < any > (this.baseUrl + `employee`, empData)
  }
}
