import { handleStatus, log } from '../utils/promise-helpers.js';
import '../utils/array-helpers.js';
import { notasService as service } from './nota/service.js';
import { takeUntil, debounceTime } from '../utils/operators.js';

const sumItens = code => notas => notas
    .$flatMap(nota => nota.itens)
    .filter(item => item.codigo == code)
    .reduce((total, item) => total + item.valor, 0);


const action = debounceTime(500, takeUntil(3, () =>
    service
        .sumItens('2143')
        .then(log)
        .catch(log)
));

document
    .querySelector('#myButton')
    .onclick = action;