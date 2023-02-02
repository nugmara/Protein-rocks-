class Dwayne {
  constructor() {
    this.x = 10;
    this.y = 100;
    this.h = 84.35;
    this.w = 56.25;
    this.jumpSpeed = 10;
    this.speedX = 15;
    this.speedY = 15;
    this.img = new Image();
    this.img.src = "./images/mainCharacter.png";
    this.gravity = 0.5;
  }
  // MÉTODOS
  drawDwayne = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };
  rightMovement = () => {
    this.x += this.speedX;
  };
  leftMovement = () => {
    this.x -= this.speedX;
  };
  downMovement = () => {
    this.y += this.speedY;
  };
  upMovement = () => {
    this.y -= this.speedY;
  };
  bendMovement = () => {
    this.h = 42.175;
  };
  standUpMovement = () => {
    this.h = 84.35;
  };
}
