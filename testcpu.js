function cpuMove () {
  const randomMove = Math.random();

  for (let i = 0; i < 3; i++) {
    for (let j =0; j < 3; j++) {
      if (randomMove >= 0 && randomMove <= 1/9) {
          boardData = [
          [-1, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ];
      } else if (randomMove >= 1/9 && randomMove <= 2/9) {
        boardData = [
          [0, -1, 0],
          [0, 0, 0],
          [0, 0, 0],
        ];
      } else {
        boardData = [
          [0, 0, -1],
          [0, 0, 0],
          [0, 0, 0],
        ]
      }
    }
  }
}

