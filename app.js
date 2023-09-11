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

function getWinSpeech() {
  let speechSelection = getRandomInt(0, 2);

  if(speechSelection === 0) {
    speechSelection = winSpeech;
  } else if(speechSelection === 1) {
    speechSelection = winSpeech2;
  } else {
    speechSelection = winSpeech3;
  };
  return speechSelection();
}

function getLoseSpeech() {
  let speechSelection = getRandomInt(0, 2);

  if(speechSelection === 0) {
    speechSelection = loseSpeech;
  } else if(speechSelection === 1) {
    speechSelection = loseSpeech2;
  } else {
    speechSelection = loseSpeech3;
  };
  return speechSelection();
}


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


function loseSpeech() {
  const lose = document.getElementById("two");

  lose.insertAdjacentHTML("afterend", `
  <p class="speech box3" id="three">
    loser!!! hahahahaha!!!
  <p>
  `);
}

function loseSpeech2() {
  const lose = document.getElementById("two");

  lose.insertAdjacentHTML("afterend", `
  <p class="speech box3" id="three">
    you'll never beat me!!! Bwahahaha!
  <p>
  `)
}


function loseSpeech3() {
  const lose = document.getElementById("two");

  lose.insertAdjacentHTML("afterend", `
  <p class="speech box3" id="three">
    is that all you got!?!?!? you lose!
  <p>
  `)
}

function winSpeech() {
  const win = document.getElementById("two");

  win.insertAdjacentHTML("afterend", `
  <p class="speech box4" id="three">
    arrrrgggghhh!!! winner!!!
  <p>
  `);
}


function winSpeech2() {
  const win = document.getElementById("two");

  win.insertAdjacentHTML("afterend", `
  <p class="speech box4" id="three">
    you win!!! grrrrr!!!
  <p>
  `);
}


function winSpeech3() {
  const win = document.getElementById("two");

  win.insertAdjacentHTML("afterend", `
  <p class="speech box4" id="three">
    noooo!! you win!!
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
    getWinSpeech();
  } else {
    incrementBoss();
    getLoseSpeech();
  };

  console.log(playerChoice, computerChoice)
}
  


