export class Employee{
    name:string;

    id:number = -1;
    wage:number = 15.00; 

    status:boolean = false;

    eType:boolean = false;

    constructor(name:string, eType:boolean){
        this.name = name;
        this.eType = eType;
    }
    
}
export class Manager extends Employee {

    code:number;

    constructor(name:string, eType:boolean){
        super(name, eType);
        this.wage = 25.00;
        this.code = 12345;
    }
}