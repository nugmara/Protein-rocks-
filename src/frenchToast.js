class Toast {
  constructor() {
    this.h = 87.5;
    this.w = 80.7;
    this.x = canvas.width + 100;
    this.y = Math.random() * (canvas.height - this.h);
    this.speed = 6;
    this.image = new Image();
    this.image.src = "./images/frenchToastCharacter.png";
  }
  drawToast = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };
  charactersMove = () => {
    this.x -= this.speed;
  };
}
