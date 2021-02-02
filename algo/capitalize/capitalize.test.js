const capitalize = require("./capitalize");

test('returns What Did I Tell You About That Axe, Eugene?', () => {
    expect(capitalize("what did I tell you about that axe, eugene?")).toEqual("What Did I Tell You About That Axe, Eugene?")        
})

