// Initialing General variables

const btn = document.querySelectorAll("button");
let playedGames = 0;
let winTimes = 0;
let lostTimes = 0;
let tiedGames= 0;
let playerSelection;
let computerSelection;
let juego;
const scoreTitular = document.querySelector(".score");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const buttonSelected= document.querySelector(".btnSelection");


//Function selection of pc

function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3);
    
      switch (randomNumber) {
        case 0:
          return "rock";
          break;
    
        case 1:
          return "papper";
          break;
    
        case 2:
          return "scissors";
          break;
      }
    }


//Function one game

    function playRound(playerSelection, computerSelection) {


        switch (playerSelection){
    
            case "rock":
                if (computerSelection == "rock"){
                    return "Tie!"
                } else if (computerSelection == "papper"){
                    return "You have lost!"
                } else if (computerSelection == "scissors"){
                    return "You have win!"
                }
            break;
    
            case "papper":
                if (computerSelection == "papper"){
                    return "Tie!"
                } else if (computerSelection == "scissors"){
                    return "You have lost!"
                } else if (computerSelection == "rock"){
                    return "You have win!"
                }
            break;
    
            case "scissors":
                if (computerSelection == "scissors"){
                    return "Tie!"
                } else if (computerSelection == "rock"){
                    return "You have lost!"
                } else if (computerSelection == "papper"){
                    return "You have win!"
                }
            break;
    
        }
       
    }


//Function game


function game() {

        
        computerSelection = getComputerChoice();
        console.log(playerSelection);
        console.log(computerSelection);

        juego = playRound(playerSelection, computerSelection);

        console.log(juego);

        

        //add counter to count played games

        playedGames++;

        console.log(playedGames);

        //add counter to count played games

       // score.textContent =  

        //ad counter to count win times


        if(juego == "You have win!"){
            
            winTimes++;

        }

        console.log(winTimes);


        //ad counter to count losts

        if(juego == "You have lost!"){

        lostTimes++;
        }

        console.log(lostTimes);

        //add counter to tie times

        if(juego == "Tie!"){

            tiedGames++;
            console.log(tiedGames);
        }
        
        console.log(tiedGames);

        //add results in text

        const score = document.querySelector('#result');

        score.textContent = "";

        score.textContent = juego;

        //add computer decission to html

        const userSelectionHTML = document.querySelector('#yourSelection');

        userSelectionHTML.textContent = "";

        userSelectionHTML.textContent = `You have selected ${playerSelection}`
        

        //add computer decission to html

        const computerSelectionHTML = document.querySelector('#computerSelectionHTML');

        computerSelectionHTML.textContent = "";

        computerSelectionHTML.textContent = `The machine has selected ${computerSelection}`
        
        //played times html

        const playedHTML = document.querySelector('#playerScore');

        playedHTML.textContent = "";

        playedHTML.textContent = `This is your game number ${playedGames}`
        
        //add counter of winning times to text en html

        const winHTML = document.querySelector("#winGames");

        winHTML.textContent = "";

        winHTML.textContent = `You have win ${winTimes} times`

        //add counter of lost times to html

        const lostHTML = document.querySelector('#lostGames');

        lostHTML.textContent = "";

        lostHTML.textContent = `You have lost ${lostTimes} times`;

        //add counter of tied games to HTML

        const tiedHTML = document.querySelector('#tiedGames');

        tiedHTML.textContent = "";

        tiedHTML.textContent = `You have tied ${tiedGames} times`

        // limit of 5 played games and, then, clean it all and show results.

        Finished()
        // show reset button

    
}

//Function to clean all after game ended with 5 games played and show results


function Finished() {
    if (playedGames >= 5){


        const limitation = document.querySelector('#containerSections');

        limitation.textContent = "";

        const finishMessage = document.createElement('h1');

        finishMessage.textContent = "Finish";

        limitation.appendChild(finishMessage);

        const showFinalResults = document.createElement('h2');

        showFinalResults.textContent = `Your results are: \n 
        You have won ${winTimes} times \n 
        You have lost ${lostTimes} \n 
        You have tied ${tiedGames} times`;

        limitation.appendChild(showFinalResults);

        //Show reset button
        
        const reloadGame = document.createElement('button');

        reloadGame.textContent = "Reset game";

        reloadGame.onclick = ()=>{

            window.location.reload()
        }

    
        limitation.appendChild(reloadGame);

       

    }

}


//function addlistener to buttons



btn.forEach((button) =>{
    button.addEventListener("click", ()=>{
        


        playerSelection = button.id;
        game(); 

    
    
    })
})




