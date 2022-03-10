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
  OnTheClock:Employee[] = [new Employee("fake data",true,"")];
  tableColumns = ['ID', 'Name', 'Type'];
  db:Employee[] = []; //all load data form confirmed employees stored in this array 
  consoleResponse = ""; 

  constructor(private http: HttpClient, private changeDetectorRefs:ChangeDetectorRef) { 
    this.sf = new ServerFunctions(http);
  }

  ngOnInit() {
    //On init Load data from database of employess with status==True
    //this.OnTheClock.push(new Employee("Johnson",false,'fjhdfh'));
    //this.OnTheClock = this.sf.GetEmployeesClockedIn(this.db);
    this.LoadDatabase()
    console.log(this.OnTheClock)
    console.log(this.OnTheClock.length)
  }

  LoadDatabase(){
    //returns an array of employee data 
    this.http.get<{[key: string]:Employee}>("https://ng-clock-in-app-default-rtdb.firebaseio.com/employees.json"
    ).pipe(
        map(responseData => {
            const employeeData:Employee[] = [];
            for(const key in responseData){
                if(responseData.hasOwnProperty(key)){
                    this.OnTheClock.push({...responseData[key], dbID:key})
                }
            }
            return employeeData;
        })
    ).subscribe( data => {
      data.forEach(e => {
        this.db.push(new Employee(e.name, e.eType, e.dbID));
        this.OnTheClock.push(new Employee(e.name, e.eType, e.dbID))
      })
    });
    console.log("LoadDatabase function completed");
  }

  DetectChanges(){
    this.changeDetectorRefs.detectChanges();
  }

  EnterValidID(){
    this.consoleResponse = "enter a valid id"
  }

  FormSubmission(){
    let eid = Number(this.userInput);
    if (!isNaN(eid)){ //check if the input is a number 
      if(this.CheckDB(eid)){ //check DB for employee 
        if(this.CheckClock(eid)){ //check clock for employee 
          this.ClockOut(eid);
        }else{
          this.ClockIn(eid);
        }
      }else{this.EnterValidID()}
    }else{this.EnterValidID}
    //confirm employee exists in database by confirming id exist in database
    //continue if employee exists: else return message saying employee does not exist
    //check if employee is clocked in 
    //if employee is not clocked in, clock employee in and vice versa 
    //if not clocked in consoleResponse = "employee not found in system"
    //when clocking in or out, change status of employee
    this.ClearConsole();
  }
  ClearConsole(){
    setTimeout(() => { 
      this.consoleResponse = "";
      this.userInput = "";
   }, 4000); //clears console after 4 seconds 
  }

  ClockIn(id:Number){
    //change employees clocked in status to true 
    let employee = this.GetEmployee(id);
    employee.status = true; 
    this.consoleResponse = `CLOCKED IN -- HELLO ${employee.name}!`;
  }

  ClockOut(id:Number){
    //change employees clocked in status to false
    let employee = this.GetEmployee(id);
    employee.status = false; 
    this.consoleResponse = `CLOCKED OUT -- BYE ${employee.name}!`;  
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

  GetEmployee(id:Number){
    let employee = new Employee("",false,"");
    this.db.forEach(e => {
      if(id == e.id){
        employee = e;
      }
    })
    return employee;
  }

  LoadClock(){
    console.log("Inside LoadClock")
  }

}
