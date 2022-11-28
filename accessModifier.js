var Student = /** @class */ (function () {
    function Student() {
    }
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._username;
        },
        set: function (name) {
            if (name == "pooja") { //encapsulation
                this._username = name;
            }
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.display = function () {
        console.log(this._username);
    };
    return Student;
}());
var objstd = new Student;
objstd.name = "code";
console.log(objstd.name);
