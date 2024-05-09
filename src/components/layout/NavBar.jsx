import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logoNFLR_circle.svg";
import Tooltip from "@mui/material/Tooltip";
import TelegramIcon from '@mui/icons-material/Telegram';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import Zoom from "@mui/material/Zoom";

function NavBar({ handleSearch }) {
	const [searchQuery, setSearchQuery] = useState("");
	const location = useLocation();

	const handleChange = (e) => {
		const value = e.target.value;
		setSearchQuery(value);

		if (value.length >= 5) {
		handleSearch(value);
		} else if (value.length <= 4) {
		handleSearch("");
		}
	};
  
  	const isHomePage = location.pathname === '/';

	return (
		<nav className="navbar navbar-expand-lg sticky-top bg-black d-flex flex-wrap align-items-center justify-content-md-between px-4" data-bs-theme="dark">
			<div className="container-fluid justify-content-between">
				<a className="navbar-brand mb-2 mb-lg-0" href="https://www.nflrookiepedia.com">
					<img src={logo} alt="Logo de NFL Rookiepedia" width="40" height="40" />
					<span className="mx-3 fs-3 align-middle">NFL Rookiepedia</span>
				</a>
				<button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNflr" aria-controls="navbarNflr" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="navbar-collapse collapse" id="navbarNflr">
					<ul id="navbarstyle" className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
						<li><NavLink to="/" className="nav-link px-2">Inicio</NavLink></li>
						<li><NavLink to="/Teams" className="nav-link px-2">Equipos</NavLink></li>
						<li><NavLink to="/Superbowls" className="nav-link px-2">Super Bowls</NavLink></li>
					</ul>

					<div className="nav mb-2 mb-md-0 justify-content-center align-items-center">
						<Tooltip title="Envía tu feedback">
						<a href="https://forms.gle/ugVTiYBMzhBx3vio8" className="me-4 mb-2 mb-lg-0 social-media-icon justify-content-center align-items-center" target="_blank">
							<FeedbackOutlinedIcon
							fontSize="large"
							sx={{ color: "white" }} />
						</a>
						</Tooltip>
						
						<Tooltip title="RookieBotNFL Telegram">
						<a href="https://t.me/RookieBot_NFLRookiepedia_bot" className="me-4 mb-2 mb-lg-0 social-media-icon justify-content-center align-items-center" target="_blank">
							<TelegramIcon
							fontSize="large"
							sx={{ color: "white" }} />
						</a>
						</Tooltip>
					</div>
					
					{isHomePage && (
						<Tooltip
						title="Escribe al menos 5 caracteres"
						placement="bottom"
						TransitionComponent={Zoom}
						>
						<form className="text-end col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
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
					)}
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
