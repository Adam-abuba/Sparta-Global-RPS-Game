for (var i = 0; i < 5; i++) {
alert("This is round " + (i+1) + " of 5");

var userChoice = prompt("Select your choice of(R)ock, (P)aper or (S)cissors");
//Making the Score Counter
var pcScore = createCounter();
var userScore = createCounter();
userScore();
var pctotal = pcScore();
var usertotal = userScore();

//Making the Pc selcetion a string
var pcChoice = pcSelect();
var pcChoice2 = pcChoice();

decision(userChoice,pcChoice2);
currentScore();
}
  finalScore(usertotal,pctotal);
// ------------------------------------------------------------------
function pcSelect(){
  var pcChoice = Math.random();
    if(pcChoice <= 0.33){
      pcChoice = "Rock"
      alert("Computer selected Rock")
          return function(){
     return pcChoice;
    }
  }

    else if (pcChoice > 0.33 && pcChoice <= 0.66){
      pcChoice = "Paper"
      alert("Computer selected Paper")
          return function(){
     return pcChoice;
   }
 }
    else {
      pcChoice = "Scissors"
      alert("Computer selected Scissors")
          return function(){
     return pcChoice;
   }
}
}
  function decision(choice1, choice2){
  // You pick Rock
    if (choice1 == "R" && choice2 == "Scissors") {
      alert("You win this round!");
      return function() {
      userScore;
      }

    }
    if (choice1 == "R" && choice2 == "Paper") {
      alert("You lose this round.");
      return function () {
      pcScore;
      }

    }
    // You pick paper
      if (choice1 == "P" && choice2 == "Rock") {
      alert("You win this round!");
      return function () {
      userScore;
      }

    }
    if (choice1 == "P" && choice2 == "Scissors") {
      alert("You lose this round.");
      return function () {
      pcScore;
      }

    }
    // You pick Scissors
    if (choice1 == "S" && choice2 == "Paper") {
      alert("You win this round!");
      return function () {
      userScore;
      }

    }
      if (choice1 == "S" && choice2 == "Rock") {
      alert("You lose this round.");
      return function () {
      pcScore;  
      }

    }
    // Tie
    else if (choice1 == "R" && choice2 == "Rock") {
      alert("This round is a tie!");
    }
    else if (choice1 == "P" && choice2 == "Paper") {
      alert("This round is a tie!");
    }
    else if (choice1 == "S" && choice2 == "Scissors") {
      alert("This round is a tie!");
    }
}
  function createCounter(){
    var total = 0;

    return function(){
      total++
      return total;
    }
  }


console.log(pctotal);
function currentScore (){
  alert ("The current now is " + usertotal + " to you and " + pctotal + " to the computer.");
}

 function finalScore (usertotal,pctotal){
  if (usertotal == pctotal){
    alert("The game ends in a tie at " + usertotal + " to you and " + pctotal + " to the computer!");
  }
  else if (usertotal > pctotal) {
    alert("You win the game, with the score of " + usertotal + " to " + pctotal);
  }
  else {
    alert("You lose the game, with a score of " + usertotal + " to " + pctotal)
  }
}
