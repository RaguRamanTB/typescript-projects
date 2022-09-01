class Vehicle {
  drive(): void {
    console.log("Get Set Go!!!");
  }

  honk(): void {
    console.log("Beep Beep!!!");
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
