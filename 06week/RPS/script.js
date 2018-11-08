// var p1;
// var p2;
// p1 = prompt("Player 1 choice");
// p2 = prompt("Player 2 choice");

// if ((p1 === "paper" && p2 === "rock") || (p1 === "rock" && p2 === "paper") ) 
// {
//     alert("The winner is paper");

// }
// if ((p1 === "rock" && p2 === "scissors") || (p1 === "scissors" && p2 === "rock"))
// {
//     alert("The winner is rock");
// }
// if ((p1 === "paper" && p2 === "scissors") || (p1 === "scissors" && p2 === "paper"))
// {
//     alert("The winner is scissors");
// }
// if (p1===p2)
//     alert("It is a tie");




// p1 = rock
// p2 = paper
// if (p1 === rock && p2 === paper) {
//     p2 wins;
// } else if (p1 === paper && p2 === rock){
//     p1 wins
// }

var p1;
var p2;
p1 = prompt("Player One- Rock, Paper or Scissors");
p2 = prompt("Player Two- Rock, Paper or Scissors");

function rps(p1, p2){
    if(p1 === p2){
        document.write("It's a Tie!");
    } else if(p1 === "rock" && p2 === "paper") {
        document.write("Congrats! Player Two Wins!");
    } else if(p1 === "paper" && p2 === "rock") {
        document.write("Yay!! Player One For The Win!");
    } else if(p1 === "scissors" && p2 === "paper") {
    document.write("Yay!! Player One For The Win!");
    } else if(p1 === "paper" && p2 === "scissors") {
        document.write("Congrats! Player Two Wins!");
    } else if(p1 === "scissors" && p2 === "rock") {
        document.write("Congrats! Player Two Wins!");
    } else if(p1 === "rock" && p2 === "scissors") {
        document.write("Yay!! Player One For The Win!");
    }
}

rps(p1, p2);