// const ids = new Set([1, 2, 3]);
// ids.add(2);
// console.log(ids.has(1));

// const ids = new Set(['Hi', 'from', 'set!']);
// ids.add(2);
// if (ids.has('Hi')) {
//     ids.delete('Hi');
// }


// for (const entry of ids.entries()) {
//     console.log(entries);
// }

const person1 = {name: 'Max'};
const person2 = {name: 'Misha'};


//const personData = new Map([['key', 'some value']]);
// const personData = new Map([[person1, [{date: 'yestarday', price: 10}]]]);

// personData.set(person2, [{date: 'two weeks ago', price: 100}])

// console.log(personData);
// console.log(personData.get(person1));


// for (const [key,value]of personData.entries()) {
//     console.log(key, value);
// }

// for (const key of personData.keys()) {
//     console.log(key);
// }

// for (const value of personData.values()) {
//     console.log(value);
// }

let person = {name: 'Ali'};
const persons = new WeakSet();
persons.add(person);


console.log(persons);