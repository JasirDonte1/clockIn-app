export class Employee{
    name:string;

    id:number = -1;
    wage:number = 15.00; 

    status:boolean = false;

    constructor(name:string){
        this.name = name;
        this.id = this.AssignIDNumber();
    }
    AssignIDNumber(){
        let id = Math.floor(Math.random()*90000) + 10000;
        return id; 
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