class Engine {
    start() {
        console.log("Mesin Nyala");
    }
}

class Car {
    constructor() {
        this.engine = new Engine(); // konsisten pakai huruf kecil
    }

    drive() {
        this.engine.start();
        console.log("Mobil Jalan");
    }
}

let car = new Car();
car.drive();
