import React from "react";
import logo from "../assets/images/logoNFLR_circle.svg";
// import { styled, alpha } from "@mui/material/styles";
// import InputBase from "@mui/material/InputBase";
// import SearchIcon from "@mui/icons-material/Search";

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
// 	color: "inherit",
// 	"& .MuiInputBase-input": {
// 		padding: theme.spacing(1, 1, 1, 0),
// 		// vertical padding + font size from searchIcon
// 		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
// 		transition: theme.transitions.create("width"),
// 		width: "100%",
// 		[theme.breakpoints.up("sm")]: {
// 			width: "12ch",
// 			"&:focus": {
// 				width: "20ch"
// 			}
// 		}
// 	}
// }));

function AppBar() {
	return (
		<nav className="navbar sticky-top appbarnfl bg-black" data-bs-theme="dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					<img src={logo} alt="Logo de NFL Rookiepedia" width="40" height="40"  />
					<span className="ms-3 fs-4">NFL Rookiepedia</span>
				</a>
				{/* <form className="d-flex" role="search">
					{
						// <StyledInputBase
						// 	className="form-control me-2 form-control-dark text-bg-dark"
						// 	placeholder="Buscar…"
						// 	inputProps={{ "aria-label": "search" }}
						// />

						<input
							className="form-control me-2 form-control-dark text-bg-dark"
							type="search"
							placeholder="Buscar"
							aria-label="Search"
						/>
					}
					<button className="btn btn-outline-light" type="submit">
						Buscar
					</button>
				</form> */}
			</div>
		</nav>
	);
}

export default AppBar;
