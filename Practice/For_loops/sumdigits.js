let num = 23456
let count = 0 

for (; num>0;num=Math.floor(num/10))
{
let digit = num % 10;
count = count + digit
}
console.log(count)
