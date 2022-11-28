class Student{
    private _username:string;
    get name():string{
        return this._username;
    }
    set name(name:string){
        if(name=="pooja"){  //encapsulation
        this._username=name;
        }
    }
    display(){
        console.log(this._username);
        
    }
}
var objstd=new Student;
objstd.name="code";
console.log(objstd.name);
