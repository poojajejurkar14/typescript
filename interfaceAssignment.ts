interface IPerson{
    firstname:string;
    lastname:string;
    sayhi:()=>string;
}
var custmer:IPerson={
    firstname:"pooja",
    lastname:"jejurkar",
    sayhi:():string=> {
       return "hello"
    }
}
console.log(custmer.firstname,custmer.lastname,custmer.sayhi());
