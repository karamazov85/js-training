
// =============== EXCERCISE #1 ==================== //


// let's say we have our data as objects. We want to add them one-by-one to 1 MAP() object.
// 1. Define the new container MAP() object: 
let guys = new Map();

// here is the first item. It's in in an object literal format.
let steve = {
   1: { 
      id: 1,
      name: "Steve",
      age: 33,
      gender: 'male',
      city: "San Francisco",
      car: 'Tesla R3', 
      bike: 'Kawasaki',
      diet: 'vegan'
   }
}

// 2. turn the object into an array which has a [[key1, value1]] format
let steveArray = Object.entries(steve);

// 3. loop through that array, pass in [[key, value]] and at each iteration, set the key them as a key-value pair in the new container MAP() object.
steveArray.forEach(([key, value])=>{
  guys.set(key, value)
  return guys;
})

// 4. if the other elements of the new container MAP() are themselves MAPs, the method is the same: turn them into arrays of [key1, value1] format, loop through and set them as ke-value pairs in the new container MAP. 

// let's define an entry as a new, seperate MAP by wrapping traditinal object literal syntax in Object.entries()
let john = new Map(Object.entries({
  2: {
      id: 2,
      name: "John",
      age: 30,
      gender: 'male',
      city: "Oakland",
      car: 'Tesla Roadster', 
      bike: 'Aprilia',
      diet: 'omnivore'
    }
}));

// turn the new map into an array of [[key1, value1], [key2, value2]] pairs
let johnArray = Array.from(john);

// loop through that array with forEach, pass in the key and value itartors into the callback
johnArray.forEach(([key, value]) => {
  guys.set(key, value); // at every iteration, add the new key-value pair to the original map
});

// Do the whole thing again: 
let frank = new Map(Object.entries({
  3: {
      id: 2,
      name: "John",
      age: 30,
      gender: 'male',
      city: "Oakland",
      car: 'Tesla Roadster', 
      bike: 'Aprilia',
      diet: 'omnivore'
    }
}));

let frankArray = Array.from(frank); // or [...frank]

frankArray.forEach(([key, value]) => {
  guys.set(key, value);
})

console.log(guys)


// =============== EXCERCISE #2 ==================== //


// 1. define an array of ke-value pairs and turn it into a Map(); 
const sports = [
  ['football', 10000], 
  ['baseball', 20000], 
  ['tennis', 5000], 
  ['badminton', 15000], 
  ['table-tennis', 60000], 
  ['swimming', 25000], 
  ['athletics', 25000], 
  ['volleyball', 10000]
]; 

const sportsMap = new Map(sports);

// 2. access a value by Map key 
console.log(sportsMap.get('football'));

// 3. increase the numbe of spectators for a certain sport. using map.set(key, newValue)
sportsMap.set('swimming', sportsMap.get('swimming')+500); 

// to be able to loop though the Map and add 500 new spectators to each sport's specator count, we need to be able to get the keys in an indexed fashion. This is how you get a key like that:
const swimmingKey = Array.from(sportsMap.keys())[5]; // or [...sportsMap.keys()[5]]

// 4. this function accepts a Map as paramenter plus a number. It loops through the Map and at each key increments the value by number.
const addPeople = (map, number) => { 
  for (var i = 0; i < map.length; i++) {
    let key = Array.from(map.keys())[i];
    map.set(key, map.get(key)+number)
  }
  return map;
}

const morePeople = addPeople(sportsMap, 500);

console.log(morePeople)
// I have no idea why this did not work... 

// 5. Workaround? 1. convert Map into an array of key-value pairs, 2. change the values with a forEach function and convert the whole thing back to a new Map and return it. All within the 1 function: 

const addPeople_v2 = (map, number) => {
  const keysAndValues = [...map]; // gives us the array of key-value pairs, it works
  let newKeysAndValues = keysAndValues.forEach(([key, value]) => value += number) // for some reason this returns undefined and that's where this whole thing breaks
  const newMap = new Map(newKeysAndValues);
  return newMap;
}

console.log(addPeople_v2(sportsMap, 500))

// again, I have no ide why this won't work...
