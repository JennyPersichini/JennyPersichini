function sum(...num) {
    return num.reduce((result, value) => result + value);
}

console.log(sum(1, 2, 3, 4, 5));