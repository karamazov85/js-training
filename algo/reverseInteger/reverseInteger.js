// given an integer, reverse it - without changing the sign of the integer (a negative remains negative)

const reverseInt = (num) => {
    if(!num) {
        return;
    }
    const stringified = num.toString(); 
    const reversed = [ ...stringified ].reduce((acc, curr) => {
        return curr + acc
    }, "")
    const parsed = parseInt(reversed)
    return parsed * Math.sign(num);
}

module.exports = reverseInt;