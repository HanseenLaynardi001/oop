class User {
    #password;

    constructor(password) {
        this.#password = password;
    }

    checkPassword(input) {
        if (input === this.#password) {
            console.log("Benar");
        } else {
            console.log("Salah");
        }
    }
}

// Contoh penggunaan:
const user = new User("rahasia");
user.checkPassword("rahasia"); // Output: Benar
user.checkPassword("salah");   // Output: