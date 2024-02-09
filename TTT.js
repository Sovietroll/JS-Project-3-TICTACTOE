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
      vsPlayerButton.addEventListener('click', preGameAfterClick);

      const vsCpuButton = document.querySelector('.js-startup-container-three-cpu-button');
      vsCpuButton.addEventListener('click', preGameAfterClick)

      let turnsText = document.querySelector(".js-turns"); //TURNS
      const startUp = document.querySelector(".js-startup-container");
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


      buttonOne.addEventListener("click", () => {
        preGame();
        console.log("player click Start button");
      });
      
      startUpContainerTwo.style.display = "none";
      containerScore.style.display = "none";
      buttonBottom.style.display = "none";
      turnsText.style.display = "none";
      
      function preGame() {
        startUp.style.display = "none";
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

      let vsTogglePlayer = true;

      function toggleVsButton(){
        vsTo
      }

      function preGameAfterClick (){
        startUp.style.display = "none";
        startUpContainerTwo.style.display = "block";
        containerScore.style.display = "none";
        buttonBottom.style.display = "none";
        turnsText.style.display = "none";
        gridDisplay.style.visibility = "hidden";
        if ()
        vsPlayerButton.classList.add("css-startup-container-three-player-button-afterClick");
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

      /*   startUp.style.display = "none";
        startUpContainerTwo.style.display = "none";
        containerScore.style.display = "block";
        buttonBottom.style.display = "block";
        turnsText.style.display = "block";
        gridDisplay.style.visibility = "visible";*/
      
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



      let turns; //this outside function, it keeps looping to true
      
      function playerChooseOX(){
        if (chooseX) {
          turns = true;
        } else{
          turns = false;
        }
      }

      
      function placeMarkers(index) {
        let col = index % 3;
        let row = (index - col) / 3;


        if (boardData[row][col] === 0) {
          boardData[row][col] = playerOne;
          playerOne = -playerOne; //Switch between Plyr1 n Plyr 2
          //Using unary negation operator (playerOne becomes negative)
          //equivalent to multiplying 'playerOne' by -1
          
          drawMarker();
          checkResult();
          console.log(turns);

          if (turns === true){
            turnsText.innerHTML = (`Next turn O`);
            turns = false;

            
          } else if (turns === false) {
            turnsText.innerHTML = (`Next turn X`);
            turns = true;
          }} 


          else {
           console.log("cell is full!");
          }

      }
      

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
            if (boardData[i][j] !== 1 && boardData[i][j] !== -1) {
              isTie = false;
              break;
            }
        }
        if (isTie) {
          //isTie means if isTie is still true after the cell all filled
          setTimeout(function () {
            alert("Tie");
          }, 100);
          playerTie++;
          resetGrid();
        }

        winScore.innerHTML = `Player 1 Wins = ${playerWins} 
        <br> Player 2 Wins = ${playerTwoWins}
        <br> Tie = ${playerTie}`;
      }