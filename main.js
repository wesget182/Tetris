document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const board = document.querySelector('#board');

  const head = new Head(board);
    //define function to make new head

    function newHead(){
    
    }

  body.addEventListener('keydown', (e) => {
    
    console.log("head", head)
    // let topPosition = Number(head.style.top.replace('px', ''));
    // let leftPosition = Number(head.style.left.replace('px', ''));
    if (e.code === 'ArrowLeft') {
      console.log('pressed left');
      head.moveLeft()
    }

    if (e.code === 'ArrowRight') {
      console.log('pressed right');
      head.moveRight()
    }

    if (e.code === 'ArrowUp') {
      console.log('pressed up');
      
    }

    if (e.code === 'ArrowDown') {
      console.log('pressed down');
      head.currentDirection = 'down';
    }
  });
});

