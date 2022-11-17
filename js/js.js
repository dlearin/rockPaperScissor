const btn = document.querySelector('#rock');
const buttonRock = document.querySelector('#rock')
let playerChoiceRock = 0;
let playerChoiceScissor=0;
let playerChoicePapper=0;

btn.addEventListener('click', () => {
  alert("Hello World");
});

buttonRock.addEventListener('click',() =>{
    playerChoiceRock = 1;

    console.log(playerChoiceRock);

})


/*buttons.forEach((button) => {

    button.addEventListener(click, () => {
        alert(button.id)
    })
});


/*let playerScore = 0;
let computerScore = 0;
let playedGames = 0;
let tiedGames= 0;
let playerSelection;
let computerSelection;
const Btn = document.querySelectorAll('button');
let intChoice = 0;*/


/*

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



/*buttons.forEach(button => {button.addEventListener(click, ()=>{

    playerChoice = button.id;
    if (playerChoice == rock){
        intChoice = 1;
    }
    else if(playerChoice == papper){
        
        intChoice = 2;

    }else if(playerChoice == scissors){
        intChoice = 3 ;

    }

    console.log(intChoice);


})});*/



   

  /*function game() {

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
}*/


    /*console.log(game());
    console.log(playerScore);
    console.log(computerScore);
    console.log(playedGames);
    console.log(tiedGames);*/
        
    
