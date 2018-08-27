/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



//The pig game
var scores,roundScore, activePlayer,currentScore, gamePlay;

function init(){
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  currentScore = 0;
  gamePlay = true;
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('.dice').style.display = 'none';

  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');

  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  document.querySelector('.player-0-panel').classList.add('active');

}

init();

//setter
// document.querySelector('#current-' + activePlayer).textContent = dice;

// document.querySelector('#current-' + activePlayer).innerHTML = '<em>'+ dice + '</em>';
//getter

//editing style properties...


//creating event listener

//callback function - function called by another function. example the event function.
//anonyomous function - function added in the event listener directly.


document.querySelector('.btn-roll').addEventListener('click', function(){
if(gamePlay){
    //all the actions the button rolling should do.
    //generate a random number
    var dice = Math.floor(Math.random()*6)+1;
    console.log("Dice sel: "+ dice);

    //Display the result
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block';
    diceDOM.src = 'img/dice-'+ dice + '.png';


    if(dice === 1){
        //call the switch player function
        switchPlayer();
    }else {
      currentScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = currentScore;
    }
  }
});

document.querySelector('.btn-hold').addEventListener('click', function (){
if(gamePlay){
    scores[activePlayer] += currentScore;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    //check if the user exceeds 100 points
    if(scores[activePlayer] >=100){
        console.log("We have a winner. Player 1");
        document.getElementById('name-'+ activePlayer).textContent = "Winner!";
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer +'-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlay = false;
    }else {
        switchPlayer();
    }
}
});


function switchPlayer(){
    //currentscore to 0
    currentScore = 0;
    document.getElementById('current-' + activePlayer).textContent = '0';
    document.querySelector('.dice').style.display = 'none';
//change active player variable to the next player
// oldway
    // if(activePlayer === 1){
    //   activePlayer = 0;
    //     document.querySelector('.player-1-panel').classList.remove('active');
    //     document.querySelector('.player-0-panel').classList.add('active');
    //
    //   //change the background of the next player to active
    // }
    // else
    // {
    //   activePlayer = 1;
    //   document.querySelector('.player-0-panel').classList.remove('active');
    //   document.querySelector('.player-1-panel').classList.add('active');
    // }

    //toggling classes
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    //ternary operator
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

}

document.querySelector('.btn-new').addEventListener('click', init);
