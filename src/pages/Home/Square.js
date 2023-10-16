import "./styles.css"


function Square({ value, isHighLight, onSquareClick }) {

    console.log(isHighLight)

    return (
        <button
            className="square hover_style"
            onClick={onSquareClick}
            style={isHighLight == true ? { backgroundColor: '#2596be' } : {}}
        >
            {value}
        </button>
    );
}

export default Square;