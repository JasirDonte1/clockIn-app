import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../modles/Employee';
import { RegisterEmployeeComponent } from '../register-employee/register-employee.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-register',
  templateUrl: './dialog-register.component.html',
  styleUrls: ['./dialog-register.component.css']
})
export class DialogRegisterComponent implements OnInit {


  title = "Confirm New Employee Details";
  name:string = "";

  @Input() public employeeData: any;

  constructor() {
  }

  ngOnInit(): void {
  }



  

}
