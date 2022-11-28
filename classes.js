var Flight = /** @class */ (function () {
    function Flight(flightno, from, to) {
        this.flightno = flightno;
        this.from = from;
        this.to = to;
    }
    Flight.prototype.display = function () {
        console.log(this.flightno + " " + this.from + " " + this.to);
    };
    return Flight;
}());
var objflight = new Flight(2, "mumbai", "UK");
objflight.display();
