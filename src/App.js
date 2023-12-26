import React from "react";
import { Route, Routes } from "react-router-dom";
import CreatePoint from "./Components/CreatePoint";
import View from "./Components/View";

function App() {
    return (
        <>
            {/* Use the Routes component to define your routes */}
            <Routes>
                {/* Route for the main view, default path */}
                <Route path="/" element={<View />} />

                {/* Route for creating a new note */}
                <Route path="/create" element={<CreatePoint />} />
            </Routes>
        </>
    );
}

export default App;