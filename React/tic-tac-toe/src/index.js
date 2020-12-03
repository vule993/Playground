import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import restart from './img/restart.png'
import close from './img/close.png'

function Square(props) {
    console.log('square is rendered')
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

function Board(props) {
    
    console.log('board is rendered')

    let winner = calculateWinner(
        props.boardState.squares,
        props.boardState.nameX,
        props.boardState.nameY,
        props.boardState.winner, 
        props.boardState.moves
    )

    let status

    if (checkEndGame(props.boardState.squares)) {
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

class Game extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
            winner: null,
            gameStarted: false,
            nameX: "",
            nameY: "",
            moves: 0
        }
        
        // localStorage.clear()
        
        this.handleClick = this.handleClick.bind(this)
        this.renderSquare = this.renderSquare.bind(this)
    }
    componentDidMount() {
        if (!localStorage.getItem('winners')){
            localStorage.setItem('winners', '')
        }
    }
    handleClick(i) {
        let squares = [...this.state.squares]   //ili .slice() prazni parametri znaci vraca isti niz
        if (this.state.winner) {
            return
        }

        if (!squares[i]){
            squares[i] = (this.state.xIsNext) ? 'X' : 'O'
            this.setState({xIsNext: !this.state.xIsNext})
        }

        this.setState(
            {
                squares: squares,
                moves: this.state.moves + 1
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

    restart() {
        this.setState(
            {
                squares: Array(9).fill(null),
                xIsNext: true,
                winner: null,
                gameStarted: false,
                nameX: "",
                nameY: "",
                moves: 0
            }
        )
    }

    startGame() {
        if (checkNames()) {
            let player1 = document.getElementById('x').value
            let player2 = document.getElementById('y').value
            
            this.setState(
                {
                    nameX: player1,
                    nameY: player2,
                    gameStarted: true
                }
            )
            
        }
    }

    render() {
        let winners = localStorage.getItem('winners')
        winners = (winners && winners !== '')?JSON.parse(winners):[]
        // debugger
        return (
            <div id="wrapper">
                <div id='notification'>
                    <div className='message'>
                        <div className="header">
                            <img
                                src={close}
                                onClick={() => unNotify()}
                                alt="close icon"
                            />
                        </div>
                        <div id="content">
                            <div id="text"></div>
                        </div>
                    </div>
                </div>
                <div className="game">
                    {
                        !this.state.gameStarted &&
                        <div className="playerPrompt">
                            <label>Player X</label>
                            <input id="x" placeholder="Enter player X name..."/>
                            <label>Player Y</label>
                            <input id="y" placeholder="Enter player Y name..."/>
                            <button onClick={() => this.startGame()}>Start game</button>
                        </div>
                    }
                    {
                        this.state.gameStarted  &&
                        <div className="game-board">
                        <Board boardState={this.state} onClick={this.handleClick} renderSquare={this.renderSquare} />
                        <button onClick={() => this.restart()}>
                            <img src={restart} alt="" />
                            Restart
                        </button>
                    </div>
                    }

                    <div className="game-info">
                        <div>{ /* status */ }</div>
                        <ol>{ /*TODO*/} </ol>
                    </div>
                </div>
                <ScoreBoard list={ winners }/>
                
            </div>
            
        )
    }
}

function ScoreBoard(props){

    const Winners = () => (
        <>
            {
                props.list.map((score, index) => {
                    return (
                        <div key={index}>{ score }</div>
                    )
                })
            }
        </>
    )

        
    return (
        <div id="rank">
            <h2>Winners</h2>
            <div id="winner-list">
                <Winners />
            </div>
        </div>
    )
    
    
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
)



function notify(text) {
    
    document.getElementById('notification').style.visibility = "visible"
    document.getElementById('notification').style.opacity = 1
    document.getElementById('text').innerHTML = text 
}

function unNotify() {
    document.getElementById('text').innerHTML = "" 
    document.getElementById('notification').style.visibility = "hidden"
    document.getElementById('notification').style.opacity = 0
}

function checkNames() {
    let x = document.getElementById('x').value
    let y = document.getElementById('y').value
    if (x && y) {
        return true
    }
    notify("You must type names for both players...")
    return false
}

function checkEndGame(squares) {
    
    for (let s of squares) {
        if (s === null) {
            return false
        }
    }
    return true
}

function calculateWinner(squares,player1, player2,winner, moves) {
    
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

            let winners = localStorage.getItem('winners')
            winners = (winners !== '') ? JSON.parse(winners) : []
            debugger
            winner = (squares[a] === 'X') ? player1 : player2
            winners.push(player1 + " vs " + player2 + " victory for " + winner + " in " + moves + " moves")
            localStorage.setItem('winners', JSON.stringify(winners))
            return squares[a]
            //save call
        }
    }

    return null
}
