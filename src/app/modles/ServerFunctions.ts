import { Employee } from "./Employee";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

export class ServerFunctions{
    
    constructor(private http: HttpClient){}
    GetEmployeeByID(id:number){
        //returns a single employee by ID#
    }
    GetEmployeeToConfirm(){
        this.http.get("https://ng-clock-in-app-default-rtdb.firebaseio.com/confirm.json").subscribe();
    }
    PostEmployeeToConfirm(data:Employee){
        this.http.post("https://ng-clock-in-app-default-rtdb.firebaseio.com/confirm.json",data
        ).subscribe(response => {
            console.log(response);
        });
    }

    LoadDatabase(){
        //returns an array of employee data 
        this.http.get("https://ng-clock-in-app-default-rtdb.firebaseio.com/employees.json"
        ).subscribe(response => {
            console.log(response);
        });
    }

    returnClockedIn:Employee[] = [];
    GetEmployeesClockedIn(employees:Employee[]){
        //returns an array of employee data where status == true (clocked in)
        for(let employee of employees){
            if(employee.status == true){  //true means that an employee has clocked in 
                this.returnClockedIn.push(employee);
            }
        }
        return this.returnClockedIn;
    }

    VerifyEmployeeType(){
        //returns a boolean is a Employee is of type Manger 
    }

    VerifyEmployee(){
        //returns a boolean based on existence in database 
    }

    RegisterEmployee(data:Employee)
    {
        //registers new employee to database 
        this.http.post("https://ng-clock-in-app-default-rtdb.firebaseio.com/employees.json",data
        ).subscribe(response => {
            console.log(response);
        });
    }

   

    AddWorkShift(){
        //adds shift to database 
    }
}