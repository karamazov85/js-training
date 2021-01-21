// // EXERCISE: FAHRENHEIT TO CELSIUS

// take in a number and subtract 32.
const subTract32 = (n) => n - 32;

// take a number and multiply by 5.
const times5 = (n) => n * 5;

// divide by 9.
const divideBy9 = (n) => n / 9;

// // 1. a primitive version of composition
// const fahrenheitToCelsius = (num) => divideBy9(times5(subTract32(num)));
// fahrenheitToCelsius(92);

// // 2a. composed version: compose()

// const compose = (...fns) => (num) =>
//   fns.reduceRight((currValue, currFunc) => {
//     return currFunc(currValue);
//   }, num);

// const trace = (label) => (value) => {
//   console.log(`${label}: ${value} `);
//   return value;
// };

// const fahrenheitToCelsius = compose(
//   trace('after dividedBy9'),
//   divideBy9,
//   trace('after times5'),
//   times5,
//   trace('after subTract32'),
//   subTract32
// );

// console.log(fahrenheitToCelsius(92));

// same thing with .pipe()
// const pipe = (...fns) => num => fns.reduce((currValue, currFunc) => {
//   return currFunc(currValue);
// }, num);

// so the execution will happen from left to right - top to bottom
// const fahrenheitToCelsius3 = pipe(
//   subTract32,
//   trace('after subTract32'),
//   times5,
//   trace('after times5'),
//   divideBy9,
//   trace('divideBy9'),
// )

// console.log(fahrenheitToCelsius3(98));

const user = {
  id: 44445,
  name: "John",
  cart: [],
  subTotal: 0,
  tax: 0,
  total: 0, 
  isActive: false,
}

// 1. Define simple functions for each operation

const addToCart = (item) => {
  return (user) => {
    const userUpdated = { ...user, cart: user.cart.push(item) };
    return userUpdated;
  };
};

function updateUserStatus(user) {
  if (user.cart.length > 0) {
    return { ...user, isActive: true };
  }
  return { ...user, isActive: false };
}

const setSubTotal = (user) => {
  const cartSubTotal = user.cart.reduce((subTotal, cartItem) => {
    return (subTotal += cartItem.price);
  }, subTotal);

  return { ...user, subTotal: cartSubTotal };
};

const setTax = (user) => {
  if (!user || user.cart.length === 0) {
    return;
  }
  const taxRate = 0.2;

  return { ...user, tax: user.subTotal * taxRate };
};

const setTotalPayable = (user) => {
  if (!user || user.subTotal === 0) {
    return;
  }
  const totalUpdated = user.subTotal + user.tax;

  return { ...user, total: totalUpdated };
};

// 2. define pipe

const pipe = (...fns) => (x) =>
  fns.reduce((currValue, currFunc) => {
    return currFunc(currValue);
  }, x);

const trace = (label) => (value) => {
  console.log(`${label}: ${value} `);
  return value;
};

// use .pipe to compose the fillCart

const fillCartWithUser = (user) => {
  return pipe(
    addToCart,
    trace('after addCart'),
    updateUserStatus,
    trace('after updateUserStatus'),
    setSubTotal,
    trace('after setSubTotal'),
    setTax,
    trace('after setTax'),
    setTotalPayable,
    trace('after setTotalPayable')
  );
};

console.log(fillCartWithUser(user)({name: "book", price: 20}))