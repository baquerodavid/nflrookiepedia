import React from "react";

function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="py-5 footernfl bg-black text-secondary d-flex" data-bs-theme="dark">
			<div className="container">
				<div className="d-flex justify-content-between">
					<p className="col-md-4 justify-content-start">ⓒ {year} NFL Rookiepedia</p>
					<ul className="nav col-md-4 justify-content-end list-unstyled d-flex text-secondary">
						<li className="nav-item ms-3"><a href="https://platform.illow.io/#/policy/privacy/39b2b52c-077b-4b0d-af7e-59ba3eabb11d?lng=es" className="link-secondary link-underline link-underline-opacity-0">Política de Privacidad</a></li>
						<li className="nav-item ms-3 text-secondary">|</li>
						<li className="nav-item ms-3 "><a href="https://platform.illow.io/#/policy/cookie/39b2b52c-077b-4b0d-af7e-59ba3eabb11d?lng=es" className="link-secondary link-underline link-underline-opacity-0">Cookies</a></li>
					</ul>
				</div>
				<div className="d-flex">
					<p className="mb-1 small">
					Diseñada y desarrollada por{" "}
						<a href="https://davidbaquero.com/" target="_blank" className="link-secondary link-offset-2">David Baquero</a> 
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
