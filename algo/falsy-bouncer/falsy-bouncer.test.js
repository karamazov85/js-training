const falsyBouncer = require('./falsy-bouncer');

test(' returns an array of only truthy values ', () => {
    expect(falsyBouncer([false, 0, 4, 5, "dog", undefined, -0, ""])).toEqual([4,5,"dog"])
})