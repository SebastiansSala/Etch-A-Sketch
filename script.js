const gridValue = document.querySelector('#value');
const length = window.prompt('Tamano de los pixeles')

function createGrid(length){
  grid.style.gridTemplateColumns = `repeat(${length}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${length}, 1fr)`;

  for (let i = 0; i < length * length; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.style.background = "#fefefe";
    grid.appendChild(gridItem);
  }
}

const roulleteColor = document.querySelector('#colorRoullete');
const color = document.querySelector('#color');
color.addEventListener('click', () => changeColor(roulleteColor.value));


const rainbowBtn = document.querySelector('#rainbow');
rainbowBtn.addEventListener('click', () => {
  const currentItem = document.querySelectorAll('.grid-item');
  currentItem.forEach(element => {
    element.addEventListener('mouseover', (elem) => {
      const newColor = generateRandomColor();
      elem.target.style.backgroundColor = newColor;
    });    
  });
});

const shadeBtn = document.querySelector('#shade');
shadeBtn.addEventListener('click', () => {
  const currentItem = document.querySelectorAll('.grid-item');
  currentItem.forEach(element => {
    let count = 0;
    element.addEventListener('mouseover', (elem) => {
      count += 1;
      elem.target.style.backgroundColor = '#000000';
      elem.target.style.opacity = count*.1;
    });    
  });
});


const eraserBtn = document.querySelector('#eraser');
eraserBtn.addEventListener('click', () => {
  const currentItem = document.querySelectorAll('.grid-item');
  currentItem.forEach(element => {
    element.addEventListener('mouseover', (elem) => {
      elem.target.style.backgroundColor = '#fefefe';
    });    
  });
});

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () =>{
  const currentItem = document.querySelectorAll('.grid-item');
  for(let i = 0; i < length*length; i++){
    currentItem[i].style.background = '#fefefe';
  } 
});


function generateRandomColor(){
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  return "#" + randomColor;
}

function changeColor(newColor){
  const currentItem = document.querySelectorAll('.grid-item');
  currentItem.forEach(element => {
    element.addEventListener('mouseover', (elem) => {
      elem.target.style.backgroundColor = newColor;
    });    
  });
}

createGrid(length);