//def
import React, { useState } from "react";
import ReactDOM from "react-dom";
//css
import "./index.css";
//img
import restart from "./img/restart.png";
import newGame from "./img/add.png";
import close from "./img/close.png";
//mod
import Board from "./components/Board/board";
import Square from "./components/Square/square";
import ScoreBoard from "./components/ScoreBoard/scoreBoard";
import { checkNames, unNotify, notify } from "./core";

const initState = {
  squares: Array(9).fill(null),
  xIsNext: true,
  winner: null,
  gameStarted: false,
  player1: "",
  player2: "",
  moves: 0,
  winnerList: [],
};

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = initState;
    this.handleClick = this.handleClick.bind(this);
    this.renderSquare = this.renderSquare.bind(this);

    this.player1Input = React.createRef();
    this.player2Input = React.createRef();
    this.dialog = React.createRef();
    this.textContainer = React.createRef();
  }

  componentDidMount() {
    if (!localStorage.getItem("winners")) {
      debugger
      localStorage.setItem("winners", "");
    } else {
      debugger
      let winners = localStorage.getItem("winners");
      this.setState({
        winnerList: winners && winners !== "" ? JSON.parse(winners) : [],
      });
    }
  }

  handleClick(i) {
    //desctructuring
    const { squares, xIsNext, moves, winner } = this.state
    let updateState = {}
    if (winner) {
      return;
    }

    if (!squares[i]) {
      squares[i] = xIsNext ? "X" : "O"
      updateState = {xIsNext: !xIsNext}
    }

    this.setState({
      ...updateState,
      squares: squares,
      moves: moves + 1,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  restart() {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true,
      winner: null,
      moves: 0,
    });
  }

  newGame() {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true,
      winner: null,
      gameStarted: false,
      player1: "",
      player2: "",
      moves: 0,
    });
  }

  startGame() {
    let player1 = this.player1Input.current.value;
    let player2 = this.player2Input.current.value;

    if (!checkNames(player1, player2)) {
      notify(
        this.dialog,
        this.textContainer,
        "You must type names for both players..."
      );
      return;
    }

    this.setState({
      player1: player1,
      player2: player2,
      gameStarted: true,
    });
  }

  render() {
    const {gameStarted, winnerList} = this.state
    return (
      <div id="wrapper">
        <div id="notification" ref={this.dialog}>
          <div className="message">
            <div className="header">
              <img
                src={close}
                onClick={() => unNotify(this.dialog, this.textContainer)}
                alt="close icon"
              />
            </div>
            <div id="content">
              <div id="text" ref={this.textContainer}></div>
            </div>
          </div>
        </div>
        <div className="game">
          {!gameStarted && (
            <div className="playerPrompt">
              <label>Player X</label>
              <input
                ref={this.player1Input}
                placeholder="Enter player X name..."
              />
              <label>Player Y</label>
              <input
                ref={this.player2Input}
                placeholder="Enter player Y name..."
              />
              <button onClick={this.startGame}>Start game</button>
            </div>
          )}
          {gameStarted && (
            <div className="game-board">
              <Board
                boardState={this.state}
                onClick={this.handleClick}
                renderSquare={this.renderSquare}
              />
              <button onClick={() => this.restart()}>
                <img src={restart} alt="" />
                Restart
              </button>
              <button onClick={() => this.newGame()}>
                <img src={newGame} alt="" />
                New Game
              </button>
            </div>
          )}
        </div>
        <ScoreBoard list={winnerList} />
      </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));
