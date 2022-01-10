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
  data: Employee[] = [
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
  }

 

}
