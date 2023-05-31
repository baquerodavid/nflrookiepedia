import React from "react";

function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="py-5 text-center footernfl text-white" data-bs-theme="dark">
			<div className="container">
				<p className="mb-1">
					Web realizada por{" "}
					<a href="https://davidbaquero.com/">David Baquero</a> ⓒ {year}
				</p>
			</div>
		</footer>
	);
}

export default Footer;
