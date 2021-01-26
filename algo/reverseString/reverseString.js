
// write a function that reverses a string. Casing has to remain the same in both strings i.e uppercase characters remain uppercase, so no .toLowerCase() this time.

// one line :)))
const reverseString = string => string.split("").reverse().join("");

module.exports = reverseString;


// with a good old .reduce()
const reverseStringB = string => { 
    return string.split("").reduce((acc, char) =>{
        return char + acc;
    },"")
}

module.exports = reverseStringB;

// for loop 
const reverseStringC = string => { 
    
    const reversedArr = []
    const splitStr = string.split(""); 

    for(let i = splitStr.length; i >= 0; i--) {
        reversedArr.push(splitStr[i])
    }

    return reversedArr.join("");

}

module.exports = reverseStringC;