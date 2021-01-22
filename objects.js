const user_1 = {
  id: 1,
  name: 'Frank',
  age: 34,
  member: true,
  job: 'editor',
  transport: 'bicycle',
  nationality: 'British',
  pet: 'dog',
  cart: [
    {
      id: 3335271,
      productName: 'White Nights',
      authorLastName: 'Dostoyevski',
      authorFirstName: 'Fyodor Mihailovich',
      price: 12.5,
      inStock: true,
      stockLevel: 24,
      paid: false,
      shipped: false,
      count: 1,
    },
    {
      id: 3233421,
      productName: 'The Shining',
      authorLastName: 'King',
      authorFirstName: 'Steven',
      price: 13.99,
      inStock: true,
      stockLevel: 14,
      paid: false,
      shipped: false,
      count: 1,
    },
    {
      id: 1232309,
      productName: 'Portait of a Lady',
      authorLastName: 'James',
      authorFirstName: 'Henry',
      price: 15.99,
      inStock: true,
      stockLevel: 6,
      paid: false,
      shipped: false,
      count: 1,
    },
  ],
  email: 'frank@me.com',
  paymentMethod: 'paypal',
  address: '33 Cat Street, Birmingham, UK',
};

// log his cart items on the console
// console.log("EXERCISE 1: ",user_1.cart);
// log just the names and the prices of the cart items
console.log(
  'EXERCISE 2:',
  `item #1: ${user_1.cart[0].productName}, price: ${user_1.cart[0].price}, item #2: ${user_1.cart[1].productName}, price: ${user_1.cart[1].price}, item #3: ${user_1.cart[2].productName}, price: ${user_1.cart[0].price}, item #2: ${user_1.cart[2].productName}, price: ${user_1.cart[2].price}, `
);

// ==================== EXERCISE #2 reduce object ==================== //

// let's take an array of objects and convert it into a simple object.

const peopleArray = [
  { id: 123, name: 'dave', age: 23 },
  { id: 456, name: 'chris', age: 23 },
  { id: 789, name: 'bob', age: 23 },
  { id: 101, name: 'tom', age: 23 },
  { id: 102, name: 'tim', age: 23 },
];

// convert to object so that we take the id of each object in the array and set them as individual keys in the new object.

const arrayToObject = (array) =>
  array.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});

const peopleObject = arrayToObject(peopleArray);
console.log('EXERCISE 2b: ', peopleObject);

// =========== EXERCISE #3 convert object to ES6 Map ============== //

// take the new peopleObject and convert it into a new Map

const peopleArray_2 = Object.entries(peopleObject);
console.log('EXERCISE 3a', peopleArray_2);

const peopleMap = new Map(peopleArray_2);
console.log('EXERCISE 3b', peopleMap);

// convert the keys of the new map into integers

const peopleMapArray = [...peopleMap];
console.log(peopleMapArray);

const newPeopleMap = new Map();

peopleMapArray.forEach(([key, value]) => {
  let newKey = parseInt(key);
  newPeopleMap.set(newKey, value);
});

console.log('EXERCISE 3c', newPeopleMap);

// =================== EXERCISE #4 compare objects ==============//

// take the original user_1 object and add a new book into the cart. If the cart already has that book, increase the count. Do it without using Map.

// 1. make a deep copy of the user_1 object. Please note:
// const user_2 = user_1; is an ABSOLUTE NO-NO!!! it creates a shallow copy and the copy object will point to the same object in memory, it's just a reference value, it will mutate the original object.

// We can't use Object.assign() either because: 1. it only creates a shallow copy, keys with non-primitive-type values will not be copied, those values will be referenced from the same place in memory; 3. Object.assign() only copies enumerable properties. Non-enumerable properties (eg. properties that are themselves objects or arrays) will NOT be copied.

// SOLUTION: JSON.parse(JSON.stringify(obj)) - this will create a DEEP copy of the original and leaves the original intact.
const user_2 = JSON.parse(JSON.stringify(user_1));

// ====== LITERATURE ON COPYING OBJECTS: https://scotch.io/bar-talk/copying-objects-in-javascript ========= //

// console.log("EXERCISE 4a ", user_2)

// 2. transform the cart in the user_2 object into an object of objects.
user_2.cart = user_2.cart.reduce((obj, book) => {
  obj[book.id] = book;
  return obj;
}, {});

console.log('EXERCISE 4b ', user_2);

// 3. transform the books array of objects into an object of objects where the key of each object is the id of the book.
const books = [
  {
    id: 3335271,
    productName: 'White Nights',
    authorLastName: 'Dostoyevski',
    authorFirstName: 'Fyodor Mihailovich',
    price: 12.5,
    inStock: true,
    stockLevel: 24,
    paid: false,
    shipped: false,
    count: 1,
  },
  {
    id: 33352323,
    productName: 'The Road',
    authorLastName: 'McCarthy',
    authorFirstName: 'Cormac',
    price: 10.5,
    inStock: true,
    stockLevel: 10,
    paid: false,
    shipped: false,
    count: 1,
  },
  {
    id: 33345311,
    productName: 'The Corrections',
    authorLastName: 'Franzen',
    authorFirstName: 'Jonathan',
    price: 14.7,
    inStock: true,
    stockLevel: 8,
    paid: false,
    shipped: false,
    count: 1,
  },
];

const booksObject = books.reduce((obj, book) => {
  obj[book.id] = book;
  return obj;
}, {});

// console.log("EXERCISE 4c ", booksObject)

// 4. Now, add items of the booksObject to user_2's cart. If the book is already in the cart, the count should be incremented. No duplicates.

const theCorrections = booksObject['33345311'];

const addToCart = (user, newBook) => {
  if (user.cart.hasOwnProperty(newBook.id)) {
    user.cart[newBook.id].count += newBook.count;
  } else {
    user.cart[newBook.id] = newBook;
  }
};

addToCart(user_2, theCorrections);
addToCart(user_2, booksObject['3335271']);

// you don't have to use .hasOwnProperty(). You can just say:

const addToCart2 = (user, newBook) => {
  if (user.cart[newBook.id]) {
    user.cart[newBook.id].count += newBook.count;
  } else {
    user.cart[newBook.id] = newBook;
  }
};

addToCart2(user_2, booksObject['33352323']);
console.log('EXERCISE 4d ', user_2);

// 5. write a function that gives us all the names of the books and the total amount of user's shopping + 20% tax.

const shoppingSummary = (user) => {
  const cart = Object.entries(user.cart);
  cart.forEach(([serial, book]) => {
    const subTotal = book.price * book.count;
    const tax = subTotal * 0.2;
    const total = parseInt(subTotal + tax);
    book.subTotal = subTotal;
    book.tax = tax;
    book.total = total;
  });

  const subTotal = cart.reduce((acc, [serial, book]) => {
    return (acc += book.subTotal);
  }, 0);

  const tax = cart.reduce((acc, [serial, book]) => {
    return (acc += book.tax);
  }, 0);

  const total = subTotal + tax;

  return {
    // NOTE: .toFixed() converts a number to string. So we can either   parseFloat() it or use Number() to parse the rounded string back to a number again. parseFloat() converts string to number with decimal point while Math.round() and parseInt() round the number to the neares integer, which is not what we want here.
    Subtotal: Number(subTotal.toFixed(2)),
    Tax: parseFloat(tax.toFixed(2)),
    Total: parseFloat(total.toFixed(2)),
  };
};

console.log('EXERCISE 4d', shoppingSummary(user_2)); // AWESOME!!! ;))))

// ============ EXERCISE 5: create an object from array =============//

// 1. take an array of colors
const colors = [
  'Black',
  'Brown',
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Violet',
  'Grey',
  'White',
];

// 2. assign the index  of each color to the color as a value and create an array of arrays
const newColors = [];
colors.forEach((color, index) => {
  let currColor = [color, index];
  newColors.push(currColor);
});

console.log(newColors);

// 3. use Object.fromEntries() to create a regular object from the array of arrays. Object.fromEntries() is essenatially the reverse of Object.entries();
const colorsObj = Object.fromEntries(newColors);

console.log('EXERCISE 5a', colorsObj);

// ============ EXERCISE 6: loop through the Object ====================//

// 1. Take the books array you made above. Convert it into an object, where the keys are the id and the values are the books.

// 6a We can do this with a forEach()
const booksObj = books.reduce((acc, book) => {
  acc[book.id] = book;
  return acc;
}, {});

console.log('EXERCISE 6a', booksObj);

//6b write an increasePrice function that takes 2 params: bookId and a number by which the price will be increased. It will return the entire array with the given book's price increased.

const increaseBookPrice = (bookId, priceChange) => {
  if (!bookId || !priceChange) {
    return;
  }
  const bookIdStr = bookId.toString();

  if (booksObj[bookIdStr]) {
    booksObj[bookIdStr].price += priceChange;
    return booksObj;
  }
};

increaseBookPrice(33352323, 2);

// 6c Take the booksObj and spread it out. What does it look like?

console.log('EXERCISE 6c ', { ...booksObj });

// ======= EXERCISE 7: MORE TRANSITIONS BETWEEN OBJECT AND ARRAY =======//

// 7a take booksObj and convert it to array. NOTE: arrays are objects by default - the keys are the indexes.

const booksArr = Object.keys(booksObj).map((key) => booksObj[key]);

console.log('EXERCISE 7a ', booksArr);

// 7b we can achieve much the same with Object.values(obj)

const booksArr2 = Object.values(booksObj);

console.log('EXERCISE 7b ', booksArr2);

// 7c

// const booksArr3 = [...booksObj];

// console.log('EXERCISE 7c ', booksArr3);

// console.log(Object.values(booksArr2).map((book) => book));

//8a Take this objectof objects. Increase the ages by 1

const newArray = [
  { id: 123, name: 'dave', age: 23 },
  { id: 456, name: 'chris', age: 23 },
  { id: 789, name: 'bob', age: 23 },
  { id: 101, name: 'tom', age: 23 },
  { id: 102, name: 'tim', age: 23 },
];

const obj = newArray.reduce((obj, item) => {
  obj[item.id] = item;
  return obj;
}, {});

console.log('8a', obj);

const newObj = Object.entries(obj).map((key, value) => {
  value.age++;
});

console.log(obj);
