function calculate() {
  let result = 0;
  return {
    add(numero) {
      result += numero;
      return this;
    }, multiply(numero) {
      result *= numero;
      return this;
    }, sub(numero) {
      result -= numero;
      return this;
    }, divide(numero) {
      result /= numero;
      return this;
    }, printResult() {
      console.log(result);
    }
  }
}

const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7