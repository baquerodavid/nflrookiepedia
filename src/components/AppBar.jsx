import React, { useState } from "react";
import logo from "../assets/images/logoNFLR_circle.svg";
import telegramicon from "../assets/images/Telegram_white.svg";
import CountdownTimer from "./CountdownTimer";
import Tooltip from "@mui/material/Tooltip";
import TelegramIcon from '@mui/icons-material/Telegram';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
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
    <nav className="navbar navbar-expand-lg sticky-top bg-black d-flex flex-wrap align-items-center justify-content-md-between px-4" data-bs-theme="dark">
      <div className="container-fluid justify-content-between">
      <a className="navbar-brand mb-2 mb-lg-0" href="https://www.nflrookiepedia.com">
          <img src={logo} alt="Logo de NFL Rookiepedia" width="40" height="40" />
          <span className="ms-3 fs-4 align-middle">NFL Rookiepedia</span>
      </a>
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNflr" aria-controls="navbarNflr" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
        <div className="navbar-collapse collapse justify-content-end" id="navbarNflr">
        <CountdownTimer />

          <Tooltip title="Envía tu feedback">
            <a href="https://forms.gle/ugVTiYBMzhBx3vio8" className="me-4 mb-2 mb-lg-0 social-media-icon" target="_blank">
              <FeedbackOutlinedIcon
                fontSize="large"
                sx={{ color: "white" }} />
            </a>
          </Tooltip>
          
          <Tooltip title="RookieBotNFL Telegram">
            <a href="https://t.me/RookieBot_NFLRookiepedia_bot" className="me-4 mb-2 mb-lg-0 social-media-icon" target="_blank">
              <TelegramIcon
                fontSize="large"
                sx={{ color: "white" }} />
              {/* <img className="me-sm-4 mb-2 mb-lg-0 social-media-icon" src={telegramicon} alt="RookieBotNFL en Telegram" width="32" height="32" /> */}
          </a>
          </Tooltip>

        <Tooltip
          title="Escribe al menos 5 caracteres"
          placement="bottom"
          TransitionComponent={Zoom}
        >
            <form className="text-end mb-sm-2 mb-lg-0" role="search">
          <input
            className="form-control me-2 form-control-dark text-bg-dark"
            id="search-field"
            type="search"
            placeholder="Buscar"
            aria-label="Search"
            value={searchQuery}
            onChange={handleChange}
          />
          </form>
        </Tooltip>
        </div>
      </div>
    </nav>
  );
}

export default AppBar;
