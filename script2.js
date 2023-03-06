var enterButton = document.getElementById("enterButton");
var againButton = document.getElementById("againButton");
var output = document.getElementById("outputText");
var msg = document.getElementById("msg");
var msg2 = document.getElementById("msg2");
var msg3 = document.getElementById("msg3")

var randomNumber = Math.ceil(Math.random() * 10);
var NoOfGuess = 0;
var GuessedNums = [];

function checkNumber() {
  var input = document.getElementById("userInput").value;
if (input < 1 || input > 10) {
    GuessedNums.push(input);
    NoOfGuess += 1;
    output.innerHTML = "Please Enter Between 1 to 10";
  } else if (input > randomNumber) {
    GuessedNums.push(input);
    NoOfGuess += 1;
    output.innerHTML = "You Guessed Too High";
    msg.innerHTML = "Count Of Guesses: " + NoOfGuess;
    msg2.innerHTML = "Input History: " + GuessedNums;
  } else if (input < randomNumber) {
    GuessedNums.push(input);
    NoOfGuess += 1;
    output.innerHTML = "You Guessed Too Low";
    msg.innerHTML = "Count Of Guesses" + NoOfGuess;
    msg2.innerHTML = "Input History: " + GuessedNums;
  } else if (isNaN(input)) {
    output.innerHTML = "Thats Not a Number";
  }
  else if (input == randomNumber) {
    GuessedNums.push(input);
    NoOfGuess += 1;
    output.innerHTML =
      "WOW!! You Guessed Right" + "," + "It Was" + randomNumber;
      msg3.innerHTML="You Guessed it in " + NoOfGuess + " Guesses";
    output.style.color = "orange";
  }
}
enterButton.addEventListener("click", checkNumber);
againButton.addEventListener("click", function () {
  location.reload();
});
