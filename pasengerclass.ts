class Pasenger{
    fname:string;
    lname:string;
    frequentflyerno:number;
    constructor(fname:string,lname:string,fliteno:number){
        this.fname=fname;
        this.lname=lname;
        this.frequentflyerno=fliteno;
    }
}
var passenger=new Pasenger("pooja","jejurkar",102);
console.log(passenger.fname+" "+passenger.lname+" "+passenger.frequentflyerno);
