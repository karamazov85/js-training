const longestWord = require("./longestWord");

test('returns "Carolingian" from "The Carolingian Empire is dead"', () => {
    const string = "The Carolingian Empire is dead"
    expect(longestWord(string)).toEqual("Carolingian")
})

const longestWordB = require("./longestWord")

test('returns "Carolingian" from "The Carolingian Empire is dead"', () => {
    expect(longestWordB("The Carolingian Empire is dead")).toEqual("Carolingian")
})

const longestWordC = require("./longestWord")

test('returns "Carolingian" from "The Carolingian Empire is dead"', () => {
    expect(longestWordC("The Carolingian Empire is dead")).toEqual("Carolingian")
})