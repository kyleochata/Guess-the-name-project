const showWord = (words) =>{
    var wordDisplay = document.createElement('h1');
    wordDisplay.textContent = words;
    title.classList.add('word');
    mainEl.appendChild;
}

const button = (text) =>{
    var button = document.createElement('button');
    button.textContent = text;
    title.classList.add('button');
    button.addEventListener('click', buttonPress);
    mainEl.appendChild;

}

function buttonPress () {
    //starts game or resets page
}

var secondsLeft = 120;

const timer = () =>{
    var time = document.createElement("h2");
    time.textContent = " Time: " + secondsLeft;
    title.classList.add('time');
    mainEl.appendChild;
}
/*

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

*/