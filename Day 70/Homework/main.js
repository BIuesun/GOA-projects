// 1. ) შექმენით ფუნქცია რომელიც აბრუნებს 2დ მასივს (ზრდადი რიცხვების) სვეტების დს რიგების მიხედვით, მაგ: func(2,2) --> [ [1,2], [3,4] ]

function createSorted2DArray(rows, cols) {
    const numbers = [];
    for (let i = 0; i < rows * cols; i++) {
        numbers.push(i + 1);
    }

    // gardaqmna 1d array 2d arreid
    const array2D = [];
    for (let i = 0; i < rows; i++) {
        const start = i * cols;
        const end = start + cols;
        array2D.push(numbers.slice(start, end));
    }

    return array2D;
}


// 2. შექმენით ფუნქცია რომელსაც გადაეცემა nxn მატრიცა და დაპრინტავს მის 1) სვეტებს, 2) რიგებს, 3) დიაგონალებს
function MatrixDetails(matrix) {
    const n = matrix.length;

    // row
    console.log("Rows:");
    for (let i = 0; i < n; i++) {
        console.log(matrix[i]);
    }

    // columns
    console.log("Columns:");
    for (let col = 0; col < n; col++) {
        const column = [];
        for (let row = 0; row < n; row++) {
            column.push(matrix[row][col]);
        }
        console.log(column);
    }

    // diagonals
    console.log("Diagonals:");

    // pirveli diagonali (magla marcxnidan  dabla marjvniv)
    const mainDiagonal = [];
    for (let i = 0; i < n; i++) {
        mainDiagonal.push(matrix[i][i]);
    }
    console.log("Main Diagonal:", mainDiagonal);

    // meore diagonali (magla marjvnidan dabla marcxnamde)
    const secondaryDiagonal = [];
    for (let i = 0; i < n; i++) {
        secondaryDiagonal.push(matrix[i][n - i - 1]);
    }
    console.log("Secondary Diagonal:", secondaryDiagonal);
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

printMatrixDetails(matrix);
