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
