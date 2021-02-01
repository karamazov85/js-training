// given two words, return the Hamming distance e.g. how many points of difference there are 

const hammingDist = (stringA, stringB) => {
    // in this case they have to be the same length 
    if(stringA.length !== stringB.length) {
        return false; 
    }

    let distance = 0;

    for(let i = 0; i < stringA.length; i++) {
        if(stringA[i] !== stringB[i]) {
            distance++
        }
    }

    return distance;
}

module.exports = hammingDist;