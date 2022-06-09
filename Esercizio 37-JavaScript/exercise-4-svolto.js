class BankAccount {
    value = 0;

    constructor(result) {
        this._value = result;
    }

    deposit(result) {
        this._value += result;
    }

    withdraw(result) {
        this._value -= result;
    }

    view() {
        console.log(this.view);
    }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();