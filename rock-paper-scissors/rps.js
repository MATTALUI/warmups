
$(document).ready(startup());
const winningConditions = {
  'rock': 'scissors',
  'scissors': 'paper',
  'paper' : 'rock'
};


function startup(){
  console.log('hello');
  $('#rock').on('click', attack);
  $('#paper').on('click', attack);
  $('#scissors').on('click', attack);
}


function attack(event){
  let userAttack =event.target.id
  let compAttack = computerRoll();
  // console.log(userAttack, ' vs ', compAttack);
  if (userAttack == compAttack){
    alert('tie!');
    return;
  }else if(winningConditions[userAttack] == compAttack){
    $('#yourScore').html(Number($('#yourScore').html())+1 );
    alert('You win!');
  }else{
    $('#compScore').html(Number($('#compScore').html())+1 );
    alert('comp wins... :(');
  }
}

function computerRoll(){
  let rpc = ['rock', 'paper', 'scissors'];
  let rand = Math.floor(Math.random()*3);
  return rpc[rand];
}
