let highScore = 30;
let currentScore = 20;

    if (currentScore > highScore) {
        console.log("Congratulations!!! your new high score is " + currentScore);
    } else {
        console.log("Try Again. you just need " + (highScore - currentScore + 1) + " to win");
    }