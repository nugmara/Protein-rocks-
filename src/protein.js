class Protein {
  constructor() {
    this.w = 58.8;
    this.h = 104;
    this.x = Math.random() * (canvas.width - this.w);
    this.y = Math.random() * (canvas.height - this.h);
    this.speed = 2;
    this.image = new Image();
    this.image.src = "./images/proteinCharacter.png";
    this.collected = false;
    //this.proteinOnScreen = false;
  }
  drawProtein = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };
}
