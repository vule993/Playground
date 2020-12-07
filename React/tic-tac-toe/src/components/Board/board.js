import React from 'react'
import './board.css'
import {calculateWinner, checkEndGame} from '../../core'

export default function Board(props) {
    let status
    let winner = calculateWinner(
        props.boardState.squares,
        props.boardState.player1,
        props.boardState.player2,
        props.boardState.winner, 
        props.boardState.moves,
        props.boardState.winnerList
    )

    if (checkEndGame(props.boardState.squares) && !winner) {
        status = "Nobody wins...:("
    }else if (winner) {
        status = "Winner is: " + winner
    } else {
        status = "Next player: " + ((props.boardState.xIsNext)?'X':'O')
    }

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {props.renderSquare(0)}
                {props.renderSquare(1)}
                {props.renderSquare(2)}
            </div>
            <div className="board-row">
                {props.renderSquare(3)}
                {props.renderSquare(4)}
                {props.renderSquare(5)}
            </div>
            <div className="board-row">
                {props.renderSquare(6)}
                {props.renderSquare(7)}
                {props.renderSquare(8)}
            </div>
        </div>
    )
        
}