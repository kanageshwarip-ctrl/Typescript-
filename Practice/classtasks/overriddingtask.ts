class Vehicle
{
start()
{
    console.log("To start we need to kick");
}
}
class Bike extends Vehicle
{
 start()
{
    console.log("Bike starts fast");
    super.start();

}   
}
let objs = new Bike();
objs.start();
