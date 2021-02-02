// Given an array, remove all falsy values from the array and return an array of only truthy values

// filter
const falsyBouncer = (array) => {
  return array.filter(el => Boolean(el)) // Boolean() converts the passed value to a boolean. If the value is ommited or falsy it will come up falsy
}

module.exports = falsyBouncer;


// for of loop 
const falsyBouncerB = array => {
    const truthy = []

    for(let el of array) {
        if(el) {
            truthy.push(el)
        }
    }
    return truthy;
}

module.exports = falsyBouncerB;
