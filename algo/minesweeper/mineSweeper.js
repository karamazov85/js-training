// In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

// For
// matrix = [[true, false, false],
//           [false, true, false],
//           [false, false, false]]

// the output should be:

// minesweeper(matrix) = [[1, 2, 1],
//                        [2, 1, 1],
//                        [1, 1, 1]]

function minesweeper(matrix) {
    let output = []
    for (let i = 0; i < matrix.length; i++) {
        let row = []
        for(j = 0; j < matrix[i].length; j++) {
            let value = 0;
            if (matrix?.[i-1]?.[j-1]) {
                value++
            }   
            if (matrix?.[i-1]?.[j]) {
                value++
            }
            if (matrix?.[i-1]?.[j+1]) {
                value++
            }
            if (matrix?.[i]?.[j-1]) {
                value++
            }   
            if (matrix?.[i]?.[j+1]) {
                value++
            }
            if (matrix?.[i+1]?.[j-1]) {
                value++
            }   
            if (matrix?.[i+1]?.[j]) {
                value++
            }
            if (matrix?.[i+1]?.[j+1]) {
                value++
            }
            row.push(value);
        }
      output.push(row)  
    }
    return output
}
