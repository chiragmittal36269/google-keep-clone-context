import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "../Context/NoteContext";
import SearchPoint from "./SearchPoint";
import ShowPoint from "./ShowPoint";

function View() {
    const navigate = useNavigate();

    const { notes } = useContext(NoteContext);

    return (
        <>
            {notes.length === 0 ? (
                <>
                    <h1>No Notes</h1>
                    <button
                        className="createBtn"
                        onClick={() => navigate("/create")}>
                        +
                    </button>
                </>
            ) : (
                <>
                    {/* Component for searching notes */}
                    <SearchPoint />

                    {/* Component for displaying and managing notes */}
                    <ShowPoint />

                    {/* Button for creating a new note */}
                    <button
                        className="createBtn"
                        onClick={() => navigate("/create")}>
                        +
                    </button>
                </>
            )}
        </>
    );
}

export default View;
