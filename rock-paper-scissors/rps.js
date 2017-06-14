
$(document).ready(startup());
const winningConditions = {
  'rock': 'scissors',
  'scissors': 'paper',
  'paper' : 'rock'
};


function startup(){
  $('#rock').on('click', attack);
  $('#paper').on('click', attack);
  $('#scissors').on('click', attack);
}


function attack(event){
  let userAttack =event.target.id
  let compAttack = computerRoll();
  if (userAttack == compAttack){
    $('h3')[0].innerHTML = "It was a tie!"
  }else if(winningConditions[userAttack] == compAttack){
    $('#yourScore').html(Number($('#yourScore').html())+1 );
    $('h3')[0].innerHTML = "You WIn!"
  }else{
    $('#compScore').html(Number($('#compScore').html())+1 );
    $('h3')[0].innerHTML = "Computer wins!"
  }
}

function computerRoll(){
  let rpc = ['rock', 'paper', 'scissors'];
  let rand = Math.floor(Math.random()*3);
  return rpc[rand];
}
