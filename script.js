function computerPlay(){
  let random = Math.floor(Math.random() * 3)
  return ['rock','paper','scissors'][random]
}

function playRound(player, computer){
 if(player == "rock"){
  switch(computer){
    case 'scissors':
      return "win"
      break
    case 'paper':
      return "lose"
      break
    default:
      return "tie"
  }
}

 else if(player == "paper"){
  switch(computer){
    case 'rock':
      return "win"
      break
    case 'scissors':
      return "lose"
      break
    default:
      return "tie"
  }
}

else if(player == "scissors"){
  switch(computer){
    case 'paper':
      return "win"
      break
    case 'rock':
      return "lose"
      break
    default:
      return "tie"
  }
}

}

function game(){
let playerScore = 0
let computerScore = 0

let playerSelection = f =>
  prompt('rock, paper, or scissors?').toLowerCase()

let turn = function(){
  let play = playRound(playerSelection(), computerPlay())
  switch(play){
    case 'win':
      return 'you win'
      break
    case 'lose':
      return 'you lose'
      break
    default:
      return "it's a tie"
      break
  }
}

alert(turn())
}

function computeResult(result){
    switch(result){
    case 'win':
      return 'you win'
      break
    case 'lose':
      return 'you lose'
      break
    default:
      return "it's a tie"
      break
  }
}

let rock = document.querySelector('#rock')
let paper = document.querySelector('#paper')
let scissors = document.querySelector('#scissors')

let cpuChoice = document.querySelector('#cpu')

let wins = document.querySelector('#wins span')
let loses = document.querySelector('#loses span')

function play(choice){
  let pc = computerPlay()
  switch(pc){
    case 'rock':
      cpuChoice.src = "https://img.icons8.com/ios/50/000000/hand-rock.png"
      break
    case 'paper':
      cpuChoice.src = "https://img.icons8.com/ios/50/000000/hand.png"
      break
    case 'scissors':
      cpuChoice.src = "https://img.icons8.com/ios/50/000000/hand-scissors.png"
  }  
  let result = playRound(choice, pc)
  if(result == 'win'){
    wins.innerHTML++
  }
  else if(result == 'lose'){
    loses.innerHTML++
  }
  else{
  }
}

rock.onclick      = f => play('rock')
paper.onclick     = f => play('paper')
scissors.onclick  = f => play('scissors')
