class Check{
    static bank_name:string="bank of india";
    customer_name:string;
    accno:number;
    display(){
        Check.bank_name="SBI";
        console.log(Check.bank_name);
        
    }
}
var objCheck=new Check();
// var bank_name=Check.bank_name;
objCheck.display();