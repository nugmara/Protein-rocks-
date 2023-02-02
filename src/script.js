const canvas = document.querySelector("#canvas-screen");
const kickOffBtnDOM = document.querySelector("#start-game");
const portadaDOM = document.querySelector("#portada-de-inicio");
const gameOverScreenDOM = document.querySelector("#game-over");
const endBtnDOM = document.querySelector("#end-game");
const ctx = canvas.getContext("2d");
let game;

const startGame = () => {
  portadaDOM.style.display = "none";
  canvas.style.display = "block";
  game = new Game();
  game.gameLoop();
};
const endGame = () => {
  gameOverScreenDOM.style.display = "none";
  portadaDOM.style.display = "block";
};
const moveRight = (event) => {
  if (event.code === "ArrowRight") 
  game.dwayne.rightMovement();
};
const moveLeft = (event) => {
  if (event.code === "ArrowLeft") 
  game.dwayne.leftMovement();
};
const bend = (event) => {
  if (event.code === "KeyS") {
    game.dwayne.bendMovement();
  }
};
const moveUp = (event) => {
  if (event.code === "ArrowUp") {
    game.dwayne.upMovement();
  }
};
const standUp = (event) => {
  if (event.code === "Space") {
    game.dwayne.standUpMovement();
  }
};
const moveDown = (event) => {
  if (event.code === "ArrowDown") {
    game.dwayne.downMovement();
  }
};
// ADD EVENT LISTENERS
kickOffBtnDOM.addEventListener("click", startGame);
window.addEventListener("keydown", moveRight);
window.addEventListener("keydown", moveLeft);
window.addEventListener("keydown", moveUp);
window.addEventListener("keydown", bend);
window.addEventListener("keydown", standUp);
window.addEventListener("keydown", moveDown);
endBtnDOM.addEventListener("click", endGame);
