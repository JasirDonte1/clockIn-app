import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../modles/Employee';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {

  userInput = "";
  output = ""
  OnTheClock: Employee[] = [
    {
      name: "Bob",
      id: 123,
      wage: 15.00,
      status: true,
      eType: false
    },
    {
      name: "Tom",
      id: 345,
      wage: 15.00,
      status: true,
      eType: false
    },
    {
      name: "Rob",
      id: 678,
      wage: 15.00,
      status: false,
      eType: true
    },
    {
      name: "Lex",
      id: 123,
      wage: 15.00,
      status: true,
      eType: false
    },
    {
      name: "Jon",
      id: 345,
      wage: 15.00,
      status: true,
      eType: false
    },
    {
      name: "Jack",
      id: 678,
      wage: 15.00,
      status: false,
      eType: true
    },
    {
      name: "Tao",
      id: 345,
      wage: 15.00,
      status: true,
      eType: false
    },
    {
      name: "Coby",
      id: 678,
      wage: 15.00,
      status: false,
      eType: true
    }

  ];
  tableColumns = ['ID', 'Name', 'Type']; 
  
  consoleResponse = ""; 

  constructor() { }

  ngOnInit(): void {
    //On init Load data from database of employess with status==True
    
  }

 

  FormSubmission(){

    //confirm employee exists in database by confirming id exist in database
    //continue if employee exists: else return message saying employee does not exist
    //check if employee is clocked in 
    //if employee is not clocked in, clock employee in and vice versa 
    //if not clocked in consoleResponse = "employee not found in system"
    //when clocking in or out, change status of employee

  }

 

}
