namespace InterfaceNamespace {
  interface Thing {
    name: string;
    getFullName: () => string;
  }

  interface Vehicle extends Thing {
    wheelCount: number;
    updateWheelCount: (newWheelCount: number) => void;
    showNumberOfWheels: () => void;
  }

  class MotorCycle implements Vehicle {
    name: string;
    wheelCount: number;
    constructor(name: string) {
      this.name = name;
    }

    updateWheelCount(newWheelCount:  number) {
      this.wheelCount = newWheelCount;
      console.log('updated wheel count for Motorcycle class');
    }

    showNumberOfWheels() {
      console.log(`${this.wheelCount} wheels on this Motorcycle`);
    }

    getFullName() {
      return `MC-${this.name}`;
    }
  }

  const moto = new MotorCycle('beginner cycle');
  console.log(moto.getFullName());
}
