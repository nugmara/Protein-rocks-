class Game {
  constructor() {
    this.background = new Image();
    this.background.src = "./images/canvasBackground.jpg";
    this.dwayne = new Dwayne();
    this.pizza = new Pizza();
    this.pizzaArr = [];
    this.protein = new Protein();
    this.proteinArr = [];
    this.frenchToast = new Toast();
    this.frenchToastArr = [];
    this.score = 0;
    this.time = 0;
    this.gameOn = true;
    this.health = 100;
    this.lessHealth = 10;
    this.mySound = new Audio("./soundsEffects/proteinRocks!.mp3");
    this.mySound.volume = 0.5;
    this.mySound2 = new Audio("./soundsEffects/gameOverSound.mp3");
    this.mySound2.volume = 0.5;
    this.mySound3 = new Audio("./soundsEffects/FrenchToastHit.mp3");
    this.mySound3.volume = 0.5;
    this.mySound4 = new Audio("./soundsEffects/PizzaHit.mp3");
    this.mySound4.volume = 0.5;
  }

  drawBackground = () => {
    ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height);
  };
  proteinAppears = () => {
    if (!this.proteinArr.some((protein) => protein.collected === false)) {
      this.proteinArr.push(new Protein());
    }
  };
  pizzaAppears = () => {
    let pizzaAppears = new Pizza();
    this.pizzaArr.push(pizzaAppears);
  };
  frenchToastAppears = () => {
    let frenchToast = new Toast();
    this.frenchToastArr.push(frenchToast);
  };
  drawScore = () => {
    ctx.font = "24px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(`Score: ${this.score}`, 10, 30);
  };
  drawHealth = () => {
    ctx.fillStyle = "green";
    if (this.health <= 60) {
      ctx.fillStyle = "orange";
    }
    if (this.health <= 40) {
      ctx.fillStyle = "red";
    }
    ctx.fillRect(640, 20, this.health, 20);
  };
  collisionProteinWithDwayne = () => {
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
  collisionPizzaWithDwayne = () => {
    this.pizzaArr.forEach((pizza, index) => {
      if (
        this.dwayne.x < pizza.x + pizza.w &&
        this.dwayne.x + this.dwayne.w > pizza.x &&
        this.dwayne.y < pizza.y + pizza.h &&
        this.dwayne.y + this.dwayne.h > pizza.y
      ) {
        this.pizzaArr.splice(index, 1);
        this.mySound4.play();
        this.health -= this.lessHealth;

        if (this.health === 0) {
          this.gameOver();
        }
      }
    });
  };
  collisionToastWithDwayne = () => {
    this.frenchToastArr.forEach((frenchToast, index) => {
      if (
        this.dwayne.x < frenchToast.x + frenchToast.w &&
        this.dwayne.x + this.dwayne.w > frenchToast.x &&
        this.dwayne.y < frenchToast.y + frenchToast.h &&
        this.dwayne.y + this.dwayne.h > frenchToast.y
      ) {
        this.frenchToastArr.splice(index, 1);
        if (this.score > 0) {
          this.score -= 5;
          this.mySound3.play();
        } else {
          this.health -= this.lessHealth;
        }
        if (this.health === 0) {
          this.mySound2.play()
          this.gameOver();
        }
      }
    });
  };
  collisionDwayneWithSideWalls = () => {
    if (this.dwayne.x + this.dwayne.w > canvas.width) {
      this.dwayne.x = canvas.width - this.dwayne.w;
    }
    if (this.dwayne.x < 0) this.dwayne.x = 0;
  };
  collisionDwayneWithUpAndDownWalls = () => {
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
  };
  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
  gameLoop = () => {
    this.clearCanvas();
    //this.myBGSound.play()
    this.time += 16;
    if (this.time % 200 === 0) {
      this.proteinAppears();
    }
    this.pizzaArr.forEach((pizza) => {
      pizza.charactersMove();
    });
    if (this.time % 300 === 0) {
      this.pizzaAppears();
    }
    this.frenchToastArr.forEach((frenchToast) => {
      frenchToast.charactersMove();
    });
    if (this.time % 500 === 0) {
      this.frenchToastAppears();
    }

    this.collisionProteinWithDwayne();
    this.collisionPizzaWithDwayne();
    this.collisionToastWithDwayne();
    this.collisionDwayneWithSideWalls();
    this.collisionDwayneWithUpAndDownWalls();

    this.drawBackground();
    this.dwayne.drawDwayne();
    this.proteinArr.forEach((protein) => {
      protein.drawProtein();
    });
    this.pizzaArr.forEach((pizza) => {
      pizza.drawKevin();
    });
    this.frenchToastArr.forEach((frenchToast) => {
      frenchToast.drawToast();
    });

    this.drawScore();
    this.drawHealth();
    if (this.gameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
