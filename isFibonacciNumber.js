function isFibonacciNumber(targetNumber) {
    // não permite numeros negativos
    if (targetNumber < 0) return false;
    if (targetNumber === 0 || targetNumber === 1) return true;

    let first = 0;
    let second = 1;
    let sequence = 1;

    while (sequence < targetNumber) {
        sequence = first + second;
        first = second;
        second = sequence;
    }

    return sequence === targetNumber;
}

// numeros para teste
const targets = [4, 5, 8, 13, 21, 38, 49, 55, 89, 125, 144];

targets.forEach(target => {
    const isFibonacci = isFibonacciNumber(target);
    console.log(isFibonacci ? `${target} pertence à sequência de Fibonacci` : `${target} não pertence à sequência de Fibonacci`);
});