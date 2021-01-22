const encode = (string) => {
 
 const temp = []
 for(let char of string) {
   let subArr = temp[temp.length -1];
   if((!subArr) || !subArr.includes(char)) {
     temp.push([char])
   } else {
     subArr.push(char)
   }
 } 
 const decoded = temp.map(subArr => {
                         if(subArr.length > 1){
                           return [subArr.length, subArr[0]] 
                         } else {
                           return [subArr[0]]
                         }})
                     .reduce((acc, curr) => [...acc, ...curr])
                     .join('')
return decoded  
} 

encode("zzz ZZ  zZ")

const decode = (encodedString) => {
  const rleOutput = encodedString.split("").reduce(
    (rle, char, index, array) => {
      if (char && !isNaN(char)) {
        // test if char is a number
        const numString = `${rle.prevNumber}${char}`;

        return {
          // new rle or accumulator
          ...rle,
          prevNumber: numString,
        };
      }

      // Here we either have an aphabetic char or empty string ""
      // found a character
      const numberOfCharacters = parseInt(rle.prevNumber);
      console.log("NUM OF CHARACTERS ", numberOfCharacters)
      const rleSegment = Array(numberOfCharacters || 1)
        .fill(char)
        .join("");
      console.log("CHAR: ", char)
      console.log("RLESEGMENT ", rleSegment)
      
      return {
        // new rle or accumulator
        prevNumber: "",
        finishedRle: rle.finishedRle + rleSegment,
      };
    },
    {
      prevNumber: "",
      finishedRle: "",
    }
  );
  return rleOutput.finishedRle;
};

decode('3z 2Z2 zZ')