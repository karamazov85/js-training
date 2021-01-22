// .reduce() can reduce an array onto a single value based on a callback function that we provide. Like adding up numbers.

let orders = [
  { amount: 250 },
  { amount: 350 },
  { amount: 450 },
  { amount: 550 },
  { amount: 650 },
  { amount: 750 },
  { amount: 850 },
  { amount: 1150 },
];

let orderTotal = orders.reduce(function (accumulator, currentOrder) {
  return accumulator + currentOrder.amount;
}, 0)

console.log(orderTotal); // 5000 

// the same with an arrow function. YOU MUST provide an initialValue as the second argument to .reduce() right after the callback! That's the starting value that will be passed in first as accumulator. Especially if you are using .reduce() on an array of objects. 

let totalOrders = orders.reduce((acc, order) => acc + order.amount, 0);

console.log(totalOrders); // 5000 

// .reduce() is a very useful tool when you need to 'flatten' an array of arrays into a one-dimensional array. The original array will not be mutated.

var array = [[0, 1], [2, 3], [4, 5]]; 
var flattenedArray = array.reduce(function(acc, curr){
  return acc.concat(curr)
  }, 
  []                           
); 

console.log(flattenedArray); // [ 0, 1, 2, 3, 4, 5 ]
console.log(array)
// reduce() can be used to turn arrays into object(s)



// {
//   'mark johansson': [
//     { name: 'waffle iron', price: '80', quantity: '2' },
//     { name: 'blender', price: '200', quantity: '1' },
//     { name: 'knife', price: '10', quantity: '4' },
//   ],
//   'Nikita Smith': [
//     { name: 'waffle iron', price: '80', quantity: '1' },
//     { name: 'knife', price: '10', quantity: '2' },
//     { name: 'pot', price: '20', quantity: '3' }
//   ]  
// }

const people = [ 
  {firstName: 'steven', lastName: 'Berkley'},
  {firstName: 'john', lastName: 'Smith'},
  {firstName: 'eric', lastName: 'Meadows'},
  {firstName: 'tom', lastName: 'Tucker'},
  {firstName: 'ben', lastName: 'Wright'},
  {firstName: 'steven', lastName: 'Fosch'},  
];

// now reduce this to a new OBJECT where you can access each user by firsName as a property. 

const capitalizedPeople = people.reduce((acc, person) => {
  return {...acc, [person.firstName]: person };
},{})

console.log(capitalizedPeople)

// we can capitalize the firstNames but then we can use map() to do that to all the objects

const capitalizeName = (person) => {
  const capitalizedFirstName = person.firstName.charAt(0).toUpperCase() + person.firstName.slice(1);
  return { 
    firstName: capitalizedFirstName,
    lastName : person.lastName
  }
}

people.map(capitalizeName)

