'use strict'
let randomDice ;
const btnRollDice = document.querySelector('.roll-dice');
const btnNewGame = document.querySelector('.new-game')
const diceImage = document.querySelector('.dice-img');
const player1 = document.querySelector('.player-1');
const player2 = document.querySelector('.player-2');
const activePlayer= document.querySelector('.active-player') ; 
let activePlayerScore= document.querySelector('.active-player .current-score');
const activePlayerTotalScore =document.querySelector('.active-player totalscore');
const btnHold = document.querySelector('.hold')
const playersTotalScore = document.querySelectorAll(".totalscore");
const playersCurrentScore= document.querySelectorAll(".current-score");


let active = 0;
let currentscore = 0;
let totalScores = [0,0];

let max ; 



const rollDice  = function () {
   randomDice =  Math.trunc(Math.random()*6+1);
diceImage.innerHTML = ` <img src="images/dice_imgs/dice-${randomDice}.png" alt="" >`

if(randomDice === 1){
    activePlayerScore.textContent = '0';
player1.classList.toggle('active-player')
player2.classList.toggle('active-player')
active = active == 0? 1: 0;

currentscore = 0;

}
else { 

activePlayerScore =  document.querySelector('.active-player .current-score');
currentscore+=randomDice;
activePlayerScore.textContent = currentscore;

}

}

const onHold = function (){
    totalScores[active] += currentscore;
    document.querySelector(`.totalscore-${active}`).textContent = totalScores[active];
    active = active == 0? 1: 0;
    currentscore = 0;
    
    max = Math.max(totalScores[0],totalScores[1]);
if(max >= 100){
    document.querySelector(`.player-${totalScores.indexOf(max)+1}`).classList.add('winner')
    btnRollDice.removeEventListener('click',rollDice);
    btnHold.removeEventListener('click',onHold);

}
else{
    activePlayerScore.textContent = '0';
    player1.classList.toggle('active-player')
    player2.classList.toggle('active-player')
   
}


}
const startNewGame = function () {
    if(!player1.classList.contains('active-player')){
        player1.classList.toggle('active-player')
        player2.classList.toggle('active-player')
    }
    player1.classList.remove('winner')
    player2.classList.remove('winner')
    btnRollDice.addEventListener('click',rollDice)
    btnHold.addEventListener('click',onHold);
    playersTotalScore[0].textContent = 0;
    playersTotalScore[1].textContent =0;
    playersCurrentScore[0].textContent = 0;
    playersCurrentScore[1].textContent = 0;

     active = 0;
currentscore = 0;
totalScores = [0,0];
}


btnRollDice.addEventListener('click',rollDice)
btnHold.addEventListener('click',onHold);
btnNewGame.addEventListener('click',startNewGame)