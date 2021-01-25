const isAnagram = require("./anagram")

test('isAnagram is a function', () => {
    expect(typeof isAnagram).toEqual('function');
})

test('returns true if passed "elvis" and "lives"', () => {
    expect(isAnagram("elvis", "lives")).toBeTruthy();
})

test('returns true for "I work on Sundays" and "On Sundays I work"', () => {
    expect(isAnagram("On Sundays I work", "I work on Sundays")).toBeTruthy()
})

test('returns false for "Elvis lives" and "Elvis livestreams"', () => {
    expect(isAnagram("Elvis lives","Elvis livestreams")).toBeFalsy()
})

const isAnagramB = require("./anagram")

test('isAnagram is a function', () => {
    expect(typeof isAnagramB).toEqual('function');
})

test('returns true if passed "elvis" and "lives"', () => {
    expect(isAnagramB("elvis", "lives")).toBeTruthy();
})

test('returns true for "I work on Sundays" and "On Sundays I work"', () => {
    expect(isAnagramB("On Sundays I work", "I work on Sundays")).toBeTruthy()
})

test('returns false for "Elvis lives" and "Elvis livestreams"', () => {
    expect(isAnagramB("Elvis lives","Elvis livestreams")).toBeFalsy()
})