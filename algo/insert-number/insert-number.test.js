const insertAtIndex = require('./insert-number'); 

test(' returns lowest index where second arument would belong if inserted in the array that is sorted ascending', () => {
    expect(insertAtIndex([1,2,3,4,5,6], 1.5)).toEqual(1);
})

test( ' throws TypeError if second argument is not a number', () => {
    expect(() => {insertAtIndex([1,2,3], "card")}).toThrow(TypeError);
})
