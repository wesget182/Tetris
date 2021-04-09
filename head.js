class Head {
  constructor(el) {
    this.node = document.createElement('div');
    this.node.setAttribute('id', 'head');
    el.appendChild(this.node);

    this.currentDirection = 'down';
    this.SPEED = 250;
    this.node.style.top = '0px';
    this.node.style.left = '250px';
    // this.node.moveRight = function(){
    //     this.node.style.left = `${(Number(this.node.style.left.replace('px', '')) += 10)}px`;
    // };
    // this.node.moveLeft = function(){
    //    this.node.style.left = `${(Number(this.node.style.left.replace('px', '')) -= 10)}px`;
    // };
    setTimeout(this.move.bind(this), this.SPEED);
    this.moveRight.bind(this)
    this.moveLeft.bind(this)
  }

  moveRight(){
    let leftPosition = Number(head.style.left.replace('px', ''));
    if (leftPosition === 490) return
    head.style.left = `${(leftPosition += 10)}px`;
  }

  moveLeft(){
    
    let leftPosition = Number(head.style.left.replace('px', ''));
    if (leftPosition === 0) return
    head.style.left = `${(leftPosition -= 10)}px`;;
  }

  move() {
    const head = this.node;
    
    const direction = this.currentDirection;

    
    let topPosition = Number(head.style.top.replace('px', ''));
    let leftPosition = Number(head.style.left.replace('px', ''));

    if (topPosition === 550){
    //call main scope function which makes new head
      const head = new Head(board);
      return
    }
    // if (direction === 'right' && leftPosition >= 650) {
    //   return;
    // }

    // if (direction === 'left' && leftPosition <= 0) {
    //   return;
    // }

    // if (direction === 'up' && topPosition <= 0) {
    //   return;
    // }

    // if (direction === 'down' && topPosition >= 650) {
    //   return;
    // }

    if (direction === 'right') {
      head.style.left = `${(leftPosition += 10)}px`;
    }

    if (direction === 'left') {
      head.style.left = `${(leftPosition -= 10)}px`;
    }

    if (direction === 'up') {
      head.style.top = `${(topPosition -= 10)}px`;
    }

    if (direction === 'down') {
      head.style.top = `${(topPosition += 10)}px`;
    }

    setTimeout(this.move.bind(this), this.SPEED);
  }
}