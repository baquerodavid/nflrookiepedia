import React, { useState } from "react";
import AppBar from "./AppBar";
import Hero from "./Hero";
import CardConcept from "./CardConcept";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";

function App() {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = (value) => {
		setSearchTerm(value);
	};

	return (
		<div>
			<ScrollToTopButton />
			<AppBar handleSearch={handleSearch} />
			<Hero />
			<div className="py-5 bgnfl">
				<div className="container">
					<CardConcept searchTerm={searchTerm} />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
