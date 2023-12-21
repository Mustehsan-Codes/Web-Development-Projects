let userScore=0;
let compScore=0;
const userScoreobj=document.getElementById("user-score");
const compScoreobj=document.getElementById("comp-score");
const resultMessage=document.getElementById("game-result");
const choices=document.querySelectorAll(".choice");
let generateComputerChoice=()=>{
      //Rock, Paper, Scissor
      const options=["rock","paper","scissor"];
      const randomIndex=Math.floor(Math.random()*3);
      return options[randomIndex];
}
const drawGame=()=>{
      resultMessage.textContent="Game Draw! Play Again..";
      resultMessage.style.backgroundColor="grey";
}
const showWinner=(winner,userChoice,computerChoice)=>{
      if(winner){
            //user win
            userScore++;
            userScoreobj.textContent=userScore;
            resultMessage.textContent=`You Win! your ${userChoice} beats ${computerChoice}.`;
            resultMessage.style.backgroundColor="green";
      }
      else {
            compScore++;
            console.log("you lose");
            //computer win
            compScoreobj.textContent=compScore;
            resultMessage.textContent=`You lose! ${computerChoice} beats your ${userChoice}.`;
            resultMessage.style.backgroundColor="red";
      }
}
const playGame=(userChoice)=>{
      //Genreate computer choice 
      console.log("User choice ",userChoice);
      const computerChoice=generateComputerChoice();
      console.log("computer choice ",computerChoice);
      //check for draw
      if(userChoice===computerChoice){
            //draw
            drawGame();
      }
      else {
            let userWin=true;
            if(userChoice==="rock"){
                  userWin= computerChoice==="paper"?false:true;
            }
            else if(userChoice==="paper"){
                  userWin=computerChoice==="rock"?true:false;
            }
            else if(userChoice==="scissor"){
                  userWin=computerChoice==="paper"?true:false;
            }
            showWinner(userWin,userChoice,computerChoice);
      }
}
choices.forEach((choice)=>{
      choice.addEventListener("click",()=>{
            const userChoice=choice.getAttribute("id");
           playGame(userChoice);
      })
});