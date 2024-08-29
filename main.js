let playerX = document.querySelector(".player-x");
let playerO = document.querySelector(".player-o");
let draw = document.querySelector(".draw");
let cubes = document.querySelectorAll(".cube");
let playAgainBtn = document.querySelector(".play-again");
let count = 0;
let gameResult = "";
//Cubes clic event listener
cubes.forEach((cube) => {
  cube.addEventListener("click", (e) => {
    // check box click (Content)
    if (e.target.textContent === "") {
      count += 1; //draw value control
      //check player turn(X or O)
      if (playerX.classList.contains("turn")) {
        // player X turn
        e.target.textContent = "X";
        checkWinner("X");
        //continue game
        if (!playerX.classList.contains("win")) {
          playerX.classList.remove("turn");
          playerO.classList.add("turn");
        }
      } else {
        // player O turn
        e.target.textContent = "O";
        checkWinner("O");
        //continue game
        if (!playerO.classList.contains("win")) {
          playerO.classList.remove("turn");
          playerX.classList.add("turn");
          e.display = "block";
        }
      }
    }
  });
});

//check winner function
function checkWinner(sign) {
  //We Have 8 winning conditions
  //Cube 0 (3 wining conditions)
  if (cubes[0].textContent === sign) {
    if (
      (cubes[1].textContent === sign && cubes[2].textContent === sign) ||
      (cubes[3].textContent === sign && cubes[6].textContent === sign) ||
      (cubes[4].textContent === sign && cubes[8].textContent === sign)
    ) {
      declareWinner(`player${sign}`);
      return;
    }
  }
  //Cube 1 conditions (1 winning condition)
  if (
    cubes[1].textContent === sign &&
    cubes[4].textContent === sign &&
    cubes[7].textContent === sign
  ) {
    declareWinner(`player${sign}`);

    return;
  }

  //Cube 2 conditions (2 winning condition)
  if (cubes[2].textContent === sign) {
    if (
      (cubes[5].textContent === sign && cubes[8].textContent === sign) ||
      (cubes[4].textContent === sign && cubes[6].textContent === sign)
    ) {
      declareWinner(`player${sign}`);
      return;
    }
  }
  //Cube 3 conditions (1 winning condition)
  if (
    cubes[3].textContent === sign &&
    cubes[4].textContent === sign &&
    cubes[5].textContent === sign
  ) {
    declareWinner(`player${sign}`);
    return;
  }
  //Cube 6 conditions (1 winning condition)
  if (
    cubes[6].textContent === sign &&
    cubes[7].textContent === sign &&
    cubes[8].textContent === sign
  ) {
    declareWinner(`player${sign}`);
    return;
  }

  //Draw Case
  if (count === 9) {
    declareWinner("draw");
  }
  return;
}

//declare winner function
function declareWinner(player) {
  if (player === "playerX") {
    playerX.classList.add("win");
    playerO.style.display = "none";
    playerX.textContent = "The Winner is Player X";
    gameResult = "XX";
  } else if (player === "draw") {
    playerO.style.display = "none";
    playerX.style.display = "none";
    playAgainBtn.style.display = "block";
    draw.classList.add("active");
    gameResult = "draw";
  } else {
    playerO.classList.add("win");
    playerX.style.display = "none";
    playerO.textContent = "The Winner is Player O";
    gameResult = "O";
  }
  //prevent click event for cubes
  playAgainBtn.style.display = "block";
  cubes.forEach((cube) => {
    cube.style.pointerEvents = "none";
  });
}
//play again button
playAgainBtn.addEventListener("click", () => {
  playerX.textContent = `Player X turn`;
  playerO.textContent = `Player O turn`;
  draw.classList.remove("active");
  playerX.classList.remove("win");
  playerO.classList.remove("win");
  if (gameResult === "X") {
    playerX.style.display = "block";
    playerX.classList.add("turn");
    playerO.classList.remove("turn");
    playerO.style.display = "none";
  } else {
    playerO.style.display = "block";
    playerO.classList.add("turn");
    playerX.classList.remove("turn");
    playerX.style.display = "none";
  }
  cubes.forEach((cube) => {
    count = 0;
    cube.style.pointerEvents = "auto";
    cube.textContent = "";
  });
  playAgainBtn.style.display = "none";
  playAgainBtn.classList.remove("active");
  gameResult = "";
});

// let playerX = document.querySelector(".player-x");
// let playerO = document.querySelector(".player-o");
// let cubes = document.querySelectorAll(".cube");
// let playAgainBtn = document.querySelector(".play-again");
// let count = 0;
// let gameActive = true; // Added to prevent moves after game ends

// cubes.forEach((cube) => {
//   cube.addEventListener("click", (e) => {
//     if (!gameActive) return; // Prevent moves after game ends

//     if (e.target.textContent === "") {
//       count += 1;

//       if (playerX.classList.contains("turn")) {
//         e.target.textContent = "X";
//         checkWinner("X");

//         if (playerX.classList.contains("win")) {
//           playAgainBtn.style.display = "block";
//           gameActive = false; // Stop the game
//         } else {
//           playerX.classList.remove("turn");
//           playerO.classList.add("turn");
//         }
//       } else {
//         e.target.textContent = "O";
//         checkWinner("O");

//         if (playerO.classList.contains("win")) {
//           playAgainBtn.style.display = "block";
//           gameActive = false; // Stop the game
//         } else {
//           playerO.classList.remove("turn");
//           playerX.classList.add("turn");
//         }
//       }
//     }
//   });
// });

// function checkWinner(sign) {
//   const winningConditions = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];

//   let win = false;

//   for (let condition of winningConditions) {
//     const [a, b, c] = condition;
//     if (
//       cubes[a].textContent === sign &&
//       cubes[b].textContent === sign &&
//       cubes[c].textContent === sign
//     ) {
//       win = true;
//       break;
//     }
//   }

//   if (win) {
//     declareWinner(`player${sign}`);
//   } else if (count === 9) {
//     declareWinner("draw");
//   }
// }

// function declareWinner(player) {
//   if (player === "playerX") {
//     playerX.classList.add("win");
//     playerO.style.display = "none";
//     playerX.textContent = "The Winner is Player X";
//   } else if (player === "draw") {
//     playerO.style.display = "none";
//     playerX.textContent = "Game Draw";
//     playAgainBtn.style.display = "block";
//   } else {
//     playerO.classList.add("win");
//     playerX.style.display = "none";
//     playerO.textContent = "The Winner is Player O";
//   }

//   cubes.forEach((cube) => {
//     cube.style.pointerEvents = "none";
//   });
// }

// playAgainBtn.addEventListener("click", () => {
//   location.reload();
// });
