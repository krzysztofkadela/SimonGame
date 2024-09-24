let game = {
    score: 0,
    currentGame: [],
    playerMove: [],
    choices: ["button1", "button2", "button3", "button4"],
}

function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMove = [];
}

module.exports = {game, newGame};