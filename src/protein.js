class Protein {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.w = 58.8;
    this.h = 104;
    this.speed = 2;
    this.image = new Image();
    this.image.src = "./images/protein.png";
  }
  drawProtein = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };
}
