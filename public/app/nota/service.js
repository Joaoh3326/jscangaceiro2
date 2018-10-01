import { handleStatus } from '../../utils/promise-helpers.js';
import { partialize, compose } from '../../utils/operators.js';

const API = 'http://localhost:3000/notas';

const getItemsFromNotas = notas => notas
    .$flatMap(nota => nota.itens);

const filterItemsByCode = (code, items) => items
    .filter(item => item.codigo === code);

const sumItemsValue = items => items
    .reduce((total, item) => total + item.valor, 0);

const sumItens = code => notas => notas
    .$flatMap(nota => nota.itens)
    .filter(item => item.codigo == code)
    .reduce((total, item) => total + item.valor, 0);

export const notasService = {
    listAll() {
        return fetch(API)
            .then(handleStatus)
            .catch(err => {
                console.log(err);
                return Promise.reject('Não foi possível obter as notas fiscais');
            });
    },

    sumItens(code) {
        const filterItems = partialize(filterItemsByCode, code);

        const sumItems = compose(
            sumItemsValue,
            partialize(filterItemsByCode, code),
            getItemsFromNotas
        );

        return this
            .listAll()
            .then(sumItems);
    }
};

