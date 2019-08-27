/*
 *   Copyright (c) 2019 Created By: Sachin S. Bahegavankar
 *   All rights reserved.
 */

import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import {
  NgForm
} from '@angular/forms';

@Component({
  selector: 'add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.less']
})
export class AddEmployeeComponent implements OnInit {
  employeeData: any = {};
  @Output() addEmployee: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  submit(formValue: NgForm) {
    console.log(formValue);
    this.addEmployee.emit(formValue.value)
  }
}
