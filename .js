let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg");

let turnO =true; //playerX, playerO 

const winPatterns =  [
    [0,1,2],
    [0,3,6],  
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

const restGame =() => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
   if (turnO) {
        //playerO
      box.innerText = "O";
      box.classList.add("playerO");
      turnO = false;      
    } else {
        //playerX
        box.innerText  = "X";
        box.classList.add("playerX");
        turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });     
});

const disableBoxes = () => {
  for(let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    box.classList.remove("playerO", "playerX");
  }
};

const enableBoxes = () => {
  for(let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (Winner) => {
  msg.innerText = `Congratulations, Winner is ${Winner}`;  
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner= () => {
  for(pattern of winPatterns) {
   let pos1Val = boxes[pattern[0]].innerText;
   let pos2Val = boxes[pattern[1]].innerText;
   let pos3Val = boxes[pattern[2]].innerText;
  
    if (pos1Val !="" && pos2Val !="" && pos3Val !=""){
     if (pos1Val === pos2Val && pos2Val === pos3Val) {
       console.log("winner", pos1Val);
       showWinner(pos1Val);
     }
    }
  }   
};

newGameBtn.addEventListener("click", restGame);
resetBtn.addEventListener("click", restGame);