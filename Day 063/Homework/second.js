function calculateScore(player) {
    const strength = player[0];     // ძალა
    const speed = player[1];        // სისწრაფე
    const intelligence = player[2]; // ინტელექტი

    // ქულების გამოთვლა
    const strengthPoints = strength * 1; // ძალა = 1 ქულა თითოეულზე
    const speedPoints = speed * 2;       // სისწრაფე = 2 ქულა თითოეულზე
    const intelligencePoints = (intelligence * (strength + speed)) / 10;

    return strengthPoints + speedPoints + intelligencePoints;
}

function determineWinner(player1, player2) {
    const player1Score = calculateScore(player1);
    const player2Score = calculateScore(player2);

    console.log("Player 1 Score: " + player1Score.toFixed(2));
    console.log("Player 2 Score: " + player2Score.toFixed(2));

    if (player1Score > player2Score) {
        return "Player 1 Wins!";
    } else if (player2Score > player1Score) {
        return "Player 2 Wins!";
    } else {
        return "It's a Draw!";
    }
}