// To play Rock Paper Scissors with web-interface

// Generates Computer's Hand
function computerPlay(){
  let play = "";
  let random_hand = Math.floor(Math.random()*3);
  switch (random_hand) {
    case 0 : play = "rock"; break;
    case 1 : play = "paper"; break;
    case 2 : play = "scissors"; break;
  };
  return play;
};

// Plays a Round of RPS
function playRound (playerSelection, computerSelection){
  if (playerSelection == computerSelection)
    { return "Tie. You both played: " + playerSelection }
  else if (playerSelection ==  "rock" && computerSelection == "scissors")
    { return "Congrats, you won!" }
  else if (playerSelection ==  "paper" && computerSelection == "rock")
    { return "Congrats, you won!" }
  else if (playerSelection==  "scissors" && computerSelection == "paper")
    { return "Congrats, you won!" }
  else if (playerSelection ==  "rock" && computerSelection == "paper")
    { return "Oh no, you lost." }
  else if (playerSelection ==  "paper" && computerSelection == "scissors")
    { return "Oh no, you lost." }
  else (playerSelection ==  "scissors" && computerSelection == "rock")
    { return "Oh no, you lost." }
};

// Functions for event Listeners

function rockInput(){
  result = playRound("rock", computerPlay())
  display();
  return result;
}
function paperInput(){
  result = playRound("paper", computerPlay())
  display();
  return result;
}
function scissorsInput(){
  result = playRound("scissors", computerPlay())
  display();
  return result;
}

// DOM Manipulation to display result text
function display(){
  var display = document.querySelector("#display");
  if(display.firstChild){
    display.removeChild(display.firstChild);
  };
  var resultText = document.createElement('resultText');
  resultText.classList.add('resultText');
  resultText.textContent = result;
  display.appendChild(resultText);
}

// Event Listeners
var result = "";
var rock = document.querySelector('#rock');
var paper = document.querySelector('#paper');
var scissors = document.querySelector('#scissors');

rock.addEventListener('click', rockInput);
paper.addEventListener('click', paperInput);
scissors.addEventListener('click', scissorsInput);
