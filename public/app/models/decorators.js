const logExecutionTime = (method, property, args) => {
    console.log(`Metodo decorado: ${property}`);
    console.log(`Argumentos do método: ${args}`);
    console.time(property);
    const result = method(...args);
    console.timeEnd(property);
    console.log(`resultado do método: ${result}`);
    return result;
};

module.exports = logExecutionTime;