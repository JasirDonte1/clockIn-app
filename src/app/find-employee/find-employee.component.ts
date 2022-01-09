import { Component, OnInit } from '@angular/core';
import { Employee } from '../modles/Employee';
import {map, startWith} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-find-employee',
  templateUrl: './find-employee.component.html',
  styleUrls: ['./find-employee.component.css']
})
export class FindEmployeeComponent implements OnInit {

  search:string = ""; 
  found:Employee = new Employee('temp');
  employeeFound:boolean = false; 
  editConsole:boolean = false;
 
  
  constructor() {
   }

  ngOnInit(): void {
    
  }


}