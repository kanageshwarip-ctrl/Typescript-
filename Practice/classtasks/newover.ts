class vehicles
{
    brand : string;

    constructor(brand : string)
    {
        this.brand = brand;
    }
start()
{
    console.log("The brand name is ", this.brand);
}
}
class car extends vehicles
{
fuelType : string;

constructor(fuelType: string , brand : string)
{
    super(brand);
    this.fuelType=fuelType;
    
}
start()
{
    console.log("The fuel type is ", this.fuelType);
}
}
class bike extends car
{
constructor(fuelType: string , brand : string)
{
    super(fuelType,brand);    
}
start()
{
    console.log("The fuel type is ", this.fuelType);
    console.log("The brand is ", this.brand);

}
}
let object = new bike("Petrol","KTM");
object.start();
