// Return the elements from the given array that pass the test specified by the provided function. 

const customFilter = (array, callback) => {
    const newArray = []
   
    for (let el of array) {
        if (callback(el)) {
            newArray.push(el)
        } 
    }
    return newArray
}

module.exports = customFilter;

// for testing 
// const arr = [1,2,3,4,5, "ball", "record", undefined]
// const cb = (stuff) => Boolean(stuff) ? true : false
// const cb2 = (stuff) => !isNaN(stuff) ? true : false 
// console.log(customFilter(arr, cb2))

// v2: return only the FIRST element that satisfies the callback criterium 

const returnFirst = (array, callback) => {
    for(let el of array) {
        if(callback(el)) {
            return el
        }
    }
    return undefined
}

module.exports = returnFirst;