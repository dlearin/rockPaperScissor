let playerScore = 0;
let computerScore = 0;
let playedGames = 0;
let tiedGames= 0;
let playerSelection;
let computerSelection;

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
   

  function game() {

    for (i=0; i<5; i++){
        
        playerSelection = prompt("select your gun");
        computerSelection = getComputerChoice();
        console.log(playerSelection);
        console.log(computerSelection);

        let juego = playRound(playerSelection, computerSelection);
        
        if (juego == "You have lost!"){

            computerScore++;
            playedGames++;



        } else if(juego == "You have win!"){
            
            playerScore++;
            playedGames++;



        }else if(juego == "Tie!"){
           
            playedGames++;
            tiedGames++;

        };

    }
}


    console.log(game());
    console.log(playerScore);
    console.log(computerScore);
    console.log(playedGames);
    console.log(tiedGames);
        
    
