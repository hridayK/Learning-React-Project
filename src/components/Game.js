import React from "react";
import Board from "./Board";
import './Game.css'

class Game extends React.Component{
    
    render(){
        return(
            <div className="game">
                <div className="board">
                    <Board />
                </div>
                <div className="game-over">
                    <button id="restart-game">Restart</button>
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }

}

export default Game;