//define class
class Food{
  //define element
  element: HTMLElement;

  constructor(){
    //obtain the food element and set to element
    this.element = document.getElementById('food')!;
  }
  //define the method obtain x,y offset
  get X(){
    return this.element.offsetLeft;
  }
  get Y(){
    return this.element.offsetTop;
  }
  //modify food position
  change(){
    //generate a random position in (0,294)
    //grid, 10*10, body size. 
    let top= Math.round(Math.random()*29)*10;
    let left= Math.round(Math.random()*29)*10;

    //update food position
    this.element.style.left = left + 'px';
    this.element.style.top = top + 'px';
  }
}

export default Food;