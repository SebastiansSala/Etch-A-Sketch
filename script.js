let currentColor = "#FFFFFF";

function color(){
    gridItem.style.background = "#FFFFFF";
}



const grid = document.getElementById('grid');
const length = window.prompt("Tamano del grid");

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

window.onload = () => {
    createGrid();
  }