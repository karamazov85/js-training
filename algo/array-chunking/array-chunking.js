// Given an array and a chunk size, divide the array into many sub-arrays where each sub-array has the specified length

// slice
const chunkArray = (array, chunksize) => {
    let newArray = []

    for(let i=0; i < array.length; i+=chunksize) {
        newArray.push(array.slice(i, i + chunksize))
        console.log(newArray)
    }
    return newArray
}

module.exports = chunkArray;

// splice 
const chunkArrayB = (array, chunksize) => {
  const arrayCopy = [... array];
  const newArray = [];

  while (arrayCopy.length > 0) {
      newArray.push(arrayCopy.splice(0, chunksize)) // splice returns the deleted elements and mutates the oroginal array.
  }
  
  return newArray;
}

module.exports = chunkArrayB;