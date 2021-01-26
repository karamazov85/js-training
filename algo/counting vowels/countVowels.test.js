const countVowels = require("./countVowels"); 

test('returns 3 for "hello world"', () => {
    expect(countVowels("hello world")).toEqual(3)
})

test('returns 0 for "zzzzzz"', () => {
    expect(countVowels("zzzzzz")).toEqual(0)
})

const countVowelsB = require("./countVowels"); 

test('returns 3 for "hello world"', () => {
    expect(countVowelsB("hello world")).toEqual(3)
})

test('returns 0 for "zzzzzz"', () => {
    expect(countVowelsB("zzzzzz")).toEqual(0)
})

// for the consonants counter
// const countConsonants = require("./countVowels"); 

// test('returns 7 for "hello world"', () => {
//     expect(countConsonants("hello world")).toEqual(7)
// })

// test('returns 6 for "zzzzzz"', () => {
//     expect(countConsonants("zzzzzz")).toEqual(6)
// })
