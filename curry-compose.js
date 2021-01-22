// EXERCISE: FAHRENHEIT TO CELSIUS

// take in a number and subtract 32.
const subTract32 = (n) => n - 32;

// take a number and multiply by 5.
const times5 = (n) => n * 5;

// divide by 9.
const divideBy9 = (n) => n / 9;

// 1. curried version. Not sure this is currying...
const fahrenheitToCelsius = (num) => divideBy9(times5(subTract32(num)));
fahrenheitToCelsius(92);

// 2a. composed version: compose()

const compose = (f, g) => (num) => f(g(num));

const fahrenheitToCelsius2 = (...fns) => fns.reduceRight(compose);

const trace = label => value => {
  console.log(`${ label }: ${ value } `);
  return value;
}

fahrenheitToCelsius2(
  trace('after dividedBy9'), 
  divideBy9, 
  trace('after times5'), 
  times5, trace('after subTract32'), subTract32)(92);
