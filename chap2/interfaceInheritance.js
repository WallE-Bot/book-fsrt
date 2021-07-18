var InterfaceNamespace;
(function (InterfaceNamespace) {
    class MotorCycle {
        constructor(name) {
            this.name = name;
        }
        updateWheelCount(newWheelCount) {
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
})(InterfaceNamespace || (InterfaceNamespace = {}));
