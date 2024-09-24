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
    for (let circle of document.getElementsByClassName("circle")) {
        if (circle.getAttribute("data-listener") !== "true"){
            circle.addEventListener("click", (e) => {
                let move = e.target.getAttribute("id");
                lightOn(move);
                GainNode.playerMove.push(move);
                playerTurn();
            });
            circle.setAttribute("data-listener", "true");
        }
    }
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

function playerTurn(){
    let i = game.playerMove.length - 1;
    if (game.currentGame[i]=== game.playerMove[i]) {
        if (game.currentGame.length == game.playerMove.length) {
            game.score++;
            addTurn;
        }
    }
}

module.exports = {game, newGame, showsScore, addTurn, lightOn, showTurn, playerTurn};