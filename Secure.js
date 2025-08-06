class SecureAccount {
    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
    }

    showBalance() {
        console.log(`Saldo saat ini: ${this.#balance}`);
    }
}

const akun = new SecureAccount();
akun.deposit(500);
akun.showBalance();
