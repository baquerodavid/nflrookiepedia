import React from "react";
import { NavLink } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import TelegramIcon from '@mui/icons-material/Telegram';

function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="py-5 footernfl bg-black text-secondary" data-bs-theme="dark">
			<div className="container">
				<div className="row">
					<div className="col-sm-6 text-center text-sm-start">
						<p className="">ⓒ {year} NFL Rookiepedia</p>
						<p className="mb-4 mb-md-0 small">
							Diseñada y desarrollada por{" "}
							<a href="https://davidbaquero.com/" target="_blank" className="link-secondary link-offset-2">David Baquero</a>
						</p>
					</div>
					<div className="col-sm-6 text-center text-sm-end">
						<ul className="nav list-unstyled text-secondary justify-content-center justify-content-sm-end mb-2">
							<li className="nav-item ms-3"><NavLink to="/privacy-policy" className="link-secondary link-underline link-underline-opacity-0">Política de Privacidad</NavLink></li>
							<li className="nav-item ms-3 text-secondary">|</li>
							<li className="nav-item ms-3"><NavLink to="/cookies-policy" className="link-secondary link-underline link-underline-opacity-0">Cookies</NavLink></li>
						</ul>
						<Tooltip title="RookieBotNFL Telegram">
							<a href="https://t.me/RookieBot_NFLRookiepedia_bot" className="social-media-icon" target="_blank">
								<TelegramIcon
									fontSize="medium"
									sx={{ color: "white" }} />
							</a>
						</Tooltip>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;


// function Footer() {
// 	const year = new Date().getFullYear();

// 	return (
// 		<footer className="py-5 footernfl bg-black text-secondary d-flex" data-bs-theme="dark">
// 			<div className="container">
// 				<div className="d-flex justify-content-between">
// 					<p className="col-md-4 justify-content-start">ⓒ {year} NFL Rookiepedia</p>
// 					<ul className="nav col-md-4 justify-content-end list-unstyled d-flex text-secondary">
// 						<li className="nav-item ms-3"><NavLink to="/privacy-policy" className="link-secondary link-underline link-underline-opacity-0">Política de Privacidad</NavLink></li>
// 						<li className="nav-item ms-3 text-secondary">|</li>
// 						<li className="nav-item ms-3"><NavLink to="/cookies-policy" className="link-secondary link-underline link-underline-opacity-0">Cookies</NavLink></li>
// 					</ul>
// 				</div>
// 				<div className="d-flex justify-content-between">
// 					<p className="mb-1 small">
// 						Diseñada y desarrollada por{" "}
// 						<a href="https://davidbaquero.com/" target="_blank" className="link-secondary link-offset-2">David Baquero</a>
// 					</p>
// 					<Tooltip title="RookieBotNFL Telegram">
// 						<a href="https://t.me/RookieBot_NFLRookiepedia_bot" className="mb-2 mb-lg-0 social-media-icon" target="_blank">
// 							<TelegramIcon
// 								fontSize="medium"
// 								sx={{ color: "white" }} />
// 						</a>
// 					</Tooltip>
// 				</div>
// 			</div>
// 		</footer>
// 	);
// }

// export default Footer;