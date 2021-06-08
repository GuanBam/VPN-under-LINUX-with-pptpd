//define score pannel
class ScorePanel{
  //initialize score and level
  score = 0;
  level = 1;
  scoreEle: HTMLElement;
  levelEle: HTMLElement;
  maxLevel:number;
  constructor(maxLevel:number=10){
    this.scoreEle = document.getElementById('score');
    this.levelEle = document.getElementById('level');
    this.maxLevel = maxLevel;
  }

  addScore(){
    //update score and level
    this.scoreEle.innerHTML = ++ this.score + '';
    if(this.score % 2===0){
      this.levelUp()
    }
  }

  levelUp(){
    if(this.level<this.maxLevel){
      this.levelEle.innerHTML = ++ this.level +'';
    }
  }
}

export default ScorePanel;