function additions(num1, num2) {
    return num1 + num2;
}
console.log(additions(10, 20));
//optional parameter:
function display(id, name, role) {
    console.log("Id :", id);
    console.log("Name :", name);
    if (role != undefined) {
        console.log("Role :", role);
    }
}
display(1, "pooja", "manager");
display(2, "poonam");
//  default parameter
function displays(id, name, role) {
    if (role === void 0) { role = "Guest User"; }
    console.log("Id :", id);
    console.log("Name :", name);
    console.log("Role :", role);
}
displays(1, "pooja", "manager");
displays(2, "poonam");
function doubleme(x) {
    // check number or not
    if (x && typeof x === "number") {
        console.log(x * 2); //multiply number
    }
    // check string or not
    else if (x && typeof x === "string") {
        console.log(x + " " + x); //concat this string
    }
    else if (Array.isArray(x)) { //overloading in array
        return x.map(function (name) { return console.log(name + " " + name); });
        //map: transform into a new array
    }
}
//function calling 
doubleme(2); //multiply number
doubleme("saibaba"); //concat string
doubleme(["codemind", "technology"]); //array
// Arrow function
var hello = function (name) {
    return "hello" + " " + name;
};
console.log(hello("Angular"));
var multiply = function (num1, num2) {
    return num1 * num2;
};
console.log(multiply(7, 2));
