function getComputerChoice(){
    let prob=Math.random();
    if(prob<(1/3)) return "rock";
    else if(prob>(2/3)) return "paper";
    else return "scissors";
}

function getHumanChoice2(inp){
    let choice= inp;
    if(choice.toLowerCase()=="r"||choice.toLowerCase()=="rock") return "rock";
    else if(choice.toLowerCase()=="p"||choice.toLowerCase()=="paper") return "paper";
    else if(choice.toLowerCase()=="s"||choice.toLowerCase()=="scissors") return "scissors";
    else return "invalid";
}

let humanScore=0;
let computerScore=0;

function playGame(hchoice){

function playRound(humanChoice,computerChoice){
    if(humanChoice=="invalid"){
        resultDiv.textContent="Invalid Choice";
        return;
    }
    if(humanChoice==computerChoice) {
        resultDiv.textContent=`Round Result: Its a Draw! Both chose ${humanChoice}`;
    }
    else{
    if(humanChoice=="rock"){
        if(computerChoice=="paper") {
            resultDiv.textContent=`Round Result: You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
        }
        else {
            resultDiv.textContent=`Round Result: You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        }
    }
    else if(humanChoice=="paper"){
        if(computerChoice=="scissors") {
            resultDiv.textContent=`Round Result: You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
        }
        else {
            resultDiv.textContent=`Round Result: You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        }
    }
    else {
        if(computerChoice=="rock") {
            resultDiv.textContent=`Round Result: You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
        }
        else {
            resultDiv.textContent=`Round Result: You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        }
    }}
}

const humanSelection = getHumanChoice2(hchoice);
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

if(humanScore==5) {
    scoreDiv.textContent=`Game Ends!\nHuman Wins`;
    humanScore=computerScore=0;
    return;
}
if(computerScore==5) {
    scoreDiv.textContent=`Game Ends!\nComputer Wins`;
    humanScore=computerScore=0;
    return;
}

scoreDiv.textContent=`Human:${humanScore}`+`\n`+`Computer:${computerScore}`;

}



const buttons = document.querySelectorAll('.ulbut > button');

for(const button of buttons){
    button.addEventListener('click',(e)=>{
        playGame(button.textContent);
    })
}

const resultDiv=document.querySelector('.results');
const scoreDiv=document.querySelector('.score');