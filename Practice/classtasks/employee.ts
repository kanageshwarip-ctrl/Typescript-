class Person
{
name : string;

constructor(name:string)
{
    this.name = name;
}

}
 class Employe extends Person
 {
    salary : number;

constructor(salary:number,name:string)
{
    super(name);
    this.salary=salary;

}
    getDetails()
    {
        console.log("the employee name is " ,this.name);
        console.log("salary is ", this.salary);
    }
 }
 let emp = new Employe(100000,"dhivya");
 emp.getDetails();
 
