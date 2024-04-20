'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0el = document.querySelector('#score--0');
const score1el = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

///game initial stage function
// starting point of our game
score0el.textContent = '0';
score1el.textContent = '0';
diceEl.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;
const score = [0, 0];
let playing = true;
//switch player function
const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = '0';
  activePlayer = activePlayer == 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
// rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1.generating a random dice btnRoll
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    // 2.display dice
    diceEl.src = `dice-${dice}.png`;
    // 3.than we check for 1 if it is than switch to player 1
    if (dice !== 1) {
      //if dice is 1
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switching of player
      switchPlayer();
    }
  } else {
  }
});
//whenever player hold the current score
//switching player function
btnHold.addEventListener('click', function () {
  if (playing) {
    //add current score of active player to score
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    //check if score is already hundred
    if (score[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      playing = false;
      document.querySelector(`#current--${activePlayer}`).textContent = 0;
      document.querySelector(`#name--${activePlayer}`).textContent = `Player ${
        activePlayer + 1
      } Win`;
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
    //  if 100 than current player is win
    //else switch the player
  } else {
  }
});
//button new game functionality
btnNew.addEventListener('click', function () {
  playing = true;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  document.querySelector(`#name--${activePlayer}`).textContent = `Player ${
    activePlayer + 1
  }`;
  score[0] = 0;
  score[1] = 0;
  currentScore = 0;
  score0el.textContent = 0;
  score1el.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  activePlayer = 0;
  diceEl.classList.add('hidden');
});
