var courses = ['Angular', "react", ".net"];
courses.push("java");
courses.push(10);
for (var i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}
//array de-structring
var std = {
    fname: "pooja",
    lname: "jejurkar"
};
var firstname = std.fname, lastname = std.lname;
console.log(firstname, lastname); // pooja jejurkar
//  array methods:
var array1 = [20, 30, 10, 50];
array1.splice(2, 3, 88, 99);
console.log(array1);
//pop the element in empty array
var array = [];
array.pop();
console.log(array);
