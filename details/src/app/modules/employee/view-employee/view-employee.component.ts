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
import { ToastrService } from 'ngx-toastr';


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
  particularEmpData: any;
  constructor(private dataService: EmployeeService, private modalService: BsModalService,private toastr: ToastrService) {}

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
  openModal(template: TemplateRef < any > , empData): void {
    if (empData) {
      this.particularEmpData = empData;
    } else {
      this.particularEmpData = null;
    }
    this.modalRef = this.modalService.show(template);
  }
  addEmployee(empValue): void {
    console.log(empValue);
    this.dataService.addEmployee(empValue).subscribe(res => {
      this.toastr.success('Success', 'Employee added successfully!');
      this.employeeList();
      this.modalRef.hide();
    }, error => {
      console.log(error);
    })
  }


  delete(empId): void {
    console.log(empId);
    this.dataService.deleteEmployee(empId).subscribe(res => {
      console.log(res);
      this.toastr.error('Success', 'Employee deleted successfully!');
      this.employeeList();
    }, error => {
      console.log(error);
    })
  }

  updateEmployeeDetails(updatedData) {
    updatedData = {
      _id: this.particularEmpData._id,
      address: updatedData.address,
      firstName: updatedData.firstName,
      lastName: updatedData.lastName,
      profile_photo:updatedData.profile_photo
    }
    this.dataService.updateEmployee(updatedData).subscribe(res => {
      console.log(res);
      this.toastr.info('Success', 'Employee updated successfully!');

      this.employeeList();
      this.modalRef.hide();
    }, error => {
      console.log(error);
    })
  }
}
