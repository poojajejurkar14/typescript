var Check = /** @class */ (function () {
    function Check() {
    }
    Check.prototype.display = function () {
        Check.bank_name = "SBI";
        console.log(Check.bank_name);
    };
    Check.bank_name = "bank of india";
    return Check;
}());
var objCheck = new Check();
// var bank_name=Check.bank_name;
objCheck.display();
