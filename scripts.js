// Declare an array of words 
let words = ['cat', 'two', 'map', 'trap', 'flew', 'back', 'then', 'went', 'route', 'primed', 'climbed'];


// Declare Score and Level Variables
let scoreSpan = document.querySelector('#score');
let score = 0;
scoreSpan.innerHTML = score;

let levelSpan = document.querySelector('#level');
let level = 1;
levelSpan.innerHTML = level;

// Declare button and input variables
let input = document.querySelector('#wordInput');
let startBtn = document.querySelector('#start');
let display = document.querySelector('#words');


// Function initated when user clicks to start
function startGame() {
  display.innerHTML = '';
  
  // Make sure that the score is set to zero
  scoreSpan.innerHTML = score;
  
  // Set position of timer
  pos = 0;
  timerSpan.style.left = pos + '%';
  
  let count = 4;
  let counter = setInterval(timer, 1000);
  
  function timer() {
    count = count - 1;
    display.innerHTML = count;
    if (count <= 0) {
      clearInterval(counter);
      playGame();
    }
    return;
  }
  
}

// Play the Game
function playGame() {
  let playing = true;
  
    if (playing) {
      let restart = document.querySelector('#restart');
      let end = document.querySelector('#end');
      
      // Start game timer
      gameDuration();
      
      display.innerHTML = words[0];
      submitWord();
      if (restart === 'clicked') {
          restartGame();
      }
      if (end === 'clicked') {
        endGame();
      }
    } else {
      display.innerHTML = 'Ready?';
      return;
    }
  return; 
}

// Restart the Game 
function restartGame() {
  score = 0;
  scoreSpan.innerHTML = score;
  
  // Reset Timer
  pos = 0;
  timerSpan.style.left = pos + '%'
  
  startGame();
  return score;
}

// End the Game 
function endGame() {
  playing = false;
  display.innerHTML = 'Game Over!';
  
  if (score <= 20) {
    alert('Better luck next time! Your score is ' + score + ' points.');
  } else if (score <= 40) {
    alert('Awesome job. Your getting there! You scored ' + score + ' points this round.');
  } else if (score > 50 || score <= 80) {
    alert('At this rate, you will be typing novels a minute with a score of ' + score + ' points. Bravo!');
  } else {
    return;
  }
  score = 0;
  answer.value = '';
  console.log('The game has ended. Playing set to: ' + playing);
}

// Game Duration Progress Bar / Span Transform and Color Change
let timerSpan = document.querySelector("#progressBar");
let pos = 0;

function gameDuration() {
  let id = setInterval(frame, 10);
  function frame() {
    if (pos === 100) {
      clearInterval(id);
      pos = 0;
      endGame();
    } else {
      pos++; 
      timerSpan.style.left = pos + '%';
      return pos;
    }
  }
}


// Submit the input value and check if word matches the array's iteration
function submitWord() {
  let answer = input;
  
  input.addEventListener('keyup', function() {
    event.preventDefault;
    for (i = 0; i <= words.length; i++) {
      if (answer.value === words[i]) {
        pos = 0;
        words[i++];
        score += 10;
        scoreSpan.innerHTML = score; 
        display.innerHTML = words[i];
        answer.value = '';
        console.log('true');
        return score;
      } else {
        console.log('false');
      }
    }
    return answer;
  })
  return answer;
}