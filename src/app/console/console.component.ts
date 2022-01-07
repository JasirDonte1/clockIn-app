import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {

  userInput = "";
  output = ""

  constructor() { }

  ngOnInit(): void {
  }

 

}
