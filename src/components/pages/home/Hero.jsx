import React from "react";
import logo from "../../../assets/images/logoNFLR_circle.svg";

function Hero() {
	return (
		<section className="py-5 bg-dark text-center container fw-light mw-100">
			<div className="row">
				<div className="col-md-8 mx-auto text-white">
					<img
						src={logo}
						alt="Logo de NFL Rookiepedia"
						width="100"
						height="100"
						className="mb-4"
					/>
					<h1 className="display-3 fw-bold mb-4">
						NFL Rookiepedia
					</h1>
					<h2 className="mb-4">Descubre los fundamentos esenciales para comprender y disfrutar del football. Explora los conceptos y reglas sin adentrarte en la complejidad técnica, y accede rápidamente a cualquier término.</h2>
					<p className="lead text-light mb-4">Nuestra plataforma te brinda la oportunidad de aprender y consultar sobre football desde cualquier lugar y dispositivo, ya sea que estés inmerso en un emocionante partido de la NFL o para aclarar cualquier duda.</p>
					<h3 className="text-warning">¡Sumérgete en el apasionante mundo de la NFL y domina su vocabulario con facilidad!</h3>
				</div>
			</div>
		</section>
	);
}

export default Hero;
