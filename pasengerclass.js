var Pasenger = /** @class */ (function () {
    function Pasenger(fname, lname, fliteno) {
        this.fname = fname;
        this.lname = lname;
        this.frequentflyerno = fliteno;
    }
    return Pasenger;
}());
var passenger = new Pasenger("pooja", "jejurkar", 102);
console.log(passenger.fname + " " + passenger.lname + " " + passenger.frequentflyerno);
