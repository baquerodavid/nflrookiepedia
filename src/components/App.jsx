import React, { useState } from "react";
import AppBar from "./AppBar";
import Hero from "./Hero";
import BannerTeams from "./BannerTeams";
import CardConcept from "./CardConcept";
import Teams from "./Teams";
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
			<BannerTeams />
			<div className="py-5 bgnfl">
				<div className="container">
					<CardConcept searchTerm={searchTerm} />
				</div>
			</div>
			<Teams />
			<Footer />
		</div>
	);
}

export default App;
