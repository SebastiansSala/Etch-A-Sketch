function createGrid(){
  grid.style.gridTemplateColumns = `repeat(${length}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${length}, 1fr)`;

  for (let i = 0; i < length * length; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.style.background = "#fefefe";
    grid.appendChild(gridItem);
  }
}

function changeColor(){
  const currentItem = document.querySelectorAll('.grid-item');
  currentItem.forEach(element => {
    let count = 0;
    element.addEventListener('mouseover', (elem) =>{
      elem.target.style.backgroundColor = '#000000';
      count += 1;
      elem.target.style.opacity = .1*count;
    });    
  });
}


const length = window.prompt("Tamano del grid");

createGrid();
changeColor();