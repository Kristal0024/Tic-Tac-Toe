let boxes=document.querySelectorAll(".box");
let strtgame=document.querySelector(".game");
let msg1=document.querySelector(".msg");
let msg_cont=document.querySelector(".msgcontainer");
let resetgame=document.querySelector(".Reset");
let newgame=document.querySelector(".newgame");

let turnx=true;
let count=0;
let winnerdeclared=false;
const winnerpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnx){
            box.innerText="x";
            turnx=false;
        }else{
            box.innerText="o";
            turnx=true;
        }
        box.disabled=true;
        checkWinner();
        count++;
        if(count===9 && winnerdeclared===false){
            msg1.innerText=`Draw, Start new game`;
            msg_cont.classList.remove("hide");
            count=0;
            disableBoxes();
        }
    });
});

const checkWinner=()=>{
    for(let pattern of winnerpattern){
     let pos1value=boxes[pattern[0]].innerText;
     let pos2value=boxes[pattern[1]].innerText;
     let pos3value=boxes[pattern[2]].innerText;
     if(pos1value!=""&&pos2value!=""&&pos3value!=""){
        if(pos1value===pos2value&&pos2value===pos3value){
            console.log("winner",pos1value);
            showwinner(pos1value);
            winnerdeclared=true;
            break;
        }
     }
    }
}
const showwinner=(winner)=>{
    msg1.innerText=`Congratulations, the winner is ${winner}`;
    msg_cont.classList.remove("hide");
    disableBoxes();
}
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const reset=()=>{
    turnx=true;
    count=0;
    enableBoxes();
    msg_cont.classList.add("hide");
    winnerdeclared=false;
}
resetgame.addEventListener("click",reset);
newgame.addEventListener("click",reset);