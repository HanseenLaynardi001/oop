function Car(name, model, color, weight) {
    this.name = name;
    this.model = model;
    this.color = color;
    this.weight = weight;

    this.start = function () {
        console.log(`${this.name} dinyalakan`);
    };

    this.drive = function () {
        console.log(`${this.name} sedang berjalan`);
    };
}

let car1 = new Car("Toyota", 2020, "Blue", "1000kg");
let car2 = new Car("Honda", 2021, "Red", "950kg");

car1.start();  
car2.drive();  
