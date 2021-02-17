function arrayMaximalAdjacentDifference(inputArray) {
    let maxDiff = 0
    
   for (let i = 1; i < inputArray.length; i++) {
       if(Math.abs(inputArray[i] - inputArray[i - 1]) > maxDiff) {
            maxDiff = Math.abs(inputArray[i] - inputArray[i - 1])
       }
   }
   return maxDiff;
}
