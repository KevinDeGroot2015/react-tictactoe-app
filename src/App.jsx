import { useState } from "react";
import GameBoard from "./components/Gameboard/Gameboard";
import Player from "./components/Player/Player";
import LogSheet from "./components/LogSheet/LogSheet";
import { WINNING_COMBS, INITIAL_GAMEBOARD, PLAYERS } from "./assets/data";
import GameOverModal from "./components/GameOverModal/GameOverModal";

function globalActivePlayer(gameTurns) {
    let currentPlayer = "X";

    if (gameTurns.length > 0 && gameTurns[0].player === "X") {
        currentPlayer = "O";
    }

    return currentPlayer;
}

function globalActiveWinner(gameBoard) {
    let winner;

    for (const combination of WINNING_COMBS) {
        const firstChecker = gameBoard[combination[0].row][combination[0].col];
        const secondChecker = gameBoard[combination[1].row][combination[1].col];
        const thirdChecker = gameBoard[combination[2].row][combination[2].col];

        if (
            firstChecker &&
            firstChecker === secondChecker &&
            firstChecker === thirdChecker
        ) {
            winner = firstChecker;
        }
    }

    return winner;
}

function globalgameBoard(gameTurns) {
    let gameBoard = [...INITIAL_GAMEBOARD.map((array) => [...array])];

    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    return gameBoard;
}

export default function App() {
    const [gameTurns, setGameTurns] = useState([]);
    const activePlayer = globalActivePlayer(gameTurns);
    const gameBoard = globalgameBoard(gameTurns);
    const winner = globalActiveWinner(gameBoard);

    let draw = gameTurns.length === 9 && !winner;

    function handleSelectActivePlayer(rowIndex, colIndex) {
        setGameTurns((prevTurns) => {
            const currentPlayer = globalActivePlayer(prevTurns);
            const updatedTurns = [
                {
                    square: { row: rowIndex, col: colIndex },
                    player: currentPlayer,
                },
                ...prevTurns,
            ];
            return updatedTurns;
        });
    }

    function handleResetGame() {
        setGameTurns([]);
    }

    return (
        <main>
            <div className="game-container highlight-player">
                <div className="players">
                    <Player
                        name={PLAYERS.X}
                        symbol="X"
                        isActive={activePlayer === "X"}
                    />
                    <Player
                        name={PLAYERS.O}
                        symbol="O"
                        isActive={activePlayer === "O"}
                    />
                </div>
                {(winner || draw) && (
                    <GameOverModal
                        resetFunc={handleResetGame}
                        winner={winner}
                    />
                )}
                <GameBoard
                    onSelectSquare={handleSelectActivePlayer}
                    board={gameBoard}
                />
                <LogSheet logInfo={gameTurns} />
            </div>

        </main>
    );
}
