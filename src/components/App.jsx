import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Teams from "./pages/teams/Teams";

function App() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (value) => {
        setSearchTerm(value);
    };

    return (
        <Router>
            <Routes>
                <Route element={<Layout handleSearch={handleSearch} />}>
                    <Route path="/" element={<Home searchTerm={searchTerm} handleSearch={handleSearch} />} />
                    <Route path="/Teams" element={<Teams />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
