import React from "react";
import AppBar from "./AppBar";
import Hero from "./Hero";
import CardConcept from "./CardConcept";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";

function App() {
	return (
		<div>
			<ScrollToTopButton />
			<AppBar />
			<Hero />
			<div className="py-5 bgnfl">
				<div className="container">
						<CardConcept />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
