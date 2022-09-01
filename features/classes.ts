class Vehicle {
  drive(): void {
    console.log("Get Set Go!!!");
  }

  honk(): void {
    console.log("Beep Beep!!!");
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log("Vroom... Get Set Go!!!");
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

const car = new Car();
car.drive();
car.honk();
