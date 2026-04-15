var students = /** @class */ (function () {
    function students(name, mark) {
        this.name = name;
        this.mark = mark;
    }
    students.prototype.display = function () {
        console.log(this.name + " scored " + this.mark);
    };
    return students;
}());
var st = new students("john", 85);
st.display();
