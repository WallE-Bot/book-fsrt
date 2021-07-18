namespace AbstractNamespace {

  abstract class Vehicle {
    constructor(protected wheelCount: number) {}

    abstract updateWheelCount(newWheelCount: number): void;

    showNumberOfWheels() {
      console.log(`moved ${this.wheelCount} miles`);
    }
  }

  class Motorcycle extends Vehicle {
    constructor() {
      super(2);
    }

    updateWheelCount(newWheelCount: number) {
      this.wheelCount = newWheelCount;
      console.log(`Motorcycle wheel count updated`);
    }
  }

  class Automobile extends Vehicle {
    constructor() {
      super(4);
    }

    updateWheelCount(newWheelCount: number) {
      this.wheelCount = newWheelCount;
      console.log('Automobile wheel count updated');
    }
  }

  const motorCycle = new Motorcycle();
  motorCycle.updateWheelCount(1);
  const autoMobile = new Automobile();
  autoMobile.updateWheelCount(2);

}
