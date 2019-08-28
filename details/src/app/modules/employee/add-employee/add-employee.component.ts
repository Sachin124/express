/*
 *   Copyright (c) 2019 Created By: Sachin S. Bahegavankar
 *   All rights reserved.
 */

import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input
} from '@angular/core';
import {
  NgForm
} from '@angular/forms';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.less']
})
export class AddEmployeeComponent implements OnInit {
  employeeData: any = {};
  @Output() addEmployee: EventEmitter < any > = new EventEmitter();
  @Input() particularEmpData: any;
  @Output() updateEmployeeDetails:EventEmitter<any> = new EventEmitter();
  formData = new FormData()
  public files: NgxFileDropEntry[] = [];

  constructor(private dataService:EmployeeService) {}

  ngOnInit() {
    console.log(this.particularEmpData);
    if (this.particularEmpData) {
      this.employeeData = this.particularEmpData;
    } else {
      this.employeeData = {};
    }
  }

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
 
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
 
          // Here you can access the real file
          console.log(droppedFile.relativePath, file);
 // You could upload it like this:
  this.formData.append('avatar', file, droppedFile.relativePath)

          /**
          
 
          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })
 
          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/
 
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  uploadProfilePhoto(){
    this.dataService.uploadProfile(this.formData).subscribe(res=>{
      console.log(res);      
    },error=>{
      console.log(error);      
    })
  }
  public fileOver(event){
    console.log(event);
  }
 
  public fileLeave(event){
    console.log(event);
  }

  submit(formValue: NgForm) {
    console.log(formValue);
    this.addEmployee.emit(formValue.value);
  }

  update(formValue:NgForm):void{
    this.updateEmployeeDetails.emit(formValue.value);
  }
}
