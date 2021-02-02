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


// probably more elegant with reduce
const mostRecurringCharB = string => {
    let charMap = {}

    string.split("") // it's case sensitive now
          .forEach(char => {
              if(charMap.hasOwnProperty(char)){
                  charMap[char]++
              } else {
                  charMap[char] = 1
              }
          })
    
    const mapEntries = Object.entries(charMap);

    const mostRecurring = mapEntries.reduce((mostRec, curr) => {
        return mostRec[1] > curr[1] ? mostRec : curr
    },[])

    return mostRecurring[0]

}

module.exports = mostRecurringCharB;