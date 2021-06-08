//define snake
class Snake {
  head: HTMLElement;
  body: HTMLCollection;
  element: HTMLElement;

  constructor() {
    this.element = document.getElementById('snake')!;
    this.head = document.querySelector('#snake > div') as HTMLElement;
    this.body = document.getElementById('snake')!.getElementsByTagName('div');
  }

  // obtain head position
  get X() {
    return this.head.offsetLeft;
  }
  get Y() {
    return this.head.offsetTop;
  }

  //set head position
  set X(value: number) {
    if(this.X===value)
    {
      return
    }
    if(value<0 || value>290){
      throw new Error("Game Over!");
    }
    this.head.style.left = value + 'px';
  }
  set Y(value: number) {
    if(this.Y===value){
      return
    }
    if(value<0 || value>290){
      throw new Error("Game Over!");
    }
    this.head.style.top = value + 'px';
  }

  // function will be called while snake eat food
  addBody() {
    this.element.insertAdjacentHTML('beforeend', '<div></div>');
  }

  // function will be called for each move
  moveBody(){
    //update all body position
    for(let i=this.body.length-1;i>0;i--){
      let X=(this.body[i-1] as HTMLElement).offsetLeft;
      let Y = (this.body[i-1] as HTMLElement).offsetTop;
      // body[n] position will be the same as body[n-1] expect the head
      (this.body[i] as HTMLElement).style.left = X+ 'px';
      (this.body[i] as HTMLElement).style.top = Y + 'px';
    }
  }
}

export default Snake;
