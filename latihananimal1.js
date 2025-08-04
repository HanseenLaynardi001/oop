// Class Animal
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} bersuara.`);
    }
}

// Class Dog yang mewarisi dari Animal
class Dog extends Animal {
    bark() {
        console.log(`${this.name} menggonggong.`);
    }
}

// Class Bird yang mewarisi dari Animal
class Bird extends Animal {
    fly() {
        console.log(`${this.name} sedang terbang.`);
    }
}

// Contoh penggunaan
const anjing = new Dog("Buddy");
anjing.speak(); // Buddy bersuara.
anjing.bark();  // Buddy menggonggong.

const burung = new Bird("Rio");
burung.speak(); // Rio bersuara.
burung.fly();   // Rio sedang terbang.