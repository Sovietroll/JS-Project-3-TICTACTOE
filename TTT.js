let chooseX = true;

      let buttonX = document.querySelector(".js-x-button");
      buttonX.addEventListener("click", buttonEX);

      let buttonO = document.querySelector(".js-o-button");
      buttonO.addEventListener("click", buttonOW);

      let youThePlayer = document.querySelector(".js-you-the-player");
      let startUpContainerTwo = document.querySelector(
        ".js-startup-container-two"
      );

      const startUpContainerThree = document.querySelector('.js-startup-container-three');

      const vsPlayerButton = document.querySelector('.js-startup-container-three-player-button');
      vsPlayerButton.addEventListener('click', preVsPlayer);

      const vsCpuButton = document.querySelector('.js-startup-container-three-cpu-button');
      vsCpuButton.addEventListener('click', preVsCpu);

      let turnsText = document.querySelector(".js-turns"); //TURNS
      const startUp = document.querySelector(".js-startup-container"); //STARTUP SCREEN
      const gridDisplay = document.querySelector(".js-board");
      const buttonOne = document.querySelector(".js-button-playerOne");
      const containerScore = document.querySelector(".container-score");
      const buttonBottom = document.querySelector(".buttonScore");


      function buttonEX() {
        chooseX = true;
        startUpContainerTwo.style.display = "none";
        playerChooseOX();
        console.log("Player choose X");
        preGameAfterClick2 ();
      }

      function buttonOW() {
        chooseX = false;
        startUpContainerTwo.style.display = "none";
        playerChooseOX();
        console.log("Player choose O");
        preGameAfterClick2 ();
      }

      //STARTUP SCREEN
      buttonOne.addEventListener("click", () => {
        preGame();
        console.log("player click Start button");
      });

      startUpContainerTwo.style.display = "none";
      containerScore.style.display = "none";
      buttonBottom.style.display = "none";
      turnsText.style.display = "none";
      
      function preGame() {
        startUp.style.display = "none"; //STARTUP SCREEN
        startUpContainerThree.style.display = "block"
        startUpContainerTwo.style.display = "none"; //from block
        containerScore.style.display = "none";
        buttonBottom.style.display = "none";
        turnsText.style.display = "none";
        gridDisplay.style.visibility = "hidden";
      }

      function clickVsPlayer() {
        startUp.style.display = "none";
        startUpContainerThree.style.display = "none"
        startUpContainerTwo.style.display = "block"; //from none
        containerScore.style.display = "none";
        buttonBottom.style.display = "none";
        turnsText.style.display = "none";
        gridDisplay.style.visibility = "hidden";
      }

      let vsTogglePlayer;

      function preGameAfterClick (){
        startUp.style.display = "none";
        startUpContainerTwo.style.display = "block";
        containerScore.style.display = "none";
        buttonBottom.style.display = "none";
        turnsText.style.display = "none";
        gridDisplay.style.visibility = "hidden";
        if(vsTogglePlayer){
          vsPlayerButton.classList.add("css-startup-container-three-player-button-afterClick");
          vsCpuButton.classList.remove("css-startup-container-three-cpu-button-afterClick");
        } else {
          vsCpuButton.classList.add("css-startup-container-three-cpu-button-afterClick");
          vsPlayerButton.classList.remove("css-startup-container-three-player-button-afterClick");
        }
      }

      function preVsPlayer(){
        vsTogglePlayer = true;
        preGameAfterClick();
        console.log(`vsTogglePlayer ${vsTogglePlayer}`);
      }

      function preVsCpu(){
        vsTogglePlayer = false;
        preGameAfterClick();
        console.log(`vsTogglePlayer ${vsTogglePlayer}`);

      }

      function preGameAfterClick2(){
        startUp.style.display = "none";
        startUpContainerThree.style.display = "none"
        startUpContainerTwo.style.display = "none";
        containerScore.style.display = "block";
        buttonBottom.style.display = "block";
        turnsText.style.display = "block";
        gridDisplay.style.visibility = "visible";
      }

      let boardData = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];

      let playerOne = 1;

      cellElements = document.querySelectorAll(".cell");

      cellElements.forEach((cell, index) => {
        cell.addEventListener("click", () => {
          placeMarkers(index);
        });
      });



      let permanentTurns;
      let swingTurnsX;
      let swingTurnsO;

      function playerChooseOX(){
        if (chooseX === true) {
          swingTurnsX = true;
          swingTurnsO = false;
          permanentTurns = true;
        } else{
          swingTurnsX = false;
          swingTurnsO = true;
          permanentTurns = false;
        }
      }
      function placeMarkers(index) {
        let col = index % 3;
        let row = (index - col) / 3;

        if (vsTogglePlayer === true && boardData[row][col] === 0) {
          boardData[row][col] = playerOne;
          playerOne = -playerOne; //Switch between Plyr1 n Plyr 2
          //Using unary negation operator (playerOne becomes negative)
          //equivalent to multiplying 'playerOne' by -1
          console.log('vs player');
          drawMarker();
          checkResult();
          console.log(`permanentTurns ${permanentTurns}`)

          if (swingTurnsX === true && permanentTurns === true){
            turnsText.innerHTML = (`Player 2 <br> Next turn O`);
            swingTurnsX = false;
            console.log('1');

          } else if (swingTurnsX === false && permanentTurns === true){
            turnsText.innerHTML = (`Player 1 <br> Next turn X`);
            swingTurnsX = true;
            console.log('2');
            
          } if (swingTurnsO === true && permanentTurns === false){
            turnsText.innerHTML = (`Player 2 <br> Next turn X`);
            swingTurnsO = false; 
            console.log('3');

          } else if (swingTurnsO === false && permanentTurns === false){
            turnsText.innerHTML = (`Player 1 <br> Next turn O`);
            swingTurnsO = true; 
            console.log('4');
          }
          
        } 

          else {
           console.log("cell is full! 2");
          }
      }
      
      //vs player running this wrongly
      function placeMarkers2(index) {
        let col = index % 3;
        let row = (index - col) / 3;

        if (vsTogglePlayer === false && boardData[row][col] === 0) {
          boardData[row][col] = playerOne;
          cellTotal();
          cpuMove();
          drawMarker();
          checkResult();

        } else {
          console.log("cell is full! 3");
          cellTotal();
        }
      }

      function cpuMove() {
        if(lastCell){
          return;
        }

        const randomRow = Math.floor(Math.random() * 3); //round up to 0,1,2 NOTED THIS new info
        const randomCol = Math.floor(Math.random() * 3);

        if (boardData[randomCol][randomRow] === 0){
          boardData[randomCol][randomRow] = -1;
        } 

        else if (boardData[randomCol][randomRow] === 1 || boardData[randomCol][randomRow] === -1
        ){
          cpuMove();
          return;
        }
        }

        let cellCount = 0;
        let lastCell = false;


        function cellTotal(){
          cellCount = 0;

          for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++) {
              if (boardData[i][j] === 0){
                cellCount++;
                lastCell = false;
              } else if (cellCount === 1 || cellCount === 0){
                lastCell = true;
              }
            }
          }
        }

        //cell count 16 is the last cell
        
      let playerPlaced = false;
      let nextTurns = '';
      let nextTurnsPlayer = '';

      function drawMarker() {
        //REMOVE ALL ICON X's and O's
        cellElements.forEach((cell, index) => {
          let col = index % 3;
          let row = Math.floor(index / 3);

         if (boardData[row][col] === 1 && chooseX) {
            cell.classList.add("cross");
          } 
          
          else if (boardData[row][col] === -1 && chooseX) {
            cell.classList.add("circle");
          }  
            else if (boardData[row][col] === 1 && !chooseX) {
            cell.classList.add("circle");

          } else if (boardData[row][col] === -1 && !chooseX) {
            cell.classList.add("cross");
            
          } else if (boardData[row][col] === 0) {
            cell.classList.remove("cross"); //RESET FEATURE
            cell.classList.remove("circle");
          }
        });

      }

      resetButton = document.querySelector(".js-reset-game");
      resetButton.addEventListener("click", () => {
        resetGrid();
      });

      function resetGrid() {
        //make two reset button, reset score and reset game
        for (let row = 0; row < 3; row++) {
          for (let col = 0; col < 3; col++) {
            boardData[row][col] = 0;
          }
        }
        drawMarker();
      }

      resetScoreButton = document.querySelector(".js-reset-score");
      resetScoreButton.addEventListener("click", () => {
        resetScore();
      });

      function resetScore() {
        //RESET SCORE TO ZERO
        playerWins = 0;
        playerTwoWins = 0;
        playerTie = 0;
        winScore.innerHTML = `Player 1 Wins = ${playerWins} 
        <br>Player 2 Wins = ${playerTwoWins}
        <br> Tie = ${playerTie}`;
        resetGrid();
      }

      let playerWins = 0;
      let playerTwoWins = 0;
      let playerTie = 0;
      let winScore = document.querySelector(".js-wins");

      function gameTie(){
        setTimeout(function () {
          alert(`TIE`);
          resetGrid();
        },600)
        tieGame++;
      };

      function playerOneResult() {
        setTimeout(function () {
          resetGrid();
          alert("Player 1 Wins");
        }, 100);
      }

      function playerTwoResult() {
        setTimeout(function () {
          resetGrid();
          alert("Player 2 Wins");
        }, 100);
      }

      function checkResult() {
        for (let i = 0; i < 3; i++) {
          let rowSum = boardData[i][0] + boardData[i][1] + boardData[i][2];
          let colSum = boardData[0][i] + boardData[1][i] + boardData[2][i];

          let diagonalSumOne =
            boardData[0][0] + boardData[1][1] + boardData[2][2];

          let diagonalSumTwo =
            boardData[2][0] + boardData[1][1] + boardData[0][2];

          if (rowSum === 3 || colSum === 3) {
              playerWins++;
              playerOneResult()
              break;
       
          } else if (rowSum === -3 || colSum === -3) {
              playerTwoWins++;
              playerTwoResult();
              break;
          }  


            else if (diagonalSumOne === 3 || diagonalSumTwo === 3) {
              playerWins++;
              playerOneResult();
              break;
          } 
          
            else if (diagonalSumOne === -3 || diagonalSumTwo === -3) {
              playerTwoWins++;
              playerTwoResult();
              break;
          }
        }

        //TIE GAME HERE
        let isTie = true;
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++)
            if (boardData[i][j] === 1 || boardData[i][j] === -1 || boardData[i][j] === 0) {
              isTie = false; //someone winning
              break;
            }
            };
        if (isTie || lastCell) {
         gameTie();
         console.log('runs TIE');
        }

        winScore.innerHTML = `Player 1 Wins = ${playerWins} 
        <br> Player 2 Wins = ${playerTwoWins}
        <br> Tie = ${playerTie}`;
      }