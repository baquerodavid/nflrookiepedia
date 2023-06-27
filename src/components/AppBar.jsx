import React, { useState } from "react";
import logo from "../assets/images/logoNFLR_circle.svg";
import CountdownTimer from "./CountdownTimer";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";

function AppBar({ handleSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.length >= 5) {
      handleSearch(value);
    } else if (value.length <= 4) {
      handleSearch("");
    }
  };

  return (
    <nav className="navbar sticky-top appbarnfl bg-black" data-bs-theme="dark">
      <div className="container-fluid justify-content-between">
        <a className="navbar-brand d-inline" href="https://www.nflrookiepedia.com">
          <img src={logo} alt="Logo de NFL Rookiepedia" width="40" height="40" />
          <span className="ms-3 fs-4 align-middle">NFL Rookiepedia</span>
        </a>

        <CountdownTimer />

        <Tooltip
          title="Escribe al menos 5 caracteres"
          placement="bottom-start"
          TransitionComponent={Zoom}
        >
        <form className="d-flex" role="search">
          <input
            className="form-control me-2 form-control-dark text-bg-dark"
            type="search"
            placeholder="Buscar"
            aria-label="Search"
            value={searchQuery}
            onChange={handleChange}
          />
          </form>
        </Tooltip>
      </div>
    </nav>
  );
}

export default AppBar;
