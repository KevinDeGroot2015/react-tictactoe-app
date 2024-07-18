export default function LogSheet({ logInfo }) {
    return (
        <ol className="logList">
            <li><h2>Who did what ?</h2></li>
            {logInfo.map((logItem) => (
                <li key={`${logItem.square.row}${logItem.square.col}`}>
                    {logItem.player} selected {logItem.square.row + 1},
                    {logItem.square.col + 1}
                </li>
            ))}
        </ol>
    );
}
