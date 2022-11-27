//create object class employee use loop & object De-structuring

var employee={
    empId:22,
    empName:"pooja",
    empCompany:"TCS"
}
// object De-structuring
var{empId:employeeid ,empName:employeename,empCompany:employeecompany}=employee;
console.log(employeeid,employeename,employeecompany);
//use for loop
for(var e1 in employee){
    console.log(e1);
    console.log(employee[e1]);
}

//create array and add element in array use loop &  De-structuring
var array:string[]=["J&J","pfizer sputnik"];
array.push("covaxine");
console.log(array);

//  use loop on array
for(var i=0;i<array.length;i++){
    console.log(array[i]);
}

//   De-structuring of array
var[n1,n2,n3]=array;
console.log(n1,n2,n3);


