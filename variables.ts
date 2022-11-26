var n1:number=10;
console.log(n1);
var s1="you are the creater of your destiny";
var s2:string="powerful people comes powerful places";
console.log(s1);
console.log(s2);
var b1:boolean=true;
var b2:boolean=false;
var b3:boolean;
function test(){
    return b3=false;
    console.log(b3);
    
}
test();

// object creation in TS

var a1={
    productId:1,
    productName:"Iphone",
    productPrize:50000,
}
console.log(a1);

// refernce datatype / non-primitive datatype
//homogenious Array
var arr1:Array<string>=["angular","react","nodejs"];
console.log(arr1[1]);

//hetrogenious Array
var arr2:Array<any>=["angular",22,"nodejs",true];
console.log(arr2[3]);
//push element in Array
arr2.push(".netcore");
console.log(arr2);



