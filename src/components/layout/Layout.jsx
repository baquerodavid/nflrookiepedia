import React from "react";
import NavBar from "./NavBar";
import SecondaryFooterTeams from "./SecondaryFooterTeams";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout({ handleSearch }) {
    return (
        <>
            <NavBar handleSearch={handleSearch} />
            <main>
                <Outlet />
            </main>
            <SecondaryFooterTeams />
            <Footer />
        </>
    );
}

export default Layout;
