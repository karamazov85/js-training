const mostRecurringChar = require("./mostRecurring")

test(' reuturns z for "bazzzzfizzchunnnnng"', () => {
    expect(mostRecurringChar("bazzzzfizzchunnnnng")).toEqual("z");
})

// test(' returns t for "cHHabangggTttTTT"', () => {
//     expect(mostRecurringChar("cHHabangggTttTTT")).toEqual("t");
// })

const mostRecurringCharB = require("./mostRecurring");

test(' reuturns z for "bazzzzfizzchunnnnng"', () => {
    expect(mostRecurringCharB("bazzzzfizzchunnnnng")).toEqual("z");
})

// test(' returns T for "cHHabangggTttTTT"', () => {
//     expect(mostRecurringCharB("cHHabangggTttTTT")).toEqual("T");
// })

test(' returns T for "TtttTTT"', () => {
    expect(mostRecurringCharB("TtttTTT")).toEqual("T");
})