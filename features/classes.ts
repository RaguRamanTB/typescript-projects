class Vehicle {
  public drive(): void {
    console.log("Get Set Go!!!");
  }

  protected honk(): void {
    console.log("Beep Beep!!!");
  }
}

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
