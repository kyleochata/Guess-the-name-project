const showWord = (words) =>{
    var wordDisplay = document.createElement('h1');
    wordDisplay.textContent = words;
    title.classList.add('word');
}

const button = (text) =>{
    var button = document.createElement('button');
    button.textContent = text;
    title.classList.add('button');
    button.addEventListener('click', buttonPress);

}

function buttonPress () {
    //starts game or resets page
}


const timer = () =>{
    var time = document.querySelector(".time");
    var secondsLeft = 0;
    time.textContent = " Time: " + secondsLeft;
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