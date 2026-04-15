class students{
    name : string;
    mark : number; 
constructor (name:string , mark:number)
{
    this.name=name;
    this.mark=mark;
}
display() 
{
    console.log(this.name + " scored " + this.mark );
}
}
let st = new students("john",85);
st.display();
