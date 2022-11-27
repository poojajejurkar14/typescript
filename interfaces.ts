interface IProduct{
    id:number,
    name:string,
    description?:string,    //optional properties
    price:number,   //declaration only in interface
    display():void; //return madhe kahi ch show nahi honar
}
var objProduct:IProduct={
    id:123,
    name:"iphone",
    // description:"Awosome",
    price:50000,    //  I have given implementation for IProduct
    display():void {        // adding a method in interfaces
        console.log(this.id +" "+ this.name);
    }
}
var obj1Product:IProduct={  //object is reference type
    id:12,
    name:"Android",
    // description:"Awosome",
    price:30000,    //  I have given implementation for IProduct
    display():void {        // adding a method in interfaces
        console.log(this.id +" "+ this.name);
    }
}