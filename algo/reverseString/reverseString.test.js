const reverseString = require("./reverseString"); 

test("it's a function alright", () => {
    expect(typeof reverseString).toEqual('function'); 
})

test('returns "taC" for "Cat" reversed without changing casing', () => {
    expect(reverseString("Cat")).toEqual("taC");
})

const reverseStringB = require("./reverseString"); 

test("it's a function alright", () => {
    expect(typeof reverseStringB).toEqual('function'); 
})

test('returns "taC" for "Cat" reversed without changing casing', () => {
    expect(reverseStringB("Cat")).toEqual("taC");
})

const reverseStringC = require("./reverseString");

test("it's a function alright", () => {
    expect(typeof reverseStringC).toEqual('function'); 
})

test('returns "taC" for "Cat" reversed without changing casing', () => {
    expect(reverseStringC("Cat")).toEqual("taC");
})
