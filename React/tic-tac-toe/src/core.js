export function notify(text) {
    
    document.getElementById('notification').style.visibility = "visible"
    document.getElementById('notification').style.opacity = 1
    document.getElementById('text').innerHTML = text 
}

export function unNotify() {
    document.getElementById('text').innerHTML = "" 
    document.getElementById('notification').style.visibility = "hidden"
    document.getElementById('notification').style.opacity = 0
}

export function checkNames() {
    let x = document.getElementById('x').value
    let y = document.getElementById('y').value
    if (x && y) {
        return true
    }
    notify("You must type names for both players...")
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

export function calculateWinner(squares,player1, player2,winner, moves) {
    
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
            winner = (squares[a] === 'X') ? player1 : player2
            winners.push(player1 + " vs " + player2 + " victory for " + winner + " in " + moves + " moves")
            localStorage.setItem('winners', JSON.stringify(winners))
            return squares[a]
        }
    }

    return null
}