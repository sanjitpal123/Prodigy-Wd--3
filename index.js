let boxes = document.querySelectorAll(".box");
let current = document.querySelector(".current_player");
let newgame = document.querySelector(".new");
let winingpos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let current_player;
let gamegrid;
function init() {
    current_player = "x";
    gamegrid = ["", "", "", "", "", "", "", "", ""];
    newgame.classList.remove("active");
    current.innerText = `Current Player-${current_player}`;
    boxes.forEach((box,index)=>{
        box.innerHTML="";
        
        boxes[index].style.pointerEvents="all";
        box.classList=`box box${index+1}`;
    })

    
}
init();
function turn() {
    if (current_player == 'x') {
        current_player = 'o';
    }
    else {
        current_player = "x";
    }
    current.innerHTML = `current player-${current_player}`;
}

function gameover() {
    let answer = '';
    winingpos.forEach((position) => {
        if ((gamegrid[position[0]] !=="" || gamegrid[position[1]] !=="" || gamegrid[position[i]] !== "") && ((gamegrid[position[0]] === gamegrid[position[1]]) && (gamegrid[position[1]] === gamegrid[position[2]]))) {
            if (gamegrid[position[0]] === 'x')
               {
                answer = 'x';
               }

            else {
                answer = 'o';
            }
            boxes.forEach((box)=>{
                box.style.pointerEvents="none";
            })

                boxes[position[0]].classList.add("win");
                boxes[position[1]].classList.add("win");
                boxes[position[2]].classList.add("win");
                newgame.classList.add("active");
            
        }
       
        
});

let fillcount=0;
gamegrid.forEach((box)=>{
      if(box!=="")
      {
        fillcount++;
      }
})
if(answer!=="")
{
    current.innerHTML=`Winner is-${answer}`;
    newgame.classList.add("active");
    
}
else if(fillcount===9)
{
    current.innerHTML="tied";
    newgame.classList.add("active");
}
newgame.classList.add("active");

}

function handleClick(index) {
    if (gamegrid[index] === "") {
        boxes[index].innerHTML = current_player;
        gamegrid[index] = current_player;
        turn();

    }
}

boxes.forEach((element, index) => {
    element.addEventListener("click", (e) => {
        handleClick(index);
        gameover();
    })

})
newgame.addEventListener("click",()=>{

    init();
})