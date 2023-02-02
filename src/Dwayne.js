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
    this.img.src = "./images/5ff4a4081bccdc0c963b67d5_shazam (1).png";
    this.gravity = 0.5;
  }

  // MÉTODOS

  drawDwayne = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };
  movimientoDerecha = () => {
    this.x += this.speedX;
  };
  movimientoIzquierda = () => {
    this.x -= this.speedX;
  };
  jumpPollito = () => {
    this.y -= this.speedY;
  };
  bajarPollito = () => {
    this.h = 42.175;
  };
  subirPollito = () => {
    this.h = 84.35;
  };
  movimientoAbajo = () => {
    this.y += this.speedY;
  };

  /*update = () => {
    this.y += this.speedY;
    if (this.y + this.h + this.speedY <= canvas.height)
      this.speedY += this.gravity;
    else {
      this.speedY = 0;
      this.y = canvas.height - this.h;
    }
  };*/
}
