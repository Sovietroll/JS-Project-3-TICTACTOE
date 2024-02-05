let gameActive = true;

function cpuMove() {
    if (!gameActive) {
        return;
    }

    const randomRow = Math.floor(Math.random() * 3);
    const randomCol = Math.floor(Math.random() * 3);

    if (boardData[randomCol][randomRow] === 0) {
        boardData[randomCol][randomRow] = -1;
        checkCellLeftOver();
    } else if (boardData[randomCol][randomRow] === 1 || boardData[randomCol][randomRow] === -1) {
        return; // Stop execution if the cell is not empty
    }
}

let gameRunning = true;

function checkCellLeftOver() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (boardData[i][j] !== 0) {
                gameRunning = true;
                return;
            } else {
                gameRunning = false;
                stopCpuMove(); // Call a function to stop cpuMove
            }
        }
    }
}

function stopCpuMove() {
    gameActive = false; // Set the flag to false to stop cpuMove
}
