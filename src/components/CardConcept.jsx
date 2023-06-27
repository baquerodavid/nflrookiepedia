import React, { useState, useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import Airtable from 'airtable';
import { marked } from 'marked';
import ModalRookiepedia from "./ModalRookiepedia";
import SkeletonCard from "./SkeletonCard";

function CardConcept({ searchTerm }) {
	const [records, setRecords] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const base = new Airtable({ apiKey: process.env.REACT_APP_ROOKIEPEDIA_APITOKEN }).base(process.env.REACT_APP_ROOKIEPEDIA_BASEID);

		base(process.env.REACT_APP_ROOKIEPEDIA_TABLENAME)
			.select({
				// Add any necessary filters, sorting options, or other parameters here
				sort: [{ field: "cardtitle" }]
			})
			.eachPage((records, fetchNextPage) => {
				setRecords((prevRecords) => [...prevRecords, ...records]);
				fetchNextPage();
			}, (err) => {
				if (err) {
					console.error('Error retrieving records:', err);
				}
				setIsLoading(false); // Set isLoading to false when data fetching is completed
			});
	}, []);

	const filteredRecords = records.filter((record) => {
		const { cardheader, cardtitle, description } = record.fields;
		const searchString = `${cardheader.toLowerCase()} ${cardtitle.toLowerCase()} ${description.toLowerCase()}`;
		return searchString.includes(searchTerm.toLowerCase());
	});

	return (
		<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
			{isLoading ? (
				// Render skeleton components while loading
				<>
					<SkeletonCard />
				</>
			) : (
				filteredRecords.length > 0 ? (
					filteredRecords.map((record) => (
						<div className="col" key={record.id}>
							<div className="card border-secondary mb-3 zoomcard fadeincard bgcardnfl h-100">
								<Tooltip
									title="Término en inglés"
									placement="top-start"
									TransitionComponent={Zoom}
								>
									<div className="card-header">{record.fields.cardheader}</div>
								</Tooltip>
								<div className="card-body">
									<h5 className="card-title"><strong>{record.fields.cardtitle}</strong></h5>
									<div className="card-text cardtextnfl" dangerouslySetInnerHTML={{ __html: marked(record.fields.description.substring(0, 80) + "...") }}></div>
									<ModalRookiepedia cardTitle={record.fields.cardtitle} description={record.fields.description} />
								</div>
							</div>
						</div>
					))
				) : (
						<div className="g-0 mx-auto">
							<div className="alert alert-light border-secondary fadeincard">
									<h4 className="card-title text-center text-black lh-base">🏈 Sin resultados. Inténtalo con otra búsqueda, por favor 🏈</h4>
							</div>
						</div>
				)
			)}
		</div>
	);
}

export default CardConcept;
