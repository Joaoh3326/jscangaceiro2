// Versãoe sem TCO
var factorial = n => {
    // fatorial de 0 é 1!
    if (n <= 1) return 1
    // return aqui!
    return n * factorial(--n);
};

//Versão 1 com TCO
var factorial = (acc, num) => {
    if (num <= 1) return acc;
    return factorial(acc * n, --num);
};

//Versão 3 com TCO
var factorial = (acc, num) => {
    if (num <= 1) return acc;
    return () => factorial(acc * num, --num);
};

var showCountDown = counter => {
    if (counter < 0) return;
    console.log(counter);

    return () => showCountDown(--counter);
}

const trampoline = fn => {

    while (typeof fn === 'function') {
        fn = fn();
    }
    console.log(fn);
    return fn;
};

console.log(trampoline(factorial(1, 20000)));
console.log(trampoline(showCountDown(5)));