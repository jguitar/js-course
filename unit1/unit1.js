var mary = { age: 28, name: 'Mary', surname: 'Smith'};
var john = { age: 29, name: 'John', surname: 'Smith'};

console.log("Mary's age", mary.age, "John's age", john.age);
console.log('Is Mary greater than John?', mary > john);

john.country = 'USA';

console.log("Mary's country is", mary.country || 'Unknown');
console.log("John's country is", john.country || 'Unknown');