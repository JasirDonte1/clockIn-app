import { Employee } from "./Employee";
import { HttpClient } from "@angular/common/http";

export class ServerFunctions{
    
    constructor(private http: HttpClient){}
    GetEmployeeByID(id:number){
        //returns a single employee by ID#
    }
    LoadDatabase(){
        //returns an array of employee data 
    }
    GetEmployeesClockedIn(){
        //returns an array of employee data where status == true (clocked in)
    }

    VerifyEmployeeType(){
        //returns a boolean is a Employee is of type Manger 
    }

    VerifyEmployee(){
        //returns a boolean based on existence in database 
    }

    RegisterEmployee(data:Employee){
        //registers new employee to database 
        this.http.post("https://ng-clock-in-app-default-rtdb.firebaseio.com/posts.json",data
    ).subscribe(response => {
      console.log(response);
    });
    }

    AddWorkShift(){
        //adds shift to database 
    }
}