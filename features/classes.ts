class Vehicle {
  /*
  color: string;

  constructor(color: string) {
    this.color = color;
  }
  */
  // The above equivalent of the above piece of code
  constructor(public color: string) {}

  public drive(): void {
    console.log("Get Set Go!!!");
  }

  protected honk(): void {
    console.log("Beep Beep!!!");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

/*
class Car extends Vehicle {
  // You cannot change access modifiers when overwriting methods.
  drive(): void {
    console.log("Vroom... Get Set Go!!!");
  }

  private shiftGear(): void {
    console.log("Gear shifted!!!");
  }

  startDrivingProcess(): void {
    this.drive();
    this.shiftGear();
    this.honk();
  }
}

const car = new Car();
car.startDrivingProcess();
*/
