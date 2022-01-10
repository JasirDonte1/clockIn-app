import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../modles/Employee';
import { RegisterEmployeeComponent } from '../register-employee/register-employee.component';

@Component({
  selector: 'app-dialog-register',
  templateUrl: './dialog-register.component.html',
  styleUrls: ['./dialog-register.component.css']
})
export class DialogRegisterComponent implements OnInit {


  title = "Confirm New Employee Details";

  constructor() {}

  ngOnInit(): void {

  }

  

}
