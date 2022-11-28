class Employee{
    public firstname:string;
    public lastname:string;
    public designation:string;
    public Print():void{
        console.log("Employee Details");   
    }
}
class Manager extends Employee{
    //constructor
    constructor(firstname:string,lastname:string,designation:string){
        //calling parent class console
        super();
        this.firstname=firstname;
        this.lastname=lastname;
        this.designation=designation;
    }
    //overriding parent class print()
    public Print(): void {
        super.Print();
        console.log(`${this.firstname},${this.lastname},${this.designation}`);
}
}
class Lead extends Employee{
    //constructor
    constructor(firstname:string,lastname:string,designation:string){
        //calling parent class console
        super();
        this.firstname=firstname;
        this.lastname=lastname;
        this.designation=designation;
    }
    //overriding parent class print()
    public Print(): void {
        super.Print();
        console.log(`${this.firstname},${this.lastname},${this.designation}`);
}
}
class Developer extends Employee{
    //constructor
    constructor(firstname:string,lastname:string,designation:string){
        //calling parent class console
        super();
        this.firstname=firstname;
        this.lastname=lastname;
        this.designation=designation;
    }
    //overriding parent class print()
    public Print(): void {
        super.Print();
        console.log(`${this.firstname},${this.lastname},${this.designation}`);
}
}
let employee:Employee[]=new Array(new Manager("pooja","praju","komal"),new Manager("sona","mona","riya"),new Manager("sumit","soham","swapnil"));
for(var emp of employee){
    emp.Print();
}


