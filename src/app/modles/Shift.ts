import { Employee } from "./Employee";

export class Shift{

    employee:Employee;
    clockIn:Date;
    clockOut:Date;
    earned:number = -1;
    timeWorked:number = -1;

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
        this.timeWorked = this.clockIn.getTime() - this.clockOut.getTime();
        this.earned = this.timeWorked * this.employee.wage; 
    }
}