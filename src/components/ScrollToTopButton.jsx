import React, { useState, useEffect } from "react";
import Fab from "@mui/material/Fab";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Tooltip from "@mui/material/Tooltip";

const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > 20) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};

	return (
		<Tooltip title="Volver arriba">
			<Fab
				onClick={scrollToTop}
				id="topBtn"
				style={{ display: isVisible ? "block" : "none" }}
				size="small"
				aria-label="Back to top"
			>
				<ArrowUpwardIcon />
			</Fab>
		</Tooltip>
	);
};

export default ScrollToTopButton;
