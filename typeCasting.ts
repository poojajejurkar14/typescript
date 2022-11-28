let courses=["angular",".net","React"];
console.log(courses.toString());
interface IEmployee{
    id:number;
    // lastname:string; //htrows error bcoz e2 have that property
}
let e1:IEmployee;
let e2={id:123 , name:"pooja"};
e1=e2;  //type casting : at least one member of 1st variable is similar to another variable 
e2:e1;