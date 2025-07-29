let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let draw = document.querySelector(".draw-case");
let drawmsg = document.querySelector("#draw-msg");

let count = 0;
let turnO = true;//playerx ,playery

const winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame = () => {
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");
    count = 0;
    draw.classList.add("side");
};

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
       if(turnO){ //playerO
        box.innerText = "O";
        count++;
        turnO = false;
       }else { //playerX
        box.innerText = "X";
        count++;
        turnO = true;
       }
       box.disabled = true;
       checkwinner();
    });
});

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableboxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const showDraw = () =>{
    drawmsg.innerText = "Game ended in a Draw!";
    draw.classList.remove("side");
    disableboxes();
}

 const checkwinner = () => {
    for( let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner", pos1val);
                showWinner(pos1val);
            }  
        }

    }

    if(count === 9){
        showDraw();
    }
};

newgamebtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);


 