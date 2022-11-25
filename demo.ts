// var x:number=10;
class Student{
    public firstname:string;
    private lastname:string;
    constructor(firstname:string,lastname:string){
        this.firstname=firstname;
        this.lastname=lastname;
    }
    getdata(){
        console.log(this.firstname);
        
    }
}