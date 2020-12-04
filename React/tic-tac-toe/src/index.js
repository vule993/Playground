//def
import React from 'react'
import ReactDOM from 'react-dom'
//css
import './index.css'
//img
import restart from './img/restart.png'
import close from './img/close.png'
//mod
import Board from './components/Board/board'
import Square from './components/Square/square'
import ScoreBoard from './components/ScoreBoard/scoreBoard'
import { checkNames, unNotify } from './core'

class Game extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
            winner: null,
            gameStarted: false,
            player1: "",
            player2: "",
            moves: 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.renderSquare = this.renderSquare.bind(this)

        this.player1Input = React.createRef()
        this.player2Input = React.createRef()
    }

    componentDidMount() {
        if (!localStorage.getItem('winners')){
            localStorage.setItem('winners', '')
        }
    }

    handleClick(i) {
        let squares = [...this.state.squares]   //ili .slice() prazni parametri znaci vraca kopiju celog niza
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
                onClick={() => this.handleClick(i)}
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
                player1: "",
                player2: "",
                moves: 0
            }
        )
    }

    startGame() {
        if (checkNames()) {
            let player1 = this.player1Input.current
            let player2 = this.player2Input.current
            
            this.setState(
                {
                    player1: player1,
                    player2: player2,
                    gameStarted: true
                }
            )
            
        }
    }

    render() {
        let winners = localStorage.getItem('winners')
        winners = (winners && winners !== '')?JSON.parse(winners):[]
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
                            <input id="x" ref={this.player1Input} placeholder="Enter player X name..."/>
                            <label>Player Y</label>
                            <input id="y" ref={this.player2Input} placeholder="Enter player Y name..."/>
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
                </div>
                <ScoreBoard list={ winners }/>
                
            </div>
            
        )
    }
}



ReactDOM.render(
    <Game />,
    document.getElementById('root')
)

