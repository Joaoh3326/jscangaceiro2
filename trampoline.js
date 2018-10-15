const showCountDown = counter => {
    if (counter < 0) return;
    console.log(counter);
    showCountDown(--counter);
} 

// showCountDown(3);

//Forial sem TCO
const fatorial = n => {
    // fatorial de 0 é 1!
    if (n <= 1) return 1;
    // return aqui
    return n * fatorial(--n);
};

const factorial = (acc, n) => {
    if (n <= 1) return acc;
    return factorial(acc * n, --n);
}

console.log(factorial(1, 3));