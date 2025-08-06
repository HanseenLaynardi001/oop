class BankAccount {
    constructor(){
        this._balance = 0;
    }

    deposit(amount){
        this._balance += amount;
    }

    showBalance(){
        console.log(`Saldo saat ini: ${this._balance}`);
    }
}

const akun = new BankAccount();
akun.deposit(500000);
akun.showBalance();

akun._balance = 9999999;
akun.showBalance();