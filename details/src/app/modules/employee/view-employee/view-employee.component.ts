/*
 *   Copyright (c) 2019 Created By: Sachin S. Bahegavankar
 *   All rights reserved.
 */

import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef
} from '@angular/core';
import {
  MatPaginator
} from '@angular/material/paginator';
import {
  MatTableDataSource
} from '@angular/material/table';
import {
  EmployeeService
} from '../service/employee.service';
import {
  BsModalService,
  BsModalRef
} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.less']
})
export class ViewEmployeeComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'address', 'action'];
  dataSource: MatTableDataSource < any > ;
  @ViewChild('scheduledOrdersPaginator', {
    static: true
  }) paginator: MatPaginator;
  modalRef: BsModalRef;
  constructor(private dataService: EmployeeService, private modalService: BsModalService) {}

  ngOnInit() {
    this.employeeList();
  }
  employeeList() {
    this.dataService.getEmployeeData().subscribe(res => {
      this.dataSource = new MatTableDataSource(res.reverse());
      console.log(this.dataSource);
      this.dataSource.paginator = this.paginator
    }, error => {
      console.log(error);
    })
  }
  openModal(template: TemplateRef < any > ) {
    this.modalRef = this.modalService.show(template);
  }

  addEmployee(empValue): void {
    console.log(empValue);
    this.dataService.addEmployee(empValue).subscribe(res => {
      console.log(res);
      this.employeeList();
      this.modalRef.hide();
    }, error => {
      console.log(error);
    })
  }

  editEmp(empData):void{
    console.log(empData);
    
  }

  delete(empId):void{
    console.log(empId);
    
  }
}
