document.addEventListener("DOMContentLoaded", () => {
  const gameBoard = document.getElementById("game-board");
  const gridSize = 15;
  const snakeSpeed = 200; // milliseconds

  let snake = [{ x: 0, y: 0 }];
  let food = generateFoodPosition();
  let direction = "right";

  function generateFoodPosition() {
    return {
      // x: ...
      // y: ...
    };
  }

  function updateGameBoard() {
    gameBoard.innerHTML = "";

    // Draw snake
    snake.forEach((part) => {
      // ...
    });

    // Draw food
    const foodElement = document.createElement("div");
    // Ajuster la classname, position, ajout à la game board...
  }

  function moveSnake() {
    const head = { ...snake[0] };

    // Bouger la tete d'une case en fonction de la direction

    // Vérifier la collision avec les murs
    // ...
    // Signaler Game Over en cas de collision avec les murs

    // Vérifier la collision avec la food
    // ...

    updateGameBoard();
  }

  function handleKeyPress(event) {
    switch (event.key) {
      // Changer de direction en fonction de la touche appuyée
    }
  }

  document.addEventListener("keydown", handleKeyPress);

  setInterval(moveSnake, snakeSpeed);

  updateGameBoard(); // Initial rendering
});
