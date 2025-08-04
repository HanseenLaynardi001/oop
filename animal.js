class Animal {
    constructor (name) {
        this.name = name;
    }
    eat(){
       console.log(`${this.name} sedang makan.`);
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }
    meow (){
        console.log(`${this.name} si ${this.color} mengeong.`);

    }
}

const kucing = new Cat("Tom", "hitam");
kucing.eat();
kucing.meow();