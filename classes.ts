interface IFlight{
    flightno:number;
    from:string;
    to:string;
}   //declaration
class Flight implements IFlight{    //implementation
    flightno: number;
    from:string;
    to:string;
    constructor(flightno:number,from:string,to:string){
        this.flightno=flightno;
        this.from=from;
        this.to=to;
    }
    display(){
        console.log(this.flightno+" "+this.from+" "+this.to);
    }
    
}
var objflight=new Flight(2,"mumbai","UK");
objflight.display();