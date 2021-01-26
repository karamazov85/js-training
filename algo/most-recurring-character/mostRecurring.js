// given a string, return the character that occurs most in the string

const mostRecurringChar = string => {
    let charMap = {}

    string.toLowerCase()
          .split("")
          .forEach(char => {
              if(charMap.hasOwnProperty(char)){
                  charMap[char]++
              } else {
                  charMap[char] = 1
              }
          })
    
    const charValues = Object.values(charMap);
    const charKeys = Object.keys(charMap);
    const maxOcurrence = Math.max(...charValues);
    const maxOcurrenceIndex = charValues.indexOf(maxOcurrence);
    const mostRecurring = charKeys[maxOcurrenceIndex];

    return mostRecurring
}

module.exports = mostRecurringChar;