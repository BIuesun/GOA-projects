function rockyrocky(player1, player2) {
    if (player1 === player2) {
        return "Draw!"; // თუ არჩევანი ერთნაირია, ფრეა
    }

    if (
        (player1 === "rock" && player2 === "scissors") ||
        (player1 === "scissors" && player2 === "paper") ||
        (player1 === "paper" && player2 === "rock")
    ) {
        return "Player 1 Wins!";
    } else {
        return "Player 2 Wins!";
    }
}