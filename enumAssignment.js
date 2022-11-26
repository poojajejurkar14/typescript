var Direction;
(function (Direction) {
    Direction[Direction["south"] = 0] = "south";
    Direction[Direction["east"] = 1] = "east";
    Direction[Direction["west"] = 2] = "west";
    Direction[Direction["north"] = 3] = "north";
})(Direction || (Direction = {}));
console.log(Direction);
//console.log(`0:${[0]},1:${[1]},2:${[2]},3:${[3]}`);
console.log(Direction[0], Direction[1], Direction[2], Direction[3]);
var abundantElement;
(function (abundantElement) {
    abundantElement[abundantElement["hydrogen"] = 0] = "hydrogen";
    abundantElement[abundantElement["oxygen"] = 1] = "oxygen";
    abundantElement[abundantElement["carbon"] = 2] = "carbon";
    abundantElement[abundantElement["nitrogen"] = 3] = "nitrogen";
})(abundantElement || (abundantElement = {}));
console.log(abundantElement);
console.log(abundantElement[0], abundantElement[1], abundantElement[2], abundantElement[3]);
var Days;
(function (Days) {
    Days[Days["sunday"] = 0] = "sunday";
    Days[Days["monday"] = 1] = "monday";
    Days[Days["tuesday"] = 2] = "tuesday";
    Days[Days["wednesday"] = 3] = "wednesday";
    Days[Days["thursday"] = 4] = "thursday";
    Days[Days["friday"] = 5] = "friday";
    Days[Days["saturday"] = 6] = "saturday";
})(Days || (Days = {}));
console.log(Days);
console.log(Days[0], Days[1], Days[2], Days[3], Days[4], Days[5], Days[6]);
