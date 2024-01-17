/*
0 --> 1/9
*/

function computerMove () {
    const randomMove = Math.random(randomMove * 3); //3x3 board

    if(randomMove >= 0 && randomMove <= 1/9) {
        for(let j=0; j<3; j++){
            boardData[i][j] = -1
        }
    }

    else if (randomMove >= 1/9 && randomMove <= 2/9) {
        for(let j=0; j<3; j++){
            boardData[i][j] = -1
        }
    }
}