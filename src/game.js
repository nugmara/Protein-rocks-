class Game {
  constructor() {
    this.background = new Image();
    this.background.src = "./images/fondo.jpg";
    this.dwayne = new Dwayne();
    this.kevin = new Kevin();
    this.protein = new Protein();
    this.proteinArr = [];
    this.time = 0;
    this.kevinArr = [];
    this.money = new MoneyBonus();
    this.score = 0;
    this.moneyArr = [];
    this.lives = 3;
    this.gameOn = true;
    //this.timer = Date.now()
  }
  
  drawBackground = () => {
    ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height);
  }
  aLotOfProteins = () => {
    let aLotOfThem = new Protein();
    this.proteinArr.push(aLotOfThem);
    setTimeout(() => {
      if (!aLotOfThem.collected) {
        let index = this.proteinArr.indexOf(aLotOfThem)
        this.proteinArr.splice(index, 1)
      }
    }, 3000)
  };
  aLotOfkevin = () => {
    let aLotOfkevin = new Kevin();
    this.kevinArr.push(aLotOfkevin);
  };
  aLotOfMoney = () => {
    let aLotOfMoney = new MoneyBonus();
    this.moneyArr.push(aLotOfMoney);
  };
  drawScore = () => {
    ctx.font = "24px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(`Score: ${this.score}`, 10, 30);
  };
  drawScoreBad = () => {
    ctx.font = "24px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(`Don't run my man! ${this.lives}`, 10, 80);
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

  gameOver = () => {
    this.gameOn = false;
    canvas.style.display = "none";
    gameOverScreenDOM.style.display = "block";
  }
  clearRect = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
  gameLoop = () => {
    this.clearRect();
    this.drawBackground()
    this.dwayne.update();
    this.dwayne.drawDwayne();
    this.time += 16;
    if (this.time % 1000 === 0) {
      this.aLotOfProteins();
    }
    this.proteinArr.forEach((protein) => {
      protein.drawProtein();
    });
    this.kevinArr.forEach((kevin) => {
      kevin.drawKevin();
      kevin.charactersMove();
    });
    if (this.time % 300 === 0) {
      this.aLotOfkevin();
    }
    this.moneyArr.forEach((money) => {
      money.drawImageCharacters();
      money.charactersMove();
    });
    if (this.time % 5000 === 0) {
      this.aLotOfMoney();
    }
    this.collisionproteinWithDwayne();
    this.collisionkevinWithDwayne();
    this.collisionMoneyWithDwayne();
    this.coliisionWithWallSide();
    this.collisionWithWallUpnDown();
    this.drawScore();
    this.drawScoreBad();
  };
}

