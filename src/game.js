class Game {
  constructor() {
    this.background = new Image();
    this.background.src = "./images/streesBG.jpg";
    this.dwayne = new Dwayne();
    this.kevin = new Kevin();
    this.protein = new Protein();
    this.proteinArr = [];
    this.time = 0;
    this.kevinArr = [];
    this.money = new MoneyBonus();
    this.score = 0;
    this.moneyArr = [];
    this.lives = 5;
    this.gameOn = true;
    this.health = 100;
    this.moreHealth = 20;
    this.noHealth = 5;
    this.mySound = new Audio("./proteinRocks!.mp3");
    this.mySound2 = new Audio("./moneySoundEffect.mp3");
    this.mySound3 = new Audio("./gameOverSound.mp3");
    this.myBGSound = new Audio("./miitomoSongBG.mp3");
  }

  drawBackground = () => {
    ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height);
  };
  aLotOfProteins = () => {
    let aLotOfThem = new Protein();
    this.proteinArr.push(aLotOfThem);
    setTimeout(() => {
      if (!aLotOfThem.collected) {
        this.health -= this.noHealth;
        if (this.health === 0) {
          this.gameOver();
          this.mySound3.play();
        }
        let index = this.proteinArr.indexOf(aLotOfThem);
        this.proteinArr.splice(index, 1);
      } else {
        this.health += this.moreHealth;
      }
    }, 5000);
  };
  aLotOfkevin = () => {
    let aLotOfkevin = new Kevin();
    this.kevinArr.push(aLotOfkevin);
  };
  aLotOfMoney = () => {
    let aLotOfMoney = new MoneyBonus();
    this.moneyArr.push(aLotOfMoney);
    if (!aLotOfMoney.collected) {
      this.health += this.moreHealth;
    }
  };
  drawScore = () => {
    ctx.font = "24px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(`Score: ${this.score}`, 10, 30);
  };
  drawScoreBad = () => {
    ctx.font = "24px serif";
    ctx.fillStyle = "black";
    ctx.fillText(`Don't run my man! ${this.lives}`, 10, 60);
  };
  drawHealth = () => {
    ctx.fillStyle = "green";
    if (this.health <= 60) {
      ctx.fillStyle = "orange";
    }
    if (this.health <= 40) {
      ctx.fillStyle = "red";
    }
    ctx.fillRect(520, 20, this.health, 20);
  };
  collisionproteinWithDwayne = () => {
    this.proteinArr.forEach((protein, index) => {
      if (
        this.dwayne.x < protein.x + protein.w &&
        this.dwayne.x + this.dwayne.w > protein.x &&
        this.dwayne.y < protein.y + protein.h &&
        this.dwayne.y + this.dwayne.h > protein.y
      ) {
        this.proteinArr.splice(index, 1);
        this.score += 10;
        this.mySound.play();
      }
    });
  };
  collisionkevinWithDwayne = () => {
    this.kevinArr.forEach((kevin, index) => {
      if (
        this.dwayne.x < kevin.x + kevin.w &&
        this.dwayne.x + this.dwayne.w > kevin.x &&
        this.dwayne.y < kevin.y + kevin.h &&
        this.dwayne.y + this.dwayne.h > kevin.y
      ) {
        this.kevinArr.splice(index, 1);
        this.score -= 5;
        this.lives -= 1;
        if (this.lives === 0) {
          this.gameOver();
          this.mySound3.play();
        }
      }
    });
  };
  collisionMoneyWithDwayne = () => {
    this.moneyArr.forEach((money, index) => {
      if (
        this.dwayne.x < money.x + money.w &&
        this.dwayne.x + this.dwayne.w > money.x &&
        this.dwayne.y < money.y + money.h &&
        this.dwayne.y + this.dwayne.h > money.y
      ) {
        this.moneyArr.splice(index, 1);
        this.score += 15;
        this.mySound2.play();
      }
    });
  };
  coliisionWithWallSide = () => {
    if (this.dwayne.x + this.dwayne.w > canvas.width) {
      this.dwayne.x = canvas.width - this.dwayne.w;
    }
    if (this.dwayne.x < 0) this.dwayne.x = 0;
  };
  collisionWithWallUpnDown = () => {
    if (this.dwayne.y + this.dwayne.h > canvas.height) {
      this.dwayne.y = canvas.height - this.dwayne.h;
    }
    if (this.dwayne.y < 0) {
      this.dwayne.y = 0;
    }
  };
  collisionMoneyWithGround = () => {
    if (this.money.y + this.money.h > canvas.height) {
      this.money.y = canvas.height - this.money.h;
    }
  };
  gameOver = () => {
    this.gameOn = false;
    canvas.style.display = "none";
    gameOverScreenDOM.style.display = "block";
  };
  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
  gameLoop = () => {
    this.clearCanvas();
    //this.myBGSound.play()
    // this.dwayne.update();
    this.time += 16;
    if (this.time % 1000 === 0) {
      this.aLotOfProteins();
    }
    this.kevinArr.forEach((kevin) => {
      kevin.charactersMove();
    });
    if (this.time % 300 === 0) {
      this.aLotOfkevin();
    }
    this.moneyArr.forEach((money) => {
      money.charactersMove();
    });
    if (this.time % 3000 === 0) {
      this.aLotOfMoney(); //pasarlo
    }
    this.collisionproteinWithDwayne();
    this.collisionkevinWithDwayne();
    this.collisionMoneyWithDwayne();
    this.coliisionWithWallSide();
    this.collisionWithWallUpnDown();
    this.collisionMoneyWithGround();
    this.drawBackground();
    this.dwayne.drawDwayne();
    this.proteinArr.forEach((protein) => {
      protein.drawProtein();
    });
    
    this.kevinArr.forEach((kevin) => {
      kevin.drawKevin();
    });
    this.moneyArr.forEach((money) => {
      
      money.drawImageCharacters();
    });
    this.drawScore();
    this.drawScoreBad();
    this.drawHealth();
    if (this.gameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
