import { HttpClient, HttpRequest } from '@angular/common/http';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Employee } from '../modles/Employee';
import { ServerFunctions } from '../modles/ServerFunctions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {

  sf:ServerFunctions;
  userInput = "";
  output = "";
  OnTheClock = [
    {
      name: "Bob",
      id: 123,
      wage: 15.00,
      status: true,
      eType: false,
      dbID: "tempID"
    },
    {
      name: "Tom",
      id: 345,
      wage: 15.00,
      status: true,
      eType: false,
      dbID: "tempID"
    },
    {
      name: "Rob",
      id: 678,
      wage: 15.00,
      status: false,
      eType: true,
      dbID: "tempID"
    },
    {
      name: "Lex",
      id: 123,
      wage: 15.00,
      status: true,
      eType: false,
      dbID: "tempID"
    },
    {
      name: "Jon",
      id: 345,
      wage: 15.00,
      status: true,
      eType: false,
      dbID: "tempID"
    },

  ];
  tableColumns = ['ID', 'Name', 'Type'];
  db:Employee[] = [] //all load data form confirmed employees stored in this array 
  private changeDetectorRefs!: ChangeDetectorRef;
  consoleResponse = ""; 

  constructor(private http: HttpClient) { this.sf = new ServerFunctions(http)}

  ngOnInit(): void {
    //On init Load data from database of employess with status==True
    this.LoadDatabase();
    console.log(this.OnTheClock)    

    //this.OnTheClock = this.sf.GetEmployeesClockedIn(this.db);
  }

  LoadDatabase(){
    //returns an array of employee data 
    this.http.get<{[key: string]:Employee}>("https://ng-clock-in-app-default-rtdb.firebaseio.com/employees.json"
    ).pipe(
        map(responseData => {
            const employeeData: Employee[] = [];
            for(const key in responseData){
                if(responseData.hasOwnProperty(key)){
                    employeeData.push({...responseData[key], dbID:key})
                }
            }
            return employeeData;
        })
    ).subscribe( data => {
      data.forEach(e => {
        e = {
          name: e.name,
          id: e.id,
          wage: e.wage,
          status: e.status,
          eType: e.eType,
          dbID: e.dbID
        };
        console.log();
        this.OnTheClock.push(e);
      })
    }

    );
    this.changeDetectorRefs.detectChanges();
  }

  EnterValidID(){
    this.consoleResponse = "enter a valid id"
  }

  FormSubmission(){
    let eid = Number(this.userInput);
    if (!isNaN(eid)){ //check if the input is a number 
      if(this.CheckDB(eid)){

      }
    }

    //confirm employee exists in database by confirming id exist in database
    //continue if employee exists: else return message saying employee does not exist
    //check if employee is clocked in 
    //if employee is not clocked in, clock employee in and vice versa 
    //if not clocked in consoleResponse = "employee not found in system"
    //when clocking in or out, change status of employee

  }

  ClockIn(){
    //change employees clocked in status to true 
  }

  ClockOut(){
    //change employees clocked in status to false
  }

  CheckClock(id:Number)
  {
    let found = false;
    this.OnTheClock.forEach( e => 
    {
      if(id == e.id)
      {
        found = true;
      }
    });
    return found; 
  }
  CheckDB(id:Number){
    let found = false;
    this.db.every(e => {
      if(e.id == id){
        found = true;
      }
    });
    return found;
  }

}
