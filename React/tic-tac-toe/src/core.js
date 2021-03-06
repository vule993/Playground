export function notify(dialog,textContainer,text) {
    dialog.current.style.visibility = "visible"
    dialog.current.style.opacity = 1
    textContainer.current.innerHTML = text 
}

export function unNotify(dialog, textContainer) {
    textContainer.current.innerHTML = "" 
    dialog.current.style.visibility = "hidden"
    dialog.current.style.opacity = 0
}

export function checkNames(x,y) {
    if (x && y) {
        return true
    }
    return false
}

export function checkEndGame(squares) {
    for (let s of squares) {
        if (s === null) {
            return false
        }
    }
    return true
}

export function calculateWinner(boardState) {
    //destructuring
    let {squares, player1, player2, winner, moves, winnerList} = boardState

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
            debugger;
            let winners = localStorage.getItem('winners')
            winners = (winners !== '') ? JSON.parse(winners) : []

            winner = (squares[a] === 'X') ? player1 : player2
            winners.push(player1 + " vs " + player2 + " victory for " + winner + " in " + moves + " moves")
            winnerList.push(winners[winners.length - 1])
            localStorage.setItem('winners', JSON.stringify(winners))
            return squares[a]
        }
    }

    return null
}