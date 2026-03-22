let string = "Mydream"

let real = string.toLowerCase();
let count = 0;


for(let i=0; i<real.length; i++){
let char = real[i]
    if ("aeiou".includes(char))
    {
        count = count + 1;
}
}
        console.log(count)
