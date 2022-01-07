let container = document.querySelector('.container');

createGrid(16);

let resetBtn = document.querySelector('.sketch-btn');
resetBtn.addEventListener('click', resetGrid);

let colorQuery = "black";

let blackBtn = document.querySelector('#black');
let rainbowBtn = document.querySelector('#rainbow');

blackBtn.addEventListener('click', () =>{
    colorQuery = "black";
});

rainbowBtn.addEventListener('click', () =>{
    colorQuery = "random";
});


function createGrid(numSquares){
    for(let i = 0; i < numSquares; i++){
        for(let j = 0; j < numSquares; j++){
            let box = document.createElement('div');
            box.classList.add('box');
            box.style.flexBasis = (100 *(1 / numSquares)).toString() + "%";
    
            box.addEventListener('mouseenter', function(e){
                e.target.style.backgroundColor = getColor();
            }); 
            container.appendChild(box);
        }
    }
}

function resetGrid(e){
    container.textContent = "";

    let numSquares = getUserInput();

    createGrid(numSquares);
}


function getUserInput(){
    let numSquares;
    do{

        numSquares = prompt("Please enter a value between 1 and 100 to specify the dimension of your grid");

    } while(isNaN(numSquares) || numSquares < 1 || numSquares > 100);

    return numSquares;
}

function genRandomInt(bound){
    return Math.floor(Math.random() * bound);
}

function getColor(){
    if(colorQuery === "black"){
        return "black";
    }
    else{
        red = genRandomInt(256);
        green = genRandomInt(256);
        blue = genRandomInt(256);

        return `rgb(${red}, ${green}, ${blue})`;
    }
}



