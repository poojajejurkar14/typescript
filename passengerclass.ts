class Passenger {
    firstname:string;
    lastname:string;
    frequentflyerno:number;
    constructor(firstname:string,lastname:string,fliteno:number){
        this.firstname=firstname;
        this.lastname=lastname;
        this.frequentflyerno=fliteno;
    }
    // add a function properties to class
    display(){
        console.log(this.firstname+" "+this.lastname+" "+this.frequentflyerno);
    }
}
var passenger = new Passenger("pooja","jejurkar",102);
passenger.display();
var passenger23 = new Passenger("praju","kahandal",123);
passenger23.display();


// first way : using for-in loop
//for-in with class

// for (let item in passenger) {
//     if(item!=="display"){   // do not display the code of method so we use this
//    console.log(item);
//    console.log(passenger[item]);
//     }
//     }

    // second way: instanceof:it check if type of object is exist or not
    for(let item in passenger){
        if(passenger[item] instanceof Function){
            continue;
        }
        else{
            console.log(item);
            console.log(passenger[item]);
        }
    }

