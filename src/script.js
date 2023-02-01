const canvas = document.querySelector("#canvas-screen");
const kickOffBtnDOM = document.querySelector("#start-game");
const portadaDOM = document.querySelector("#portada-de-inicio");
const gameOverScreenDOM = document.querySelector("#game-over");
const restartBtnDOM = document.querySelector("#restart-game");
const ctx = canvas.getContext("2d");
let game;
this.framesTotal = 4;
this.currentFrames = 0;

const startGame = () => {
  portadaDOM.style.display = "none";
  canvas.style.display = "block";
  game = new Game();
  setInterval(game.gameLoop, 1000 / 60);
};
const endGame = () => {
    restartBtnDOM.style.display = "none";
    portadaDOM.style.display = "block"
}
const moverDwayneDer = (event) => {
  if (event.code === "ArrowRight") game.dwayne.movimientoDerecha();
};
const moveDwayneIzq = (event) => {
  if (event.code === "ArrowLeft") game.dwayne.movimientoIzquierda();
};
const bajarPollito = (event) => {
  if (event.code === "ArrowDown") {
    game.dwayne.bajarPollito();
  }
};
const subePollito = (event) => {
  if (event.code === "Space") {
    game.dwayne.jumpPollito();
  }
};
const originalPollito = (event) => {
  if (event.code === "ArrowUp") {
    game.dwayne.subirPollito();
  }
};

// ADD EVENT LISTENERS

kickOffBtnDOM.addEventListener("click", startGame);
window.addEventListener("keydown", moverDwayneDer);
window.addEventListener("keydown", moveDwayneIzq);
window.addEventListener("keydown", subePollito);
window.addEventListener("keydown", bajarPollito);
window.addEventListener("keydown", originalPollito);
restartBtnDOM.addEventListener("click", endGame);
