function additions(num1: number, num2: number) {
    return num1 + num2;
}

console.log(additions(10, 20));

//optional parameter:
function display(id: number, name: string, role?:string) {   //optional parameter
    console.log("Id :", id);
    console.log("Name :", name);
    if (role != undefined) {
        console.log("Role :", role);
    }
}
display(1, "pooja", "manager");
display(2, "poonam");

//  default parameter
function displays(id:number,name:string,role:string="Guest User"){
    console.log("Id :", id);
    console.log("Name :", name);
    console.log("Role :", role);
}
displays(1, "pooja", "manager");
displays(2, "poonam");


//  function overloading : we can achieve in same clas also called as compile-time polymorphism 
function doubleme(x:number);
function doubleme(x:string);
function doubleme(arr:string[]); //overloading in array)
function doubleme(x:any){   //function implementation
    // check number or not
    if(x && typeof x==="number"){   
        console.log(x*2);   //multiply number
    }
    // check string or not
    else if(x && typeof x==="string"){
        console.log(x+ " " +x);    //concat this string
    }
    else if(Array.isArray(x)){  //overloading in array
        return x.map(name=>console.log(name+ " " +name));
        //map: transform into a new array
    }
}
 //function calling 
doubleme(2);   //multiply number
doubleme("saibaba");//concat string
doubleme(["codemind","technology"]);//array

// Arrow function
var hello=(name:string):string=>{
    return "hello"+" "+name;
}
console.log(hello("Angular"));

var multiply=(num1:number,num2:number):number=>{
    return num1*num2;
}
console.log(multiply(7,2));



