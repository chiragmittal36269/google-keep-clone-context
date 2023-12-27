import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "../Context/NoteContext";

function CreatePoint() {
    // Hook for navigation
    const navigate = useNavigate();

    // Destructuring assignment for context values
    let { notes, setNotes } = useContext(NoteContext);

    // State for managing the new note
    const [newNote, setNewNotes] = useState({
        title: "",
        content: "",
    });

    // Handle input change for the new note
    function handleChange(e) {
        setNewNotes({
            ...newNote,
            [e.target.name]: e.target.value,
        });
    }

    // Handle form submission
    function handleSubmit(e) {
        e.preventDefault();
        const updatedNotes = [...notes, newNote];
        setNotes(updatedNotes);
        localStorage.setItem("notesAvailable", JSON.stringify(updatedNotes));
        setNewNotes({ title: "", content: "" });
        navigate("/");
    }

    function handleCancel() {
        setNewNotes({ title: "", content: "" });
        navigate("/");
    }

    return (
        <React.Fragment>
            <form action="" onSubmit={handleSubmit}>
                <h3>Create A Note</h3>

                {/* Input for the title */}
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={newNote.title}
                    onChange={handleChange}
                    required
                    placeholder="Enter title"
                />

                {/* Input for the content */}
                <label htmlFor="content">Content</label>
                <textarea
                    name="content"
                    id="content"
                    value={newNote.content}
                    onChange={handleChange}
                    required
                    placeholder="Enter your note..."></textarea>

                <div className="buttons">
                    {/* Save button */}
                    <button type="submit">Save</button>

                    {/* Reset button */}
                    <button
                        type="reset"
                        onClick={() => setNewNotes({ title: "", content: "" })}>
                        Reset
                    </button>

                    {/* Cancel button */}
                    <button type="button" onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
            </form>

            {/* Button for navigating back to the main view */}
            <button className="searchBtn" onClick={() => navigate("/")}>
                +
            </button>
        </React.Fragment>
    );
}

export default CreatePoint;
