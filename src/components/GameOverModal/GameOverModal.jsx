export default function GameOverModal({ winner, resetFunc }) {
    return (
        <div className="game-over">
            <h2>Game over!</h2>
            {winner ? <p>{winner} won!</p> : <p>It's a draw!</p>}
            <p>
                <button onClick={resetFunc}>Restart!</button>
            </p>
        </div>
    );
}
