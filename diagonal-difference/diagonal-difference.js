function diagonalDifference(arr) {
    const dim = arr[0].length;
    let firstDiag = 0;
    let secondDiag = 0;
    let sum = 0;

    for(let i=0, j=(dim -1); i < dim, j > -1; i++, j--){
      firstDiag += arr[i][i];
      secondDiag += arr[i][j];
    }
    return Math.abs(firstDiag - secondDiag);
}
