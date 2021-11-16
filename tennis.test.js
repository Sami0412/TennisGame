const Tennis = require("./tennis");

describe("tennis scoring", () => {

  test("score is 0 0 when a game of tennis starts", () => {

    let game = new Tennis();
    let expected = 0;

    expect(game.playerOne.score).toBe(expected);

    expect(game.playerTwo.score).toBe(expected);

  });

  test("A player's score is love when a game of tennis starts", () => {

    let game = new Tennis();
    let expected = "Love";

    expect(game.getScore("playerOne")).toBe(expected);

    expect(game.getScore("playerTwo")).toBe(expected);

  });


  test("player 1 scores", () => {

    // ARRANGE
    let game = new Tennis();
    let expected = 1;
    // ACT
    game.score("playerOne");
    let actual = game.playerOne.score;
    // ASSERT
    expect(actual).toBe(expected);
  });

  test("player 1 and player 2 score 2 points each", () => {

    // ARRANGE
    let game = new Tennis();
    let expected = "Thirty";
    // ACT
    game.score("playerOne");
    game.score("playerOne");
    game.score("playerTwo");
    game.score("playerTwo");

    // ASSERT
    expect(game.getScore("playerOne")).toBe(expected);
    expect(game.getScore("playerTwo")).toBe(expected);
  });

  test("player 1 and player 2 score 2 points each and game score is thirty thirty", () => {

    // ARRANGE
    let game = new Tennis();
    let expected = "Thirty Thirty";

    game.score("playerOne");
    game.score("playerOne");
    game.score("playerTwo");
    game.score("playerTwo");

    expect(game.getGameScore()).toBe(expected);
  });

  test("both players have 4 points, game score should be Deuce", () => {

    let game = new Tennis();
    let expected = "Deuce";

    for (let i = 1; i < 4; i++) {
      game.score("playerOne");
      game.score("playerTwo");
    }

    expect(game.getGameScore()).toBe(expected);
  });

  test("player 2 has 4 points and player 1 has 2 points, player 2 wins", () => {

    let game = new Tennis();
    let expected = "Player Two has won the game";

    game.score("playerOne");
    game.score("playerOne");

    for (let i = 1; i < 5; i++) {
      game.score("playerTwo");
    }

    expect(game.getGameScore()).toBe(expected);
  });

});