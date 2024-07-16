import { useState } from "react";

export default function Player({ name, symbol, isActive }) {
    const [editplayerName, setEditPlayerName] = useState(name);
    const [editButton, setEditButton] = useState(false);

    const onInputChangeHandler = (input) => {
        setEditPlayerName(input.target.value);
    };

    return (
        <>
            <div className={isActive ? "player active" : "player"}>
                {!editButton ? (
                    <span className="player-name">{editplayerName}</span>
                ) : (
                    <input
                        type="text"
                        placeholder={editplayerName}
                        onChange={onInputChangeHandler}
                    />
                )}
                <span className="player-symbol">{symbol}</span>
            </div>
            <button
                onClick={() => {
                    setEditButton(!editButton);
                }}
            >
                {editButton ? "Save" : "Edit"}
            </button>
            {editButton}
        </>
    );
}
