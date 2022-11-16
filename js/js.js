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


/*const computerSelection = getComputerChoice();*/

function playRound(playerSelection, computerSelection) {

    /*console.log(computerSelection);*/

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

        /*switch (juego) {

            case "You have lost!":
            computerScore++;
            playedGames++;
            break;

            case "You have win!":
            playerScore++;
            playedGames++;
            break;
                
            case "Tie!":
            playedGames++;
            break;
        }*/

    console.log(game());
    console.log(playerScore);
    console.log(computerScore);
    console.log(playedGames);
    console.log(tiedGames);
        
        
    
        /*let partida = playRound(playerSelection, computerSelection);

    if (partida == "You have win!"){

        contadorVictorias++;

        resultado = "El resultado del juego º {0} es ....You have win!", i+1 ;

    } else if (partida == "You have lost!"){

        contadorDerrotas++;
        resultado = "El resultado del juego º {0} es ....You have lost!", i+1;


    } else if (partida == "You have lost!")

        resultado = "El resultado del juego º {0} es ....Tie!", i+1;

    }*/
    








/** const computerSelection = getComputerChoice();

console.log(computerSelection);

let playerSelection;

let compare = computerSelection.localeCompare(playerSelection);

console.log(compare);

alert("a continuación tendras que seleccionar piedra, papel, tijera");

playerSelection = prompt("¿Qúe deseas jugar?¿Cara quizás?¿Cruz tal vez?¿Papel será?");

function playRound(computerSelection, playerSelection) {

  if (compare != 0) {
    if (computerSelection == "scissors" && playerSelection == "paper") {
      return "You have lost!";
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
      return "You´ve win!";
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
      return "You have lost!";
    } else if (computerSelection == "rock" && playerSelection == "paper") {
      return "You´ve win!";
    } else if (computerSelection == "paper" && playerSelection == "rock") {
      return "You have lost!";
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
      return "You´ve win";
    }
  } else {
    return "Tie!";
  }
}

console.log(playRound(computerSelection, playerSelection));

let contadorVictorias = 0;

let contadorDerrotas = 0;

function game() {
  for (i = 0; i < 5; i++) {
    let Decision = playRound(computerSelection, playerSelection);

    if (Decision === "You have lost!") {
      contadorDerrotas++;
    } else if (Decision === "You´ve win!") {
      contadorVictorias++;
    } else {
      ("Tie! Try again");
    }

    console.log(i);
  }

  if (contadorDerrotas > contadorVictorias) {
    return "You have finally lost";
  }
}

game();

console.log(contadorDerrotas);

console.log(contadorVictorias);

*/
