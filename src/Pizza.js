class Pizza {
  constructor() {
    this.h = 102.375;
    this.w = 83;
    this.x = Math.random() * (canvas.width - this.w);
    this.y = -50;
    this.speed = 5;
    this.image = new Image();
    this.image.src = "./images/pizzaCharacter.png";
  }
  drawPizza = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };
  charactersMove = () => {
    this.y += this.speed;
  };
}
