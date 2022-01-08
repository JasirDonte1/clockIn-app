import { Component, OnInit } from '@angular/core';
import { Employee } from '../modles/Employee';

@Component({
  selector: 'app-find-employee',
  templateUrl: './find-employee.component.html',
  styleUrls: ['./find-employee.component.css']
})
export class FindEmployeeComponent implements OnInit {

  search:string = ""; 
  found:Employee = new Employee('temp');
  isFound:boolean = false; 

  constructor() { }

  ngOnInit(): void {
  }

}
