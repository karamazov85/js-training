// IMMUTABILITY
// NEVER mutate state. A function always first copies the state then changes stuff in the copy and returns the new version.

// this is cool
const obj = { name: 'Jackie' };
function clone(obj) {
  return { ...obj };
}

// 1. copy state 2. change stuff in copy 3. return copy
function updateObj(obj) {
  const obj2 = clone(obj);
  obj.name = 'Steve';
  return obj2;
}

// in case of arrays:
const animals = ['cat', 'dog', 'pig'];

function addAnimal(animals, newAnimal) {
  return [...animals, newAnimal];
}

console.log(addAnimal(animals, 'mouse'));
//original array still intact:
console.log(animals);

// Note: array.concat(newAnimal) would also have worked fine.

// HIGHER ORDER FUNCTIONS
// = it either takes one or more functions as arguments OR returns a function as a result.
const hof = () => () => 5;
hof()(); // 5
// or it receives a function as argument
const hof2 = (fn) => fn(5);
hof2(function a(x) {
  return x;
});

// CLOSURES whenver a function accesses a variable outside it's own inner lexical environment

// increment remembers the count variable that is declared in the outer scope. But here we are modifying state outside the inner function's scope. Therefore it is not pure.
const closure = function () {
  let count = 0;
  return function increment() {
    count++;
    return count;
  };
};
const incrementFn = closure();
incrementFn();
incrementFn();

// we can use closures to make stuff private. getCount onlt returns the count. We return from the function what we want, and hide the rest from the user.
const closure2 = function () {
  let count = 55;
  return function getCount() {
    return count;
  };
};

const getCounter = closure2();
getCounter();

// CURRYING
// we can turn a function with multiple arguments into several functions each taking one argument

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
// notice that b has acess to a variable because of Closures.
curriedMultiply(5)(3); // 15

// We can make several utility functions using this technique. This saves memory.
const curriedMultiplyBy5 = curriedMultiply(5);
curriedMultiplyBy5(4); // 20

// PARTIAL APPLICATION
// A function has say, 3 arguments. You can partially apply just one of them, store that in a new funtion and when you call that you add the rest of the params.

const multiplyAgain = (a, b, c) => a * b * c;
// we can bind this function with one argument to another function. The null param stands for the 'this' but there is not 'this' here so it's null.
const multiplyBy3 = multiplyAgain.bind(null, 3);
// now call this new function and add the rest of the params.
multiplyBy3(4, 10);

// MEMOIZATION
// use cache to cache already calculated values to avoid having to create the same references in memeory over and over again.

const cache = {};
function addTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log('long time');
    cache[n] = n + 80;
    return cache[n];
  }
}

console.log('1', addTo80(5));
// second time around, cache[n]h as already been calculated. NOTE: if you do this whole thing with cache.n notation, it won't work. dunno why.
console.log('2', addTo80(5));

// let's move cache inside the function.
// we need to create a CLOSURE by returning another function insdie = to avoid the cache getting garbage-collected once the outer function is run.
function memoizedAddTo80() {
  const cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log('long time');
      cache[n] = n + 80;
      return cache[n];
    }
  };
}
const memoized = memoizedAddTo80();
// when you call memoized you add a param. That will be passed to the inner function.
console.log('1', memoized(6));
console.log('2', memoized(6));

// COMPOSABILITY and composition.
// it means that you can combine funtions, each doing one task - into a pipeline of data manipualtion. This relies on HOFs and Closures heavily.

// two primitive functions:
const multiplyBy6 = (num) => num * 6;
const makePositive = (num) => Math.abs(num);

// make a HOF === takes functions as parameters and returns functions.
// this is a generic compose HOF.
function compose(fn1, fn2) {
  return function (num) {
    return fn1(fn2(num));
  };
}
// now we can feed specific functions to compose
const multiplyByAndMakePositive = compose(multiplyBy6, makePositive);

// call this new HOF. The param here is going to be fed to the inner function defined in the generic compose function.

console.log(multiplyByAndMakePositive(-100)); // 600

// the shorthand for compose:
const compose2 = (f, g) => (num) => f(g(num));

const multiplyByAndMakePositiveAgain = compose2(multiplyBy6, makePositive);

console.log(multiplyByAndMakePositiveAgain(-200)); // 1200

// PIPE is the same thing but the order of the execution of the functions fed to the pipe HOF will be reversed. It will go left --> right instead on right --> left (when you look at the params of the HOF):

const pipe = (f, g) => (data) => g(f(data)); //

const makePositiveAndMultiply = pipe(multiplyBy6, makePositive);
// it will run the makePositive() first and multiply the return value of that by 6;
console.log(makePositiveAndMultiply(-9000));

// let's pipe many functions together. Each will take the returned value of the previous one and execute on that value. Any number of functions can be fed to it as arguments.

const pipeThese = (...functions) => (value) =>
  functions.reduce((currentValue, currentFunction) => {
    return currentFunction(currentValue);
  }, finalValue);

// the below will be executed left to right.
pipeThese(getName, uppercase, get6Characters, reverse);

// or, if you already have a compose or pipe pre-written like this:

let composeFunc = (f, g) => (value) => f(g(value));

// then you can just use that as a callbackfunction in the reduce:

const composeThese = (...functions) => functions.reduce(composeFunc);

// in this case, the execution will be done from left to right or bottom up.

// more info on this composition:
// https://medium.com/free-code-camp/pipe-and-compose-in-javascript-5b04004ac937

