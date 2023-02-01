class Protein {
  constructor() {
    this.w = 58.8;
    this.h = 104;
    this.x = Math.random() * (canvas.width - this.w)
    this.y = Math.random() * (canvas.height - this.h)
    this.speed = 2;
    this.image = new Image();
    this.image.src = "./images/protein.png";
    this.collected = false;
    
  }
  reset =() => {
    this.w = 58.8;
    this.h = 104;
    this.x = Math.random() * (canvas.width - this.w)
    this.y = Math.random() * (canvas.height - this.h)
    this.speed = 2;
    this.image = new Image();
    this.image.src = "./images/protein.png";
    this.collected = false;
  }
  drawProtein = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };

}
