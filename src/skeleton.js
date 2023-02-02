class Skeleton {
  constructor() {
    this.h = 97;
    this.w = 66;
    this.x = canvas.width + 100;
    this.y = Math.random() * (canvas.height - this.h);
    this.speed = 3;
    this.image = new Image();
    this.image.src = "./images/skeleton-animation_03.png";
  }
  drawImage = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };
  charactersMove = () => {
    this.x -= this.speed;
  };
}
