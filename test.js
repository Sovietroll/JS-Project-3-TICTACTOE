let gameActive = true;  // Track whether the game is still active

function cpuMove() {
  if (!gameActive) {
    // If the game is already over, return without making a move
    return;
  }

  const randomRow = Math.floor(Math.random() * 3);
  const randomCol = Math.floor(Math.random() * 3);

  if (boardData[randomCol][randomRow] === 0) {
    // If the cell is empty, set the value for the computer player's move (-1)
    boardData[randomCol][randomRow] = -1;

    // Check the result after each move
    checkResult();

    // Check if the game is tied (all cells are occupied)
    if (isGameTied()) {
      gameTie();
      gameActive = false;  // Set gameActive to false since the game is over
    }
  } else {
    // If the cell is not empty, recursively call cpuMove to choose another cell
    cpuMove();
  }
}

function isGameTied() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (boardData[row][col] === 0) {
        // If any cell is empty, the game is not tied
        return false;
      }
    }
  }
  // All cells are occupied, indicating a tie
  return true;
}
