// Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral! You can't let this ruin your reputation, so you want to apply the box blur algorithm to the photo to hide its content.
// The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way: Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 × 3 square that has its center at x, including x itself. All the pixels on the border of x are then removed.
// Return the blurred image as an integer, with the fractions rounded down.

// For
// image = [[1, 1, 1], 
//          [1, 7, 1], 
//          [1, 1, 1]]
// the output should be boxBlur(image) = [[1]].

// To get the value of the middle pixel in the input 3 × 3 square: (1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) = 15 / 9 = 1.66666 = 1. The border pixels are cropped from the final result.

// For
// image = [[7, 4, 0, 1], 
//          [5, 6, 2, 2], 
//          [6, 10, 7, 8], 
//          [1, 4, 2, 0]]
// the output should be

// boxBlur(image) = [[5, 4], 
//                   [4, 4]]


// function boxBlur(image) {
//   const boxBlur = [];
//   let numberOfRows = image.length - 2;

//   for (let i = 1; i < image.length - 1; i++) {
//     for (let j = 1; j < image[i].length - 1; j++) {
//       let pixelAverage = Math.floor(
//         (image[i][j - 1] +
//           image[i][j] +
//           image[i][j + 1] +
//           image[i - 1][j - 1] +
//           image[i - 1][j] +
//           image[i - 1][j + 1] +
//           image[i + 1][j - 1] +
//           image[i + 1][j] +
//           image[i + 1][j + 1]) /
//           9
//       );
//       boxBlur.push(pixelAverage);
//     }
//   }

//   let boxBlurByRows = [];

//   if (numberOfRows === 1) {
//     boxBlurByRows = [boxBlur];
//     return boxBlurByRows;
//   }

//   for (let i = 0; i < boxBlur.length; i += numberOfRows) {
//     let row = boxBlur.slice(i, i + numberOfRows);
//     boxBlurByRows.push(row);
//   }
//   return boxBlurByRows;
// }

// a bit more elegant solution: 

function boxBlur(image) {
    var blured = [];
    for (var i = 1; i < image.length - 1; i++){
        var row = [];
        for (var j = 1; j < image[i].length - 1; j++) {
            var average = image[i - 1][j - 1] + image[i - 1][j] + image[i - 1][j + 1];
            average+= image[i][j - 1] + image[i][j] + image[i][j + 1];
            average+= image[i + 1][j - 1] + image[i + 1][j] + image[i + 1][j + 1];
            row.push(Math.floor(average / 9));
        }
        blured.push(row);
    }
    return blured;
}

const image1 = [
  [7, 4, 0, 1],
  [5, 6, 2, 2],
  [6, 10, 7, 8],
  [1, 4, 2, 0],
];

boxBlur(image1);