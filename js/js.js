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

        const score = document.querySelector('#result');

        const content = document.createElement('div');

        content.classList.add('content');

        content.textContent = juego;
        
        container.appendChild(content);


        //add counter to count played games

        playedGames++;

        console.log(playedGames);

        //add counter to count played games

        score.textContent =  

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

    
}



//function addlistener to buttons



btn.forEach((button) =>{
    button.addEventListener("click", ()=>{
        


        playerSelection = button.id;
        game(); 

    
    
    })
})




