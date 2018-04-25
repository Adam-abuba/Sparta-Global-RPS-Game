var pcScore = 0;

var userScore = 0;
for (var i = 0; i < 5; i++) {
alert("This is round " + (i+1) + " of 5");

var userChoice = prompt("Select your choice of(R)ock, (P)aper or (S)cissors");
//Making the Score Counter

// debugger;
//Making the Pc selcetion a string
var pcChoice = pcSelect();
var pcChoice2 = pcChoice();

var decision2 = decision(userChoice,pcChoice2);

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
      var outcome = "You win this round!"
      alert(outcome);
      userScore++;

      }


    if (choice1 == "R" && choice2 == "Paper") {
      var outcome = "You lose this round."
      alert(outcome);
      pcScore++;



    }
// You pick paper
      if (choice1 == "P" && choice2 == "Rock") {
        var outcome = "You win this round!"
        alert(outcome);
        userScore++;


    }
    if (choice1 == "P" && choice2 == "Scissors") {
      var outcome = "You lose this round."
      alert(outcome);
      pcScore++;


    }
// You pick Scissors
    if (choice1 == "S" && choice2 == "Paper") {
      var outcome = "You win this round!"
      alert(outcome);
      userScore++;


    }
      if (choice1 == "S" && choice2 == "Rock") {
      var outcome = "You lose this round."
      alert(outcome);
      pcScore++;



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



console.log("The Computer score is " + pcScore);
console.log("The user score is " + userScore);


function currentScore (){
  alert ("The current score now is " + userScore + " to you and " + pcScore + " to the computer.");
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
