const customFilter = require('./custom-filter');

test('returns the values from the array that satisfy the provided callback function criterium', () => {
    const cb = (stuff) => !isNaN(stuff) ? true : false; 
    const array = [1,2,3,4,"dog","pig", undefined];
    expect(customFilter(array, cb)).toEqual([1,2,3,4])
})

test('returns the values from the array that satisfy the provided callback function criterum', () => {
    const cb = (stuff) => Boolean(stuff) ? true : false; 
    const array = [1,2,3,4,"dog","pig", undefined, "", null];
    expect(customFilter(array, cb)).toEqual([1,2,3,4,"dog", "pig"])
})

const returnFirst = require('./custom-filter');

test('returns the first  value from the array that satisfies the provided callback function criterium', () => {
    const cb = (stuff) => !isNaN(stuff) ? true : false; 
    const array = [1,2,3,4,"dog","pig", undefined];
    expect(returnFirst(array, cb)).toEqual(1);
})

test('returns the first  value from the array that satisfies the provided callback function criterium', () => {
    const cb = (stuff) => typeof stuff === 'string' ? true : false; 
    const array = [1,2,3,4,"dog","pig", undefined];
    expect(returnFirst(array, cb)).toEqual("dog");
})
