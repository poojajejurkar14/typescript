class Calculator{
    static result:number;
     num1:number;
     num2:number;
}
function result1(num1:number,num2:number){
    var result=num1+num2;
    console.log(`Addition of number 10 & 2 is :`,result);
    var result1=num1-num2;
    console.log(`Subtraction of number 10 & 2 is :`,result1);
    var result2=num1*num2;
    console.log(`Multiplication of number 10 & 2 is :`,result2);
    var result3=num1/num2;
    console.log(`Division of number 10 & 2 is :`,result3);
}
result1(10,2);