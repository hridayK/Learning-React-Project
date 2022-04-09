import React from "react";
import Square from "./Square";
import './Board.css'

class Board extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            squares: Array(9).fill(null),
            XisNext:true
        };
    }

    handleClick(i){
        const squares = this.state.squares.slice();
        squares[i] = this.state.XisNext? 'X' : 'O';
        this.setState({squares: squares, XisNext: !this.state.XisNext});
        const clickedButton = document.getElementById(i);
        clickedButton.disabled = true;
        const winner = calculateWinner(squares);
        if(winner){
            for(let i=0;i<squares.length;i++){
                document.getElementById(i).disabled = true;
            }
            document.getElementById('restart-game').style.visibility = 'visible';
            document.getElementById('restart-game').addEventListener('click', () => {this.restart();});
        }
    }

    renderSquare(i){
        return <Square identity={i} onClick={() => this.handleClick(i)} value={this.state.squares[i]}/>
    }

    restart(){
        window.location.reload();
    }

    render(){

        const winner = calculateWinner(this.state.squares);
        let status;
        if(winner){
            status = "Winner: " + winner;
        }else{
            status = "Next player: " + (this.state.XisNext? 'X' : 'O');
        }

        return(
            <div>
                <div className="status" id="match-status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

function calculateWinner(squares){
    const lines = [[0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [2,5,8],
                [0,4,8],
                [2,4,6]];

    for(let i = 0; i < lines.length; i++){
        const [a,b,c] = lines[i];
        if(squares[a] == squares[b] && squares[a] == squares[c] && squares[a] != null){
            return squares[a];
        }
    }
    return null;
}

export default Board;