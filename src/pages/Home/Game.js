import Board from "./Board";
import { useState } from "react";
import { Form, Button } from 'react-bootstrap'
import "./styles.css"

function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [moves, setMoves] = useState([null])
    const [isAsc, setIsAsc] = useState(true)
    const [currentMove, setCurrentMove] = useState(0)
    const currentSquares = history[currentMove];
    const xIsNext = (currentMove % 2 === 0)


    const handlePlay = (newMove, nextSquares) => {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        const nextMoves = [...moves.slice(0, currentMove + 1), newMove]
        setMoves(nextMoves);
    }

    let moves_copy = moves.slice();
    if (!isAsc)
        moves_copy.reverse()
    const moves_history = moves_copy.map((move, index) => {
        let description;
        let sortedIdx = (isAsc) ? index : moves_copy.length - index - 1

        if (move == null) {
            description = 'Go to game start';
        } else {
            if (sortedIdx === currentMove) {
                description = `You are at move #${sortedIdx} - (${move.x},${move.y}) `;
                return (
                    <p key={index} style={{ fontWeight: 'bold' }}>
                        {description}
                    </p>
                );
            }
            description = `Go to move #${sortedIdx} - (${move.x},${move.y}) `;
        }
        return (
            <button key={index} class="history_btn" onClick={() => { jumpTo(sortedIdx) }}>
                {description}
            </button>
        );
    })

    console.log(currentMove)


    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const handleSortBtnClick = () => {
        setIsAsc(!isAsc)
    }

    return (

        <div style={{ display: 'flex' }}>
            <div>
                <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay} />
            </div>
            <div style={{ paddingInline: '30px' }}>
                <div className="height-50">
                    <Form style={{ display: 'flex', alignItems: 'center', marginLeft: '25px' }}>
                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            onClick={handleSortBtnClick}
                            defaultChecked={isAsc ? 'checked' : 'unchecked'}
                        />
                        <div style={{ fontWeight: '500' }}>Ascending</div>
                    </Form>
                </div>

                <div style={{ display: "flex", flexFlow: "column" }}>
                    {moves_history}
                </div>
            </div>
        </div>
    );
}

export default Game;