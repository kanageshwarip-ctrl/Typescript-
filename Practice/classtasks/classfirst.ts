export {};
class Books
{
    title: string;
    author : string;
    price : number;
    
    constructor ( title: string, author: string, price: number)
    {
        this.title = title;
        this.author = author;
        this.price = price;

    {
        if(this.price < 0)
        this.price = 0;
    }
    }

    getdetails(){
        console.log("The book title is "+ this.title);
        console.log("The book author is "+ this.author);
        console.log("The book price is "+ this.price);

    }
}
let a1 = new Books("New Dream","Dhivya", -345);
let b1 = new Books("Out of sky", "Dhivya", 231);
a1.getdetails();
b1.getdetails();
