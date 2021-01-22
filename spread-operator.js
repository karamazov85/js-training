// =========================== The ... Operator ==========================// 

// DEFINITION: 
// the spread operator, …  spreads the items that are contained in an iterable (i.e. anything that can be looped over, like strings, arrays, sets, etc.) inside a receiver. 

// APPLICATION: ARRAYS. It will spread the elements of the array into a receiver (an array, a function call or an object)

const original = [1,2,null,undefined, 'What is love?']; 
const receiver = [ ...original, 2, 3, 'Baby don\'t hurt me no more']

// you can also merge two or more arrays into a single array. NOTE: duplicates will not be overridden, they will all remain in the array. 
const array1 = [1,2,3,4];
const array2 = [5,6,4,7];
const mergedArray = [...array1, ...array2]
console.log("MERGED 2 ARRAYS", mergedArray)

// the same thing works with arrays of objects: 

const obj2 = { eat: 'salad', drink: 'water', smoke: 'weed' }
const obj3 = { listen: 'jazz', watch:'Narcos' }
const array = [ obj2, obj3] 
console.log("ORIGINAL ARRAY OF OBJECTS", array)
const array2b = [ { do: '200 push-ups', finish: 'beer app reducers' } ]
const mergedArrayOfObjects = [ ...array, ...array2b ]
console.log("MERGED ARRAY OF OBJECTS", mergedArrayOfObjects)

// APPLICATION: ARRAY-LIKE OBJECTS. Typical example is a HTML Node-list. It looks like an array but it doesn't have any of the array methods. 

const nodeList = document.getElementByClassName('book') // returns a node list. 

// to convert it to a REGULAR ARRAY, you can do this:
const arrayFromNodeList = Array.from(nodeList); // returns an array

// or use the spread operator:
const arrayFromNodeList2 = [...nodeList] // returns an array

// APPLICATION: OBJECTS. Basically, ... is shorthand for Object.assign(). It creates a SHALLOW COPY of the object. Nested objects will remain reference types! 

const obj = { eat: 'salad', drink: 'water', smoke: 'weed' }
console.log("ORIGINAL OBJECT TO CLONE & APPEND", obj)

// we clone the old object + add new properties and values to it. 
const newObj = { 
  ...obj, 
  listen: 'jazz',
  do: 'yoga'
}
console.log("CLONED AND APPENDED OBJECT", newObj)

// we can MERGE two objects into a single one by spreading all properties into the receiver
const Sunday1 = { 
  do: 'coding',
  eat: 'nothing',
  drink: 'coffee and water'
}
console.log("SUNDAY1 ", Sunday1)

const Sunday2 = {
  practice: 'pentatone scale',
  go: 'walk in the park',
  companion: 'wife'
}
console.log("SUNDAY2 ", Sunday2)

const Sunday = { ...Sunday1, ...Sunday2 }
console.log("SUNDAY MERGED ", Sunday)

// If we have an array of objects, we can modify the specific objects and return the array. This happens all the time in reducer utility functions!
let cart = [
  { 
    id: 1,
    name: 'microscope',
    price: 10,
    quantity: 2
  },
  {
    id: 2,
    name: 'Fender Telecaster',
    price: 15,
    quantity: 1
  },
  {
    id: 4,
    name: 'Fender Amp',
    price: 35,
    quantity: 1
  },
  {
    id: 6,
    name: 'Fender Jazzmaster',
    price: 25,
    quantity: 1
  },
]

const jazzMaster = {
    id: 6,
    name: 'Fender Jazzmaster',
    price: 25,
    quantity: 1
}

const addToCart = (cart, productToAdd) => {
  const existingProduct = cart.find(product => product.id === productToAdd.id);
  // by convention, we return a NEW ARRAY for immutability.
  if(existingProduct) {
    return cart.map(product => product.id === existingProduct.id 
           // ...product means: ADD ALL PROPERTIES OF THAT OBJECT TO NEW OBJECT, and then we explicitly override the property that we want with the new value
           ? { ...product, quantity: product.quantity + productToAdd.quantity } 
           : product) 
  }
  // if the product is not in the cart yet, return the original cart + add the new product
  // original array is left intact as it's immutable.
  return [ ...cart, productToAdd ]
}

console.log("CART", cart)
console.log("ADDED ANOTHER JAZZMASTER TO CART", addToCart(cart, jazzMaster))

// APPLICATION: ES6 MAP and SET 

// You have an object. Convert it to a Map.
const saturday = {
  chore: 'hoover',
  fun: 'walk in the park',
  practice: '7 chords'
}
// convert to map()
const saturdayMap = new Map(Object.entries(saturday))
console.log("ES6 MAP" ,saturdayMap)
// [...Map] will return an array of [ key, value pairs ]...
console.log("... RETURNS ARRAY OF [ KEY, VALUE ] PAIRS", [...saturdayMap])

// ... which you can then use to convert the ES6 Map back to a regular object! 
const backToObject = Object.fromEntries([...saturdayMap])
console.log("CONVERTED [ KEY, VALUE ] PAIRS BACK TO OBJECT", backToObject)

// NOTE: Object.fromEntries() can also convert an ES6 Map to object DIRECTLY. No need to ... the ES6 into key-value pairs really.
console.log("CONVERTED ES6 MAP TO OBJECT WITHOUT SPREADING ", Object.fromEntries(saturdayMap))


// APPLICATION: FUNCTIONS - as an argument
// Some functions accept a variable number of arguments. Like the Math.max() function. 
const numbers = [ 1,2,3,4,5 ]
Math.max(numbers) // this won't work as the Math.max() function is looking for NUMBERS as params, not an array. 
Math.max.apply(null, numbers) // this will work as Function.prototype.apply() accepts a specific THIS and an ARRAY as arguments. 

// Best solution: spread out the values of the array and pass them into the function. 
Math.max(...numbers)


// FURTHER READING:
// https://zendev.com/2018/05/09/understanding-spread-operator-in-javascript.html
// https://medium.com/better-programming/understanding-the-javascript-spread-operator-from-beginner-to-expert-8f1c110c64db
// 