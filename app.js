window.onload = () => {
  localStorage.clear();
};

const button = document.getElementById("btn").addEventListener("click",() => {
  document.getElementById("intro").style.display = "none"
  document.getElementById("game").style.display = "flex"
  

  setTimeout(() => {
    getPlayerSelection();
  })
  
  
});





function getComputerSelection() {
  let computerSelection = getRandomInt(0, 2);
   if(computerSelection === 0) {
     computerSelection = 'rock';
   } else if(computerSelection === 1) {
     computerSelection = 'paper';
   } else {
     computerSelection = 'scissor';
   };
   return computerSelection;
 };


 function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); 
};

function getPlayerSelection(choice) {
  
  let rock = document.getElementById('rock-button').addEventListener("click",() => {
    choice = 'rock';
    play(choice, getComputerSelection());
  });
  const paper = document.getElementById('paper-button').addEventListener("click",() => {
    choice = 'paper';
    play(choice, getComputerSelection());
  });
  const scissor = document.getElementById('scissor-button').addEventListener("click",() => {
    choice = 'scissor';
    play(choice, getComputerSelection());
  });
};

function incrementBoss() {
  let bossScore = +(localStorage.getItem("boss-score") || 0);
  bossScore += 1;
  localStorage.setItem("boss-score", bossScore);
  document.getElementById('boss-score').innerHTML = bossScore;
};

function incrementPlayer() {
  let playerScore = +(localStorage.getItem("player-score") || 0);
  playerScore += 1;
  localStorage.setItem("player-score", playerScore);
  document.getElementById('player-score').innerHTML = playerScore;
}

function tieSpeech() {
  const tie = document.getElementById("two");
  tie.insertAdjacentHTML("afterend", `
  <p class="speech box3" id="three">
    tie! play again!
  <p>
  `);
}


function loseSpeech(player,computer) {
  const lose = document.getElementById("two");

  lose.insertAdjacentHTML("afterend", `
  <p class="speech box3" id="three">
    i chose ${computer} and you chose ${player}...loser!!!
  <p>
  `);
}






function winSpeech(player,computer) {
  const win = document.getElementById("two");

  win.insertAdjacentHTML("afterend", `
  <p class="speech box4" id="three">
    i chose ${computer} and you chose ${player}...you win!!!
    ARRRRRRG!!!! 
  <p>
  `);
}


function play(playerChoice ,computerChoice) {

  const outcomes = {
    rock: { win: 'scissor', lose: 'paper' },
    paper: { win: 'rock', lose: 'scissor' },
    scissor: { win: 'paper', lose: 'rock' }
  };

  if(localStorage.getItem("boss-score") >= 5) {
    localStorage.setItem("boss-score", -1)
  } else if (localStorage.getItem("player-score") >= 5) {
    localStorage.setItem("player-score", -1)
  };
  
  if (playerChoice === computerChoice) {
    tieSpeech();
  } else if (outcomes[playerChoice].win === computerChoice) {
    incrementPlayer();
    winSpeech(playerChoice, computerChoice);
  } else {
    incrementBoss();
    loseSpeech(playerChoice, computerChoice)
  };

  console.log(playerChoice, computerChoice)
}
  


