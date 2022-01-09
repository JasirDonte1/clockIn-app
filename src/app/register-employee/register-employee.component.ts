import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../modles/Employee';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {

  employee_name:string = "";
  eType:boolean = false;
  temp:Employee = new Employee('temp',false);
  test = "";
  

  constructor(private http: HttpClient, private router: Router) {
    
  }

  ngOnInit(): void {
  }

  SubmitEmployeeForm(){
    this.temp = new Employee(this.employee_name, this.eType);
    this.PostEmployeeData(this.temp);
    //this.router.navigate(['/']);
  }
  PostEmployeeData(data:Employee){
    this.http.post("https://ng-clock-in-app-default-rtdb.firebaseio.com/posts.json",data
    ).subscribe(response => {
      console.log(response);
    });
  }

}
