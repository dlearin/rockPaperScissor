// Initialing General variables

const btn = document.querySelectorAll("button");
let playedGames = 0;
let tiedGames= 0;
let playerSelection;
let computerSelection;
const score = document.querySelector(".score");
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

        let juego = playRound(playerSelection, computerSelection);

        console.log(juego);
        
        /*if (juego == "You have lost!"){

           alert();



        } else if(juego == "You have win!"){
            
            playerScore++;
            playedGames++;



        }else if(juego == "Tie!"){
           
            playedGames++;
            tiedGames++;

        };*/

    
}



//function addlistener to buttons



btn.forEach((button) =>{
    button.addEventListener("click", ()=>{
        
        playerSelection = button.id;
        game(); 
    
    
    })
})




