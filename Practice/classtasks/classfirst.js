"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Books = /** @class */ (function () {
    function Books(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
        {
            if (this.price < 0)
                this.price = 0;
        }
    }
    Books.prototype.getdetails = function () {
        console.log("The book title is " + this.title);
        console.log("The book author is " + this.author);
        console.log("The book price is " + this.price);
    };
    return Books;
}());
var a1 = new Books("New Dream", "Dhivya", -345);
var b1 = new Books("Out of sky", "Dhivya", 231);
a1.getdetails();
b1.getdetails();
