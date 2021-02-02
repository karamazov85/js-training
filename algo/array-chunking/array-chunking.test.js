const chunkArray = require('./array-chunking');

test('return [[1,2,3],[4,5,6],[7,8,9]] for [1,2,3,4,5,6,7,8,9] and 3', () => {
    expect(chunkArray([1,2,3,4,5,6,7,8,9], 3)).toEqual([[1,2,3],[4,5,6],[7,8,9]])
})

test('return [[1,2,3],[4,5,6],[7,8,9], [10]] for [1,2,3,4,5,6,7,8,9, 10] and 3', () => {
    expect(chunkArray([1,2,3,4,5,6,7,8,9,10], 3)).toEqual([[1,2,3],[4,5,6],[7,8,9],[10]])
})

const chunkArrayB = require('./array-chunking');

test('return [[1,2,3],[4,5,6],[7,8,9]] for [1,2,3,4,5,6,7,8,9] and 3', () => {
    expect(chunkArrayB([1,2,3,4,5,6,7,8,9], 3)).toEqual([[1,2,3],[4,5,6],[7,8,9]])
})

test('return [[1,2,3],[4,5,6],[7,8,9], [10]] for [1,2,3,4,5,6,7,8,9, 10] and 3', () => {
    expect(chunkArrayB([1,2,3,4,5,6,7,8,9,10], 3)).toEqual([[1,2,3],[4,5,6],[7,8,9],[10]])
})