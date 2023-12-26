import React, { useEffect, useState } from "react";
import NoteContext from "./NoteContext";

const NoteProvider = (props) => {
    // State for managing notes
    const [notes, setNotes] = useState([]);

    // State for managing search term
    const [searchTerm, setSearchTerm] = useState("");

    // State for managing editing mode
    const [allowEditing, setAllowEditing] = useState(false);

    // Load notes from localStorage on component mount
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("notesAvailable"));
        if (data) {
            setNotes(data);
        }
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <NoteContext.Provider
            value={{
                notes,
                setNotes,
                searchTerm,
                setSearchTerm,
                allowEditing,
                setAllowEditing,
            }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteProvider;
