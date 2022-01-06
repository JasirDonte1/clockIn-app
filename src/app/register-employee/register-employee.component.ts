import { Component, OnInit } from '@angular/core';
import { Employee } from '../modles/Employee';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {

  employee_name:string = "";
  manager_account:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  SubmitEmployeeForm(){
    
  }

}
