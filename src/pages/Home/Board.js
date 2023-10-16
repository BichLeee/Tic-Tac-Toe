import Square from "./Square";
import "./styles.css"

function Board({ squares, xIsNext, onPlay }) {

    console.log(squares)

    const handleSquareClick = (index) => {
        if (calculateWinner(squares) || squares[index])
            return
        const nextSquares = squares.slice();
        nextSquares[index] = (xIsNext ? "X" : "O");
        let newMove = new Object({
            x: Math.floor(index / 3),
            y: index - Math.floor(index / 3) * 3
        })

        onPlay(newMove, nextSquares)
    }

    const result = calculateWinner(squares);
    let status, winner, row;
    if (result) {
        [winner, row] = [result.winner, result.row]
        status = 'Winner: ' + winner;

    } else {
        //check if draw
        if (!squares.includes(null)) {
            status = "It's a Draw !"
        } else {
            status = 'Next player: ' + (xIsNext ? 'X' : 'O');

        }
    }

    return (
        <div>
            <div className="height-50"
            style={{fontSize:"17px", fontWeight: '500'}}>{status}</div>
            <div>
                {Array.from({ length: 3 }, (_, i) => (
                    <div className="board-row">
                        {Array.from({ length: 3 }, (_, j) => (
                            <Square
                                key={3 * i + j}
                                value={squares[3 * i + j]}
                                onSquareClick={() => handleSquareClick(3 * i + j)}
                                isHighLight={isIncluded((3 * i + j), row)}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

function isIncluded(index, row) {
    if (row && row.includes(index)) {
        return true
    }
    return false
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return { winner: squares[a], row: lines[i] };
        }
    }
    return null;
}

export default Board;