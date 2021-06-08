import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

//initialize game control class for game control
class GameControl{
  snake:Snake;
  food:Food;
  scorePanel:ScorePanel;
  direction:string='';
  islive = true;

  constructor(){
    this.snake = new Snake();
    this.food=new Food();
    this.scorePanel=new ScorePanel();
  }

  //start game
  init(){
    document.addEventListener("keydown",this.keydownHandler.bind(this))
    this.run();
  }

  //listen to keyboard event
  keydownHandler(event:KeyboardEvent){
    this.direction = event.key;
  }

  //main loop, keep updating snake status
  run(){
    //obtain snake head position
    let X = this.snake.X;
    let Y = this.snake.Y;
    //inspect last direction command
    switch(this.direction){
      case "ArrowUp":
      case "Up":
        Y-=10;
        break;
      case "ArrowDown":
      case"Down":
        Y+=10;
        break;
      case "ArrowLeft":
      case "Left":
        X-=10;
        break;
      case "ArrowRight":
      case "Right":
        X+=10;
        break;
    }
    // Check if got food
    this.checkEat(X,Y);
    //try update snake head position and update snake body position
    try{
      this.snake.X = X;
      this.snake.Y = Y;
      this.snake.moveBody();
    }catch(e){
      //while error, snake touched bounder
      alert(e.message);
      this.islive = false;
          
    }
    //if not end of game, wait for certain time and run again
    this.islive && setTimeout(this.run.bind(this),300 - (this.scorePanel.level-1)*30);
  }
  //Check if food position equal to head position
  checkEat(X,Y){
    // if True, update food position, update score, update snake body
    if( X===this.food.X && Y===this.food.Y){
      this.food.change();
      this.scorePanel.addScore();
      this.snake.addBody();
    }
  }
}

export default GameControl;