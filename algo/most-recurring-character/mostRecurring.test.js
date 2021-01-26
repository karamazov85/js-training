const mostRecurringChar = require("./mostRecurring")

test(' reuturns z for "bazzzzfizzchunnnnng"', () => {
    expect(mostRecurringChar("bazzzzfizzchunnnnng")).toEqual("z");
})

test(' returns t for "cHHabangggTttTTT"', () => {
    expect(mostRecurringChar("cHHabangggTttTTT")).toEqual("t");
})
