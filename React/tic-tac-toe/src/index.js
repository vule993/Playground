import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// class Square extends React.Component{
    
//     render() {
//         return (
//             <button
//                 className="square"
//                 onClick={() => this.props.onClick()}
//             >
//                 {this.props.value}
//             </button>
//         )
//     }
// }

function Square(props) {
    return (
        <button
            className="square"
            onClick={props.naKlik}  //kada se dogodi klik na dugme poziva se roditeljska metoda prosledjena u 
                                    //renderSquare(i) sa parametrom i koji predstavlja index u matrici
                                    //na osnovu cega dolazi do setovanja nove vrednosti x ili o na kliknuto polje
        >
            {props.value}
        </button>
    )
}

class Board extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
            winner: null
        }
    }

    handleClick(i) {
        let squares = [...this.state.squares]   //ili .slice() prazni parametri znaci vraca isti niz
        if (calculateWinner(squares))
            return
        console.log('usao')
        if (!squares[i]){
            squares[i] = (this.state.xIsNext) ? 'X' : 'O'
            this.setState({xIsNext: !this.state.xIsNext})
        }

        this.setState(
            {
                squares: squares
            }
        )
        
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]} 
                naKlik={() => this.handleClick(i)}
            />
        )
    }
    render() {
        let winner = calculateWinner(this.state.squares)

        let status
        if (winner) {
            status = "Winner is: " + winner
        } else {
            status = "Next player: " + ((this.state.xIsNext)?'X':'O')
        }
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

class Game extends React.Component{
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{ /* status */ }</div>
                    <ol>{ /*TODO*/} </ol>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
)

function calculateWinner(squares) {
    
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    for (let i = 0; i < lines.length; i++){
        let [a, b, c] = lines[i]
        
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }

    return null
}
