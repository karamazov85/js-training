const pigLatin = require('./pig-latin');

test(' returns "acaronmay" for "macaron"', () => {
    expect(pigLatin("macaron")).toEqual("acaronmay");
})

test(' returns "iway ovelay acaronsay ofway nyaay indkay" for "I love macarons of any kind"', () => {
    expect(pigLatin("I love macarons of any kind")).toEqual("iway ovelay acaronsmay ofway anyway indkay");
})

const pigLatinB = require('./pig-latin');

test(' returns "acaronmay" for "macaron"', () => {
    expect(pigLatinB("macaron")).toEqual("acaronmay");
})

test(' returns "iway ovelay acaronsay ofway nyaay indkay" for "I love macarons of any kind"', () => {
    expect(pigLatinB("I love macarons of any kind")).toEqual("iway ovelay acaronsmay ofway anyway indkay");
})