var emp={
    name:"pooja",
    marks:89,
}

//for-of loop not work on object by default
// for(var e of emp){

// }

//but for-of-loop work with array and string

// const str="opportunity does not happen you create them";
// for(var op of str ){
//     console.log(op);
    
// }
for(var e in emp){
   console.log(e);
    console.log(emp[e]);
     }