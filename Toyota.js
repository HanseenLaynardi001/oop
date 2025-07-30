class Car {
    constructor(name, model, color){
        this.name = name;
        this.model = model;
        this.color = color;
    }

    start(){
        console.log('{this.name} dinyalakan.');
    }

    drive(){
        console.log(' ${this.name} berjalan.');
    }
}

let car1 = new Car ("Toyota", 2021, "Blue");
car1.start();