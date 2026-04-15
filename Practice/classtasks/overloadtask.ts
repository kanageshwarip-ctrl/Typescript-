class Calculator
{
multiply(num:any,num2:any):any
{
    if ( typeof num === "number" && typeof num2 === "number")
    {
    let c = num*num2;
    console.log(c);
    }    
    else if(typeof num == "string" && typeof num2 == "number")
    {
    let b = num.repeat(num2);
    console.log(b);
    }
}
    
}

let obj = new Calculator();
obj.multiply(2,3);
obj.multiply("Hi",3);