class Fish {
    constructor() {
        
        this.image = new Image()
        this.image.src = "./images/obs_big_fish.png"
    }
    drawBigFish() {
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
    }
    bigFishMove() {
        this.x -= this.speed
    }
}