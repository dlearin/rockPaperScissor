let randomNumber;

function getComputerChoice(){

randomNumber = Math.floor(Math.random()*(3-1+1)+0);

switch(randomNumber){
    case 0:
    return "rock";
    break;

    case 1:
    return "paper";
    break;

    case 2:
    return "scissors"
    break;
}

}

console.log(getComputerChoice());

const computerSelection = getComputerChoice();

console.log(computerSelection);

let playerSelection;


let compare = computerSelection.localeCompare(playerSelection);

console.log(compare);


function playRound(computerSelection,playerSelection){

    playerSelection = prompt("Please enter your selection");

    if (compare != 0){

        if (computerSelection == "scissors" && playerSelection == "paper"){

            return "You have lost!"


        } else if (computerSelection == "scissors" && playerSelection == "rock") {

            return "You´ve win!"

        }else if (computerSelection == "rock" && playerSelection == "scissors"){

            return "You have lost!"


        }else if (computerSelection == "rock" && playerSelection == "paper"){

            return "You´ve win!"


        }else if (computerSelection == "paper" && playerSelection == "rock"){

            return "You have lost!"

        }else if (computerSelection == "paper" && playerSelection == "scissors"){

            return "You´ve win"

        }
        

    } else {return "Tie!";}

    

}

console.log(playRound(computerSelection,playerSelection))


let contadorVictorias = 0;

let contadorDerrotas = 0;

function game(){ 


    for (i = 0; i<5; i++){

        let Decision = playRound(computerSelection,playerSelection);

        if ( Decision === "You have lost!"){

            
            contadorDerrotas ++;

        }else if ( Decision === "You´ve win!"){

            contadorVictorias ++;

        } else {

            "Tie! Try again"
        }

        console.log(i);

    }

    if (contadorDerrotas > contadorVictorias){

        return "You have finally lost";

    }

}

game();

console.log(contadorDerrotas);

console.log(contadorVictorias);


