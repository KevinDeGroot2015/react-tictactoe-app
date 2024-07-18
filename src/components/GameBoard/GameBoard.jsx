export default function GameBoard({ onSelectSquare, board }) {
    return (
        <ol className="game-board">
            {board.map((row, rowIndex) => (
                <ol className="row" key={rowIndex}>
                    {row.map((col, colIndex) => (
                        <li className="col" key={colIndex}>
                            <button
                                onClick={() =>
                                    onSelectSquare(rowIndex, colIndex)
                                }
                                disabled={col !== null}
                            >
                                {col}
                            </button>
                        </li>
                    ))}
                </ol>
            ))}
        </ol>
    );
}
