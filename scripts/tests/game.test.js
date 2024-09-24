/**
 * @jest-environment jsdom
 */



const {
    game,
    newGame,
    showsScore,
    addTurn,
    lightOn,
    showTurn,
    playerTurn
} = require("../game");


beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
})

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("turnNumber key exists", () => {
        expect("turnNumber" in game).toBe(true);
    });
    test("current game key exist", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("player move exist", () => {
        expect("playerMove" in game).toBe(true);
    });
    test("choices exist", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contain correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });

})

describe("new game function works correctly", () => {
    beforeAll(() => {
        game.score = 42;
        game.currentGame = ["buton1", "button2"];
        game.playerMove = ["button1, button2"];
        document.getElementById("score").innerText = "42";
        newGame();
    })
    test("score key value is set to 0", () => {
        expect(game.score).toEqual(0);
    });

    test("should be move in the computer's game array", () => {
        expect(game.currentGame.length).toBe(1);
    })
    //test("currentGame empty array", () => {
    //    expect(game.currentGame.length).toBe(0);
    //});
    test("should clear playerGame array", () => {
        expect(game.playerMove.length).toBe(0);
    });
    test("should set score in DOM to 0", () => {
        expect(document.getElementById("score").innerText).toBe(0);
    });
    test("expect data-listener to be true", () => {
        const elements = document.getElementsByClassName("circle");
        for (let element of elements) {
            expect(element.getAttribute("data-listener")).toEqual("true");

        }
    })
})

describe("gameplay works correctly", () => {
    beforeEach(() => {
        game.score = 0;
        game.currentGame = [];
        game.playerMove = [];
        addTurn();
    });
    afterEach(() => {
        game.score = 0;
        game.currentGame = [];
        game.playerMove = [];
    });
    test("addTurn adds a new turn to the game", () => {
        addTurn();
        expect(game.currentGame.length).toEqual(2);
    });
    test("should add correct to light up the buttons", () => {
        let button = document.getElementById(game.currentGame[0]);
        lightOn(game.currentGame[0]);
        expect(button.classList).toContain("light");
    });
    test("showTurn should update game.turnNumber", () => {
        game.turNumber = 43;
        showTurn();
        expect(game.turnNumber).toBe(0);

    })
    test("should increments a score if the turn iscorrect", () => {
        game.playerMove.push(game.currentGame[0]);
        playerTurn();
        expect(game.score).toBe(1);
    })
});