class Kevin {
  constructor() {
    this.x = canvas.width + 200
    this.y = Math.random() * canvas.height
    this.h = 108;
    this.w = 70.8;
    this.speed = 4;
    this.image = new Image();
    this.image.src = "./images/kevin-hart.png";
    this.isFlying = false;
    this.ySpeed = 9
  }
  drawKevin = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };
  charactersMove = () => {
    this.x -= this.speed;
  };
  update =() => {
    if (!this.isFlying){
      if (Math.random() > 0.9) {
        this.isFlying = true;
        this.y = Math.random() * (canvas.height - 100) 
      }
    }
  }
}
