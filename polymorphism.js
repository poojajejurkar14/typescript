var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.Print = function () {
        console.log("Employee Details");
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    //constructor
    function Manager(firstname, lastname, designation) {
        var _this = 
        //calling parent class console
        _super.call(this) || this;
        _this.firstname = firstname;
        _this.lastname = lastname;
        _this.designation = designation;
        return _this;
    }
    //overriding parent class print()
    Manager.prototype.Print = function () {
        _super.prototype.Print.call(this);
        console.log("".concat(this.firstname, ",").concat(this.lastname, ",").concat(this.designation));
    };
    return Manager;
}(Employee));
var Lead = /** @class */ (function (_super) {
    __extends(Lead, _super);
    //constructor
    function Lead(firstname, lastname, designation) {
        var _this = 
        //calling parent class console
        _super.call(this) || this;
        _this.firstname = firstname;
        _this.lastname = lastname;
        _this.designation = designation;
        return _this;
    }
    //overriding parent class print()
    Lead.prototype.Print = function () {
        _super.prototype.Print.call(this);
        console.log("".concat(this.firstname, ",").concat(this.lastname, ",").concat(this.designation));
    };
    return Lead;
}(Employee));
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    //constructor
    function Developer(firstname, lastname, designation) {
        var _this = 
        //calling parent class console
        _super.call(this) || this;
        _this.firstname = firstname;
        _this.lastname = lastname;
        _this.designation = designation;
        return _this;
    }
    //overriding parent class print()
    Developer.prototype.Print = function () {
        _super.prototype.Print.call(this);
        console.log("".concat(this.firstname, ",").concat(this.lastname, ",").concat(this.designation));
    };
    return Developer;
}(Employee));
var employee = new Array(new Manager("pooja", "praju", "komal"), new Manager("sona", "mona", "riya"), new Manager("sumit", "soham", "swapnil"));
for (var _i = 0, employee_1 = employee; _i < employee_1.length; _i++) {
    var emp = employee_1[_i];
    emp.Print();
}
