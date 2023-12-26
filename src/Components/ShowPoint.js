import React, { useContext, useState } from "react";
import NoteContext from "../Context/NoteContext";

function ShowPoint() {
    // Destructuring assignment for context and state variables
    const { notes, searchTerm, setNotes, allowEditing, setAllowEditing } =
        useContext(NoteContext);

    // State variables for editing
    const [editNote, setEditNote] = useState(null);
    const [copyEditNote, setCopyEditNote] = useState(null);

    // Update the edited note and save changes
    const updateNote = () => {
        const updatedNotes = notes.map((note) =>
            note === copyEditNote ? editNote : note
        );
        setNotes(updatedNotes);
        setAllowEditing(false);
        // Update local storage with the latest notes
        localStorage.setItem("notesAvailable", JSON.stringify(updatedNotes));
    };

    // Filter notes based on the search term
    const filteredNotes = notes.filter(
        (note) =>
            note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            note.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Delete a note and update state and local storage
    const deleteNote = (note) => {
        const updatedNotes = notes.filter((n) => n !== note);
        setNotes(updatedNotes);
        localStorage.setItem("notesAvailable", JSON.stringify(updatedNotes));
    };

    // Handle click event for editing a note
    const handleEditClick = (note) => {
        setAllowEditing(true);
        setEditNote(note);
        setCopyEditNote(note);
    };

    // Handle input change for title and content
    const handleInputChange = (key, value) => {
        setEditNote({
            ...editNote,
            [key]: value,
        });
    };

    return (
        <>
            <div
                className="showNote"
                style={{ display: allowEditing ? "none" : "flex" }}>
                {!allowEditing &&
                    filteredNotes.map((note, idx) => (
                        <div className="note" key={idx}>
                            <h3>{note.title}</h3>

                            <hr />

                            <p>{note.content}</p>

                            <hr />

                            <div className="buttons">
                                <button
                                    onClick={() => handleEditClick(note)}
                                    className="editBtn">
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteNote(note)}
                                    className="deleteBtn">
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
            </div>

            {allowEditing && (
                <div className="editNote">
                    <form action="" onSubmit={updateNote}>
                        <h3>Edit A Note</h3>

                        {/* Input for editing the title */}
                        <label htmlFor="title">Title: </label>
                        <input
                            type="text"
                            id="title"
                            value={editNote.title}
                            onChange={(e) =>
                                handleInputChange("title", e.target.value)
                            }
                        />

                        <label htmlFor="content">Content: </label>
                        <textarea
                            name=""
                            id="content"
                            value={editNote.content}
                            onChange={(e) =>
                                handleInputChange("content", e.target.value)
                            }></textarea>

                        {/* Save button to submit the edited note */}
                        <button type="submit">Save</button>

                        {/* Delete button to delete the edited note */}
                        <button onClick={() => deleteNote(copyEditNote)}>
                            Delete
                        </button>

                        {/* Cancel button to cancel the editing mode */}
                        <button onClick={() => setAllowEditing(false)}>
                            Cancel
                        </button>
                    </form>
                </div>
            )}
        </>
    );
}

export default ShowPoint;
