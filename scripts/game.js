let game = {
    score: 0,
    currentGame: [],
    playerMove: [],
    turnNumber: 0,
    choices: ["button1", "button2", "button3", "button4"],
}

function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMove = [];
    showsScore();
    addTurn()
}

function addTurn() {
    game.playerMove = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random() * 4))]);
    showTurn();
}

function showsScore(){
    document.getElementById("score").innerText = game.score;
}

function lightOn(circ){
     document.getElementById(circ).classList.add("light");
     setTimeout(() => {
        document.getElementById(circ).classList.remove("light");
     }, 2000);
}

function showTurn(){
    game.turnNumber = 0;
    let turns = setInterval(() => {
        lightOn(game.currentGame[game.turnNumber]);
        game.turnNumber++;
        if (game.turnNumber >= game.currentGame.length) {
            clearInterval(turns);
        }
    }, 800);
}

module.exports = {game, newGame, showsScore, addTurn, lightOn, showTurn};