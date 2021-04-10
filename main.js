document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', function(){
    const body = document.querySelector('body');
    
    const button = document.querySelector('button')
    button.remove();

    const speed = 500  
    const gridWidth = 10;
    const gridHeight = 20;
    const gridArea = gridHeight * gridWidth;
    const blocked = {201:'',202:'',203:'',204:'',205:'',206:'',207:'',208:'',209:'' };
    let score = 0
  
    let newGrid = makeGrid();
    // const squares = Array.from(newGrid.querySelector('#gridEl'))
    console.log(newGrid)
    
    function makeGrid(){
      let grid = document.querySelector('#board');
      const squares = []
      for (let i = 0; i < gridArea; i ++){
       
        const gridElement = document.createElement('div');
        gridElement.setAttribute('id', "gridEl")
        gridElement.style.height = '25px'
        gridElement.style.width = '25px'
        grid.appendChild(gridElement);
        squares.push(gridElement);
      }
  
      for (let i = 0; i < gridWidth; i++){
        let gridElement = document.createElement('div')
          gridElement.setAttribute('class', 'block3');
          gridElement.style.height = '25px'
          gridElement.style.width = '25px'
          // gridElement.style.background = 'yellow'
          grid.appendChild(gridElement);
          squares.push(gridElement)
      }
      return squares;
    }
    
    let currentPosition = 4
  
    const zTetramino = [[gridWidth, gridWidth+1, gridWidth*2-1,gridWidth*2],
                        [-1,gridWidth-1,gridWidth,gridWidth*2],
                        [gridWidth, gridWidth+1, gridWidth*2-1,gridWidth*2],
                        [-1,gridWidth-1,gridWidth,gridWidth*2]];
    
    const lTetramino = [[0, 1, gridWidth, gridWidth*2],
                        [gridWidth-1, gridWidth, gridWidth+1, gridWidth*2+1],
                        [0, gridWidth, gridWidth*2-1, gridWidth*2],
                        [gridWidth-1, gridWidth*2-1, gridWidth*2, gridWidth*2+1]];
  
    const tTetramino = [[0, gridWidth-1, gridWidth, gridWidth+1],
                        [0, gridWidth, gridWidth+1, gridWidth*2],
                        [gridWidth-1, gridWidth, gridWidth+1,gridWidth*2],
                        [0, gridWidth-1, gridWidth, gridWidth*2]];      
  
    const sqTetramino =[[0,1,gridWidth,gridWidth+1],
                        [0,1,gridWidth,gridWidth+1],
                        [0,1,gridWidth,gridWidth+1],
                        [0,1,gridWidth,gridWidth+1]];
  
    const longTetramino = [[0,gridWidth,gridWidth*2,gridWidth*3],
                           [gridWidth-2, gridWidth-1, gridWidth, gridWidth+1],
                           [0,gridWidth,gridWidth*2,gridWidth*3],
                           [gridWidth-2, gridWidth-1, gridWidth, gridWidth+1]];
  
    let rotation = 0;
    let random = Math.floor(Math.random() * 5);
    
  
    const tetraminoes = [zTetramino, lTetramino, tTetramino, sqTetramino, longTetramino]
    const colors = ['#53add9', '#bede76', '#ae7eae', '#facb01', '#e51c34']

    let currentPiece = tetraminoes[random][rotation]       
    let currentColor = colors[random]

    function draw(){
      currentPiece.forEach(el => {
        newGrid[currentPosition + el].classList.add('currentPiece')
        newGrid[currentPosition + el].style.background = currentColor;
        newGrid[currentPosition + el].style.borderRadius = '5px';
        newGrid[currentPosition + el].style.background = `radial-gradient(circle, ${currentColor} 50%, #d3d3d3 100%)`;
        // newGrid[currentPosition + el].style.border = '1px solid black';
      })
    }
  
    
    function undraw(){
      document.querySelectorAll(".currentPiece").forEach(el => {
        el.classList.remove('currentPiece')
        el.style.background = 'none';
      })
    }
    
  
  
    function move(){
      let preUpdate = currentPiece.map(el => currentPosition + el)
      currentPosition += gridWidth 
      let updated = currentPiece.map(el => currentPosition + el)
      
      freeze()
      undraw()
      draw()
              
      setTimeout(move, speed)
      
  
      function freeze(){
        if(updated.some(el => blocked[el] !== undefined)){
          preUpdate.forEach(el => blocked[el] = "");
          let frozen = document.querySelectorAll(".currentPiece")
          frozen.forEach(el => el.classList.remove('currentPiece'))
          frozen.forEach(el => el.classList.add('blocked'))
  
          currentPosition = 4
          random = Math.floor(Math.random() * 4.9)
          currentPiece = tetraminoes[random][rotation] 
          currentColor = colors[random]
          score += 1
         let counter = 0
         
          // for(let i=0; i<gridHeight;i++){
          //   counter = 0
          //   for(let j=0; j < gridWidth; j++){
          //     console.log('blocked', blocked[i*10+j])
          //     if(blocked[i*10+j] !== undefined){
          //       console.log(counter)
          //       counter++
          //     }
          //   } 
          // if(counter === 10){
          //     for(let j=0; j < gridWidth; j++){
          //       console.log(blocked)
          //       delete blocked[i*10+j] 
          //   }
          // }
          
          // }
            



        }

      }

    }
  
  
    function moveLeft(){
      let updated = currentPiece.map(el => currentPosition + el -1)
      const atLeftWall = updated.some(el => (el+1) % gridWidth === 0)
      
      if(!(atLeftWall || updated.some(el => blocked[el] !== undefined))){
          undraw()
          currentPosition -= 1
          draw()
        }
    }
  
    function moveRight(){
  
      let updated = currentPiece.map(el => currentPosition + el)
      const atRightWall = updated.some(el => el % gridWidth === gridWidth-1)
      
      if(!(atRightWall || updated.some(el => blocked[el] !== undefined))){
          undraw()
          currentPosition += 1
          draw()
        }
  
    }
  
    function moveDown(){
      let updated = currentPiece.map(el => currentPosition + el + gridWidth);
      
      if(!(updated.some(el => blocked[el] !== undefined))){
        undraw();
        currentPosition += gridWidth;
        draw();
      }
    }
   
    function rotate(){
      undraw();
      if (rotation < 3){
        rotation += 1;
      } 
      else {
        rotation = 0;
      }
      currentPiece = tetraminoes[random][rotation];
      draw();
    }
  
    body.addEventListener('keydown', (e) => {
      if (e.code === 'ArrowLeft') {
        console.log('pressed left');
        moveLeft();
      }
  
      if (e.code === 'ArrowRight') {
        console.log('pressed right');
        moveRight();
      }
  
      if (e.code === 'ArrowUp') {
        console.log('pressed up');
        rotate();
      }
  
      if (e.code === 'ArrowDown') {
        console.log('pressed down');
        moveDown();
      }
    });

    move();
    
  });
  
  
  })
 