function computerPlay(){
    let random = Math.floor(Math.random() * 3)
    let choice = ['rock','paper','scissors'][random]
    
    alert(`ì choose ${choice}`)
    return choice
}

function playRound(player, computer){
 if(player == "rock"){
  switch(computer){
    case 'scissors':
      alert('rock beats scissors so you won')
      return "win"
      break
    case 'paper':
      alert('paper beats rock so i won')
      return "lose"
      break
    default:
      alert('we tie')
      return "tie"
  }
}

 else if(player == "paper"){
  switch(computer){
    case 'rock':
      alert('paper beats rock so you won')
      return "win"
      break
    case 'scissors':
      alert('scissors beats paper so i won')
      return "lose"
      break
    default:
      alert('we tie')
      return "tie"
  }
}

else if(player == "scissors"){
  switch(computer){
    case 'paper':
      alert('scissors beats paper so you won')
      return "win"
      break
    case 'rock':
      alert('rock beats scissors so i won')
      return "lose"
      break
    default:
      alert('we tie')
      return "tie"
  }
}

}

function round(score1, score2){
    let playerSelection = 
        prompt(`score is ${score1} X ${score2} 
    do you choose rock, paper, or scissors?`).toLowerCase()

    let computerSelection = computerPlay()

    return playRound(playerSelection, computerSelection)
}

function game(){
  alert("Hello welcome to the Rock, Papers, Scissors game")
  alert("So, let's begin?")

  let player = 0
  let cpu = 0

  while(player < 5 && cpu < 5){
    let turn = round(player, cpu)
    switch(turn){
        case 'win':
            player++
            break
        case 'lose':
            cpu++
            break
        default:
            break
    }
  }

  if(player >= 5)
    alert("you win!")
  else
    alert("i win!")
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


