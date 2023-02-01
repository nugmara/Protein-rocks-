class MoneyBonus {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = -50;
    this.h = 89.9;
    this.w = 64.7;
    this.speed = 2;
    this.image = new Image();
    this.image.src = "./images/money.png";
    this.time = 0;
  }
  reset = () => {
    this.x = Math.random() * canvas.width;
    this.y = -50;
    this.h = 89.9;
    this.w = 64.7;
    this.speed = 2;
    this.image = new Image();
    this.image.src = "./images/money.png";
    this.time = 0; 
  }
  drawImageCharacters = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };
  charactersMove = () => {
    this.y += this.speed;
  };
}
