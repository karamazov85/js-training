const searchReplace = require('./search-replace');

test('replaces dog with cat in "the dog is white"', () =>{
    expect(searchReplace("the dog is white", "dog", "cat")).toEqual("the cat is white")
})

test('replaces Dog with Cat in "the dog is white - same casing"', () =>{
    expect(searchReplace("the Dog is white", "Dog", "cat")).toEqual("the Cat is white")
})

const searchReplaceB = require('./search-replace');

test('replaces dog with cat in "the dog is white"', () =>{
    expect(searchReplaceB("the dog is white", "dog", "cat")).toEqual("the cat is white")
})

test('replaces Dog with Cat in "the dog is white - same casing"', () =>{
    expect(searchReplaceB("the Dog is white", "Dog", "cat")).toEqual("the Cat is white")
})