class BankAccount {

    constructor(initialAmount) {
        this.value = initialAmount;
    }

    deposit(amount) {
        this.value += amount;
    }

    withdraw(amount) {
        this.value -= amount;
    }

    view() {
        console.log(this.value);
    }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();