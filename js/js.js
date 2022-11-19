// Initialing General variables

const btn = document.querySelectorAll("button");
let playerSelection;







//function addlistener to buttons

btn.forEach((button) =>{
    button.addEventListener("click", ()=>{
       playerSelection = button.id;
       alert(playerSelection);
    })
})
