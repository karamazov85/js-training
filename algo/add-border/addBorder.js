// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// Example

// picture = ["abc",
//            "ded"]

//the output should be

// addBorder(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]



function addBorder(picture) {
  const asteriskToStartAndEnd = picture.map((word) => {
    let wordArr = word.split('');
    wordArr.splice(0, 0, '*');
    wordArr.push('*');
    const withBorder = wordArr.join('');
    return withBorder;
  });

  const newWordLength = asteriskToStartAndEnd[0].length;
  const border = new Array(newWordLength).fill('*').join('');

  asteriskToStartAndEnd.push(border);
  asteriskToStartAndEnd.unshift(border);

  return asteriskToStartAndEnd;
}