export default function LogSheet({ logInfo }) {
    return (
        <ol className="logList">
            {logInfo.map((logItem) => (
                <li key={`${logItem.square.row}${logItem.square.col}`}>
                    {logItem.player} selected {logItem.square.row + 1},
                    {logItem.square.col + 1}
                </li>
            ))}
        </ol>
    );
}
