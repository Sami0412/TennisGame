class Tennis {

    constructor(playerOneName, playerTwoName) {

        this.scoring = {
            0 : "Love",
            1 : "Fifteen",
            2 : "Thirty",
            3 : "Forty"
        }

        this.playerOne = {
            name : playerOneName,
            score : 0
        }

        this.playerTwo = {
            name : playerTwoName,
            score : 0
        }

    }

    score(player) {
         this[player].score++
    }

    getScore(player) {
        const score = this[player].score
        return this.scoring[score]
    }

    getGameScore() {

        const result = this.hasAPlayerWon()
        if(!result) {
            const playerOneScore = this.getScore("playerOne")
            const playerTwoScore = this.getScore("playerTwo")
            const finalScore = `${playerOneScore} ${playerTwoScore}`
            if(finalScore === "Forty Forty") {
                return "Deuce"
            } else {
                return finalScore
            }
        } else return result;
            
    }

    hasAPlayerWon() {
        const playerOneNumberScore = this.playerOne.score
        const playerTwoNumberScore = this.playerTwo.score

        // A game is won by the first player to have won at
        //least four points in total and at least two points
        //more than the opponent.

        //If one score is >4, the other score must be >2 points less
        if(playerOneNumberScore >= 4) {
            if(playerOneNumberScore - playerTwoNumberScore >= 2) {
                return "Player One has won the game"
            }
        }
        if (playerTwoNumberScore >= 4) {
            if(playerTwoNumberScore - playerOneNumberScore >= 2) {
                return "Player Two has won the game"
            }
        }
    
    }
}
  
  
  module.exports = Tennis;