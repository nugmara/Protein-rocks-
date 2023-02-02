class Kevin {
  constructor() {
    this.h = 108;
    this.w = 70.8;
    this.x = canvas.width + 100
    this.y = Math.random() * (canvas.height - this.h)
    this.speed = 3;
    this.image = new Image();
    this.image.src = "./images/kevin-hart.png";
    this.isFlying = false;
  }
  drawKevin = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };
  charactersMove = () => {
    this.x -= this.speed;
  };
 
 
}
