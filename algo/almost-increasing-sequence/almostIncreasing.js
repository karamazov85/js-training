// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

// For sequence = [1, 3, 2, 1], the output should be
// almostIncreasingSequence(sequence) = false.

// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be
//almostIncreasingSequence(sequence) = true.

function almostIncreasingSequence(sequence) {
  let invalidItemsCount = 0;
  
  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i-1]) {
      invalidItemsCount++;
      if (invalidItemsCount > 1) return false;
      if (sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) return false;
    }
  }
  return true;
}