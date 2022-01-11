import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogRegisterComponent } from '../dialog-register/dialog-register.component';
import { Employee } from '../modles/Employee';
import { ServerFunctions } from '../modles/ServerFunctions';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {

  sf:ServerFunctions;
  employee_name:string = "";
  eType:boolean = false;
  temp:Employee = new Employee('temp',false);
  test = "";
  

  constructor(private http: HttpClient, private router: Router, public dialog: MatDialog) {
    this.sf = new ServerFunctions(http);
  }

  ngOnInit(): void {
  }

  SubmitEmployeeForm(){
    this.temp = new Employee(this.employee_name, this.eType);
    //confirm account details 

    this.sf.RegisterEmployee(this.temp); //post data to server 
    //this.router.navigate(['/']);
    this.ConfirmEmployeeData();
  }

 

  ConfirmEmployeeData(){
    let dialogRef = this.dialog.open(DialogRegisterComponent);
  }


}
