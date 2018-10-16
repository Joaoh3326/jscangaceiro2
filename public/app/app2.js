const Person = require('./models/Person');
const decorate = require('../utils/decorate');
const { logExecutionTime, inspectMethod } = require('./models/decorators');

decorate(Person, {
    speak: [logExecutionTime, inspectMethod],
    getFullName: [logExecutionTime]
});


const person = new Person('João', 'Henrique');
person.getFullName();
person.speak('Cangaceiro Javascript');