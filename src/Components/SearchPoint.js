import React, { useContext } from "react";
import NoteContext from "../Context/NoteContext";

function SearchPoint() {
    // Destructuring assignment for context values
    const { searchTerm, setSearchTerm, allowEditing } = useContext(NoteContext);

    return (
        <>
            {!allowEditing && (
                <div className="searchPoint">
                    {/* Input for searching notes */}
                    <input
                        type="search"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            )}
        </>
    );
}

export default SearchPoint;
