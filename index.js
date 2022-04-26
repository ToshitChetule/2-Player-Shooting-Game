let round = 1;

let player1 = 100;
let player2 = 100;

let player1Point = 0;
let player2Point = 0;

// document.getElementById('demo1').innerHTML = player1;
// document.getElementById('demo2').innerHTML = player2;

function random() {

  var random1 = (document.getElementById("para1").innerHTML = Math.trunc(
    Math.random() * 6
  ));
  var random2 = (document.getElementById("para2").innerHTML = Math.trunc(
    Math.random() * 6
  ));

  if (player1 - random2 <= 0) {
    player1 = 0;

    player2Point = player2Point + 1;
    document.getElementById('player2Point').innerText = player2Point;
    document.getElementById('player1status').innerText = "Lost";
    document.getElementById('player2status').innerText = "Won";
    document.getElementById('heading2').innerText = "Player 2 won this round.";
  



    if(player2Point > 2){
      document.getElementById('shootBtn').setAttribute('disabled', true);
      document.getElementById('startGame').setAttribute('disabled', true);
      document.getElementById('heading2').innerText = "Player 2 won the tournament.";

    }else{
      document.getElementById('shootBtn').setAttribute('disabled', true);
      document.getElementById('startGame').removeAttribute('disabled');

    }
  } else {
    player1 = player1 - random2;
    
  }

  if (player2 - random1 <= 0) {
    player2 = 0;
    player1Point = player1Point + 1;
    document.getElementById('player1Point').innerText = player1Point;
    document.getElementById('player1status').innerText = "Won";
    document.getElementById('player2status').innerText = "Lost";
    document.getElementById('heading2').innerText = "Player 1 won this round.";


    if(player1Point > 2){
      document.getElementById('shootBtn').setAttribute('disabled', true);
      document.getElementById('startGame').setAttribute('disabled', true);
      document.getElementById('heading2').innerText = "Player 1 won the tournament.";

    }else{
      document.getElementById('shootBtn').setAttribute('disabled', true);
      document.getElementById('startGame').removeAttribute('disabled');
    }
  } else {
    player2 = player2 - random1;
  }



  document.getElementById("demo1").innerHTML = player1;
  document.getElementById("demo2").innerHTML = player2;
}
// Math.trunc(Math.random() * 6);


function startGame(){
  document.getElementById('startGame').setAttribute('disabled', true);
  ++round;
  document.getElementById("roundCount").innerHTML = round;
  player1 = 100
  player2 = 100
  document.getElementById('shootBtn').removeAttribute('disabled');
}