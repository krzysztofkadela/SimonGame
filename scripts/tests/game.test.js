
/**
 * @jest-environment jsdom
 */



const {game, newGame} = require("../game");


beforeAll(() => {
    let fs =require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
})

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
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
        game.currentGame=["buton1", "button2"];
        game.playerMove = ["button1, button2"];
        newGame();
    })
    test("score key value is set to 0", () => {
        expect(game.score).toEqual(0);
    });
    test("currentGame empty array", () => {
        expect(game.currentGame.length).toBe(0);
    });
    test("should clear playerGame array", () => {
        expect(game.playerMove.length).toBe(0);
    });
})