// Given two or more arrays, write a function that combines their elements into one array without any repetition.

const mergeArrays = (...args) => { // we don't know how many args we will have. So we spread them in
    // note you can work with ...arrays like array.something()

    // check if function received correct arguments
    for (let arg of args) {
        if(!Array.isArray(arg)){
            throw new TypeError("one or more arguments not an array")
        }
    }

    // flatten:
    const flat = args.reduce((acc,curr) => { return acc.concat(curr) },[])

    // For practive's sake, the 3 different ways to get rid of duplicates from an array
    const uniqueValues = [ ...new Set(flat) ]
    const uniqueValues2 = flat.reduce((acc, curr) => { return acc.includes(curr) ? acc : [ ...acc, curr ]}, [])
    const uniqueValues3 = flat.filter((value, index) => flat.indexOf(value) === index)
    return uniqueValues;
}

module.exports = mergeArrays;