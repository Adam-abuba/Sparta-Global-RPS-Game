for (var i = 0; i < 5; i++) {
alert("This is round " + (i+1) + " of 5");

var userChoice = prompt("Select your choice of(R)ock, (P)aper or (S)cissors");
//Making the Score Counter
var pcScore = createCounter();
var userScore = createCounter();

var pctotal = pcScore();
var usertotal = userScore();

//Making the Pc selcetion a string
var pcChoice = pcSelect();
var pcChoice2 = pcChoice();

var decision2 = decision(userChoice,pcChoice2);
if (decision2 == "You win this round!"){
  userScore();
} else if (decision2 == "You lose this round.") {
  pcScore();
}
currentScore();
}
pcScore();
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
      var outcome = "You win this round!"
      alert(outcome);

      // return outcome;
      

    }
    if (choice1 == "R" && choice2 == "Paper") {
      var outcome = "You lose this round."
      alert(outcome);

      // return outcome;


    }
    // You pick paper
      if (choice1 == "P" && choice2 == "Rock") {
        var outcome = "You win this round!"
        alert(outcome);

        // return outcome;

    }
    if (choice1 == "P" && choice2 == "Scissors") {
      var outcome = "You lose this round."
      alert(outcome);

      // return outcome;

    }
    // You pick Scissors
    if (choice1 == "S" && choice2 == "Paper") {
      var outcome = "You win this round!"
      alert(outcome);

      // return outcome;

    }
      if (choice1 == "S" && choice2 == "Rock") {
      var outcome = "You lose this round."
      alert(outcome);

      // return outcome;


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


console.log("The Computer score is " + pctotal);
console.log("The user score is " + usertotal);
function currentScore (){
  alert ("The current score now is " + usertotal + " to you and " + pctotal + " to the computer.");
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
