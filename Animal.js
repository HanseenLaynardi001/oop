class Animal {
    speak(){
        console.log("Hewan bersuara");
    }
}

class Cat extends Animal {
    spek(){
        console.log("Meong");
    }
}

const c = new Cat();
c.speak();