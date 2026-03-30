function check()
{
    console.log("First Function call");
}
check();

function greet(a)
{
    console.log("Hi" + "My name is",a)
}
greet("dhivya");

function add(a,b)
{
    let c = a+b;
    console.log(c);
}
add (2,5)

function add1(a,b)
{
    return a+b;
}
let value = add1(4,6);
console.log(value);

function welcomeUser(name = "Guest")
{
   console.log("welcome",name);
}
welcomeUser("dhivya");

function checkNumber(num)
{
    if(num > 0)
        console.log("positive")
    else if(num < 0)
        console.log("Negative")
    else
        console.log("Zero")
}
checkNumber(0);

function checkNumbers(num)
{
    if(num%2 === 0)
        return true;
    else
         return false;
}
console.log(checkNumbers(5));



function convertTemp(celsius)
{
    return (celsius * 9/5) + 32
}
console.log(convertTemp(8));

function findMax(a, b)
{
    if(a>b)
    return "a is a greater"
    else 
    return "b is a greater"
}
console.log(findMax(5, 10));

function countChars(str)
{
    return str.length
}
console.log(countChars("dhivya"));

function toUpper(str)
{

    return str.toUpperCase()
}
console.log(toUpper("dhivya"));

function printNumbers(n)
{
for (i=1;i<=n;i++)
console.log(i);
}
printNumbers(3)

function reverse(str)
{
    return str.split('').reverse().join('');
}
console.log(reverse("dhivya"));

const greets = () => "Hello World"
console.log(greets());

const mult = (a,b) => a*b;
console.log(mult(4,5))

const sqr = (a) => a*a;
console.log(sqr(5)) ;


let sum = [4 , 5, 6] ;
let total = 0;
const arrsum = () => {
    for (let i=0; i<sum.length;i++)
    total = total + sum[i];
    console.log(total)
}
arrsum();

function defadd(a=0 ,b=0)
{
    return a+b;
}
console.log(defadd());

function calculatePrice(price, tax = 5)
{
let taxamount = price * (tax/100)
let total = price + taxamount;
return total
}
console.log(calculatePrice(5000,2));

function login(username = "admin", password = "1234")
{
    console.log(username,password)

}
login("admin",3432);