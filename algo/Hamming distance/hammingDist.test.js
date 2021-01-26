const hammingDist = require("./hammingDistance");

test('it is a function', () => {
    expect(typeof hammingDist).toEqual('function');
})

test('returns the integer 2 for "dogfood" and "dogfeed"', () => {
    expect(hammingDist("dogfood", "dogfeed")).toEqual(2);
})

test('returns the integer 0 for "duck" and "duck"', () => {
    expect(hammingDist("duck", "duck")).toEqual(0);
})

test('returns false for "dogfood" and "parrotfood"', () => {
    expect(hammingDist("dogfood", "parrotfood")).toEqual(false)
})

test ('returns integer 1 for "Hiya" and "heYa"', () => {
    expect(hammingDist("hiya", "heya")).toEqual(1)
})