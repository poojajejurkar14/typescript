var Passenger = /** @class */ (function () {
    function Passenger(firstname, lastname, fliteno) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.frequentflyerno = fliteno;
    }
    // add a function properties to class
    Passenger.prototype.display = function () {
        console.log(this.firstname + " " + this.lastname + " " + this.frequentflyerno);
    };
    return Passenger;
}());
var passenger = new Passenger("pooja", "jejurkar", 102);
passenger.display();
var passenger23 = new Passenger("praju", "kahandal", 123);
passenger23.display();
//for-in with class
// for (let item in passenger) {
//     if(item!=="display"){   // do not display the code of method so we use this
//    console.log(item);
//    console.log(passenger[item]);
//     }
//     }
// second way:
for (var item in passenger) {
    if (passenger[item] instanceof Function) {
        continue;
    }
    else {
        console.log(item);
        console.log(passenger[item]);
    }
}
