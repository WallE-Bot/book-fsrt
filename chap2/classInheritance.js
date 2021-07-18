class Vehicle {
    constructor(wheelCount) {
        this.wheelCount = wheelCount;
    }
    showNumberOfWheels() {
        console.log(`moved ${this.wheelCount} miles`);
    }
}
class Motorcycle extends Vehicle {
    constructor() {
        super(2);
    }
    updateWheelCount(newWheelCount) {
        this.wheelCount = newWheelCount;
    }
}
class Automobile extends Vehicle {
    constructor() {
        super(4);
    }
}
const motorCycle = new Motorcycle();
motorCycle.showNumberOfWheels();
const autoMobile = new Automobile();
autoMobile.showNumberOfWheels();
