var dice1 = document.querySelector('.img1');
var dice2 = document.querySelector('.img2');

function randomize(element1, element2) {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  console.log(randomNumber1);
  console.log(randomNumber2);
  element1.setAttribute('src', './images/dice' + randomNumber1 + '.png');
  element2.setAttribute('src', './images/dice' + randomNumber2 + '.png');

  if (randomNumber1 > randomNumber2) {
    document.getElementById('player1').innerHTML = 'PLAYER 1 WINS!';
    document.getElementById('player2').innerHTML = 'PLAYER 2 LOSES!';
  } else if (randomNumber2 > randomNumber1) {
    document.getElementById('player2').innerHTML = 'PLAYER 2 WINS!';
    document.getElementById('player1').innerHTML = 'PLAYER 1 LOSES!';
  } else {
    document.getElementById('player1').innerHTML = 'DRAW!';
    document.getElementById('player2').innerHTML = 'DRAW!';
  }
}


