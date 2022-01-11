import { time } from "console";
import { Employee } from "./Employee";

export class Shift{

    employee:Employee;
    clockIn:Date;
    clockOut:Date;
    earned:number = 0; 

    constructor(employee:Employee){
        this.employee = employee;
        this.clockIn = new Date(); 
        this.clockOut = new Date();
    }

    ClockOutEmployee(){
        this.clockOut = new Date(); 
        this.CalculateEarned();
    }

    CalculateEarned(){
        let timeWorked = this.clockIn.getTime() - this.clockOut.getTime();
        this.earned = timeWorked * this.employee.wage; 
    }
}