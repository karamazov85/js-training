// .sort() sorts elements of an array based on the callback function criterion. If no callback is provided, it translates the elements to strings and a orders them based on their Unicode point values (UTF-16)

const animals = [
  {id: 2, name: "Bob", species: "dog", age: 3},
  {id: 3, name: "Buzz", species: "cat", age: 7},
  {id: 6, name: "Len", species: "cat", age: 4},
  {id: 26, name: "Bill", species: "rat", age: 1},
  {id: 45, name: "Finn", species: "snake", age: 2},
  {id: 22, name: "Liz", species: "fish", age: 3},
  {id: 31, name: "Prince", species: "dog", age: 7},
  {id: 1, name: "Cake", species: "cat", age: 5},
  {id: 4, name: "Flap", species: "dog", age: 4},
  {id: 10, name: "Bud", species: "bear", age: 4}
]

// let's sort these elements by ID in an ascending order. 

const idAscending = animals.sort((a, b) => { 
  return a.id - b.id;
})

console.log(idAscending);

// let's sort them in decending order 

const idDescending = animals.sort((a,b) => b.id - a.id);

console.log(idDescending);

// .localeCompare() allows us to sort strings by alphabetical order. 

// let's sort our animals array by the names of animals - ascending alphabetically.

const nameAscending = animals.sort((animal1,animal2) => animal1.name.localeCompare(animal2.name, 'en', {ignorePunctuation: true}));

console.log(nameAscending);

// now the same thing in descending order alphabetically. 

const nameDescending = animals.sort((animal1, animal2) => animal2.name.localeCompare(animal1.name, 'en', {ignorePunctuation: true}));

console.log(nameDescending);

// if you want to make this case-insensitive then store each animal name in a variable inside the sort callback like const a = animal1.name.toLowerCase() and then use a and b variables to do the same thing. 


