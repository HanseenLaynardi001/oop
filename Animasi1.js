class Animal {
    constructor() {
        if (new.target === Animal) {
            throw new Error("Animal adalah abstract class, tidak bisa diinstansiasi!");
        }
    }

    makeSound() {
        throw new Error("Harus diimplementasikan di subclass");
    }
}

class Dog extends Animal {
    makeSound() {
        return "Woof!";
    }
}

class Cat extends Animal {
    makeSound() {
        return "Meow!";
    }
}

let d = new Dog();
console.log(d.makeSound()); // Woof!

let c = new Cat();
console.log(c.makeSound()); // Meow!

class GPS {
    navigasi(){
        console.log("navigasi...");
    }
}


