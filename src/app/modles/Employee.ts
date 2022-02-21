export class Employee{
    name:string;

    id:number = -1;
    wage:number = 15.00; 

    status:boolean = false;

    eType:boolean = false;

    dbID:string;

    constructor(name:string, eType:boolean, dbID:string){
        this.name = name;
        this.eType = eType;
        this.dbID = dbID;
    }
    
    
}
export class Manager extends Employee {

    code:number;

    constructor(name:string, eType:boolean, dbID:string){
        super(name, eType, dbID);
        this.wage = 25.00;
        this.code = 12345;
    }
}