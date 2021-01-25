// write a function that, given 2 strings, tell us if they ae anagrams. 
// anagram = 2 words that are made of exactly the same letters, with each letter used the same amount of time.

const isAnagram = (stringA, stringB) => {
    const sanitizeString = (string) => {
        return string
            .toLowerCase()
            .replace(/[^a-z\d]/g, "") // is not a letter or is a digit / globally
            .split("")
            .sort()
            .join("");   
    }

    const stringA_sanitized = sanitizeString(stringA);
    const stringB_sanitized = sanitizeString(stringB);

    if(stringA_sanitized.length !== stringB_sanitized.length) {
        return false
    }

    return stringA_sanitized == stringB_sanitized ? true : false // == 
}

module.exports = isAnagram;

// using Charater mapping

const isAnagramB = (stringA, stringB) => {
    
    if(stringA.length !== stringB.length) {
        return false   
    } 
    
    const createCharMap = (string) => {
        const sanitizedString = string.toLowerCase().replace(/[^a-z\d]/g, "").split("").sort()
        let charMap = {}
        for (let char of sanitizedString) {
            if(charMap.hasOwnProperty(char)) {
                charMap[char]++
            } else {
                charMap[char] = 1;
            }
        }
        return charMap;
    }

    const stringAMap = createCharMap(stringA);
    const stringBMap = createCharMap(stringB);

    for (let char in stringAMap) {
        if(stringAMap[char] !== stringBMap[char]) {
            return false
        }
        return true;
    }
}

module.exports = isAnagramB