class Kevin {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = -50;
    this.h = 108;
    this.w = 70.8;
    this.speed = 4;
    this.image = new Image();
    this.image.src = "./images/kevin-hart.png";
    this.time = 0;
  }
  drawKevin = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };
  charactersMove = () => {
    this.y += this.speed;
  };
}
