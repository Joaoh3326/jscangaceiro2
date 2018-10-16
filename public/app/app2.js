const Person = require('./models/Person');

const person = new Person('João', 'Henrique');
person.getFullName();
person.speak('Cangaceiro Javascript');