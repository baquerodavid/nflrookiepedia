import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Teams from "./pages/teams/Teams";
import Superbowls from "./pages/superbowls/Superbowls";
import Glossary from "./pages/glossary/Glossary";
import Formations from "./pages/formations/Formations";
import CookiesPolicy from "./pages/legal/CookiesPolicy";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";

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
                    <Route path="/teams" element={<Teams />} />
                    <Route path="/superbowls" element={<Superbowls />} />
                    <Route path="/glossary" element={<Glossary />} />
                    <Route path="/formations" element={<Formations />} />
                    <Route path="/cookies-policy" element={<CookiesPolicy />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
