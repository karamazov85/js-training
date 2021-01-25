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