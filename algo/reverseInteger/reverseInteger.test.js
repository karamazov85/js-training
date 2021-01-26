const reverseInt = require("./reverseInteger");

test('reverses 345 to 543', () => {
    expect(reverseInt(345)).toEqual(543);
})

test('reverses -12345 to -54321', () => {
    expect(reverseInt(-12345 )).toEqual(-54321);
})
