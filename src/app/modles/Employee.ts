export class Employee{
    name:string;

    id:number = -1;
    wage:number = 15.00; 

    status:boolean = false;

    eType:number = 1;

    constructor(name:string){
        this.name = name;
    }
    
}
export class Manager extends Employee {

    code:number;

    constructor(name:string){
        super(name);
        this.wage = 25.00;
        this.code = 12345;
    }
}