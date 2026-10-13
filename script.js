function getComputerChoice(){
    let prob=Math.random();
    if(prob<(1/3)) return "rock";
    else if(prob>(2/3)) return "paper";
    else return "scissors";
}

function getHumanChoice(){
    let choice= window.prompt("Enter Rock, Paper or Scissors","Enter R/P/S");
    if(choice.toLowerCase()=="r"||choice.toLowerCase()=="rock") return "rock";
    else if(choice.toLowerCase()=="p"||choice.toLowerCase()=="paper") return "paper";
    else if(choice.toLowerCase()=="s"||choice.toLowerCase()=="scissors") return "scissors";
    else return "invalid";
}
function playGame(){

let humanScore=0;
let computerScore=0;

function playRound(humanChoice,computerChoice){
    if(humanChoice=="invalid"){
        console.log("Invalid Choice");
        return;
    }
    if(humanChoice==computerChoice) {
        console.log("Its a Draw!");
    }
    else{
    if(humanChoice=="rock"){
        if(computerChoice=="paper") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        else {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
    }
    else if(humanChoice=="paper"){
        if(computerChoice=="scissors") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        else {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
    }
    else {
        if(computerChoice=="rock") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        else {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
    }}
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

if(humanScore>computerScore) {
    return "human";
}

else if(computerScore>humanScore) return "computer";

else return "Its a tie! No one";

}

let winner;

for(let i=0;i<5;i++){
   winner = playGame();
}

console.log(`${winner} is the winner!`);