export const PLAYERS = {
    X: 'Player 1',
    O: 'Player 2'
};

export const INITIAL_GAMEBOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export const WINNING_COMBS = [
    [
        { row: 0, col: 0 },
        { row: 0, col: 1 },
        { row: 0, col: 2 },
    ],
    [
        { row: 1, col: 0 },
        { row: 1, col: 1 },
        { row: 1, col: 2 },
    ],
    [
        { row: 2, col: 0 },
        { row: 2, col: 1 },
        { row: 2, col: 2 },
    ],
    [
        { row: 0, col: 0 },
        { row: 1, col: 0 },
        { row: 2, col: 0 },
    ],
    [
        { row: 0, col: 1 },
        { row: 1, col: 1 },
        { row: 2, col: 1 },
    ],
    [
        { row: 0, col: 2 },
        { row: 1, col: 2 },
        { row: 2, col: 2 },
    ],
    [
        { row: 0, col: 0 },
        { row: 1, col: 1 },
        { row: 2, col: 2 },
    ],
    [
        { row: 0, col: 2 },
        { row: 1, col: 1 },
        { row: 2, col: 0 },
    ],
];
