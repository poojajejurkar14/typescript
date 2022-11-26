var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
console.log(Gender.male);
console.log(Gender.female);
console.log(Gender[1]);
console.log(Gender[0]);
var Weekend;
(function (Weekend) {
    Weekend[Weekend["saturday"] = 6] = "saturday";
    Weekend[Weekend["sunday"] = 7] = "sunday";
})(Weekend || (Weekend = {}));
console.log(Weekend.saturday);
console.log(Weekend.sunday);
console.log(Weekend[6]);
console.log(Weekend[7]);
