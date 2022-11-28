function person(student:string);
function person(employee:string);
function person(trainer:string);
function person(person:any){
    if(person==="student"){   
        console.log(`I am Student of "Codemind Technology".`);   
    }
    else if(person==="trainer"){   
        console.log(`I am Trainer of "Infosys company".`);   
    }
    else if(person==="employee"){   
        console.log(`I am Employee of "Walstar Technology".`);   
    }
}
console.log("I am from Person class");
person("student");
person("trainer");
person("employee");