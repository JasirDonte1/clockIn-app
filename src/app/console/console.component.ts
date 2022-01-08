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
      eType: 1
    },
    {
      name: "Tom",
      id: 345,
      wage: 15.00,
      status: true,
      eType: 1
    },
    {
      name: "Rob",
      id: 678,
      wage: 15.00,
      status: false,
      eType: 2
    }
  ];
  tableColumns = ['ID', 'Name', 'Type']; 
  

  constructor() { }

  ngOnInit(): void {
  }

 

}
