// Return the lowest index at which a value (second argument) i.e **num** should be inserted into an array (first argument) i.e **arr** once it has been sorted. The returned value should be a number.

const insertAtIndex = (array, num) => {
    if(isNaN(num)) {
        throw new TypeError("second argument must be a number")
    }

    const withNumAdded = [ ...array, num].sort();
    return withNumAdded.indexOf(num);
}

module.exports = insertAtIndex;