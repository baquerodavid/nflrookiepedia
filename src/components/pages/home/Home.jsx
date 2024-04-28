import React from "react";
import Hero from "./Hero";
import BannerGoTeams from "./BannerGoTeams";
import CardConcept from "./CardConcept";
import ScrollToTopButton from "../../ScrollToTopButton";

function Home({ searchTerm, handleSearch }) {
	const handleSearchLocal = (value) => {
		handleSearch(value); // Pass the search term to the parent component
	};

	return (
		<div>
			<ScrollToTopButton />
			<Hero />
			<BannerGoTeams />
			<div className="my-5 bgnfl">
				<div className="container">
					<CardConcept searchTerm={searchTerm} />
				</div>
			</div>
		</div>
	);
}

export default Home;
