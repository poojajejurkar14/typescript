interface IExterior{
    color:string,
    noOfDoors:number,
}
interface Iinterior{
    seats:number,
    auto:boolean,
}
interface ICar extends IExterior,Iinterior{
    make:string,
    model:string,
    year:number,
}
var myCar:ICar={
    make:"TATA",
    model:"Altozs",
    year:2022,
    color:"white",
    seats:4,
    auto:false,
    noOfDoors:4,
}