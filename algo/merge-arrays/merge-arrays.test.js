const mergeArrays = require('./merge-arrays');

test(' merges arrays without duplicates', () => {
    expect(mergeArrays([1,2,3,4,5],[5,6,7,8,9],[9,9],[11,13,45,8])).toEqual([1,2,3,4,5,6,7,8,9,11,13,45])
})

test(' throws Error if one of the arguments is not an array', () => {
    // note: if you want to check if a a function throws the right error, 
    // you have to wrap the function in an anonymous function inside expect()!!!
    expect(() => {mergeArrays([1,2,4], [4,5,6], "kite")}).toThrow(TypeError);
})

// more info on why the anonymous function is needed here:
// https://stackoverflow.com/questions/46042613/how-to-test-the-type-of-a-thrown-exception-in-jest