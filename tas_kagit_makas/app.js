const computerChoiseDisplay = document.getElementBlyId("computer-choise");
const userChoiseDisplay = document.getElementBlyId("user-choise");
const resultDisplay = document.getElementBlyId("result-choise");

const possibleChoices = document.querySelectorAll("button");

let userChoice
let computerChoice

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e)=>{
    userChoice = e.target.id;
    userChoiseDisplay.innetHTML = userChoice;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    if(randomNumber === 1){
        computerChoice = "tas";
    }
    if(randomNumber === 2){
        computerChoice = "kagit";
    }
    if(randomNumber === 3){
        computerChoice = "makas";
    }
    computerChoiseDisplay.innerHTML = computerChoice;
}

function getResult(){
    if(computerChoice === userChoice){
        result = "Berabere!";
    }
    if(computerChoice === "tas" && userChoice === "makas"){
        result = "Maalesef... Kaybettiniz.";
    }
    if(computerChoice === "tas" && userChoice === "kagit"){
        result = "Tebrikler... Kazandız.";
    }
    if(computerChoice === "kagit" && userChoice === "makas"){
        result = "Tebrikler... Kazandız.";
    }
    if(computerChoice === "kagit" && userChoice === "tas"){
        result = "Maalesef... Kaybettiniz.";
    }
    if(computerChoice === "makas" && userChoice === "kagit"){
        result = "Maalesef... Kaybettiniz.";
    }
    if(computerChoice === "makas" && userChoice === "tas"){
        result = "Tebrikler... Kazandız.";
    }
    
    resultDisplay.innerHTML = result;



    
}

