//create object class employee use loop & object De-structuring
var employee = {
    empId: 22,
    empName: "pooja",
    empCompany: "TCS"
};
// object De-structuring
var employeeid = employee.empId, employeename = employee.empName, employeecompany = employee.empCompany;
console.log(employeeid, employeename, employeecompany);
//use for loop
for (var e1 in employee) {
    console.log(e1);
    console.log(employee[e1]);
}
//create array and add element in array use loop &  De-structuring
var array = ["J&J", "pfizer sputnik"];
array.push("covaxine");
console.log(array);
//  use loop on array
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}
//   De-structuring
var n1 = array[0], n2 = array[1], n3 = array[2];
console.log(n1, n2, n3);
